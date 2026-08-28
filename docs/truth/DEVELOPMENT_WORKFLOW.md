# Flujo de desarrollo

Status: `CURRENT_IN_PROGRESS`

Owner: `docs/truth/DEVELOPMENT_WORKFLOW.md` (proceso desde selección hasta closeout)

Mientras este owner permanezca `CURRENT_IN_PROGRESS`, el archivo describe el
flujo propuesto por #3 y no gobierno vigente de `main`. La tarea actual lo sigue
por autoridad de la issue e instrucción humana. Después de integración,
aceptación y reconciliación podrá gobernar tareas implementables. La
automatización que lo hará ejecutable pertenece a #24 y está
`PLANNED_NOT_IMPLEMENTED`; documentar un paso no demuestra que exista un script
o workflow para él.

## Roles

- **Writer/Codex:** inspecciona, emite contrato, edita dentro del scope, valida y
  prepara un Draft PR. Su máximo estado propio es `SELF_VALIDATED_ONLY`.
- **Auditor independiente:** sesión o agente distinto, exact HEAD, read-only,
  sin reparar findings. Emite `PASS`, `CHANGES_REQUIRED` o `BLOCKED`.
- **Humano:** decide excepciones de scope, Ready, merge, cierre explícito de la
  issue, deploy, publicación, secretos, configuración externa y gasto.

Writer y auditor no pueden ser la misma sesión ni combinar implementación y
dictamen.

## Secuencia obligatoria

```text
PREFLIGHT
→ TASK_CONTRACT
→ EDIT
→ DIFF_CHECK
→ EXACT_STAGE
→ STAGED_SCOPE_SECRET_RECHECK
→ FOCAL_TESTS
→ SURFACE_GATES
→ COMMIT_CANDIDATE
→ PUSH_CANDIDATE
→ DRAFT_PR_CREATE_OR_UPDATE
→ CI_EXACT_HEAD
→ INDEPENDENT_REVIEW_REQUEST
→ INDEPENDENT_AUDIT
→ HUMAN_GATE
→ HUMAN_MERGE
→ CAPTURE_INTEGRATED_SHA
→ POST_MERGE_ACCEPTANCE
→ TRUTH_RECONCILIATION
→ EXPLICIT_ISSUE_CLOSE
```

Si una reparación posterior necesita otro commit, el ciclo obligatorio empieza
con el cambio candidato todavía sin commit:

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

`REPAIR_EDIT` significa que existe un cambio candidato en worktree, todavía sin
commit ni `NEW_HEAD`. `STAGED_SCOPE_SECRET_RECHECK` ejecuta
`git diff --quiet`, inventaría `git ls-files --others --exclude-standard`,
repite cached diff, scope y secrets y sólo declara
`PRE_GATE_WORKTREE_INDEX_ALIGNMENT=PASS` si el worktree está alineado con el
índice y no hay untracked no autorizados. Entonces captura
`PRE_GATE_STAGED_TREE_SHA`. Los focal tests y surface gates afectados se
ejecutan sobre ese candidato.

Después de los gates y antes del commit,
`POST_GATE_WORKTREE_INDEX_RECHECK` repite `git diff --quiet`, el inventario
untracked, staged diff, scope y secret/privacy scan; captura
`POST_GATE_CURRENT_INDEX_TREE_SHA` y exige que siga igual a
`PRE_GATE_STAGED_TREE_SHA`. Sólo un recheck `PASS` registra ese mismo tree como
`VALIDATED_STAGED_TREE_SHA`. Un recheck
omitido o `FAIL` bloquea commit, push y auditoría y obliga a volver a
`DIFF_CHECK`, repetir staging y volver a ejecutar los gates.
`COMMIT_CANDIDATE` crea el commit; inmediatamente después,
`CAPTURE_NEW_HEAD` registra su SHA completo y `VERIFY_COMMIT_TREE_MATCH` obtiene
`NEW_HEAD_TREE_SHA`. Sólo `NEW_HEAD_TREE_SHA=VALIDATED_STAGED_TREE_SHA` permite
`TREE_MATCH=PASS`. Cualquier diferencia produce `TREE_MATCH=FAIL`, impide push y
auditoría y obliga a volver a `DIFF_CHECK`.

Desde `CAPTURE_NEW_HEAD`, CI, preview, solicitud, ejecución, dictamen y toda
evidencia remota quedan vinculados a ese SHA. Los focal tests y surface gates
afectados se vuelven a ejecutar; un gate no afectado sólo admite
`NOT_APPLICABLE` con justificación concreta de no materialidad. Si cambia un
contrato transversal, se repite la matriz contractual completa aplicable. Toda
evidencia del HEAD anterior queda obsoleta y no se hereda ni se atribuye al
candidato nuevo.

## Vehículo y owner por fase

| Fase | Vehículo permitido | Owner y límite |
| --- | --- | --- |
| Implementación | Una rama, un commit candidato publicado y un Draft PR activo con `Refs #N` | Writer de la issue; scope implementable original |
| `HUMAN_MERGE` | Acción humana en GitHub sobre el PR revisado | Humano autorizado; registra número, merge y `MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD` |
| `CAPTURE_INTEGRATED_SHA` | Inspección read-only del resultado del PR mergeado y reachability desde `main` | Sesión de aceptación; toma `INTEGRATED_SHA` del PR, registra método observable y `MAIN_HEAD_AT_ACCEPTANCE` por separado |
| `POST_MERGE_ACCEPTANCE` | Inspección read-only de `main` y del `INTEGRATED_SHA`; evidencia en la issue/manifest | Humano o sesión de aceptación autorizada; exige merge y captura previos, sin promoción automática |
| `TRUTH_RECONCILIATION` | `NO_DIFF` con source igual al integrated SHA y justificación/evidencia no vacías, o un único PR state-only secuencial desde `main`, por ejemplo `reconcile/issue-N-truth`, con `Refs #N`, request/ejecución/verdict `PASS`, cero findings, HEAD efectivamente mergeado igual al auditado y SHA integrado obtenido de ese mismo PR | Writer de closeout autorizado por la misma issue todavía OPEN; sólo estados, owners, referencias y changelog afectados |
| `EXPLICIT_ISSUE_CLOSE` | Acción humana en GitHub después de confirmar el PR de reconciliación integrado o la evidencia `NO_DIFF` | Humano autorizado; sin closing keyword |

Cuando existe un delta, la rama/PR de reconciliación es la única continuación
permitida para la misma issue después del merge del PR de implementación. Nunca
convive con ese PR activo, no reabre scope de producto, no permite push directo
a `main` y no autoriza sistemas externos. Si la aceptación descubre que hace
falta cambiar verdad sustantiva, producto o un owner ajeno, se detiene y se abre
una issue implementable nueva; no se oculta dentro del closeout.

### 1. PREFLIGHT

1. Leer issue owner completa, parent nativo, dependencias y comentarios
   relevantes.
2. Leer `AGENTS.md`, el router más cercano, [START_HERE.md](../START_HERE.md) y
   [INDEX.md](INDEX.md).
3. Verificar y registrar repositorio, `BASE_SHA`, `HEAD`, rama, `git status`,
   relación con `origin/main` y merge/rebase/cherry-pick/revert/bisect activos.
4. Clasificar superficies reales y seleccionar owners documentales.

Drift no autorizado, worktree ambiguo u operación Git inesperada obliga a
detenerse. No se corrige automáticamente con reset, stash, rebase o merge.

### 2. TASK_CONTRACT

Antes de editar, completar la
[plantilla canónica](../harness/TASK_CONTRACT_TEMPLATE.md) con objetivo,
baseline, no-scope, allowlist, rutas prohibidas, sistemas externos, superficies,
riesgo, contratos, validaciones, evidencia, STOP conditions y Definition of
Done. Cualquier expansión requiere decisión humana y contrato actualizado antes
de continuar.

### 3. EDIT

- Aplicar el cambio mínimo coherente con una issue y una rama/PR activos por
  fase. La única continuación secuencial es el closeout state-only anterior.
- Respetar la allowlist y las instrucciones más cercanas.
- No editar output generado manualmente ni incorporar cambios de otra rama.
- No mutar un sistema externo salvo que el contrato lo permita de forma
  explícita; registrar cada mutación autorizada.

### 4. DIFF_CHECK

Revisar diff y paths completos antes de staging. Ejecutar `git diff --check` y
los validadores focales disponibles. Un validador inexistente o no ejecutable se
reporta con su estado real, nunca como éxito.

### 5. EXACT_STAGE

Agregar únicamente paths explícitos. Están prohibidos `git add .` y
`git add -A`. Revisar `git diff --cached --name-status` y
`git diff --cached --stat` para confirmar el conjunto exacto.

### 6. STAGED_SCOPE_SECRET_RECHECK

Sobre el contenido staged:

- ejecutar `git diff --cached --check`;
- comparar paths con la allowlist;
- inspeccionar secretos, tokens, credenciales, `.env`, PII y URLs privadas;
- confirmar que no hay contenido o sistemas fuera de scope.

Cualquier hallazgo material vuelve el flujo a EDIT o activa una STOP condition.

### 7. FOCAL_TESTS

Seleccionar pruebas por comportamiento cambiado usando
[TESTING_MATRIX.md](TESTING_MATRIX.md). Registrar comando, exit code, resultado
observado y limitaciones en el
[manifiesto de evidencia](../harness/EVIDENCE_MANIFEST_TEMPLATE.md).

### 8. SURFACE_GATES

Aplicar riesgo y gates de [QUALITY_GATES.md](QUALITY_GATES.md), más las
disciplinas requeridas por
[INTERDISCIPLINARY_REVIEW_MATRIX.md](INTERDISCIPLINARY_REVIEW_MATRIX.md).
`NOT_APPLICABLE` necesita justificación por gate; no se usa como atajo.
En una reparación, `AFFECTED_SURFACE_GATES` no habilita el commit hasta que
`POST_GATE_WORKTREE_INDEX_RECHECK=PASS` pruebe que el mismo staged tree
inspeccionado antes de los gates permanece intacto y que no existe drift.

### 9. COMMIT_CANDIDATE

Crear el commit que convierte el contenido staged validado en un `HEAD` real.
En una reparación, `VALIDATED_STAGED_TREE_SHA` ya debe estar registrado después
de `POST_GATE_WORKTREE_INDEX_RECHECK=PASS` y antes del commit, y debe ser igual a
`PRE_GATE_STAGED_TREE_SHA`. Inmediatamente después de crear el commit,
`CAPTURE_NEW_HEAD` registra el SHA completo y
`VERIFY_COMMIT_TREE_MATCH` obtiene `NEW_HEAD_TREE_SHA`. Sólo
`TREE_MATCH=PASS`, que exige igualdad exacta entre ambos trees, habilita el push.
Un worktree o índice sin commit no es `NEW_HEAD` ni candidato para CI o
auditoría.

### 10. PUSH_CANDIDATE

Publicar el commit mediante push normal a la rama autorizada y verificar que el
remote head coincide con el `HEAD` local. No usar force-push. Un commit que sólo
existe localmente no puede recibir evidencia remota exact-head.

### 11. DRAFT_PR_CREATE_OR_UPDATE

Crear o actualizar el Draft PR con `Refs #N` y confirmar que su head coincide
con el commit publicado. Si una reparación llega a `DRAFT_PR_UPDATE`, debe haber
completado antes el ciclo de reparación definido en "Secuencia obligatoria",
incluidos `CAPTURE_NEW_HEAD`, `VERIFY_COMMIT_TREE_MATCH` y `TREE_MATCH=PASS`; la
evidencia del commit anterior no se transfiere.

### 12. CI_EXACT_HEAD

La evidencia de CI debe identificar el mismo HEAD local, remoto y del Draft PR
que se audita. Hasta que #24 implemente workflows, reportar `NOT_RUN` o
`CAPABILITY_GAP` según la causa. Un CI de otro commit no valida el cambio
actual.

### 13. INDEPENDENT_REVIEW_REQUEST

`INDEPENDENT_REVIEW_REQUEST=REQUIRED` para todo Draft PR implementable. Registrar
`INDEPENDENT_REVIEW_REQUESTED`, `INDEPENDENT_REVIEW_REQUEST_STATE`, evidencia y
request HEAD. Un `PASS` sólo demuestra emisión válida y evidenciada para el HEAD;
no demuestra ejecución ni dictamen favorable.

### 14. INDEPENDENT_AUDIT

Entregar contrato, staged/final diff, manifiesto y exact HEAD a un auditor
distinto mediante la
[plantilla de auditoría](../harness/INDEPENDENT_AUDIT_TEMPLATE.md). El auditor
enumera todos los findings dentro del alcance y no los repara en la misma
sesión. Registrar por separado `INDEPENDENT_REVIEW_EXECUTION_STATE`,
`INDEPENDENT_AUDIT_VERDICT`, `AUDITED_HEAD` y `OPEN_MATERIAL_FINDINGS`. Un
execution `PASS` sólo demuestra que el auditor completó el trabajo y emitió
dictamen; no sustituye `INDEPENDENT_AUDIT_VERDICT=PASS`.

La intensidad es proporcional en `LIGHT`/`STANDARD` y exact-head completa en
`HIGH`/`CRITICAL`. El avance regular a `HUMAN_GATE` exige toda esta conjunción:
solicitud `true`, request `PASS`, execution `PASS`, verdict `PASS`,
`AUDITED_HEAD=HEAD` y `OPEN_MATERIAL_FINDINGS=0`. `CHANGES_REQUIRED`, `BLOCKED`,
`NOT_ISSUED`, `NOT_RUN`, `CAPABILITY_GAP`, `AUTH_BLOCKED`, `HEAD_MISMATCH` u
`OPEN_FINDINGS_GT_0` bloquean el avance según la dimensión o causa que
corresponda. La excepción bootstrap de CI no relaja ni sustituye este predicado.
La madurez
`INDEPENDENTLY_VALIDATED` exige inventario requerido completo y exactamente una
pareja válida por fila: `MATERIAL`/`PASS` o `NOT_APPLICABLE`/
`NOT_APPLICABLE` con justificación concreta de no materialidad. Un check
`MATERIAL` nunca puede usar resultado `NOT_APPLICABLE` para obtener madurez.

### 15. HUMAN_GATE

El PR permanece Draft hasta decisión humana. Sólo una persona autorizada decide
Ready, merge, deploy, publicación/indexación, cambios de configuración, uso de
secretos o gasto. La recomendación regular requiere la conjunción exacta de
solicitud, ejecución, dictamen, HEAD y findings definida en la fase anterior.

### 16. HUMAN_MERGE

El merge es un evento explícito posterior al gate humano. Antes de continuar se
lee el PR en GitHub y se registran `PR_NUMBER`, `PR_MERGED=YES`,
`MERGED_PR_HEAD`, `AUDITED_PR_HEAD` e `INDEPENDENT_REVIEW_HEAD`. Sólo puede pasar
si `MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD`. Una diferencia,
incluido un push posterior a la auditoría, produce estado `BLOCKED` con
`MERGE_ACCEPTANCE=BLOCKED_HEAD_DRIFT`; en ese caso no se captura el SHA
integrado. Una recomendación Ready, CI verde o dictamen independiente no
sustituyen estas comprobaciones.

### 17. CAPTURE_INTEGRATED_SHA

Después del merge, obtener `INTEGRATED_SHA` del resultado del PR mergeado
(`mergeCommit.oid`/`merge_commit_sha`), no del tip corriente de `main`. Registrar
`INTEGRATED_SHA_SOURCE=MERGED_PR`, el método `MERGE`, `SQUASH` o `REBASE` si es
observable, y comprobar `INTEGRATED_SHA_REACHABLE_FROM_MAIN=YES`. Registrar
`MAIN_HEAD_AT_ACCEPTANCE` por separado: puede ser un descendiente posterior y no
identifica qué commit integró el PR. No asumir que el PR head es el SHA integrado
porque cada método puede producir una identidad distinta.

### 18. POST_MERGE_ACCEPTANCE

Esta fase requiere `HUMAN_MERGE=PASS`, `PR_MERGED=YES` e `INTEGRATED_SHA`
capturado. Mantener la issue abierta y validar el resultado contra ese SHA en
el entorno que realmente corresponda; nunca usar por error un PR head no
integrado. Registrar evidencia read-only. Para HTML público, verificar
exact-head en desktop y móvil antes de publicación y volver a comprobar
producción después. Una tarea docs-only justifica las validaciones de producto
como `NOT_APPLICABLE`.

```text
POST_MERGE_ACCEPTANCE_TARGET=INTEGRATED_SHA
```

### 19. TRUTH_RECONCILIATION

Si la aceptación requiere actualizar owners, referencias o
[CHANGELOG.md](CHANGELOG.md), crear desde el `main` integrado el único Draft PR
de reconciliación descrito arriba. Su TASK_CONTRACT es state-only/docs-only,
con allowlist literal, cero producto y cero mutaciones externas. Los documentos
y decisiones que existían sólo en el Draft se reconcilian desde
`CURRENT_IN_PROGRESS`; no se promueven durante el mismo PR que los crea. La
issue #3 requiere ese PR de closeout porque los owners y decisiones creados por
PR #27 necesitan una transición versionada después de la aceptación.

`TRUTH_RECONCILIATION=PASS` admite exclusivamente uno de estos modos:

- `NO_DIFF`: justificación verificable, evidencia y
  `SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`.
- `MERGED_PR`: V-017 en `PASS`, número real del PR de reconciliación,
  `RECONCILIATION_PR_HEAD` como SHA completo auditado y
  `RECONCILIATION_MERGED_PR_HEAD` capturado del PR ya mergeado, más toda esta
  conjunción:

```text
RECONCILIATION_REVIEW_REQUESTED=true
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

`NO_DIFF` no crea ni exige un PR ficticio. Un PR Draft, Ready o cerrado sin
merge no satisface `MERGED_PR`. Tampoco lo satisfacen un request o execution no
`PASS`, un verdict distinto de `PASS`, cualquier HEAD diferente o no
capturado, findings materiales abiertos, ni un SHA no real, no alcanzable o
obtenido de otro PR. La evidencia debe identificar la lectura del resultado de
merge del mismo `RECONCILIATION_PR`; la mera creación, revisión o clausura
administrativa del PR no alcanza. Toda combinación distinta de la conjunción
anterior mantiene `TRUTH_RECONCILIATION_STATE` fuera de `PASS`.

### 20. EXPLICIT_ISSUE_CLOSE

Recién después de aceptación post-merge y de confirmar en `main` el PR de
reconciliación —o la evidencia `NO_DIFF` cuando no hubo delta—, una persona
autorizada puede cerrar la issue explícitamente y declarar el closeout. Los PRs
usan `Refs #N`; una closing keyword, commit, push, CI o Draft PR aislados no
equivalen a `DONE` ni pueden anticipar el cierre.

## Riesgo y presupuesto de cambio

El contrato selecciona `LIGHT`, `STANDARD`, `HIGH` o `CRITICAL` y enlaza la
justificación al owner de quality gates. SEO indexable, canonical/redirects,
analítica, formularios, APIs, headers, generación y publicación no se tratan
como documentación trivial. El presupuesto de cambio limita archivos, símbolos,
sistemas externos y cantidad de reparaciones.

## Controlled autonomous completion

Dentro de un contrato estable, el writer puede continuar por inspección,
edición, validaciones, evidencia y Draft PR, con hasta dos reparaciones acotadas.
Debe detenerse ante una tercera falla materialmente independiente, expansión de
scope, ambigüedad arquitectónica, secretos/configuración, mutación externa no
autorizada, afirmaciones sin fuente, publicación no autorizada, migración
destructiva o riesgo para la Home/canonical de Río Cuarto.

## Administración GitHub

Milestones, labels y relaciones se consultan antes de crear o asociar. Se
reutilizan coincidencias exactas, se evita reemplazar relaciones inesperadas y
se verifica el resultado. Administrar metadata no autoriza cerrar issues, usar
closing keywords, marcar Ready ni mergear.
