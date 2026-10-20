#!/usr/bin/env python3
"""
Der Sommelier — einheitliches Restaurant-Logo-Set, Wirtshausschilder und neue Fassaden
per BFL FLUX.2 [pro]. Nutzt die Helfer aus generate_ending_assets.py.

Ausgabe:
  assets/restaurants/<id>_logo.png   512x512 RGBA  (Medaillon im schmiedeeisernen Rahmen, kein Text)
  assets/ending/sign_<id>.png        480x480 RGBA  (Medaillon an Wandausleger, Wand links)
  assets/ending/facade_imbiss.png    1300x1000 RGBA
  assets/ending/facade_sterne.png    2400x800  RGBA
  assets/ending/facade_gutbuergerlich.png  -> nur das Haengeschild entfernt (Alpha, kein API-Call)

Aufruf (immer mit venv):
  .venv/bin/python tools/generate_logos_signs.py logo:gutbuergerlich logo:all sign:all
  .venv/bin/python tools/generate_logos_signs.py facade:imbiss facade:sterne gut_unsign
  Optionen: --force (Rohbild neu erzeugen), --seed N, --post-only
Rohbilder: .cache/logos_raw/  (werden wiederverwendet, falls vorhanden)
"""
import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_ending_assets import (load_api_key, generate, chroma_key, bbox_alpha,  # noqa: E402
                                    fit_bottom, preview_on_navy, STYLE, CHROMA, NIGHT, CALLS)

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "outputs" / "der-sommelier" / "assets"
END = ASSETS / "ending"
REST = ASSETS / "restaurants"
RAW = ROOT / ".cache" / "logos_raw"
IDS = ["imbiss", "steakhaus", "gutbuergerlich", "gehoben", "sterne"]

FRAME = ("A single round emblem medallion, centered, filling about 90 percent of the image: "
         "a SLIM hand-forged black wrought-iron ring frame (only about 6 percent of the diameter thick) "
         "with a few small curled iron scrolls on the outside at the top, bottom, left and right and "
         "subtle cool blue-grey highlights; just inside the iron ring a thin polished brass rim; the "
         "large inner disc is a solid deep midnight-navy blue field. Inside the disc one big, bold, simple, "
         "centered motif with a clean dark outline that fills most of the disc and stays clearly readable "
         "even when the emblem is shrunk to a tiny 48 pixel icon: ")
MOTIFS = {
    "imbiss": ("a vertical rotating Greek gyros meat spit (a tall cone of brown roasted meat with crispy "
               "edges on a vertical silver skewer with a small round base), and a small Greek-blue and "
               "white striped accent ribbon across the lower part of the disc"),
    "steakhaus": "a bleached white bull skull seen from the front with long curved ivory horns",
    "gutbuergerlich": ("a small round green linden tree in the background, in front of it a foaming golden "
                       "beer mug (Mass) with a white foam head and a brown baked pretzel above it — the "
                       "same beer mug and pretzel as on the Gasthaus hanging sign in the reference image"),
    "gehoben": "a dark purple grape cluster with a green vine leaf next to an elegant stemmed glass of red wine",
    "sterne": "one large shining five-pointed golden star with a soft golden glow",
}
SIGN_W = SIGN_H = 480
# Original mit Haengeschild (Stilvorlage); nach gut_unsign liegt es im Rohbild-Cache
FACADE_REF = RAW / "facade_gutbuergerlich_orig.png"


def raw_cached(args, name, fn):
    RAW.mkdir(parents=True, exist_ok=True)
    p = RAW / f"{name}_raw.png"
    if p.exists() and not args.force:
        print(f"   Rohbild wiederverwendet: {p.name}")
        return Image.open(p).convert("RGB")
    if args.post_only:
        sys.exit(f"Kein Rohbild {p}")
    img = fn()
    img.save(p)
    return img


def on_navy(rgba):
    bg = Image.new("RGBA", rgba.size, (16, 20, 48, 255))
    bg.alpha_composite(rgba)
    return bg.convert("RGB")


def fill_holes_alpha(rgba: Image.Image) -> Image.Image:
    """Medaillon innen voll deckend machen (Innenloecher im Alpha schliessen)."""
    a = np.asarray(rgba).copy()
    solid = ndimage.binary_fill_holes(a[..., 3] > 128)
    a[..., 3] = np.where(solid & (a[..., 3] < 255), 255, a[..., 3])
    return Image.fromarray(a, "RGBA")


def despill_edge(rgba: Image.Image, px=5) -> Image.Image:
    """Magenta-Reste am Aussenrand (nahe Transparenz) entsaettigen -> Eisengrau."""
    a = np.asarray(rgba).copy()
    f = a[..., :3].astype(np.int16)
    near = ndimage.binary_dilation(a[..., 3] < 128, iterations=px)
    pink = near & (f[..., 0] - f[..., 1] > 30) & (f[..., 2] - f[..., 1] > 30)
    gray = f[..., 1:2].repeat(3, axis=2) + np.array([4, 6, 14])
    a[..., :3][pink] = gray[pink].clip(0, 255).astype(np.uint8)
    return Image.fromarray(a, "RGBA")


def repaint_magenta(rgba: Image.Image) -> Image.Image:
    """Magenta-Saeume (z.B. Glow um den Stern) durch Farbe des naechsten Nicht-Magenta-Pixels ersetzen."""
    a = np.asarray(rgba).copy()
    f = a[..., :3].astype(np.int16)
    pink = (a[..., 3] > 0) & (f[..., 0] - f[..., 1] > 35) & (f[..., 2] - f[..., 1] > 25)
    pink = ndimage.binary_dilation(pink, iterations=1) & (a[..., 3] > 0)
    if pink.any():
        _, (iy, ix) = ndimage.distance_transform_edt(pink | (a[..., 3] == 0), return_indices=True)
        a[..., :3][pink] = a[..., :3][iy[pink], ix[pink]]
    return Image.fromarray(a, "RGBA")


REPAINT = {"sterne", "imbiss", "steakhaus", "gutbuergerlich"}  # nicht gehoben (violette Trauben)


def fit_square(rgba: Image.Image, size: int, margin: int) -> Image.Image:
    x0, y0, x1, y1 = bbox_alpha(rgba)
    sub = rgba.crop((x0, y0, x1, y1))
    s = (size - 2 * margin) / max(sub.size)
    sub = sub.resize((round(sub.size[0] * s), round(sub.size[1] * s)), Image.LANCZOS)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.alpha_composite(sub, ((size - sub.size[0]) // 2, (size - sub.size[1]) // 2))
    return out


# ----------------------------------------------------------------------------- Logos

def job_logo(key, args, lid, style_ref=None):
    refs = [Image.open(FACADE_REF).convert("RGBA")]
    refs = [on_navy(refs[0])]
    if style_ref is not None:
        refs.append(on_navy(style_ref))
    prompt = (STYLE + CHROMA + FRAME + MOTIFS[lid] + ". " +
              ("The iron frame style, colors and pixel art look must match the wrought-iron hanging sign "
               "on the Gasthaus in image 1" +
               (" and the iron frame must be exactly identical to the emblem in image 2 (same ring, same "
                "scrolls, same brass rim, same navy field), only the motif inside differs" if style_ref else "")
               + ". Flat front view, no perspective, no drop shadow, no chain, no bracket. "
                 "Absolutely no text or letters anywhere."))
    raw = raw_cached(args, f"logo_{lid}", lambda: generate(key, prompt, 1024, 1024, refs=refs, seed=args.seed))
    rgba = despill_edge(fill_holes_alpha(chroma_key(raw, shade_from=0.0, shade_near=6)))
    if lid in REPAINT:
        rgba = repaint_magenta(rgba)
    out = fit_square(rgba, 512, 10)
    out.save(REST / f"{lid}_logo.png", optimize=True)
    on_navy(out).save(RAW / f"logo_{lid}_preview.png")
    print(f"   -> {lid}_logo.png")


# ----------------------------------------------------------------------------- Schilder

def job_sign(key, args, lid):
    logo = Image.open(REST / f"{lid}_logo.png").convert("RGBA")
    gut = on_navy(Image.open(FACADE_REF).convert("RGBA"))
    prompt = (STYLE + CHROMA + "A traditional hand-forged black wrought-iron wall bracket sign, side view as "
              "it hangs from a building: at the far LEFT edge of the image a small vertical iron wall-mount "
              "plate (as if bolted to a wall that is just outside the left edge), from it a horizontal iron "
              "bracket arm with decorative curled scrolls extends to the RIGHT across the top of the image; "
              "from the arm two short iron chains or rings hang down and the round emblem medallion "
              "from image 1 hangs below the arm, centered under it. The medallion must be exactly identical "
              "to image 1 (same frame, same motif, same colors), seen flat from the front. The scrollwork "
              "style of the bracket matches the hanging sign on the Gasthaus in image 2. Nothing else, no "
              "wall, no building. Absolutely no text or letters.")
    raw = raw_cached(args, f"sign_{lid}", lambda: generate(key, prompt, 1024, 1024,
                                                           refs=[on_navy(logo), gut], seed=args.seed))
    rgba = despill_edge(chroma_key(raw, shade_from=0.0, shade_near=6))
    x0, y0, x1, y1 = bbox_alpha(rgba)
    sub = rgba.crop((x0, y0, x1, y1))
    s = (SIGN_W - 8) / max(sub.size)
    sub = sub.resize((round(sub.size[0] * s), round(sub.size[1] * s)), Image.LANCZOS)
    out = Image.new("RGBA", (SIGN_W, SIGN_H), (0, 0, 0, 0))
    out.alpha_composite(sub, (0, 4))  # Wandplatte buendig an x=0
    out.save(END / f"sign_{lid}.png", optimize=True)
    on_navy(out).save(RAW / f"sign_{lid}_preview.png")
    print(f"   -> sign_{lid}.png  mount={wall_mount(out)}")


def wall_mount(sign: Image.Image):
    """Mitte der Wandplatte: opake Pixel in den linken 6 Spalten."""
    a = np.asarray(sign)[..., 3]
    x0 = bbox_alpha(sign)[0]
    ys = np.where((a[:, x0:x0 + 6] > 128).any(axis=1))[0]
    return (int(x0), int((ys.min() + ys.max()) // 2)) if len(ys) else None


# ----------------------------------------------------------------------------- Fassaden

FACADE_TXT = {
    "imbiss": ("A tidy, cozy small Greek gyros snack bar kiosk, slightly worn but clean and well kept: "
               "smooth clean walls with NO cracks, NO rust, NO stains, NO rubbish, NO graffiti. It is a "
               "LOW SINGLE-STOREY building: ground floor only, NO upper floor, NO upper windows; the flat "
               "roof edge sits directly above the awning. White rendered walls with a Greek-blue base stripe, "
               "a blue and white striped fabric awning over a big warmly glowing shop window on the right "
               "through which a vertical rotating gyros meat spit and a counter are visible, a glass entrance "
               "door slightly left of the center, plain empty white wall areas left and right of the door, a "
               "small potted olive tree. No sign board, no house number, no plaque, no flag, no lettering, "
               "no logo, no neon sign. The building is about 1.2 times as wide as it is tall."),
    "sterne": ("A very wide, long, low modern luxury single-storey bungalow restaurant: flat roof with a thin "
               "cantilevered black roof slab, walls of polished black stone alternating with tall "
               "floor-to-ceiling glass panes, warm golden interior light showing elegant tables with white "
               "tablecloths, a minimalist glass entrance in the middle, slim uplights, low planters with "
               "trimmed shrubs and ornamental grasses along the front. No sign, no lettering, no big emblem; "
               "the building is more than three times as wide as it is tall and fills the width of the "
               "image."),
}
FACADE_GEN = {"imbiss": ((1312, 1008), (1300, 1000)), "sterne": ((2048, 640), (2400, 800))}
FACADE_REFS = {
    "imbiss": [END / "facade_steakhaus.png", ASSETS / "imbiss" / "hintergrund_4x3.png"],
    "sterne": [END / "facade_gehoben.png", ASSETS / "sterne" / "hintergrund_4x3.png"],
}


CLONE_FIX = {"imbiss": [(772, 852, 990, 1085, 950), (766, 802, 872, 928, 860), (772, 800, 980, 992, 950)]}


def job_facade(key, args, name):
    refs = [on_navy(Image.open(p).convert("RGBA")) if "facade" in p.name else Image.open(p)
            for p in FACADE_REFS[name]]
    prompt = (STYLE + NIGHT + CHROMA + "Straight-on frontal exterior view of a single detached building "
              "for a side-scrolling game background, the whole building fully visible and centered, standing "
              "on the very bottom edge of the image, with empty magenta space above it. NO sidewalk, NO "
              "street, NO ground strip in front of it. " + FACADE_TXT[name] + " Match the night lighting, "
              "pixel density and art style of the building in image 1; image 2 shows the restaurant interior "
              "for colors.")
    (gw, gh), (W, H) = FACADE_GEN[name]
    raw = raw_cached(args, f"facade_{name}", lambda: generate(key, prompt, gw, gh, refs=refs, seed=args.seed))
    kw = {"shade_from": 0.55, "shade_near": 400}  # Bodenschatten auf dem Key mit ausstanzen
    rgba = chroma_key(raw, **kw)
    if name == "sterne":
        rgba = repaint_magenta(rgba)  # rosa Saeume an den Ziergraesern
    out, s = fit_bottom(rgba, W, H, margin_top=20)
    if name in CLONE_FIX:  # Risse ueberstempeln (Zeile <- saubere Spalte); gilt nur fuer das aktuelle Rohbild
        a = np.asarray(out).copy()
        for (y0, y1, x0, x1, sx) in CLONE_FIX[name]:
            a[y0:y1, x0:x1] = a[y0:y1, sx:sx + 1]
        out = Image.fromarray(a, "RGBA")
    out.save(END / f"facade_{name}.png", optimize=True)
    preview_on_navy(out, RAW / f"facade_{name}_preview.png")
    print(f"   -> facade_{name}.png scale {s:.3f} bbox {bbox_alpha(out)}")


def gut_unsign(args):
    """Entfernt das Haengeschild der Gasthaus-Fassade. Es haengt komplett vor transparentem Hintergrund,
    daher reicht Alpha=0 rechts der Hauskante (zeilenweise Kante); kein Inpainting noetig."""
    src = RAW / "facade_gutbuergerlich_orig.png"
    RAW.mkdir(parents=True, exist_ok=True)
    if not src.exists():
        Image.open(END / "facade_gutbuergerlich.png").save(src)
    a = np.asarray(Image.open(src).convert("RGBA")).copy()
    edge = [(360, 386, 1119), (386, 495, 1106), (495, 515, 1123), (515, 548, 1121), (548, 625, 1106)]
    for y0, y1, x in edge:
        a[y0:y1, x:, 3] = 0
    # Restfransen: kleine opake Inseln rechts der Hauskante
    m = a[..., 3] > 0
    lab, n = ndimage.label(m)
    sizes = ndimage.sum(m, lab, index=np.arange(n + 1))
    small = (sizes < 400)[lab] & m
    small[:, :1090] = False
    a[small, 3] = 0
    out = Image.fromarray(a, "RGBA")
    out.save(END / "facade_gutbuergerlich.png", optimize=True)
    preview_on_navy(out, RAW / "facade_gutbuergerlich_preview.png")
    print(f"   -> facade_gutbuergerlich.png bbox {bbox_alpha(out)}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("jobs", nargs="+")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--post-only", action="store_true")
    ap.add_argument("--seed", type=int)
    ap.add_argument("--style-ref", default="gutbuergerlich", help="Logo-ID als Rahmen-Referenz")
    args = ap.parse_args()
    key = None if args.post_only else load_api_key()
    for job in args.jobs:
        kind, _, what = job.partition(":")
        ids = IDS if what == "all" else [what]
        for i in ids:
            print(f"== {kind} {i}")
            if kind == "logo":
                ref = None
                if i != args.style_ref and (REST / f"{args.style_ref}_logo.png").exists():
                    ref = Image.open(REST / f"{args.style_ref}_logo.png").convert("RGBA")
                job_logo(key, args, i, ref)
            elif kind == "sign":
                job_sign(key, args, i)
            elif kind == "facade":
                job_facade(key, args, i)
            elif kind == "gut_unsign":
                gut_unsign(args)
                break
    print(f"API-Calls: {CALLS['n']}  Kosten: {CALLS['cost']:.2f} Credits")


if __name__ == "__main__":
    main()
