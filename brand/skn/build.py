"""SKN (سكن) logo masters, v1: the "three floors" symbol + Readex Pro Bold lettering.

Run:  python build.py          (needs fonttools and uharfbuzz:  pip install fonttools uharfbuzz)
Font: Readex Pro (SIL OFL 1.1, logo use permitted), variable font in ./fonts, pinned to wght 700 / HEXP 0.
All lettering is shaped with HarfBuzz and written as outlines (no live text). The symbol is plain rectangles.
"""
import io
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.boundsPen import BoundsPen
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
    """Shaped outline of `text`, baseline at y (SVG y-down, font units).
    Returns (path d, advance, ink box (x0, y0, x1, y1)). Layout uses the ink box, so gaps and margins are optical, not side-bearing dependent."""
    buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties()
    hb.shape(HB_FONT, buf)
    pen, ink, pos = SVGPathPen(GLYPHS), BoundsPen(GLYPHS), x
    for info, p in zip(buf.glyph_infos, buf.glyph_positions):
        t = (1, 0, 0, -1, pos + p.x_offset, y - p.y_offset)
        GLYPHS[ORDER[info.codepoint]].draw(TransformPen(pen, t))
        GLYPHS[ORDER[info.codepoint]].draw(TransformPen(ink, t))
        pos += p.x_advance + track
    return pen.getCommands(), pos - x - track, ink.bounds


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
GAP = CAP * 0.42               # symbol -> letters, measured ink to ink
RULE_GAP = CAP * 0.36          # bilingual: letters -> rule -> Arabic, ink to ink on both sides
PAD = CAP * 0.30               # clear margin inside the file, the same on all four sides of the ink


def group(body, s, tx, ty):
    return f'<g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})">{body}</g>'


def latin(x_ink, ink):
    """«SKN» with its ink starting at x_ink. Returns (svg, ink box)."""
    _, _, (bx0, _, _, _) = shape("SKN", 0, 0, LATIN_TRACK)
    d, _, box = shape("SKN", x_ink - bx0, 0, LATIN_TRACK)
    return f'<path fill="{ink}" d="{d}"/>', box


def horizontal(top, low, ink):
    t, l = floors(0, -SYM, SYM)
    letters, (_, ly0, lx1, ly1) = latin(SYM + GAP, ink)
    body = rects_svg(t, top) + rects_svg(l, low) + letters
    return body, (0, min(-SYM, ly0), lx1, max(0, ly1))


def wordmark(ink):
    letters, box = latin(0, ink)
    return letters, box


AR_SCALE = 1.06                # Arabic sits visually smaller at the same size; lift it to match the caps


def arabic(x_ink_left, ink):
    """«سكن» scaled by AR_SCALE about its baseline, with its ink starting at x_ink_left. Returns (svg, ink box)."""
    d, _, (bx0, by0, bx1, by1) = shape("سكن", 0, 0)
    tx = x_ink_left - bx0 * AR_SCALE
    svg = f'<g transform="translate({tx:.2f} 0) scale({AR_SCALE})"><path fill="{ink}" d="{d}"/></g>'
    return svg, (x_ink_left, by0 * AR_SCALE, x_ink_left + (bx1 - bx0) * AR_SCALE, by1 * AR_SCALE)


def bilingual(top, low, ink):
    body, (x0, y0, x1, y1) = horizontal(top, low, ink)
    rule_w = CAP * 0.07
    rule_x = x1 + RULE_GAP
    rule = f'<rect x="{rule_x:.2f}" y="{-CAP * 0.95:.2f}" width="{rule_w:.2f}" height="{CAP * 0.90:.2f}" rx="{CAP * 0.035:.2f}" fill="{ink}"/>'
    ar, (_, ay0, ax1, ay1) = arabic(rule_x + rule_w + RULE_GAP, ink)
    return body + rule + ar, (x0, min(y0, ay0), ax1, max(y1, ay1))


def arabic_lockup(top, low, ink):
    """RTL: symbol on the right, «سكن» to its left, the same ink-to-ink gap as the Latin lockup."""
    ar, (ax0, ay0, ax1, ay1) = arabic(0, ink)
    t, l = floors(ax1 + GAP, -SYM, SYM)
    return ar + rects_svg(t, top) + rects_svg(l, low), (ax0, min(-SYM, ay0), ax1 + GAP + SYM, max(0, ay1))


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


# ---------------------------------------------------------------- web icons (PNG/ICO/SVG favicon)
# Small sizes are drawn on the pixel grid by hand so the floors and the door stay crisp at 16, 32 and 48 px.
# Grid per size: (tile radius, symbol x, symbol y, floor height, gap, door width, symbol width)
PIXEL_GRID = {16: (3, 3, 4, 2, 1, 2, 10), 32: (7, 6, 7, 5, 2, 5, 19), 48: (10, 10, 10, 8, 2, 6, 28)}
# 16 px is a 10 x 8 symbol: at that size one-pixel gaps keep the floors and the door readable.


def _hex(c):
    return tuple(int(c[i:i + 2], 16) for i in (1, 3, 5)) + (255,)


def _pixel_icon(size):
    from PIL import Image, ImageDraw
    r, sx, sy, fh, gap, door, sw = PIXEL_GRID[size]
    k = 8                                               # supersample only the tile's rounded corners
    tile = Image.new("RGBA", (size * k, size * k), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle((0, 0, size * k - 1, size * k - 1), r * k, fill=_hex(INK))
    im = tile.resize((size, size), Image.LANCZOS)
    d = ImageDraw.Draw(im)
    side = (sw - door) // 2
    rows = [(sy, CLAY_LIGHT, [(sx, sw)]), (sy + fh + gap, WHITE, [(sx, sw)]),
            (sy + 2 * (fh + gap), WHITE, [(sx, side), (sx + sw - side, side)])]
    for y, colour, spans in rows:
        for x, w in spans:
            d.rectangle((x, y, x + w - 1, y + fh - 1), fill=_hex(colour))
    return im


def _large_icon(side, rounded=True, scale=0.56):
    """Ink tile with the reversed symbol. rounded=False gives a full-bleed square (Apple touch icon: iOS rounds it)."""
    from PIL import Image, ImageDraw
    k = 4; S = side * k
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if rounded: d.rounded_rectangle((0, 0, S - 1, S - 1), S * 0.22, fill=_hex(INK))
    else: d.rectangle((0, 0, S - 1, S - 1), fill=_hex(INK))
    s = S * scale; off = (S - s) / 2
    t, l = floors(off, off, s)
    for (x, y, w, h), c in [(r_, CLAY_LIGHT) for r_ in t] + [(r_, WHITE) for r_ in l]:
        d.rectangle((round(x), round(y), round(x + w) - 1, round(y + h) - 1), fill=_hex(c))
    return im.resize((side, side), Image.LANCZOS)


def favicon_svg():
    """The 16 px pixel grid as an SVG, so the browser tab icon is sharp at 16 and 32 px."""
    r, sx, sy, fh, gap, door, sw = PIXEL_GRID[16]
    side = (sw - door) // 2
    rects = [(sx, sy, sw, CLAY_LIGHT), (sx, sy + fh + gap, sw, WHITE),
             (sx, sy + 2 * (fh + gap), side, WHITE), (sx + sw - side, sy + 2 * (fh + gap), side, WHITE)]
    body = f'<rect width="16" height="16" rx="{r}" fill="{INK}"/>' + "".join(
        f'<rect x="{x}" y="{y}" width="{w}" height="{fh}" fill="{c}"/>' for x, y, w, c in rects)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges" '
            f'role="img" aria-labelledby="t"><title id="t">SKN</title>{body}</svg>\n')


def web_icons():
    out = HERE / "web-icons"; out.mkdir(exist_ok=True)
    small = {n: _pixel_icon(n) for n in PIXEL_GRID}
    for n, im in small.items(): im.save(out / f"favicon-{n}.png")
    small[48].save(out / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=[small[16], small[32]])
    _large_icon(180, rounded=False).save(out / "apple-touch-icon.png")
    _large_icon(192).save(out / "icon-192.png")
    _large_icon(512).save(out / "icon-512.png")
    _large_icon(512, rounded=False, scale=0.46).save(out / "maskable-512.png")
    (out / "favicon.svg").write_text(favicon_svg(), encoding="utf-8")


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
    web_icons()
    print("built", len(list(OUT.glob("*.svg"))), "files in", OUT, "and the web icons")
