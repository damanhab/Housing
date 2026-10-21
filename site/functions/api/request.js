// Housing request endpoint. Valid requests are emailed to hello@SKNliving.com by the request-mail Worker
// (workers/request-mail), reached through the MAILER service binding on the Pages project.
export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const data = Object.fromEntries(form);
  // Same normalisation as the form: Arabic-Indic digits, +966/966/5XXXXXXXX all become 05XXXXXXXX.
  const ascii = (v) => String(v || "").replace(/[٠-٩۰-۹]/g, (d) => String(d.charCodeAt(0) & 0xf));
  let phone = ascii(data.phone).replace(/[^\d+]/g, "").replace(/^(\+|00)?966/, "0");
  if (/^5\d{8}$/.test(phone)) phone = "0" + phone;
  const workers = Number(ascii(data.workers).replace(/\D/g, ""));
  if (!/^05\d{8}$/.test(phone) || !(workers > 0) || !data.city) {
    return Response.json({ ok: false }, { status: 400 });
  }
  const clip = (v) => String(v || "").slice(0, 200);
  const payload = {
    phone, workers, city: clip(data.city), start: clip(data.start), company: clip(data.company),
    industrial: clip(data.industrial), services: form.getAll("services").map(clip).join(", "),
    lang: clip(data.lang), page: clip(request.headers.get("Referer")),
  };
  try {
    const r = await env.MAILER.fetch("https://mailer/send", { method: "POST", body: JSON.stringify(payload) });
    if (!r.ok) throw new Error(String(r.status));
  } catch {
    // Not delivered: return an error so the form hands the request to WhatsApp instead of showing "thanks".
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
