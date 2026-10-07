# SakanHub (سكن هب) — Logo Guide

**Version 2.1 · 6 October 2026** (2.1: one consistent square house for the wordmark and the icon) (replaces the v1 sharp-letter kit in `../kit/`)

## 1. The logo

- **Idea:** the **n** in *sakan* is a home, and the **dot** at its door is **the resident**: a home with someone in it.
- **Lettering:**
  - Nunito ExtraBold (Latin) and Almarai ExtraBold (Arabic). Both are fully outlined in the files.
  - **Never retype the logo.**
- **One house, everywhere:** the house-n and the icon are the **identical drawing**. It's a square house (as wide as it is tall), with the same 148-unit rounded stroke as Nunito's letters and a 30° roof, about 35% wider than a normal n. The resident sits on the baseline.
- **The icon** is the same house scaled up. Never redraw, stretch or re-proportion it.

## 2. Which version, where

| Use | File | Background |
|---|---|---|
| Website header, investor deck, documents | `sakanhub-horizontal-color.svg` | White or sand |
| Dark website sections, video end cards | `sakanhub-horizontal-reversed.svg` | Ink |
| Clay banners, hero blocks | `sakanhub-horizontal-on-clay.svg` | Clay |
| Square spaces, social posts, signage | `sakanhub-stacked-color.svg` | White or sand |
| Latin-only (partner pages, email footers) | `sakanhub-wordmark-color.svg` | White or sand |
| Arabic-only | `sakanhub-arabic-color.svg` | White or sand |
| Social avatar, app store, phone home screen | `sakanhub-app-icon.svg` | — |
| Dark-mode app tile | `sakanhub-app-icon-dark.svg` | — |
| Browser tab | `web-icons/favicon.ico`, `favicon.svg` | — |
| One-colour print | `*-mono-clay.svg` or `*-black.svg` | White |
| On photos | `*-white.svg` | Calm, dark area only |

Every lockup (horizontal, stacked, wordmark, Arabic) exists in all six colourways: `color`, `reversed`, `on-clay`, `mono-clay`, `black`, `white`.

## 3. Colours

| Name | HEX | RGB | CMYK (approx.) | Role |
|---|---|---|---|---|
| **Clay** | `#C8502A` | 200 · 80 · 42 | 0 · 60 · 79 · 22 | The home and resident; app tile; key buttons |
| **Ink** | `#1D2433` | 29 · 36 · 51 | 43 · 29 · 0 · 80 | Letters, headings, body text, dark sections |
| **Light clay** | `#F08A5D` | 240 · 138 · 93 | 0 · 43 · 61 · 6 | The home on dark backgrounds **only** |
| **Sand** | `#F6F3EE` | 246 · 243 · 238 | 0 · 1 · 3 · 4 | Page and slide backgrounds |
| White | `#FFFFFF` | 255 · 255 · 255 | 0 · 0 · 0 · 0 | Backgrounds; logo on clay |

- **Contrast (WCAG):**
  - Ink on white: 15.5 : 1.
  - Clay on white, and white on clay: 4.53 : 1 (AA).
  - Light clay on ink: 6.3 : 1.
- **Clay vs Mnzil:** sharing a colour family with Mnzil (orange #EB7238) is a deliberate choice, like Keeta and HungerStation sharing yellow. We stay distinct through the deeper, redder clay, the ink pairing (Mnzil uses near-black #171717) and the house-n shape.
  - Keep **light clay** to dark backgrounds only, because on white it drifts toward Mnzil's orange.
- **Print:** the CMYK values are conversions. Get a Pantone match and a physical proof before signage.

## 4. Clear space and minimum size

- **Clear space:** keep **1 × the house-n width** around lockups, and **½ × the icon width** around the icon.
- **Minimum sizes:**
  - Horizontal: 140 px / 35 mm wide.
  - Stacked: 96 px / 25 mm.
  - Wordmark: 100 px.
  - Icon: 16 px (favicon set) / 6 mm.

## 5. Don'ts

- Don't stretch, rotate, or add shadows, outlines or gradients.
- Don't recolour outside the palette, or make the house the same colour as the letters in the colour version.
- Don't change the size relationship between the Latin and the Arabic.
- Don't use light clay on white backgrounds.
- Don't type "sakanhub" in Nunito to imitate the logo.

## 6. Files

- **Masters:** `masters/` (32 SVGs: 5 lockup types × 6 colourways, plus icons and app tiles).
- **Web icons:** `web-icons/` (favicon.ico/svg, apple-touch-icon, 192/512 icons, maskable, webmanifest, `head-snippet.html`).
- **Overview:** `overview.png`.
- **Rebuild:** `python build.py` (fonts and licences in `../fonts/`).

## 7. Open items

1. Trademark pre-search with an IP lawyer: a combined mark (Arabic + Latin), classes 36, 37, 42 and 43.
2. A Pantone match and a physical proof for clay before any signage.
3. Optional later: a custom-drawn Arabic wordmark that echoes the house-n.
