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

/* ===== 3. Skills: infinite marquee + shuffle highlight ===== */
(() => {
    const track = document.querySelector('.skills-track');
    if (!track) return;
    const SPEED = 60; // px per second

    // Build the marquee: duplicate inner content enough to overflow the viewport,
    // then animate translateX by exactly one set's width so the loop is seamless.
    if (!reduceMotion) {
        const baseHTML = track.innerHTML;
        // Measure one set
        const baseWidth = track.getBoundingClientRect().width;
        const viewWidth = track.parentElement.clientWidth;
        const copies = Math.max(2, Math.ceil((viewWidth * 2) / baseWidth) + 1);

        let html = '';
        for (let i = 0; i < copies; i++) html += baseHTML;
        track.innerHTML = html;

        track.style.setProperty('--cycle', `${baseWidth.toFixed(2)}px`);
        track.style.animationDuration = `${(baseWidth / SPEED).toFixed(2)}s`;
    }

    // Shuffle highlight — toggle every copy of the same skill together
    const allWords = Array.from(track.querySelectorAll('.skill-word'));
    if (!allWords.length) return;
    const skillNames = [...new Set(allWords.map(w => w.dataset.skill))];

    function setSkill(name, on) {
        allWords.forEach(w => {
            if (w.dataset.skill === name) w.classList.toggle('is-on', on);
        });
    }

    const ACTIVE = 3;
    const SWAP_MS = 700;
    const active = new Set();
    while (active.size < ACTIVE) {
        const pool = skillNames.filter(s => !active.has(s));
        const pick = pool[Math.floor(Math.random() * pool.length)];
        active.add(pick);
        setSkill(pick, true);
    }

    if (reduceMotion) return;

    setInterval(() => {
        const offArr = Array.from(active);
        const off = offArr[Math.floor(Math.random() * offArr.length)];
        setSkill(off, false);
        active.delete(off);

        const pool = skillNames.filter(s => !active.has(s));
        const on = pool[Math.floor(Math.random() * pool.length)];
        setSkill(on, true);
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
