# Truth owner registry

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/INDEX.md` (owner registry and discovery only)

This index links to one owner per type of truth. It does not duplicate owner
detail. If two files claim the same type, stop and resolve ownership explicitly.

| Truth type | Canonical owner | Primary use |
| --- | --- | --- |
| Authority, documentary/evidence states | [SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md) | Interpret facts and evidence |
| Ordered backlog and blockers | [NEXT_STEPS.md](NEXT_STEPS.md) | Select the next authorized issue |
| Technical and integration architecture | [ARCHITECTURE.md](ARCHITECTURE.md) | Understand boundaries and data flow |
| Product capability inventory | [FEATURE_MAP.md](FEATURE_MAP.md) | Distinguish implemented from planned |
| Routes, pages, indexability | [ROUTE_AND_PAGE_MAP.md](ROUTE_AND_PAGE_MAP.md) | Protect URL contracts |
| SEO and local-search rules | [SEO_CONTRACT.md](SEO_CONTRACT.md) | Review indexable changes |
| Golden SEO evidence and lineage | [SEO_GOLDEN_BASELINE.md](SEO_GOLDEN_BASELINE.md) | Classify the baseline owned by #26 |
| SEO parity and Home regression | [SEO_PARITY_CONTRACT.md](SEO_PARITY_CONTRACT.md) | Govern comparison and publication gates |
| Content, communication, brand | [CONTENT_COMMUNICATION_STANDARD.md](CONTENT_COMMUNICATION_STANDARD.md) | Verify claims and local value |
| Media provenance and usage rights | [MEDIA_PROVENANCE.md](MEDIA_PROVENANCE.md) | Record source, license, owner and evidence per asset |
| Marketing, analytics, Ads | [MARKETING_ANALYTICS_CONTRACT.md](MARKETING_ANALYTICS_CONTRACT.md) | Govern measurement and campaigns |
| Security and privacy | [SECURITY_PRIVACY_MODEL.md](SECURITY_PRIVACY_MODEL.md) | Review inputs, data and trust boundaries |
| Test selection | [TESTING_MATRIX.md](TESTING_MATRIX.md) | Choose focal and regression checks |
| Risk levels, gate sequence and evidence requirements | [QUALITY_GATES.md](QUALITY_GATES.md) | Apply state semantics to release decisions |
| Discipline-to-surface mapping | [INTERDISCIPLINARY_REVIEW_MATRIX.md](INTERDISCIPLINARY_REVIEW_MATRIX.md) | Select required reviewers |
| Durable decisions | [DECISION_LOG.md](DECISION_LOG.md) | Explain adopted trade-offs |
| Branch-to-closeout process | [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md) | Execute a task deterministically |
| Release and rollback | [RELEASE_ROLLBACK_RUNBOOK.md](RELEASE_ROLLBACK_RUNBOOK.md) | Plan/recover a publication |
| Truth-document history | [CHANGELOG.md](CHANGELOG.md) | Track canonical documentation changes |

## Supporting entry points

- [Repository start](../START_HERE.md)
- [Issue #3 closeout and bootstrap boundary](../closeouts/issue-3.md)
- [Geo-SEO plan boundary](../geo-seo/README.md)
- [Task contract template](../harness/TASK_CONTRACT_TEMPLATE.md)
- [Evidence manifest template](../harness/EVIDENCE_MANIFEST_TEMPLATE.md)
- [Independent audit template](../harness/INDEPENDENT_AUDIT_TEMPLATE.md)

The closeout record is supporting evidence, not a new truth owner. Detailed
executable enforcement and its semantic fixtures remain owned by issue #24.

## Routing rules

- Stable facts belong in the owner above; current execution evidence belongs in
  its issue/PR manifest.
- A new truth type requires an explicit decision and exactly one owner.
- Broken links, duplicate ownership, or conflicting state language block closeout.
