# Plantilla de TASK_CONTRACT

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/harness/TASK_CONTRACT_TEMPLATE.md` (estructura canónica del contrato de tarea)

El writer completa y emite este contrato antes de editar. Se reemplazan todos
los placeholders, se preservan las claves y se usan listas explícitas; un campo
vacío, ambiguo o inferido fuera de la issue activa el cierre fail-closed.

```yaml
TASK_CONTRACT:
  CONTRACT_VERSION: RANQUEL_TASK_CONTRACT_V1
  ISSUE: "#N"
  PARENT: "#N | NONE"
  DEPENDENCIES:
    - "#N | NONE"
  WRITER_ROLE: "sesión/agente responsable"

  1_OBJECTIVE:
    SEMANTIC_OUTCOME: "resultado observable que debe producir la issue"
    SUCCESS_BOUNDARY: "qué será distinto si el cambio cumple"

  2_BASELINE_OBSERVED:
    REPOSITORY: "owner/repo"
    DEFAULT_BRANCH: "main"
    BASE_SHA: "sha completo observado de origin/main"
    HEAD: "sha completo antes de editar"
    BRANCH: "rama de trabajo"
    GIT_STATUS: "salida o resumen literal"
    RELATION_TO_ORIGIN_MAIN: "ahead N / behind N / diverged / unknown"
    ACTIVE_GIT_OPERATIONS:
      MERGE: false
      REBASE: false
      CHERRY_PICK: false
      REVERT: false
      BISECT: false
    APPLICABLE_AGENTS:
      - "AGENTS.md"
    DOCUMENT_OWNERS:
      - SURFACE: "tipo de verdad"
        OWNER: "docs/truth/OWNER.md"
    OBSERVED_IMPLEMENTATION:
      - "hecho inspeccionado con path o referencia"
    READ_ONLY_CONTEXT:
      - "path/sistema consultable pero no editable"
    UNKNOWNS:
      - "UNKNOWN | NONE"

  3_OUT_OF_SCOPE:
    - "cambio expresamente excluido"

  4_ALLOWED_PATHS:
    PATHS:
      - "path o glob autorizado"
    ALLOWED_SYMBOLS:
      - "símbolo/sección autorizada | NOT_APPLICABLE con justificación"

  5_FORBIDDEN_PATHS:
    - "path, rama o superficie prohibida"

  6_EXTERNAL_SYSTEMS_ALLOWED:
    - SYSTEM: "nombre"
      ACCESS: "READ_ONLY | MUTATION_EXPLICITLY_AUTHORIZED"
      OPERATIONS:
        - "operación concreta"
      AUTHORITY: "instrucción/issue que la autoriza"

  7_EXTERNAL_SYSTEMS_FORBIDDEN:
    - "sistema y mutaciones prohibidas"

  8_CHANGED_SURFACES:
    - SURFACE: "docs | content | frontend_ui | seo | analytics | ads | api | security | generated_output | deployment"
      MATERIALITY: "MATERIAL | NOT_APPLICABLE"
      RATIONALE: "por qué"
      REQUIRED_DISCIPLINES:
        - "disciplina seleccionada por la matriz"

  INTERDISCIPLINARY_CLASSIFICATION:
    - DISCIPLINE_ID: "D01 | D02 | ... | D12; incluir las doce filas"
      MATERIALITY: "MATERIAL | NOT_APPLICABLE"
      ACTIVATING_SURFACE: "changed surface o justificación concreta"
      CONTRACT_AND_ACCEPTANCE: "owner y criterio"
      RISK_AND_GATE: "nivel/gate seleccionado"
      REQUIRED_EVIDENCE: "evidencia esperada"
      REVIEWER_OR_AUTHORITY: "rol requerido"
      STOP_CONDITION: "condición específica"

  SEO_INDEXABLE_CONTEXT:
    APPLIES: "true | false con justificación"
    seoArchetype: "arquetipo aprobado | NOT_APPLICABLE"
    goldenBaselineVersion: "versión aprobada | NOT_APPLICABLE | NOT_AVAILABLE"
    SEO_GOLDEN_PARITY: "PASS | FAIL | BLOCKED | PARTIAL | NOT_RUN | NOT_APPLICABLE"
    HOME_SEO_REGRESSION: "PASS | FAIL | BLOCKED | NOT_RUN | NOT_APPLICABLE"
    LOCAL_CONTENT_UTILITY: "PASS | FAIL | BLOCKED | NOT_RUN | NOT_APPLICABLE"
    MOBILE_SEO_PARITY: "PASS | FAIL | BLOCKED | NOT_RUN | NOT_APPLICABLE"
    MULTILINGUAL_SEO: "PASS | FAIL | BLOCKED | NOT_RUN | NOT_APPLICABLE"

  9_RISK:
    LEVEL: "LIGHT | STANDARD | HIGH | CRITICAL"
    RATIONALE: "impacto, exposición y reversibilidad"
    CHANGE_BUDGET:
      MAX_PATHS_OR_SCOPE: "límite explícito"
      EXTERNAL_MUTATIONS: "lista y cantidad máxima | ZERO"
      REPAIR_LIMIT: "hasta dos reparaciones acotadas"

  10_CONTRACTS_TO_PRESERVE:
    - "Home/canonical de Río Cuarto, API, privacidad u otro contrato aplicable"

  11_VALIDATIONS:
    PREFLIGHT:
      - "comando/inspección y criterio"
    UNSTAGED:
      - "git diff --check"
    EXACT_STAGE:
      - "paths que se agregarán explícitamente"
    STAGED:
      - "git diff --cached --check"
      - "scope guard"
      - "secret/privacy scan"
    FOCAL_TESTS:
      - "prueba y criterio | NOT_APPLICABLE con justificación"
    SURFACE_GATES:
      - "gate y criterio | NOT_APPLICABLE con justificación"
    VISUAL_VALIDATION:
      - "desktop/móvil exact-head | NOT_APPLICABLE con justificación"
    CI_EXACT_HEAD:
      - "job esperado | NOT_RUN/CAPABILITY_GAP hasta que exista"
    INDEPENDENT_AUDIT:
      - "requerida/no requerida y fundamento"
    POST_MERGE_ACCEPTANCE:
      - "verificación posterior y owner humano"

  12_REQUIRED_EVIDENCE:
    ITEMS:
      - "diff/path/comando/resultado/artefacto requerido"
    EVIDENCE_MANIFEST: "ubicación en PR o referencia"
    REQUIRED_FINAL_STATE: "SELF_VALIDATED_ONLY antes de auditoría"

  13_STOP_CONDITIONS:
    - "path o sistema fuera de scope"
    - "drift o operación Git inesperada"
    - "tercera falla materialmente independiente"
    - "ambigüedad arquitectónica o autoridad insuficiente"
    - "secreto, PII, env o settings no autorizados"
    - "mutación externa, publicación o indexación no autorizada"
    - "afirmación sin fuente o riesgo para Home/canonical de Río Cuarto"
    - "operación destructiva o irreversible no aprobada"

  14_DEFINITION_OF_DONE:
    - "criterio observable de implementación"
    - "diff final limitado a allowed paths"
    - "staging exacto y rechecks completados"
    - "validaciones con estados honestos"
    - "manifiesto de evidencia completo"
    - "Draft PR con issue owner, scope/no-scope, riesgo y rollback"
    - "auditoría independiente solicitada cuando corresponda"
    - "sin Ready, merge, deploy o cierre no autorizados"
```

## Reglas de completado

1. **Objetivo:** describe outcome, no una lista de archivos.
2. **Baseline:** proviene del worktree y GitHub reales. No reutiliza SHAs o
   estados de chats anteriores.
3. **Fuera de alcance:** incluye cambios adyacentes tentadores, otras ramas y
   producto no autorizado.
4. **Allowed paths:** es una allowlist cerrada; un glob amplio necesita
   justificación.
5. **Forbidden paths:** enumera trust boundaries aunque parezcan obvios.
6. **Sistemas permitidos:** distingue lectura de mutación y lista la operación
   exacta. Acceso a GitHub no autoriza Vercel o Google.
7. **Sistemas prohibidos:** incluye deploy, DNS, Analytics, Ads y secretos cuando
   no son scope.
8. **Changed surfaces:** se determina por efecto real, no por extensión del
   archivo. Toda marca `NOT_APPLICABLE` se justifica y D01–D12 se declaran
   individualmente según la
   [matriz interdisciplinaria](../truth/INTERDISCIPLINARY_REVIEW_MATRIX.md). Si
   SEO/indexación es material, completa además los campos de
   [SEO_PARITY_CONTRACT.md](../truth/SEO_PARITY_CONTRACT.md); un gate todavía no
   implementado queda `NOT_RUN`/`BLOCKED`, nunca `PASS`.
9. **Riesgo:** usa [QUALITY_GATES.md](../truth/QUALITY_GATES.md) y acumula riesgo
   entre superficies.
10. **Contratos preservados:** enlaza al owner; no copia detalle mutable.
11. **Validaciones:** cada gate tiene criterio de éxito y estado posterior.
12. **Evidencia:** usa la
    [plantilla de manifiesto](EVIDENCE_MANIFEST_TEMPLATE.md) y referencia exact
    HEAD.
13. **STOP conditions:** se evalúan antes de reparar o ampliar scope.
14. **Definition of Done:** distingue entrega del writer, auditoría, decisión
    humana y aceptación post-merge.

El contrato se actualiza antes de continuar si cambia scope. Una edición hecha
primero y documentada después no satisface este protocolo.
