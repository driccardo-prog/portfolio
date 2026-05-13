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
    wrap.parentElement.addEventListener('mousemove', e => {
        const r = wrap.parentElement.getBoundingClientRect();
        tx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        ty = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    });
    wrap.parentElement.addEventListener('mouseleave', () => { tx = 0; ty = 0; });

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

/* ===== 3. Skills marquee — seamless infinite horizontal loop ===== */
(() => {
    const rows = document.querySelectorAll('[data-marquee]');
    if (!rows.length || reduceMotion) return;
    const SPEED = 60; // px per second

    rows.forEach(row => {
        const text = row.dataset.marquee;
        // measure one segment
        const probe = document.createElement('span');
        probe.className = 'marquee-segment';
        probe.innerHTML = text;
        probe.style.visibility = 'hidden';
        row.appendChild(probe);
        const segWidth = probe.getBoundingClientRect().width;
        row.removeChild(probe);

        const rowWidth = row.clientWidth;
        const copies = Math.max(2, Math.ceil((rowWidth * 2) / segWidth) + 1);

        const inner = document.createElement('div');
        inner.className = 'marquee-inner';
        for (let i = 0; i < copies; i++) {
            const seg = document.createElement('span');
            seg.className = 'marquee-segment';
            seg.innerHTML = text + '<span class="marquee-sep"> | </span>';
            inner.appendChild(seg);
        }
        row.innerHTML = '';
        row.appendChild(inner);

        // measure full segment with separator
        const realSeg = inner.querySelector('.marquee-segment').getBoundingClientRect().width;
        inner.style.setProperty('--cycle', `${realSeg.toFixed(2)}px`);
        inner.style.animationDuration = `${(realSeg / SPEED).toFixed(2)}s`;
    });
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
