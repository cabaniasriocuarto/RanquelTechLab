# Plantilla de INDEPENDENT_AUDIT

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/harness/INDEPENDENT_AUDIT_TEMPLATE.md` (dictamen independiente exact-head)

La auditoría se realiza en una sesión o agente distinto del writer, sobre exact
HEAD y en modo read-only. El auditor no repara findings, no amplía scope, no
marca Ready, no mergea, no cierra la issue y no muta sistemas externos.

## 1. Identidad del dictamen

```yaml
INDEPENDENT_AUDIT:
  AUDIT_VERSION: RANQUEL_INDEPENDENT_AUDIT_V1
  ISSUE: "#N"
  PR: "número/URL"
  REPOSITORY: "owner/repo"
  BASE_SHA: "sha completo"
  AUDITED_HEAD: "sha completo"
  REMOTE_HEAD: "sha completo publicado"
  PR_HEAD: "sha completo actual del PR"
  PR_IS_OPEN: "true | false"
  PR_IS_DRAFT: "true | false"
  DRAFT_PR_HEAD: "sha completo igual a AUDITED_HEAD | NOT_CAPTURED"
  V011_OBSERVED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
  V011_EVIDENCE: "ref comprobable | NONE"
  PR_CURRENT_STATE: "OPEN_DRAFT | OPEN_READY | MERGED | CLOSED_UNMERGED"
  READY_TRANSITION_STATE: "NOT_RUN | PASS | BLOCKED"
  READY_TRANSITION_OCCURRED: "false | true"
  READY_TRANSITION_HEAD: "sha completo igual a AUDITED_HEAD | NOT_CAPTURED"
  READY_TRANSITION_ACTOR: "actor observado | NOT_CAPTURED"
  READY_TRANSITION_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
  READY_TRANSITION_MECHANISM: "mecanismo observado | NOT_CAPTURED"
  READY_TRANSITION_EVIDENCE: "ref comprobable | NONE"
  CANDIDATE_KIND: "INITIAL | REPAIR"
  POST_GATE_CANDIDATE_RECHECK: "PASS | FAIL | NOT_RUN"
  GATE_EXECUTION_SOURCE: "INDEXED_CANDIDATE_IN_WORKTREE | ISOLATED_VALIDATED_TREE | NOT_RUN"
  PRE_GATE_UNTRACKED_NON_IGNORED_FILES: "NONE | conteo + SHA-256 estable sanitizado | NOT_CAPTURED"
  PRE_GATE_IGNORED_FILES: "NONE | conteo + SHA-256 estable sanitizado | NOT_CAPTURED"
  POST_GATE_UNTRACKED_NON_IGNORED_FILES: "NONE | conteo + SHA-256 estable sanitizado | NOT_CAPTURED"
  POST_GATE_IGNORED_FILES: "NONE | conteo + SHA-256 estable sanitizado | NOT_CAPTURED"
  PRE_GATE_CANDIDATE_TREE_SHA: "tree SHA | NOT_CAPTURED"
  PRE_GATE_EXECUTION_TREE_SHA: "tree SHA | NOT_CAPTURED"
  POST_GATE_EXECUTION_TREE_SHA: "tree SHA | NOT_CAPTURED"
  POST_GATE_CANDIDATE_TREE_SHA: "tree SHA | NOT_CAPTURED"
  VALIDATED_CANDIDATE_TREE_SHA: "tree SHA | NOT_CAPTURED"
  ISOLATED_VALIDATION_TREE_SHA: "tree SHA | NOT_APPLICABLE en modo worktree | NOT_CAPTURED"
  CANDIDATE_HEAD_TREE_SHA: "tree SHA | NOT_CAPTURED"
  CANDIDATE_TREE_MATCH: "PASS | FAIL | NOT_RUN"
  WRITER: "sesión/agente"
  AUDITOR: "sesión/agente diferente"
  INDEPENDENT_AUDITED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ"
  MODE: READ_ONLY
  INDEPENDENT_REVIEW_REQUEST: REQUIRED
  INDEPENDENT_REVIEW_REQUESTED: "true | false"
  INDEPENDENT_REVIEW_REQUEST_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
  INDEPENDENT_REVIEW_REQUEST_HEAD: "sha completo igual a AUDITED_HEAD | NOT_REQUESTED"
  INDEPENDENT_REVIEW_REQUEST_EVIDENCE: "ref comprobable | NONE"
  INDEPENDENT_REVIEW_EXECUTION_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
  INDEPENDENT_REVIEW_EXECUTION_CAUSE: "NONE | HEAD_MISMATCH | causa explícita"
  INDEPENDENT_AUDIT_VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED | NOT_ISSUED"
  OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN antes de ejecución"
  AUDITED_PR_HEAD: "sha completo igual a AUDITED_HEAD"
  INDEPENDENT_REVIEW_HEAD: "sha completo igual a AUDITED_HEAD"
  INDEPENDENT_VALIDATION_GRANTED: "INDEPENDENTLY_VALIDATED | NONE"
```

Si `AUDITED_HEAD`, `REMOTE_HEAD` y `PR_HEAD` no coinciden, el dictamen queda
`BLOCKED` hasta auditar el commit publicado correcto. Antes de `HUMAN_GATE`,
V-011 también exige `PR_IS_OPEN=true`, `PR_IS_DRAFT=true`,
`DRAFT_PR_HEAD=AUDITED_HEAD`, instante y evidencia. Una transición Ready
posterior sólo pasa si es el primer evento observado para el mismo exact HEAD,
incluye actor, mecanismo y evidencia, y cumple
`V011_OBSERVED_AT_UTC < INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < READY_TRANSITION_AT_UTC`.
Una autorización retroactiva no sana un Ready prematuro: se registra
`READY_TRANSITION_STATE=BLOCKED`. El estado actual se conserva por separado en
`PR_CURRENT_STATE` sin invalidar la observación histórica. Un commit nuevo
invalida toda evidencia anterior y convierte el siguiente ciclo en reparación;
el writer debe repetir:

```text
REPAIR_EDIT
→ DIFF_CHECK
→ EXACT_STAGE
→ STAGED_SCOPE_SECRET_RECHECK
→ AFFECTED_FOCAL_TESTS
→ AFFECTED_SURFACE_GATES
→ POST_GATE_CANDIDATE_RECHECK
→ COMMIT_CANDIDATE
→ CAPTURE_NEW_HEAD
→ VERIFY_COMMIT_TREE_MATCH
→ PUSH_CANDIDATE
→ DRAFT_PR_UPDATE
→ CI_EXACT_HEAD
→ INDEPENDENT_REVIEW_REQUEST
→ INDEPENDENT_AUDIT
```

## 2. Atestación de independencia

```yaml
INDEPENDENCE:
  SAME_SESSION_AS_WRITER: false
  IMPLEMENTED_OR_REPAIRED_THIS_CHANGE: false
  MUTATED_REPOSITORY_DURING_AUDIT: false
  MUTATED_EXTERNAL_SYSTEMS_DURING_AUDIT: false
  CONFLICTS_OF_INTEREST:
    - "NONE | detalle"
```

Una auditoría que repara el cambio pierde independencia para ese HEAD; otro
auditor debe revisar el resultado nuevo.

## 3. Material revisado

- [ ] Issue owner, parent y dependencias completos.
- [ ] `AGENTS.md` aplicables y owners seleccionados.
- [ ] TASK_CONTRACT emitido antes de editar.
- [ ] Diff completo entre base y exact HEAD.
- [ ] Lista de archivos changed y staged.
- [ ] Inventario de superficies `Sxx` y derivación separada de D01–D12.
- [ ] EVIDENCE_MANIFEST y comandos sanitizados.
- [ ] Resultados de focal tests y surface gates.
- [ ] Todo candidato, inicial o reparación, registró V-C01 con
  `POST_GATE_CANDIDATE_RECHECK=PASS`; después fue commiteado, su HEAD completo
  fue capturado, `CANDIDATE_TREE_MATCH=PASS` y el push normal publicó ese SHA.
- [ ] `STAGED_SCOPE_SECRET_RECHECK` inventarió por separado, antes de gates,
  `PRE_GATE_UNTRACKED_NON_IGNORED_FILES` y `PRE_GATE_IGNORED_FILES`; V-C01 repitió
  ambos inventarios en sus campos `POST_GATE_*` sin inspeccionar contenido
  sensible ajeno.
- [ ] Un candidato inicial usó obligatoriamente
  `GATE_EXECUTION_SOURCE=ISOLATED_VALIDATED_TREE`; la copia surgió sólo del tree
  candidato, `ISOLATED_VALIDATION_TREE_SHA` participó de la igualdad completa,
  quedó fuera del repo y los gates no leyeron el worktree original.
- [ ] Para todo candidato se probó
  `PRE_GATE_CANDIDATE_TREE_SHA=PRE_GATE_EXECUTION_TREE_SHA=POST_GATE_EXECUTION_TREE_SHA=POST_GATE_CANDIDATE_TREE_SHA=VALIDATED_CANDIDATE_TREE_SHA` y, tras
  el commit, `CANDIDATE_HEAD_TREE_SHA=VALIDATED_CANDIDATE_TREE_SHA`.
- [ ] En modo aislado, los inventarios pre/post fueron idénticos. El modo
  `INDEXED_CANDIDATE_IN_WORKTREE` se usó sólo en reparación y sólo si los cuatro
  inventarios pre/post fueron `NONE`.
- [ ] Si hubo reparación, el ledger completo parte de `REPAIR_EDIT`, conserva el
  orden canónico, registra `PREVIOUS_HEAD_EVIDENCE_REUSED=false` y proyecta V-C01
  en V-R01: staged/current/validated/new-head trees y `TREE_MATCH` no son otra
  fuente editable.
- [ ] Un candidato inicial no inventa `PREVIOUS_HEAD`, V-R01 ni `TREE_MATCH` de
  reparación; su V-C01 universal y sus trees candidatos sí son obligatorios.
- [ ] Si hubo reparación, push, CI, request y auditoría citan `NEW_HEAD`, nunca
  `PREVIOUS_HEAD`; gates afectados se repitieron y los demás se justificaron.
- [ ] Ningún archivo no trackeado o ignorado participó en gates fuera del
  candidato, aunque su path estuviera allowlisted; no se agregó ni eliminó
  contenido ajeno.
- [ ] Un V-C01 omitido o `FAIL` bloquea commit/push/auditoría y vuelve a
  `DIFF_CHECK`, staging y gates; un tree match posterior no lo compensa.
- [ ] Si cambió un contrato transversal, matriz contractual completa reejecutada.
- [ ] Validadores efímeros, evidencia y artefactos permanecieron fuera del repo;
  V-C01 prueba que no dejaron archivos tracked, staged, no trackeados ni
  ignorados.
- [ ] `CI_HEAD` se comparó sólo si existió una ejecución real usada como
  evidencia; sin CI del harness se conservan `CAPABILITY_GAP` y `NOT_CAPTURED`,
  y los contextos Vercel permanecen separados.
- [ ] V-011 demuestra PR abierto y Draft antes de `HUMAN_GATE`, con
  `DRAFT_PR_HEAD=AUDITED_HEAD`, sin inferirlo del nombre del campo; el
  estado actual posterior está separado.
- [ ] Ready sólo usa `READY_TRANSITION_STATE=PASS` para el primer evento, con
  `READY_TRANSITION_OCCURRED=true`,
  `READY_TRANSITION_HEAD=HUMAN_GATE_AUTHORIZED_HEAD=HEAD` y
  `V011_OBSERVED_AT_UTC < INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < READY_TRANSITION_AT_UTC`;
  actor, mecanismo y evidencia están capturados, y un Ready prematuro permanece
  `BLOCKED`.
- [ ] Solicitud, ejecución y dictamen registrados como dimensiones separadas.
- [ ] La cadena de cierre conserva V-014 favorable y autorización humana para el
  gate, más autorización de merge separada para el mismo HEAD; un merge
  observado no sana `CHANGES_REQUIRED`.
- [ ] V-015 prueba exactamente
  `MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD=HEAD=AUDITED_HEAD=HUMAN_GATE_AUTHORIZED_HEAD=MERGE_AUTHORIZED_HEAD` y
  `INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < MERGE_AUTHORIZED_AT_UTC < MERGED_AT_UTC`; además conserva
  `READY_TRANSITION_STATE=PASS`, `READY_TRANSITION_HEAD=HEAD` y
  `READY_TRANSITION_AT_UTC < MERGED_AT_UTC`.
- [ ] V-017 usa sólo `POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA`, sin alias.
- [ ] Ambos modos de reconciliación exigen V-017 en `PASS` y
  `TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`; mantienen separado
  `RECONCILIATION_INTEGRATED_SHA` del PR posterior.
- [ ] `MERGED_PR` conserva autorizaciones humanas específicas de gate y merge
  para el HEAD del PR y el primer evento Ready, con actor/instante/evidencia, y
  prueba
  `RECONCILIATION_AUDITED_AT_UTC < RECONCILIATION_HUMAN_GATE_AUTHORIZED_AT_UTC < RECONCILIATION_READY_TRANSITION_AT_UTC < RECONCILIATION_MERGE_AUTHORIZED_AT_UTC < RECONCILIATION_PR_MERGED_AT_UTC`, con evidencia del merge del mismo PR; `NO_DIFF` no fabrica esos hechos.
- [ ] El cierre explícito registra `TRUTH_RECONCILIATION_PASSED_AT_UTC`, luego
  autorización humana y después evento observado con actor/instante/evidencia y
  mecanismo; sus tres instantes son estrictamente crecientes.
- [ ] Ledger de mutaciones externas y confirmaciones de no-scope.
- [ ] Riesgos, rollback y limitaciones declaradas.

Material ausente se registra como finding o causa de `BLOCKED`; no se presume.

## 4. Matriz de auditoría

| Área | Pregunta de control | Estado | Evidencia/observación |
| --- | --- | --- | --- |
| Autoridad | ¿Issue, parent y dependencias coinciden con el trabajo? | `<estado>` | `<ref>` |
| Baseline | ¿Repo, base, HEAD, rama y Git state están probados? | `<estado>` | `<ref>` |
| Scope | ¿Cada path está permitido y no hay mezcla lateral? | `<estado>` | `<ref>` |
| Semántica | ¿El cambio cumple el objetivo y DoD? | `<estado>` | `<ref>` |
| Contratos | ¿Se preservan owners y contratos declarados? | `<estado>` | `<ref>` |
| Tests | ¿Las pruebas son suficientes para changed surfaces/riesgo? | `<estado>` | `<ref>` |
| Candidate integrity | ¿V-C01 prueba antes del commit fuente autorizada, inventarios pre/post e igualdad completa de trees; después V-009 prueba el commit tree idéntico; y V-R01 sólo proyecta reparaciones? | `<estado>` | `<ref>` |
| Estados | ¿No se presentó falta de evidencia como `PASS`? | `<estado>` | `<ref>` |
| Lifecycle | ¿Draft observado, CI condicional, V-014, autorización humana, aceptación y reconciliación preservan orden e identidades? | `<estado>` | `<ref>` |
| Seguridad/privacidad | ¿No hay secretos, PII o trust-boundary drift? | `<estado>` | `<ref>` |
| Producto/SEO | ¿Se preservan Home/canonical y no-scope público? | `<estado>` | `<ref>` |
| Externos | ¿Toda mutación está autorizada y documentada? | `<estado>` | `<ref>` |
| Release/rollback | ¿El plan es proporcional y no afirma pruebas inexistentes? | `<estado>` | `<ref>` |
| Truth | ¿Owners, referencias y changelog son coherentes? | `<estado>` | `<ref>` |

Usar los estados de evidencia de
[SOURCE_OF_TRUTH.md](../truth/SOURCE_OF_TRUTH.md). `NOT_APPLICABLE` necesita
justificación específica.

## 5. Findings completos

Enumerar todos los findings dentro del alcance, no sólo una selección Top-N.

| ID | Severidad | Path/superficie | Finding | Evidencia | Impacto | Criterio de cierre | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F-001 | `<CRITICAL/HIGH/MEDIUM/LOW/INFORMATIONAL>` | `<path>` | `<descripción>` | `<ref>` | `<impacto>` | `<condición verificable>` | `<writer/humano/issue>` |

Si no hay findings, escribir `NONE` de forma explícita. Las preguntas o límites
de capacidad se listan por separado y pueden justificar `BLOCKED`.

## 6. Riesgo residual y cobertura

```yaml
COVERAGE:
  CHANGED_SURFACES_REVIEWED:
    - "S01 — efecto — paths/símbolos/sistemas — filas exactas de matriz — owners adicionales | NONE"
  DISCIPLINES_D01_D12_REVIEWED:
    - "D01 | ... | D12 — nombre canónico — MATERIAL | NOT_APPLICABLE — Sxx activadoras"
  OMITTED_OR_BLOCKED_CHECKS:
    - "check, estado y causa | NONE"
  REQUIRED_CHECK_ROW_INVENTORY_COMPLETE: "true | false"
  ALL_CHECK_ROWS_ELIGIBLE_FOR_MATURITY: "true | false"

RESIDUAL_RISK:
  LEVEL: "CRITICAL | HIGH | MEDIUM | LOW | INFORMATIONAL"
  ITEMS:
    - "riesgo y owner | NONE"
```

Un check bloqueado no se compensa con resultados exitosos de otra superficie.
Para conceder `INDEPENDENTLY_VALIDATED`, el inventario requerido debe estar
completo, sin IDs omitidos o duplicados, y cada fila debe satisfacer exactamente
una pareja mutuamente excluyente: clasificación `MATERIAL` con resultado `PASS`,
o clasificación `NOT_APPLICABLE` con resultado `NOT_APPLICABLE` y justificación
concreta de no materialidad. `NOT_RUN`, `PARTIAL`, `UNKNOWN`, `AUTH_BLOCKED`,
`PREVIEW_BLOCKED`, `CAPABILITY_GAP`, `FAIL`, `BLOCKED`, un check
omitido/duplicado, un `NOT_APPLICABLE` injustificado o cualquier pairing
distinto —incluido `MATERIAL`/`NOT_APPLICABLE`— obligan a usar
`INDEPENDENT_VALIDATION_GRANTED: NONE`.

## 7. Reglas de veredicto

- `PASS`: exact HEAD revisado, evidencia suficiente, contrato satisfecho y cero
  findings materiales abiertos. Requiere request `true`/`PASS`, execution
  `PASS`, `INDEPENDENT_AUDIT_VERDICT=PASS`, `AUDITED_HEAD=HEAD` y
  `OPEN_MATERIAL_FINDINGS=0`. Permite registrar `INDEPENDENTLY_VALIDATED`
  sólo si todas las filas requeridas usan `MATERIAL`/`PASS` o
  `NOT_APPLICABLE`/`NOT_APPLICABLE` con justificación concreta de no
  materialidad; no decide Ready, merge ni cierre de la issue.
- `CHANGES_REQUIRED`: existe al menos un finding que debe corregirse. El writer
  crea un HEAD nuevo y repite el ciclo completo de reparación definido en la
  sección 1. El dictamen anterior no aplica al nuevo HEAD.
- `BLOCKED`: no puede emitirse un dictamen fiable por HEAD incorrecto, evidencia
  ausente, acceso insuficiente, scope ambiguo o capacidad faltante.

La solicitud independiente es obligatoria para todo Draft PR implementable. Si
no puede completarse, el manifiesto conserva `CAPABILITY_GAP`, `AUTH_BLOCKED` o
`BLOCKED` según la causa y este dictamen usa `BLOCKED`; nunca se concede madurez
ni se recomienda HUMAN_GATE como si fuera PASS.

Request `PASS` sólo acredita la solicitud; execution `PASS` sólo acredita que se
emitió un dictamen. `CHANGES_REQUIRED`, `BLOCKED`, `NOT_ISSUED`, `NOT_RUN`,
`CAPABILITY_GAP`, `AUTH_BLOCKED`, `HEAD_MISMATCH` u `OPEN_FINDINGS_GT_0`
bloquean el gate regular. La excepción bootstrap de CI no sustituye ninguna de
estas condiciones ni convierte `HARNESS_CI_EXACT_HEAD=CAPABILITY_GAP` en PASS.
`RANQUEL-HARNESS-BOOTSTRAP-001` sólo corresponde a #3, su closeout y el HEAD
humano autorizado; no se transfiere a otro HEAD ni concede Ready o merge.

No existe `PASS_WITH_CAVEATS`: una limitación material produce
`CHANGES_REQUIRED` o `BLOCKED`; un riesgo aceptable se documenta con owner y
decisión humana.

## 8. Dictamen y handoff humano

```yaml
CONCLUSION:
  INDEPENDENT_REVIEW_EXECUTION_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
  INDEPENDENT_AUDIT_VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED | NOT_ISSUED"
  HEAD: "sha completo del candidato"
  AUDITED_HEAD: "sha completo"
  MERGED_PR_HEAD: "head.sha completo del PR | NOT_CAPTURED; no es el merge commit"
  AUDITED_PR_HEAD: "sha completo igual a AUDITED_HEAD"
  INDEPENDENT_REVIEW_HEAD: "sha completo igual a AUDITED_HEAD"
  OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN"
  CLOSEOUT_IDENTITY_AUDIT:
    V014_STATE: "PASS | estado honesto"
    HUMAN_GATE_AUTHORIZATION: "NOT_RUN | PASS | BLOCKED"
    HUMAN_GATE_AUTHORIZED_HEAD: "sha | NOT_CAPTURED"
    HUMAN_GATE_AUTHORIZATION_ACTOR: "actor humano | NOT_CAPTURED"
    HUMAN_GATE_AUTHORIZED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    HUMAN_GATE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
    MERGE_AUTHORIZATION: "NOT_GRANTED | GRANTED"
    MERGE_AUTHORIZED_HEAD: "sha | NOT_CAPTURED"
    MERGE_AUTHORIZATION_ACTOR: "actor humano | NOT_CAPTURED"
    MERGE_AUTHORIZED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    MERGE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
    MERGED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    INTEGRATED_SHA: "sha de implementación | NOT_CAPTURED"
    POST_MERGE_ACCEPTANCE_SHA: "sha igual a INTEGRATED_SHA | NOT_RUN"
    TRUTH_RECONCILIATION_MODE: "NO_DIFF | MERGED_PR | NOT_RUN"
    TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA: "sha igual a INTEGRATED_SHA | NOT_RUN"
    TRUTH_RECONCILIATION_STATE: "PASS | NOT_RUN | BLOCKED"
    TRUTH_RECONCILIATION_PASSED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    TRUTH_RECONCILIATION_EVIDENCE: "ref comprobable | NONE"
  RECONCILIATION_PR_AUDIT:
    RECONCILIATION_PR: "N | NOT_RUN"
    RECONCILIATION_PR_MERGED: "true | false"
    RECONCILIATION_PR_HEAD: "sha completo | NOT_CAPTURED"
    RECONCILIATION_MERGED_PR_HEAD: "sha completo | NOT_CAPTURED"
    RECONCILIATION_REVIEW_REQUESTED: "true | false"
    RECONCILIATION_REVIEW_REQUEST_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
    RECONCILIATION_REVIEW_REQUEST_HEAD: "sha completo | NOT_REQUESTED"
    RECONCILIATION_REVIEW_EXECUTION_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
    RECONCILIATION_AUDIT_VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED | NOT_ISSUED"
    RECONCILIATION_AUDITED_HEAD: "sha completo | NOT_REVIEWED"
    RECONCILIATION_AUDITED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    RECONCILIATION_OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN"
    RECONCILIATION_HUMAN_GATE_AUTHORIZATION: "PASS | NOT_RUN | BLOCKED"
    RECONCILIATION_HUMAN_GATE_AUTHORIZED_HEAD: "sha completo | NOT_CAPTURED"
    RECONCILIATION_HUMAN_GATE_AUTHORIZATION_ACTOR: "actor humano | NOT_CAPTURED"
    RECONCILIATION_HUMAN_GATE_AUTHORIZED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    RECONCILIATION_HUMAN_GATE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
    RECONCILIATION_READY_TRANSITION_STATE: "PASS | NOT_RUN | BLOCKED"
    RECONCILIATION_READY_TRANSITION_OCCURRED: "true | false"
    RECONCILIATION_READY_TRANSITION_HEAD: "sha completo | NOT_CAPTURED"
    RECONCILIATION_READY_TRANSITION_ACTOR: "actor observado | NOT_CAPTURED"
    RECONCILIATION_READY_TRANSITION_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    RECONCILIATION_READY_TRANSITION_MECHANISM: "mecanismo observado | NOT_CAPTURED"
    RECONCILIATION_READY_TRANSITION_EVIDENCE: "ref comprobable del primer evento | NONE"
    RECONCILIATION_MERGE_AUTHORIZATION: "GRANTED | NOT_GRANTED"
    RECONCILIATION_MERGE_AUTHORIZED_HEAD: "sha completo | NOT_CAPTURED"
    RECONCILIATION_MERGE_AUTHORIZATION_ACTOR: "actor humano | NOT_CAPTURED"
    RECONCILIATION_MERGE_AUTHORIZED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    RECONCILIATION_MERGE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
    RECONCILIATION_PR_MERGED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    RECONCILIATION_PR_MERGE_EVIDENCE: "ref del resultado del mismo PR | NONE"
    RECONCILIATION_INTEGRATED_SHA_SOURCE: "MERGED_PR | NOT_CAPTURED"
    RECONCILIATION_INTEGRATED_SHA: "sha real | NOT_CAPTURED"
    RECONCILIATION_SHA_REACHABLE_FROM_MAIN: "YES | NO | NOT_RUN"
  ISSUE_CLOSE_AUDIT:
    EXPLICIT_ISSUE_CLOSE_AUTHORIZATION: "GRANTED | NOT_GRANTED"
    EXPLICIT_ISSUE_CLOSE_AUTHORIZATION_ACTOR: "actor humano | NOT_CAPTURED"
    EXPLICIT_ISSUE_CLOSE_AUTHORIZED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    EXPLICIT_ISSUE_CLOSE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
    EXPLICIT_ISSUE_CLOSE_STATE: "NOT_RUN | PASS | BLOCKED"
    ISSUE_CLOSED: false
    EXPLICIT_ISSUE_CLOSE_ACTOR: "actor observado | NOT_CAPTURED"
    EXPLICIT_ISSUE_CLOSE_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ | NOT_CAPTURED"
    EXPLICIT_ISSUE_CLOSE_MECHANISM: "mecanismo observado | NOT_CAPTURED"
    EXPLICIT_ISSUE_CLOSE_EVIDENCE: "ref comprobable | NONE"
  SUMMARY: "conclusión breve sustentada"
  FINDING_COUNT:
    CRITICAL: 0
    HIGH: 0
    MEDIUM: 0
    LOW: 0
    INFORMATIONAL: 0
  REQUIRED_NEXT_ACTIONS:
    - "acción/owner | NONE"
  REGULAR_HUMAN_GATE_ELIGIBLE: "true | false"
  HUMAN_DECISION_REQUIRED: true
  READY_RECOMMENDATION: "ELIGIBLE_FOR_HUMAN_REVIEW | DO_NOT_MARK_READY | BLOCKED"
  MERGE_PERFORMED: false
  EXTERNAL_MUTATIONS_PERFORMED: false
```

Los campos Ready sólo admiten `PASS` para el primer evento observado del exact
HEAD, con la autorización humana canónica —incluidos actor, instante y
evidencia— anterior al evento. La relación mínima es
`V011_OBSERVED_AT_UTC < INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < READY_TRANSITION_AT_UTC`;
un evento prematuro permanece `BLOCKED`. No existe un alias de autorización
Ready separado de `HUMAN_GATE_*`.

V-015 sólo pasa con
`MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD=HEAD=AUDITED_HEAD=HUMAN_GATE_AUTHORIZED_HEAD=MERGE_AUTHORIZED_HEAD`.
La autorización de merge es posterior al gate humano, incorpora actor, instante
y evidencia, y prueba
`INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < MERGE_AUTHORIZED_AT_UTC < MERGED_AT_UTC`.

Cuando el objeto auditado es un PR de reconciliación, el bloque
`RECONCILIATION_PR_AUDIT` proyecta el dictamen exact-head sin anticipar merge ni
integración. Antes de ejecutar cada fase —y siempre en modo `NO_DIFF`— sus
campos PR-only conservan literalmente los defaults honestos del manifiesto; no
se inventan hechos ni un PR. Un handoff favorable de auditoría exige request
`true`/`PASS`,
`RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_PR_HEAD`, execution `PASS`,
audit verdict `PASS`,
`RECONCILIATION_AUDITED_HEAD=RECONCILIATION_PR_HEAD` y cero findings materiales.
Aun con ese handoff,
`TRUTH_RECONCILIATION_STATE` no puede ser `PASS` hasta que
`TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`,
`RECONCILIATION_PR_MERGED=true`, se capture el HEAD efectivamente mergeado y se
pruebe
`RECONCILIATION_MERGED_PR_HEAD=RECONCILIATION_PR_HEAD=RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_AUDITED_HEAD=RECONCILIATION_HUMAN_GATE_AUTHORIZED_HEAD=RECONCILIATION_READY_TRANSITION_HEAD=RECONCILIATION_MERGE_AUTHORIZED_HEAD`.
Antes del merge, la autorización específica del gate humano, el primer evento
Ready y la autorización separada de merge deben corresponder a
`RECONCILIATION_PR_HEAD`, incluir actor/instante/evidencia y cumplir
`RECONCILIATION_AUDITED_AT_UTC < RECONCILIATION_HUMAN_GATE_AUTHORIZED_AT_UTC < RECONCILIATION_READY_TRANSITION_AT_UTC < RECONCILIATION_MERGE_AUTHORIZED_AT_UTC < RECONCILIATION_PR_MERGED_AT_UTC`;
un Ready prematuro queda `RECONCILIATION_READY_TRANSITION_STATE=BLOCKED` y no se
sana retroactivamente.
`RECONCILIATION_PR_MERGE_EVIDENCE` identifica el resultado de ese mismo PR.
El source debe ser `MERGED_PR`; el integrated SHA debe ser el
`mergeCommit.oid`/`merge_commit_sha` observado en ese mismo
`RECONCILIATION_PR` y su reachability desde `main` debe ser `YES`. Cualquier
otra combinación es no-PASS. Ambos modos exigen V-017 en `PASS`. El modo
`NO_DIFF` exige
`TRUTH_RECONCILIATION_MODE=NO_DIFF`,
`TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA` y
justificación/evidencia comprobable no vacías; no inventa un PR. El source
identifica la implementación; `RECONCILIATION_INTEGRATED_SHA` identifica el
resultado del PR posterior. Sin cualquiera de esas condiciones también es
no-PASS.

Un cierre explícito sólo usa `EXPLICIT_ISSUE_CLOSE_STATE=PASS` e
`ISSUE_CLOSED=true` si registra primero
`TRUTH_RECONCILIATION_PASSED_AT_UTC`, luego autorización humana con
actor/instante/evidencia y finalmente el evento con actor/instante/mecanismo y
evidencia, con
`EXPLICIT_ISSUE_CLOSE_ACTOR=EXPLICIT_ISSUE_CLOSE_AUTHORIZATION_ACTOR`, cumpliendo
`TRUTH_RECONCILIATION_PASSED_AT_UTC < EXPLICIT_ISSUE_CLOSE_AUTHORIZED_AT_UTC < EXPLICIT_ISSUE_CLOSE_AT_UTC`.
Los defaults o eventos prematuros permanecen no-PASS. Las conjunciones completas
y sus owners están en
[DEVELOPMENT_WORKFLOW.md](../truth/DEVELOPMENT_WORKFLOW.md) y
[QUALITY_GATES.md](../truth/QUALITY_GATES.md).

El auditor entrega el dictamen sin ejecutar correcciones. Ready, merge,
aceptación post-merge, reconciliación de truth y cierre explícito permanecen
eventos separados y posteriores, pero conservan la dependencia de V-014 y de la
autorización humana del gate y del merge para el HEAD exacto. Un merge no sana
un dictamen fallido y V-017 usa sólo
`POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA`.
