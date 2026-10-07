# Handover: SakanHub (سكن هب)

Read this first if you're picking up the project, reviewing a pull request or continuing a session. It records what was decided with the founder, why, and what is still open. **Update it at the end of every working session** with a dated entry, newest at the top of the log.

## What this is

- **SakanHub** is a Saudi workforce-housing company: companies get licensed worker housing (plus transport, meals and management), and building owners get their buildings licensed, run and filled. Main competitor: Mnzil.
- This repo holds the **website** (`site/`, Astro, Arabic first + English), the **brand** (`brand/logo/final/`) and the **research** (`research/`, `docs/`).
- The site is an **internal preview** for the founder. It is noindex, password-protected on Cloudflare, and not public.

## Where the source of truth lives

| Topic | File |
|---|---|
| Product, audience, voice, claims we may and may not make | `PRODUCT.md` |
| Visual system (colours, type, layout, components, do's and don'ts) | `DESIGN.md` (+ `.impeccable/design.json`) |
| Home page brief and its amendments | `.impeccable/surfaces/site-src-pages-ar-index-astro.md` |
| Regulation facts | `research/background/regulation-block-a.md` |
| Strategy and positioning vs Mnzil | `research/opportunity-summary.md`, `research/brand-sakanhub.md` |
| SEO / AI-search plan | `docs/landing-page-seo-plan.md` |
| Logo rules | `brand/logo/final/guidelines.md` |

## Standing decisions (don't undo without the founder)

1. **A service, not listings.** Visitors tell us what they need; they don't browse buildings.
2. **Company and services first.** The home page opens with the slogan, the company intro and services. The request form (with its live "what your request needs" readout) lives in its own section lower down, never in the hero or a sticky sidebar.
3. **Slogans:** «كل سكن عمّالك في مكان واحد» / "All your crew housing. One hub." (home); «مبناك مليان، وبالك مرتاح» / "A full building, without the headache" (owners).
4. **Copy must sound human.** No over-explaining, no AI-sounding lines, no paragraphs on the landing page.
5. **Arabic is written natively,** never translated line by line: light Saudi white dialect for conversational lines, clean MSA for regulation facts. Catering is «الإعاشة».
6. **Never invent facts:** no client names, counts, prices, testimonials or SLAs. Qualitative claims only. Cleaning is "periodic", never "daily".
7. **Cities in this preview:** Riyadh, Khobar, Dammam are live. Jubail and Ras Al Khair show greyed with "TBD" and have no pages (`active: false` in `site/src/data/content.ts`).
8. **Navigation:** Services ▾, Cities ▾ (dropdowns), Companies, Building owners, Regulations, Resources. Under 1240px it collapses into the menu button.
13. **Reveal on scroll:** sections fade up as they come into view (founder request); off for reduced-motion users.
9. **No internal notes on pages** (no "placeholder"/"draft" banners). The one exception is the Resources page, which says it will hold SEO articles once the site is built.
10. **Regulations page** carries a short source note under the title (MOMAH requirements + Balady), plus a full Sources section.
11. **Photos:** Unsplash stock, fetched through the official Unsplash API and credited in `site/public/images/CREDITS.md`; no on-page credit (founder decision; the Unsplash License doesn't require one). To be replaced with our own buildings later. No AI images presented as our buildings. API keys are never committed; the founder holds them.
12. **Visual direction:** "the category standard at full craft" (Stripe / Careem / Tabby bar). Clay `#C8502A` is only for buttons, the logo house and active states. Pages are flat; only the request panel and menus lift.

## Open items

- **Meals (الإعاشة): kept for now** (founder, 7 Oct 2026). Earlier the founder considered dropping meals as a service. Regulation only requires a central kitchen *or* a catering service (`research/background/regulation-block-a.md` §3.2), so buildings with a shared kitchen stay compliant without it. Revisit with the founder before changing.
- **Contact details:** phone, WhatsApp, email and CR number are still placeholders (`site/src/lib/site.ts`).
- **Arabic voice:** the founder should confirm the light Saudi dialect level.
- **Differentiation vs Mnzil** is still open (see `research/opportunity-summary.md`).
- **Pricing guide** page from the SEO plan is not built.
- **Resources** has planned titles only; articles come after the site is built.

- **Source links:** the regulations page links to three official MOMAH pages (checked 7 Oct 2026). Re-check them every quarter, The Balady licence-service and MODON user-guide links are added but **unverified**: they don't respond from outside the Kingdom, and the founder is testing them from Saudi Arabia.

## How to work on it

- Build: `cd site && npm ci && npm run build` (output in `site/dist/`). Preview: `npm run preview`.
- Pages and their slugs/titles: `site/src/lib/routes.ts`. Shared content (cities, rules, FAQ, glossary, UI strings): `site/src/data/content.ts`. Photo slots: `site/src/data/images.ts`.
- Branches: work on a feature branch and open a PR to `main`; the founder pulls locally with `git pull` / `git switch <branch>`.

## Log

### 7 Oct 2026: sources and meals
- Meals stay (founder decision, for now).
- Balady and MODON links added at the founder's request for testing in Saudi Arabia (unverified from outside).
- The regulations page now links to the official sources: the MOMAH conditions PDF, the MOMAH group-housing programme page and the MOMAH housing-certificate service. Only official government pages, opening in a new tab; no news or competitor links.

### 7 Oct 2026: brand spread
- Founder asked to show the brand more. Done: bilingual header lockup, a clay closing band with the on-clay logo and «سكّن طاقمك بضغطة», house-icon step markers, a faint house watermark in the ink band, and WhatsApp/social share cards (`site/scripts/make-og.mjs`). Declined: the resident-dot nav marker. Details in `DESIGN.md` → Brand marks.
- Corrected the regulation citations to the exact official title: «الشروط الصحية والفنية والسلامة اللازم توافرها في المساكن الجماعية للأفراد» (the site had paraphrased it as «الاشتراطات…»).
- The share cards still list «الإعاشة / Meals»; regenerate them if meals are dropped.

### 7 Oct 2026: third round
- Owners lede shortened to «نرخّص عمارتك لسكن عمّال، ونشغّلها عنك.»
- Menu order: Services, Cities, Companies, Building owners, Regulations, Resources.
- Reveal on scroll now triggers later (once a section is ~22% into the viewport) and moves a little slower.
- 11 Unsplash photos added via the official API (download events registered, credits recorded). The first transport photo was swapped because it showed religious statues and a foreign plate.
- The internal preview link now opens straight on the Arabic home page.
- Who-we-are room photo replaced twice: the first was hotel-like ("too nice, no worker housing looks like this"), the second looked like a prison. Now a plain white room with metal bunk beds and curtains. Rule of thumb: realistic and decent, never luxury, never grim.
- Removed the footer photo credit at the founder's request.

### 7 Oct 2026: second round of founder feedback
- Rewrote the owners lines that read as stiff MSA («ونملؤها بشركات…») into the site's conversational Arabic. Changed «وش نشيل عنك» on the Companies page, because it closely echoed Mnzil's own wording.
- Replaced the readout note "Estimate from the rules: max 10 per room…" with a plain line: "A first estimate, based on the official group-housing rules."
- Added reveal-on-scroll animation.
- Companies added to the main menu (it was only reachable from the footer).
- Researched how Mnzil sells meals (see the meals item under Open items); no change made yet.

### 7 Oct 2026: content and layout pass (founder feedback)
Founder feedback: the site felt rigid and dry, the Arabic read like a translation, the calculator/request form dominated every page, there were no photos, and the cities link went to the home page.
- Rebuilt the home page order (company intro and services first; request section lower). Removed the sticky request sidebar from all inner pages.
- Rewrote all copy in both languages around the brainstorm slogans; Arabic rewritten natively.
- Cities: three live, Jubail and Ras Al Khair greyed "TBD" with no pages. Cities and Services became dropdowns.
- Removed the internal review banner and draft notes. Added the regulations source note and a new Resources page (`/ar/مقالات/`, `/en/resources/`).
- Added the photo-slot system; actual photos are blocked by network policy (see open items).
- Updated `PRODUCT.md`, `DESIGN.md` and the home surface brief to match.

### 7 Oct 2026: design review closed
- The independent Impeccable reviewer confirmed the last three regressions fixed (hero rules strip, city readout 2×2, English strip). `DESIGN.md` and `.impeccable/design.json` written.
- Note: the founder later overrode the "first viewport is the request" direction (see entry above).

### 6–7 Oct 2026: repo setup
- Project moved from the founder's PC (`D:\Projects\Housing`) into its own private repo `damanhab/Housing`. `.gitignore` covers Node, Astro (`.astro/`), Cloudflare (`.wrangler/`, `.dev.vars`) and secrets.
- Earlier work (research, naming, logo, first site build, first design review) happened in local sessions before the repo existed; its outcomes are captured in the files listed above.
