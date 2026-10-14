// Site-wide settings. SITE_MODE=test (default) = internal review: noindex, disallow-all robots, no llms.txt content.
export const SITE_MODE: "test" | "production" =
  (process.env.SITE_MODE as "production") === "production" ? "production" : "test";
export const IS_PROD = SITE_MODE === "production";

// Domain chosen by the founder (14 Oct 2026): sknliving.com is the main domain. [TBD] Not registered yet; see docs/domain-and-hosting.md.
export const SITE_URL = "https://sknliving.com";

export type Lang = "ar" | "en";
export const LANGS: Lang[] = ["ar", "en"];

// Contact details are TBD by the founder. Placeholders are marked so they cannot ship unnoticed.
export const CONTACT = {
  phone: "+966 5X XXX XXXX",          // [TBD]
  whatsapp: "9665XXXXXXXX",            // [TBD] digits only, used in wa.me links
  email: "hello@SKNliving.com",        // [TBD] mailbox not set up yet. Written with SKN in capitals (brand rule); email is case-insensitive.
  cr: "[TBD]",
  isPlaceholder: true,
};

// The brand is "SKN" on every page, Arabic included. «سكن» appears only inside the bilingual logo (footer); `logoAr` exists for that logo's alt text.
// The formal company name behind the letters is still open; don't expand it.
export const BRAND = {
  name: "SKN",
  logoAr: "سكن",
  // Rule: whenever the domain is written out (site copy, docs), it is "SKNliving.com". Links and config stay lowercase (SITE_URL).
  domain: "SKNliving.com",
};
