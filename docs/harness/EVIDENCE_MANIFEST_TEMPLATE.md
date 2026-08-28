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
  DRAFT_PR_HEAD: "sha completo actual del Draft PR; debe coincidir con HEAD"
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
    - NEW_HEAD
    - DIFF_CHECK
    - EXACT_STAGE
    - STAGED_SCOPE_SECRET_RECHECK
    - AFFECTED_FOCAL_TESTS
    - AFFECTED_SURFACE_GATES
    - COMMIT_CANDIDATE
    - PUSH_CANDIDATE
    - DRAFT_PR_UPDATE
    - CI_EXACT_HEAD
    - INDEPENDENT_REVIEW_REQUEST
    - INDEPENDENT_AUDIT
  VALIDATED_STAGED_TREE_SHA: "tree sha"
  NEW_HEAD: "sha completo"
  NEW_HEAD_TREE_SHA: "tree sha"
  NEW_HEAD_TREE_MATCHES_VALIDATED_STAGED_TREE: "true | false"
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

`HEAD`, `REMOTE_HEAD` y `DRAFT_PR_HEAD` deben coincidir con diff, CI, preview y
auditoría que se reclaman. Si el commit cambia, se ejecuta completa y en orden la
secuencia `REPAIR_CYCLE`. Validaciones locales, scope/secrets, pruebas, gates,
CI, solicitud, ejecución, dictamen y madurez anteriores quedan obsoletos. Un
gate no afectado sólo admite `NOT_APPLICABLE` justificado; un contrato
transversal cambiado exige toda su matriz aplicable. La evidencia local se
vincula al nuevo HEAD sólo si su tree coincide con el staged tree validado.

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
| V-008 | Preview/visual | `<MATERIAL/NOT_APPLICABLE>` | `<URL redactada/ref>` | `N/A` | `<estado>` | `<desktop/móvil>` | `<ref>` | `<detalle>` |
| V-009 | Commit candidato | `MATERIAL` | `git commit` | `<n>` | `<estado>` | `HEAD=<sha>; VALIDATED_STAGED_TREE_SHA=<tree>; NEW_HEAD_TREE_SHA=<tree>; TREE_MATCH=<true/false>` | `<ref>` | `<detalle>` |
| V-010 | Push candidato | `MATERIAL` | `git push` | `<n>` | `<estado>` | `<REMOTE_HEAD>` | `<ref>` | `<detalle>` |
| V-011 | Draft PR create/update | `MATERIAL` | `<inspección GitHub>` | `N/A` | `<estado>` | `<DRAFT_PR_HEAD>` | `<ref>` | `<detalle>` |
| V-012 | CI exact-head | `<MATERIAL/NOT_APPLICABLE>` | `<job/run>` | `N/A` | `<estado>` | `<sha/result>` | `<ref>` | `<detalle>` |
| V-013 | Independent review request | `MATERIAL` | `<solicitud/inspección>` | `N/A` | `<estado>` | `INDEPENDENT_REVIEW_REQUESTED=<true/false>; INDEPENDENT_REVIEW_REQUEST_STATE=<estado>; INDEPENDENT_REVIEW_REQUEST_HEAD=<sha/NOT_REQUESTED>` | `<ref/NONE>` | `CAUSE=<NONE/detalle>` |
| V-014 | Independent audit gate | `MATERIAL` | `<ejecución/dictamen>` | `N/A` | `<estado>` | `INDEPENDENT_REVIEW_EXECUTION_STATE=<estado>; INDEPENDENT_AUDIT_VERDICT=<PASS/CHANGES_REQUIRED/BLOCKED/NOT_ISSUED>; AUDITED_HEAD=<sha/NOT_REVIEWED>; OPEN_MATERIAL_FINDINGS=<n/UNKNOWN>` | `<ref/NONE>` | `CAUSE=<NONE/HEAD_MISMATCH/OPEN_FINDINGS_GT_0/detalle>` |

### Registro de fases humanas y post-merge

Estas fases se registran desde el Draft con estados honestos, pero no se usan
para anticipar `INDEPENDENTLY_VALIDATED`: antes del gate humano permanecen
`NOT_RUN`/`false`. Para completar el lifecycle deben ejecutarse en este orden.

| ID | Fase | Inspección | Estado | Resultado observado | Evidencia | Dependencia/limitación |
| --- | --- | --- | --- | --- | --- | --- |
| V-015 | Human merge | `<inspección del PR en GitHub>` | `<estado>` | `PR_NUMBER=<N>; PR_MERGED=<YES/NO>; MERGED_PR_HEAD=<sha>; AUDITED_PR_HEAD=<sha>; INDEPENDENT_REVIEW_HEAD=<sha>; MERGE_ACCEPTANCE=<PASS/BLOCKED_HEAD_DRIFT>` | `<ref/NONE>` | `PASS exige igualdad de los tres HEADs; drift bloquea V-016` |
| V-016 | Integrated SHA | `<inspección del resultado del PR y main>` | `<estado>` | `INTEGRATED_SHA_SOURCE=MERGED_PR; INTEGRATED_SHA=<sha/NOT_CAPTURED>; MERGE_METHOD=<MERGE/SQUASH/REBASE/NOT_OBSERVABLE>; INTEGRATED_SHA_REACHABLE_FROM_MAIN=<YES/NO/NOT_RUN>; MAIN_HEAD_AT_ACCEPTANCE=<sha/NOT_CAPTURED>` | `<ref/NONE>` | `REQUIRES=V-015:PASS; main tip no identifica el merge` |
| V-017 | Post-merge acceptance | `<inspección contra INTEGRATED_SHA>` | `<estado>` | `TARGET=INTEGRATED_SHA; ACCEPTED_SHA=<sha/NOT_RUN>` | `<ref/NONE>` | `REQUIRES=V-015:PASS,V-016:PASS` |
| V-018 | Truth reconciliation | `<MERGED_PR/inspección NO_DIFF>` | `<estado>` | `MODE=<NO_DIFF/MERGED_PR/NOT_RUN>; SOURCE_INTEGRATED_SHA=<sha/NOT_RUN>; NO_DIFF_JUSTIFICATION=<detalle/N_A>; RECONCILIATION_PR=<N/N_A>; RECONCILIATION_PR_MERGED=<YES/NO/N_A>; RECONCILIATION_PR_HEAD=<sha/N_A>; RECONCILIATION_AUDITED_HEAD=<sha/N_A>; RECONCILIATION_INTEGRATED_SHA_SOURCE=<MERGED_PR/N_A>; RECONCILIATION_INTEGRATED_SHA=<sha/N_A>; RECONCILIATION_SHA_REACHABLE_FROM_MAIN=<YES/NO/N_A>` | `<ref/NONE>` | `REQUIRES=V-017:PASS; sólo uno de los dos modos válidos` |
| V-019 | Explicit issue close | `<inspección GitHub>` | `<estado>` | `ISSUE_CLOSED=<true/false>` | `<ref/NONE>` | `REQUIRES=V-017:PASS,V-018:PASS; OWNER=humano` |

`V-015=PASS` exige `PR_MERGED=YES` e
`MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD`; cualquier diferencia
usa estado `BLOCKED`, causa `MERGE_ACCEPTANCE=BLOCKED_HEAD_DRIFT` y deja V-016
`NOT_RUN`. `V-016=PASS` exige SHA obtenido del PR mergeado y reachability desde
`main`; `MAIN_HEAD_AT_ACCEPTANCE` se conserva como observación separada.

`V-017=PASS` exige `ACCEPTED_SHA=INTEGRATED_SHA`. `V-018=PASS` exige V-017 y
exactamente uno de estos caminos:

- `NO_DIFF`: justificación/evidencia no vacía y
  `SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`.
- `MERGED_PR`: PR de reconciliación mergeado, su HEAD igual al exact HEAD
  auditado, integration SHA obtenido de ese PR y alcanzable desde `main`.

Draft, Ready, cerrado sin merge y el valor heredado `RESULT=PR` son inválidos
como reconciliación. `V-019=PASS` e `ISSUE_CLOSED=true` exigen V-017, uno de los
dos modos V-018 en PASS, evidencia y cierre humano explícito.

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
  `V-019` registra luego el cierre humano explícito, sin autocierre.

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

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: "true | false | partial"
  ZERO_PRODUCT_CHANGES: "true | false"
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: "true | false"
  FINAL_VALIDATION_RESULT: "resultado exacto definido por EVIDENCE_MANIFEST.VALIDATION_RESULT_OWNER"
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
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
  HUMAN_MERGE: "NOT_RUN | PASS | BLOCKED"
  PR_NUMBER: "N | NOT_MERGED"
  PR_MERGED: false
  MERGED_PR_HEAD: NOT_CAPTURED
  AUDITED_PR_HEAD: NOT_CAPTURED
  INDEPENDENT_REVIEW_HEAD: NOT_CAPTURED
  MERGE_ACCEPTANCE: "NOT_RUN | PASS | BLOCKED_HEAD_DRIFT"
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
  RECONCILIATION_AUDITED_HEAD: NOT_CAPTURED
  RECONCILIATION_INTEGRATED_SHA_SOURCE: NOT_CAPTURED
  RECONCILIATION_INTEGRATED_SHA: NOT_CAPTURED
  RECONCILIATION_SHA_REACHABLE_FROM_MAIN: NOT_RUN
  TRUTH_RECONCILIATION_STATE: NOT_RUN
  TRUTH_RECONCILIATION_EVIDENCE: NONE
  EXPLICIT_ISSUE_CLOSE_REQUIRES: "POST_MERGE_ACCEPTANCE=PASS; TRUTH_RECONCILIATION=PASS"
  EXPLICIT_ISSUE_CLOSE_STATE: NOT_RUN
  EXPLICIT_ISSUE_CLOSE_EVIDENCE: NONE
  ISSUE_CLOSED: false
```

Los defaults pre-merge permanecen `NOT_RUN`/`false`. `HUMAN_MERGE=PASS` exige
número de PR, merge comprobado e igualdad entre `MERGED_PR_HEAD`,
`AUDITED_PR_HEAD` e `INDEPENDENT_REVIEW_HEAD`. El SHA integrado proviene del PR
mergeado y su reachability se verifica contra `MAIN_HEAD_AT_ACCEPTANCE`, que no
lo sustituye. `POST_MERGE_ACCEPTANCE` sólo puede pasar con esas identidades y
aceptación sobre el mismo SHA.

`TRUTH_RECONCILIATION_STATE=PASS` depende de esa aceptación y de `NO_DIFF`
justificado sobre el source integrated SHA, o de un PR de reconciliación
auditado, mergeado e integrado de forma alcanzable desde `main`. Draft, Ready o
cerrado sin merge permanecen no-PASS. `EXPLICIT_ISSUE_CLOSE_STATE=PASS` e
`ISSUE_CLOSED=true` dependen de las dos fases anteriores y de una acción humana
explícita.

El handoff incluye TASK_CONTRACT, lista de archivos, comandos/resultados,
limitaciones, riesgos, rollback y solicitud de auditoría. No marca Ready ni
declara `DONE` por la sola creación del PR.
