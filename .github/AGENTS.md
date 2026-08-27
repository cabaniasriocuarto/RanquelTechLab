# GitHub governance instructions

These rules apply to `.github/**` and complement the repository router.

## Issues and pull requests

- Issue Forms and PR templates route to canonical owners; they do not become a
  competing source of truth.
- Preserve issue state, authorship, history, and unrelated metadata. Create or
  reuse labels, milestones, and relationships idempotently after reading current
  state. Never duplicate exact names or silently rename resources owned elsewhere.
- Native sub-issue changes are fail-closed: do not replace an existing parent,
  delete a relationship, or reorder unexpected children without a separate human
  decision. Verify parents, order, and open/closed state after mutation.
- Draft is the default for agent-created PRs. Ready, merge, close, deploy, and
  administrative bypass are human decisions.

## Workflow trust boundary

- Executable workflows are owned by issue #24, not by documentation-only work.
- Future workflows must use least privilege, exact-head validation, pinned
  third-party actions when viable, safe concurrency, and no automatic deploy or
  merge.
- Never use `pull_request_target` to execute untrusted PR code or consume its
  artifacts with secrets. Any privileged workflow requires its own threat model.

## Validation

- Validate Issue Form YAML, Markdown links, template discoverability, scope, and
  secret absence.
- Public IDs may be documented as repository configuration; tokens, credentials,
  personal-data samples, and private deployment URLs must not be committed.
