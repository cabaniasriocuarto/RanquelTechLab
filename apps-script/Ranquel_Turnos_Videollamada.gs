/**
 * Ranquel Tech Lab — Turnos Google Calendar + Videollamada Daily (V7)
 *
 * OBJETIVO:
 * - Procesar únicamente turnos Ranquel explícitamente identificados.
 * - Ignorar eventos personales, all-day e invitaciones organizadas por terceros.
 * - Reintentar de forma acotada fallos transitorios de Google/Vercel.
 * - Evitar ejecuciones concurrentes del trigger.
 */

// === CONFIGURACIÓN (Script Properties) ===
// En Apps Script: Project Settings → Script properties
// - CALENDAR_ID    : id del calendario donde caen los turnos (puede ser "primary")
// - HOST_EMAIL     : email del dueño/organizador
// - SITE_URL       : ej: "https://ranquel-tech-lab-571s.vercel.app" (sin barra final)
// - ADMIN_KEY      : mismo valor que Vercel ACCESS_ADMIN_KEY
// - BOOKING_MARKER : texto estable agregado al Appointment Schedule, ej: "[RANQUEL-TURNO]"
//
// IMPORTANTE: No hace falta poner DAILY_API_KEY en Apps Script.
// IMPORTANTE: No usar datos personales dentro de BOOKING_MARKER.

function getProp_(name) {
  return PropertiesService.getScriptProperties().getProperty(name) || '';
}

function getRequiredProp_(name) {
  var value = String(getProp_(name) || '').trim();
  if (!value) {
    throw new Error('Falta Script Property obligatoria: ' + name);
  }
  return value;
}

function setProp_(name, value) {
  PropertiesService.getScriptProperties().setProperty(name, String(value));
}

function wasProcessed_(eventId) {
  return getProp_('processed_' + eventId) === '1';
}

function markProcessed_(eventId) {
  setProp_('processed_' + eventId, '1');
}

function isoToEpochSeconds_(d) {
  return Math.floor(new Date(d).getTime() / 1000);
}

function normalizeEmail_(value) {
  return String(value || '').trim().toLowerCase();
}

function isExcludedEmail_(email, hostEmail, selfEmail) {
  var normalized = normalizeEmail_(email);
  if (!normalized) return true;
  return normalized === normalizeEmail_(hostEmail) ||
    normalized === normalizeEmail_(selfEmail);
}

function pickGuestEmail_(event, hostEmail, selfEmail) {
  try {
    var guests = event.getGuestList();
    if (!guests || guests.length === 0) return '';

    for (var i = 0; i < guests.length; i++) {
      var email = (guests[i].getEmail() || '').trim();
      if (isExcludedEmail_(email, hostEmail, selfEmail)) continue;
      return email;
    }
    return '';
  } catch (e) {
    return '';
  }
}

function extractFirstEmail_(text) {
  if (!text) return '';
  var m = String(text).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return m ? m[0].trim() : '';
}

function pickGuestEmailFallback_(event, hostEmail, selfEmail) {
  var candidates = [
    extractFirstEmail_(event.getDescription && event.getDescription()),
    extractFirstEmail_(event.getTitle && event.getTitle()),
    extractFirstEmail_(event.getLocation && event.getLocation()),
  ];
  for (var i = 0; i < candidates.length; i++) {
    var email = (candidates[i] || '').trim();
    if (isExcludedEmail_(email, hostEmail, selfEmail)) continue;
    return email;
  }
  return '';
}

function getEventSearchText_(event) {
  var parts = [];
  try { parts.push(event.getTitle ? event.getTitle() : ''); } catch (_) {}
  try { parts.push(event.getDescription ? event.getDescription() : ''); } catch (_) {}
  try { parts.push(event.getLocation ? event.getLocation() : ''); } catch (_) {}
  return parts.join('\n').toLowerCase();
}

function isRanquelBookingEvent_(event, bookingMarker) {
  try {
    if (!event || !bookingMarker) return false;
    if (typeof event.isAllDayEvent !== 'function' || event.isAllDayEvent()) return false;
    if (typeof event.isOwnedByMe !== 'function' || !event.isOwnedByMe()) return false;

    var marker = String(bookingMarker).trim().toLowerCase();
    if (!marker) return false;

    return getEventSearchText_(event).indexOf(marker) !== -1;
  } catch (e) {
    return false;
  }
}

function withRetry_(label, fn, maxAttempts, shouldRetry) {
  var lastError = null;
  for (var attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return fn();
    } catch (e) {
      lastError = e;
      var retry = typeof shouldRetry === 'function' ? shouldRetry(e) : true;
      if (!retry) throw e;
      if (attempt < maxAttempts) {
        Utilities.sleep(500 * Math.pow(2, attempt - 1));
      }
    }
  }
  throw new Error(label + ': falló después de ' + maxAttempts + ' intentos');
}

function createAccess_(payload, siteUrl, adminKey) {
  var url = siteUrl.replace(/\/$/, '') + '/api/access/create';

  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
    headers: {
      'X-RTL-ADMIN': adminKey
    }
  };

  return withRetry_('Backend /api/access/create', function () {
    var resp = UrlFetchApp.fetch(url, options);
    var code = resp.getResponseCode();

    if (code < 200 || code >= 300) {
      var httpError = new Error('Backend rechazó la solicitud (HTTP ' + code + ')');
      httpError.retryable = code === 429 || code >= 500;
      throw httpError;
    }

    var data = {};
    try {
      data = JSON.parse(resp.getContentText());
    } catch (e) {
      var jsonError = new Error('Backend devolvió JSON inválido');
      jsonError.retryable = false;
      throw jsonError;
    }

    if (!data.joinUrlGuest || !data.joinUrlHost) {
      var shapeError = new Error('Backend devolvió una respuesta incompleta');
      shapeError.retryable = false;
      throw shapeError;
    }

    return data;
  }, 3, function (error) {
    return error && error.retryable !== false;
  });
}

function sendMails_(attendeeEmail, attendeeName, joinUrlGuest, joinUrlHost, startDate, hostEmail) {
  var subjectClient = 'Ranquel Tech Lab — Link seguro para tu videollamada';
  var when = Utilities.formatDate(startDate, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm') + ' hs';

  var bodyClient = '' +
    'Hola' + (attendeeName ? ' ' + attendeeName : '') + '!\n\n' +
    'Tu videollamada está agendada para: ' + when + '\n\n' +
    '✅ Entrá con este link seguro (no lo compartas):\n' + joinUrlGuest + '\n\n' +
    'Si abrís el link antes de horario puede decirte "demasiado temprano". Probá cerca del turno.\n\n' +
    'Cualquier problema respondé este mail o escribinos por WhatsApp.\n\n' +
    '— Ranquel Tech Lab';

  MailApp.sendEmail(attendeeEmail, subjectClient, bodyClient);

  var subjectHost = 'Ranquel Tech Lab — Host link (videollamada)';
  var bodyHost = '' +
    'Turno: ' + when + '\n' +
    'Cliente confirmado por el turnero Ranquel.\n\n' +
    'Link host (dueño):\n' + joinUrlHost + '\n\n' +
    '— Automatización V7';

  MailApp.sendEmail(hostEmail, subjectHost, bodyHost);
}

/**
 * FUNCIÓN PRINCIPAL
 * - Trigger time-driven (recomendado: cada 5 minutos)
 * - También se puede ejecutar manualmente para una prueba controlada
 */
function processNewAppointments() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(2000)) {
    return;
  }

  try {
    var calendarId = getRequiredProp_('CALENDAR_ID');
    var hostEmail = getRequiredProp_('HOST_EMAIL');
    var siteUrl = getRequiredProp_('SITE_URL');
    var adminKey = getRequiredProp_('ADMIN_KEY');
    var bookingMarker = getRequiredProp_('BOOKING_MARKER');

    var selfEmail = '';
    try {
      selfEmail = Session.getEffectiveUser().getEmail() || '';
    } catch (_) {}

    var cal = CalendarApp.getCalendarById(calendarId);
    if (!cal) throw new Error('No se encontró el calendario configurado');

    var now = new Date();
    var startRange = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    var endRange = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    var events = withRetry_('Lectura de Google Calendar', function () {
      return cal.getEvents(startRange, endRange);
    }, 3);

    var failures = 0;

    for (var i = 0; i < events.length; i++) {
      var ev = events[i];
      var eventId = ev.getId();

      if (wasProcessed_(eventId)) continue;
      if (!isRanquelBookingEvent_(ev, bookingMarker)) continue;

      var endDate = ev.getEndTime();
      if (endDate.getTime() <= now.getTime()) continue;

      var attendeeEmail = pickGuestEmail_(ev, hostEmail, selfEmail);
      if (!attendeeEmail) {
        attendeeEmail = pickGuestEmailFallback_(ev, hostEmail, selfEmail);
      }
      if (!attendeeEmail) continue;

      try {
        var startDate = ev.getStartTime();

        var payload = {
          eventId: eventId,
          attendeeEmail: attendeeEmail,
          attendeeName: '',
          start: isoToEpochSeconds_(startDate),
          end: isoToEpochSeconds_(endDate)
        };

        var created = createAccess_(payload, siteUrl, adminKey);

        sendMails_(
          attendeeEmail,
          payload.attendeeName,
          created.joinUrlGuest,
          created.joinUrlHost,
          startDate,
          hostEmail
        );

        markProcessed_(eventId);
      } catch (e) {
        failures++;
        Logger.log('Ranquel: falló un turno elegible; se reintentará en la próxima ejecución.');
      }
    }

    if (failures > 0) {
      throw new Error('Fallaron ' + failures + ' turnos Ranquel elegibles; se reintentará en la próxima ejecución.');
    }
  } finally {
    lock.releaseLock();
  }
}
