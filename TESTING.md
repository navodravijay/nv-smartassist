# NV. SmartAssist — Pre-release verification

## Manual acceptance checklist

- [ ] Site opens and remains readable at 360 px, 390 px, 768 px, 1280 px, and 1440 px.
- [ ] Exact monogram `NV.` and creator credit `Navod Ravindu Jayaweera` are visible.
- [ ] Prompt chips and side topics generate the expected scripted replies.
- [ ] English, Sinhala and Tamil buttons work; Sinhala and Tamil glyphs display correctly.
- [ ] Enter sends; Shift+Enter inserts a newline; blank input is rejected.
- [ ] Arbitrary text such as `<img src=x onerror=alert(1)>` appears as plain text, not HTML.
- [ ] Reset clears chat; copy response provides feedback; long text wraps properly.
- [ ] Lead demo form rejects missing/invalid fields; success screen says nothing was sent or saved.
- [ ] Reopening the lead form shows cleared fields; refreshing clears the chat.
- [ ] DevTools Network shows no third-party requests or hidden chat/form submission.
- [ ] Keyboard and focus navigation are usable; reduced-motion is respected.
- [ ] On Cloudflare, verify security response headers on `index.html` and on static assets. Confirm console has no CSP errors.
- [ ] Check deployment's GitHub repo for accidentally committed keys, `.env` and private business data.
- [ ] If you used the formerly exposed Make.com URL elsewhere, rotate it separately; this prototype does not use it.

## Scope statement

V1 demonstrates the **UI and local rule engine only**. Real AI, messaging and CRM integration must not be advertised as operational until individually built, deployed and tested.
