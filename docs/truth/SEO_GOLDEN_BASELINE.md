# Golden SEO baseline and lineage

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/SEO_GOLDEN_BASELINE.md` (golden SEO evidence, lineage and signal classification)

Implementation state: `PLANNED_NOT_IMPLEMENTED`

## Ownership boundary

This owner is reserved for issue #26. It will identify the versioned production
and repository evidence that may be treated as Ranquel's golden SEO baseline.
Issue #3 creates only the routing and fail-closed boundary: it does not capture
Search Console data, inspect a deployment, choose winning signals, or implement
a manifest or gate.

General indexation rules remain in [SEO_CONTRACT.md](SEO_CONTRACT.md). The
comparison and publication contract belongs to
[SEO_PARITY_CONTRACT.md](SEO_PARITY_CONTRACT.md). Current repository routes and
implementation stay owned by [ROUTE_AND_PAGE_MAP.md](ROUTE_AND_PAGE_MAP.md),
[ARCHITECTURE.md](ARCHITECTURE.md), and [FEATURE_MAP.md](FEATURE_MAP.md).

## Current boundary

| Item | Documentary state | External verification | Interpretation |
| --- | --- | --- | --- |
| Versioned golden baseline | `PLANNED_NOT_IMPLEMENTED` | `UNKNOWN` | #26 creates it after #4 captures the raw baseline |
| Production-to-commit lineage | `PENDING_TO_VALIDATE` | `UNKNOWN` | No deployment or production configuration was inspected in #3 |
| Search performance evidence | `PENDING_TO_VALIDATE` | `UNKNOWN` | Requires authorized, sanitized evidence; repository tags are not proof |
| Río Cuarto Home canonical markup in `main` | `CURRENT_IMPLEMENTED_TRUTH` | `UNVERIFIED` | Canonical `/` is present in the inspected repository; live behavior is separate |
| Río Cuarto Home governance protection | `CURRENT_IMPLEMENTED_TRUTH` | `NOT_APPLICABLE` | The documentary protection is integrated; the #26 evidence, thresholds and parity gate remain unimplemented |
| Client-side ES/EN implementation in `main` | `CURRENT_IMPLEMENTED_TRUTH` | `UNKNOWN` | Code exists, but #26 must classify its production and SEO significance |

No row above is a `PROVEN_WINNING_SIGNAL`. Presence in `main`, a public ID, a
manual search, or a business assertion does not establish causality or live
performance.

## Data #26 must own

When #26 is executed, this owner must identify at least:

- `goldenBaselineVersion` and capture date;
- production resource and commit lineage, when verifiable;
- declared `seoArchetype` for each comparison;
- source, method, time window, and limitations of every observation;
- signals classified as proven, currently validated, currently unvalidated,
  conflicting, exclusive to Río Cuarto, or not applicable;
- the distinction between repository implementation and external verification;
- sanitized evidence with no credentials, private URLs, query-level personal
  data, or unsupported ranking promises.

Thresholds, tolerances, archetypes, and signal classifications remain
`PLANNED_NOT_IMPLEMENTED` until #26 records evidence. Issue #3 does not fill
those values speculatively.

## Sequence and STOP conditions

The required M0 order is `#3 → #28 → #24 → #4 → #26 → #5`. Issue #26 also blocks
issues #7, #19, and #20. Stop instead of claiming a baseline when production lineage
is unknown, access is missing, bilingual behavior is inferred only from client
code, Search Console evidence is unavailable, or a signal would require copying
Río Cuarto's physical-presence claims to another city.
