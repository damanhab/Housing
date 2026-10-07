// Renders the link-preview cards (public/og-ar.jpg, public/og-en.jpg) from public/ assets.
// Run after changing the logo, slogan or hero photo:  node scripts/make-og.mjs
// Needs Playwright with a Chromium build available (PW env var can point at the playwright package).
import { createRequire } from "module";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PW || "playwright");
const pub = join(process.cwd(), "public");
const b64 = (f) => readFileSync(join(pub, f)).toString("base64");
const font = (f) => `url(data:font/woff2;base64,${b64("fonts/" + f)})`;
const cards = {
  ar: { dir: "rtl", line: "كل سكن عمّالك في مكان واحد", sub: "سكن عمّال مرخّص · النقل · الإعاشة", ff: "Almarai" },
  en: { dir: "ltr", line: "All your crew housing. One hub.", sub: "Licensed worker housing · Transport · Meals", ff: "Nunito" },
};
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [lang, c] of Object.entries(cards)) {
  await page.setContent(`<!doctype html><html dir="${c.dir}"><head><style>
    @font-face { font-family: Almarai; src: ${font("almarai-extrabold.woff2")}; font-weight: 800; }
    @font-face { font-family: Almarai; src: ${font("almarai-regular.woff2")}; font-weight: 400; }
    @font-face { font-family: Nunito; src: ${font("nunito-latin-var.woff2")}; font-weight: 200 1000; }
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; display: grid; grid-template-columns: 620px 1fr; background: #F6F3EE; font-family: ${c.ff}, sans-serif; color: #1D2433; }
    .copy { padding: 64px 56px; display: flex; flex-direction: column; justify-content: space-between; }
    .logo { width: 400px; }
    h1 { font-size: ${lang === "ar" ? 58 : 54}px; font-weight: 800; line-height: 1.12; }
    p { font-size: 24px; color: #4A5265; margin-top: 18px; }
    .bar { height: 10px; width: 120px; background: #C8502A; border-radius: 6px; }
    .photo { background: url(data:image/jpeg;base64,${b64("images/hero.jpg")}) center / cover; }
  </style></head><body>
    <div class="copy"><img class="logo" src="data:image/svg+xml;base64,${b64("brand/sakanhub-horizontal-color.svg")}"><div><h1>${c.line}</h1><p>${c.sub}</p></div><div class="bar"></div></div>
    <div class="photo"></div></body></html>`);
  await page.waitForTimeout(300);
  writeFileSync(join(pub, `og-${lang}.jpg`), await page.screenshot({ type: "jpeg", quality: 86 }));
}
await browser.close();
console.log("wrote public/og-ar.jpg and public/og-en.jpg");
