/* About page —
   1. Typewriter loop on .about-hello
   2. Scatter frames: scroll parallax + mouse parallax (mirrors home All Work)
   3. Skills marquee: seamless infinite horizontal loop (mirrors List View)
   4. Reveal-on-scroll for .reveal-up / .reveal-zoom blocks
   5. Word-stagger animations on .belief-text and .cta-text */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ===== 1. Typewriter on Hello there, ===== */
(() => {
    const el = document.querySelector('.about-hello');
    if (!el || reduceMotion) return;
    const PHRASE = el.dataset.typewriter || '';
    const TYPE_MS = 90, ERASE_MS = 45, END_HOLD = 2200, START_HOLD = 400;
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

/* ===== 2. Scatter frames — scroll + mouse parallax ===== */
(() => {
    const wrap = document.querySelector('.about-scatter');
    if (!wrap || reduceMotion) return;
    const frames = wrap.querySelectorAll('.scatter-frame');
    const SCROLL_SPEEDS = [-14, 10, -6, 12, -10, 6];
    frames.forEach((el, i) => {
        el.dataset.scrollSpeed = SCROLL_SPEEDS[i % SCROLL_SPEEDS.length];
        el.dataset.mouseSpeed = 28 + (i % 4) * 10;
    });

    function updateScroll() {
        const vh = window.innerHeight;
        frames.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.bottom < -200 || r.top > vh + 200) return;
            const center = r.top + r.height / 2;
            const norm = (center - vh / 2) / vh;
            const speed = parseFloat(el.dataset.scrollSpeed);
            el.style.setProperty('--py', `${(-norm * speed * 2).toFixed(2)}px`);
        });
    }
    let pending = false;
    window.addEventListener('scroll', () => {
        if (!pending) { requestAnimationFrame(() => { updateScroll(); pending = false; }); pending = true; }
    }, { passive: true });
    updateScroll();

    let tx = 0, ty = 0, cx = 0, cy = 0;
    const LERP = 0.08;
    const hero = document.querySelector('.about-hero') || wrap;
    hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        tx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        ty = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    });
    hero.addEventListener('mouseleave', () => { tx = 0; ty = 0; });

    function loop() {
        cx += (tx - cx) * LERP;
        cy += (ty - cy) * LERP;
        frames.forEach(el => {
            const s = parseFloat(el.dataset.mouseSpeed);
            el.style.setProperty('--mx', `${(cx * s).toFixed(2)}px`);
            el.style.setProperty('--my', `${(cy * s).toFixed(2)}px`);
        });
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
})();

/* ===== 3. Skills shuffle highlight ===== */
(() => {
    const words = Array.from(document.querySelectorAll('.skill-word'));
    if (!words.length || reduceMotion) return;

    const ACTIVE = 3;          // how many words are highlighted at any moment
    const SWAP_MS = 700;       // interval between swaps

    function pickRandom(excludeSet) {
        const pool = words.filter(w => !excludeSet.has(w));
        return pool[Math.floor(Math.random() * pool.length)];
    }

    // Initial random selection
    const active = new Set();
    while (active.size < ACTIVE) active.add(pickRandom(active));
    active.forEach(w => w.classList.add('is-on'));

    setInterval(() => {
        // Turn off a random active one and turn on a random inactive one
        const offArr = Array.from(active);
        const off = offArr[Math.floor(Math.random() * offArr.length)];
        off.classList.remove('is-on');
        active.delete(off);

        const on = pickRandom(active);
        on.classList.add('is-on');
        active.add(on);
    }, SWAP_MS);
})();

/* ===== 4. Reveal-on-scroll ===== */
(() => {
    const els = document.querySelectorAll('.reveal-up, .reveal-zoom, .belief-word, .cta-line');
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
