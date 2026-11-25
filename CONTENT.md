# Editing URBIT content

## Prices

Edit `content/pricing.json`. No component changes are needed. The site shows this content on `/leistungen#kosten`.

- `heading`, `introduction`, `note`: shared pricing explanation.
- `offers`: the displayed offers, in order.
- `name`: public service name.
- `price`: free text. Keep variable pricing (`Individuelle Offerte`), or enter an approved fixed price (`CHF …`), starting price (`ab CHF …`) or range (`CHF …–…`). No amounts are currently assumed.
- `basis`: explain the scope/assumptions behind that price and its billing period if recurring.
- `additionalCosts`: clarify licences, hosting, extras and any applicable VAT treatment. Never leave exclusions ambiguous when adding a number.
- `serviceId`: stable unique identifier; keep existing values when editing prices.

Keep valid JSON: quoted strings, commas between entries, no trailing commas. Save, preview locally and run `npm run build`. Production changes need a rebuild and deployment; this is a file-based editor, not an online admin panel.

## Business details

Contact details live in `lib/site.ts`. Location is Oberhasli, postcode 8156. The full address is Rebstrasse 11, 8156 Oberhasli, Zürich, Switzerland. Shared legal address rendering uses components/business-address.tsx.

Azure is the planned website host, with Switzerland North as the default regional preference. Before deployment, confirm the actual Azure service, region, logging/retention and relevant processors; update `content/privacy.json` accordingly. Choosing Azure does not establish that data stays in Switzerland.

## Roadmap

`TODO.md` tracks finished work and outstanding owner/deployment inputs.

## Service pages

Edit `lib/service-pages.ts` for the three detailed service pages. Their prices are read from the same `content/pricing.json` file as the overview. Do not duplicate price amounts in page components.

## Owner checklist

See `human-tasks.md` for form delivery explained in plain language, Azure facts, real proof and launch checks.

## Credibility and privacy

Edit `content/credibility.json`. Each record uses `approved`, `title`, `description` and optional `sourceUrl` (HTTPS). Set approved only after checking genuine evidence and publication permission. Empty arrays and unapproved records render nothing. Qualification claims from the earlier draft are withheld pending dated evidence; add them here only after verification. The existing homepage own-project example is explicitly labelled as such.

Edit `content/privacy.json` for actual hosting, mail, abuse-protection providers, processing locations, retention and international-transfer details. `reviewed` must stay false until those facts and the resulting notice are checked. Changing this file requires a rebuild. It is also a prerequisite for form activation; it is not a substitute for legal review.

The English overview is `app/en/page.tsx`; it is a concise service overview rather than a full translation of every German page. Alternate-language SEO links connect only the two home/overview pages.

`DEPLOYMENT.md` describes all server environment variables and form activation. Never put credentials in content files.
