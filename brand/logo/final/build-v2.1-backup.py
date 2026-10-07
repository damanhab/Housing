"""SakanHub logo masters, v2 (rounded): Nunito ExtraBold + Almarai ExtraBold, inline house-n, wide icon.

Fonts (SIL OFL 1.1, logo use permitted) live in ../fonts. All lettering is outlined; the house is built as a
round-capped, round-joined stroke on the Nunito grid and then expanded to a filled outline (no live strokes).
Colours are parameters: run `python build.py` for black masters; colour sets are added once the palette is final.
"""
import math
import sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

HERE = Path(__file__).parent
FONTS = HERE.parent / "fonts"
LATIN = TTFont(FONTS / "Nunito-ExtraBold-instance.ttf")
ARABIC = TTFont(FONTS / "Almarai-ExtraBold.ttf")
ARABIC_VISUAL = "ﺐﻫ ﻦﻜﺳ"   # presentation forms, visual order -> سكن هب

PITCH = math.radians(30)          # roof pitch, shared by the inline n and the icon


# ---------------------------------------------------------------- geometry helpers (y-up font units)
def _isect(p, d, q, e):
    """Intersection of line p + t d and q + s e."""
    det = d[0] * (-e[1]) - d[1] * (-e[0])
    t = ((q[0] - p[0]) * (-e[1]) - (q[1] - p[1]) * (-e[0])) / det
    return (p[0] + t * d[0], p[1] + t * d[1])


def house_outline(xl, xr, y_bottom, y_eave, w):
    """Filled outline of the stroke  (xl,y_bottom)->(xl,y_eave)->apex->(xr,y_eave)->(xr,y_bottom),
    stroke width w, round caps and round outer joins. Coordinates are y-up; returns a list of path ops."""
    r = w / 2
    xm = (xl + xr) / 2
    y_apex = y_eave + (xm - xl) * math.tan(PITCH)
    s, c = math.sin(PITCH), math.cos(PITCH)
    n_left = (-s, c)        # outward normal of the left roof slope (up-left)
    n_right = (s, c)        # outward normal of the right roof slope (up-right)
    d_left, d_right = (c, s), (c, -s)
    P1, P2, P3 = (xl, y_eave), (xm, y_apex), (xr, y_eave)
    # inner (concave) corners: intersections of the inward offset lines
    in_l = _isect((xl + r, 0), (0, 1), (P1[0] - r * n_left[0], P1[1] - r * n_left[1]), d_left)
    in_apex = (xm, y_apex - r / c)
    in_r = _isect((xr - r, 0), (0, 1), (P3[0] - r * n_right[0], P3[1] - r * n_right[1]), d_right)
    ops = [
        ("M", (xl - r, y_bottom)),
        ("L", (xl - r, y_eave)),
        ("A", r, (P1[0] + r * n_left[0], P1[1] + r * n_left[1])),
        ("L", (P2[0] + r * n_left[0], P2[1] + r * n_left[1])),
        ("A", r, (P2[0] + r * n_right[0], P2[1] + r * n_right[1])),
        ("L", (P3[0] + r * n_right[0], P3[1] + r * n_right[1])),
        ("A", r, (xr + r, y_eave)),
        ("L", (xr + r, y_bottom)),
        ("A", r, (xr - r, y_bottom)),          # bottom cap, right stem
        ("L", in_r), ("L", in_apex), ("L", in_l),
        ("L", (xl + r, y_bottom)),
        ("A", r, (xl - r, y_bottom)),          # bottom cap, left stem
        ("Z",),
    ]
    return ops


def circle_ops(cx, cy, r):
    return [("M", (cx - r, cy)), ("A", r, (cx + r, cy)), ("A", r, (cx - r, cy)), ("Z",)]


def to_svg_d(ops, tx, ty, s):
    """Font units (y-up) -> SVG (y-down). Outer turns are clockwise on screen, so arcs use sweep=1."""
    out = []
    f = lambda p: f"{tx + p[0] * s:.2f} {ty - p[1] * s:.2f}"
    for op in ops:
        if op[0] in "ML":
            out.append(f"{op[0]}{f(op[1])}")
        elif op[0] == "A":
            rr = op[1] * s
            out.append(f"A{rr:.2f} {rr:.2f} 0 0 1 {f(op[2])}")
        else:
            out.append("Z")
    return " ".join(out)


def text_d(font, text, tx, ty, s):
    gs, cmap, hmtx = font.getGlyphSet(), font.getBestCmap(), font["hmtx"]
    pen, x = SVGPathPen(gs), 0
    for ch in text:
        g = cmap[ord(ch)]
        gs[g].draw(TransformPen(pen, (s, 0, 0, -s, tx + x * s, ty)))
        x += hmtx[g][0]
    return pen.getCommands(), x * s


# ---------------------------------------------------------------- the inline house-n (Nunito units)
STEM = 148
N_L, N_R = 58, 540                       # a normal Nunito n spans 58..540 (482 wide)
WIDTH_25 = (N_R - N_L) * 1.25            # chosen: +25 % -> 602.5
HN_L, HN_R = N_L, N_L + WIDTH_25          # outer extents 58..660.5
HN_ADV = HN_R + 58                       # same right side-bearing as n
ASC = 714 + 8                            # apex outer edge on the ascender line, + small overshoot for the point
r = STEM / 2
cxl, cxr = HN_L + r, HN_R - r            # stem centre lines
y_apex_c = ASC - r                       # (round join: outer edge = centre + r at the apex, approx.)
y_eave_c = y_apex_c - (cxr - cxl) / 2 * math.tan(PITCH)
Y_BOT_C = -9 + r                         # round cap bottom at -9, like Nunito's n
DOT_R = 86
DOT_CY = -9 + DOT_R                      # the resident sits on the baseline with the same overshoot


def inline_house(tx, ty, s):
    house = to_svg_d(house_outline(cxl, cxr, Y_BOT_C, y_eave_c, STEM), tx, ty, s)
    dot = to_svg_d(circle_ops((cxl + cxr) / 2, DOT_CY, DOT_R), tx, ty, s)
    return house, dot


# ---------------------------------------------------------------- compositions
def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" '
            f'height="{h:.0f}" role="img" aria-labelledby="t"><title id="t">{title}</title>\n{body}\n</svg>\n')


def wordmark(tx, ty, s, ink, accent):
    d1, w1 = text_d(LATIN, "saka", tx, ty, s)
    house, dot = inline_house(tx + w1, ty, s)
    d2, w2 = text_d(LATIN, "hub", tx + w1 + HN_ADV * s, ty, s)
    body = (f'<path fill="{ink}" d="{d1}"/>\n<path fill="{accent}" d="{house}"/>\n'
            f'<path fill="{accent}" d="{dot}"/>\n<path fill="{ink}" d="{d2}"/>')
    return body, w1 + HN_ADV * s + w2


def icon(side, color, dot_color=None, bg=None, scale=1.0):
    """Wide icon: same stroke logic, proportions of the approved preview (wider than tall, 30-degree roof)."""
    k = side / 256 * scale
    w = 34                        # stroke on a 256 canvas
    xl, xr = 46, 210              # stem centre lines
    y_bot, wall = 46, 62          # y-up: bottom cap centre at 46 from the bottom, wall height to the eave
    y_eave = y_bot + wall
    ops = house_outline(xl, xr, y_bot, y_eave, w)
    y_apex = y_eave + (xr - xl) / 2 * math.tan(PITCH)
    top, bottom = y_apex + w / 2, y_bot - w / 2
    ty = side / 2 + (top + bottom) / 2 * k - 4 * k          # optical centre: a touch above geometric centre
    tx = side / 2 - 128 * k
    house = to_svg_d(ops, tx, ty, k)
    dot = to_svg_d(circle_ops(128, bottom + 22, 22), tx, ty, k)
    bgr = f'<rect width="{side}" height="{side}" rx="{side * 0.22:.1f}" fill="{bg}"/>\n' if bg else ""
    return bgr + f'<path fill="{color}" d="{house}"/>\n<path fill="{dot_color or color}" d="{dot}"/>'


def build(name, ink, accent, out_dir):
    out_dir.mkdir(parents=True, exist_ok=True)
    S, pad = 0.16, 24
    asc_px, desc_px = 722 * S, 12 * S
    # wordmark
    body, w = wordmark(pad, pad + asc_px, S, ink, accent)
    (out_dir / f"sakanhub-wordmark-{name}.svg").write_text(
        svg(w + 2 * pad, asc_px + desc_px + 2 * pad, body, "SakanHub wordmark"), encoding="utf-8")
    # icon (transparent) and app-icon tile
    (out_dir / f"sakanhub-icon-{name}.svg").write_text(svg(256, 256, icon(256, accent), "SakanHub icon"),
                                                       encoding="utf-8")
    # arabic
    AS = S * 0.80
    ad, aw = text_d(ARABIC, ARABIC_VISUAL, pad, pad + 760 * AS, AS)
    (out_dir / f"sakanhub-arabic-{name}.svg").write_text(
        svg(aw + 2 * pad, 1100 * AS + 2 * pad, f'<path fill="{ink}" d="{ad}"/>', "سكن هب"), encoding="utf-8")
    # horizontal bilingual lockup
    base = pad + asc_px
    body, w = wordmark(pad, base, S, ink, accent)
    gap = 90 * S * 4
    ad, aw = text_d(ARABIC, ARABIC_VISUAL, pad + w + gap, base, S * 0.80)
    rx = pad + w + gap * 0.58
    rule = f'<rect fill="{ink}" x="{rx - 2.5:.2f}" y="{pad + 0.22 * asc_px:.2f}" width="5" height="{0.80 * asc_px:.2f}" rx="2.5"/>'
    (out_dir / f"sakanhub-horizontal-{name}.svg").write_text(
        svg(w + gap + aw + 2 * pad, asc_px + 2 * pad + 300 * S * 0.80, body + "\n" + rule + f'\n<path fill="{ink}" d="{ad}"/>',
            "SakanHub سكن هب horizontal lockup"), encoding="utf-8")
    # stacked lockup
    a_s = S * 0.72
    _, aw2 = text_d(ARABIC, ARABIC_VISUAL, 0, 0, a_s)
    tw = max(w, aw2) + 2 * pad
    body, _ = wordmark((tw - w) / 2, pad + asc_px, S, ink, accent)
    ad2, _ = text_d(ARABIC, ARABIC_VISUAL, (tw - aw2) / 2, pad + asc_px + 330 * S + 760 * a_s, a_s)
    th = pad + asc_px + 330 * S + 1050 * a_s + pad
    (out_dir / f"sakanhub-stacked-{name}.svg").write_text(
        svg(tw, th, body + f'\n<path fill="{ink}" d="{ad2}"/>', "SakanHub سكن هب stacked lockup"), encoding="utf-8")


CLAY, INK, CLAY_LIGHT, SAND, WHITE = "#C8502A", "#1D2433", "#F08A5D", "#F6F3EE", "#FFFFFF"

COLORWAYS = {
    # name: (ink, accent)  -- ink = letters, accent = house + resident
    "color": (INK, CLAY),             # primary: on white / sand
    "reversed": (WHITE, CLAY_LIGHT),  # on ink or other dark backgrounds
    "on-clay": (WHITE, WHITE),        # on a clay background
    "mono-clay": (CLAY, CLAY),        # one-colour print in clay
    "black": ("#000000", "#000000"),
    "white": (WHITE, WHITE),
}


def build_icons(out_dir):
    out_dir.mkdir(parents=True, exist_ok=True)
    w = lambda name, body: (out_dir / name).write_text(svg(256, 256, body, "SakanHub icon"), encoding="utf-8")
    w("sakanhub-icon-color.svg", icon(256, CLAY))
    w("sakanhub-icon-reversed.svg", icon(256, CLAY_LIGHT))
    w("sakanhub-icon-black.svg", icon(256, "#000000"))
    w("sakanhub-icon-white.svg", icon(256, WHITE))
    w("sakanhub-app-icon.svg", icon(256, WHITE, bg=CLAY, scale=0.78))
    w("sakanhub-app-icon-dark.svg", icon(256, CLAY_LIGHT, bg=INK, scale=0.78))


if __name__ == "__main__":
    for name, (ink, accent) in COLORWAYS.items():
        build(name, ink, accent, HERE / "masters")
    build_icons(HERE / "masters")
    print("built:", len(list((HERE / "masters").glob("*.svg"))), "files")
