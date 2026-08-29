# Pull request contract

Refs #N

## Issue and exact head

- Owner issue:
- Parent/dependencies:
- Base branch and `BASE_SHA`:
- Branch:
- Candidate kind: `INITIAL | REPAIR`
- Candidate `HEAD` committed locally and captured immediately after commit:
- Remote branch `HEAD`:
- PR `HEAD`:
- V-011 observed PR number:
- V-011 `PR_IS_OPEN`: `true | false`
- V-011 `PR_IS_DRAFT`: `true | false`
- V-011 Draft PR `HEAD`:
- `V011_OBSERVED_AT_UTC`: `NOT_CAPTURED | YYYY-MM-DDTHH:MM:SSZ`
- `V011_EVIDENCE`: `NONE | ref comprobable`
- Current PR state: `OPEN_DRAFT | OPEN_READY | MERGED | CLOSED_UNMERGED`
- Exact `HEAD` reviewed:
- Risk: `LIGHT | STANDARD | HIGH | CRITICAL`

Complete `V-C01` for every initial or repair candidate; it is never
`NOT_APPLICABLE`:

- `POST_GATE_CANDIDATE_RECHECK`: `PASS | FAIL`
- `GATE_EXECUTION_SOURCE`:
  `INDEXED_CANDIDATE_IN_WORKTREE | ISOLATED_VALIDATED_TREE`
- `PRE_GATE_UNTRACKED_NON_IGNORED_FILES`: `NONE | sanitized count + stable SHA-256`
- `PRE_GATE_IGNORED_FILES`: `NONE | sanitized count + stable SHA-256`
- `POST_GATE_UNTRACKED_NON_IGNORED_FILES`: `NONE | sanitized count + stable SHA-256`
- `POST_GATE_IGNORED_FILES`: `NONE | sanitized count + stable SHA-256`
- `PRE_GATE_CANDIDATE_TREE_SHA`:
- `PRE_GATE_EXECUTION_TREE_SHA`:
- `POST_GATE_EXECUTION_TREE_SHA`:
- `POST_GATE_CANDIDATE_TREE_SHA`:
- `VALIDATED_CANDIDATE_TREE_SHA`:
- `ISOLATED_VALIDATION_TREE_SHA`: `tree SHA | NOT_APPLICABLE en modo worktree`

An initial candidate must use `ISOLATED_VALIDATED_TREE`; V-C01 `PASS` is declared
before `COMMIT_CANDIDATE` and requires the five pre/post/validated tree SHAs plus
`ISOLATED_VALIDATION_TREE_SHA` above to be equal. Worktree execution is permitted
only for a repair and only when all four pre/post inventories are `NONE`. Isolated
execution requires identical pre/post inventories and proves that gates did not
read the repository worktree. Only after V-C01 `PASS`, create the commit and
record:

- Candidate `HEAD` tree as `CANDIDATE_HEAD_TREE_SHA`:
- `CANDIDATE_TREE_MATCH`: `PASS | FAIL`; `PASS` requires
  `CANDIDATE_HEAD_TREE_SHA=VALIDATED_CANDIDATE_TREE_SHA` before push.

See the canonical predicates in
[DEVELOPMENT_WORKFLOW.md](../docs/truth/DEVELOPMENT_WORKFLOW.md) and
[QUALITY_GATES.md](../docs/truth/QUALITY_GATES.md).

Complete the following fields only when candidate kind is `REPAIR`; do not
invent them for an initial candidate. They project the universal candidate
record and are not a second source of evidence:

- `PREVIOUS_HEAD`:
- `REPAIR_EDIT` candidate paths/reference:
- V-R01 materiality/result: `MATERIAL / PASS`
- `PRE_GATE_WORKTREE_INDEX_ALIGNMENT`: `PASS | FAIL`
- `PRE_GATE_STAGED_TREE_SHA` = `PRE_GATE_CANDIDATE_TREE_SHA`:
- `POST_GATE_WORKTREE_INDEX_RECHECK` = `POST_GATE_CANDIDATE_RECHECK`:
  `PASS | FAIL`
- `POST_GATE_CURRENT_INDEX_TREE_SHA` = `POST_GATE_CANDIDATE_TREE_SHA`:
- `VALIDATED_STAGED_TREE_SHA` = `VALIDATED_CANDIDATE_TREE_SHA`:
- `CAPTURE_NEW_HEAD` — full SHA captured immediately after commit:
- `NEW_HEAD_TREE_SHA` = `CANDIDATE_HEAD_TREE_SHA`:
- `TREE_MATCH` = `CANDIDATE_TREE_MATCH`: `PASS | FAIL`
- `PREVIOUS_HEAD_EVIDENCE_REUSED`: `false`

If this PR repairs a reviewed commit, record every step for the new candidate:

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

An allowlisted untracked or ignored file is not part of the candidate. Gates may
use the worktree only when all four inventories are `NONE`; otherwise they use an
ephemeral copy outside the repository created solely from the candidate tree.
Initial candidates always use that isolated source. All ephemeral validators and
their evidence or artifacts stay outside the repository, and V-C01 proves they
left the candidate and both inventory classes unchanged and did not read
repository content in isolated mode. Never add, inspect sensitive contents, or delete
unrelated files automatically.

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
| Exact staging and staged scope | `NOT_RUN` | Inventory non-ignored untracked and ignored paths separately; every relevant input is staged |
| `git diff --cached --check` | `NOT_RUN` | |
| Secret/privacy scan | `NOT_RUN` | |
| Affected focal tests | `NOT_RUN` | Pre-gate staged candidate; list every affected test |
| Affected surface gates | `NOT_RUN` | Same pre-gate staged candidate; list every affected gate |
| V-C01 post-gate candidate recheck | `NOT_RUN` | Every candidate: initial uses isolated tree; worktree requires all four pre/post inventories `NONE`; require pre-gate execution/candidate = post-gate execution/candidate = validated tree |
| V-R01 repair projection | `NOT_RUN / NOT_APPLICABLE` | Repair only: project V-C01 into the repair fields; initial candidate justifies `NOT_APPLICABLE` without inventing repair evidence |
| Unaffected gates | `NOT_APPLICABLE` | Concrete non-materiality reason per gate |
| Transversal contract matrix | `NOT_RUN / NOT_APPLICABLE` | Full applicable matrix if the contract changed |
| Commit candidate | `NOT_RUN` | Always material; commit creates the candidate `HEAD` |
| Capture candidate `HEAD` | `NOT_RUN` | Always material; full SHA captured immediately after commit |
| Verify candidate commit tree match | `NOT_RUN` | Every candidate: `CANDIDATE_HEAD_TREE_SHA=VALIDATED_CANDIDATE_TREE_SHA` and `CANDIDATE_TREE_MATCH=PASS` |
| Verify repair tree-match projection | `NOT_RUN / NOT_APPLICABLE` | Repair only: `TREE_MATCH=CANDIDATE_TREE_MATCH`; initial candidate has no repair alias |
| Push candidate | `NOT_RUN` | Remote `HEAD` |
| Draft PR create/update | `NOT_RUN` | V-011: open, `PR_IS_DRAFT=true`, exact `HEAD`, time and evidence before human gate |
| Exact-head CI | `NOT_RUN / CAPABILITY_GAP` | Record `HARNESS_CI_EVIDENCE_USED`; compare real `CI_HEAD` only when true; otherwise `CI_HEAD=NOT_CAPTURED`; Vercel is separate |
| Independent review request | `REQUIRED` | Exact `HEAD` |
| Independent review request state | `NOT_RUN` | `PASS / NOT_RUN / CAPABILITY_GAP / AUTH_BLOCKED / BLOCKED` |
| Independent review execution state | `NOT_RUN` | `PASS / NOT_RUN / CAPABILITY_GAP / AUTH_BLOCKED / BLOCKED` |
| Independent audit verdict | `NOT_ISSUED` | `PASS / CHANGES_REQUIRED / BLOCKED / NOT_ISSUED` |
| Audited `HEAD` | `NOT_REVIEWED` | Must equal current `HEAD` |
| Open material findings | `UNKNOWN` | Must equal `0` for regular human gate |

`RANQUEL-HARNESS-BOOTSTRAP-001` is limited to #3, its sequential closeout and
the exact HEAD authorized by a human. It preserves `CAPABILITY_GAP`, does not
turn Vercel contexts into harness CI, and grants neither Ready nor merge to a
new HEAD.

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
- `HARNESS_CI_EVIDENCE_USED`: `false`
- `HARNESS_CI_EXACT_HEAD`: `CAPABILITY_GAP`
- `CI_HEAD`: `NOT_CAPTURED`
- `CANDIDATE_KIND`: `INITIAL | REPAIR`
- `POST_GATE_CANDIDATE_RECHECK`: `NOT_RUN`
- `GATE_EXECUTION_SOURCE`: `NOT_RUN`
- `PRE_GATE_UNTRACKED_NON_IGNORED_FILES`: `NOT_CAPTURED`
- `PRE_GATE_IGNORED_FILES`: `NOT_CAPTURED`
- `POST_GATE_UNTRACKED_NON_IGNORED_FILES`: `NOT_CAPTURED`
- `POST_GATE_IGNORED_FILES`: `NOT_CAPTURED`
- `PRE_GATE_CANDIDATE_TREE_SHA`: `NOT_CAPTURED`
- `PRE_GATE_EXECUTION_TREE_SHA`: `NOT_CAPTURED`
- `POST_GATE_EXECUTION_TREE_SHA`: `NOT_CAPTURED`
- `POST_GATE_CANDIDATE_TREE_SHA`: `NOT_CAPTURED`
- `VALIDATED_CANDIDATE_TREE_SHA`: `NOT_CAPTURED`
- `ISOLATED_VALIDATION_TREE_SHA`: `NOT_CAPTURED | NOT_APPLICABLE en modo worktree`
- `CANDIDATE_HEAD_TREE_SHA`: `NOT_CAPTURED`
- `CANDIDATE_TREE_MATCH`: `NOT_RUN`
- Vercel contexts observed separately from harness CI:
- `INDEPENDENT_REVIEW_REQUEST=REQUIRED`
- `INDEPENDENT_REVIEW_REQUESTED`:
- `INDEPENDENT_REVIEW_REQUEST_STATE`:
- `INDEPENDENT_REVIEW_REQUEST_HEAD`:
- `INDEPENDENT_REVIEW_REQUEST_EVIDENCE`:
- `INDEPENDENT_REVIEW_EXECUTION_STATE`:
- `INDEPENDENT_AUDIT_VERDICT`:
- `AUDITED_HEAD`:
- `INDEPENDENT_AUDITED_AT_UTC`: `NOT_CAPTURED`
- `OPEN_MATERIAL_FINDINGS`:
- Artifacts/links:
- Known gaps or blocked checks:
- `HUMAN_GATE_AUTHORIZATION`: `NOT_RUN`
- `HUMAN_GATE_AUTHORIZED_HEAD`: `NOT_CAPTURED`
- `HUMAN_GATE_AUTHORIZATION_ACTOR`: `NOT_CAPTURED`
- `HUMAN_GATE_AUTHORIZED_AT_UTC`: `NOT_CAPTURED`
- `HUMAN_GATE_AUTHORIZATION_EVIDENCE`: `NONE`
- `READY_TRANSITION_STATE`: `NOT_RUN`
- `READY_TRANSITION_OCCURRED`: `false`
- `READY_TRANSITION_HEAD`: `NOT_CAPTURED`
- `READY_TRANSITION_ACTOR`: `NOT_CAPTURED`
- `READY_TRANSITION_AT_UTC`: `NOT_CAPTURED`
- `READY_TRANSITION_MECHANISM`: `NOT_CAPTURED`
- `READY_TRANSITION_EVIDENCE`: `NONE`
- `MERGE_AUTHORIZATION`: `NOT_GRANTED`
- `MERGE_AUTHORIZED_HEAD`: `NOT_CAPTURED`
- `MERGE_AUTHORIZATION_ACTOR`: `NOT_CAPTURED`
- `MERGE_AUTHORIZED_AT_UTC`: `NOT_CAPTURED`
- `MERGE_AUTHORIZATION_EVIDENCE`: `NONE`
- `HUMAN_MERGE`: `NOT_RUN`
- `PR_NUMBER`: `NOT_MERGED`
- `PR_MERGED`: `false`
- `MERGED_PR_HEAD`: `NOT_CAPTURED`
- `MERGED_PR_HEAD` source when observed: PR `head.sha`, never the merge commit.
- `AUDITED_PR_HEAD`: `NOT_CAPTURED`
- `INDEPENDENT_REVIEW_HEAD`: `NOT_CAPTURED`
- `MERGED_AT_UTC`: `NOT_CAPTURED`
- `MERGE_ACCEPTANCE`: `NOT_RUN`
- `INTEGRATED_SHA_SOURCE`: `NOT_CAPTURED`
- `INTEGRATED_SHA`: `NOT_CAPTURED`
- `MERGE_METHOD`: `NOT_RUN`
- `INTEGRATED_SHA_REACHABLE_FROM_MAIN`: `NOT_RUN`
- `MAIN_HEAD_AT_ACCEPTANCE`: `NOT_CAPTURED`
- `POST_MERGE_ACCEPTANCE_TARGET`: `INTEGRATED_SHA`
- `POST_MERGE_ACCEPTANCE_SHA`: `NOT_RUN`
- `POST_MERGE_ACCEPTANCE_STATE`: `NOT_RUN`
- `POST_MERGE_ACCEPTANCE_EVIDENCE`: `NONE`
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
- `RECONCILIATION_AUDITED_AT_UTC`: `NOT_CAPTURED`
- `RECONCILIATION_OPEN_MATERIAL_FINDINGS`: `UNKNOWN`
- `RECONCILIATION_HUMAN_GATE_AUTHORIZATION`: `NOT_RUN`
- `RECONCILIATION_HUMAN_GATE_AUTHORIZED_HEAD`: `NOT_CAPTURED`
- `RECONCILIATION_HUMAN_GATE_AUTHORIZATION_ACTOR`: `NOT_CAPTURED`
- `RECONCILIATION_HUMAN_GATE_AUTHORIZED_AT_UTC`: `NOT_CAPTURED`
- `RECONCILIATION_HUMAN_GATE_AUTHORIZATION_EVIDENCE`: `NONE`
- `RECONCILIATION_READY_TRANSITION_STATE`: `NOT_RUN`
- `RECONCILIATION_READY_TRANSITION_OCCURRED`: `false`
- `RECONCILIATION_READY_TRANSITION_HEAD`: `NOT_CAPTURED`
- `RECONCILIATION_READY_TRANSITION_ACTOR`: `NOT_CAPTURED`
- `RECONCILIATION_READY_TRANSITION_AT_UTC`: `NOT_CAPTURED`
- `RECONCILIATION_READY_TRANSITION_MECHANISM`: `NOT_CAPTURED`
- `RECONCILIATION_READY_TRANSITION_EVIDENCE`: `NONE`
- `RECONCILIATION_MERGE_AUTHORIZATION`: `NOT_GRANTED`
- `RECONCILIATION_MERGE_AUTHORIZED_HEAD`: `NOT_CAPTURED`
- `RECONCILIATION_MERGE_AUTHORIZATION_ACTOR`: `NOT_CAPTURED`
- `RECONCILIATION_MERGE_AUTHORIZED_AT_UTC`: `NOT_CAPTURED`
- `RECONCILIATION_MERGE_AUTHORIZATION_EVIDENCE`: `NONE`
- `RECONCILIATION_PR_MERGED_AT_UTC`: `NOT_CAPTURED`
- `RECONCILIATION_PR_MERGE_EVIDENCE`: `NONE`
- `RECONCILIATION_INTEGRATED_SHA_SOURCE`: `NOT_CAPTURED`
- `RECONCILIATION_INTEGRATED_SHA`: `NOT_CAPTURED`
- `RECONCILIATION_SHA_REACHABLE_FROM_MAIN`: `NOT_RUN`
- `TRUTH_RECONCILIATION_STATE`: `NOT_RUN`
- `TRUTH_RECONCILIATION_PASSED_AT_UTC`: `NOT_CAPTURED`
- `TRUTH_RECONCILIATION_EVIDENCE`: `NONE`
- `EXPLICIT_ISSUE_CLOSE_AUTHORIZATION`: `NOT_GRANTED`
- `EXPLICIT_ISSUE_CLOSE_AUTHORIZATION_ACTOR`: `NOT_CAPTURED`
- `EXPLICIT_ISSUE_CLOSE_AUTHORIZED_AT_UTC`: `NOT_CAPTURED`
- `EXPLICIT_ISSUE_CLOSE_AUTHORIZATION_EVIDENCE`: `NONE`
- `EXPLICIT_ISSUE_CLOSE_STATE`: `NOT_RUN`
- `ISSUE_CLOSED`: `false`
- `EXPLICIT_ISSUE_CLOSE_ACTOR`: `NOT_CAPTURED`
- `EXPLICIT_ISSUE_CLOSE_AT_UTC`: `NOT_CAPTURED`
- `EXPLICIT_ISSUE_CLOSE_MECHANISM`: `NOT_CAPTURED`
- `EXPLICIT_ISSUE_CLOSE_EVIDENCE`: `NONE`

## Risks and rollback

- Residual risks:
- Rollback unit and verification:

## Required confirmations

- [ ] The diff contains no unrelated work or unauthorized branch/PR changes.
- [ ] Product changes are fully declared; for docs-only work, product diff is zero.
- [ ] No prohibited external system was mutated.
- [ ] No secrets, credentials, private URLs, or personal data were committed.
- [ ] Missing, partial, blocked, unknown, and capability-gap states are not reported as `PASS`.
- [ ] Local, remote, PR and audit HEADs coincide; `CI_HEAD` also coincides only when a real harness CI run is used as evidence. Otherwise `HARNESS_CI_EXACT_HEAD=CAPABILITY_GAP` and `CI_HEAD=NOT_CAPTURED` remain honest.
- [ ] V-011 observed the PR open and Draft with its observed HEAD equal to the exact candidate/audited HEAD. A Ready `PASS` is only the first exact-head event, with `READY_TRANSITION_OCCURRED=true`, `READY_TRANSITION_HEAD=HUMAN_GATE_AUTHORIZED_HEAD=HEAD`, actor/mechanism/evidence captured and `V011_OBSERVED_AT_UTC < INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < READY_TRANSITION_AT_UTC`; a premature event remains `READY_TRANSITION_STATE=BLOCKED` and cannot be healed retroactively.
- [ ] Every candidate completed V-C01 before commit, then was committed, had its HEAD captured and pushed only after `CANDIDATE_TREE_MATCH=PASS`. Initial candidates used `ISOLATED_VALIDATED_TREE`, equality of all candidate/execution/validated/isolated trees, identical pre/post inventories and no repository-worktree reads. Worktree execution was repair-only and all four pre/post inventories were `NONE`.
- [ ] If and only if this is a repair, it ran from `REPAIR_EDIT` through gates, projected V-C01 into V-R01 and `TREE_MATCH=PASS`, and reused no prior-HEAD evidence; an initial candidate contains no fictitious repair fields.
- [ ] Independent review was requested; request and execution are `PASS`, verdict is `PASS`, audited/current HEADs match, and open material findings are zero before recommending the regular human gate.
- [ ] Human merge, when run, preserves V-014 `PASS`, the human gate, `READY_TRANSITION_STATE=PASS` for the same HEAD before `MERGED_AT_UTC`, and a separate `MERGE_AUTHORIZATION=GRANTED`; it proves `MERGED_PR_HEAD=AUDITED_PR_HEAD=INDEPENDENT_REVIEW_HEAD=HEAD=AUDITED_HEAD=HUMAN_GATE_AUTHORIZED_HEAD=MERGE_AUTHORIZED_HEAD` and `INDEPENDENT_AUDITED_AT_UTC < HUMAN_GATE_AUTHORIZED_AT_UTC < MERGE_AUTHORIZED_AT_UTC < MERGED_AT_UTC`; an observed merge never heals `CHANGES_REQUIRED`.
- [ ] V-017 uses only `POST_MERGE_ACCEPTANCE_SHA=INTEGRATED_SHA`; no second editable acceptance-SHA key exists.
- [ ] Both reconciliation modes require V-017 `PASS` and `TRUTH_RECONCILIATION_SOURCE_INTEGRATED_SHA=INTEGRATED_SHA`. `NO_DIFF` adds non-empty evidence/justification and no fictitious PR.
- [ ] `MERGED_PR` reconciliation captures the actual merged PR HEAD and proves `RECONCILIATION_MERGED_PR_HEAD=RECONCILIATION_PR_HEAD=RECONCILIATION_REVIEW_REQUEST_HEAD=RECONCILIATION_AUDITED_HEAD=RECONCILIATION_HUMAN_GATE_AUTHORIZED_HEAD=RECONCILIATION_READY_TRANSITION_HEAD=RECONCILIATION_MERGE_AUTHORIZED_HEAD`; request, execution and verdict are `PASS`, findings are zero, and `RECONCILIATION_AUDITED_AT_UTC < RECONCILIATION_HUMAN_GATE_AUTHORIZED_AT_UTC < RECONCILIATION_READY_TRANSITION_AT_UTC < RECONCILIATION_MERGE_AUTHORIZED_AT_UTC < RECONCILIATION_PR_MERGED_AT_UTC`; `RECONCILIATION_PR_MERGE_EVIDENCE` identifies that PR and the integrated SHA is its reachable merge result. `NO_DIFF` retains honest defaults for every PR-only event.
- [ ] V-019 preserves V-014, human authorization and V-015–V-018 in `PASS`; the CI bootstrap exception does not grant Ready or merge automatically.
- [ ] The PR uses `Refs #N`; no closing keyword can close the issue at merge time.
- [ ] Explicit issue close `PASS`, when run, requires `ISSUE_CLOSED=true`, records reconciliation pass, separate human authorization and the first observed event with time/mechanism/evidence, and proves `EXPLICIT_ISSUE_CLOSE_ACTOR=EXPLICIT_ISSUE_CLOSE_AUTHORIZATION_ACTOR` plus `TRUTH_RECONCILIATION_PASSED_AT_UTC < EXPLICIT_ISSUE_CLOSE_AUTHORIZED_AT_UTC < EXPLICIT_ISSUE_CLOSE_AT_UTC`; premature events remain `BLOCKED`.
- [ ] Ready, merge, explicit issue close, deploy, publication, campaigns, and spending remain human decisions.

## Independent audit request

Please audit this PR read-only at the exact `HEAD`, report every finding with
severity and evidence, and record execution state, audit verdict, audited HEAD
and open material finding count separately.
Do not repair findings inside the audit.
