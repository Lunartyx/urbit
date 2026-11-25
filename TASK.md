Continue implementing the Urbanetz IT Consulting website based on the previous audit and HUMAN_TASKS checklist.

Do not treat pending external accounts, credentials, business evidence or deployment configuration as blockers for local development.

## Confirmed business information

- Business name: Urbanetz IT Consulting
- Website: https://urbit.ch
- Address: Rebstrasse 11, 8156 Oberhasli, Zürich, Switzerland
- Preferred hosting provider: Microsoft Azure
- Preferred hosting region: Switzerland North, with other regions possible by individual agreement
- Primary language: Swiss Standard German
- Secondary language: English
- Variable pricing managed through content/pricing.json
- Primary target audience: Swiss small businesses and self-employed individuals

Do not claim that all data processing occurs exclusively in Switzerland until the actual infrastructure and providers have been verified.

## Implementation requirements

### Contact infrastructure

Prepare a production-ready server-side enquiry form architecture.

Implement:

- Server-side input validation
- Accessible form controls
- Spam protection
- Rate limiting
- Secure environment variable handling
- Email delivery provider abstraction
- Delivery error handling
- Accessible success and failure states
- Appropriate logging without exposing personal information
- Automated tests with mocked email delivery

Keep the existing working email and telephone contact options available.

Do not enable the production enquiry form until a real email provider is configured and actual delivery has been verified.

Provide an .env.example containing variable names and placeholders only.

### Credibility

Improve the credibility of the website without inventing evidence.

Prepare reusable components for:

- Founder introduction
- Professional qualifications
- Technical competencies
- Portfolio projects
- Project case studies
- Customer testimonials

Only display sections containing genuine, approved information. Do not publish empty placeholders, fake testimonials, fictional clients or fabricated statistics.

### Business and customer experience

Improve the website so potential customers clearly understand:

- Which problems Urbanetz IT Consulting solves
- Which services are available
- How an enquiry becomes a project
- How pricing is determined
- What information is needed for an initial enquiry
- How ongoing maintenance and support can be arranged
- Why choosing an independent IT service provider can be beneficial

Prioritize clear customer benefits over technical terminology.

### Azure deployment preparation

Prepare the application for deployment to Microsoft Azure.

Include:

- Production build configuration
- Environment variable documentation
- Health-check endpoint where appropriate
- Secure configuration handling
- Canonical domain configuration
- HTTPS and redirect requirements
- Deployment instructions
- Production verification checklist

Do not create paid cloud resources or assume regional availability without verification.

### SEO and discoverability

Complete:

- Page-specific metadata
- Canonical URLs
- Sitemap
- Robots configuration
- Social preview metadata
- Accurate structured data
- German and English language references
- Local search optimization

Keep the customer panel excluded from search indexing.

### Privacy and legal requirements

Prepare the legal pages and privacy configuration so that actual provider information can be added centrally once confirmed.

Do not invent legal registration information, VAT status, retention periods, third-party providers or data processing locations.

Do not represent the privacy notice as finalized until the actual production infrastructure and data processing arrangements are known.

### Verification

Use the installed skills and MCP servers.

Run:

- TypeScript checks
- Linting
- Production build
- Automated tests
- Playwright browser tests
- Responsive layout checks
- Accessibility checks
- Contact link verification

Preserve the documented real-Safari verification requirements. Do not report skipped tests as passing.

### Task management

Update the existing HUMAN_TASKS checklist.

Separate tasks into:

1. Completed implementation tasks
2. Pending business decisions
3. Pending external account configuration
4. Pending real-world verification
5. Actual launch blockers
6. Optional post-launch improvements

For every remaining human task, explain exactly what information or action is required from me.

Continue implementing everything that can safely be completed locally. Do not stop development because external credentials or real-world evidence are unavailable.

The objective is to launch a professional, trustworthy, customer-focused website as quickly as possible without making false claims or compromising security.
