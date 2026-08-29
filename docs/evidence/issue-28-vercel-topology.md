# Issue #28 — Vercel topology evidence and mutation record

Status: `CURRENT_IN_PROGRESS`

Owner: GitHub issue #28 (execution evidence; not a stable truth owner)

This document records sanitized evidence for issue #28. It preserves the history
of the Vercel topology audit, the four human-executed Git disconnects, the
controlled topology tests, and the gates that still prevent merge/closeout.
It contains no secret values.

## Exact-head binding rule

A Git commit cannot reliably embed its own not-yet-created commit SHA without a
self-reference problem. Therefore this manifest uses the following binding:

```text
MANIFEST_HEAD_BINDING=COMMIT_CONTAINING_THIS_MANIFEST
CONCRETE_HEAD_VALUE=PR_33_METADATA_OR_TOP_LEVEL_EVIDENCE_COMMENT_AFTER_COMMIT
EXACT_HEAD_VALIDATION_FOR_A_NEW_MANIFEST_COMMIT=PENDING_UNTIL_THAT_SHA_EXISTS
```

Concrete SHAs, deployment IDs and final exact-head audit results are recorded in
PR #33 / issue #28 after each commit is created. They are not back-written into
this file, because doing so would create another commit and invalidate the SHA
being recorded.

## TASK_CONTRACT

```yaml
TASK_CONTRACT:
  ISSUE: "#28"
  PARENT: "#2"
  OBJECTIVE: "Consolidate five Vercel Git integrations to one proven canonical project, preserve production/domain/API behavior, and prove the resulting topology without deleting projects or deployments."
  INITIAL_BASE_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  CURRENT_BASE_SHA_BEFORE_THIS_REPAIR: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  RISK: CRITICAL
  RISK_REASON: "Repository TESTING_MATRIX classifies external configuration/deploy mutation as CRITICAL."
  ALLOWED_PATHS:
    - "docs/evidence/issue-28-vercel-topology.md"
  ALLOWED_EXTERNAL_SYSTEMS:
    - "Vercel read-only inventory and validation"
    - "Human-executed Vercel Git disconnects already authorized by issue #28"
    - "Google Apps Script read-only inspection of SITE_URL only"
  FORBIDDEN:
    - "delete or pause Vercel projects"
    - "delete deployments"
    - "move or edit domains/DNS"
    - "edit environment-variable names or values"
    - "change framework/build settings"
    - "change public HTML/CSS/JS/API code under this issue"
    - "execute issue #24 without a new human authorization/dependency decision"
    - "merge PR #33 without explicit human authorization of the expected production deployment"
  PRESERVED_CONTRACTS:
    - "www.ranquel.com.ar and ranquel.com.ar remain on canonical project ranquel-tech-lab-571s"
    - "historical deployments remain intact"
    - "four noncanonical projects remain available for rollback"
    - "Google Apps Script continues targeting the canonical backend"
  STOP_CONDITIONS:
    - "canonical ownership becomes ambiguous"
    - "a noncanonical project contains unique required configuration"
    - "domain/DNS changes unexpectedly"
    - "Home or safe API smoke check regresses"
    - "more than one project creates a new deployment for a controlled branch HEAD"
    - "rollback cannot be demonstrated safely"
    - "required CRITICAL CI gate remains unavailable"
    - "independent audit reports a material finding"
  DEFINITION_OF_DONE:
    - "one canonical Vercel Git integration remains"
    - "controlled exact-head produces one canonical preview and zero duplicate deployments"
    - "Apps Script SITE_URL is proven to target canonical 571s"
    - "CRITICAL validation matrix is complete with honest non-PASS states"
    - "rollback is tested and human-authorized"
    - "required exact-head CI exists and passes"
    - "independent exact-head audit passes"
    - "merge is separately authorized together with its expected production deployment"
```

## EVIDENCE_MANIFEST

```yaml
EVIDENCE_MANIFEST:
  MANIFEST_VERSION: RANQUEL_EVIDENCE_MANIFEST_V1
  ISSUE: "#28"
  PARENT: "#2"
  PR: "#33"
  PR_ISSUE_REFERENCE: "Refs #28"
  REPOSITORY: "cabaniasriocuarto/RanquelTechLab"
  INITIAL_BASE_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  CURRENT_BASE_SHA_BEFORE_THIS_REPAIR: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
  HEAD_BINDING: "COMMIT_CONTAINING_THIS_MANIFEST; exact SHA recorded in PR #33 after commit creation"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  WRITER: "ChatGPT / Vercel+GitHub connected session"
  RECORDED_AT_UTC: "2026-08-29"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md"
  OVERALL_VALIDATION_RESULT: BLOCKED
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

`OVERALL_VALIDATION_RESULT=BLOCKED` is intentional. The topology mutation is
working as intended, but CRITICAL gates are not all PASS: exact-head GitHub
Actions CI is currently unavailable, rollback has not yet been exercised, the
new manifest commit needs its own exact-head preview/audit, and merge still
requires explicit authorization of the production deployment it will trigger.

## Baseline and branch reconciliation

```yaml
BASELINE:
  DEFAULT_BRANCH: main
  INITIAL_ORIGIN_MAIN_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  MAIN_ADVANCED_DURING_PR_TO: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
  MAIN_ADVANCE_DESCRIPTION: "Update index.html; unrelated Facebook domain verification change"
  BRANCH_UPDATE_MERGE_HEAD: "27ef0487bf33d6b1cac214af53d65038ad0f9162"
  RELATION_AFTER_UPDATE_BRANCH: "ahead 3 / behind 0"
  ACTIVE_GIT_OPERATIONS: NONE_OBSERVED_BY_GITHUB_PR_STATE
  PR_STATE_BEFORE_THIS_REPAIR: "OPEN_DRAFT"
  ISSUE_24_EXECUTION: NOT_RUN
```

The `Update branch` operation merged `main` into the issue branch. It did not
merge PR #33 into `main`. The PR diff against the updated base remained one
file: `docs/evidence/issue-28-vercel-topology.md`.

## Changed surfaces and review matrix

- `S01 — documentation/evidence`: this manifest only.
- `S02 — external configuration`: four Vercel Git integrations were disconnected
  by the human operator under issue #28 authorization.
- `S03 — external consumer relationship`: Google Apps Script `SITE_URL` was
  inspected read-only because it determines which Vercel backend receives
  `/api/access/create` requests.
- `S04 — deployment lifecycle`: a future merge to `main` is expected to trigger
  a production deployment from canonical `571s`; merge and deployment approval
  are therefore coupled at the human gate.
- Public product code is not changed by this PR. The unrelated `main` change was
  incorporated through the branch update and is not attributed to issue #28.

## Vercel topology inventory

Five Vercel projects were connected to GitHub repo
`cabaniasriocuarto/RanquelTechLab` before Phase B.

| Project | Project ID | Public custom domain | Production branch | App env key names observed | Classification |
| --- | --- | --- | --- | --- | --- |
| `ranquel-tech-lab-571s` | `prj_tKwBi0KEzVG18kqYPjUupVmUgNry` | `ranquel.com.ar`, `www.ranquel.com.ar` | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | CANONICAL |
| `ranquel-tech-lab` | `prj_tAsnytLpt5720qnbl7IcMsCUApA5` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | NONCANONICAL |
| `ranquel-tech-lab-vfiu` | `prj_WxzsWmVhMoBvrxm1u81hHuASEtcG` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | NONCANONICAL |
| `ranquel-tech-lab-teol` | `prj_gGzQXKs3qUoO23tM103VjCog0d9q` | none | `main` | none | NONCANONICAL |
| `ranquel-tech-lab-j56r` | `prj_MbREFjWvS7QmCAupqvuD9PuB5ERm` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | NONCANONICAL |

No secret value is recorded here. `SITE_URL` in `api/access/create.js` is
optional for the Vercel function itself because the function can fall back to
the request host. That statement is separate from the Google Apps Script
consumer configuration documented below.

## Google Apps Script consumer verification

Repository code `apps-script/Ranquel_Turnos_Videollamada.gs` requires a Script
Property named `SITE_URL` and calls `<SITE_URL>/api/access/create`.

On 2026-08-29, the human operator opened the live Apps Script project settings
and read only the `SITE_URL` Script Property. Its value was:

```text
https://ranquel-tech-lab-571s.vercel.app
```

No other Script Property value is recorded in evidence.

```text
APPS_SCRIPT_SITE_URL_PRESENT=YES
APPS_SCRIPT_SITE_URL_TARGET=CANONICAL_571S
APPS_SCRIPT_POINTS_TO_DISCONNECTED_PROJECT=NO
CONSUMER_BACKEND_RELATION=PASS
```

This resolves the prior ambiguity about whether the deployed Apps Script could
be pinned to `vfiu`, `teol`, `j56r` or the unsuffixed duplicate.

## Phase B mutation ledger

The human operator used Vercel **Settings → Git → Disconnect / Remove
Connection** one project at a time, with verification between steps.

| Resource | State before | Operation | State after | Historical project/deployment preserved | Reversible |
| --- | --- | --- | --- | --- | --- |
| canonical `571s` | connected | keep connected | connected | yes | N/A |
| `ranquel-tech-lab` | connected | disconnect Git | disconnected | yes | yes |
| `vfiu` | connected | disconnect Git | disconnected | yes | yes |
| `teol` | connected | disconnect Git | disconnected | yes | yes |
| `j56r` | connected | disconnect Git | disconnected | yes | yes |

```yaml
EXTERNAL_PRODUCT_OR_PLATFORM_MUTATIONS: FOUR_VERCEL_GIT_DISCONNECTS_ONLY
DNS_MUTATIONS: ZERO
ENV_MUTATIONS: ZERO
PROJECT_OR_DEPLOYMENT_DELETIONS: ZERO
MANUAL_PRODUCTION_PROMOTIONS_OR_REDEPLOYS: ZERO
ISSUE_24_EXECUTION: NOT_RUN
```

## Controlled topology evidence

The controlled post-disconnect trigger at
`1dc11bf73121047271a6c6145ae30eb758baaf7b` created one Vercel status/preview
on canonical `571s` and zero new deployments on the four disconnected projects.
Codex independently reviewed that state before the later Ready review.

After `main` advanced, GitHub `Update branch` created merge HEAD
`27ef0487bf33d6b1cac214af53d65038ad0f9162`. That HEAD again produced exactly
one Vercel status context in `success`, pointing to canonical `571s`, with
preview deployment `dpl_7zvaJAsdqQ6TUz8YDJsPKEeqaRdF` in `READY`,
`target=null`. Queries for deployments created after that trigger returned zero
new deployments for all four disconnected projects.

The canonical project still owns `ranquel.com.ar` and `www.ranquel.com.ar`.
After the branch update, public Home returned HTTP 200 and the safe negative
path `GET /api/daily/token` returned HTTP 401 `Missing access` as expected.

## Required validation matrix

Connector-backed inspections have no shell process exit code; those rows use
`N/A` rather than inventing `0`. `NOT_APPLICABLE`, `CAPABILITY_GAP`, `NOT_RUN`
and `PENDING` are not PASS.

| ID | Gate | Command / inspection sanitized | Exit code | State | Observed result | Limitation |
| --- | --- | --- | ---: | --- | --- | --- |
| V-001 | Preflight | GitHub PR metadata | N/A | PASS | PR #33 open, Draft, mergeable; pre-repair HEAD `27ef0487...` | Connector inspection, not local git |
| V-002 | Diff | GitHub compare `main...ops/issue-28-vercel-topology-consolidation` | N/A | PASS | ahead 3 / behind 0; one changed file | No shell `git diff --check` available in this connected session |
| V-003 | Staged diff | Git index inspection | N/A | NOT_APPLICABLE | GitHub Contents API writes do not expose a local staging index | Does not substitute V-002/V-004 |
| V-004 | Scope | PR changed-file comparison | N/A | PASS | only `docs/evidence/issue-28-vercel-topology.md` | Re-evaluate after every commit |
| V-005 | Secrets/privacy | Evidence-content inspection | N/A | PASS | no secret values recorded; Apps Script evidence records only public `SITE_URL` | Does not claim external secrets were rotated |
| V-006 | Focal topology | Vercel deployment/status inspection at `27ef0487...` | N/A | PASS | one canonical preview/status; zero duplicate deployments | Historical after the next manifest commit |
| V-007 | Surface regression | canonical domains + public Home + safe API negative path | N/A | PASS | domains on `571s`; Home 200; `/api/daily/token` 401 Missing access | Non-destructive paths only |
| V-008 | Preview exact-head | Vercel deployment `dpl_7zvaJAsdqQ6TUz8YDJsPKEeqaRdF` | N/A | PASS | READY, target=null, PR #33, HEAD `27ef0487...` | Must be repeated for the commit containing this repair |
| V-009 | CI exact-head | GitHub Actions workflow runs for `27ef0487...` | N/A | CAPABILITY_GAP | zero workflow runs returned | CRITICAL gate requires CI; Vercel status is not a documentary substitute |
| V-010 | External consumer | live Apps Script Script Property `SITE_URL` read-only inspection | N/A | PASS | targets `https://ranquel-tech-lab-571s.vercel.app` | Human-observed; no other property values recorded |
| V-011 | Rollback | reconnect one affected noncanonical Git integration and restore disconnected state | N/A | NOT_RUN | rollback procedure documented only | CRITICAL rollback gate requires a safe human-authorized test |
| V-012 | Merge/deploy authorization | human merge gate | N/A | BLOCKED | merge not authorized; expected production deployment not authorized | Must be explicit before merge |
| V-013 | Independent audit | Codex exact-head read-only review | N/A | PENDING | prior reviews are historical after this repair commit | Request only after new HEAD/previews are verified |

## CRITICAL gates and blockers

Repository `docs/truth/TESTING_MATRIX.md` classifies external configuration or
deploy mutation as `CRITICAL`. `docs/truth/QUALITY_GATES.md` therefore requires
all CRITICAL gates, including exact-head CI and tested/authorized rollback.

Current state:

```text
RISK=CRITICAL
TOPOLOGY_REGRESSION_FOR_AFFECTED_SURFACES=PASS
HUMAN_EXTERNAL_MUTATION_AUTHORIZATION=PASS_HISTORICAL
APPS_SCRIPT_CONSUMER_VERIFICATION=PASS
PREVIEW_TOPOLOGY=PASS_HISTORICAL_27ef0487
CI_EXACT_HEAD=CAPABILITY_GAP
ROLLBACK_TEST=NOT_RUN
NEW_REPAIR_HEAD_PREVIEW=PENDING
NEW_REPAIR_HEAD_INDEPENDENT_AUDIT=PENDING
OVERALL_VALIDATION_RESULT=BLOCKED
```

The CI gap is especially important: issue #24 owns executable harness/CI and is
still explicitly out of scope/not authorized in this issue. This manifest does
not convert that missing capability into PASS. A human dependency decision is
required before #28 can satisfy the CRITICAL CI gate.

## Rollback

Authorized rollback design remains least-destructive: reconnect the same GitHub
repository only on an affected noncanonical project, verify the project/domain
state, then stop and re-audit. No domain movement, secret movement, project
deletion or production promotion belongs to rollback.

```yaml
ROLLBACK:
  PLAN: "Reconnect the same GitHub repository on the affected noncanonical project only."
  HUMAN_AUTHORIZATION_IN_ISSUE: true
  TESTED: false
  VERIFICATION_STATE: NOT_RUN
  CURRENT_GATE: BLOCKED_PENDING_SAFE_ROLLBACK_TEST
```

No regression required rollback during the four disconnects; that is not the
same as a tested rollback and is not represented as PASS.

## Merge-induced production deployment gate

The canonical project keeps Git connected, uses `main` as its Production Branch,
and uses automatic build behavior. Therefore merging PR #33 to `main` is
expected to create a new Git-triggered **production deployment** on
`ranquel-tech-lab-571s` even though this PR changes only evidence documentation.

This is an expected platform side effect, not a manual promotion, but it must be
explicitly authorized because humans own merge/deploy decisions.

```text
MERGE_EXPECTED_TO_TRIGGER_PRODUCTION_DEPLOYMENT=YES
MERGE_AUTHORIZED=NO
EXPECTED_PRODUCTION_DEPLOYMENT_AUTHORIZED=NO
MERGE_GATE=BLOCKED_PENDING_EXPLICIT_HUMAN_AUTHORIZATION
POST_MERGE_REQUIRED=verify production deployment SHA + domains + Home 200 + safe API 401
```

A later merge authorization must explicitly acknowledge both the merge and this
expected Vercel production deployment. Until then, do not merge.

## Writer declaration

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: partial
  ZERO_PRODUCT_CHANGES_IN_PR_DIFF: true
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: true
  FINAL_VALIDATION_RESULT: BLOCKED
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  READY_DECISION_OWNER: human
  MERGE_DECISION_OWNER: human
  PRODUCTION_DEPLOY_DECISION_OWNER: human
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: human after post-merge acceptance
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
```

Remaining hard gates after this repair commit is created: verify its exact-head
single-preview topology, obtain required exact-head CI capability/PASS, safely
test rollback under human control, request a fresh independent audit, and only
then ask the human for Ready/merge plus explicit production-deployment
authorization.
