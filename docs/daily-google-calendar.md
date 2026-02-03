# Automatización Pro: Google Calendar (turnero) + Daily (videollamadas)

Este instructivo es **opcional**. La web ya permite:
- Reservar en Google Calendar (iframe)
- Entrar a una sala Daily desde la misma web (embed)

La automatización Pro hace esto:
1) Se crea un evento nuevo en tu Google Calendar (por el turnero de "Appointment scheduling")
2) Un script crea una **sala única** en Daily
3) Inserta el link en el evento (Location/Description)
4) El invitado recibe el email con el botón/link, y entra a:
   - `https://www.ranquel.com.ar/videollamada.html?room=...`

---

## Opción A (más simple): 1 sala fija (sin automatización)

1) En Daily, creá una sala fija (ej: `ranquel-consulta`).
2) En Google Calendar Appointment schedule, en el texto de confirmación / descripción, pegá:
   - `https://www.ranquel.com.ar/videollamada.html?room=ranquel-consulta`

✅ Pro: cero configuración.
⚠️ Contra: si algún día tenés turnos simultáneos, todos entrarían a la misma sala.

---

## Opción B (recomendada): sala única por turno con Apps Script (sin servidor)

### 1) Preparar Daily
- Tené a mano tu **API Key de Daily** (NO la pongas en la web).
- Tu dominio Daily: por ejemplo `ranquel.daily.co`.

### 2) Crear proyecto en Apps Script
1) Abrí: https://script.google.com/
2) **Nuevo proyecto**
3) Pegá el código de abajo en `Code.gs`
4) En **Project Settings** → **Script Properties** agregá:
   - `DAILY_API_KEY` = (tu key)
   - `DAILY_SUBDOMAIN` = `ranquel` (o tu subdominio)
   - `CALENDAR_ID` = `primary` (o el ID de tu calendar)
   - `SITE_BASE_URL` = `https://www.ranquel.com.ar` (o tu dominio)

### 3) Activar el trigger (cada 5 minutos)
1) En Apps Script: **Triggers** (ícono reloj)
2) **Add Trigger**
3) Elegí función: `syncNewEvents()`
4) Event source: **Time-driven**
5) Frequency: **Every 5 minutes**

### 4) Código listo (Code.gs)

> Este script busca eventos recientes y, si no tienen un link de Daily, crea uno y lo agrega.

```javascript
/**
 * Ranquel Tech Lab — Google Calendar (Appointment scheduling) + Daily
 * Crea una sala Daily única por evento y la inserta en Location/Description.
 *
 * Script Properties requeridas:
 * - DAILY_API_KEY
 * - DAILY_SUBDOMAIN  (ej: ranquel)
 * - CALENDAR_ID      (ej: primary)
 * - SITE_BASE_URL    (ej: https://www.ranquel.com.ar)
 */

function syncNewEvents() {
  const props = PropertiesService.getScriptProperties();
  const API_KEY = props.getProperty('DAILY_API_KEY');
  const SUBDOMAIN = props.getProperty('DAILY_SUBDOMAIN') || 'ranquel';
  const CAL_ID = props.getProperty('CALENDAR_ID') || 'primary';
  const SITE = props.getProperty('SITE_BASE_URL') || 'https://www.ranquel.com.ar';

  if (!API_KEY) throw new Error('Falta DAILY_API_KEY en Script Properties.');

  const now = new Date();
  const lookBackMin = 60;           // mira eventos creados/modificados en la última hora
  const lookAheadDays = 30;         // y próximos 30 días

  // Ventana de búsqueda
  const start = new Date(now.getTime() - lookBackMin * 60 * 1000);
  const end = new Date(now.getTime() + lookAheadDays * 24 * 60 * 60 * 1000);

  const cal = CalendarApp.getCalendarById(CAL_ID);
  const events = cal.getEvents(start, end);

  events.forEach(ev => {
    const desc = (ev.getDescription() || '');
    const loc = (ev.getLocation() || '');

    // Si ya tiene Daily, salteamos
    if (desc.includes('daily.co') || loc.includes('daily.co')) return;

    // Nombre de sala: basado en fecha/hora + hash simple
    const t = ev.getStartTime();
    const stamp = Utilities.formatDate(t, Session.getScriptTimeZone(), 'yyyyMMdd_HHmm');
    const baseName = `rtl_${stamp}_${simpleHash_(ev.getId()).slice(0, 6)}`;

    // Crear sala Daily
    const dailyUrl = createDailyRoom_(API_KEY, baseName, {
      // Ajustes útiles
      enable_knocking: true,
      start_audio_off: false,
      start_video_off: false,
      exp: Math.floor((t.getTime() + 3 * 60 * 60 * 1000) / 1000), // expira 3h después del inicio
    });

    // Link embebido en tu web
    const joinUrl = `${SITE}/videollamada.html?room=${encodeURIComponent(baseName)}`;

    const extra = `\n\n—\n✅ Videollamada (desde la web)\n${joinUrl}\n\n✅ Link directo Daily\n${dailyUrl}\n`;

    ev.setLocation(dailyUrl);
    ev.setDescription((desc + extra).trim());
  });
}

function createDailyRoom_(apiKey, roomName, properties) {
  const url = 'https://api.daily.co/v1/rooms';
  const payload = {
    name: roomName,
    properties: properties || {}
  };

  const res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: { Authorization: 'Bearer ' + apiKey },
    muteHttpExceptions: true
  });

  const code = res.getResponseCode();
  const body = res.getContentText();
  if (code < 200 || code >= 300) {
    throw new Error('Daily API error ' + code + ': ' + body);
  }

  const json = JSON.parse(body);
  return json.url; // https://subdomain.daily.co/roomName
}

function simpleHash_(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return ('00000000' + h.toString(16)).slice(-8);
}
```

### 5) Qué vas a ver cuando funcione
- El evento del turno en Calendar va a tener:
  - **Location:** link de Daily
  - **Description:** link a tu web `videollamada.html?room=...` + link directo Daily

---

## Recomendación
- Si estás arrancando: **Opción A (sala fija)**.
- Si querés hacerlo profesional y sin choques de turnos: **Opción B (Apps Script + sala única)**.
