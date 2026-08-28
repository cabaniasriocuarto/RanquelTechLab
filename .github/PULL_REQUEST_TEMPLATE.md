# Pull request contract

Refs #N

## Issue and exact head

- Owner issue:
- Parent/dependencies:
- Base branch and `BASE_SHA`:
- Branch:
- Previous `HEAD` for a repair, if applicable:
- `REPAIR_EDIT` candidate paths/reference:
- `PRE_GATE_WORKTREE_INDEX_ALIGNMENT`: `PASS | FAIL | NOT_APPLICABLE`
- `PRE_GATE_STAGED_TREE_SHA`:
- `POST_GATE_WORKTREE_INDEX_RECHECK`: `PASS | FAIL | NOT_APPLICABLE` — `NOT_APPLICABLE` only when this is not a repair
- `POST_GATE_CURRENT_INDEX_TREE_SHA`:
- `VALIDATED_STAGED_TREE_SHA` captured only after post-gate recheck `PASS`:
- `COMMIT_CANDIDATE`:
- `CAPTURE_NEW_HEAD` — full SHA captured immediately after commit:
- `NEW_HEAD_TREE_SHA`:
- `TREE_MATCH`: `PASS | FAIL | NOT_APPLICABLE`
- Candidate `HEAD` committed locally; equals captured `NEW_HEAD` for a repair:
- Remote branch `HEAD`:
- Draft PR `HEAD`:
- Exact `HEAD` reviewed:
- Previous `HEAD` evidence reused: `false | NOT_APPLICABLE`
- Risk: `LIGHT | STANDARD | HIGH | CRITICAL`

If this PR repairs a reviewed commit, record every step for the new candidate:

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

## TASK_CONTRACT

### Objective and baseline

### Allowed scope

### No-scope

### External systems

- Allowed operations:
- Prohibited operations confirmed untouched:

### Preserved contracts

### STOP conditions encountered

- `NONE` or describe without converting the state to `PASS`.

## Changed surfaces

Inventory every material effect with a task-local ID and reference the exact
applicable row or rows in the
[canonical matrix](../docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md). Record
domain owners separately; they do not replace matrix rows. Do not use D01–D12
as surface names.

| ID | Effect | Paths/symbols/systems | Exact canonical matrix row(s) | Domain owner(s) |
| --- | --- | --- | --- | --- |
| S01 | | | | |

## Interdisciplinary classification D01–D12

| Discipline | Activated by surfaces | Materiality | Required gates | Result and evidence |
| --- | --- | --- | --- | --- |
| D01 — Producto, negocio y estrategia comercial | | `MATERIAL / NOT_APPLICABLE` | | |
| D02 — Arquitectura de software e información | | `MATERIAL / NOT_APPLICABLE` | | |
| D03 — Frontend, UX responsive y diseño | | `MATERIAL / NOT_APPLICABLE` | | |
| D04 — Accesibilidad | | `MATERIAL / NOT_APPLICABLE` | | |
| D05 — SEO técnico y SEO local | | `MATERIAL / NOT_APPLICABLE` | | |
| D06 — Contenido, comunicación y marca | | `MATERIAL / NOT_APPLICABLE` | | |
| D07 — Marketing y CRO | | `MATERIAL / NOT_APPLICABLE` | | |
| D08 — GA4, GTM, atribución y conversiones | | `MATERIAL / NOT_APPLICABLE` | | |
| D09 — Google Ads | | `MATERIAL / NOT_APPLICABLE` | | |
| D10 — Performance y Core Web Vitals | | `MATERIAL / NOT_APPLICABLE` | | |
| D11 — Seguridad y privacidad | | `MATERIAL / NOT_APPLICABLE` | | |
| D12 — QA, release, rollback y auditoría independiente | | `MATERIAL / NOT_APPLICABLE` | | |

Declare D01–D12 individually. Every `NOT_APPLICABLE` needs a concrete reason;
derive the required set from the surface inventory and record validation results
in the final column, not in materiality.

## Golden SEO parity (required for SEO/indexable surfaces)

- `seoArchetype`:
- `goldenBaselineVersion`:
- `SEO_GOLDEN_PARITY`:
- `HOME_SEO_REGRESSION`:
- `LOCAL_CONTENT_UTILITY`:
- `MOBILE_SEO_PARITY`:
- `MULTILINGUAL_SEO`:
- If not applicable, changed-surface justification:

## Files changed

## Commands and results

| Command / gate | Result | Evidence or limitation |
| --- | --- | --- |
| `git diff --check` | `NOT_RUN` | |
| Exact staging and staged scope | `NOT_RUN` | |
| `git diff --cached --check` | `NOT_RUN` | |
| Secret/privacy scan | `NOT_RUN` | |
| Affected focal tests | `NOT_RUN` | Pre-gate staged candidate; list every affected test |
| Affected surface gates | `NOT_RUN` | Same pre-gate staged candidate; list every affected gate |
| Post-gate worktree/index recheck | `NOT_RUN / NOT_APPLICABLE` | For a repair, run `git diff --quiet`, inventory untracked, repeat cached diff/scope/secrets, and require pre-gate=current-index=validated tree; otherwise justify `NOT_APPLICABLE` |
| Unaffected gates | `NOT_APPLICABLE` | Concrete non-materiality reason per gate |
| Transversal contract matrix | `NOT_RUN / NOT_APPLICABLE` | Full applicable matrix if the contract changed |
| Commit candidate | `NOT_RUN` | Commit creates the candidate `HEAD` |
| Capture new `HEAD` | `NOT_RUN` | Full SHA captured immediately after commit |
| Verify commit tree match | `NOT_RUN` | `TREE_MATCH=PASS` iff new/staged trees are equal |
| Push candidate | `NOT_RUN` | Remote `HEAD` |
| Draft PR create/update | `NOT_RUN` | Draft PR `HEAD` |
| Exact-head CI | `NOT_RUN` | |
| Independent review request | `REQUIRED` | Exact `HEAD` |
| Independent review request state | `NOT_RUN` | `PASS / NOT_RUN / CAPABILITY_GAP / AUTH_BLOCKED / BLOCKED` |
| Independent review execution state | `NOT_RUN` | `PASS / NOT_RUN / CAPABILITY_GAP / AUTH_BLOCKED / BLOCKED` |
| Independent audit verdict | `NOT_ISSUED` | `PASS / CHANGES_REQUIRED / BLOCKED / NOT_ISSUED` |
| Audited `HEAD` | `NOT_REVIEWED` | Must equal current `HEAD` |
| Open material findings | `UNKNOWN` | Must equal `0` for regular human gate |

## Preview and visual validation

- Exact-head preview:
- Desktop:
- Mobile:
- If not applicable, justification:

## SEO, content, accessibility, performance, security, and analytics

- SEO/indexation:
- Content/claims/sources:
- Accessibility:
- Performance/assets:
- Security/privacy/secrets:
- Analytics/Ads/PII/deduplication:

## Evidence manifest

- Overall writer state: `SELF_VALIDATED_ONLY`
- `INDEPENDENT_REVIEW_REQUEST=REQUIRED`
- `INDEPENDENT_REVIEW_REQUESTED`:
- `INDEPENDENT_REVIEW_REQUEST_STATE`:
- `INDEPENDENT_REVIEW_REQUEST_HEAD`:
- `INDEPENDENT_REVIEW_REQUEST_EVIDENCE`:
- `INDEPENDENT_REVIEW_EXECUTION_STATE`:
- `INDEPENDENT_AUDIT_VERDICT`:
- `AUDITED_HEAD`:
- `OPEN_MATERIAL_FINDINGS`:
- Artifacts/links:
- Known gaps or blocked checks:
- `HUMAN_MERGE`: `NOT_RUN`
- `PR_NUMBER`: `NOT_MERGED`
- `PR_MERGED`: `false`
- `MERGED_PR_HEAD`: `NOT_CAPTURED`
- `AUDITED_PR_HEAD`: `NOT_CAPTURED`
- `INDEPENDENT_REVIEW_HEAD`: `NOT_CAPTURED`
- `MERGE_ACCEPTANCE`: `NOT_RUN | PASS | BLOCKED_HEAD_DRIFT`
- `INTEGRATED_SHA_SOURCE`: `NOT_CAPTURED`
- `INTEGRATED_SHA`: `NOT_CAPTURED`
- `MERGE_METHOD`: `NOT_RUN`
- `INTEGRATED_SHA_REACHABLE_FROM_MAIN`: `NOT_RUN`
- `MAIN_HEAD_AT_ACCEPTANCE`: `NOT_CAPTURED`
- `POST_MERGE_ACCEPTANCE_TARGET`: `INTEGRATED_SHA`
- Post-merge acceptance required:
- `TRUTH_RECONCILIATION_MODE`: `NOT_RUN`
- `TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA`: `NOT_RUN`
- `TRUTH_RECONCILIATION_NO_DIFF_JUSTIFICATION`: `NONE`
- `RECONCILIATION_PR`: `NOT_RUN`
- `RECONCILIATION_PR_MERGED`: `false`
- `RECONCILIATION_PR_HEAD`: `NOT_CAPTURED`
- `RECONCILIATION_MERGED_PR_HEAD`: `NOT_CAPTURED`
- `RECONCILIATION_REVIEW_REQUESTED`: `false`
- `RECONCILIATION_REVIEW_REQUEST_STATE`: `NOT_RUN`
- `RECONCILIATION_REVIEW_REQUEST_HEAD`: `NOT_REQUESTED`
- `RECONCILIATION_REVIEW_EXECUTION_STATE`: `NOT_RUN`
- `RECONCILIATION_AUDIT_VERDICT`: `NOT_ISSUED`
- `RECONCILIATION_AUDITED_HEAD`: `NOT_REVIEWED`
- `RECONCILIATION_OPEN_MATERIAL_FINDINGS`: `UNKNOWN`
- `RECONCILIATION_INTEGRATED_SHA_SOURCE`: `NOT_CAPTURED`
- `RECONCILIATION_INTEGRATED_SHA`: `NOT_CAPTURED`
- `RECONCILIATION_SHA_REACHABLE_FROM_MAIN`: `NOT_RUN`
- `TRUTH_RECONCILIATION_STATE`: `NOT_RUN`
- `TRUTH_RECONCILIATION_EVIDENCE`: `NONE`
- Explicit issue close owner after both steps:

## Risks and rollback

- Residual risks:
- Rollback unit and verification:

## Required confirmations

- [ ] The diff contains no unrelated work or unauthorized branch/PR changes.
- [ ] Product changes are fully declared; for docs-only work, product diff is zero.
- [ ] No prohibited external system was mutated.
- [ ] No secrets, credentials, private URLs, or personal data were committed.
- [ ] Missing, partial, blocked, unknown, and capability-gap states are not reported as `PASS`.
- [ ] Local, remote, Draft PR, CI and audit HEADs coincide.
- [ ] A repair ran from `REPAIR_EDIT` through gates, passed the post-gate worktree/index recheck with pre-gate tree equality, then committed, captured `NEW_HEAD`, verified `TREE_MATCH=PASS` before push, and reused no prior-HEAD evidence.
- [ ] Independent review was requested; request and execution are `PASS`, verdict is `PASS`, audited/current HEADs match, and open material findings are zero before recommending the regular human gate.
- [ ] Human merge, when run, compares merged, audited and reviewed PR HEADs; integrated SHA comes from the merged PR, not from the current `main` tip.
- [ ] `NO_DIFF` reconciliation uses `TRUTH_RECONCILIATION_MODE=NO_DIFF`, `SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`, non-empty verifiable justification/evidence, and no fictitious PR.
- [ ] `MERGED_PR` reconciliation captures the actual merged PR HEAD and proves it equals the PR/request/audit HEADs; request, execution and verdict are `PASS`, findings are zero, and the integrated SHA is the merge result observed from that same `RECONCILIATION_PR`, with source `MERGED_PR` and reachability `YES`; every other combination is non-PASS.
- [ ] The PR uses `Refs #N`; no closing keyword can close the issue at merge time.
- [ ] Ready, merge, explicit issue close, deploy, publication, campaigns, and spending remain human decisions.

## Independent audit request

Please audit this PR read-only at the exact `HEAD`, report every finding with
severity and evidence, and record execution state, audit verdict, audited HEAD
and open material finding count separately.
Do not repair findings inside the audit.
