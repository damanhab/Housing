// Housing request endpoint (stub). TBD: forward to CRM / email / WhatsApp Business once the founder picks a channel.
export async function onRequestPost({ request }) {
  const data = Object.fromEntries(await request.formData());
  const phone = String(data.phone || "").replace(/\s/g, "");
  if (!/^05\d{8}$/.test(phone) || !(Number(data.workers) > 0)) {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  // TODO(founder): deliver the request somewhere real. Nothing is stored yet.
  return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
}
