/* Work page — view toggle (Grid / List), scroll-driven card animation,
   and list-row infinite slide animation. */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const panels = document.querySelectorAll('[data-view-panel]');
const buttons = document.querySelectorAll('.view-toggle-btn');

function setView(view) {
    buttons.forEach(b => b.classList.toggle('is-active', b.dataset.view === view));
    panels.forEach(p => { p.hidden = p.dataset.viewPanel !== view; });
    if (view === 'list') buildListRows();
    if (view === 'grid') updateCards();
}

buttons.forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));

/* ===== Grid View — scroll-driven --p on each card ===== */
const cards = document.querySelectorAll('.work-card');

function updateCards() {
    const vh = window.innerHeight;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = clamp((vh - center) / vh, 0, 1);
        card.style.setProperty('--p', progress.toFixed(4));
    });
}

let scrollPending = false;
function onScroll() {
    if (!scrollPending) {
        requestAnimationFrame(() => {
            updateCards();
            scrollPending = false;
        });
        scrollPending = true;
    }
}
if (!reduceMotion) {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateCards();
}

/* ===== List View — fill each row with repeated names + infinite slide ===== */
const listRows = document.querySelectorAll('.list-row');

const SPEED_PX_PER_SEC = 40;

function buildListRows() {
    listRows.forEach((row, rowIdx) => {
        const original = row.querySelector('.list-name');
        if (!original) return;
        const text = original.textContent.trim();
        const activeIdx = parseInt(row.dataset.active || '1', 10);

        row.innerHTML = '';

        const tmp = document.createElement('span');
        tmp.className = 'list-name';
        tmp.style.visibility = 'hidden';
        tmp.textContent = text;
        row.appendChild(tmp);
        const each = tmp.getBoundingClientRect().width
                   + parseFloat(getComputedStyle(tmp).marginRight || 0);
        row.removeChild(tmp);

        const rowWidth = row.clientWidth;
        const M = each > 0 ? Math.max(2, Math.ceil(rowWidth / each) + 1) : 4;

        const inner = document.createElement('span');
        inner.className = 'list-row-inner';

        // Build two identical sets so the loop is seamless.
        for (let pass = 0; pass < 2; pass++) {
            for (let i = 1; i <= M; i++) {
                const s = document.createElement('span');
                s.className = 'list-name' + (i === activeIdx ? ' is-bold' : '');
                s.textContent = text;
                inner.appendChild(s);
            }
        }
        row.appendChild(inner);

        // Measure exact width of the first set (M spans) → animation cycle.
        const names = inner.querySelectorAll('.list-name');
        let cycle = 0;
        for (let i = 0; i < M; i++) {
            const r = names[i].getBoundingClientRect();
            const mr = parseFloat(getComputedStyle(names[i]).marginRight || 0);
            cycle += r.width + mr;
        }
        inner.style.setProperty('--cycle', `${cycle.toFixed(2)}px`);
        inner.style.animationDuration = `${(cycle / SPEED_PX_PER_SEC).toFixed(2)}s`;

        row.classList.remove('right', 'left');
        row.classList.add(rowIdx % 2 === 0 ? 'right' : 'left');
    });
}

window.addEventListener('resize', () => {
    const listPanel = document.querySelector('[data-view-panel="list"]');
    if (listPanel && !listPanel.hidden) buildListRows();
});
