import { SITE_URL } from "../lib/site";
import { ROUTES, absUrl } from "../lib/routes";
import { getArticles, articleAbsUrl } from "../lib/articles";
export const GET = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls: string[] = ROUTES.filter((r) => r.inSitemap !== false).flatMap((r) => (["ar", "en"] as const).map((lang) => `  <url>
    <loc>${absUrl(r.key, lang, SITE_URL)}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="ar" href="${absUrl(r.key, "ar", SITE_URL)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${absUrl(r.key, "en", SITE_URL)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(r.key, "ar", SITE_URL)}"/>
  </url>`));
  for (const a of await getArticles()) {
    const self = articleAbsUrl(a.lang, a.slug), pair = articleAbsUrl(a.pair!.lang, a.pair!.slug);
    const ar = a.lang === "ar" ? self : pair, en = a.lang === "en" ? self : pair;
    urls.push(`  <url>
    <loc>${self}</loc>
    <lastmod>${a.updated || today}</lastmod>
    <xhtml:link rel="alternate" hreflang="ar" href="${ar}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${ar}"/>
  </url>`);
  }
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
