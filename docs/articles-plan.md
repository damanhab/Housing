# Articles plan: first 5 guides (Arabic + English)

Status: **five drafts written (18 Oct 2026), waiting for the founder's review.** Nothing is published until the founder approves the wording.
Drafts live in `content/articles/` (one file per language). Edit them on the PC; when a pair is approved, the agent builds the page.

## Workflow
1. Draft: write or edit `content/articles/NN-slug.ar.md` and `.en.md` (Arabic is written natively, not translated).
2. Founder review: set `status: approved` in the front matter of both files.
3. Build: the agent turns approved pairs into pages under `/ar/مقالات/...` and `/en/guides/...`, with Article + FAQ markup, hreflang, a `.md` twin, and links.
4. Log it in HANDOVER.md; request indexing in Search Console.

## Rules for every article
- **Length:** 1,200–1,800 words per language.
- **Direct answer first:** 2–3 sentences right under the title (for Google answer boxes and AI search).
- **Both terms:** the market term (سكن عمال) and the official one (السكن الجماعي للأفراد) / "worker accommodation" and "group housing".
- **Sources:** every rule or number cites its official source (MOMAH, Balady, Qiwa, MODON). Facts come from `research/background/regulation-block-a.md`; anything unverified is marked `[check]`.
- **Structure:** H2/H3 subheadings, one short table or checklist where it helps, a 4–6 question FAQ at the end, "Last updated" date.
- **Links:** at least 2 internal links (regulations page, calculator, city pages, owners, companies) and one call to action to the request form or WhatsApp.
- **Brand:** "SKN" in both languages; domain written SKNliving.com. No legal advice: end with "a guidance summary, not legal advice".
- **Meta:** title ≤ 60 characters, description ≤ 155 characters, both containing the main keyword.

## The five articles

Chosen on search volume (DataForSEO, Saudi Arabia) and Mnzil's gaps: see `research/keyword-research.md`.

| # | File | Main keyword (AR / EN) | Monthly searches (AR / EN) | Slug (AR / EN) |
|---|---|---|---|---|
| 1 | `01-group-housing-licence` | رخصة سكن جماعي / saudi group housing license | ~1,450 / 210 | `رخصة-سكن-جماعي` / `saudi-group-housing-license` |
| 2 | `02-what-is-group-housing` | السكن الجماعي للأفراد / worker accommodation saudi arabia | ~760 / 260 | `السكن-الجماعي-للأفراد` / `what-is-group-housing-saudi` |
| 3 | `03-renting-worker-housing` | سكن عمال للايجار + سكن الموظفين / staff accommodation | ~650 + 720 / 720 | `سكن-عمال-للايجار` / `staff-accommodation-saudi-arabia` |
| 4 | `04-group-housing-requirements` | اشتراطات السكن الجماعي + لائحة سكن العمال pdf / labour camp rules saudi arabia | ~570 + 210 / 1,000 (head) | `اشتراطات-السكن-الجماعي` / `labour-camp-rules-saudi-arabia` |
| 5 | `05-worker-housing-violations` | مخالفات سكن العمال / worker housing fines saudi | ~170 / low | `مخالفات-سكن-العمال` / `worker-housing-violations-saudi` |

Articles live under `/ar/مقالات/<slug>/` and `/en/resources/<slug>/` (the existing Resources section).

**Parked:**
- `06-worker-bed-cost`: no reportable search volume for price terms, and it needs real prices from the founder.
- `07-convert-building`: no reportable volume for conversion searches; it moves to the owners batch.

**When the articles go live,** add a "Detailed guides" block to the regulations page linking to articles 1, 2 and 4. The regulations page is now titled as the one-page summary («لائحة السكن الجماعي للأفراد باختصار») so it doesn't compete with them.

## Open inputs from the founder
- **Article 2:** a real price range per bed per month (by city, with and without meals/transport), or permission to publish market ranges with the date checked.
- **Author:** the name and short bio to show as author (Google rewards a real person).
