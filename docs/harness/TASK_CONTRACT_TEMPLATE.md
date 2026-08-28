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
      - "inventariar todos los untracked; la allowlist no los incorpora al candidato"
      - "ejecutar gates sobre el worktree sólo con UNTRACKED_FILES=NONE, o sobre una copia aislada creada desde el staged tree"
      - "crear fuera del repositorio validadores efímeros y toda su evidencia/artefactos"
    FOCAL_TESTS:
      - "prueba y criterio | NOT_APPLICABLE con justificación"
    SURFACE_GATES:
      - "gate y criterio | NOT_APPLICABLE con justificación"
    POST_GATE_WORKTREE_INDEX_RECHECK:
      - "en REPAIR_CYCLE, repetir git diff --quiet, inventario completo de untracked, cached diff, scope y secrets"
      - "exigir PRE_GATE_WORKTREE_INDEX_ALIGNMENT=PASS y PRE_GATE_STAGED_TREE_SHA=POST_GATE_CURRENT_INDEX_TREE_SHA=VALIDATED_STAGED_TREE_SHA"
      - "registrar GATE_EXECUTION_SOURCE; worktree exige UNTRACKED_FILES=NONE y copia aislada exige ISOLATED_VALIDATION_TREE_SHA=PRE_GATE_STAGED_TREE_SHA"
      - "confirmar que ningún validador o artefacto efímero quedó tracked, staged o untracked"
      - "fuera de reparación, NOT_APPLICABLE con justificación y sin alterar el lifecycle primario"
    VISUAL_VALIDATION:
      - "desktop/móvil exact-head | NOT_APPLICABLE con justificación"
    CANDIDATE_PUBLICATION:
      COMMIT_CANDIDATE:
        - "crear siempre el commit candidato; en reparación, sólo después de POST_GATE_WORKTREE_INDEX_RECHECK=PASS"
      CAPTURE_CANDIDATE_HEAD:
        - "registrar siempre el SHA completo inmediatamente después del commit"
      PUSH_CANDIDATE:
        - "push normal y remote head igual al HEAD local"
      DRAFT_PR_CREATE_OR_UPDATE:
        - "V-011 registra PR abierto, PR_IS_DRAFT=true, head igual al commit, instante y evidencia antes de HUMAN_GATE"
        - "una transición Ready posterior y autorizada se registra aparte y no invalida el V-011 histórico"
      REPAIR_CYCLE:
        APPLIES: "true | false"
        IF_TRUE:
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
          PREVIOUS_HEAD: "sha anterior"
          GATE_EXECUTION_SOURCE: "INDEXED_CANDIDATE_IN_WORKTREE | ISOLATED_VALIDATED_TREE"
          UNTRACKED_FILES: "NONE | inventario observado fuera de la copia aislada"
          ISOLATED_VALIDATION_TREE_SHA: "tree sha | NOT_APPLICABLE en modo worktree"
          PRE_GATE_WORKTREE_INDEX_ALIGNMENT: "PASS | FAIL"
          PRE_GATE_STAGED_TREE_SHA: "tree sha"
          POST_GATE_WORKTREE_INDEX_RECHECK: "PASS | FAIL"
          POST_GATE_CURRENT_INDEX_TREE_SHA: "tree sha"
          VALIDATED_STAGED_TREE_SHA: "tree sha; igual a los trees pre/post cuando el recheck es PASS"
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
        IF_FALSE: "omitir PREVIOUS_HEAD, V-R01, trees y TREE_MATCH de reparación; no declararlos PASS"
    CI_EXACT_HEAD:
      HARNESS_CI_EVIDENCE_USED: "true | false"
      HARNESS_CI_EXACT_HEAD: "PASS | FAIL | CAPABILITY_GAP"
      CI_HEAD: "sha real de una ejecución usada como evidencia | NOT_CAPTURED"
      RULE: "comparar CI_HEAD sólo si HARNESS_CI_EVIDENCE_USED=true; sin CI del harness usar false/CAPABILITY_GAP/NOT_CAPTURED"
      VERCEL_CHECKS: "observados por separado; nunca CI del harness"
      BOOTSTRAP_EXCEPTION: "RANQUEL-HARNESS-BOOTSTRAP-001 sólo para #3/HEAD autorizado; conserva CAPABILITY_GAP y no concede Ready o merge"
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
    HUMAN_GATE:
      HUMAN_GATE_AUTHORIZATION: "NOT_RUN | PASS | BLOCKED"
      HUMAN_GATE_AUTHORIZED_HEAD: "sha igual a AUDITED_HEAD y HEAD | NOT_CAPTURED"
      HUMAN_GATE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
      REQUIRES: "V-014 PASS; audit verdict PASS; AUDITED_HEAD=HEAD; OPEN_MATERIAL_FINDINGS=0"
    HUMAN_MERGE:
      MERGE_AUTHORIZATION: "NOT_GRANTED | GRANTED"
      MERGE_AUTHORIZED_HEAD: "sha igual a AUDITED_HEAD y HEAD | NOT_CAPTURED"
      MERGE_AUTHORIZATION_EVIDENCE: "ref humana comprobable | NONE"
      REQUIRES: "V-014 PASS; HUMAN_GATE_AUTHORIZATION=PASS; MERGE_AUTHORIZATION=GRANTED para el mismo HEAD"
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
      - "registrar sólo POST_MERGE_ACCEPTANCE_SHA; PASS exige POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA"
      - "no se permite una segunda clave editable para el SHA aceptado"
    TRUTH_RECONCILIATION:
      COMMON_PASS_REQUIREMENTS:
        POST_MERGE_ACCEPTANCE: "V-017 PASS"
        TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA: "igual a INTEGRATED_SHA de la implementación"
      COMMON_SOURCE_REQUIREMENT: "TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA en ambos modos"
      VALID_MODES:
        NO_DIFF: "justificación/evidencia no vacías; sin PR ficticio"
        MERGED_PR: "conjunción completa de MERGED_PR_PASS_REQUIRES"
      MERGED_PR_PASS_REQUIRES:
        TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA: "igual a INTEGRATED_SHA de la implementación"
        RECONCILIATION_PR: "N real"
        RECONCILIATION_PR_HEAD: "sha completo"
        RECONCILIATION_MERGED_PR_HEAD: "sha completo capturado del PR ya mergeado"
        RECONCILIATION_REVIEW_REQUESTED: true
        RECONCILIATION_REVIEW_REQUEST_STATE: PASS
        RECONCILIATION_REVIEW_REQUEST_HEAD: "igual a RECONCILIATION_MERGED_PR_HEAD"
        RECONCILIATION_REVIEW_EXECUTION_STATE: PASS
        RECONCILIATION_AUDIT_VERDICT: PASS
        RECONCILIATION_AUDITED_HEAD: "igual a RECONCILIATION_MERGED_PR_HEAD"
        REQUIRED_HEAD_EQUALITY: "RECONCILIATION_MERGED_PR_HEAD=RECONCILIATION_PR_HEAD=RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_AUDITED_HEAD"
        RECONCILIATION_OPEN_MATERIAL_FINDINGS: 0
        RECONCILIATION_PR_MERGED: true
        RECONCILIATION_INTEGRATED_SHA_SOURCE: MERGED_PR
        RECONCILIATION_INTEGRATED_SHA: "mergeCommit.oid/merge_commit_sha real observado en RECONCILIATION_PR"
        SHA_ROLE_SEPARATION: "RECONCILIATION_INTEGRATED_SHA es el resultado del PR posterior, no el source de la implementación"
        RECONCILIATION_SHA_REACHABLE_FROM_MAIN: "YES"
        ALL_OTHER_COMBINATIONS: "TRUTH_RECONCILIATION_STATE != PASS"
      INVALID_AS_PASS: "Draft | Ready | CLOSED_UNMERGED | PR creado/revisado sin merge"
    EXPLICIT_ISSUE_CLOSE:
      REQUIRES: "V-014 PASS; gate y merge authorization humanos exact-head; V-015, V-016, V-017 y V-018 PASS; cierre humano explícito"

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
    - "todo candidato se commitea, captura y publica; sólo una reparación agrega PREVIOUS_HEAD, V-R01 y TREE_MATCH"
    - "toda reparación prueba el staged tree sin contaminación untracked, repite REPAIR_EDIT hasta auditoría y no hereda evidencia"
    - "validadores efímeros y toda su evidencia/artefactos permanecen fuera del repositorio; el recheck prueba que no dejaron archivos"
    - "HUMAN_GATE regular sólo con request true/PASS, execution PASS, verdict PASS, AUDITED_HEAD=HEAD y cero findings materiales abiertos"
    - "sin Ready, merge, deploy o cierre no autorizados; cierre conserva V-014, gate y merge authorization humanos exact-head, aceptación y reconciliación favorables"
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
    antes de CI/auditoría; la evidencia adicional de tree match sólo aplica a
    una reparación. Los gates nunca leen un untracked fuera del candidato salvo
    que se ejecuten sobre una copia aislada del staged tree. La solicitud
    independiente es obligatoria; su
    intensidad varía por riesgo, no su existencia. Un HEAD nuevo invalida la
    CI, solicitud, dictamen y madurez anteriores. La aceptación post-merge exige
    merge comprobado, autorización humana previa y captura separada del SHA
    integrado. Un CI inexistente conserva `CAPABILITY_GAP` sin `CI_HEAD`.
12. **Evidencia:** usa la
    [plantilla de manifiesto](EVIDENCE_MANIFEST_TEMPLATE.md) y referencia exact
    HEAD.
13. **STOP conditions:** se evalúan antes de reparar o ampliar scope.
14. **Definition of Done:** distingue entrega del writer, auditoría, decisión
    humana y aceptación post-merge.

El contrato se actualiza antes de continuar si cambia scope. Una edición hecha
primero y documentada después no satisface este protocolo.
