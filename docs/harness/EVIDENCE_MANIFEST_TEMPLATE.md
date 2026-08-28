# Plantilla de EVIDENCE_MANIFEST

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/harness/EVIDENCE_MANIFEST_TEMPLATE.md` (estructura canónica de evidencia)

El manifiesto registra qué se ejecutó y observó sobre un HEAD concreto. No
convierte ausencia de ejecución, acceso o capacidad en éxito. Debe ser legible
sin logs privados y no contener tokens, secretos, PII ni URLs privadas.

## 1. Identidad

```yaml
EVIDENCE_MANIFEST:
  MANIFEST_VERSION: RANQUEL_EVIDENCE_MANIFEST_V1
  ISSUE: "#N"
  PARENT: "#N | NONE"
  PR: "URL/número | NOT_CREATED"
  PR_ISSUE_REFERENCE: "Refs #N | NOT_CREATED"
  REPOSITORY: "owner/repo"
  BASE_SHA: "sha completo"
  HEAD: "sha completo validado"
  REMOTE_HEAD: "sha completo publicado; debe coincidir con HEAD"
  PR_HEAD: "sha completo actual del PR; debe coincidir con HEAD"
  V011_DRAFT_OBSERVATION:
    PR_NUMBER: "N"
    PR_IS_OPEN: true
    PR_IS_DRAFT: true
    DRAFT_PR_HEAD: "sha completo igual a HEAD"
    OBSERVED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ"
    EVIDENCE: "ref comprobable"
  PR_CURRENT_STATE: "OPEN_DRAFT | OPEN_READY | MERGED | CLOSED_UNMERGED"
  BRANCH: "rama"
  WRITER: "sesión/agente"
  RECORDED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos"
  OVERALL_VALIDATION_RESULT: "resultado exacto definido por VALIDATION_RESULT_OWNER"
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

Para una reparación que produce un commit nuevo, agregar:

```yaml
REPAIR_CYCLE:
  PREVIOUS_HEAD: "sha completo"
  REQUIRED_SEQUENCE:
    - REPAIR_EDIT
    - DIFF_CHECK
    - EXACT_STAGE
    - STAGED_SCOPE_SECRET_RECHECK
    - AFFECTED_FOCAL_TESTS
    - AFFECTED_SURFACE_GATES
    - POST_GATE_WORKTREE_INDEX_RECHECK
    - COMMIT_CANDIDATE
    - CAPTURE_NEW_HEAD
    - VERIFY_COMMIT_TREE_MATCH
    - PUSH_CANDIDATE
    - DRAFT_PR_UPDATE
    - CI_EXACT_HEAD
    - INDEPENDENT_REVIEW_REQUEST
    - INDEPENDENT_AUDIT
  PRE_GATE_WORKTREE_INDEX_ALIGNMENT: "PASS | FAIL"
  PRE_GATE_STAGED_TREE_SHA: "tree sha"
  GATE_EXECUTION_SOURCE: "INDEXED_CANDIDATE_IN_WORKTREE | ISOLATED_VALIDATED_TREE"
  UNTRACKED_FILES: "NONE | inventario observado fuera de la copia aislada"
  ISOLATED_VALIDATION_TREE_SHA: "tree sha | NOT_APPLICABLE en modo worktree"
  POST_GATE_WORKTREE_INDEX_RECHECK: "PASS | FAIL"
  POST_GATE_CURRENT_INDEX_TREE_SHA: "tree sha"
  VALIDATED_STAGED_TREE_SHA: "tree sha; igual a los trees pre/post cuando el recheck es PASS"
  NEW_HEAD: "sha completo"
  NEW_HEAD_TREE_SHA: "tree sha"
  TREE_MATCH: "PASS | FAIL"
  PREVIOUS_HEAD_EVIDENCE_REUSED: false
  AFFECTED_FOCAL_TESTS: "IDs/refs y resultados"
  AFFECTED_SURFACE_GATES: "IDs/refs y resultados"
  UNAFFECTED_GATES:
    - "gate: NOT_APPLICABLE; justificación concreta | NONE"
  TRANSVERSAL_CONTRACT_CHANGED: "true | false"
  TRANSVERSAL_CONTRACT_MATRIX_REQUIRED: "true | false con justificación"
  TRANSVERSAL_CONTRACT_MATRIX_RESULT: "resultado canónico | NOT_APPLICABLE justificado"
  LOCAL_VALIDATION_ROWS_BOUND_TO_NEW_HEAD: "true | false"
```

`REPAIR_EDIT` identifica un cambio candidato todavía sin commit ni `NEW_HEAD`.
`STAGED_SCOPE_SECRET_RECHECK` ejecuta `git diff --quiet`, inventaría untracked
`git ls-files --others --exclude-standard`, repite cached diff/scope/secrets y
sólo con `PRE_GATE_WORKTREE_INDEX_ALIGNMENT=PASS` captura
`PRE_GATE_STAGED_TREE_SHA`. La allowlist no incorpora esos archivos al
candidato. Si los gates usan el worktree, `UNTRACKED_FILES=NONE` es obligatorio;
si existe untracked ajeno, se usa una copia efímera fuera del repo creada sólo
desde ese staged tree y se prueba
`ISOLATED_VALIDATION_TREE_SHA=PRE_GATE_STAGED_TREE_SHA`. Un untracked relevante
no puede participar en gates sin estar staged. No se agrega ni elimina contenido
ajeno automáticamente. Todos los validadores efímeros y su evidencia o
artefactos se crean fuera del repositorio, incluso cuando los gates usan el
worktree. Después de los gates,
`POST_GATE_WORKTREE_INDEX_RECHECK` repite esos controles y captura
`POST_GATE_CURRENT_INDEX_TREE_SHA`; exige cero drift y que ese tree conserve el
SHA pre-gate, además de demostrar que es el mismo objetivo efectivamente
probado y que ningún artefacto efímero quedó tracked, staged o untracked. Sólo
un recheck `PASS` captura el mismo tree como
`VALIDATED_STAGED_TREE_SHA` antes de `COMMIT_CANDIDATE`. Omitirlo o fallarlo
bloquea commit, push y auditoría y obliga a volver a `DIFF_CHECK`, staging y
gates. El commit crea el SHA; `CAPTURE_NEW_HEAD` lo
registra inmediatamente y `VERIFY_COMMIT_TREE_MATCH` obtiene
`NEW_HEAD_TREE_SHA`. Sólo la igualdad exacta con el staged tree validado permite
`TREE_MATCH=PASS`; `TREE_MATCH=FAIL` bloquea push y auditoría.

`HEAD`, `REMOTE_HEAD` y `PR_HEAD` deben coincidir con diff, CI, preview y
auditoría que se reclaman. Si el commit cambia, se ejecuta completa y en orden la
secuencia `REPAIR_CYCLE`. Desde `CAPTURE_NEW_HEAD`, toda evidencia remota queda
ligada al SHA capturado. Validaciones, scope/secrets, pruebas, gates, CI,
solicitud, ejecución, dictamen y madurez anteriores quedan obsoletos. Un gate no
afectado sólo admite `NOT_APPLICABLE` justificado; un contrato transversal
cambiado exige toda su matriz aplicable.

Para un candidato inicial se omite por completo `REPAIR_CYCLE`: no se inventan
`PREVIOUS_HEAD`, V-R01, trees validados ni `TREE_MATCH`. El commit, la captura
del `HEAD` y el push siguen siendo materiales. Los estados repair-only
`NOT_APPLICABLE` justifican no materialidad y nunca se contabilizan como `PASS`.

`V011_DRAFT_OBSERVATION` demuestra que el PR estaba abierto y Draft antes del
gate humano; `DRAFT_PR_HEAD` no lo demuestra por su nombre. Una transición
Ready posterior, autorizada sobre el mismo HEAD, sólo cambia
`PR_CURRENT_STATE` y no reescribe la observación histórica.

## 2. Baseline y scope

```yaml
BASELINE:
  DEFAULT_BRANCH: main
  ORIGIN_MAIN_SHA: "sha completo"
  RELATION_TO_ORIGIN_MAIN: "ahead N / behind N / diverged / unknown"
  INITIAL_GIT_STATUS: "literal o resumen fiel"
  ACTIVE_GIT_OPERATIONS: "NONE | lista"

SCOPE:
  CONTRACT_REFERENCE: "PR section/link"
  ALLOWED_PATHS:
    - "path/glob"
  ACTUAL_CHANGED_PATHS:
    - "path"
  ACTUAL_STAGED_PATHS:
    - "path"
  FORBIDDEN_PATHS_TOUCHED: false
  CHANGED_SURFACES:
    - "S01 — efecto — paths/símbolos/sistemas — filas exactas de matriz — owners adicionales | NONE"
  DISCIPLINES_D01_D12:
    - "D01 | ... | D12 — nombre canónico — MATERIAL | NOT_APPLICABLE — Sxx activadoras"
  RISK_LEVEL: "LIGHT | STANDARD | HIGH | CRITICAL"
```

Adjuntar o resumir `git diff --name-status`, `git diff --cached --name-status` y
el chequeo contra la allowlist. Drift preexistente se identifica como contexto,
no se atribuye ni repara sin autorización.

## 3. Matriz de validación

Usar una fila por comando o inspección. El comando se registra con argumentos
estructurales exactos pero con secretos reemplazados por placeholders explícitos.
Materialidad y resultado son campos separados: cada fila requerida satisface
`MATERIAL`/`PASS` o `NOT_APPLICABLE`/`NOT_APPLICABLE` con justificación concreta
de no materialidad.

| ID | Gate | Materialidad | Comando/inspección sanitizada | Exit code | Estado | Resultado observado | Evidencia | Limitación/justificación |
| --- | --- | --- | --- | ---: | --- | --- | --- | --- |
| V-001 | Preflight | `MATERIAL` | `<comando>` | `<n>` | `<estado>` | `<resumen literal>` | `<ref>` | `<NONE o detalle>` |
| V-002 | Diff | `MATERIAL` | `git diff --check` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-003 | Staged diff | `MATERIAL` | `git diff --cached --check` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-004 | Scope | `MATERIAL` | `<inspección>` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-005 | Secrets/privacy | `MATERIAL` | `<inspección>` | `<n>` | `<estado>` | `<resultado sanitizado>` | `<ref>` | `<detalle>` |
| V-006 | Focal tests | `<MATERIAL/NOT_APPLICABLE>` | `<comando>` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-007 | Surface gates | `<MATERIAL/NOT_APPLICABLE>` | `<comando/inspección>` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-R01 | Post-gate worktree/index recheck | `<MATERIAL/NOT_APPLICABLE>` | `git diff --quiet; git ls-files --others --exclude-standard; git diff --cached --check; scope; secrets; git write-tree` | `<n>` | `<estado>` | `GATE_EXECUTION_SOURCE=<INDEXED_CANDIDATE_IN_WORKTREE/ISOLATED_VALIDATED_TREE>; UNTRACKED_FILES=<NONE/inventario>; ISOLATED_VALIDATION_TREE_SHA=<tree/NOT_APPLICABLE>; PRE_GATE_STAGED_TREE_SHA=<tree>; POST_GATE_CURRENT_INDEX_TREE_SHA=<tree>; VALIDATED_STAGED_TREE_SHA=<tree>` | `<ref>` | `MATERIAL sólo en REPAIR_CYCLE; worktree exige cero untracked y copia aislada exige el mismo staged tree; fuera de reparación, NOT_APPLICABLE justificado` |
| V-008 | Preview/visual | `<MATERIAL/NOT_APPLICABLE>` | `<URL redactada/ref>` | `N/A` | `<estado>` | `<desktop/móvil>` | `<ref>` | `<detalle>` |
| V-009 | Commit y captura del candidato | `MATERIAL` | `git commit`; capturar `HEAD` | `<n>` | `<estado>` | `CANDIDATE_HEAD=<sha>; REPAIR_CYCLE=<true/false>; si true: NEW_HEAD_TREE_SHA=<tree> y TREE_MATCH=<PASS/FAIL>` | `<ref>` | `Siempre exige commit y captura; sólo en reparación exige V-R01:PASS y TREE_MATCH:PASS; fuera de reparación no se inventan esos campos` |
| V-010 | Push candidato | `MATERIAL` | `git push` | `<n>` | `<estado>` | `REMOTE_HEAD=<sha>` | `<ref>` | `Siempre REQUIRES=V-009:PASS y REMOTE_HEAD=CANDIDATE_HEAD; sólo si REPAIR_CYCLE=true exige TREE_MATCH:PASS` |
| V-011 | Draft PR create/update | `MATERIAL` | `<inspección GitHub>` | `N/A` | `<estado>` | `PR_NUMBER=<N>; PR_IS_OPEN=<true/false>; PR_IS_DRAFT=<true/false>; DRAFT_PR_HEAD=<sha>; OBSERVED_AT_UTC=<instante>` | `<ref>` | `Antes de HUMAN_GATE exige open=true, draft=true y head=HEAD; el estado actual posterior se registra aparte` |
| V-012 | CI exact-head | `<MATERIAL/NOT_APPLICABLE>` | `<job/run real o inspección de capacidad>` | `N/A` | `<estado>` | `HARNESS_CI_EVIDENCE_USED=<true/false>; HARNESS_CI_EXACT_HEAD=<PASS/FAIL/CAPABILITY_GAP>; CI_HEAD=<sha/NOT_CAPTURED>` | `<ref>` | `Comparar CI_HEAD sólo con ejecución real usada; sin CI usar false/CAPABILITY_GAP/NOT_CAPTURED; Vercel no es CI` |
| V-013 | Independent review request | `MATERIAL` | `<solicitud/inspección>` | `N/A` | `<estado>` | `INDEPENDENT_REVIEW_REQUESTED=<true/false>; INDEPENDENT_REVIEW_REQUEST_STATE=<estado>; INDEPENDENT_REVIEW_REQUEST_HEAD=<sha/NOT_REQUESTED>` | `<ref/NONE>` | `CAUSE=<NONE/detalle>` |
| V-014 | Independent audit gate | `MATERIAL` | `<ejecución/dictamen>` | `N/A` | `<estado>` | `INDEPENDENT_REVIEW_EXECUTION_STATE=<estado>; INDEPENDENT_AUDIT_VERDICT=<PASS/CHANGES_REQUIRED/BLOCKED/NOT_ISSUED>; AUDITED_HEAD=<sha/NOT_REVIEWED>; OPEN_MATERIAL_FINDINGS=<n/UNKNOWN>` | `<ref/NONE>` | `CAUSE=<NONE/HEAD_MISMATCH/OPEN_FINDINGS_GT_0/detalle>` |
| V-H01 | Human gate and merge authorizations | `MATERIAL` | `<decisiones humanas>` | `N/A` | `<estado>` | `HUMAN_GATE_AUTHORIZATION=<NOT_RUN/PASS/BLOCKED>; HUMAN_GATE_AUTHORIZED_HEAD=<sha/NOT_CAPTURED>; MERGE_AUTHORIZATION=<NOT_GRANTED/GRANTED>; MERGE_AUTHORIZED_HEAD=<sha/NOT_CAPTURED>` | `<ref/NONE>` | `Gate PASS exige V-014 favorable; V-015 exige además merge GRANTED para el mismo HEAD y evidencia humana` |

`RANQUEL-HARNESS-BOOTSTRAP-001` conserva
`HARNESS_CI_EXACT_HEAD=CAPABILITY_GAP`, está limitado a #3, su closeout y el HEAD
humano expresamente autorizado, y no se transfiere a un candidato nuevo. No
convierte V-012 en `PASS`, no concede madurez independiente y no autoriza por sí
solo Ready o merge. Los contextos Vercel se registran en evidencia separada.

### Registro de fases humanas y post-merge

Estas fases se registran desde el Draft con estados honestos, pero no se usan
para anticipar `INDEPENDENTLY_VALIDATED`: antes del gate humano permanecen
`NOT_RUN`/`false`. Para completar el lifecycle deben ejecutarse en este orden.

#### `PRE_MERGE_DEFAULTS`

Este bloque es la única fuente canónica de defaults pre-merge del manifiesto.
V-H01, V-015, V-016, V-017, V-018 y `WRITER_DECLARATION` deben copiar estos
valores de forma literal; no admiten alias ni sinónimos para representar el
estado pre-merge.

```yaml
PRE_MERGE_DEFAULTS:
  HUMAN_GATE_AUTHORIZATION: NOT_RUN
  HUMAN_GATE_AUTHORIZED_HEAD: NOT_CAPTURED
  HUMAN_GATE_AUTHORIZATION_EVIDENCE: NONE
  MERGE_AUTHORIZATION: NOT_GRANTED
  MERGE_AUTHORIZED_HEAD: NOT_CAPTURED
  MERGE_AUTHORIZATION_EVIDENCE: NONE
  HUMAN_MERGE: NOT_RUN
  PR_NUMBER: NOT_MERGED
  PR_MERGED: false
  MERGED_PR_HEAD: NOT_CAPTURED
  AUDITED_PR_HEAD: NOT_CAPTURED
  INDEPENDENT_REVIEW_HEAD: NOT_CAPTURED
  MERGE_ACCEPTANCE: NOT_RUN
  INTEGRATED_SHA_SOURCE: NOT_CAPTURED
  INTEGRATED_SHA: NOT_CAPTURED
  MERGE_METHOD: NOT_RUN
  INTEGRATED_SHA_REACHABLE_FROM_MAIN: NOT_RUN
  MAIN_HEAD_AT_ACCEPTANCE: NOT_CAPTURED
  POST_MERGE_ACCEPTANCE_SHA: NOT_RUN
  POST_MERGE_ACCEPTANCE_STATE: NOT_RUN
  POST_MERGE_ACCEPTANCE_EVIDENCE: NONE
  TRUTH_RECONCILIATION_MODE: NOT_RUN
  TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA: NOT_RUN
  TRUTH_RECONCILIATION_NO_DIFF_JUSTIFICATION: NONE
  RECONCILIATION_PR: NOT_RUN
  RECONCILIATION_PR_MERGED: false
  RECONCILIATION_PR_HEAD: NOT_CAPTURED
  RECONCILIATION_MERGED_PR_HEAD: NOT_CAPTURED
  RECONCILIATION_REVIEW_REQUESTED: false
  RECONCILIATION_REVIEW_REQUEST_STATE: NOT_RUN
  RECONCILIATION_REVIEW_REQUEST_HEAD: NOT_REQUESTED
  RECONCILIATION_REVIEW_EXECUTION_STATE: NOT_RUN
  RECONCILIATION_AUDIT_VERDICT: NOT_ISSUED
  RECONCILIATION_AUDITED_HEAD: NOT_REVIEWED
  RECONCILIATION_OPEN_MATERIAL_FINDINGS: UNKNOWN
  RECONCILIATION_INTEGRATED_SHA_SOURCE: NOT_CAPTURED
  RECONCILIATION_INTEGRATED_SHA: NOT_CAPTURED
  RECONCILIATION_SHA_REACHABLE_FROM_MAIN: NOT_RUN
  TRUTH_RECONCILIATION_STATE: NOT_RUN
  TRUTH_RECONCILIATION_EVIDENCE: NONE
  EXPLICIT_ISSUE_CLOSE_STATE: NOT_RUN
  EXPLICIT_ISSUE_CLOSE_EVIDENCE: NONE
  ISSUE_CLOSED: false
```

| ID | Fase | Inspección | Estado | Resultado observado | Evidencia | Dependencia/limitación |
| --- | --- | --- | --- | --- | --- | --- |
| V-015 | Human merge | `<inspección del PR en GitHub>` | `HUMAN_MERGE=<NOT_RUN/PASS/BLOCKED>` | `PR_NUMBER=<N/NOT_MERGED>; PR_MERGED=<YES/NO/false>; MERGED_PR_HEAD=<sha/NOT_CAPTURED>; AUDITED_PR_HEAD=<sha/NOT_CAPTURED>; INDEPENDENT_REVIEW_HEAD=<sha/NOT_CAPTURED>; MERGE_ACCEPTANCE=<NOT_RUN/PASS/BLOCKED_HEAD_DRIFT>` | `<ref/NONE>` | `REQUIRES=V-014:PASS,V-H01:PASS,MERGE_AUTHORIZATION:GRANTED exact-head; un merge observado no sana un gate previo` |
| V-016 | Integrated SHA | `<inspección del resultado del PR y main>` | `<estado>` | `INTEGRATED_SHA_SOURCE=<MERGED_PR/NOT_CAPTURED>; INTEGRATED_SHA=<sha/NOT_CAPTURED>; MERGE_METHOD=<MERGE/SQUASH/REBASE/NOT_OBSERVABLE/NOT_RUN>; INTEGRATED_SHA_REACHABLE_FROM_MAIN=<YES/NO/NOT_RUN>; MAIN_HEAD_AT_ACCEPTANCE=<sha/NOT_CAPTURED>` | `<ref/NONE>` | `PRE_MERGE_DEFAULTS literal; REQUIRES=V-015:PASS; main tip no identifica el merge` |
| V-017 | Post-merge acceptance | `<inspección contra INTEGRATED_SHA>` | `<estado>` | `POST_MERGE_ACCEPTANCE_SHA=<sha/NOT_RUN>; POST_MERGE_ACCEPTANCE_STATE=<estado>` | `<ref/NONE>` | `REQUIRES=V-015:PASS,V-016:PASS; PASS exige POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA; sin alias editable` |
| V-018 | Truth reconciliation | `<MERGED_PR/inspección NO_DIFF>` | `TRUTH_RECONCILIATION_STATE=<NOT_RUN/PASS/BLOCKED>` | `TRUTH_RECONCILIATION_MODE=<NO_DIFF/MERGED_PR/NOT_RUN>; TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=<sha/NOT_RUN>; TRUTH_RECONCILIATION_NO_DIFF_JUSTIFICATION=<detalle/NONE>; RECONCILIATION_PR=<N/NOT_RUN>; RECONCILIATION_PR_MERGED=<true/false>; RECONCILIATION_PR_HEAD=<sha/NOT_CAPTURED>; RECONCILIATION_MERGED_PR_HEAD=<sha/NOT_CAPTURED>; RECONCILIATION_REVIEW_REQUESTED=<true/false>; RECONCILIATION_REVIEW_REQUEST_STATE=<PASS/NOT_RUN/AUTH_BLOCKED/CAPABILITY_GAP/BLOCKED>; RECONCILIATION_REVIEW_REQUEST_HEAD=<sha/NOT_REQUESTED>; RECONCILIATION_REVIEW_EXECUTION_STATE=<PASS/NOT_RUN/AUTH_BLOCKED/CAPABILITY_GAP/BLOCKED>; RECONCILIATION_AUDIT_VERDICT=<PASS/CHANGES_REQUIRED/BLOCKED/NOT_ISSUED>; RECONCILIATION_AUDITED_HEAD=<sha/NOT_REVIEWED>; RECONCILIATION_OPEN_MATERIAL_FINDINGS=<n/UNKNOWN>; RECONCILIATION_INTEGRATED_SHA_SOURCE=<MERGED_PR/NOT_CAPTURED>; RECONCILIATION_INTEGRATED_SHA=<sha/NOT_CAPTURED>; RECONCILIATION_SHA_REACHABLE_FROM_MAIN=<YES/NO/NOT_RUN>` | `TRUTH_RECONCILIATION_EVIDENCE=<ref/NONE>` | `PRE_MERGE_DEFAULTS literal; REQUIRES=V-017:PASS; source debe igualar INTEGRATED_SHA en ambos modos` |
| V-019 | Explicit issue close | `<inspección GitHub>` | `<estado>` | `ISSUE_CLOSED=<true/false>` | `<ref/NONE>` | `REQUIRES=V-014:PASS,V-H01:PASS,V-015:PASS,V-016:PASS,V-017:PASS,V-018:PASS; OWNER=humano` |

Antes de ejecutar esas fases, V-015 usa `PR_MERGED=false`, no `NO`; `NO` queda
reservado para una inspección post-run que comprueba que el PR no fue mergeado y
tampoco permite `PASS`. V-H01 y V-015–V-018 usan directamente las claves
canónicas, sin aliases ni transformaciones, y copian sus defaults de
`PRE_MERGE_DEFAULTS`.

`V-H01=PASS` exige V-014 favorable, `HUMAN_GATE_AUTHORIZED_HEAD=HEAD` y evidencia
humana. Esa decisión no concede merge. `V-015=PASS` exige además
`MERGE_AUTHORIZATION=GRANTED`, `MERGE_AUTHORIZED_HEAD=HEAD`, evidencia humana,
`PR_MERGED=YES`, `MERGE_ACCEPTANCE=PASS` e
`MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD`, con los tres valores
como SHA reales y no `NOT_CAPTURED`; cualquier diferencia usa estado `BLOCKED`,
causa `MERGE_ACCEPTANCE=BLOCKED_HEAD_DRIFT` y deja V-016 `NOT_RUN`.
Un V-014 `CHANGES_REQUIRED` o findings abiertos mantienen V-015 bloqueado aunque
GitHub muestre el PR mergeado. `HUMAN_MERGE=NOT_RUN` nunca permite
`V-015=PASS`. `V-016=PASS` exige V-015 en
`PASS`, `INTEGRATED_SHA_SOURCE=MERGED_PR`, un `INTEGRATED_SHA` real obtenido del
PR mergeado e `INTEGRATED_SHA_REACHABLE_FROM_MAIN=YES`;
`NOT_CAPTURED`/`NOT_RUN` nunca permiten `PASS`. `MAIN_HEAD_AT_ACCEPTANCE` se
conserva como observación separada y no sustituye a `INTEGRATED_SHA`.

`V-017=PASS` exige
`POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA`; no existe otra clave editable.
`V-018=PASS` exige V-017,
`TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA` y exactamente uno de
estos caminos:

- `NO_DIFF`: justificación/evidencia no vacía y ningún PR ficticio.
- `MERGED_PR`: número y HEAD auditado reales del PR de reconciliación, más el
  HEAD efectivamente mergeado capturado y exactamente:

```text
TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA
AND RECONCILIATION_REVIEW_REQUESTED=true
AND RECONCILIATION_REVIEW_REQUEST_STATE=PASS
AND RECONCILIATION_REVIEW_EXECUTION_STATE=PASS
AND RECONCILIATION_AUDIT_VERDICT=PASS
AND RECONCILIATION_OPEN_MATERIAL_FINDINGS=0
AND RECONCILIATION_PR_MERGED=true
AND RECONCILIATION_MERGED_PR_HEAD=<sha real observado del PR mergeado>
AND RECONCILIATION_MERGED_PR_HEAD=RECONCILIATION_PR_HEAD=RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_AUDITED_HEAD
AND RECONCILIATION_INTEGRATED_SHA_SOURCE=MERGED_PR
AND RECONCILIATION_INTEGRATED_SHA=<mergeCommit.oid/merge_commit_sha real observado en RECONCILIATION_PR>
AND RECONCILIATION_SHA_REACHABLE_FROM_MAIN=YES
```

Draft, Ready, cerrado sin merge y el valor heredado `RESULT=PR` son inválidos
como reconciliación. `TRUTH_RECONCILIATION_MODE=NOT_RUN` y cualquier otro default
pre-merge nunca permiten `V-018=PASS`; tampoco lo permite ninguna combinación
que omita o contradiga una dimensión del predicado `MERGED_PR`. `NO_DIFF` no
requiere un PR ficticio. Un HEAD mergeado no capturado o diferente, o un
integrated SHA que no sea el resultado observado del mismo `RECONCILIATION_PR`,
también bloquean. `TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA` identifica la
implementación; `RECONCILIATION_INTEGRATED_SHA`, el resultado del PR posterior.
`V-019=PASS` e `ISSUE_CLOSED=true` conservan V-014 y V-H01 favorables, exigen
V-015–V-018 en `PASS`, evidencia y cierre humano explícito. Ningún paso posterior
sana un gate anterior fallido.

Cuando SEO/indexación sea material, agregar estas filas y enlazar el owner de
[paridad](../truth/SEO_PARITY_CONTRACT.md):

| Campo/gate | Valor o resultado | Evidencia exact-head | Limitación |
| --- | --- | --- | --- |
| `seoArchetype` | `<arquetipo>` | `<ref>` | `<detalle>` |
| `goldenBaselineVersion` | `<versión>` | `<ref>` | `<detalle>` |
| `SEO_GOLDEN_PARITY` | `<estado>` | `<ref>` | `<detalle>` |
| `HOME_SEO_REGRESSION` | `<estado>` | `<ref>` | `<detalle>` |
| `LOCAL_CONTENT_UTILITY` | `<estado>` | `<ref>` | `<detalle>` |
| `MOBILE_SEO_PARITY` | `<estado>` | `<ref>` | `<detalle>` |
| `MULTILINGUAL_SEO` | `<estado>` | `<ref>` | `<detalle>` |

Para una superficie no SEO, registrar `NOT_APPLICABLE` y la justificación una
sola vez. La ausencia de baseline o gate implementado se declara `NOT_RUN`,
`BLOCKED` o `CAPABILITY_GAP`; no se transforma en `PASS`.

Resultados por check permitidos:

```text
PASS
FAIL
BLOCKED
NOT_RUN
NOT_APPLICABLE
PARTIAL
UNKNOWN
AUTH_BLOCKED
PREVIEW_BLOCKED
CAPABILITY_GAP
```

Estados de madurez del conjunto de evidencia:

```text
SELF_VALIDATED_ONLY
INDEPENDENTLY_VALIDATED
POST_MERGE_ACCEPTED
```

`OVERALL_VALIDATION_RESULT` y `FINAL_VALIDATION_RESULT` aceptan cualquiera de
los diez resultados del owner canónico. La agregación nunca degrada
`NOT_RUN`, `UNKNOWN`, `AUTH_BLOCKED`, `PREVIEW_BLOCKED` o `CAPABILITY_GAP` a
`BLOCKED`/`PARTIAL`; si coexisten causas distintas, se conservan en sus filas y
limitaciones y se justifica el resultado global más conservador.

Reglas:

- `PASS` exige criterio satisfecho y evidencia observable.
- `NOT_APPLICABLE` incluye una justificación ligada al changed surface.
- `NOT_RUN` significa que no se ejecutó, cualquiera sea la intención.
- `AUTH_BLOCKED`, `PREVIEW_BLOCKED` y `CAPABILITY_GAP` describen la causa del
  bloqueo; no heredan éxito de otra prueba.
- `PARTIAL` identifica qué parte pasó y qué parte falta.
- `SELF_VALIDATED_ONLY` es el máximo estado global que asigna el writer.
- `INDEPENDENT_REVIEW_REQUEST=REQUIRED` para todo Draft PR implementable.
- `INDEPENDENTLY_VALIDATED` requiere auditor distinto, exact HEAD, inventario
  completo y exactamente una pareja válida por fila: `MATERIAL`/`PASS` o
  `NOT_APPLICABLE`/`NOT_APPLICABLE` con justificación concreta de no
  materialidad.
- `NOT_RUN`, `PARTIAL`, `UNKNOWN`, `AUTH_BLOCKED`, `PREVIEW_BLOCKED`,
  `CAPABILITY_GAP`, `FAIL`, `BLOCKED`, un check omitido/duplicado o un
  `NOT_APPLICABLE` injustificado impiden `INDEPENDENTLY_VALIDATED`. También la
  impide cualquier pairing distinto, incluido `MATERIAL`/`NOT_APPLICABLE`.
- `POST_MERGE_ACCEPTED` requiere `V-015`, `V-016` y `V-017` en `PASS`, todos
  trazables al SHA integrado. `V-018` reconcilia truth después de esa madurez y
  `V-019` registra luego el cierre humano explícito, sin autocierre, y conserva
  como dependencias V-014 y V-H01 favorables.

Sólo `INDEPENDENT_REVIEW_REQUESTED=true`, estado `PASS`, evidencia distinta de
`NONE` y request HEAD igual a `HEAD` demuestran que la solicitud universal fue
emitida. `false`, un estado distinto de `PASS`, evidencia ausente o un SHA
distinto conservan la causa honesta y bloquean `HUMAN_GATE`; `false` con `PASS`
es una combinación inválida.

El gate humano regular exige además `INDEPENDENT_REVIEW_EXECUTION_STATE=PASS`,
`INDEPENDENT_AUDIT_VERDICT=PASS`, `AUDITED_HEAD=HEAD` y
`OPEN_MATERIAL_FINDINGS=0`. Request `PASS` no implica ejecución; execution
`PASS` no implica dictamen favorable. `CHANGES_REQUIRED`, `BLOCKED`,
`NOT_ISSUED`, `NOT_RUN`, `CAPABILITY_GAP`, `AUTH_BLOCKED`, `HEAD_MISMATCH` y
`OPEN_FINDINGS_GT_0` bloquean según su dimensión o causa. La excepción bootstrap
de CI no altera este predicado ni convierte su `CAPABILITY_GAP` en `PASS`.
La excepción `RANQUEL-HARNESS-BOOTSTRAP-001` tampoco se transfiere a otro HEAD
ni concede Ready o merge automáticamente.

## 4. Revisiones interdisciplinarias

| Disciplina | Materialidad | Reviewer/owner | Estado | Evidencia o justificación |
| --- | --- | --- | --- | --- |
| D01 — Producto, negocio y estrategia comercial | `<MATERIAL/NOT_APPLICABLE>` | `<owner>` | `<estado>` | `<ref>` |
| D02 — Arquitectura de software e información | `<...>` | `<...>` | `<...>` | `<...>` |
| D03 — Frontend, UX responsive y diseño | `<...>` | `<...>` | `<...>` | `<...>` |
| D04 — Accesibilidad | `<...>` | `<...>` | `<...>` | `<...>` |
| D05 — SEO técnico y SEO local | `<...>` | `<...>` | `<...>` | `<...>` |
| D06 — Contenido, comunicación y marca | `<...>` | `<...>` | `<...>` | `<...>` |
| D07 — Marketing y CRO | `<...>` | `<...>` | `<...>` | `<...>` |
| D08 — GA4, GTM, atribución y conversiones | `<...>` | `<...>` | `<...>` | `<...>` |
| D09 — Google Ads | `<...>` | `<...>` | `<...>` | `<...>` |
| D10 — Performance y Core Web Vitals | `<...>` | `<...>` | `<...>` | `<...>` |
| D11 — Seguridad y privacidad | `<...>` | `<...>` | `<...>` | `<...>` |
| D12 — QA, release, rollback y auditoría independiente | `<...>` | `<...>` | `<...>` | `<...>` |

Los nombres e IDs se copian de
[INTERDISCIPLINARY_REVIEW_MATRIX.md](../truth/INTERDISCIPLINARY_REVIEW_MATRIX.md).
La selección se deriva del inventario de superficies `Sxx`, que permanece
separado y referencia todas las filas exactas aplicables del mismo documento.
Los owners de dominio se registran aparte y no reemplazan esas filas.

## 5. Ledger de mutaciones externas

Registrar también mutaciones administrativas de GitHub. Lectura y mutación se
separan.

| Sistema | Recurso | Estado previo | Operación autorizada | Resultado | Estado posterior | Evidencia | Reversible |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<sistema>` | `<recurso>` | `<observado>` | `<operación o NONE>` | `<estado>` | `<observado>` | `<ref>` | `<sí/no/cómo>` |

Si no hubo mutaciones fuera de GitHub, declarar de forma explícita:

```yaml
EXTERNAL_PRODUCT_OR_PLATFORM_MUTATIONS: ZERO
VERCEL_MUTATIONS: ZERO
DNS_MUTATIONS: ZERO
SEARCH_CONSOLE_MUTATIONS: ZERO
GA4_GTM_ADS_MUTATIONS: ZERO
```

No registrar tokens, headers de autorización ni cuerpos con datos personales.

## 6. Diff y archivos

```yaml
FILES:
  ADDED:
    - "path | NONE"
  MODIFIED:
    - "path | NONE"
  DELETED:
    - "path | NONE"
  PRODUCT_FILES_CHANGED: false
  GENERATED_OUTPUT_CHANGED: false
  UNRELATED_CHANGES_INCLUDED: false
```

Describir la razón de cada archivo y confirmar que el staged set coincide con
el diff destinado al PR.

## 7. Riesgos, rollback y limitaciones

```yaml
RISKS:
  - ID: R-001
    DESCRIPTION: "riesgo residual"
    SEVERITY: "CRITICAL | HIGH | MEDIUM | LOW | INFORMATIONAL"
    MITIGATION: "control aplicado"
    OWNER: "persona/issue"

ROLLBACK:
  PLAN: "revert por PR u otra estrategia autorizada"
  VERIFIED: false
  VERIFICATION_STATE: "NOT_RUN | PASS | otro estado honesto"

LIMITATIONS:
  - "limitación o NONE"

OPEN_QUESTIONS:
  - "pregunta/owner o NONE"
```

`VERIFIED: true` requiere una prueba real registrada. Un plan documentado sin
ejecución permanece `NOT_RUN`.

## 8. Declaración del writer y handoff

Para completar `WRITER_DECLARATION`, expandir literalmente el bloque canónico
`PRE_MERGE_DEFAULTS` en los campos pre-merge listados abajo. Esta expansión no es
una segunda fuente de defaults y no puede introducir overrides ni sinónimos.

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: "true | false | partial"
  ZERO_PRODUCT_CHANGES: "true | false"
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: "true | false"
  FINAL_VALIDATION_RESULT: "resultado exacto definido por EVIDENCE_MANIFEST.VALIDATION_RESULT_OWNER"
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  HARNESS_CI_EVIDENCE_USED: "true | false"
  HARNESS_CI_EXACT_HEAD: "PASS | FAIL | CAPABILITY_GAP"
  CI_HEAD: "sha real | NOT_CAPTURED"
  VERCEL_CHECKS: "estado observado por separado; nunca CI del harness"
  INDEPENDENT_REVIEW_REQUEST: REQUIRED
  INDEPENDENT_REVIEW_REQUESTED: "true | false"
  INDEPENDENT_REVIEW_REQUEST_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
  INDEPENDENT_REVIEW_REQUEST_CAUSE: "NONE | causa explícita"
  INDEPENDENT_REVIEW_REQUEST_EVIDENCE: "ref comprobable | NONE"
  INDEPENDENT_REVIEW_REQUEST_HEAD: "sha completo igual a HEAD | NOT_REQUESTED"
  INDEPENDENT_REVIEW_EXECUTION_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
  INDEPENDENT_REVIEW_EXECUTION_CAUSE: "NONE | HEAD_MISMATCH | causa explícita"
  AUDITED_HEAD: "sha completo igual a HEAD | NOT_REVIEWED"
  INDEPENDENT_AUDIT_VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED | NOT_ISSUED"
  OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN antes de ejecución"
  READY_DECISION_OWNER: "humano"
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: "humano después de POST_MERGE_ACCEPTANCE y TRUTH_RECONCILIATION"
  HUMAN_GATE_AUTHORIZATION: NOT_RUN
  HUMAN_GATE_AUTHORIZED_HEAD: NOT_CAPTURED
  HUMAN_GATE_AUTHORIZATION_EVIDENCE: NONE
  MERGE_AUTHORIZATION: NOT_GRANTED
  MERGE_AUTHORIZED_HEAD: NOT_CAPTURED
  MERGE_AUTHORIZATION_EVIDENCE: NONE
  HUMAN_MERGE: NOT_RUN
  PR_NUMBER: NOT_MERGED
  PR_MERGED: false
  MERGED_PR_HEAD: NOT_CAPTURED
  AUDITED_PR_HEAD: NOT_CAPTURED
  INDEPENDENT_REVIEW_HEAD: NOT_CAPTURED
  MERGE_ACCEPTANCE: NOT_RUN
  INTEGRATED_SHA_SOURCE: NOT_CAPTURED
  INTEGRATED_SHA: NOT_CAPTURED
  MERGE_METHOD: NOT_RUN
  INTEGRATED_SHA_REACHABLE_FROM_MAIN: NOT_RUN
  MAIN_HEAD_AT_ACCEPTANCE: NOT_CAPTURED
  POST_MERGE_ACCEPTANCE_TARGET: INTEGRATED_SHA
  POST_MERGE_ACCEPTANCE_SHA: NOT_RUN
  POST_MERGE_ACCEPTANCE_STATE: NOT_RUN
  POST_MERGE_ACCEPTANCE_EVIDENCE: NONE
  TRUTH_RECONCILIATION_REQUIRES: "POST_MERGE_ACCEPTANCE=PASS"
  TRUTH_RECONCILIATION_MODE: NOT_RUN
  TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA: NOT_RUN
  TRUTH_RECONCILIATION_NO_DIFF_JUSTIFICATION: NONE
  RECONCILIATION_PR: NOT_RUN
  RECONCILIATION_PR_MERGED: false
  RECONCILIATION_PR_HEAD: NOT_CAPTURED
  RECONCILIATION_MERGED_PR_HEAD: NOT_CAPTURED
  RECONCILIATION_REVIEW_REQUESTED: false
  RECONCILIATION_REVIEW_REQUEST_STATE: NOT_RUN
  RECONCILIATION_REVIEW_REQUEST_HEAD: NOT_REQUESTED
  RECONCILIATION_REVIEW_EXECUTION_STATE: NOT_RUN
  RECONCILIATION_AUDIT_VERDICT: NOT_ISSUED
  RECONCILIATION_AUDITED_HEAD: NOT_REVIEWED
  RECONCILIATION_OPEN_MATERIAL_FINDINGS: UNKNOWN
  RECONCILIATION_INTEGRATED_SHA_SOURCE: NOT_CAPTURED
  RECONCILIATION_INTEGRATED_SHA: NOT_CAPTURED
  RECONCILIATION_SHA_REACHABLE_FROM_MAIN: NOT_RUN
  TRUTH_RECONCILIATION_STATE: NOT_RUN
  TRUTH_RECONCILIATION_EVIDENCE: NONE
  EXPLICIT_ISSUE_CLOSE_REQUIRES: "V-014=PASS; V-H01=PASS exact-head; V-015..V-018=PASS"
  EXPLICIT_ISSUE_CLOSE_STATE: NOT_RUN
  EXPLICIT_ISSUE_CLOSE_EVIDENCE: NONE
  ISSUE_CLOSED: false
```

Si cualquier literal pre-merge de V-H01 o V-015–V-018 difiere del bloque
`PRE_MERGE_DEFAULTS` o de su expansión literal en `WRITER_DECLARATION`, el
resultado obligatorio es `MANIFEST_SCHEMA_RESULT=FAIL`. Esta comparación no
modifica los valores post-run permitidos ni sus predicados de `PASS`.

Los defaults pre-merge permanecen `NOT_RUN`/`false`.
`HUMAN_GATE_AUTHORIZATION=PASS` exige V-014 favorable, cero findings y el mismo
HEAD, pero no concede merge. `HUMAN_MERGE=PASS` exige además
`MERGE_AUTHORIZATION=GRANTED` para ese HEAD, número de PR, merge comprobado e
igualdad entre `MERGED_PR_HEAD`, `AUDITED_PR_HEAD` e
`INDEPENDENT_REVIEW_HEAD`. El SHA
integrado proviene del PR mergeado y su reachability se verifica contra
`MAIN_HEAD_AT_ACCEPTANCE`, que no lo sustituye. `POST_MERGE_ACCEPTANCE` sólo
puede pasar si `POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA`.

`TRUTH_RECONCILIATION_STATE=PASS` depende de esa aceptación y de
`TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA` en ambos modos. El
modo `NO_DIFF` agrega justificación/evidencia no vacías; el PR de reconciliación
debe satisfacer toda la conjunción: request `true`/`PASS` y exact HEAD,
execution `PASS`, verdict `PASS`, audited HEAD exacto, cero findings y
merge real cuyo HEAD capturado sea el mismo auditado. El integrated SHA debe ser
el resultado de merge observado en ese mismo `RECONCILIATION_PR`, con source
`MERGED_PR` y reachability `YES`. Draft, Ready, cerrado sin merge, HEAD drift,
resultado de otro PR o cualquier dimensión no favorable permanecen no-PASS.
`EXPLICIT_ISSUE_CLOSE_STATE=PASS` e `ISSUE_CLOSED=true` dependen además de V-014
y V-H01 favorables y de una acción humana explícita. Un merge posterior no sana
una auditoría `CHANGES_REQUIRED`.

El handoff incluye TASK_CONTRACT, lista de archivos, comandos/resultados,
limitaciones, riesgos, rollback y solicitud de auditoría. No marca Ready ni
declara `DONE` por la sola creación del PR.
