// ============================================================
// DER SOMMELIER — Buch (Akademie zum Nachlesen) und Weinkeller
// Buch: Madame Duvins Lektionen der bereits besuchten Akademie-Tage.
// Keller: alle vorgestellten Weine; Antippen öffnet die Detailkarte.
// ============================================================

// Akademie-Tage, die man schon gesehen hat (abgeschlossen oder übersprungen per Levelcode)
function bookUnlockedDays() {
  return CONFIG.levels.map((lv, i) => i).filter(i =>
    ACADEMY[CONFIG.levels[i].id] && (state.player.academyDone[i] || i < state.player.level));
}

function openBook() {
  const days = bookUnlockedDays();
  const cur = state.player.level;
  goToScene('book', { bookDay: days.includes(cur) ? cur : (days[days.length - 1] ?? 0), bookLesson: -1 });
}

function bookGo(day, lesson) {
  state.bookDay = day;
  state.bookLesson = lesson;
  render();
}

// Vor/Zurück läuft über alle freigeschalteten Tage hinweg (-1 = Einleitung des Tages)
function bookStep(dir) {
  const days = bookUnlockedDays();
  let d = days.indexOf(state.bookDay), l = state.bookLesson + dir;
  const count = i => ACADEMY[CONFIG.levels[days[i]].id].lessons.length;
  if (l >= count(d)) { if (d + 1 >= days.length) return; d++; l = -1; }
  if (l < -1) { if (d === 0) return; d--; l = count(d) - 1; }
  bookGo(days[d], l);
}

function renderBook() {
  const days = bookUnlockedDays();
  if (!days.length) {
    return renderBookFrame('', `<div class="book-page"><h2>Das Buch ist noch leer</h2>
      <p>Hier stehen später Madame Duvins Lektionen zum Nachlesen. Der erste Akademie-Tag beginnt mit deiner ersten Schicht.</p></div>`, '');
  }
  if (!days.includes(state.bookDay)) state.bookDay = days[days.length - 1];
  const dayIdx = state.bookDay, lv = CONFIG.levels[dayIdx], day = ACADEMY[lv.id];
  const li = Math.min(state.bookLesson ?? -1, day.lessons.length - 1);

  const nav = CONFIG.levels.map((l, i) => {
    const open = days.includes(i);
    if (!open) return `<div class="book-day locked">🔒 Tag ${i + 1}</div>`;
    const lessons = i === dayIdx ? `<div class="book-lessons">
        <button class="book-lesson ${li === -1 ? 'active' : ''}" onclick="bookGo(${i}, -1)">Einleitung</button>
        ${ACADEMY[l.id].lessons.map((x, k) => `<button class="book-lesson ${li === k ? 'active' : ''}" onclick="bookGo(${i}, ${k})">${k + 1}. ${x.title}</button>`).join('')}
      </div>` : '';
    return `<button class="book-day ${i === dayIdx ? 'active' : ''}" onclick="bookGo(${i}, -1)">${l.icon} Tag ${i + 1}: ${l.shortName}</button>${lessons}`;
  }).join('');

  const page = li === -1
    ? `<div class="book-kicker">${day.title}</div><h2>Einleitung</h2><p>${day.intro}</p>`
    : `<div class="book-kicker">${day.title} · Lektion ${li + 1} von ${day.lessons.length}</div>
       <h2>${day.lessons[li].title}</h2><p>${day.lessons[li].text}</p>`;

  const d = days.indexOf(dayIdx);
  const atStart = d === 0 && li === -1, atEnd = d === days.length - 1 && li === day.lessons.length - 1;
  const footer = `
    <button class="btn btn-secondary" onclick="bookStep(-1)" ${atStart ? 'disabled' : ''}>← Zurück</button>
    <button class="btn btn-ghost" onclick="goToScene('restaurant')">Buch schließen</button>
    <button class="btn btn-primary" onclick="bookStep(1)" ${atEnd ? 'disabled' : ''}>Weiter →</button>`;

  return renderBookFrame(`<div class="book-nav">${nav}</div>`, `<div class="book-page">${page}</div>`, footer);
}

function renderBookFrame(nav, page, footer) {
  return `
    <div class="scene scene-book active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="book-bg">
          <div class="book-header">
            <span class="explorer-badge">📖 AKADEMIE-BUCH</span>
            <span class="book-sub">Madame Duvins Lektionen zum Nachlesen</span>
          </div>
          <div class="book-body">${nav}${page}</div>
          <div class="book-footer">${footer}</div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== WEINKELLER =====
function renderCellar() {
  const reached = CONFIG.levels.filter((lv, i) => i <= state.player.level);
  const known = Object.values(WINES).filter(w => isWineKnown(w.id));
  const groups = reached.map((lv, i) => {
    const wines = Object.values(WINES).filter(w => w.level === i);
    const cards = wines.map(w => isWineKnown(w.id)
      ? `<button class="cellar-wine" onclick="showWineDetail('${w.id}')">
           <img src="${w.label}" alt="${w.name}" onerror="this.style.visibility='hidden'">
           <span class="cellar-name">${w.name}</span>
         </button>`
      : `<div class="cellar-wine unknown"><div class="cellar-q">?</div><span class="cellar-name">noch nicht vorgestellt</span></div>`
    ).join('');
    return `<div class="cellar-group">
      <h3>${lv.icon} ${lv.shortName}</h3>
      <div class="cellar-row">${cards}</div>
    </div>`;
  }).join('');

  return `
    <div class="scene scene-cellar active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="cellar-bg">
          <div class="book-header">
            <span class="explorer-badge">🍾 WEINKELLER</span>
            <span class="book-sub">${known.length} von ${Object.keys(WINES).length} Weinen vorgestellt · antippen für Details</span>
            <button class="btn btn-small btn-secondary book-close" onclick="goToScene('restaurant')">← Zum Restaurant</button>
          </div>
          <div class="cellar-list">${groups}</div>
        </div>
      </div>
      ${renderBottomBar()}
      ${state.overlay === 'wineDetail' ? renderWineDetailOverlay() : ''}
    </div>`;
}

// Zahl der vorgestellten Weine (dieselbe Zählung wie im Keller)
function knownWineCount() {
  return Object.keys(WINES).filter(isWineKnown).length;
}
