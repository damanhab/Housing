# SakanHub — Landing Page, SEO and AI-Search (GEO) Plan

**Version:** 0.2 · **Date:** 6 October 2026
**Revision log:**
- 0.2: founder decisions applied (§11).
- Timelines removed: phases are ordered by dependency and each has exit criteria, not dates.
- Added a test-site mode for internal review (§10.0).
- Added a build-tooling recommendation (§6.1).

**Goal:** whoever searches for worker housing in Saudi Arabia, in **Arabic or English**, on **Google, Bing, ChatGPT, Claude, Gemini, Copilot or Perplexity**, finds SakanHub **wherever they would find Mnzil**, and ideally first.

---

## 1. Objectives and KPIs

| Objective | KPI (how we measure) |
|---|---|
| Fully indexed and verified everywhere | 100% of public pages indexed in Google Search Console (GSC) and Bing Webmaster Tools; 0 coverage errors |
| Own long-tail and local queries | Top 10 for 30+ Arabic and 20+ English long-tail queries, especially city queries for our 5 launch cities |
| Appear in AI answers | SakanHub named in ≥ 20% of our tracked AI prompts (§9), then ≥ Mnzil's mention rate |
| Compete head-on with Mnzil | Top 5 for ≥ 50% of the head terms where Mnzil ranks |
| Leads | Qualified company leads and building-owner leads per month (targets set once a traffic baseline exists) |

**Primary conversion:** a company requests beds (city, number of workers, start date).
**Secondary conversion:** a building owner lists a building.
**Tertiary conversion:** a WhatsApp click (the Saudi default channel).

---

## 2. Where we stand vs Mnzil (audit, 6 Oct 2026)

| Item | Mnzil (mnzil.com) | SakanHub opportunity |
|---|---|---|
| `robots.txt` | `Allow: /` for all, sitemap listed | Same openness, **plus explicit AI-crawler rules** |
| `llms.txt` / `llms-full.txt` | **None (404)** | Ship both at launch, in Arabic and English |
| Sitemap | ~234 URLs: home, 5 services ×2 langs, ~105 blog posts ×2 langs | **Better structured**: city, service and tool pages, not just blog |
| City / location pages | **None** | **City × service pages**: the biggest gap, since most queries are local («سكن عمال الرياض») |
| Structured data (JSON-LD) | None detected in the server HTML | Full schema on every page (§5.4) |
| Homepage title | «منزل \| سكن عمال متكامل مع النقل والتموين» | Arabic-first titles that lead with the query plus the city |
| Tools / calculators | None found | **Licensed-capacity calculator** and cost calculator (link magnets, and cited by AI) |
| Content depth | Strong: ~105 articles per language on regulation, contracts and catering | Match on core topics, then win with **original data, tools and local pages** |
| Eastern Province industrial belt | Not a dedicated focus in their site structure | **Jubail and Ras Al Khair pages**: high-demand industrial cities with little dedicated content |

**Strategy in one line:** Mnzil out-publishes; we **out-structure**. That means local pages, tools, schema, `llms.txt` and citable facts, so both search engines and AI assistants find a clean, authoritative answer on our site.

---

## 3. Positioning on the site: both models

The site serves **both** models side by side:
- **Platform:** companies find and book licensed beds across many buildings and operators in one place.
- **Operator:** "SakanHub Places", buildings we operate ourselves.

**How this shows up:**
- **Hero:** one promise, «كل سكن عمّالك في مكان واحد» / "All your crew housing. One hub.", with two clear paths: **Request beds** (companies) and **List your building** (owners).
- **A service, not listings:** visitors don't browse buildings. City pages describe how the service works in that city (districts, licensing track, transport, what's included) and lead to the request form. Partner buildings vs SakanHub Places is how we supply the service, not something visitors shop.
- **Schema:** `Organization` + `Service` (platform/marketplace) on the main pages; `LodgingBusiness`/`Accommodation`-style markup only on pages for buildings we actually operate.

---

## 4. Audience and search intent

| Audience | What they type (examples) | Page that answers |
|---|---|---|
| HR / ops manager needing beds now | سكن عمال الرياض · سكن عمال الجبيل · سكن عمال للشركات · worker accommodation Riyadh · labour camp Jubail | City pages, service page, request form |
| Compliance / government relations | رخصة سكن جماعي · اشتراطات سكن العمال · ربط بلدي وقوى · group housing license Saudi | Regulation hub, licence guide, capacity calculator |
| Finance / procurement | سعر سرير سكن عمال · تكلفة سكن العمال شهريا · worker housing cost per bed Saudi | Pricing guide, cost calculator |
| Building owner | تأجير عمارة سكن عمال · تحويل عمارة الى سكن عمال · list my building for worker housing | Owners page, conversion guide |
| AI-assistant users | "Who provides worker housing in Jubail?" · «أفضل شركات سكن العمال في الدمام» · "How do I get a group housing licence?" | All of the above, plus `llms.txt` and FAQ answers written to be quoted |

---

## 5. Keywords and site architecture

### 5.1 Keyword map (seed list; expand with GSC and Bing data after launch)

**Rules:**
- **Arabic is primary.**
- Use both the **market term** (سكن عمال) and the **official term** (السكن الجماعي للأفراد).

| Cluster | Arabic seeds | English seeds |
|---|---|---|
| Core | سكن عمال · سكن عمال للايجار · سكن عمال للشركات · سكن جماعي · مجمع سكن عمال · سكن عمالة | worker accommodation Saudi Arabia · labour accommodation · workforce housing · labor camp KSA · staff accommodation |
| Local, launch cities | سكن عمال الرياض · سكن عمال الخبر · سكن عمال الدمام · سكن عمال الجبيل · سكن عمال رأس الخير · سكن عمال المدينة الصناعية الثانية · سكن عمال الجبيل الصناعية · سكن عمال السلي | worker housing Riyadh / Khobar / Dammam / Jubail / Ras Al Khair · labour camp Jubail Industrial City |
| Regulation | رخصة سكن جماعي · اشتراطات السكن الجماعي · شهادة إثبات سكن جماعي · غرامات سكن العمال · ربط بلدي وقوى · الطاقة الاستيعابية · سكن عمال الهيئة الملكية بالجبيل | group housing license Balady · worker housing requirements Saudi · Balady Qiwa link · RCJY worker housing |
| Price | سعر سرير سكن عمال · تكلفة سكن العمال · ايجار سكن عمال شهري | worker housing price per bed · labor accommodation cost Saudi |
| Services | سكن عمال مع النقل · تموين العمال · ادارة سكن العمال | worker transport · catering for workers · camp management |
| Owners | تأجير عمارة للشركات · تحويل عمارة الى سكن عمال · ترخيص عمارة سكن جماعي | lease building to companies · convert building to worker housing |
| Brand | سكن هب · SakanHub · Sakan Hub · ساكن هب (misspelling) | SakanHub · sakan hub |

> Jubail and Ras Al Khair fall under the **Royal Commission for Jubail and Yanbu (RCJY)** and **MODON**, not only Balady (see `research/background/regulation-block-a.md` §6.4 and §7.4). Their pages must explain the different licensing track. That's unique, high-value content.

### 5.2 Domain and URLs

- **Domain:** `sakanhub.sa` as primary (confirmed). Redirect `.com` and `.com.sa` there with 301s.
- **Languages:** `/ar/` and `/en/` subfolders, not subdomains, so authority is shared.
  - The root `/` serves Arabic, with `x-default` → `/ar/`.
- **Slugs:** Arabic pages get Arabic slugs (e.g. `/ar/سكن-عمال-الرياض`); English pages get English slugs.
  - Every page links its translation with `hreflang`.

### 5.3 Page inventory

**Core set (built for the first public release):**

| # | Page | AR URL (example) | EN URL |
|---|---|---|---|
| 1 | Home | `/ar/` | `/en/` |
| 2 | For companies (book beds) | `/ar/للشركات` | `/en/companies` |
| 3 | For building owners | `/ar/لملاك-العقارات` | `/en/owners` |
| 4 | Services: housing, transport, catering, management (4 pages) | `/ar/خدمات/...` | `/en/services/...` |
| 5 | **City pages: Riyadh, Khobar, Dammam, Jubail, Ras Al Khair** | `/ar/سكن-عمال-الجبيل` | `/en/worker-housing-jubail` |
| 6 | **Regulation hub**: the complete guide to group-housing rules (Balady, plus the RCJY/MODON track) | `/ar/دليل-اشتراطات-السكن-الجماعي` | `/en/saudi-worker-housing-regulations` |
| 7 | **Licensed-capacity calculator** (room area → licensable beds: 4 m², max 10/room, 1 WC set per 8) | `/ar/حاسبة-الطاقة-الاستيعابية` | `/en/worker-housing-capacity-calculator` |
| 8 | Pricing guide plus cost-per-worker calculator | `/ar/اسعار-سكن-العمال` | `/en/worker-housing-prices-saudi` |
| 9 | FAQ (40+ Q&As, AR and EN) | `/ar/الاسئلة-الشائعة` | `/en/faq` |
| 10 | Glossary (رخصة سكن جماعي، شهادة إثبات، بلدي، قوى، الهيئة الملكية…) | `/ar/مصطلحات` | `/en/glossary` |
| 11 | About / company facts (the entity page AI reads) | `/ar/من-نحن` | `/en/about` |
| 12 | Guides (blog) | `/ar/مقالات/...` | `/en/guides/...` |

**Expansion set (after the core set is live and indexed):**
- **District / zone pages:**
  - Riyadh: Al Sulay, Al Masani', Kharj Road.
  - Dammam: 2nd and 3rd Industrial City.
  - Jubail Industrial City districts.
  - Ras Al Khair industrial area.
- **More cities:** Jeddah, Makkah, Madinah, Yanbu.
- **Future (not now):** a factual "worker housing companies in Saudi Arabia" overview naming competitors, including Mnzil. Parked by founder decision.

> **Why city pages and the calculator matter most:** they answer the highest-intent queries (local) and the most "quotable" ones (a precise rule turned into a number). Mnzil has neither.

### 5.4 Landing page (home) structure, section by section

1. **Hero:**
   - H1: «كل سكن عمّالك في مكان واحد» / "All your crew housing. One hub."
   - Sub-line: licensed worker housing in Riyadh, Khobar, Dammam, Jubail and Ras Al Khair.
   - Two CTAs: **Request beds** and **List your building**, plus WhatsApp.
2. **Quick request form:** city, number of workers, start date, phone. Three fields above the fold.
3. **How it works:** 3 steps (tell us your needs → get options → move in). Mark it up with `HowTo` schema.
4. **Cities we serve:** 5 city cards linking to every city page.
5. **What's included:** furnished rooms, transport, catering, management; partner buildings and SakanHub Places.
6. **Compliance strip:** "Every bed on SakanHub is licensed and matched to your Qiwa headcount", linking to the regulation hub (a quiet trust line, not the headline).
7. **Numbers:** beds, cities, clients. **Real numbers only, added once they exist; never inflated.**
8. **For building owners:** a teaser linking to `/owners`.
9. **FAQ:** 8–10 questions with `FAQPage` schema, phrased exactly as people ask.
10. **Footer:** name, address and phone (once available), CR number, VAT, cities, language switch, social links.

**Copy rules:**
- Arabic is written natively (drafted by Claude, edited by the team), with the same facts in English.
- Every page answers its main question **in the first 2 sentences**.

### 5.5 Structured data (JSON-LD on every page)

| Schema | Where | Key fields |
|---|---|---|
| `Organization` | Sitewide | `name` "SakanHub", `alternateName` ["سكن هب", "Sakan Hub"], `logo`, `url`, `sameAs` (LinkedIn, X, Instagram, Crunchbase, Wikidata), `contactPoint`, `areaServed` "SA" |
| `LocalBusiness` | About, city pages | Address, `geo`, `telephone`, **once a real office exists** (not on the test site) |
| `Service` | Service and city pages | `serviceType` "Worker accommodation", `areaServed` (city), `provider` → Organization |
| `FAQPage` | Home, FAQ, city, regulation | Q&A pairs, AR and EN separately |
| `HowTo` | Home, licence guide | Steps |
| `BreadcrumbList` | All inner pages | — |
| `Article` | Guides | `author` (real person with a bio page), `datePublished`, `dateModified` |
| `WebApplication` | Calculators | `applicationCategory` "BusinessApplication" |
| `WebSite` + `SearchAction` | Home | Sitelinks search box |

Validate every template with the Google Rich Results Test and the Schema.org validator.

---

## 6. Technical SEO

### 6.1 Build tooling (recommendation)

**Build the site in Claude Code, using the Impeccable design skill.** Optionally, use Claude Design only for early visual exploration.

| | Claude Code + Impeccable | Claude Design |
|---|---|---|
| Strength | Real codebase: static/server rendering, sitemaps, `robots.txt`, `llms.txt`, `.md` twins, JSON-LD, IndexNow pings, deployment, performance control | Fast visual exploration of layouts, hero options, look and feel |
| SEO-critical output | ✅ Full control over the HTML crawlers receive | ⚠️ Design/prototype output, not a production SEO site |
| Use it for | **The production site** | Optional: exploring hero and section designs before building |

- **Recommended stack:** **Astro** (static by default, excellent for content and i18n), or Next.js with static export.
- **Brand assets:**
  - Use the logo files in `brand/logo/final/masters/` and the favicon set in `brand/logo/final/web-icons/`.
  - Follow the colours and rules in `brand/logo/final/guidelines.md`.
  - Self-host the fonts from `brand/logo/fonts/`.

### 6.2 Technical requirements

- **All text in the initial HTML** (static or server-rendered). Many AI crawlers do **not** run JavaScript; content rendered only in the browser is invisible to them.
- **Hosting:** CDN-backed (Cloudflare / Vercel), with an edge node in the Middle East. HTTPS, HTTP/2+, Brotli.
- **Core Web Vitals:** LCP < 2.0 s on 4G, CLS < 0.05, INP < 200 ms.
  - Self-host Nunito and Almarai subsets with `font-display: swap`.
  - Use the SVG logo and AVIF/WebP images.
- **RTL done right:** `<html lang="ar" dir="rtl">` on Arabic pages, and logical CSS properties.
- **On-page:** one H1 per page; unique `<title>` (≤ 60 chars) and meta description (≤ 155 chars) per page and language; self-referencing `canonical`; `hreflang` (ar, en, x-default) both ways.
- **Open Graph and Twitter cards:** a per-language OG image built from the logo.
- **Sitemaps:**
  - `sitemap.xml` index with child sitemaps (pages, cities, guides), each with `lastmod` and `xhtml:link` hreflang alternates.
  - An image sitemap once real building photos exist.
- **Internal linking:** every guide links to at least 1 city page and 1 conversion page; every city page links to the regulation hub and the calculator.
- **Privacy:** forms comply with Saudi **PDPL** (consent text, a privacy page in Arabic and English). Use cookieless or consented analytics.

---

## 7. Search engines: Google and Bing setup (at public launch)

| Step | Google Search Console | Bing Webmaster Tools |
|---|---|---|
| Verify | DNS TXT on the **domain property** | Import from GSC (one click) or DNS |
| Sitemaps | Submit `sitemap.xml` | Submit `sitemap.xml` |
| Fast indexing | URL Inspection → Request indexing for key pages | **IndexNow**: auto-ping on every publish or update |
| International | `hreflang` reports | Target country: Saudi Arabia |
| Local | **Google Business Profile** (once an office address exists) | **Bing Places for Business** (can import from Google Business Profile) |
| Monitor | Coverage, Core Web Vitals, enhancements, queries | Same, plus Bing's AI / Copilot citation insights where available |

> **Why Bing matters:** ChatGPT's web search has been widely reported to draw on Bing's index, and Microsoft Copilot runs on Bing. Being well indexed on Bing is a direct path into ChatGPT and Copilot answers.

---

## 8. AI search / LLM visibility (GEO)

AI assistants find content in two ways: **live web search at answer time** (ChatGPT via Bing and OpenAI's crawler, Gemini via Google, Claude via its crawler and a search provider, Perplexity via its own index) and **training data**. We optimise for both.

### 8.1 `robots.txt` (production, at public launch)

```txt
# SakanHub — robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*utm_

# OpenAI
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /

# Anthropic
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /

# Google (Gemini / AI training control) and Apple
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

# Perplexity, Microsoft, Common Crawl (feeds many models)
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: bingbot
Allow: /
User-agent: CCBot
Allow: /

Sitemap: https://sakanhub.sa/sitemap.xml
```

- **Check the CDN or firewall too.** Cloudflare's "Block AI bots" and bot-fight settings can silently block these crawlers even when `robots.txt` allows them. Keep them **off** for verified AI crawlers.
- Re-check the crawler names regularly; vendors add and rename agents.

### 8.2 `llms.txt` and `llms-full.txt`

- `/llms.txt`: a short Markdown map of the site for AI, covering who we are, key facts, and links to the most important pages, each with a one-line summary. Bilingual.
- `/llms-full.txt`: the full text of the core pages, regenerated automatically at every build.
- **Markdown twins:** every key page is also served at `page.md`, linked from `llms.txt`.

Draft `llms.txt`:

```markdown
# SakanHub (سكن هب)

> SakanHub is a Saudi platform where companies find, book and manage licensed housing for their workforce — worker
> accommodation (سكن عمال / السكن الجماعي للأفراد) in Riyadh, Khobar, Dammam, Jubail and Ras Al Khair — across
> partner buildings and SakanHub-operated places, with transport and catering. Every bed is licensed and matched to
> the company's Qiwa headcount.

## Key facts
- Name: SakanHub (Arabic: سكن هب). Website: https://sakanhub.sa
- Service: worker / labour accommodation for companies; listing and management for building owners
- Cities: Riyadh, Khobar, Dammam, Jubail, Ras Al Khair · Contact: [to be added at launch]

## For companies
- [Request beds](https://sakanhub.sa/en/companies): book worker housing by city, headcount and date
- [Worker housing in Jubail](https://sakanhub.sa/en/worker-housing-jubail.md): Jubail Industrial City, RCJY licensing, prices

## Regulations and tools
- [Saudi worker housing regulations](https://sakanhub.sa/en/saudi-worker-housing-regulations.md): Balady licence, RCJY/MODON track, capacity, fines, Balady–Qiwa link
- [Capacity calculator](https://sakanhub.sa/en/worker-housing-capacity-calculator): how many workers a building can legally house

## العربية
- [سكن عمال الرياض](https://sakanhub.sa/ar/سكن-عمال-الرياض.md)
- [سكن عمال الجبيل](https://sakanhub.sa/ar/سكن-عمال-الجبيل.md)
- [دليل اشتراطات السكن الجماعي](https://sakanhub.sa/ar/دليل-اشتراطات-السكن-الجماعي.md)
```

### 8.3 Content that AI assistants quote

- **Answer first:** open each page with a 2-sentence, fact-dense answer.
- **Citable facts in tables:** licence rules (4 m² per person, max 10 per room, 1 sanitary set per 8, 1-year licence, 20+ worker threshold), price ranges by city, required documents. Each fact is dated and sourced (MOMAH, Balady, RCJY, MODON, Umm Al-Qura).
- **Original data:** a recurring **"Saudi Worker Housing Price Index"** (bed prices by city from our own bookings). Mnzil doesn't publish this.
- **Entity consistency:** the exact same name, description, logo and contact details everywhere (site, LinkedIn, X, Crunchbase, Google Business Profile, Bing Places, directories).
- **Q&A phrasing:** use the questions people actually ask assistants as H2s, in Arabic and English.
- **Freshness:** keep a visible "last updated" date on every guide, and update regulation pages whenever MOMAH, RCJY or MODON changes rules.

### 8.4 Off-site signals (where models learn about us)

- **Profiles:** LinkedIn company page, X, Instagram, Snapchat, Crunchbase, **Wikidata item**, Google Business Profile, Bing Places.
- **Saudi directories and portals:** Saudi Business Center / Monsha'at listings, Chamber of Commerce (Eastern Province chamber for Jubail / Ras Al Khair), Aqar / Haraj listings linking to our city pages.
- **PR:** Arabic and English launch coverage (Argaam, Al Eqtisadiah, Arab News, Wamda, Entarabi).
- **Partner backlinks:** building owners, manpower companies, FM and catering partners, Eastern Province industrial contractors.
- **Answers on forums:** genuine, helpful answers on Reddit, Quora and Arabic forums about worker-housing rules, linking to the regulation guide.

---

## 9. Measurement

| What | Tool |
|---|---|
| Rankings, impressions, clicks (Google) | Google Search Console |
| Rankings, clicks, AI-citation insights (Bing / Copilot) | Bing Webmaster Tools |
| Traffic and conversions, including referrals from `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com` | GA4 or Plausible, with an "AI referrals" channel group |
| **AI visibility vs Mnzil** | A recurring check of **40 fixed prompts** (20 AR, 20 EN) in ChatGPT, Claude, Gemini, Copilot and Perplexity. Record whether SakanHub and Mnzil are mentioned or cited, and with which URL. |
| Crawl health | Server logs: hits from GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, bingbot, Googlebot |
| Competitor tracking | Mnzil's sitemap size and new pages; their rankings on our keyword set |

Example tracked prompts:
- «ما هي أفضل شركات سكن العمال في الجبيل؟»
- «كيف أستخرج رخصة سكن جماعي؟»
- "Where can my company rent worker accommodation in Dammam?"
- "How much does worker housing cost per bed in Saudi Arabia?"
- "Alternatives to Mnzil for worker housing"

---

## 10. Execution order (phases by dependency, with exit criteria; no deadlines)

### 10.0 Test-site mode (internal review) — current mode

The first build is an **internal test website**, so nothing may reach search engines or AI crawlers yet:

- Host on a preview URL (e.g. `preview.sakanhub.sa` or a Vercel/Cloudflare preview), **behind password protection** (basic auth or Cloudflare Access).
- Send the `X-Robots-Tag: noindex, nofollow` header on every response, and `<meta name="robots" content="noindex">` on every page.
- Serve a **test `robots.txt`** with `User-agent: *` / `Disallow: /`.
- Build the production `robots.txt`, `llms.txt` and `llms-full.txt` in the repo, but **don't serve them** until launch (an environment flag switches them on).
- **No** GSC or Bing submission, no IndexNow pings, no Google Business Profile, no `LocalBusiness` schema (no address yet).
- Placeholder contact details are clearly marked `[TBD]` and must be replaced before launch.

**Exit criteria for leaving test mode:** the team has signed off the Arabic and English copy; the real phone, WhatsApp, email and CR number are added; the domain is registered and pointed; the legal and privacy pages are reviewed.

### 10.1 Phase 1 — Build the core site (in test mode)

- Core pages from §5.3: home, companies, owners, 4 services, 5 city pages, regulation hub, capacity calculator, pricing guide, FAQ, glossary, about. All in AR and EN.
- Schema, sitemaps, hreflang, `.md` twins, `llms.txt` and `llms-full.txt`, generated by the build.
- Brand applied from `brand/logo/final/`.
- **Exit:** passes the Rich Results Test, Lighthouse (SEO 100, performance ≥ 90 on mobile) and an HTML validator; internal review is complete.

### 10.2 Phase 2 — Public launch

- Flip to production mode: production robots, `llms.txt` live, noindex removed, password removed.
- Verify GSC and Bing; submit sitemaps; enable IndexNow; request indexing of key pages.
- Check that AI crawlers get through the CDN by testing each user-agent.
- **Exit:** all public pages indexed in Google and Bing; the first prompt-tracking baseline is recorded.

### 10.3 Phase 3 — Local depth and authority

- District and zone pages; the first set of guides in both languages; the Price Index; Google Business Profile and Bing Places (once an office exists); Wikidata; Crunchbase; PR; partner backlinks.
- **Exit:** top-10 rankings on city queries for all 5 launch cities; SakanHub appears in tracked AI answers.

### 10.4 Phase 4 — Scale

- Expand to more cities; publish guides continuously; refresh regulation pages; expand the prompt set; double down on whatever GSC, Bing and AI reports show working.
- **Future:** a competitor overview page (§5.3, parked).

---

## 11. Founder decisions (resolved 6 Oct 2026)

| # | Decision | Answer |
|---|---|---|
| 1 | Positioning | **Both**: platform (partner buildings) and operator (SakanHub Places), §3 |
| 2 | Domain | **`sakanhub.sa`** primary; `.com` and `.com.sa` redirect |
| 3 | Launch cities | **Riyadh, Khobar, Dammam, Jubail, Ras Al Khair** |
| 4 | Office address / phone | **TBD.** Build as an internal test website first (§10.0) |
| 5 | Arabic content | **Claude writes the Arabic; the team edits** |
| 6 | Competitor comparison page | **Not now**: a future plan |
| 7 | Build tooling | **Claude Code + Impeccable** (Claude Design optional for visual exploration), §6.1 |

---

## 12. Risks and guardrails

- **The test site leaking into indexes.** Password protection plus noindex plus a disallow-all robots file, all three together. A preview URL indexed by Google or crawled by AI is hard to undo.
- **Thin or duplicate city pages** get ignored or penalised. Each city page needs unique local content: districts, real price ranges, the right licensing authority (Balady vs RCJY/MODON), and photos of real buildings.
- **Regulation accuracy:** cite and date every rule, and have the gazetted MOMAH text reviewed (see `research/background/regulation-block-a.md` §7). Jubail and Ras Al Khair rules need RCJY/MODON verification.
- **No fake reviews, numbers or claims.** It's against Google and Bing policies and Saudi consumer law, and it backfires in AI answers.
- **Brand-name confusion** with the government's Sakani programme and with Sakan.co: always use "SakanHub" (one word) and «سكن هب» together in titles and schema `alternateName`.
- **Crawler blocking by the CDN:** test with each bot's user-agent after every infrastructure change.
