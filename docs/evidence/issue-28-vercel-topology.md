# Issue #28 — Vercel topology evidence and mutation plan

Status: `CURRENT_IN_PROGRESS`

Owner: GitHub issue #28 (execution evidence; not a stable truth owner)

This document is the exact-branch evidence manifest for issue #28. It records
sanitized observations and the proposed reversible mutation plan. It does not
contain secret values and does not authorize Vercel mutation by itself.

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
    - "production commit remains unchanged during the external mutation"
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
    - "public domains and production deployment are unchanged"
    - "Home and safe API smoke checks pass"
    - "independent post-change audit passes"
```

## EVIDENCE_MANIFEST

```yaml
EVIDENCE_MANIFEST:
  MANIFEST_VERSION: RANQUEL_EVIDENCE_MANIFEST_V1
  ISSUE: "#28"
  PARENT: "#2"
  PR: NOT_CREATED
  PR_ISSUE_REFERENCE: "Refs #28"
  REPOSITORY: "cabaniasriocuarto/RanquelTechLab"
  BASE_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  HEAD: "PENDING_THIS_COMMIT"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  WRITER: "ChatGPT / Vercel+GitHub connected session"
  RECORDED_AT_UTC: "2026-08-29"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md"
  OVERALL_VALIDATION_RESULT: BLOCKED
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

`OVERALL_VALIDATION_RESULT=BLOCKED` is intentional: the read-only inventory is
complete, but Vercel mutation remains blocked until a distinct exact-head auditor
returns PASS on the plan.

## Baseline and preflight

```yaml
BASELINE:
  DEFAULT_BRANCH: main
  ORIGIN_MAIN_SHA: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  BRANCH_HEAD_BEFORE_THIS_RECORD: "3a6aac9ebaa434721d997b712434a8f03a2a4514"
  RELATION_TO_ORIGIN_MAIN: "ahead 0 / behind 0 before evidence commit"
  ACTIVE_GIT_OPERATIONS: NONE_OBSERVED_BY_GITHUB_BRANCH_STATE
  ISSUE_3: CLOSED_COMPLETED
  ISSUE_24_EXECUTION: NOT_RUN
```

## Changed surfaces and interdisciplinary review

- `S01 — documentation/evidence`: this manifest only; D02, D06, D11 and D12 are
  material for the repository diff.
- `S02 — external deploy/configuration plan`: Vercel Git-integration mutation is
  planned but not yet executed; D01, D02, D03, D04, D05, D08, D10, D11 and D12
  are material under the deploy/publication row of the review matrix.
- D07 and D09 are `NOT_APPLICABLE`: no public message/CTA, campaign, Ads setting,
  spend or conversion definition changes.

## Read-only Vercel inventory

All five projects are in team `Ranquel Tech Lab` and are linked to GitHub repo
`cabaniasriocuarto/RanquelTechLab`. All observed current production deployments
for the issue #3 merge point to commit
`3a6aac9ebaa434721d997b712434a8f03a2a4514`.

| Project | Project ID | Public custom domain | Production branch | App env key names observed | Automation bypass | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| `ranquel-tech-lab-571s` | `prj_tKwBi0KEzVG18kqYPjUupVmUgNry` | `ranquel.com.ar`, `www.ranquel.com.ar` | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | present/masked | CANONICAL |
| `ranquel-tech-lab` | `prj_tAsnytLpt5720qnbl7IcMsCUApA5` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | absent | NONCANONICAL_CANDIDATE |
| `ranquel-tech-lab-vfiu` | `prj_WxzsWmVhMoBvrxm1u81hHuASEtcG` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | absent | NONCANONICAL_CANDIDATE |
| `ranquel-tech-lab-teol` | `prj_gGzQXKs3qUoO23tM103VjCog0d9q` | none | `main` | none | absent | NONCANONICAL_CANDIDATE |
| `ranquel-tech-lab-j56r` | `prj_MbREFjWvS7QmCAupqvuD9PuB5ERm` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | absent | NONCANONICAL_CANDIDATE |

No secret value was read or recorded. `SITE_URL` is optional in
`api/access/create.js`; when absent, that endpoint falls back to the request
host. Therefore its presence in `vfiu` and `j56r` is not observed as unique
required configuration.

### Common project settings observed

Across the audited projects, the relevant common settings are:

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

- Public Home on `https://www.ranquel.com.ar/`: HTTP 200.
- Canonical `/api/daily/token` without an `access` parameter: HTTP 401 with
  `Missing access`, a safe negative-path response consistent with critical env
  keys being present.
- `ranquel-tech-lab-teol` `/api/daily/token` without access: HTTP 500 with
  `Missing DAILY_API_KEY env var`, consistent with its project env inventory.

No state-changing API request was used for these smoke checks.

## Gate before external mutation

```text
CANONICAL_PROJECT_PROVEN=YES
CUSTOM_DOMAIN_OWNER_UNAMBIGUOUS=YES
PRODUCTION_SHA_AND_DEPLOYMENT_CAPTURED=YES
API_ENV_KEY_NAMES_INVENTORIED=YES
NON_CANONICAL_UNIQUE_REQUIRED_CONFIG=NO_REQUIRED_UNIQUE_CONFIG_OBSERVED
ROLLBACK_PLAN=PASS_DOCUMENTED_NOT_TESTED
INDEPENDENT_AUDIT_OF_PLAN=PENDING

VERCEL_MUTATION=NOT_RUN
MUTATION_GATE=BLOCKED_PENDING_INDEPENDENT_AUDIT
```

## Proposed Phase B mutation

After and only after `INDEPENDENT_AUDIT_OF_PLAN=PASS` on the exact PR HEAD:

1. Keep `ranquel-tech-lab-571s` connected to GitHub.
2. In Settings → Git, use `Disconnect` only on:
   - `ranquel-tech-lab`;
   - `ranquel-tech-lab-vfiu`;
   - `ranquel-tech-lab-teol`;
   - `ranquel-tech-lab-j56r`.
3. Do not change any other Vercel setting during this mutation.
4. Do not delete or pause any project or deployment.
5. Do not edit domain/DNS/alias configuration.
6. Do not edit or copy environment-variable values.
7. Do not trigger a production redeploy or promotion.

The disconnect operation is selected because it stops Git-triggered deployments
without deleting the project, its existing deployments, env configuration or
Vercel URLs.

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

## Required post-change validation

After the four disconnects, create one controlled documentation-only commit on
this same #28 branch and verify:

- exactly one new Vercel preview deployment, on `ranquel-tech-lab-571s`;
- zero new deployments on the four disconnected projects;
- GitHub exposes one Vercel project/status context for the new HEAD where the
  integration behavior allows it;
- `ranquel.com.ar` and `www.ranquel.com.ar` still belong to the canonical project;
- canonical production deployment/commit did not change as a consequence of the
  disconnect operation;
- public Home still returns 200;
- canonical `/api/daily/token` negative-path smoke still returns 401 `Missing access`;
- no project/deployment/domain/env value was deleted or changed.

Then request a second independent read-only audit of the post-change topology.

## External mutation ledger

| System | Resource | State before | Operation authorized by issue | Result | State after | Reversible |
| --- | --- | --- | --- | --- | --- | --- |
| Vercel | canonical `571s` Git integration | connected | keep connected | NOT_RUN | unchanged | N/A |
| Vercel | `ranquel-tech-lab` Git integration | connected | disconnect after audit PASS | NOT_RUN | connected | yes, reconnect |
| Vercel | `vfiu` Git integration | connected | disconnect after audit PASS | NOT_RUN | connected | yes, reconnect |
| Vercel | `teol` Git integration | connected | disconnect after audit PASS | NOT_RUN | connected | yes, reconnect |
| Vercel | `j56r` Git integration | connected | disconnect after audit PASS | NOT_RUN | connected | yes, reconnect |

```yaml
EXTERNAL_PRODUCT_OR_PLATFORM_MUTATIONS: ZERO
VERCEL_MUTATIONS: ZERO
DNS_MUTATIONS: ZERO
SEARCH_CONSOLE_MUTATIONS: ZERO
GA4_GTM_ADS_MUTATIONS: ZERO
```

## Writer declaration

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: partial
  ZERO_PRODUCT_CHANGES: true
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: true
  FINAL_VALIDATION_RESULT: BLOCKED
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  AUDIT_REQUESTED: true
  READY_DECISION_OWNER: human
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: human after post-change acceptance
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
```

Current blocker: independent exact-head plan audit has not yet returned PASS.
