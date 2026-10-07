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
}

export const CITIES: City[] = [
  {
    id: "riyadh", key: "city-riyadh",
    name: { ar: "الرياض", en: "Riyadh" },
    region: { ar: "منطقة الرياض", en: "Riyadh Region" },
    track: "balady",
    trackNote: {
      ar: "الترخيص عبر منصة بلدي (أمانة منطقة الرياض).",
      en: "Licensed through the Balady platform (Riyadh Municipality).",
    },
    areas: [
      { name: { ar: "السلي", en: "Al Sulay" }, note: { ar: "قرب المخارج الصناعية والمستودعات", en: "Near the industrial exits and warehouses" } },
      { name: { ar: "حي المصانع", en: "Al Masani'" }, note: { ar: "قرب الورش والمصانع الخفيفة", en: "Close to workshops and light industry" } },
      { name: { ar: "طريق الخرج", en: "Kharj Road" }, note: { ar: "ممر صناعي ولوجستي", en: "Industrial and logistics corridor" } },
      { name: { ar: "شمال الرياض", en: "North Riyadh" }, note: { ar: "قرب المشاريع والمناطق اللوجستية الجديدة", en: "Near new projects and logistics zones" } },
    ],
  },
  {
    id: "khobar", key: "city-khobar",
    name: { ar: "الخبر", en: "Khobar" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "balady",
    trackNote: {
      ar: "الترخيص عبر منصة بلدي (أمانة المنطقة الشرقية).",
      en: "Licensed through the Balady platform (Eastern Province Municipality).",
    },
    areas: [
      { name: { ar: "حي مدينة العمال", en: "Madinat Al Ummal" }, note: { ar: "حي مخصص لسكن العمالة", en: "A district established for workforce housing" } },
      { name: { ar: "قرب طريق الظهران–الجبيل", en: "Dhahran–Jubail Highway" }, note: { ar: "وصول سريع لمواقع الشرقية", en: "Fast access to Eastern Province sites" } },
    ],
  },
  {
    id: "dammam", key: "city-dammam",
    name: { ar: "الدمام", en: "Dammam" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "mixed",
    trackNote: {
      ar: "داخل المدينة عبر بلدي، وداخل المدن الصناعية التابعة لـ«مدن» عبر خدمات «مدن».",
      en: "Balady inside the city; MODON's own services inside its industrial cities.",
    },
    areas: [
      { name: { ar: "المدينة الصناعية الثانية", en: "2nd Industrial City" }, note: { ar: "ضمن نطاق «مدن»", en: "Under MODON" } },
      { name: { ar: "المدينة الصناعية الثالثة", en: "3rd Industrial City" }, note: { ar: "ضمن نطاق «مدن»", en: "Under MODON" } },
      { name: { ar: "حي الخليج", en: "Al Khaleej" }, note: { ar: "قرب الموانئ والطرق الرئيسية", en: "Near the port and main roads" } },
    ],
  },
  {
    id: "jubail", key: "city-jubail",
    name: { ar: "الجبيل", en: "Jubail" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "rcjy",
    trackShort: { ar: "الهيئة الملكية / بلدي", en: "RCJY / Balady" },
    trackNote: {
      ar: "داخل الجبيل الصناعية يتبع السكن مسار الهيئة الملكية للجبيل وينبع، لا بلدي.",
      en: "Inside Jubail Industrial City, housing follows the Royal Commission for Jubail and Yanbu (RCJY) track, not Balady.",
    },
    areas: [
      { name: { ar: "الجبيل الصناعية", en: "Jubail Industrial City" }, note: { ar: "أحياء سكن العمال ضمن الهيئة الملكية", en: "Worker-housing districts under RCJY" } },
      { name: { ar: "الجبيل البلد", en: "Jubail city" }, note: { ar: "داخل نطاق البلدية عبر بلدي", en: "Municipal area, via Balady" } },
    ],
  },
  {
    id: "ras-al-khair", key: "city-ras-al-khair",
    name: { ar: "رأس الخير", en: "Ras Al Khair" },
    region: { ar: "المنطقة الشرقية", en: "Eastern Province" },
    track: "rcjy",
    trackNote: {
      ar: "مدينة رأس الخير الصناعية تحت الهيئة الملكية للجبيل وينبع؛ الترخيص عبر مسارها.",
      en: "Ras Al Khair Industrial City is administered by RCJY; licensing follows its track.",
    },
    areas: [
      { name: { ar: "رأس الخير الصناعية", en: "Ras Al Khair Industrial City" }, note: { ar: "قرب مجمعات التعدين والصناعة", en: "Near the mining and industrial complexes" } },
    ],
  },
];

export const TRACK_LABEL: Record<Track, T> = {
  balady: { ar: "بلدي", en: "Balady" },
  rcjy: { ar: "الهيئة الملكية", en: "RCJY" },
  mixed: { ar: "بلدي / مدن", en: "Balady / MODON" },
};

// ---------------------------------------------------------------- regulation facts (MOMAH conditions; see research/background/regulation-block-a.md)
export const RULES: { label: T; value: T }[] = [
  { label: { ar: "من يلزمه الترخيص", en: "Who must comply" }, value: { ar: "كل منشأة لديها 20 عاملاً فأكثر", en: "Every establishment with 20+ workers" } },
  { label: { ar: "المساحة لكل فرد", en: "Bedroom area per person" }, value: { ar: "4 م² كحد أدنى", en: "4 m² minimum" } },
  { label: { ar: "الحد الأعلى للغرفة", en: "Maximum per room" }, value: { ar: "10 أفراد", en: "10 people" } },
  { label: { ar: "دورات المياه", en: "Sanitary sets" }, value: { ar: "دورة (مرحاض ومغسلة ودش) لكل 8 أفراد أو أقل", en: "1 set (WC, basin, shower) per 8 people or fewer" } },
  { label: { ar: "صالة الطعام والراحة", en: "Dining / rest area" }, value: { ar: "0.7 م² لكل فرد", en: "0.7 m² per person" } },
  { label: { ar: "مدة الرخصة", en: "Licence term" }, value: { ar: "سنة واحدة قابلة للتجديد", en: "1 year, renewable" } },
  { label: { ar: "الإشراف", en: "Supervision" }, value: { ar: "مشرف سعودي متفرغ", en: "A full-time Saudi supervisor" } },
];

// ---------------------------------------------------------------- FAQ
export interface QA { q: T; a: T; home?: boolean }
export const FAQ: QA[] = [
  {
    home: true,
    q: { ar: "من تلزمه رخصة السكن الجماعي؟", en: "Who needs a group-housing licence?" },
    a: {
      ar: "كل منشأة لديها 20 عاملاً فأكثر، بسكن مرخّص يتناسب مع عدد عمالتها المسجّل في منصة قوى.",
      en: "Every establishment with 20 or more workers, with licensed housing proportionate to the workforce registered on Qiwa.",
    },
  },
  {
    home: true,
    q: { ar: "ماذا يحدث إذا لم يكن السكن مرخّصاً؟", en: "What happens if housing isn't licensed?" },
    a: {
      ar: "يربط النظام بين بلدي وقوى إلكترونياً: تتوقف خدمات قوى مثل التأشيرات ونقل العمالة، وقد يُعلّق السجل التجاري.",
      en: "Balady and Qiwa are linked: Qiwa services such as visas and worker transfers stop, and the commercial registration can be suspended.",
    },
  },
  {
    home: true,
    q: { ar: "هل يعفي بدل السكن من الترخيص؟", en: "Does paying a housing allowance exempt us?" },
    a: {
      ar: "لا. صرف بدل سكن شهري لا يعفي المنشأة من شرط رخصة السكن الجماعي.",
      en: "No. Paying a monthly housing allowance does not exempt the establishment from the group-housing licence requirement.",
    },
  },
  {
    home: true,
    q: { ar: "ماذا أحتاج لإرسال طلب؟", en: "What do I need to send a request?" },
    a: {
      ar: "المدينة، عدد العمال، تاريخ البدء، ورقم التواصل. بعد ذلك نطلب بيانات المنشأة لإصدار شهادة إثبات السكن.",
      en: "The city, headcount, start date and a phone number. Later we ask for company details to issue the housing proof certificate.",
    },
  },
  {
    home: true,
    q: { ar: "هل النقل والتموين ضمن الخدمة؟", en: "Are transport and catering included?" },
    a: {
      ar: "تختار ما تحتاجه مع طلب السكن: النقل اليومي، التموين، وإدارة السكن.",
      en: "You choose what you need with the housing request: daily transport, catering and housing management.",
    },
  },
  {
    home: true,
    q: { ar: "في أي مدن تعملون؟", en: "Which cities do you cover?" },
    a: {
      ar: "الرياض، الخبر، الدمام، الجبيل، ورأس الخير.",
      en: "Riyadh, Khobar, Dammam, Jubail and Ras Al Khair.",
    },
  },
  {
    q: { ar: "كيف تُحسب الطاقة الاستيعابية؟", en: "How is capacity calculated?" },
    a: {
      ar: "من المساحات لا من عدد الأسرّة: 4 م² لكل فرد في غرفة النوم، و10 أفراد كحد أعلى للغرفة، ودورة مياه لكل 8 أفراد.",
      en: "From floor area, not bed count: 4 m² per person in the bedroom, 10 per room maximum, and one sanitary set per 8 people.",
    },
  },
  {
    q: { ar: "كم مدة رخصة السكن الجماعي؟", en: "How long is a group-housing licence valid?" },
    a: { ar: "سنة واحدة قابلة للتجديد.", en: "One year, renewable." },
  },
  {
    q: { ar: "ما الفرق بين الرخصة وشهادة إثبات السكن؟", en: "Licence vs housing proof certificate?" },
    a: {
      ar: "الرخصة يحملها مالك المبنى أو مستأجره بالكامل وتثبت أن العقار مرخّص. الشهادة تصدرها المنشأة المستأجرة لوحدات داخل عقار مرخّص.",
      en: "The licence is held by the building owner or whole-building lessee and proves the property is licensed. The certificate is issued by a tenant company renting units inside a licensed property.",
    },
  },
  {
    q: { ar: "هل يمكن ترخيص دور واحد من مبنى؟", en: "Can a single floor be licensed?" },
    a: {
      ar: "لا تصدر رخصة مستقلة لجزء من مبنى؛ يجب أن يستوفي المبنى أو المجمع الاشتراطات كاملة.",
      en: "No. A separate licence cannot be issued for part of a building; the whole building or compound must comply.",
    },
  },
  {
    q: { ar: "هل يختلف الترخيص في الجبيل ورأس الخير؟", en: "Is licensing different in Jubail and Ras Al Khair?" },
    a: {
      ar: "نعم. داخل المدن الصناعية التابعة للهيئة الملكية أو «مدن» يتبع السكن مسار تلك الجهة بدلاً من بلدي.",
      en: "Yes. Inside industrial cities run by RCJY or MODON, housing follows that authority's track instead of Balady.",
    },
  },
  {
    q: { ar: "كم تكلفة السكن؟", en: "How much does it cost?" },
    a: {
      ar: "تختلف حسب المدينة وعدد العمال والخدمات ومدة العقد. أرسل طلبك ونعود إليك بعرض واضح.",
      en: "It depends on the city, headcount, services and term. Send a request and we come back with a clear quote.",
    },
  },
  {
    q: { ar: "أملك عمارة، هل يمكنني العمل معكم؟", en: "I own a building. Can I work with you?" },
    a: {
      ar: "نعم. نقيّم طاقتها المرخّصة، ونجهّزها للترخيص، ونشغّلها لشركات تحتاج سكناً لعمالها.",
      en: "Yes. We assess its licensable capacity, prepare it for licensing and operate it for companies that need worker housing.",
    },
  },
];

// ---------------------------------------------------------------- glossary
export const GLOSSARY: { term: T; def: T }[] = [
  { term: { ar: "السكن الجماعي للأفراد", en: "Group housing for individuals" }, def: { ar: "الاسم النظامي لسكن العمال في أنظمة وزارة البلديات والإسكان.", en: "The official term for worker housing in Ministry of Municipalities and Housing rules (سكن العمال in everyday use)." } },
  { term: { ar: "رخصة سكن جماعي", en: "Group-housing licence" }, def: { ar: "رخصة تصدر عبر بلدي للمبنى أو المجمع، بطاقة استيعابية محددة، لمدة سنة.", en: "A licence issued through Balady for a building or compound, at a set capacity, for one year." } },
  { term: { ar: "شهادة إثبات سكن جماعي", en: "Housing proof certificate" }, def: { ar: "شهادة تصدرها المنشأة المستأجرة لوحدات داخل عقار مرخّص، تثبت توفر سكن نظامي لعمالتها.", en: "Issued by a company renting units inside a licensed property, proving compliant housing for its workforce." } },
  { term: { ar: "الطاقة الاستيعابية", en: "Capacity" }, def: { ar: "عدد الأفراد المسموح نظاماً، ويُحسب من المساحات والمرافق لا من عدد الأسرّة.", en: "The number of people allowed, calculated from areas and facilities, not from beds that fit." } },
  { term: { ar: "بلدي", en: "Balady" }, def: { ar: "منصة الخدمات البلدية التي تصدر رخص السكن الجماعي.", en: "The municipal services platform that issues group-housing licences." } },
  { term: { ar: "قوى", en: "Qiwa" }, def: { ar: "منصة وزارة الموارد البشرية لخدمات المنشآت والعمالة.", en: "The Ministry of Human Resources platform for establishment and workforce services." } },
  { term: { ar: "الربط بين بلدي وقوى", en: "Balady–Qiwa link" }, def: { ar: "ربط إلكتروني يتحقق من مطابقة السكن المرخّص لعدد العمالة.", en: "An electronic link that checks licensed housing against registered headcount." } },
  { term: { ar: "الهيئة الملكية للجبيل وينبع", en: "RCJY" }, def: { ar: "الجهة المسؤولة عن الجبيل الصناعية ورأس الخير، ولها مسار خاص للسكن.", en: "The Royal Commission for Jubail and Yanbu, which runs Jubail Industrial City and Ras Al Khair, with its own housing track." } },
  { term: { ar: "مدن", en: "MODON" }, def: { ar: "الهيئة السعودية للمدن الصناعية ومناطق التقنية، ولها خدمة ترخيص سكن جماعي عبر «شريك».", en: "The Saudi Authority for Industrial Cities and Technology Zones, with its own group-housing licence service via Shareek." } },
  { term: { ar: "الدفاع المدني", en: "Civil Defense" }, def: { ar: "موافقته على السلامة شرط قبل إصدار الرخصة.", en: "Its safety approval is required before the licence is issued." } },
];

// ---------------------------------------------------------------- UI strings
export const UI = {
  nav: {
    companies: { ar: "للشركات", en: "Companies" },
    owners: { ar: "لملاك العقارات", en: "Building owners" },
    cities: { ar: "المدن", en: "Cities" },
    regulations: { ar: "الاشتراطات", en: "Regulations" },
    calculator: { ar: "الحاسبة", en: "Calculator" },
    faq: { ar: "أسئلة شائعة", en: "FAQ" },
    request: { ar: "اطلب سكناً", en: "Request housing" },
    langSwitch: { ar: "English", en: "العربية" },
    whatsapp: { ar: "واتساب", en: "WhatsApp" },
    menu: { ar: "القائمة", en: "Menu" },
  },
  form: {
    city: { ar: "المدينة", en: "City" },
    workers: { ar: "عدد العمال", en: "Number of workers" },
    start: { ar: "تاريخ البدء", en: "Start date" },
    phone: { ar: "رقم الجوال", en: "Mobile number" },
    company: { ar: "اسم المنشأة", en: "Company name" },
    services: { ar: "الخدمات الإضافية", en: "Add-on services" },
    transport: { ar: "النقل", en: "Transport" },
    catering: { ar: "التموين", en: "Catering" },
    management: { ar: "إدارة السكن", en: "Management" },
    submit: { ar: "اطلب السكن", en: "Request housing" },
    orWhatsapp: { ar: "أو أرسل الطلب عبر واتساب", en: "Or send it on WhatsApp" },
    startNow: { ar: "فوراً", en: "Immediately" },
    start1: { ar: "خلال شهر", en: "Within a month" },
    start3: { ar: "خلال 3 أشهر", en: "Within 3 months" },
    consent: {
      ar: "بإرسال الطلب توافق على تواصلنا معك بخصوصه وفق سياسة الخصوصية.",
      en: "By sending this you agree we may contact you about it, per our privacy policy.",
    },
    phoneHint: { ar: "05XXXXXXXX", en: "05XXXXXXXX" },
    errPhone: { ar: "أدخل رقم جوال سعودي يبدأ بـ 05 ويتكوّن من 10 أرقام.", en: "Enter a Saudi mobile number: 10 digits starting with 05." },
    errWorkers: { ar: "أدخل عدد العمال (1 أو أكثر).", en: "Enter the number of workers (1 or more)." },
    sending: { ar: "جارٍ الإرسال…", en: "Sending…" },
  },
  readout: {
    title: { ar: "ما يحتاجه طلبك نظاماً", en: "What your request needs" },
    rooms: { ar: "غرف على الأقل", en: "rooms minimum" },
    sanitary: { ar: "دورات مياه", en: "sanitary sets" },
    bedArea: { ar: "م² للنوم", en: "m² sleeping area" },
    track: { ar: "مسار الترخيص", en: "Licensing track" },
    note: {
      ar: "تقدير حسب الاشتراطات: 10 أفراد للغرفة كحد أعلى، 4 م² لكل فرد، ودورة لكل 8.",
      en: "Estimate from the rules: max 10 per room, 4 m² per person, one set per 8.",
    },
  },
  complianceLine: {
    ar: "كل سرير مرخّص عبر بلدي أو الهيئة الملكية / مدن، ومطابق لعدد عمالتك في قوى.",
    en: "Every bed licensed on Balady or RCJY / MODON, matched to your Qiwa headcount.",
  },
  trustLine: {
    ar: "كل سرير مرخّص ومطابق لعدد عمالتك في قوى.",
    en: "Every bed licensed and matched to your Qiwa headcount.",
  },
  placeholderNote: {
    ar: "موقع تجريبي للمراجعة الداخلية — بيانات التواصل مؤقتة.",
    en: "Internal review build — contact details are placeholders.",
  },
};

export const t = (s: T, lang: Lang) => s[lang];
export const trackOf = (c: City, lang: Lang) => (c.trackShort ?? TRACK_LABEL[c.track])[lang];
export const RULES_SOURCE: T = { ar: "المصدر: الشروط الصحية والفنية والسلامة للمساكن الجماعية للأفراد — وزارة البلديات والإسكان / بلدي.", en: "Source: MOMAH / Balady group-housing requirements." };
