/* Portfolio Dolores Riccardo */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ========== 1. HERO PUSH-DOWN ON SCROLL ==========
   Hero image starts at natural position. Scrolling pushes it down (1:1 with
   scroll) so it stays in viewport. Once scrollY exceeds HERO_LOCK, the image
   stops being offset (the "text catches up" point) and scrolls off naturally. */
const heroFrame = document.querySelector('.hero-frame');
const HERO_LOCK = 360;

function updateHeroPush() {
    if (!heroFrame) return;
    const offset = Math.min(HERO_LOCK, Math.max(0, window.scrollY));
    heroFrame.style.setProperty('--push', `${offset}px`);
}

/* ========== 2. WORK CASES — sequence on intersection ==========
   When the .work enters viewport center band, add .active.
   CSS handles the sequenced transitions (brackets → title → meta → frame). */
const works = document.querySelectorAll('.work');
const workIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting);
    });
}, {
    threshold: 0,
    rootMargin: '-25% 0px -25% 0px'  /* trigger band: middle 50% of viewport */
});

if (!reduceMotion) {
    works.forEach(w => workIO.observe(w));
}

/* ========== 3. SCATTER — scroll parallax + mouse tracking (toward mouse) ========== */
const scatterFrames = document.querySelectorAll('.scatter-frame');

/* Per-element scroll-parallax speed (subtle drift) */
const SCROLL_SPEEDS = [-14, 10, -6, 12, -10, 6, -12, 8];
scatterFrames.forEach((el, i) => {
    el.dataset.scrollSpeed = SCROLL_SPEEDS[i % SCROLL_SPEEDS.length];
    /* mouse speed: varied per item (12 to 28 px range) */
    el.dataset.mouseSpeed = 12 + (i % 5) * 4;
});

let scrollTicking = false;
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
    scrollTicking = false;
}

/* Mouse tracking — moves items TOWARD the mouse position */
const allWork = document.querySelector('.all-work');
let mouseTicking = false;
let lastMX = 0, lastMY = 0;

if (allWork && !reduceMotion) {
    allWork.addEventListener('mousemove', (e) => {
        const r = allWork.getBoundingClientRect();
        lastMX = (e.clientX - r.left - r.width / 2) / (r.width / 2);  /* -1..1 */
        lastMY = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        if (!mouseTicking) {
            requestAnimationFrame(() => {
                scatterFrames.forEach(el => {
                    const s = parseFloat(el.dataset.mouseSpeed);
                    el.style.setProperty('--mx', `${(lastMX * s).toFixed(1)}px`);
                    el.style.setProperty('--my', `${(lastMY * s).toFixed(1)}px`);
                });
                mouseTicking = false;
            });
            mouseTicking = true;
        }
    });

    allWork.addEventListener('mouseleave', () => {
        scatterFrames.forEach(el => {
            el.style.setProperty('--mx', '0px');
            el.style.setProperty('--my', '0px');
        });
    });
}

/* ========== Single scroll handler ========== */
if (!reduceMotion) {
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                updateHeroPush();
                updateScatterScroll();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });
    updateHeroPush();
    updateScatterScroll();
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
