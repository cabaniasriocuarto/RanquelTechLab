# Issue #28 — Vercel topology evidence and mutation record

Status: `CURRENT_IN_PROGRESS`

Owner: GitHub issue #28 (execution evidence; not a stable truth owner)

This document records sanitized execution evidence for issue #28. It preserves
historical authorization and independent-audit evidence, the four human-executed
Vercel Git disconnects, current topology checks, GitHub administrative mutations,
interdisciplinary review state, and the human bootstrap exception. It contains
no secret values.

## Exact-head binding rule

A Git commit cannot embed its own not-yet-created SHA without a self-reference
loop. Therefore:

```text
MANIFEST_HEAD_BINDING=COMMIT_CONTAINING_THIS_MANIFEST
CONCRETE_HEAD_VALUE=PR_33_METADATA_OR_TOP_LEVEL_EVIDENCE_COMMENT_AFTER_COMMIT
POST_COMMIT_EXACT_HEAD_EVIDENCE=PR_33_VOLATILE_EXECUTION_EVIDENCE
```

The concrete post-commit SHA, Vercel preview, viewport checks, human credential
comparison and independent audit are recorded in PR #33 without back-writing the
SHA into this file.

## TASK_CONTRACT

This block follows `docs/harness/TASK_CONTRACT_TEMPLATE.md`. Because issue #28
predates the finalized template, historical authority is reconstructed from the
actual issue/PR evidence; that reconstruction is traceability, not a claim that
this exact YAML existed before the historical mutations.

```yaml
TASK_CONTRACT:
  CONTRACT_VERSION: RANQUEL_TASK_CONTRACT_V1
  ISSUE: "#28"
  PARENT: "#2"
  DEPENDENCIES:
    - "#3 — completed prerequisite"
    - "#24 — executable CI/harness owner; execution not authorized by #28"
  WRITER_ROLE: "ChatGPT writer using GitHub/Vercel connected tools"

  1_OBJECTIVE:
    SEMANTIC_OUTCOME: "Reduce five duplicate Vercel Git integrations to one proven canonical Git-connected project while preserving domains, runtime behavior, historical deployments and rollback availability."
    SUCCESS_BOUNDARY: "Only ranquel-tech-lab-571s remains Git-connected; controlled branch HEADs create one canonical preview and zero duplicate deployments; no project/deployment/domain/DNS/env deletion or mutation is introduced by this repair."

  2_BASELINE_OBSERVED:
    REPOSITORY: "cabaniasriocuarto/RanquelTechLab"
    DEFAULT_BRANCH: main
    BASE_SHA: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
    HEAD: "1c66ecc778883081672779f3a4b7f6e994365521"
    BRANCH: "ops/issue-28-vercel-topology-consolidation"
    GIT_STATUS: "Isolated exact-file writer worktree clean before proposed repair; repository-wide PR diff independently shows one changed evidence path."
    RELATION_TO_ORIGIN_MAIN: "ahead 7 / behind 0 at repair start"
    ACTIVE_GIT_OPERATIONS:
      MERGE: false
      REBASE: false
      CHERRY_PICK: false
      REVERT: false
      BISECT: false
    APPLICABLE_AGENTS:
      - "AGENTS.md"
      - "docs/AGENTS.md"
    DOCUMENT_OWNERS:
      - SURFACE: "validation/evidence structure"
        OWNER: "docs/harness/EVIDENCE_MANIFEST_TEMPLATE.md"
      - SURFACE: "task contract structure"
        OWNER: "docs/harness/TASK_CONTRACT_TEMPLATE.md"
      - SURFACE: "interdisciplinary materiality"
        OWNER: "docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"
      - SURFACE: "validation result vocabulary"
        OWNER: "docs/truth/SOURCE_OF_TRUTH.md"
    OBSERVED_IMPLEMENTATION:
      - "PR #33 changes only docs/evidence/issue-28-vercel-topology.md"
      - "canonical Vercel project is ranquel-tech-lab-571s"
      - "four noncanonical projects are Git-disconnected and preserved"
      - "Apps Script SITE_URL runtime property targets canonical 571s"
    READ_ONLY_CONTEXT:
      - "Vercel project/deployment/status metadata"
      - "GitHub issue/PR/commit/review metadata"
      - "Google Apps Script human-observed Script Properties"
    UNKNOWNS:
      - "Apps Script ADMIN_KEY ↔ Vercel ACCESS_ADMIN_KEY equality is not yet verified in recorded evidence"
      - "new repair HEAD desktop/mobile visual validation occurs only after the new preview exists"

  3_OUT_OF_SCOPE:
    - "product/runtime code changes"
    - "Vercel project/deployment deletion or pause"
    - "domain/DNS/alias movement"
    - "environment-variable value edits or rotations"
    - "Google Apps Script source/property mutation"
    - "issue #24 execution"
    - "merge or production deployment without later explicit human authorization"

  4_ALLOWED_PATHS:
    PATHS:
      - "docs/evidence/issue-28-vercel-topology.md"
    ALLOWED_SYMBOLS:
      - "evidence, TASK_CONTRACT, validation matrix, mutation ledger and gate-state sections only"

  5_FORBIDDEN_PATHS:
    - "all product HTML/CSS/JS/API paths"
    - ".github/workflows/** under issue #28"
    - "apps-script/** mutation"
    - "vercel.json mutation"

  6_EXTERNAL_SYSTEMS_ALLOWED:
    - SYSTEM: "GitHub"
      ACCESS: MUTATION_EXPLICITLY_AUTHORIZED
      OPERATIONS:
        - "read PR/issue/review/commit/status evidence"
        - "update the one allowed evidence file on the issue branch"
        - "human Convert to draft / Ready only when separately authorized"
      AUTHORITY: "issue #28 lifecycle + current human instruction"
    - SYSTEM: "Vercel"
      ACCESS: READ_ONLY
      OPERATIONS:
        - "read project/deployment/status/protection evidence"
        - "fetch protected preview for non-destructive validation"
      AUTHORITY: "issue #28 evidence validation"
    - SYSTEM: "Vercel historical Phase B"
      ACCESS: MUTATION_EXPLICITLY_AUTHORIZED
      OPERATIONS:
        - "exactly four historical Git disconnects on noncanonical projects, one at a time"
      AUTHORITY: "issue #28 + independent plan audit comment 5462252475 on exact HEAD 4a69e7614abf2e212f52fb33b21a4a8981682c9b"
    - SYSTEM: "Google Apps Script"
      ACCESS: READ_ONLY
      OPERATIONS:
        - "human inspection of SITE_URL and credential-key correspondence without recording values"
      AUTHORITY: "issue #28 consumer verification"

  7_EXTERNAL_SYSTEMS_FORBIDDEN:
    - "new Vercel mutations during this repair"
    - "DNS/domain/env/project/deployment mutation"
    - "Apps Script mutation or secret disclosure"
    - "Search Console, GA4, GTM or Ads mutation"

  8_CHANGED_SURFACES:
    CANONICAL_OWNER: "docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"
    SURFACE_INVENTORY:
      - SURFACE_ID: S01
        EFFECT: "documentation/evidence reconciliation"
        PATHS_OR_SYMBOLS: ["docs/evidence/issue-28-vercel-topology.md"]
        MATRIX_ROWS: ["Documentation/routers without product truth"]
        DOMAIN_OWNERS: ["docs/harness/EVIDENCE_MANIFEST_TEMPLATE.md", "docs/harness/TASK_CONTRACT_TEMPLATE.md"]
      - SURFACE_ID: S02
        EFFECT: "historical external Vercel configuration mutation"
        PATHS_OR_SYMBOLS: ["four noncanonical Vercel Git integrations"]
        MATRIX_ROWS: ["Deploy, DNS or publication"]
        DOMAIN_OWNERS: ["docs/truth/QUALITY_GATES.md"]
      - SURFACE_ID: S03
        EFFECT: "external Apps Script → API consumer trust relationship"
        PATHS_OR_SYMBOLS: ["SITE_URL", "ADMIN_KEY", "ACCESS_ADMIN_KEY", "/api/access/create"]
        MATRIX_ROWS: ["API, form or input", "Deploy, DNS or publication"]
        DOMAIN_OWNERS: ["docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"]
      - SURFACE_ID: S04
        EFFECT: "future merge-induced production deployment lifecycle"
        PATHS_OR_SYMBOLS: ["main", "canonical Vercel production branch"]
        MATRIX_ROWS: ["Deploy, DNS or publication"]
        DOMAIN_OWNERS: ["docs/truth/QUALITY_GATES.md"]
    DISCIPLINES:
      - {DISCIPLINE_ID: D01, DISCIPLINE_NAME: "Producto, negocio y estrategia comercial", ACTIVATED_BY_SURFACES: [S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "canonical production ownership", CONTRACT_AND_ACCEPTANCE: "preserve public service", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "topology + human authority", REVIEWER_OR_AUTHORITY: "human owner", STOP_CONDITION: "public ownership ambiguity"}
      - {DISCIPLINE_ID: D02, DISCIPLINE_NAME: "Arquitectura de software e información", ACTIVATED_BY_SURFACES: [S01,S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "ownership/dependencies", CONTRACT_AND_ACCEPTANCE: "single canonical project", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "topology + consumer relation", REVIEWER_OR_AUTHORITY: "writer + independent auditor", STOP_CONDITION: "duplicate truth/ownership"}
      - {DISCIPLINE_ID: D03, DISCIPLINE_NAME: "Frontend, UX responsive y diseño", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "deployment/publication can regress rendered journey", CONTRACT_AND_ACCEPTANCE: "exact-head desktop/mobile journey", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "desktop + mobile preview validation", REVIEWER_OR_AUTHORITY: "human/tool-assisted visual reviewer", STOP_CONDITION: "render/navigation regression"}
      - {DISCIPLINE_ID: D04, DISCIPLINE_NAME: "Accesibilidad", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "publication guard", CONTRACT_AND_ACCEPTANCE: "no rendered accessibility delta", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "unchanged product paths + visual guard", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "accessibility regression"}
      - {DISCIPLINE_ID: D05, DISCIPLINE_NAME: "SEO técnico y SEO local", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "canonical/domain ownership", CONTRACT_AND_ACCEPTANCE: "Home/canonical preserved", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "domain + canonical guard", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "canonical/indexation ownership changes"}
      - {DISCIPLINE_ID: D06, DISCIPLINE_NAME: "Contenido, comunicación y marca", ACTIVATED_BY_SURFACES: [S01], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "evidence wording", CONTRACT_AND_ACCEPTANCE: "factual/sanitized record", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "content review", REVIEWER_OR_AUTHORITY: "writer", STOP_CONDITION: "unsupported claim/secret"}
      - {DISCIPLINE_ID: D07, DISCIPLINE_NAME: "Marketing y CRO", ACTIVATED_BY_SURFACES: [], MATERIALITY: NOT_APPLICABLE, ACTIVATING_EFFECT: "no CTA/funnel/campaign change", CONTRACT_AND_ACCEPTANCE: "N/A", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "justification", REVIEWER_OR_AUTHORITY: "writer", STOP_CONDITION: "marketing surface appears"}
      - {DISCIPLINE_ID: D08, DISCIPLINE_NAME: "GA4, GTM, atribución y conversiones", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "publication guard", CONTRACT_AND_ACCEPTANCE: "no analytics mutation", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "zero analytics mutation + Home guard", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "tracking/config mutation"}
      - {DISCIPLINE_ID: D09, DISCIPLINE_NAME: "Google Ads", ACTIVATED_BY_SURFACES: [], MATERIALITY: NOT_APPLICABLE, ACTIVATING_EFFECT: "no Ads/paid landing change", CONTRACT_AND_ACCEPTANCE: "N/A", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "justification", REVIEWER_OR_AUTHORITY: "writer", STOP_CONDITION: "Ads surface appears"}
      - {DISCIPLINE_ID: D10, DISCIPLINE_NAME: "Performance y Core Web Vitals", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "deployment guard", CONTRACT_AND_ACCEPTANCE: "no build/product delta", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "READY preview + unchanged product paths", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "build/runtime regression"}
      - {DISCIPLINE_ID: D11, DISCIPLINE_NAME: "Seguridad y privacidad", ACTIVATED_BY_SURFACES: [S01,S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "secrets/API trust boundary", CONTRACT_AND_ACCEPTANCE: "no secret disclosure; consumer credential correspondence", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "sanitized key-name/match evidence", REVIEWER_OR_AUTHORITY: "human + independent auditor", STOP_CONDITION: "credential mismatch/disclosure"}
      - {DISCIPLINE_ID: D12, DISCIPLINE_NAME: "QA, release, rollback y auditoría independiente", ACTIVATED_BY_SURFACES: [S01,S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "release/rollback/exact-head", CONTRACT_AND_ACCEPTANCE: "fresh exact-head independent audit", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "manifest + audit + post-merge acceptance", REVIEWER_OR_AUTHORITY: "Codex independent auditor + human", STOP_CONDITION: "material finding"}

  SEO_INDEXABLE_CONTEXT:
    APPLIES: "false — evidence-only PR; D05 remains a publication/domain guard"
    CANONICAL_RESULTS_OWNER: "docs/truth/SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos"
    seoArchetype: NOT_APPLICABLE
    goldenBaselineVersion: NOT_APPLICABLE
    SEO_GOLDEN_PARITY: NOT_APPLICABLE
    HOME_SEO_REGRESSION: PASS
    LOCAL_CONTENT_UTILITY: NOT_APPLICABLE
    MOBILE_SEO_PARITY: NOT_APPLICABLE
    MULTILINGUAL_SEO: NOT_APPLICABLE

  9_RISK:
    LEVEL: CRITICAL
    RATIONALE: "Historical external Git-integration mutations plus future merge-induced production deployment."
    CHANGE_BUDGET:
      MAX_PATHS_OR_SCOPE: "1 repository path: docs/evidence/issue-28-vercel-topology.md"
      EXTERNAL_MUTATIONS: "Historical budget=4 Vercel Git disconnects already executed; current repair budget=ZERO new external mutations."
      REPAIR_LIMIT: "One grouped documentation repair commit for the six current P2 findings; any later materially independent finding requires renewed human re-scope."

  10_CONTRACTS_TO_PRESERVE:
    - "ranquel.com.ar and www.ranquel.com.ar remain on canonical 571s"
    - "Home / remains Río Cuarto production ownership"
    - "Apps Script calls canonical backend and must authenticate with matching admin credential"
    - "historical Vercel projects/deployments remain preserved"
    - "CI/rollback bootstrap states remain non-PASS"

  11_VALIDATIONS:
    PREFLIGHT:
      - "isolated exact-file writer worktree clean; no merge/rebase/cherry-pick/revert/bisect markers"
      - "GitHub PR open Draft, expected head/base, one changed path, branch behind 0"
    UNSTAGED:
      - "repository-wide shell unstaged state is not represented by GitHub Contents API; writer mirror is used for proposed exact-file bytes"
    EXACT_STAGE:
      - "docs/evidence/issue-28-vercel-topology.md only"
    STAGED:
      - "isolated exact-file writer mirror: git diff --cached --check"
      - "GitHub changed-file scope guard"
      - "sanitized secret/privacy scan"
    FOCAL_TESTS:
      - "Vercel exact-head one canonical preview + zero duplicate deployments"
      - "Home 200 + safe API 401 expected"
    SURFACE_GATES:
      - "D01-D12 states recorded individually; aggregate cannot claim D12 PASS before independent audit"
      - "Apps Script SITE_URL and ADMIN_KEY/ACCESS_ADMIN_KEY checks remain separate"
    VISUAL_VALIDATION:
      - "desktop/mobile exact-head preview after new commit; result recorded in PR volatile evidence"
    CI_EXACT_HEAD:
      - "CAPABILITY_GAP owned by #24 and accepted only by bootstrap exception"
    INDEPENDENT_AUDIT:
      - "fresh Codex review required after exact-head preview and pending human/runtime checks"
    POST_MERGE_ACCEPTANCE:
      - "verify merged SHA, exactly one canonical production deployment, domains, Home and safe API; human close only afterward"

  12_REQUIRED_EVIDENCE:
    ITEMS:
      - "PR diff = one allowed evidence file"
      - "historical plan audit HEAD/result/reference"
      - "four disconnect mutation rows with prior authority"
      - "exact-head Vercel status/preview and zero duplicate deployments"
      - "desktop/mobile exact-head visual result"
      - "sanitized Apps Script ADMIN_KEY ↔ Vercel ACCESS_ADMIN_KEY match result"
      - "fresh independent audit result"
    EVIDENCE_MANIFEST: "docs/evidence/issue-28-vercel-topology.md + PR #33 volatile exact-head evidence"
    REQUIRED_FINAL_STATE: SELF_VALIDATED_ONLY

  13_STOP_CONDITIONS:
    - "path/system outside scope"
    - "unexpected branch/main drift"
    - "new external mutation request"
    - "secret/PII disclosure"
    - "Apps Script admin credential mismatch or unknown at Ready gate"
    - "desktop/mobile exact-head regression"
    - "independent auditor reports a material finding"
    - "merge/production attempted without explicit later authorization"

  14_DEFINITION_OF_DONE:
    - "single canonical Git-connected Vercel project proven"
    - "one-file PR and honest validation states"
    - "historical Phase A audit linked to four disconnects"
    - "new exact-head desktop/mobile and consumer-credential checks completed before Ready"
    - "fresh independent audit completed"
    - "merge and expected production deployment separately authorized"
    - "post-merge acceptance and explicit issue close completed later"
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
  HEAD: "COMMIT_CONTAINING_THIS_MANIFEST; concrete SHA in PR #33 after commit"
  BRANCH: "ops/issue-28-vercel-topology-consolidation"
  WRITER: "ChatGPT / GitHub+Vercel connected session"
  RECORDED_AT_UTC: "2026-08-30T05:25:43Z"
  VALIDATION_RESULT_OWNER: "docs/truth/SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos"
  OVERALL_VALIDATION_RESULT: CAPABILITY_GAP
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
```

The global result remains `CAPABILITY_GAP` because exact-head executable CI is
not implemented. Other non-PASS states remain separately visible. The bootstrap
exception accepts only the CI and rollback gaps; it does not convert them to
PASS and does not cover unrelated pending gates.

## Phase A prerequisite audit that authorized the four disconnects

The four CRITICAL Vercel Git disconnects were not authorized merely by a generic
post-state observation. Before mutation 1/4, Codex independently audited the
Phase A plan on exact PR HEAD:

```text
PLAN_AUDIT_HEAD=4a69e7614abf2e212f52fb33b21a4a8981682c9b
PLAN_AUDIT_RECORDED_AT_UTC=2026-08-29T11:49:03Z
PLAN_AUDIT_REFERENCE=issue_28_comment_5462252475
INDEPENDENT_AUDIT_OF_PLAN=PASS_EXACT_HEAD
MUTATION_GATE=READY_FOR_HUMAN_CONTROLLED_PHASE_B
AUTHORIZED_PHASE_B_OPERATION=DISCONNECT_GIT_ONLY_ON_FOUR_NONCANONICAL_PROJECTS_ONE_AT_A_TIME
FORBIDDEN=DELETE_PAUSE_ENV_DNS_DOMAIN_REDEPLOY_PROMOTE_BUILD_SETTING_CHANGES
CANONICAL_PROJECT_REQUIRED_TO_STAY_CONNECTED=ranquel-tech-lab-571s
```

That audit and issue #28 are the historical authority referenced by every Phase B
mutation row below.

## Vercel topology inventory

| Project | Project ID | Public custom domain | Production branch | Required env key names observed | Classification |
| --- | --- | --- | --- | --- | --- |
| `ranquel-tech-lab-571s` | `prj_tKwBi0KEzVG18kqYPjUupVmUgNry` | `ranquel.com.ar`, `www.ranquel.com.ar` | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | CANONICAL |
| `ranquel-tech-lab` | `prj_tAsnytLpt5720qnbl7IcMsCUApA5` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | NONCANONICAL |
| `ranquel-tech-lab-vfiu` | `prj_WxzsWmVhMoBvrxm1u81hHuASEtcG` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | NONCANONICAL |
| `ranquel-tech-lab-teol` | `prj_gGzQXKs3qUoO23tM103VjCog0d9q` | none | `main` | none | NONCANONICAL |
| `ranquel-tech-lab-j56r` | `prj_MbREFjWvS7QmCAupqvuD9PuB5ERm` | none | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY`, `SITE_URL` | NONCANONICAL |

No secret value is recorded.

## Apps Script consumer verification

Repository code requires both the target relationship and the admin-credential
relationship:

```text
APPS_SCRIPT_SITE_URL_REQUIRED=YES
APPS_SCRIPT_ADMIN_KEY_REQUIRED=YES
VERCEL_ACCESS_ADMIN_KEY_REQUIRED=YES
ADMIN_KEY_MUST_EQUAL_ACCESS_ADMIN_KEY=YES
```

Human runtime UI inspection already proved the target only:

```text
SITE_URL=https://ranquel-tech-lab-571s.vercel.app
SITE_URL_TARGET=CANONICAL_571S
POINTS_TO_DISCONNECTED_PROJECT=NO
SITE_URL_RELATION=PASS
SITE_URL_EVIDENCE_REFERENCE=issue_28_comment_5463952679
```

The recorded evidence does **not** expose or compare the credential values:

```text
APPS_SCRIPT_ADMIN_KEY_PRESENT=UNKNOWN
VERCEL_ACCESS_ADMIN_KEY_PRESENT=YES_NAME_OBSERVED
ADMIN_KEY_VALUE_RECORDED=NO
ACCESS_ADMIN_KEY_VALUE_RECORDED=NO
ADMIN_KEY_MATCH_ACCESS_ADMIN_KEY=NOT_RUN
CONSUMER_CREDENTIAL_RELATION=NOT_RUN
OVERALL_EXTERNAL_CONSUMER_GATE=PARTIAL
```

A human may compare the two values in their respective UIs and record only
`MATCH=YES/NO`; the values themselves must never be posted into GitHub evidence.

## Interdisciplinary review state

| Disciplina | Materialidad | Reviewer/owner | Estado | Evidence / limitation |
| --- | --- | --- | --- | --- |
| D01 — Producto, negocio y estrategia comercial | MATERIAL | human + writer | PASS | canonical objective/no-scope preserved |
| D02 — Arquitectura de software e información | MATERIAL | writer + independent history | PASS | topology and consumer dependencies explicit |
| D03 — Frontend, UX responsive y diseño | MATERIAL | visual reviewer | NOT_RUN | exact new-head desktop/mobile preview does not exist until this commit is created |
| D04 — Accesibilidad | MATERIAL | reviewer | PARTIAL | no product path changed; final rendered guard accompanies D03 post-commit visual check |
| D05 — SEO técnico y SEO local | MATERIAL | reviewer | PASS | public canonical/domain ownership preserved; no SEO source path changed |
| D06 — Contenido, comunicación y marca | MATERIAL | writer | PASS | evidence wording factual/sanitized; no public copy changed |
| D07 — Marketing y CRO | NOT_APPLICABLE | writer | NOT_APPLICABLE | no CTA/funnel/campaign change |
| D08 — GA4, GTM, atribución y conversiones | MATERIAL | reviewer | PASS | no analytics mutation; public Home guard retained |
| D09 — Google Ads | NOT_APPLICABLE | writer | NOT_APPLICABLE | no Ads/spend/paid landing change |
| D10 — Performance y Core Web Vitals | MATERIAL | reviewer | PARTIAL | no product/build delta; exact-head render guard waits for new preview |
| D11 — Seguridad y privacidad | MATERIAL | human + independent auditor | PARTIAL | no secret value recorded; admin credential correspondence still NOT_RUN |
| D12 — QA, release, rollback y auditoría independiente | MATERIAL | Codex + human | NOT_RUN | fresh exact-head audit waits for post-commit evidence; writer cannot self-approve |

The D01-D12 **selection** is complete, but the aggregate interdisciplinary result
is not PASS while D03/D04/D10/D11/D12 remain non-PASS.

## Event and mutation chronology

| Event | UTC | Evidence/result |
| --- | --- | --- |
| Phase A independent plan audit | `2026-08-29T11:49:03Z` | comment `5462252475`; exact HEAD `4a69e761...`; PASS; Phase B human-controlled gate opened |
| noncanonical `ranquel-tech-lab` post-state | `2026-08-29T11:53:51Z` | disconnected, preserved |
| noncanonical `vfiu` post-state | `2026-08-29T12:08:31Z` | disconnected, preserved |
| noncanonical `teol` post-state | `2026-08-29T12:19:38Z` | disconnected, preserved |
| noncanonical `j56r` post-state | `2026-08-29T12:26:52Z` | disconnected, preserved |
| controlled topology preview `1dc11bf...` | `2026-08-29T12:29:14Z` | one canonical preview; zero duplicate deployments |
| human Update branch merge commit | `2026-08-29T17:37:23Z` | `27ef0487...`; main incorporated into issue branch only |
| Apps Script SITE_URL evidence | `2026-08-29T17:53:04Z` | canonical target confirmed |
| bootstrap exception recorded | `2026-08-29T18:51:43Z` | comment `5464226350` |
| pre-current repair HEAD created | `2026-08-29T21:38:09Z` | `1c66ecc778...` |
| post-Ready audit opened current six P2 findings | `2026-08-30T02:34:38Z` | review `5059757947` |
| human converted PR to Draft for grouped repair | `2026-08-30T05:25:43Z` | PR state Draft; HEAD remained `1c66ecc...` |

### External mutation ledger

| System | Resource | Before | Authority / operation | Result | After | Evidence | Reversible |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vercel | canonical `571s` Git integration | connected | plan audit `4a69e761...`: keep connected | PASS | connected | topology evidence | N/A |
| Vercel | `ranquel-tech-lab` | connected | issue #28 + comment `5462252475`; disconnect Git only | PASS | disconnected, retained | post-state `11:53:51Z` | reconnect only under separately safe rollback authority |
| Vercel | `vfiu` | connected | issue #28 + comment `5462252475`; disconnect Git only | PASS | disconnected, retained | post-state `12:08:31Z` | same |
| Vercel | `teol` | connected | issue #28 + comment `5462252475`; disconnect Git only | PASS | disconnected, retained | post-state `12:19:38Z` | same |
| Vercel | `j56r` | connected | issue #28 + comment `5462252475`; disconnect Git only | PASS | disconnected, retained | post-state `12:26:52Z` | same |
| Google Apps Script | SITE_URL | target unproven | read-only human inspection | PASS_TARGET_ONLY | unchanged | comment `5463952679` | N/A |
| GitHub | branch synchronization | feature behind main | human Update branch | PASS | `27ef0487...`, no PR merge | commit metadata | no force rewind |
| GitHub | PR review state | Ready | human Convert to draft for six-finding repair | PASS | Draft, HEAD unchanged | PR metadata `2026-08-30T05:25:43Z` | later Ready requires new human gate |

```text
NEW_EXTERNAL_MUTATIONS_DURING_THIS_REPAIR=ZERO
DNS_MUTATIONS=ZERO
ENV_MUTATIONS=ZERO
PROJECT_OR_DEPLOYMENT_DELETIONS=ZERO
PRODUCTION_PROMOTION_OR_REDEPLOY=ZERO
ISSUE_24_EXECUTION=NOT_RUN
```

## Validation matrix

| ID | Gate | Sanitized command/inspection | Exit | State | Observed | Evidence / limitation |
| --- | --- | --- | ---: | --- | --- | --- |
| V-001 | Preflight | isolated exact-file writer worktree `git status --short` + active-op marker inspection; GitHub PR metadata/compare | 0/N/A | PASS | writer mirror clean/no active ops; PR Draft, expected head/base, one path | writer mirror covers exact proposed path; repository-wide branch relation is from GitHub compare |
| V-002 | Diff | GitHub compare + exact proposed-file inspection | N/A | PASS | one allowed evidence path only | no product/runtime/workflow path |
| V-003 | Staged diff | isolated writer mirror `git add <allowed path>` + `git diff --cached --check` | 0 | PASS | exact proposed file stages cleanly | synthetic local writer index because Contents API has no native stage |
| V-004 | Scope | PR changed-file comparison | N/A | PASS | only allowed evidence path | recheck after commit |
| V-005 | Secrets/privacy | evidence-content scan | N/A | PASS | no secret/PII values recorded | key names and public SITE_URL only |
| V-006 | Historical mutation prerequisite | exact-head plan audit | N/A | PASS | `4a69e761...` independent audit PASS before mutation 1/4 | comment `5462252475` at `11:49:03Z` |
| V-007 | Surface gates aggregate | domains/Home/API + D01-D12 states | N/A | PARTIAL | domain/Home/API guards pass; D03/D04/D10/D11/D12 remain non-PASS | aggregate intentionally not PASS |
| V-008 | Preview exact-head | current pre-repair preview `dpl_A6vJ3BtHGDod8JH5CHzQUtrnvwFo` | N/A | PASS | READY, target=null, HEAD `1c66ecc...` | new repair HEAD preview is post-commit evidence |
| V-009 | CI exact-head | GitHub Actions | N/A | CAPABILITY_GAP | executable harness CI not implemented | accepted only by bootstrap exception; never PASS |
| V-010 | External consumer target | Apps Script SITE_URL read-only | N/A | PASS | target is canonical 571s | does not imply credential match |
| V-011 | External consumer credential | Apps Script ADMIN_KEY ↔ Vercel ACCESS_ADMIN_KEY sanitized comparison | N/A | NOT_RUN | no match result recorded | human must record MATCH only, never values |
| V-012 | Rollback | reconnect one noncanonical Git integration and restore state | N/A | NOT_RUN | deliberately not exercised blindly | accepted only by bootstrap exception; never PASS |
| V-013 | Exact-head desktop/mobile | new repair preview at desktop + mobile viewports | N/A | NOT_RUN | preview does not exist until commit | result recorded in PR exact-head evidence |
| V-014 | Independent audit / D12 | fresh Codex exact-head read-only review | N/A | NOT_RUN | waits for post-commit checks | writer cannot self-approve |
| V-015 | Merge/deploy authorization | human gate | N/A | AUTH_BLOCKED | merge and expected production deployment not authorized | separate later authorization required |

## Bootstrap exception

```text
BOOTSTRAP_EXCEPTION_ID=RANQUEL-TOPOLOGY-BOOTSTRAP-002
APPLIES_TO=ISSUE_28_AND_PR_33_ONLY
AUTHORIZATION_CONTEXT_HEAD=2d590ca9967e9bff914be7ff461de8e60891b8a8
ACCEPTED_NON_PASS_GATES=V009_CI_EXACT_HEAD,V012_ROLLBACK_TEST_ONLY
CI_EXACT_HEAD=CAPABILITY_GAP
ROLLBACK_TEST=NOT_RUN
NON_PASS_STATES_REMAIN_NON_PASS=YES
REUSABLE=NO
EXPIRES_WHEN=ISSUE_24_IMPLEMENTS_THE_CI_HARNESS
INDEPENDENT_VALIDATION_GRANTED_BY_EXCEPTION=NO
READY_AUTHORIZED=NO_FOR_NEW_HEAD
MERGE_AUTHORIZED=NO
EXPECTED_PRODUCTION_DEPLOYMENT_AUTHORIZED=NO
ISSUE_28_CLOSE_AUTHORIZED=NO
ISSUE_24_EXECUTION_AUTHORIZED=NO
AUTHORIZATION_REFERENCE=issue_28_comment_5464226350
```

The exception does not cover V011 consumer credential validation, V013 visual
validation or V014 independent audit.

## Current CRITICAL aggregation

```text
RISK=CRITICAL
HISTORICAL_PHASE_A_PLAN_AUDIT=PASS_EXACT_HEAD_4a69e761
FOUR_DISCONNECT_AUTHORITY_TRACE=PASS
TOPOLOGY_REGRESSION=PASS_PRE_REPAIR_HEAD
D01_D12_SELECTION=PASS
D01_D12_EXECUTION_AGGREGATE=PARTIAL
PREFLIGHT=PASS_WRITER_MIRROR_PLUS_REMOTE_BRANCH_GUARD
STAGED_DIFF=PASS
APPS_SCRIPT_SITE_URL_RELATION=PASS
APPS_SCRIPT_ADMIN_KEY_RELATION=NOT_RUN
EXACT_NEW_HEAD_DESKTOP_MOBILE=NOT_RUN
CI_EXACT_HEAD=CAPABILITY_GAP
ROLLBACK_TEST=NOT_RUN
FRESH_EXACT_HEAD_INDEPENDENT_AUDIT=NOT_RUN
MERGE_AND_EXPECTED_PRODUCTION_DEPLOYMENT=AUTH_BLOCKED
OVERALL_VALIDATION_RESULT=CAPABILITY_GAP
```

## Rollback and merge gate

Rollback remains least-destructive: reconnect the same repository only on the
affected noncanonical project, then re-audit. It remains `NOT_RUN` under the
bootstrap exception.

Canonical `571s` remains Git-connected and `main` is its Production Branch, so
merging PR #33 is expected to create one Git-triggered production deployment.
That side effect is **not** authorized by this repair instruction.

```text
MERGE_EXPECTED_TO_TRIGGER_PRODUCTION_DEPLOYMENT=YES
MERGE_AUTHORIZED=NO
EXPECTED_PRODUCTION_DEPLOYMENT_AUTHORIZED=NO
POST_MERGE_REQUIRED=verify merged SHA + exactly one canonical production deployment + zero duplicate deployments + domains + Home 200 + safe API 401
```

## Writer declaration

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: partial
  ZERO_PRODUCT_CHANGES_IN_PR_DIFF: true
  ZERO_NEW_EXTERNAL_MUTATIONS_THIS_REPAIR: true
  FINAL_VALIDATION_RESULT: CAPABILITY_GAP
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  ADMIN_CREDENTIAL_MATCH: NOT_RUN
  EXACT_HEAD_VISUAL: NOT_RUN
  INDEPENDENT_AUDIT: NOT_RUN
  READY_DECISION_OWNER: human
  MERGE_DECISION_OWNER: human
  PRODUCTION_DEPLOY_DECISION_OWNER: human
  AUTO_CLOSE_KEYWORD_PRESENT: false
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
```

After this commit exists: bind the concrete HEAD in PR evidence, verify exactly
one canonical preview and zero duplicate deployments, run exact-head desktop and
mobile visual validation, record only the sanitized admin-key match result, and
then request a fresh independent read-only audit. Do not mark Ready, merge,
deploy production, close #28 or execute #24 without the corresponding later
human gate.
