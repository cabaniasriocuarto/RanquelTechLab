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
→ INDEPENDENT_REVIEW
→ HUMAN_GATE
→ HUMAN_MERGE
→ CAPTURE_INTEGRATED_SHA
→ POST_MERGE_ACCEPTANCE
→ TRUTH_RECONCILIATION
→ EXPLICIT_ISSUE_CLOSE
```

Si una reparación posterior crea otro commit, el ciclo obligatorio es:

```text
NEW_HEAD
→ PUSH
→ DRAFT_PR_UPDATE
→ CI_EXACT_HEAD
→ INDEPENDENT_REVIEW
```

La CI, el preview, la solicitud de auditoría, el dictamen y la madurez del HEAD
anterior quedan obsoletos para el candidato nuevo. Ninguno puede heredarse ni
atribuirse a un commit diferente.

## Vehículo y owner por fase

| Fase | Vehículo permitido | Owner y límite |
| --- | --- | --- |
| Implementación | Una rama, un commit candidato publicado y un Draft PR activo con `Refs #N` | Writer de la issue; scope implementable original |
| `HUMAN_MERGE` | Acción humana en GitHub sobre el Draft PR revisado | Humano autorizado; debe dejar `PR_MERGED=YES` |
| `CAPTURE_INTEGRATED_SHA` | Inspección read-only de `main` después del merge | Sesión de aceptación; registra `INTEGRATED_SHA=<SHA completo>` alcanzable desde `main` |
| `POST_MERGE_ACCEPTANCE` | Inspección read-only de `main` y del `INTEGRATED_SHA`; evidencia en la issue/manifest | Humano o sesión de aceptación autorizada; exige merge y captura previos, sin promoción automática |
| `TRUTH_RECONCILIATION` | Si hay delta versionado, un único Draft PR secuencial desde `main`, por ejemplo `reconcile/issue-N-truth`, con `Refs #N`; si no lo hay, manifest `NO_DIFF` justificado | Writer de closeout autorizado por la misma issue todavía OPEN; sólo estados, owners, referencias y changelog afectados |
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

### 9. COMMIT_CANDIDATE

Crear el commit que convierte el contenido staged validado en un `HEAD` real.
Registrar el SHA completo y comprobar que el diff del commit coincide con el
staging exacto. Un worktree o índice sin commit no es candidato para CI ni
auditoría.

### 10. PUSH_CANDIDATE

Publicar el commit mediante push normal a la rama autorizada y verificar que el
remote head coincide con el `HEAD` local. No usar force-push. Un commit que sólo
existe localmente no puede recibir evidencia remota exact-head.

### 11. DRAFT_PR_CREATE_OR_UPDATE

Crear o actualizar el Draft PR con `Refs #N` y confirmar que su head coincide
con el commit publicado. Si una reparación produce `NEW_HEAD`, repetir push,
actualización del Draft, CI y auditoría; la evidencia del commit anterior no se
transfiere.

### 12. CI_EXACT_HEAD

La evidencia de CI debe identificar el mismo HEAD local, remoto y del Draft PR
que se audita. Hasta que #24 implemente workflows, reportar `NOT_RUN` o
`CAPABILITY_GAP` según la causa. Un CI de otro commit no valida el cambio
actual.

### 13. INDEPENDENT_REVIEW

Entregar contrato, staged/final diff, manifiesto y exact HEAD a un auditor
distinto mediante la
[plantilla de auditoría](../harness/INDEPENDENT_AUDIT_TEMPLATE.md). El auditor
enumera todos los findings dentro del alcance y no los repara en la misma
sesión.

`INDEPENDENT_REVIEW_REQUEST=REQUIRED` para todo Draft PR implementable. La
intensidad es proporcional en `LIGHT`/`STANDARD` y exact-head completa en
`HIGH`/`CRITICAL`. Sólo un dictamen `PASS` del HEAD actual permite el avance
regular a `HUMAN_GATE`. Si no puede completarse, registrar `CAPABILITY_GAP`,
`AUTH_BLOCKED` o `BLOCKED` según la causa y no tratarla como `PASS`. La madurez
`INDEPENDENTLY_VALIDATED` exige que todos los checks `MATERIAL` requeridos sean
`PASS` o `NOT_APPLICABLE` con justificación válida.

### 14. HUMAN_GATE

El PR permanece Draft hasta decisión humana. Sólo una persona autorizada decide
Ready, merge, deploy, publicación/indexación, cambios de configuración, uso de
secretos o gasto.

### 15. HUMAN_MERGE

El merge es un evento explícito posterior al gate humano. Antes de continuar se
verifica y registra `PR_MERGED=YES`. Una recomendación Ready, un CI verde o un
dictamen independiente no sustituyen esta comprobación.

### 16. CAPTURE_INTEGRATED_SHA

Después del merge, leer `main` y registrar
`INTEGRATED_SHA=<SHA completo realmente integrado>`, alcanzable desde la rama
por defecto. No asumir que el PR head es el SHA integrado: un merge commit,
squash o rebase puede producir otro objeto.

### 17. POST_MERGE_ACCEPTANCE

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

### 18. TRUTH_RECONCILIATION

Si la aceptación requiere actualizar owners, referencias o
[CHANGELOG.md](CHANGELOG.md), crear desde el `main` integrado el único Draft PR
de reconciliación descrito arriba. Su TASK_CONTRACT es state-only/docs-only,
con allowlist literal, cero producto y cero mutaciones externas. Los documentos
y decisiones que existían sólo en el Draft se reconcilian desde
`CURRENT_IN_PROGRESS`; no se promueven durante el mismo PR que los crea. La
issue #3 requiere ese PR de closeout porque los owners y decisiones creados por
PR #27 necesitan una transición versionada después de la aceptación.

### 19. EXPLICIT_ISSUE_CLOSE

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
