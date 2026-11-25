import { ServicePage } from "@/components/service-page"
import { servicePages } from "@/lib/service-pages"
import { pageMetadata } from "@/lib/site"
const service = servicePages["business-e-mail"]
export const metadata = pageMetadata(
  service.title,
  service.description,
  "/leistungen/business-e-mail",
)
export default function Page() {
  return <ServicePage id="business-e-mail" />
}
