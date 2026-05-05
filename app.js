/* ═══════════════════════════════════════════════════════════
   МЕНІҢ КІТАПТАРЫМ — APP.JS  v4
   Features: localStorage, reading status, star rating,
             read date, reviews, shop links,
             dynamic hero stats, price filters
   ═══════════════════════════════════════════════════════════ */
'use strict';

const DEFAULT_BOOKS = [
  { id:1,  title:"Иманы гүл",                                               author:"Қайрат Жолдыбайұлы",       price:0,    cat:"Казақ",      emoji:"📗", status:"read",    review:"", readDate:"", rating:5 },
  { id:2,  title:"48 законов власти",                                        author:"Роберт Грин",               price:2950, cat:"Бизнес",     emoji:"⚡", status:"read",    review:"", readDate:"", rating:4 },
  { id:3,  title:"Продавец обуви",                                           author:"Фил Найт",                  price:3000, cat:"Бизнес",     emoji:"👟", status:"read",    review:"", readDate:"", rating:4 },
  { id:4,  title:"Абай жолы (1-том)",                                        author:"Мұхтар Әуезов",             price:0,    cat:"Казақ",      emoji:"🏔️", status:"read",    review:"", readDate:"", rating:5 },
  { id:5,  title:"1984",                                                     author:"Джордж Оруэлл",             price:1600, cat:"Классика",   emoji:"📕", status:"read",    review:"", readDate:"", rating:5 },
  { id:6,  title:"Джек Лондон (шығармалар жинағы)",                         author:"Джек Лондон",               price:3500, cat:"Классика",   emoji:"🌊", status:"read",    review:"", readDate:"", rating:4 },
  { id:7,  title:"Өзбекәлі және мадени майдан",                             author:"Санжар Керімбай",           price:4000, cat:"Казақ",      emoji:"🌿", status:"read",    review:"", readDate:"", rating:4 },
  { id:8,  title:"Искусство любить",                                         author:"Эрих Фромм",                price:1960, cat:"Психология", emoji:"❤️", status:"read",    review:"", readDate:"", rating:5 },
  { id:9,  title:"Посторонний",                                              author:"Альбер Камю",               price:1680, cat:"Философия",  emoji:"🌑", status:"read",    review:"", readDate:"", rating:5 },
  { id:10, title:"Дар психотерапии",                                         author:"Ирвин Ялом",                price:2376, cat:"Психология", emoji:"🧠", status:"read",    review:"", readDate:"", rating:5 },
  { id:11, title:"Вопрос смерти и жизни",                                    author:"Ирвин Ялом",                price:1922, cat:"Психология", emoji:"⏳", status:"read",    review:"", readDate:"", rating:5 },
  { id:12, title:"Подозрение может все",                                     author:"Джон Кехо",                 price:2400, cat:"Психология", emoji:"💡", status:"read",    review:"", readDate:"", rating:4 },
  { id:13, title:"Приключения Тома Сойера",                                  author:"Марк Твен",                 price:2095, cat:"Классика",   emoji:"⚓", status:"read",    review:"", readDate:"", rating:4 },
  { id:14, title:"Логотерапия и экзистенциальный анализ",                    author:"Виктор Франкл",             price:2772, cat:"Философия",  emoji:"🌟", status:"read",    review:"", readDate:"", rating:5 },
  { id:15, title:"Сергек сана",                                              author:"Джо Диспенза",              price:3000, cat:"Психология", emoji:"🧬", status:"reading", review:"", readDate:"", rating:0 },
  { id:16, title:"Семь навыков на каждый день",                              author:"Шон Кови",                  price:2348, cat:"Бизнес",     emoji:"🎯", status:"read",    review:"", readDate:"", rating:4 },
  { id:17, title:"Не навреди. Истории о жизни, смерти и нейрохирургии",     author:"Генри Марш",                price:5750, cat:"Ғылым",      emoji:"🏥", status:"reading", review:"", readDate:"", rating:0 },
  { id:18, title:"Как завоевывать друзей и оказывать влияние на людей",     author:"Дейл Карнеги",              price:3300, cat:"Бизнес",     emoji:"🤝", status:"read",    review:"", readDate:"", rating:4 },
  { id:19, title:"Екінші болма",                                             author:"Қуаныш Шонбай",             price:5000, cat:"Казақ",      emoji:"🌅", status:"read",    review:"", readDate:"", rating:5 },
  { id:20, title:"Маркетинг от А до Я",                                      author:"Филип Котлер",              price:2590, cat:"Бизнес",     emoji:"📊", status:"read",    review:"", readDate:"", rating:3 },
  { id:21, title:"Психотрюки. 69 приемов в общении",                        author:"Игорь Рызов",               price:0,    cat:"Психология", emoji:"🎭", status:"read",    review:"", readDate:"", rating:4 },
  { id:22, title:"Пять языков любви",                                        author:"Гэри Чепмен",               price:0,    cat:"Психология", emoji:"💌", status:"read",    review:"", readDate:"", rating:4 },
  { id:23, title:"Шұғаның белгісі",                                         author:"Бейімбет Майлин",           price:2414, cat:"Казақ",      emoji:"🌸", status:"read",    review:"", readDate:"", rating:5 },
  { id:24, title:"Оң қол",                                                   author:"Төлен Әбдік",               price:0,    cat:"Казақ",      emoji:"✋", status:"read",    review:"", readDate:"", rating:4 },
  { id:25, title:"Парасат майданы",                                          author:"Төлен Әбдік",               price:0,    cat:"Казақ",      emoji:"🏛️", status:"read",    review:"", readDate:"", rating:4 },
  { id:26, title:"Өзіңмен әңгіме",                                          author:"Марк Аврелий",              price:2490, cat:"Философия",  emoji:"🪞", status:"read",    review:"", readDate:"", rating:5 },
  { id:27, title:"Өмірге ғашық болу",                                       author:"Санжар Керімбай",           price:3000, cat:"Казақ",      emoji:"💫", status:"read",    review:"", readDate:"", rating:5 },
  { id:28, title:"Вавилондағы ең бай адам",                                 author:"Джордж Клейсон",            price:2490, cat:"Бизнес",     emoji:"🪙", status:"read",    review:"", readDate:"", rating:4 },
  { id:29, title:"Сүйекші",                                                  author:"Дулат Исабеков",            price:1400, cat:"Казақ",      emoji:"🦴", status:"read",    review:"", readDate:"", rating:4 },
  { id:30, title:"Гаухар тас",                                               author:"Дулат Исабеков",            price:1400, cat:"Казақ",      emoji:"💎", status:"read",    review:"", readDate:"", rating:4 },
  { id:31, title:"Искусство войны",                                          author:"Сунь-Цзы",                  price:2350, cat:"Философия",  emoji:"⚔️", status:"read",    review:"", readDate:"", rating:4 },
  { id:32, title:"Никогда не спорьте с идиотами",                           author:"Томас Сас",                 price:1750, cat:"Психология", emoji:"🙅", status:"read",    review:"", readDate:"", rating:3 },
  { id:33, title:"Хватит быть славным парнем",                               author:"Роберт Гловер",             price:2610, cat:"Психология", emoji:"💪", status:"read",    review:"", readDate:"", rating:4 },
  { id:34, title:"Кез Келген Адаймен Сейілесу Өнері",                       author:"Ларри Кинг",                price:2559, cat:"Бизнес",     emoji:"🎙️", status:"read",    review:"", readDate:"", rating:4 },
  { id:35, title:"Педагогика",                                               author:"Мағжан Жұмабаев",           price:2000, cat:"Казақ",      emoji:"📐", status:"read",    review:"", readDate:"", rating:5 },
  { id:36, title:"Иметь или быть",                                           author:"Эрих Фромм",                price:2095, cat:"Философия",  emoji:"🤔", status:"read",    review:"", readDate:"", rating:5 },
  { id:37, title:"Искусство быть",                                           author:"Эрих Фромм",                price:1850, cat:"Философия",  emoji:"🎨", status:"read",    review:"", readDate:"", rating:4 },
  { id:38, title:"Жүсіп-Зылиха",                                            author:"Ахмет Байтұрсынов",         price:1500, cat:"Казақ",      emoji:"📜", status:"read",    review:"", readDate:"", rating:4 },
  { id:39, title:"Сказать жизни Да!",                                        author:"Виктор Франкл",             price:3430, cat:"Философия",  emoji:"🌈", status:"reading", review:"", readDate:"", rating:0 },
  { id:40, title:"Эмоциональные триггеры",                                   author:"Дэвид Риккардо",            price:2290, cat:"Психология", emoji:"⚡", status:"read",    review:"", readDate:"", rating:4 },
  { id:41, title:"Кішкентай ханзада",                                        author:"Антуан де Сент-Экзюпери",  price:1500, cat:"Классика",   emoji:"🌹", status:"read",    review:"", readDate:"", rating:5 },
  { id:42, title:"Өмірде жеңілдету өнері",                                  author:"Марк Мэнсон",               price:2799, cat:"Психология", emoji:"🎸", status:"read",    review:"", readDate:"", rating:3 },
  { id:43, title:"Как перестать беспокоиться и начать жить",                author:"Дейл Карнеги",              price:5798, cat:"Психология", emoji:"☀️", status:"read",    review:"", readDate:"", rating:4 },
  { id:44, title:"Қуыскеуде",                                                author:"Санжар Керімбай",           price:3000, cat:"Казақ",      emoji:"🏡", status:"read",    review:"", readDate:"", rating:4 },
  { id:45, title:"Қаныштың жастық шағы",                                    author:"Төкен Оразов",              price:1500, cat:"Казақ",      emoji:"📖", status:"read",    review:"", readDate:"", rating:4 },
];

const CAT_COLORS = {
  "Казақ":     { bg:"#f0fdf4", text:"#166534", dark_bg:"#14532d", dark_text:"#86efac" },
  "Психология":{ bg:"#fdf4ff", text:"#6b21a8", dark_bg:"#3b0764", dark_text:"#e9d5ff" },
  "Философия": { bg:"#eff6ff", text:"#1d4ed8", dark_bg:"#1e3a5f", dark_text:"#bfdbfe" },
  "Бизнес":    { bg:"#fff7ed", text:"#9a3412", dark_bg:"#431407", dark_text:"#fed7aa" },
  "Классика":  { bg:"#fefce8", text:"#854d0e", dark_bg:"#422006", dark_text:"#fef08a" },
  "Ғылым":     { bg:"#ecfdf5", text:"#065f46", dark_bg:"#064e3b", dark_text:"#6ee7b7" },
  "Жалпы":     { bg:"#f8fafc", text:"#475569", dark_bg:"#1e293b", dark_text:"#cbd5e1" },
};
const SPINE_GRADIENTS = {
  "Казақ":     ["#f0fdf4","#dcfce7","#4ade80"],
  "Психология":["#fdf4ff","#f3e8ff","#c084fc"],
  "Философия": ["#eff6ff","#dbeafe","#60a5fa"],
  "Бизнес":    ["#fff7ed","#ffedd5","#fb923c"],
  "Классика":  ["#fefce8","#fef9c3","#facc15"],
  "Ғылым":     ["#ecfdf5","#d1fae5","#34d399"],
  "Жалпы":     ["#f8fafc","#f1f5f9","#94a3b8"],
};

const SK_BOOKS = 'mylib_books_v3';
const SK_WISH  = 'mylib_wishlist_v3';
const SK_THEME = 'mylib_theme_v3';

const _ls = (() => { try { return window['local'+'Storage']; } catch(e) { return null; } })();
function sSet(k, v) { try { if (_ls) _ls.setItem(k, JSON.stringify(v)); } catch(e) {} }
function sGet(k, fb) { try { if (!_ls) return fb; const r = _ls.getItem(k); return r !== null ? JSON.parse(r) : fb; } catch(e) { return fb; } }

let BOOKS    = sGet(SK_BOOKS, DEFAULT_BOOKS);
BOOKS = BOOKS.map(b => ({ rating: 0, readDate: '', review: '', status: 'unread', ...b }));

let wishlist = sGet(SK_WISH, []);
let isDark   = sGet(SK_THEME, window.matchMedia('(prefers-color-scheme: dark)').matches);

let currentFilter  = 'all';
let currentView    = 'grid';
let searchQuery    = '';
let statsPriceMode = 'expensive';

const fmt = n => n ? n.toLocaleString('kk-KZ') + ' ₸' : '';
const esc = s => String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function getCatStyle(cat) {
  const c = CAT_COLORS[cat] || CAT_COLORS['Жалпы'];
  return isDark ? `background:${c.dark_bg};color:${c.dark_text}` : `background:${c.bg};color:${c.text}`;
}
function getSpineGradient(cat) {
  const g = SPINE_GRADIENTS[cat] || SPINE_GRADIENTS['Жалпы'];
  return `linear-gradient(135deg, ${g[0]} 0%, ${g[1]} 60%, ${g[2]}55 100%)`;
}
function nextId() { return BOOKS.length ? Math.max(...BOOKS.map(b => b.id)) + 1 : 1; }

function animateCount(el, target, dur = 900, sfx = '') {
  if (!el) return;
  if (!dur) { el.textContent = (isFinite(target) ? Math.round(target).toLocaleString('kk-KZ') : '0') + sfx; return; }
  const st = performance.now();
  (function step(ts) {
    const p = Math.min((ts - st) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target).toLocaleString('kk-KZ') + sfx;
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
}

function showToast(msg, type = 'success') {
  document.getElementById('toast')?.remove();
  const t = document.createElement('div'); t.id = 'toast';
  t.className = `toast toast-${type}`;
  t.innerHTML = `<i class="ph ph-${type === 'success' ? 'check-circle' : 'warning-circle'}"></i> ${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('toast-show'));
  setTimeout(() => { t.classList.remove('toast-show'); setTimeout(() => t.remove(), 400); }, 2500);
}

function renderStars(rating) {
  let h = '';
  for (let i = 1; i <= 5; i++) h += `<span class="star${i <= rating ? ' filled' : ''}">${i <= rating ? '★' : '☆'}</span>`;
  return `<div class="book-stars">${h}</div>`;
}

/* ═══ THEME ═══ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeIcon').className = isDark ? 'ph-fill ph-sun' : 'ph ph-moon';
}
document.getElementById('themeToggle').addEventListener('click', () => {
  isDark = !isDark; sSet(SK_THEME, isDark); applyTheme(); renderBooks();
});
applyTheme();

/* ═══ TABS ═══ */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    if (btn.dataset.tab === 'stats')    renderStats();
    if (btn.dataset.tab === 'wishlist') renderWishlist();
  });
});

/* ═══ CATEGORY CHIPS ═══ */
document.querySelectorAll('.chip[data-filter]').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-filter]').forEach(c => c.classList.remove('active'));
    chip.classList.add('active'); currentFilter = chip.dataset.filter;
    renderBooks(); updateHeroStats();
  });
});

/* ═══ SEARCH ═══ */
const searchInput = document.getElementById('searchInput');
const clearBtn    = document.getElementById('clearSearch');
searchInput.addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  clearBtn.classList.toggle('hidden', !searchQuery);
  renderBooks(); updateHeroStats();
});
clearBtn.addEventListener('click', () => {
  searchInput.value = ''; searchQuery = ''; clearBtn.classList.add('hidden');
  renderBooks(); updateHeroStats();
});

/* ═══ VIEW TOGGLE ═══ */
document.getElementById('viewGrid').addEventListener('click', () => {
  currentView = 'grid';
  document.getElementById('viewGrid').classList.add('active');
  document.getElementById('viewList').classList.remove('active');
  document.getElementById('booksGrid').classList.remove('list-view');
});
document.getElementById('viewList').addEventListener('click', () => {
  currentView = 'list';
  document.getElementById('viewList').classList.add('active');
  document.getElementById('viewGrid').classList.remove('active');
  document.getElementById('booksGrid').classList.add('list-view');
});

/* ═══ FILTERED BOOKS ═══ */
function getFiltered() {
  return BOOKS.filter(b => {
    const mc = currentFilter === 'all' || b.cat === currentFilter;
    const mq = !searchQuery || b.title.toLowerCase().includes(searchQuery) || b.author.toLowerCase().includes(searchQuery);
    return mc && mq;
  });
}

/* ═══ HERO STATS ═══ */
function updateHeroStats(anim = true) {
  const f = getFiltered();
  const d = anim ? 700 : 0;
  animateCount(document.querySelector('[data-role="count"]'),   f.length, d);
  animateCount(document.getElementById('totalPrice'),           f.reduce((s, b) => s + (b.price || 0), 0), d, ' ₸');
  animateCount(document.querySelector('[data-role="authors"]'), new Set(f.map(b => b.author)).size, d);
  const ey = document.querySelector('.hero-eyebrow');
  if (ey) ey.textContent = currentFilter !== 'all' ? `${currentFilter} — ${f.length} кітап` : 'Жеке кітапхана';
}

/* ═══ RENDER BOOKS ═══ */
function renderBooks() {
  const grid = document.getElementById('booksGrid');
  const nr   = document.getElementById('noResults');
  const f    = getFiltered();
  if (!f.length) { grid.innerHTML = ''; nr.classList.remove('hidden'); return; }
  nr.classList.add('hidden');

  grid.innerHTML = f.map((b, i) => {
    const price = b.price ? `<span class="book-price">${fmt(b.price)}</span>` : `<span class="book-price free">—</span>`;
    const delay = Math.min(i * 30, 350);
    const spineContent = b.cover
      ? `<img class="book-cover-img" src="${esc(b.cover)}" alt="${esc(b.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span class="book-cover-fallback">${b.emoji}</span>`
      : b.emoji;
    const statusLabel = b.status === 'read' ? 'Оқыдым' : b.status === 'reading' ? 'Оқып жатырмын' : 'Жоспарда';
    const statusCls   = b.status === 'read' ? 'st-read' : b.status === 'reading' ? 'st-reading' : 'st-unread';
    const starsHtml   = b.rating ? renderStars(b.rating) : '';
    return `
      <div class="book-card reveal" style="animation-delay:${delay}ms" data-id="${b.id}" tabindex="0">
        <div class="book-card-top">
          <span class="book-num">#${String(b.id).padStart(2,'0')}</span>
          <span class="book-status ${statusCls}">${statusLabel}</span>
        </div>
        <div class="book-spine${b.cover ? ' has-cover' : ''}" style="background:${b.cover ? 'transparent' : getSpineGradient(b.cat)}">${spineContent}</div>
        <div class="book-content">
          <div class="book-title">${b.title}</div>
          <div class="book-author"><i class="ph ph-user"></i>${b.author}</div>
          <div class="book-footer">${price}<span class="book-cat" style="${getCatStyle(b.cat)}">${b.cat}</span></div>
          ${starsHtml}
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.book-card').forEach(c => {
    c.addEventListener('click', () => openModal(+c.dataset.id));
    c.addEventListener('keydown', e => e.key === 'Enter' && openModal(+c.dataset.id));
  });
}

/* ═══ MODAL ═══ */
function openModal(id) {
  const b = BOOKS.find(x => x.id === id);
  if (!b) return;
  const ov   = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  const catOpts = ['Казақ','Психология','Философия','Бизнес','Классика','Ғылым','Жалпы']
    .map(c => `<option ${b.cat===c?'selected':''}>${c}</option>`).join('');

  const emojiList = ['📖','📗','📕','📘','📙','📚','⚡','🌟','🧠','❤️','🌊','🏔️','🌿','🌑','⏳','💡','🌈','☀️','🎸','🎨','📜','🎯','📊','💌','🌸','✋','🏛️','🪞','💫','🪙','🦴','💎','⚔️','🙅','💪','🎙️','📐','🤔','🌹','🌅','🏡','🏥','🧬'];
  const emojiOpts = emojiList.map(e => `<option ${b.emoji===e?'selected':''}>${e}</option>`).join('');

  const spineHtml = b.cover
    ? `<div class="modal-spine has-cover"><img class="modal-cover-img" src="${esc(b.cover)}" alt="${esc(b.title)}" onerror="this.style.display='none'" /></div>`
    : `<div class="modal-spine" style="background:${getSpineGradient(b.cat)};font-size:4rem;display:flex;align-items:center;justify-content:center">${b.emoji}</div>`;

  const statusClass = b.status === 'read' ? 'st-read' : b.status === 'reading' ? 'st-reading' : 'st-unread';

  body.innerHTML = `
    <div class="modal-num">#${String(b.id).padStart(2,'0')}</div>
    ${spineHtml}
    <h2 class="modal-title">${b.title}</h2>
    <p class="modal-author"><i class="ph ph-user"></i>${b.author}</p>
    <form class="modal-form" onsubmit="return false">
      <div class="modal-form-row">
        <div class="form-group"><label>Кітап атауы</label><input id="meTitle" value="${esc(b.title)}" /></div>
        <div class="form-group"><label>Автор</label><input id="meAuthor" value="${esc(b.author)}" /></div>
      </div>
      <div class="modal-form-row">
        <div class="form-group"><label>Бағасы (₸)</label><input type="number" id="mePrice" value="${b.price||0}" /></div>
        <div class="form-group"><label>Категория</label><select id="meCat">${catOpts}</select></div>
        <div class="form-group"><label>Эмодзи</label><select id="meEmoji">${emojiOpts}</select></div>
      </div>
      <div class="modal-form-row">
        <div class="form-group">
          <label>Оқу мәртебесі</label>
          <select id="modalStatus" class="status-select ${statusClass}">
            <option value="unread"  ${b.status==='unread' ?'selected':''}>Жоспарда</option>
            <option value="reading" ${b.status==='reading'?'selected':''}>Оқып жатырмын</option>
            <option value="read"    ${b.status==='read'   ?'selected':''}>Оқыдым</option>
          </select>
        </div>
        <div class="form-group"><label>Оқылған күні</label><input type="date" id="meReadDate" value="${b.readDate||''}" /></div>
      </div>
      <div id="modalStarsWrap"></div>
      <div class="form-group">
        <label><i class="ph ph-image"></i> Мұқаба URL</label>
        <input id="meCover" value="${esc(b.cover||'')}" placeholder="https://…" />
      </div>
      <div class="review-group">
        <label style="display:flex;align-items:center;gap:var(--s2);font-size:var(--text-xs);font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s2)">
          <i class="ph ph-note-pencil"></i> Пікір / Конспект
        </label>
        <textarea id="meReview" rows="4" placeholder="Кітап туралы ойларыңыз…">${b.review||''}</textarea>
      </div>
      <div class="modal-actions">
        <button class="btn-save" id="meSave"><i class="ph ph-floppy-disk"></i> Сақтау</button>
        <button class="btn-cancel" id="meClose">Жабу</button>
        <button class="btn-cancel btn-del-book" id="meDelete" style="margin-left:auto"><i class="ph ph-trash"></i> Жою</button>
      </div>
    </form>`;

  /* Star rating widget */
  let currentRating = b.rating || 0;
  const starsWrap = document.getElementById('modalStarsWrap');
  function drawStars() {
    starsWrap.innerHTML = '';
    const lbl = document.createElement('div');
    lbl.style.cssText = 'font-size:var(--text-xs);font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px';
    lbl.textContent = 'Бағалау';
    starsWrap.appendChild(lbl);
    const row = document.createElement('div');
    row.className = 'book-stars';
    for (let i = 1; i <= 5; i++) {
      const s = document.createElement('span');
      s.className = 'star' + (i <= currentRating ? ' filled' : '');
      s.textContent = i <= currentRating ? '★' : '☆';
      s.style.cssText = 'cursor:pointer;font-size:1.5rem';
      s.addEventListener('click', () => { currentRating = i; drawStars(); });
      row.appendChild(s);
    }
    starsWrap.appendChild(row);
  }
  drawStars();

  /* Status select dynamic styling */
  const statusSel = document.getElementById('modalStatus');
  statusSel.addEventListener('change', () => {
    statusSel.className = 'status-select ' +
      (statusSel.value === 'read' ? 'st-read' : statusSel.value === 'reading' ? 'st-reading' : 'st-unread');
  });

  /* Save */
  document.getElementById('meSave').addEventListener('click', () => {
    const idx = BOOKS.findIndex(x => x.id === id);
    if (idx === -1) return;
    const newTitle  = document.getElementById('meTitle').value.trim();
    const newAuthor = document.getElementById('meAuthor').value.trim();
    if (!newTitle || !newAuthor) { showToast('Атау мен авторды толтырыңыз', 'error'); return; }
    BOOKS[idx] = {
      ...BOOKS[idx],
      title:    newTitle,
      author:   newAuthor,
      price:    +document.getElementById('mePrice').value || 0,
      cat:      document.getElementById('meCat').value,
      emoji:    document.getElementById('meEmoji').value,
      readDate: document.getElementById('meReadDate').value,
      cover:    document.getElementById('meCover').value.trim(),
      review:   document.getElementById('meReview').value.trim(),
      status:   statusSel.value,
      rating:   currentRating,
    };
    sSet(SK_BOOKS, BOOKS);
    closeModal();
    renderBooks(); updateHeroStats();
    showToast('Кітап сақталды ✓');
  });

  /* Delete */
  document.getElementById('meDelete').addEventListener('click', () => {
    if (!confirm(`«${b.title}» кітабын жою?`)) return;
    BOOKS = BOOKS.filter(x => x.id !== id);
    sSet(SK_BOOKS, BOOKS);
    closeModal();
    renderBooks(); updateHeroStats();
    showToast('Кітап жойылды', 'error');
  });

  document.getElementById('meClose').addEventListener('click', closeModal);
  ov.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══ ADD NEW BOOK ═══ */
document.getElementById('addBookBtn').addEventListener('click', () => {
  document.getElementById('addBookForm').classList.toggle('hidden');
});
document.getElementById('cancelNewBook').addEventListener('click', () => {
  document.getElementById('addBookForm').classList.add('hidden');
});
document.getElementById('saveNewBook').addEventListener('click', () => {
  const title  = document.getElementById('newTitle').value.trim();
  const author = document.getElementById('newAuthor').value.trim();
  if (!title || !author) { showToast('Кітап атауы мен авторды енгізіңіз', 'error'); return; }
  const newBook = {
    id:       nextId(),
    title,
    author,
    price:    +document.getElementById('newPrice').value || 0,
    cat:      document.getElementById('newCat').value,
    emoji:    document.getElementById('newEmoji').value,
    cover:    document.getElementById('newCover').value.trim(),
    status:   'unread',
    review:   '',
    readDate: '',
    rating:   0,
  };
  BOOKS.push(newBook);
  sSet(SK_BOOKS, BOOKS);
  document.getElementById('addBookForm').classList.add('hidden');
  ['newTitle','newAuthor','newPrice','newCover'].forEach(fid => { document.getElementById(fid).value = ''; });
  renderBooks(); updateHeroStats();
  showToast('Жаңа кітап қосылды ✓');
});

/* ═══ WISHLIST ═══ */
document.getElementById('addWishBtn').addEventListener('click', () => {
  document.getElementById('wishForm').classList.toggle('hidden');
});
document.getElementById('cancelWish').addEventListener('click', () => {
  document.getElementById('wishForm').classList.add('hidden');
});
document.getElementById('saveWish').addEventListener('click', () => {
  const title  = document.getElementById('wTitle').value.trim();
  const author = document.getElementById('wAuthor').value.trim();
  if (!title || !author) { showToast('Кітап атауы мен авторды енгізіңіз', 'error'); return; }
  const item = {
    id:    Date.now(),
    title,
    author,
    price: +document.getElementById('wPrice').value || 0,
    cat:   document.getElementById('wCategory').value,
    link:  document.getElementById('wShopLink').value.trim(),
    note:  document.getElementById('wNote').value.trim(),
  };
  wishlist.push(item);
  sSet(SK_WISH, wishlist);
  document.getElementById('wishForm').classList.add('hidden');
  ['wTitle','wAuthor','wPrice','wShopLink','wNote'].forEach(fid => { document.getElementById(fid).value = ''; });
  renderWishlist();
  showToast('Жоспарға қосылды ✓');
});

function renderWishlist() {
  const tbody = document.getElementById('wishTableBody');
  const empty = document.getElementById('wishEmpty');
  if (!wishlist.length) {
    tbody.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  tbody.innerHTML = wishlist.map((w, i) => {
    const price    = w.price ? `${w.price.toLocaleString('kk-KZ')} ₸` : '—';
    const catStyle = getCatStyle(w.cat || 'Жалпы');
    const linkHtml = w.link
      ? `<a href="${esc(w.link)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:4px;color:var(--accent);font-size:var(--text-xs);font-weight:600;text-decoration:none"><i class="ph ph-arrow-square-out"></i> Ашу</a>`
      : '—';
    return `<tr>
      <td>${i + 1}</td>
      <td class="td-title">${w.title}</td>
      <td>${w.author}</td>
      <td><span class="book-cat" style="${catStyle}">${w.cat || 'Жалпы'}</span></td>
      <td>${price}</td>
      <td class="td-shops">${linkHtml}</td>
      <td class="td-note">${w.note || ''}</td>
      <td><button class="btn-del" data-wid="${w.id}" title="Жою"><i class="ph ph-trash"></i></button></td>
    </tr>`;
  }).join('');
  tbody.querySelectorAll('.btn-del').forEach(btn => {
    btn.addEventListener('click', () => {
      wishlist = wishlist.filter(w => w.id !== +btn.dataset.wid);
      sSet(SK_WISH, wishlist);
      renderWishlist();
      showToast('Жоспардан жойылды', 'error');
    });
  });
}

/* ═══ STATS ═══ */
function renderStats() {
  const paid = BOOKS.filter(b => b.price > 0);
  const total = BOOKS.length;
  const totalPrice = BOOKS.reduce((s, b) => s + (b.price || 0), 0);
  const authors = new Set(BOOKS.map(b => b.author)).size;
  const avgPrice = paid.length ? Math.round(totalPrice / paid.length) : 0;

  animateCount(document.getElementById('statBookCount'),  total,      800);
  animateCount(document.getElementById('statTotalPrice'), totalPrice, 900, ' ₸');
  animateCount(document.getElementById('statAuthors'),    authors,    800);
  animateCount(document.getElementById('statAvgPrice'),   avgPrice,   900, ' ₸');

  /* Authors bar chart */
  const authorMap = {};
  BOOKS.forEach(b => { authorMap[b.author] = (authorMap[b.author] || 0) + 1; });
  const sortedAuthors = Object.entries(authorMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxA = sortedAuthors[0]?.[1] || 1;
  document.getElementById('authorsList').innerHTML = sortedAuthors.map(([name, cnt]) =>
    `<li class="author-item">
      <span class="author-name">${name}</span>
      <div class="author-bar-wrap"><div class="author-bar" style="width:${Math.round(cnt / maxA * 100)}%"></div></div>
      <span class="author-count">${cnt}</span>
    </li>`).join('');

  /* Categories bar chart */
  const catMap = {};
  BOOKS.forEach(b => { catMap[b.cat] = (catMap[b.cat] || 0) + 1; });
  const sortedCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
  const maxC = sortedCats[0]?.[1] || 1;
  document.getElementById('catList').innerHTML = sortedCats.map(([cat, cnt]) =>
    `<li class="cat-item">
      <span class="author-name" style="${getCatStyle(cat)};padding:2px 10px;border-radius:99px">${cat}</span>
      <div class="author-bar-wrap"><div class="author-bar cat-bar" style="width:${Math.round(cnt / maxC * 100)}%"></div></div>
      <span class="author-count">${cnt}</span>
    </li>`).join('');

  renderPriceTable();
}

function renderPriceTable() {
  const paid = BOOKS.filter(b => b.price > 0);
  const sorted = [...paid].sort((a, b) =>
    statsPriceMode === 'expensive' ? b.price - a.price : a.price - b.price
  ).slice(0, 10);
  const maxP = sorted[0]?.price || 1;
  document.getElementById('priceTableBody').innerHTML = sorted.map((b, i) =>
    `<tr>
      <td>${i + 1}</td>
      <td>${b.title}</td>
      <td>${b.author}</td>
      <td>${b.price.toLocaleString('kk-KZ')} ₸</td>
      <td><div style="width:100%;background:var(--border);border-radius:4px;height:6px"><div style="height:6px;border-radius:4px;background:var(--accent);width:${Math.round(b.price/maxP*100)}%"></div></div></td>
    </tr>`).join('');
}

document.querySelectorAll('.price-sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.price-sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    statsPriceMode = btn.dataset.sort;
    renderPriceTable();
  });
});

/* ═══ RESET ═══ */
document.getElementById('resetDataBtn').addEventListener('click', () => {
  if (!confirm('Барлық деректерді бастапқы күйге қайтарасыз ба?')) return;
  BOOKS    = DEFAULT_BOOKS.map(b => ({ rating: 0, readDate: '', review: '', status: 'unread', ...b }));
  wishlist = [];
  sSet(SK_BOOKS, BOOKS);
  sSet(SK_WISH,  wishlist);
  renderBooks(); updateHeroStats(); renderWishlist();
  showToast('Деректер қалпына келтірілді ✓');
});

/* ═══ EXCEL EXPORT ═══ */
async function exportBooks() {
  if (typeof ExcelJS === 'undefined') { showToast('ExcelJS жүктелмеді', 'error'); return; }
  try {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Кітаптарым');
    ws.columns = [
      { header: '#',         key: 'n',      width: 6  },
      { header: 'Атауы',     key: 'title',  width: 42 },
      { header: 'Автор',     key: 'author', width: 26 },
      { header: 'Категория', key: 'cat',    width: 14 },
      { header: 'Баға (₸)', key: 'price',  width: 12 },
      { header: 'Мәртебе',   key: 'status', width: 18 },
      { header: 'Бағалау',   key: 'rating', width: 10 },
    ];
    ws.getRow(1).font = { bold: true };
    BOOKS.forEach((b, i) => ws.addRow({
      n:      i + 1,
      title:  b.title,
      author: b.author,
      cat:    b.cat,
      price:  b.price || 0,
      status: b.status === 'read' ? 'Оқыдым' : b.status === 'reading' ? 'Оқып жатырмын' : 'Жоспарда',
      rating: b.rating ? '★'.repeat(b.rating) : '—',
    }));
    const buf  = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'кітаптарым.xlsx'; a.click();
    URL.revokeObjectURL(url);
    showToast('Excel файлы жүктелді ✓');
  } catch (e) { showToast('Excel экспорт қатесі', 'error'); console.error(e); }
}

async function exportWishlist() {
  if (typeof ExcelJS === 'undefined') { showToast('ExcelJS жүктелмеді', 'error'); return; }
  if (!wishlist.length) { showToast('Жоспар тізімі бос', 'error'); return; }
  try {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Жоспар');
    ws.columns = [
      { header: '#',         key: 'n',      width: 6  },
      { header: 'Атауы',     key: 'title',  width: 42 },
      { header: 'Автор',     key: 'author', width: 26 },
      { header: 'Категория', key: 'cat',    width: 14 },
      { header: 'Баға (₸)', key: 'price',  width: 12 },
      { header: 'Сілтеме',   key: 'link',   width: 45 },
      { header: 'Ескертпе',  key: 'note',   width: 32 },
    ];
    ws.getRow(1).font = { bold: true };
    wishlist.forEach((w, i) => ws.addRow({
      n: i + 1, title: w.title, author: w.author,
      cat: w.cat || 'Жалпы', price: w.price || 0,
      link: w.link || '', note: w.note || '',
    }));
    const buf  = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'жоспар.xlsx'; a.click();
    URL.revokeObjectURL(url);
    showToast('Жоспар жүктелді ✓');
  } catch (e) { showToast('Excel экспорт қатесі', 'error'); console.error(e); }
}

document.getElementById('exportExcelBtn').addEventListener('click', exportBooks);
document.getElementById('exportWishBtn').addEventListener('click', exportWishlist);

/* ═══ INIT ═══ */
renderBooks();
updateHeroStats(false);
renderWishlist();
