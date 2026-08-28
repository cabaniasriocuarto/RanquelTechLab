# Changelog de documentación canónica

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/truth/CHANGELOG.md` (historial de cambios en truth e instrucciones)

Este archivo registra cambios durables de los owners documentales. No reemplaza
el historial Git ni almacena SHAs, IDs/URLs de preview, conteos de tests o
resultados volátiles. Puede registrar una decisión humana durable sobre un side
effect acotado sin copiar sus detalles operativos.

## Unreleased — issue #3

Status: `CURRENT_IN_PROGRESS`

### Added

- Router raíz y routers específicos para documentación, GitHub, APIs y media.
- Entrada `docs/START_HERE.md` y registro de owners `docs/truth/INDEX.md`.
- Owners de arquitectura, capacidades, rutas, SEO, contenido/comunicación,
  marketing/analítica, seguridad/privacidad, testing, quality gates, revisión
  interdisciplinaria, backlog, decisiones, workflow y release/rollback.
- Owner canónico de procedencia y derechos de medios, con el inventario heredado
  honestamente `PENDING_TO_VALIDATE`.
- Owners reservados para el Golden SEO Baseline y el contrato de paridad de
  #26; los owners están `CURRENT_IN_PROGRESS` en este Draft y las capacidades
  que reservan siguen `PLANNED_NOT_IMPLEMENTED`.
- Plantillas canónicas de `TASK_CONTRACT`, manifiesto de evidencia y auditoría
  independiente.
- Frontera de planeamiento Geo-SEO, marcada `PLANNED_NOT_IMPLEMENTED`.
- Gobierno inicial de GitHub: instrucciones compatibles, issue forms, PR
  template, milestones, labels y jerarquía nativa cuando la API lo permite.
- Lifecycle no autocerrante: `Refs #N`, aceptación post-merge, reconciliación de
  truth y cierre humano explícito como eventos separados.

### Decisions

- #28 es el siguiente bloque obligatorio después de #3 y antes de #24; conserva
  todos los previews inventariados en la evidencia volátil de PR #27 y es el
  owner de la topología Vercel.
- #24 sigue después de #28 y antes de #4, con ownership de scripts, gates
  ejecutables y workflows.
- #2 se asigna a M0 por la limitación de un milestone por issue; #25 pertenece a
  M4.
- `.github/copilot-instructions.md` actúa como router; no se agregan por ahora
  `.github/instructions/**` ni `.github/agents/**` para evitar duplicación.
- La jerarquía nativa preserva `#3 → #28 → #24 → #4 → #26 → #5` y anida
  #14–#18 bajo #13.
- #26 pertenece a M0 y bloquea #5, #7, #19 y #20; templates y formularios
  capturan contexto SEO/paridad sin implementar ni aprobar el gate.

### Changed

- Las plantillas separan inventario de superficies `Sxx` de la clasificación
  interdisciplinaria D01–D12 y derivan esta última desde la matriz canónica.
- Los gates SEO de formularios y contratos aceptan los resultados aplicables del
  vocabulario completo de `SOURCE_OF_TRUTH.md`, sin enums reducidos paralelos.
- El conteo de previews deja los owners estables; éstos referencian el registro
  volátil `F-PR-001` de PR #27 sin copiar el número. La decisión durable de
  conservación no cambia.
- La doble emisión Ads observable en `gracias-videollamada.html` queda
  `PENDING_TO_VALIDATE`, con baseline en #4 y resolución en #11.
- Procedencia, licencia y responsable por asset enrutan al owner único
  `MEDIA_PROVENANCE.md`.
- Los resultados globales del manifest derivan del vocabulario canónico completo
  y conservan causas específicas de ausencia o bloqueo.
- El lifecycle define un único Draft PR state-only de reconciliación después del
  merge/aceptación, sin push directo ni nuevo scope de implementación.
- El lifecycle convierte el staged set en commit publicado y Draft PR antes de
  CI/auditoría, repite el ciclo completo ante `NEW_HEAD` y separa el merge
  humano de la captura del SHA realmente integrado.
- Todo Draft PR implementable solicita auditoría independiente. La intensidad
  es proporcional al riesgo y `INDEPENDENTLY_VALIDATED` exige todos los checks
  materiales en `PASS` o `NOT_APPLICABLE` con justificación válida.
- El formulario de tarea implementable presenta en español todo texto humano y
  conserva sin traducir sólo IDs, enums, paths y labels GitHub contractuales.
- El router común aplica procedencia y gates de medios tanto a `media/**` como a
  `images/**` sin crear un router hermano fuera de la allowlist de #3.
- Los owners `CURRENT_IN_PROGRESS` se describen como propuestas del Draft, no
  como gobierno vigente de `main`.
- El formulario de nueva ciudad exige inventario `Sxx` separado y clasificación
  D01–D12 completa, incluida la decisión explícita sobre D09.

### Explicitly unchanged

- Producto público: HTML, CSS, JavaScript, APIs, rutas y páginas de ciudades.
- `feat/bilingual-site` y otros PRs o ramas.
- Configuración Vercel, DNS, Search Console, GA4, GTM y Google Ads. Todos los
  previews inventariados en la evidencia volátil de PR #27 se conservan y no se
  limpian ni promueven dentro de #3.
- Scripts, schemas, CI o workflows ejecutables del harness.

Este bloque pasa a una entrada integrada sólo después del merge humano, la
aceptación y la reconciliación post-merge. Mientras el cambio sea Draft PR, sus
documentos y decisiones permanecen `CURRENT_IN_PROGRESS`; la promoción de
estados se prepara, pero no se ejecuta aquí. El cierre de #3 es posterior,
explícito y humano.

## Política de actualización

- Agregar una entrada cuando cambie un owner, contrato, decisión o ruta de
  descubrimiento.
- Enlazar la issue responsable y separar `Added`, `Changed`, `Deprecated`,
  `Superseded` y `Removed` cuando corresponda.
- No borrar entradas históricas. Una verdad reemplazada conserva referencia a
  su sucesora y status `HISTORICAL_SUPERSEDED`.
- Mantener evidencia de ejecución en issue/PR/manifiesto, no en este archivo.
