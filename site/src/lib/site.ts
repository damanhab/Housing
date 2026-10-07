// Site-wide settings. SITE_MODE=test (default) = internal review: noindex, disallow-all robots, no llms.txt content.
export const SITE_MODE: "test" | "production" =
  (process.env.SITE_MODE as "production") === "production" ? "production" : "test";
export const IS_PROD = SITE_MODE === "production";

export const SITE_URL = "https://sakanhub.sa";

export type Lang = "ar" | "en";
export const LANGS: Lang[] = ["ar", "en"];

// Contact details are TBD by the founder. Placeholders are marked so they cannot ship unnoticed.
export const CONTACT = {
  phone: "+966 5X XXX XXXX",          // [TBD]
  whatsapp: "9665XXXXXXXX",            // [TBD] digits only, used in wa.me links
  email: "hello@sakanhub.sa",          // [TBD] confirm mailbox
  cr: "[TBD]",
  isPlaceholder: true,
};

export const BRAND = {
  name: "SakanHub",
  nameAr: "سكن هب",
  alternateNames: ["سكن هب", "Sakan Hub"],
};
