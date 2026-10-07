import type { Lang } from "./site";

// One registry for every page in both languages. Pages, sitemap, hreflang, llms.txt and .md twins all read from here.
export type PageKey =
  | "home" | "companies" | "owners"
  | "svc-housing" | "svc-transport" | "svc-catering" | "svc-management"
  | "city-riyadh" | "city-khobar" | "city-dammam" | "city-jubail" | "city-ras-al-khair"
  | "regulations" | "calculator" | "resources" | "faq" | "glossary" | "about" | "request" | "thanks" | "privacy";

export interface Route {
  key: PageKey;
  slug: Record<Lang, string>;           // "" = language home
  title: Record<Lang, string>;          // <title>, ≤ 60 chars incl. brand
  description: Record<Lang, string>;    // meta description, ≤ 155 chars
  summary: Record<Lang, string>;        // one line for llms.txt
  inSitemap?: boolean;                   // default true
  hidden?: boolean;                      // not built at all (e.g. cities not yet launched)
}

export const ROUTES: Route[] = [
  {
    key: "home",
    slug: { ar: "", en: "" },
    title: { ar: "سكن هب | كل سكن عمّالك في مكان واحد", en: "SakanHub | All your crew housing. One hub." },
    description: {
      ar: "سكن عمّال مرخّص ومريح للشركات في الرياض والخبر والدمام، مع النقل والإعاشة وإدارة السكن.",
      en: "Comfortable, licensed worker housing for companies in Riyadh, Khobar and Dammam, with transport, meals and housing management.",
    },
    summary: {
      ar: "سكن عمّال مرخّص للشركات، مع النقل والإعاشة.",
      en: "Licensed worker housing for companies, with transport and meals.",
    },
  },
  {
    key: "companies",
    slug: { ar: "للشركات", en: "companies" },
    title: { ar: "سكن العمّال للشركات | سكن هب", en: "Worker housing for companies | SakanHub" },
    description: {
      ar: "نوفّر لعمّال شركتك سكناً مرخّصاً يطابق عددهم في قوى، ونتولّى النقل والإعاشة والتشغيل.",
      en: "Licensed housing for your workers, matched to your Qiwa headcount, with transport, meals and day-to-day running handled.",
    },
    summary: { ar: "كيف تحصل الشركات على سكن عمّال مرخّص عبر سكن هب.", en: "How companies get licensed worker housing through SakanHub." },
  },
  {
    key: "owners",
    slug: { ar: "لملاك-العقارات", en: "owners" },
    title: { ar: "حوّل عمارتك إلى سكن عمّال مرخّص | سكن هب", en: "Turn your building into licensed worker housing | SakanHub" },
    description: {
      ar: "عندك عمارة أو مجمّع؟ نحسب طاقته النظامية، ونجهّزه للترخيص، ونشغّله ونملؤه بشركات تحتاج سكناً.",
      en: "Own a building or compound? We work out its licensed capacity, get it ready for licensing, then run it and fill it.",
    },
    summary: { ar: "لملاك العقارات: الترخيص والتشغيل والإشغال.", en: "For building owners: licensing, operation and occupancy." },
  },
  {
    key: "svc-housing",
    slug: { ar: "خدمات/السكن", en: "services/housing" },
    title: { ar: "سكن عمّال مرخّص ومؤثّث | سكن هب", en: "Licensed, furnished worker housing | SakanHub" },
    description: {
      ar: "غرف مؤثّثة في مبانٍ مرخّصة للسكن الجماعي، بطاقة محسوبة حسب الاشتراطات، ومشرف سعودي، ونظافة دورية.",
      en: "Furnished rooms in buildings licensed for group housing, sized to the rules, with a Saudi supervisor and periodic cleaning.",
    },
    summary: { ar: "السكن: غرف مؤثّثة في مبانٍ مرخّصة.", en: "Housing: furnished rooms in licensed buildings." },
  },
  {
    key: "svc-transport",
    slug: { ar: "خدمات/النقل", en: "services/transport" },
    title: { ar: "نقل العمّال بين السكن والموقع | سكن هب", en: "Worker transport to site | SakanHub" },
    description: {
      ar: "باصات توصل عمّالك من السكن إلى مواقع العمل وترجعهم، حسب ورديّات شركتك.",
      en: "Buses that take your crew from housing to site and back, timed to your shifts.",
    },
    summary: { ar: "النقل: من السكن إلى الموقع حسب الورديّات.", en: "Transport: housing to site on your shifts." },
  },
  {
    key: "svc-catering",
    slug: { ar: "خدمات/الإعاشة", en: "services/catering" },
    title: { ar: "إعاشة ووجبات العمّال | سكن هب", en: "Meals and catering for workers | SakanHub" },
    description: {
      ar: "وجبات تناسب أذواق عمّالك وجنسياتهم، من مطبخ مركزي أو مقدّم إعاشة، كما تشترط أنظمة السكن الجماعي.",
      en: "Meals planned around your crew's tastes, from a central kitchen or caterer, as group-housing rules require.",
    },
    summary: { ar: "الإعاشة: وجبات العمّال.", en: "Catering: meals for workers." },
  },
  {
    key: "svc-management",
    slug: { ar: "خدمات/إدارة-السكن", en: "services/management" },
    title: { ar: "إدارة وتشغيل سكن العمّال | سكن هب", en: "Worker housing management | SakanHub" },
    description: {
      ar: "نشغّل السكن عنك: إشراف وصيانة ونظافة وأمن، وتجديد الرخصة وشهادات إثبات السكن في وقتها.",
      en: "We run the housing for you: supervision, maintenance, cleaning, security, and licence and certificate renewals on time.",
    },
    summary: { ar: "الإدارة: تشغيل السكن وتجديد الرخص.", en: "Management: operations and licence renewals." },
  },
  ...cityRoute("riyadh", "الرياض", "Riyadh"),
  ...cityRoute("khobar", "الخبر", "Khobar"),
  ...cityRoute("dammam", "الدمام", "Dammam"),
  ...cityRoute("jubail", "الجبيل", "Jubail", true),
  ...cityRoute("ras-al-khair", "رأس الخير", "Ras Al Khair", true),
  {
    key: "regulations",
    slug: { ar: "دليل-اشتراطات-السكن-الجماعي", en: "saudi-worker-housing-regulations" },
    title: { ar: "اشتراطات سكن العمّال ورخصة السكن الجماعي | سكن هب", en: "Saudi worker housing regulations | SakanHub" },
    description: {
      ar: "دليل مختصر لرخصة السكن الجماعي: من تلزمه، وكيف تُحسب الطاقة الاستيعابية، والربط بين بلدي وقوى.",
      en: "A short guide to group-housing licensing in Saudi Arabia: who must comply, how capacity is calculated, and the Balady–Qiwa link.",
    },
    summary: {
      ar: "دليل اشتراطات السكن الجماعي للأفراد: الترخيص، الطاقة الاستيعابية، الربط مع قوى.",
      en: "Group-housing regulations: licensing, capacity rules, the Balady–Qiwa link.",
    },
  },
  {
    key: "calculator",
    slug: { ar: "حاسبة-الطاقة-الاستيعابية", en: "worker-housing-capacity-calculator" },
    title: { ar: "حاسبة الطاقة الاستيعابية لسكن العمّال | سكن هب", en: "Worker housing capacity calculator | SakanHub" },
    description: {
      ar: "اعرف كم عاملاً يستوعب مبناك نظاماً: 4 م² لكل شخص، و10 أشخاص كحدّ أقصى للغرفة، ودورة مياه لكل 8.",
      en: "Work out how many workers your rooms can legally house: 4 m² per person, 10 per room maximum, one sanitary set per 8.",
    },
    summary: {
      ar: "حاسبة: كم عاملاً يستوعب المبنى نظاماً.",
      en: "Calculator: how many workers a building can legally house.",
    },
  },
  {
    key: "resources",
    slug: { ar: "مقالات", en: "resources" },
    title: { ar: "مقالات وأدلة عن سكن العمّال | سكن هب", en: "Worker housing resources | SakanHub" },
    description: {
      ar: "مقالات وأدلة عملية عن سكن العمّال في السعودية: الترخيص، والعقود، والإعاشة، والتشغيل.",
      en: "Practical articles and guides on worker housing in Saudi Arabia: licensing, contracts, catering and operations.",
    },
    summary: { ar: "مقالات وأدلة سكن العمّال.", en: "Worker housing articles and guides." },
  },
  {
    key: "faq",
    slug: { ar: "الاسئلة-الشائعة", en: "faq" },
    title: { ar: "أسئلة شائعة عن سكن العمّال | سكن هب", en: "Worker housing FAQ | SakanHub" },
    description: {
      ar: "إجابات واضحة عن رخصة السكن الجماعي، والطاقة الاستيعابية، وبدل السكن، وطلب السكن من سكن هب.",
      en: "Clear answers on group-housing licences, capacity, housing allowances and requesting housing from SakanHub.",
    },
    summary: { ar: "أسئلة شائعة وإجاباتها.", en: "Frequently asked questions, answered." },
  },
  {
    key: "glossary",
    slug: { ar: "مصطلحات", en: "glossary" },
    title: { ar: "مصطلحات السكن الجماعي | سكن هب", en: "Worker housing glossary | SakanHub" },
    description: {
      ar: "معاني المصطلحات: رخصة السكن الجماعي، شهادة إثبات السكن، الطاقة الاستيعابية، بلدي، قوى، الهيئة الملكية.",
      en: "Plain definitions: group-housing licence, housing proof certificate, capacity, Balady, Qiwa, RCJY, MODON.",
    },
    summary: { ar: "مسرد مصطلحات السكن الجماعي.", en: "Glossary of Saudi worker-housing terms." },
  },
  {
    key: "about",
    slug: { ar: "من-نحن", en: "about" },
    title: { ar: "من نحن | سكن هب", en: "About SakanHub" },
    description: {
      ar: "سكن هب شركة سعودية متخصّصة في سكن العمّال: نوفّر للشركات سكناً مرخّصاً، ونشغّل المباني لملّاكها.",
      en: "SakanHub is a Saudi workforce-housing company: licensed housing for companies, and building operation for owners.",
    },
    summary: { ar: "من نحن.", en: "About SakanHub." },
  },
  {
    key: "request",
    slug: { ar: "طلب-سكن", en: "request" },
    title: { ar: "اطلب سكناً لعمّالك | سكن هب", en: "Request worker housing | SakanHub" },
    description: {
      ar: "أرسل طلب السكن: المدينة وعدد العمّال وموعد البدء ورقم جوالك، ونتواصل معك.",
      en: "Send a housing request: city, headcount, start date and your number, and we'll get back to you.",
    },
    summary: { ar: "نموذج طلب السكن.", en: "The housing request form." },
  },
  {
    key: "thanks",
    slug: { ar: "تم-استلام-طلبك", en: "thank-you" },
    title: { ar: "وصلنا طلبك | سكن هب", en: "Request received | SakanHub" },
    description: { ar: "وصلنا طلبك وبنتواصل معك.", en: "We have your request and will be in touch." },
    summary: { ar: "", en: "" },
    inSitemap: false,
  },
  {
    key: "privacy",
    slug: { ar: "الخصوصية", en: "privacy" },
    title: { ar: "سياسة الخصوصية | سكن هب", en: "Privacy policy | SakanHub" },
    description: {
      ar: "كيف نجمع بيانات طلبات السكن ونستخدمها ونحميها وفق نظام حماية البيانات الشخصية.",
      en: "How we collect, use and protect housing-request data under Saudi Arabia's Personal Data Protection Law.",
    },
    summary: { ar: "سياسة الخصوصية.", en: "Privacy policy." },
  },
];

function cityRoute(id: string, ar: string, en: string, hidden = false): Route[] {
  const arSlug = `سكن-عمال-${ar.replace(/ /g, "-")}`;
  return [{
    key: `city-${id}` as PageKey,
    slug: { ar: arSlug, en: `worker-housing-${id}` },
    title: { ar: `سكن عمّال في ${ar} | سكن هب`, en: `Worker housing in ${en} | SakanHub` },
    description: {
      ar: `سكن عمّال مرخّص في ${ar} لشركتك، مع النقل والإعاشة، ومسار الترخيص الصحيح للمدينة.`,
      en: `Licensed worker housing in ${en} for your company, with transport, meals and the right licensing track for the city.`,
    },
    summary: { ar: `سكن عمّال في ${ar}.`, en: `Worker housing in ${en}.` },
    ...(hidden ? { hidden: true, inSitemap: false } : {}),
  }];
}

/** Routes that are actually built. */
export const LIVE_ROUTES = ROUTES.filter((r) => !r.hidden);

export const routeByKey = (key: PageKey) => ROUTES.find((r) => r.key === key)!;

/** Path for a page in a language, always with a trailing slash. */
export function href(key: PageKey, lang: Lang): string {
  const s = routeByKey(key).slug[lang];
  return s ? `/${lang}/${s}/` : `/${lang}/`;
}

/** Percent-encoded absolute URL (for sitemap, canonical, hreflang). */
export function absUrl(key: PageKey, lang: Lang, site = "https://sakanhub.sa"): string {
  return site + encodeURI(href(key, lang));
}
