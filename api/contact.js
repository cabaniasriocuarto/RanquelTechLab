/**
 * Vercel Serverless Function
 * Endpoint: POST /api/contact
 *
 * Recibe solicitudes del asistente, valida los datos y las entrega una sola vez
 * a FormSubmit desde el servidor. El navegador obtiene una respuesta verificable.
 */

const DESTINATION_EMAIL = 'ranqueltechlab@gmail.com';
const SOURCE_URL = 'https://www.ranquel.com.ar/';
const REQUEST_TIMEOUT_MS = 12000;

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

async function readJson(req) {
  const declaredLength = Number(req.headers['content-length'] || 0);
  if (Number.isFinite(declaredLength) && declaredLength > 12000) {
    throw new Error('Payload too large');
  }

  if (req.body && typeof req.body === 'object') {
    if (JSON.stringify(req.body).length > 12000) throw new Error('Payload too large');
    return req.body;
  }

  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 12000) reject(new Error('Payload too large'));
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function isSameOriginRequest(req) {
  const origin = clean(req.headers.origin, 500);
  if (!origin) return false;

  try {
    const originHost = new URL(origin).host;
    const requestHost = clean(req.headers['x-forwarded-host'] || req.headers.host, 500);
    return originHost === requestHost;
  } catch (_) {
    return false;
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  if (!isSameOriginRequest(req)) {
    sendJson(res, 403, { ok: false, error: 'Forbidden' });
    return;
  }

  let body;
  try {
    body = await readJson(req);
  } catch (_) {
    sendJson(res, 400, { ok: false, error: 'Invalid request' });
    return;
  }

  // Campo trampa para envíos automatizados; debe permanecer vacío.
  if (clean(body.website, 200)) {
    sendJson(res, 200, { ok: true });
    return;
  }

  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 254),
    phone: clean(body.phone, 40),
    projectType: clean(body.projectType, 120),
    message: clean(body.message, 2500),
    channel: clean(body.channel, 40),
    calendarLink: clean(body.calendar_link, 500),
  };

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const phoneDigits = lead.phone.replace(/\D/g, '');
  const phoneIsValid = /^[+()0-9\s.-]+$/.test(lead.phone)
    && phoneDigits.length >= 7
    && phoneDigits.length <= 18;

  if (lead.name.length < 2 || !emailIsValid || !phoneIsValid || !lead.projectType || lead.message.length < 6) {
    sendJson(res, 400, { ok: false, error: 'Invalid contact details' });
    return;
  }

  const observations = `${lead.message} | Canal: ${lead.channel || 'N/A'} | Calendario: ${lead.calendarLink || 'N/A'}`;
  const upstreamPayload = {
    nombre: lead.name,
    whatsapp: lead.phone,
    email: lead.email,
    presupuesto: lead.projectType,
    observaciones: observations,
    _subject: 'Nuevo presupuesto desde el asistente web',
    _captcha: 'false',
    _template: 'table',
    _url: SOURCE_URL,
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const upstream = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Referer: SOURCE_URL,
      },
      body: JSON.stringify(upstreamPayload),
      signal: controller.signal,
    });

    let result = null;
    try { result = await upstream.json(); } catch (_) {}

    const upstreamAccepted = upstream.ok
      && (result?.success === true || result?.success === 'true');
    if (!upstreamAccepted) {
      sendJson(res, 502, { ok: false, error: 'Delivery failed' });
      return;
    }

    sendJson(res, 200, { ok: true });
  } catch (error) {
    const timedOut = error?.name === 'AbortError';
    sendJson(res, timedOut ? 504 : 502, {
      ok: false,
      error: timedOut ? 'Delivery timeout' : 'Delivery failed',
    });
  } finally {
    clearTimeout(timeout);
  }
};
