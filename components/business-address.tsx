import { site } from "@/lib/site"

export function BusinessAddress() {
  return (
    <address className="business-address">
      {site.streetAddress}
      <br />
      {site.postalCode} {site.locality}
      <br />
      {site.region}, {site.country}
    </address>
  )
}
