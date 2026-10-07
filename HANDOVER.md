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
8. **Navigation:** Services ▾, Cities ▾ (dropdowns), Building owners, Regulations, Resources.
9. **No internal notes on pages** (no "placeholder"/"draft" banners). The one exception is the Resources page, which says it will hold SEO articles once the site is built.
10. **Regulations page** carries a short source note under the title (MOMAH requirements + Balady), plus a full Sources section.
11. **Photos:** openly licensed stock (Unsplash / Pexels) until we have our own buildings; credited in `site/public/images/CREDITS.md`. No AI images presented as our buildings.
12. **Visual direction:** "the category standard at full craft" (Stripe / Careem / Tabby bar). Clay `#C8502A` is only for buttons, the logo house and active states. Pages are flat; only the request panel and menus lift.

## Open items

- **Stock photos not in yet.** The cloud environment's network policy blocks `unsplash.com` / `images.unsplash.com` (and Pexels). Either allow them in the environment's network settings, or add photos manually to `site/public/images/` using the file names in `site/src/data/images.ts`. Until then, neutral blocks hold the photo spaces.
- **Contact details:** phone, WhatsApp, email and CR number are still placeholders (`site/src/lib/site.ts`).
- **Arabic voice:** the founder should confirm the light Saudi dialect level.
- **Differentiation vs Mnzil** is still open (see `research/opportunity-summary.md`).
- **Pricing guide** page from the SEO plan is not built.
- **Resources** has planned titles only; articles come after the site is built.

## How to work on it

- Build: `cd site && npm ci && npm run build` (output in `site/dist/`). Preview: `npm run preview`.
- Pages and their slugs/titles: `site/src/lib/routes.ts`. Shared content (cities, rules, FAQ, glossary, UI strings): `site/src/data/content.ts`. Photo slots: `site/src/data/images.ts`.
- Branches: work on a feature branch and open a PR to `main`; the founder pulls locally with `git pull` / `git switch <branch>`.

## Log

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
