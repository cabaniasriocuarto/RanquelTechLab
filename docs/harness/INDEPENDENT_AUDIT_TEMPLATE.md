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
  WRITER: "sesión/agente"
  AUDITOR: "sesión/agente diferente"
  AUDITED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ"
  MODE: READ_ONLY
  VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED"
  INDEPENDENT_VALIDATION_GRANTED: "INDEPENDENTLY_VALIDATED | NONE"
```

Si `AUDITED_HEAD` no coincide con el HEAD actual del PR, el dictamen queda
`BLOCKED` hasta auditar el commit correcto.

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
- [ ] EVIDENCE_MANIFEST y comandos sanitizados.
- [ ] Resultados de focal tests y surface gates.
- [ ] CI/preview exact-head cuando aplican.
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
  DISCIPLINES_D01_D12_REVIEWED:
    - "D01 | ... | D12 — nombre canónico — MATERIAL | NOT_APPLICABLE"
  OMITTED_OR_BLOCKED_CHECKS:
    - "check, estado y causa | NONE"

RESIDUAL_RISK:
  LEVEL: "CRITICAL | HIGH | MEDIUM | LOW | INFORMATIONAL"
  ITEMS:
    - "riesgo y owner | NONE"
```

Un check bloqueado no se compensa con resultados exitosos de otra superficie.

## 7. Reglas de veredicto

- `PASS`: exact HEAD revisado, evidencia suficiente, contrato satisfecho y sin
  findings que requieran cambio. Permite registrar `INDEPENDENTLY_VALIDATED`,
  pero no decide Ready, merge ni cierre de la issue.
- `CHANGES_REQUIRED`: existe al menos un finding que debe corregirse. El writer
  crea un HEAD nuevo y la auditoría se repite.
- `BLOCKED`: no puede emitirse un dictamen fiable por HEAD incorrecto, evidencia
  ausente, acceso insuficiente, scope ambiguo o capacidad faltante.

No existe `PASS_WITH_CAVEATS`: una limitación material produce
`CHANGES_REQUIRED` o `BLOCKED`; un riesgo aceptable se documenta con owner y
decisión humana.

## 8. Dictamen y handoff humano

```yaml
CONCLUSION:
  VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED"
  SUMMARY: "conclusión breve sustentada"
  FINDING_COUNT:
    CRITICAL: 0
    HIGH: 0
    MEDIUM: 0
    LOW: 0
    INFORMATIONAL: 0
  REQUIRED_NEXT_ACTIONS:
    - "acción/owner | NONE"
  HUMAN_DECISION_REQUIRED: true
  READY_RECOMMENDATION: "ELIGIBLE_FOR_HUMAN_REVIEW | DO_NOT_MARK_READY | BLOCKED"
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
  EXTERNAL_MUTATIONS_PERFORMED: false
```

El auditor entrega el dictamen sin ejecutar correcciones. Ready, merge,
aceptación post-merge, reconciliación de truth y cierre explícito permanecen
eventos posteriores e independientes.
