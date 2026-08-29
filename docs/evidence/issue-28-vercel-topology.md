# Issue #28 — Vercel topology evidence and mutation record

Status: `CURRENT_IN_PROGRESS`

Owner: GitHub issue #28 (execution evidence; not a stable truth owner)

This document is the exact-branch evidence manifest for issue #28. It records
sanitized observations, the independently reviewed mutation plan and the four
human-executed Git disconnects. It contains no secret values.

Volatile post-trigger HEADs, Vercel deployment IDs and final exact-head results
are recorded in PR #33 / issue #28 after the controlled trigger commit. Keeping
those values in the PR avoids a self-mutating evidence loop where recording a
preview result would itself create another preview.

## TASK_CONTRACT

```yaml
TASK_CONTRACT:
  ISSUE: "#28"
  PARENT: "#2"
  OBJECTIVE: "Consolidate five Vercel Git integrations to one proven canonical project without changing production, domains, DNS, env values or product code."
  BASE_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  RISK: HIGH
  ALLOWED_PATHS:
    - "docs/evidence/issue-28-vercel-topology.md"
  ALLOWED_EXTERNAL_SYSTEMS:
    - "Vercel read-only inventory"
    - "After independent audit PASS only: disconnect Git integration on four proven noncanonical projects"
  FORBIDDEN:
    - "delete or pause Vercel projects"
    - "delete deployments"
    - "move or edit domains/DNS"
    - "edit environment-variable names or values"
    - "promote or redeploy production"
    - "change framework/build settings"
    - "change public HTML/CSS/JS/API code"
    - "execute issue #24"
  PRESERVED_CONTRACTS:
    - "www.ranquel.com.ar and ranquel.com.ar remain on the canonical project"
    - "production content remains unchanged by the Git disconnects"
    - "historical deployments remain intact"
    - "rollback is reconnecting the same Git repository on an affected noncanonical project"
  STOP_CONDITIONS:
    - "canonical ownership becomes ambiguous"
    - "a noncanonical project contains unique required configuration"
    - "domain or production deployment changes"
    - "Home or safe API smoke check regresses"
    - "mutation would require deleting, moving secrets, changing DNS or redeploying production"
    - "independent plan audit is not PASS"
  DEFINITION_OF_DONE:
    - "exactly one Vercel project creates a preview for the controlled validation HEAD"
    - "four disconnected projects create zero new deployments"
    - "public domains and production content are unchanged"
    - "Home and safe API smoke checks pass"
    - "independent post-change audit passes"
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
  BASE_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  HEAD: "RESOLVED_IN_PR_33_FOR_CONTROLLED_TRIGGER"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  WRITER: "ChatGPT / Vercel+GitHub connected session"
  RECORDED_AT_UTC: "2026-08-29"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md"
  OVERALL_VALIDATION_RESULT: PARTIAL
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

`OVERALL_VALIDATION_RESULT=PARTIAL` is intentional. The plan audit passed and
all four authorized Git disconnects have been executed and individually checked.
The remaining gates are the controlled one-preview trigger and independent
post-change audit.

## Baseline and preflight

```yaml
BASELINE:
  DEFAULT_BRANCH: main
  ORIGIN_MAIN_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  BRANCH_HEAD_BEFORE_EVIDENCE_WORK: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  RELATION_TO_ORIGIN_MAIN_AT_START: "ahead 0 / behind 0"
  ACTIVE_GIT_OPERATIONS: NONE_OBSERVED_BY_GITHUB_BRANCH_STATE
  ISSUE_3: CLOSED_COMPLETED
  ISSUE_24_EXECUTION: NOT_RUN
```

## Changed surfaces and interdisciplinary review

- `S01 — documentation/evidence`: this manifest only; D02, D06, D11 and D12 are
  material for the repository diff.
- `S02 — external deploy/configuration`: Vercel Git integration was changed only
  on four proven noncanonical projects; D01, D02, D03, D04, D05, D08, D10, D11
  and D12 are material under the deploy/publication row of the review matrix.
- D07 and D09 are `NOT_APPLICABLE`: no public message/CTA, campaign, Ads setting,
  spend or conversion definition changed.

## Read-only Vercel inventory

Five Vercel projects were linked to GitHub repo
`cabaniasriocuarto/RanquelTechLab` before Phase B. The canonical public project
was proven before mutation.

| Project | Project ID | Public custom domain | Production branch | App env key names observed | Automation bypass | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| `ranquel-tech-lab-571s` | `prj_tKwBi0KEzVG18kqYPjUupVmUgNry` | `ranquel.com.ar`, `www.ranquel.com.ar` | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | present/masked | CANONICAL |
| `ranquel-tech-lab` | `prj_tAsnytLpt5720qnbl7IcMsCUApA5` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | absent | NONCANONICAL |
| `ranquel-tech-lab-vfiu` | `prj_WxzsWmVhMoBvrxm1u81hHuASEtcG` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | absent | NONCANONICAL |
| `ranquel-tech-lab-teol` | `prj_gGzQXKs3qUoO23tM103VjCog0d9q` | none | `main` | none | absent | NONCANONICAL |
| `ranquel-tech-lab-j56r` | `prj_MbREFjWvS7QmCAupqvuD9PuB5ERm` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | absent | NONCANONICAL |

No secret value was read or recorded. `SITE_URL` is optional in
`api/access/create.js`; when absent, that endpoint falls back to the request
host. Therefore its presence in `vfiu` and `j56r` was not required unique
configuration.

### Common project settings observed

Across the audited projects, the relevant common settings were:

- Git repository: `cabaniasriocuarto/RanquelTechLab`;
- Production branch: `main`;
- Preview branch tracking: all unassigned Git branches;
- framework preset: `Other`;
- root directory: `./`;
- custom build/install/output/development command overrides: disabled;
- Ignored Build Step: `Automatic`;
- Node.js: `24.x`;
- build machine: Basic;
- Deployment Checks: none configured;
- Rolling Releases: disabled;
- Prioritize Production Builds: enabled;
- deployment retention observed: 30 days;
- Vercel Authentication: Standard Protection;
- Password Protection: disabled;
- Trusted IPs: disabled;
- OPTIONS allowlist: disabled;
- Protected Sourcemaps: disabled.

Only the canonical project was observed with a configured
`Protection Bypass for Automation` secret; its value was never exposed.

## Safe runtime observations

Before mutation:

- public Home on `https://www.ranquel.com.ar/`: HTTP 200;
- canonical `/api/daily/token` without an `access` parameter: HTTP 401 with
  `Missing access`;
- `ranquel-tech-lab-teol` `/api/daily/token` without access: HTTP 500 with
  `Missing DAILY_API_KEY env var`, consistent with its empty project env inventory.

During Phase B, after each disconnect, the canonical project remained present,
its public custom domains remained attached, the public Home continued to return
HTTP 200 and the safe API negative path remained HTTP 401 when checked.

No state-changing application API request was used for smoke checks.

## Plan audit gate

Codex reviewed PR #33 exact HEAD
`4a69e7614abf2e212f52fb33b21a4a8981682c9b` read-only and reported no material
issues. No review threads were opened.

```text
CANONICAL_PROJECT_PROVEN=YES
CUSTOM_DOMAIN_OWNER_UNAMBIGUOUS=YES
PRODUCTION_SHA_AND_DEPLOYMENT_CAPTURED=YES
API_ENV_KEY_NAMES_INVENTORIED=YES
NON_CANONICAL_UNIQUE_REQUIRED_CONFIG=NO_REQUIRED_UNIQUE_CONFIG_OBSERVED
ROLLBACK_PLAN=PASS_DOCUMENTED_NOT_TESTED
INDEPENDENT_AUDIT_OF_PLAN=PASS_EXACT_HEAD

MUTATION_GATE=PASS_FOR_HUMAN_CONTROLLED_PHASE_B
```

## Phase B mutation executed

The human operator used Vercel **Settings → Git → Disconnect / Remove
Connection** one project at a time, with verification between steps.

Executed order:

1. `ranquel-tech-lab`;
2. `ranquel-tech-lab-vfiu`;
3. `ranquel-tech-lab-teol`;
4. `ranquel-tech-lab-j56r`.

The canonical `ranquel-tech-lab-571s` Git connection was not changed.

No project was deleted or paused. No deployment was deleted. No domain/DNS,
environment variable, framework/build setting, production promotion or manual
redeploy was performed.

## External mutation ledger

| System | Resource | State before | Authorized operation | Result | State after | Reversible |
| --- | --- | --- | --- | --- | --- | --- |
| Vercel | canonical `571s` Git integration | connected | keep connected | PASS | connected/unchanged | N/A |
| Vercel | `ranquel-tech-lab` Git integration | connected | disconnect | PASS | disconnected; project/deployment retained | yes, reconnect |
| Vercel | `vfiu` Git integration | connected | disconnect | PASS | disconnected; project/deployment retained | yes, reconnect |
| Vercel | `teol` Git integration | connected | disconnect | PASS | disconnected; project/deployment retained | yes, reconnect |
| Vercel | `j56r` Git integration | connected | disconnect | PASS | disconnected; project/deployment retained | yes, reconnect |

```yaml
EXTERNAL_PRODUCT_OR_PLATFORM_MUTATIONS: FOUR_VERCEL_GIT_DISCONNECTS_ONLY
VERCEL_MUTATIONS: FOUR_AUTHORIZED_GIT_DISCONNECTS
DNS_MUTATIONS: ZERO
ENV_MUTATIONS: ZERO
PROJECT_OR_DEPLOYMENT_DELETIONS: ZERO
PRODUCTION_PROMOTIONS_OR_REDEPLOYS: ZERO
SEARCH_CONSOLE_MUTATIONS: ZERO
GA4_GTM_ADS_MUTATIONS: ZERO
```

## Rollback

If post-change validation finds an unexpected regression attributable to a Git
disconnect, reconnect the same GitHub repository only on the affected project,
then stop and re-audit. Domain movement, secret movement and production
promotion are not part of rollback.

```yaml
ROLLBACK:
  PLAN: "Reconnect the same Git repository on the affected project only."
  VERIFIED: false
  VERIFICATION_STATE: NOT_RUN
```

Rollback was not executed because no regression was observed during the four
stepwise disconnect checks.

## Controlled post-change trigger

The commit containing this updated manifest is the planned documentation-only
trigger. Resolve its exact SHA from PR #33 and verify in the PR/issue evidence:

- exactly one new Vercel preview/status for `ranquel-tech-lab-571s`;
- zero new deployments on the four disconnected projects;
- public custom domains remain on `571s`;
- public Home remains HTTP 200;
- canonical `/api/daily/token` safe negative path remains HTTP 401 `Missing access`;
- no project/deployment/domain/env value was deleted or changed.

The volatile deployment IDs and exact trigger HEAD belong in PR #33 / issue #28,
not in a follow-up repository edit.

After those checks, request a second independent read-only audit of the exact
post-change HEAD and topology.

## Writer declaration

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: partial
  ZERO_PRODUCT_CHANGES: true
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: true
  FINAL_VALIDATION_RESULT: PARTIAL
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  AUDIT_REQUESTED: true
  READY_DECISION_OWNER: human
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: human after post-change acceptance
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
```

Remaining gates: controlled one-preview validation and independent exact-head
post-change audit.
