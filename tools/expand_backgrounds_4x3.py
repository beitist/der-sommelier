#!/usr/bin/env python3
"""
Erweitert die Restaurant-Hintergruende und die Weltkarte von 1920x1072 (16:9)
auf 1920x1440 (4:3) per BFL FLUX.1 Expand [pro] (/v1/flux-pro-1.0-expand).

- +184 px oben, +184 px unten (Original liegt danach exakt bei x=0..1919, y=184..1255)
- Originalpixel werden nach dem Download wieder exakt ueber die Mitte gelegt
  (pixelidentisch), die Ausgabe wird ggf. auf 1920x1440 skaliert.
- Ausgabe: <ordner>/hintergrund_4x3.png bzw. map/weltkarte_4x3.png
  (Originale bleiben unveraendert).

Aufruf (immer mit venv):
  .venv/bin/python tools/expand_backgrounds_4x3.py steakhaus
  .venv/bin/python tools/expand_backgrounds_4x3.py all
  .venv/bin/python tools/expand_backgrounds_4x3.py imbiss --force --seed 42

API-Key: BFL_API_KEY aus .env im Projekt-Root (wird nie ausgegeben).
"""
import argparse
import base64
import io
import os
import sys
import time
from pathlib import Path

import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "outputs" / "der-sommelier" / "assets"
# Primaer: FLUX Outpainting (flux-tools/outpainting-v1). Fallback: FLUX.1 Expand [pro]
# (/v1/flux-pro-1.0-expand lieferte im Okt. 2026 durchgehend HTTP 500).
ENDPOINT_OUTPAINT = "https://api.bfl.ai/v1/flux-tools/outpainting-v1"
ENDPOINT_EXPAND = "https://api.bfl.ai/v1/flux-pro-1.0-expand"

TARGET_W, TARGET_H = 1920, 1440
PAD_TOP, PAD_BOTTOM = 184, 184

STYLE = ("16-bit pixel art, crisp hard-edged pixels, same limited color palette, "
         "same lighting and perspective as the original image, seamless continuation, "
         "no text, no letters, no watermark, no signature, no logo, no people, no characters.")

JOBS = {
    "steakhaus": {
        "src": ASSETS / "steakhaus" / "hintergrund.png",
        "dst": ASSETS / "steakhaus" / "hintergrund_4x3.png",
        "prompt": ("Dark rustic steakhouse interior. Top: continue the dark wooden ceiling "
                   "with heavy wooden beams, the black cords of the hanging pendant lamps "
                   "continue upward, wood-plank wall on the left and red brick wall on the "
                   "right continue up, chimney pipe area dark. Bottom: continue the dark "
                   "wooden bar counter front panels and worn wooden plank floor. "),
    },
    "imbiss": {
        "src": ASSETS / "imbiss" / "hintergrund.png",
        "dst": ASSETS / "imbiss" / "hintergrund_4x3.png",
        "prompt": ("Small cheap Greek snack bar (Imbiss) interior, bright daylight. Top: continue the plain white suspended ceiling panels with flat fluorescent ceiling lights, top of the stained beige wall, top of the plain glass door frame (no signs above the door) and the kitchen exhaust hood on the left. Bottom: continue the front of the simple dark brown wooden serving counter and its shadow. "),
    },
    "gutbuergerlich": {
        "src": ASSETS / "gutbuergerlich" / "hintergrund.png",
        "dst": ASSETS / "gutbuergerlich" / "hintergrund_4x3.png",
        "prompt": ("Cozy traditional Bavarian wooden tavern (Gasthaus) interior, warm lamp light. Top: continue the dark wooden plank ceiling with heavy wooden beams, cords of the hanging lamps go up into the ceiling, top of the wood-paneled walls and wooden cabinet. Bottom: continue the rustic wooden table legs, wooden chairs and worn wooden plank floor. "),
    },
    "gehoben": {
        "src": ASSETS / "gehoben" / "hintergrund.png",
        "dst": ASSETS / "gehoben" / "hintergrund_4x3.png",
        "prompt": ("Elegant upscale classic restaurant interior, warm candle and chandelier light. Top: continue the ornate cream and gold stucco ceiling with decorative gold moldings, the brass chandelier chain going up to a gold ceiling rosette, tops of the dark blue velvet curtains. Bottom: continue the tables with white tablecloths, red velvet dining chairs and glossy dark wooden parquet floor. "),
    },
    "sterne": {
        "src": ASSETS / "sterne" / "hintergrund.png",
        "dst": ASSETS / "sterne" / "hintergrund_4x3.png",
        "prompt": ("Modern minimalist Michelin-star fine dining restaurant, dark and luxurious. Top: continue the black starry ceiling with tiny twinkling star lights and small recessed spotlights, dark black walls. Bottom: continue the front of the polished black and steel chef pass counter with thin gold trim. "),
    },
    "weltkarte": {
        "src": ASSETS / "map" / "weltkarte.png",
        "dst": ASSETS / "map" / "weltkarte_4x3.png",
        "prompt": ("Old parchment world map lying on a dark surface, framed with dark vignette. Top and bottom: continue the dark almost black blurred background around the torn parchment edges, same dark vignette, nothing else. "),
    },
}


def load_api_key() -> str:
    env = ROOT / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            line = line.strip()
            if line.startswith("BFL_API_KEY="):
                val = line.split("=", 1)[1]
                val = val.split(" #", 1)[0].split("\t#", 1)[0]  # Inline-Kommentar entfernen
                return val.strip().strip('"').strip("'")
    key = os.environ.get("BFL_API_KEY", "")
    if not key:
        sys.exit("BFL_API_KEY fehlt (.env im Projekt-Root).")
    return key


def call_api(key: str, img: Image.Image, prompt: str, seed=None, engine="outpaint") -> Image.Image:
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode()
    if engine == "outpaint":
        endpoint = ENDPOINT_OUTPAINT
        payload = {
            "input_image": b64,
            "width": img.size[0],
            "height": img.size[1] + PAD_TOP + PAD_BOTTOM,
            "reference_offset_x": 0,
            "reference_offset_y": PAD_TOP,
            "prompt": prompt,
            "mode": "high",
            "output_format": "png",
            "safety_tolerance": 2,
        }
    else:
        endpoint = ENDPOINT_EXPAND
        payload = _expand_payload(b64, prompt, seed)
    headers = {"accept": "application/json", "Content-Type": "application/json", "x-key": key}
    r = requests.post(endpoint, headers=headers, json=payload, timeout=120)
    return _poll(key, r)


def _expand_payload(b64, prompt, seed):
    payload = {
        "image": b64,
        "top": PAD_TOP,
        "bottom": PAD_BOTTOM,
        "left": 0,
        "right": 0,
        "prompt": prompt,
        "steps": 50,
        "guidance": 60,
        "output_format": "png",
        "safety_tolerance": 2,
        "prompt_upsampling": False,
    }
    if seed is not None:
        payload["seed"] = seed
    return payload


def _poll(key, r) -> Image.Image:
    if r.status_code != 200:
        raise RuntimeError(f"Submit fehlgeschlagen: HTTP {r.status_code}: {r.text[:500]}")
    meta = r.json()
    info = {k: meta.get(k) for k in ("cost", "input_mp", "output_mp")}
    print(f"   Task {meta.get('id')}  {info}")
    poll_url = meta["polling_url"]
    for _ in range(240):
        time.sleep(3)
        p = requests.get(poll_url, headers={"accept": "application/json", "x-key": key}, timeout=60)
        p.raise_for_status()
        d = p.json()
        st = d.get("status")
        if st == "Ready":
            url = d["result"]["sample"]
            data = requests.get(url, timeout=120)
            data.raise_for_status()
            return Image.open(io.BytesIO(data.content)).convert("RGB")
        if st in ("Error", "Failed", "Request Moderated", "Content Moderated", "Task not found"):
            raise RuntimeError(f"Status {st}: {d}")
    raise TimeoutError("Polling-Timeout")


def compose(orig: Image.Image, gen: Image.Image) -> Image.Image:
    """Bringt das Ergebnis auf 1920x1440 und legt das Original pixelgenau in die Mitte."""
    w, h = orig.size
    exp_w, exp_h = w, h + PAD_TOP + PAD_BOTTOM
    if gen.size != (exp_w, exp_h):
        print(f"   Hinweis: API-Groesse {gen.size}, erwartet {(exp_w, exp_h)} -> skaliert")
        gen = gen.resize((exp_w, exp_h), Image.LANCZOS)
    if (exp_w, exp_h) != (TARGET_W, TARGET_H):
        gen = gen.resize((TARGET_W, TARGET_H), Image.LANCZOS)
    out = gen.copy()
    out.paste(orig, (0, PAD_TOP))
    # Seam-Diagnose: mittlere Abweichung zwischen API-Ergebnis und Original im Kernbereich
    core = gen.crop((0, PAD_TOP, w, PAD_TOP + h))
    diff = sum(abs(a - b) for a, b in zip(core.tobytes()[::97], orig.tobytes()[::97]))
    n = len(orig.tobytes()[::97])
    print(f"   mittl. Abweichung API-Kern vs. Original: {diff / n:.2f} (0-255)")
    return out


def verify(orig: Image.Image, out: Image.Image) -> bool:
    w, h = orig.size
    ok = out.size == (TARGET_W, TARGET_H) and \
        out.crop((0, PAD_TOP, w, PAD_TOP + h)).tobytes() == orig.tobytes()
    print(f"   Verifikation Original-Region pixelidentisch: {ok}")
    return ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("names", nargs="+", help="Job-Namen oder 'all'")
    ap.add_argument("--force", action="store_true", help="vorhandene _4x3 Dateien ueberschreiben")
    ap.add_argument("--seed", type=int, default=None)
    ap.add_argument("--engine", choices=["outpaint", "expand"], default="outpaint")
    ap.add_argument("--raw-dir", default=None, help="optional: rohe API-Ergebnisse hier speichern")
    args = ap.parse_args()
    names = list(JOBS) if args.names == ["all"] else args.names
    key = load_api_key()
    for name in names:
        job = JOBS[name]
        if job["dst"].exists() and not args.force:
            print(f"[{name}] existiert bereits, uebersprungen (--force)")
            continue
        print(f"[{name}] {job['src'].relative_to(ROOT)}")
        orig = Image.open(job["src"]).convert("RGB")
        if orig.size[0] + 0 != TARGET_W or orig.size[1] + PAD_TOP + PAD_BOTTOM != TARGET_H:
            sys.exit(f"Unerwartete Groesse {orig.size}")
        gen = call_api(key, orig, job["prompt"] + STYLE, seed=args.seed, engine=args.engine)
        if args.raw_dir:
            Path(args.raw_dir).mkdir(parents=True, exist_ok=True)
            gen.save(Path(args.raw_dir) / f"{name}_raw.png")
        out = compose(orig, gen)
        verify(orig, out)
        out.save(job["dst"], optimize=True)
        print(f"   -> {job['dst'].relative_to(ROOT)}")


if __name__ == "__main__":
    main()
