/* Portfolio Dolores Riccardo — interactions */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ===== Scroll-triggered animations ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fx, .fx-stagger').forEach(el => observer.observe(el));

/* Stagger children of .fx-stagger with progressive transition-delay */
document.querySelectorAll('.fx-stagger').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
        child.style.transitionDelay = `${i * 80}ms`;
    });
});

/* Hero elements animate on load (above the fold) */
window.addEventListener('load', () => {
    document.querySelectorAll('.hero .fx').forEach(el => el.classList.add('in-view'));
});

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
            target.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== Header shadow on scroll ===== */
const header = document.querySelector('.header');
if (header) {
    const updateHeader = () => {
        const scrolled = window.scrollY > 40;
        header.style.boxShadow = scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none';
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
}
