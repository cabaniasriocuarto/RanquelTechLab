# Contrato SEO y de búsqueda local

Status: CURRENT_IMPLEMENTED_TRUTH

Owner: docs/truth/SEO_CONTRACT.md (reglas SEO, indexación y búsqueda local)

## Alcance y lectura del estado

Este archivo es el owner de las reglas generales de SEO, indexación y búsqueda
local. El Golden SEO Baseline y su lineage pertenecen a
[SEO_GOLDEN_BASELINE.md](SEO_GOLDEN_BASELINE.md); la comparación de paridad y
regresión de Home pertenece a [SEO_PARITY_CONTRACT.md](SEO_PARITY_CONTRACT.md).
Su estado indica que las reglas de gobierno están vigentes; no afirma que la
plataforma Geo-SEO, sus rutas, un generador, un sitemap ni integraciones externas
ya estén implementados.

La arquitectura Geo-SEO nacional continúa como PLANNED_NOT_IMPLEMENTED. Las
issues #5 a #10 deben convertir ese plan en contratos técnicos e implementación
sin debilitar estas invariantes. El inventario de URLs observado pertenece a
[ROUTE_AND_PAGE_MAP.md](ROUTE_AND_PAGE_MAP.md), no a este documento.

## Autoridad y evidencia

El orden normativo y la distinción entre verdad del repositorio y verificación
externa pertenecen a [SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md). Este contrato no
crea un ranking alternativo. Para una afirmación SEO se aplican ese orden y dos
capas de evidencia separadas:

- la implementación se demuestra en el worktree/objeto Git del HEAD exacto;
- producción, Search Console, canonical elegido e indexación se demuestran sólo
  mediante observación externa autorizada, fechada y sanitizada.

Una propuesta, un Draft PR o una URL de preview no prueban el estado de
producción. Search Console, el canonical elegido por Google y la indexación real
usan External verification: UNKNOWN hasta observarse con acceso autorizado. Si
esa observación es requisito de una tarea, su estado documental permanece
PENDING_TO_VALIDATE.

## Invariantes actuales

- El dominio canónico del producto es `https://www.ranquel.com.ar/`.
- La Home representa a Río Cuarto y conserva el contrato de canonical en /.
  Ninguna tarea geográfica puede moverla, duplicarla o desoptimizarla sin una
  issue y aprobación humana específicas.
- Una ciudad no se publica sustituyendo solamente nombre, metadatos o imagen.
- No se declara oficina, dirección, equipo o presencia física inexistente.
- El HTML rastreable contiene el contenido y los enlaces esenciales; JavaScript
  no es el único mecanismo de descubrimiento de contenido SEO.
- Borradores y previews no autorizados para publicación permanecen noindex,
  fuera del sitemap canónico y fuera de la navegación pública.
- No se crean automáticamente matrices ciudad por servicio.
- Una variante de campaña o experimento no compite orgánicamente con la URL
  canónica.
- Los outputs generados no se corrigen a mano: se corrige la fuente, plantilla
  o generador owner.
- Publicar, indexar, cambiar redirects globales o mutar Search Console requiere
  decisión humana explícita.

## Estado actual frente al plan

| Superficie | Estado documental | Interpretación |
| --- | --- | --- |
| Home de Río Cuarto y canonical / en el repo | CURRENT_IMPLEMENTED_TRUTH | Contrato y markup protegidos en la base inspeccionada; la respuesta live se valida por separado |
| Inventario de rutas existente en el repo | CURRENT_IMPLEMENTED_TRUTH | Lo mantiene ROUTE_AND_PAGE_MAP mediante inspección reproducible |
| Respuestas, canonical e indexación live | PENDING_TO_VALIDATE | Requiere baseline y evidencia externa autorizada de #4/#20 |
| Golden SEO Baseline versionado | PLANNED_NOT_IMPLEMENTED | #26 lo define después del baseline bruto de #4 |
| Gate de paridad y regresión de Home | PLANNED_NOT_IMPLEMENTED | #26 define semántica y #7 implementa validación ejecutable |
| Estructura /argentina/provincia/ciudad/ | PLANNED_NOT_IMPLEMENTED | Arquitectura objetivo; #5 define el contrato definitivo |
| Generación estática de hubs y ciudades | PLANNED_NOT_IMPLEMENTED | Pertenece a #6 |
| Canonical, schema, sitemap y gates automáticos | PLANNED_NOT_IMPLEMENTED | Pertenecen a #7 |
| Hubs y enlaces internos geográficos | PLANNED_NOT_IMPLEMENTED | Pertenecen a #8 |
| Gates editoriales anti-doorway | PLANNED_NOT_IMPLEMENTED | Pertenecen a #9 |
| Assets locales escalables | PLANNED_NOT_IMPLEMENTED | Pertenecen a #10 |
| Estado de indexación en Google | PENDING_TO_VALIDATE | Requiere evidencia externa autorizada de #4/#20 |

## Elegibilidad para indexación

Una URL sólo puede proponerse como indexable si toda esta evidencia está en
PASS para el mismo HEAD o publicación:

1. responde con estado HTTP 200 en el entorno que se evalúa;
2. tiene un canonical absoluto, válido y coherente con su identidad;
3. es accesible mediante enlaces HTML rastreables;
4. satisface una intención propia y ofrece valor local verificable;
5. no duplica ni canibaliza la Home u otra URL canónica;
6. tiene title, descripción, H1 y contenido coherentes, sin plantillas vacías;
7. usa datos estructurados que representan solamente contenido visible y real;
8. tiene estado editorial aprobado y fuentes trazables;
9. pasa revisión móvil, accesibilidad y performance proporcional al riesgo;
10. no contiene noindex ni otras directivas incompatibles;
11. está incluida en sitemap sólo cuando su estado de publicación lo autoriza;
12. cuenta con rollback y verificación post-publicación definidos.

La ausencia de cualquiera de estas pruebas no se interpreta como éxito. Una
URL nueva se mantiene noindex hasta resolver los hallazgos.

Además, #5, #7, #19 y #20 permanecen bloqueadas hasta que #26 defina el baseline
y contrato de paridad aplicables. Los resultados reservados y su frontera
fail-closed están en [SEO_PARITY_CONTRACT.md](SEO_PARITY_CONTRACT.md).

## Canonical, redirects y ciclo de vida

- Cada página indexable tiene una sola identidad canónica.
- Un canonical no reemplaza una decisión de consolidación ni oculta contenido
  duplicado deliberado.
- Los redirects permanentes requieren mapa origen-destino, impacto en enlaces,
  evidencia de ausencia de loops/cadenas y rollback.
- Cambios globales de canonical, dominio o redirects son riesgo CRITICAL.
- Una URL retirada conserva historia, motivo y destino; no se borra del mapa sin
  registrar la decisión.
- Canonical, sitemap, enlaces internos, robots y estado HTTP deben ser
  consistentes entre sí.

El owner de rutas registra inventario e historia. Este documento decide las
reglas de indexación, pero no duplica esa lista.

## SEO local e integridad

Toda página local debe demostrar:

- público e intención local diferenciados;
- problemas, sectores o contexto relevantes para la localidad;
- afirmaciones respaldadas por fuentes admisibles;
- propuesta y CTA coherentes con la capacidad real de atención;
- texto, FAQs, ejemplos e imagen con aporte propio;
- ausencia de direcciones, oficinas, clientes o experiencia inventados;
- revisión humana antes de publicar.

Las reglas de fuentes, tono y afirmaciones pertenecen a
[CONTENT_COMMUNICATION_STANDARD.md](CONTENT_COMMUNICATION_STANDARD.md). Si una
afirmación no puede probarse, se elimina, se formula como plan o se detiene la
publicación.

## Metadatos y datos estructurados

- Title, description, H1, Open Graph, breadcrumbs y canonical deben describir la
  misma página sin keyword stuffing.
- Un dato estructurado debe validar técnicamente y coincidir con contenido
  visible. No se agregan ratings, reviews, direcciones, servicios o entidades no
  demostrables.
- Los identificadores, URLs e imágenes deben ser absolutos cuando el formato lo
  requiera y resolver en el entorno publicado.
- La página debe conservar semántica y contenido útil sin depender de previews
  de redes sociales o del schema.

## Gates por cambio

| Cambio | Riesgo mínimo | Evidencia SEO requerida |
| --- | --- | --- |
| Documento interno sin efecto en producto | LIGHT | Links, anchors, contradicciones y scope |
| Copy público sin cambiar intención ni ruta | STANDARD | Title/H1/CTA, veracidad, enlaces y revisión responsive |
| Nueva URL, navegación o contenido local | HIGH | Elegibilidad completa, crawl, canonical, indexación, contenido y preview exact-head |
| Sitemap, robots, schema o generación | HIGH | Fixtures positivos/negativos, consistencia entre señales y drift generado |
| Redirect/canonical global, dominio o publicación masiva | CRITICAL | Auditoría independiente, rollback probado y aprobación humana |

La clasificación final y los estados de evidencia pertenecen a
[QUALITY_GATES.md](QUALITY_GATES.md). La selección interdisciplinaria pertenece
a [INTERDISCIPLINARY_REVIEW_MATRIX.md](INTERDISCIPLINARY_REVIEW_MATRIX.md).

## Evidencia y STOP conditions

La evidencia SEO identifica issue, HEAD, entorno, URL, viewport, comando o
método, resultado literal y limitaciones. Capturas solas no prueban status HTTP,
canonical, enlaces ni schema.

Se debe detener el cambio ante:

- riesgo de pérdida del posicionamiento o canonical de Río Cuarto;
- publicación/indexación no autorizada;
- contenido local clonado o afirmaciones sin respaldo;
- conflicto entre canonical, redirect, robots, sitemap o enlaces;
- necesidad de mutar DNS, Vercel o Search Console fuera del contrato;
- ausencia de rollback para un cambio HIGH o CRITICAL;
- HEAD o preview distinto del auditado;
- scope, secreto o dato personal inesperado.

## Reconciliación

Después de una integración que cambie verdad SEO, se actualizan de forma
coherente este owner, el mapa de rutas, el owner de producto, la decisión durable
si aplica y el changelog. La aceptación post-merge y la observación externa no
se anticipan desde el Draft PR.
