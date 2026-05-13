/* Portfolio Dolores Riccardo */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== Subtle scroll parallax on placeholders ===== */
const placeholders = document.querySelectorAll('.hero-frame, .work-frame, .scatter-frame');

/* Per-element speed (deterministic by index, ranges -14..+14 px) */
const SPEED_CYCLE = [-14, 10, -6, 12, -10, 6, -12, 8];
placeholders.forEach((el, i) => {
    el.dataset.speed = SPEED_CYCLE[i % SPEED_CYCLE.length];
});

let ticking = false;
function updateParallax() {
    const vh = window.innerHeight;
    placeholders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const center = rect.top + rect.height / 2;
        const normalized = (center - vh / 2) / vh;          /* -0.5..0.5 around center */
        const speed = parseFloat(el.dataset.speed);
        const offset = -normalized * speed * 2;             /* drift ~±speed px range */
        el.style.setProperty('--py', `${offset.toFixed(2)}px`);
    });
    ticking = false;
}

if (!reduceMotion) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
    updateParallax();
}

/* ===== Smooth scroll for in-page anchors ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }
    });
});
