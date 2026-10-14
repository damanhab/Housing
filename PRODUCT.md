# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: **Astro** (static output), chosen for SEO.
- Ships plain, server-rendered HTML with zero JS by default, so search engines and AI crawlers that don't run JavaScript can read it.
- Gives top Core Web Vitals, built-in i18n routing for `/ar/` and `/en/`, and easy static hosting (Cloudflare / Vercel).

Details are in `docs/landing-page-seo-plan.md` §6.

## Users

- **Primary: company HR and operations leads in Saudi Arabia.** They must house a blue-collar workforce (20+ workers) in licensed group housing (السكن الجماعي للأفراد) matched to the company's Qiwa headcount. They need compliant beds in a specific city, for a specific number of workers, from a specific date, without running housing themselves.
- **Secondary: building owners** with existing buildings, often converted residential/commercial stock (عمائر سكن عمال), who want them licensed, filled and operated.
- Investors also read the site, but it isn't built for them first.

## Product Purpose

SKN (سكن; formerly SakanHub) is a Saudi workforce-housing platform and operator. Companies find, book and manage housing for their workers in one place:
- partner buildings;
- SakanHub-operated buildings ("SakanHub Places");
- transport, catering and building management.

Success means a company gets licensed beds in the right city quickly, and owners get their buildings licensed and full.

## Positioning

- **A service, not listings** (founder, 6 Oct 2026): companies tell SakanHub what they need (city, headcount, start date) and SakanHub arranges licensed housing, transport and catering. **Visitors do not browse buildings.** Partner buildings vs SakanHub Places is how we supply the service, not something the visitor shops.
- **The hub:** one place to request and manage all workforce housing, supplied from many buildings and operators plus buildings we run ourselves.
- **The main competitor, Mnzil, is operator-first** and fund-backed for large purpose-built compounds.
- **Compliance is built in:** every bed is licensed on Balady (or the RCJY/MODON track in industrial cities) and matched to Qiwa. It is a quiet trust line, not the headline.
- **Launch cities:** Riyadh, Khobar, Dammam, Jubail, Ras Al Khair. The Eastern Province industrial belt (Jubail, Ras Al Khair) is a deliberate focus.
- **Internal preview (7 Oct 2026):** only Riyadh, Khobar and Dammam are live. Jubail and Ras Al Khair appear greyed with "TBD" and have no pages until the founder re-enables them (`active` flag in `site/src/data/content.ts`).

## Operating Context

- **The buyer's real risk:** non-compliant housing freezes Qiwa services (no new visas, no worker transfers) and can suspend the commercial registration. Fines are small (SAR 600–5,000); the operational shutdown is what matters.
- **Licensing:**
  - Balady group-housing licence for the property.
  - Housing proof certificate (شهادة إثبات سكن جماعي) for each tenant company.
  - Capacity is calculated, not counted: 4 m²/person, max 10 per room, 1 sanitary set per 8.
  - Licences last 1 year.
  - Industrial cities use the RCJY/MODON tracks.
  - Paying a housing allowance does not exempt an employer.
- **Channels:** buyers expect WhatsApp and phone, alongside forms. Arabic is the primary language; English is required.
- **Sources:** `research/background/regulation-block-a.md`, `research/opportunity-summary.md`, `research/competitor-mnzil.md`.

## Capabilities and Constraints

- **Site goals:** reach as wide an audience as possible through Google, Bing and AI assistants (ChatGPT, Claude, Gemini, Copilot, Perplexity), in Arabic and English. The full SEO/GEO plan is `docs/landing-page-seo-plan.md`.
- **Current mode: internal test site.** Password-protected, noindex, and a disallow-all robots file until the founder approves launch. The production `robots.txt` / `llms.txt` are built but not served.
- **Conversions:**
  1. Request beds (city, number of workers, start date, phone).
  2. List a building.
  3. WhatsApp.
- **Undecided:** office address, phone, WhatsApp number, email and CR number are **TBD**; use clearly marked placeholders. Real pricing is not yet published.
- **Parked:** the competitor-comparison page.

## Brand Commitments

- **Rebrand (founder, 14 Oct 2026): the brand is now SKN (سكن).** It replaces "SakanHub / سكن هب" everywhere. The source of truth is `brand/skn/guidelines.md`.
- **Name:** **SKN** in Latin text (three capitals, no dots), **سكن** in Arabic text. The formal company name behind the letters is still open, so don't expand the acronym.
- **Logo is final:** `brand/skn/` (masters, web icons, `guidelines.md`, `overview.png`).
  - **Three floors and a door:** a building of three floors, one per letter, with a Clay top floor (the roof over the crew) and a door cut into the ground floor.
  - Never redraw or retype the logo.
  - The old SakanHub house-n logo (`brand/logo/final/`) is retired.
- **Colours (unchanged):** Clay `#C8502A` (top floor of the symbol, accent), Ink `#1D2433` (letters, text), Light clay `#F08A5D` (on dark only), Sand `#F6F3EE` (main background). Sharing the orange family with Mnzil is a deliberate choice (like Keeta / HungerStation).
- **Typeface:** **Readex Pro**, one family for Arabic and Latin (SIL OFL, `brand/skn/fonts/`). Bold 700 for the wordmark and headings, Regular 400 for text. The founder chose it for its modern, light feel (14 Oct 2026). Nunito and Almarai are retired.
- **Voice:**
  - Confident and direct, but **never invent facts or numbers**. Qualitative claims only ("works with industry leaders", "a leading platform"); no "100+ companies".
  - **No AI-slop wording** (seamless, unlock, empower, revolutionise, filler tricolons).
  - **The landing page has no paragraphs:** short headlines, one-line supports, scannable lists.
- **Visual direction: the category standard, at full craft** (founder chose canon over the dealt directions, 6 Oct 2026). Convention is the commitment: no irony, no smuggled quirk.
  - **Quality bar, in order: Stripe, Careem, Tabby.** Airbnb was explicitly rejected (listing/marketplace feel doesn't fit a service).
  - Must still not read as "generic AI output".
- **Arabic copy:** written natively (drafted by Claude, edited by the team), never machine-translated from English. The same facts in both languages.
- **Arabic voice (7 Oct 2026):** a light Saudi white dialect for conversational lines (questions, buttons, short supports, e.g. «وش»، «تبي»، «خلّ»), clean MSA for regulation facts. Write it as Arabic first; never translate sentence by sentence.
- **Slogans in use:** «كل سكن عمّالك في مكان واحد» / "All your crew housing. One hub." (home); «مبناك مليان، وبالك مرتاح» / "A full building, without the headache" (owners). From `research/brand-sakanhub.md`.
- **No over-explaining:** cut lines that restate the form ("You send city, headcount and start date. We handle the rest."). Say the benefit like a person would.

## Evidence on Hand

- **None yet:** no client names, testimonials, case studies, bed counts, city counts, prices or press. **Do not fabricate any of these.**
- **Photography:** generic or openly licensed stock photos (e.g. Unsplash / Pexels licences) are acceptable for the initial site. Replace them with real building photos later. AI-generated imagery presented as our real buildings is not acceptable.
- **Cleaning:** say **periodic cleaning** only; frequency is undecided (founder, 6 Oct 2026). The regulation requires a contracted cleaning company or dedicated staff with a cleaning log (`research/background/regulation-block-a.md` §3.2).
- **Service-line facts grounded in regulation:** a full-time Saudi supervisor, a bed / bedding / lockable wardrobe per person, catering or a central kitchen. These are licensing requirements, so a licensed SakanHub bed includes them (`research/background/regulation-block-a.md` §3.2).
- **Usable facts:** the regulation facts above (cite MOMAH / Balady / RCJY / MODON), the brand assets. The SKN domain is not decided yet; the site uses `skn.sa` as a marked placeholder (`site/src/lib/site.ts`).

## Product Principles

1. **The buyer's outcome first:** licensed beds in the right city, fast. Everything else supports that.
2. **Earn trust with precision, not volume:** exact rules, clear steps and honest claims beat big numbers we don't have.
3. **Local beats generic:** city-level answers (Riyadh to Ras Al Khair, Balady vs RCJY) are where we're more useful than anyone.
4. **Arabic first, never a translation:** both languages are first-class.
5. **Readable by people and machines:** every page states its answer plainly enough for a search snippet or an AI assistant to quote.

## Accessibility & Inclusion

- WCAG 2.2 AA.
- A correct RTL/LTR mirror for each language.
- Readable at mobile sizes: many buyers browse on phones.
