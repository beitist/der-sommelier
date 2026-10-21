#!/usr/bin/env python3
"""
Der Sommelier — Akademie-Grafiken per BFL FLUX.2 [pro]:
  assets/academy/madame_duvin.png   (Figur, freigestellt, 1024×1024)
  assets/academy/hintergrund_4x3.png (Verkostungskeller, 1920×1440)

Aufruf: .venv/bin/python tools/generate_academy_assets.py [madame|keller|all]
API-Key: BFL_API_KEY aus .env (wird nie ausgegeben). Nutzt Helfer aus generate_ending_assets.py.
"""
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_ending_assets import load_api_key, generate, chroma_key  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "outputs" / "der-sommelier" / "assets"
OUT = ASSETS / "academy"
RAW = ROOT / ".cache" / "academy_raw"


def on_magenta(path):
    im = Image.open(path).convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 0, 255, 255))
    bg.alpha_composite(im)
    return bg.convert("RGB")


def madame(key):
    refs = [on_magenta(ASSETS / "chefs" / "chef_gehoben.png"), on_magenta(ASSETS / "chefs" / "chef_sterne.png")]
    prompt = (
        "Pixel art character portrait, exactly the same 16-bit pixel-art style, shading, outline and framing as the reference "
        "chef characters (waist-up, facing slightly to the right, standing behind an implied counter). "
        "Madame Céline Duvin, a French professional sommelière in her early sixties: silver-grey hair in a strict elegant bun, "
        "small reading glasses on the tip of her nose, sharp attentive eyes with a warm hint of a smile, upright posture. "
        "Black tailored suit jacket with a long black sommelier apron, a silver tastevin on a chain around her neck, "
        "holding a wine glass with red wine elegantly by the stem in one hand. "
        "Strict but kind teacher. Solid flat pure magenta background (#FF00FF), no shadows on the background, no text."
    )
    img = generate(key, prompt, 1024, 1024, refs=refs)
    RAW.mkdir(parents=True, exist_ok=True)
    img.save(RAW / "madame_raw.png")
    cut = chroma_key(img)
    cut.save(OUT / "madame_duvin.png", optimize=True)
    print("→", OUT / "madame_duvin.png")


def keller(key):
    refs = [Image.open(ASSETS / "gehoben" / "hintergrund_4x3.png").convert("RGB"),
            Image.open(ASSETS / "gutbuergerlich" / "hintergrund_4x3.png").convert("RGB")]
    prompt = (
        "Pixel art interior, exactly the same detailed 16-bit pixel-art style, palette richness and warm lighting as the reference "
        "restaurant backgrounds, wide view, no people. The tasting room of a wine academy in a vaulted cellar of pale limestone: "
        "a long tasting table with white tablecloths, rows of empty and half-filled wine glasses, small spittoon buckets, "
        "notepads; on the back wall a large framed wine region map and a blackboard with a chalk-drawn aroma wheel (only "
        "drawings, no readable writing); a shelf with many small aroma vials; wooden wine crates and bottle racks; warm "
        "light falling through a tall arched window. Empty space in the left third (a teacher will stand there). "
        "No text, no letters, no logos."
    )
    img = generate(key, prompt, 1920, 1440, refs=refs)
    img.save(OUT / "hintergrund_4x3.png", optimize=True)
    print("→", OUT / "hintergrund_4x3.png")


def main():
    what = sys.argv[1] if len(sys.argv) > 1 else "all"
    OUT.mkdir(parents=True, exist_ok=True)
    key = load_api_key()
    if what in ("madame", "all"):
        madame(key)
    if what in ("keller", "all"):
        keller(key)


if __name__ == "__main__" and (len(sys.argv) < 2 or sys.argv[1] in ("madame", "keller", "all")):
    main()


def tafel_ohne_schrift(box=(640, 208, 1392, 752)):
    """Tafel im Keller ohne Fantasie-Schrift neu zeichnen und weich zurückkleben."""
    from PIL import ImageFilter
    key = load_api_key()
    bg = Image.open(OUT / "hintergrund_4x3.png").convert("RGB")
    crop = bg.crop(box)
    prompt = ("Edit this pixel-art image: keep the exact same blackboard, wooden frame, wall, lighting and pixel-art style. "
              "Replace ALL chalk writing and letters with chalk DRAWINGS only: a circular aroma wheel divided into segments with "
              "tiny fruit, flower and spice pictograms, a bunch of grapes and a wine glass sketch. Absolutely no letters, words or numbers.")
    w, h = crop.size
    new = generate(key, prompt, w, h, refs=[crop]).resize((w, h))
    RAW.mkdir(parents=True, exist_ok=True)
    new.save(RAW / "tafel_neu.png")
    mask = Image.new("L", (w, h), 0)
    mask.paste(255, (24, 24, w - 24, h - 24))
    mask = mask.filter(ImageFilter.GaussianBlur(12))
    bg.paste(new, box[:2], mask)
    bg.save(OUT / "hintergrund_4x3.png", optimize=True)
    print("→ Tafel ersetzt")


if __name__ == "__main__" and len(sys.argv) > 1 and sys.argv[1] == "tafel":
    tafel_ohne_schrift()
