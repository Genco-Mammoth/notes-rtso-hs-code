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
        var widthOn = wd === 'wide' ? ' on' : '';
        var fl = FONT_LABELS[fs] || 'A';

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

        // Text size
        h += '<div class="settings-panel__section">';
        h +=   '<div class="settings-panel__label">Text Size</div>';
        h +=   '<div class="settings-font">';
        h +=     '<button class="settings-font__btn" id="font-decrease" aria-label="Decrease font size">&minus;</button>';
        h +=     '<span class="settings-font__display" id="font-display">' + fl + '</span>';
        h +=     '<button class="settings-font__btn" id="font-increase" aria-label="Increase font size">+</button>';
        h +=   '</div>';
        h += '</div>';

        // Width toggle
        h += '<div class="settings-panel__section">';
        h +=   '<div class="settings-toggle">';
        h +=     '<span class="settings-toggle__label">Wide Reading</span>';
        h +=     '<button class="settings-toggle__switch' + widthOn + '" id="width-toggle" aria-label="Toggle wide reading mode"></button>';
        h +=   '</div>';
        h += '</div>';

        // Print
        h += '<div class="settings-panel__section">';
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

        // Update settings UI
        document.querySelectorAll('.settings-theme').forEach(function(el) {
            el.classList.toggle('active', el.getAttribute('data-theme') === ct);
        });
        document.querySelectorAll('.settings-font-choice').forEach(function(el) {
            el.classList.toggle('active', el.getAttribute('data-font-theme') === ft);
        });
        var fd = document.getElementById('font-display');
        if (fd) fd.textContent = FONT_LABELS[fs] || 'A';
        var wt = document.getElementById('width-toggle');
        if (wt) wt.classList.toggle('on', wd === 'wide');
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
        // Step 1: Inject templates (creates all DOM elements)
        injectTemplates();
        // Step 2: Apply persisted preferences (updates UI state)
        applyPreferences();
        // Step 3: Bind all events (elements now exist)
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
