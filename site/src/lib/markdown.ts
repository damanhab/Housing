// Plain-Markdown twins of each page, for AI crawlers (served at /<lang>/<slug>.md and bundled into llms-full.txt).
import { ROUTES, routeByKey, absUrl, type PageKey } from "./routes";
import { SITE_URL, BRAND, type Lang } from "./site";
import { ACTIVE_CITIES as CITIES, TRACK_LABEL, RULES, FAQ, GLOSSARY } from "../data/content";
import { articleAbsUrl, type Article } from "./articles";

const L = (lang: Lang, ar: string, en: string) => (lang === "ar" ? ar : en);
const rulesTable = (lang: Lang) =>
  [`| ${L(lang, "البند", "Item")} | ${L(lang, "القيمة", "Value")} |`, "|---|---|", ...RULES.map((r) => `| ${r.label[lang]} | ${r.value[lang]} |`)].join("\n");

export function pageMarkdown(key: PageKey, lang: Lang): string {
  const r = routeByKey(key);
  const out: string[] = [`# ${r.title[lang].replace(/ \| .*$/, "")}`, "", `> ${r.description[lang]}`, "", `${L(lang, "الرابط", "URL")}: ${absUrl(key, lang, SITE_URL)}`, ""];
  const city = CITIES.find((c) => c.key === key);
  if (city) {
    out.push(`## ${L(lang, "مسار الترخيص", "Licensing track")}`, "", `- ${TRACK_LABEL[city.track][lang]}: ${city.trackNote[lang]}`, "");
    out.push(`## ${L(lang, "المناطق", "Areas")}`, "", ...city.areas.map((a) => `- ${a.name[lang]}: ${a.note[lang]}`), "");
    out.push(`## ${L(lang, "الاشتراطات", "Rules")}`, "", rulesTable(lang), "");
  } else if (key === "home" || key === "regulations" || key === "svc-housing" || key === "calculator") {
    out.push(`## ${L(lang, "الاشتراطات الأساسية", "Key rules")}`, "", rulesTable(lang), "");
    out.push(`## ${L(lang, "المدن ومسارات الترخيص", "Cities and licensing tracks")}`, "", ...CITIES.map((c) => `- ${c.name[lang]} — ${TRACK_LABEL[c.track][lang]}: ${c.trackNote[lang]}`), "");
  }
  if (key === "home" || key === "faq") {
    out.push(`## ${L(lang, "أسئلة شائعة", "FAQ")}`, "", ...FAQ.filter((f) => key === "faq" || f.home).flatMap((f) => [`### ${f.q[lang]}`, "", f.a[lang], ""]));
  }
  if (key === "glossary") out.push(...GLOSSARY.map((g) => `- **${g.term[lang]}**: ${g.def[lang]}`), "");
  if (key === "calculator") {
    out.push(L(lang,
      "طريقة الحساب: لكل غرفة الأقل بين (المساحة ÷ 4) و10. المجموع يقارن مع (دورات المياه × 8) ومع (مساحة صالة الطعام ÷ 0.7)، والأقل هو الطاقة.",
      "Method: per room, the lower of (area ÷ 4) and 10. The total is compared with (sanitary sets × 8) and (dining area ÷ 0.7); the lowest is the capacity."), "");
  }
  out.push(`---`, `${BRAND.name} · ${BRAND.domain}`);
  return out.join("\n");
}

export function llmsTxt(articles: Article[] = []): string {
  const guides = (lang: Lang) => articles.filter((a) => a.lang === lang).map((a) => `- [${a.title}](${articleAbsUrl(lang, a.slug).replace(/\/$/, "")}.md): ${a.description}`);
  const pick = (keys: PageKey[], lang: Lang) => keys.map((k) => `- [${routeByKey(k).title[lang].replace(/ \| .*$/, "")}](${absUrl(k, lang, SITE_URL).replace(/\/$/, "")}.md): ${routeByKey(k).summary[lang]}`);
  const core: PageKey[] = ["companies", "owners", "regulations", "calculator", "faq", "glossary", "about"];
  const cities = CITIES.map((c) => c.key);
  const svc: PageKey[] = ["svc-housing", "svc-transport", "svc-catering", "svc-management"];
  return [
    `# ${BRAND.name}`,
    "",
    "> SKN is a Saudi workforce-housing service: companies send one request (city, headcount, start date) and SKN arranges licensed worker accommodation (سكن عمال / السكن الجماعي للأفراد), with transport and catering, in Riyadh, Khobar and Dammam. Every bed is licensed and matched to the company's Qiwa headcount.",
    "",
    "## Key facts",
    `- Name: ${BRAND.name} (used in Arabic too). Website: ${BRAND.domain} (${SITE_URL})`,
    "- Service: worker / labour accommodation for companies; licensing and operation for building owners",
    "- Cities: Riyadh, Khobar, Dammam",
    "",
    "## Companies and services (English)",
    ...pick(["home", ...svc], "en"),
    "",
    "## Cities (English)",
    ...pick(cities, "en"),
    "",
    "## Regulations, tools and reference (English)",
    ...pick(core, "en"),
    "",
    ...(articles.length ? ["## Guides (English)", ...guides("en"), ""] : []),
    "## العربية",
    ...pick(["home", ...svc, ...cities, ...core], "ar"),
    ...(articles.length ? ["", "### أدلة", ...guides("ar")] : []),
    "",
    "## Optional",
    `- [Full text of core pages](${SITE_URL}/llms-full.txt)`,
  ].join("\n");
}

export function llmsFullTxt(articles: Article[] = []): string {
  const keys = ROUTES.filter((r) => r.inSitemap !== false && !r.hidden && r.key !== "request" && r.key !== "privacy").map((r) => r.key);
  const guides = articles.map((a) => `# ${a.title}\n\n${a.lang === "ar" ? "الرابط" : "URL"}: ${articleAbsUrl(a.lang, a.slug)}\n\n${a.body.trim()}`);
  return [...["en", "ar"].flatMap((lang) => keys.map((k) => pageMarkdown(k, lang as Lang))), ...guides].join("\n\n");
}
