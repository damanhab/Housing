# SKN — Brand Guide v1

**Version 1.0 · 14 October 2026.** Replaces the SakanHub identity in `../logo/final/` (now superseded).
**Status:** brand name, logo, colours and typeface approved by the founder. Formal company name behind "SKN" is still open.

## 1. Name

- **SKN** is the brand. It is «سكن» (sakan, "home / housing") written in three Latin capitals.
- Write it **SKN** everywhere, in Arabic text too (all caps, no dots, set left-to-right inside Arabic sentences). Founder decision, 14 Oct 2026.
- «سكن» appears in **one place only**: the bilingual lockup (`skn-bilingual-*`), the wide logo with both "SKN" and «سكن». Don't write «سكن» as the brand name in copy, titles or other logos.
- The full corporate name behind the letters is not decided yet. Don't expand the acronym anywhere until it is.

## 2. The logo

- **Idea:** three floors and a door. The symbol is a building of three floors (one per letter of SKN), with a door cut into the ground floor. The Clay top floor is the roof over the crew.
- **Construction (fixed, never redraw):**
  - A square as tall as the capitals of "SKN".
  - Three equal floors; the gaps between them are 9 % of the square.
  - The door is 22 % of the square wide and runs the full height of the ground floor.
  - The symbol sits 42 % of the cap height to the left of the letters, measured ink to ink (the same gap in every lockup).
  - Every lockup file has the same clear margin (30 % of the cap height) on all four sides of the ink, so files can be aligned edge to edge.
  - Bilingual: the vertical rule sits centred between "SKN" and «سكن», 36 % of the cap height of space on each side.
- **Lettering:** "SKN" and «سكن» in **Readex Pro Bold** (700), outlined. Latin tracking +24 units. The Arabic is set 6 % larger so it matches the capitals visually.
- **Masters:** `masters/`, rebuilt with `python build.py` (needs `fonttools` and `uharfbuzz`). Never retype the logo.

## 3. Which version, where

| Use | File | Background |
|---|---|---|
| Website header (Arabic and English pages), documents, decks (default) | `skn-horizontal-color.svg` | White or Sand |
| Dark sections, video end cards | `skn-horizontal-reversed.svg` | Ink |
| Clay banners | `skn-horizontal-on-clay.svg` | Clay |
| The one place «سكن» appears: signage, official papers, website footer | `skn-bilingual-*.svg` | as above |
| Letters only (tight spaces, partner logos) | `skn-wordmark-*.svg` | as above |
| Symbol only (stamps, patterns, small UI) | `skn-symbol-*.svg` | as above |
| App icon, social avatar (primary) | `skn-app-icon.svg` (Ink tile) | — |
| App icon alternatives | `skn-app-icon-clay.svg`, `skn-app-icon-sand.svg` | — |
| Browser tab, PWA | `web-icons/` (favicon.ico/svg, 180/192/512, maskable, manifest, `head-snippet.html`). 16, 32 and 48 px are drawn on the pixel grid; the Apple touch icon is full-bleed because iOS rounds it. | — |
| One-colour print, embroidery | `*-mono-ink.svg`, `*-black.svg`, `*-white.svg` | — |

Every lockup exists in six colourways: `color`, `reversed`, `on-clay`, `mono-ink`, `black`, `white`. PNG previews are in `renders/`; the one-page summary is `overview.png`.

## 4. Colours (unchanged from SakanHub)

| Name | HEX | Role |
|---|---|---|
| **Clay** | `#C8502A` | The top floor of the symbol; primary buttons; active and focus states |
| **Ink** | `#1D2433` | Letters, lower floors, headings, text, dark sections, primary app icon |
| **Sand** | `#F6F3EE` | Main page and slide background (use it more than white) |
| **Light clay** | `#F08A5D` | The top floor on dark backgrounds **only** |
| White | `#FFFFFF` | Cards; letters on Ink or Clay |

- Clay is the one accent. In the logo it appears **only** on the top floor.
- Earth tones are current in Saudi branding (Diriyah Tan, Saudia's sand); Clay and Sand fit that.
- Contrast: Ink on Sand or White passes AAA. Clay on White and White on Clay pass AA (4.5:1). Light clay on Ink is 6.3:1.

## 5. Typography

- **One family for both scripts: Readex Pro** (Google Fonts, SIL OFL 1.1). Arabic and Latin are designed together, which follows the bilingual-parity trend in Saudi brands (Saudia, Riyadh Air, Tamara).
- **Weights:** Bold 700 for the wordmark, headlines and labels; SemiBold 600 for sub-heads; Regular 400 for body text. Readex Pro's maximum weight is 700.
- **Character:** modern and light, wide and open. It reads well on phones in both languages.
- **Font file:** `fonts/ReadexPro-VF.ttf` (variable: `wght` 160–700, `HEXP` 0–100; keep `HEXP` at 0). Licence: `fonts/OFL-ReadexPro.txt`.
- **Retired:** Nunito and Almarai (the SakanHub faces).

## 6. Clear space and minimum size

- **Clear space:** keep at least one floor height (about ⅓ of the symbol) clear on every side of a lockup, and ¼ of the symbol around the symbol on its own.
- **Minimum sizes:**
  - Horizontal: 96 px / 25 mm wide.
  - Bilingual: 160 px / 40 mm.
  - Symbol: 16 px (use the web-icon set) / 5 mm.

## 7. Don'ts

- Don't stretch, rotate, outline, add shadows or gradients, or change the floor proportions or the door.
- Don't make more than the top floor Clay, or put Light clay on white or Sand.
- Don't set "SKN" in another typeface, or retype it in Readex Pro instead of using the files.
- Don't separate «سكن» and "SKN" with anything but the vertical rule in the bilingual lockup.
- Don't put the logo on busy photos. Use the white or reversed version on a calm, dark area.

## 8. Open items

1. **Formal company name** behind SKN (shortlist: Saudi Keep Network, Staff Keep Network, Saudi Keel Network, Saudi Kin Network). Check registration and trademark.
2. **Domains and handles** for SKN: not checked yet. `sakanhub.sa` was the old plan.
3. **Slogans:** "All your crew housing. One hub." / «كل سكن عمّالك في مكان واحد» are kept for now. "Hub" came from the old name, so review it.
4. **Trademark:** file the symbol together with "SKN" and «سكن» as a combined mark, after an IP lawyer's pre-search.
5. Optional later: have a type foundry fine-tune the wordmark (the way 29LT did for Tamara).
