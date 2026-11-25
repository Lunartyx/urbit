import { enquiryConfig } from "@/lib/enquiry/server"
import { signToken } from "@/lib/enquiry/core"
export const runtime = "nodejs"
export function GET() {
  const config = enquiryConfig()
  return Response.json(
    config ? { token: signToken(config.ENQUIRY_SECRET) } : { message: "Unavailable" },
    { status: config ? 200 : 503, headers: { "Cache-Control": "no-store" } },
  )
}
