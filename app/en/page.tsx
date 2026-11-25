import Link from "next/link"
import { PageIntro } from "@/components/page-intro"
import { pageMetadata, site, siteUrl } from "@/lib/site"

export const metadata = {
  ...pageMetadata(
    "Independent IT support for Swiss small businesses",
    "Websites, business email and hosting with a direct contact in Oberhasli, Switzerland. Enquiries welcome in English and German.",
    "/en",
  ),
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: { "de-CH": siteUrl, en: `${siteUrl}/en`, "x-default": siteUrl },
  },
  openGraph: {
    ...pageMetadata(
      "Independent IT support",
      "Websites, email and hosting for Swiss small businesses.",
      "/en",
    ).openGraph,
    locale: "en_GB",
  },
}
export default function EnglishPage() {
  return (
    <div lang="en">
      <PageIntro eyebrow="Urbanetz IT Consulting" title="Your IT. One direct contact.">
        Websites, business email and hosting for Swiss small businesses and independent
        professionals. Based in Oberhasli, working remotely across Switzerland.
      </PageIntro>
      <section className="container enquiry-next english-overview">
        <h2>Practical help for your business.</h2>
        <p>
          Make your services easier to find with a clear website. Use email on your own domain.
          Arrange hosting, updates and ongoing support with an agreed scope.
        </p>
        <h2>From your first question to a working solution.</h2>
        <p>
          Tell Dominik Urbanetz what you want to achieve, what you use today and whether you have a
          deadline. An initial conversation is free and without obligation. We agree scope, price
          and timing before implementation.
        </p>
        <p>
          Pricing depends on the work involved. Hosting, licences and ongoing maintenance are
          discussed separately so you can understand recurring costs. Azure is the preferred hosting
          platform, normally Switzerland North; other regions can be agreed. This does not imply
          that every provider processes data exclusively in Switzerland.
        </p>
        <h2>A direct relationship.</h2>
        <p>
          You speak to the person planning and implementing your solution. Support scope and
          availability are agreed individually; no round-the-clock response is promised.
        </p>
        <h2>Start a conversation in English.</h2>
        <p>
          <a className="text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <br />
          <a className="text-link" href={site.phoneHref}>
            {site.phone}
          </a>
        </p>
        <p>Rebstrasse 11, 8156 Oberhasli, Zürich, Switzerland.</p>
        <p>
          Please do not send passwords or sensitive customer records.{" "}
          <Link className="text-link" href="/datenschutz" hrefLang="de-CH">
            Privacy information (German)
          </Link>
          .
        </p>
        <Link className="button" href="/" hrefLang="de-CH">
          Website auf Deutsch
        </Link>
      </section>
    </div>
  )
}
