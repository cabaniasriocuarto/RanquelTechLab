# Mapa de capacidades de producto

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/truth/FEATURE_MAP.md` (inventario de capacidades de producto)

## Cómo leer este mapa

Una fila `CURRENT_IMPLEMENTED_TRUTH` significa que existe implementación
inspeccionable en el repositorio. No significa que la capacidad esté desplegada,
conectada a una cuenta externa, aceptada en producción ni respaldada por métricas.
Los estados se definen en [SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md).

En las columnas de límites, `UNKNOWN` significa siempre `External verification:
UNKNOWN`; no es un estado documental ni reemplaza a los siete `Status`
canónicos.

Las rutas públicas y su indexabilidad pertenecen a
[ROUTE_AND_PAGE_MAP.md](ROUTE_AND_PAGE_MAP.md). Integraciones y flujos técnicos
pertenecen a [ARCHITECTURE.md](ARCHITECTURE.md).

## Capacidades implementadas en el repositorio

| Capacidad | Estado documental | Implementación observable | Límite honesto |
| --- | --- | --- | --- |
| Home comercial de Río Cuarto | `CURRENT_IMPLEMENTED_TRUTH` | [index.html](../../index.html) contiene propuesta, servicios, sectores, marketing, IA, laboratorio, contacto y vista de reservas. | Los claims comerciales son contenido implementado; resultados, experiencia y condición del negocio fuera del repo son `UNKNOWN`. |
| Páginas de detalle | `CURRENT_IMPLEMENTED_TRUTH` | HTML independientes para [soluciones](../../soluciones/index.html), [sectores](../../sectores/index.html), [método](../../metodo/index.html), [marketing](../../marketing/index.html) y [contacto](../../contacto/index.html). | Disponibilidad live y render cross-browser `PENDING_TO_VALIDATE` cuando una tarea los afecta. |
| Página de contacto por WhatsApp | `CURRENT_IMPLEMENTED_TRUTH` | [contacto/whatsapp/index.html](../../contacto/whatsapp/index.html) ofrece un destino indexable específico. | Ownership y funcionamiento del canal externo son `UNKNOWN`. |
| Interfaz bilingüe ES/EN | `CURRENT_IMPLEMENTED_TRUTH` | [script.js](../../script.js) traduce Home; [site-i18n.js](../../site-i18n.js) traduce páginas internas; preferencia `rtl-lang`. | Es traducción client-side sobre la misma URL, no páginas inglesas indexables ni SEO bilingüe separado. |
| Navegación Home/reservas | `CURRENT_IMPLEMENTED_TRUTH` | `/?view=reservas` alterna una vista del mismo [index.html](../../index.html) mediante [script.js](../../script.js). | No existe una página de reservas independiente ni canonical propio. |
| Agenda externa | `CURRENT_IMPLEMENTED_TRUTH` | Home y runtimes enlazan una agenda de Google Calendar. | Existencia, disponibilidad, horarios y ownership de la agenda son `UNKNOWN`. |
| Acceso de videollamada con código | `CURRENT_IMPLEMENTED_TRUTH` | Home y [videollamada.html](../../videollamada.html) envían el access code a [api/daily/token.js](../../api/daily/token.js) y montan un iframe. | Seguridad y disponibilidad end-to-end no están demostradas; hay riesgos abiertos en [SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md). |
| Creación de room y accesos guest/host | `CURRENT_IMPLEMENTED_TRUTH` | [api/access/create.js](../../api/access/create.js) crea rooms privadas y firma payloads. | Requiere secretos y Daily externos con estado `UNKNOWN`. |
| Automatización Calendar → acceso → email | `CURRENT_IMPLEMENTED_TRUTH` como código | [Ranquel_Turnos_Videollamada.gs](../../apps-script/Ranquel_Turnos_Videollamada.gs) implementa lectura, llamada al backend, emails y marca de procesado. | Deploy, trigger, permisos, ejecución y delivery son `UNKNOWN`; no afirmar automatización activa. |
| Asistente determinista | `CURRENT_IMPLEMENTED_TRUTH` | [script.js](../../script.js) y [site-runtime.js](../../site-runtime.js) clasifican consultas con reglas locales y ofrecen respuestas/opciones. | No llama a un modelo de IA ni constituye un agente generativo; sus respuestas están limitadas al contenido codificado. |
| Presupuesto orientativo | `CURRENT_IMPLEMENTED_TRUTH` | Ambos runtimes contienen tipos de proyecto, importes ARS y cálculo simple de páginas extra. | No es cotización contractual; el propio UI lo presenta como orientativo. Vigencia comercial externa `UNKNOWN`. |
| Captura y entrega de leads | `CURRENT_IMPLEMENTED_TRUTH` | El asistente valida datos, llama `/api/contact` y [api/contact.js](../../api/contact.js) reenvía a FormSubmit. | Recepción, retención y respuesta son `UNKNOWN`; no hay CRM o base propia observable. |
| Contacto multicanal | `CURRENT_IMPLEMENTED_TRUTH` | Enlaces a WhatsApp, teléfono, email, agenda y redes en HTML/runtimes. | Los destinos y cuentas no fueron verificados externamente. |
| SEO on-page en español | `CURRENT_IMPLEMENTED_TRUTH` | Titles, descriptions, canonicals, robots, JSON-LD y Open Graph en las siete páginas indexables; [sitemap.xml](../../sitemap.xml) y [robots.txt](../../robots.txt). | Indexación, rich results y posiciones son `UNKNOWN`. |
| Artefactos Bing | `CURRENT_IMPLEMENTED_TRUTH` | [BingSiteAuth.xml](../../BingSiteAuth.xml) y meta de validación en Home. | Verificación efectiva en Bing es `UNKNOWN`. |
| Instrumentación de medición | `CURRENT_IMPLEMENTED_TRUTH` | Tags e IDs de GA4/GTM/Google Ads en HTML y eventos en runtimes/páginas de gracias. | Recolección, consentimiento, contenedores, conversiones y campañas son `UNKNOWN`. |
| Páginas de confirmación | `CURRENT_IMPLEMENTED_TRUTH` | Tres destinos `noindex` emiten eventos de presupuesto, WhatsApp o videollamada con deduplicación por sesión. | Llegar a una URL no demuestra que la conversión comercial haya ocurrido; semántica externa `PENDING_TO_VALIDATE`. |
| Medios y movimiento | `CURRENT_IMPLEMENTED_TRUTH` | Imágenes, video hero, carrusel, reveal y elementos ambientales en [media](../../media), CSS y runtimes. | Calidad visual, performance, accesibilidad y procedencia requieren gates/owners específicos. |
| Headers y redirects versionados | `CURRENT_IMPLEMENTED_TRUTH` | [vercel.json](../../vercel.json) define compatibilidad, seguridad y caché. | Aplicación en un deploy es `UNKNOWN`. |

## Capacidades parciales o condicionadas

### Bilingüe

La UI inglesa está implementada, pero:

- el HTML inicial e indexable permanece en español;
- no existen rutas `/en/**` ni `hreflang`;
- Home no cambia title, description ni Open Graph cuando cambia el idioma;
- páginas internas cambian parte de la metadata sólo después de ejecutar JS.

Por eso “interfaz bilingüe” es `CURRENT_IMPLEMENTED_TRUTH`, mientras que “SEO
bilingüe” sería `PLANNED_NOT_IMPLEMENTED`.

### Videollamada

El flujo firmado existe en código, pero la página dedicada conserva un enlace
directo rotulado para el dueño. La afirmación absoluta “sin acceso no se puede
entrar” está `PENDING_TO_VALIDATE` contra la configuración real de Daily. No se
debe eliminar ni promocionar el enlace desde documentación sin una issue de
producto y una revisión de seguridad.

### Medición y marketing

Existen tags y eventos, pero el repo no contiene la configuración interna de
GTM, GA4, Ads, Search Console o campañas. “Instrumentado en código” es
`CURRENT_IMPLEMENTED_TRUTH`; “recibiendo datos”, “conversión verificada”,
“campaña activa” o “Search Console conectado” son `UNKNOWN`.

### Entrega de formularios y emails

Las llamadas están implementadas. La recepción por FormSubmit, buzón o MailApp
y cualquier retención posterior son `UNKNOWN`. Un resultado HTTP aislado no
prueba todo el flujo si no se inspecciona el destino autorizado.

## Implementación heredada no demostrada como activa

El árbol de assets histórico bajo `marketing/` contiene plugins, fuentes,
LESS/CSS, JS e imágenes que la página actual no referencia. No se lo declara
`HISTORICAL_SUPERSEDED` porque no existe todavía una decisión canónica de retiro;
su necesidad tiene `External verification: UNKNOWN`. Cualquier limpieza requiere
issue y evidencia de referencias, licencias y regresión.

Los dos instructivos de Calendar/Daily y el README de Vercel describen variantes
incompatibles o antiguas. Son contexto histórico útil, pero aún no están marcados
como `HISTORICAL_SUPERSEDED` porque falta una decisión explícita de migración.

## Planificado y no implementado

| Capacidad | Estado | Límite actual |
| --- | --- | --- |
| Páginas de nuevas ciudades | `PLANNED_NOT_IMPLEMENTED` | No hay directorio, HTML, rutas ni contenido local de ciudades adicionales. |
| Plataforma Geo-SEO | `PLANNED_NOT_IMPLEMENTED` | La documentación de [Geo-SEO](../geo-seo/README.md) es plan; no existe generador, manifest ni output. |
| Generación/validación automática de páginas locales | `PLANNED_NOT_IMPLEMENTED` | No existen scripts ni CI que la ejecuten. |
| Scripts del engineering harness | `PLANNED_NOT_IMPLEMENTED` | Las plantillas documentales no son ejecutables. Implementación reservada a issue #24. |
| Workflows ejecutables del harness | `PLANNED_NOT_IMPLEMENTED` | No existen workflows en la base inventariada; issue #24 es su owner de implementación. |
| Base de datos, CMS o CRM propio | `PLANNED_NOT_IMPLEMENTED` si una issue futura lo autoriza | No hay dependencia, schema, migración ni cliente en el repo actual. |
| Autenticación de usuarios o panel administrativo | `PLANNED_NOT_IMPLEMENTED` si una issue futura lo autoriza | No hay UI, sesión, provider ni backend de autenticación. |
| API de producto | `PLANNED_NOT_IMPLEMENTED` si una issue futura lo autoriza | Las APIs actuales sólo soportan contacto y videollamada. |

Un deploy, DNS, campaña, gasto, conexión de cuenta o publicación no pasa a
implementado por aparecer como objetivo documental; requiere autorización y
evidencia externa separadas.

## Capacidades que no deben inferirse

El repositorio no aporta evidencia suficiente para afirmar:

- clientes, casos de éxito, testimonios o resultados comerciales;
- oficinas o experiencia local fuera de la dirección declarada en el propio
  contenido;
- disponibilidad 24/7, SLA, soporte, certificaciones o compliance;
- campañas activas o inversión publicitaria;
- indexación, rankings o tráfico;
- consentimiento, retención o borrado efectivo en proveedores externos;
- propiedad o control actual de cuentas enlazadas.

Esas afirmaciones mantienen `External verification: UNKNOWN` y no reciben un
`Status` positivo hasta que el owner correcto obtenga evidencia autorizada.

## Regla de actualización

Un cambio de capacidad debe actualizar en el mismo trabajo coherente:

1. la implementación;
2. esta fila y su estado;
3. arquitectura, rutas, seguridad, SEO o medición afectados;
4. decisión/changelog cuando corresponda;
5. evidencia focal, regresión e independiente según riesgo.
