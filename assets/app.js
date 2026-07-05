// ============================================
// 1515.90 Report — Unified Application JS
// v5.0 — Single-file: template injection +
//         event binding in correct order
// ============================================

(function() {
    'use strict';

    // ======== NAVIGATION DATA ========
    var NAV_GROUPS = [
        {
            label: 'Overview',
            items: [
                { href: 'index.html', text: 'Summary' },
                { href: 'legal-framework.html', text: 'Legal Framework' },
                { href: 'nomenclature.html', text: 'Nomenclature' },
                { href: 'classification-guide.html', text: 'Classification Guide' }
            ]
        },
        {
            label: 'HS Codes',
            items: [
                { href: 'family-151590.html', text: '1515.90 Family', divider: 'Chapter 15 \u2014 Fixed Vegetable Oils' },
                { href: 'code-15159040.html', text: '1515 90 40 \u2014 Industrial Crude' },
                { href: 'code-15159059.html', text: '1515 90 59 \u2014 Crude' },
                { href: 'code-15159099.html', text: '1515 90 99 \u2014 Refined' },
                { href: 'code-15180031.html', text: '1518 00 31 \u2014 Mixed Industrial', divider: 'Chapter 15 \u2014 Modified / Residues' },
                { href: 'code-15180091.html', text: '1518 00 91 \u2014 Chemically Modified' },
                { href: 'code-15220099.html', text: '1522 00 99 \u2014 Other Residues', divider: 'Chapter 38 \u2014 Industrial Fatty Acids' },
                { href: 'code-38231910.html', text: '3823 19 10 \u2014 Distilled Fatty Acids' },
                { href: 'code-38231930.html', text: '3823 19 30 \u2014 Fatty Acid Distillate' },
                { href: 'code-38231990.html', text: '3823 19 90 \u2014 Acid Oils from Refining' }
            ]
        },
        {
            label: 'Analysis',
            items: [
                { href: 'indonesia.html', text: 'Indonesia' },
                { href: 'rubber-seed-oil.html', text: 'Rubber Seed Oil Strategy' },
                { href: 'mixing-guide.html', text: 'Mixing & Blending Guide' },
                { href: 'historical.html', text: 'Historical Rates' }
            ]
        },
        {
            label: 'Comparables',
            items: [
                { href: 'comparable-palm.html', text: 'Palm Oil — CPO, CPKO, RBD' },
                { href: 'comparable-pome.html', text: 'POME — Palm Mill Effluent' },
                { href: 'comparable-uco.html', text: 'UCO — Used Cooking Oil' },
                { href: 'comparable-cto.html', text: 'CTO — Crude Tall Oil' },
                { href: 'code-38231930.html', text: 'PFAD — Palm Fatty Acid Distillate' }
            ]
        },
        {
            label: 'Reference',
            items: [
                { href: 'measures.html', text: 'Non-Tariff Measures' },
                { href: 'faq.html', text: 'FAQ' },
                { href: 'glossary.html', text: 'Glossary' },
                { href: 'sources.html', text: 'Sources & Methodology' }
            ]
        }
    ];

    var THEMES = [
        { id: 'eu-blue', name: 'EU Blue', swatch: '#003399' },
        { id: 'botanical', name: 'Botanical', swatch: '#1B4332' },
        { id: 'amber', name: 'Amber Oil', swatch: '#D97706' },
        { id: 'slate', name: 'Slate', swatch: '#1E293B' },
        { id: 'midnight', name: 'Midnight', swatch: '#0B1120' },
        { id: 'moss', name: 'Moss', swatch: '#061210' },
        { id: 'onyx', name: 'Onyx', swatch: '#18181B' },
        { id: 'crimson', name: 'Crimson', swatch: '#991B1B' }
    ];

    var FONT_THEMES = [
        { id: 'modern', name: 'Modern', sample: 'Inter \u2014 crisp sans-serif' },
        { id: 'system', name: 'System', sample: 'Your device\u2019s native font' },
        { id: 'editorial', name: 'Editorial', sample: 'Source Serif \u2014 report style' },
        { id: 'humanist', name: 'Humanist', sample: 'Atkinson \u2014 accessibility' }
    ];

    var VALID_THEMES = ['eu-blue', 'botanical', 'amber', 'slate', 'midnight', 'moss', 'onyx', 'crimson'];
    var VALID_FONTS = ['modern', 'system', 'editorial', 'humanist'];
    var FONT_SIZES = ['small', 'normal', 'large'];
    var FONT_LABELS = { small: 'A\u2212', normal: 'A', large: 'A+' };
    var LINE_HEIGHTS = ['comfort', 'reading', 'relaxed'];
    var LINE_HEIGHT_LABELS = { comfort: 'Comfort', reading: 'Reading', relaxed: 'Relaxed' };

    // ======== STORAGE ========
    function store(key, val) { try { localStorage.setItem(key, val); } catch(e) {} }
    function read(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch(e) { return fallback; } }

    // ======== HELPERS ========
    function getCurrentPage() {
        var p = window.location.pathname;
        return p.substring(p.lastIndexOf('/') + 1) || 'index.html';
    }

    function groupContainsActive(group) {
        var c = getCurrentPage();
        return group.items.some(function(i) { return i.href === c; });
    }

    // ======== BUILD: HEADER ========
    function buildHeader() {
        var h = '';
        h += '<header class="site-header">';
        h +=   '<div class="site-header__inner">';
        h +=     '<a href="index.html" class="site-header__title">';
        h +=       '<span class="site-header__badge">HS 1515.90</span>';
        h +=       'Tariff Analysis Report';
        h +=     '</a>';
        h +=     '<div class="site-header__right">';
        h +=       '<button class="settings-btn" id="settings-toggle" aria-label="Open settings" title="Settings">';
        h +=         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
        h +=           '<circle cx="12" cy="12" r="3"></circle>';
        h +=           '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>';
        h +=         '</svg>';
        h +=       '</button>';
        h +=       '<button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>';
        h +=     '</div>';
        h +=   '</div>';
        h += '</header>';
        return h;
    }

    // ======== BUILD: SETTINGS PANEL ========
    function buildSettingsPanel() {
        var ct = read('hs1515-theme', 'eu-blue');
        var ft = read('hs1515-font', 'modern');
        var fs = read('hs1515-fontsize', 'normal');
        var wd = read('hs1515-width', 'normal');
        var co = read('hs1515-contrast', 'normal');
        var lh = read('hs1515-lineheight', 'reading');
        var widthOn = wd === 'wide' ? ' on' : '';
        var contrastOn = co === 'soft' ? ' on' : '';
        var fl = FONT_LABELS[fs] || 'A';
        var lhLabel = LINE_HEIGHT_LABELS[lh] || 'Reading';

        var h = '';
        h += '<div class="settings-panel" id="settings-panel">';

        // Color themes
        h += '<div class="settings-panel__section">';
        h +=   '<div class="settings-panel__label">Color Theme</div>';
        h +=   '<div class="settings-themes">';
        THEMES.forEach(function(t) {
            h += '<button class="settings-theme' + (t.id === ct ? ' active' : '') + '" data-theme="' + t.id + '" aria-label="' + t.name + ' theme">';
            h +=   '<span class="settings-theme__swatch" style="background:' + t.swatch + '"></span>';
            h +=   '<span class="settings-theme__name">' + t.name + '</span>';
            h += '</button>';
        });
        h +=   '</div>';
        h += '</div>';

        // Font themes
        h += '<div class="settings-panel__section">';
        h +=   '<div class="settings-panel__label">Font</div>';
        h +=   '<div class="settings-fonts">';
        FONT_THEMES.forEach(function(f) {
            h += '<button class="settings-font-choice' + (f.id === ft ? ' active' : '') + '" data-font-theme="' + f.id + '">';
            h +=   '<span class="settings-font-choice__name">' + f.name + '</span>';
            h +=   '<span class="settings-font-choice__sample">' + f.sample + '</span>';
            h += '</button>';
        });
        h +=   '</div>';
        h += '</div>';

        // Text size + Line height side by side
        h += '<div class="settings-panel__section">';
        h +=   '<div class="settings-panel__label">Text Size &amp; Spacing</div>';
        h +=   '<div style="display:flex;gap:1rem;align-items:stretch">';

        // Text size
        h +=     '<div style="flex:1">';
        h +=     '<div class="settings-size" style="justify-content:flex-start">';
        h +=       '<button class="settings-size__btn" id="font-decrease" aria-label="Decrease">&minus;</button>';
        h +=       '<span class="settings-size__display" id="font-display">' + fl + '</span>';
        h +=       '<button class="settings-size__btn" id="font-increase" aria-label="Increase">+</button>';
        h +=     '</div>';
        h +=     '</div>';

        // Line height
        h +=     '<div style="flex:1">';
        h +=     '<div class="settings-size" style="justify-content:flex-start">';
        h +=       '<button class="settings-size__btn" id="lh-decrease" aria-label="Tighter">&minus;</button>';
        h +=       '<span class="settings-size__display" id="lh-display">' + lhLabel + '</span>';
        h +=       '<button class="settings-size__btn" id="lh-increase" aria-label="Looser">+</button>';
        h +=     '</div>';
        h +=     '</div>';

        h +=   '</div>';
        h += '</div>';

        // Toggles
        h += '<div class="settings-panel__section" style="border-bottom:none;padding-bottom:0">';
        h +=   '<div class="settings-toggle">';
        h +=     '<span class="settings-toggle__label">Wide Reading</span>';
        h +=     '<button class="settings-toggle__switch' + widthOn + '" id="width-toggle" aria-label="Wide reading"></button>';
        h +=   '</div>';
        h +=   '<div class="settings-toggle">';
        h +=     '<span class="settings-toggle__label">Soft Contrast</span>';
        h +=     '<button class="settings-toggle__switch settings-toggle__switch--contrast' + contrastOn + '" id="contrast-toggle" aria-label="Soft contrast"></button>';
        h +=   '</div>';
        h += '</div>';

        // Print
        h += '<div class="settings-panel__section" style="margin-top:0.3rem;border-bottom:none;padding-bottom:0">';
        h +=   '<button class="print-btn" data-action="print" style="width:100%;justify-content:center">&#128424; Print / Save as PDF</button>';
        h += '</div>';

        h += '</div>';
        return h;
    }

    // ======== BUILD: NAV ========
    function buildNav() {
        var cur = getCurrentPage();
        var h = '';
        h += '<nav class="site-nav">';
        h +=   '<div class="site-nav__inner">';
        NAV_GROUPS.forEach(function(group) {
            var ga = groupContainsActive(group);
            h += '<div class="nav-group">';
            h +=   '<button class="nav-group__trigger' + (ga ? ' nav-group__trigger--active' : '') + '">';
            h +=     group.label;
            h +=     '<span class="chevron">&#9662;</span>';
            h +=   '</button>';
            h +=   '<div class="nav-group__menu">';
            group.items.forEach(function(item) {
                if (item.divider) {
                    h += '<div class="nav-group__divider">' + item.divider + '</div>';
                }
                h += '<a href="' + item.href + '" class="nav-group__menu-link' + (item.href === cur ? ' active' : '') + '">' + item.text + '</a>';
            });
            h +=   '</div>';
            h += '</div>';
        });
        h +=   '</div>';
        h += '</nav>';
        return h;
    }

    // ======== BUILD: FOOTER ========
    function buildFooter() {
        var h = '';
        h += '<footer class="site-footer">';
        h +=   '<div class="site-footer__grid">';

        NAV_GROUPS.forEach(function(group) {
            h += '<div class="site-footer__col">';
            h +=   '<div class="site-footer__heading">' + group.label + '</div>';
            group.items.forEach(function(item) {
                h += '<a href="' + item.href + '">' + item.text + '</a>';
            });
            h += '</div>';
        });

        h +=   '</div>';
        h +=   '<p class="site-footer__copy">EU Tariff Analysis Report &mdash; Reference date: 4 July 2026 &middot; Based on primary EU legal sources (EUR-Lex). All rates verified against official regulations.</p>';
        h += '</footer>';
        return h;
    }

    // ======== STEP 1: INJECT TEMPLATES ========
    function injectTemplates() {
        var hs = document.getElementById('tpl-header');
        var ns = document.getElementById('tpl-nav');
        var fs = document.getElementById('tpl-footer');

        if (hs) {
            hs.outerHTML = buildHeader();
            // Insert settings panel INSIDE the header (as last child)
            // so absolute positioning is relative to the header
            var header = document.querySelector('.site-header');
            if (header) header.insertAdjacentHTML('beforeend', buildSettingsPanel());
        }
        if (ns) ns.outerHTML = buildNav();
        if (fs) fs.outerHTML = buildFooter();
    }

    // ======== STEP 2: APPLY PREFERENCES ========
    function applyPreferences() {
        // Color theme
        var ct = read('hs1515-theme', 'eu-blue');
        if (VALID_THEMES.indexOf(ct) === -1) ct = 'eu-blue';
        document.documentElement.setAttribute('data-theme', ct);

        // Font theme
        var ft = read('hs1515-font', 'modern');
        if (VALID_FONTS.indexOf(ft) === -1) ft = 'modern';
        document.documentElement.setAttribute('data-font', ft);

        // Font size
        var fs = read('hs1515-fontsize', 'normal');
        if (FONT_SIZES.indexOf(fs) === -1) fs = 'normal';
        document.documentElement.setAttribute('data-fontsize', fs);

        // Width
        var wd = read('hs1515-width', 'normal');
        document.documentElement.setAttribute('data-width', wd);

        // Contrast
        var co = read('hs1515-contrast', 'normal');
        document.documentElement.setAttribute('data-contrast', co);

        // Line height
        var lh = read('hs1515-lineheight', 'reading');
        if (LINE_HEIGHTS.indexOf(lh) === -1) lh = 'reading';
        document.documentElement.setAttribute('data-lineheight', lh);

        // Update settings UI
        document.querySelectorAll('.settings-theme').forEach(function(el) {
            el.classList.toggle('active', el.getAttribute('data-theme') === ct);
        });
        document.querySelectorAll('.settings-font-choice').forEach(function(el) {
            el.classList.toggle('active', el.getAttribute('data-font-theme') === ft);
        });
        var fd = document.getElementById('font-display');
        if (fd) fd.textContent = FONT_LABELS[fs] || 'A';
        var ld = document.getElementById('lh-display');
        if (ld) ld.textContent = LINE_HEIGHT_LABELS[lh] || 'Reading';
        var wt = document.getElementById('width-toggle');
        if (wt) wt.classList.toggle('on', wd === 'wide');
        var ctBtn = document.getElementById('contrast-toggle');
        if (ctBtn) ctBtn.classList.toggle('on', co === 'soft');
    }

    // ======== STEP 3: BIND EVENTS ========
    function bindEvents() {
        // --- Settings panel toggle ---
        var sBtn = document.getElementById('settings-toggle');
        var sPanel = document.getElementById('settings-panel');
        if (sBtn && sPanel) {
            sBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                sPanel.classList.toggle('open');
            });
            document.addEventListener('click', function(e) {
                if (!sPanel.contains(e.target) && !sBtn.contains(e.target)) {
                    sPanel.classList.remove('open');
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    sPanel.classList.remove('open');
                    closeAllDropdowns();
                }
            });
        }

        // --- Color theme buttons ---
        document.querySelectorAll('.settings-theme').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var t = this.getAttribute('data-theme');
                store('hs1515-theme', t);
                document.documentElement.setAttribute('data-theme', t);
                document.querySelectorAll('.settings-theme').forEach(function(el) {
                    el.classList.toggle('active', el === btn);
                });
            });
        });

        // --- Font theme buttons ---
        document.querySelectorAll('.settings-font-choice').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var f = this.getAttribute('data-font-theme');
                store('hs1515-font', f);
                document.documentElement.setAttribute('data-font', f);
                document.querySelectorAll('.settings-font-choice').forEach(function(el) {
                    el.classList.toggle('active', el === btn);
                });
            });
        });

        // --- Font size buttons ---
        var fDec = document.getElementById('font-decrease');
        var fInc = document.getElementById('font-increase');
        if (fDec) fDec.addEventListener('click', function() { changeFontSize(-1); });
        if (fInc) fInc.addEventListener('click', function() { changeFontSize(1); });

        // --- Width toggle ---
        var wBtn = document.getElementById('width-toggle');
        if (wBtn) {
            wBtn.addEventListener('click', function() {
                var cur = document.documentElement.getAttribute('data-width');
                var next = cur === 'wide' ? 'normal' : 'wide';
                store('hs1515-width', next);
                document.documentElement.setAttribute('data-width', next);
                wBtn.classList.toggle('on', next === 'wide');
            });
        }

        // --- Contrast toggle ---
        var cBtn = document.getElementById('contrast-toggle');
        if (cBtn) {
            cBtn.addEventListener('click', function() {
                var cur = document.documentElement.getAttribute('data-contrast');
                var next = cur === 'soft' ? 'normal' : 'soft';
                store('hs1515-contrast', next);
                document.documentElement.setAttribute('data-contrast', next);
                cBtn.classList.toggle('on', next === 'soft');
            });
        }

        // --- Line height buttons ---
        var lhDec = document.getElementById('lh-decrease');
        var lhInc = document.getElementById('lh-increase');
        if (lhDec) lhDec.addEventListener('click', function() { changeLineHeight(-1); });
        if (lhInc) lhInc.addEventListener('click', function() { changeLineHeight(1); });

        // --- Print button ---
        document.querySelectorAll('[data-action="print"]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.print();
            });
        });

        // --- Nav dropdowns ---
        setupDropdowns();

        // --- Mobile nav toggle ---
        var navToggle = document.querySelector('.nav-toggle');
        var nav = document.querySelector('.site-nav');
        if (navToggle && nav) {
            navToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                nav.classList.toggle('open');
            });
        }

        // --- Back to top ---
        var btt = document.querySelector('.back-to-top');
        if (btt) {
            window.addEventListener('scroll', function() {
                btt.classList.toggle('visible', window.scrollY > 400);
            }, { passive: true });
            btt.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // ======== FONT SIZE LOGIC ========
    function changeFontSize(delta) {
        var cur = read('hs1515-fontsize', 'normal');
        var idx = FONT_SIZES.indexOf(cur);
        if (idx === -1) idx = 1;
        idx = Math.max(0, Math.min(FONT_SIZES.length - 1, idx + delta));
        var ns = FONT_SIZES[idx];
        store('hs1515-fontsize', ns);
        document.documentElement.setAttribute('data-fontsize', ns);
        var fd = document.getElementById('font-display');
        if (fd) fd.textContent = FONT_LABELS[ns] || 'A';
        var dec = document.getElementById('font-decrease');
        var inc = document.getElementById('font-increase');
        if (dec) dec.disabled = (idx === 0);
        if (inc) inc.disabled = (idx === FONT_SIZES.length - 1);
    }

    // ======== LINE HEIGHT LOGIC ========
    function changeLineHeight(delta) {
        var cur = read('hs1515-lineheight', 'reading');
        var idx = LINE_HEIGHTS.indexOf(cur);
        if (idx === -1) idx = 1;
        idx = Math.max(0, Math.min(LINE_HEIGHTS.length - 1, idx + delta));
        var ns = LINE_HEIGHTS[idx];
        store('hs1515-lineheight', ns);
        document.documentElement.setAttribute('data-lineheight', ns);
        var ld = document.getElementById('lh-display');
        if (ld) ld.textContent = LINE_HEIGHT_LABELS[ns] || 'Reading';
        var dec = document.getElementById('lh-decrease');
        var inc = document.getElementById('lh-increase');
        if (dec) dec.disabled = (idx === 0);
        if (inc) inc.disabled = (idx === LINE_HEIGHTS.length - 1);
    }

    // ======== DROPDOWN LOGIC ========
    function closeAllDropdowns(except) {
        document.querySelectorAll('.nav-group.open').forEach(function(g) {
            if (g !== except) g.classList.remove('open');
        });
    }

    function setupDropdowns() {
        var isMobile = window.matchMedia('(max-width: 768px)').matches;

        document.querySelectorAll('.nav-group__trigger').forEach(function(trigger) {
            var group = trigger.closest('.nav-group');
            if (!group) return;

            if (isMobile) {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var was = group.classList.contains('open');
                    closeAllDropdowns();
                    if (!was) group.classList.add('open');
                });
            } else {
                group.addEventListener('mouseenter', function() {
                    closeAllDropdowns(group);
                    group.classList.add('open');
                });
                group.addEventListener('mouseleave', function() {
                    group.classList.remove('open');
                });
            }
        });

        document.querySelectorAll('.nav-group__menu-link').forEach(function(link) {
            link.addEventListener('click', function() { closeAllDropdowns(); });
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-group')) closeAllDropdowns();
        });
    }

    // ======== INIT: SINGLE SEQUENTIAL FLOW ========
    function init() {
        // Step 0: Check authentication
        if (!isAuthenticated()) {
            showLoginOverlay();
            return; // Stop — don't inject templates until authenticated
        }

        // Step 0.5: Show loader
        showLoader();

        // Step 1: Inject templates (creates all DOM elements)
        injectTemplates();
        // Step 2: Apply persisted preferences (updates UI state)
        applyPreferences();
        // Step 3: Bind all events (elements now exist)
        bindEvents();
    }

    // ======== AUTHENTICATION ========
    var AUTH_KEY = 'hs1515-auth';
    var PASSWORD_HASH = '5599d3a0adb0f9febc5e47140a24decff2d61a3bdd225e6f42bafa91cc7e6dd8';

    function isAuthenticated() {
        try { return localStorage.getItem(AUTH_KEY) === '1'; }
        catch(e) { return false; }
    }

    function showLoader() {
        var loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = '<div class="page-loader__bar"></div>';
        document.body.insertBefore(loader, document.body.firstChild);
        setTimeout(function() {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 400);
    }

    function showLoginOverlay() {
        // Hide page content
        var page = document.querySelector('.page');
        if (page) page.style.display = 'none';

        // Create overlay
        var overlay = document.createElement('div');
        overlay.id = 'login-overlay';
        overlay.className = 'login-overlay';

        overlay.innerHTML = '<div class="login-card">' +
            '<div class="login-card__icon">&#128274;</div>' +
            '<div class="login-card__title">Access Restricted</div>' +
            '<div class="login-card__subtitle">Enter the access code to continue</div>' +
            '<div class="login-otp" id="login-otp">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
                '<input class="login-otp__box" type="password" maxlength="1" inputmode="text" autocomplete="off">' +
            '</div>' +
            '<div class="login-card__error" id="login-error"></div>' +
        '</div>';

        document.body.insertBefore(overlay, document.body.firstChild);

        setupLoginBoxes();
    }

    function setupLoginBoxes() {
        var boxes = document.querySelectorAll('.login-otp__box');
        var errorEl = document.getElementById('login-error');

        // Focus first box
        if (boxes.length > 0) boxes[0].focus();

        boxes.forEach(function(box, i) {
            box.addEventListener('input', function() {
                var val = this.value;
                // Move to next box if filled
                if (val.length === 1 && i < boxes.length - 1) {
                    boxes[i + 1].focus();
                }
                // Check if all boxes filled
                checkPassword();
            });

            box.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value === '' && i > 0) {
                    boxes[i - 1].focus();
                }
                if (e.key === 'Enter') {
                    checkPassword();
                }
            });

            box.addEventListener('paste', function(e) {
                e.preventDefault();
                var pasted = (e.clipboardData || window.clipboardData).getData('text');
                for (var j = 0; j < boxes.length && j < pasted.length; j++) {
                    boxes[j].value = pasted[j];
                }
                if (pasted.length < boxes.length) {
                    boxes[pasted.length].focus();
                }
                checkPassword();
            });
        });

        function checkPassword() {
            // Get entered password
            var entered = '';
            boxes.forEach(function(b) { entered += b.value; });

            // Clear error states
            boxes.forEach(function(b) { b.classList.remove('error', 'success'); });
            if (errorEl) errorEl.textContent = '';

            // Not all filled yet
            if (entered.length < boxes.length) return;

            // Hash and compare
            hashPassword(entered).then(function(hash) {
                if (hash === PASSWORD_HASH) {
                    // Success
                    boxes.forEach(function(b) { b.classList.add('success'); });
                    authenticate();
                } else {
                    // Wrong
                    boxes.forEach(function(b) { b.classList.add('error'); });
                    if (errorEl) errorEl.textContent = 'Incorrect code. Please try again.';
                    // Clear boxes after delay
                    setTimeout(function() {
                        boxes.forEach(function(b) { b.value = ''; b.classList.remove('error'); });
                        boxes[0].focus();
                    }, 600);
                }
            });
        }
    }

    function hashPassword(str) {
        // SHA-256 via SubtleCrypto API
        var encoder = new TextEncoder();
        var data = encoder.encode(str);
        return crypto.subtle.digest('SHA-256', data).then(function(hash) {
            return Array.from(new Uint8Array(hash))
                .map(function(b) { return b.toString(16).padStart(2, '0'); })
                .join('');
        });
    }

    function authenticate() {
        try { localStorage.setItem(AUTH_KEY, '1'); }
        catch(e) {}

        // Remove no-auth class to show content
        document.documentElement.classList.remove('no-auth');

        // Remove overlay
        var overlay = document.getElementById('login-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(function() {
                if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            }, 450);
        }

        // Show page
        var page = document.querySelector('.page');
        if (page) page.style.display = '';

        // Now initialize the rest
        showLoader();
        injectTemplates();
        applyPreferences();
        bindEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-bind dropdowns on resize (mobile/desktop switch)
    var rt;
    window.addEventListener('resize', function() {
        clearTimeout(rt);
        rt = setTimeout(setupDropdowns, 250);
    });
})();
