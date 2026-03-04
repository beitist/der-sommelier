// ============================================================
// DER SOMMELIER — Game Engine
// ============================================================

// ===== GAME STATE =====
let state = {
  scene: 'title',       // title, map, restaurant, region, explorer
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
};

// ===== HELPERS =====
function getLevel() { return CONFIG.levels[state.player.level]; }
function getNextLevel() { return CONFIG.levels[state.player.level + 1] || null; }
function getTipProgress() {
  const next = getNextLevel();
  if (!next) return 100;
  const lv = getLevel();
  return Math.min(100, Math.round(((state.player.tips - lv.xpNeeded) / (next.xpNeeded - lv.xpNeeded)) * 100));
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

function loadGame() {
  try {
    // Try v3 first
    let raw = localStorage.getItem('sommelier_v3');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.version === 3) {
        state.player = data.player;
        state.player.discoveredWines = new Set(data.player.discoveredWines || []);
        // Ensure new fields exist
        if (!state.player.chefIntroSeen) state.player.chefIntroSeen = [false, false, false, false, false];
        if (!state.player.shiftsCompleted) state.player.shiftsCompleted = [0, 0, 0, 0, 0];
        if (!state.player.questionHistory) state.player.questionHistory = {};
        if (state.player.tips === undefined) state.player.tips = state.player.xp || 0;
        return true;
      }
    }
    // Migrate from v2
    raw = localStorage.getItem('sommelier_v2');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.version === 2) {
        state.player = data.player;
        state.player.discoveredWines = new Set(data.player.discoveredWines || []);
        state.player.tips = data.player.xp || 0;
        state.player.chefIntroSeen = [false, false, false, false, false];
        state.player.shiftsCompleted = [0, 0, 0, 0, 0];
        state.player.questionHistory = {};
        // Mark current level's chef as seen if player has progressed
        for (let i = 0; i < state.player.level; i++) {
          state.player.chefIntroSeen[i] = true;
        }
        delete state.player.xp;
        saveGame(); // Save as v3
        return true;
      }
    }
    return false;
  } catch(e) { return false; }
}

function hasSave() {
  return !!(localStorage.getItem('sommelier_v3') || localStorage.getItem('sommelier_v2'));
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

function dismissChefIntro() {
  state.player.chefIntroSeen[state.player.level] = true;
  state.showChefIntro = false;
  saveGame();
  // After chef intro → go to explorer (with intro page)
  goToScene('explorer', { explorerWineIndex: -1 });
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

function getRandomGuest(level) {
  const pool = [];
  // Add recurring guests (with level-appropriate sprite)
  GUESTS.recurring.forEach(g => {
    pool.push({ name: g.name, sprite: g.sprites[level] || g.sprites[0], facing: g.facing || 'left' });
  });
  // Add level-specific guests
  const levelGuests = GUESTS.byLevel[level] || [];
  levelGuests.forEach(g => {
    pool.push({ name: g.name, sprite: g.sprite, facing: g.facing || 'left' });
  });
  return pick(pool);
}

// ===== GAME ACTIONS =====
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
  };
  saveGame();
  render();
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

function goToScene(scene, data) {
  state.scene = scene;
  state.overlay = null;
  state.overlayData = null;
  state.showChefIntro = false;
  if (data) Object.assign(state, data);
  render();
}

// ===== EXPLORER MODE =====
function getExplorerWines() {
  // Show wines for the current level only (not cumulative)
  return Object.values(WINES).filter(w => w.level === state.player.level);
}

function explorerNext() {
  const wines = getExplorerWines();
  // From intro page → first wine
  if (state.explorerWineIndex === -1) {
    state.explorerWineIndex = 0;
    state.player.discoveredWines.add(wines[0].id);
    saveGame();
    render();
    return;
  }
  if (state.explorerWineIndex < wines.length - 1) {
    state.explorerWineIndex++;
    state.player.discoveredWines.add(wines[state.explorerWineIndex].id);
    saveGame();
  } else {
    // Explorer done → restaurant
    goToScene('restaurant');
    return;
  }
  render();
}

function explorerPrev() {
  if (state.explorerWineIndex > 0) {
    state.explorerWineIndex--;
    render();
  }
}

function explorerSkip() {
  const wines = getExplorerWines();
  wines.forEach(w => state.player.discoveredWines.add(w.id));
  saveGame();
  goToScene('restaurant');
}

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

  // Smart rotation: unseen first, then wrong, then correct
  const hist = state.player.questionHistory;
  const unseen = shuffle(allQuestions.filter(q => !hist[q.data.id]));
  const wrong = shuffle(allQuestions.filter(q => hist[q.data.id] && hist[q.data.id].wrong > hist[q.data.id].correct));
  const seen = shuffle(allQuestions.filter(q => hist[q.data.id] && hist[q.data.id].correct >= hist[q.data.id].wrong));
  // Priority: unseen → wrong → seen (least-seen first)
  seen.sort((a, b) => (hist[a.data.id]?.seen || 0) - (hist[b.data.id]?.seen || 0));
  const prioritized = [...unseen, ...wrong, ...seen];
  const selected = prioritized.slice(0, CONFIG.questionsPerShift);

  // Expand wine options to full cellar + assign guests
  selected.forEach(q => {
    expandWineOptions(q, level);
    q.guest = assignGuestToQuestion(q, level);
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
  render();
}

// ===== SHARED TIP/REP LOGIC =====
function rollDice(sides) { return Math.floor(Math.random() * sides) + 1; }

function applyTipAndRep(isCorrect) {
  const q = state.currentQuestion;
  let tipGain = isCorrect ? (4 + rollDice(6)) : rollDice(3);  // richtig: 5-10€, falsch: 1-3€
  // Level-Multiplikator: höheres Level = bessere Gäste = mehr Trinkgeld
  const lvMult = 1 + state.player.level * 0.25;  // 1.0x, 1.25x, 1.5x, 1.75x, 2.0x
  tipGain = Math.round(tipGain * lvMult);
  if (q && q.hintUsed) tipGain = Math.ceil(tipGain / 2);
  const repGain = isCorrect ? CONFIG.repPerCorrect : CONFIG.repPerWrong;

  state.player.tips += tipGain;
  state.player.reputation[state.player.level] = Math.max(0, Math.min(100,
    state.player.reputation[state.player.level] + repGain));
  state.currentShift.tipsEarned += tipGain;
  if (isCorrect) { state.currentShift.correct++; state.consecutiveWrong = 0; }
  else { state.currentShift.wrong++; state.consecutiveWrong++; }
  state.currentShift.total++;

  // Track question history for smart rotation
  const qId = q && q.data ? q.data.id : null;
  if (qId) {
    if (!state.player.questionHistory[qId]) state.player.questionHistory[qId] = { seen: 0, correct: 0, wrong: 0 };
    state.player.questionHistory[qId].seen++;
    if (isCorrect) state.player.questionHistory[qId].correct++;
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
function expandWineOptions(q, level) {
  // Only for question types with wine options
  if (q.type === 'besserwisser' || q.type === 'weinwissen') return;

  // Get all wines of this level
  const levelWines = Object.values(WINES).filter(w => w.level === level);
  const correctOpt = q.data.options.find(o => o.correct);
  if (!correctOpt) return;
  const correctWineId = correctOpt.wineId;

  // Build a map of existing explanations
  const explMap = {};
  q.data.options.forEach(o => { explMap[o.wineId] = o.explanation; });

  // Build new options: all level wines + correct wine if from different level
  const winePool = [...levelWines];
  if (!winePool.find(w => w.id === correctWineId)) {
    const correctWine = WINES[correctWineId];
    if (correctWine) winePool.push(correctWine);
  }

  q.data.options = shuffle(winePool.map(w => ({
    wineId: w.id,
    correct: w.id === correctWineId,
    explanation: explMap[w.id] || (w.id === correctWineId
      ? correctOpt.explanation
      : `${w.name} wäre hier nicht die passendste Wahl.`),
  })));
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
      const correctOpt = q.data.options.find(o => o.correct);
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
      const wrongIndices = q.data.options.map((o, i) => o.correct ? -1 : i).filter(i => i >= 0);
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
      const wrongBt = q.data.options.map((o, i) => o.correct ? -1 : i).filter(i => i >= 0);
      if (wrongBt.length > 1) eliminatedIndex = pick(wrongBt);
      break;
    }
  }

  const prefixes = CHEF_HINT_INTROS[levelId] || ['"'];
  q.chefHint = pick(prefixes) + ' "' + hintText + '"';
  q.eliminatedOption = eliminatedIndex;
  render();
}

// ===== ANSWER HANDLERS =====
function answerQuestion(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;
  const wine = WINES[opt.wineId];

  const tipGain = applyTipAndRep(isCorrect);

  // Track wine knowledge
  if (opt.wineId) {
    if (!state.player.wineKnowledge[opt.wineId]) state.player.wineKnowledge[opt.wineId] = { seen: 0, correct: 0 };
    state.player.wineKnowledge[opt.wineId].seen++;
    if (isCorrect) state.player.wineKnowledge[opt.wineId].correct++;
  }

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, explanation: opt.explanation, funFact: wine ? wine.funFact : '', tips: tipGain, hintUsed: !!q.hintUsed };
  saveGame();
  render();
}

function answerBesserwisser(value) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  const playerSaidTrue = value === 'true';
  q.answered = playerSaidTrue;
  const isCorrect = (playerSaidTrue === q.data.isCorrect);

  applyTipAndRep(isCorrect);
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
  const wine = WINES[opt.wineId];

  const tipGain = applyTipAndRep(isCorrect);

  state.overlay = 'feedback';
  state.overlayData = {
    correct: isCorrect,
    explanation: q.data.explanation,
    funFact: wine ? wine.funFact : '',
    tips: tipGain,
    hintUsed: !!q.hintUsed,
    revealWine: isCorrect ? null : q.data.options.find(o => o.correct)?.wineId,
  };
  saveGame();
  render();
}

function nextQuestion() {
  state.overlay = null;
  state.overlayData = null;
  const shift = state.currentShift;
  shift.questionIndex++;

  if (shift.questionIndex >= shift.questions.length) {
    state.currentQuestion = null;
    state.currentGuest = null;
    state.player.shiftsCompleted[state.player.level]++;

    // Check level up
    const nextLv = getNextLevel();
    if (nextLv && state.player.tips >= nextLv.xpNeeded) {
      state.player.level++;
      state.overlay = 'levelup';
      state.overlayData = { newLevel: CONFIG.levels[state.player.level] };
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
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  miniGame = {
    ctx, canvas,
    player: { x: 80, y: canvas.height - 100, w: 40, h: 60, vy: 0, onGround: true },
    bottles: [],
    cows: [],
    particles: [],
    score: 0,
    timeLeft: 30 * 60, // frames (at 60fps)
    cowTimer: 0,
    ground: canvas.height - 40,
    running: true,
    stars: Array.from({length: 30}, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height * 0.5, s: Math.random() * 2 + 1 })),
  };

  // Controls
  canvas.onclick = () => {
    if (!miniGame || !miniGame.running) return;
    miniGame.bottles.push({ x: miniGame.player.x + 30, y: miniGame.player.y, vx: 8, vy: -3 });
  };
  canvas.oncontextmenu = (e) => e.preventDefault();
  miniGame._keyHandler = (e) => {
    if (!miniGame || !miniGame.running) return;
    if (e.code === 'Space') {
      e.preventDefault();
      if (miniGame.player.onGround) { miniGame.player.vy = -12; miniGame.player.onGround = false; }
    }
  };
  document.addEventListener('keydown', miniGame._keyHandler);

  requestAnimationFrame(miniGameTick);
}

function miniGameTick() {
  if (!miniGame || !miniGame.running) return;
  const mg = miniGame;
  const ctx = mg.ctx;
  const W = mg.canvas.width;
  const H = mg.canvas.height;

  // Update
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

  // Collisions
  mg.bottles.forEach(b => {
    mg.cows.forEach((c, ci) => {
      if (b.x > c.x && b.x < c.x + c.w && b.y > c.y && b.y < c.y + c.h) {
        mg.score += 10;
        // Particles
        for (let i = 0; i < 6; i++) {
          mg.particles.push({ x: c.x + c.w/2, y: c.y + c.h/2, vx: (Math.random()-0.5)*6, vy: (Math.random()-0.5)*6, life: 20, color: '#e94560' });
        }
        mg.cows.splice(ci, 1);
        b.x = -100; // remove
      }
    });
  });

  // Update particles
  mg.particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.life--; });
  mg.particles = mg.particles.filter(p => p.life > 0);

  // Draw
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

  // Player (sommelier)
  const p = mg.player;
  ctx.fillStyle = '#1a1a3e';
  ctx.fillRect(p.x, p.y, p.w, p.h); // body
  ctx.fillStyle = '#e94560';
  ctx.fillRect(p.x + 5, p.y - 15, 30, 15); // head
  ctx.fillStyle = '#f0e68c';
  ctx.fillRect(p.x + 8, p.y - 20, 24, 8); // hat
  ctx.fillStyle = '#fff';
  ctx.fillRect(p.x + 30, p.y + 15, 15, 5); // arm

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

  // HUD
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fillRect(10, 10, 200, 36);
  ctx.font = '14px "Press Start 2P", monospace';
  ctx.fillStyle = '#e94560';
  ctx.fillText('SCORE: ' + mg.score, 20, 32);
  ctx.fillStyle = '#f0e68c';
  const secs = Math.ceil(mg.timeLeft / 60);
  ctx.fillText('TIME: ' + secs + 's', 130, 32);

  // Instructions
  if (mg.timeLeft > 28 * 60) {
    ctx.font = '10px "Press Start 2P", monospace';
    ctx.fillStyle = '#8888aa';
    ctx.fillText('KLICK = Flasche werfen | SPACE = Springen', W/2 - 200, H/2 - 40);
  }

  requestAnimationFrame(miniGameTick);
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
