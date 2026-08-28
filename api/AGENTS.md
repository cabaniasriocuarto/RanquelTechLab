# Serverless API instructions

These rules apply to `api/**` and complement the repository router.

- Treat endpoint shape, method, authentication, validation, error semantics,
  cache behavior, upstream calls, and environment-variable names as contracts.
- Never expose secret values. Use synthetic fixtures and redact access tokens,
  signed payloads, emails, phone numbers, event identifiers, and upstream bodies.
- Minimize personal data, validate inputs and sizes, define retention/forwarding
  boundaries, and keep personal data out of URLs, analytics, logs, and evidence.
- Review authorization, origin assumptions, replay/expiry, rate limiting,
  timeouts, upstream failure, and fail-closed behavior for every functional API
  change. A partial control is not evidence of complete security.
- External systems are read-only unless the task contract explicitly authorizes
  a mutation. Vercel settings, secrets, Daily, Calendar, FormSubmit, and Gmail
  changes require explicit human scope.
- API behavior changes are at least `HIGH` risk and require focal tests, security
  and privacy review, exact-head evidence, rollback, and independent audit.
- Documentation-only changes to this file must not modify `api/**/*.js`.
