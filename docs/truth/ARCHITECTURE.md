# Arquitectura técnica y de integraciones

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/ARCHITECTURE.md` (arquitectura e integraciones)

## Alcance

Este documento describe componentes y límites observables en el repositorio.
La presencia de configuración para un proveedor no demuestra que el recurso
externo exista, esté conectado o funcione. La semántica de estados pertenece a
[SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md).

En este archivo, `UNKNOWN` dentro de una columna o frase sobre sistemas live
significa `External verification: UNKNOWN`; no es un `Status` documental.

## Vista general implementada

```text
Navegador
  |-- HTML/CSS/JS y medios estáticos
  |-- POST /api/contact ----------> FormSubmit ----------> buzón de contacto
  |-- GET /api/daily/token -------> Daily token API -----> iframe Daily
  |-- tags/eventos ---------------> Google measurement endpoints

Google Calendar
  '-- Apps Script
        |-- POST /api/access/create --> Daily rooms API
        '-- MailApp ------------------> invitado y host
```

El repositorio no contiene framework de frontend, compilación, gestor de
paquetes, base de datos, CMS, contenedor ni workflow ejecutable. La resolución
estática y de `api/**` sigue las convenciones configuradas para Vercel, pero el
estado del proyecto Vercel es `UNKNOWN`.

## Componentes del repositorio

| Componente | Responsabilidad implementada | Fuentes inspeccionables | Verificación externa |
| --- | --- | --- | --- |
| Home estática | Contenido principal, vista interna de reservas, selector ES/EN, carrusel y asistente. | [index.html](../../index.html), [script.js](../../script.js) | No requiere cuenta para render local; comportamiento live `UNKNOWN`. |
| Páginas de detalle | Soluciones, sectores, método, marketing y contacto como HTML independientes. | [soluciones/index.html](../../soluciones/index.html), [sectores/index.html](../../sectores/index.html), [metodo/index.html](../../metodo/index.html), [marketing/index.html](../../marketing/index.html), [contacto/index.html](../../contacto/index.html) | Publicación live `UNKNOWN`. |
| Runtime compartido | Traducción client-side, navegación común, tracking de enlaces y asistente determinista en páginas internas. | [site-i18n.js](../../site-i18n.js), [site-runtime.js](../../site-runtime.js) | Recolección externa de eventos `UNKNOWN`. |
| Presentación | CSS raíz, capa visual de territorio, estilos SEO/Home y runtime de páginas internas. | [styles.css](../../styles.css), [territorio.css](../../territorio.css), [seo-pages.css](../../seo-pages.css), [home-unified.css](../../home-unified.css), [site-runtime.css](../../site-runtime.css) | Render en preview/producción `PENDING_TO_VALIDATE` por cambio visual. |
| Contact API | Recibe un lead same-origin y lo entrega a FormSubmit desde el servidor. | [api/contact.js](../../api/contact.js) | FormSubmit y buzón destino `UNKNOWN`. |
| Access API | Crea una sala Daily privada y access codes firmados para guest/host. | [api/access/create.js](../../api/access/create.js) | Cuenta, dominio, secretos y rooms de Daily `UNKNOWN`. |
| Daily token API | Verifica access code, ventana temporal y rol; solicita un meeting token. | [api/daily/token.js](../../api/daily/token.js) | Emisión y funcionamiento live `UNKNOWN`. |
| Automatización de turnos | Lee eventos, evita reproceso básico, solicita accesos y envía emails. El archivo está versionado; el runtime vive fuera del repo. | [apps-script/Ranquel_Turnos_Videollamada.gs](../../apps-script/Ranquel_Turnos_Videollamada.gs) | Proyecto, properties, trigger, Calendar y MailApp `UNKNOWN`. |
| Configuración de hosting | Redirects, headers de seguridad y caché para medios. | [vercel.json](../../vercel.json) | Configuración aplicada por un deploy `UNKNOWN`. |
| Medios | Imágenes, SVG, fuentes y videos servidos como archivos estáticos. | [media](../../media), [images](../../images) | Procedencia/licencia `PENDING_TO_VALIDATE` en [MEDIA_PROVENANCE.md](MEDIA_PROVENANCE.md); entrega CDN `UNKNOWN`. |

## Capas de frontend

### Home

[index.html](../../index.html) carga cuatro hojas de estilo locales y
[script.js](../../script.js). Ese script reúne responsabilidades heredadas:

- traducción ES/EN del contenido de Home;
- navegación entre la vista principal y `/?view=reservas`;
- compatibilidad con hashes antiguos;
- carrusel y animaciones;
- acceso a Daily mediante `/api/daily/token`;
- asistente determinista, cálculo orientativo y envío a `/api/contact`;
- emisión de eventos de medición si `gtag` existe.

No es una SPA con router de framework: la vista de reservas comparte el mismo
documento y canonical que `/`.

### Páginas internas

Las páginas principales internas cargan [site-i18n.js](../../site-i18n.js) y
[site-runtime.js](../../site-runtime.js). El primer archivo traduce texto y parte
de la metadata en el navegador; el segundo monta el asistente y el tracking sin
inicializar `gtag`.

El árbol histórico bajo `marketing/{css,less,js,img,carousel,libs,fonts}` sigue
versionado, pero el HTML actual de Marketing usa los assets compartidos. Por lo
tanto su presencia es implementación heredada, no una dependencia activa
demostrada.

## Fronteras de ejecución

### Navegador

Ejecuta traducción, navegación, UI, validación inicial, cálculo de precios,
tracking y solicitudes same-origin. No debe recibir valores de secretos de
servidor. La preferencia de idioma se guarda localmente; el resto de los datos
del presupuesto se mantiene en memoria hasta el envío.

### Vercel Functions

Los tres módulos CommonJS bajo `api/**` son la frontera server-side. El repo no
fija una versión de runtime ni contiene configuración de observabilidad,
rate-limit o persistencia. La disponibilidad de `fetch`, variables y red externa
depende del entorno desplegado y es `UNKNOWN`.

### Apps Script

El archivo versionado no es el deploy de Apps Script. Configuración, permisos,
trigger, calendario y estado de ejecución pertenecen al sistema externo y no se
pueden inferir desde Git.

### Proveedores externos

Daily, FormSubmit, Google y los canales sociales están fuera del control
transaccional del repositorio. Sus contratos, retención, permisos, cuotas y
estado operativo requieren evidencia externa autorizada.

## Flujos principales

### Contacto y presupuesto

1. El asistente reúne nombre, email, teléfono, tipo de proyecto, detalle y canal.
2. El navegador hace `POST /api/contact`.
3. La función valida origen, tamaño y formato; un honeypot vacío forma parte del
   contrato.
4. La función hace un `POST` server-side a FormSubmit con destino configurado en
   código.
5. El proveedor y el buzón realizan cualquier entrega/retención posterior.

Sólo los pasos 1 a 4 están implementados en el repo. Entrega, recepción y
retención son `UNKNOWN`.

### Turno y videollamada

1. Un evento de Calendar es leído por Apps Script.
2. Apps Script llama `POST /api/access/create` con una clave administrativa en
   header.
3. La función crea o reutiliza una room Daily y firma accesos guest/host.
4. Apps Script envía los links mediante MailApp y marca el evento como procesado
   en Script Properties.
5. El titular del link abre Home o la página dedicada; el navegador solicita
   `/api/daily/token?access=...`.
6. La función verifica el acceso, solicita un meeting token y devuelve una URL
   de Daily para el iframe.

La automatización desplegada, la recepción del email y Daily live permanecen en
estado `UNKNOWN`. Los límites de privacidad de este diseño están en
[SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md).

### Idioma

- El HTML fuente de Home y páginas indexables es español.
- La preferencia `es`/`en` se guarda como `rtl-lang` en `localStorage`.
- Home traduce contenido, pero no su metadata principal.
- Las páginas internas traducen contenido y parte de la metadata en cliente.
- No existe routing de idioma ni contenido HTML inglés separado.

Esto implementa una experiencia bilingüe client-side, no una arquitectura SEO
multilingüe independiente. El contrato SEO se define en
[SEO_CONTRACT.md](SEO_CONTRACT.md).

## Variables y configuración server-side

| Nombre | Consumidor observado | Requisito en código | Valor/estado externo |
| --- | --- | --- | --- |
| `DAILY_API_KEY` | Access API y Daily token API | Requerida. | Secreto; `UNKNOWN`. |
| `ACCESS_TOKEN_SECRET` | Access API y Daily token API | Requerida para firma/verificación. | Secreto; `UNKNOWN`. |
| `ACCESS_ADMIN_KEY` | Access API | Requerida para el header administrativo. | Secreto; `UNKNOWN`. |
| `DAILY_DOMAIN` | Access API y Daily token API | Opcional; tiene fallback en código. | `UNKNOWN`. |
| `SITE_URL` | Access API | Opcional; si falta usa datos del request. | `UNKNOWN`. |
| `OWNER_EMAIL` | Sólo comentario de Access API | No se consume en la implementación actual. | `UNKNOWN`; no presentarla como requisito real. |
| `DAILY_ROOM` | README heredado | No se consume en las APIs actuales. | Contradicción documental; no presentarla como configuración vigente. |

Las Script Properties `CALENDAR_ID`, `HOST_EMAIL`, `SITE_URL` y `ADMIN_KEY` son
consumidas por Apps Script, pero sus valores y existencia externa son `UNKNOWN`.

## Configuración HTTP observable

[vercel.json](../../vercel.json) declara:

- redirects permanentes de compatibilidad;
- CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, Referrer Policy y
  Permissions Policy globales;
- caché `public, max-age=31536000, immutable` para `/images/**` y `/media/**`.

Esto es configuración versionada, no prueba de headers live. Los assets con
nombres estables tienen riesgo de conservar contenido anterior durante la
ventana immutable si se reemplazan sin versionar la URL.

## Integraciones observadas

| Sistema | Acoplamiento en repo | Estado que puede afirmarse |
| --- | --- | --- |
| Vercel | Convención `api/**` y [vercel.json](../../vercel.json). | `CURRENT_IMPLEMENTED_TRUTH` sólo para configuración versionada; proyecto canónico, topología y trazabilidad de producción están `PENDING_TO_VALIDATE` bajo #28. |
| Daily | Rooms y meeting-token APIs; iframe. | Cliente implementado; cuenta, rooms y permisos `UNKNOWN`. |
| Calendar | Agenda enlazada y lectura mediante Apps Script. | URL/código presentes; agenda y eventos `UNKNOWN`. |
| Apps Script/MailApp | Script versionado. | Código presente; deploy, trigger, permisos y entrega `UNKNOWN`. |
| FormSubmit/buzón | Fetch server-side de Contact API. | Integración codificada; recepción/retención `UNKNOWN`. |
| GA4/GTM/Google Ads | Tags e instrumentación en HTML/runtimes. | IDs y eventos presentes; contenedores, recolección y campañas `UNKNOWN`. |
| Bing | Archivo y meta de verificación. | Artefactos presentes; verificación/indexación `UNKNOWN`. |
| Redes y Maps | Enlaces y embeds. | Destinos presentes; ownership/disponibilidad `UNKNOWN`. |

### Gobierno de topología Vercel

La decisión humana originada por `F-PR-001` conserva todos los previews
inventariados en la evidencia volátil de PR #27. #3 no autoriza limpiarlos,
borrarlos, promoverlos ni cambiar su configuración. La auditoría, prueba de
proyecto canónico y remediación de la topología externa pertenecen a #28, que se
ejecuta en scope propio antes de #24.

Este owner no duplica conteos, IDs, URLs ni resultados volátiles de Vercel. Para
esta decisión, el registro observado se identifica como `F-PR-001` en la
evidencia volátil de PR #27; los owners estables sólo lo referencian. Hasta que
la issue #28 produzca evidencia aceptada, proyecto canónico, trazabilidad de
producción y equivalencia de configuración permanecen `PENDING_TO_VALIDATE`
con `External verification: UNKNOWN` en la verdad estable del repositorio.

## No implementado

Los siguientes límites son `PLANNED_NOT_IMPLEMENTED` o ausencia observada:

- plataforma Geo-SEO y páginas de nuevas ciudades;
- generadores de páginas o manifest de ciudades;
- scripts ejecutables del engineering harness;
- workflows de CI del harness, cuya implementación corresponde a issue #24;
- base de datos, CMS, autenticación de usuarios o panel administrativo;
- API de producto distinta de contacto y videollamada.

La frontera del plan Geo-SEO se descubre en
[docs/geo-seo/README.md](../geo-seo/README.md). Su documentación no convierte el
plan en arquitectura implementada.

## Contradicciones heredadas registradas

- [README_VERCEL.md](../../README_VERCEL.md) enumera `DAILY_ROOM` y omite
  variables requeridas por las APIs actuales.
- [V6-AppsScript-Setup.md](../V6-AppsScript-Setup.md) y
  [daily-google-calendar.md](../daily-google-calendar.md) describen flujos
  distintos; el segundo propone Daily directo desde Apps Script.
- El instructivo V6 conserva un host preview histórico que no debe tratarse
  como dominio canónico.
- [marketing/README.md](../../marketing/README.md) contiene atribución/demo
  heredados no alineados con la página actual.
- La página dedicada de videollamada conserva un enlace directo rotulado para
  el dueño mientras el resto del flujo afirma requerir access code.

Estas contradicciones son `CURRENT_IMPLEMENTED_TRUTH` como inventario de deuda,
pero su resolución de producto es `PLANNED_NOT_IMPLEMENTED` hasta que una issue
específica la autorice.

## Contratos de preservación

- Mantener `/` y la Home de Río Cuarto salvo issue explícita.
- No confundir código de integración con estado externo verificado.
- No mover PII o secretos al navegador, documentación, URLs nuevas, analytics o
  evidencia.
- Cambios en rutas deben reconciliar
  [ROUTE_AND_PAGE_MAP.md](ROUTE_AND_PAGE_MAP.md), SEO, sitemap y redirects.
- Cambios en inputs, APIs o proveedores deben reconciliar
  [SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md).
- La implementación de harness/CI no pertenece a estos truth docs y queda en
  issue #24.
- La topología externa Vercel no se infiere desde `vercel.json`; su owner de
  auditoría y remediación es #28, sin cleanup dentro de #3.
