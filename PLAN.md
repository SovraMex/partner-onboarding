# Partner Onboarding Portal — React Port

## Source
HTML source at `~/code/SovraMex/partner-system/portal-onboarding/` — 8 HTML files + 1 CSS.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- localStorage for checklist/readiness persistence

## Design System
All CSS variables from `styles.css` are mapped to Tailwind in `tailwind.config.ts`. Fonts: Plus Jakarta Sans (display), Figtree (body), JetBrains Mono (mono).

## Pages (8 routes)
| Route | Source | Description |
|-------|--------|-------------|
| `/` | `index.html` | Landing: roadmap timeline, 13 products grid, editions (Completa vs Gobierno Pequeno), readiness assessment, GitHub repos, CTA |
| `/fase-0` | `fase-0.html` | Preparacion: readiness formal, roles partner (3), roles gobierno (5), persistencia roles, contingencia politica, soporte 3 niveles, checklist |
| `/fase-a` | `fase-a.html` | Inicio: kickoff, alcance, roles, primera reunion |
| `/fase-b` | `fase-b.html` | Preparacion tecnica: capacitacion, tramites, integraciones |
| `/fase-c` | `fase-c.html` | Modelado: digitalizacion, validacion, testing e2e |
| `/fase-d` | `fase-d.html` | Pre-lanzamiento: operadores, soporte, comunicacion |
| `/fase-e` | `fase-e.html` | Post-lanzamiento: estabilidad, metricas, cierre |
| `/takeover` | `takeover.html` | Modelo Traspaso: T1 transferencia, T2 presentacion, T3 operacion, errores comunes |

## Shared Components
All in `src/components/`:

| Component | What it does |
|-----------|-------------|
| `Header.tsx` | Sticky header with logo + phase nav pills (active/locked/done states) |
| `Accordion.tsx` | Expandable sections with chevron animation. Used everywhere. |
| `Checklist.tsx` | Interactive checkboxes with localStorage persistence per phase key |
| `ProgressBar.tsx` | Gradient progress bar with phase labels |
| `PhaseNav.tsx` | Bottom prev/next navigation between phases |
| `Sidebar.tsx` | Right column: timeline, kit items, escalation box |
| `ReadinessAssessment.tsx` | 4 signal cards with green/red selection, auto-result |
| `PhaseCard.tsx` | Landing page phase cards with color-coded top border |
| `SystemCard.tsx` | Landing page product cards (13 products) |
| `EditionCompare.tsx` | Completa vs Gobierno Pequeno comparison |

## Data Layer
All in `src/data/`:

| File | Content |
|------|---------|
| `phases.ts` | Phase metadata: id, name, weeks, description, badge color, route |
| `products.ts` | 13 system products with icon, title, description, github link, category (antes/durante/siempre) |
| `roles.ts` | Partner roles (3) + government roles (5) with details |
| `support-model.ts` | 3 support levels with SLAs |
| `fase-0-content.ts` | Readiness signals, checklist items, contingency protocol |
| `fase-a-content.ts` through `fase-e-content.ts` | Per-phase: meetings (accordion data), decisions, errors, checklists, deliverables |
| `takeover-content.ts` | T1/T2/T3 checklists, decisions, common errors |
| `repos.ts` | GitHub repository links |

## Task Assignment

### T1: Scaffold + Design System (DONE by coordinator)
- tailwind.config.ts with design tokens
- globals.css with fonts
- layout.tsx with metadata

### T2: Shared Components
Read the HTML source files to understand exact structure, then build all components listed above. Each component must be a 'use client' component if it uses state/localStorage. Use Tailwind classes matching the CSS variables.

### T3: Data Extraction
Read ALL 8 HTML source files from `~/code/SovraMex/partner-system/portal-onboarding/`. Extract every piece of content into typed TypeScript data files. This is the most critical task — if data is wrong, all pages are wrong.

### T4: Landing Page
Build `/` using components from T2 and data from T3. Must include: hero, timeline bar, phase cards grid, editions comparison, 13 products grid (3 categories), readiness assessment, GitHub repos section, CTA button.

### T5: Fase 0
Build `/fase-0` — the longest page. Uses: Accordion, Checklist, ProgressBar, Sidebar, ReadinessAssessment (formal version with checkboxes), PhaseNav.

### T6: Fases A-C (parallel — 3 agents)
Each agent builds one phase page. Read the HTML source, use components + data.

### T7: Fases D-E + Takeover (parallel — 3 agents)  
Each agent builds one page. Takeover has its own timeline (T1/T2/T3 instead of A-E).

### T8: QA
Run `npm run build`. Verify all routes render. Check localStorage persistence. Check responsive.

## Code Convention
- `~/code/SovraMex/partner-onboarding/` — canonical path
- All content in Spanish (same as HTML source)
- Tailwind classes only — no inline styles
- 'use client' only when needed (state, localStorage, event handlers)
- File per component, named exports
