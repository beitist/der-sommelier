#!/usr/bin/env python3
"""
Der Sommelier — Musik & Sounds aus audio-inbox/ ins Spiel übernehmen.

- wandelt MP3 → M4A (AAC 96 kbit/s), Lautheit angeglichen (EBU R128, -16 LUFS)
- liest Titel/Künstler/URL aus Pixabay-Lizenzzertifikaten (*-license.txt) und *.rtf-Infos
- kopiert Lizenzzertifikate nach assets/audio/licenses/
- schreibt assets/audio/playlist.js (PLAYLISTS + SOUND_CREDITS)

Aufruf:  .venv/bin/python tools/import_audio.py [--force]   (ffmpeg muss installiert sein)
         --force wandelt auch bereits vorhandene Dateien neu um
"""
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INBOX = ROOT / "audio-inbox"
AUDIO = ROOT / "outputs" / "der-sommelier" / "assets" / "audio"

# Ordner in der Inbox → Szene im Spiel ("old" wird bewusst ignoriert)
SCENES = {
    "titel": "title", "level1": "imbiss", "level2": "steakhaus", "level3": "gutbuergerlich",
    "level4": "gehoben", "level5": "sterne", "game": "minigame",
}
# Sound-Effekte: Datei-ID → Effektname im Spiel (js/audio.js)
SFX = {
    "352295": "cork",      # Korkenplopp: richtige Antwort
    "173985": "pling",     # Flasche öffnen: beste Wahl
    "106191": "clank",     # Flaschenklirren: akzeptabel / Treffer im Minispiel
    "202165": "beer",      # Bier zapfen: 5x falsch → Chef geht ein Bier trinken
    "83096":  "cork2",     # zweiter Korken: Aufstieg (vor der Fanfare)
}
SFX_MAX_SECONDS = {"beer": 4.0}
# Wo Dateiname/Infos nicht reichen: Datei-ID → (Künstler, Titel) bzw. Uploader → Künstler
ID_OVERRIDES = {
    "563576": ("Alex Morgan", "Jazz Lounge Restaurant Music"),
    "578503": ("Alex Morgan", "Restaurant Dinner Table Ambience"),
}
UPLOADER_NAMES = {"nickpanek": "Nick Panek"}
FORCE = "--force" in sys.argv


def rtf_text(path):
    return subprocess.run(["textutil", "-convert", "txt", "-stdout", str(path)],
                          capture_output=True, text=True).stdout


def file_id(path):
    m = re.search(r"-(\d{5,})\.\w+$", path.name)
    return m.group(1) if m else None


def uploader(path):
    return path.stem.split("-")[0]


def norm(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


def parse_license(path):
    t = path.read_text(encoding="utf-8", errors="ignore")
    get = lambda label: (re.search(label + r":\s*\n(.+)", t) or [None, ""])[1].strip()
    return {"title": get("Audio File Title"), "url": get("Audio File URL"),
            "id": get("Audio File ID"), "licensor": get("Licensor's Username")}


def parse_infos(folder):
    """Alle .rtf (auch in Unterordnern): [(text, name)] – 'Music by NAME from Pixabay'."""
    infos = []
    for rtf in folder.rglob("*.rtf"):
        t = rtf_text(rtf)
        m = re.search(r"(?:Music|Sound Effect) by (?:<a [^>]*>)?([^<\n]+?)(?:</a>)? from", t)
        if m:
            infos.append((t, m.group(1).strip()))
    return infos


def pretty(slug):
    return " ".join(w.capitalize() for w in re.split(r"[-_]+", slug) if w)


def describe(mp3, licenses, infos):
    fid, up = file_id(mp3), uploader(mp3)
    lic = licenses.get(fid)
    artist = None
    for text, name in infos:                     # 1. ID im Attributions-Link
        if fid and f"utm_content={fid}" in text:
            artist = name
    if not artist:                               # 2. Uploader-Name im Info-Text
        for text, name in infos:
            if norm(up) and (norm(up) in norm(text) or norm(name) == norm(up)):
                artist = name
    artist = artist or UPLOADER_NAMES.get(up) or pretty(up)
    if fid in ID_OVERRIDES:
        artist, title = ID_OVERRIDES[fid]
    elif lic and lic["title"]:
        title = lic["title"]
    else:                                        # Titel aus Dateiname: uploader-titel-id
        title = pretty(re.sub(r"-\d{5,}$", "", mp3.stem)[len(up):])
    return {"title": title, "artist": artist, "url": lic["url"] if lic else "",
            "license": "Pixabay Content License", "source": "Pixabay", "lic": lic, "id": fid}


def ffmpeg(src, dst, extra):
    dst.parent.mkdir(parents=True, exist_ok=True)
    if dst.exists() and not FORCE and dst.stat().st_mtime > src.stat().st_mtime:
        return
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(src), *extra, "-vn",
           "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", str(dst)]
    subprocess.run(cmd, check=True)


def slugify(s):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", s.lower())).strip("-")[:60]


def js_str(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def main():
    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg fehlt (brew install ffmpeg)")
    (AUDIO / "licenses").mkdir(parents=True, exist_ok=True)
    playlists, missing_lic = {s: [] for s in SCENES.values()}, []
    infos = parse_infos(INBOX)

    for folder_name, scene in SCENES.items():
        folder = INBOX / folder_name
        if not folder.is_dir():
            continue
        licenses = {parse_license(p)["id"]: dict(parse_license(p), file=p) for p in folder.glob("*-license.txt")}
        for mp3 in sorted(folder.glob("*.mp3")):
            d = describe(mp3, licenses, infos)
            name = f"{slugify(d['title'])}-{d['id']}.m4a"
            print(f"  {scene:15} {d['title']} – {d['artist']}")
            ffmpeg(mp3, AUDIO / "music" / scene / name, ["-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "44100"])
            entry = {"file": f"{scene}/{name}", "title": d["title"], "artist": d["artist"],
                     "license": d["license"], "source": d["source"], "url": d["url"]}
            if d["lic"]:
                lic_name = d["lic"]["file"].name
                shutil.copy2(d["lic"]["file"], AUDIO / "licenses" / lic_name)
                entry["licenseFile"] = f"licenses/{lic_name}"
            else:
                missing_lic.append(f"{folder_name}/{mp3.name}")
            playlists[scene].append(entry)

    # Sound-Effekte
    sfx_folder, credits = INBOX / "sounds", []
    if sfx_folder.is_dir():
        for mp3 in sorted(sfx_folder.glob("*.mp3")):
            fid = file_id(mp3)
            if fid not in SFX:
                continue
            key = SFX[fid]
            extra = ["-af", f"atrim=0:{SFX_MAX_SECONDS[key]},afade=t=out:st={SFX_MAX_SECONDS[key] - 0.6}:d=0.6"] if key in SFX_MAX_SECONDS else []
            ffmpeg(mp3, AUDIO / "sfx" / f"{key}.m4a", extra)
            artist = next((n for t, n in infos if f"utm_content={fid}" in t), pretty(uploader(mp3)))
            credits.append({"sfx": key, "title": pretty(re.sub(r"-\d{5,}$", "", mp3.stem)[len(uploader(mp3)):]),
                            "artist": artist, "license": "Pixabay Content License", "source": "Pixabay"})
            print(f"  sfx {key:10} {mp3.name}")

    # playlist.js schreiben
    lines = ["// ============================================================",
             "// DER SOMMELIER — Radio: Wiedergabelisten pro Szene",
             "// AUTOMATISCH ERZEUGT von tools/import_audio.py – Änderungen dort bzw. in audio-inbox/",
             "// Dateien liegen in assets/audio/music/ (nicht im Repo, siehe .gitignore).",
             "// ============================================================", "", "const PLAYLISTS = {"]
    for scene, songs in playlists.items():
        lines.append(f"  {scene}: [")
        for s in songs:
            lines.append("    { " + ", ".join(f"{k}: {js_str(v)}" for k, v in s.items()) + " },")
        lines.append("  ],")
    lines += ["};", "", "// Sound-Effekte (assets/audio/sfx/) – für „Über das Spiel“", "const SOUND_CREDITS = ["]
    for c in credits:
        lines.append("  { " + ", ".join(f"{k}: {js_str(v)}" for k, v in c.items()) + " },")
    lines += ["];", ""]
    (AUDIO / "playlist.js").write_text("\n".join(lines), encoding="utf-8")

    total = sum(len(v) for v in playlists.values())
    print(f"\n{total} Lieder, {len(credits)} Effekte → {AUDIO / 'playlist.js'}")
    if missing_lic:
        print("Ohne Lizenzzertifikat (*-license.txt):\n  " + "\n  ".join(missing_lic))


if __name__ == "__main__":
    main()
