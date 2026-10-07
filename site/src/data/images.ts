import type { Lang } from "../lib/site";

// Photo slots. Drop the file into public/images/<file> and it appears; until then a neutral block holds the space.
// Every photo must be openly licensed stock (Unsplash / Pexels) or our own; record the source in public/images/CREDITS.md.
// AI-generated images presented as our buildings are not allowed (PRODUCT.md).
export type Slot =
  | "hero" | "intro" | "living" | "owners"
  | "svc-housing" | "svc-transport" | "svc-catering" | "svc-management"
  | "city-riyadh" | "city-khobar" | "city-dammam";

export const IMAGES: Record<Slot, { file: string; alt: Record<Lang, string>; want: string }> = {
  hero:            { file: "hero.jpg",            want: "Crew of workers in hi-vis at golden hour, relaxed, outdoors near a residential building", alt: { ar: "مجموعة من العمّال أمام سكنهم", en: "A crew of workers outside their housing" } },
  intro:           { file: "intro.jpg",           want: "Clean, bright shared bedroom with neatly made single beds", alt: { ar: "غرفة سكن مرتّبة بأسرّة فردية", en: "A tidy shared room with single beds" } },
  living:          { file: "living.jpg",          want: "Workers sharing a meal or relaxing together after a shift", alt: { ar: "عمّال يتناولون وجبة معاً بعد الدوام", en: "Workers sharing a meal after their shift" } },
  owners:          { file: "owners.jpg",          want: "Exterior of a mid-rise residential building in a Gulf city", alt: { ar: "واجهة عمارة سكنية", en: "A residential building exterior" } },
  "svc-housing":   { file: "svc-housing.jpg",     want: "Furnished worker room: beds, lockers, air conditioning", alt: { ar: "غرفة مؤثّثة بأسرّة وخزائن", en: "A furnished room with beds and lockers" } },
  "svc-transport": { file: "svc-transport.jpg",   want: "Staff bus / coach parked at dawn", alt: { ar: "باص نقل العمّال", en: "A crew bus" } },
  "svc-catering":  { file: "svc-catering.jpg",    want: "Trays of hot food in a canteen kitchen", alt: { ar: "وجبات ساخنة في مطبخ الإعاشة", en: "Hot meals in a canteen kitchen" } },
  "svc-management":{ file: "svc-management.jpg",  want: "Maintenance technician at work in a building", alt: { ar: "فنّي صيانة أثناء العمل", en: "A maintenance technician at work" } },
  "city-riyadh":   { file: "city-riyadh.jpg",     want: "Riyadh skyline or industrial edge", alt: { ar: "مدينة الرياض", en: "Riyadh" } },
  "city-khobar":   { file: "city-khobar.jpg",     want: "Khobar waterfront or streets", alt: { ar: "مدينة الخبر", en: "Khobar" } },
  "city-dammam":   { file: "city-dammam.jpg",     want: "Dammam city or port", alt: { ar: "مدينة الدمام", en: "Dammam" } },
};
