/* Contact page — typewriter loop on .quote-headline,
   and stagger fade-up entrance on quote-form fields. */
(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = document.querySelector('.quote-headline');
    if (!el) return;

    const PHRASE = (el.dataset.typewriter || '').replace(/\\n/g, '\n');
    const TYPE_MS = 80;
    const ERASE_MS = 40;
    const END_HOLD = 1800;
    const START_HOLD = 500;

    let i = 0;
    let typing = true;

    function escape(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function render() {
        const html = escape(PHRASE.slice(0, i)).replace(/\n/g, '<br>');
        el.innerHTML = html + '<span class="type-caret"></span>';
    }
    function tick() {
        if (typing) {
            if (i < PHRASE.length) {
                i++;
                render();
                setTimeout(tick, TYPE_MS);
            } else {
                typing = false;
                setTimeout(tick, END_HOLD);
            }
        } else {
            if (i > 0) {
                i--;
                render();
                setTimeout(tick, ERASE_MS);
            } else {
                typing = true;
                setTimeout(tick, START_HOLD);
            }
        }
    }

    render();
    setTimeout(tick, START_HOLD);
})();
