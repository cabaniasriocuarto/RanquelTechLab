# Pull request contract

Closes #

## Issue and exact head

- Owner issue:
- Parent/dependencies:
- Base branch and `BASE_SHA`:
- Branch:
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

| Surface | Materiality | Required disciplines/gates | Result and evidence |
| --- | --- | --- | --- |
| Documentation/governance | `MATERIAL / NOT_APPLICABLE` | | |
| Product/commercial | `MATERIAL / NOT_APPLICABLE` | | |
| Architecture/generated output | `MATERIAL / NOT_APPLICABLE` | | |
| Frontend/UX | `MATERIAL / NOT_APPLICABLE` | | |
| Accessibility | `MATERIAL / NOT_APPLICABLE` | | |
| SEO/indexation | `MATERIAL / NOT_APPLICABLE` | | |
| Content/communication | `MATERIAL / NOT_APPLICABLE` | | |
| Marketing/CRO | `MATERIAL / NOT_APPLICABLE` | | |
| Analytics/Ads | `MATERIAL / NOT_APPLICABLE` | | |
| Performance/media | `MATERIAL / NOT_APPLICABLE` | | |
| API/security/privacy | `MATERIAL / NOT_APPLICABLE` | | |
| Release/deployment | `MATERIAL / NOT_APPLICABLE` | | |

Declare D01–D12 individually. Every `NOT_APPLICABLE` needs a concrete reason;
validation results belong in the final column, not in materiality.

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
| Exact-head CI | `NOT_RUN` | |

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
- Artifacts/links:
- Known gaps or blocked checks:
- Post-merge acceptance required:

## Risks and rollback

- Residual risks:
- Rollback unit and verification:

## Required confirmations

- [ ] The diff contains no unrelated work or unauthorized branch/PR changes.
- [ ] Product changes are fully declared; for docs-only work, product diff is zero.
- [ ] No prohibited external system was mutated.
- [ ] No secrets, credentials, private URLs, or personal data were committed.
- [ ] Missing, partial, blocked, unknown, and capability-gap states are not reported as `PASS`.
- [ ] Ready, merge, deploy, publication, campaigns, and spending remain human decisions.

## Independent audit request

Please audit this PR read-only at the exact `HEAD`, report every finding with
severity and evidence, and return `PASS`, `CHANGES_REQUIRED`, or `BLOCKED`.
Do not repair findings inside the audit.
