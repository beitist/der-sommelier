// ============================================================
// DER SOMMELIER — Scene Renderers
// ============================================================

function render() {
  const root = document.getElementById('game-root');
  let html = '';
  switch (state.scene) {
    case 'title': html = renderTitle(); break;
    case 'explorer': html = renderExplorer(); break;
    case 'map': html = renderMap(); break;
    case 'restaurant': html = renderRestaurant(); break;
    case 'region': html = renderRegion(); break;
  }
  root.innerHTML = html;
  attachEvents();
}

// ===== TITLE =====
function renderTitle() {
  return `
    <div class="scene scene-title active">
      <div class="title-bg">
        <div class="title-vignette"></div>
        <div class="title-content">
          <div class="title-glass">
            <div class="glass-bowl"><div class="glass-wine"></div></div>
            <div class="glass-stem"></div>
            <div class="glass-base"></div>
          </div>
          <h1 class="title-text">DER SOMMELIER</h1>
          <p class="title-sub">Ein Wein-Abenteuer für angehende Gastro-Profis</p>
          <div class="title-buttons">
            <button class="btn btn-primary" onclick="startNewGame()">🍷 Neues Spiel</button>
            ${hasSave() ? '<button class="btn btn-secondary" onclick="continueGame()">📂 Weiterspielen</button>' : ''}
          </div>
        </div>
      </div>
    </div>`;
}

// ===== EXPLORER MODE =====
function renderExplorer() {
  const wines = getExplorerWines();
  if (wines.length === 0) return renderRestaurant();
  const wine = wines[state.explorerWineIndex];
  const region = REGIONS[wine.region];
  const progress = `${state.explorerWineIndex + 1} / ${wines.length}`;
  const isLast = state.explorerWineIndex === wines.length - 1;

  const colorBg = wine.color === 'rot' ? '#5c1a2a' : wine.color === 'weiss' ? '#4a4a2a' : '#5c2a3a';
  const colorAccent = wine.color === 'rot' ? '#e94560' : wine.color === 'weiss' ? '#f0e68c' : '#ffb6c1';

  // Mark as discovered
  state.player.discoveredWines.add(wine.id);

  return `
    <div class="scene scene-explorer active">
      <!-- Sidebar -->
      ${renderSidebar()}

      <!-- Main area -->
      <div class="main-area">
        <div class="explorer-bg" style="background:linear-gradient(135deg, ${colorBg}, #1a1a2e)">

          <!-- Header -->
          <div class="explorer-header">
            <div class="explorer-title">
              <span class="explorer-badge">📚 LEHRGANG</span>
              <span class="explorer-level">${getLevel().name}</span>
            </div>
            <div class="explorer-progress">${progress}</div>
          </div>

          <!-- Wine Card -->
          <div class="explorer-card">
            <!-- Left: Wine Bottle -->
            <div class="wine-bottle-area">
              <div class="wine-bottle" style="--wine-color: ${colorAccent}">
                <div class="bottle-neck"></div>
                <div class="bottle-body">
                  <div class="bottle-label">
                    <div class="label-region">${region ? region.flag : ''} ${region ? region.name : ''}</div>
                    <div class="label-name">${wine.name}</div>
                    <div class="label-type">${wine.color === 'rot' ? '🔴 Rot' : wine.color === 'weiss' ? '⚪ Weiß' : '🩷 Rosé'} · ${wine.sweetness}</div>
                  </div>
                </div>
                <div class="bottle-bottom"></div>
              </div>
            </div>

            <!-- Right: Wine Info -->
            <div class="wine-info-area">
              <h2 class="wine-title" style="color:${colorAccent}">${wine.name}</h2>
              <p class="wine-desc">${wine.description}</p>

              <div class="wine-details">
                <div class="detail-row">
                  <span class="detail-label">🎨 Farbe</span>
                  <span class="detail-value">${wine.color === 'rot' ? 'Rot' : wine.color === 'weiss' ? 'Weiß' : 'Rosé'}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">💧 Geschmack</span>
                  <span class="detail-value">${wine.sweetness}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">💪 Körper</span>
                  <span class="detail-value">${wine.body}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🍋 Säure</span>
                  <span class="detail-value">${wine.acidity}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">👃 Aromen</span>
                  <span class="detail-value">${wine.flavors.join(', ')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🍽️ Passt zu</span>
                  <span class="detail-value">${wine.pairings.join(', ')}</span>
                </div>
              </div>

              <div class="wine-funfact">
                <span class="funfact-icon">💡</span>
                <span>${wine.funFact}</span>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="explorer-nav">
            <button class="btn btn-secondary" onclick="explorerPrev()" ${state.explorerWineIndex === 0 ? 'disabled' : ''}>← Zurück</button>
            <button class="btn btn-ghost" onclick="explorerSkip()">Überspringen →→</button>
            <button class="btn btn-primary" onclick="explorerNext()">${isLast ? '✅ Zur Arbeit!' : 'Nächster Wein →'}</button>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      ${renderBottomBar()}
    </div>`;
}

// ===== MAP =====
function renderMap() {
  const unlocked = getUnlockedRegionIds();

  let regions = Object.values(REGIONS).map(r => {
    const isUnlocked = unlocked.includes(r.id);
    return `<div class="map-pin ${isUnlocked ? 'unlocked' : 'locked'}"
                 style="left:${r.mapX}%;top:${r.mapY}%"
                 ${isUnlocked ? `onclick="goToScene('region', {selectedRegion:'${r.id}'})"` : ''}>
      <span class="pin-icon">${r.icon}</span>
      <span class="pin-name">${r.name}</span>
      ${!isUnlocked ? '<span class="pin-lock">🔒</span>' : `<span class="pin-wines">${(r.wines||[]).length} Weine</span>`}
    </div>`;
  }).join('');

  return `
    <div class="scene scene-map active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="map-bg">
          <div class="map-title-bar">
            <h2>🗺️ Weinregionen der Welt</h2>
            <button class="btn btn-small btn-secondary" onclick="goToScene('restaurant')">← Zurück zum Restaurant</button>
          </div>
          <div class="map-world">
            ${regions}
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== REGION INFO =====
function renderRegion() {
  const r = REGIONS[state.selectedRegion];
  if (!r) return renderMap();

  const winesHtml = r.wines.map(wId => {
    const w = WINES[wId];
    if (!w) return '';
    const dot = w.color === 'rot' ? '🔴' : w.color === 'weiss' ? '⚪' : '🩷';
    return `<div class="region-wine-card">
      <div class="rwc-color">${dot}</div>
      <div class="rwc-info">
        <div class="rwc-name">${w.name}</div>
        <div class="rwc-detail">${w.sweetness} · ${w.flavors.join(', ')}</div>
      </div>
      <div class="rwc-pairings">🍽️ ${w.pairings.slice(0,2).join(', ')}</div>
    </div>`;
  }).join('');

  return `
    <div class="scene scene-region active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="region-bg">
          <div class="region-header">
            <button class="btn btn-small btn-secondary" onclick="goToScene('map')">← Karte</button>
            <h2>${r.icon} ${r.name}</h2>
            <div></div>
          </div>
          <div class="region-body">
            <div class="region-desc">
              <p>${r.description}</p>
              ${r.keyFacts.length ? '<div class="region-facts">' + r.keyFacts.map(f => `<div class="fact-item">📌 ${f}</div>`).join('') + '</div>' : ''}
            </div>
            <div class="region-wines-list">
              <h3>Weine aus ${r.name}</h3>
              ${winesHtml || '<p class="muted">Noch keine Weine für diese Region.</p>'}
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== RESTAURANT =====
function renderRestaurant() {
  const lv = getLevel();
  const shift = state.currentShift;

  if (!shift) return renderRestaurantLobby();
  if (!state.currentQuestion) return renderShiftEnd();
  return renderQuestion();
}

function renderRestaurantLobby() {
  const lv = getLevel();
  const rep = state.player.reputation[state.player.level];
  const stars = renderStars(rep);

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <!-- Background layer -->
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/imbiss/hintergrund.png')"></div>
          <!-- Foreground counter layer -->
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/imbiss/theke.png')"></div>

          <!-- UI overlay -->
          <div class="rest-ui-overlay">
            <div class="lobby-card">
              <div class="lobby-icon">${lv.icon}</div>
              <h2 class="lobby-title">${lv.name}</h2>
              <p class="lobby-desc">${lv.description}</p>
              <div class="lobby-stats">
                <div class="lobby-stat">
                  <span class="lobby-stat-label">Dein Ruf</span>
                  <span class="lobby-stat-value">${stars}</span>
                </div>
                <div class="lobby-stat">
                  <span class="lobby-stat-label">Bekannte Weine</span>
                  <span class="lobby-stat-value">${state.player.discoveredWines.size}</span>
                </div>
              </div>
              <div class="lobby-buttons">
                <button class="btn btn-primary btn-large" onclick="startShift()">🍽️ Schicht starten</button>
                <button class="btn btn-secondary" onclick="goToScene('explorer', {explorerWineIndex:0})">📚 Weine wiederholen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

function renderQuestion() {
  const q = state.currentQuestion;
  const shift = state.currentShift;
  const lv = getLevel();

  let dialogContent = '';
  if (q.type === 'besserwisser') {
    dialogContent = renderBesserwisserQ(q);
  } else {
    dialogContent = renderPairingQ(q);
  }

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/imbiss/hintergrund.png')"></div>
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/imbiss/theke.png')"></div>

          <!-- Shift HUD -->
          <div class="shift-hud">
            <div class="hud-item">Gast ${shift.questionIndex + 1}/${CONFIG.questionsPerShift}</div>
            <div class="hud-item hud-score">✅ ${shift.correct} ❌ ${shift.wrong}</div>
          </div>

          <!-- Dialog -->
          <div class="dialog-container">
            ${dialogContent}
          </div>
        </div>
      </div>
      ${renderBottomBar()}

      ${state.overlay === 'feedback' ? renderFeedbackOverlay() : ''}
    </div>`;
}

function renderPairingQ(q) {
  const answered = q.answered !== undefined;

  const optionsHtml = q.data.options.map((opt, i) => {
    const wine = WINES[opt.wineId];
    let cls = 'dialog-choice';
    if (answered) {
      if (opt.correct) cls += ' correct';
      else if (i === q.answered && !opt.correct) cls += ' wrong';
    }
    const dot = wine.color === 'rot' ? '🔴' : wine.color === 'weiss' ? '⚪' : '🩷';
    return `<button class="${cls}" ${answered ? 'disabled' : ''} onclick="answerQuestion(${i})">
      <span class="choice-wine">${dot} ${wine.name}</span>
      <span class="choice-detail">${wine.sweetness} · ${wine.flavors.slice(0,2).join(', ')}</span>
    </button>`;
  }).join('');

  return `
    <div class="dialog-box">
      <div class="dialog-header">
        <span class="dialog-guest">${q.data.guestMood} ${q.data.guestName || 'Gast'}</span>
      </div>
      <div class="dialog-body">
        <p class="dialog-scenario">${q.data.scenario}</p>
        <p class="dialog-question">${q.data.question}</p>
      </div>
      <div class="dialog-choices">
        ${optionsHtml}
      </div>
    </div>`;
}

function renderBesserwisserQ(q) {
  const answered = q.answered !== undefined;
  const data = q.data;

  let responseHtml = '';
  if (answered) {
    const wasRight = (q.answered === data.isCorrect);
    responseHtml = `
      <div class="bw-result ${wasRight ? 'correct' : 'wrong'}">
        <div class="bw-verdict">${wasRight ? '✅ Richtig erkannt!' : '❌ Leider daneben!'}</div>
        <p class="bw-correction">${data.correction}</p>
        <button class="btn btn-primary" onclick="nextQuestion()">Weiter →</button>
      </div>`;
  } else {
    responseHtml = `
      <div class="dialog-choices">
        <button class="dialog-choice bw-choice" onclick="answerBesserwisser('true')">
          <span class="choice-wine">👍 "Stimmt, da haben Sie recht!"</span>
        </button>
        <button class="dialog-choice bw-choice" onclick="answerBesserwisser('false')">
          <span class="choice-wine">😏 "Da muss ich widersprechen..."</span>
        </button>
      </div>`;
  }

  return `
    <div class="dialog-box dialog-besserwisser">
      <div class="dialog-header">
        <span class="dialog-guest">${data.guestMood} ${data.guestName || 'Besserwisser'}</span>
        <span class="bw-badge">🧐 BESSERWISSER</span>
      </div>
      <div class="dialog-body">
        <p class="dialog-scenario bw-statement">"${data.statement.replace(/"/g, '')}"</p>
      </div>
      ${responseHtml}
    </div>`;
}

function renderFeedbackOverlay() {
  const d = state.overlayData;
  return `
    <div class="overlay-backdrop" onclick="nextQuestion()">
      <div class="feedback-card ${d.correct ? 'fb-correct' : 'fb-wrong'}" onclick="event.stopPropagation()">
        <div class="fb-icon">${d.correct ? '✅' : '❌'}</div>
        <h3>${d.correct ? 'Richtig!' : 'Nicht ganz...'}</h3>
        <p class="fb-explanation">${d.explanation}</p>
        ${d.funFact ? `<p class="fb-funfact">💡 ${d.funFact}</p>` : ''}
        <div class="fb-xp">+${d.xp} XP</div>
        <button class="btn btn-primary" onclick="nextQuestion()">Weiter →</button>
      </div>
    </div>`;
}

function renderShiftEnd() {
  const shift = state.currentShift;
  const accuracy = shift.total > 0 ? Math.round((shift.correct / shift.total) * 100) : 0;

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/imbiss/hintergrund.png')"></div>
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/imbiss/theke.png')"></div>

          <div class="rest-ui-overlay">
            <div class="shift-summary-card">
              <h2>🏁 Schicht geschafft!</h2>
              <div class="summary-stats">
                <div class="summary-stat"><div class="stat-num correct">${shift.correct}</div><div class="stat-label">Richtig</div></div>
                <div class="summary-stat"><div class="stat-num wrong">${shift.wrong}</div><div class="stat-label">Falsch</div></div>
                <div class="summary-stat"><div class="stat-num">${accuracy}%</div><div class="stat-label">Quote</div></div>
                <div class="summary-stat"><div class="stat-num xp">+${shift.xpEarned}</div><div class="stat-label">XP</div></div>
              </div>
              <div class="summary-buttons">
                <button class="btn btn-primary" onclick="startShift()">🔄 Nächste Schicht</button>
                <button class="btn btn-secondary" onclick="endShift()">🏠 Zurück</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}

      ${state.overlay === 'levelup' ? renderLevelUpOverlay() : ''}
    </div>`;
}

function renderLevelUpOverlay() {
  const d = state.overlayData;
  const newRegions = d.newLevel.unlockRegions.map(rId => REGIONS[rId]).filter(Boolean);

  return `
    <div class="overlay-backdrop">
      <div class="levelup-card">
        <div class="lu-stars">⭐⭐⭐</div>
        <h2>AUFSTIEG!</h2>
        <div class="lu-new-title">${d.newLevel.icon} ${d.newLevel.name}</div>
        <p class="lu-desc">${d.newLevel.description}</p>
        <div class="lu-regions">
          <h4>Neue Weinregionen:</h4>
          ${newRegions.map(r => `<span class="lu-region">${r.icon} ${r.name}</span>`).join('')}
        </div>
        <button class="btn btn-primary btn-large" onclick="state.overlay=null;state.overlayData=null;goToScene('explorer',{explorerWineIndex:0})">
          🍷 Weine kennenlernen!
        </button>
      </div>
    </div>`;
}

// ===== SHARED UI COMPONENTS =====
function renderSidebar() {
  const levels = CONFIG.levels;
  const current = state.player.level;

  const items = levels.map((lv, i) => {
    const isCurrent = i === current;
    const isUnlocked = i <= current;
    const rep = state.player.reputation[i];
    return `
      <div class="sidebar-item ${isCurrent ? 'current' : ''} ${isUnlocked ? 'unlocked' : 'locked'}"
           ${isUnlocked ? `onclick="state.player.level=${i};goToScene('restaurant')"` : ''}>
        <div class="sidebar-icon">${lv.icon}</div>
        <div class="sidebar-label">${lv.shortName}</div>
        ${isCurrent ? '<div class="sidebar-arrow">◄</div>' : ''}
        ${isUnlocked ? `<div class="sidebar-stars">${renderStarsSmall(rep)}</div>` : '<div class="sidebar-lock">🔒</div>'}
      </div>`;
  }).join('');

  return `
    <div class="sidebar">
      <div class="sidebar-title">🍷</div>
      ${items}
      <div class="sidebar-spacer"></div>
      <div class="sidebar-item map-btn" onclick="goToScene('map')">
        <div class="sidebar-icon">🗺️</div>
        <div class="sidebar-label">Karte</div>
      </div>
    </div>`;
}

function renderBottomBar() {
  const lv = getLevel();
  const next = getNextLevel();
  const xpProg = getXpProgress();

  return `
    <div class="bottom-bar">
      <div class="bb-level">${lv.icon} ${lv.shortName}</div>
      <div class="bb-xp">
        <div class="xp-bar">
          <div class="xp-fill" style="width:${xpProg}%"></div>
        </div>
        <span class="xp-text">${state.player.xp} XP ${next ? `/ ${next.xpNeeded}` : '(MAX)'}</span>
      </div>
      <div class="bb-stats">
        <span>🍷 ${state.player.discoveredWines.size} Weine</span>
        <span>⭐ ${renderStarsSmall(state.player.reputation[state.player.level])}</span>
      </div>
    </div>`;
}

function renderStars(rep) {
  const full = Math.floor(rep / 20);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function renderStarsSmall(rep) {
  const full = Math.floor(rep / 20);
  return '<span class="stars">' +
    Array.from({length: 5}, (_, i) => `<span class="star ${i < full ? 'full' : 'empty'}">${i < full ? '★' : '☆'}</span>`).join('') +
    '</span>';
}

// ===== EVENT DELEGATION =====
function attachEvents() {
  // Events handled via onclick attributes for simplicity
}
