/* ========== PORTFOLIO DOLORES RICCARDO ========== */
/* JavaScript vanilla - Sin dependencias externas */

// ========== INTERSECTION OBSERVER PARA ANIMACIONES ==========
/**
 * Anima elementos cuando entran en viewport
 * Fade-in up effect suave
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añade clase animation cuando entra en viewport
            entry.target.classList.add('animate-on-scroll');
            // Deja de observar después de animar
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Elementos a observar para animación
 */
const elementsToAnimate = document.querySelectorAll(
    '.work-card, .grid-item, .section-title'
);

elementsToAnimate.forEach(el => {
    observer.observe(el);
});

// ========== SMOOTH SCROLL PARA LINKS ==========
/**
 * Smooth scroll behavior para links internos (#anclas)
 * Compatible con navegadores modernos
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignora links vacíos
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ========== LAZY LOADING IMAGES ==========
/**
 * Fallback para navegadores que no soportan loading="lazy"
 * Usa Intersection Observer para cargar imágenes bajo demanda
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Si la imagen tiene src, ya está cargada
                if (img.dataset.src && !img.src) {
                    img.src = img.dataset.src;
                }
                
                // Añade clase cuando se carga
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                }, { once: true });
                
                observer.unobserve(img);
            }
        });
    });

    // Observa todas las imágenes con lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== ACTIVE NAV LINK ==========
/**
 * Marca el nav link como activo según scroll position
 */
const navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');
const sections = document.querySelectorAll('[id]');

const updateActiveNav = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(current)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// ========== HEADER SCROLL EFFECT ==========
/**
 * Añade sombra al header cuando hace scroll
 */
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero');

const updateHeaderStyle = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
        header.style.borderBottomColor = 'rgba(0, 0, 0, 0.1)';
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.borderBottomColor = 'rgb(211, 211, 211)';
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
};

window.addEventListener('scroll', updateHeaderStyle, { passive: true });

// ========== PARALLAX EFFECT HERO (OPCIONAL) ==========
/**
 * Efecto parallax suave en la imagen hero
 * Degradado de performance - no aplica en scroll rápido
 */
let ticking = false;

const applyParallax = () => {
    if (!heroSection) return;
    
    const scrollY = window.scrollY;
    const parallaxOffset = scrollY * 0.5;
    
    heroSection.style.backgroundPosition = `center ${parallaxOffset}px`;
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(applyParallax);
        ticking = true;
    }
}, { passive: true });

// ========== PREVENT DOUBLE-TAP ZOOM ==========
/**
 * En mobile, evita zoom al double-tap en links
 */
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ========== PERFORMANCE MONITORING (DESARROLLO) ==========
/**
 * Monitorea performance de carga
 * Útil para debugging
 */
if (process && process.env && process.env.NODE_ENV === 'development') {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime);
    });
}

// ========== CONSOLE LOG SIGNATURE ==========
console.log(
    '%c Dolores Riccardo - Portfolio ',
    'background: #000; color: #fff; padding: 8px 12px; border-radius: 4px; font-weight: bold;'
);
console.log('Buenos Aires-based Art Director & Creative');

// ========== READY STATE ==========
/**
 * Ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully ✓');
    
    // Adicional: puedes añadir más inicializaciones aquí
});
