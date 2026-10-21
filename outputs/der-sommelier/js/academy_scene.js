// ============================================================
// DER SOMMELIER — Akademie (Madame Duvin) & Weinvorstellung der Chefs
// Inhalte: js/academy.js (ACADEMY, CHEF_WINE_INTROS, SHIFT_PLAN, CHEF_SHIFT_LINES, FACT_WINE_TAGS)
// ============================================================

const ACADEMY_PAUSE_MS = 1800;   // Box blendet zwischen den Lektionen kurz aus – das Wissen soll "einsinken"

// ===== AKADEMIE: Ablauf =====
// step: 'intro' → je Lektion 'lesson' → 'exercise' (bis richtig) → Pause → … → 'outro'
// Wer bei einer Übung zweimal danebenliegt, bekommt danach eine Zusatzübung (lesson.extra).
const ACADEMY_EXTRA_AFTER_WRONG = 2;

function startAcademy() {
  state.scene = 'academy';
  state.academy = { step: 'intro', lesson: 0, tried: [], solved: false, pausing: false, extra: false };
  state.overlay = null;
  render();
}

function academyDay() {
  return ACADEMY[getLevel().id];
}

function academyNext() {
  const a = state.academy, day = academyDay();
  if (a.step === 'intro') { a.step = 'lesson'; render(); return; }
  if (a.step === 'lesson') { a.step = 'exercise'; a.tried = []; a.solved = false; a.extra = false; render(); return; }
  if (a.step === 'exercise' && a.solved) {
    // Zweimal daneben? Dann noch eine Übung zum gleichen Thema, bevor es weitergeht
    const lesson = day.lessons[a.lesson];
    const wrongs = a.tried.filter(i => !currentExercise().options[i].correct).length;
    if (!a.extra && lesson.extra && wrongs >= ACADEMY_EXTRA_AFTER_WRONG) {
      a.extra = true; a.tried = []; a.solved = false;
      render();
      return;
    }
    // kurze Pause: Box blendet aus, Madame & Keller bleiben stehen
    a.pausing = true;
    render();
    setTimeout(() => {
      if (state.scene !== 'academy') return;
      a.pausing = false;
      if (a.lesson < day.lessons.length - 1) { a.lesson++; a.step = 'lesson'; }
      else a.step = 'outro';
      render();
    }, ACADEMY_PAUSE_MS);
  }
}

function currentExercise() {
  const lesson = academyDay().lessons[state.academy.lesson];
  return state.academy.extra && lesson.extra ? lesson.extra : lesson.exercise;
}

function academyAnswer(i) {
  const a = state.academy;
  if (a.solved || a.tried.includes(i)) return;
  const opt = currentExercise().options[i];
  a.tried.push(i);
  if (opt.correct) { a.solved = true; Sound.play('pling'); }
  else Sound.play('wrong');
  render();
}

function finishAcademy() {
  state.player.academyDone[state.player.level] = true;
  state.academy = null;
  saveGame();
  goToScene('restaurant', { showChefIntro: !state.player.chefIntroSeen[state.player.level] });
}

// ===== AKADEMIE: Darstellung =====
function renderAcademy() {
  const a = state.academy, day = academyDay();
  const lesson = day.lessons[a.lesson];
  let hud = '🎓 Akademie';
  let body = '';

  if (a.step === 'intro') {
    body = `
      <div class="dialog-header"><span class="dialog-guest">🍷 Madame Duvin</span><span class="dialog-type-badge ak-badge">AKADEMIE</span></div>
      <h3 class="ak-title">${day.title}</h3>
      <div class="dialog-body"><p class="dialog-scenario">${day.intro}</p></div>
      <button class="btn btn-primary btn-large" onclick="academyNext()">Bonjour, Madame! →</button>`;
  } else if (a.step === 'outro') {
    body = `
      <div class="dialog-header"><span class="dialog-guest">🍷 Madame Duvin</span><span class="dialog-type-badge ak-badge">AKADEMIE</span></div>
      <div class="dialog-body"><p class="dialog-scenario">${day.outro}</p></div>
      <button class="btn btn-primary btn-large" onclick="finishAcademy()">${getLevel().icon} Ab ins ${getLevel().shortName} →</button>`;
  } else {
    hud = `🎓 Akademie · Lektion ${a.lesson + 1}/${day.lessons.length}`;
    const header = `<div class="dialog-header"><span class="dialog-guest">🍷 Madame Duvin</span><span class="dialog-type-badge ak-badge">LEKTION ${a.lesson + 1}</span></div>
      <h3 class="ak-title">${lesson.title}</h3>`;
    if (a.step === 'lesson') {
      body = `${header}
        <div class="dialog-body"><p class="dialog-scenario">${lesson.text}</p></div>
        <button class="btn btn-primary btn-large" onclick="academyNext()">Verstanden – zur Übung →</button>`;
    } else {
      const ex = currentExercise();
      const label = ex.type === 'label' ? renderWineLabel(ex.label) : '';
      const extraIntro = a.extra ? '<p class="ak-extra">„Noch eine – damit es sitzt.“</p>' : '';
      const opts = ex.options.map((o, i) => {
        const tried = a.tried.includes(i);
        const cls = tried ? (o.correct ? ' correct' : ' wrong') : '';
        return `<button class="dialog-choice${cls}" ${tried || a.solved ? 'disabled' : ''} onclick="academyAnswer(${i})">
          <span class="choice-wine">${o.text}</span></button>`;
      }).join('');
      const last = a.tried.length ? ex.options[a.tried[a.tried.length - 1]] : null;
      const feedback = last ? `<div class="ak-feedback ${last.correct ? 'ok' : 'nope'}">
          <span class="ak-feedback-who">Madame Duvin:</span> ${last.feedback}
          ${last.correct ? '' : '<div class="ak-retry">Versuchen Sie es noch einmal.</div>'}
        </div>` : '';
      body = `${header}
        ${extraIntro}
        ${label}
        <div class="dialog-body"><p class="dialog-question">${ex.question}</p></div>
        <div class="dialog-choices">${opts}</div>
        ${feedback}
        ${a.solved ? '<button class="btn btn-primary" onclick="academyNext()">Weiter →</button>' : ''}`;
    }
  }

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/academy/hintergrund_4x3.png')"></div>
          <div class="guest-sprite-area"><img class="guest-sprite" src="assets/academy/madame_duvin.png" alt="Madame Duvin"></div>
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/academy/theke.png')"></div>
          <div class="shift-hud"><div class="hud-item">${hud}</div></div>
          <div class="dialog-container">
            <div class="dialog-box dialog-academy ${a.pausing ? 'ak-pausing' : 'ak-enter'}">${body}</div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// Erfundenes Weinetikett für die Etikett-Übungen
function renderWineLabel(l) {
  return `<div class="wine-label">
      <div class="wl-producer">${l.producer || ''}</div>
      <div class="wl-wine">${l.wine || ''}</div>
      <div class="wl-region">${l.region || ''}</div>
      ${l.color ? `<div class="wl-color">${l.color}</div>` : ''}
      ${l.quality ? `<div class="wl-quality">${l.quality}</div>` : ''}
      <div class="wl-bottom">
        <span>${l.vintage || ''}</span>
        <span>${l.sweetness || ''}</span>
        <span>${l.alcohol || ''}</span>
      </div>
    </div>`;
}

// ===== CHEF STELLT WEINE VOR (vor Schicht 1–3) =====
// Gibt die Weine zurück, die vor der Schicht mit Index shiftNo (0-basiert) vorgestellt werden.
function winesForShift(levelId, shiftNo) {
  const plan = SHIFT_PLAN[levelId] || [];
  return plan[shiftNo] || [];
}

function isWineKnown(id) {
  const w = WINES[id];
  if (!w) return false;
  return w.level < state.player.level || state.player.introducedWines.includes(id);
}

function renderChefWinesOverlay() {
  const d = state.overlayData, lv = getLevel(), chef = CHEFS[lv.id];
  const cards = d.wines.map(id => {
    const w = WINES[id];
    const dot = w.color === 'rot' ? '🔴' : w.color === 'weiss' ? '⚪' : '🩷';
    return `<div class="cw-card">
        <img class="cw-bottle" src="${w.label}" alt="" onerror="this.style.display='none'">
        <div class="cw-info">
          <div class="cw-name">${dot} ${w.name}</div>
          <div class="cw-profile">${w.sweetness} · Körper ${w.body} · ${w.flavors.slice(0, 3).join(', ')}</div>
          <p class="cw-text">${CHEF_WINE_INTROS[id] || w.description}</p>
        </div>
      </div>`;
  }).join('');
  return `
    <div class="overlay-backdrop">
      <div class="chef-wines-card">
        <div class="cw-head">
          <img class="cw-chef" src="${chef.sprite}" alt="${chef.name}" onerror="this.style.display='none'">
          <div><div class="cw-chef-name">${chef.name}</div><div class="cw-line">„${d.line}“</div></div>
        </div>
        <div class="cw-subtitle">Neu im Keller:</div>
        ${cards}
        <button class="btn btn-primary btn-large" onclick="state.overlay=null;state.overlayData=null;render()">Verstanden, Chef! Los geht's →</button>
      </div>
    </div>`;
}
