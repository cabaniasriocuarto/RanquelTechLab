# Pull request contract

Refs #N

## Issue and exact head

- Owner issue:
- Parent/dependencies:
- Base branch and `BASE_SHA`:
- Branch:
- Candidate `HEAD` committed locally:
- Remote branch `HEAD`:
- Draft PR `HEAD`:
- Exact `HEAD` reviewed:
- Risk: `LIGHT | STANDARD | HIGH | CRITICAL`

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
| Focal tests | `NOT_RUN` | |
| Surface gates | `NOT_RUN` | |
| Commit candidate | `NOT_RUN` | Candidate `HEAD` |
| Push candidate | `NOT_RUN` | Remote `HEAD` |
| Draft PR create/update | `NOT_RUN` | Draft PR `HEAD` |
| Exact-head CI | `NOT_RUN` | |
| Independent review request | `REQUIRED` | Exact `HEAD` |
| Independent review state | `NOT_RUN` | `PASS / CAPABILITY_GAP / AUTH_BLOCKED / BLOCKED` |
| Independent audit verdict | `NOT_ISSUED` | `PASS / CHANGES_REQUIRED / BLOCKED` |

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
- Independent review requested for exact HEAD:
- Independent review state:
- Independent audit verdict:
- Artifacts/links:
- Known gaps or blocked checks:
- `HUMAN_MERGE`: `NOT_RUN`
- `PR_MERGED`: `NO`
- `INTEGRATED_SHA`: `NOT_CAPTURED`
- `POST_MERGE_ACCEPTANCE_TARGET`: `INTEGRATED_SHA`
- Post-merge acceptance required:
- Truth reconciliation required:
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
- [ ] If a repair created `NEW_HEAD`, push, Draft update, CI and independent review were repeated.
- [ ] Independent review was requested; only `PASS` on the current exact HEAD enables the regular human gate.
- [ ] The PR uses `Refs #N`; no closing keyword can close the issue at merge time.
- [ ] Ready, merge, explicit issue close, deploy, publication, campaigns, and spending remain human decisions.

## Independent audit request

Please audit this PR read-only at the exact `HEAD`, report every finding with
severity and evidence, and return `PASS`, `CHANGES_REQUIRED`, or `BLOCKED`.
Do not repair findings inside the audit.
