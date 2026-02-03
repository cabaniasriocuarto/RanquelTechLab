# V6 — Turnos Google Calendar → Email con link seguro de videollamada (Daily)

Esto resuelve lo que pediste:
- El cliente **NO puede entrar** si no tiene un link/código de acceso.
- El acceso se manda por **email automático** cuando se agenda el turno.
- Daily token se genera **solo** cuando el cliente entra con ese link.

## 1) Qué vas a hacer (resumen)
1. Subís esta web a Vercel (ya lo tenés).
2. En Vercel configurás 4 variables de entorno.
3. Creás un Apps Script que mira tu Google Calendar y, cuando aparece un turno nuevo, le pide a Vercel que genere un link seguro y lo manda por email.

---

## 2) Variables en Vercel (Dashboard → Project → Settings → Environment Variables)
Cargá estas (Production + Preview):

- `DAILY_API_KEY`  → tu API key real de Daily (**NO publicarla**)
- `DAILY_DOMAIN`   → `ranquel` (porque tu dominio es `ranquel.daily.co`)
- `ACCESS_TOKEN_SECRET` → una clave larga (32+ caracteres). Generala así:
  - Abrí https://randomkeygen.com/ (o un generador similar)
  - Copiá una clave larga (64 caracteres ideal)
- `ACCESS_ADMIN_KEY` → otra clave larga distinta (32+ caracteres). Mismo método.
- (opcional) `SITE_URL` → `https://ranquelrrueba.vercel.app`

Después: **Redeploy** (o push a GitHub) para que Vercel tome las variables.

---

## 3) Crear Apps Script (paso a paso)
1) Entrá a https://script.google.com
2) Tocá **New project**
3) Borrá el código que aparece y pegá el archivo:
   `apps-script/Ranquel_Turnos_Videollamada.gs`
4) Guardá (Ctrl+S)

### 3.1) Agregar Script Properties
1) En el editor: **Project Settings** (engranaje)
2) Bajá a **Script properties** → **Add script property**
3) Agregá estas 4:

- `CALENDAR_ID` = `primary`  (si el turnero cae en tu calendario principal)
- `HOST_EMAIL` = tu email (el dueño)
- `SITE_URL` = `https://ranquelrrueba.vercel.app`  (o tu dominio final)
- `ADMIN_KEY` = el mismo valor que pusiste en Vercel como `ACCESS_ADMIN_KEY`

### 3.2) Dar permisos
1) En el editor, seleccioná la función `processNewAppointments`
2) Tocá **Run** (▶)
3) Te va a pedir permisos:
   - Aceptá para que pueda leer Calendar y enviar emails.

### 3.3) Crear el Trigger automático
1) En el panel izquierdo: **Triggers** (reloj)
2) **Add Trigger**
3) Elegí:
   - Function: `processNewAppointments`
   - Deployment: `Head`
   - Event source: `Time-driven`
   - Type: `Minutes timer`
   - Every: `5 minutes`
4) Guardá.

---

## 4) Qué recibe el cliente
- Google Calendar manda su email normal de confirmación.
- **Además**, Apps Script manda un email extra con el **link seguro**:

`https://TU_WEB/videollamada.html?access=...`

Ese `access=...` es el “token” de acceso que querías.

---

## 5) Cómo entra el dueño (vos)
En el email interno te llega un link “host” (te deja como owner).

---

## 6) Prueba rápida
1) Agendá un turno de prueba con tu propio email.
2) Esperá hasta 5 minutos.
3) Revisá email → entrá al link seguro.

Si da error “Too early”: probá 30 minutos antes del turno o más cerca.

---

## 7) Si algo falla
- Si `/api/daily/token` devuelve 401: falta el `access` o está vencido.
- Si `/api/access/create` falla: revisá `ACCESS_ADMIN_KEY` en Vercel y `ADMIN_KEY` en Apps Script.
- Si Daily falla: revisá `DAILY_API_KEY` y que tu cuenta tenga habilitado crear rooms.
