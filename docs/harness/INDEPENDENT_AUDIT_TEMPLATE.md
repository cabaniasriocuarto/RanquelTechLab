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
  DRAFT_PR_HEAD: "sha completo actual del Draft PR"
  WRITER: "sesión/agente"
  AUDITOR: "sesión/agente diferente"
  AUDITED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ"
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

Si `AUDITED_HEAD`, `REMOTE_HEAD` y `DRAFT_PR_HEAD` no coinciden, el dictamen
queda `BLOCKED` hasta auditar el commit publicado correcto. Un commit nuevo
invalida toda evidencia anterior. El writer debe repetir:

```text
REPAIR_EDIT
→ DIFF_CHECK
→ EXACT_STAGE
→ STAGED_SCOPE_SECRET_RECHECK
→ AFFECTED_FOCAL_TESTS
→ AFFECTED_SURFACE_GATES
→ POST_GATE_WORKTREE_INDEX_RECHECK
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
- [ ] Si hubo reparación, ledger completo desde `REPAIR_EDIT` y en el orden canónico.
- [ ] `PREVIOUS_HEAD_EVIDENCE_REUSED=false` y evidencia local ligada al nuevo HEAD.
- [ ] `COMMIT_CANDIDATE` precede a `CAPTURE_NEW_HEAD`, que registra el SHA completo.
- [ ] `VERIFY_COMMIT_TREE_MATCH` precede al push y deja `TREE_MATCH=PASS` sólo si
  `NEW_HEAD_TREE_SHA=VALIDATED_STAGED_TREE_SHA` sin drift de índice/worktree.
- [ ] Push, CI, request y auditoría citan `NEW_HEAD`, nunca `PREVIOUS_HEAD`.
- [ ] Gates afectados repetidos; gates no afectados `NOT_APPLICABLE` y justificados.
- [ ] `STAGED_SCOPE_SECRET_RECHECK` prueba con `git diff --quiet` e inventario
  untracked que `PRE_GATE_WORKTREE_INDEX_ALIGNMENT=PASS`, repite cached
  diff/scope/secrets y captura `PRE_GATE_STAGED_TREE_SHA`.
- [ ] Después de los gates, `POST_GATE_WORKTREE_INDEX_RECHECK=PASS` repite esos
  controles, prueba cero drift y fija
  `POST_GATE_CURRENT_INDEX_TREE_SHA=PRE_GATE_STAGED_TREE_SHA=VALIDATED_STAGED_TREE_SHA`.
- [ ] Un recheck omitido o `FAIL` bloquea commit/push/auditoría y vuelve a
  `DIFF_CHECK`, staging y gates; `TREE_MATCH=PASS` posterior no lo compensa.
- [ ] Si cambió un contrato transversal, matriz contractual completa reejecutada.
- [ ] CI/preview exact-head cuando aplican.
- [ ] Solicitud, ejecución y dictamen registrados como dimensiones separadas.
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
| Repair integrity | ¿El tree pre-gate sigue idéntico después de los gates y no existe drift de worktree/índice/untracked? | `<estado>` | `<ref>` |
| Estados | ¿No se presentó falta de evidencia como `PASS`? | `<estado>` | `<ref>` |
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

No existe `PASS_WITH_CAVEATS`: una limitación material produce
`CHANGES_REQUIRED` o `BLOCKED`; un riesgo aceptable se documenta con owner y
decisión humana.

## 8. Dictamen y handoff humano

```yaml
CONCLUSION:
  INDEPENDENT_REVIEW_EXECUTION_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
  INDEPENDENT_AUDIT_VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED | NOT_ISSUED"
  AUDITED_HEAD: "sha completo"
  AUDITED_PR_HEAD: "sha completo igual a AUDITED_HEAD"
  INDEPENDENT_REVIEW_HEAD: "sha completo igual a AUDITED_HEAD"
  OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN"
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
    RECONCILIATION_OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN"
    RECONCILIATION_INTEGRATED_SHA_SOURCE: "MERGED_PR | NOT_CAPTURED"
    RECONCILIATION_INTEGRATED_SHA: "sha real | NOT_CAPTURED"
    RECONCILIATION_SHA_REACHABLE_FROM_MAIN: "YES | NO | NOT_RUN"
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
  ISSUE_CLOSED: false
  EXTERNAL_MUTATIONS_PERFORMED: false
```

Cuando el objeto auditado es un PR de reconciliación, el bloque
`RECONCILIATION_PR_AUDIT` proyecta el dictamen exact-head sin anticipar merge ni
integración; se omite para otros PRs. Antes de ejecutar cada fase, sus valores
copian literalmente los `PRE_MERGE_DEFAULTS` del manifiesto. Un handoff favorable
de auditoría exige request `true`/`PASS`,
`RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_PR_HEAD`, execution `PASS`,
audit verdict `PASS`,
`RECONCILIATION_AUDITED_HEAD=RECONCILIATION_PR_HEAD` y cero findings materiales.
Aun con ese handoff,
`TRUTH_RECONCILIATION_STATE` no puede ser `PASS` hasta que
`RECONCILIATION_PR_MERGED=true`, se capture el HEAD efectivamente mergeado y se
pruebe
`RECONCILIATION_MERGED_PR_HEAD=RECONCILIATION_PR_HEAD=RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_AUDITED_HEAD`.
El source debe ser `MERGED_PR`; el integrated SHA debe ser el
`mergeCommit.oid`/`merge_commit_sha` observado en ese mismo
`RECONCILIATION_PR` y su reachability desde `main` debe ser `YES`. Cualquier
otra combinación es no-PASS. El modo `NO_DIFF` exige
`TRUTH_RECONCILIATION_MODE=NO_DIFF`,
`SOURCE_INTEGRATED_SHA=INTEGRATED_SHA` y justificación/evidencia comprobable no
vacías; no inventa un PR. Sin cualquiera de esas condiciones también es
no-PASS.

El auditor entrega el dictamen sin ejecutar correcciones. Ready, merge,
aceptación post-merge, reconciliación de truth y cierre explícito permanecen
eventos posteriores e independientes.
