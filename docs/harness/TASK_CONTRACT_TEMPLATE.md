# Plantilla de TASK_CONTRACT

Status: `CURRENT_IN_PROGRESS`

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
    CANONICAL_OWNER: "docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"
    SURFACE_INVENTORY:
      - SURFACE_ID: "S01; identificador local de esta tarea, no enum canónico"
        EFFECT: "efecto material que cambia"
        PATHS_OR_SYMBOLS:
          - "path, símbolo o sistema afectado"
        MATRIX_ROWS:
          - "fila exacta de INTERDISCIPLINARY_REVIEW_MATRIX.md"
        DOMAIN_OWNERS:
          - "owner adicional aplicable | NONE"
    DISCIPLINES:
      - DISCIPLINE_ID: "D01 | D02 | ... | D12; incluir exactamente las doce filas en orden"
        DISCIPLINE_NAME: "nombre canónico copiado del owner"
        ACTIVATED_BY_SURFACES:
          - "S01"
        MATERIALITY: "MATERIAL | NOT_APPLICABLE"
        ACTIVATING_EFFECT: "efecto real o justificación concreta"
        CONTRACT_AND_ACCEPTANCE: "owner y criterio"
        RISK_AND_GATE: "nivel/gate seleccionado"
        REQUIRED_EVIDENCE: "evidencia esperada"
        REVIEWER_OR_AUTHORITY: "rol requerido"
        STOP_CONDITION: "condición específica"

  SEO_INDEXABLE_CONTEXT:
    APPLIES: "true | false con justificación"
    CANONICAL_RESULTS_OWNER: "docs/truth/SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos"
    seoArchetype: "arquetipo aprobado | NOT_APPLICABLE"
    goldenBaselineVersion: "versión aprobada | NOT_APPLICABLE | NOT_AVAILABLE"
    SEO_GOLDEN_PARITY: "resultado canónico definido por CANONICAL_RESULTS_OWNER"
    HOME_SEO_REGRESSION: "resultado canónico definido por CANONICAL_RESULTS_OWNER"
    LOCAL_CONTENT_UTILITY: "resultado canónico definido por CANONICAL_RESULTS_OWNER"
    MOBILE_SEO_PARITY: "resultado canónico definido por CANONICAL_RESULTS_OWNER"
    MULTILINGUAL_SEO: "resultado canónico definido por CANONICAL_RESULTS_OWNER"

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
    CANDIDATE_PUBLICATION:
      COMMIT_CANDIDATE:
        - "crear el HEAD real desde el staged set validado"
      CAPTURE_NEW_HEAD:
        - "registrar el SHA completo inmediatamente después del commit"
      VERIFY_COMMIT_TREE_MATCH:
        - "exigir NEW_HEAD_TREE_SHA=VALIDATED_STAGED_TREE_SHA antes del push"
      PUSH_CANDIDATE:
        - "push normal y remote head igual al HEAD local"
      DRAFT_PR_CREATE_OR_UPDATE:
        - "Draft PR head igual al commit publicado"
      REPAIR_CYCLE:
        REQUIRED_SEQUENCE:
          - REPAIR_EDIT
          - DIFF_CHECK
          - EXACT_STAGE
          - STAGED_SCOPE_SECRET_RECHECK
          - AFFECTED_FOCAL_TESTS
          - AFFECTED_SURFACE_GATES
          - COMMIT_CANDIDATE
          - CAPTURE_NEW_HEAD
          - VERIFY_COMMIT_TREE_MATCH
          - PUSH_CANDIDATE
          - DRAFT_PR_UPDATE
          - CI_EXACT_HEAD
          - INDEPENDENT_REVIEW_REQUEST
          - INDEPENDENT_AUDIT
        PREVIOUS_HEAD: "sha anterior | NOT_APPLICABLE"
        VALIDATED_STAGED_TREE_SHA: "tree sha"
        NEW_HEAD: "sha completo"
        NEW_HEAD_TREE_SHA: "tree sha"
        TREE_MATCH: "PASS | FAIL"
        PREVIOUS_HEAD_EVIDENCE_REUSED: false
        AFFECTED_FOCAL_TESTS: "lista y resultado"
        AFFECTED_SURFACE_GATES: "lista y resultado"
        UNAFFECTED_GATES: "NOT_APPLICABLE más justificación concreta por gate | NONE"
        TRANSVERSAL_CONTRACT_CHANGED: "true | false"
        TRANSVERSAL_CONTRACT_MATRIX_REQUIRED: "true cuando cambió; false con justificación"
        TRANSVERSAL_CONTRACT_MATRIX_RESULT: "resultado canónico | NOT_APPLICABLE justificado"
    CI_EXACT_HEAD:
      - "job esperado sobre el mismo HEAD local/remoto/Draft | NOT_RUN/CAPABILITY_GAP hasta que exista"
    INDEPENDENT_REVIEW_REQUEST:
      REQUEST: REQUIRED
      INTENSITY: "PROPORTIONAL para LIGHT/STANDARD | EXACT_HEAD_COMPLETE para HIGH/CRITICAL"
      INDEPENDENT_REVIEW_REQUESTED: "true | false"
      INDEPENDENT_REVIEW_REQUEST_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
      INDEPENDENT_REVIEW_REQUEST_HEAD: "sha completo igual a HEAD | NOT_REQUESTED"
      INDEPENDENT_REVIEW_REQUEST_EVIDENCE: "ref comprobable | NONE"
    INDEPENDENT_AUDIT:
      INDEPENDENT_REVIEW_EXECUTION_STATE: "PASS | NOT_RUN | AUTH_BLOCKED | CAPABILITY_GAP | BLOCKED"
      INDEPENDENT_REVIEW_EXECUTION_CAUSE: "NONE | HEAD_MISMATCH | causa explícita"
      INDEPENDENT_AUDIT_VERDICT: "PASS | CHANGES_REQUIRED | BLOCKED | NOT_ISSUED"
      AUDITED_HEAD: "sha completo igual a HEAD | NOT_REVIEWED"
      OPEN_MATERIAL_FINDINGS: "entero >= 0 | UNKNOWN antes de ejecución"
      REGULAR_HUMAN_GATE_REQUIRES: "INDEPENDENT_REVIEW_REQUESTED=true; INDEPENDENT_REVIEW_REQUEST_STATE=PASS; INDEPENDENT_REVIEW_EXECUTION_STATE=PASS; INDEPENDENT_AUDIT_VERDICT=PASS; AUDITED_HEAD=HEAD; OPEN_MATERIAL_FINDINGS=0"
      BLOCKING_CONDITIONS: "CHANGES_REQUIRED | BLOCKED | NOT_ISSUED | NOT_RUN | CAPABILITY_GAP | AUTH_BLOCKED | HEAD_MISMATCH | OPEN_FINDINGS_GT_0"
    HUMAN_MERGE:
      PR_NUMBER_REQUIRED: true
      PR_MERGED_REQUIRED: true
      MERGED_PR_HEAD_REQUIRED: true
      AUDITED_PR_HEAD_REQUIRED: true
      INDEPENDENT_REVIEW_HEAD_REQUIRED: true
      REQUIRED_HEAD_EQUALITY: "MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD"
      HEAD_DRIFT_RESULT: "BLOCKED con MERGE_ACCEPTANCE=BLOCKED_HEAD_DRIFT; no capturar INTEGRATED_SHA"
    CAPTURE_INTEGRATED_SHA:
      SOURCE: "resultado del PR mergeado, nunca el tip corriente de main"
      INTEGRATED_SHA_SOURCE: MERGED_PR
      MERGE_METHOD: "MERGE | SQUASH | REBASE | NOT_OBSERVABLE"
      REACHABLE_FROM_MAIN_REQUIRED: true
      MAIN_HEAD_AT_ACCEPTANCE_REQUIRED: true
    POST_MERGE_ACCEPTANCE:
      - "requiere HUMAN_MERGE=PASS, PR_MERGED=YES e INTEGRATED_SHA capturado"
      - "verificación posterior contra INTEGRATED_SHA y owner humano"
    TRUTH_RECONCILIATION:
      VALID_MODES:
        NO_DIFF: "justificación/evidencia no vacías y SOURCE_INTEGRATED_SHA igual a INTEGRATED_SHA; sin PR ficticio"
        MERGED_PR: "V-017 PASS y conjunción completa de MERGED_PR_PASS_REQUIRES"
      MERGED_PR_PASS_REQUIRES:
        RECONCILIATION_PR: "N real"
        RECONCILIATION_PR_HEAD: "sha completo"
        RECONCILIATION_REVIEW_REQUESTED: true
        RECONCILIATION_REVIEW_REQUEST_STATE: PASS
        RECONCILIATION_REVIEW_REQUEST_HEAD: "igual a RECONCILIATION_PR_HEAD"
        RECONCILIATION_REVIEW_EXECUTION_STATE: PASS
        RECONCILIATION_AUDIT_VERDICT: PASS
        RECONCILIATION_AUDITED_HEAD: "igual a RECONCILIATION_PR_HEAD"
        RECONCILIATION_OPEN_MATERIAL_FINDINGS: 0
        RECONCILIATION_PR_MERGED: true
        RECONCILIATION_INTEGRATED_SHA_SOURCE: MERGED_PR
        RECONCILIATION_INTEGRATED_SHA: "sha real"
        RECONCILIATION_SHA_REACHABLE_FROM_MAIN: "YES"
        ALL_OTHER_COMBINATIONS: "TRUTH_RECONCILIATION_STATE != PASS"
      INVALID_AS_PASS: "Draft | Ready | CLOSED_UNMERGED | PR creado/revisado sin merge"
    EXPLICIT_ISSUE_CLOSE:
      REQUIRES: "POST_MERGE_ACCEPTANCE=PASS y TRUTH_RECONCILIATION=PASS por uno de los dos modos válidos"

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
    - "Draft PR con Refs #N no autocerrante, issue owner, scope/no-scope, riesgo y rollback"
    - "INDEPENDENT_REVIEW_REQUEST=REQUIRED y solicitud registrada para el exact HEAD"
    - "toda reparación repite REPAIR_EDIT hasta auditoría; commit crea el NEW_HEAD, luego se captura/verifica su tree y no se hereda evidencia"
    - "HUMAN_GATE regular sólo con request true/PASS, execution PASS, verdict PASS, AUDITED_HEAD=HEAD y cero findings materiales abiertos"
    - "sin Ready, merge, deploy o cierre no autorizados; cierre humano sólo después de aceptación y reconciliación"
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
8. **Changed surfaces:** se determinan por efecto real, no por extensión del
   archivo. Se inventaría cada superficie con un ID local `S01`, `S02`, etc. y
   se referencian todas las filas exactas aplicables de la matriz. Los owners de
   dominio se registran por separado y no sustituyen esas filas; los IDs `Sxx`
   no forman un enum global. Después se deriva la unión de disciplinas y se
   declaran D01–D12 individualmente, con cada `NOT_APPLICABLE` justificado, según la
   [matriz interdisciplinaria](../truth/INTERDISCIPLINARY_REVIEW_MATRIX.md).
   Superficies y disciplinas son dimensiones separadas: una superficie puede
   activar varias disciplinas y una disciplina puede ser activada por varias
   superficies. Si SEO/indexación es material, completa además los campos de
   [SEO_PARITY_CONTRACT.md](../truth/SEO_PARITY_CONTRACT.md); un gate todavía no
   implementado queda `NOT_RUN`/`BLOCKED`, nunca `PASS`.
9. **Riesgo:** usa [QUALITY_GATES.md](../truth/QUALITY_GATES.md) y acumula riesgo
   entre superficies.
10. **Contratos preservados:** enlaza al owner; no copia detalle mutable.
11. **Validaciones:** cada gate tiene criterio de éxito y estado posterior.
    El candidato debe convertirse en commit, publicarse y actualizar el Draft
    antes de CI/auditoría. La solicitud independiente es obligatoria; su
    intensidad varía por riesgo, no su existencia. Un HEAD nuevo invalida la
    CI, solicitud, dictamen y madurez anteriores. La aceptación post-merge exige
    merge comprobado y captura separada del SHA integrado.
12. **Evidencia:** usa la
    [plantilla de manifiesto](EVIDENCE_MANIFEST_TEMPLATE.md) y referencia exact
    HEAD.
13. **STOP conditions:** se evalúan antes de reparar o ampliar scope.
14. **Definition of Done:** distingue entrega del writer, auditoría, decisión
    humana y aceptación post-merge.

El contrato se actualiza antes de continuar si cambia scope. Una edición hecha
primero y documentada después no satisface este protocolo.
