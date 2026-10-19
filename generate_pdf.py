#!/usr/bin/env python3
"""
Der Sommelier — Spielinhalte als PDF
Generiert ein schön formatiertes PDF mit allen Leveln, Weinen, Lehrgängen und Fragen.
"""

import weasyprint
import textwrap

# ═══════════════════════════════════════════════════════════════
# DATEN
# ═══════════════════════════════════════════════════════════════

def load_levels():
    """Spielinhalte direkt aus den JS-Dateien laden (tools/export_content.js),
    damit die PDF nie vom Spiel abweicht."""
    import json, os, subprocess
    root = os.path.dirname(os.path.abspath(__file__))
    out = subprocess.run(["node", os.path.join(root, "tools", "export_content.js")],
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)


CONTENT = load_levels()
LEVELS = CONTENT["levels"]

FRAGETYPEN = {
    "food_pairing": ("Speiseempfehlung", "#e94560"),
    "preference": ("Gästewunsch", "#8b5cf6"),
    "besserwisser": ("Besserwisser", "#f0c832"),
    "weinwissen": ("Weinwissen", "#3b82f6"),
    "blindtasting": ("Blind Tasting", "#7b5b3a"),
    "beratung": ("Beratung", "#4a9"),
}

# ═══════════════════════════════════════════════════════════════
# HTML GENERIERUNG
# ═══════════════════════════════════════════════════════════════

def gen_css():
    return """
    @font-face { font-family: 'Inter'; font-weight: 400; src: url('outputs/der-sommelier/fonts/inter-latin-400-normal.woff2'); }
    @font-face { font-family: 'Inter'; font-weight: 600; src: url('outputs/der-sommelier/fonts/inter-latin-600-normal.woff2'); }
    @font-face { font-family: 'Inter'; font-weight: 700; src: url('outputs/der-sommelier/fonts/inter-latin-700-normal.woff2'); }

    @page {
        size: A4;
        margin: 20mm 18mm 20mm 18mm;
        @bottom-center {
            content: "Der Sommelier — Spielinhalte" " · Seite " counter(page);
            font-family: 'Inter', sans-serif;
            font-size: 8pt;
            color: #888;
        }
    }

    * { box-sizing: border-box; }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 10pt;
        line-height: 1.55;
        color: #1a1a2e;
    }

    /* ===== COVER ===== */
    .cover {
        page-break-after: always;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-align: center;
    }
    .cover-icon { font-size: 72pt; margin-bottom: 16px; }
    .cover h1 {
        font-size: 36pt;
        color: #e94560;
        margin: 0 0 8px;
        letter-spacing: 1px;
    }
    .cover .subtitle {
        font-size: 14pt;
        color: #666;
        margin-bottom: 40px;
    }
    .cover .toc-title {
        font-size: 12pt;
        font-weight: 700;
        color: #1a1a2e;
        margin-bottom: 12px;
    }
    .cover .toc-item {
        font-size: 11pt;
        color: #444;
        margin: 6px 0;
    }
    .cover .toc-item span { color: #e94560; font-weight: 700; }
    .cover .footer-note {
        margin-top: 60px;
        font-size: 9pt;
        color: #999;
    }

    /* ===== LEVEL PAGES ===== */
    .level-page { page-break-before: always; }
    .level-page h3 { page-break-after: avoid; }
    .level-page table { page-break-inside: avoid; }
    .lehrgang-box { page-break-inside: avoid; }
    .country { page-break-inside: avoid; }

    .level-header {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        color: #fff;
        padding: 18px 24px;
        border-radius: 10px;
        margin-bottom: 18px;
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .level-icon { font-size: 32pt; }
    .level-header-text h2 {
        margin: 0;
        font-size: 16pt;
        color: #e94560;
    }
    .level-header-text .theme {
        font-size: 10pt;
        color: #a0a0c0;
        margin-top: 2px;
    }
    .level-header-text .chef {
        font-size: 9pt;
        color: #f0c832;
        margin-top: 2px;
    }

    /* Sections */
    h3 {
        font-size: 12pt;
        color: #e94560;
        border-bottom: 2px solid #e94560;
        padding-bottom: 4px;
        margin: 16px 0 10px;
    }
    h3.countries-title { color: #3b82f6; border-color: #3b82f6; }
    h3.lehrgang-title { color: #f0c832; border-color: #f0c832; }
    h3.questions-title { color: #8b5cf6; border-color: #8b5cf6; }

    /* Countries */
    .country {
        margin: 6px 0;
        padding: 6px 10px;
        background: #f0f4ff;
        border-radius: 6px;
        border-left: 4px solid #3b82f6;
    }
    .country strong { color: #1a1a2e; }

    /* Wine table */
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 8px 0;
        font-size: 9pt;
    }
    th {
        background: #1a1a2e;
        color: #fff;
        padding: 6px 8px;
        text-align: left;
        font-size: 8pt;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    td {
        padding: 5px 8px;
        border-bottom: 1px solid #e0e0e0;
    }
    tr:nth-child(even) td { background: #f8f8fc; }
    .wine-name { font-weight: 700; }

    /* Lehrgang */
    .lehrgang-box {
        background: #fdf8e8;
        border: 1px solid #f0c832;
        border-radius: 8px;
        padding: 12px 16px;
        margin: 8px 0;
    }
    .lehrgang-box h4 {
        margin: 0 0 4px;
        font-size: 10pt;
        color: #8b6914;
    }
    .lehrgang-box p {
        margin: 0;
        font-size: 9pt;
        color: #444;
        line-height: 1.5;
    }
    .lehrgang-box ul { margin: 0; padding: 0; list-style: none; }
    .lehrgang-box li {
        font-size: 9pt;
        color: #444;
        line-height: 1.5;
        margin: 2px 0;
    }

    /* Question badges */
    .q-overview {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 8px 0;
    }
    .q-badge {
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 9pt;
        font-weight: 600;
        color: #fff;
        display: inline-block;
    }
    .q-total {
        margin-top: 6px;
        font-size: 10pt;
        font-weight: 700;
        color: #1a1a2e;
    }

    /* Summary page */
    .summary-page { page-break-before: always; }
    .summary-page h3 { page-break-after: avoid; }
    .summary-page table { page-break-inside: avoid; }
    .summary-table th { font-size: 8pt; }
    .summary-table td { text-align: center; font-size: 9pt; }
    .summary-table td:first-child { text-align: left; font-weight: 600; }
    .total-row td {
        font-weight: 700 !important;
        border-top: 2px solid #1a1a2e;
        background: #f0f0f8 !important;
    }
    """


def gen_cover():
    items = ""
    for lv in LEVELS:
        items += f'<div class="toc-item"><span>Level {lv["nr"]}</span> — {lv["name"]}</div>\n'

    total_q = sum(sum(lv["questions"].values()) for lv in LEVELS)
    total_w = sum(len(lv["wines"]) for lv in LEVELS)

    return f"""
    <div class="cover">
        <div class="cover-icon">🍷</div>
        <h1>DER SOMMELIER</h1>
        <div class="subtitle">Ein Wein-Abenteuer — Spielinhalte</div>
        <div class="toc-title">Fünf Stufen · {total_w} Weine · {total_q} Fragen</div>
        {items}
        <div class="footer-note">
            Browser-basiertes Wein-RPG · Vanilla HTML/CSS/JS<br>
            Lizenz: CC BY 4.0 (Namensnennung)
        </div>
    </div>
    """


def gen_level_page(lv):
    html = f'<div class="level-page">\n'

    # Header
    html += f"""
    <div class="level-header">
        <div class="level-icon">{lv["icon"]}</div>
        <div class="level-header-text">
            <h2>Level {lv["nr"]}: {lv["name"]}</h2>
            <div class="theme">Thema: {lv["theme"]}</div>
            <div class="chef">Küchenchef: {lv["chef"]}</div>
        </div>
    </div>
    """

    # Lernziele (abgeleitet aus Lehrgang)
    html += '<h3>Lernziele</h3>\n<ul>\n'
    for icon_heading in lv["lehrgang"]["headings"]:
        heading = icon_heading.split(" ", 1)[1] if " " in icon_heading else icon_heading
        html += f'<li><strong>{heading}</strong></li>\n'
    html += '</ul>\n'

    # Neue Länder
    if lv["countries"]:
        html += '<h3 class="countries-title">Neue Weinländer</h3>\n'
        for c in lv["countries"]:
            html += f'<div class="country">{c["flag"]} <strong>{c["name"]}</strong> — {" · ".join(c["facts"])}</div>\n'

    # Weine
    html += '<h3>Weine dieser Stufe</h3>\n'
    html += """<table>
    <tr><th>Wein</th><th></th><th>Land</th><th>Körper</th><th>Süße</th><th>Aromen</th><th>Preis</th></tr>
    """
    for w in lv["wines"]:
        html += f'<tr><td class="wine-name">{w["name"]}</td><td>{w["dot"]}</td><td>{w["country"]}</td>'
        html += f'<td>{w["body"]}</td><td>{w["sweetness"]}</td><td>{w["flavors"]}</td><td>{w["price"]}</td></tr>\n'
    html += '</table>\n'

    # Lehrgang
    html += f'<h3 class="lehrgang-title">Lehrgang: {lv["lehrgang"]["title"]}</h3>\n'
    html += '<div class="lehrgang-box"><h4>📋 Zusammenfassung</h4><ul>\n'
    for item in lv["lehrgang"]["recap"]:
        html += f'<li>{item}</li>\n'
    html += '</ul></div>\n'

    # Fragen-Überblick
    html += '<h3 class="questions-title">Fragen</h3>\n'
    html += '<div class="q-overview">\n'
    total = 0
    for key, count in lv["questions"].items():
        if count == 0:
            continue
        label, color = FRAGETYPEN[key]
        html += f'<span class="q-badge" style="background:{color}">{label}: {count}</span>\n'
        total += count
    html += '</div>\n'
    html += f'<div class="q-total">Gesamt: {total} Fragen</div>\n'

    html += '</div>\n'
    return html


def levels_with(qtype):
    nrs = [str(lv["nr"]) for lv in LEVELS if lv["questions"].get(qtype)]
    return "Level " + ", ".join(nrs) + "." if nrs else ""


def gen_summary():
    html = '<div class="summary-page">\n'
    html += '<h2 style="color:#e94560; text-align:center; margin-bottom:20px;">Gesamtübersicht</h2>\n'

    # Question summary table
    html += '<h3 class="questions-title">Fragen nach Level und Typ</h3>\n'
    html += '<table class="summary-table"><tr><th>Fragetyp</th>'
    for lv in LEVELS:
        html += f'<th>Lv {lv["nr"]}</th>'
    html += '<th>Gesamt</th></tr>\n'

    type_totals = {}
    for key in FRAGETYPEN:
        label, color = FRAGETYPEN[key]
        html += f'<tr><td>{label}</td>'
        row_total = 0
        for lv in LEVELS:
            c = lv["questions"].get(key, 0)
            row_total += c
            html += f'<td>{c if c > 0 else "—"}</td>'
        type_totals[key] = row_total
        html += f'<td><strong>{row_total}</strong></td></tr>\n'

    # Total row
    html += '<tr class="total-row"><td>Gesamt</td>'
    grand_total = 0
    for lv in LEVELS:
        lv_total = sum(lv["questions"].values())
        html += f'<td>{lv_total}</td>'
        grand_total += lv_total
    html += f'<td><strong>{grand_total}</strong></td></tr>\n'
    html += '</table>\n'

    # Wine summary
    html += '<h3>Weine nach Level</h3>\n'
    html += '<table class="summary-table"><tr><th>Level</th><th>Restaurant</th><th>Neue Weine</th><th>Kumulativ</th></tr>\n'
    cumul = 0
    for lv in LEVELS:
        n = len(lv["wines"])
        cumul += n
        html += f'<tr><td>Level {lv["nr"]}</td><td style="text-align:left">{lv["name"]}</td>'
        html += f'<td>{n}</td><td><strong>{cumul}</strong></td></tr>\n'
    html += '</table>\n'

    # Countries
    html += '<h3 class="countries-title">Weinländer nach Level</h3>\n'
    html += '<table class="summary-table"><tr><th>Level</th><th>Neue Länder</th></tr>\n'
    for lv in LEVELS:
        if lv["countries"]:
            names = ", ".join(f'{c["flag"]} {c["name"]}' for c in lv["countries"])
        else:
            names = "— (keine neuen)"
        html += f'<tr><td>Level {lv["nr"]}</td><td style="text-align:left">{names}</td></tr>\n'
    html += '</table>\n'

    # Fragetypen-Erklärung
    html += '<h3 class="questions-title">Fragetypen</h3>\n'
    type_descriptions = {
        "food_pairing": f"Der Gast bestellt ein Gericht — welcher Wein passt dazu? {CONTENT['optionsPerQuestion']} Weine zur Auswahl, einer ist die beste Wahl.",
        "preference": "Der Gast beschreibt vage, was er möchte — du musst den richtigen Wein finden.",
        "besserwisser": "Ein Gast behauptet etwas über Wein — stimmt das oder ist es falsch?",
        "weinwissen": "Theorie-Quiz: Weinregionen, Rebsorten, Herstellung, Weinkultur.",
        "blindtasting": "Anhand von Aussehen, Nase und Gaumen den Wein identifizieren. " + levels_with("blindtasting"),
        "beratung": "Mehrstufiges Beratungsgespräch mit Rückfragen, dann Weinempfehlung. " + levels_with("beratung"),
    }
    for key, (label, color) in FRAGETYPEN.items():
        desc = type_descriptions[key]
        html += f'<div style="margin:4px 0;padding:4px 10px;border-left:4px solid {color};background:#f8f8fc;border-radius:4px;">'
        html += f'<strong style="color:{color}">{label}</strong> — {desc}</div>\n'

    html += '</div>\n'
    return html


def generate_html():
    html = f"""<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<style>{gen_css()}</style>
</head>
<body>
{gen_cover()}
"""
    for lv in LEVELS:
        html += gen_level_page(lv)

    html += gen_summary()
    html += "\n</body></html>"
    return html


# ═══════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════

if __name__ == "__main__":
    import os

    out_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(out_dir, "der_sommelier_inhalte.html")
    pdf_path = os.path.join(out_dir, "der_sommelier_inhalte.pdf")

    print("Generiere HTML...")
    html = generate_html()
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  → {html_path}")

    print("Generiere PDF...")
    weasyprint.HTML(filename=html_path).write_pdf(pdf_path)
    print(f"  → {pdf_path}")
    print("Fertig!")
