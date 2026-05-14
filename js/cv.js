/* CV page —
   1. Typewriter loop on .cv-name
   2. Reveal-on-scroll for .reveal-up / .reveal-zoom blocks */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Typewriter on Curriculum Vitae */
(() => {
    const el = document.querySelector('.cv-name');
    if (!el || reduceMotion) return;
    const PHRASE = el.dataset.typewriter || '';
    const TYPE_MS = 80, ERASE_MS = 40, END_HOLD = 2400, START_HOLD = 400;
    let i = 0, typing = true;

    function escape(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
    function render() {
        el.innerHTML = escape(PHRASE.slice(0, i)) + '<span class="type-caret"></span>';
    }
    function tick() {
        if (typing) {
            if (i < PHRASE.length) { i++; render(); setTimeout(tick, TYPE_MS); }
            else { typing = false; setTimeout(tick, END_HOLD); }
        } else {
            if (i > 0) { i--; render(); setTimeout(tick, ERASE_MS); }
            else { typing = true; setTimeout(tick, START_HOLD); }
        }
    }
    render();
    setTimeout(tick, START_HOLD);
})();

/* Reveal-on-scroll (mirrors about.js) */
(() => {
    const els = document.querySelectorAll('.reveal-up, .reveal-zoom');
    if (!els.length) return;
    if (reduceMotion) {
        els.forEach(el => el.classList.add('is-revealed'));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('is-revealed');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    els.forEach(el => io.observe(el));
})();
