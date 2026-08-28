# Modelo de seguridad y privacidad

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/truth/SECURITY_PRIVACY_MODEL.md` (seguridad, privacidad y trust boundaries)

## Alcance y criterio

Este modelo inventaría datos, fronteras y controles visibles en el repositorio.
No es una certificación de seguridad, privacidad, cumplimiento ni proveedor.
Una protección configurada en código no prueba que esté desplegada; una promesa
en la UI no prueba una política externa.

Los estados usados aquí pertenecen a
[SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md). La arquitectura de componentes está en
[ARCHITECTURE.md](ARCHITECTURE.md).

`UNKNOWN` en tablas o frases sobre proveedores significa `External verification:
UNKNOWN`; no es un `Status` documental.

## Objetivos de protección

- Mantener secretos exclusivamente en sistemas server-side autorizados.
- Minimizar PII y evitar su inclusión en URLs, analytics, evidencia, fixtures,
  logs y commits.
- Impedir que un navegador anónimo cree rooms o accesos administrativos.
- Verificar integridad, rol y vigencia antes de emitir un meeting token.
- Reducir spam y payloads inválidos en contacto.
- Tratar proveedores, navegador, email, Calendar y deploy como fronteras de
  confianza separadas.
- Fallar cerrado ante autenticación, ownership, alcance o estado externo
  ambiguos.

## Actores y fronteras de confianza

| Actor/frontera | Capacidad esperada | No se debe asumir |
| --- | --- | --- |
| Visitante anónimo | Leer páginas, usar navegación, enviar un contacto válido y abrir canales externos. | Identidad verificada, consentimiento permanente o intención legítima. |
| Titular de access link | Solicitar un meeting token dentro de la ventana firmada. | Que sea la persona nombrada en el payload; el link es bearer material. |
| Apps Script | Leer Calendar, llamar Access API y enviar emails usando properties externas. | Deploy, permisos o integridad del proyecto por existir el `.gs` en Git. |
| Vercel Function | Leer variables server-side y llamar proveedores. | Runtime, env vars, aislamiento, logs o deploy correctos sin evidencia externa. |
| Daily | Crear rooms y emitir meeting tokens. | Configuración, retención, privacy o disponibilidad no observadas. |
| FormSubmit y buzón | Recibir y conservar el lead según sus propios sistemas. | Entrega, borrado, acceso limitado o plazo de retención. |
| Google measurement | Recibir pageviews/eventos desde el navegador. | Consentimiento, configuración del contenedor, filtros, retención o campañas. |
| Auditor/evidencia | Leer resultados redactados y reproducibles. | Acceso a secretos, PII o URLs privadas. |

## Clasificación de datos

| Clase | Ejemplos observados | Tratamiento requerido |
| --- | --- | --- |
| Público | Contenido, rutas, assets, IDs públicos de tags, datos comerciales publicados. | Puede versionarse, pero claims externos requieren owner y fuente. |
| Preferencia local | Idioma `rtl-lang`, flags de teaser/conversión en `sessionStorage`. | No debe ampliarse con PII; documentar cualquier nueva persistencia. |
| PII de lead | Nombre, email, teléfono, detalle y preferencia de contacto. | Minimizar, validar, enviar sólo al destino autorizado y redactar en evidencia/logs. |
| PII de turno | Email/nombre del asistente, event ID, horarios. | No copiar a URLs nuevas, analytics, docs, fixtures ni manifests. |
| Access material | Access code firmado, meeting token, links guest/host. | Tratar como bearer secret temporal; nunca publicar ni adjuntar sin redacción. |
| Credenciales | Daily API key, token secret, admin key, Script Properties. | Sólo secret stores server-side; nunca browser, Git, Markdown o output. |
| Telemetría | Pageviews, clics, intents, conversiones, labels y transaction IDs. | Revisar minimización, consentimiento y ausencia de PII antes de emitir. |

## Flujos de datos implementados

### Preferencia y estado de UI

- [script.js](../../script.js) y [site-i18n.js](../../site-i18n.js) guardan sólo
  la preferencia `es`/`en` bajo `rtl-lang`.
- [site-runtime.js](../../site-runtime.js) usa `sessionStorage` para recordar si
  mostró el teaser automático.
- Las páginas de gracias usan flags de sesión para reducir eventos duplicados.
- Los datos del presupuesto viven en memoria del runtime hasta que se envían o
  se abandona la página.

No se observó acceso explícito a `document.cookie` ni IndexedDB en el código
propio, ni una base de datos del sitio. Los tags de terceros pueden establecer
cookies o conservar datos; esta observación no equivale a “sin tracking”.

### Lead de contacto

```text
Navegador: nombre + email + teléfono + proyecto + detalle + canal
  -> POST /api/contact
  -> validación server-side
  -> FormSubmit
  -> buzón de contacto
```

[api/contact.js](../../api/contact.js) tiene un destino y source URL codificados.
El repo no controla la entrega ni la retención en FormSubmit/buzón. La frase de
UI que limita el uso de datos es contenido implementado; su cumplimiento
externo es `UNKNOWN`.

### Turno y Daily

```text
Calendar -> Apps Script -> /api/access/create -> Daily rooms
                         -> MailApp -> links guest/host

Navegador -> /api/daily/token?access=... -> Daily meeting token -> iframe
```

[api/access/create.js](../../api/access/create.js) firma un payload con rol,
room, event ID, email/nombre del asistente y horarios. La firma protege
integridad/autenticidad, pero el payload base64url **no está cifrado**. El access
code viaja en query string y debe tratarse como bearer material sensible.

Esta implementación heredada contradice el contrato actual de no poner PII en
URLs. El hecho es `CURRENT_IMPLEMENTED_TRUTH`; la remediación es
`PLANNED_NOT_IMPLEMENTED` hasta una issue de producto/seguridad que preserve la
compatibilidad del flujo. Mientras tanto, no se debe copiar un access real a
issues, PRs, analytics, screenshots, comandos o logs de evidencia.

### Medición

HTML y runtimes inicializan o usan GA4, GTM y Google Ads. Los eventos incluyen
contacto, agenda, intents, presupuesto y conversiones. No se observó una CMP,
banner de consentimiento, página de privacidad u opt-out implementados.

La necesidad legal y de producto de consentimiento/retención es
`PENDING_TO_VALIDATE` con el owner humano correspondiente. Este documento no
infiere jurisdicción ni emite asesoramiento legal.

## Controles implementados

### Contact API

[api/contact.js](../../api/contact.js) implementa:

- sólo `POST`;
- comparación del `Origin` con el host forwarded/request;
- límite aproximado de 12.000 caracteres/bytes declarados;
- parsing JSON y longitudes máximas;
- validación básica de nombre, email, teléfono, proyecto y mensaje;
- honeypot `website` que debe quedar vacío;
- timeout al proveedor;
- respuestas JSON con `Cache-Control: no-store`;
- entrega server-side, sin exponer el destino como action de formulario.

Límites observados:

- no hay rate limiting, challenge o reputación de origen en el repo;
- el payload upstream desactiva captcha de FormSubmit;
- no hay test automatizado versionado para abuso, retries o duplicación;
- disponibilidad, logs y retención del proveedor son `UNKNOWN`.

### Access API

[api/access/create.js](../../api/access/create.js) implementa:

- sólo `POST`;
- presencia obligatoria de tres secretos de entorno;
- header administrativo `X-RTL-ADMIN`;
- normalización de nombre de room;
- rooms Daily privadas con expiración;
- manejo de room ya existente;
- access codes HMAC guest/host con expiración;
- `Cache-Control: no-store` en respuestas sensibles principales.

Límites observados:

- el body no tiene un límite explícito equivalente al Contact API;
- no hay rate limiting, replay store ni idempotency key server-side;
- email y event ID quedan dentro del payload firmado no cifrado;
- la igualdad del admin header no usa una comparación constant-time visible;
- la seguridad del secreto y del caller externo es `UNKNOWN`.

### Daily token API

[api/daily/token.js](../../api/daily/token.js) implementa:

- verificación HMAC con comparación constant-time de la firma;
- parsing y validación de payload/room;
- expiración y ventana desde 30 minutos antes hasta 3 horas después del turno;
- rol owner sólo para el payload host firmado;
- expiración acotada del meeting token;
- `Cache-Control: no-store` en errores de acceso/upstream, respuesta exitosa y
  excepción capturada.

Límites observados:

- no restringe el método HTTP de entrada explícitamente;
- las respuestas tempranas por variables de entorno faltantes no agregan
  `Cache-Control: no-store` en la implementación observada;
- el access code se recibe por query;
- no hay revocación, replay store ni rate limiting en el repo;
- logs de plataforma y retención de requests son `UNKNOWN`.

### Apps Script

[Ranquel_Turnos_Videollamada.gs](../../apps-script/Ranquel_Turnos_Videollamada.gs)
mantiene secretos en Script Properties y no requiere Daily API key en el
navegador. Marca eventos procesados después de crear acceso y enviar emails.

Permisos, trigger, acceso al Calendar, properties, logs y delivery están fuera
del repo. Un fallo entre envíos y marca puede causar reintentos o duplicación;
no existe cola transaccional ni reconciliación implementada.

### Headers y navegador

[vercel.json](../../vercel.json) declara CSP, HSTS, no-sniff, frame policy,
referrer policy y permissions policy. Los runtimes agregan `noopener` y
`noreferrer` a enlaces `_blank`.

Límites observados:

- la CSP permite scripts inline mediante `'unsafe-inline'`;
- algunas páginas también definen CSP por meta, por lo que existen políticas
  paralelas que deben validarse juntas;
- permisos y frame sources están acoplados a Daily/configuración externa;
- sólo una observación de respuesta live puede probar headers aplicados.

## Riesgos y contradicciones abiertas

| Riesgo | Estado | Consecuencia documental/operativa |
| --- | --- | --- |
| PII dentro de access code firmado y query string. | `CURRENT_IMPLEMENTED_TRUTH` | No copiar tokens reales; remediación requiere issue de producto/seguridad. |
| Enlace Daily directo rotulado para el dueño en la página dedicada. | `CURRENT_IMPLEMENTED_TRUTH`; acceso efectivo `PENDING_TO_VALIDATE` | Contradice el mensaje absoluto de que no se entra sin código; no afirmar cierre completo del acceso. |
| Sin privacy policy/CMP/opt-out observables mientras se cargan tags. | `CURRENT_IMPLEMENTED_TRUTH` como ausencia; requisito legal `PENDING_TO_VALIDATE` | No afirmar consentimiento ni compliance. |
| Claim de uso limitado de PII sin política/retención demostrada. | Cumplimiento externo `UNKNOWN` | No promover el texto de UI a verdad de proveedor. |
| FormSubmit, Gmail, Calendar, Apps Script, Daily y Google fuera del repo. | `UNKNOWN` | No afirmar cifrado, retención, acceso, DPA, región ni disponibilidad. |
| Sin rate limits ni tests de abuso versionados. | `CURRENT_IMPLEMENTED_TRUTH` como ausencia observable | Revisar antes de ampliar exposición o volumen. |
| README/instructivos describen secretos y arquitecturas divergentes. | `CURRENT_IMPLEMENTED_TRUTH` | Seguir código/owners actuales; no copiar valores ni reactivar flujos directos sin decisión. |
| GTM y GA4 directo coexisten en Home. | Configuración externa `UNKNOWN` | Potencial duplicación; requiere inspección autorizada del contenedor. |

El registro de un riesgo no autoriza corregir producto dentro de una issue
documental.

## Estado de sistemas externos

| Sistema | Estado de seguridad/privacidad afirmable desde el repo |
| --- | --- |
| Vercel/project/env/logs | `UNKNOWN` |
| Daily/account/rooms/retention | `UNKNOWN` |
| Apps Script/Calendar/MailApp | `UNKNOWN` |
| FormSubmit y buzón | `UNKNOWN` |
| GA4/GTM/Ads y consentimiento | `UNKNOWN` |
| DNS/TLS live | `UNKNOWN` |

Los nombres de variables no son evidencia de que existan valores. Nunca se debe
leer, imprimir o copiar un secreto sólo para completar documentación.

## Requisitos para cambios futuros

Todo cambio en inputs, datos, endpoints, tracking o proveedor MUST:

1. clasificar datos y justificar minimización;
2. mantener PII fuera de URLs nuevas, analytics, evidencia, logs y repositorio;
3. identificar autenticación, autorización, expiración, replay, abuso y errores;
4. declarar proveedores, destinos, retención y owner sin inventar estados;
5. usar secrets server-side y evidenciar sólo nombres/presencia redactada;
6. revisar CSP, CORS/origin, cache y browser permissions;
7. probar success, invalid input, auth failure, proveedor caído y no filtración;
8. solicitar auditoría independiente del exact HEAD;
9. definir rollback/contención antes de mutar un sistema externo;
10. detenerse si falta autoridad para cuentas, deploys, datos o gasto.

Los tests ejecutables y workflows del harness corresponden a issue #24. Hasta
que existan, las validaciones manuales o focales deben registrarse con estado
honesto; una plantilla no equivale a un control ejecutado.

## Evidencia permitida

La evidencia puede incluir comandos, códigos HTTP sintéticos, nombres de
variables y resultados redactados. No puede incluir:

- valores de secretos o headers administrativos;
- access codes, meeting tokens o links guest/host;
- email, teléfono, nombre, event ID o mensajes reales de usuarios;
- URLs privadas de preview/proyecto sin autorización;
- logs completos de proveedores;
- capturas de Calendar, inbox o dashboards sin redacción.

Un hallazgo de secreto o PII en diff, staged diff, PR o evidencia asigna
`Status: NO_GO` a la continuación y debe contenerse antes de reanudar. Si la
contención depende de otra autoridad, el trabajo además queda `BLOCKED`.
