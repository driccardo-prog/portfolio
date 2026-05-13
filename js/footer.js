/* Footer typewriter — types and erases the phrase in an infinite loop. */
(() => {
    const el = document.querySelector('.footer-text');
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const PHRASE = "Let's talk about\nyour next project ;)";
    const TYPE_MS  = 70;
    const ERASE_MS = 35;
    const END_HOLD = 1600;
    const START_HOLD = 500;

    let i = 0;
    let typing = true;

    function render() {
        const html = PHRASE.slice(0, i).replace(/\n/g, '<br>');
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
