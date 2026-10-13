# V7 — Turnos Google Calendar → Email con link seguro de videollamada (Daily)

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/V6-AppsScript-Setup.md` (guía operativa de la automatización Calendar → Apps Script → Vercel/Daily)

> El nombre histórico del archivo se conserva para no romper enlaces existentes.
> Esta guía corresponde al código V7 de `apps-script/Ranquel_Turnos_Videollamada.gs`.

## 1) Qué hace

Cuando una reserva válida de Ranquel aparece en Google Calendar:

1. Apps Script identifica el evento como turno Ranquel.
2. Llama a `/api/access/create`.
3. El backend genera links seguros para invitado y host.
4. Apps Script envía el link del invitado al cliente y el link host al dueño.
5. El evento se marca como procesado solamente después de completar backend + emails.

La automatización **no debe procesar** eventos personales, eventos de día completo,
invitaciones organizadas por terceros ni eventos sin el marcador explícito de Ranquel.

## 2) Protección contra falsos turnos

La V7 usa dos límites obligatorios:

- `HOST_EMAIL`: identifica al dueño y nunca puede convertirse en email de cliente.
- `BOOKING_MARKER`: texto estable que debe existir en el título, descripción o
  ubicación del evento de reserva.

Valor recomendado:

```text
[RANQUEL-TURNO]
```

No usar nombres, emails, teléfonos ni otros datos personales dentro del marcador.

Además, el script exige que el evento:

- sea un evento con horario, no all-day;
- esté organizado/poseído por la cuenta que ejecuta el Apps Script;
- tenga `BOOKING_MARKER`;
- tenga un invitado externo distinto de `HOST_EMAIL` y del usuario efectivo.

Esto evita que invitaciones externas o eventos personales se interpreten como reservas.

## 3) Configuración de Vercel

El proyecto canónico debe tener, como mínimo:

- `DAILY_API_KEY`
- `ACCESS_TOKEN_SECRET`
- `ACCESS_ADMIN_KEY`

`DAILY_DOMAIN` y `SITE_URL` dependen de la configuración del proyecto.

Nunca copiar valores de secretos a documentación, issues, PRs o chats.

## 4) Configurar el Appointment Schedule

Antes de activar la V7, editar la página/agenda de turnos de Google Calendar y
agregar el marcador estable en un campo que Google conserve en el evento creado,
por ejemplo en el título o descripción:

```text
[RANQUEL-TURNO]
```

### Gate obligatorio

Crear después **una reserva controlada desde una cuenta externa** y comprobar en
el evento resultante que el marcador realmente aparece.

Si Google no conserva el marcador en el evento creado:

```text
BOOKING_MARKER_RUNTIME_PROOF=FAIL
```

No activar el trigger V7 hasta elegir otro atributo estable y actualizar el código
mediante una issue/PR nueva o una reparación acotada de esta misma issue si sigue abierta.

## 5) Script Properties obligatorias

En Apps Script → **Project Settings → Script properties**:

- `CALENDAR_ID` = ID del calendario donde aparecen las reservas (`primary` sólo si corresponde realmente).
- `HOST_EMAIL` = email del dueño.
- `SITE_URL` = URL del backend canónico, sin `/` final.
- `ADMIN_KEY` = mismo valor que Vercel `ACCESS_ADMIN_KEY`.
- `BOOKING_MARKER` = exactamente el marcador configurado en el Appointment Schedule.

La V7 falla cerrado si falta cualquiera de estas propiedades.

### Seguridad

`ADMIN_KEY` y `ACCESS_ADMIN_KEY` deben compararse en privado.

Registrar solamente:

```text
ADMIN_KEY_MATCH_ACCESS_ADMIN_KEY=YES
```

o:

```text
ADMIN_KEY_MATCH_ACCESS_ADMIN_KEY=NO
```

Nunca registrar los valores.

## 6) Permisos

1. Abrir Apps Script.
2. Seleccionar `processNewAppointments`.
3. Ejecutar manualmente una vez para autorizar Calendar, UrlFetch y envío de email.
4. Confirmar que el proyecto tenga un nombre reconocible, por ejemplo:
   `Ranquel Tech Lab — Turnos`.

Renombrar el proyecto no cambia la lógica, pero evita notificaciones ambiguas como
`Proyecto sin título`.

## 7) Trigger automático

Después de superar la prueba controlada:

1. Apps Script → **Triggers**.
2. Function: `processNewAppointments`.
3. Deployment: `Head`.
4. Event source: `Time-driven`.
5. Type: `Minutes timer`.
6. Intervalo recomendado: cada 5 minutos.

La V7 usa `LockService`: si una ejecución anterior sigue activa, la nueva ejecución
sale sin procesar para evitar concurrencia.

## 8) Reintentos y errores

La V7 reintenta de forma acotada:

- lectura de Google Calendar;
- errores transitorios del backend.

El backend:

- reintenta `429` y `5xx`;
- no reintenta errores no transitorios como `401`;
- no copia cuerpos de error ni secretos a logs.

Si un turno elegible falla, no se marca como procesado y se vuelve a intentar en
una ejecución posterior.

## 9) Prueba controlada antes de activar producción

Usar una cuenta externa de prueba, nunca un cliente real.

### Caso A — negativo: invitación externa

1. Aceptar/crear una invitación externa sin `[RANQUEL-TURNO]`.
2. Ejecutar `processNewAppointments`.
3. Esperar que no se genere ningún email de Ranquel.

Resultado esperado:

```text
EXTERNAL_EVENT_FILTER=PASS
```

### Caso B — negativo: evento propio sin marcador

1. Crear un evento propio con invitado externo pero sin el marcador.
2. Ejecutar.
3. Esperar cero emails de Ranquel.

Resultado esperado:

```text
UNMARKED_EVENT_FILTER=PASS
```

### Caso C — positivo: reserva real de prueba

1. Reservar desde una cuenta externa usando el Appointment Schedule.
2. Confirmar que el evento resultante contiene `[RANQUEL-TURNO]`.
3. Esperar al trigger o ejecutar manualmente.
4. Confirmar:
   - el cliente de prueba recibe el link seguro;
   - el dueño recibe el link host;
   - el cliente no es el propio dueño;
   - una segunda ejecución no vuelve a procesar el evento.

Resultado esperado:

```text
BOOKING_MARKER_RUNTIME_PROOF=PASS
CLIENT_LINK_EMAIL=PASS
HOST_LINK_EMAIL=PASS
SELF_AS_CLIENT=FAIL_EXPECTED_FALSE
IDEMPOTENT_REPROCESS=PASS
```

## 10) Diagnóstico de notificaciones de fallo

Un correo `Summary of failures for Google Apps Script` con trigger `time-based`
indica que una ejecución automática falló. **No prueba por sí solo que un cliente
haya intentado reservar.**

Para investigar:

1. Apps Script → **Executions**.
2. Revisar función, hora, duración y mensaje.
3. Comparar con eventos reales del calendario.
4. Buscar en Gmail los asuntos:
   - `Ranquel Tech Lab — Link seguro para tu videollamada`
   - `Ranquel Tech Lab — Host link (videollamada)`
5. No copiar access tokens, emails de clientes ni valores de Script Properties a
   issues o PRs.

## 11) Activación y rollback

La actualización del repositorio **no actualiza automáticamente** el Apps Script
desplegado.

La activación real requiere una autorización humana separada.

Rollback mínimo si la V7 falla en vivo:

1. deshabilitar el trigger V7;
2. no borrar eventos ni propiedades;
3. restaurar la versión anterior sólo mediante un cambio autorizado;
4. revisar el evento de prueba y las ejecuciones antes de reactivar.

No cambiar Vercel, Daily, DNS o secretos como parte de este rollback salvo una
issue y autorización específicas.
