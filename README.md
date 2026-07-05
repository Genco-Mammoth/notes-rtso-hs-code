# EU Tariff Analysis Report — Rubber Seed Oil & Vegetable Fats

**Reference date: 4 July 2026**

A comprehensive, 22-page interactive HTML report analysing EU import duties for rubber tree seed oil (*Hevea brasiliensis*) and related vegetable fats and oils from Indonesia, with a specific focus on biodiesel feedstock classification.

## Quick Answer

**For crude rubber seed oil from Indonesia as biodiesel feedstock: CN `1515 90 40` at 3.2% duty.**

This is the single correct, defensible, and lowest-duty classification. It saves 50% vs the default `1515 90 59` (6.4%). No anti-dumping or countervailing duties apply.

## Scope

The report covers **10 CN codes** across Chapters 15 and 38:

| Chapter | Codes | Rates |
|---------|-------|-------|
| **Ch. 15 — Fixed Vegetable Oils** | 1515 90 40, 1515 90 59, 1515 90 99 | 3.2%–9.6% |
| **Ch. 15 — Modified / Residues** | 1518 00 31, 1518 00 91, 1522 00 99 | 0% (with caveats) |
| **Ch. 38 — Industrial Fatty Acids** | 3823 19 10, 3823 19 30, 3823 19 90 | 2.9% (plus ADD risks) |

Includes detailed analysis of anti-dumping duties (Reg. EU 2023/111, up to 46.4% for Indonesia), countervailing duties (Reg. EU 2019/2092, 8–18%), GSP preferences, and the EU-Indonesia CEPA.

## Site Structure (22 pages)

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

### Analysis
- `indonesia.html` — GSP graduation, CEPA, ASEAN comparison
- `rubber-seed-oil.html` — Definitive RSO strategy with verdict and action checklist
- `mixing-guide.html` — EU classification of mixed oils, GIR rules, blending strategies
- `historical.html` — Rate evolution timeline with discrepancy analysis

### Reference
- `measures.html` — Non-tariff measures (CITES, organic, waste, sanctions)
- `faq.html` — 25 answered questions across 6 categories
- `glossary.html` — 54 terms defined alphabetically
- `sources.html` — All primary EUR-Lex sources with methodology

## Features

- **8 color themes** (4 light, 4 dark) with persistent preferences
- **4 font themes** (Modern, System, Editorial, Humanist)
- **3 text sizes** and **wide reading mode**
- **Responsive design** — desktop, tablet, mobile, print-optimized
- **Interactive settings panel** — gear icon in header
- **Dropdown navigation** — grouped by section with chapter dividers
- **Single JS file** architecture (455 lines) — no race conditions
- **Anti-flash theme loading** — inline script prevents FOUC
- **22 pages, zero inline styles, all CSS/JS validated**

## Usage

Open `index.html` in any modern browser. All 22 pages are self-contained with shared navigation injected via JavaScript. Click the gear icon (⚙) in the top-right to change theme, font, text size, or print.

To print/save as PDF: click the gear icon → "Print / Save as PDF", or use `Cmd/Ctrl + P` in your browser.

## Primary Sources

All duty rates verified against official EU legal instruments published in the Official Journal via EUR-Lex:

- **Reg. (EEC) 2658/87** — Establishes CN & TARIC
- **Reg. (EU) 2024/1652** — Current MFN duty rates (3.2%–12.8%)
- **Reg. (EU) 978/2012** — GSP scheme
- **Reg. (EU) 2023/111** — ADD on Indonesian fatty acids
- **Reg. (EU) 2019/2092** — CVD on Indonesian biodiesel
- **Directive (EU) 2018/2001** — RED II renewable energy
- And 10+ other regulations — see `sources.html` for the complete list.

## Disclaimer

This report is for informational purposes and does not constitute legal or customs advice. For binding classification decisions, obtain a Binding Tariff Information (BTI) ruling from the importing Member State's customs authority.

---
*Generated with Crush AI. Based on primary EU legal sources (EUR-Lex). All rates verified against official regulations.*
