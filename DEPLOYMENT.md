# Deployment

## Portainer Git repository deployment (Docker Standalone)

In the Prod environment, open **Stacks → Add stack → Repository** and enter:

- Name: `urbit`
- Repository URL: `https://github.com/Lunartyx/urbit`
- Repository reference: `refs/heads/main`
- Compose path: `portainer-stack.yml`
- Authentication: off for this public repository
- Optional environment variable: `HTTP_PORT` (defaults to `3000`; choose an unused host port)

Deploy the stack. Portainer clones the repository and builds the Dockerfile on the server. This setup requires Docker Standalone; Swarm requires a prebuilt registry image instead.

Check that the web container becomes healthy, then open `http://SERVER_IP:3000/api/health` and the homepage (adjust the port if changed). Point the domain's HTTPS reverse proxy at the published host port. The contact form remains disabled until the activation procedure below is complete.

To update, push changes to `main`, then use Portainer's repository update/redeploy action. Inspect build output if deployment fails. Retain the previous release for rollback.

Reference: [Portainer repository stacks](https://docs.portainer.io/user/docker/stacks/add#option-3-git-repository).

## Azure deployment

Prepared for a Linux container on Azure App Service. No resources have been created. Confirm service, SKU, registry, mail and Redis availability in Switzerland North before choosing them. The region preference is not a promise about every processing location.

## Build and configuration

1. Run `pnpm install --frozen-lockfile`, `pnpm test:unit`, `pnpm lint`, `pnpm typecheck`, `pnpm build`, then `pnpm test:e2e`.
2. Build the supplied Dockerfile: `docker build -t urbit:release .`. It packages Next standalone output and runs as the unprivileged Node user. No secrets belong in build arguments or the image. Docker execution still needs validation on a Docker-capable machine. A local standalone launch on this Windows Q: share failed with EPERM while resolving a pnpm React symlink; the normal production server works. Build the container on Linux rather than copying Windows-generated standalone artifacts.
3. Test locally: `docker run --rm -p 3000:3000 urbit:release`. Check `/api/health`, CSS/fonts/images and all routes. The form is disabled by default.
4. Publish the tested image to your chosen registry; pin the release digest for reproducible deployment and rollback. For App Service, prefer managed identity for registry access. Configure the container target port to 3000 (classic custom containers use `WEBSITES_PORT`; sidecar-enabled apps use their target-port setting).
5. Add server environment values through Azure application settings / Key Vault references. Use `.env.example` as the inventory, never as real credentials. `SITE_URL=https://urbit.ch` must match the canonical URL at build and runtime. The default build already uses this domain. Restart after secret changes. Never use `NEXT_PUBLIC_` for secrets.
6. Configure `/api/health` as the health path. It checks application liveness only, not inbox delivery or Redis availability. Monitor sanitised `delivery_failed` and `abuse_store_unavailable` events separately. Do not enable request-body capture in proxies or monitoring.

## Form activation procedure

The public form requires **all** of: valid SMTP/TLS and Redis/TLS settings, a random secret of at least 32 characters, `ENQUIRY_ENABLED=true`, `ENQUIRY_DELIVERY_VERIFIED=true`, and `reviewed: true` in `content/privacy.json`. Missing configuration fails closed. Never set review/verification flags just to make it appear.

- Select a transactional SMTP provider, verified sender and destination inbox. Ports 465 or 587 only; TLS certificate checking remains enabled. Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `MAIL_FROM`, `MAIL_TO` as secrets where applicable. Complete the provider's SPF/DKIM and domain verification instructions and review DMARC alignment.
- Use an authenticated TLS Redis endpoint (`REDIS_URL`) accessible from the app. This adapter expects a single endpoint supporting EVAL, GET, EXISTS, SET, INCR and EXPIRE; verify the selected service's authentication and topology. No process-local fallback is used. Test connectivity and ACLs before activation.
- Generate `ENQUIRY_SECRET` using a cryptographically secure password/secret generator. Use the same secret across replicas; rotation invalidates outstanding tokens. Do not paste it into task documents.
- Test the SMTP provider independently from a restricted deployment/staging environment; confirm inbox receipt, spam folder placement and reply handling. Record date, tested sender/recipient and responsible person privately. Only after this real test set `ENQUIRY_DELIVERY_VERIFIED=true`.
- Complete actual provider, locations, retention and contract details in `content/privacy.json`, review the notice and set `reviewed: true`; rebuild. Enable the form in restricted staging first and confirm an end-to-end enquiry, failure handling and shared Redis limits across instances. Then enable the public deployment.
- Acceptance by SMTP is not proof of inbox receipt. A timeout can be ambiguous; the app does not retry automatically. The visitor retains their message after errors and can use direct email/phone.
- Atomic limits: 3 attempts per normalised email and 30 total per 15-minute window; tokens expire after 30 minutes, are single-use and require 3 seconds before sending. Failed mail attempts consume limits. Email keys use HMAC; names/messages are not stored in Redis. These controls limit delivery abuse, not volumetric attacks. Set upstream request/body/time limits and appropriate Azure edge protection before public activation; do not trust user-supplied forwarded IP headers.
- Disable quickly with `ENQUIRY_ENABLED=false` and restart. Direct email and telephone remain visible.

## Local form checks without sending email

In PowerShell, set `$env:ENQUIRY_FORM_PREVIEW='true'` and run `pnpm dev --port 3000`. This only renders controls in development; API activation gates stay enforced. With the production test server on 3100, set `$env:TEST_FORM_PREVIEW='true'` and run `pnpm exec playwright test tests/form.preview.spec.ts`. Browser requests are intercepted with mocks; no provider is contacted. Clear preview variables when finished.

## Domain and launch checks

- Bind **urbit.ch and www.urbit.ch**, verify DNS ownership and valid certificates for both; enforce HTTPS at Azure ingress. HTTP must redirect to HTTPS before serving content. Verify www redirects to apex with path and query preserved (application 308 rule prepared). Add HSTS at the edge after validating both certificates and HTTPS; only include subdomains if all are HTTPS-ready.
- Restrict the default Azure hostname/staging host or prevent indexing there. Do not expose a second public canonical copy. Protect preview deployments with access restrictions.
- Check public pages are indexable, `/login` remains noindex, sitemap/robots and German/English alternates use the canonical host. Inspect social preview and 404 handling.
- Check email receipt/reply and telephone, keyboard navigation, actual iPhone/Safari, Android and a screen reader. Windows automated WebKit's two Tab tests remain skipped; the Windows Firefox form axe scan also remains skipped after browser crashes. Verify those flows manually. All three browsers still exercise form success/failure and focus handling.
- Confirm provider disclosures, business identity and advertised response/support commitments. Do not claim VAT/registration status or Swiss-only processing without verification.
- Keep the prior image digest and configuration for rollback. Verify recovery by rolling back a staging release, and confirm logs do not contain message bodies or secrets.

References: [Azure custom containers](https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container), [Azure regions](https://learn.microsoft.com/en-us/azure/reliability/regions-list), [Next standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output), [node-redis](https://github.com/redis/node-redis).
