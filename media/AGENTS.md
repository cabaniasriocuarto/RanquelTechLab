# Media instructions

These rules apply to `media/**` and complement the repository router.

- Every new or replaced asset needs a documented source, usage right or license,
  responsible owner, semantic purpose, dimensions, format, and size. Record that
  truth in the canonical
  [media provenance owner](../docs/truth/MEDIA_PROVENANCE.md); this router is not
  the mutable inventory.
- Decorative media uses empty alt text in HTML; informative media needs concise,
  contextual alt text. Do not embed claims that content review has not approved.
- Optimize responsive delivery, intrinsic dimensions, loading priority, motion,
  reduced-motion behavior, and Core Web Vitals impact before approval.
- The versioned `vercel.json` declares long-lived immutable caching for
  `/media`; application on the live deployment remains externally unverified.
  Replacing a file at the same URL requires an explicit cache/versioning plan.
- Do not add synthetic local imagery that implies a real office, client,
  landmark, team, or presence without verified provenance and approval.
- Media changes are product changes: run visual, accessibility, performance,
  rights/provenance, and exact-head preview gates. Documentation-only work may
  change only `media/AGENTS.md`.
