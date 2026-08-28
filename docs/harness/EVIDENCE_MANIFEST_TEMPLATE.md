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
  BRANCH: "rama"
  WRITER: "sesión/agente"
  RECORDED_AT_UTC: "YYYY-MM-DDTHH:MM:SSZ"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos"
  OVERALL_VALIDATION_RESULT: "resultado exacto definido por VALIDATION_RESULT_OWNER"
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

`HEAD` debe coincidir con diff, CI, preview y auditoría que se reclaman. Si el
commit cambia, revalidar o marcar la evidencia anterior como no aplicable al
nuevo HEAD.

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

| ID | Gate | Comando/inspección sanitizada | Exit code | Estado | Resultado observado | Evidencia | Limitación |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| V-001 | Preflight | `<comando>` | `<n>` | `<estado>` | `<resumen literal>` | `<ref>` | `<NONE o detalle>` |
| V-002 | Diff | `git diff --check` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-003 | Staged diff | `git diff --cached --check` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-004 | Scope | `<inspección>` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-005 | Secrets/privacy | `<inspección>` | `<n>` | `<estado>` | `<resultado sanitizado>` | `<ref>` | `<detalle>` |
| V-006 | Focal tests | `<comando>` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-007 | Surface gates | `<comando/inspección>` | `<n>` | `<estado>` | `<resultado>` | `<ref>` | `<detalle>` |
| V-008 | Preview/visual | `<URL redactada/ref>` | `N/A` | `<estado>` | `<desktop/móvil>` | `<ref>` | `<detalle>` |
| V-009 | CI exact-head | `<job/run>` | `N/A` | `<estado>` | `<sha/result>` | `<ref>` | `<detalle>` |

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
- `INDEPENDENTLY_VALIDATED` requiere auditor distinto y exact HEAD.
- `POST_MERGE_ACCEPTED` requiere verificación posterior sobre lo integrado.

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
  AUDIT_REQUESTED: "true | false | NOT_APPLICABLE con justificación"
  READY_DECISION_OWNER: "humano"
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: "humano después de POST_MERGE_ACCEPTANCE y TRUTH_RECONCILIATION"
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
```

El handoff incluye TASK_CONTRACT, lista de archivos, comandos/resultados,
limitaciones, riesgos, rollback y solicitud de auditoría. No marca Ready ni
declara `DONE` por la sola creación del PR.
