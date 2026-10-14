// Site-wide settings. SITE_MODE=test (default) = internal review: noindex, disallow-all robots, no llms.txt content.
export const SITE_MODE: "test" | "production" =
  (process.env.SITE_MODE as "production") === "production" ? "production" : "test";
export const IS_PROD = SITE_MODE === "production";

// [TBD] The SKN domain isn't chosen yet (brand/skn/guidelines.md §8). Placeholder until the founder confirms one.
export const SITE_URL = "https://skn.sa";

export type Lang = "ar" | "en";
export const LANGS: Lang[] = ["ar", "en"];

// Contact details are TBD by the founder. Placeholders are marked so they cannot ship unnoticed.
export const CONTACT = {
  phone: "+966 5X XXX XXXX",          // [TBD]
  whatsapp: "9665XXXXXXXX",            // [TBD] digits only, used in wa.me links
  email: "hello@skn.sa",               // [TBD] domain and mailbox not decided yet
  cr: "[TBD]",
  isPlaceholder: true,
};

// SKN in Latin text, سكن in Arabic text. The formal company name behind the letters is still open; don't expand it.
export const BRAND = {
  name: "SKN",
  nameAr: "سكن",
  alternateNames: ["سكن"],
};
