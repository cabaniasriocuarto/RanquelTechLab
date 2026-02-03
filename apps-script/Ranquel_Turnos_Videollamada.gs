/**
 * Ranquel Tech Lab — Turnos Google Calendar + Videollamada Daily (V6)
 *
 * OBJETIVO:
 * - Cuando entra un turno (Appointment Schedule) en tu Google Calendar,
 *   este script llama a tu backend en Vercel (/api/access/create) y envía...
 */

// === CONFIGURACIÓN (Script Properties) ===
// En Apps Script: Project Settings → Script properties
// - CALENDAR_ID    : "primary" (o el id del calendario donde cae el turno)
// - HOST_EMAIL     : tu mail (organizador) para detectar invitado real
// - SITE_URL       : ej: "https://ranquelrrueba.vercel.app" (sin barra final)
// - ADMIN_KEY      : el mismo valor que pongas en Vercel como ACCESS_ADMIN_KEY
//
// IMPORTANTE: No hace falta poner DAILY_API_KEY en Apps Script.

function getProp_(name) {
  return PropertiesService.getScriptProperties().getProperty(name) || '';
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

function pickGuestEmail_(event, hostEmail) {
  try {
    var guests = event.getGuestList();
    if (!guests || guests.length === 0) return '';

    for (var i = 0; i < guests.length; i++) {
      var email = (guests[i].getEmail() || '').trim();
      if (!email) continue;
      if (hostEmail && email.toLowerCase() === hostEmail.toLowerCase()) continue;
      return email;
    }
    // fallback: first
    return (guests[0].getEmail() || '').trim();
  } catch (e) {
    return '';
  }
}

function createAccess_(payload) {
  var siteUrl = getProp_('SITE_URL');
  var adminKey = getProp_('ADMIN_KEY');

  if (!siteUrl || !adminKey) {
    throw new Error('Faltan Script Properties: SITE_URL o ADMIN_KEY');
  }

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

  var resp = UrlFetchApp.fetch(url, options);
  var code = resp.getResponseCode();
  var txt = resp.getContentText();
  var data = {};
  try { data = JSON.parse(txt); } catch (e) {}

  if (code < 200 || code >= 300) {
    throw new Error('Backend error (' + code + '): ' + txt);
  }

  return data;
}

function sendMails_(attendeeEmail, attendeeName, joinUrlGuest, joinUrlHost, startDate, endDate) {
  var hostEmail = getProp_('HOST_EMAIL') || Session.getActiveUser().getEmail();
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

  // Mail interno al dueño
  var subjectHost = 'Ranquel Tech Lab — Host link (videollamada)';
  var bodyHost = '' +
    'Turno: ' + when + '\n' +
    'Cliente: ' + attendeeEmail + '\n\n' +
    'Link host (dueño):\n' + joinUrlHost + '\n\n' +
    '— Automatización V6';

  // Se lo manda al dueño
  MailApp.sendEmail(hostEmail, subjectHost, bodyHost);
}

/**
 * FUNCIÓN PRINCIPAL
 * - Seteá un trigger time-driven cada 5 minutos
 * - O corré manualmente para test
 */
function processNewAppointments() {
  var calendarId = getProp_('CALENDAR_ID') || 'primary';
  var hostEmail = getProp_('HOST_EMAIL');

  var cal = CalendarApp.getCalendarById(calendarId);
  if (!cal) throw new Error('No se encontró el calendario: ' + calendarId);

  // Ventana de búsqueda: últimos 2 días a próximos 30 días
  var now = new Date();
  var startRange = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  var endRange = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  var events = cal.getEvents(startRange, endRange);
  for (var i = 0; i < events.length; i++) {
    var ev = events[i];
    var eventId = ev.getId();

    // Evitar repetidos
    if (wasProcessed_(eventId)) continue;

    // Solo eventos con invitados (turnos)
    var attendeeEmail = pickGuestEmail_(ev, hostEmail);
    if (!attendeeEmail) continue;

    var startDate = ev.getStartTime();
    var endDate = ev.getEndTime();

    var payload = {
      eventId: eventId,
      attendeeEmail: attendeeEmail,
      attendeeName: '',
      start: isoToEpochSeconds_(startDate),
      end: isoToEpochSeconds_(endDate)
    };

    var created = createAccess_(payload);

    // Envía mails
    sendMails_(attendeeEmail, payload.attendeeName, created.joinUrlGuest, created.joinUrlHost, startDate, endDate);

    // Marca procesado
    markProcessed_(eventId);
  }
}
