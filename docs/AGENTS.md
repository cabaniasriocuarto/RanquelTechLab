# Documentation instructions

These rules apply to `docs/**` and complement the repository router.

## Truth and ownership

- Read `START_HERE.md` and `truth/INDEX.md` before changing documentation.
- Each truth type has exactly one owner file listed in `truth/INDEX.md`. Other
  documents link to that owner instead of restating mutable detail.
- Give every canonical document an explicit `Status` and `Owner`. Use only the
  documentary states defined in `truth/SOURCE_OF_TRUTH.md`.
- Separate facts implemented in the repository, external verification, plans,
  historical context, and unresolved risk. Code presence is not proof that an
  external account, deploy, tag, index, or campaign is active.
- A Draft PR is not current `main` truth. Volatile SHAs, previews, test counts,
  deployments, and work-in-progress results belong in the issue, PR, or evidence
  manifest, not stable routers.

## Editing and review

- Preserve useful history. Mark superseded material and point to its successor;
  do not silently rewrite past decisions.
- When technical truth changes, update its owner, references, decision record
  when applicable, and changelog in the same coherent change.
- Use descriptive headings, unique anchors, relative repository links, and
  language that distinguishes requirements (`MUST`) from guidance (`SHOULD`).
- Validate Markdown, local links, anchors, owner uniqueness, contradictions,
  scope, and secrets. Treat broken discovery paths as blocking.
- Documentation about product behavior must cite an inspected repository path or
  mark the statement `PENDING_TO_VALIDATE`/`UNKNOWN`.

## Evidence

- Evidence records commands and observed results; it does not upgrade missing
  execution to success.
- Writer and independent auditor must be different sessions or agents. The
  auditor reviews exact HEAD read-only and does not repair findings.
- Keep personal data, credentials, tokens, private URLs, and unredacted logs out
  of documentation and evidence.
