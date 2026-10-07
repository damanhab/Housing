import type { Lang } from "../lib/site";
import type { PageKey } from "../lib/routes";

type T = Record<Lang, string>;

// ---------------------------------------------------------------- cities
export type Track = "balady" | "rcjy" | "mixed";
export interface City {
  id: string;
  key: PageKey;
  name: T;
  region: T;
  track: Track;
  trackShort?: T;          // override for readout/lists when a city has two tracks
  trackNote: T;
  areas: { name: T; note: T }[];
  active: boolean;         // false = shown greyed with "TBD" in the internal preview; no page is built
}

export const CITIES: City[] = [
  {
    id: "riyadh", key: "city-riyadh", active: true,
    name: { ar: "الرياض", en: "Riyadh" },
    region: { ar: "منطقة الرياض", en: "Riyadh Region" },
    track: "balady",
    trackNote: {
      ar: "يصدر الترخيص عبر منصة بلدي من أمانة منطقة الرياض.",
      en: "Licensed through the Balady platform (Riyadh Municipality).",
    },
    areas: [
      { name: { ar: "السلي", en: "Al Sulay" }, note: { ar: "قريب من المناطق الصناعية والمستودعات", en: "Near the industrial exits and warehouses" } },
      { name: { ar: "المصانع", en: "Al Masani'" }, note: { ar: "قريب من الورش والمصانع الخفيفة", en: "Close to workshops and light industry" } },
      { name: { ar: "طريق الخرج", en: "Kharj Road" }, note: { ar: "على الممر الصناعي واللوجستي", en: "Industrial and logistics corridor" } },
      { name: { ar: "شمال الرياض", en: "North Riyadh" }, note: { ar: "قريب من المشاريع الجديدة", en: "Near new projects and logistics zones" } },
    ],
  },
  {
    id: "khobar", key: "city-khobar", active: true,
    name: { ar: "الخبر", en: "Khobar" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "balady",
    trackNote: {
      ar: "يصدر الترخيص عبر منصة بلدي من أمانة المنطقة الشرقية.",
      en: "Licensed through the Balady platform (Eastern Province Municipality).",
    },
    areas: [
      { name: { ar: "مدينة العمّال", en: "Madinat Al Ummal" }, note: { ar: "حيّ مخصّص لسكن العمّال", en: "A district set aside for workforce housing" } },
      { name: { ar: "طريق الظهران–الجبيل", en: "Dhahran–Jubail Highway" }, note: { ar: "وصول سريع لمواقع الشرقية", en: "Quick access to Eastern Province sites" } },
    ],
  },
  {
    id: "dammam", key: "city-dammam", active: true,
    name: { ar: "الدمام", en: "Dammam" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "mixed",
    trackNote: {
      ar: "داخل المدينة عبر بلدي، وداخل المدن الصناعية عبر خدمات «مدن».",
      en: "Balady inside the city; MODON's own services inside its industrial cities.",
    },
    areas: [
      { name: { ar: "المدينة الصناعية الثانية", en: "2nd Industrial City" }, note: { ar: "تتبع «مدن»", en: "Under MODON" } },
      { name: { ar: "المدينة الصناعية الثالثة", en: "3rd Industrial City" }, note: { ar: "تتبع «مدن»", en: "Under MODON" } },
      { name: { ar: "حيّ الخليج", en: "Al Khaleej" }, note: { ar: "قريب من الميناء والطرق الرئيسية", en: "Near the port and main roads" } },
    ],
  },
  {
    id: "jubail", key: "city-jubail", active: false,
    name: { ar: "الجبيل", en: "Jubail" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "rcjy",
    trackShort: { ar: "الهيئة الملكية / بلدي", en: "RCJY / Balady" },
    trackNote: {
      ar: "داخل الجبيل الصناعية يتبع السكن الهيئة الملكية للجبيل وينبع، لا بلدي.",
      en: "Inside Jubail Industrial City, housing follows the Royal Commission for Jubail and Yanbu (RCJY) track, not Balady.",
    },
    areas: [],
  },
  {
    id: "ras-al-khair", key: "city-ras-al-khair", active: false,
    name: { ar: "رأس الخير", en: "Ras Al Khair" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "rcjy",
    trackNote: {
      ar: "تتبع مدينة رأس الخير الصناعية الهيئة الملكية للجبيل وينبع.",
      en: "Ras Al Khair Industrial City is administered by RCJY.",
    },
    areas: [],
  },
];
export const ACTIVE_CITIES = CITIES.filter((c) => c.active);
export const TBD: T = { ar: "TBD", en: "TBD" };

export const TRACK_LABEL: Record<Track, T> = {
  balady: { ar: "بلدي", en: "Balady" },
  rcjy: { ar: "الهيئة الملكية", en: "RCJY" },
  mixed: { ar: "بلدي / مدن", en: "Balady / MODON" },
};

// ---------------------------------------------------------------- regulation facts (MOMAH conditions; see research/background/regulation-block-a.md)
export const RULES: { label: T; value: T }[] = [
  { label: { ar: "من يلزمه الترخيص", en: "Who must comply" }, value: { ar: "كل منشأة عندها 20 عاملاً أو أكثر", en: "Every establishment with 20+ workers" } },
  { label: { ar: "مساحة النوم لكل شخص", en: "Bedroom area per person" }, value: { ar: "4 م² على الأقل", en: "4 m² minimum" } },
  { label: { ar: "الحدّ الأقصى في الغرفة", en: "Maximum per room" }, value: { ar: "10 أشخاص", en: "10 people" } },
  { label: { ar: "دورات المياه", en: "Sanitary sets" }, value: { ar: "دورة كاملة (مرحاض ومغسلة ودُش) لكل 8 أشخاص", en: "1 set (WC, basin, shower) per 8 people or fewer" } },
  { label: { ar: "صالة الطعام والاستراحة", en: "Dining / rest area" }, value: { ar: "0.7 م² لكل شخص", en: "0.7 m² per person" } },
  { label: { ar: "مدة الرخصة", en: "Licence term" }, value: { ar: "سنة، وتُجدَّد", en: "1 year, renewable" } },
  { label: { ar: "الإشراف", en: "Supervision" }, value: { ar: "مشرف سعودي متفرّغ", en: "A full-time Saudi supervisor" } },
];

// ---------------------------------------------------------------- FAQ
export interface QA { q: T; a: T; home?: boolean }
export const FAQ: QA[] = [
  {
    home: true,
    q: { ar: "مَن تلزمه رخصة السكن الجماعي؟", en: "Who needs a group-housing licence?" },
    a: {
      ar: "كل منشأة عندها 20 عاملاً أو أكثر، ويكون سكنها المرخّص على قدر عدد عمّالها المسجّلين في قوى.",
      en: "Every establishment with 20 or more workers. Its licensed housing has to cover the workforce registered on Qiwa.",
    },
  },
  {
    home: true,
    q: { ar: "وش يصير لو السكن غير مرخّص؟", en: "What happens if the housing isn't licensed?" },
    a: {
      ar: "بلدي مربوطة بقوى، فتتوقف خدمات المنشأة في قوى مثل التأشيرات ونقل الخدمات، وقد يُعلَّق السجل التجاري.",
      en: "Balady and Qiwa are linked, so Qiwa services such as visas and worker transfers stop, and the commercial registration can be suspended.",
    },
  },
  {
    home: true,
    q: { ar: "نصرف بدل سكن لعمّالنا، هل يكفي؟", en: "We pay a housing allowance. Isn't that enough?" },
    a: {
      ar: "لا. بدل السكن لا يُعفي المنشأة من شرط السكن المرخّص.",
      en: "No. A housing allowance doesn't exempt you from the licensed-housing requirement.",
    },
  },
  {
    home: true,
    q: { ar: "وش أحتاج عشان أطلب سكن؟", en: "What do I need to send a request?" },
    a: {
      ar: "المدينة، وعدد العمّال، ومتى تبي تبدأ، ورقم جوالك. وبعدها نطلب بيانات المنشأة لإصدار شهادة إثبات السكن.",
      en: "The city, your headcount, when you want to start, and a phone number. We ask for company details later, for the housing certificate.",
    },
  },
  {
    home: true,
    q: { ar: "هل النقل والإعاشة ضمن الخدمة؟", en: "Are transport and meals included?" },
    a: {
      ar: "تختار اللي تحتاجه مع طلب السكن: النقل، والإعاشة، وإدارة السكن.",
      en: "You pick what you need with the housing request: transport, meals and housing management.",
    },
  },
  {
    home: true,
    q: { ar: "في أي مدن تشتغلون؟", en: "Which cities do you cover?" },
    a: {
      ar: "الرياض والخبر والدمام.",
      en: "Riyadh, Khobar and Dammam.",
    },
  },
  {
    q: { ar: "كيف تُحسب الطاقة الاستيعابية؟", en: "How is capacity calculated?" },
    a: {
      ar: "من المساحات لا من عدد الأسرّة: 4 م² لكل شخص في غرفة النوم، وبحدّ أقصى 10 أشخاص للغرفة، ودورة مياه لكل 8 أشخاص.",
      en: "From floor area, not bed count: 4 m² per person in the bedroom, 10 per room at most, and one sanitary set per 8 people.",
    },
  },
  {
    q: { ar: "كم مدة رخصة السكن الجماعي؟", en: "How long is a group-housing licence valid?" },
    a: { ar: "سنة، وتُجدَّد.", en: "One year, renewable." },
  },
  {
    q: { ar: "وش الفرق بين الرخصة وشهادة إثبات السكن؟", en: "Licence vs housing proof certificate?" },
    a: {
      ar: "الرخصة باسم مالك المبنى أو مستأجره كاملاً، وتثبت أن العقار مرخّص. أما الشهادة فتصدرها المنشأة التي تستأجر وحدات داخل عقار مرخّص.",
      en: "The licence belongs to the building owner or whole-building tenant and proves the property is licensed. The certificate is issued by a company renting units inside a licensed property.",
    },
  },
  {
    q: { ar: "هل أقدر أرخّص دوراً واحداً من المبنى؟", en: "Can a single floor be licensed?" },
    a: {
      ar: "لا. ما تصدر رخصة لجزء من مبنى، ولازم يستوفي المبنى أو المجمّع الاشتراطات كاملة.",
      en: "No. A licence can't be issued for part of a building; the whole building or compound must comply.",
    },
  },
  {
    q: { ar: "هل يختلف الترخيص في المدن الصناعية؟", en: "Is licensing different in industrial cities?" },
    a: {
      ar: "نعم. داخل المدن الصناعية التابعة لـ«مدن» أو للهيئة الملكية يتبع السكن مسار تلك الجهة بدل بلدي.",
      en: "Yes. Inside industrial cities run by MODON or RCJY, housing follows that authority's track instead of Balady.",
    },
  },
  {
    q: { ar: "كم التكلفة؟", en: "How much does it cost?" },
    a: {
      ar: "تختلف حسب المدينة وعدد العمّال والخدمات ومدة العقد. أرسل طلبك ونرسل لك عرضاً واضحاً.",
      en: "It depends on the city, headcount, services and contract length. Send a request and we'll send you a clear quote.",
    },
  },
  {
    q: { ar: "عندي عمارة، أقدر أشتغل معكم؟", en: "I own a building. Can I work with you?" },
    a: {
      ar: "أكيد. نحسب كم عامل تستوعب نظاماً، ونجهّزها للترخيص، ونشغّلها عنك، ونجيب لها شركات تسكّن فيها عمّالها.",
      en: "Yes. We work out its licensed capacity, get it ready for licensing, then run it and fill it.",
    },
  },
];

// ---------------------------------------------------------------- glossary
export const GLOSSARY: { term: T; def: T }[] = [
  { term: { ar: "السكن الجماعي للأفراد", en: "Group housing for individuals" }, def: { ar: "الاسم الرسمي لسكن العمّال في أنظمة وزارة البلديات والإسكان.", en: "The official term for worker housing in Ministry of Municipalities and Housing rules (سكن العمال in everyday use)." } },
  { term: { ar: "رخصة السكن الجماعي", en: "Group-housing licence" }, def: { ar: "رخصة تصدر عبر بلدي للمبنى أو المجمّع بطاقة استيعابية محدّدة، ومدتها سنة.", en: "A licence issued through Balady for a building or compound, at a set capacity, for one year." } },
  { term: { ar: "شهادة إثبات سكن جماعي", en: "Housing proof certificate" }, def: { ar: "شهادة تصدرها المنشأة التي تستأجر وحدات في عقار مرخّص، تثبت أن عمّالها في سكن نظامي.", en: "Issued by a company renting units inside a licensed property, proving compliant housing for its workforce." } },
  { term: { ar: "الطاقة الاستيعابية", en: "Capacity" }, def: { ar: "عدد الأشخاص المسموح به نظاماً، ويُحسب من المساحات والمرافق لا من عدد الأسرّة.", en: "The number of people allowed, calculated from areas and facilities, not from beds that fit." } },
  { term: { ar: "بلدي", en: "Balady" }, def: { ar: "منصة الخدمات البلدية، ومنها تصدر رخص السكن الجماعي.", en: "The municipal services platform that issues group-housing licences." } },
  { term: { ar: "قوى", en: "Qiwa" }, def: { ar: "منصة وزارة الموارد البشرية لخدمات المنشآت والعمالة.", en: "The Ministry of Human Resources platform for establishment and workforce services." } },
  { term: { ar: "الربط بين بلدي وقوى", en: "Balady–Qiwa link" }, def: { ar: "ربط إلكتروني يتحقّق أن السكن المرخّص يكفي عدد العمّال المسجّلين.", en: "An electronic link that checks licensed housing against registered headcount." } },
  { term: { ar: "الهيئة الملكية للجبيل وينبع", en: "RCJY" }, def: { ar: "الجهة المسؤولة عن الجبيل الصناعية ورأس الخير، ولها مسار خاص لترخيص السكن.", en: "The Royal Commission for Jubail and Yanbu, which runs Jubail Industrial City and Ras Al Khair, with its own housing track." } },
  { term: { ar: "مدن", en: "MODON" }, def: { ar: "الهيئة السعودية للمدن الصناعية ومناطق التقنية، ولها خدمة ترخيص سكن جماعي عبر منصة «شريك».", en: "The Saudi Authority for Industrial Cities and Technology Zones, with its own group-housing licence service via Shareek." } },
  { term: { ar: "الدفاع المدني", en: "Civil Defense" }, def: { ar: "موافقته على اشتراطات السلامة لازمة قبل إصدار الرخصة.", en: "Its safety approval is required before the licence is issued." } },
];

// ---------------------------------------------------------------- UI strings
export const UI = {
  nav: {
    companies: { ar: "للشركات", en: "Companies" },
    owners: { ar: "لملّاك العقارات", en: "Building owners" },
    services: { ar: "خدماتنا", en: "Services" },
    cities: { ar: "المدن", en: "Cities" },
    regulations: { ar: "الاشتراطات", en: "Regulations" },
    resources: { ar: "مقالات", en: "Resources" },
    calculator: { ar: "حاسبة الطاقة", en: "Capacity calculator" },
    faq: { ar: "أسئلة شائعة", en: "FAQ" },
    about: { ar: "من نحن", en: "About" },
    request: { ar: "اطلب سكن", en: "Request housing" },
    langSwitch: { ar: "English", en: "العربية" },
    whatsapp: { ar: "واتساب", en: "WhatsApp" },
    menu: { ar: "القائمة", en: "Menu" },
  },
  services: {
    housing: { ar: "السكن", en: "Housing" },
    transport: { ar: "النقل", en: "Transport" },
    catering: { ar: "الإعاشة", en: "Meals" },
    management: { ar: "إدارة السكن", en: "Management" },
  },
  form: {
    city: { ar: "المدينة", en: "City" },
    workers: { ar: "عدد العمّال", en: "Number of workers" },
    start: { ar: "متى تبدأ؟", en: "Start date" },
    phone: { ar: "رقم الجوال", en: "Mobile number" },
    company: { ar: "اسم المنشأة", en: "Company name" },
    services: { ar: "تحتاج معه؟", en: "Add to it" },
    transport: { ar: "النقل", en: "Transport" },
    catering: { ar: "الإعاشة", en: "Meals" },
    management: { ar: "إدارة السكن", en: "Management" },
    submit: { ar: "أرسل الطلب", en: "Send request" },
    orWhatsapp: { ar: "أو كلّمنا على واتساب", en: "Or message us on WhatsApp" },
    startNow: { ar: "فوراً", en: "Right away" },
    start1: { ar: "خلال شهر", en: "Within a month" },
    start3: { ar: "خلال 3 أشهر", en: "Within 3 months" },
    consent: {
      ar: "بإرسال الطلب توافق أن نتواصل معك بخصوصه حسب سياسة الخصوصية.",
      en: "By sending this you agree we may contact you about it, per our privacy policy.",
    },
    phoneHint: { ar: "05XXXXXXXX", en: "05XXXXXXXX" },
    errPhone: { ar: "اكتب رقم جوال سعودي من 10 أرقام يبدأ بـ 05.", en: "Enter a Saudi mobile number: 10 digits starting with 05." },
    errWorkers: { ar: "اكتب عدد العمّال (1 أو أكثر).", en: "Enter the number of workers (1 or more)." },
    sending: { ar: "جارٍ الإرسال…", en: "Sending…" },
  },
  readout: {
    title: { ar: "اللي يحتاجه طلبك نظاماً", en: "What your request needs" },
    rooms: { ar: "غرف على الأقل", en: "rooms minimum" },
    sanitary: { ar: "دورات مياه", en: "sanitary sets" },
    bedArea: { ar: "م² للنوم", en: "m² sleeping area" },
    track: { ar: "جهة الترخيص", en: "Licensing track" },
    note: {
      ar: "تقدير مبدئي حسب اشتراطات السكن الجماعي.",
      en: "A first estimate, based on the official group-housing rules.",
    },
  },
  complianceLine: {
    ar: "كل سرير مرخّص من بلدي أو «مدن»، ومطابق لعدد عمّالك في قوى.",
    en: "Every bed licensed on Balady or MODON, matched to your Qiwa headcount.",
  },
};

export const t = (s: T, lang: Lang) => s[lang];
export const trackOf = (c: City, lang: Lang) => (c.trackShort ?? TRACK_LABEL[c.track])[lang];
export const RULES_SOURCE: T = {
  ar: "المصدر: «الشروط الصحية والفنية والسلامة اللازم توافرها في المساكن الجماعية للأفراد»، وزارة البلديات والإسكان (بلدي).",
  en: "Source: MOMAH, Health, Technical and Safety Conditions Required in Group Housing for Individuals (Balady).",
};
