---
name: SakanHub
description: Licensed worker housing in Saudi Arabia, requested in one step.
colors:
  clay: "#C8502A"
  clay-hover: "#B34522"
  clay-press: "#9E3C1D"
  clay-light: "#F08A5D"
  clay-wash: "#FBEDE7"
  ink: "#1D2433"
  ink-2: "#4A5265"
  ink-3: "#6B7283"
  sand: "#F6F3EE"
  sand-2: "#EDE8E0"
  line: "#E3DED6"
  line-strong: "#CFC8BD"
  white: "#FFFFFF"
  ok: "#2E7D5B"
  err: "#B3261E"
typography:
  display:
    fontFamily: "Almarai (ar) / Nunito (en), system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.75rem + 2.6vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em (en only)"
  headline:
    fontFamily: "Almarai (ar) / Nunito (en), system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.5rem + 1.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.15
  title:
    fontFamily: "Almarai (ar) / Nunito (en), system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.08rem + 0.35vw, 1.3rem)"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Almarai (ar) / Nunito (en), system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Almarai (ar) / Nunito (en), system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 800
    lineHeight: 1.3
rounded:
  control: "10px"
  card: "12px"
  panel: "18px"
  pill: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.clay-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "48px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    height: "48px"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "0 16px"
  request-panel:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "24px"
  readout:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.card}"
    padding: "16px"
---

# Design System: SakanHub

## Overview

**Creative North Star: "The Licensed Request"**

Every page should feel like a clear, correctly filled official request: calm grounds, exact rules and numbers, and one clay action that says what to do next. The site is a service, not a catalogue. Its craft benchmark is Stripe, Careem and Tabby: the category standard, executed precisely, with no ironic quirks and nothing that reads as template output.

Density is moderate and scannable. Pages use short headlines, one-line supports and lists rather than paragraphs (long-form text lives only on guide and regulation pages). Trust comes from precision: the licensing rules applied to the visitor's own numbers, with the source named.

Arabic is the primary language and English is its mirror. Every layout is written with logical properties so it flips cleanly between RTL and LTR.

**Key Characteristics:**
- White and sand grounds, ink type, hairline borders.
- Clay used only where something should be pressed or recognised as the brand.
- Rounded, heavy-weight type (Almarai / Nunito ExtraBold) for headings and labels.
- One lifted object per screen: the request panel.
- Real photography (openly licensed stock until we have our own buildings) in rounded frames, carrying the human side of the brand.
- Rule-derived numbers set large, sources set small.

## Colors

A warm-neutral system with one decisive accent, taken directly from the final brand palette.

### Primary
- **Clay** (#C8502A): the primary button, the house in the logo, active-nav underline, focus rings and text selection. Hover deepens to **Clay Hover** (#B34522), press to **Clay Press** (#9E3C1D).
- **Clay Wash** (#FBEDE7): the soft halo around focused fields and the brief highlight when the licensing track changes. Never a section background.
- **Light Clay** (#F08A5D): the logo's house on ink only. Never on white or sand.

### Neutral
- **Ink** (#1D2433): headings, body text, selected chips, the dark rules band and the footer.
- **Slate Ink** (#4A5265): secondary text, supports and descriptions (7.9:1 on white).
- **Mist Ink** (#6B7283): placeholders, captions and source lines (4.8:1 on white).
- **Sand** (#F6F3EE): hero and alternating section grounds, the readout box, stepper buttons. **Deep Sand** (#EDE8E0) for hover on sand.
- **Hairline** (#E3DED6) and **Strong Hairline** (#CFC8BD): dividers, card borders, input and chip outlines.
- **White** (#FFFFFF): the default page ground and the request panel.
- **Status:** Licence Green (#2E7D5B) for the compliance tick only; Error Red (#B3261E) for field errors only.

### Named Rules
**The One Clay Rule.** Clay marks an action or the brand, nothing else. Icons, list dots, section bands and decorations stay ink or neutral.

**The Light Clay Rule.** Light clay appears only on ink. On white it drifts toward Mnzil's orange.

## Typography

**Display Font:** Almarai ExtraBold (Arabic) / Nunito ExtraBold (Latin), with system-ui fallback
**Body Font:** Almarai Regular (Arabic) / Nunito Regular (Latin)

**Character:** Both faces are rounded and firm, matching the logo's lettering. Weight carries the hierarchy (400 for reading, 800 for anything to scan) rather than many sizes.

### Hierarchy
- **Display** (800, clamp 2.3–3.9rem, 1.15): one H1 per page.
- **Headline** (800, clamp 1.8–2.6rem, 1.15): section headings.
- **Title** (800, clamp 1.15–1.3rem): card and list headings; also the support line under section heads, at regular weight.
- **Body** (400, clamp 1–1.06rem, 1.6): running text, capped at 64ch on guide pages.
- **Label** (800, 0.92rem): form labels, readout title, chip text (700).
- **Figure** (800, Title-to-Headline size, tabular numerals): readout and rule numbers.

### Named Rules
**The Weight-Not-Size Rule.** If something needs to be found at a glance, make it 800; don't add a new size.

**The Numbers Read Left-to-Right Rule.** Figures such as "4 m²" and "1/8" keep LTR direction inside Arabic text.

## Layout

- **Container:** max 1200px, 24px side gutter.
- **Spacing:** an 8-point scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). Sections breathe at 96px vertical padding; groups inside use gap, not margins.
- **Home order (redesign, 7 Oct 2026):** hero (slogan, one human line, two buttons, a three-item proof line, photo) → who we are → services (2×2 photo cards) → compliance band (ink) → crew wellbeing → how it works → cities → request section → owners → FAQ → clay band. The company and its services still come first and the form still sits lower down; the compliance proof moved up so a buyer sees "licensed, Qiwa-matched, in my city" within two screens.
- **Hero proof line:** three short ticked items under the buttons: licensed on Balady and MODON · matched to your Qiwa headcount · the live cities. Facts only, no numbers we don't have.
- **Request buttons on the home page** jump to the on-page form (`#home-request`); the header button still opens the request page.
- **Inner pages:** content plus a sticky photo aside (max 420px), then a sand request section at the bottom. Text-only pages (regulations, FAQ, glossary, resources) use a single 46rem column. Stacks to one column below 1000px.
- **Section rhythm:** white, sand and ink bands alternate. Ink is reserved for the rules band and the footer, and two ink bands never touch.
- **Breakpoints:** 1240px (desktop nav becomes a menu), 1000px (two columns stack), 720px (phone header: logo, a 44px WhatsApp icon button, request button, menu; the language switch moves into the menu), 560px (form rows stack).
- **Phone first screen:** headline, support line and both buttons before the fold.

## Elevation & Depth

Flat by default. Sections are separated by ground colour and hairlines, not shadows. Exactly two things lift: the request panel, which is the primary task, and pop-over menus.

### Shadow Vocabulary
- **Lifted Panel** (`box-shadow: 0 2px 4px rgb(29 36 51 / 0.05), 0 18px 40px -12px rgb(29 36 51 / 0.18)`): the request panel and the phone menu.
- **Resting Hint** (`box-shadow: 0 1px 2px rgb(29 36 51 / 0.06), 0 2px 8px rgb(29 36 51 / 0.05)`): available for small floating elements; not used on cards.

### Named Rules
**The One Lifted Object Rule.** Only one thing per screen floats, and it's the thing the visitor should use.

## Shapes

Gently rounded throughout, never sharp and never bubbly. Controls are 10px, cards and the readout 12px, the request panel 18px, and chips are full pills. Borders are 1px hairlines. Circles appear only as list dots, numbered steps and the logo's resident dot.

## Components

### Buttons
Firm and friendly: heavy labels, solid fills, clear states.
- **Shape:** gently rounded (10px), min height 48px, 24px side padding, label 800.
- **Primary:** clay fill, white label, a faint clay drop shadow. Hover deepens; press deepens further and nudges down 1px.
- **Ghost:** transparent with a strong hairline and ink label (WhatsApp, secondary actions). Hover fills sand.
- **Ink / Light:** ink fill on light grounds, white fill on ink bands, for secondary actions where clay would compete.
- **Submit:** full-width primary at 54px.

### Chips
- **Style:** white pill, strong hairline, ink label at 700, 40px tall. Used for city choice.
- **State:** selected is solid ink with a white label (not clay). The focus ring is clay.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** white on sand, or sand on white.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1px hairline.
- **Internal Padding:** 16–24px.

### Inputs / Fields
- **Style:** white, strong hairline, 10px radius, 48px tall, value at 700, placeholders in Mist Ink.
- **Focus:** the border turns clay with a 3px clay-wash halo.
- **Error:** red border and a short red message under the field.
- **Stepper:** for worker count, a minus/plus on sand flanking a centred number.

### Navigation
- **Desktop:** sticky white header, logo at the start, then Companies, Services ▾ and Cities ▾ (lifted dropdown panels; Cities lists only launched cities), Building owners, Regulations, Resources. Active page marked by a 2px clay underline. The language switch, WhatsApp (ghost) and Request housing (primary) sit at the end.
- **Under 1240px:** logo, compact request button and a menu button. The menu opens as a lifted panel with WhatsApp first, then grouped services and cities, links and language.
- **Phones:** WhatsApp stays in the bar as an icon button; under 440px the English request button reads "Request". Every tap target is at least 44px, footer links included.

### Photos
- Rounded frame (18px; 12px inside cards), `object-fit: cover`, set ratios (hero 5:4, cards 16:10, asides 4:5). A slot can set `pos` (object-position) when the subject sits off-centre.
- Every photo ships as a 1200px WebP twin next to the JPEG.
- **Art direction:** realistic and decent (never luxury, never grim), people and places that read Saudi / Gulf / South Asian, and on topic for the section it sits in.
- Until a file exists, a sand gradient block with a faint house mark holds the space.
- Openly licensed stock or our own photos only, credited in `site/public/images/CREDITS.md`. Never AI-generated images presented as our buildings.

### Brand marks (7 Oct 2026)
- **Header:** the bilingual horizontal lockup (SakanHub | سكن هب) from 1480px wide (28px tall in English so the bar stays inside the container); below that, the Arabic wordmark on Arabic pages and the Latin wordmark on English pages.
- **Clay brand band:** the one full-clay section, closing the home page: stacked on-clay lockup, «سكّن طاقمك بضغطة» / "House your crew in a tap", a white button and a white-outline WhatsApp button.
- **Step markers:** the brand house (icon file used unaltered as a CSS mask) with the step number inside, above the resident dot. Clay for step 1, ink for the rest.
- **Watermark:** one very faint white house (4.5% opacity) bleeding off the corner of the ink rules band. Nowhere else.
- **Share cards:** `site/public/og-ar.jpg` / `og-en.jpg` (1200×630), made by `site/scripts/make-og.mjs`. Regenerate after changing the logo, slogan or hero photo.
- Not used: the resident dot as a nav marker (founder declined).

### Reveal on scroll
- Every section after the first fades up (20px, 600ms ease-out) once it is 15% into the viewport; lists marked `stagger` follow item by item (70ms apart, after 120ms). Founder request, 7 Oct 2026.
- Anything already on screen when the page loads shows immediately, so the first view never ends in a blank band.
- Switched on only by JS, and never under `prefers-reduced-motion`, so the page is always fully readable without it.

### Not-yet-launched items
- Shown greyed with a dashed "TBD" pill (cities) or "Soon" pill (planned articles). They never link anywhere.

### Request Panel with Live Readout (signature)
The page's working centre: city chips, worker stepper, start date, phone, add-on checkboxes and the primary submit. Inside it, a sand **readout** shows "what your request needs": minimum rooms, sanitary sets, sleeping area and licensing track, recalculated as the visitor types. It's labelled as an estimate from the rules and names its source.
- Figures settle in under 200ms (a short fade-up); a change of licensing track briefly washes clay.
- Four columns in wide panels, 2×2 when the panel is under 460px.
- Nothing is pre-filled on the home page: city, headcount ("e.g. 40") and start date are chosen by the visitor and checked inline. City pages pre-select their own city.
- For a city with two licensing tracks (Dammam), one question («موقع شغلكم داخل مدينة صناعية؟») resolves the readout to Balady or MODON.
- Phone and headcount accept Arabic-Indic digits, +966 / 966 / 00966 and dashes; they are normalised to 05XXXXXXXX before sending.
- Under the submit button: "We'll call you to confirm the details first", then the compliance line with a green tick.
- A failed send never shows a false "thank you"; it reopens the request in WhatsApp.

### Rules Table
Label/value rows divided by hairlines, label in Slate Ink, value at 800. On ink bands the hairlines become #39425A and values turn white. A small source line always follows.

## Do's and Don'ts

### Do:
- **Do** keep clay to buttons, the logo house, active and focus states.
- **Do** show regulation numbers exactly (4 m² per person, max 10 per room, 1 sanitary set per 8) with their source (MOMAH / Balady, RCJY / MODON).
- **Do** use logical properties (inline-start/end) so every component mirrors between Arabic and English.
- **Do** keep text contrast at WCAG 2.2 AA or better, including small notes.
- **Do** use the final logo files from `brand/logo/final/` as they are.

### Don't:
- **Don't** put a kicker or eyebrow label above a heading; the heading carries itself.
- **Don't** add icon tiles above headings, gradient blobs, cream-and-serif styling or rows of three identical cards.
- **Don't** put light clay on white or sand.
- **Don't** add shadows to cards or sections; only the request panel and menus lift.
- **Don't** add browsing or listing patterns (building grids, availability boards); the site takes requests.
- **Don't** put the request form at the top of pages or in a sticky sidebar; it lives in its own section lower down.
- **Don't** add internal or meta notes to pages ("placeholder", "draft"); the only exception is the Resources page note.
- **Don't** retype or redraw the logo.
