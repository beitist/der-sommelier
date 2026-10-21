// ============================================================
// DER SOMMELIER — Spielende: Abschlussprüfung, Abspann, Bestenliste
// ============================================================

// ===== ABSCHLUSSPRÜFUNG =====
// Im Étoile, sobald das Trinkgeld-Ziel erreicht ist: Der Michelin-Tester prüft die ganze
// Laufbahn als 7-Gänge-Menü (Fragen aus js/questions_exam.js): je 1 Gang zu Imbiss,
// Steakhaus, Gasthaus, je 2 zu Le Vignoble und Étoile. Kein Chef-Tipp.
// Bestanden ab 5 richtigen ("akzeptabel" zählt nicht).
const EXAM = {
  passMark: 5,
  guestId: 'michelin_tester',
  perLevel: { 0: 1, 1: 1, 2: 1, 3: 2, 4: 2 },
  courseOrder: ['Amuse-Bouche', 'Brot & Butter', 'Aperitif', 'Vorspeise', 'Suppe', 'Austern', 'Fischgang',
                'Zwischengang', 'Risotto', 'Fleischgang', 'Hauptgang', 'Käse', 'Pré-Dessert', 'Dessert'],
};
const EXAM_TOTAL = Object.values(EXAM.perLevel).reduce((a, b) => a + b, 0);

function isExamEligible() {
  const p = state.player;
  return p.level === CONFIG.levels.length - 1 && p.tips >= getLevel().xpToNext && !p.examPassed;
}

function startExam() {
  const level = state.player.level;
  let selected = [];
  for (const [lv, count] of Object.entries(EXAM.perLevel)) {
    shuffle(EXAM_QUESTIONS[lv] || []).slice(0, count).forEach(q => selected.push({ type: q.type, data: structuredClone(q) }));
  }
  // als Menü servieren: Amuse-Bouche zuerst, Dessert zuletzt
  const rank = q => { const i = EXAM.courseOrder.indexOf(q.data.course); return i < 0 ? EXAM.courseOrder.length : i; };
  selected.sort((a, b) => rank(a) - rank(b));
  selected.forEach(q => {
    expandWineOptions(q, level);
    q.guest = getGuestInfo(EXAM.guestId, level);
  });

  state.scene = 'restaurant';
  state.currentShift = {
    questions: selected, questionIndex: 0,
    correct: 0, wrong: 0, total: 0, tipsEarned: 0,
    isExam: true, examCorrect: 0,
  };
  state.currentQuestion = selected[0];
  state.currentGuest = selected[0].guest;
  state.beratungState = null;
  state.overlay = null;
  state.overlayData = null;
  render();
}

function finishExam() {
  const s = state.currentShift;
  const passed = s.examCorrect >= EXAM.passMark;
  state.player.examAttempts++;
  if (passed) state.player.examPassed = true;
  state.overlay = 'examResult';
  state.overlayData = { passed, correct: s.examCorrect, total: s.questions.length };
  if (passed) { Sound.play('cork2'); Sound.play('fanfare', 0.35); }
  else Sound.play('wrong');
  saveGame();
  render();
}

function renderExamReadyOverlay() {
  return `
    <div class="overlay-backdrop">
      <div class="feedback-card exam-card">
        <div class="fb-icon">🎓</div>
        <h3>Der Michelin-Tester ist da!</h3>
        <p class="fb-explanation">
          Chef Beaumont nimmt dich zur Seite: <em>„Sie haben sich das Vertrauen unserer Gäste verdient.
          Heute Abend sitzt der Michelin-Tester an Tisch 7. Sein Menü hat sieben Gänge – zu jedem stellt er Ihnen eine Frage aus Ihrer ganzen Laufbahn. Keine Hilfe von mir.
          Bestehen Sie – und wir holen den dritten Stern.“</em>
        </p>
        <p class="fb-explanation">Bestanden ab <strong>${EXAM.passMark} von ${EXAM_TOTAL}</strong> richtigen Antworten. „Geht gerade noch“ zählt hier nicht.</p>
        <div class="summary-buttons" style="margin-top:16px">
          <button class="btn btn-primary btn-large" onclick="startExam()">🎓 Zur Prüfung!</button>
          <button class="btn btn-secondary" onclick="state.overlay=null;render()">Noch nicht</button>
        </div>
      </div>
    </div>`;
}

function renderExamResultOverlay() {
  const d = state.overlayData;
  const body = d.passed
    ? `<div class="fb-icon">⭐⭐⭐</div>
       <h3>Bestanden!</h3>
       <p class="fb-explanation">${d.correct} von ${d.total} richtig. Der Michelin-Tester legt die Serviette zusammen, nickt – und lächelt.
       Chef Beaumont muss sich setzen: <em>„Der dritte Stern. Sie haben es geschafft.“</em></p>
       <button class="btn btn-primary btn-large" onclick="startEnding()">🎬 Feierabend!</button>`
    : `<div class="fb-icon">😓</div>
       <h3>Knapp daneben …</h3>
       <p class="fb-explanation">${d.correct} von ${d.total} richtig – ${EXAM.passMark} hätten es sein müssen.
       Chef Beaumont: <em>„Kein Drama. Der Tester kommt wieder. Üben Sie noch eine Schicht.“</em></p>
       <button class="btn btn-primary" onclick="state.overlay=null;endShift()">Weiter üben</button>`;
  return `
    <div class="overlay-backdrop">
      <div class="feedback-card exam-card ${d.passed ? 'fb-correct' : 'fb-wrong'}">${body}</div>
    </div>`;
}

// ===== KARRIERE-STATISTIK & PUNKTE =====
function getCareerStats() {
  const p = state.player;
  const s = p.stats;
  const shifts = p.shiftsCompleted.reduce((a, b) => a + b, 0);
  const accuracy = s.answered ? s.correct / s.answered : 0;
  let favWine = null, best = 0;
  for (const [id, k] of Object.entries(p.wineKnowledge)) {
    if (k.correct > best && WINES[id]) { best = k.correct; favWine = WINES[id]; }
  }
  return { shifts, guests: s.answered, accuracy, favorites: s.favorites, tipsTotal: s.tipsTotal, favWine, examAttempts: p.examAttempts };
}

// Punkte = Treffsicherheit + beste Wahlen + Trinkgeld + Prüfungsbonus − Bummelei
function computeScore() {
  const c = getCareerStats();
  const parts = [
    { label: `Trefferquote ${Math.round(c.accuracy * 100)} %`, pts: Math.round(c.accuracy * 1000) },
    { label: `${c.favorites}× beste Wahl`, pts: c.favorites * 25 },
    { label: `${c.tipsTotal} € Trinkgeld`, pts: Math.round(c.tipsTotal / 2) },
    { label: `Prüfung im ${c.examAttempts}. Versuch`, pts: [0, 300, 200, 100][c.examAttempts] || 0 },
    { label: `${c.shifts} Schichten (ab 20: −15 je Schicht)`, pts: -Math.max(0, c.shifts - 20) * 15 },
  ];
  return { parts, total: Math.max(0, parts.reduce((a, p) => a + p.pts, 0)) };
}

// ===== ABSPANN (Parallax) =====
const ENDING_SECONDS = 70;

// Fassaden im Abspann – gestaffelt nach Etagen. scale = Anzeigegröße der Bilddatei,
// anchor = Wandpunkt fürs Schild (Pixel im Fassadenbild), signMountY = Montagepunkt im Schildbild (480×480).
const ENDING_FACADES = {
  imbiss:         { w: 1300, h: 1000, scale: 0.46,  anchor: [1237, 560], signMountY: 156 },  // 1 Etage
  steakhaus:      { w: 1300, h: 1000, scale: 0.61,  anchor: [1133, 610], signMountY: 122 },  // 2 Etagen
  gutbuergerlich: { w: 1300, h: 1000, scale: 0.87,  anchor: [1106, 455], signMountY: 106 },  // 2,5 Etagen
  gehoben:        { w: 1300, h: 1000, scale: 0.76,  anchor: [1048, 300], signMountY: 105 },  // 2 Etagen, etwas stattlicher
  sterne:         { w: 2400, h: 800,  scale: 0.577, anchor: [2255, 330], signMountY: 141 },  // breiter Bungalow
};
const ENDING_SIGN_WIDTH = 190;   // alle Schilder gleich groß

function startEnding() {
  state.currentShift = null;
  state.currentQuestion = null;
  state.currentGuest = null;
  goToScene('ending');
}

function finishEnding() {
  if (state.scene !== 'ending') return;
  goToScene('highscore', { highscoreMode: state.player.highscoreEntered ? 'view' : 'entry' });
}

function renderEnding() {
  const c = getCareerStats();
  const facades = CONFIG.levels.map(lv => {
    const f = ENDING_FACADES[lv.id];
    const w = Math.round(f.w * f.scale), h = Math.round(f.h * f.scale);
    const k = ENDING_SIGN_WIDTH / 480;
    const signLeft = Math.round(f.anchor[0] * f.scale), signTop = Math.round(f.anchor[1] * f.scale - f.signMountY * k);
    return `<div class="ending-facade-wrap" style="width:${w}px;height:${h}px">
        <img class="ending-facade" src="assets/ending/facade_${lv.id}.png" alt="${lv.shortName}" onerror="this.style.visibility='hidden'">
        <img class="ending-sign" src="assets/ending/sign_${lv.id}.png" alt="" style="left:${signLeft}px;top:${signTop}px;width:${ENDING_SIGN_WIDTH}px" onerror="this.style.display='none'">
      </div>`;
  }).join('');
  const chefs = CONFIG.levels.map(lv => `<p>${CHEFS[lv.id].name} <span>– ${lv.name}</span></p>`).join('');
  const artists = [...new Set(Object.values(typeof PLAYLISTS !== 'undefined' ? PLAYLISTS : {}).flat().map(s => s.artist).filter(Boolean))];

  return `
    <div class="scene scene-ending active" style="--ending-s:${ENDING_SECONDS}s">
      <div class="pl pl-sky"></div>
      <div class="pl pl-skyline"></div>
      <div class="ending-facades">${facades}</div>
      <div class="pl pl-street"></div>
      <div class="ending-walker"></div>

      <div class="credits-viewport">
        <div class="credits-roll" onanimationend="finishEnding()">
          <h1>DER SOMMELIER</h1>
          <p class="cr-big">Herzlichen Glückwunsch!</p>
          <p>Vom Imbiss bis zum dritten Michelin-Stern.</p>

          <h2>Deine Karriere</h2>
          <p>${c.shifts} Schichten · ${c.guests} Gäste beraten</p>
          <p>${Math.round(c.accuracy * 100)} % Trefferquote · ${c.favorites}× die beste Wahl</p>
          <p>${c.tipsTotal} € Trinkgeld eingesammelt</p>
          ${c.favWine ? `<p>Dein Lieblingswein: ${c.favWine.name}</p>` : ''}

          <h2>Deine Chefs</h2>
          ${chefs}

          <h2>Stammgäste</h2>
          <p>Herr Bergmann & Lisa – von Anfang an dabei</p>
          <p>Oma Hildegard, Stavros, der Jäger, Madame Dupont</p>
          <p>… und der Michelin-Tester, der nie lächelt (fast nie)</p>

          <h2>Ein Spiel von</h2>
          <p>Sebastian Stüwe</p>
          <h2>Grafik</h2>
          <p>Pixel-Art mit FLUX (Black Forest Labs)</p>
          ${artists.length ? `<h2>Musik</h2><p>${artists.join(' · ')}</p><p><span>via Pixabay</span></p>` : ''}
          <h2>Schriften</h2>
          <p>Press Start 2P · Inter</p>

          <p class="cr-big cr-end">Danke fürs Spielen – Prost! 🍷</p>
        </div>
      </div>
      <button class="btn btn-secondary ending-skip" onclick="finishEnding()">Überspringen →</button>
    </div>`;
}

// ===== BESTENLISTE (Spielautomaten-Stil) =====
const HS_KEY = 'sommelier_highscores';
const HS_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// Die Chefs stehen schon drin – wie im Automaten in der Kneipe
const HS_DEFAULTS = [
  { name: 'BEA', score: 1800 }, { name: 'LAU', score: 1500 }, { name: 'LIN', score: 1200 },
  { name: 'MIK', score: 900 }, { name: 'KOS', score: 600 },
];
let hsEntry = null;   // { letters: [0,0,0], slot: 0, score, done, newIndex }

function loadHighscores() {
  let list = [];
  try { list = JSON.parse(localStorage.getItem(HS_KEY)) || []; } catch (e) {}
  if (!Array.isArray(list)) list = [];
  // nur gültige Einträge (Name wird als HTML ausgegeben → strenger Zeichensatz)
  list = list.filter(e => e && /^[A-Z0-9]{3}$/.test(e.name) && Number.isFinite(e.score));
  if (!list.length) list = HS_DEFAULTS.map(e => ({ ...e, chef: true }));
  return list.sort((a, b) => b.score - a.score).slice(0, 10);
}

function saveHighscores(list) {
  try { localStorage.setItem(HS_KEY, JSON.stringify(list)); } catch (e) {}
}

function hsChangeLetter(slot, delta) {
  const l = hsEntry.letters;
  l[slot] = (l[slot] + delta + HS_CHARS.length) % HS_CHARS.length;
  hsEntry.slot = slot;
  Sound.play('jump');
  render();
}

function hsSubmit() {
  if (!hsEntry || hsEntry.done) return;
  const name = hsEntry.letters.map(i => HS_CHARS[i]).join('');
  const list = loadHighscores();
  const entry = { name, score: hsEntry.score, date: new Date().toISOString().slice(0, 10), isNew: true };
  list.push(entry);
  list.sort((a, b) => b.score - a.score);
  const top = list.slice(0, 10);
  hsEntry.done = true;
  hsEntry.newIndex = top.indexOf(entry);
  saveHighscores(top.map(({ isNew, ...e }) => e));
  state.player.highscoreEntered = true;
  saveGame();
  Sound.play(hsEntry.newIndex >= 0 ? 'fanfare' : 'cork');
  render();
}

function renderHighscore() {
  const entryMode = state.highscoreMode === 'entry' && !state.player.highscoreEntered || (hsEntry && hsEntry.done);
  if (entryMode && !hsEntry) hsEntry = { letters: [0, 0, 0], slot: 0, score: computeScore().total, done: false, newIndex: -1 };
  if (!entryMode) hsEntry = null;

  const list = loadHighscores();
  // nach dem Eintragen: neuen Eintrag in der Tabelle hervorheben
  const rows = Array.from({ length: 10 }, (_, i) => {
    const e = list[i];
    const isNew = hsEntry && hsEntry.done && i === hsEntry.newIndex;
    return `<tr class="${isNew ? 'hs-new' : ''}">
      <td>${i + 1}.</td><td>${e ? e.name : '---'}</td><td>${e ? String(e.score).padStart(5, '0') : '-----'}</td>
    </tr>`;
  }).join('');

  let entryHtml = '';
  if (hsEntry && !hsEntry.done) {
    const sc = computeScore();
    entryHtml = `
      <div class="hs-new-score">
        <div class="hs-blink">NEW HIGHSCORE?</div>
        <div class="hs-score">${String(sc.total).padStart(5, '0')}</div>
        <table class="hs-breakdown">${sc.parts.map(p => `<tr><td>${p.label}</td><td>${p.pts >= 0 ? '+' : ''}${p.pts}</td></tr>`).join('')}</table>
      </div>
      <div class="hs-name-entry">
        ${hsEntry.letters.map((li, slot) => `
          <div class="hs-slot ${slot === hsEntry.slot ? 'active' : ''}">
            <button class="hs-arrow" onclick="hsChangeLetter(${slot}, 1)">▲</button>
            <div class="hs-letter">${HS_CHARS[li]}</div>
            <button class="hs-arrow" onclick="hsChangeLetter(${slot}, -1)">▼</button>
          </div>`).join('')}
        <button class="btn btn-primary btn-large hs-ok" onclick="hsSubmit()">EINTRAGEN</button>
      </div>`;
  } else if (hsEntry && hsEntry.done && hsEntry.newIndex < 0) {
    entryHtml = `<p class="hs-note">${String(hsEntry.score).padStart(5, '0')} Punkte – knapp nicht in den Top 10. Die Chefs sind zäh!</p>`;
  }

  const fromTitle = !state.player.examPassed && !hsEntry;
  return `
    <div class="scene scene-highscore active">
      <div class="hs-cabinet">
        <h1 class="hs-title">🏆 BESTENLISTE 🏆</h1>
        ${entryHtml}
        <table class="hs-table"><tr><th>#</th><th>NAME</th><th>PUNKTE</th></tr>${rows}</table>
        ${!hsEntry || hsEntry.done ? `<div class="summary-buttons hs-buttons">
          ${state.player.examPassed ? `<button class="btn btn-primary" onclick="hsEntry=null;goToScene('restaurant')">🍷 Weiter im Étoile</button>` : ''}
          <button class="btn btn-secondary" onclick="hsEntry=null;goToScene('title')">${fromTitle ? '← Zurück' : 'Zum Titel'}</button>
        </div>` : ''}
        <p class="hs-insert-coin">INSERT COIN · PROST · INSERT COIN</p>
      </div>
    </div>`;
}
