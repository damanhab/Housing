import type { Lang } from "../lib/site";

// Photo slots. Drop the file into public/images/<file> and it appears; until then a neutral block holds the space.
// Every photo must be openly licensed stock (currently Unsplash, via the official API) or our own; record the source in public/images/CREDITS.md.
// AI-generated images presented as our buildings are not allowed (PRODUCT.md).
export type Slot =
  | "hero" | "intro" | "living" | "owners"
  | "svc-housing" | "svc-transport" | "svc-catering" | "svc-management"
  | "city-riyadh" | "city-khobar" | "city-dammam" | "regulations";

export const IMAGES: Record<Slot, { file: string; alt: Record<Lang, string>; want: string }> = {
  hero:            { file: "hero.jpg",            want: "Crew of workers in hi-vis at golden hour, relaxed, outdoors near a residential building", alt: { ar: "طاقم عمّال بالخوذ والسترات العاكسة", en: "A crew of workers in hard hats and hi-vis vests" } },
  intro:           { file: "intro.jpg",           want: "Plain, clean shared room with bunk beds: realistic worker housing, never hotel-like, never grim", alt: { ar: "غرفة سكن بسيطة بأسرّة بطابقين", en: "A plain shared room with bunk beds" } },
  living:          { file: "living.jpg",          want: "Workers sharing a meal or relaxing together after a shift", alt: { ar: "عاملان يرتاحان بعد الدوام", en: "Two workers taking a break" } },
  owners:          { file: "owners.jpg",          want: "Exterior of a mid-rise residential building in a Gulf city", alt: { ar: "عمارة سكنية في مدينة سعودية", en: "A residential building in a Saudi city" } },
  "svc-housing":   { file: "svc-housing.jpg",     want: "Furnished worker room: beds, lockers, air conditioning", alt: { ar: "غرفة سكن بأسرّة بطابقين", en: "A shared room with bunk beds" } },
  "svc-transport": { file: "svc-transport.jpg",   want: "Staff bus / coach parked at dawn", alt: { ar: "باص نقل العمّال", en: "A white staff minibus" } },
  "svc-catering":  { file: "svc-catering.jpg",    want: "Trays of hot food in a canteen kitchen", alt: { ar: "صواني وجبات الرز واللحم", en: "Trays of rice and meat meals" } },
  "svc-management":{ file: "svc-management.jpg",  want: "Maintenance technician at work in a building", alt: { ar: "فريق صيانة على السطح", en: "A maintenance crew on a rooftop" } },
  "city-riyadh":   { file: "city-riyadh.jpg",     want: "Riyadh skyline or industrial edge", alt: { ar: "مدينة الرياض من الأعلى", en: "Riyadh from above" } },
  "city-khobar":   { file: "city-khobar.jpg",     want: "Khobar waterfront or streets", alt: { ar: "برج المياه في الخبر", en: "The Khobar water tower" } },
  "city-dammam":   { file: "city-dammam.jpg",     want: "Dammam city or port", alt: { ar: "واجهة الدمام البحرية", en: "The Dammam waterfront" } },
  regulations:     { file: "regulations.jpg",     want: "Engineers going over a building plan together (on topic: licensing and compliance; not Western stock)", alt: { ar: "مهندسان يراجعان مخطط مبنى", en: "Two engineers going over a building plan" } },
};
