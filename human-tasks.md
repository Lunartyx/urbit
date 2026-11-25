# Human tasks

No credentials belong in this file. Local implementation continues independently of these external inputs. See DEPLOYMENT.md for the detailed activation and deployment procedure.

## 1. Completed implementation tasks

- [x] Address: Rebstrasse 11, 8156 Oberhasli, Zuerich, Switzerland; shared contact and structured data.
- [x] Variable prices editable in content/pricing.json; service scope, enquiry process and ongoing-care explanations.
- [x] Server enquiry validation, same-origin JSON checks, body limit, signed single-use tokens, honeypot, shared Redis limits, SMTP adapter, safe logging and accessible status messages.
- [x] Production form disabled unless provider configuration, real delivery verification and privacy review are recorded. Email and telephone stay available.
- [x] Mock delivery tests and browser form preview without sending email.
- [x] Reusable founder, qualification, competency, portfolio, case-study and testimonial sections. Unapproved or empty records are hidden.
- [x] English overview, German/English alternate references, page metadata, sitemap, social preview and noindex customer panel.
- [x] Standalone build, non-root Docker image recipe, health endpoint, secrets example and Azure deployment instructions.
- [x] Central editable privacy/provider information in content/privacy.json, explicitly marked unfinished until reviewed.

## 2. Pending business decisions

- [ ] Confirm the inbox to receive enquiries (currently kontakt@dominikurbanetz.ch) and whether to adopt an urbit.ch mailbox. Keep the current mailbox active during any transition.
- [ ] Confirm the advertised 1-2 working-day response expectation, or provide wording matching actual availability. Agree support hours, absence cover, maintenance scope and handover/cancellation terms before making specific promises.
- [ ] Confirm legal business identity and any applicable registration/VAT disclosures. Supply exact official wording if required; no registration number or VAT status has been invented.
- [ ] Supply dated proof for the previously listed UBS Masterclass, SwissSkills qualification and Skills Battle result before approving them for publication. They are now hidden. Supply permission for any real client name, quote or project material; optional portrait also needs publication approval.
- [ ] Define actual retention for mailbox enquiries, logs and backups with your operator; record it in content/privacy.json. Confirm actual processors, processing locations and relevant contractual safeguards, then review the notice before marking it reviewed.

## 3. Pending external account configuration

- [ ] Choose the actual Azure service/SKU and confirm Switzerland North availability, price and supporting-service regions. DEPLOYMENT.md prepares a Linux App Service container; no paid resources were created.
- [ ] Configure the registry, runtime secrets, HTTPS, DNS for urbit.ch and www.urbit.ch, canonical redirects and restricted staging/default Azure hostname. Configure health monitoring and retain a rollback image.
- [ ] For the optional form, choose a transactional SMTP provider and verified sender, complete sender-domain DNS verification, and set SMTP_HOST/PORT/USER/PASSWORD plus MAIL_FROM/MAIL_TO through Azure secrets.
- [ ] For the optional form, configure authenticated TLS Redis with the documented command permissions and topology. Supply REDIS_URL and a random ENQUIRY_SECRET through secrets settings. Never send credentials in Markdown or commit them.
- [ ] Configure upstream request/time/body limits, delivery-failure alerts and access-log retention without collecting message bodies. Check actual provider contracts and locations; Azure preference alone does not establish Swiss-only processing.

## 4. Pending real-world verification

- [ ] On a Docker-capable machine, build/run the image, verify the health route and static assets, and test a staging rollback. Docker is unavailable in this workspace; a direct Windows standalone launch hit an EPERM symlink error. Build the Linux container from source, not from Windows build artifacts.
- [ ] Test a real email to the public inbox, reply from it, and call the published number. Record successful receipt/reply and phone availability privately.
- [ ] Before enabling the form, independently verify real SMTP inbox delivery and replies. Then set ENQUIRY_DELIVERY_VERIFIED only after that test; complete privacy review, test the whole form in restricted staging, including provider failure and shared Redis limits across app instances. Finally enable production. Mock tests do not prove inbox receipt or live Redis behaviour.
- [ ] Verify both domains with real DNS/certificates, HTTP-to-HTTPS and www-to-apex redirects retaining paths/query strings, sitemap, indexing, social preview and deployed assets.
- [ ] Test actual iPhone/Safari, Android and a screen reader. In Safari enable keyboard navigation, then verify link Tab order, skip-link activation, menu Escape and focus return. Two Windows WebKit Tab tests remain explicitly skipped. The Windows Firefox axe scan of the form is also explicitly skipped after repeated browser-process crashes; manually verify form accessibility in Firefox. Form interaction tests run in all three browsers, and production-page axe scans run in all three. Automation does not replace these device checks.
- [ ] Review production mobile performance and actual enquiry outcomes after launch. A contact click is not a delivered enquiry or sale.

## 5. Actual launch blockers

For the website with direct email/telephone only:
- [ ] Complete accurate business/provider/privacy disclosures using the facts above.
- [ ] Verify live inbox/telephone and confirm published response commitments.
- [ ] Deploy and verify DNS, HTTPS, redirects, production assets and accessibility on real devices.

For the form specifically:
- [ ] Complete SMTP, Redis, secret and privacy configuration and real delivery/staging checks. Until then leave ENQUIRY_ENABLED=false and ENQUIRY_DELIVERY_VERIFIED=false. This does not block launching the direct-contact website once its own gates pass.

Missing testimonials, client projects, a portrait, numeric pricing and the customer panel are not launch blockers. Do not mark 95/100 achieved on the strength of local code alone.

## 6. Optional post-launch improvements

- [ ] Submit the sitemap with your Search Console account and create eligible local listings using consistent business details; do not imply walk-in availability without confirming it.
- [ ] Approve genuine credibility records in content/credibility.json as evidence becomes available; keep unapproved records unpublished.
- [ ] Keep a minimal private lead log (source, service, qualified, quoted, won/lost and reason). Choose analytics only for a defined decision and update privacy information before enabling it.
- [ ] Consider booking tools or a functional customer panel only after real customer workflows justify them. The current panel remains marked in development and noindex.
