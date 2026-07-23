/* Project page — scroll-driven bracket spread + frame parallax */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const title = document.querySelector('.proj-title');
const parallaxEls = document.querySelectorAll('[data-parallax]');

const TITLE_RANGE = 800;

function update() {
    if (title) {
        const p = clamp(window.scrollY / TITLE_RANGE, 0, 1);
        title.style.setProperty('--p', p.toFixed(4));
    }
    const vh = window.innerHeight;
    parallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > vh + 300) return;
        const center = rect.top + rect.height / 2;
        const normalized = (center - vh / 2) / vh;
        const speed = parseFloat(el.dataset.parallax) || 0;
        el.style.setProperty('--py', `${(-normalized * speed * 2).toFixed(2)}px`);
    });
}

let pending = false;
function onScroll() {
    if (!pending) {
        requestAnimationFrame(() => { update(); pending = false; });
        pending = true;
    }
}

if (!reduceMotion) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
}

/* Auto-cycling crossfade slideshows: any .js-slideshow with >1 <img>.
   Images are stacked (absolute, inset:0); we just toggle .is-active. */
document.querySelectorAll('.js-slideshow').forEach(function (box) {
    var imgs = box.querySelectorAll('img');
    if (imgs.length < 2) return;
    var i = 0;
    imgs.forEach(function (im, n) { im.classList.toggle('is-active', n === 0); });
    setInterval(function () {
        imgs[i].classList.remove('is-active');
        i = (i + 1) % imgs.length;
        imgs[i].classList.add('is-active');
    }, 2600);
});
