import { ServicePage } from "@/components/service-page"
import { servicePages } from "@/lib/service-pages"
import { pageMetadata } from "@/lib/site"
const service = servicePages.hosting
export const metadata = pageMetadata(service.title, service.description, "/leistungen/hosting")
export default function Page() {
  return <ServicePage id="hosting" />
}
