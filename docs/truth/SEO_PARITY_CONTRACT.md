# SEO parity and Home regression contract

Status: `PLANNED_NOT_IMPLEMENTED`

Owner: `docs/truth/SEO_PARITY_CONTRACT.md` (golden SEO comparison and publication decisions)

## Ownership boundary

Issue #26 owns the semantic parity contract. Issue #7 owns its executable SEO
validator and issue #24 owns only the generic harness integration points. Issue
3 provides names, routing, templates, and fail-closed governance; it does not
implement or pass a parity gate.

The evidence baseline compared by this contract belongs to
[SEO_GOLDEN_BASELINE.md](SEO_GOLDEN_BASELINE.md). General SEO and local-search
invariants remain in [SEO_CONTRACT.md](SEO_CONTRACT.md).

## Conditional task metadata

Every task or PR with a material SEO/indexable surface must declare:

```text
seoArchetype
goldenBaselineVersion
SEO_GOLDEN_PARITY
HOME_SEO_REGRESSION
LOCAL_CONTENT_UTILITY
MOBILE_SEO_PARITY
MULTILINGUAL_SEO
```

Until #26 defines the baseline and contract, `seoArchetype` and
`goldenBaselineVersion` are unresolved and the gates cannot be reported as
`PASS`. A non-SEO task may use `NOT_APPLICABLE` only with a changed-surface
justification.

## Reserved gate results

| Gate | Allowed results |
| --- | --- |
| `SEO_GOLDEN_PARITY` | `PASS`, `FAIL`, `BLOCKED`, `PARTIAL`, `NOT_RUN`, `NOT_APPLICABLE` |
| `HOME_SEO_REGRESSION` | `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `NOT_APPLICABLE` |
| `LOCAL_CONTENT_UTILITY` | `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `NOT_APPLICABLE` |
| `MOBILE_SEO_PARITY` | `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `NOT_APPLICABLE` |
| `MULTILINGUAL_SEO` | `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `NOT_APPLICABLE` |

`NOT_APPLICABLE` is not permitted for an applicable publication gate. `PARTIAL`,
`BLOCKED`, `NOT_RUN`, and `FAIL` do not authorize publication. The generic
meaning of every result remains owned by
[SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md); this file does not create alternative
evidence states.

## Fail-closed publication boundary

Issues #5, #7, #19, and #20 remain blocked on #26. No city can be presented as
golden-equivalent merely because it copies Home markup or metadata. The future
contract must compare the correct page archetype, preserve Home/Río Cuarto,
require authentic local content, and prohibit copying its address, map,
`LocalBusiness`, or other physical-presence signals to a remote city.

The current ES/EN client-side implementation in `main` is an observed code fact,
not proof of multilingual SEO parity. Issue #26 must classify it against live and
repository evidence; #23 remains the owner of future compatibility changes.

## Evidence and implementation boundary

Evidence must identify exact HEAD, environment, baseline version, archetype,
method, result, limitations, reviewer, and rollback/publication decision. The
executable implementation, fixtures, schemas, CI wiring, baseline capture, and
product remediation are outside #3 and remain `PLANNED_NOT_IMPLEMENTED`.
