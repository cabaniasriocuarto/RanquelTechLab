# Gates de calidad, riesgo y evidencia

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: docs/truth/QUALITY_GATES.md (niveles de riesgo, secuencia de gates y
semántica de evidencia)

## Alcance

Este documento define cuándo una tarea puede avanzar y cómo reportar evidencia.
No implementa scripts, workflows ni CI. La automatización fail-closed y sus
fixtures pertenecen a #24 y permanecen PLANNED_NOT_IMPLEMENTED.

La ausencia actual de tooling no autoriza a omitir un gate ni a inventar un
resultado. Se usa la capacidad disponible y se registra la brecha con el estado
honesto correspondiente.

## Secuencia obligatoria

Toda tarea sigue este orden:

1. PREFLIGHT
2. TASK_CONTRACT
3. EDIT
4. DIFF_CHECK
5. EXACT_STAGE
6. STAGED_SCOPE_SECRET_RECHECK
7. FOCAL_TESTS
8. SURFACE_GATES
9. CI_EXACT_HEAD
10. INDEPENDENT_REVIEW
11. HUMAN_GATE
12. POST_MERGE_ACCEPTANCE
13. TRUTH_RECONCILIATION
14. EXPLICIT_ISSUE_CLOSE

Un paso posterior no sana uno anterior fallido. Commit, push, Draft PR, CI verde
o preview aislado no equivalen a DONE.

## Niveles de riesgo

El nivel se decide por la superficie más riesgosa, alcance, reversibilidad,
datos, exposición y sistema externo. No se promedia.

### LIGHT

Documentación no renderizada o cambio local sin efecto sobre producto, contratos
críticos, configuración, datos ni sistemas externos.

### STANDARD

Contenido, UI o gobernanza acotados y reversibles que no alteran SEO indexable,
medición, inputs, seguridad, generación o publicación.

### HIGH

Incluye, como mínimo, nuevas rutas/páginas, SEO indexable, navegación, analítica,
formularios, APIs, headers, permisos, generación, workflows o cambios con
privacidad relevante.

### CRITICAL

Incluye publicación masiva, dominio, canonical/redirect global, secretos,
seguridad crítica, producción, DNS, campañas activas/gasto, migración destructiva
o riesgo material para el posicionamiento de Río Cuarto.

El humano o una disciplina material puede escalar riesgo. Reducirlo requiere
evidencia y decisión explícitas; no basta con dividir archivos.

## Presupuesto de cambio

El TASK_CONTRACT fija paths, símbolos/comportamientos, sistemas externos,
volumen esperado y cantidad de reparaciones. El presupuesto no es permiso para
usar todo el límite. Cualquier superficie o mutación externa nueva obliga a
detenerse y recontratar scope.

## Resultados de validación y madurez

La semántica canónica de estados y evidencia pertenece a
[SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md). Este owner la aplica a los gates y
niveles de riesgo sin crear valores alternativos.

### Resultados por check

| Estado | Significado |
| --- | --- |
| PASS | El criterio fue ejecutado en el alcance y entorno declarados y cumplió |
| FAIL | El criterio fue ejecutado y no cumplió |
| BLOCKED | Un impedimento conocido evita continuar de forma segura |
| NOT_RUN | La validación requerida no se ejecutó |
| NOT_APPLICABLE | El criterio no es material; incluye justificación concreta |
| PARTIAL | Sólo se cubrió parte del criterio o alcance |
| UNKNOWN | No existe evidencia suficiente para afirmar el estado |
| AUTH_BLOCKED | Falta autorización o acceso al sistema requerido |
| PREVIEW_BLOCKED | No existe o no es verificable un preview del HEAD exacto |
| CAPABILITY_GAP | La capacidad/herramienta necesaria no existe aún |

### Madurez del conjunto de evidencia

| Estado | Significado |
| --- | --- |
| SELF_VALIDATED_ONLY | El writer completó su validación; no hubo auditoría independiente |
| INDEPENDENTLY_VALIDATED | Un auditor distinto revisó el HEAD exacto sin FAIL o BLOCKED abierto |
| POST_MERGE_ACCEPTED | El resultado integrado/publicado fue aceptado según el runbook |

Reglas de interpretación:

- NOT_RUN, PARTIAL, UNKNOWN, AUTH_BLOCKED, PREVIEW_BLOCKED y CAPABILITY_GAP nunca
  son PASS.
- NOT_APPLICABLE exige superficie inspeccionada y razón; no significa no mirado.
- SELF_VALIDATED_ONLY, INDEPENDENTLY_VALIDATED y POST_MERGE_ACCEPTED son etapas,
  no sustitutos de los resultados de cada gate.
- Un resultado aplica sólo al HEAD, entorno, paths y momento registrados.
- Evidencia contradictoria adopta el estado más conservador hasta resolverse.

## Gates mínimos por riesgo

| Gate | LIGHT | STANDARD | HIGH | CRITICAL |
| --- | --- | --- | --- | --- |
| Preflight y TASK_CONTRACT | Obligatorio | Obligatorio | Obligatorio | Obligatorio |
| Diff, scope y secretos antes/después de stage | Obligatorio | Obligatorio | Obligatorio | Obligatorio |
| Pruebas focales | Obligatorio | Obligatorio | Obligatorio | Obligatorio |
| Regresión | Contratos vecinos | Matriz material | Amplia por superficie | Completa y explícita |
| Surface gates | Según matriz | Según matriz | Todos los materiales | Todos más revisión humana especializada |
| Preview exact-head | Si cambia render público | Si cambia render público | Obligatorio para superficie pública | Obligatorio más comparación/rollback |
| CI exact-head | Si existe capacidad aplicable | Si existe capacidad aplicable | Requerido; brecha explícita si falta | Requerido, sin reemplazo documental |
| Auditoría independiente | Si la issue la pide | Si la issue la pide | Obligatoria | Obligatoria con aprobación humana |
| Rollback | Reversión simple | Documentado | Verificable | Probado y autorizado |
| Post-merge | Reconciliar truth | Aceptación proporcional | Aceptación funcional/externa | Ventana, owner y criterios explícitos |

Una issue puede endurecer la fila. Por ejemplo, una tarea documental STANDARD
puede exigir auditoría independiente aunque la tabla no la requiera por defecto.

## Definición de cada gate

### PREFLIGHT

Registra repositorio, BASE_SHA, HEAD, branch, status, relación con origin/main y
merge/rebase/cherry-pick/revert/bisect activos. Drift no autorizado produce
`BLOCKED`, con razón `BLOCKED_REPO_NOT_CLEAN`, y detiene edición.

### TASK_CONTRACT

Declara objetivo, baseline, fuera de alcance, allowed/forbidden paths, sistemas
externos, changed surfaces, riesgo, contratos preservados, validaciones,
evidencia, STOP conditions y Definition of Done.

### DIFF_CHECK y EXACT_STAGE

Inspecciona el diff completo, ejecuta el check de whitespace y agrega sólo paths
explícitos. Quedan prohibidos git add . y git add -A.

### STAGED_SCOPE_SECRET_RECHECK

Repite diff, scope y scan de secretos/privacidad sobre el índice exacto. El
contenido staged es el candidato evaluado; un archivo correcto fuera del índice
no lo compensa.

### FOCAL_TESTS y SURFACE_GATES

Usan [TESTING_MATRIX.md](TESTING_MATRIX.md) y
[INTERDISCIPLINARY_REVIEW_MATRIX.md](INTERDISCIPLINARY_REVIEW_MATRIX.md).
Cada contrato material tiene criterio y resultado.

### CI_EXACT_HEAD

La evidencia identifica el SHA evaluado. Hasta que #24 implemente CI aplicable,
la brecha se reporta CAPABILITY_GAP o NOT_APPLICABLE sólo cuando el criterio no
sea material; nunca se fabrica un PASS de CI.

### INDEPENDENT_REVIEW

Sesión/agente distinto, read-only, mismo HEAD, revisión completa de findings y
sin reparación dentro del dictamen. La salida es PASS, CHANGES_REQUIRED o
BLOCKED, con severidad, evidencia, path y criterio de cierre.

### HUMAN_GATE

Una persona decide Ready, merge, cierre explícito de la issue, deploy, secretos,
DNS, Search Console, Analytics, Ads, publicación y gasto. El silencio no es
autorización.

### POST_MERGE_ACCEPTANCE, TRUTH_RECONCILIATION y EXPLICIT_ISSUE_CLOSE

Verifican lo integrado o publicado, no el Draft PR. Se actualizan owners e
historia sin anticipar resultados externos. Sólo después una persona autorizada
cierra la issue explícitamente. Los PRs usan `Refs #N`; las closing keywords no
son compatibles con esta secuencia.

## Evidencia requerida

Un manifest suficiente contiene:

- issue, parent/dependencias y TASK_CONTRACT;
- BASE_SHA, HEAD evaluado, branch y relación con main;
- paths changed y staged;
- comandos/métodos y resultados literales;
- matriz criterio-estado-artefacto-limitación;
- entorno, viewport o sistema externo aplicables;
- confirmación de scope y secretos/privacidad;
- preview y CI ligados al SHA, o estado honesto de ausencia;
- riesgos residuales y rollback;
- identidad separada de writer y auditor;
- decisiones humanas requeridas.

No se almacenan tokens, PII, URLs privadas ni logs sin sanitizar.

## STOP conditions universales

Detenerse ante:

- repo, branch, base o HEAD incorrectos;
- operación Git activa inesperada o drift sin owner;
- path, comportamiento o sistema externo fuera de allowlist;
- secreto, credencial, PII o archivo de entorno;
- ambigüedad arquitectónica o acción destructiva;
- tercer fallo materialmente independiente;
- necesidad de cambiar Vercel, DNS, Google, Ads o producción sin autorización;
- contenido o afirmación sin fuente;
- publicación/indexación no autorizada;
- riesgo para Home/canonical/posicionamiento de Río Cuarto;
- preview, CI o auditoría de un HEAD diferente;
- auditor que intenta reparar su propio dictamen.

## Decisión de avance

- FAIL bloquea el criterio.
- BLOCKED y los estados de ausencia se presentan al humano; no se ocultan.
- Sólo todos los gates obligatorios satisfechos permiten recomendar avance.
- El writer termina en SELF_VALIDATED_ONLY.
- Ready, merge y publicación continúan siendo humanos incluso con
  INDEPENDENTLY_VALIDATED.
- DONE exige aceptación post-merge, truth reconciliada y cierre humano
  explícito, no sólo merge o cierre técnico automático.
