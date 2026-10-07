# SakanHub (سكن هب) — Logo Guidelines (compact)

**Version 1.0 · 6 October 2026**

## 1. The logo

- **Idea:** the **n** in *sakan* is a home, and the **dot** at its door is the hub. The name is the logo: housing, said at a glance.
- **Construction:**
  - The house-n is drawn on the Noto Sans Bold grid, with the same stem weight as the letters.
  - The roof apex sits on the ascender line (the tops of h, k and b), with a small overshoot.
  - The roof pitch is exactly 45°. The inner roof peaks on the x-height.
- **Versions:**

| Version | File | Use |
|---|---|---|
| **Horizontal (primary)** | `sakanhub-horizontal-*.svg` | Website header, deck, documents |
| Stacked | `sakanhub-stacked-*.svg` | Square-ish spaces, signage, social posts |
| Wordmark only (Latin) | `sakanhub-wordmark-*.svg` | Latin-only contexts, partner logos |
| Arabic only | `sakanhub-arabic-*.svg` | Arabic-only contexts |
| Symbol (house-n) | `sakanhub-symbol-*.svg` | App icon, avatar, building signs, merchandise |
| Symbol, small cut | `sakanhub-symbol-small-*.svg` | 24–48 px: heavier stem, bigger dot |
| Favicon cut | `sakanhub-symbol-favicon-source.svg` | 16 px only (no dot, which would close up) |

- **Colourways:** each version comes as `-color`, `-black`, `-white` and `-reversed` (white text with the light clay home, for dark backgrounds).

## 2. Clear space

Keep a clear zone of **1 × the house-n width** on all sides of the horizontal and stacked lockups, and **½ × the symbol width** around the symbol. The zone scales with the logo; never use a fixed distance.

## 3. Minimum size

| Version | Screen | Print |
|---|---|---|
| Horizontal | 140 px wide | 35 mm wide |
| Stacked | 96 px wide | 25 mm wide |
| Symbol | 24 px (use `-small`); 16 px (use the favicon cut) | 6 mm |

## 4. Colour

| Name | HEX | RGB | CMYK (approx.) | Use |
|---|---|---|---|---|
| **Clay** (primary accent) | `#C8502A` | 200 · 80 · 42 | 0 · 60 · 79 · 22 | The home; app-icon background; key buttons |
| **Ink** (primary neutral) | `#1D2433` | 29 · 36 · 51 | 43 · 29 · 0 · 80 | Wordmark, headings, body text |
| **Light clay** (on dark) | `#F08A5D` | 240 · 138 · 93 | 0 · 43 · 61 · 6 | The home on ink or black backgrounds |
| **Sand** (background) | `#F6F3EE` | 246 · 243 · 238 | 0 · 1 · 3 · 4 | Page and slide backgrounds |

- **Contrast (WCAG):**
  - Ink on white: 15.5 : 1.
  - Clay on white, and white on clay: 4.53 : 1 (passes AA for normal text).
  - Light clay on ink: 6.3 : 1.
- **Print:** the CMYK values above are mathematical conversions. Ask the printer to match Clay and Ink to the closest Pantone and approve a physical proof before any signage run.
- **Approved logo/background pairs:**
  - full colour on white or sand
  - white logo on clay
  - reversed logo on ink
  - black on white
- **On photos:** use the white version on a calm, dark area, or place the logo on a white or ink panel.
- **Why clay:** Saudi brands lean heavily on green, and proptech on blue. Clay recalls Najdi earth architecture, is warm and human, and is ownable in this category.

## 5. Typography

- **Logo lettering:**
  - Noto Sans Bold (Latin) and Noto Kufi Arabic Bold (Arabic).
  - Both use the SIL Open Font License 1.1, so commercial and logo use is allowed.
  - The logo files are outlined; **never retype the logo**.
- **Brand text (suggested):**
  - Latin: Noto Sans (Regular, Bold).
  - Arabic: Noto Kufi Arabic for headings, Noto Sans Arabic for body.
  - Web fallback: `system-ui, "Segoe UI", Tahoma, sans-serif`.

## 6. Don'ts

- Don't stretch, squash or rotate the logo.
- Don't recolour the logo outside the palette, and don't make the house-n the same colour as the text in the colour version.
- Don't use the favicon cut above 16 px, or the full symbol at 16 px.
- Don't add shadows, outlines, gradients or effects.
- Don't rearrange the lockup or resize Latin vs Arabic relative to each other.
- Don't place the logo on busy backgrounds without a panel.
- Don't recreate the wordmark by typing "sakanhub" in a font.

## 7. Files and contact

- **Master files:** `brand/logo/kit/`. Rebuild everything from `build_logo.py`.
- **Web icon set:** `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `maskable-512.png`, `site.webmanifest`, plus `head-snippet.html` to paste into the site's `<head>`.
- **Presentation:** `presentation.html` and `slides/slide-01…05.png`.
- **Open items:**
  1. Trademark pre-search (combined mark, Arabic + Latin, classes 36, 37, 42, 43) with an IP lawyer.
  2. A Pantone match and a physical proof for signage.
  3. A custom-drawn Arabic wordmark is optional later, to deepen ownership beyond the Noto Kufi outlines.
