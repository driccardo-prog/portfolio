/* Portfolio Dolores Riccardo — interactions */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ========== 1. LOADING SCREEN ========== */
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

/* ========== 2. SCROLL REVEAL (Intersection Observer) ========== */
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

/* ========== 3. PARALLAX (hero frame) ========== */
const heroFrame = document.querySelector('.hero-frame');
const hero = document.querySelector('.hero');
let parallaxTicking = false;

function updateParallax() {
    if (!heroFrame || !hero) return;
    const heroRect = hero.getBoundingClientRect();
    if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
        const y = window.scrollY;
        heroFrame.style.transform = `translate3d(0, ${y * 0.5}px, 0)`;
    }
    parallaxTicking = false;
}

/* ========== 4. TEXT SCALE ON SCROLL (work titles) ========== */
const workTitles = document.querySelectorAll('.work-title');

function updateTitleScale() {
    const vh = window.innerHeight;
    workTitles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - vh / 2);
        const proximity = Math.max(0, 1 - distance / (vh * 0.6));
        const scale = 1 + proximity * 0.12;
        const bracketShift = proximity * 18;
        title.style.transform = `scale(${scale})`;
        const brackets = title.querySelectorAll('.bracket');
        if (brackets[0]) brackets[0].style.transform = `translateX(${-bracketShift}px)`;
        if (brackets[1]) brackets[1].style.transform = `translateX(${bracketShift}px)`;
    });
}

/* ========== Single scroll handler ========== */
if (!reduceMotion) {
    window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
            requestAnimationFrame(() => {
                updateParallax();
                updateTitleScale();
                parallaxTicking = false;
            });
            parallaxTicking = true;
        }
    }, { passive: true });
    updateTitleScale();
}

/* ========== 5. MOUSE TRACKING (All Work grid items) ========== */
(function mouseTrack() {
    if (reduceMotion) return;
    const section = document.querySelector('.all-work');
    const items = document.querySelectorAll('.grid-item');
    if (!section || !items.length) return;

    /* assign per-item random directions (range -1.5 to 1.5) */
    const dirs = Array.from(items, () => ({
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3
    }));

    let mx = 0, my = 0, ticking = false;

    section.addEventListener('mousemove', (e) => {
        const r = section.getBoundingClientRect();
        mx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        my = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        if (!ticking) {
            requestAnimationFrame(() => {
                items.forEach((item, i) => {
                    const d = dirs[i];
                    item.style.transform = `translate3d(${mx * d.x * 12}px, ${my * d.y * 12}px, 0)`;
                });
                ticking = false;
            });
            ticking = true;
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
