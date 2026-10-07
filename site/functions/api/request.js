// Housing request endpoint (stub). TBD: forward to CRM / email / WhatsApp Business once the founder picks a channel.
export async function onRequestPost({ request }) {
  const data = Object.fromEntries(await request.formData());
  // Same normalisation as the form: Arabic-Indic digits, +966/966/5XXXXXXXX all become 05XXXXXXXX.
  const ascii = (v) => String(v || "").replace(/[\u0660-\u0669\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) & 0xf));
  let phone = ascii(data.phone).replace(/[^\d+]/g, "").replace(/^(\+|00)?966/, "0");
  if (/^5\d{8}$/.test(phone)) phone = "0" + phone;
  const workers = Number(ascii(data.workers).replace(/\D/g, ""));
  if (!/^05\d{8}$/.test(phone) || !(workers > 0) || !data.city) {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  // TODO(founder): deliver the request somewhere real. Nothing is stored yet.
  return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
}
