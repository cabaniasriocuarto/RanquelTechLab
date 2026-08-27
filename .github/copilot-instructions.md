# Repository instructions for GitHub Copilot

Treat the root `AGENTS.md`, the current GitHub issue, and `docs/truth/INDEX.md` as
the repository authority. Read the closest nested `AGENTS.md` before changing a
path. This file is a compatibility router, not a second policy source.

- Start from the current `main`, report preflight, and emit a complete
  `TASK_CONTRACT` before editing.
- Change only allowed paths and external systems. Stop on drift or ambiguity.
- Use explicit staging; never use `git add .` or `git add -A`.
- Run proportional diff, scope, secret/privacy, focal, and surface checks.
- Preserve honest evidence states. Missing or blocked work is never `PASS`.
- Keep product truth in its canonical owner under `docs/truth/**`; link instead
  of duplicating it here.
- Agents may prepare a Draft PR. Humans decide Ready, merge, deploy, secrets,
  publication, campaigns, and spending.

Routing:

- Documentation: `docs/AGENTS.md`
- GitHub metadata/templates/workflows: `.github/AGENTS.md`
- Serverless APIs: `api/AGENTS.md`
- Media: `media/AGENTS.md`
- Repository entry point: `docs/START_HERE.md`
