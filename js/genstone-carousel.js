/* Genstone product carousel — infinite slider with arrows + dots */
(function () {
    'use strict';
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const slidesEl = carousel.querySelector('[data-carousel-slides]');
    const slides = slidesEl ? Array.from(slidesEl.querySelectorAll('.genstone-carousel-slide')) : [];
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const dotsWrap = document.querySelector('[data-carousel-dots]');
    if (!slides.length) return;

    let index = 0;

    function renderDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = '';
        slides.forEach((_, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'genstone-carousel-dot' + (i === index ? ' is-active' : '');
            b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            b.addEventListener('click', () => go(i));
            dotsWrap.appendChild(b);
        });
    }

    function apply() {
        slidesEl.style.transform = 'translateX(' + (-index * 100) + '%)';
        if (dotsWrap) {
            Array.from(dotsWrap.children).forEach((d, i) => {
                d.classList.toggle('is-active', i === index);
            });
        }
    }

    function go(i) {
        index = ((i % slides.length) + slides.length) % slides.length;
        apply();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => go(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => go(index + 1));

    // Keyboard support when carousel is focused
    carousel.tabIndex = 0;
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  { e.preventDefault(); go(index - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    });

    // Touch swipe
    let touchStartX = null;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchStartX = null;
    });

    renderDots();
    apply();
})();
