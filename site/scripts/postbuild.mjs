// Writes dist/_headers for Cloudflare Pages / Netlify. Test builds: noindex on every response.
import { writeFileSync } from "node:fs";
const prod = process.env.SITE_MODE === "production";
const common = `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
${prod ? "" : "  X-Robots-Tag: noindex, nofollow, noarchive\n"}
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
/*.md
  Content-Type: text/markdown; charset=utf-8
`;
writeFileSync("dist/_headers", common);
console.log(`_headers written (${prod ? "production" : "TEST: noindex"})`);
