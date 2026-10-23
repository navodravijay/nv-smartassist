# NV. SmartAssist — Secure Production Architecture (proposed, **not deployed**)

## Version boundaries

```text
V1 STATIC DEMO — ACTUALLY IMPLEMENTED
Browser (HTML + CSS + JavaScript)
    ├─ predefined FAQ knowledge (app.js)
    ├─ language switching and chat UI (in-memory only)
    └─ enquiry form preview (never submits)
No third-party API calls, storage, authentication or live AI.

V2 SECURE APPLICATION — PROPOSED ONLY
Browser (Cloudflare Pages)
    └── HTTPS → Cloudflare Worker / Pages Function API
                    ├── Input validation + bounded request sizes
                    ├── Rate limiting + abuse checks
                    ├── Approved business knowledge access
                    ├── Optional AI provider (server-side secret)
                    ├── Optional lead consent and secure storage
                    └── Optional automation adapter
                           └── Make.com webhook (server-side secret)
```

## Proposed API separation

- `POST /api/chat` receives `{ "message": "...", "language": "en" }` from anonymous customers; use a strict JSON schema, e.g. 1–400 characters for message and one of `en`, `si`, `ta` for language. Permit only limited context history and reject oversize payloads before any AI call. Return bounded text and avoid leaking prompts or secrets. All model/provider credentials stored in encrypted server-side bindings.
- `POST /api/enquiries` receives minimal business contact fields **only after explicit consent**. Validate on the backend, defend against CSRF where applicable, apply rate limits and anti-spam policies, define storage retention and access permissions. Require server-side authentication for admin readers. Prefer an authenticated, monitored queue before a workflow connector.
- `POST /api/admin/*` is for verified and authorized staff only. Authenticate strongly, enforce authorization at each endpoint, never rely on hidden fields, and audit appropriate actions with data minimization.
- Webhooks: **never embed the Make.com URL or `x-make-apikey` in a browser bundle**. Send from Worker to the workflow using server-side secret. Rotate keys (including any previously exposed URL) and revoke old hooks.

## Defensive defaults

1. Secure HTTPS deployment, CSP and security headers (note: Workers/Functions responses require their own headers).
2. Configure explicit API CORS allowlists, if cross-origin traffic is genuinely required. Do not use `*` with credentials.
3. Fail closed on authorization errors; model/tool output cannot grant permissions.
4. Minimize personally identifiable information; consent, deletion policy, access control and privacy notice before real collection.
5. Implement server-side throttling, quotas, timeouts, egress restrictions as appropriate, secret rotation, structured redacted logs and detection of abuse.
6. For AI integration, use approved business documents, retrieval ACLs, prompt-injection tests, content safety and human handoff; never claim infallibility.
7. Separate dev/staging/prod environments and credentials; tests and deployment approval required for client changes.

## Suggested repository structure for a future V2

```text
public/              # Browser assets — no secrets, no webhook URLs
functions/api/        # Cloudflare Pages Functions (if selected)
src/server/           # Validation, permissions, service adapters
src/knowledge/        # Authorized, reviewed business FAQ content
tests/                # Unit, integration, security, e2e checks
.dev.vars             # Local secrets (ignored by Git)
```

This is a design specification, **not proof of compliance or tested production security**. Implement and test each control before using real personal data.
