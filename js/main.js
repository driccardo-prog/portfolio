/* Portfolio Dolores Riccardo — scroll-driven animations */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ========== 1. HERO PUSH-DOWN (progressive) ==========
   --push grows 0 → 300px progressively over 600px of scroll. */
const heroFrame = document.querySelector('.hero-frame');
const HERO_RANGE = 600;
const HERO_MAX = 300;

function updateHeroPush() {
    if (!heroFrame) return;
    const progress = clamp(window.scrollY / HERO_RANGE, 0, 1);
    heroFrame.style.setProperty('--push', `${(progress * HERO_MAX).toFixed(1)}px`);
}

/* ========== 2. WORK CASES — scroll-driven --p (0..1) ==========
   Progress = 1 when work center is at viewport top, 0 when at viewport bottom.
   CSS reads --p and applies bracket spread, title scale, meta shift, frame expand. */
const works = document.querySelectorAll('.work');

function updateWorks() {
    const vh = window.innerHeight;
    works.forEach(work => {
        const rect = work.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        /* 0 when center at bottom of viewport, 1 when at top */
        const progress = clamp((vh - center) / vh, 0, 1);
        work.style.setProperty('--p', progress.toFixed(4));
    });
}

/* ========== 3. SCATTER — scroll parallax (subtle vertical drift) ========== */
const scatterFrames = document.querySelectorAll('.scatter-frame');
const SCROLL_SPEEDS = [-14, 10, -6, 12, -10, 6, -12, 8];
scatterFrames.forEach((el, i) => {
    el.dataset.scrollSpeed = SCROLL_SPEEDS[i % SCROLL_SPEEDS.length];
    el.dataset.mouseSpeed = 14 + (i % 5) * 5;  /* 14..34 px */
});

function updateScatterScroll() {
    const vh = window.innerHeight;
    scatterFrames.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const center = rect.top + rect.height / 2;
        const normalized = (center - vh / 2) / vh;
        const speed = parseFloat(el.dataset.scrollSpeed);
        const offset = -normalized * speed * 2;
        el.style.setProperty('--py', `${offset.toFixed(2)}px`);
    });
}

/* ========== Single rAF-throttled scroll handler ========== */
let scrollPending = false;
function onScroll() {
    if (!scrollPending) {
        requestAnimationFrame(() => {
            updateHeroPush();
            updateWorks();
            updateScatterScroll();
            scrollPending = false;
        });
        scrollPending = true;
    }
}

if (!reduceMotion) {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeroPush();
    updateWorks();
    updateScatterScroll();
}

/* ========== 4. ALL WORK — mouse tracking with lerp smoothing ==========
   Target mouse position updates on mousemove.
   Continuous rAF loop interpolates current toward target (smooth, no jerk). */
const allWork = document.querySelector('.all-work');

if (allWork && !reduceMotion && scatterFrames.length) {
    let targetMX = 0, targetMY = 0;
    let currentMX = 0, currentMY = 0;
    const LERP = 0.08;  /* 0 = no movement, 1 = instant. 0.08 = smooth lag */

    allWork.addEventListener('mousemove', (e) => {
        const r = allWork.getBoundingClientRect();
        targetMX = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        targetMY = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    });

    allWork.addEventListener('mouseleave', () => {
        targetMX = 0;
        targetMY = 0;
    });

    function mouseLoop() {
        currentMX += (targetMX - currentMX) * LERP;
        currentMY += (targetMY - currentMY) * LERP;
        scatterFrames.forEach(el => {
            const s = parseFloat(el.dataset.mouseSpeed);
            el.style.setProperty('--mx', `${(currentMX * s).toFixed(2)}px`);
            el.style.setProperty('--my', `${(currentMY * s).toFixed(2)}px`);
        });
        requestAnimationFrame(mouseLoop);
    }
    requestAnimationFrame(mouseLoop);
}

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
