#!/usr/bin/env python3
"""
Der Sommelier — Flaschenbild für einen neuen Wein per BFL FLUX.2 [pro] erzeugen,
im Stil der vorhandenen Flaschen (assets/wines/*.png, 480×640, deckend).

Aufruf:  .venv/bin/python tools/generate_wine_bottle.py <wein-id> "<Beschreibung der Flasche>" [ref1.png ref2.png]
Beispiel: .venv/bin/python tools/generate_wine_bottle.py weissherbst "tall slim German flute bottle ..."
API-Key: BFL_API_KEY aus .env (wird nie ausgegeben). Nutzt die Helfer aus generate_ending_assets.py.
"""
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_ending_assets import load_api_key, generate  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
WINES = ROOT / "outputs" / "der-sommelier" / "assets" / "wines"


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    wine_id, subject = sys.argv[1], sys.argv[2]
    ref_names = sys.argv[3:] or ["rose_provence.png", "spaetburgunder.png"]
    refs = [Image.open(WINES / n).convert("RGB") for n in ref_names]
    prompt = (
        "Single wine bottle, centered, upright, full bottle visible with a little margin, "
        "in exactly the same pixel-art style, lighting, dark background and framing as the reference bottle images. "
        f"{subject}. The label shows only simple illustrated motifs, NO letters, NO text, NO numbers."
    )
    img = generate(load_api_key(), prompt, 960, 1280, refs=refs)
    out = WINES / f"{wine_id}.png"
    img.convert("RGB").resize((480, 640), Image.LANCZOS).save(out, optimize=True)
    print(f"→ {out}")


if __name__ == "__main__":
    main()
