#!/usr/bin/env python3
"""
Der Sommelier: Begleitheft als PDF
Begleitheft für Lehrkräfte: Begleitkommentar und eine Übersicht pro Restaurant, erzeugt aus den Spieldaten.
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
            content: "Der Sommelier · Begleitheft für Lehrkräfte · Seite " counter(page);
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
    /* ===== KOMMENTAR ===== */
    .komm { page-break-before: always; font-size: 9.5pt; line-height: 1.5; }
    .komm-title { font-size: 18pt; color: #1a1a2e; margin: 0 0 6px; }
    .komm h3 { margin: 12px 0 6px; }
    .komm p { margin: 4px 0 6px; }
    .komm ul, .komm ol { margin: 4px 0 6px; padding-left: 18px; }
    .komm li { margin: 2px 0; }
    .komm-table td { font-size: 8.5pt; vertical-align: top; }
    .komm-table { page-break-inside: avoid; }
    .lf-box { background: #f0f4ff; border-left: 4px solid #3b82f6; border-radius: 6px; padding: 6px 10px; font-size: 9pt; }
    .ak-table td { vertical-align: top; font-size: 8.5pt; }
    .tag { background: #f0c832; color: #1a1a2e; border-radius: 8px; padding: 0 6px; font-size: 7.5pt; font-weight: 700; }
    .example { background: #f8f6ff; border-left: 4px solid #8b5cf6; border-radius: 6px; padding: 6px 10px; margin: 6px 0; page-break-inside: avoid; }
    .ex-kind { font-size: 7.5pt; font-weight: 700; color: #8b5cf6; text-transform: uppercase; letter-spacing: .5px; }
    .example p { margin: 2px 0; font-size: 9pt; }
    .ex-opt { color: #555; }
    .small { font-size: 8.5pt; color: #555; margin: 4px 0; }
    h3.impulse-title { color: #2a9d6a; border-color: #2a9d6a; }
    .impulse { margin: 4px 0; padding-left: 18px; font-size: 9pt; }
    .impulse { page-break-inside: avoid; }
    """


LERNFELD = {
    0: "LF 5 Gastbezogenen Service im Restaurant durchführen (alle Berufe, 1. Jahr): Wein (Arten), Gästetypen, Gastgeberrolle",
    1: "LF 7 Getränke anbieten und servieren: Arten der Getränke und deren Herstellung",
    2: "LF 6 und LF 7: Verkaufsgespräch, Regeln zur Auswahl passender Getränke; Koch LF 12: Menü zusammenstellen, Gast beraten",
    3: "LF 7: Herstellung; Hotelfach LF 12: Getränkekarten erstellen",
    4: "LF 11 Gäste am Tisch betreuen: Menükunde, korrespondierende Getränke, Weinservice",
}

IMPULSE = {
    0: ["Welche Fragen hättet ihr dem Gast stellen können, bevor ihr empfehlt?",
        "Welche Weine schenkt euer Ausbildungsbetrieb offen aus? Ordnet sie nach Farbe und Süße.",
        "Welche Behauptungen über Wein hört ihr von Gästen, und was stimmt daran?"],
    1: ["Warum schmeckt ein Weißwein aus einem kühlen Gebiet anders als einer aus einem warmen?",
        "Lest das Etikett eines Weins aus eurem Betrieb: Was erfahrt ihr, was fehlt?",
        "Beschreibt einem Gast einen Wein, ohne Fachwörter zu benutzen."],
    2: ["Nehmt ein Gericht von eurer Speisekarte und begründet einen Wein dazu: ergänzend, kontrastierend oder regional.",
        "Spielt ein Beratungsgespräch zu zweit nach: Welche Fragen stellt ihr, bevor ihr empfehlt?",
        "Für die Küche: Was muss der Service über euer Gericht wissen, um passend empfehlen zu können?"],
    3: ["Was bedeutet „Barrique“ auf einer Weinkarte, und welchem Gast würdet ihr diesen Wein anbieten?",
        "Ein Gast fragt nach einem Wein, den ihr nicht kennt. Wie geht ihr vor?",
        "Für das Hotelfach: Stellt eine kleine Weinkarte mit sechs Weinen für ein Hotelrestaurant zusammen."],
    4: ["Beschreibt einen Wein nach Auge, Nase und Gaumen.",
        "Stellt zu einem Drei-Gänge-Menü aus eurem Betrieb eine Weinbegleitung zusammen.",
        "Ein Gast hat schon viel getrunken und bestellt die nächste Flasche. Wie reagiert ihr? (Bezug zu LF 8)"],
}


def gen_cover():
    items = ""
    for lv in LEVELS:
        items += f'<div class="toc-item"><span>{lv["nr"] + 1}</span> {lv["name"]}: {lv["theme"]}</div>\n'

    total_q = sum(sum(lv["questions"].values()) for lv in LEVELS)
    total_w = sum(len(lv["wines"]) for lv in LEVELS)

    return f"""
    <div class="cover">
        <div class="cover-icon">🍷</div>
        <h1>DER SOMMELIER</h1>
        <div class="subtitle">Begleitheft für Lehrkräfte</div>
        <div class="toc-title">Fünf Restaurants · {total_w} Weine · {total_q} Fragen</div>
        {items}
        <div class="footer-note">
            Spielen im Browser: beiti.me/games/sommelier · iPad-App im App Store<br>
            Lizenz: CC BY 4.0 (Namensnennung), Sebastian Stüwe
        </div>
    </div>
    """


def gen_kommentar():
    rows = ""
    for lv in LEVELS:
        code = lv["levelCode"] or "(Spielstart)"
        rows += f'<tr><td><strong>{lv["name"]}</strong></td><td>{code}</td><td>{lv["theme"]}</td><td>{LERNFELD[lv["nr"]]}</td></tr>\n'
    return f"""
    <div class="komm">
    <h2 class="komm-title">Begleitkommentar</h2>

    <h3>Idee</h3>
    <p>„Der Sommelier“ ist als begleitendes Material gedacht und nicht als eigene Unterrichtsreihe. Wein hat in den
    Lehrplänen der Gastgewerbe-Berufe einen festen, aber kleinen Platz, und im Unterricht ist selten Zeit, das Thema über
    Wochen zu vertiefen. Die fünf Restaurants des Spiels lassen sich deshalb einzeln einsetzen: als kurzer Impuls an der
    Stelle, an der ein Lernfeld ohnehin Beratung, Getränke oder Menüs behandelt. Ein typischer Einstieg wäre: „Heute geht es
    um Beratung. Spielt das erste Restaurant, danach sprechen wir darüber.“</p>
    <p>Im Kern ist das Spiel ein Training für Beratungssituationen. Jede Frage ist ein Gast mit einem Gericht, einem Wunsch
    oder einer Behauptung. Nach jeder Antwort erklärt das Spiel, warum die Empfehlung passt oder nicht passt und welcher
    Wein die beste Wahl gewesen wäre. Diese Erklärungen sind der eigentliche Lernstoff und eignen sich gut als Grundlage
    für das Gespräch danach.</p>

    <h3>Lehrplanbezug</h3>
    <p>Grundlage sind die KMK-Rahmenlehrpläne vom 17.12.2021, die in NRW mit den Bildungsplänen von 2023 umgesetzt sind.
    Wein steht dort an diesen Stellen:</p>
    <ul>
    <li><strong>Alle Gastgewerbe-Berufe, 1. Jahr:</strong> LF 5 „Gastbezogenen Service im Restaurant durchführen“ nennt
    Wein (Arten), Gästetypen und die Gastgeberrolle.</li>
    <li><strong>Restaurants und Veranstaltungsgastronomie, Fachkraft Gastronomie:</strong> LF 7 „Getränke anbieten und
    servieren“ verlangt Regeln zur Auswahl passender Getränke, Weine aus Deutschland, Spanien und Italien sowie Beratung
    und aktive Empfehlung. LF 11 „Gäste am Tisch betreuen“ (nur Restaurants und Veranstaltungsgastronomie) verlangt
    Beratung unter Berücksichtigung der Menükunde und korrespondierende Getränke.</li>
    <li><strong>Hotelfach:</strong> LF 5 sowie LF 12 „Das gastronomische Angebot organisieren“ mit der Erstellung von
    Getränkekarten.</li>
    <li><strong>Koch und Fachkraft Küche:</strong> LF 5; für Köche zusätzlich LF 12 „Speisenangebote für Veranstaltungen
    gastorientiert planen“ mit Menüzusammenstellung und Beratungsgespräch.</li>
    </ul>
    <p>Das Spiel geht bei den Weinländern über LF 7 hinaus (neun Länder, darunter Frankreich, Österreich und Südafrika).
    Schaumwein kommt nur am Rand vor.</p>

    <h3>Fünf Restaurants, fünf Schwerpunkte</h3>
    <table class="komm-table">
    <tr><th>Restaurant</th><th>Levelcode</th><th>Schwerpunkt</th><th>Anknüpfung</th></tr>
    {rows}
    </table>
    <p>Mit dem Levelcode („Levelcode eingeben“ auf dem Titelbildschirm) startet das Spiel direkt im jeweiligen Restaurant.
    Es beginnt dann mit dem passenden Akademie-Tag, in dem die Lehrerin Madame Duvin die Grundlagen in kurzen Lektionen
    mit Übungen erklärt. Danach stellt der Chef seine Weine vor, und die erste Schicht mit fünf Gästen beginnt.</p>

    <h3>Vorschlag für eine Einheit</h3>
    <ol>
    <li><strong>Einstieg (5 Minuten):</strong> eine Situation aus dem Betrieb, zum Beispiel „Ein Gast bestellt Schnitzel
    und fragt nach einem passenden Wein. Was fragt ihr zurück?“</li>
    <li><strong>Spielphase (20 bis 30 Minuten):</strong> einzeln oder zu zweit am iPad oder im Browser, Akademie-Tag und
    eine Schicht. Die Zeit ist ein Richtwert und hängt vom Lesetempo ab.</li>
    <li><strong>Auswertung (10 bis 15 Minuten):</strong> Welche Empfehlung hat überrascht? Wo lagt ihr daneben, und wie
    lautete die Begründung? Gesprächsimpulse stehen auf den folgenden Seiten bei jedem Restaurant.</li>
    <li><strong>Transfer:</strong> die Getränke- oder Weinkarte des eigenen Ausbildungsbetriebs, ein Gericht von der
    eigenen Speisekarte oder ein kurzes Beratungsrollenspiel.</li>
    </ol>
    <p>Die Prüfung am Ende des Spiels (ein Menü mit sieben Gängen beim Michelin-Tester) eignet sich als Wiederholung vor
    der Zwischen- oder Abschlussprüfung, setzt aber voraus, dass alle fünf Restaurants gespielt wurden.</p>

    <h3>Organisatorisches</h3>
    <ul>
    <li><strong>Zugang:</strong> im Browser unter beiti.me/games/sommelier ohne Installation und ohne Konto, oder als
    kostenlose iPad-App. Beide Versionen haben denselben Inhalt.</li>
    <li><strong>Altersfreigabe:</strong> Im App Store ist die App ab 18 Jahren freigegeben, weil Apple häufige Bezüge zu
    Alkohol automatisch so einstuft. Auf Geräten mit Altersbeschränkung, etwa verwalteten Schul-iPads, ist deshalb die
    Browserversion der einfachere Weg. Das Spiel zeigt keine Betrunkenen und wirbt nicht für Alkohol; der
    verantwortungsvolle Umgang lässt sich mit LF 8 verbinden.</li>
    <li><strong>Spielstand und Daten:</strong> Der Spielstand liegt nur auf dem Gerät bzw. im Browser. Auf geteilten
    Geräten überschreibt ein neues Spiel den alten Stand nach einer Rückfrage. Das Spiel erhebt keine Daten und enthält
    keine Werbung.</li>
    <li><strong>Lizenz:</strong> Spiel und Begleitheft stehen unter CC BY 4.0 und dürfen mit Namensnennung frei
    verwendet und angepasst werden; die Musik ist davon ausgenommen.</li>
    </ul>
    </div>
    """


def gen_level_page(lv):
    nr = lv["nr"]
    code = f'Levelcode: <strong>{lv["levelCode"]}</strong>' if lv["levelCode"] else "Startrestaurant"
    html = '<div class="level-page">\n'
    html += f"""
    <div class="level-header">
        <div class="level-icon">{lv["icon"]}</div>
        <div class="level-header-text">
            <h2>{nr + 1}. {lv["name"]}</h2>
            <div class="theme">Schwerpunkt: {lv["theme"]}</div>
            <div class="chef">Küchenchef: {lv["chef"]} · {code}</div>
        </div>
    </div>
    <div class="lf-box"><strong>Anknüpfung:</strong> {LERNFELD[nr]}</div>
    """

    ak = lv.get("academy")
    if ak:
        html += f'<h3 class="lehrgang-title">{ak["title"]}</h3>\n<table class="ak-table">\n'
        html += '<tr><th>Lektion</th><th>Übung im Spiel</th></tr>\n'
        for l in ak["lessons"]:
            tag = ' <span class="tag">Etikett</span>' if l["label"] else ""
            html += f'<tr><td class="wine-name">{l["title"]}</td><td>{l["exercise"]}{tag}</td></tr>\n'
        html += '</table>\n'

    if lv["examples"]:
        html += '<h3 class="questions-title">Beispiele aus den Schichten</h3>\n'
        for ex in lv["examples"]:
            html += f'<div class="example"><div class="ex-kind">{ex["kind"]}</div>'
            html += f'<p class="ex-sit">{ex["situation"]}</p>'
            if ex.get("options"):
                html += f'<p class="ex-opt">Auswahl: {", ".join(ex["options"])}</p>'
            html += f'<p class="ex-ans"><strong>Beste Antwort: {ex["answer"]}</strong> {ex["explanation"]}</p></div>\n'

    html += '<h3>Weine dieses Restaurants</h3>\n'
    html += '<table><tr><th>Wein</th><th>Farbe</th><th>Land</th><th>Körper</th><th>Süße</th><th>Aromen</th></tr>\n'
    for w in lv["wines"]:
        html += f'<tr><td class="wine-name">{w["name"]}</td><td>{w["color"]}</td><td>{w["country"]}</td>'
        html += f'<td>{w["body"]}</td><td>{w["sweetness"]}</td><td>{w["flavors"]}</td></tr>\n'
    html += '</table>\n'
    if lv["countries"]:
        names = ", ".join(c["name"] for c in lv["countries"])
        html += f'<p class="small">Neue Weinländer auf der Karte: {names}</p>\n'

    parts = []
    for key, count in lv["questions"].items():
        if count:
            parts.append(f'{FRAGETYPEN[key][0]} {count}')
    html += f'<p class="small">Fragen in diesem Restaurant: {", ".join(parts)} (insgesamt {sum(lv["questions"].values())})</p>\n'

    html += '<h3 class="impulse-title">Gesprächsimpulse für die Auswertung</h3>\n<ul class="impulse">\n'
    for i in IMPULSE[nr]:
        html += f'<li>{i}</li>\n'
    html += '</ul>\n'
    if nr == len(LEVELS) - 1:
        html += ('<p class="small">Nach diesem Restaurant folgt die Prüfung beim Michelin-Tester: sieben Gänge mit '
                 'Fragen aus allen fünf Restaurants. Wer besteht, sieht den Abspann und trägt sich in die Bestenliste ein.</p>\n')
    html += '</div>\n'
    return html


def levels_with(qtype):
    nrs = [str(lv["nr"] + 1) for lv in LEVELS if lv["questions"].get(qtype)]
    return "Restaurant " + ", ".join(nrs) + "." if nrs else ""


def gen_summary():
    html = '<div class="summary-page">\n'
    html += '<h2 style="color:#e94560; text-align:center; margin-bottom:20px;">Gesamtübersicht</h2>\n'

    # Question summary table
    html += '<h3 class="questions-title">Fragen nach Restaurant und Typ</h3>\n'
    html += '<table class="summary-table"><tr><th>Fragetyp</th>'
    for lv in LEVELS:
        html += f'<th>{lv["nr"] + 1}</th>'
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
    html += '<h3>Weine nach Restaurant</h3>\n'
    html += '<table class="summary-table"><tr><th>Nr.</th><th>Restaurant</th><th>Neue Weine</th><th>Kumulativ</th></tr>\n'
    cumul = 0
    for lv in LEVELS:
        n = len(lv["wines"])
        cumul += n
        html += f'<tr><td>{lv["nr"] + 1}</td><td style="text-align:left">{lv["name"]}</td>'
        html += f'<td>{n}</td><td><strong>{cumul}</strong></td></tr>\n'
    html += '</table>\n'

    # Fragetypen-Erklärung
    html += '<h3 class="questions-title">Fragetypen</h3>\n'
    type_descriptions = {
        "food_pairing": f"Der Gast bestellt ein Gericht und fragt, welcher Wein passt. {CONTENT['optionsPerQuestion']} Weine stehen zur Auswahl, einer ist die beste Wahl.",
        "preference": "Der Gast beschreibt ungefähr, was er mag; gesucht ist der passende Wein.",
        "besserwisser": "Ein Gast behauptet etwas über Wein. Stimmt das oder nicht?",
        "weinwissen": "Theorie-Quiz: Weinregionen, Rebsorten, Herstellung, Weinkultur.",
        "blindtasting": "Anhand von Aussehen, Nase und Gaumen den Wein identifizieren. " + levels_with("blindtasting"),
        "beratung": "Mehrstufiges Beratungsgespräch mit Rückfragen, dann Weinempfehlung. " + levels_with("beratung"),
    }
    for key, (label, color) in FRAGETYPEN.items():
        desc = type_descriptions[key]
        html += f'<div style="margin:4px 0;padding:4px 10px;border-left:4px solid {color};background:#f8f8fc;border-radius:4px;">'
        html += f'<strong style="color:{color}">{label}:</strong> {desc}</div>\n'

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
{gen_kommentar()}
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
