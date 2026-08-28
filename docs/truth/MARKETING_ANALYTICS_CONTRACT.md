# Contrato de marketing, analítica y publicidad

Status: `CURRENT_IN_PROGRESS`

Owner: docs/truth/MARKETING_ANALYTICS_CONTRACT.md (CRO, eventos, atribución,
conversiones, GA4, GTM y Google Ads)

## Alcance y estado real

Este archivo fija límites de gobierno y medición. No acredita que GA4, GTM,
Google Ads, conversiones, dimensiones, consentimientos o dashboards externos
estén configurados o funcionando.

Hasta completar el baseline autorizado de #4, las condiciones externas usan
External verification: UNKNOWN y el trabajo que depende de comprobarlas
permanece PENDING_TO_VALIDATE. El diseño de medición por ciudad pertenece a #11
y las landings y convenciones de campañas a #12; ambos son
PLANNED_NOT_IMPLEMENTED. La activación de campañas, gasto y cambios en cuentas
siempre son decisiones humanas.

## Principios vigentes

- Medir sólo lo necesario para una decisión definida.
- Una acción de negocio tiene una única fuente canónica de conversión y no se
  contabiliza dos veces.
- No enviar PII, secretos ni contenido libre sensible en URLs, eventos,
  parámetros, identificadores, logs o evidencia.
- Separar tráfico orgánico, pago, referido y directo sin atribuir causalidad que
  los datos no demuestran.
- Una landing, CTA o evento no se publica sólo porque existe una etiqueta.
- Marketing no debilita canonical, accesibilidad, performance, privacidad ni
  veracidad.
- Código, contenedor o configuración observados no prueban recepción correcta
  en una plataforma externa.
- Ningún agente publica tags, crea conversiones, activa campañas ni gasta
  presupuesto sin autorización humana explícita.

## Estado actual y owners futuros

| Superficie | Estado | Owner de evolución |
| --- | --- | --- |
| Presencia de etiquetas y hooks de eventos en código | CURRENT_IMPLEMENTED_TRUTH | FEATURE_MAP inventaría la capacidad observable |
| Baseline exhaustivo y recepción externa de eventos | PENDING_TO_VALIDATE | #4 registra código, configuración y observación por separado |
| Contrato de cero PII y deduplicación | CURRENT_IN_PROGRESS | Este documento y SECURITY_PRIVACY_MODEL dentro del Draft de #3 |
| Taxonomía por ciudad, provincia, servicio y CTA | PLANNED_NOT_IMPLEMENTED | #11 |
| Dimensiones y key events en GA4 | PLANNED_NOT_IMPLEMENTED | #11 con aprobación humana externa |
| Conversiones importadas o nativas de Ads | PLANNED_NOT_IMPLEMENTED | #11/#12 con aprobación humana |
| Convención de campañas y ValueTrack | PLANNED_NOT_IMPLEMENTED | #12 |
| Dashboard por ciudad y score de expansión | PLANNED_NOT_IMPLEMENTED | #21 |
| Campañas reales | NO_GO | Hasta issue, readiness, consentimiento y autorización de gasto |

NO_GO aquí no significa prohibición permanente: indica que la activación no está
autorizada por #3 ni por la mera existencia de este contrato.

## Modelo conceptual de medición

Antes de instrumentar, cada evento propuesto debe declarar:

- decisión que habilita;
- actor y acción observables;
- disparador único;
- página y contexto;
- parámetros permitidos y cardinalidad esperada;
- datos expresamente prohibidos;
- regla de deduplicación;
- destino analítico y owner;
- criterio de prueba local, debug y recepción;
- retención y tratamiento de privacidad;
- lifecycle: propuesto, activo, deprecado o retirado.

La nomenclatura exacta y el diccionario versionado pertenecen a #11. Este
documento no inventa nombres de eventos ni confirma parámetros antes de esa
decisión.

## Identidad geográfica

El plan requiere un identificador estable de localidad que no dependa del texto
visible ni contenga PII. Su nombre, valores y propagación son contrato de las
issues #5 y #11. Hasta integrarlos:

- no se crea una taxonomía paralela;
- no se infiere ciudad desde datos personales;
- no se envía dirección, teléfono, email, mensaje ni búsqueda libre;
- no se presenta segmentación por ciudad como implementada.

Río Cuarto conserva su identidad especial asociada a la Home sin obligar a crear
una página duplicada.

## Conversiones y deduplicación

- Una intención de negocio se clasifica antes de elegirse como conversión.
- Eventos de UI, leads validados y conversiones publicitarias no son sinónimos.
- Un mismo gesto no dispara múltiples conversiones primarias por integraciones
  superpuestas.
- Reintentos, navegación atrás, doble click y rehidratación no deben inflar
  conteos.
- Las conversiones primarias/secundarias y su importación se deciden en un owner
  único y se prueban extremo a extremo.
- Un cambio de medición conserva comparación o documenta la ruptura de serie.
- La ausencia de eventos en una herramienta de debug no demuestra su ausencia
  en producción, y la presencia local no demuestra recepción externa.

## Atribución y campañas

- UTM y parámetros de plataforma usan una convención aprobada y valores
  acotados; nunca transportan PII.
- La atribución se describe con su modelo y ventana, no como causalidad.
- Orgánico y pago se reportan por separado antes de combinar resultados.
- Una landing de Ads no compite con la URL orgánica canónica ni se indexa por
  accidente.
- Mensaje, segmentación, landing y CTA deben coincidir.
- Keywords, ubicaciones, presupuesto, pujas, conversiones y publicación de
  anuncios requieren autorización humana.
- Experimentos declaran hipótesis, métrica principal, guardrails, duración,
  criterio de detención y riesgo de SEO/privacidad.

## Privacidad y consentimiento

Se aplica minimización por defecto:

- no usar email, teléfono, nombre, dirección, texto de consulta ni identificador
  directo como parámetro analítico;
- no registrar secretos, tokens, IDs privados o URLs de administración;
- evitar cardinalidad libre cuando una enumeración controlada alcanza;
- respetar la decisión de consentimiento y no inferirla por ausencia;
- documentar vendors, destinos, finalidad y retención antes de integrar;
- sanitizar capturas, exports y logs usados como evidencia.

El threat model y la clasificación de datos pertenecen a
[SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md). Ante conflicto, prevalece
la opción que minimiza datos y detiene la mutación.

## Gates de instrumentación

| Fase | Evidencia requerida |
| --- | --- |
| Diseño | Objetivo, diccionario, parámetros, prohibiciones, deduplicación y owner |
| Implementación local | Disparador correcto, ausencia de duplicados y cero PII en payload observable |
| Preview exact-head | Journey desktop/móvil, consentimiento y ausencia de regresiones |
| Debug autorizado | Recepción en la propiedad/contenedor correctos, con datos de prueba sanitizados |
| Activación externa | Aprobación humana y registro de la mutación exacta |
| Post-publicación | Recepción, volumen plausible, deduplicación, atribución y rollback |

Si no hay acceso a una plataforma, el estado es AUTH_BLOCKED. Si no existe
preview exact-head, es PREVIEW_BLOCKED. Ninguno se convierte en PASS.

## Evidencia mínima

Cada manifest de marketing o analítica registra:

- issue, HEAD, entorno y propiedad/contenedor/cuenta identificados sin secretos;
- cambio de código y cambio externo como líneas separadas;
- payload sanitizado y datos prohibidos comprobados;
- journeys y viewports;
- recepción local y externa con estados independientes;
- deduplicación, cardinalidad y comparación contra baseline;
- aprobador de activación o gasto;
- rollback y limitaciones.

## STOP conditions

Detener ante:

- PII o secreto en URL, evento, log, captura o manifest;
- doble conteo o fuente de conversión ambigua;
- cuenta, propiedad, contenedor o entorno no identificados;
- mutación de GA4, GTM, Ads, Vercel o producción fuera del contrato;
- activación, publicación o gasto sin autorización humana;
- tracking que degrade consentimiento, accesibilidad, performance o SEO;
- afirmación de recepción externa sin observación;
- nueva landing que compita con una URL canónica;
- scope que incorpore otra ciudad, campaña o producto.

## Reconciliación

Después de una integración se actualizan el diccionario owner, este contrato,
los owners de privacidad/SEO/rutas y el changelog según las superficies
materiales. El cierre exige distinguir código integrado, configuración externa,
recepción observada y aceptación post-merge.
