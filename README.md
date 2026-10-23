# NV. SmartAssist — Interactive Prototype V1

**By NV SHARP SOLUTIONS**  
**Created by Navod Ravindu Jayaweera**

A premium, dependency-free, responsive chatbot concept in English, Sinhala, and Tamil. Designed for demonstrations and customer discovery, not real-world customer support.

## What works

- Responsive cinematic landing page with a working chat console.
- Multilingual *scripted* FAQ answers (English / Sinhala / Tamil); topic shortcuts and prompts.
- Live rule-match inspector, message reset, and copy-last-reply control.
- Client-side enquiry form simulation with native validation and an explicit **not submitted** result.
- Reduced-motion, keyboard navigation, semantic labeling, and UI validation limits.
- No API keys, external JavaScript/CDNs, analytics, cookies, localStorage or network requests.

## What does **not** work yet

- **No live AI model**, retrieval-augmented knowledge base or server-based answer generation.
- **No real lead submission, CRM, Google Sheets, email or WhatsApp connection.** Form input is cleared locally and never transmitted.
- No guaranteed pricing, response times, support availability or verified business claims.
- The frontend cannot enforce authentication, abuse prevention, real data retention, or role-based authorization. Those require backend design.

## Files

```text
nv-smartassist/
├── index.html            # Page layout and accessible controls
├── styles.css            # Brand styling, cinematic motion and responsive breakpoints
├── app.js                # Localized scripted FAQ engine and UI logic
├── assets/
│   └── favicon.svg       # NV. icon
├── _headers              # Cloudflare Pages static security headers
├── .gitignore            # Credential exclusion defaults
├── README.md
├── SECURITY.md
├── ARCHITECTURE.md
└── TESTING.md
```

## Local preview (Windows / VS Code)

1. Extract the ZIP and open its `nv-smartassist` folder in VS Code.
2. In VS Code, choose **Terminal → New Terminal**.
3. Run `python -m http.server 5500` (or `py -m http.server 5500` on Windows).
4. Browse `http://localhost:5500`.

The app also opens by double-clicking `index.html`, though browsers can impose different `file://` restrictions (e.g., Clipboard API).

## Deploy to a new Cloudflare Pages project

1. Create a new GitHub repository, e.g. **`nv-smartassist`** (separate from the main business website).
2. Upload the entire folder's **contents** to repository root (`index.html`, `app.js`, `styles.css`, `_headers`, `assets/`, etc.). Do not upload credentials.
3. In Cloudflare **Workers & Pages → Create → Pages → Connect to Git**, link that repository.
4. Production branch: `main`. Framework preset: **None**; build command: leave empty (or `exit 0` if required); output directory: `.` (repository root).
5. Deploy, then verify that `_headers` is present in the deployed static asset output and that all chat and mobile tests pass.

Cloudflare documentation: https://developers.cloudflare.com/pages/configuration/headers/

This bundle is not connected to or deployed on GitHub/Cloudflare by ChatGPT. You control the publishing step.

## Brand details

- Brand: **NV SHARP SOLUTIONS**
- Exact monogram: **NV.**
- Colors: Navy `#080d1b`, blue `#4d8dff`, cyan `#4de0ff`
- Creator / developer credit: **Navod Ravindu Jayaweera**
- Official existing business portfolio (link only): https://nv-sharp-solutions.pages.dev/#portfolio

## Next stage

Design an approved business knowledge source, a server-side endpoint using Cloudflare Workers/Pages Functions, strong input size limits and validation, authentication/authorization for administrators, bot-abuse controls, rate limits, redacted monitoring, privacy notices and optional consent-based lead submissions. Add AI, messaging or CRM APIs only via **server-side secrets** — never from the frontend.

Read `SECURITY.md` before turning this into a paid customer product.
