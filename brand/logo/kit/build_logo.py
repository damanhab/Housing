"""Build SakanHub logo masters (direction C: the n is a home) as outlined SVGs.

Lettering: Noto Sans Bold (Latin) and Noto Kufi Arabic Bold (Arabic), both SIL OFL 1.1 (logo use permitted).
All text is converted to paths; the house-n is constructed on the Noto Sans Bold grid (font units, y-up).
"""
import math
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

OUT = Path(__file__).parent
LATIN = TTFont(r"C:\Windows\Fonts\NotoSans-Bold.ttf")
ARABIC = TTFont(r"C:\Windows\Fonts\NotoKufiArabic-Bold.ttf")

INK = "#1D2433"     # wordmark
CLAY = "#C8502A"    # the home (accent)

# ---- house-n, Noto Sans Bold units (upm 1000): stem 151, n spans x 73..579, ascender 760 -------------
STEM = 151
L, R, MID = 73, 579, 326
PEAK = 772                       # roof apex on the ascender line (h, k, b) + 12 overshoot for the point
EAVE = PEAK - (MID - L)          # 45 deg roof -> 507
IN_PEAK = PEAK - STEM * math.sqrt(2)   # parallel inner roof -> 546.4 (= x-height)
IN_EAVE = IN_PEAK - (R - STEM - MID)   # -> 444.4
DOT_R = 72
DOT_CY = DOT_R - 10              # sits on the baseline with the same 10-unit overshoot as a/s/b
N_ADV = 650


def house_paths(tx, ty, s):
    """Return (house_d, dot_d) for the house-n placed at font-origin (tx, ty) in SVG space, scale s."""
    def p(x, y):
        return f"{tx + x * s:.2f} {ty - y * s:.2f}"
    outer = [(L, 0), (L, EAVE), (MID, PEAK), (R, EAVE), (R, 0)]
    inner = [(R - STEM, 0), (R - STEM, IN_EAVE), (MID, IN_PEAK), (L + STEM, IN_EAVE), (L + STEM, 0)]
    d = "M" + " L".join(p(*pt) for pt in outer + inner) + " Z"
    cx, cy, r = tx + MID * s, ty - DOT_CY * s, DOT_R * s
    dot = f"M{cx - r:.2f} {cy:.2f} A{r:.2f} {r:.2f} 0 1 0 {cx + r:.2f} {cy:.2f} A{r:.2f} {r:.2f} 0 1 0 {cx - r:.2f} {cy:.2f} Z"
    return d, dot


def text_path(font, text, tx, ty, s, kern=0):
    """Outline `text` with `font` starting at baseline origin (tx, ty), scale s. Returns (d, advance_px)."""
    gs, cmap, hmtx = font.getGlyphSet(), font.getBestCmap(), font["hmtx"]
    pen = SVGPathPen(gs)
    x = 0
    for ch in text:
        g = cmap[ord(ch)]
        gs[g].draw(TransformPen(pen, (s, 0, 0, -s, tx + x * s, ty)))
        x += hmtx[g][0] + kern
    return pen.getCommands(), (x - kern) * s


def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" '
            f'role="img" aria-labelledby="t"><title id="t">{title}</title>\n{body}\n</svg>\n')


def latin_wordmark(tx, ty, s, ink, clay):
    """saka + house-n + hub. Returns (svg_body, width_px)."""
    d1, w1 = text_path(LATIN, "saka", tx, ty, s, kern=-8)
    hx = tx + w1 + (-6) * s
    house, dot = house_paths(hx, ty, s)
    d2, w2 = text_path(LATIN, "hub", hx + (N_ADV - 6) * s, ty, s, kern=-8)
    width = (hx + (N_ADV - 6) * s + w2) - tx
    body = (f'<path fill="{ink}" d="{d1}"/>\n<path fill="{clay}" d="{house}"/>\n<path fill="{clay}" d="{dot}"/>\n'
            f'<path fill="{ink}" d="{d2}"/>')
    return body, width


# Arabic: presentation forms in visual (left-to-right) order: ﺐﻫ ﻦﻜﺳ  ->  reads سكن هب
ARABIC_VISUAL = "\uFE90\uFEEB \uFEE6\uFEDC\uFEB3"


def build(ink=INK, clay=CLAY, suffix="color"):
    S = 0.16                       # 1000 upm -> 160 px em
    asc, desc = 760 * S, 10 * S
    pad = 24
    # 1) Latin wordmark
    body, w = latin_wordmark(pad, pad + asc, S, ink, clay)
    (OUT / f"sakanhub-wordmark-{suffix}.svg").write_text(
        svg(w + 2 * pad, asc + desc + 2 * pad, body, "SakanHub wordmark"), encoding="utf-8")

    # 2) Symbol: the house-n alone, centred in a square
    side = 256
    hs = 0.30
    gw, gh = (R - L) * hs, (PEAK + 10) * hs
    tx = (side - gw) / 2 - L * hs
    ty = (side - gh) / 2 + PEAK * hs - 6          # optical: a touch above centre
    house, dot = house_paths(tx, ty, hs)
    (OUT / f"sakanhub-symbol-{suffix}.svg").write_text(
        svg(side, side, f'<path fill="{clay}" d="{house}"/>\n<path fill="{clay}" d="{dot}"/>', "SakanHub symbol"),
        encoding="utf-8")

    # 3) Arabic wordmark (Noto Kufi Arabic Bold), sized so its letter body matches the Latin x-height optically
    AS = S * 0.98
    ad, aw = text_path(ARABIC, ARABIC_VISUAL, pad, pad + 900 * AS, AS)
    (OUT / f"sakanhub-arabic-{suffix}.svg").write_text(
        svg(aw + 2 * pad, 1300 * AS + 2 * pad, f'<path fill="{ink}" d="{ad}"/>', "سكن هب"), encoding="utf-8")

    # 4) Horizontal bilingual lockup: Latin | rule | Arabic
    base = pad + asc
    body, w = latin_wordmark(pad, base, S, ink, clay)
    gap = 0.9 * STEM * S * 4
    rule_x = pad + w + gap / 2
    ad, aw = text_path(ARABIC, ARABIC_VISUAL, pad + w + gap, base, S * 0.74)
    rule = f'<rect fill="{ink}" opacity="1" x="{rule_x - 2:.2f}" y="{pad + 0.18 * asc:.2f}" width="4" height="{0.82 * asc:.2f}"/>'
    total_w = w + gap + aw + 2 * pad
    (OUT / f"sakanhub-horizontal-{suffix}.svg").write_text(
        svg(total_w, asc + 2 * pad + 40 * S * 4, body + "\n" + rule + f'\n<path fill="{ink}" d="{ad}"/>',
            "SakanHub سكن هب horizontal lockup"), encoding="utf-8")

    # 5) Stacked lockup: Latin over Arabic, centred
    lw = w
    a_s = S * 0.68
    _, aw2 = text_path(ARABIC, ARABIC_VISUAL, 0, 0, a_s)
    total_w = max(lw, aw2) + 2 * pad
    body, _ = latin_wordmark((total_w - lw) / 2, pad + asc, S, ink, clay)
    ad2, _ = text_path(ARABIC, ARABIC_VISUAL, (total_w - aw2) / 2, pad + asc + 150 * S * 2.2 + 760 * a_s, a_s)
    total_h = pad + asc + 150 * S * 2.2 + 1150 * a_s + pad
    (OUT / f"sakanhub-stacked-{suffix}.svg").write_text(
        svg(total_w, total_h, body + f'\n<path fill="{ink}" d="{ad2}"/>', "SakanHub سكن هب stacked lockup"),
        encoding="utf-8")


if __name__ == "__main__":
    build()
    build(ink="#000000", clay="#000000", suffix="black")
    build(ink="#FFFFFF", clay="#FFFFFF", suffix="white")
    build(ink="#FFFFFF", clay="#F08A5D", suffix="reversed")
    print("built:", sorted(p.name for p in OUT.glob("sakanhub-*.svg")))
