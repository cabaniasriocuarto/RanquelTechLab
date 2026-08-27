# Ranquel Tech Lab agent router

## Authority and scope

- Use this order of authority: current human instruction, current GitHub issue and
  its native parent/dependencies, applicable `AGENTS.md`, `docs/truth/**`, then
  other repository documentation. Never use chat memory as repository truth.
- Read the closest nested `AGENTS.md`; it complements this file and may tighten
  rules for its directory without weakening repository-wide contracts.
- Work in Spanish unless the issue or artifact requires another language. Keep
  evidence literal: unknown or unverified facts stay unknown or unverified.

## Required workflow

1. Read the owner issue, parent, dependencies, `docs/START_HERE.md`, and
   `docs/truth/INDEX.md`.
2. Run preflight and report repository, `BASE_SHA`, `HEAD`, branch, status,
   relation to `origin/main`, and active Git operations.
3. Before editing, emit a `TASK_CONTRACT` with allowed/forbidden paths and
   external systems, changed surfaces, risk, preserved contracts, validations,
   evidence, stop conditions, and Definition of Done.
4. Fail closed on scope drift. Use exact staging by explicit path; never use
   `git add .` or `git add -A`.
5. Run unstaged and staged diff checks, scope checks, secret/privacy checks,
   focal tests, and surface gates selected by the review matrix.
6. Report honest evidence states. A writer finishes at
   `SELF_VALIDATED_ONLY`; independent validation and post-merge acceptance are
   separate events.
7. Open a Draft PR with the owner issue, scope/no-scope, evidence, risk,
   rollback, and an independent-audit request. Humans decide Ready, merge,
   deploy, publication, campaigns, secrets, and spending.
8. After merge, perform acceptance and reconcile affected truth owners before
   declaring the work done.

## Universal contracts

- One coherent issue, one branch, one Draft PR. No direct push to `main`,
  force-push, auto-merge, bypass, or unrelated branch/PR changes.
- Protect Río Cuarto's Home and canonical `/` unless an explicit issue changes
  them. Do not invent offices, clients, testimonials, figures, sources, or local
  experience.
- Do not edit generated output manually; update its source or generator.
- Never expose secrets or put personal data in URLs, analytics, evidence, logs,
  fixtures, or commits. Minimize and redact personal data everywhere.
- `NOT_RUN`, `PARTIAL`, `UNKNOWN`, `AUTH_BLOCKED`, `PREVIEW_BLOCKED`, and
  `CAPABILITY_GAP` are never `PASS`.
- Public HTML must be verified on the exact-head preview in desktop and mobile
  when applicable. CI, preview, and audit evidence must identify the exact HEAD.

## Routing

- Start with [docs/START_HERE.md](docs/START_HERE.md) and the canonical owner
  registry in [docs/truth/INDEX.md](docs/truth/INDEX.md).
- Documentation rules: [docs/AGENTS.md](docs/AGENTS.md).
- GitHub governance rules: [.github/AGENTS.md](.github/AGENTS.md).
- Serverless API rules: [api/AGENTS.md](api/AGENTS.md).
- Media rules: [media/AGENTS.md](media/AGENTS.md).
- `scripts/AGENTS.md` belongs to issue #24 when executable harness tooling exists.
- `argentina/AGENTS.md` belongs to issue #6 when generated Geo-SEO output exists.
