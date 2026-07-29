/* Contact page — typewriter loop on .quote-headline,
   and AJAX form submit with an inline "¡Gracias!" (no page redirect). */
(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Typewriter headline -------------------------------------------
    const el = document.querySelector('.quote-headline');
    if (el && !reduce) {
        const PHRASE = (el.dataset.typewriter || '').replace(/\\n/g, '\n');
        const TYPE_MS = 80, ERASE_MS = 40, END_HOLD = 1800, START_HOLD = 500;
        let i = 0, typing = true;
        const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const render = () => { el.innerHTML = escape(PHRASE.slice(0, i)).replace(/\n/g, '<br>') + '<span class="type-caret"></span>'; };
        const tick = () => {
            if (typing) {
                if (i < PHRASE.length) { i++; render(); setTimeout(tick, TYPE_MS); }
                else { typing = false; setTimeout(tick, END_HOLD); }
            } else {
                if (i > 0) { i--; render(); setTimeout(tick, ERASE_MS); }
                else { typing = true; setTimeout(tick, START_HOLD); }
            }
        };
        render();
        setTimeout(tick, START_HOLD);
    }

    // ---- Form: AJAX submit + thank-you ---------------------------------
    const form = document.querySelector('.quote-form');
    if (!form) return;

    const THANKS = {
        es: { t: '¡Gracias!', s: 'Recibí tu mensaje. Te escribo pronto ;)' },
        en: { t: 'Thank you!', s: "Got your message — I'll get back to you soon ;)" }
    };
    const lang = () => {
        let l;
        try { l = localStorage.getItem('preferredLanguage'); } catch (e) {}
        if (l !== 'es' && l !== 'en') l = document.documentElement.getAttribute('lang');
        return l === 'es' ? 'es' : 'en';
    };

    function showThanks() {
        const m = THANKS[lang()];
        const panel = document.createElement('div');
        panel.className = 'quote-thanks';
        const h = document.createElement('h3');
        h.className = 'quote-thanks-title';
        h.textContent = m.t;
        const p = document.createElement('p');
        p.className = 'quote-thanks-sub';
        p.textContent = m.s;
        panel.appendChild(h);
        panel.appendChild(p);
        form.replaceWith(panel);
        try { panel.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
    }

    // No-JS fallback path: FormSubmit redirected back with ?sent=1
    if (/[?&]sent=1(&|$)/.test(location.search)) {
        showThanks();
        return;
    }

    const endpoint = 'https://formsubmit.co/ajax/d.riccardo@icloud.com';

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('.quote-submit');
        const label = btn ? btn.textContent : '';
        if (btn) { btn.disabled = true; btn.textContent = lang() === 'es' ? 'Enviando…' : 'Sending…'; }

        fetch(endpoint, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(form)
        })
        .then((r) => r.json().catch(() => ({})))
        .then((data) => {
            if (data && (data.success === 'true' || data.success === true)) {
                showThanks();
            } else {
                // Form not activated yet (or an error): fall back to the native
                // POST so the owner sees FormSubmit's one-time activation page.
                form.submit();
            }
        })
        .catch(() => { form.submit(); });
    });
})();
