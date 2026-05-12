/* Portfolio Dolores Riccardo — interactions */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ========== LOADING SCREEN ========== */
(function loader() {
    const el = document.getElementById('loader');
    if (!el) return;
    const count = el.querySelector('.loader-count');
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
        const pct = Math.min(100, Math.round((now - start) / duration * 100));
        count.textContent = pct;
        if (pct < 100) {
            requestAnimationFrame(tick);
        } else {
            el.classList.add('hidden');
            setTimeout(() => el.remove(), 700);
        }
    }
    requestAnimationFrame(tick);
})();

/* ========== SCROLL REVEAL ========== */
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fx').forEach(el => io.observe(el));
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .fx').forEach(el => el.classList.add('in-view'));
});

/* ========== 1. HERO PARALLAX (push down + lock) ==========
   Image starts above viewport (translateY -300).
   On scroll, moves down at 0.4x scroll velocity.
   Locks at translateY 0 (natural position) when hero text "hits" it. */
const heroFrame = document.querySelector('.hero-frame');
const HERO_START = -300;
const HERO_VELOCITY = 0.4;

function updateHeroParallax() {
    if (!heroFrame) return;
    const y = Math.min(0, HERO_START + window.scrollY * HERO_VELOCITY);
    heroFrame.style.transform = `translate3d(0, ${y}px, 0)`;
}

/* ========== 2. WORK TITLES — center word scale, brackets spread, frame grow ==========
   Approaching title (toward viewport center): title-text scales up to 1.8,
   brackets translate ±50px. As scroll continues past title, work-frame
   grows from scale 0.6 to 1.0. */
const works = document.querySelectorAll('.work');

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

function updateWorkAnimations() {
    const vh = window.innerHeight;
    works.forEach(work => {
        const titleEl = work.querySelector('.work-title');
        const frame = work.querySelector('.work-frame');
        if (!titleEl || !frame) return;

        const titleRect = titleEl.getBoundingClientRect();
        const titleCenter = titleRect.top + titleRect.height / 2;
        const distFromCenter = Math.abs(titleCenter - vh / 2);
        const proximity = clamp(1 - distFromCenter / (vh * 0.6), 0, 1);

        const titleText = titleEl.querySelector('.title-text');
        const brackets = titleEl.querySelectorAll('.bracket');
        if (titleText) titleText.style.transform = `scale(${1 + proximity * 0.8})`;
        if (brackets[0]) brackets[0].style.transform = `translateX(${-proximity * 50}px)`;
        if (brackets[1]) brackets[1].style.transform = `translateX(${proximity * 50}px)`;

        /* Frame grows as title scrolls past center toward top.
           progress: 0 when title at viewport bottom, 1 when title at viewport top */
        const progress = clamp(1 - titleCenter / vh, 0, 1);
        const frameScale = 0.6 + progress * 0.4;
        frame.style.transform = `scale(${frameScale})`;
    });
}

/* ========== Single scroll handler with rAF throttle ========== */
let scrollTicking = false;
function onScroll() {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            updateHeroParallax();
            updateWorkAnimations();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}

if (!reduceMotion) {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeroParallax();
    updateWorkAnimations();
}

/* ========== 3. ALL WORK — mouse tracking, opposite direction, staggered speeds ==========
   Each grid item moves opposite to the mouse with its own speed multiplier.
   Opacity stays at 0.5 (set in CSS). */
(function mouseTrack() {
    if (reduceMotion) return;
    const section = document.querySelector('.all-work');
    const items = document.querySelectorAll('.grid-item');
    if (!section || !items.length) return;

    /* Per-item speed (0.6 to 1.8, staggered) */
    const speeds = Array.from(items, (_, i) => 0.6 + (i % 5) * 0.3);

    let pending = false;
    let lastX = 0, lastY = 0;

    section.addEventListener('mousemove', (e) => {
        const r = section.getBoundingClientRect();
        lastX = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        lastY = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        if (!pending) {
            requestAnimationFrame(() => {
                items.forEach((item, i) => {
                    const s = speeds[i];
                    const tx = -lastX * s * 35;
                    const ty = -lastY * s * 35;
                    item.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
                });
                pending = false;
            });
            pending = true;
        }
    });

    section.addEventListener('mouseleave', () => {
        items.forEach(item => { item.style.transform = ''; });
    });
})();

/* ========== Smooth scroll for in-page anchors ========== */
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
