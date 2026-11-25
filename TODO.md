# URBIT growth roadmap

Approved to begin: 24 November 2026. Baseline: local website audit, 72/100 expert assessment (not a measured conversion score). Preserve the purple identity and the explicitly unfinished customer panel.

## P0 — Before promotion

- [x] Complete provider postal/address details. **Rebstrasse 11, 8156 Oberhasli, Zürich, Switzerland confirmed.** Pages: Impressum, Datenschutz, site data. Effort: small. Removes unfinished identity information.
- [ ] Confirm hosting, email/analytics providers, processing countries and log retention; update privacy notice. **Azure Switzerland North preferred; actual service, further processing locations and retention still needed. See human-tasks.md.** Effort: small. Accurate disclosure.
- [ ] Verify mailbox receipt/reply and phone availability with owner; verify deployed HTTPS and both domains. **Needs owner/deployment access.** Effort: small. Prevent lost enquiries.

## P1 — Buying confidence

- [x] Prioritise website, business email and ongoing care; explain scope and exclusions. Pages: home, services. Effort: medium. Helps buyers recognise fit.
- [x] Publish editable variable pricing, assumptions and recurring-cost explanations. **Variable pricing confirmed by owner; editable content/pricing.json implemented. Numeric amounts optional.** Pages: services/FAQ. Effort: small–medium. Reduce budget uncertainty.
- [x] Publish URBIT as an explicitly labelled own-project example, without invented customer results. Pages: home. Effort: small. Demonstrates actual work.
- [ ] Add genuine client examples, portrait and dated qualification evidence when supplied. **Needs evidence/permissions.** Pages: home/about. Effort: medium. Establish trust.
- [x] Explain cost drivers, handover and ongoing-care decisions in a concise FAQ. Pages: services. Effort: small. Answer buying objections.
- [x] Clarify what happens after an enquiry and welcome small/uncertain requests. Pages: contact/CTAs. Effort: small. Reduce hesitation.
- [x] Implement accessible enquiry form infrastructure, validation, spam protection, shared limits, safe logging and mock tests. Production activation and real receipt tests remain external tasks in human-tasks.md.
- [ ] Confirm support hours, response expectations, emergency boundaries, ownership and maintenance terms with owner before publishing specific commitments. Effort: medium. Dependencies: operating capacity.

## P2 — Refinement and measurement

- [x] Shorten mobile hero decoration and make primary vs supporting services distinct. Components: hero/services/CSS. Effort: small–medium. Faster scanning.
- [x] Unify primary enquiry wording. Components: header/hero/CTA. Effort: small. Predictable navigation.
- [x] Build substantive priority-service landing pages for websites, business email and hosting, with distinct preparation/scope content and shared editable prices. Effort: medium. Search relevance, not empty SEO pages.
- [ ] Complete accurate local business listings where eligible. **Needs business details.** Effort: small.
- [ ] Track contact intent separately from received enquiries, qualified leads and sales. **Needs analytics/privacy decisions and lead log.** Effort: medium.
- [ ] Collect deployed CWV/mobile performance; check Safari/iOS, Firefox and screen-reader flow. **Needs production candidate/devices.** Effort: medium. Automated Chromium, Firefox and WebKit coverage added. Real Safari keyboard and live performance remain pending; see human-tasks.md.

## P3 — Only when demand justifies it

- [ ] Build customer panel around actual client workflows. Keep current In Entwicklung status meanwhile. Effort: large. Needs customers and access-control design.
- [ ] Reconsider booking/estimator tools once pricing, availability and recurring enquiry patterns are stable. Effort: medium–large.

## Verification log

- Audit baseline: build, lint, typecheck and 11 browser tests previously passed.
- First implementation batch: build, lint, typecheck and all 11 Playwright tests passed. Mobile screenshots reviewed; FAQ expansion checked. No deployment performed. Numeric pricing, provider details, real customer proof and form delivery remain pending input.

- Owner update: Azure hosting and 8156 Oberhasli confirmed. Pricing remains variable and is editable in content/pricing.json; see CONTENT.md. Removed Vercel analytics integration for this Azure-targeted build.

- Second batch: full postal address and structured data added; Azure regional preference recorded; human-tasks.md created; copy-email fallback added; service pages and sitemap expanded. Desktop/mobile service-page screenshots reviewed. Build, lint and typecheck pass. Browser suite expanded to Chromium, Firefox and WebKit; final result below.

## Remaining path to the quality target

Local content, navigation, form infrastructure and deployment preparation are implemented. Do not mark 95/100 achieved: form delivery, actual Azure privacy/deployment facts, genuine project/qualification evidence and live performance still require human inputs. Those tasks are detailed in human-tasks.md. Panel, booking and estimator remain deliberately deferred until customer demand justifies them.

- Final verification (25 November 2026): build, lint and typecheck passed; 46 browser tests passed across Chromium, Firefox and WebKit. Two Windows WebKit Tab-navigation tests explicitly skipped; real Safari keyboard checks remain in human-tasks.md. No deployment performed.

## TASK.md implementation continuation

- [x] Server enquiry architecture with SMTP abstraction, validation, signed tokens, shared Redis rate limits, error states and mock delivery tests.
- [x] Fail-closed production activation gate; direct contact remains available.
- [x] Approval-controlled credibility components; unverified award claims hidden.
- [x] English overview and reciprocal homepage language references.
- [x] Central privacy/provider configuration and honest draft status.
- [x] Azure standalone/container preparation, health endpoint, secrets inventory and deployment/rollback checklist.
- [x] Human tasks reorganised into the six requested groups; form activation distinguished from direct-contact website launch.
- [ ] External deployment, actual provider/Redis integration, inbox receipt and real-device checks: see human-tasks.md.

### Continuation verification (25 November 2026)

- Lint, TypeScript, production build and git diff whitespace checks passed.
- Seven mocked enquiry unit tests passed; no real email was sent.
- Final combined browser run: 57 passed, 3 explicitly skipped. Covers 11 routes at 320/390/768/1440px, production-page axe scans, SEO/contact links, disabled-production-form gate, health endpoint and mocked form success/failure/focus.
- Skips: two Windows WebKit keyboard tests; one Windows Firefox form axe test after reproducible browser-process crashes. Form interactions pass in all three browsers. Real Safari and manual Firefox form accessibility remain human verification tasks.
- English desktop/mobile and form mobile screenshots reviewed; Next devtools reported no compilation/runtime session errors.
- Docker unavailable. Direct standalone start on the Windows Q: share failed with EPERM resolving a pnpm React symlink; production browser tests used next start successfully. Linux container build/runtime remains unverified and is explicitly required before deployment.
- No cloud resources created, no deployment, and no actual SMTP/Redis integration claimed.
