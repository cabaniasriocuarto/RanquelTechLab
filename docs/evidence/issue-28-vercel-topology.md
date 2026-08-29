# Issue #28 — Vercel topology evidence and mutation record

Status: `CURRENT_IN_PROGRESS`

Owner: GitHub issue #28 (execution evidence; not a stable truth owner)

This document records sanitized evidence for issue #28. It preserves the Vercel
topology audit, the four human-executed Git disconnects, the GitHub branch
synchronization used during validation, the controlled topology tests, the live
Apps Script consumer check, the interdisciplinary review selection, and the
human bootstrap exception. It contains no secret values.

## Exact-head binding rule

A Git commit cannot embed its own not-yet-created SHA without a self-reference
loop. This manifest therefore uses a non-recursive binding:

```text
MANIFEST_HEAD_BINDING=COMMIT_CONTAINING_THIS_MANIFEST
CONCRETE_HEAD_VALUE=PR_33_METADATA_OR_TOP_LEVEL_EVIDENCE_COMMENT_AFTER_COMMIT
EXACT_HEAD_VALIDATION_FOR_A_NEW_MANIFEST_COMMIT=NOT_RUN_UNTIL_SHA_EXISTS
```

After the commit exists, PR #33 records the concrete HEAD, preview/deployment
identity and independent audit. Those volatile values are not back-written into
this file because doing so would create another HEAD.

## TASK_CONTRACT

```yaml
TASK_CONTRACT:
  ISSUE: "#28"
  PARENT: "#2"
  OBJECTIVE: "Consolidate five Vercel Git integrations to one proven canonical project, preserve production/domain/API behavior, and prove the resulting topology without deleting projects or deployments."
  INITIAL_BASE_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  CURRENT_BASE_SHA: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
  PRE_REPAIR_HEAD: "2d590ca9967e9bff914be7ff461de8e60891b8a8"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  RISK: CRITICAL
  RISK_REASON: "TESTING_MATRIX classifies external configuration/deploy mutation as CRITICAL."
  ALLOWED_PATHS:
    - "docs/evidence/issue-28-vercel-topology.md"
  ALLOWED_EXTERNAL_SYSTEMS:
    - "Vercel read-only inventory and validation"
    - "Human-executed Vercel Git disconnects already authorized by issue #28"
    - "Google Apps Script read-only inspection of SITE_URL only"
    - "GitHub administrative branch/PR state operations explicitly authorized by the human"
  FORBIDDEN:
    - "delete or pause Vercel projects"
    - "delete deployments"
    - "move or edit domains/DNS"
    - "edit environment-variable names or values"
    - "change framework/build settings"
    - "change public HTML/CSS/JS/API code under this issue"
    - "execute issue #24 without new human authorization"
    - "merge PR #33 without explicit human authorization of the expected production deployment"
  PRESERVED_CONTRACTS:
    - "www.ranquel.com.ar and ranquel.com.ar remain on canonical project ranquel-tech-lab-571s"
    - "historical deployments remain intact"
    - "four noncanonical projects remain available for rollback"
    - "Google Apps Script continues targeting the canonical backend"
    - "CI_EXACT_HEAD=CAPABILITY_GAP and ROLLBACK_TEST=NOT_RUN remain non-PASS under bootstrap exception"
  STOP_CONDITIONS:
    - "canonical ownership becomes ambiguous"
    - "a noncanonical project contains unique required configuration"
    - "domain/DNS changes unexpectedly"
    - "Home or safe API smoke check regresses"
    - "more than one project creates a new deployment for a controlled branch HEAD"
    - "independent audit reports a material finding"
    - "merge or production deployment is attempted without a separate human authorization"
  DEFINITION_OF_DONE:
    - "one canonical Vercel Git integration remains"
    - "controlled exact-head produces one canonical preview and zero duplicate deployments"
    - "Apps Script SITE_URL is proven to target canonical 571s"
    - "CRITICAL validation and D01-D12 review matrices are complete with honest states"
    - "RANQUEL-TOPOLOGY-BOOTSTRAP-002 remains the only exception for CI exact-head and rollback test"
    - "fresh independent exact-head audit has no material findings"
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
  BASE_SHA: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
  HEAD: "COMMIT_CONTAINING_THIS_MANIFEST; concrete SHA recorded in PR #33 after commit creation"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  WRITER: "ChatGPT / GitHub+Vercel connected session"
  RECORDED_AT_UTC: "2026-08-29T21:28:18Z"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos"
  OVERALL_VALIDATION_RESULT: CAPABILITY_GAP
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

`OVERALL_VALIDATION_RESULT=CAPABILITY_GAP` preserves the most specific global
non-PASS cause instead of collapsing it to `BLOCKED` or `PARTIAL`: required
GitHub Actions exact-head CI does not exist yet. The separate rollback gate
remains `NOT_RUN`; merge/deploy authorization remains `AUTH_BLOCKED`; neither is
converted to PASS. Human exception `RANQUEL-TOPOLOGY-BOOTSTRAP-002` accepts only
the CI and rollback gaps for this bootstrap closeout and does not alter their
validation states.

## Baseline and branch reconciliation

```yaml
BASELINE:
  DEFAULT_BRANCH: main
  ORIGIN_MAIN_SHA: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
  PRE_REPAIR_HEAD: "2d590ca9967e9bff914be7ff461de8e60891b8a8"
  RELATION_TO_ORIGIN_MAIN_BEFORE_THIS_REPAIR: "ahead 5 / behind 0"
  INITIAL_GIT_STATUS: "GitHub PR diff: one added evidence file; no product/runtime/workflow path changed"
  ACTIVE_GIT_OPERATIONS: NONE_OBSERVED_BY_GITHUB_PR_STATE
  PR_STATE_AT_REPAIR_START: OPEN_DRAFT
  ISSUE_24_EXECUTION: NOT_RUN
```

The unrelated `main` advance was incorporated into the issue branch through a
human-authorized GitHub **Update branch** merge. That administrative mutation is
recorded explicitly below; it did not merge PR #33 into `main`.

## Scope and changed surfaces

```yaml
SCOPE:
  CONTRACT_REFERENCE: "issue #28 / PR #33"
  ALLOWED_PATHS:
    - "docs/evidence/issue-28-vercel-topology.md"
  ACTUAL_CHANGED_PATHS:
    - "docs/evidence/issue-28-vercel-topology.md"
  ACTUAL_STAGED_PATHS:
    - "docs/evidence/issue-28-vercel-topology.md"
  FORBIDDEN_PATHS_TOUCHED: false
  CHANGED_SURFACES:
    - "S01 — documentation/evidence — docs/evidence/issue-28-vercel-topology.md — Documentation/routers without product truth — D02,D06,D11,D12"
    - "S02 — external Vercel configuration — four Git integrations — Deploy/DNS/publication row — D01-D05,D08,D10-D12"
    - "S03 — external consumer relationship — Apps Script SITE_URL read-only — Architecture/API trust relationship — D01,D02,D11,D12"
    - "S04 — deployment lifecycle — future main merge triggers canonical production deployment — Deploy/DNS/publication row — D01-D05,D08,D10-D12"
  DISCIPLINES_D01_D12:
    - "D01 — Producto, negocio y estrategia comercial — MATERIAL — S02,S03,S04"
    - "D02 — Arquitectura de software e información — MATERIAL — S01,S02,S03,S04"
    - "D03 — Frontend, UX responsive y diseño — MATERIAL — S02,S04"
    - "D04 — Accesibilidad — MATERIAL — S02,S04"
    - "D05 — SEO técnico y SEO local — MATERIAL — S02,S04"
    - "D06 — Contenido, comunicación y marca — MATERIAL — S01"
    - "D07 — Marketing y CRO — NOT_APPLICABLE — no copy/CTA/funnel/campaign changed"
    - "D08 — GA4, GTM, atribución y conversiones — MATERIAL — S02,S04"
    - "D09 — Google Ads — NOT_APPLICABLE — no Ads setting, spend, landing contract or campaign changed"
    - "D10 — Performance y Core Web Vitals — MATERIAL — S02,S04"
    - "D11 — Seguridad y privacidad — MATERIAL — S01,S02,S03,S04"
    - "D12 — QA, release, rollback y auditoría independiente — MATERIAL — S01,S02,S03,S04"
  RISK_LEVEL: CRITICAL
```

Public product code is not changed by this PR. The broad discipline selection is
required because the historical external configuration mutation is CRITICAL,
not because this documentation repair changes UI, SEO, analytics or product
behavior.

## Interdisciplinary reviews D01–D12

| Disciplina | Materialidad | Reviewer/owner | Estado | Evidencia o justificación |
| --- | --- | --- | --- | --- |
| D01 — Producto, negocio y estrategia comercial | MATERIAL | Human owner + writer | PASS | Issue #28 objective/no-scope preserved; no product offer, CTA, spend or public capability changed. |
| D02 — Arquitectura de software e información | MATERIAL | Writer + independent Codex history | PASS | Five-project topology inventoried; canonical ownership and dependencies explicit; Apps Script consumer bound to canonical backend. |
| D03 — Frontend, UX responsive y diseño | MATERIAL | Writer + human operator | PASS | No frontend path changed; exact pre-repair preview/public Home remained operational; new-head preview is rechecked after commit. |
| D04 — Accesibilidad | MATERIAL | Writer + human operator | PASS | No HTML/CSS/interaction path changed by PR; deployment-only guard confirms no accessibility surface delta is introduced by the evidence file. |
| D05 — SEO técnico y SEO local | MATERIAL | Writer + human operator | PASS | Public canonical/domain ownership preserved; no robots/sitemap/schema/content SEO path changed by PR. |
| D06 — Contenido, comunicación y marca | MATERIAL | Writer | PASS | Evidence wording reviewed for factual scope; no public copy changed; secrets/PII excluded. |
| D07 — Marketing y CRO | NOT_APPLICABLE | Writer | NOT_APPLICABLE | No public message, CTA, funnel, experiment or campaign changed. |
| D08 — GA4, GTM, atribución y conversiones | MATERIAL | Writer + human operator | PASS | No analytics/tag/config mutation; deployment validation is non-destructive and public Home remained served. |
| D09 — Google Ads | NOT_APPLICABLE | Writer | NOT_APPLICABLE | No Ads campaign, conversion, budget, bid or paid landing change. |
| D10 — Performance y Core Web Vitals | MATERIAL | Writer + human operator | PASS | No product asset/build-setting delta; READY preview and unchanged product bytes are the proportional deployment proxy; no CWV claim is made. |
| D11 — Seguridad y privacidad | MATERIAL | Writer + human operator | PASS | No secret values recorded; safe API negative path used; no DNS/env/permission secret mutation. |
| D12 — QA, release, rollback y auditoría independiente | MATERIAL | Codex independent auditor + human owner | NOT_RUN | Prior audits are historical after this commit; fresh exact-head audit is required after the new SHA and preview exist. Writer does not self-approve D12. |

## SEO/indexation applicability

D05 is MATERIAL as a deploy/publication guard, but this PR does not change an
SEO/indexation source or public page. Therefore Golden SEO implementation gates
are not selected as change gates for this evidence-only diff:

```text
SEO_CHANGE_SURFACE=NOT_APPLICABLE
SEO_ARCHETYPE=NOT_APPLICABLE_NO_SEO_OUTPUT_CHANGE
GOLDEN_BASELINE_VERSION=NOT_APPLICABLE_NO_SEO_OUTPUT_CHANGE
SEO_GOLDEN_PARITY=NOT_APPLICABLE_NO_SEO_OUTPUT_CHANGE
HOME_SEO_REGRESSION=PASS_CANONICAL_DOMAIN_AND_HOME_GUARD_ONLY
LOCAL_CONTENT_UTILITY=NOT_APPLICABLE_NO_LOCAL_CONTENT_CHANGE
MOBILE_SEO_PARITY=NOT_APPLICABLE_NO_RENDER_CHANGE
MULTILINGUAL_SEO=NOT_APPLICABLE_NO_LANGUAGE_OR_INDEXATION_CHANGE
```

D05 review remains material because the deployment topology must not move the
public canonical/domain or alter indexable production ownership.

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

No secret value is recorded. `SITE_URL` in the Vercel function is optional for
its origin fallback; that is separate from the Apps Script consumer property.

## Google Apps Script consumer verification

Repository code `apps-script/Ranquel_Turnos_Videollamada.gs` requires a Script
Property named `SITE_URL` and calls `<SITE_URL>/api/access/create`.

Human runtime UI inspection confirmed the live Script Property targets:

```text
SITE_URL=https://ranquel-tech-lab-571s.vercel.app
APPS_SCRIPT_SITE_URL_PRESENT=YES
APPS_SCRIPT_SITE_URL_TARGET=CANONICAL_571S
APPS_SCRIPT_POINTS_TO_DISCONNECTED_PROJECT=NO
CONSUMER_BACKEND_RELATION=PASS
RUNTIME_EVIDENCE_RECORDED_AT_UTC=2026-08-29T17:53:04Z
RUNTIME_EVIDENCE_REFERENCE=issue_28_comment_5463952679
```

No other Script Property value is recorded.

## Event and observation timestamps

All timestamps below are UTC and come from GitHub/Vercel metadata or the cited
GitHub evidence record. They are used to correlate branch changes and previews;
they are not inferred from private logs.

| Event | UTC timestamp | Evidence |
| --- | --- | --- |
| Controlled topology preview for `1dc11bf...` created | `2026-08-29T12:29:14Z` | Vercel deployment `dpl_GgvUKehAukqFbb2b5aMMdn7CuVZV` |
| Human `Update branch` merge commit created | `2026-08-29T17:37:23Z` | GitHub commit `27ef0487bf33d6b1cac214af53d65038ad0f9162` |
| Preview for `27ef0487...` created | `2026-08-29T17:37:26Z` | Vercel deployment `dpl_7zvaJAsdqQ6TUz8YDJsPKEeqaRdF` |
| Pre-repair evidence commit `2d590ca...` created | `2026-08-29T17:49:19Z` | GitHub commit metadata |
| Preview for `2d590ca...` created | `2026-08-29T17:49:21Z` | Vercel deployment `dpl_3ZXHCJYwiAJYj1y91qq4xxxYLbxk` |
| Apps Script runtime-target evidence recorded | `2026-08-29T17:53:04Z` | issue #28 comment `5463952679` |
| Bootstrap exception first recorded | `2026-08-29T18:51:43Z` | issue #28 comment `5464226350` |
| Post-Ready audit that opened the current five P2 findings completed | `2026-08-29T19:27:39Z` | PR #33 Codex activity |
| PR converted back to Draft for this repair and state read | `2026-08-29T21:28:18Z` | PR #33 metadata |

## Mutation ledger — external and GitHub administrative

Reads and writes are separated. A read-only observation is not counted as a
mutation.

| System | Resource | State before | Operation authorized | Result | State after | Evidence | Reversible |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vercel | canonical `571s` Git integration | connected | NONE — keep connected | PASS | connected/unchanged | topology inventory | N/A |
| Vercel | `ranquel-tech-lab` Git integration | connected | human disconnect Git | PASS | disconnected; project/deployments retained | project post-state observed `2026-08-29T11:53:51Z` | yes — reconnect only under separate safe rollback authority |
| Vercel | `vfiu` Git integration | connected | human disconnect Git | PASS | disconnected; project/deployments retained | project post-state observed `2026-08-29T12:08:31Z` | yes — same constraint |
| Vercel | `teol` Git integration | connected | human disconnect Git | PASS | disconnected; project/deployments retained | project post-state observed `2026-08-29T12:19:38Z` | yes — same constraint |
| Vercel | `j56r` Git integration | connected | human disconnect Git | PASS | disconnected; project/deployments retained | project post-state observed `2026-08-29T12:26:52Z` | yes — same constraint |
| Google Apps Script | Script Property `SITE_URL` | value not runtime-proven | NONE — read-only human inspection | PASS | unchanged; canonical target proven | issue #28 comment `5463952679` | N/A |
| GitHub | PR #33 branch synchronization | head `1dc11bf...`; base `main=6629b573...`; branch behind main | human `Update branch` with merge commit | PASS | head `27ef0487...`; main incorporated; PR not merged | commit `27ef0487...` at `2026-08-29T17:37:23Z` | no direct rewind under no-force policy; merge commit retained in branch history |
| GitHub | PR #33 review state | Ready | human `Convert to draft` after post-Ready P2 findings | PASS | Draft; HEAD unchanged `2d590ca...` | PR metadata at `2026-08-29T21:28:18Z` | yes — later Ready requires a new human gate |

```yaml
EXTERNAL_PRODUCT_OR_PLATFORM_MUTATIONS: FOUR_VERCEL_GIT_DISCONNECTS_ONLY
GITHUB_ADMIN_MUTATIONS_RECORDED: true
DNS_MUTATIONS: ZERO
ENV_MUTATIONS: ZERO
PROJECT_OR_DEPLOYMENT_DELETIONS: ZERO
MANUAL_PRODUCTION_PROMOTIONS_OR_REDEPLOYS: ZERO
SEARCH_CONSOLE_MUTATIONS: ZERO
GA4_GTM_ADS_MUTATIONS: ZERO
ISSUE_24_EXECUTION: NOT_RUN
```

## Controlled topology evidence

The controlled post-disconnect trigger at `1dc11bf73121047271a6c6145ae30eb758baaf7b`
created one Vercel status/preview on canonical `571s` and zero new deployments on
the four disconnected projects.

After `main` advanced, the human-authorized `Update branch` produced
`27ef0487bf33d6b1cac214af53d65038ad0f9162`. That HEAD again produced exactly
one successful Vercel status and one canonical `READY`, `target=null` preview;
the four disconnected projects produced zero new deployments.

The pre-repair evidence HEAD `2d590ca9967e9bff914be7ff461de8e60891b8a8`
again produced exactly one successful Vercel context and canonical preview
`dpl_3ZXHCJYwiAJYj1y91qq4xxxYLbxk`, with zero duplicate deployments. Public
Home remained HTTP 200; safe `GET /api/daily/token` remained HTTP 401 `Missing
access`; public domains remained on `571s`.

## Required validation matrix

Connector-backed inspections use `N/A` where there is no shell process. The
staged-diff gate for this repair is executed in an isolated Git staging mirror
seeded from the exact pre-repair evidence file; the exact proposed bytes are then
sent through the GitHub Contents API and the committed branch diff is rechecked.
This does not pretend the connector exposes a native GitHub branch index.

| ID | Gate | Command / inspection sanitized | Exit code | Estado | Resultado observado | Evidencia | Limitación |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| V-001 | Preflight | GitHub PR metadata + compare `main...branch` | N/A | PASS | PR #33 open Draft; pre-repair HEAD `2d590ca...`; ahead 5 / behind 0 | PR metadata/compare | Connected inspection, not a native local checkout |
| V-002 | Diff | GitHub compare + proposed-file diff inspection | N/A | PASS | one allowed evidence path; no product/runtime/workflow path | PR compare + local mirror | Native `git diff --check` on GitHub branch unavailable |
| V-003 | Staged diff | isolated mirror: `git add docs/evidence/issue-28-vercel-topology.md && git diff --cached --check` | 0 | PASS | proposed exact evidence file staged cleanly | local staging mirror tied to pre-repair file bytes | Synthetic staging mirror because Contents API has no user-controlled index; committed diff rechecked after write |
| V-004 | Scope | exact changed-file comparison | N/A | PASS | only `docs/evidence/issue-28-vercel-topology.md` | PR compare | Recheck after commit |
| V-005 | Secrets/privacy | evidence-content inspection | N/A | PASS | no secret values/PII; only public `SITE_URL` recorded | this manifest | Does not claim external credentials were rotated |
| V-006 | Focal topology | Vercel deployment/status inspection | N/A | PASS | pre-repair HEAD: one canonical preview/status; zero duplicate deployments | `dpl_3ZX...` + project inventories | New-head check repeated after commit |
| V-007 | Surface gates | domains + Home + safe API + D01-D12 matrix | N/A | PASS | domains canonical; Home 200; API 401 expected; required disciplines selected | external observations + matrix above | D12 final audit is separately NOT_RUN until new HEAD exists |
| V-008 | Preview exact-head | pre-repair preview `dpl_3ZXHCJYwiAJYj1y91qq4xxxYLbxk` | N/A | PASS | READY, target=null, PR #33, HEAD `2d590ca...` | Vercel metadata | New commit gets a new exact-head preview check in PR evidence |
| V-009 | CI exact-head | GitHub Actions workflow runs | N/A | CAPABILITY_GAP | executable harness CI is not implemented yet | issue #24 ownership + zero applicable workflow runs | Explicitly accepted only by `RANQUEL-TOPOLOGY-BOOTSTRAP-002`; never PASS |
| V-010 | External consumer | live Apps Script Script Property `SITE_URL` read-only | N/A | PASS | canonical `https://ranquel-tech-lab-571s.vercel.app` | issue #28 comment `5463952679` | No other property value recorded |
| V-011 | Rollback | reconnect one noncanonical Git integration and restore disconnected state | N/A | NOT_RUN | procedure documented, deliberately not exercised blindly | issue #28 / Vercel docs | Explicitly accepted only by bootstrap exception; never PASS |
| V-012 | Merge/deploy authorization | human gate | N/A | AUTH_BLOCKED | merge and expected production deployment are not authorized | PR #33 / human instructions | Separate future authorization required |
| V-013 | Independent audit | Codex exact-head read-only review | N/A | NOT_RUN | new commit does not exist yet | request after commit + preview verification | Writer cannot self-approve D12 |
| V-014 | D01-D12 selection | interdisciplinary matrix mapping | N/A | PASS | D01-D06,D08,D10-D12 material; D07,D09 justified N/A | matrix above | Individual D12 audit remains NOT_RUN until exact HEAD exists |
| V-015 | GitHub administrative ledger | branch sync + PR state mutation inventory | N/A | PASS | `Update branch` and Draft transition recorded with before/after/evidence | mutation ledger | No branch rewind/force operation used |

## Bootstrap exception — human authorized

The following is volatile execution evidence, not a stable truth owner:

```text
BOOTSTRAP_EXCEPTION_ID=RANQUEL-TOPOLOGY-BOOTSTRAP-002
APPLIES_TO=ISSUE_28_AND_PR_33_ONLY
AUTHORIZATION_CONTEXT_HEAD=2d590ca9967e9bff914be7ff461de8e60891b8a8
CI_EXACT_HEAD=CAPABILITY_GAP
ROLLBACK_TEST=NOT_RUN
NON_PASS_STATES_REMAIN_NON_PASS=YES
ACCEPTED_FOR_THIS_BOOTSTRAP_CLOSEOUT_ONLY=YES
REUSABLE=NO
EXPIRES_WHEN=ISSUE_24_IMPLEMENTS_THE_CI_HARNESS
INDEPENDENT_VALIDATION_GRANTED_BY_EXCEPTION=NO
MERGE_AUTHORIZED=NO
EXPECTED_PRODUCTION_DEPLOYMENT_AUTHORIZED=NO
ISSUE_28_CLOSE_AUTHORIZED=NO
ISSUE_24_EXECUTION_AUTHORIZED=NO
AUTHORIZATION_RECORDED_AT_UTC=2026-08-29T18:51:43Z
AUTHORIZATION_REFERENCE=issue_28_comment_5464226350
```

The exception resolves only the bootstrap dependency cycle. It does not hide or
rename the two accepted non-PASS states and does not extend to staged diff,
interdisciplinary review, independent audit, Ready, merge, production deployment
or issue closure.

## CRITICAL gate aggregation

```text
RISK=CRITICAL
TOPOLOGY_REGRESSION_FOR_AFFECTED_SURFACES=PASS
D01_D12_SELECTION=PASS
STAGED_DIFF=PASS
STAGED_DIFF_LIMITATION=SYNTHETIC_ONE_PATH_INDEX_MIRROR_BECAUSE_GITHUB_CONTENTS_API_HAS_NO_USER_CONTROLLED_STAGE
APPS_SCRIPT_CONSUMER_VERIFICATION=PASS
PRE_REPAIR_PREVIEW_TOPOLOGY=PASS
CI_EXACT_HEAD=CAPABILITY_GAP
ROLLBACK_TEST=NOT_RUN
NEW_REPAIR_HEAD_PREVIEW=NOT_RUN
NEW_REPAIR_HEAD_INDEPENDENT_AUDIT=NOT_RUN
MERGE_AND_EXPECTED_PRODUCTION_DEPLOYMENT=AUTH_BLOCKED
OVERALL_VALIDATION_RESULT=CAPABILITY_GAP
```

`CAPABILITY_GAP` is the global result because the required CI capability is
structurally absent and the canonical aggregation rules forbid collapsing it to
`BLOCKED` or `PARTIAL`. `NOT_RUN` rollback and audit states remain visible
separately. The bootstrap exception permits human-governed progression despite
CI/rollback remaining non-PASS; it does not change this result.

## Rollback

Least-destructive rollback remains: reconnect the same GitHub repository only on
the affected noncanonical Vercel project, verify project/domain state, then stop
and re-audit. No domain movement, secret movement, project deletion or production
promotion belongs to rollback.

```yaml
ROLLBACK:
  PLAN: "Reconnect the same GitHub repository on the affected noncanonical project only."
  HUMAN_BOOTSTRAP_EXCEPTION: RANQUEL-TOPOLOGY-BOOTSTRAP-002
  TESTED: false
  VERIFICATION_STATE: NOT_RUN
  NON_PASS_STATE_PRESERVED: true
```

## Merge-induced production deployment gate

Canonical `571s` keeps Git connected and `main` is its Production Branch.
Merging PR #33 is therefore expected to create a Git-triggered production
deployment even though the PR diff is documentation-only.

```text
MERGE_EXPECTED_TO_TRIGGER_PRODUCTION_DEPLOYMENT=YES
MERGE_AUTHORIZED=NO
EXPECTED_PRODUCTION_DEPLOYMENT_AUTHORIZED=NO
MERGE_GATE=AUTH_BLOCKED
POST_MERGE_REQUIRED=verify integrated SHA + production deployment SHA + domains + Home 200 + safe API 401
```

A later merge authorization must explicitly acknowledge both the merge and this
expected Vercel production deployment.

## Writer declaration

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: partial
  ZERO_PRODUCT_CHANGES_IN_PR_DIFF: true
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: true
  FINAL_VALIDATION_RESULT: CAPABILITY_GAP
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  READY_DECISION_OWNER: human
  MERGE_DECISION_OWNER: human
  PRODUCTION_DEPLOY_DECISION_OWNER: human
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: human after post-merge acceptance
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
```

After this commit exists, verify the concrete HEAD, exactly one canonical preview,
zero duplicate deployments, public Home/API/domain guards, and then request a
fresh independent read-only audit. Do not mark Ready, merge, deploy production,
close #28 or execute #24 without the corresponding later human gate.
