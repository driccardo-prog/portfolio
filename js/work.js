/* Work page — view toggle (Grid / List) + list row repetition */

const panels = document.querySelectorAll('[data-view-panel]');
const buttons = document.querySelectorAll('.view-toggle-btn');

function setView(view) {
    buttons.forEach(b => b.classList.toggle('is-active', b.dataset.view === view));
    panels.forEach(p => { p.hidden = p.dataset.viewPanel !== view; });
    if (view === 'list') buildListRows();
}

buttons.forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));

/* For each .list-row, clone the name span enough times to fill the row width,
   marking the Nth (data-active, 1-based) as bold. */
const listRows = document.querySelectorAll('.list-row');
let listBuilt = false;

function buildListRows() {
    listRows.forEach(row => {
        const original = row.querySelector('.list-name');
        if (!original) return;
        const text = original.textContent.trim();
        const activeIdx = parseInt(row.dataset.active || '1', 10);

        row.innerHTML = '';
        // Measure how many copies fit by inserting until overflow.
        // Use a generous upper bound, then trim.
        const MAX = 12;
        const rowWidth = row.clientWidth;
        let used = 0;
        const tmp = document.createElement('span');
        tmp.className = 'list-name';
        tmp.style.visibility = 'hidden';
        tmp.textContent = text;
        row.appendChild(tmp);
        const each = tmp.getBoundingClientRect().width + parseFloat(getComputedStyle(tmp).marginRight || 0);
        row.removeChild(tmp);
        const fit = each > 0 ? Math.max(2, Math.ceil(rowWidth / each) + 1) : 4;
        const total = Math.min(MAX, fit);

        for (let i = 1; i <= total; i++) {
            const s = document.createElement('span');
            s.className = 'list-name' + (i === activeIdx ? ' is-bold' : '');
            s.textContent = text;
            row.appendChild(s);
        }
    });
    listBuilt = true;
}

window.addEventListener('resize', () => {
    if (!document.querySelector('[data-view-panel="list"]').hidden) buildListRows();
});
