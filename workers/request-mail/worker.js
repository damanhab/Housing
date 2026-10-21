// SKN mail Worker. (1) Forwards hello@ mail to the founders. (2) Request mailer: Called by the Pages Function /api/request through a service binding (MAILER).
// Sends one plain-text email per request to hello@SKNliving.com via Cloudflare Email Routing (send_email binding SEB).
// Deploy: see workers/request-mail/README.md.
import { EmailMessage } from "cloudflare:email";

const FROM = "forms@sknliving.com";
const TO = "hello@sknliving.com";

// Incoming mail to hello@ is routed to this Worker and forwarded to every founder inbox (a routing rule allows only one).
const FORWARD_TO = ["azizba90+SKN@gmail.com", "Abdullah.aloumi+SKN@gmail.com"];

const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
const hdr = (s) => `=?UTF-8?B?${b64(s)}?=`;

export default {
  async email(message) {
    for (const to of FORWARD_TO) await message.forward(to);
  },
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });
    const r = await request.json();
    const lines = [
      `New housing request from ${r.page || "the website"}`,
      "",
      `Phone: ${r.phone}`,
      `WhatsApp: https://wa.me/966${String(r.phone).replace(/^0/, "")}`,
      r.company ? `Company: ${r.company}` : null,
      `City: ${r.city}`,
      `Workers: ${r.workers}`,
      `Start: ${r.start || "-"}`,
      r.services ? `Services: ${r.services}` : null,
      r.industrial ? `Industrial area: ${r.industrial}` : null,
      `Language: ${r.lang || "-"}`,
      `Sent: ${new Date().toISOString()}`,
    ].filter((l) => l !== null);
    const id = `<${crypto.randomUUID()}@sknliving.com>`;
    const raw = [
      `From: SKN website <${FROM}>`,
      `To: ${TO}`,
      `Subject: ${hdr(`طلب سكن جديد | New request: ${r.workers} workers, ${r.city}, ${r.phone}`)}`,
      `Message-ID: ${id}`,
      `Date: ${new Date().toUTCString()}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: base64",
      "",
      b64(lines.join("\n")).replace(/.{76}/g, "$&\r\n"),
    ].join("\r\n");
    await env.SEB.send(new EmailMessage(FROM, TO, raw));
    return Response.json({ ok: true });
  },
};
