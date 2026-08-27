# Changelog de documentación canónica

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/CHANGELOG.md` (historial de cambios en truth e instrucciones)

Este archivo registra cambios durables de los owners documentales. No reemplaza
el historial Git ni almacena SHAs, previews, conteos de tests o resultados
volátiles.

## Unreleased — issue #3

Status: `CURRENT_IN_PROGRESS`

### Added

- Router raíz y routers específicos para documentación, GitHub, APIs y media.
- Entrada `docs/START_HERE.md` y registro de owners `docs/truth/INDEX.md`.
- Owners de arquitectura, capacidades, rutas, SEO, contenido/comunicación,
  marketing/analítica, seguridad/privacidad, testing, quality gates, revisión
  interdisciplinaria, backlog, decisiones, workflow y release/rollback.
- Owners reservados para el Golden SEO Baseline y el contrato de paridad de
  #26, ambos explícitamente `PLANNED_NOT_IMPLEMENTED`.
- Plantillas canónicas de `TASK_CONTRACT`, manifiesto de evidencia y auditoría
  independiente.
- Frontera de planeamiento Geo-SEO, marcada `PLANNED_NOT_IMPLEMENTED`.
- Gobierno inicial de GitHub: instrucciones compatibles, issue forms, PR
  template, milestones, labels y jerarquía nativa cuando la API lo permite.

### Decisions

- #24 es el siguiente bloque obligatorio antes de #4 y conserva ownership de
  scripts, gates ejecutables y workflows.
- #2 se asigna a M0 por la limitación de un milestone por issue; #25 pertenece a
  M4.
- `.github/copilot-instructions.md` actúa como router; no se agregan por ahora
  `.github/instructions/**` ni `.github/agents/**` para evitar duplicación.
- La jerarquía nativa coloca #24 inmediatamente entre #3 y #4 y anida #14–#18
  bajo #13; el addendum vigente agrega #26 inmediatamente entre #4 y #5.
- #26 pertenece a M0 y bloquea #5, #7, #19 y #20; templates y formularios
  capturan contexto SEO/paridad sin implementar ni aprobar el gate.

### Explicitly unchanged

- Producto público: HTML, CSS, JavaScript, APIs, rutas y páginas de ciudades.
- `feat/bilingual-site` y otros PRs o ramas.
- Vercel, DNS, Search Console, GA4, GTM y Google Ads.
- Scripts, schemas, CI o workflows ejecutables del harness.

Este bloque pasa a una entrada integrada sólo después del merge humano y la
reconciliación post-merge. Mientras el cambio sea Draft PR, no se presenta como
verdad de `main`.

## Política de actualización

- Agregar una entrada cuando cambie un owner, contrato, decisión o ruta de
  descubrimiento.
- Enlazar la issue responsable y separar `Added`, `Changed`, `Deprecated`,
  `Superseded` y `Removed` cuando corresponda.
- No borrar entradas históricas. Una verdad reemplazada conserva referencia a
  su sucesora y status `HISTORICAL_SUPERSEDED`.
- Mantener evidencia de ejecución en issue/PR/manifiesto, no en este archivo.
