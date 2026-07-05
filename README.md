# EU Tariff Analysis Report — Rubber Seed Oil & Vegetable Fats

**Reference date: 4 July 2026**

A comprehensive, **27-page** interactive HTML report analysing EU import duties for rubber tree seed oil (*Hevea brasiliensis*) and related vegetable fats and oils from Indonesia, with a specific focus on biodiesel feedstock classification. Now includes comparable feedstock analysis for palm oil products, POME, UCO, CTO, and PFAD, plus a fully interactive FAQ with search, filters, and accordion navigation.

## Quick Answer

**For crude rubber seed oil from Indonesia as biodiesel feedstock: CN `1515 90 40` at 3.2% duty.**

This is the single correct, defensible, and lowest-duty classification. It saves 50% vs the default `1515 90 59` (6.4%). No anti-dumping or countervailing duties apply.

## Scope

The report covers **10 CN codes** across Chapters 15 and 38, plus **5 comparable feedstocks** with **15+ additional CN codes** for context:

| Chapter | Codes | Rates |
|---------|-------|-------|
| **Ch. 15 — Fixed Vegetable Oils** | 1515 90 40, 1515 90 59, 1515 90 99 | 3.2%–9.6% |
| **Ch. 15 — Modified / Residues** | 1518 00 31, 1518 00 91, 1522 00 99 | 0% (with caveats) |
| **Ch. 38 — Industrial Fatty Acids** | 3823 19 10, 3823 19 30, 3823 19 90 | 2.9% (plus ADD risks) |
| **Comparable Feedstocks** | Palm oil (5 products), POME, UCO, CTO, PFAD | 0%–9.6% |

Includes detailed analysis of anti-dumping duties (Reg. EU 2023/111, up to 46.4% for Indonesia), countervailing duties (Reg. EU 2019/2092, 8–18%), GSP preferences, and the EU-Indonesia CEPA.

## Site Structure (27 pages)

### Overview
- `index.html` — Landing page with executive summary, quick answer, and TOC
- `legal-framework.html` — EU customs law: Reg. 2658/87, CCT, TARIC, GSP
- `nomenclature.html` — HS → CN → TARIC hierarchy
- `classification-guide.html` — Five-gate decision tree with worked examples

### HS Codes (10 deep-dive pages)
- `family-151590.html` — All 6 CN codes under 1515 90 compared
- `code-15159040.html` — Crude oils for industrial use (3.2%)
- `code-15159059.html` — Crude oils, food/cosmetic (6.4%)
- `code-15159099.html` — Refined oils (9.6%)
- `code-15180031.html` — Mixed industrial oils (0%)
- `code-15180091.html` — Chemically modified fats (0%)
- `code-15220099.html` — Other residues (0%)
- `code-38231910.html` — Distilled fatty acids (2.9% + ADD)
- `code-38231930.html` — Fatty acid distillate / PFAD (2.9%)
- `code-38231990.html` — Acid oils from refining (2.9% + ADD)

### Comparable Feedstocks (5 pages)
- `comparable-palm.html` — CPO, CPKO, RBD PO, Palm Olein, RPKO (5 palm products)
- `comparable-pome.html` — Palm Oil Mill Effluent (disputed classification)
- `comparable-uco.html` — Used Cooking Oil (0% + RED II double-counting)
- `comparable-cto.html` — Crude Tall Oil (HVO feedstock)
- `code-38231930.html` — PFAD (also serves as comparable)

### Analysis
- `indonesia.html` — GSP graduation, CEPA, ASEAN comparison
- `rubber-seed-oil.html` — Definitive RSO strategy with verdict and action checklist
- `mixing-guide.html` — EU classification of mixed oils, GIR rules, blending strategies
- `historical.html` — Rate evolution timeline with discrepancy analysis

### Reference
- `measures.html` — Non-tariff measures (CITES, organic, waste, sanctions)
- `faq.html` — **35 interactive questions** with search, category filters, and accordion toggle
- `glossary.html` — 54 terms defined alphabetically
- `sources.html` — All primary EUR-Lex sources with methodology

## Features

- **8 color themes** (4 light: EU Blue, Botanical, Amber Oil, Slate; 4 dark: Midnight, Moss, Onyx, Crimson)
- **4 font themes** (Modern/Inter, System/Native, Editorial/Source Serif, Humanist/Atkinson)
- **3 text sizes** and **wide reading mode**
- **OTP-style password authentication** — SHA-256 hashed, localStorage persistence
- **Page loader animation** — top progress bar + content fade-in (0.3s)
- **Responsive design** — desktop, tablet, mobile, print-optimized
- **Interactive settings panel** — gear icon in header
- **Dropdown navigation** — 5 grouped sections with chapter dividers
- **Interactive FAQ** — search, 8 category filters, accordion Q&A, expand/collapse all, URL hash linking
- **Single JS file** architecture (642 lines) — no race conditions
- **Anti-flash theme loading** — inline script prevents FOUC
- **27 pages, zero inline styles, all CSS/JS validated**

## Deployment

- **Live:** https://notes-rtso-hs-code.vercel.app (Vercel, auto-deploy from GitHub)
- **Also:** https://genco-mammoth.github.io/notes-rtso-hs-code/ (GitHub Pages)
- **Repo:** https://github.com/Genco-Mammoth/notes-rtso-hs-code (public, 29 files)

## Usage

Open `index.html` in any modern browser. All pages are self-contained with shared navigation injected via JavaScript. Click the gear icon (⚙) to change theme, font, text size, or print.

**Password:** `maurits` (enter once, remembered forever in your browser)

To print/save as PDF: click the gear icon → "Print / Save as PDF", or use `Cmd/Ctrl + P`.

## Primary Sources

All duty rates verified against official EU legal instruments published in the Official Journal via EUR-Lex:

- **Reg. (EEC) 2658/87** — Establishes CN & TARIC
- **Reg. (EU) 2024/1652** — Current MFN duty rates (3.2%–12.8%)
- **Reg. (EU) 978/2012** — GSP scheme
- **Reg. (EU) 2023/111** — ADD on Indonesian fatty acids
- **Reg. (EU) 2019/2092** — CVD on Indonesian biodiesel
- **Reg. (EU) 2023/1115** — EU Deforestation Regulation (EUDR)
- **Reg. (EU) 2025/2181** — UCO import controls
- **Reg. (EU) 2025/1909** — GSP tariff preference suspensions 2026–2028
- **Reg. (EU) 2025/1951** — Indonesia GSP graduation (1 Jan 2027)
- **Directive (EU) 2018/2001** — RED II renewable energy
- And 8+ other regulations — see `sources.html` for the complete list.

## Recent Changes

| Date | Change |
|------|--------|
| Jul 2026 | **FAQ v2: 35 interactive questions** with search, category filters, accordion, expand/collapse all, URL hash linking |
| Jul 2026 | Added 10 new FAQ topics: end-use declarations, GIR rules, CEPA timeline, CVD on feedstock, 3-way blends, customs valuation, EUDR compliance (3 questions), appeals process, TARIC vs CN |
| Jul 2026 | Added 5 comparable feedstock pages (Palm, POME, UCO, CTO, PFAD) |
| Jul 2026 | Added OTP password authentication (SHA-256, localStorage) |
| Jul 2026 | Added page loader animation + content fade-in |
| Jul 2026 | Added 2 dark themes (Moss, Onyx); refined Midnight; 8 themes total |
| Jul 2026 | Footer redesigned as 4-column grid with group headings |
| Jul 2026 | Merged template.js into app.js — single JS file, no race conditions |
| Jul 2026 | Added 4 font themes with Google Fonts; wide reading mode |
| Jul 2026 | Replaced index nav cards with clean sectioned TOC layout |
| Jul 2026 | All card/panel systems redesigned (left accent strip, rounded, consistent) |
| Jul 2026 | Table variant system (dense/relaxed/KV) applied to 45+ tables |

## Disclaimer

This report is for informational purposes and does not constitute legal or customs advice. For binding classification decisions, obtain a Binding Tariff Information (BTI) ruling from the importing Member State's customs authority.

---
*Generated with Crush AI. Based on primary EU legal sources (EUR-Lex). All rates verified against official regulations.*
