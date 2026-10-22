// ============================================================
// DER SOMMELIER — Game Engine
// ============================================================

// Testcodes ABSPANN / PRUEFUNG im Levelcode-Feld – nur für Tests auf true setzen
const DEV_TEST_CODES = false;

// ===== GAME STATE =====
let state = {
  scene: 'title',       // title, map, restaurant, region, book, cellar, academy, ...
  player: {
    level: 0,
    tips: 0,             // Trinkgeld (ehemals XP)
    reputation: [0, 0, 0, 0, 0],
    wineKnowledge: {},   // wineId → { seen, correct }
    discoveredWines: new Set(),
    chefIntroSeen: [false, false, false, false, false],
    shiftsCompleted: [0, 0, 0, 0, 0],
    questionHistory: {},   // questionId → { seen: N, correct: N, wrong: N }
  },
  currentShift: null,
  currentQuestion: null,
  currentGuest: null,    // { name, sprite }
  selectedRegion: null,
  explorerWineIndex: 0,
  showChefIntro: false,
  overlay: null,
  overlayData: null,
  consecutiveWrong: 0,
  beratungState: null,
};

// ===== HELPERS =====
function getLevel() { return CONFIG.levels[state.player.level]; }
function getNextLevel() { return CONFIG.levels[state.player.level + 1] || null; }
function getTipProgress() {
  const lv = getLevel();
  return Math.min(100, Math.round(((state.player.tips - lv.xpNeeded) / (lv.xpToNext - lv.xpNeeded)) * 100));
}
function getUnlockedRegionIds() {
  const ids = [];
  for (let i = 0; i <= state.player.level; i++) {
    ids.push(...CONFIG.levels[i].unlockRegions);
  }
  return ids;
}
function getAvailableWineIds() {
  return Object.values(WINES).filter(w => w.level <= state.player.level).map(w => w.id);
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ===== SAVE / LOAD =====
function saveGame() {
  try {
    const saveData = {
      player: {
        ...state.player,
        discoveredWines: [...state.player.discoveredWines],
      },
      version: 3,
    };
    localStorage.setItem('sommelier_v3', JSON.stringify(saveData));
  } catch(e) { console.warn('Save failed', e); }
}

// Spielstand prüfen und bereinigen: kaputte oder manipulierte Werte dürfen
// weder abstürzen lassen noch als HTML im Spiel landen.
function sanitizePlayer(p) {
  const n = CONFIG.levels.length;
  const num = (v, min, max) => (typeof v === 'number' && isFinite(v)) ? Math.max(min, Math.min(max, Math.round(v))) : min;
  const arr = (a, fn) => Array.from({ length: n }, (_, i) => fn(Array.isArray(a) ? a[i] : undefined));
  const counts = (src, keys) => {
    const out = {};
    if (src && typeof src === 'object') {
      for (const [id, v] of Object.entries(src)) {
        if (!v || typeof v !== 'object') continue;
        out[id] = {};
        keys.forEach(k => { out[id][k] = num(v[k], 0, 1e6); });
      }
    }
    return out;
  };
  return {
    level: num(p.level, 0, n - 1),
    tips: num(p.tips !== undefined ? p.tips : p.xp, 0, 1e7),
    reputation: arr(p.reputation, v => num(v, 0, 100)),
    wineKnowledge: Object.fromEntries(Object.entries(counts(p.wineKnowledge, ['seen', 'correct'])).filter(([id]) => WINES[id])),
    discoveredWines: new Set((Array.isArray(p.discoveredWines) ? p.discoveredWines : []).filter(id => WINES[id])),
    chefIntroSeen: arr(p.chefIntroSeen, v => v === true),
    shiftsCompleted: arr(p.shiftsCompleted, v => num(v, 0, 1e6)),
    questionHistory: counts(p.questionHistory, ['seen', 'correct', 'wrong']),
    // Karriere-Statistik & Spielende
    stats: counts({ s: p.stats }, ['answered', 'correct', 'favorites', 'tipsTotal']).s || { answered: 0, correct: 0, favorites: 0, tipsTotal: 0 },
    examPassed: p.examPassed === true,
    examAttempts: num(p.examAttempts, 0, 1e4),
    highscoreEntered: p.highscoreEntered === true,
    // Akademie & vom Chef vorgestellte Weine (alte Spielstände: frühere Level gelten als besucht)
    academyDone: arr(p.academyDone, v => v === true).map((v, i) => Array.isArray(p.academyDone) ? v : i < num(p.level, 0, n - 1)),
    introducedWines: (Array.isArray(p.introducedWines) ? p.introducedWines : []).filter(id => WINES[id]),
  };
}

function loadGame() {
  try {
    // Try v3 first
    let raw = localStorage.getItem('sommelier_v3');
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.version === 3 && data.player) {
        state.player = sanitizePlayer(data.player);
        return true;
      }
    }
    // Migrate from v2
    raw = localStorage.getItem('sommelier_v2');
    if (raw) {
      const data = JSON.parse(raw);
      if (data && data.version === 2 && data.player) {
        state.player = sanitizePlayer({
          ...data.player,
          tips: data.player.xp || 0,
          chefIntroSeen: [], shiftsCompleted: [], questionHistory: {},
        });
        // Mark current level's chef as seen if player has progressed
        for (let i = 0; i < state.player.level; i++) {
          state.player.chefIntroSeen[i] = true;
        }
        saveGame(); // Save as v3
        return true;
      }
    }
    return false;
  } catch(e) { return false; }
}

function hasSave() {
  try {
    return !!(localStorage.getItem('sommelier_v3') || localStorage.getItem('sommelier_v2'));
  } catch(e) { return false; }
}

// ===== CHEF INTRO =====
function checkChefIntro() {
  const lv = state.player.level;
  if (!state.player.chefIntroSeen[lv]) {
    state.showChefIntro = true;
    render();
    return true;
  }
  return false;
}

function dismissChefIntro(then) {
  state.player.chefIntroSeen[state.player.level] = true;
  state.showChefIntro = false;
  // Die Akademie war schon – nach dem Chef-Intro stellt der Chef gleich die Weine für Schicht 1 vor
  const newWines = introduceShiftWines();
  saveGame();
  goToScene('restaurant');
  if (newWines.length) { showChefWines(newWines, then); render(); }
  else if (then) goToScene(then);
}

// ===== GUEST ASSIGNMENT =====
function assignGuestToQuestion(q, level) {
  // If question has a specific guestId, use it
  if (q.data && q.data.guestId) {
    const info = getGuestInfo(q.data.guestId, level);
    if (info) return info;
  }
  // Otherwise pick a random guest from the level pool
  return getRandomGuest(level);
}

function getRandomGuest(level, excludeNames = []) {
  const pool = [];
  // Add recurring guests (with level-appropriate sprite)
  GUESTS.recurring.forEach(g => {
    pool.push(guestView(g, g.sprites[level] || g.sprites[0]));
  });
  // Add level-specific guests
  const levelGuests = GUESTS.byLevel[level] || [];
  levelGuests.forEach(g => {
    pool.push(guestView(g, g.sprite));
  });
  const fresh = pool.filter(g => !excludeNames.includes(g.name));
  return pick(fresh.length ? fresh : pool);
}

// ===== GAME ACTIONS =====
// "Neues Spiel" bei vorhandenem Spielstand erst bestätigen lassen
function requestNewGame() {
  if (!hasSave()) { startNewGame(); return; }
  state.overlay = 'confirmNewGame';
  render();
}

function cancelNewGame() {
  state.overlay = null;
  render();
}

function startNewGame() {
  state = {
    scene: 'restaurant',
    player: {
      level: 0, tips: 0,
      reputation: [0, 0, 0, 0, 0],
      wineKnowledge: {},
      discoveredWines: new Set(),
      chefIntroSeen: [false, false, false, false, false],
      shiftsCompleted: [0, 0, 0, 0, 0],
      questionHistory: {},
      stats: { answered: 0, correct: 0, favorites: 0, tipsTotal: 0 },
      examPassed: false, examAttempts: 0, highscoreEntered: false,
      academyDone: [false, false, false, false, false],
      introducedWines: [],
    },
    currentShift: null,
    currentQuestion: null,
    currentGuest: null,
    selectedRegion: null,
    explorerWineIndex: -1,
    showChefIntro: true,  // Chef intro first, then explorer
    overlay: null,
    overlayData: null,
    consecutiveWrong: 0,
    beratungState: null,
  };
  saveGame();
  render();
}

function showLevelCodeInput() {
  const el = document.getElementById('levelcode-input');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (el.style.display === 'block') {
      const field = document.getElementById('levelcode-field');
      if (field) { field.value = ''; field.focus(); }
      const err = document.getElementById('levelcode-error');
      if (err) err.style.display = 'none';
    }
  }
}

function tryLevelCode() {
  const field = document.getElementById('levelcode-field');
  if (!field || !field.value.trim()) return;
  const success = startFromCode(field.value);
  if (!success) {
    const err = document.getElementById('levelcode-error');
    if (err) err.style.display = 'block';
  }
}

function startFromCode(code) {
  const upperCode = code.trim().toUpperCase();
  // TESTCODES (ABSPANN = direkt zum Abspann, PRUEFUNG = Étoile mit Prüfung) – im Release aus
  if (DEV_TEST_CODES && (upperCode === 'ABSPANN' || upperCode === 'PRUEFUNG')) {
    startNewGame();
    const last = CONFIG.levels.length - 1;
    state.player.level = last;
    state.player.tips = CONFIG.levels[last].xpToNext;
    state.player.chefIntroSeen = state.player.chefIntroSeen.map(() => true);
    state.player.academyDone = state.player.academyDone.map(() => true);
    state.player.introducedWines = Object.keys(WINES);
    Object.values(WINES).forEach(w => state.player.discoveredWines.add(w.id));
    state.player.shiftsCompleted = [4, 4, 5, 5, 6];
    state.player.stats = { answered: 120, correct: 98, favorites: 41, tipsTotal: 1240 };
    state.showChefIntro = false;
    if (upperCode === 'ABSPANN') {
      state.player.examPassed = true;
      state.player.examAttempts = 1;
      saveGame();
      startEnding();
    } else {
      saveGame();
      render();
    }
    return true;
  }
  const lvIndex = CONFIG.levels.findIndex(l => l.levelCode && l.levelCode === upperCode);
  if (lvIndex < 0) return false;
  startNewGame();
  state.player.level = lvIndex;
  state.player.tips = CONFIG.levels[lvIndex].xpNeeded;
  for (let i = 0; i < lvIndex; i++) { state.player.chefIntroSeen[i] = true; state.player.academyDone[i] = true; }
  // Weine der übersprungenen Level gelten als bekannt
  Object.values(WINES).filter(w => w.level < lvIndex).forEach(w => state.player.discoveredWines.add(w.id));
  state.showChefIntro = true;
  saveGame();
  render();
  return true;
}

function continueGame() {
  if (loadGame()) {
    state.scene = 'restaurant';
    state.currentShift = null;
    state.currentQuestion = null;
    state.showChefIntro = false;
    // Check if chef intro needs showing
    checkChefIntro();
    if (!state.showChefIntro) render();
  }
}

// ===== RESTAURANT SWITCH (Downgrade) =====
function switchRestaurant(targetLevel) {
  const current = state.player.level;
  if (targetLevel === current) return;
  if (targetLevel > current) return; // should not happen (locked)

  // Going DOWN — show confirmation overlay
  state.overlay = 'downgrade';
  state.overlayData = { targetLevel };
  render();
}

function confirmDowngrade(targetLevel) {
  state.player.level = targetLevel;
  state.player.tips = CONFIG.levels[targetLevel].xpNeeded;
  state.player.reputation[targetLevel] = 0;
  // Mark previous chef intros as seen
  for (let i = 0; i < targetLevel; i++) state.player.chefIntroSeen[i] = true;
  state.player.chefIntroSeen[targetLevel] = false;
  state.currentShift = null;
  state.currentQuestion = null;
  state.currentGuest = null;
  state.beratungState = null;
  state.showChefIntro = true;
  state.overlay = null;
  state.overlayData = null;
  saveGame();
  render();
}

function cancelDowngrade() {
  state.overlay = null;
  state.overlayData = null;
  render();
}

function goToScene(scene, data) {
  state.scene = scene;
  state.overlay = null;
  state.overlayData = null;
  state.showChefIntro = false;
  state.explorerNewOnly = false;
  state.highscoreMode = null;
  if (data) Object.assign(state, data);
  render();
}

// ===== EXPLORER MODE =====
// ===== SHIFT SYSTEM =====
function startShift() {
  const levelId = getLevel().id;
  const questionPool = QUESTIONS[levelId];
  if (!questionPool) return;

  const level = state.player.level;
  const allQuestions = [];

  // Collect all question types
  if (questionPool.food_pairing) questionPool.food_pairing.forEach(q => allQuestions.push({ type: 'food_pairing', data: q }));
  if (questionPool.preference) questionPool.preference.forEach(q => allQuestions.push({ type: 'preference', data: q }));
  if (questionPool.besserwisser) questionPool.besserwisser.forEach(q => allQuestions.push({ type: 'besserwisser', data: q }));
  if (questionPool.weinwissen) questionPool.weinwissen.forEach(q => allQuestions.push({ type: 'weinwissen', data: q }));
  if (questionPool.blindtasting) questionPool.blindtasting.forEach(q => allQuestions.push({ type: 'blindtasting', data: q }));
  if (questionPool.beratung) questionPool.beratung.forEach(q => allQuestions.push({ type: 'beratung', data: q }));

  const newWines = introduceShiftWines();
  const unlocked = allQuestions.filter(isQuestionUnlocked);
  const pool = unlocked.length >= CONFIG.questionsPerShift ? unlocked : allQuestions;

  // Smart rotation: unseen → wrong → seen (least-seen first).
  // Ungesehene Fragen, deren Themen-Geschwister schon dran war, rücken nach hinten.
  const hist = state.player.questionHistory;
  const topicOf = id => QUESTION_TOPICS.findIndex(group => group.includes(id));
  const siblingSeen = q => { const t = topicOf(q.data.id); return t >= 0 && QUESTION_TOPICS[t].some(id => id !== q.data.id && hist[id]); };
  const unseen = shuffle(pool.filter(q => !hist[q.data.id] && !siblingSeen(q)));
  const unseenSibling = shuffle(pool.filter(q => !hist[q.data.id] && siblingSeen(q)));
  const wrong = shuffle(pool.filter(q => hist[q.data.id] && hist[q.data.id].wrong > hist[q.data.id].correct));
  const seen = shuffle(pool.filter(q => hist[q.data.id] && hist[q.data.id].correct >= hist[q.data.id].wrong));
  seen.sort((a, b) => (hist[a.data.id]?.seen || 0) - (hist[b.data.id]?.seen || 0));
  const prioritized = [...unseen, ...wrong, ...unseenSibling, ...seen];

  // Auswahl: höchstens maxPerTypePerShift je Typ, je Thema & je Gast nur eine Frage,
  // und – falls das Level Beratungen hat – garantiert eine Beratung pro Schicht.
  const selected = [];
  const perType = {}, topics = new Set(), guests = new Set();
  const fits = (q, strictType) => {
    if (selected.includes(q)) return false;
    if (strictType && (perType[q.type] || 0) >= CONFIG.maxPerTypePerShift) return false;
    const t = topicOf(q.data.id);
    if (t >= 0 && topics.has(t)) return false;
    if (q.data.guestId && guests.has(q.data.guestId)) return false;
    return true;
  };
  const take = q => {
    selected.push(q);
    perType[q.type] = (perType[q.type] || 0) + 1;
    const t = topicOf(q.data.id); if (t >= 0) topics.add(t);
    if (q.data.guestId) guests.add(q.data.guestId);
  };
  // Ab dem 2. Restaurant: ein Gast aus einem früheren Restaurant als Wiederholung
  const review = level > 0 ? pickReviewQuestion(level) : null;
  const target = CONFIG.questionsPerShift - (review ? 1 : 0);
  if (review && review.data.guestId) guests.add(review.data.guestId);   // Gast der Wiederholung kommt nicht doppelt
  const beratung = prioritized.find(q => q.type === 'beratung');
  if (beratung) take(beratung);
  for (const strict of [true, false]) {
    for (const q of prioritized) {
      if (selected.length >= target) break;
      if (fits(q, strict)) take(q);
    }
  }
  // Notfall (sehr kleiner Pool): ohne Gast-/Themenregel auffüllen
  for (const q of prioritized) {
    if (selected.length >= target) break;
    if (!selected.includes(q)) selected.push(q);
  }
  if (review) selected.push(review);
  shuffleInPlace(selected);

  // Kopie der Fragedaten (Originale bleiben unverändert), Weinoptionen auffüllen, Gäste zuweisen –
  // zufällige Gäste nicht doppelt in derselben Schicht
  const usedNames = selected.filter(q => q.data.guestId).map(q => (getGuestInfo(q.data.guestId, level) || {}).name);
  selected.forEach(q => {
    q.data = structuredClone(q.data);
    expandWineOptions(q, level);
    q.guest = q.data.guestId ? assignGuestToQuestion(q, level) : getRandomGuest(level, usedNames);
    usedNames.push(q.guest.name);
  });

  state.currentShift = {
    questions: selected,
    questionIndex: 0,
    correct: 0, wrong: 0, total: 0,
    tipsEarned: 0,
  };
  state.currentQuestion = selected[0];
  state.currentGuest = selected[0].guest;
  state.overlay = null;
  // Chef stellt vor der Schicht die neuen Weine vor
  if (newWines.length) showChefWines(newWines);
  saveGame();
  render();
}

// Vor Schicht 1–3 stellt der Chef neue Weine vor; ab Schicht 4 sind alle Weine des Hauses bekannt.
// Gibt die neu vorgestellten Weine zurück (leer, wenn für die nächste Schicht schon alles bekannt ist).
function introduceShiftWines() {
  const level = state.player.level, levelId = getLevel().id;
  const shiftNo = state.player.shiftsCompleted[level];
  const plan = SHIFT_PLAN[levelId] || [];
  const levelWines = Object.values(WINES).filter(w => w.level === level).map(w => w.id);
  const toIntroduce = shiftNo < plan.length ? plan[shiftNo] : levelWines;
  const newWines = toIntroduce.filter(id => !state.player.introducedWines.includes(id));
  newWines.forEach(id => { state.player.introducedWines.push(id); state.player.discoveredWines.add(id); });
  return newWines;
}

function showChefWines(wines, then) {
  const shiftNo = state.player.shiftsCompleted[state.player.level];
  state.overlay = 'chefWines';
  state.overlayData = { wines, then, line: (CHEF_SHIFT_LINES[getLevel().id] || [])[Math.min(shiftNo, 2)] || '' };
}

function closeChefWines() {
  const then = state.overlayData && state.overlayData.then;
  state.overlay = null;
  state.overlayData = null;
  if (then) goToScene(then); else render();
}

// Darf die Frage schon kommen? Nur zu Weinen, die der Spieler kennt (vorgestellt oder aus früheren Restaurants).
function isQuestionUnlocked(q) {
  const d = q.data;
  if (q.type === 'besserwisser' || q.type === 'weinwissen') {
    const tag = FACT_WINE_TAGS[d.id];
    return !tag || isWineKnown(tag);
  }
  const opts = q.type === 'beratung' ? d.steps[d.steps.length - 1].options : d.options;
  if (q.type === 'blindtasting') return opts.every(o => isWineKnown(o.wineId));   // nur Namen sichtbar → alle müssen bekannt sein
  const fav = opts.find(o => o.favorite) || opts.find(o => o.correct);
  return !fav || isWineKnown(fav.wineId);
}

// Wiederholungsfrage aus einem früheren Restaurant (bevorzugt: früher falsch beantwortet)
function pickReviewQuestion(level) {
  const hist = state.player.questionHistory;
  const cands = [];
  for (let lv = 0; lv < level; lv++) {
    const pool = QUESTIONS[CONFIG.levels[lv].id] || {};
    ['food_pairing', 'preference', 'besserwisser', 'weinwissen'].forEach(type =>
      (pool[type] || []).forEach(q => cands.push({ type, data: q, isReview: true })));
  }
  if (!cands.length) return null;
  const wrong = cands.filter(q => hist[q.data.id] && hist[q.data.id].wrong > hist[q.data.id].correct);
  return pick(wrong.length ? wrong : cands);
}

// ===== SHARED TIP/REP LOGIC =====
function rollDice(sides) { return Math.floor(Math.random() * sides) + 1; }

function applyTipAndRep(isCorrect, isFavorite, isAcceptable) {
  const q = state.currentQuestion;
  let tipGain;
  if (isCorrect) {
    tipGain = 4 + rollDice(6);  // richtig: 5-10€
    if (isFavorite) tipGain += 3;  // Bonus für beste Wahl
  } else if (isAcceptable) {
    tipGain = Math.max(1, Math.round((4 + rollDice(6)) / 3));  // akzeptabel: ~2-3€ (Faktor ×⅓)
  } else {
    tipGain = 0;  // falsch: kein Trinkgeld – der Gast zahlt nur die Rechnung
  }
  // Level-Multiplikator: höheres Level = bessere Gäste = mehr Trinkgeld
  const lvMult = 1 + state.player.level;  // x1, x2, x3, x4, x5
  tipGain = Math.round(tipGain * lvMult * CONFIG.tipFactor);
  if (q && q.hintUsed) tipGain = Math.ceil(tipGain / 2);
  const repGain = isCorrect ? CONFIG.repPerCorrect :
                  isAcceptable ? Math.ceil(CONFIG.repPerCorrect / 2) :
                  CONFIG.repPerWrong;

  state.player.tips += tipGain;
  state.player.reputation[state.player.level] = Math.max(0, Math.min(100,
    state.player.reputation[state.player.level] + repGain));
  state.currentShift.tipsEarned += tipGain;
  if (isCorrect || isAcceptable) { state.currentShift.correct++; state.consecutiveWrong = 0; }
  else {
    state.currentShift.wrong++; state.consecutiveWrong++;
    if (state.consecutiveWrong === 5) Sound.play('beer', 0.5);   // Chef geht ein Bier zapfen
  }
  state.currentShift.total++;
  if (state.currentShift.isExam && isCorrect) state.currentShift.examCorrect++;   // Prüfung: nur "richtig" zählt

  // Karriere-Statistik (Abspann & Bestenliste)
  const st = state.player.stats;
  st.answered++;
  if (isCorrect || isAcceptable) st.correct++;
  if (isFavorite) st.favorites++;
  st.tipsTotal += tipGain;

  // Track question history for smart rotation
  const qId = q && q.data ? q.data.id : null;
  if (qId) {
    if (!state.player.questionHistory[qId]) state.player.questionHistory[qId] = { seen: 0, correct: 0, wrong: 0 };
    state.player.questionHistory[qId].seen++;
    // "Akzeptabel" zählt wie in der Schicht als richtig
    if (isCorrect || isAcceptable) state.player.questionHistory[qId].correct++;
    else state.player.questionHistory[qId].wrong++;
  }

  return tipGain;
}

function getChefComment(isCorrect) {
  const levelId = getLevel().id;
  const comments = CHEF_COMMENTS[levelId];
  if (!comments) return '';
  if (state.consecutiveWrong >= 5) return comments.beerComment;
  const pool = isCorrect ? comments.praise : comments.stress;
  return pick(pool);
}

// ===== DYNAMIC WINE OPTIONS =====
// Die geschriebenen Antworten bleiben erhalten (inkl. Erklärungen). Aufgefüllt wird
// mit zufälligen Weinen aus ALLEN freigeschalteten Levels – so verrät die Herkunft
// eines Weins (alt/neu) nicht mehr die richtige Antwort.
function expandWineOptions(q, level) {
  // Only for question types with wine options
  if (q.type === 'besserwisser' || q.type === 'weinwissen') return;

  if (q.type === 'beratung') {
    const finalStep = q.data.steps[q.data.steps.length - 1];
    if (finalStep.options) finalStep.options = buildWineOptions(finalStep.options, level);
    return;
  }
  q.data.options = buildWineOptions(q.data.options, level);
}

function buildWineOptions(options, level) {
  // Nur Weine, die der Chef schon vorgestellt hat (oder aus früheren Restaurants); die beste Antwort bleibt immer
  const anchor = options.find(o => o.favorite) || options.find(o => o.correct);
  const kept = options.filter(o => WINES[o.wineId] && (o === anchor || isWineKnown(o.wineId)));
  const correctWines = kept.filter(o => o.correct).map(o => WINES[o.wineId]);
  if (correctWines.length === 0) return shuffle(kept);

  const anyCorrectExpl = kept.find(o => o.correct && o.explanation)?.explanation || '';
  const result = kept.map(o => ({
    ...o,
    explanation: o.explanation || (o.correct ? anyCorrectExpl : wineMismatchText(WINES[o.wineId])),
  }));

  // Füller: nicht schon vorhanden und kein "Zwilling" eines richtigen Weins
  // (gleiche Farbe, Süße und Körper wäre womöglich ebenfalls richtig)
  const used = new Set(result.map(o => o.wineId));
  const isTwin = w => correctWines.some(c => c.color === w.color && c.sweetness === w.sweetness && c.body === w.body);
  const fillers = shuffle(Object.values(WINES).filter(w => isWineKnown(w.id) && !used.has(w.id) && !isTwin(w)));
  for (const w of fillers) {
    if (result.length >= CONFIG.optionsPerQuestion) break;
    result.push({ wineId: w.id, correct: false, explanation: wineMismatchText(w) });
  }
  // Zu wenige bekannte Weine (Imbiss, erste Schichten): mit Bier, Wasser & Co. auffüllen
  for (const d of shuffle(Object.values(EXTRA_DRINKS))) {
    if (result.length >= CONFIG.optionsPerQuestion) break;
    result.push({ wineId: d.id, correct: false, extra: true, explanation: d.explanation });
  }
  return shuffle(result);
}

function wineMismatchText(w) {
  const color = w.color === 'rot' ? 'Rotwein' : w.color === 'weiss' ? 'Weißwein' : 'Rosé';
  return `${w.name} (${color}, ${w.sweetness}, Körper ${w.body}) wäre hier nicht die passendste Wahl.`;
}

// ===== CHEF HINT SYSTEM =====
function askChefForHelp() {
  const q = state.currentQuestion;
  if (!q || q.hintUsed || q.answered !== undefined) return;

  q.hintUsed = true;
  const levelId = getLevel().id;
  let hintText = '';
  let eliminatedIndex = -1;

  switch (q.type) {
    case 'food_pairing':
    case 'preference': {
      const correctOpt = q.data.options.find(o => o.favorite) || q.data.options.find(o => o.correct);
      const wine = correctOpt ? WINES[correctOpt.wineId] : null;
      if (wine) {
        const hints = [
          `Denk mal an einen ${wine.color === 'rot' ? 'Rotwein' : wine.color === 'weiss' ? 'Weißwein' : 'Rosé'}...`,
          `Ich würde auf etwas ${wine.body === 'leicht' ? 'Leichtes' : wine.body === 'mittel' ? 'Mittleres' : 'Kräftiges'} setzen...`,
          `Die Antwort kommt aus ${REGIONS[wine.region]?.name || 'der Ferne'}...`,
          `Achte auf die Aromen: ${wine.flavors.slice(0, 2).join(' und ')}...`,
        ];
        hintText = pick(hints);
      }
      const wrongIndices = q.data.options.map((o, i) => (o.correct || o.acceptable) ? -1 : i).filter(i => i >= 0);
      if (wrongIndices.length > 1) eliminatedIndex = pick(wrongIndices);
      break;
    }
    case 'besserwisser': {
      hintText = q.data.isCorrect
        ? 'Hmm, ganz Unrecht hat der Gast eigentlich nicht...'
        : 'Da würde ich nochmal genauer drüber nachdenken...';
      break;
    }
    case 'weinwissen': {
      const wrongIdx = q.data.options.map((o, i) => o.correct ? -1 : i).filter(i => i >= 0);
      if (wrongIdx.length > 1) eliminatedIndex = pick(wrongIdx);
      const expl = q.data.explanation || '';
      hintText = expl.length > 40
        ? expl.substring(0, Math.min(80, expl.indexOf('.', 30) + 1 || 80)) + '..'
        : 'Denk nochmal an den Lehrgang zurück...';
      break;
    }
    case 'blindtasting': {
      const correctBt = q.data.options.find(o => o.correct);
      const wineBt = correctBt ? WINES[correctBt.wineId] : null;
      if (wineBt) {
        const hints = [
          `Achte auf die Aromen: ${wineBt.flavors.slice(0, 2).join(' und ')}...`,
          `Ein ${wineBt.color === 'rot' ? 'Roter' : 'Weißer'} aus ${REGIONS[wineBt.region]?.name || 'Europa'}...`,
          `${wineBt.body === 'kräftig' ? 'Kräftig' : 'Eher leicht'} im Körper...`,
        ];
        hintText = pick(hints);
      }
      const wrongBt = q.data.options.map((o, i) => (o.correct || o.acceptable) ? -1 : i).filter(i => i >= 0);
      if (wrongBt.length > 1) eliminatedIndex = pick(wrongBt);
      break;
    }
    case 'beratung': {
      if (!state.beratungState || state.beratungState.stepIndex < 2) {
        hintText = 'Da musst du selbst die richtigen Fragen stellen!';
        break;
      }
      const finalStep = q.data.steps[q.data.steps.length - 1];
      const correctBer = finalStep.options.find(o => o.favorite) || finalStep.options.find(o => o.correct);
      const wineBer = correctBer ? WINES[correctBer.wineId] : null;
      if (wineBer) {
        const hints = [
          `Denk mal an einen ${wineBer.color === 'rot' ? 'Rotwein' : wineBer.color === 'weiss' ? 'Weißwein' : 'Rosé'}...`,
          `Ich würde auf etwas ${wineBer.body === 'leicht' ? 'Leichtes' : wineBer.body === 'mittel' ? 'Mittleres' : 'Kräftiges'} setzen...`,
          `Achte auf die Aromen: ${wineBer.flavors.slice(0, 2).join(' und ')}...`,
        ];
        hintText = pick(hints);
      }
      const wrongBer = finalStep.options.map((o, i) => (o.correct || o.acceptable) ? -1 : i).filter(i => i >= 0);
      if (wrongBer.length > 1) eliminatedIndex = pick(wrongBer);
      break;
    }
  }

  const prefixes = CHEF_HINT_INTROS[levelId] || ['"'];
  q.chefHint = pick(prefixes) + ' "' + hintText + '"';
  q.eliminatedOption = eliminatedIndex;
  render();
}

// Nicht die beste Wahl getroffen? Dann die beste Wahl samt Begründung zeigen.
function bestChoiceInfo(options, chosen) {
  const best = options.find(o => o.favorite) || options.find(o => o.correct);
  if (!best || best === chosen) return {};
  return { bestWine: best.wineId, bestExplanation: best.explanation, bestIsUpgrade: !!chosen.correct };
}

// ===== ANSWER HANDLERS =====
function answerQuestion(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;
  const isAcceptable = !isCorrect && !!opt.acceptable;
  const wine = drinkInfo(opt.wineId);

  const isFavorite = isCorrect && !!opt.favorite;
  const tipGain = applyTipAndRep(isCorrect, isFavorite, isAcceptable);
  Sound.answer(isCorrect, isFavorite, isAcceptable);

  // Track wine knowledge
  if (WINES[opt.wineId]) {
    if (!state.player.wineKnowledge[opt.wineId]) state.player.wineKnowledge[opt.wineId] = { seen: 0, correct: 0 };
    state.player.wineKnowledge[opt.wineId].seen++;
    if (isCorrect || isAcceptable) state.player.wineKnowledge[opt.wineId].correct++;
  }

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, acceptable: isAcceptable, favorite: isFavorite, explanation: opt.explanation, funFact: wine ? wine.funFact : '', tips: tipGain, hintUsed: !!q.hintUsed, ...bestChoiceInfo(q.data.options, opt) };
  saveGame();
  render();
}

function answerBesserwisser(value) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  const playerSaidTrue = value === 'true';
  q.answered = playerSaidTrue;
  const isCorrect = (playerSaidTrue === q.data.isCorrect);

  const tipGain = applyTipAndRep(isCorrect);
  Sound.answer(isCorrect);

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, explanation: q.data.correction, funFact: '', tips: tipGain, hintUsed: !!q.hintUsed };
  saveGame();
  render();
}

function answerWeinwissen(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;

  const tipGain = applyTipAndRep(isCorrect);
  Sound.answer(isCorrect);

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, explanation: q.data.explanation, funFact: '', tips: tipGain, hintUsed: !!q.hintUsed };
  saveGame();
  render();
}

function answerBlindtasting(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;
  const isAcceptable = !isCorrect && !!opt.acceptable;
  const isFavorite = isCorrect && !!opt.favorite;
  const wine = drinkInfo(opt.wineId);

  const tipGain = applyTipAndRep(isCorrect, isFavorite, isAcceptable);
  Sound.answer(isCorrect, isFavorite, isAcceptable);

  state.overlay = 'feedback';
  state.overlayData = {
    correct: isCorrect,
    acceptable: isAcceptable,
    favorite: isFavorite,
    explanation: q.data.explanation,
    funFact: wine ? wine.funFact : '',
    tips: tipGain,
    hintUsed: !!q.hintUsed,
    revealWine: isCorrect ? null : q.data.options.find(o => o.correct)?.wineId,
  };
  saveGame();
  render();
}

// ===== BERATUNG ANSWER HANDLER =====
function answerBeratungStep(index) {
  const q = state.currentQuestion;
  if (!q || q.type !== 'beratung') return;

  // Initialize beratung state if needed
  if (!state.beratungState) {
    state.beratungState = {
      stepIndex: 0,
      dialogHistory: [{ speaker: 'guest', text: q.data.intro }],
      bonusAccumulated: 0,
    };
  }

  const bs = state.beratungState;
  const step = q.data.steps[bs.stepIndex];

  if (bs.stepIndex < 2) {
    // Steps 0-1: Clarifying questions
    const choice = step.choices[index];
    bs.bonusAccumulated += choice.bonusTip || 0;
    bs.dialogHistory.push({ speaker: 'player', text: choice.text });
    bs.dialogHistory.push({ speaker: 'guest', text: choice.guestResponse });
    bs.stepIndex++;
    render();
  } else {
    // Step 2: Wine recommendation — final answer
    q.answered = index;
    const opt = step.options[index];
    const isCorrect = opt.correct;
    const isAcceptable = !isCorrect && !!opt.acceptable;
    const isFavorite = isCorrect && !!opt.favorite;
    const wine = drinkInfo(opt.wineId);

    const tipGain = applyTipAndRep(isCorrect, isFavorite, isAcceptable);
    Sound.answer(isCorrect, isFavorite, isAcceptable);

    // Add accumulated bonus from good questions
    const bonus = bs.bonusAccumulated;
    state.player.tips += bonus;
    state.currentShift.tipsEarned += bonus;
    state.player.stats.tipsTotal += bonus;

    // Track wine knowledge
    if (opt.wineId) {
      if (!state.player.wineKnowledge[opt.wineId]) state.player.wineKnowledge[opt.wineId] = { seen: 0, correct: 0 };
      state.player.wineKnowledge[opt.wineId].seen++;
      if (isCorrect || isAcceptable) state.player.wineKnowledge[opt.wineId].correct++;
    }

    state.overlay = 'feedback';
    state.overlayData = {
      correct: isCorrect,
      acceptable: isAcceptable,
      favorite: isFavorite,
      explanation: opt.explanation,
      funFact: wine ? wine.funFact : '',
      tips: tipGain + bonus,
      hintUsed: !!q.hintUsed,
      beratungBonus: bonus,
      beratungSummary: q.data.summary,
      ...bestChoiceInfo(step.options, opt),
    };
    saveGame();
    render();
  }
}

function nextQuestion() {
  state.overlay = null;
  state.overlayData = null;
  state.beratungState = null;
  const shift = state.currentShift;
  shift.questionIndex++;

  if (shift.questionIndex >= shift.questions.length) {
    state.currentQuestion = null;
    state.currentGuest = null;
    state.player.shiftsCompleted[state.player.level]++;
    if (shift.isExam) { finishExam(); return; }

    // Check level up
    const lv = getLevel();
    const nextLv = getNextLevel();
    if (nextLv && state.player.tips >= lv.xpToNext) {
      state.player.level++;
      state.overlay = 'levelup';
      state.overlayData = { newLevel: CONFIG.levels[state.player.level] };
      Sound.play('cork2');
      Sound.play('fanfare', 0.35);
    } else if (isExamEligible()) {
      // Genug Trinkgeld im Étoile → der Michelin-Tester wartet
      state.overlay = 'examReady';
    }
    saveGame();
    render();
    return;
  }

  state.currentQuestion = shift.questions[shift.questionIndex];
  state.currentGuest = state.currentQuestion.guest;
  render();
}

function endShift() {
  state.currentShift = null;
  state.currentQuestion = null;
  state.currentGuest = null;
  state.beratungState = null;
  state.overlay = null;
  render();
}

// ===== WINE DETAIL (Region view) =====
function showWineDetail(wineId) {
  state.overlay = 'wineDetail';
  state.overlayData = { wineId };
  render();
}

function hideWineDetail() {
  state.overlay = null;
  state.overlayData = null;
  render();
}

// ===== SKULL EASTER EGG (Steakhaus) =====
let skullClicks = 0;
let miniGame = null;

function handleSkullClick() {
  skullClicks++;
  if (skullClicks >= 5) {
    skullClicks = 0;
    startMiniGame();
  }
}

// ===== MINI-GAME: WEIN-COWBOY =====
function startMiniGame() {
  state.scene = 'minigame';
  render();
  setTimeout(initMiniGameLoop, 100);
}

function initMiniGameLoop() {
  const canvas = document.getElementById('minigame-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  // Halbe Auflösung, per CSS hochskaliert: große Retro-Pixel
  canvas.width = Math.round(canvas.parentElement.clientWidth / 2);
  canvas.height = Math.round(canvas.parentElement.clientHeight / 2);

  miniGame = {
    ctx, canvas,
    player: { x: 80, y: canvas.height - 100, w: 40, h: 60, vy: 0, onGround: true },
    bottles: [],
    cows: [],
    particles: [],
    popups: [],        // aufsteigende "+10" / "-5"
    hurtTimer: 0,      // nach einem Kuh-Treffer kurz unverwundbar (Frames)
    score: 0,
    timeLeft: 30 * 60, // frames (at 60fps)
    cowTimer: 0,
    ground: canvas.height - 40,
    running: true,
    lastTime: null, acc: 0,   // Zeitmessung: feste 60 Schritte/s, egal ob 60- oder 120-Hz-Display
    stars: Array.from({length: 30}, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height * 0.5, s: Math.random() * 2 + 1 })),
  };

  // Controls: Touch = linke Hälfte springen, rechte Hälfte werfen.
  // Maus = Klick wirft, Leertaste springt.
  const throwBottle = () => { miniGame.bottles.push({ x: miniGame.player.x + 30, y: miniGame.player.y, vx: 8, vy: -3 }); Sound.play('throw'); };
  const jump = () => { if (miniGame.player.onGround) { miniGame.player.vy = -12; miniGame.player.onGround = false; Sound.play('jump'); } };
  canvas.onpointerdown = (e) => {
    if (!miniGame || !miniGame.running) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    if (e.pointerType !== 'mouse' && e.clientX - rect.left < rect.width / 2) jump();
    else throwBottle();
  };
  canvas.oncontextmenu = (e) => e.preventDefault();
  miniGame._keyHandler = (e) => {
    if (!miniGame || !miniGame.running) return;
    if (e.code === 'Space') { e.preventDefault(); jump(); }
  };
  document.addEventListener('keydown', miniGame._keyHandler);

  requestAnimationFrame(miniGameTick);
}

const MINIGAME_STEP_MS = 1000 / 60;

function miniGameTick(now) {
  if (!miniGame || !miniGame.running) return;
  const mg = miniGame;
  // Feste Simulationsschritte: Spieltempo hängt nicht von der Bildrate ab
  if (mg.lastTime === null) mg.lastTime = now;
  mg.acc += Math.min(now - mg.lastTime, 250);  // nach Pausen (App im Hintergrund) nicht vorspulen
  mg.lastTime = now;
  while (mg.acc >= MINIGAME_STEP_MS) {
    mg.acc -= MINIGAME_STEP_MS;
    miniGameStep(mg);
    if (!miniGame || !miniGame.running) return;
  }
  miniGameDraw(mg);
  requestAnimationFrame(miniGameTick);
}

function miniGameStep(mg) {
  const W = mg.canvas.width;
  const H = mg.canvas.height;

  mg.timeLeft--;
  if (mg.timeLeft <= 0) { endMiniGame(); return; }

  // Player gravity
  mg.player.vy += 0.6;
  mg.player.y += mg.player.vy;
  if (mg.player.y >= mg.ground - mg.player.h) {
    mg.player.y = mg.ground - mg.player.h;
    mg.player.vy = 0;
    mg.player.onGround = true;
  }

  // Spawn cows
  mg.cowTimer++;
  if (mg.cowTimer > 60 + Math.random() * 40) {
    mg.cows.push({ x: W + 20, y: mg.ground - 40, w: 50, h: 40, speed: 2 + Math.random() * 2 });
    mg.cowTimer = 0;
  }

  // Update bottles
  mg.bottles.forEach(b => { b.x += b.vx; b.y += b.vy; b.vy += 0.15; });
  mg.bottles = mg.bottles.filter(b => b.x < W + 20 && b.y < H + 20);

  // Update cows
  mg.cows.forEach(c => c.x -= c.speed);
  mg.cows = mg.cows.filter(c => c.x > -60);

  // Kuh rennt in den Sommelier: -5 Punkte, danach 1 s unverwundbar → Springen weicht aus
  if (mg.hurtTimer > 0) mg.hurtTimer--;
  const pl = mg.player;
  for (let ci = mg.cows.length - 1; ci >= 0 && mg.hurtTimer === 0; ci--) {
    const c = mg.cows[ci];
    if (pl.x < c.x + c.w && pl.x + pl.w > c.x && pl.y < c.y + c.h && pl.y + pl.h > c.y) {
      mg.score = Math.max(0, mg.score - 5);
      mg.hurtTimer = 60;
      mg.cows.splice(ci, 1);
      mg.popups.push({ x: pl.x + pl.w / 2, y: pl.y - 20, text: '-5', color: '#ff5a5a', life: 45 });
      for (let i = 0; i < 8; i++) {
        mg.particles.push({ x: pl.x + pl.w, y: pl.y + pl.h / 2, vx: (Math.random() - 0.3) * 5, vy: (Math.random() - 0.5) * 5, life: 20, color: '#ffffff' });
      }
      Sound.play('wrong');
    }
  }

  // Collisions (rückwärts, damit splice keine Kuh überspringt)
  mg.bottles.forEach(b => {
    for (let ci = mg.cows.length - 1; ci >= 0; ci--) {
      const c = mg.cows[ci];
      if (b.x > c.x && b.x < c.x + c.w && b.y > c.y && b.y < c.y + c.h) {
        mg.score += 10;
        mg.popups.push({ x: c.x + c.w / 2, y: c.y - 10, text: '+10', color: '#7fff7f', life: 40 });
        Sound.play('clank');
        // Particles
        for (let i = 0; i < 6; i++) {
          mg.particles.push({ x: c.x + c.w/2, y: c.y + c.h/2, vx: (Math.random()-0.5)*6, vy: (Math.random()-0.5)*6, life: 20, color: '#e94560' });
        }
        mg.cows.splice(ci, 1);
        b.x = -100; // remove
        break;
      }
    }
  });

  // Update particles & Punkte-Popups
  mg.particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.life--; });
  mg.particles = mg.particles.filter(p => p.life > 0);
  mg.popups.forEach(p => { p.y -= 1; p.life--; });
  mg.popups = mg.popups.filter(p => p.life > 0);
}

function miniGameDraw(mg) {
  const ctx = mg.ctx;
  const W = mg.canvas.width;
  const H = mg.canvas.height;

  // Sky
  ctx.fillStyle = '#0a0a2e';
  ctx.fillRect(0, 0, W, H);

  // Stars
  ctx.fillStyle = '#fff';
  mg.stars.forEach(s => {
    ctx.globalAlpha = 0.3 + Math.sin(mg.timeLeft * 0.02 + s.x) * 0.3;
    ctx.fillRect(s.x, s.y, s.s, s.s);
  });
  ctx.globalAlpha = 1;

  // Ground
  ctx.fillStyle = '#2a1a0a';
  ctx.fillRect(0, mg.ground, W, H - mg.ground);
  ctx.fillStyle = '#4a3a2a';
  ctx.fillRect(0, mg.ground, W, 3);

  // Fence posts
  for (let fx = 0; fx < W; fx += 120) {
    ctx.fillStyle = '#5a4a3a';
    ctx.fillRect(fx + ((mg.timeLeft * 0.5) % 120), mg.ground - 30, 6, 30);
    ctx.fillRect(fx + ((mg.timeLeft * 0.5) % 120) - 20, mg.ground - 20, 46, 4);
  }

  // Player (sommelier) – blinkt nach einem Treffer
  const p = mg.player;
  if (mg.hurtTimer > 0 && Math.floor(mg.hurtTimer / 5) % 2 === 0) ctx.globalAlpha = 0.25;
  ctx.fillStyle = '#1a1a3e';
  ctx.fillRect(p.x, p.y, p.w, p.h); // body
  ctx.fillStyle = '#e94560';
  ctx.fillRect(p.x + 5, p.y - 15, 30, 15); // head
  ctx.fillStyle = '#f0e68c';
  ctx.fillRect(p.x + 8, p.y - 20, 24, 8); // hat
  ctx.fillStyle = '#fff';
  ctx.fillRect(p.x + 30, p.y + 15, 15, 5); // arm
  ctx.globalAlpha = 1;

  // Bottles
  ctx.fillStyle = '#2ecc71';
  mg.bottles.forEach(b => {
    ctx.fillRect(b.x - 3, b.y - 8, 6, 16);
    ctx.fillStyle = '#f0e68c';
    ctx.fillRect(b.x - 2, b.y - 10, 4, 4);
    ctx.fillStyle = '#2ecc71';
  });

  // Cows
  mg.cows.forEach(c => {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(c.x, c.y, c.w, c.h); // body
    ctx.fillStyle = '#fff';
    ctx.fillRect(c.x + 2, c.y + 5, 12, 8); // spot
    ctx.fillStyle = '#654321';
    ctx.fillRect(c.x - 8, c.y + 5, 10, 15); // head
    ctx.fillStyle = '#222';
    ctx.fillRect(c.x + 5, c.y + c.h, 5, 8); // legs
    ctx.fillRect(c.x + 35, c.y + c.h, 5, 8);
  });

  // Particles
  mg.particles.forEach(pp => {
    ctx.globalAlpha = pp.life / 20;
    ctx.fillStyle = pp.color;
    ctx.fillRect(pp.x, pp.y, 4, 4);
  });
  ctx.globalAlpha = 1;

  // Punkte-Popups
  ctx.font = '12px "Press Start 2P", monospace';
  ctx.textAlign = 'center';
  mg.popups.forEach(pp => {
    ctx.globalAlpha = Math.min(1, pp.life / 20);
    ctx.fillStyle = pp.color;
    ctx.fillText(pp.text, pp.x, pp.y);
  });
  ctx.globalAlpha = 1;
  ctx.textAlign = 'left';

  // HUD
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fillRect(10, 10, 360, 36);
  ctx.font = '14px "Press Start 2P", monospace';
  ctx.fillStyle = '#e94560';
  ctx.fillText('SCORE: ' + mg.score, 20, 32);
  ctx.fillStyle = '#f0e68c';
  const secs = Math.ceil(mg.timeLeft / 60);
  ctx.fillText('TIME: ' + secs + 's', 210, 32);

  // Instructions (erste 3 Sekunden)
  if (mg.timeLeft > 27 * 60) {
    ctx.font = '12px "Press Start 2P", monospace';
    ctx.fillStyle = '#c0c0e0';
    ctx.textAlign = 'center';
    ctx.fillText('TIPP LINKS = Springen   |   TIPP RECHTS = Flasche werfen', W/2, H/2 - 40);
    ctx.fillStyle = '#ff9a9a';
    ctx.fillText('Kuh trifft dich: -5 Punkte – spring drüber!', W/2, H/2 - 62);
    ctx.font = '9px "Press Start 2P", monospace';
    ctx.fillStyle = '#8888aa';
    ctx.fillText('(Maus: Klick = werfen, Leertaste = springen)', W/2, H/2 - 18);
    ctx.textAlign = 'left';
    // Trennlinie der Touch-Zonen
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(W/2 - 1, 0, 2, mg.ground);
  }
}

function endMiniGame() {
  if (!miniGame) return;
  const score = miniGame.score;
  miniGame.running = false;
  if (miniGame._keyHandler) document.removeEventListener('keydown', miniGame._keyHandler);
  miniGame = null;
  state.overlay = 'minigameEnd';
  state.overlayData = { score };
  render();
}

function closeMiniGame() {
  state.scene = 'restaurant';
  state.overlay = null;
  state.overlayData = null;
  render();
}
