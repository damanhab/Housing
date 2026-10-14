"""SKN (سكن) logo masters, v1: the "three floors" symbol + Readex Pro Bold lettering.

Run:  python build.py          (needs fonttools and uharfbuzz:  pip install fonttools uharfbuzz)
Font: Readex Pro (SIL OFL 1.1, logo use permitted), variable font in ./fonts, pinned to wght 700 / HEXP 0.
All lettering is shaped with HarfBuzz and written as outlines (no live text). The symbol is plain rectangles.
"""
import io
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

HERE = Path(__file__).parent
OUT = HERE / "masters"

# ---------------------------------------------------------------- palette
INK, CLAY, CLAY_LIGHT, SAND, WHITE, BLACK = "#1D2433", "#C8502A", "#F08A5D", "#F6F3EE", "#FFFFFF", "#000000"

# colourway -> (top floor, lower floors, letters)
COLORWAYS = {
    "color":     (CLAY, INK, INK),               # primary: on white / sand
    "reversed":  (CLAY_LIGHT, WHITE, WHITE),     # on ink or dark photos
    "on-clay":   (WHITE, WHITE, WHITE),          # on a clay background
    "mono-ink":  (INK, INK, INK),                # one colour
    "black":     (BLACK, BLACK, BLACK),
    "white":     (WHITE, WHITE, WHITE),
}

# ---------------------------------------------------------------- font (Readex Pro Bold)
_vf = TTFont(HERE / "fonts" / "ReadexPro-VF.ttf")
FONT = instancer.instantiateVariableFont(_vf, {"wght": 700, "HEXP": 0})
_buf = io.BytesIO(); FONT.save(_buf)
HB_FONT = hb.Font(hb.Face(hb.Blob(_buf.getvalue())))
GLYPHS, ORDER = FONT.getGlyphSet(), FONT.getGlyphOrder()
CAP = FONT["OS/2"].sCapHeight            # 700 units

LATIN_TRACK = 24                         # a touch of air between the capitals


def shape(text, x, y, track=0):
    """Shaped outline of `text`, baseline at y (SVG y-down, font units). Returns (path d, advance)."""
    buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties()
    hb.shape(HB_FONT, buf)
    pen, pos = SVGPathPen(GLYPHS), x
    for info, p in zip(buf.glyph_infos, buf.glyph_positions):
        GLYPHS[ORDER[info.codepoint]].draw(TransformPen(pen, (1, 0, 0, -1, pos + p.x_offset, y - p.y_offset)))
        pos += p.x_advance + track
    return pen.getCommands(), pos - x - track


def bounds(d):
    """Rough bbox from a path string (control points included, good enough for layout)."""
    import re
    xs, ys = [], []
    for cmd, args in re.findall(r"([MLHVCQZ])([^MLHVCQZ]*)", d):
        n = [float(v) for v in re.findall(r"-?\d*\.?\d+", args)]
        if cmd == "H": xs += n
        elif cmd == "V": ys += n
        elif cmd in "MLCQ": xs += n[0::2]; ys += n[1::2]
    return min(xs), min(ys), max(xs), max(ys)


# ---------------------------------------------------------------- the symbol: three floors and a door
# Square of side S. Three floors, gap 9 % of S; the bottom floor is split by a door 22 % of S wide.
def floors(x, y, s):
    """Returns (top floor rects, lower floor rects) as lists of (x, y, w, h); (x, y) = top-left."""
    gap = s * 0.09; h = (s - 2 * gap) / 3; door = s * 0.22
    top = [(x, y, s, h)]
    middle = (x, y + h + gap, s, h)
    side = (s - door) / 2
    bottom = [(x, y + 2 * (h + gap), side, h), (x + side + door, y + 2 * (h + gap), side, h)]
    return top, [middle] + bottom


def rects_svg(rects, fill):
    return "".join(f'<rect x="{a:.2f}" y="{b:.2f}" width="{w:.2f}" height="{h:.2f}" fill="{fill}"/>' for a, b, w, h in rects)


def doc(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" '
            f'role="img" aria-labelledby="t"><title id="t">{title}</title>\n{body}\n</svg>\n')


# ---------------------------------------------------------------- compositions (font units, then scaled)
SYM = CAP                      # symbol height = cap height of SKN
GAP = CAP * 0.42               # symbol -> letters
PAD = CAP * 0.30               # clear margin inside the file


def group(body, s, tx, ty):
    return f'<g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})">{body}</g>'


def horizontal(top, low, ink):
    t, l = floors(0, -SYM, SYM)
    d, adv = shape("SKN", SYM + GAP, 0, LATIN_TRACK)
    body = rects_svg(t, top) + rects_svg(l, low) + f'<path fill="{ink}" d="{d}"/>'
    return body, (0, -SYM, SYM + GAP + adv, 0)


def wordmark(ink):
    d, adv = shape("SKN", 0, 0, LATIN_TRACK)
    return f'<path fill="{ink}" d="{d}"/>', (0, -CAP, adv, 0)


AR_SCALE = 1.06                # Arabic sits visually smaller at the same size; lift it to match the caps


def arabic_path(x_right, ink):
    """«سكن» right-aligned to x_right, baseline 0, scaled by AR_SCALE."""
    d, adv = shape("سكن", 0, 0)
    x0 = x_right - adv * AR_SCALE
    return f'<g transform="translate({x0:.2f} 0) scale({AR_SCALE})"><path fill="{ink}" d="{d}"/></g>', adv * AR_SCALE, d


def bilingual(top, low, ink):
    body, (x0, y0, x1, y1) = horizontal(top, low, ink)
    rule_x = x1 + CAP * 0.36
    rule = f'<rect x="{rule_x:.2f}" y="{-CAP * 0.95:.2f}" width="{CAP * 0.07:.2f}" height="{CAP * 0.90:.2f}" rx="{CAP * 0.035:.2f}" fill="{ink}"/>'
    _, adv, d = arabic_path(0, ink)
    ax1 = rule_x + CAP * 0.07 + CAP * 0.36 + adv
    ar, _, _ = arabic_path(ax1, ink)
    bx = bounds(d)
    return body + rule + ar, (x0, min(y0, bx[1] * AR_SCALE), ax1, max(y1, bx[3] * AR_SCALE))


def arabic_lockup(top, low, ink):
    """RTL: symbol on the right, «سكن» to its left."""
    _, adv, d = arabic_path(0, ink)
    ar, _, _ = arabic_path(adv, ink)
    t, l = floors(adv + GAP, -SYM, SYM)
    bx = bounds(d)
    return ar + rects_svg(t, top) + rects_svg(l, low), (0, min(-SYM, bx[1] * AR_SCALE), adv + GAP + SYM, max(0, bx[3] * AR_SCALE))


def write(name, body_box, height_px, title):
    body, (x0, y0, x1, y1) = body_box
    s = height_px / ((y1 - y0) + 2 * PAD)
    w = (x1 - x0 + 2 * PAD) * s
    (OUT / name).write_text(doc(w, height_px, group(body, s, (PAD - x0) * s, (PAD - y0) * s), title), encoding="utf-8")


def symbol_file(name, top, low, side=256, bg=None, inset=0.0):
    k = side * (1 - 2 * (0.12 + inset)) / SYM
    off = (side - SYM * k) / 2
    t, l = floors(off, off, SYM * k)
    bgr = f'<rect width="{side}" height="{side}" rx="{side * 0.22:.1f}" fill="{bg}"/>' if bg else ""
    (OUT / name).write_text(doc(side, side, bgr + rects_svg(t, top) + rects_svg(l, low), "SKN symbol"), encoding="utf-8")


if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    for cw, (top, low, ink) in COLORWAYS.items():
        write(f"skn-horizontal-{cw}.svg", horizontal(top, low, ink), 256, "SKN logo")
        write(f"skn-bilingual-{cw}.svg", bilingual(top, low, ink), 256, "SKN سكن logo")
        write(f"skn-arabic-{cw}.svg", arabic_lockup(top, low, ink), 256, "سكن logo")
        write(f"skn-wordmark-{cw}.svg", wordmark(ink), 256, "SKN wordmark")
        symbol_file(f"skn-symbol-{cw}.svg", top, low)
    symbol_file("skn-app-icon.svg", CLAY_LIGHT, WHITE, bg=INK, inset=0.10)        # primary app icon
    symbol_file("skn-app-icon-clay.svg", WHITE, WHITE, bg=CLAY, inset=0.10)
    symbol_file("skn-app-icon-sand.svg", CLAY, INK, bg=SAND, inset=0.10)
    # maskable PWA icon: full-bleed Ink, symbol inside the 80 % safe zone
    side = 512; s = side * 0.46; off = (side - s) / 2; t, l = floors(off, off, s)
    (OUT / "skn-maskable.svg").write_text(doc(side, side, f'<rect width="{side}" height="{side}" fill="{INK}"/>'
                                              + rects_svg(t, CLAY_LIGHT) + rects_svg(l, WHITE), "SKN icon"), encoding="utf-8")
    print("built", len(list(OUT.glob("*.svg"))), "files in", OUT)
