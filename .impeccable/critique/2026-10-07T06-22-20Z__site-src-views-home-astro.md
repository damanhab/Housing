---
target: home page (AR+EN)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "file:/home/user/housing/site/src/views/Home.astro"
target_fingerprint: "sha256:a670d7bfb532690e6a26679254908d13338c05b1efe6c7a43be49193e2299816"
target_path: /home/user/housing/site/src/views/Home.astro
timestamp: 2026-10-07T06-22-20Z
slug: site-src-views-home-astro
---
# Critique: SakanHub home (AR + EN), with Dammam + regulations for consistency
Method: dual-agent (A: design review · B: detector + browser)

## Heuristics (Persuade surface; 7 and 10 n/a)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of status | 3 | Live readout good; reveal leaves blank bands that look like loading |
| 2 | Match real world | 3 | Qiwa/Balady/dialect right; "Balady / MODON" never resolves; "sanitary sets" jargon |
| 3 | User control | 3 | Language switch keeps page; failed submit opens WhatsApp to placeholder number |
| 4 | Consistency | 2 | EN header overflow; 4 WhatsApp labels; clay eyebrow breaks One Clay Rule; step markers differ |
| 5 | Error prevention | 2 | Riyadh/40/"right away" preselected; phone rejects Arabic digits and +966 |
| 6 | Recognition | 3 | Chips/stepper good; track pills assume MODON/RCJY knowledge |
| 7 | Flexibility | n/a | Landing surface |
| 8 | Minimalist | 3 | Clean, but 11 sections; "living" repeats intro; rule table repeated across pages |
| 9 | Error recovery | 3 | Inline error + focus; message wrong for correct Arabic-digit numbers |
| 10 | Help | n/a | Landing surface; FAQ + guide cover it |
| Total | | 22/32 (69%) | Acceptable |

## Priority issues
- [P1] Product-specific value (rules band, live readout) sits 7-8 sections down; hero is interchangeable. Fix: proof strip under hero, rules band after services, cut/merge "living", hero CTA to #home-request. layout + distill
- [P1] Phone/headcount reject Arabic-Indic digits, +966, dashes (RequestPanel.astro:137). Fix: normalise digits and formats. harden
- [P1] EN header overflows at 1366px (scrollWidth 1378), CTA clipped; 95px past container at 1440. adapt
- [P1] Off-brief photos: living (foreign alley riders), svc-housing (grim dorm), svc-transport (foreign coast), city-dammam (sunset). polish
- [P2] Defaults allow silently wrong requests (Riyadh, 40, right away); dual-track city never resolved. clarify + harden
- [P2] Reveal timing leaves blank first-viewport bottom; code drifts from DESIGN.md motion values. animate

## Detector
CLI: 0 findings (views, components). Rendered: text-occlusion (false positive, closed <details> menus), low-contrast on nav summaries (false positive, backdrop-filter), gpt-thin-border-wide-shadow x4 (advisory; menus + request panel), first-viewport-column-overflow on regulations/city body-grid (real, long column beside short aside). Footer .tbd pill contrast 3.22:1 fails AA. 22 mobile tap targets <44px (footer links 17-20px, header CTA 40px).

## Persona red flags
Jordan: no "who is this for" in hero; unexplained Balady/MODON pills; two request paths. Casey: 10,400px page, form at ~6,000px; WhatsApp hidden on mobile header and last in 15-row menu; AR mobile header Latin-only. Riley: Arabic digits fail; phone-only submit sends defaults. Faisal (60 beds, Dammam): Riyadh preselected; no company/area field; can't say MODON vs Balady; no stated next step.

## Minor
Clay eyebrow; WhatsApp label sprawl; req-grid centred heading; uneven readout labels; RTL date bidi on regulations; city pages repeat full rule table; TBD rows full height; thin Almarai 400 small text; hero buttons ragged on mobile.

## Questions
Could a single "How many workers?" teaser with the readout sit in the hero without being "the form"? Who is the "living" section for? Should a dual-track city ever show "Balady / MODON"?
