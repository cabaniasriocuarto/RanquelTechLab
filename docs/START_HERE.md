# Start here

Status: `CURRENT_IMPLEMENTED_TRUTH`

Owner: `docs/START_HERE.md` (repository documentation entry point)

This repository uses an agent-first, human-governed workflow. Start from the
current issue and the real worktree; do not use old chat context as truth.

## Required reading order

1. The current GitHub issue, its native parent, and declared dependencies.
2. The repository [AGENTS.md](../AGENTS.md) and the closest nested instructions.
3. The [truth owner registry](truth/INDEX.md).
4. The owners selected by the changed surfaces and risk.
5. The [development workflow](truth/DEVELOPMENT_WORKFLOW.md),
   [quality gates](truth/QUALITY_GATES.md), and
   [testing matrix](truth/TESTING_MATRIX.md).

## Before editing

- Fetch the current `main` reference and report repository, branch, `BASE_SHA`,
  `HEAD`, worktree status, relation to `origin/main`, and active Git operations.
- Emit a complete `TASK_CONTRACT` using the
  [canonical template](harness/TASK_CONTRACT_TEMPLATE.md).
- Stop on unowned drift, unexpected Git state, ambiguous destructive action,
  unauthorized external mutation, secret exposure, or scope expansion.

## Current repository shape

The implemented repository is a static HTML/CSS/JavaScript site with independent
pages, shared browser runtime, three Vercel Serverless Functions, and static
media. The canonical code-level inventory is owned by
[ARCHITECTURE.md](truth/ARCHITECTURE.md),
[FEATURE_MAP.md](truth/FEATURE_MAP.md), and
[ROUTE_AND_PAGE_MAP.md](truth/ROUTE_AND_PAGE_MAP.md).

The governance scaffold integrated by issue #3 is current repository truth. Its
accepted boundary, bootstrap exception and transfer of executable enforcement
to issue #24 are recorded in the
[issue #3 closeout](closeouts/issue-3.md). The closed-unmerged PR #29 is
historical input for #24 and does not govern `main`.

The future Geo-SEO platform is planned, not implemented. Its discovery entry is
[docs/geo-seo/README.md](geo-seo/README.md). Executable harness tooling and CI
belong to issue #24 and do not exist merely because these governance documents do.
The mandatory execution order, including the #28 Vercel-topology gate before
issue #24, is owned only by [NEXT_STEPS.md](truth/NEXT_STEPS.md); an ownership
reference here never authorizes skipping that gate.

## Evidence and closeout

Use the [evidence manifest](harness/EVIDENCE_MANIFEST_TEMPLATE.md) and preserve
the difference between self-validation, independent audit, and post-merge
acceptance. A commit, push, or Draft PR alone is not `DONE`.

Until #24 implements executable enforcement, unavailable checks retain their
honest state—such as `CAPABILITY_GAP`—and Vercel deployment statuses do not count
as harness CI.
