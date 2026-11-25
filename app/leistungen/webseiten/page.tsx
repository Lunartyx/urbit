import { ServicePage } from "@/components/service-page"
import { servicePages } from "@/lib/service-pages"
import { pageMetadata } from "@/lib/site"
const service = servicePages.webseiten
export const metadata = pageMetadata(service.title, service.description, "/leistungen/webseiten")
export default function Page() {
  return <ServicePage id="webseiten" />
}
