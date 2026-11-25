import nodemailer from "nodemailer"
import { createClient } from "redis"
import { z } from "zod"
import privacy from "../../content/privacy.json"
import { createEnquiryHandler, type AbuseStore, type MailDelivery } from "./core"

const configSchema = z.object({
  SITE_URL: z
    .string()
    .url()
    .refine((v) => new URL(v).protocol === "https:"),
  ENQUIRY_SECRET: z.string().min(32),
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.enum(["465", "587"]),
  SMTP_USER: z.string().min(1),
  SMTP_PASSWORD: z.string().min(1),
  MAIL_FROM: z
    .string()
    .email()
    .regex(/^[^\r\n]+$/),
  MAIL_TO: z
    .string()
    .email()
    .regex(/^[^\r\n]+$/),
  REDIS_URL: z
    .string()
    .url()
    .refine((v) => v.startsWith("rediss://")),
})
export function enquiryConfig() {
  if (
    process.env.ENQUIRY_ENABLED !== "true" ||
    process.env.ENQUIRY_DELIVERY_VERIFIED !== "true" ||
    !privacy.reviewed
  )
    return null
  const result = configSchema.safeParse(process.env)
  return result.success ? result.data : null
}
let redisClient: ReturnType<typeof createClient> | undefined
let connecting: Promise<unknown> | undefined
async function getRedis(url: string) {
  if (!redisClient) {
    redisClient = createClient({
      url,
      socket: { connectTimeout: 3000, reconnectStrategy: false },
      disableOfflineQueue: true,
    })
    redisClient.on("error", () => {
      /* Request handler emits only sanitised event names. */
    })
  }
  if (!redisClient.isOpen) {
    connecting ??= redisClient.connect().finally(() => {
      connecting = undefined
    })
    await connecting
  }
  return redisClient
}
// All keys share a Redis cluster hash slot. Atomic limits also consume each token once.
const limitScript = `
if redis.call('EXISTS', KEYS[3]) == 1 then return 0 end
if tonumber(redis.call('GET', KEYS[1]) or '0') >= 3 or tonumber(redis.call('GET', KEYS[2]) or '0') >= 30 then return 0 end
redis.call('SET', KEYS[3], '1', 'EX', 1800)
for i=1,2 do if redis.call('INCR', KEYS[i]) == 1 then redis.call('EXPIRE', KEYS[i], 900) end end
return 1`
export async function handleEnquiry(request: Request) {
  const config = enquiryConfig()
  const store: AbuseStore = {
    async accept(key, nonce) {
      const redis = await getRedis(config!.REDIS_URL)
      const result = await redis
        .withCommandOptions({ timeout: 3000, rejectInFlight: true })
        .eval(limitScript, {
          keys: [`{enquiry}:email:${key}`, "{enquiry}:global", `{enquiry}:nonce:${nonce}`],
          arguments: [],
        })
      return result === 1
    },
  }
  const mail: MailDelivery = {
    async send(data) {
      const transport = nodemailer.createTransport({
        host: config!.SMTP_HOST,
        port: Number(config!.SMTP_PORT),
        secure: config!.SMTP_PORT === "465",
        requireTLS: true,
        auth: { user: config!.SMTP_USER, pass: config!.SMTP_PASSWORD },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
        disableFileAccess: true,
        disableUrlAccess: true,
      })
      try {
        const result = await transport.sendMail({
          from: config!.MAIL_FROM,
          to: config!.MAIL_TO,
          replyTo: data.email,
          subject: "Neue Projektanfrage über Urbit",
          text: `Name: ${data.name}\nE-Mail: ${data.email}\nFirma: ${data.company}\n\n${data.message}`,
        })
        if (!result.accepted?.length || result.rejected?.length)
          throw new Error("Delivery not accepted")
      } finally {
        transport.close()
      }
    },
  }
  return createEnquiryHandler({
    enabled: !!config,
    origin: config ? new URL(config.SITE_URL).origin : "",
    secret: config?.ENQUIRY_SECRET ?? "",
    mail,
    store,
    log: (event, requestId) => console.info(JSON.stringify({ event, requestId })),
  })(request)
}
