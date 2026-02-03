/**
 * Vercel Serverless Function
 * Endpoint: /api/daily/token?access=ACCESS_CODE
 *
 * Seguridad V6:
 * - NO entrega token Daily si no se presenta un access code válido.
 * - El access code lo genera /api/access/create (invocado por Google Apps Script).
 *
 * Env vars en Vercel:
 * - DAILY_API_KEY          (obligatoria)
 * - DAILY_DOMAIN           (ej: ranquel)  -> se normaliza
 * - ACCESS_TOKEN_SECRET    (obligatoria)
 */

const crypto = require('crypto');

function b64urlEncode(buf) {
  return Buffer.from(buf)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function b64urlDecodeToBuffer(str) {
  const s = String(str).replace(/-/g, '+').replace(/_/g, '/');
  const pad = s.length % 4;
  const padded = pad ? s + '='.repeat(4 - pad) : s;
  return Buffer.from(padded, 'base64');
}

function normalizeDailyDomain(v) {
  if (!v) return 'ranquel';
  let s = String(v).trim();
  // Acepta: "ranquel" | "ranquel.daily.co" | "https://ranquel.daily.co/"
  s = s.replace(/^https?:\/\//i, '');
  s = s.split('/')[0];
  s = s.replace(/\.daily\.co$/i, '');
  s = s.replace(/\.$/, '');
  return s || 'ranquel';
}

function timingSafeEqual(a, b) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

function verifyAccess(access, secret) {
  if (!access || typeof access !== 'string') return { ok: false, error: 'Missing access' };
  const parts = access.split('.');
  if (parts.length !== 2) return { ok: false, error: 'Invalid access format' };

  const [payloadB64, sigB64] = parts;
  if (!payloadB64 || !sigB64) return { ok: false, error: 'Invalid access format' };

  const expectedSig = b64urlEncode(
    crypto.createHmac('sha256', secret).update(payloadB64).digest()
  );

  if (!timingSafeEqual(expectedSig, sigB64)) return { ok: false, error: 'Invalid signature' };

  let payload = null;
  try {
    payload = JSON.parse(b64urlDecodeToBuffer(payloadB64).toString('utf8'));
  } catch (_) {
    return { ok: false, error: 'Invalid payload' };
  }

  // Validaciones mínimas
  const now = Math.floor(Date.now() / 1000);
  const exp = Number(payload.exp || 0);
  if (!exp || now > exp) return { ok: false, error: 'Access expired' };

  const room = String(payload.room || '').trim();
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(room)) return { ok: false, error: 'Invalid room in access' };

  const start = Number(payload.start || 0);
  const end = Number(payload.end || 0);
  // Ventana permitida: 30min antes, hasta 3h después del fin.
  if (start && end) {
    const earliest = start - 30 * 60;
    const latest = end + 3 * 60 * 60;
    if (now < earliest) return { ok: false, error: 'Too early for meeting' };
    if (now > latest) return { ok: false, error: 'Meeting window closed' };
  }

  const role = payload.role === 'host' ? 'host' : 'guest';

  return { ok: true, payload: { ...payload, role, room, start, end, exp } };
}

module.exports = async (req, res) => {
  try {
    const DAILY_API_KEY = process.env.DAILY_API_KEY;
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

    if (!DAILY_API_KEY) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing DAILY_API_KEY env var' }));
      return;
    }
    if (!ACCESS_TOKEN_SECRET) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing ACCESS_TOKEN_SECRET env var' }));
      return;
    }

    const DAILY_DOMAIN = normalizeDailyDomain(process.env.DAILY_DOMAIN || 'ranquel');

    const url = new URL(req.url, `http://${req.headers.host}`);
    const access = (url.searchParams.get('access') || '').trim();

    const verified = verifyAccess(access, ACCESS_TOKEN_SECRET);
    if (!verified.ok) {
      res.statusCode = 401;
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Unauthorized', details: verified.error }));
      return;
    }

    const { room, role, exp } = verified.payload;

    // Token Daily con expiración: mínimo entre (access exp) y +2h
    const now = Math.floor(Date.now() / 1000);
    const dailyExp = Math.min(exp, now + 2 * 60 * 60);

    const body = {
      properties: {
        room_name: room,
        is_owner: role === 'host',
        exp: dailyExp,
      },
    };

    const dailyResp = await fetch('https://api.daily.co/v1/meeting-tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DAILY_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    let data = {};
    try { data = await dailyResp.json(); } catch (_) {}

    if (!dailyResp.ok) {
      res.statusCode = dailyResp.status || 502;
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Daily API error', details: data }));
      return;
    }

    const token = data.token;
    const meetingUrl = `https://${DAILY_DOMAIN}.daily.co/${room}?t=${encodeURIComponent(token)}`;

    res.statusCode = 200;
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ room, role, token, url: meetingUrl, exp: dailyExp }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Server error', details: String(err) }));
  }
};
