# Issue #28 — Vercel topology evidence and mutation record

Status: `CURRENT_IN_PROGRESS`

Owner: GitHub issue #28 (execution evidence; not a stable truth owner)

Sanitized evidence only. No token, secret, credential value or PII is recorded.

## Exact-head binding

```text
MANIFEST_HEAD_BINDING=COMMIT_CONTAINING_THIS_MANIFEST
CONCRETE_HEAD_VALUE=PR_33_VOLATILE_EXACT_HEAD_EVIDENCE_AFTER_COMMIT
```

The concrete SHA, preview identity, desktop/mobile result, sanitized admin-key
match and independent audit are recorded in PR #33 after the commit exists; they
are not back-written because that would create a new HEAD.

## TASK_CONTRACT

This is a post-hoc canonical reconstruction for traceability of a task that began
before `RANQUEL_TASK_CONTRACT_V1`; it does not claim this YAML existed before the
historical Vercel mutations.

```yaml
TASK_CONTRACT:
  CONTRACT_VERSION: RANQUEL_TASK_CONTRACT_V1
  ISSUE: "#28"
  PARENT: "#2"
  DEPENDENCIES: ["#3 — completed", "#24 — CI/harness owner; execution not authorized by #28"]
  WRITER_ROLE: "ChatGPT writer using connected GitHub/Vercel tools"

  1_OBJECTIVE:
    SEMANTIC_OUTCOME: "Consolidate five duplicate Vercel Git integrations to one canonical Git-connected project while preserving domains, runtime behavior, deployments and rollback availability."
    SUCCESS_BOUNDARY: "Only ranquel-tech-lab-571s remains Git-connected; controlled HEAD creates one canonical preview and zero duplicate deployments."

  2_BASELINE_OBSERVED:
    REPOSITORY: "cabaniasriocuarto/RanquelTechLab"
    DEFAULT_BRANCH: main
    BASE_SHA: "6629b573d4ac0faaa7bf66368ae1587acabd06a3"
    HEAD: "1c66ecc778883081672779f3a4b7f6e994365521"
    BRANCH: "ops/issue-28-vercel-topology-consolidation"
    GIT_STATUS: "isolated exact-file writer worktree clean before grouped repair; GitHub PR diff shows one evidence path"
    RELATION_TO_ORIGIN_MAIN: "ahead 7 / behind 0 at repair start"
    ACTIVE_GIT_OPERATIONS: {MERGE: false, REBASE: false, CHERRY_PICK: false, REVERT: false, BISECT: false}
    APPLICABLE_AGENTS: ["AGENTS.md", "docs/AGENTS.md"]
    DOCUMENT_OWNERS:
      - {SURFACE: "task contract", OWNER: "docs/harness/TASK_CONTRACT_TEMPLATE.md"}
      - {SURFACE: "evidence", OWNER: "docs/harness/EVIDENCE_MANIFEST_TEMPLATE.md"}
      - {SURFACE: "disciplines", OWNER: "docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"}
      - {SURFACE: "results", OWNER: "docs/truth/SOURCE_OF_TRUTH.md"}
    OBSERVED_IMPLEMENTATION:
      - "PR #33 changes only docs/evidence/issue-28-vercel-topology.md"
      - "ranquel-tech-lab-571s is canonical; four noncanonical projects are preserved and Git-disconnected"
      - "Apps Script SITE_URL targets canonical 571s"
    READ_ONLY_CONTEXT: ["Vercel metadata", "GitHub metadata", "human-observed Apps Script properties"]
    UNKNOWNS:
      - "ADMIN_KEY ↔ ACCESS_ADMIN_KEY equality"
      - "new repair HEAD desktop/mobile result until preview exists"

  3_OUT_OF_SCOPE:
    - "product/runtime/workflow code"
    - "new Vercel mutation, delete/pause/redeploy/promote"
    - "domain/DNS/env mutation"
    - "Apps Script mutation or secret disclosure"
    - "issue #24 execution"
    - "merge/production without later explicit human authorization"

  4_ALLOWED_PATHS:
    PATHS: ["docs/evidence/issue-28-vercel-topology.md"]
    ALLOWED_SYMBOLS: ["evidence/TASK_CONTRACT/gates/ledgers only"]

  5_FORBIDDEN_PATHS: ["product HTML/CSS/JS/API", ".github/workflows/**", "apps-script/** mutation", "vercel.json mutation"]

  6_EXTERNAL_SYSTEMS_ALLOWED:
    - {SYSTEM: "GitHub", ACCESS: MUTATION_EXPLICITLY_AUTHORIZED, OPERATIONS: ["read evidence", "update one allowed evidence file", "human Draft/Ready when separately authorized"], AUTHORITY: "issue #28 + current human instruction"}
    - {SYSTEM: "Vercel current repair", ACCESS: READ_ONLY, OPERATIONS: ["read projects/deployments/status", "fetch protected preview"], AUTHORITY: "issue #28 validation"}
    - {SYSTEM: "Vercel historical Phase B", ACCESS: MUTATION_EXPLICITLY_AUTHORIZED, OPERATIONS: ["exactly four Git disconnects on noncanonical projects"], AUTHORITY: "issue #28 + independent plan audit comment 5462252475 on exact HEAD 4a69e7614abf2e212f52fb33b21a4a8981682c9b"}
    - {SYSTEM: "Google Apps Script", ACCESS: READ_ONLY, OPERATIONS: ["inspect SITE_URL and compare admin credential without recording values"], AUTHORITY: "issue #28 consumer verification"}

  7_EXTERNAL_SYSTEMS_FORBIDDEN: ["new Vercel writes", "DNS/domain/env writes", "Apps Script writes", "Search Console/GA4/GTM/Ads writes"]

  8_CHANGED_SURFACES:
    CANONICAL_OWNER: "docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"
    SURFACE_INVENTORY:
      - {SURFACE_ID: S01, EFFECT: "evidence reconciliation", PATHS_OR_SYMBOLS: ["docs/evidence/issue-28-vercel-topology.md"], MATRIX_ROWS: ["Documentation/routers without product truth"], DOMAIN_OWNERS: ["docs/harness/EVIDENCE_MANIFEST_TEMPLATE.md", "docs/harness/TASK_CONTRACT_TEMPLATE.md"]}
      - {SURFACE_ID: S02, EFFECT: "historical external Vercel configuration", PATHS_OR_SYMBOLS: ["four Git integrations"], MATRIX_ROWS: ["Deploy, DNS or publication"], DOMAIN_OWNERS: ["docs/truth/QUALITY_GATES.md"]}
      - {SURFACE_ID: S03, EFFECT: "Apps Script → API trust relationship", PATHS_OR_SYMBOLS: ["SITE_URL", "ADMIN_KEY", "ACCESS_ADMIN_KEY"], MATRIX_ROWS: ["API, form or input", "Deploy, DNS or publication"], DOMAIN_OWNERS: ["docs/truth/INTERDISCIPLINARY_REVIEW_MATRIX.md"]}
      - {SURFACE_ID: S04, EFFECT: "future merge-induced production deployment", PATHS_OR_SYMBOLS: ["main", "571s production branch"], MATRIX_ROWS: ["Deploy, DNS or publication"], DOMAIN_OWNERS: ["docs/truth/QUALITY_GATES.md"]}
    DISCIPLINES:
      - {DISCIPLINE_ID: D01, DISCIPLINE_NAME: "Producto, negocio y estrategia comercial", ACTIVATED_BY_SURFACES: [S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "production ownership", CONTRACT_AND_ACCEPTANCE: "public service preserved", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "topology/authority", REVIEWER_OR_AUTHORITY: "human", STOP_CONDITION: "ownership ambiguity"}
      - {DISCIPLINE_ID: D02, DISCIPLINE_NAME: "Arquitectura de software e información", ACTIVATED_BY_SURFACES: [S01,S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "ownership/dependencies", CONTRACT_AND_ACCEPTANCE: "single canonical project", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "topology/consumer", REVIEWER_OR_AUTHORITY: "writer+auditor", STOP_CONDITION: "duplicate ownership"}
      - {DISCIPLINE_ID: D03, DISCIPLINE_NAME: "Frontend, UX responsive y diseño", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "publication render", CONTRACT_AND_ACCEPTANCE: "exact-head desktop/mobile journey", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "desktop/mobile preview", REVIEWER_OR_AUTHORITY: "visual reviewer", STOP_CONDITION: "render/navigation regression"}
      - {DISCIPLINE_ID: D04, DISCIPLINE_NAME: "Accesibilidad", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "publication guard", CONTRACT_AND_ACCEPTANCE: "no rendered regression", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "visual guard", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "accessibility regression"}
      - {DISCIPLINE_ID: D05, DISCIPLINE_NAME: "SEO técnico y SEO local", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "canonical/domain ownership", CONTRACT_AND_ACCEPTANCE: "Home/canonical preserved", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "domain/canonical guard", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "canonical drift"}
      - {DISCIPLINE_ID: D06, DISCIPLINE_NAME: "Contenido, comunicación y marca", ACTIVATED_BY_SURFACES: [S01], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "evidence wording", CONTRACT_AND_ACCEPTANCE: "factual/sanitized", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "content review", REVIEWER_OR_AUTHORITY: "writer", STOP_CONDITION: "unsupported claim/secret"}
      - {DISCIPLINE_ID: D07, DISCIPLINE_NAME: "Marketing y CRO", ACTIVATED_BY_SURFACES: [], MATERIALITY: NOT_APPLICABLE, ACTIVATING_EFFECT: "no marketing delta", CONTRACT_AND_ACCEPTANCE: "N/A", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "justification", REVIEWER_OR_AUTHORITY: "writer", STOP_CONDITION: "marketing surface appears"}
      - {DISCIPLINE_ID: D08, DISCIPLINE_NAME: "GA4, GTM, atribución y conversiones", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "publication guard", CONTRACT_AND_ACCEPTANCE: "no analytics mutation", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "zero analytics mutation", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "analytics mutation"}
      - {DISCIPLINE_ID: D09, DISCIPLINE_NAME: "Google Ads", ACTIVATED_BY_SURFACES: [], MATERIALITY: NOT_APPLICABLE, ACTIVATING_EFFECT: "no Ads delta", CONTRACT_AND_ACCEPTANCE: "N/A", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "justification", REVIEWER_OR_AUTHORITY: "writer", STOP_CONDITION: "Ads surface appears"}
      - {DISCIPLINE_ID: D10, DISCIPLINE_NAME: "Performance y Core Web Vitals", ACTIVATED_BY_SURFACES: [S02,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "deployment guard", CONTRACT_AND_ACCEPTANCE: "no build/product delta", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "READY preview", REVIEWER_OR_AUTHORITY: "reviewer", STOP_CONDITION: "runtime regression"}
      - {DISCIPLINE_ID: D11, DISCIPLINE_NAME: "Seguridad y privacidad", ACTIVATED_BY_SURFACES: [S01,S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "API/secrets trust boundary", CONTRACT_AND_ACCEPTANCE: "no disclosure + credential correspondence", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "sanitized key match", REVIEWER_OR_AUTHORITY: "human+auditor", STOP_CONDITION: "mismatch/disclosure"}
      - {DISCIPLINE_ID: D12, DISCIPLINE_NAME: "QA, release, rollback y auditoría independiente", ACTIVATED_BY_SURFACES: [S01,S02,S03,S04], MATERIALITY: MATERIAL, ACTIVATING_EFFECT: "release/rollback/exact-head", CONTRACT_AND_ACCEPTANCE: "fresh exact-head audit", RISK_AND_GATE: CRITICAL, REQUIRED_EVIDENCE: "manifest/audit/acceptance", REVIEWER_OR_AUTHORITY: "Codex+human", STOP_CONDITION: "material finding"}

  SEO_INDEXABLE_CONTEXT:
    APPLIES: "false — evidence-only PR; D05 is a publication guard"
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
    RATIONALE: "historical external config mutations + future production deployment"
    CHANGE_BUDGET:
      MAX_PATHS_OR_SCOPE: "1 path"
      EXTERNAL_MUTATIONS: "historical=4 Git disconnects already executed; current repair=ZERO"
      REPAIR_LIMIT: "current grouped audit-reconciliation only; later independent material finding requires renewed human re-scope"

  10_CONTRACTS_TO_PRESERVE: ["public domains on 571s", "Home Río Cuarto ownership", "Apps Script canonical target + matching admin credential", "historical deployments", "non-PASS bootstrap states"]

  11_VALIDATIONS:
    PREFLIGHT: ["isolated writer worktree clean/no active ops", "GitHub PR Draft, expected head/base, one path, behind 0"]
    UNSTAGED: ["GitHub Contents API has no native user worktree; isolated exact-file writer worktree owns proposed bytes"]
    EXACT_STAGE: ["docs/evidence/issue-28-vercel-topology.md"]
    STAGED: ["git diff --cached --check", "scope guard", "secret/privacy scan"]
    FOCAL_TESTS: ["one canonical preview + zero duplicates", "Home 200 + safe API 401"]
    SURFACE_GATES: ["D01-D12 individually honest", "SITE_URL separate from credential match"]
    VISUAL_VALIDATION: ["desktop/mobile exact-head after commit; PR evidence"]
    CI_EXACT_HEAD: ["CAPABILITY_GAP owned by #24; bootstrap only"]
    INDEPENDENT_AUDIT: ["fresh exact-head Codex after pending checks"]
    POST_MERGE_ACCEPTANCE: ["merged SHA + exactly one canonical production deployment + zero new deployments on all four duplicates + domains + Home + safe API"]

  12_REQUIRED_EVIDENCE:
    ITEMS: ["one-path diff", "historical plan audit", "four authorized disconnects", "exact-head topology", "desktop/mobile", "sanitized admin-key match", "fresh audit"]
    EVIDENCE_MANIFEST: "this file + PR #33 volatile exact-head evidence"
    REQUIRED_FINAL_STATE: SELF_VALIDATED_ONLY

  13_STOP_CONDITIONS: ["scope drift", "main/branch drift", "new external write", "secret/PII", "credential mismatch/unknown at Ready", "visual regression", "material audit finding", "unauthorized merge/production"]

  14_DEFINITION_OF_DONE: ["single canonical integration", "one-file honest evidence", "Phase A audit linked", "visual + credential checks complete", "fresh audit complete", "separate merge+production authorization", "post-merge acceptance + explicit close later"]
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

## Historical prerequisite audit

```text
PLAN_AUDIT_HEAD=4a69e7614abf2e212f52fb33b21a4a8981682c9b
PLAN_AUDIT_RECORDED_AT_UTC=2026-08-29T11:49:03Z
PLAN_AUDIT_REFERENCE=issue_28_comment_5462252475
INDEPENDENT_AUDIT_OF_PLAN=PASS_EXACT_HEAD
MUTATION_GATE=READY_FOR_HUMAN_CONTROLLED_PHASE_B
AUTHORIZED_OPERATION=DISCONNECT_GIT_ONLY_ON_FOUR_NONCANONICAL_PROJECTS_ONE_AT_A_TIME
CANONICAL_PROJECT_REQUIRED_TO_STAY_CONNECTED=ranquel-tech-lab-571s
```

This exact-head audit plus issue #28 is the authority attached to all four
historical disconnect rows.

## Topology inventory

| Project | ID | Public domains | Branch | Observed required env key names | Class |
| --- | --- | --- | --- | --- | --- |
| `ranquel-tech-lab-571s` | `prj_tKwBi0KEzVG18kqYPjUupVmUgNry` | `ranquel.com.ar`, `www.ranquel.com.ar` | `main` | `DAILY_API_KEY`, `ACCESS_TOKEN_SECRET`, `ACCESS_ADMIN_KEY` | CANONICAL |
| `ranquel-tech-lab` | `prj_tAsnytLpt5720qnbl7IcMsCUApA5` | none | `main` | same three | NONCANONICAL |
| `vfiu` | `prj_WxzsWmVhMoBvrxm1u81hHuASEtcG` | none | `main` | same three + `SITE_URL` | NONCANONICAL |
| `teol` | `prj_gGzQXKs3qUoO23tM103VjCog0d9q` | none | `main` | none | NONCANONICAL |
| `j56r` | `prj_MbREFjWvS7QmCAupqvuD9PuB5ERm` | none | `main` | same three + `SITE_URL` | NONCANONICAL |

## Apps Script consumer

```text
SITE_URL_TARGET=CANONICAL_571S
SITE_URL_RELATION=PASS
SITE_URL_EVIDENCE_REFERENCE=issue_28_comment_5463952679
APPS_SCRIPT_ADMIN_KEY_REQUIRED=YES
VERCEL_ACCESS_ADMIN_KEY_REQUIRED=YES
ADMIN_KEY_MUST_EQUAL_ACCESS_ADMIN_KEY=YES
ADMIN_KEY_VALUE_RECORDED=NO
ACCESS_ADMIN_KEY_VALUE_RECORDED=NO
ADMIN_KEY_MATCH_ACCESS_ADMIN_KEY=NOT_RUN
OVERALL_EXTERNAL_CONSUMER_GATE=PARTIAL
```

Only `MATCH=YES/NO` may later be recorded; never either value.

## Interdisciplinary execution state

| D | Materiality | State | Evidence / limitation |
| --- | --- | --- | --- |
| D01 | MATERIAL | PASS | objective/no-scope preserved |
| D02 | MATERIAL | PASS | topology/dependencies explicit |
| D03 | MATERIAL | NOT_RUN | exact new-head desktop/mobile post-commit |
| D04 | MATERIAL | PARTIAL | rendered guard follows D03 |
| D05 | MATERIAL | PASS | domains/canonical preserved |
| D06 | MATERIAL | PASS | factual sanitized evidence |
| D07 | NOT_APPLICABLE | NOT_APPLICABLE | no marketing delta |
| D08 | MATERIAL | PASS | no analytics mutation |
| D09 | NOT_APPLICABLE | NOT_APPLICABLE | no Ads delta |
| D10 | MATERIAL | PARTIAL | no build delta; final render guard pending |
| D11 | MATERIAL | PARTIAL | credential correspondence pending |
| D12 | MATERIAL | NOT_RUN | fresh exact-head audit pending |

Selection is complete; execution aggregate is `PARTIAL`, never PASS while these
material rows remain non-PASS.

## Chronology and mutation ledger

| UTC | System/resource | Authority/operation | Result |
| --- | --- | --- | --- |
| `2026-08-29T11:49:03Z` | Phase A plan | exact-head Codex audit `4a69e761...` | PASS; Phase B gate opened |
| `2026-08-29T11:53:51Z` | Vercel `ranquel-tech-lab` | issue #28 + `5462252475`; disconnect Git only | disconnected/preserved |
| `2026-08-29T12:08:31Z` | Vercel `vfiu` | same authority | disconnected/preserved |
| `2026-08-29T12:19:38Z` | Vercel `teol` | same authority | disconnected/preserved |
| `2026-08-29T12:26:52Z` | Vercel `j56r` | same authority | disconnected/preserved |
| `2026-08-29T12:29:14Z` | controlled preview `1dc11bf...` | read-only validation | one canonical; zero duplicates |
| `2026-08-29T17:37:23Z` | GitHub Update branch | human authorized | `27ef0487...`; no PR merge |
| `2026-08-29T17:53:04Z` | Apps Script SITE_URL | human read-only | canonical target |
| `2026-08-29T18:51:43Z` | bootstrap exception | human | comment `5464226350` |
| `2026-08-30T02:34:38Z` | Codex post-Ready review | automatic | findings recorded |
| `2026-08-30T05:25:43Z` | GitHub PR state | human Convert to draft | Draft; no merge |

```text
NEW_EXTERNAL_MUTATIONS_THIS_REPAIR=ZERO
DNS_MUTATIONS=ZERO
ENV_MUTATIONS=ZERO
PROJECT_OR_DEPLOYMENT_DELETIONS=ZERO
PRODUCTION_PROMOTION_OR_REDEPLOY=ZERO
ISSUE_24_EXECUTION=NOT_RUN
```

## Validation matrix

| ID | Gate | Method | Exit | State | Result / limitation |
| --- | --- | --- | ---: | --- | --- |
| V-001 | Preflight | isolated exact-file writer worktree + GitHub PR/compare | 0/N/A | PASS | worktree clean/no active ops; repository-wide PR one path, behind 0 |
| V-002 | Diff | GitHub compare + proposed file | N/A | PASS | one allowed evidence path |
| V-003 | Staged diff | isolated writer index `git diff --cached --check` | 0 | PASS | exact proposed path; Contents API has no native stage |
| V-004 | Scope | changed filenames | N/A | PASS | one allowed path |
| V-005 | Secrets/privacy | sanitized scan | N/A | PASS | no secret/PII values |
| V-006 | Historical prerequisite | exact-head plan audit | N/A | PASS | `4a69e761...` PASS before mutation 1/4 |
| V-007 | Surface aggregate | Home/domain/API + disciplines | N/A | PARTIAL | guards pass; D03/D04/D10/D11/D12 non-PASS |
| V-008 | Current pre-repair preview | `dpl_A6vJ3BtHGDod8JH5CHzQUtrnvwFo` | N/A | PASS | READY, target=null, `1c66ecc...` |
| V-009 | CI exact-head | GitHub Actions | N/A | CAPABILITY_GAP | #24 owner; bootstrap only |
| V-010 | Consumer target | Apps Script SITE_URL | N/A | PASS | canonical 571s |
| V-011 | Consumer credential | sanitized ADMIN_KEY ↔ ACCESS_ADMIN_KEY compare | N/A | NOT_RUN | human MATCH result required |
| V-012 | Rollback | reconnect/restore test | N/A | NOT_RUN | bootstrap only |
| V-013 | Exact-head desktop/mobile | new repair preview | N/A | NOT_RUN | post-commit evidence |
| V-014 | Independent audit / D12 | fresh Codex review | N/A | NOT_RUN | after pending checks |
| V-015 | Merge/deploy authorization | human gate | N/A | AUTH_BLOCKED | separate later authorization |

## Bootstrap exception

```text
BOOTSTRAP_EXCEPTION_ID=RANQUEL-TOPOLOGY-BOOTSTRAP-002
APPLIES_TO=ISSUE_28_AND_PR_33_ONLY
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

## FILES

```yaml
FILES:
  ADDED: ["docs/evidence/issue-28-vercel-topology.md"]
  MODIFIED: ["NONE"]
  DELETED: ["NONE"]
  PRODUCT_FILES_CHANGED: false
  GENERATED_OUTPUT_CHANGED: false
  UNRELATED_CHANGES_INCLUDED: false
```

## RISKS

```yaml
RISKS:
  - ID: R-001
    DESCRIPTION: "merge triggers canonical production deployment"
    SEVERITY: CRITICAL
    MITIGATION: "AUTH_BLOCKED until separate human merge + production authorization"
    OWNER: "human merge/deploy gate"
  - ID: R-002
    DESCRIPTION: "exact-head executable CI absent"
    SEVERITY: CRITICAL
    MITIGATION: "CAPABILITY_GAP preserved; only bootstrap exception applies"
    OWNER: "#24 + bootstrap exception"
  - ID: R-003
    DESCRIPTION: "rollback test not executed"
    SEVERITY: CRITICAL
    MITIGATION: "NOT_RUN preserved; only bootstrap exception applies"
    OWNER: "human / #28 bootstrap"
  - ID: R-004
    DESCRIPTION: "Apps Script admin credential correspondence not yet recorded"
    SEVERITY: CRITICAL
    MITIGATION: "human compares values privately and records MATCH=YES/NO only"
    OWNER: "human sanitized comparison"
  - ID: R-005
    DESCRIPTION: "new-head desktop/mobile and independent audit pending"
    SEVERITY: HIGH
    MITIGATION: "complete exact-head visual guard, then fresh Codex audit before Ready"
    OWNER: "visual reviewer + Codex"

ROLLBACK:
  PLAN: "Reconnect the same GitHub repository only on the affected noncanonical Vercel project, then stop and re-audit."
  VERIFIED: false
  VERIFICATION_STATE: NOT_RUN
```

## LIMITATIONS

```yaml
LIMITATIONS:
  - "secret values intentionally never recorded"
  - "Contents API has no native user stage; isolated exact-file writer index is used and GitHub compare owns repository-wide scope"
  - "new preview/visual/credential/audit evidence is volatile PR evidence after commit"
  - "CI and rollback remain non-PASS under the narrow bootstrap exception"
```

## OPEN_QUESTIONS

```yaml
OPEN_QUESTIONS:
  - {ID: Q1, QUESTION: "ADMIN_KEY matches ACCESS_ADMIN_KEY?", STATE: NOT_RUN, REQUIRED_RESULT: "MATCH=YES/NO only"}
  - {ID: Q2, QUESTION: "new exact-head desktop/mobile valid?", STATE: NOT_RUN, REQUIRED_RESULT: "viewport result"}
  - {ID: Q3, QUESTION: "fresh independent audit clean?", STATE: NOT_RUN, REQUIRED_RESULT: "audit result"}
  - {ID: Q4, QUESTION: "merge + expected production authorized?", STATE: AUTH_BLOCKED, REQUIRED_RESULT: "separate human authorization"}
```

## Current CRITICAL aggregation

```text
RISK=CRITICAL
HISTORICAL_PLAN_AUDIT=PASS_EXACT_HEAD_4a69e761
FOUR_DISCONNECT_AUTHORITY_TRACE=PASS
D01_D12_SELECTION=PASS
D01_D12_EXECUTION_AGGREGATE=PARTIAL
PREFLIGHT=PASS_WRITER_WORKTREE_PLUS_REMOTE_SCOPE
STAGED_DIFF=PASS
SITE_URL_RELATION=PASS
ADMIN_KEY_RELATION=NOT_RUN
NEW_HEAD_DESKTOP_MOBILE=NOT_RUN
CI_EXACT_HEAD=CAPABILITY_GAP
ROLLBACK_TEST=NOT_RUN
FRESH_INDEPENDENT_AUDIT=NOT_RUN
MERGE_AND_EXPECTED_PRODUCTION=AUTH_BLOCKED
OVERALL_VALIDATION_RESULT=CAPABILITY_GAP
```

## Rollback, merge and post-merge acceptance

Rollback remains least-destructive and `NOT_RUN`: reconnect the same repository
only on the affected noncanonical project, then re-audit.

Canonical `571s` uses `main` as Production Branch, so merge is expected to trigger
one canonical production deployment. It is not authorized yet.

```text
MERGE_EXPECTED_TO_TRIGGER_PRODUCTION_DEPLOYMENT=YES
MERGE_AUTHORIZED=NO
EXPECTED_PRODUCTION_DEPLOYMENT_AUTHORIZED=NO
POST_MERGE_ACCEPTANCE_REQUIRED=merged SHA + exactly one canonical production deployment + zero new deployments on ranquel-tech-lab/vfiu/teol/j56r + canonical domains + Home 200 + safe API 401
```

## Writer declaration

```yaml
WRITER_DECLARATION:
  CONTRACT_SATISFIED: partial
  ZERO_PRODUCT_CHANGES: true
  ZERO_UNAUTHORIZED_EXTERNAL_MUTATIONS: true
  FINAL_VALIDATION_RESULT: CAPABILITY_GAP
  EVIDENCE_MATURITY: SELF_VALIDATED_ONLY
  AUDIT_REQUESTED: false
  READY_DECISION_OWNER: human
  AUTO_CLOSE_KEYWORD_PRESENT: false
  ISSUE_CLOSE_OWNER: "human after POST_MERGE_ACCEPTANCE and TRUTH_RECONCILIATION"
  MERGE_PERFORMED: false
  ISSUE_CLOSED: false
  ADMIN_CREDENTIAL_MATCH: NOT_RUN
  EXACT_HEAD_VISUAL: NOT_RUN
  INDEPENDENT_AUDIT: NOT_RUN
  MERGE_DECISION_OWNER: human
  PRODUCTION_DEPLOY_DECISION_OWNER: human
```

After this commit exists: bind its SHA in PR evidence, verify one canonical
preview and zero duplicate deployments, complete desktop/mobile and sanitized
admin-key match, then request a fresh independent audit. Do not mark Ready,
merge, deploy production, close #28 or execute #24 without later human gates.
