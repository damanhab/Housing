import type { Lang } from "./site";

// One registry for every page in both languages. Pages, sitemap, hreflang, llms.txt and .md twins all read from here.
export type PageKey =
  | "home" | "companies" | "owners"
  | "svc-housing" | "svc-transport" | "svc-catering" | "svc-management"
  | "city-riyadh" | "city-khobar" | "city-dammam" | "city-jubail" | "city-ras-al-khair"
  | "regulations" | "calculator" | "faq" | "glossary" | "about" | "request" | "thanks" | "privacy";

export interface Route {
  key: PageKey;
  slug: Record<Lang, string>;           // "" = language home
  title: Record<Lang, string>;          // <title>, ≤ 60 chars incl. brand
  description: Record<Lang, string>;    // meta description, ≤ 155 chars
  summary: Record<Lang, string>;        // one line for llms.txt
  inSitemap?: boolean;                   // default true
}

export const ROUTES: Route[] = [
  {
    key: "home",
    slug: { ar: "", en: "" },
    title: { ar: "سكن هب | سكن عمال مرخّص لشركتك بطلب واحد", en: "SakanHub | Licensed worker housing, one request away" },
    description: {
      ar: "سكن عمال مرخّص للشركات في الرياض والخبر والدمام والجبيل ورأس الخير، مع النقل والتموين. أرسل طلبك: المدينة وعدد العمال وتاريخ البدء.",
      en: "Licensed worker housing for companies in Riyadh, Khobar, Dammam, Jubail and Ras Al Khair, with transport and catering. Send one request.",
    },
    summary: {
      ar: "سكن عمال مرخّص للشركات بطلب واحد، مع النقل والتموين.",
      en: "Licensed worker housing for companies, with transport and catering, from one request.",
    },
  },
  {
    key: "companies",
    slug: { ar: "للشركات", en: "companies" },
    title: { ar: "سكن العمال للشركات | سكن هب", en: "Worker housing for companies | SakanHub" },
    description: {
      ar: "حدّد المدينة وعدد العمال وتاريخ البدء، ونرتّب لك سكناً مرخّصاً مطابقاً لعمالتك في قوى، مع النقل والتموين وإدارة السكن.",
      en: "Tell us the city, headcount and start date. We arrange licensed housing matched to your Qiwa headcount, with transport, catering and management.",
    },
    summary: { ar: "كيف تحصل الشركات على سكن عمال مرخّص عبر سكن هب.", en: "How companies get licensed worker housing through SakanHub." },
  },
  {
    key: "owners",
    slug: { ar: "لملاك-العقارات", en: "owners" },
    title: { ar: "أجّر عمارتك سكناً للعمال | سكن هب", en: "Lease your building for worker housing | SakanHub" },
    description: {
      ar: "لديك عمارة أو مجمع؟ نقيّم طاقته المرخّصة، ونجهّزه للترخيص، ونشغّله لشركات تحتاج سكناً لعمالها.",
      en: "Own a building or compound? We assess its licensable capacity, prepare it for licensing and operate it for companies that need worker housing.",
    },
    summary: { ar: "خدمة ملاك العقارات: الترخيص والتشغيل والإشغال.", en: "For building owners: licensing, operation and occupancy." },
  },
  {
    key: "svc-housing",
    slug: { ar: "خدمات/السكن", en: "services/housing" },
    title: { ar: "سكن عمال مرخّص ومجهّز | سكن هب", en: "Licensed, furnished worker housing | SakanHub" },
    description: {
      ar: "غرف مجهّزة في مبانٍ مرخّصة للسكن الجماعي، بطاقة استيعابية محسوبة وفق الاشتراطات، ومشرف سعودي، ونظافة دورية.",
      en: "Furnished rooms in buildings licensed for group housing, with capacity calculated to the rules, a Saudi supervisor and periodic cleaning.",
    },
    summary: { ar: "السكن: غرف مجهّزة في مبانٍ مرخّصة.", en: "Housing: furnished rooms in licensed buildings." },
  },
  {
    key: "svc-transport",
    slug: { ar: "خدمات/النقل", en: "services/transport" },
    title: { ar: "نقل العمال من السكن إلى الموقع | سكن هب", en: "Worker transport to site | SakanHub" },
    description: {
      ar: "رحلات يومية بين السكن ومواقع العمل وفق ورديات شركتك، مرتبطة بطلب السكن نفسه.",
      en: "Daily trips between housing and work sites on your shift pattern, arranged with the housing request itself.",
    },
    summary: { ar: "النقل: رحلات يومية بين السكن والموقع.", en: "Transport: daily trips between housing and site." },
  },
  {
    key: "svc-catering",
    slug: { ar: "خدمات/التموين", en: "services/catering" },
    title: { ar: "تموين ووجبات للعمال | سكن هب", en: "Catering for workers | SakanHub" },
    description: {
      ar: "وجبات يومية تناسب جنسيات عمالتك، عبر مطبخ مركزي أو مقدم تموين مرخّص، كما تشترط أنظمة السكن الجماعي.",
      en: "Daily meals suited to your workforce, from a central kitchen or a licensed caterer, as group-housing rules require.",
    },
    summary: { ar: "التموين: وجبات يومية للعمال.", en: "Catering: daily meals for workers." },
  },
  {
    key: "svc-management",
    slug: { ar: "خدمات/إدارة-السكن", en: "services/management" },
    title: { ar: "إدارة وتشغيل سكن العمال | سكن هب", en: "Worker housing management | SakanHub" },
    description: {
      ar: "تشغيل كامل للسكن: إشراف، صيانة، نظافة، أمن، وتجديد الرخصة وشهادات إثبات السكن.",
      en: "Full housing operation: supervision, maintenance, cleaning, security, licence renewal and housing proof certificates.",
    },
    summary: { ar: "الإدارة: تشغيل السكن وتجديد الرخص.", en: "Management: operations and licence renewals." },
  },
  ...cityRoute("riyadh", "الرياض", "Riyadh"),
  ...cityRoute("khobar", "الخبر", "Khobar"),
  ...cityRoute("dammam", "الدمام", "Dammam"),
  ...cityRoute("jubail", "الجبيل", "Jubail"),
  ...cityRoute("ras-al-khair", "رأس الخير", "Ras Al Khair"),
  {
    key: "regulations",
    slug: { ar: "دليل-اشتراطات-السكن-الجماعي", en: "saudi-worker-housing-regulations" },
    title: { ar: "اشتراطات سكن العمال ورخصة السكن الجماعي | سكن هب", en: "Saudi worker housing regulations | SakanHub" },
    description: {
      ar: "دليل مختصر لرخصة السكن الجماعي: من يلزمه الترخيص، الطاقة الاستيعابية، الربط بين بلدي وقوى، ومسار الهيئة الملكية ومدن.",
      en: "A short guide to group-housing licensing in Saudi Arabia: who must comply, capacity rules, the Balady–Qiwa link and the RCJY/MODON track.",
    },
    summary: {
      ar: "دليل اشتراطات السكن الجماعي للأفراد: الترخيص، الطاقة الاستيعابية، الربط مع قوى.",
      en: "Group-housing regulations: licensing, capacity rules, the Balady–Qiwa link.",
    },
  },
  {
    key: "calculator",
    slug: { ar: "حاسبة-الطاقة-الاستيعابية", en: "worker-housing-capacity-calculator" },
    title: { ar: "حاسبة الطاقة الاستيعابية لسكن العمال | سكن هب", en: "Worker housing capacity calculator | SakanHub" },
    description: {
      ar: "احسب عدد العمال الذي تستوعبه غرفك وفق الاشتراطات: 4 م² لكل فرد، و10 أفراد كحد أعلى للغرفة، ودورة مياه لكل 8.",
      en: "Work out how many workers your rooms can legally house: 4 m² per person, 10 per room maximum, one sanitary set per 8.",
    },
    summary: {
      ar: "حاسبة: كم عاملاً يستوعب المبنى نظامياً.",
      en: "Calculator: how many workers a building can legally house.",
    },
  },
  {
    key: "faq",
    slug: { ar: "الاسئلة-الشائعة", en: "faq" },
    title: { ar: "أسئلة شائعة عن سكن العمال | سكن هب", en: "Worker housing FAQ | SakanHub" },
    description: {
      ar: "إجابات مباشرة عن رخصة السكن الجماعي، والطاقة الاستيعابية، وبدل السكن، وطلب السكن عبر سكن هب.",
      en: "Direct answers on group-housing licences, capacity, housing allowances and requesting housing through SakanHub.",
    },
    summary: { ar: "أسئلة شائعة وإجابات مباشرة.", en: "Frequently asked questions, answered directly." },
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
    title: { ar: "عن سكن هب", en: "About SakanHub" },
    description: {
      ar: "سكن هب منصة ومشغّل سعودي لسكن العمال: نرتّب للشركات سكناً مرخّصاً مع النقل والتموين، ونشغّل المباني لملاكها.",
      en: "SakanHub is a Saudi worker-housing platform and operator: licensed housing for companies, with transport and catering.",
    },
    summary: { ar: "من نحن: حقائق الشركة.", en: "About SakanHub: company facts." },
  },
  {
    key: "request",
    slug: { ar: "طلب-سكن", en: "request" },
    title: { ar: "اطلب سكناً لعمالك | سكن هب", en: "Request worker housing | SakanHub" },
    description: {
      ar: "أرسل طلب سكن العمال: المدينة، عدد العمال، تاريخ البدء، ورقم التواصل. نعود إليك بخيارات مرخّصة.",
      en: "Send a worker housing request: city, headcount, start date and phone. We come back with licensed options.",
    },
    summary: { ar: "نموذج طلب السكن.", en: "The housing request form." },
  },
  {
    key: "thanks",
    slug: { ar: "تم-استلام-طلبك", en: "thank-you" },
    title: { ar: "تم استلام طلبك | سكن هب", en: "Request received | SakanHub" },
    description: { ar: "استلمنا طلبك وسنتواصل معك.", en: "We have your request and will be in touch." },
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

function cityRoute(id: string, ar: string, en: string): Route[] {
  const arSlug = `سكن-عمال-${ar.replace(/ /g, "-")}`;
  return [{
    key: `city-${id}` as PageKey,
    slug: { ar: arSlug, en: `worker-housing-${id}` },
    title: { ar: `سكن عمال ${ar} للشركات | سكن هب`, en: `Worker housing in ${en} for companies | SakanHub` },
    description: {
      ar: `سكن عمال مرخّص في ${ar} للشركات، مع النقل والتموين ومسار الترخيص الصحيح للمدينة. أرسل طلبك بعدد العمال وتاريخ البدء.`,
      en: `Licensed worker housing in ${en} for companies, with transport, catering and the right licensing track for the city. Request by headcount and date.`,
    },
    summary: { ar: `سكن عمال في ${ar}.`, en: `Worker housing in ${en}.` },
  }];
}

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
