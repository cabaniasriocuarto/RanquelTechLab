# SEO parity and Home regression contract

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/truth/SEO_PARITY_CONTRACT.md` (golden SEO comparison and publication decisions)

Implementation state: `PLANNED_NOT_IMPLEMENTED`

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

## Gate results

All five gates use the complete validation-result vocabulary owned by
[SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md#resultados-de-validación-permitidos).
This file does not maintain reduced per-gate enums or create alternative
evidence states. Issue Forms repeat the complete applicable set only because
GitHub dropdowns cannot derive options dynamically from that owner. The generic
task form includes all ten results. In the city form, the four mandatory SEO
publication gates omit `NOT_APPLICABLE`; `MULTILINGUAL_SEO` includes it because
the approved archetype may have no multilingual pair.

`PARTIAL` records incomplete variant or viewport coverage. `UNKNOWN` records an
insufficient observation. `AUTH_BLOCKED`, `PREVIEW_BLOCKED`, and
`CAPABILITY_GAP` preserve the specific cause that prevented validation.
`NOT_APPLICABLE` is not permitted for an applicable publication gate and must
include a changed-surface justification when the gate is genuinely not
material. Only `PASS` satisfies a required gate; every other result remains
distinct and fail-closed.

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
