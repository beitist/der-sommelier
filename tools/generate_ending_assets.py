#!/usr/bin/env python3
"""
Erzeugt die Pixel-Art-Ebenen fuer die Parallax-Abspann-Sequenz ("Ending")
per BFL FLUX.2 [pro] (/v1/flux-2-pro, Text-to-Image mit Referenzbildern).

Ausgabe: outputs/der-sommelier/assets/ending/
  sky.png                 3840x1440  opak, horizontal kachelbar
  skyline.png             3840x640   transparent, horizontal kachelbar
  facade_<level>.png      1300x1000  transparent (imbiss, steakhaus, gutbuergerlich, gehoben, sterne)
  street.png              1920x280   transparent, horizontal kachelbar
  sommelier_walk1/2.png   420x720    transparent, Fuesse an der Unterkante

Transparenz: FLUX liefert kein Alpha -> Generierung auf flachem Magenta (#FF00FF),
danach Chroma-Key + Despill mit numpy/scipy.
Kachelbarkeit: Bild um W/2 verschieben, Nahtzone in der Mitte magenta/leer machen,
per FLUX.2-Edit fuellen lassen und NUR die Nahtzone zurueckkopieren
(Raender bleiben Originalpixel -> garantiert nahtlos). Beim Himmel reicht ein Crossfade.

Aufruf (immer mit venv):
  .venv/bin/python tools/generate_ending_assets.py sky facade_steakhaus
  .venv/bin/python tools/generate_ending_assets.py all
  .venv/bin/python tools/generate_ending_assets.py sky --post-only    # nur Nachbearbeitung aus Rohbild
  Optionen: --seed N, --raw-dir DIR (Rohbilder, Default: .cache/ending_raw)

API-Key: BFL_API_KEY aus .env im Projekt-Root (wird nie ausgegeben).
"""
import argparse
import base64
import io
import os
import sys
import time
from pathlib import Path

import numpy as np
import requests
from PIL import Image
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "outputs" / "der-sommelier" / "assets"
OUT = ASSETS / "ending"
ENDPOINT = "https://api.bfl.ai/v1/flux-2-pro"
KEY_RGB = (255, 0, 255)

STYLE = ("Detailed 16-bit era pixel art, crisp hard-edged pixels, rich warm colors, "
         "same art style, palette and pixel density as the reference image(s). "
         "Absolutely no text, no letters, no numbers, no words, no writing, no logos, "
         "no watermark, no signature. ")
CHROMA = ("The background is one perfectly flat, uniform, solid pure magenta color (#FF00FF) "
          "with no gradient, no texture, no shadow, no ground, no floor, no reflections. ")
NIGHT = "Night scene, deep blue moonlight, warm golden light glowing from windows and lamps. "

REF_STEAK = ASSETS / "steakhaus" / "hintergrund_4x3.png"
REF_GUT = ASSETS / "gutbuergerlich" / "hintergrund_4x3.png"

FACADE_W, FACADE_H = 1300, 1000
FACADES = {
    "imbiss": ("A small cheap Greek gyros snack bar street front at night: white and blue tiled facade, "
               "slightly shabby with a few cracked tiles, a big warmly glowing shop window; above the window "
               "a glowing neon sign that is purely a picture: a neon outline of a gyros pita wrap and a "
               "neon fries cone, drawn as simple shapes with absolutely no letters or writing on it; a small "
               "blue and white "
               "Greek flag on a pole, a narrow glass door, a striped blue-white awning, a vertical rotating "
               "gyros spit visible through the window. Single-storey building with flat roof."),
    "steakhaus": ("A rustic western-style steakhouse street front: dark weathered wooden planks and "
                  "red brick, a heavy double wooden saloon-style entrance door, a bleached bull skull "
                  "with long horns mounted above the door, two hanging iron lanterns with warm flames, "
                  "small windows with warm orange light, a wooden porch roof with posts, a barrel next to "
                  "the door. Two-storey building."),
    "gutbuergerlich": ("A traditional Bavarian half-timbered Gasthaus street front: white plaster with dark "
                       "brown timber framing, small wooden windows with warm light and red geranium flower "
                       "boxes, a wooden entrance door with a round arch, an ornate wrought-iron hanging sign "
                       "showing only a beer mug and pretzel symbol (no text), a steep tiled roof with a dormer, "
                       "a leafy linden tree standing on the left side of the house. Two-storey building."),
    "gehoben": ("An elegant classic French bistro restaurant street front: cream stone facade with ornate "
                "moldings, a deep burgundy fabric awning, large arched windows glowing warm with "
                "chandelier light, wine bottles displayed in the window, a dark green glossy double door "
                "with brass handles, two black wrought-iron gas street lamps glowing beside the door, small "
                "potted topiary trees, wrought-iron balcony on the upper floor. Two-storey building."),
    "sterne": ("A modern luxury Michelin-star fine dining restaurant street front: sleek black polished "
               "stone and floor-to-ceiling glass, warm golden interior light visible through the glass "
               "(elegant tables with white tablecloths), a single large golden star emblem above the "
               "minimalist entrance, thin gold trim lines, a few uplights at the base, a red carpet strip "
               "at the door, small cube planters with trimmed shrubs. Modern flat-roof building."),
}
# Zeile, ab der ein vom Modell trotzdem gemalter Gehweg-/Strassenstreifen abgeschnitten wird
FACADE_PREFIX = {"gutbuergerlich": {"repaint_pink": (60, 100, 500, 830)}}
FACADE_KEY = {"gutbuergerlich": {"crop_bottom": 830},
              "imbiss": {"crop_bottom": 946},
              "sterne": {"shade_from": 0.55, "shade_near": 400},
              "gehoben": {"glow": True}}
FACADE_REFS = {
    "imbiss": [ASSETS / "imbiss" / "hintergrund_4x3.png", REF_STEAK],
    "steakhaus": [ASSETS / "steakhaus" / "hintergrund_4x3.png", REF_GUT],
    "gutbuergerlich": [ASSETS / "gutbuergerlich" / "hintergrund_4x3.png", REF_STEAK],
    "gehoben": [ASSETS / "gehoben" / "hintergrund_4x3.png", REF_STEAK],
    "sterne": [ASSETS / "sterne" / "hintergrund_4x3.png", REF_STEAK],
}

SOMM_W, SOMM_H = 420, 720
SOMMELIER = ("Full-body side view (profile) of a young friendly sommelier walking to the RIGHT, "
             "whole figure visible from head to shoes, standing upright, slim, short brown hair. "
             "Wears a crisp white long-sleeved shirt, a black waistcoat vest, a black bow tie, a long dark "
             "brown bistro apron down to the knees, black trousers and black shoes, a small shiny silver "
             "tastevin cup hanging on a thin silver chain around the neck. Holds a dark red wine bottle "
             "in the left hand by the neck. Video game character sprite, clean dark outline. ")


# ----------------------------------------------------------------------------- API

def load_api_key() -> str:
    env = ROOT / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            line = line.strip()
            if line.startswith("BFL_API_KEY="):
                val = line.split("=", 1)[1]
                val = val.split(" #", 1)[0].split("\t#", 1)[0]
                return val.strip().strip('"').strip("'")
    key = os.environ.get("BFL_API_KEY", "")
    if not key:
        sys.exit("BFL_API_KEY fehlt (.env im Projekt-Root).")
    return key


def img_b64(img: Image.Image, max_side=1024, fmt="JPEG") -> str:
    img = img.convert("RGB")
    s = max_side / max(img.size)
    if s < 1:
        img = img.resize((round(img.size[0] * s), round(img.size[1] * s)), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format=fmt, quality=92) if fmt == "JPEG" else img.save(buf, format=fmt)
    return base64.b64encode(buf.getvalue()).decode()


CALLS = {"n": 0, "cost": 0.0}


def generate(key, prompt, w, h, refs=(), seed=None) -> Image.Image:
    """refs: Liste von PIL-Images oder (PIL-Image, max_side, fmt)."""
    payload = {"prompt": prompt, "width": w, "height": h, "output_format": "png",
               "safety_tolerance": 2}
    if seed is not None:
        payload["seed"] = seed
    for i, ref in enumerate(refs):
        if isinstance(ref, tuple):
            b64 = img_b64(*ref)
        else:
            b64 = img_b64(ref)
        payload["input_image" if i == 0 else f"input_image_{i + 1}"] = b64
    headers = {"accept": "application/json", "Content-Type": "application/json", "x-key": key}
    r = requests.post(ENDPOINT, headers=headers, json=payload, timeout=180)
    if r.status_code != 200:
        raise RuntimeError(f"Submit fehlgeschlagen: HTTP {r.status_code}: {r.text[:500]}")
    meta = r.json()
    CALLS["n"] += 1
    try:
        CALLS["cost"] += float(meta.get("cost") or 0)
    except (TypeError, ValueError):
        pass
    print(f"   Task {meta.get('id')}  cost={meta.get('cost')} in_mp={meta.get('input_mp')} "
          f"out_mp={meta.get('output_mp')}")
    for _ in range(300):
        time.sleep(3)
        p = requests.get(meta["polling_url"], headers={"accept": "application/json", "x-key": key},
                         timeout=60)
        p.raise_for_status()
        d = p.json()
        st = d.get("status")
        if st == "Ready":
            data = requests.get(d["result"]["sample"], timeout=120)
            data.raise_for_status()
            return Image.open(io.BytesIO(data.content)).convert("RGB")
        if st in ("Error", "Failed", "Request Moderated", "Content Moderated", "Task not found"):
            raise RuntimeError(f"Status {st}: {d}")
    raise TimeoutError("Polling-Timeout")


# ----------------------------------------------------------------------------- Bildverarbeitung

def repaint_pink(img: Image.Image, box) -> Image.Image:
    """Ersetzt rosa Farbstiche (Key-Reflexe, z.B. 'Bluetenpunkte' im Baum) in box=(x0,y0,x1,y1)
    durch die Farbe des naechsten nicht-rosa Pixels."""
    a = np.asarray(img.convert("RGB")).astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    pink = (r > g + 45) & (b > g + 15) & (r > 110)
    m = np.zeros(pink.shape, bool)
    x0, y0, x1, y1 = box
    m[y0:y1, x0:x1] = True
    pink &= m
    # Key-Hintergrund selbst nicht anfassen (wird spaeter ausgestanzt)
    rim = np.median(a[0], axis=0)
    pink &= np.sqrt(((a - rim) ** 2).sum(axis=2)) > 45
    pink = ndimage.binary_dilation(pink, iterations=1) & m & (np.sqrt(((a - rim) ** 2).sum(axis=2)) > 45)
    if pink.any():
        _, (iy, ix) = ndimage.distance_transform_edt(pink, return_indices=True)
        a[pink] = a[iy[pink], ix[pink]]
    return Image.fromarray(a.clip(0, 255).astype(np.uint8))


def chroma_key(img: Image.Image, hard=80, soft=150, despill_px=3, shade_from=0.85, crop_bottom=None,
               glow=False, shade_near=30) -> Image.Image:
    """Magenta-Key. hard: Distanz unter der voll transparent, soft: ab der voll opak."""
    a = np.asarray(img.convert("RGB")).astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    # Key-Farbe adaptiv aus dem Bildrand (FLUX liefert eher (250,47,172) statt #FF00FF)
    rim = np.concatenate([a[0], a[: a.shape[0] // 2, 0], a[: a.shape[0] // 2, -1]])
    rim = rim[(np.minimum(rim[:, 0], rim[:, 2]) - rim[:, 1]) > 25]
    kc = np.median(rim, axis=0) if len(rim) else np.array(KEY_RGB, np.float32)
    dist = np.sqrt(((a - kc) ** 2).sum(axis=2))
    mag = np.minimum(r, b) - g
    is_bg = (dist < hard) | ((mag > 120) & (np.abs(r - b) < 90))
    # Nur mit dem Rand verbundene Hintergrundflaechen + groessere Innenloecher entfernen
    lab, n = ndimage.label(is_bg)
    keep = np.zeros(n + 1, bool)
    border = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    keep[border] = True
    sizes = ndimage.sum(np.ones_like(lab), lab, index=np.arange(n + 1))
    keep[0] = False
    bg = keep[lab]
    # Innenloecher (Fenstersprossen, Baumkrone ...): nur sehr nah an der Key-Farbe
    hsv = np.asarray(img.convert("RGB").convert("HSV")).astype(np.float32)
    kh = np.asarray(Image.fromarray(kc.astype(np.uint8)[None, None]).convert("HSV"))[0, 0, 0]
    dh = np.abs(((hsv[..., 0] - kh) + 128) % 256 - 128)
    hole = (((dist < 45) | ((dist < 85) & (dh < 12) & (hsv[..., 1] > 110)))) & ~bg
    hl, hn = ndimage.label(hole)
    hs = ndimage.sum(np.ones_like(hl), hl, index=np.arange(hn + 1))
    bg |= (hs > 3)[hl] & hole
    # abgedunkelte Key-Toene (Schlagschatten auf dem Key-Hintergrund): gleicher Farbton,
    # hohe Saettigung, mit bereits erkanntem Hintergrund verbunden
    shade = (dh < 13) & (hsv[..., 1] > 150) & (g < 60)
    # nur im unteren Bildbereich (Bodenschatten) und nahe am erkannten Hintergrund
    shade[: int(shade.shape[0] * shade_from)] = False
    shade &= ndimage.binary_dilation(bg, iterations=shade_near)
    lab2, n2 = ndimage.label(shade | bg)
    touch = np.unique(lab2[bg])
    keep2 = np.zeros(n2 + 1, bool)
    keep2[touch] = True
    keep2[0] = False
    bg = bg | (keep2[lab2] & shade)
    if glow:
        # helle Lichthoefe (Laternen-Glow auf dem Key-Hintergrund)
        gl = (dh < 16) & (hsv[..., 1] > 60) & (hsv[..., 2] > 150)
        lab3, n3 = ndimage.label(gl | bg)
        keep3 = np.zeros(n3 + 1, bool)
        keep3[np.unique(lab3[bg])] = True
        keep3[0] = False
        bg = bg | (keep3[lab3] & gl)
    if crop_bottom:
        bg[crop_bottom:] = True
    alpha = np.where(bg, 0.0, 1.0)
    # weicher Uebergang fuer Kantenpixel, die noch stark magenta sind
    edge = ndimage.binary_dilation(bg, iterations=despill_px) & ~bg
    t = np.clip((dist - hard) / (soft - hard), 0, 1)
    alpha = np.where(edge, np.minimum(alpha, np.maximum(t, 0.0)), alpha)
    alpha[edge & (t < 0.35)] = 0.0
    # Despill an Kanten: verunreinigte Randpixel bekommen die Farbe des naechsten
    # "sauberen" Motivpixels (Color-Bleed), Rest-Magenta-Anteil wird abgezogen
    near = ndimage.binary_dilation(bg, iterations=despill_px) & ~bg
    tainted = near & ((dist < 170) | ((dh < 16) & (hsv[..., 1] > 70)))
    core = ~bg & ~tainted
    rgb = a.copy()
    if core.any() and tainted.any():
        _, (iy, ix) = ndimage.distance_transform_edt(~core, return_indices=True)
        rgb[tainted] = a[iy[tainted], ix[tainted]]
    spill = np.clip(np.minimum(rgb[..., 0], rgb[..., 2]) - rgb[..., 1], 0, None)
    k = np.where(near & ~tainted, 0.85, 0.0)
    rgb[..., 0] -= spill * k
    rgb[..., 2] -= spill * k
    out = np.dstack([rgb, alpha * 255]).clip(0, 255).astype(np.uint8)
    # vollstaendig transparente Pixel: Farbe neutralisieren
    out[out[..., 3] == 0, :3] = 0
    return Image.fromarray(out, "RGBA")


def bbox_alpha(img: Image.Image, thresh=8):
    a = np.asarray(img)[..., 3]
    ys, xs = np.where(a > thresh)
    return xs.min(), ys.min(), xs.max() + 1, ys.max() + 1


def fit_bottom(img: Image.Image, W, H, scale=None, margin_top=0) -> tuple:
    """Motiv (bbox) skalieren und unten mittig auf WxH-Leinwand setzen. Gibt (img, scale)."""
    x0, y0, x1, y1 = bbox_alpha(img)
    sub = img.crop((x0, y0, x1, y1))
    if scale is None:
        scale = min(W / sub.size[0], (H - margin_top) / sub.size[1])
    nw, nh = max(1, round(sub.size[0] * scale)), max(1, round(sub.size[1] * scale))
    sub = sub.resize((nw, nh), Image.LANCZOS)
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    canvas.alpha_composite(sub, ((W - nw) // 2, H - nh))
    return canvas, scale


def crossfade_tile(img: Image.Image, band: int) -> Image.Image:
    """Macht ein Bild horizontal kachelbar (Breite schrumpft um band)."""
    a = np.asarray(img).astype(np.float32)
    w = a.shape[1]
    t = np.linspace(0, 1, band, endpoint=False)[None, :, None]
    left = a[:, :band] * t + a[:, w - band:] * (1 - t)
    out = np.concatenate([left, a[:, band:w - band]], axis=1)
    return Image.fromarray(out.clip(0, 255).astype(np.uint8), img.mode)


def grade_night(img: Image.Image) -> Image.Image:
    """Verschiebt den (zu warmen) Himmel Richtung Navy oben -> Violett unten; Mond/Sterne geschont."""
    a = np.asarray(img.convert("RGB")).astype(np.float32)
    h = a.shape[0]
    y = np.linspace(0, 1, h)[:, None]
    lum = a.mean(axis=2)
    protect = np.clip((lum - 90) / 80, 0, 1)  # helle Pixel (Mond, Sterne) unveraendert
    # Zielmultiplikatoren: oben navy (R runter, B rauf), unten violett
    mr = 0.55 + 0.35 * y
    mg = 0.75 + 0.05 * y
    mb = 1.55 - 0.25 * y
    g = np.dstack([a[..., 0] * mr, a[..., 1] * mg, a[..., 2] * mb + 6])
    w = (1 - protect)[..., None]
    out = a * (1 - w) + g * w
    return Image.fromarray(out.clip(0, 255).astype(np.uint8))


def grade_distant(img: Image.Image) -> Image.Image:
    """Ferne Silhouetten: dunkler, kuehler (Navy/Violett); helle Fenster bleiben warm."""
    a = np.asarray(img).astype(np.float32)
    rgb = a[..., :3]
    lum = rgb.mean(axis=2)
    warm = (rgb[..., 0] > 150) & (rgb[..., 1] > 110) & (rgb[..., 2] < 140)  # Fensterlicht
    graded = np.dstack([rgb[..., 0] * 0.55, rgb[..., 1] * 0.62, rgb[..., 2] * 0.85 + 8])
    graded = np.where(warm[..., None], rgb * 0.9, graded)
    a[..., :3] = graded
    return Image.fromarray(a.clip(0, 255).astype(np.uint8), "RGBA")


def seam_score(img: Image.Image) -> float:
    a = np.asarray(img.convert("RGB")).astype(np.float32)
    inner = np.abs(a[:, 1:] - a[:, :-1]).mean()
    seam = np.abs(a[:, 0] - a[:, -1]).mean()
    return seam, inner


def roll_and_heal(key, img_rgb: Image.Image, prompt, band, refs=(), seed=None, raw=None) -> Image.Image:
    """Verschiebt um W/2, macht die Mitte magenta, laesst FLUX.2 sie fuellen, kopiert nur die Mitte."""
    w, h = img_rgb.size
    a = np.roll(np.asarray(img_rgb), w // 2, axis=1).copy()
    rolled = Image.fromarray(a)
    holed = a.copy()
    c0, c1 = w // 2 - band // 2, w // 2 + band // 2
    holed[:, c0:c1] = KEY_RGB
    holed_img = Image.fromarray(holed)
    if raw:
        holed_img.save(raw.with_name(raw.stem + "_holed.png"))
    if raw and raw.exists():
        healed = Image.open(raw).convert("RGB")
        print(f"   Heal-Rohbild wiederverwendet: {raw.name}")
    else:
        healed = generate(key, prompt, w, h, refs=[(holed_img, max(w, h), "PNG"), *refs], seed=seed)
        if raw:
            healed.save(raw)
    if healed.size != (w, h):
        healed = healed.resize((w, h), Image.LANCZOS)
    # zeilenweise Farbangleich: Abweichung Heal vs. Original direkt links/rechts der Nahtzone
    ha = np.asarray(healed).astype(np.float32)
    ra = np.asarray(rolled).astype(np.float32)
    dl = (ra[:, c0 - 40:c0 - 16] - ha[:, c0 - 40:c0 - 16]).mean(axis=1)
    dr = (ra[:, c1 + 16:c1 + 40] - ha[:, c1 + 16:c1 + 40]).mean(axis=1)
    dl = ndimage.uniform_filter1d(dl, 9, axis=0)
    dr = ndimage.uniform_filter1d(dr, 9, axis=0)
    xs = np.clip((np.arange(w) - (c0 - 16)) / (c1 - c0 + 32), 0, 1)[None, :, None]
    ha = ha + dl[:, None, :] * (1 - xs) + dr[:, None, :] * xs
    healed = Image.fromarray(ha.clip(0, 255).astype(np.uint8))
    # Nahtzone mit weicher Kante (16px) zurueckkopieren
    m = np.zeros((h, w), np.float32)
    m[:, c0 - 16:c1 + 16] = 1.0
    ramp = np.linspace(0, 1, 32)
    m[:, c0 - 16:c0 + 16] = ramp
    m[:, c1 - 16:c1 + 16] = ramp[::-1]
    m = m[..., None]
    out = np.asarray(rolled).astype(np.float32) * (1 - m) + np.asarray(healed).astype(np.float32) * m
    return Image.fromarray(out.clip(0, 255).astype(np.uint8))


def preview_on_navy(img: Image.Image, path: Path, tile=False):
    bg = Image.new("RGBA", (img.size[0] * (2 if tile else 1), img.size[1]), (16, 20, 48, 255))
    bg.alpha_composite(img, (0, 0))
    if tile:
        bg.alpha_composite(img, (img.size[0], 0))
    bg.convert("RGB").save(path)


# ----------------------------------------------------------------------------- Jobs

def get_raw(args, name, fn):
    p = Path(args.raw_dir) / f"{name}_raw.png"
    if p.exists() and (args.post_only or not args.force):
        print(f"   Rohbild wiederverwendet: {p.name}")
        return Image.open(p).convert("RGB")
    if args.post_only:
        sys.exit(f"Kein Rohbild {p}")
    img = fn()
    img.save(p)
    return img


def job_sky(key, args):
    prompt = (STYLE + "A wide panoramic pixel art night sky only, no ground, no buildings, no trees: smooth "
              "vertical gradient from deep dark navy blue at the top to dusky violet purple near the bottom, "
              "hundreds of small twinkling pixel stars of different sizes, a faint milky way band, a few "
              "thin wispy dark violet clouds, and one large glowing pale yellow full moon with craters in "
              "the left third of the image, softly glowing halo. Calm, magical, celebratory mood.")
    raw = get_raw(args, "sky", lambda: generate(key, prompt, 2560, 960,
                                                refs=[Image.open(REF_GUT)], seed=args.seed))
    tiled = grade_night(crossfade_tile(raw, 320))  # 2240 breit
    out = tiled.resize((3840, 1440), Image.LANCZOS)
    s, i = seam_score(out)
    print(f"   Naht: {s:.2f} vs. Nachbarpixel {i:.2f}")
    out.save(OUT / "sky.png", optimize=True)
    preview_on_navy(out.convert("RGBA"), Path(args.raw_dir) / "sky_tilepreview.png", tile=True)


def job_skyline(key, args):
    prompt = (STYLE + CHROMA + "A very wide distant city skyline panorama at night as dark silhouettes, "
              "side view, flat 2D parallax background layer: dark blue and deep purple silhouettes of old "
              "European town houses with gabled roofs, chimneys, one tall gothic church tower with a pointed "
              "spire, a few domes, scattered tiny warm yellow lit windows, and low rolling hills with rows "
              "of vineyards in dark purple between the houses. All silhouettes stand on the bottom edge; "
              "the bottom quarter of the image is a solid dark navy band (ground). Above the silhouettes "
              "only the flat magenta background.")
    raw = get_raw(args, "skyline", lambda: generate(key, prompt, 3072, 512,
                                                    refs=[Image.open(REF_STEAK)], seed=args.seed))
    heal_prompt = (STYLE + "Image 1 is a wide skyline silhouette strip on a flat magenta background with "
                   "a solid magenta vertical gap in the middle. Fill ONLY that gap: seamlessly continue the "
                   "dark blue and purple town silhouettes, roofs and the dark navy ground band from the left "
                   "part into the right part so it looks like one continuous skyline. Keep everything else "
                   "exactly identical, same position, same flat magenta background above.")
    healed = roll_and_heal(key, raw, heal_prompt, band=384, seed=args.seed,
                           raw=Path(args.raw_dir) / "skyline_heal_raw.png")
    # Bodenstreifen (unten) zeilenweise vereinheitlichen -> keine sichtbare Heal-Kante
    a = np.asarray(healed).copy()
    gy = int(a.shape[0] * 382 / 512)
    a[gy:] = np.median(a[gy:], axis=1, keepdims=True).astype(np.uint8)
    healed = Image.fromarray(a)
    healed.save(Path(args.raw_dir) / "skyline_healed.png")
    rgba = grade_distant(chroma_key(healed))
    out = rgba.resize((3840, 640), Image.LANCZOS)
    out.save(OUT / "skyline.png", optimize=True)
    preview_on_navy(out, Path(args.raw_dir) / "skyline_preview.png", tile=True)


def job_street(key, args):
    prompt = (STYLE + NIGHT + CHROMA + "A horizontal ground strip for a side-scrolling game, European "
              "old-town street at night, seen from the front with a slightly elevated camera: the upper "
              "part is the top surface of a sidewalk paved with small rounded grey-brown cobblestones "
              "in slight perspective, warmly lit by street lamps; below it the front face of a grey granite "
              "curb stone with a thin highlight on its top edge; at the very bottom a strip of dark "
              "blue-grey asphalt road. Uniform, evenly repeating pattern across the whole width, no objects, "
              "no people, no lamps, no cars, no puddles. Above the sidewalk only the flat magenta background.")
    raw = get_raw(args, "street", lambda: generate(key, prompt, 2048, 304,
                                                   refs=[Image.open(REF_STEAK)], seed=args.seed))
    heal_prompt = (STYLE + "Image 1 is a horizontal cobblestone sidewalk strip with curb and asphalt on a "
                   "flat magenta background, with a solid magenta vertical gap in the middle. Fill ONLY that "
                   "gap by seamlessly continuing the cobblestones, curb and asphalt rows from left to right "
                   "at exactly the same heights. Keep everything else identical, magenta above.")
    healed = roll_and_heal(key, raw, heal_prompt, band=320, seed=args.seed,
                           raw=Path(args.raw_dir) / "street_heal_raw.png")
    healed.save(Path(args.raw_dir) / "street_healed.png")
    rgba = chroma_key(healed)
    out = rgba.resize((1920, 285), Image.LANCZOS).crop((0, 5, 1920, 285))
    out.save(OUT / "street.png", optimize=True)
    preview_on_navy(out, Path(args.raw_dir) / "street_preview.png", tile=True)


def job_facade(key, args, name):
    prompt = (STYLE + NIGHT + CHROMA + "Straight-on frontal exterior view of a single detached building "
              "for a side-scrolling game background, the whole building fully visible and centered, "
              "standing on the very bottom edge of the image, with empty magenta space on the left, "
              "right and above it. The building stands directly on the bottom edge: NO sidewalk, NO street, NO "
              "ground strip, NO asphalt in front of it. " + FACADES[name] + " The reference images show the interior of this "
              "restaurant and the art style; match their colors and pixel art look.")
    refs = [Image.open(p) for p in FACADE_REFS[name]]
    raw = get_raw(args, f"facade_{name}", lambda: generate(key, prompt, 1312, 1008, refs=refs,
                                                           seed=args.seed))
    fix = FACADE_PREFIX.get(name, {})
    if "repaint_pink" in fix:
        raw = repaint_pink(raw, fix["repaint_pink"])
    rgba = chroma_key(raw, **FACADE_KEY.get(name, {}))
    x0, y0, x1, y1 = bbox_alpha(rgba)
    print(f"   Motiv-bbox im Rohbild: {(x0, y0, x1, y1)}")
    out, s = fit_bottom(rgba, FACADE_W, FACADE_H, margin_top=20)
    print(f"   Skalierung {s:.3f}")
    out.save(OUT / f"facade_{name}.png", optimize=True)
    preview_on_navy(out, Path(args.raw_dir) / f"facade_{name}_preview.png")


def darken_trousers(img: Image.Image) -> Image.Image:
    """Frame 2 bekam vom Modell graublaue Hosen -> auf das Schwarz von Frame 1 abdunkeln."""
    a = np.asarray(img.convert("RGB")).astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    m = (g > r + 12) & (b > r + 8) & (g < 235)
    m[: int(a.shape[0] * 0.45)] = False
    a[m] = a[m] * np.array([0.26, 0.25, 0.30], np.float32)
    return Image.fromarray(a.clip(0, 255).astype(np.uint8))


def job_sommelier(key, args):
    p1 = (STYLE + CHROMA + SOMMELIER + "Walk cycle frame 1: mid-stride, right leg forward, left leg back, "
          "arms swinging gently. Centered, feet touching the bottom of the image, generous empty magenta "
          "space around the figure. Reference: style of the game art.")
    raw1 = get_raw(args, "sommelier_walk1", lambda: generate(
        key, p1, 704, 1200, refs=[Image.open(ASSETS / "guests" / "stavros.png").convert("RGB"),
                                  Image.open(REF_GUT)], seed=args.seed))
    p2 = (STYLE + CHROMA + "Image 1 shows a pixel art sommelier character in walk cycle frame 1. Create the "
          "next walk cycle frame of EXACTLY the same character: keep the head, face, hair, upper body, "
          "white shirt, black vest, bow tie, apron length, arm positions, hand holding the wine bottle "
          "low in front, and the silver tastevin on the chain completely unchanged and at the same "
          "position and scale. ONLY the legs change: swap the legs - the leg that is in front in image 1 "
          "is now behind, and the leg that is behind is now in front, with the same normal walking "
          "stride width, both shoes touching the ground line at the same height as in image 1. Calm "
          "walking, not running, upright posture. No shadow on the ground. Same flat magenta background.")
    raw2 = get_raw(args, "sommelier_walk2", lambda: generate(
        key, p2, 704, 1200, refs=[(raw1, 1200, "PNG")], seed=args.seed))
    raw2 = darken_trousers(raw2)
    k1 = chroma_key(raw1, shade_from=0.8)
    k2 = chroma_key(raw2, shade_from=0.8)
    out1, s = fit_bottom(k1, SOMM_W, SOMM_H, margin_top=10)
    # gleiche Skalierung fuer Frame 2 (Konsistenz), nur falls zu gross nachregeln
    b = bbox_alpha(k2)
    s2 = min(s, SOMM_W / (b[2] - b[0]), SOMM_H / (b[3] - b[1]))
    out2, _ = fit_bottom(k2, SOMM_W, SOMM_H, scale=s2)
    # horizontale Ausrichtung: Schwerpunkt Kopf/Oberkoerper (obere 40 %) von Frame 2 auf Frame 1
    def top_cx(im):
        al = np.asarray(im)[..., 3].astype(np.float32)
        y0 = np.where(al.max(axis=1) > 8)[0][0]
        part = al[y0:y0 + int(SOMM_H * 0.4)]
        return (part.sum(axis=0) * np.arange(SOMM_W)).sum() / part.sum()
    dx = round(top_cx(out1) - top_cx(out2))
    if dx:
        shifted = Image.new("RGBA", out2.size, (0, 0, 0, 0))
        shifted.paste(out2, (dx, 0))
        out2 = shifted
    print(f"   Frame-2 Versatz dx={dx}")
    out1.save(OUT / "sommelier_walk1.png", optimize=True)
    out2.save(OUT / "sommelier_walk2.png", optimize=True)
    print(f"   Skalierung {s:.3f} / {s2:.3f}")
    both = Image.new("RGBA", (SOMM_W * 2, SOMM_H))
    both.alpha_composite(out1, (0, 0))
    both.alpha_composite(out2, (SOMM_W, 0))
    preview_on_navy(both, Path(args.raw_dir) / "sommelier_preview.png")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("names", nargs="+", help="sky skyline street sommelier facade_<name> | all")
    ap.add_argument("--seed", type=int, default=None)
    ap.add_argument("--raw-dir", default=str(ROOT / ".cache" / "ending_raw"))
    ap.add_argument("--force", action="store_true", help="Rohbild neu generieren")
    ap.add_argument("--post-only", action="store_true", help="nur Nachbearbeitung, keine API-Calls")
    args = ap.parse_args()
    Path(args.raw_dir).mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    names = args.names
    if names == ["all"]:
        names = ["sky", "skyline", "street", "sommelier"] + [f"facade_{n}" for n in FACADES]
    key = None if args.post_only else load_api_key()
    for n in names:
        print(f"[{n}]")
        if n.startswith("facade_"):
            job_facade(key, args, n[len("facade_"):])
        else:
            {"sky": job_sky, "skyline": job_skyline, "street": job_street,
             "sommelier": job_sommelier}[n](key, args)
    print(f"API-Calls: {CALLS['n']}, Kosten (laut API): {CALLS['cost']:.2f} Credits")


if __name__ == "__main__":
    main()
