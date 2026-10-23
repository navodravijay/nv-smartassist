# NV. SmartAssist — Security & Privacy Baseline

## V1 threat model and scope

This is an **offline-capable static demonstration**, not a production customer-support application. User messages are processed entirely in the browser and not logged, sent, or saved by the application. Refreshing clears the in-memory conversation. The enquiry form is **only a preview**: validated input is discarded after confirmation. There are **no server routes**, databases, cookies, trackers, third-party scripts or credentials.

### Implemented protections

- No HTML parsing of user-provided messages: rendering uses `document.createElement` + `textContent`, not `innerHTML` or `eval`.
- Maximum 400 characters per chat message; maximum 18 demo exchanges per session. These are UX limits, **not a secure anti-abuse measure**.
- Form uses HTML field types, max lengths and built-in validation, but does **not send** data.
- All script, styles and assets served from origin only, no CDN dependencies.
- Cloudflare Pages `_headers` provides a restrictive Content Security Policy: `connect-src 'none'`, `form-action 'none'`, `script-src 'self'`, framing disallowed, plus other headers. This policy is effective only when served by a platform that applies `_headers`, such as Cloudflare Pages static assets.
- Repository `.gitignore` excludes `.env*`, `.dev.vars*`, key and certificate files; **also inspect staged files** before commits. Gitignore does not remove already tracked secrets or leaked history.
- External official site link uses `rel="noopener noreferrer"`.
- No claims of complete security or AI accuracy.

### Before making a production chatbot or lead system

1. Do not put API keys, Make.com webhook URLs, Google credentials or sensitive `.env` files in frontend HTML/JS or GitHub. Rotate any exposed webhook/credential (including the old Make.com URL exposed in earlier screenshots); disable/revoke the previous one and validate rotation.
2. Add server-side endpoints using Cloudflare Workers/Pages Functions, with secrets stored in Cloudflare's encrypted **Secrets** bindings (not plain variables). Never expose those secrets in responses, client bundles or logs.
3. Add positive input schema validation, server-side length limits, message quotas and IP/session rate limiting, abusive input controls, and sensible timeout and retry policies. Return generic errors and avoid revealing stack traces.
4. For forms storing personal information, use clear purpose/consent notices, a documented retention schedule, restricted access, encrypted transport/storage as appropriate and deletion/export procedures. Evaluate applicable Sri Lankan data-protection obligations with appropriate advice.
5. For live AI, control retrieval access, prompt-injection risks, provider data policies, sensitive data handling, tool permissions, human escalation and hallucination/accuracy tests. Do not let model output trigger payments or privileged actions without authorization.
6. Enforce authorization server-side for staff dashboards, analytics, transcripts and CRM integrations. Do not trust frontend toggles or hidden fields.
7. Ensure secrets rotate, deployment branches are protected, dependencies scanned if added, CI tests pass, and approved security headers are included on **Function responses separately**. `_headers` is not automatically applied to Pages Functions responses.
8. Validate keyboard/mobile accessibility, multilingual responses, form safety, XSS, CSRF for state-changing operations, CORS origin policy and intentional client data flows before making production claims.

## Helpful official documentation

- OWASP DOM XSS Prevention: https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html
- OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
- Cloudflare Pages static headers: https://developers.cloudflare.com/pages/configuration/headers/
- Cloudflare Workers secrets: https://developers.cloudflare.com/workers/configuration/secrets/

## Responsible disclosure

This is a prototype, not a security audit or compliance certification. If you find an issue, contact the owner through the verified channels on the official business website. Do **not** post credentials or webhook URLs in public issues.
