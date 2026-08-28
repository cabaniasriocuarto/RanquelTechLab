# Gates de calidad, riesgo y evidencia

Status: `CURRENT_IN_PROGRESS`

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
9. COMMIT_CANDIDATE
10. PUSH_CANDIDATE
11. DRAFT_PR_CREATE_OR_UPDATE
12. CI_EXACT_HEAD
13. INDEPENDENT_REVIEW_REQUEST
14. INDEPENDENT_AUDIT
15. HUMAN_GATE
16. HUMAN_MERGE
17. CAPTURE_INTEGRATED_SHA
18. POST_MERGE_ACCEPTANCE
19. TRUTH_RECONCILIATION
20. EXPLICIT_ISSUE_CLOSE

Un paso posterior no sana uno anterior fallido. Commit, push, Draft PR, CI verde
o preview aislado no equivalen a DONE.

El orden de reparación definido por
[DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md) se proyecta sin variantes:

```text
REPAIR_EDIT
→ DIFF_CHECK
→ EXACT_STAGE
→ STAGED_SCOPE_SECRET_RECHECK
→ AFFECTED_FOCAL_TESTS
→ AFFECTED_SURFACE_GATES
→ COMMIT_CANDIDATE
→ CAPTURE_NEW_HEAD
→ VERIFY_COMMIT_TREE_MATCH
→ PUSH_CANDIDATE
→ DRAFT_PR_UPDATE
→ CI_EXACT_HEAD
→ INDEPENDENT_REVIEW_REQUEST
→ INDEPENDENT_AUDIT
```

`REPAIR_EDIT` todavía no es `NEW_HEAD`. Registrar
`VALIDATED_STAGED_TREE_SHA` después del staging y los gates locales, pero antes
de `COMMIT_CANDIDATE`. El commit crea el SHA; `CAPTURE_NEW_HEAD` lo registra y
`VERIFY_COMMIT_TREE_MATCH` exige que `NEW_HEAD_TREE_SHA` sea igual al staged tree
validado. Una diferencia produce `TREE_MATCH=FAIL` y prohíbe push y auditoría;
sólo `TREE_MATCH=PASS` permite continuar. Toda evidencia del HEAD anterior queda
obsoleta. Los gates no afectados sólo pueden usar `NOT_APPLICABLE` con
justificación concreta; un cambio de contrato transversal repite la matriz
contractual completa aplicable. Omitir un paso bloquea el ciclo.

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
| INDEPENDENTLY_VALIDATED | Un auditor distinto revisó el HEAD exacto y el inventario requerido completo contiene sólo parejas válidas: MATERIAL/PASS o NOT_APPLICABLE/NOT_APPLICABLE con justificación concreta de no materialidad |
| POST_MERGE_ACCEPTED | El resultado integrado/publicado fue aceptado según el runbook |

Reglas de interpretación:

- NOT_RUN, PARTIAL, UNKNOWN, AUTH_BLOCKED, PREVIEW_BLOCKED y CAPABILITY_GAP nunca
  son PASS.
- NOT_APPLICABLE exige superficie inspeccionada y razón concreta de no
  materialidad; no significa no mirado.
- NOT_RUN, PARTIAL, UNKNOWN, AUTH_BLOCKED, PREVIEW_BLOCKED, CAPABILITY_GAP,
  FAIL y BLOCKED impiden conceder INDEPENDENTLY_VALIDATED. También lo impiden
  un check requerido omitido, una fila duplicada, un NOT_APPLICABLE sin
  justificación válida o cualquier pareja distinta de MATERIAL/PASS y
  NOT_APPLICABLE/NOT_APPLICABLE justificado. Un check MATERIAL con resultado
  NOT_APPLICABLE siempre bloquea la madurez.
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
| Auditoría independiente | Solicitud obligatoria; revisión proporcional | Solicitud obligatoria; revisión proporcional | Obligatoria y exact-head completa | Obligatoria, exact-head completa y con aprobación humana |
| Rollback | Reversión simple | Documentado | Verificable | Probado y autorizado |
| Post-merge | Reconciliar truth | Aceptación proporcional | Aceptación funcional/externa | Ventana, owner y criterios explícitos |

Una issue puede endurecer la intensidad, pero nunca omitir la solicitud. Para
todo Draft PR implementable rige `INDEPENDENT_REVIEW_REQUEST=REQUIRED`.

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

### COMMIT_CANDIDATE, PUSH_CANDIDATE y DRAFT_PR_CREATE_OR_UPDATE

El staged set validado se convierte en un commit con SHA completo. En una
reparación, primero se captura ese `NEW_HEAD`, luego se obtiene su tree y se
exige `TREE_MATCH=PASS`; recién entonces se publica mediante push normal y se
crea o actualiza el Draft PR. Antes de CI, el HEAD local, el remote head y el
head del Draft PR deben coincidir. Un índice sin commit, un commit sólo local o
`TREE_MATCH=FAIL` no pueden recibir evidencia exact-head remota. A partir de
`CAPTURE_NEW_HEAD`, cada prueba remota y auditoría debe citar ese SHA. Ningún
resultado local, remoto ni independiente se hereda del HEAD anterior.

### CI_EXACT_HEAD

La evidencia identifica el mismo SHA local, remoto y del Draft PR. Hasta que la
issue #24 implemente CI aplicable, la brecha se reporta CAPABILITY_GAP o
NOT_APPLICABLE sólo cuando el criterio no sea material; nunca se fabrica un PASS
de CI ni se hereda el resultado de otro commit.

### INDEPENDENT_REVIEW_REQUEST e INDEPENDENT_AUDIT

Sesión/agente distinto, read-only, mismo HEAD, revisión completa de findings y
sin reparación dentro del dictamen. Se registran por separado:

- `INDEPENDENT_REVIEW_REQUESTED=true|false` y
  `INDEPENDENT_REVIEW_REQUEST_STATE`;
- `INDEPENDENT_REVIEW_EXECUTION_STATE`;
- `INDEPENDENT_AUDIT_VERDICT=PASS|CHANGES_REQUIRED|BLOCKED|NOT_ISSUED`;
- `AUDITED_HEAD` y `OPEN_MATERIAL_FINDINGS`.

Request `PASS` sólo acredita una solicitud válida, evidenciada y dirigida al
HEAD. Execution `PASS` sólo acredita que la auditoría se completó y emitió un
dictamen. El dictamen conserva su resultado propio.

La solicitud es obligatoria para todo Draft PR implementable. `LIGHT` y
`STANDARD` admiten revisión proporcional; `HIGH` y `CRITICAL` exigen revisión
exact-head completa. `CHANGES_REQUIRED`, `BLOCKED`, `NOT_ISSUED`, `NOT_RUN`,
`CAPABILITY_GAP`, `AUTH_BLOCKED`, `HEAD_MISMATCH` y `OPEN_FINDINGS_GT_0`
conservan su dimensión o causa y bloquean el avance regular a HUMAN_GATE; no se
convierten en PASS. La excepción bootstrap para una CI inexistente conserva
`HARNESS_CI_EXACT_HEAD=CAPABILITY_GAP` y jamás completa o relaja la auditoría.

### HUMAN_GATE

Una persona decide Ready, merge, cierre explícito de la issue, deploy, secretos,
DNS, Search Console, Analytics, Ads, publicación y gasto. El silencio no es
autorización. La transición regular sólo se recomienda cuando:

```text
INDEPENDENT_REVIEW_REQUESTED=true
AND INDEPENDENT_REVIEW_REQUEST_STATE=PASS
AND INDEPENDENT_REVIEW_EXECUTION_STATE=PASS
AND INDEPENDENT_AUDIT_VERDICT=PASS
AND AUDITED_HEAD=HEAD
AND OPEN_MATERIAL_FINDINGS=0
```

Una combinación `INDEPENDENT_AUDIT_VERDICT=PASS` con findings materiales
abiertos es inválida y falla cerradamente.

### HUMAN_MERGE y CAPTURE_INTEGRATED_SHA

Después de la decisión humana, leer el PR en GitHub y registrar `PR_NUMBER`,
`PR_MERGED=YES`, `MERGED_PR_HEAD`, `AUDITED_PR_HEAD` e
`INDEPENDENT_REVIEW_HEAD`. `HUMAN_MERGE=PASS` exige igualdad entre esos tres
HEADs. Cualquier diferencia produce `MERGE_ACCEPTANCE=BLOCKED_HEAD_DRIFT` y
prohíbe capturar el SHA integrado.

Con la identidad aprobada, obtener `INTEGRATED_SHA` del resultado del PR
mergeado, registrar `INTEGRATED_SHA_SOURCE=MERGED_PR`, el método observable y su
reachability desde `main`. `MAIN_HEAD_AT_ACCEPTANCE` se registra por separado:
puede ser un tip posterior y nunca identifica por sí mismo qué commit integró el
PR.

### POST_MERGE_ACCEPTANCE, TRUTH_RECONCILIATION y EXPLICIT_ISSUE_CLOSE

`POST_MERGE_ACCEPTANCE` requiere `HUMAN_MERGE=PASS`, `PR_MERGED=YES` e
`INTEGRATED_SHA` capturado. Verifica ese SHA integrado o publicado, no el Draft
PR ni un PR head no integrado. Se actualizan owners e historia sin anticipar
resultados externos.

`TRUTH_RECONCILIATION=PASS` sólo admite `NO_DIFF`, con justificación y evidencia
no vacías y `SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`, o `MERGED_PR`. Este segundo
modo requiere V-017 en `PASS`, número y HEAD reales del PR de reconciliación y la
conjunción exacta:

```text
RECONCILIATION_REVIEW_REQUESTED=true
AND RECONCILIATION_REVIEW_REQUEST_STATE=PASS
AND RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_PR_HEAD
AND RECONCILIATION_REVIEW_EXECUTION_STATE=PASS
AND RECONCILIATION_AUDIT_VERDICT=PASS
AND RECONCILIATION_AUDITED_HEAD=RECONCILIATION_PR_HEAD
AND RECONCILIATION_OPEN_MATERIAL_FINDINGS=0
AND RECONCILIATION_PR_MERGED=true
AND RECONCILIATION_INTEGRATED_SHA_SOURCE=MERGED_PR
AND RECONCILIATION_INTEGRATED_SHA=<sha real>
AND RECONCILIATION_SHA_REACHABLE_FROM_MAIN=YES
```

Toda otra combinación mantiene la reconciliación fuera de `PASS`. `NO_DIFF` no
requiere un PR ficticio. Draft, Ready y cerrado sin merge no satisfacen
`MERGED_PR`. Sólo después de aceptación y una de esas dos rutas completas una
persona autorizada cierra la issue explícitamente. Los PRs usan `Refs #N`; las
closing keywords no son compatibles con esta secuencia.

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
- Sólo solicitud `true`/`PASS`, ejecución `PASS`, dictamen `PASS`,
  `AUDITED_HEAD=HEAD` y cero findings materiales abiertos permiten la transición
  regular a HUMAN_GATE; cualquier otra combinación falla cerradamente.
- El writer termina en SELF_VALIDATED_ONLY.
- Ready, merge y publicación continúan siendo humanos incluso con
  INDEPENDENTLY_VALIDATED.
- DONE exige aceptación post-merge, truth reconciliada y cierre humano
  explícito, no sólo merge o cierre técnico automático.
