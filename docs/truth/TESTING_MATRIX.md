# Matriz de pruebas

Status: `CURRENT_IN_PROGRESS`

Owner: docs/truth/TESTING_MATRIX.md (selección de pruebas por superficie)

## Alcance

Este owner determina qué validar según las superficies modificadas. Los niveles
de riesgo, gates y estados de evidencia pertenecen a
[QUALITY_GATES.md](QUALITY_GATES.md); las disciplinas requeridas pertenecen a
[INTERDISCIPLINARY_REVIEW_MATRIX.md](INTERDISCIPLINARY_REVIEW_MATRIX.md).

La matriz es normativa, no una implementación. Los scripts, el clasificador de
superficies, fixtures y workflows del Engineering Harness pertenecen a #24 y
continúan PLANNED_NOT_IMPLEMENTED. Hasta entonces se ejecutan las capacidades
disponibles y se registran literalmente las brechas.

## Tipos de validación

- **Focal:** prueba directa del comportamiento o documento cambiado.
- **Regresión:** protege contratos vecinos que podrían verse afectados.
- **Surface gate:** revisión especializada elegida por superficie.
- **Integración:** verifica límites entre páginas, runtime, API o proveedor.
- **Visual:** inspección desktop/móvil del preview exact-head.
- **Externa:** observación read-only de producción o una plataforma autorizada.
- **Post-merge:** confirma el resultado integrado/publicado y el rollback.
- **Negativa:** demuestra que entradas o estados inválidos fallan de forma
  cerrada.

Una comprobación puede cubrir más de un tipo, pero el manifest debe explicar
qué contrato protege. Un comando exitoso que no prueba el criterio no es PASS.

## Selección obligatoria

Antes de editar:

1. enumerar todos los paths y sistemas externos potencialmente afectados;
2. clasificar cada changed surface, incluido comportamiento semántico indirecto;
3. asignar el mayor riesgo material;
4. seleccionar una prueba focal por contrato modificado;
5. seleccionar regresiones para contratos preservados;
6. aplicar los surface gates de esta matriz;
7. declarar validación visual y externa como requerida o justificar
   NOT_APPLICABLE;
8. incluir STOP conditions y rollback;
9. registrar brechas como NOT_RUN, PARTIAL, AUTH_BLOCKED, PREVIEW_BLOCKED o
   CAPABILITY_GAP, nunca como PASS.

Si aparece una superficie no declarada, se detiene el bloque y se reevalúa el
TASK_CONTRACT antes de continuar.

## Matriz por superficie

| Changed surface | Riesgo mínimo usual | Prueba focal | Regresión y gates |
| --- | --- | --- | --- |
| Documentación y routers | LIGHT | Markdown, links relativos, anchors únicos, Status, Owner y descubrimiento | Owner único, contradicciones, estados, scope y secretos |
| Plantillas e instrucciones de GitHub | STANDARD | Estructura parseable, campos obligatorios, links y lenguaje fail-closed | Compatibilidad con AGENTS, permisos implícitos, cierre/Ready/merge no automáticos |
| Administración GitHub | STANDARD | Lectura antes de mutación, coincidencia exacta e idempotencia | Milestones, labels, estados, orden y relaciones sin duplicados ni cierre accidental |
| Arquitectura o contrato de datos | HIGH | Schema/invariantes y casos válidos/inválidos | Rutas, generación, compatibilidad, reversibilidad y owners |
| Copy público | STANDARD | Contenido renderizado, afirmaciones, CTA y enlaces | SEO, accesibilidad, responsive, marca y privacidad |
| Página o ruta pública nueva | HIGH | Respuesta, contenido, navegación y journey principal | Desktop/móvil, accesibilidad, SEO, performance, analítica y rollback |
| SEO: canonical, robots, sitemap o schema | HIGH | Señal objetivo y consistencia entre señales | Crawl, enlaces, indexación, Home de Río Cuarto, fixtures negativos y preview |
| Redirect global, dominio o publicación masiva | CRITICAL | Mapa completo y comportamiento origen-destino | Loops/cadenas, canonical, enlaces, sitemap, observación externa y rollback probado |
| Frontend o interacción | STANDARD | Estado inicial, acciones, errores y teclado | Viewports, navegación, reduced motion, consola, performance y contenido |
| Accesibilidad | STANDARD | Semántica, nombre accesible, teclado, foco y contraste | Journey móvil/desktop, zoom, errores, alt y tecnologías de asistencia proporcionales |
| Media | STANDARD | Origen/licencia, formato, dimensiones, alt y render | Peso, responsive, LCP/CLS, links rotos y cache |
| API serverless, formulario o input | HIGH | Contrato válido/inválido, status, método y sanitización | Auth, rate limits, CORS, logs, secretos, PII, timeout y consumidor frontend |
| Seguridad, headers o permisos | HIGH | Control objetivo y caso de abuso | Least privilege, trust boundary, supply chain, datos y rollback |
| Analítica o tags | HIGH | Disparador, payload sanitizado y deduplicación | Consentimiento, cardinalidad, recepción autorizada, performance y cero PII |
| Google Ads o conversión paga | CRITICAL si activa/gasta | Correspondencia campaña-landing-CTA y conversión | SEO, tracking, privacidad, ubicación, presupuesto, aprobación y rollback |
| Fuente o output generado | HIGH | Reproducibilidad desde árbol limpio | Drift, determinismo, idempotencia y prohibición de edición manual |
| Workflow/CI | HIGH | Evento, permisos, SHA evaluado y resultado | Forks no confiables, secrets, concurrency, pinning y ausencia de deploy/merge automático |
| Configuración o deploy externo | CRITICAL | Mutación exacta, autorizada y reversible | Entorno, producción, DNS, logs, preview, postdeploy y aceptación humana |

El riesgo final puede escalar por alcance, irreversibilidad, datos, producción o
acumulación de superficies.

## Matriz documental

Todo cambio bajo docs debe comprobar:

- sintaxis Markdown y estructura de headings;
- links locales y anchors;
- Status y Owner explícitos;
- owner único por tipo de verdad;
- ausencia de contradicciones entre owners y routers;
- separación entre implementado, en progreso, plan, historia y estado externo;
- ausencia de estado volátil en documentos estables;
- términos de riesgo y evidencia consistentes;
- scope exacto y ausencia de secretos o datos personales;
- changelog/decisión sólo cuando cambie verdad durable.

Un link a un archivo que esta misma tarea debe crear puede evaluarse sobre el
diff completo. Un link roto al cerrar la tarea es FAIL.

## Matriz visual

La validación visual es obligatoria cuando cambia HTML público, estilos,
interacción, media crítica o contenido cuyo layout pueda degradarse.

Como mínimo:

- preview del mismo HEAD;
- viewport desktop y móvil representativos;
- navegación principal y CTA;
- contenido sin recortes o solapamientos;
- foco, teclado y estados de error cuando existan;
- consola y red sin errores nuevos materiales;
- evidencia vinculada a ruta, viewport y HEAD.

Para documentación no renderizada en producto puede declararse NOT_APPLICABLE
con justificación. PREVIEW_BLOCKED no equivale a PASS.

## APIs y privacidad

Una prueba de API incluye casos válidos, inválidos y de abuso proporcionales:

- método y status;
- límites de tamaño/tipo;
- normalización y sanitización;
- mensajes sin filtración de detalles;
- auth/autorización cuando corresponda;
- rate limit y timeout;
- CORS y headers;
- logs y respuestas sin PII o secretos;
- comportamiento del consumidor ante fallo.

No se usan datos personales reales como fixtures. Las reglas completas viven en
[SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md) y api/AGENTS.md.

## SEO, contenido y medición

Para SEO se aplica [SEO_CONTRACT.md](SEO_CONTRACT.md); para afirmaciones y valor
local, [CONTENT_COMMUNICATION_STANDARD.md](CONTENT_COMMUNICATION_STANDARD.md);
para eventos y campañas,
[MARKETING_ANALYTICS_CONTRACT.md](MARKETING_ANALYTICS_CONTRACT.md).

Una página local no puede obtener PASS sólo por compilar o renderizar. Debe
superar conjuntamente los gates técnicos, editoriales, visuales y de medición
que sean materiales.

## Git, scope y staged evidence

Toda tarea ejecuta y registra:

- diff check del worktree;
- staging exacto por paths explícitos;
- diff check del índice;
- comparación de paths cambiados y staged contra la allowlist;
- revisión de cambios semánticos no evidentes por nombre de archivo;
- scan de secretos, credenciales, PII y archivos de entorno;
- confirmación de que el HEAD auditado coincide con el HEAD del PR.

No se permite git add . ni git add -A. Un worktree con drift ajeno se trata de
forma fail-closed y no se limpia destructivamente.

## Entornos y portabilidad

- Las pruebas locales declaran sistema operativo y runtime relevantes.
- Las pruebas de tooling de #24 deberán cubrir Windows/PowerShell y CI Linux.
- Un PASS local no se reporta como PASS de CI.
- Preview, producción y plataformas externas son entornos diferentes.
- Los resultados identifican el SHA exacto; latest o una URL sin SHA no alcanza.
- Una capacidad inexistente se reporta CAPABILITY_GAP y se asigna a su issue
  owner; no se simula con documentación.

## Falla y reparaciones

Un hallazgo material detiene el gate afectado. Dentro de una tarea coherente se
permiten hasta dos reparaciones acotadas si siguen en scope y se repite toda
prueba invalidada. Un tercer fallo materialmente independiente, ambigüedad
arquitectónica o expansión de superficie activa una STOP condition.

El auditor independiente revisa; no repara dentro del dictamen.

## Cierre

La matriz final del manifest debe enumerar criterio, prueba, entorno, resultado,
estado de evidencia, artefacto y limitación. SELF_VALIDATED_ONLY es el máximo
estado emitido por el writer. Merge, deploy, aceptación post-merge,
reconciliación de truth y cierre explícito de la issue son eventos humanos
separados.
