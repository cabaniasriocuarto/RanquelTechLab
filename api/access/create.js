/**
 * Vercel Serverless Function
 * Endpoint: POST /api/access/create
 *
 * Uso: Google Apps Script (gratis) llama a este endpoint cuando se crea un turno,
 * para generar un link seguro (access code) y crear una sala Daily única por evento.
 *
 * Seguridad:
 * - Requiere header: X-RTL-ADMIN = ACCESS_ADMIN_KEY
 *
 * Env vars en Vercel:
 * - DAILY_API_KEY          (obligatoria)
 * - DAILY_DOMAIN           (ej: ranquel) -> se normaliza
 * - ACCESS_TOKEN_SECRET    (obligatoria) firma access
 * - ACCESS_ADMIN_KEY       (obligatoria) protege este endpoint
 * - OWNER_EMAIL            (opcional) para el mail/host
 * - SITE_URL               (opcional) para armar links (si no, usa origen del request)
 */

const crypto = require('crypto');

function b64urlEncode(buf) {
  return Buffer.from(buf)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function normalizeDailyDomain(v) {
  if (!v) return 'ranquel';
  let s = String(v).trim();
  s = s.replace(/^https?:\/\//i, '');
  s = s.split('/')[0];
  s = s.replace(/\.daily\.co$/i, '');
  s = s.replace(/\.$/, '');
  return s || 'ranquel';
}

function safeRoomName(eventId) {
  const raw = String(eventId || '').trim();
  // EventId de Google suele ser alfanumérico con guiones/guiones bajos.
  const cleaned = raw.toLowerCase().replace(/[^a-z0-9_-]/g, '');
  const tail = cleaned.slice(-24) || String(Date.now());
  return `rtl-${tail}`.slice(0, 64);
}

function signAccess(payload, secret) {
  const payloadB64 = b64urlEncode(Buffer.from(JSON.stringify(payload), 'utf8'));
  const sig = crypto.createHmac('sha256', secret).update(payloadB64).digest();
  const sigB64 = b64urlEncode(sig);
  return `${payloadB64}.${sigB64}`;
}

async function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
  });
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      return;
    }

    const DAILY_API_KEY = process.env.DAILY_API_KEY;
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
    const ACCESS_ADMIN_KEY = process.env.ACCESS_ADMIN_KEY;

    if (!DAILY_API_KEY || !ACCESS_TOKEN_SECRET || !ACCESS_ADMIN_KEY) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        error: 'Missing env vars',
        required: ['DAILY_API_KEY', 'ACCESS_TOKEN_SECRET', 'ACCESS_ADMIN_KEY'],
      }));
      return;
    }

    const headerKey = (req.headers['x-rtl-admin'] || '').toString().trim();
    if (!headerKey || headerKey !== ACCESS_ADMIN_KEY) {
      res.statusCode = 401;
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }

    const DAILY_DOMAIN = normalizeDailyDomain(process.env.DAILY_DOMAIN || 'ranquel');
    const origin = (process.env.SITE_URL || `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`).replace(/\/$/, '');

    const body = await readJson(req);

    const eventId = String(body.eventId || '').trim();
    const attendeeEmail = String(body.attendeeEmail || '').trim();
    const attendeeName = String(body.attendeeName || '').trim();

    const start = Number(body.start || 0); // epoch seconds
    const end = Number(body.end || 0);     // epoch seconds

    if (!eventId || !attendeeEmail || !start || !end) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing fields', required: ['eventId', 'attendeeEmail', 'start', 'end'] }));
      return;
    }

    const room = safeRoomName(eventId);

    // 1) Crear sala Daily (privada)
    // Si ya existe, Daily devuelve 409; lo tratamos como OK.
    const roomBody = {
      name: room,
      privacy: 'private',
      properties: {
        enable_prejoin_ui: true,
        // exp de la sala: 24h después del fin del turno
        exp: end + 24 * 60 * 60,
      },
    };

    const roomResp = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DAILY_API_KEY}`,
      },
      body: JSON.stringify(roomBody),
    });

    if (!roomResp.ok && roomResp.status !== 409) {
      let details = {};
      try { details = await roomResp.json(); } catch (_) {}
      res.statusCode = roomResp.status || 502;
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Daily room create failed', details }));
      return;
    }

    // 2) Crear access codes (guest/host)
    const now = Math.floor(Date.now() / 1000);
    const exp = Math.min(end + 3 * 60 * 60, now + 48 * 60 * 60); // hasta 48h

    const guestPayload = {
      v: 1,
      role: 'guest',
      room,
      eventId,
      attendeeEmail,
      attendeeName,
      start,
      end,
      exp,
      iat: now,
    };

    const hostPayload = {
      v: 1,
      role: 'host',
      room,
      eventId,
      attendeeEmail,
      attendeeName,
      start,
      end,
      exp,
      iat: now,
    };

    const guestAccess = signAccess(guestPayload, ACCESS_TOKEN_SECRET);
    const hostAccess = signAccess(hostPayload, ACCESS_TOKEN_SECRET);

    const joinUrlGuest = `${origin}/videollamada.html?access=${encodeURIComponent(guestAccess)}`;
    const joinUrlHost = `${origin}/videollamada.html?access=${encodeURIComponent(hostAccess)}&host=1`;

    res.statusCode = 200;
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      ok: true,
      dailyDomain: DAILY_DOMAIN,
      room,
      exp,
      joinUrlGuest,
      joinUrlHost,
    }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Server error', details: String(err) }));
  }
};
