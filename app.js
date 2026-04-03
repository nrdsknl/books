/* ═══════════════════════════════════════════════════════════
   МЕНІҢ КІТАПТАРЫМ — APP.JS  v3
   Features: localStorage, reading status, reviews, shop links,
             reading goal, dynamic hero stats, price filters
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ─── DEFAULT BOOKS ──────────────────────────────────────── */
const DEFAULT_BOOKS = [
  { id:1,  title:"Иманы гүл",                                               author:"Қайрат Жолдыбайұлы",       price:0,    cat:"Казақ",      emoji:"📗", status:"read", review:"", readDate:"" },
  { id:2,  title:"48 законов власти",                                        author:"Роберт Грин",               price:2950, cat:"Бизнес",     emoji:"⚡", status:"read", review:"", readDate:"" },
  { id:3,  title:"Продавец обуви",                                           author:"Фил Найт",                  price:3000, cat:"Бизнес",     emoji:"👟", status:"read", review:"", readDate:"" },
  { id:4,  title:"Абай жолы (1-том)",                                        author:"Мұхтар Әуезов",             price:0,    cat:"Казақ",      emoji:"🏔️", status:"read", review:"", readDate:"" },
  { id:5,  title:"1894",                                                     author:"Джордж Оруэлл",             price:1600, cat:"Классика",   emoji:"📕", status:"read", review:"", readDate:"" },
  { id:6,  title:"Джек Лондон (шығармалар жинағы)",                         author:"Джек Лондон",               price:3500, cat:"Классика",   emoji:"🌊", status:"read", review:"", readDate:"" },
  { id:7,  title:"Өзбекәлі және мадени майдан",                             author:"Санжар Керімбай",           price:4000, cat:"Казақ",      emoji:"🌿", status:"read", review:"", readDate:"" },
  { id:8,  title:"Искусство любить",                                         author:"Эрих Фромм",                price:1960, cat:"Психология", emoji:"❤️", status:"read", review:"", readDate:"" },
  { id:9,  title:"Посторонний",                                              author:"Альбер Камю",               price:1680, cat:"Философия",  emoji:"🌑", status:"read", review:"", readDate:"" },
  { id:10, title:"Дар психотерапии",                                         author:"Ирвин Ялом",                price:2376, cat:"Психология", emoji:"🧠", status:"read", review:"", readDate:"" },
  { id:11, title:"Вопрос смерти и жизни",                                    author:"Ирвин Ялом",                price:1922, cat:"Психология", emoji:"⏳", status:"read", review:"", readDate:"" },
  { id:12, title:"Подозрение может все",                                     author:"Джон Кехо",                 price:2400, cat:"Психология", emoji:"💡", status:"read", review:"", readDate:"" },
  { id:13, title:"Приключения Тома Сойера",                                  author:"Марк Твен",                 price:2095, cat:"Классика",   emoji:"⚓", status:"read", review:"", readDate:"" },
  { id:14, title:"Логотерапия и экзистенциальный анализ",                    author:"Виктор Франкл",             price:2772, cat:"Философия",  emoji:"🌟", status:"read", review:"", readDate:"" },
  { id:15, title:"Сергек сана",                                              author:"Джо Диспенза",              price:3000, cat:"Психология", emoji:"🧬", status:"reading", review:"", readDate:"" },
  { id:16, title:"Семь навыков на каждый день",                              author:"Шон Кови",                  price:2348, cat:"Бизнес",     emoji:"🎯", status:"read", review:"", readDate:"" },
  { id:17, title:"Не навреди. Истории о жизни, смерти и нейрохирургии",     author:"Генри Марш",                price:5750, cat:"Ғылым",      emoji:"🏥", status:"reading", review:"", readDate:"" },
  { id:18, title:"Как завоевывать друзей и оказывать влияние на людей",     author:"Дейл Карнеги",              price:3300, cat:"Бизнес",     emoji:"🤝", status:"read", review:"", readDate:"" },
  { id:19, title:"Екінші болма",                                             author:"Қуаныш Шонбай",             price:5000, cat:"Казақ",      emoji:"🌅", status:"read", review:"", readDate:"" },
  { id:20, title:"Маркетинг от А до Я",                                      author:"Филип Котлер",              price:2590, cat:"Бизнес",     emoji:"📊", status:"read", review:"", readDate:"" },
  { id:21, title:"Психотрюки. 69 приемов в общении",                        author:"Игорь Рызов",               price:0,    cat:"Психология", emoji:"🎭", status:"read", review:"", readDate:"" },
  { id:22, title:"Пять языков любви",                                        author:"Гэри Чепмен",               price:0,    cat:"Психология", emoji:"💌", status:"read", review:"", readDate:"" },
  { id:23, title:"Шұғаның белгісі",                                         author:"Бейімбет Майлин",           price:2414, cat:"Казақ",      emoji:"🌸", status:"read", review:"", readDate:"" },
  { id:24, title:"Оң қол",                                                   author:"Төлен Әбдік",               price:0,    cat:"Казақ",      emoji:"✋", status:"read", review:"", readDate:"" },
  { id:25, title:"Парасат майданы",                                          author:"Төлен Әбдік",               price:0,    cat:"Казақ",      emoji:"🏛️", status:"read", review:"", readDate:"" },
  { id:26, title:"Өзіңмен әңгіме",                                          author:"Марк Аврелий",              price:2490, cat:"Философия",  emoji:"🪞", status:"read", review:"", readDate:"" },
  { id:27, title:"Өмірге ғашық болу",                                       author:"Санжар Керімбай",           price:3000, cat:"Казақ",      emoji:"💫", status:"read", review:"", readDate:"" },
  { id:28, title:"Вавилондағы ең бай адам",                                 author:"Джордж Клейсон",            price:2490, cat:"Бизнес",     emoji:"🪙", status:"read", review:"", readDate:"" },
  { id:29, title:"Сүйекші",                                                  author:"Дулат Исабеков",            price:1400, cat:"Казақ",      emoji:"🦴", status:"read", review:"", readDate:"" },
  { id:30, title:"Гаухар тас",                                               author:"Дулат Исабеков",            price:1400, cat:"Казақ",      emoji:"💎", status:"read", review:"", readDate:"" },
  { id:31, title:"Искусство войны",                                          author:"Сунь-Цзы",                  price:2350, cat:"Философия",  emoji:"⚔️", status:"read", review:"", readDate:"" },
  { id:32, title:"Никогда не спорьте с идиотами",                           author:"Томас Сас",                 price:1750, cat:"Психология", emoji:"🙅", status:"read", review:"", readDate:"" },
  { id:33, title:"Хватит быть славным парнем",                               author:"Роберт Гловер",             price:2610, cat:"Психология", emoji:"💪", status:"read", review:"", readDate:"" },
  { id:34, title:"Кез Келген Адаймен Сейілесу Өнері",                       author:"Ларри Кинг",                price:2559, cat:"Бизнес",     emoji:"🎙️", status:"read", review:"", readDate:"" },
  { id:35, title:"Педагогика",                                               author:"Мағжан Жұмабаев",           price:2000, cat:"Казақ",      emoji:"📐", status:"read", review:"", readDate:"" },
  { id:36, title:"Иметь или быть",                                           author:"Эрих Фромм",                price:2095, cat:"Философия",  emoji:"🤔", status:"read", review:"", readDate:"" },
  { id:37, title:"Искусство быть",                                           author:"Эрих Фромм",                price:1850, cat:"Философия",  emoji:"🎨", status:"read", review:"", readDate:"" },
  { id:38, title:"Жүсіп-Зылиха",                                            author:"Ахмет Байтұрсынов",         price:1500, cat:"Казақ",      emoji:"📜", status:"read", review:"", readDate:"" },
  { id:39, title:"Сказать жизни Да!",                                        author:"Виктор Франкл",             price:3430, cat:"Философия",  emoji:"🌈", status:"reading", review:"", readDate:"" },
  { id:40, title:"Эмоциональные триггеры",                                   author:"Дэвид Риккардо",            price:2290, cat:"Психология", emoji:"⚡", status:"read", review:"", readDate:"" },
  { id:41, title:"Кішкентай ханзада",                                        author:"Антуан де Сент-Экзюпери",  price:1500, cat:"Классика",   emoji:"🌹", status:"read", review:"", readDate:"" },
  { id:42, title:"Өмірде жеңілдету өнері",                                  author:"Марк Мэнсон",               price:2799, cat:"Психология", emoji:"🎸", status:"read", review:"", readDate:"" },
  { id:43, title:"Как перестать беспокоиться и начать жить",                author:"Дейл Карнеги",              price:5798, cat:"Психология", emoji:"☀️", status:"read", review:"", readDate:"" },
  { id:44, title:"Қуыскеуде",                                                author:"Санжар Керімбай",           price:3000, cat:"Казақ",      emoji:"🏡", status:"read", review:"", readDate:"" },
  { id:45, title:"Қаныштың жастық шағы",                                    author:"Төкен Оразов",              price:1500, cat:"Казақ",      emoji:"📖", status:"read", review:"", readDate:"" },
];

/* ─── CAT / SPINE COLORS ─────────────────────────────────── */
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

/* ═══ STORAGE ═══ */
const SK_BOOKS = 'mylib_books_v3';
const SK_WISH  = 'mylib_wishlist_v3';
const SK_THEME = 'mylib_theme_v3';

const _ls = (() => { try { return window['local'+'Storage']; } catch(e) { return null; } })();
function sSet(k, v) { try { if (_ls) _ls.setItem(k, JSON.stringify(v)); } catch(e) {} }
function sGet(k, fb) { try { if (!_ls) return fb; const r = _ls.getItem(k); return r !== null ? JSON.parse(r) : fb; } catch(e) { return fb; } }

/* ═══ STATE ═══ */
let BOOKS    = sGet(SK_BOOKS, DEFAULT_BOOKS);
BOOKS = BOOKS.map(b => ({ ...b }));

let wishlist = sGet(SK_WISH, []);
let isDark   = sGet(SK_THEME, window.matchMedia('(prefers-color-scheme: dark)').matches);

let currentFilter = 'all';
let currentView   = 'grid';
let searchQuery   = '';
let statsPriceMode= 'expensive';

/* ═══ HELPERS ═══ */
const fmt  = n => n ? n.toLocaleString('kk-KZ') + ' ₸' : '';
const esc  = s => s.replace(/"/g, '&quot;').replace(/</g, '&lt;');
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
  const f  = getFiltered();
  const d  = anim ? 700 : 0;
  animateCount(document.querySelector('[data-role="count"]'),   f.length, d);
  animateCount(document.getElementById('totalPrice'),           f.reduce((s, b) => s + (b.price||0), 0), d, ' ₸');
  animateCount(document.querySelector('[data-role="authors"]'), new Set(f.map(b => b.author)).size, d);
  const ey = document.querySelector('.hero-eyebrow');
  if (ey) {
    ey.textContent = currentFilter !== 'all' ? `${currentFilter} — ${f.length} кітап` : 'Жеке кітапхана';
  }
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
    return `
      <div class="book-card reveal" style="animation-delay:${delay}ms" data-id="${b.id}" tabindex="0">
        <div class="book-card-top">
          <span class="book-num">#${String(b.id).padStart(2,'0')}</span>
        </div>
        <div class="book-spine${b.cover ? ' has-cover' : ''}" style="background:${b.cover ? 'transparent' : getSpineGradient(b.cat)}">${spineContent}</div>
        <div class="book-content">
          <div class="book-title">${b.title}</div>
          <div class="book-author"><i class="ph ph-user"></i>${b.author}</div>
          <div class="book-footer">${price}<span class="book-cat" style="${getCatStyle(b.cat)}">${b.cat}</span></div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.book-card').forEach(c => {
    c.addEventListener('click', () => openModal(+c.dataset.id));
    c.addEventListener('keydown', e => e.key === 'Enter' && openModal(+c.dataset.id));
  });
}

/* ═══ MODAL (edit) ═══ */
function openModal(id) {
  const b = BOOKS.find(x => x.id === id);
  if (!b) return;
  const ov   = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  const catOpts = ['Казақ','Психология','Философия','Бизнес','Классика','Ғылым','Жалпы']
    .map(c => `<option ${b.cat===c?'selected':''}>${c}</option>`).join('');
  const emojis = '📗📕📘📙📖📚⚡🌟🧠❤️🌊🏔️🌿🌑⏳💡⚓🧬🎯🤝🌅📊🎭💌🌸✋🏛️🪞💫🪙🦴💎⚔️🙅💪🎙️📐🤔🎨📜🌈☀️🏡📖🎸🌹🏥'.match(/./gu)
    .map(e => `<option ${b.emoji===e?'selected':''}>${e}</option>`).join('');

  const mSpineBg  = b.cover ? 'transparent' : getSpineGradient(b.cat);
  const mSpineHTML = b.cover
    ? `<img class="modal-cover-img" src="${esc(b.cover)}" alt="" onerror="this.style.display='none'" /><span class="book-cover-fallback" style="display:none">${b.emoji}</span>`
    : b.emoji;

  body.innerHTML = `
    <div class="modal-spine${b.cover ? ' has-cover' : ''}" id="mSpine" style="background:${mSpineBg}">${mSpineHTML}</div>
    <div class="modal-num">Кітап #${String(b.id).padStart(2,'0')}</div>
    <div class="modal-edit-form">
      <div class="form-group"><label>Кітап атауы</label><input id="meTitle" value="${esc(b.title)}" /></div>
      <div class="form-group"><label>Автор</label><input id="meAuthor" value="${esc(b.author)}" /></div>
      <div class="form-row modal-form-row">
        <div class="form-group"><label>Бағасы (₸)</label><input type="number" id="mePrice" value="${b.price||''}" placeholder="0" /></div>
        <div class="form-group"><label>Категория</label><select id="meCat">${catOpts}</select></div>
      </div>
      <div class="form-group">
        <label><i class="ph ph-image"></i> Мұқаба URL</label>
        <input id="meCover" value="${esc(b.cover||'')}" placeholder="https://… (суреттің сілтемесі)" />
      </div>
      <div class="form-row modal-form-row">
        <div class="form-group full"><label>Эмодзи (мұқаба жоқ болғанда)</label><select id="meEmoji">${emojis}</select></div>
      </div>
      <div class="modal-actions">
        <button class="btn-save" id="meSave"><i class="ph ph-floppy-disk"></i> Сақтау</button>
        <button class="btn-cancel btn-del-book" id="meDelete"><i class="ph ph-trash"></i> Жою</button>
      </div>
    </div>`;

  // live spine preview — cover URL
  function updateSpinePreview() {
    const spineEl = document.getElementById('mSpine');
    const coverUrl = document.getElementById('meCover')?.value.trim();
    const cat   = document.getElementById('meCat')?.value;
    const emoji = document.getElementById('meEmoji')?.value;
    if (coverUrl) {
      spineEl.classList.add('has-cover');
      spineEl.style.background = 'transparent';
      spineEl.innerHTML = `<img class="modal-cover-img" src="${esc(coverUrl)}" alt="" onerror="this.style.display='none'" />`;
    } else {
      spineEl.classList.remove('has-cover');
      spineEl.style.background = getSpineGradient(cat);
      spineEl.textContent = emoji;
    }
  }
  document.getElementById('meCover')?.addEventListener('input', updateSpinePreview);
  document.getElementById('meCat')?.addEventListener('change', updateSpinePreview);
  document.getElementById('meEmoji')?.addEventListener('change', updateSpinePreview);

  document.getElementById('meSave').onclick = () => {
    const t = document.getElementById('meTitle').value.trim();
    const a = document.getElementById('meAuthor').value.trim();
    if (!t || !a) { showToast('Атауы мен авторды толтырыңыз', 'error'); return; }
    const idx = BOOKS.findIndex(x => x.id === id);
    if (idx < 0) return;
    BOOKS[idx] = { ...BOOKS[idx],
      title: t, author: a,
      price: +document.getElementById('mePrice').value || 0,
      cat:   document.getElementById('meCat').value,
      emoji: document.getElementById('meEmoji').value,
      cover: document.getElementById('meCover').value.trim(),
    };
    sSet(SK_BOOKS, BOOKS); showToast('Сақталды ✓'); closeModal(); renderBooks(); updateHeroStats(false);
  };
  document.getElementById('meDelete').onclick = () => {
    if (!confirm(`"${b.title}" — жою керек пе?`)) return;
    BOOKS = BOOKS.filter(x => x.id !== id);
    sSet(SK_BOOKS, BOOKS); showToast('Жойылды'); closeModal(); renderBooks(); updateHeroStats(false);
  };

  ov.classList.remove('hidden'); document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('modalOverlay').classList.add('hidden'); document.body.style.overflow = ''; }
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target.id === 'modalOverlay') closeModal(); });
document.addEventListener('keydown', e => e.key === 'Escape' && closeModal());

/* ═══ ADD NEW BOOK ═══ */
document.getElementById('addBookBtn').addEventListener('click', () => {
  document.getElementById('addBookForm').classList.remove('hidden');
  document.getElementById('newTitle').focus();
});
document.getElementById('cancelNewBook').addEventListener('click', () => {
  document.getElementById('addBookForm').classList.add('hidden');
});
document.getElementById('saveNewBook').addEventListener('click', () => {
  const t = document.getElementById('newTitle').value.trim();
  const a = document.getElementById('newAuthor').value.trim();
  if (!t || !a) { showToast('Атауы мен авторды толтырыңыз', 'error'); return; }
  BOOKS.push({ id: nextId(), title: t, author: a,
    price: +document.getElementById('newPrice').value || 0,
    cat: document.getElementById('newCat').value,
    emoji: document.getElementById('newEmoji').value || '📖',
    cover: document.getElementById('newCover')?.value.trim() || '',
    status: 'unread', review: '', readDate: ''
  });
  sSet(SK_BOOKS, BOOKS); showToast('Кітап қосылды ✓');
  document.getElementById('addBookForm').classList.add('hidden');
  ['newTitle','newAuthor','newPrice','newCover'].forEach(id => { const el = document.getElementById(id); if(el) el.value=''; });
  renderBooks(); updateHeroStats(false);
});

/* ═══ WISHLIST ═══ */
function saveWish() { sSet(SK_WISH, wishlist); }

document.getElementById('addWishBtn').addEventListener('click', () => {
  document.getElementById('wishForm').classList.remove('hidden');
  document.getElementById('wTitle').focus();
});
document.getElementById('cancelWish').addEventListener('click', () => {
  document.getElementById('wishForm').classList.add('hidden');
});
document.getElementById('saveWish').addEventListener('click', () => {
  const t = document.getElementById('wTitle').value.trim();
  const a = document.getElementById('wAuthor').value.trim();
  if (!t || !a) { showToast('Атауы мен авторды толтырыңыз', 'error'); return; }
  const link = document.getElementById('wShopLink')?.value.trim() || '';
  wishlist.push({
    id: Date.now(), title: t, author: a,
    price: +document.getElementById('wPrice').value || 0,
    category: document.getElementById('wCategory').value,
    note: document.getElementById('wNote').value.trim(),
    link,
  });
  saveWish(); showToast('Тізімге қосылды ✓');
  renderWishlist();
  document.getElementById('wishForm').classList.add('hidden');
  ['wTitle','wAuthor','wPrice','wNote','wShopLink']
    .forEach(id => { const el = document.getElementById(id); if(el) el.value=''; });
});

function renderWishlist() {
  const tb = document.getElementById('wishTableBody');
  const em = document.getElementById('wishEmpty');
  if (!wishlist.length) { tb.innerHTML = ''; em.classList.remove('hidden'); return; }
  em.classList.add('hidden');
  tb.innerHTML = wishlist.map((w, i) => {
    // Support both new `link` field and legacy `shops` object
    const url = w.link || (w.shops && Object.values(w.shops)[0]) || '';
    let linkCell = '<span class="text-faint">—</span>';
    if (url) {
      let color = '#01696F', letter = '🔗', label = 'Сілтеме';
      try {
        const host = new URL(url).hostname.toLowerCase();
        if      (host.includes('kaspi'))       { color='#F14635'; letter='K'; label='Kaspi'; }
        else if (host.includes('teez'))        { color='#222222'; letter='T'; label='Teez'; }
        else if (host.includes('wildberries') || host.includes('wb.ru')) { color='#A73AED'; letter='W'; label='Wildberries'; }
        else if (host.includes('ozon'))        { color='#005BFF'; letter='O'; label='Ozon'; }
      } catch(e) {}
      const inner = letter === '🔗'
        ? `<i class="ph ph-link" style="font-size:0.85rem"></i>`
        : `<span class="shop-letter">${letter}</span>`;
      linkCell = `<a href="${esc(url)}" target="_blank" rel="noopener" class="shop-icon" title="${label}" style="--sc:${color}">${inner}</a>`;
    }
    return `<tr>
      <td>${i+1}</td>
      <td class="td-title">${w.title}</td>
      <td>${w.author}</td>
      <td><span class="book-cat" style="${getCatStyle(w.category)}">${w.category}</span></td>
      <td>${w.price ? fmt(w.price) : '—'}</td>
      <td class="td-shops">${linkCell}</td>
      <td class="td-note">${w.note || '—'}</td>
      <td><button class="btn-del" data-id="${w.id}" title="Жою"><i class="ph ph-trash"></i></button></td>
    </tr>`;
  }).join('');

  tb.querySelectorAll('.btn-del').forEach(btn => {
    btn.addEventListener('click', () => {
      wishlist = wishlist.filter(x => x.id !== +btn.dataset.id);
      saveWish(); showToast('Жойылды'); renderWishlist();
    });
  });
}

/* ═══ STATS ═══ */
function renderStats() {
  const tp = BOOKS.reduce((s, b) => s + (b.price||0), 0);
  const bp = BOOKS.filter(b => b.price > 0);
  const avg = bp.length ? Math.round(tp / bp.length) : 0;
  const ac = new Set(BOOKS.map(b => b.author)).size;

  animateCount(document.getElementById('statTotalPrice'), tp, 1100, ' ₸');
  animateCount(document.getElementById('statAuthors'), ac, 900);
  animateCount(document.getElementById('statAvgPrice'), avg, 1000, ' ₸');
  const stEl = document.getElementById('statBookCount');
  if (stEl) animateCount(stEl, BOOKS.length, 800);

  // top authors
  const am = {}; BOOKS.forEach(b => am[b.author] = (am[b.author]||0)+1);
  const ta = Object.entries(am).sort((a,b) => b[1]-a[1]).slice(0,8);
  const mx = ta[0]?.[1]||1;
  document.getElementById('authorsList').innerHTML = ta.map(([n,c]) => `
    <li class="author-item"><span class="author-name">${n}</span>
    <div class="author-bar-wrap"><div class="author-bar" style="width:${Math.round(c/mx*100)}%"></div></div>
    <span class="author-count">${c}</span></li>`).join('');

  // categories
  const cm = {}; BOOKS.forEach(b => cm[b.cat] = (cm[b.cat]||0)+1);
  const sc = Object.entries(cm).sort((a,b) => b[1]-a[1]);
  const mxc = sc[0]?.[1]||1;
  document.getElementById('catList').innerHTML = sc.map(([cat,c]) => `
    <li class="cat-item"><span class="author-name">${cat}</span>
    <div class="author-bar-wrap"><div class="author-bar cat-bar" style="width:${Math.round(c/mxc*100)}%"></div></div>
    <span class="author-count">${c}</span></li>`).join('');

  renderPriceTable();
}

function renderPriceTable() {
  const bp = BOOKS.filter(b => b.price > 0);
  let sorted, label;
  if (statsPriceMode === 'cheap') {
    sorted = [...bp].sort((a,b) => a.price - b.price).slice(0,10);
    label = 'Ең арзан 10 кітап';
  } else {
    sorted = [...bp].sort((a,b) => b.price - a.price).slice(0,10);
    label = 'Ең қымбат 10 кітап';
  }
  const te = document.getElementById('priceSectionTitle'); if (te) te.textContent = label;
  document.querySelectorAll('.price-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.priceMode === statsPriceMode));
  document.getElementById('priceTableBody').innerHTML = sorted.map((b, i) => {
    const cls = i===0?'top1':i===1?'top2':i===2?'top3':'';
    return `<tr><td class="price-rank">${i+1}</td><td class="price-name">${b.title}</td><td>${b.author}</td><td class="price-val ${cls}">${fmt(b.price)}</td></tr>`;
  }).join('');
}
document.addEventListener('click', e => { const b = e.target.closest('.price-filter-btn'); if(b){statsPriceMode=b.dataset.priceMode;renderPriceTable();} });

/* ═══ EXCEL EXPORT (ExcelJS — толық түстермен) ═══ */
const ECAT_BG = { 'Казақ':'E8F5E9','Психология':'F3E5F5','Философия':'E3F2FD','Бизнес':'FFF3E0','Классика':'FFFDE7','Ғылым':'E0F7FA' };
const ECAT_FG = { 'Казақ':'1B5E20','Психология':'4A148C','Философия':'0D47A1','Бизнес':'E65100','Классика':'F57F17','Ғылым':'006064' };

function ejFill(hex)   { return { type:'pattern', pattern:'solid', fgColor:{ argb:'FF'+hex } }; }
function ejFont(o={})  { return { name:'Calibri', size:o.sz||11, bold:!!o.bold, italic:!!o.italic, color:{ argb:'FF'+(o.color||'1E1B15') } }; }
function ejAlign(h,wrap){ return { horizontal:h||'center', vertical:'middle', wrapText:!!wrap }; }
const ejBorder = {
  top:{style:'thin',color:{argb:'FFD8D0C0'}}, bottom:{style:'thin',color:{argb:'FFD8D0C0'}},
  left:{style:'thin',color:{argb:'FFD8D0C0'}}, right:{style:'thin',color:{argb:'FFD8D0C0'}}
};

async function exportBooks() {
  if (typeof ExcelJS === 'undefined') { showToast('ExcelJS жүктелмеді', 'error'); return; }
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Кітаптар тізімі');
  ws.views = [{ showGridLines: false }];
  const today = new Date().toLocaleDateString('kk-KZ');
  const count = BOOKS.length;
  const dataEnd  = 5 + count;
  const totalRowN = dataEnd + 1;
  const noteRowN  = totalRowN + 2;

  ws.columns = [
    { width: 2  }, { width: 6  }, { width: 14 },
    { width: 46 }, { width: 26 }, { width: 14 },
  ];

  // Row 1 — spacer
  ws.getRow(1).height = 6;

  // Row 2 — Title
  ws.getRow(2).height = 44;
  ws.mergeCells('B2:F2');
  const t2 = ws.getCell('B2');
  t2.value = '📚  МЕНІҢ КІТАПТАРЫМ';
  t2.font = ejFont({ bold:true, sz:18, color:'FFFFFF' });
  t2.fill = ejFill('0C4E54');
  t2.alignment = ejAlign('center');

  // Row 3 — Date
  ws.getRow(3).height = 22;
  ws.mergeCells('B3:F3');
  const t3 = ws.getCell('B3');
  t3.value = `Жаңартылған күні: ${today} · ${count} кітап`;
  t3.font = ejFont({ italic:true, sz:10, color:'7A7974' });
  t3.fill = ejFill('F9F8F5');
  t3.alignment = ejAlign('center');

  // Row 4 — spacer
  ws.getRow(4).height = 8;

  // Row 5 — Headers
  ws.getRow(5).height = 32;
  const hdrVals  = [null, '№', 'Мұқаба', 'Кітап атауы', 'Автор', 'Бағасы (₸)'];
  const hdrAligns = ['center','center','center','left','left','center'];
  hdrVals.forEach((h, ci) => {
    if (!h) return;
    const c = ws.getRow(5).getCell(ci + 1);
    c.value = h;
    c.font  = ejFont({ bold:true, sz:11, color:'FFFFFF' });
    c.fill  = ejFill('01696F');
    c.alignment = ejAlign(hdrAligns[ci]);
    c.border = ejBorder;
  });

  // Data rows
  BOOKS.forEach((b, i) => {
    const rn  = i + 6;
    const row = ws.getRow(rn);
    row.height = 36;
    const bg    = i % 2 === 0 ? 'F9F8F5' : 'EFE9DC';
    const catBg = ECAT_BG[b.cat] || bg;
    const catFg = ECAT_FG[b.cat] || '1E1B15';

    const cNum = row.getCell(2);
    cNum.value = b.id; cNum.font = ejFont({ bold:true, sz:10, color:'01696F' });
    cNum.fill = ejFill(bg); cNum.alignment = ejAlign('center'); cNum.border = ejBorder;

    const cCov = row.getCell(3);
    cCov.fill = ejFill(bg); cCov.alignment = ejAlign('center'); cCov.border = ejBorder;

    const cTtl = row.getCell(4);
    cTtl.value = b.title; cTtl.font = ejFont({ bold:true, sz:11, color:catFg });
    cTtl.fill = ejFill(catBg); cTtl.alignment = ejAlign('left', true); cTtl.border = ejBorder;

    const cAuth = row.getCell(5);
    cAuth.value = b.author; cAuth.font = ejFont({ italic:true, sz:10, color:'4A4540' });
    cAuth.fill = ejFill(bg); cAuth.alignment = ejAlign('left'); cAuth.border = ejBorder;

    const cPrc = row.getCell(6);
    if (b.price > 0) { cPrc.value = b.price; cPrc.numFmt = '#,##0 ₸'; cPrc.font = ejFont({ bold:true, sz:11, color:'01696F' }); }
    else             { cPrc.value = '—'; cPrc.font = ejFont({ sz:11, color:'7A7974' }); }
    cPrc.fill = ejFill(bg); cPrc.alignment = ejAlign('center'); cPrc.border = ejBorder;
  });

  // Total row
  ws.getRow(totalRowN).height = 28;
  ws.mergeCells(`B${totalRowN}:E${totalRowN}`);
  const totL = ws.getCell(`B${totalRowN}`);
  totL.value = 'БАРЛЫҒЫ БАҒАСЫ:';
  totL.font = ejFont({ bold:true, sz:11, color:'FFFFFF' });
  totL.fill = ejFill('01696F'); totL.alignment = ejAlign('right');

  const totV = ws.getCell(`F${totalRowN}`);
  totV.value = { formula: `SUM(F6:F${dataEnd})` };
  totV.numFmt = '#,##0 ₸';
  totV.font = ejFont({ bold:true, sz:12, color:'FFFFFF' });
  totV.fill = ejFill('0C4E54'); totV.alignment = ejAlign('center');

  // Note
  ws.getRow(noteRowN).height = 20;
  ws.mergeCells(`B${noteRowN}:F${noteRowN}`);
  const noteC = ws.getCell(`B${noteRowN}`);
  noteC.value = 'Ескертпе: «Мұқаба» бағанына кітаптың суретін өзіңіз енгізіңіз.';
  noteC.font = ejFont({ italic:true, sz:9, color:'7A7974' });
  noteC.alignment = ejAlign('left');

  const buf  = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], { type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `Менің_кітаптарым_${new Date().toISOString().slice(0,10)}.xlsx`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`Excel жүктелді ✓ (${count} кітап)`);
}

async function exportWish() {
  if (!wishlist.length) { showToast('Жоспар бос', 'error'); return; }
  if (typeof ExcelJS === 'undefined') { showToast('ExcelJS жүктелмеді', 'error'); return; }
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Оқу жоспары');
  ws.views = [{ showGridLines: false }];
  const today = new Date().toLocaleDateString('kk-KZ');

  ws.columns = [{width:2},{width:5},{width:40},{width:24},{width:14},{width:14},{width:28},{width:36}];

  ws.getRow(1).height = 6;
  ws.getRow(2).height = 40;
  ws.mergeCells('B2:H2');
  const t2 = ws.getCell('B2');
  t2.value = '📖  ОҚУ ЖОСПАРЫМ';
  t2.font = ejFont({bold:true,sz:16,color:'FFFFFF'}); t2.fill = ejFill('0C4E54'); t2.alignment = ejAlign('center');

  ws.getRow(3).height = 22;
  ws.mergeCells('B3:H3');
  const t3 = ws.getCell('B3');
  t3.value = `Жаңартылған күні: ${today} · ${wishlist.length} кітап`;
  t3.font = ejFont({italic:true,sz:10,color:'7A7974'}); t3.fill = ejFill('F9F8F5'); t3.alignment = ejAlign('center');

  ws.getRow(4).height = 8;
  ws.getRow(5).height = 30;
  ['№','Кітап атауы','Автор','Категория','Бағасы (₸)','Ескертпе','Сілтеме'].forEach((h, ci) => {
    const c = ws.getRow(5).getCell(ci + 2);
    c.value = h; c.font = ejFont({bold:true,sz:11,color:'FFFFFF'});
    c.fill = ejFill('C97B1A'); c.alignment = ejAlign(ci===0?'center':'left'); c.border = ejBorder;
  });

  wishlist.forEach((w, i) => {
    const rn = i + 6;
    ws.getRow(rn).height = 32;
    const bg = i % 2 === 0 ? 'FFF9F0' : 'FFF3E0';
    [i+1, w.title, w.author, w.category, w.price||'—', w.note||'', w.link||''].forEach((v, ci) => {
      const c = ws.getRow(rn).getCell(ci + 2);
      c.value = typeof v === 'number' ? v : String(v);
      c.font = ejFont({sz:11,color:'1E1B15'});
      c.fill = ejFill(bg); c.alignment = ejAlign(ci===0?'center':'left'); c.border = ejBorder;
    });
  });

  const buf  = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], { type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `Оқу_жоспарым_${new Date().toISOString().slice(0,10)}.xlsx`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('Жоспар жүктелді ✓');
}

document.getElementById('exportExcelBtn')?.addEventListener('click', exportBooks);
document.getElementById('exportWishBtn')?.addEventListener('click',  exportWish);
/* ═══ RESET ═══ */
document.getElementById('resetDataBtn')?.addEventListener('click', () => {
  if (!confirm('Бастапқы деректерге қайту?')) return;
  BOOKS = JSON.parse(JSON.stringify(DEFAULT_BOOKS)); wishlist = [];
  sSet(SK_BOOKS, BOOKS); sSet(SK_WISH, wishlist);
  showToast('Қалпына келтірілді'); renderBooks(); updateHeroStats(false); renderWishlist();
});

/* ═══ INIT ═══ */
document.addEventListener('DOMContentLoaded', () => {
  renderBooks(); renderWishlist(); updateHeroStats(true);
});
