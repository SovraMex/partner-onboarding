# Partner Onboarding Portal — SovraGov

Guía interactiva de implementación de SovraGov en 90 días. 5 fases, 14 reuniones, checklists, readiness assessment, modelo de soporte, y modelo takeover. Todo lo que un partner necesita para ejecutar con calidad.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** con design system Sovra
- **localStorage** para checklists y readiness assessment

## Estructura

```
src/
├── app/
│   ├── page.tsx          # Landing — roadmap 90 días, 13 productos, ediciones, readiness
│   ├── fase-0/page.tsx   # Preparación — roles, readiness, soporte, contingencia
│   ├── fase-a/page.tsx   # Inicio — kickoff, alcance, equipo (Semana 1)
│   ├── fase-b/page.tsx   # Preparación técnica — capacitación, trámites (Semanas 2-5)
│   ├── fase-c/page.tsx   # Modelado — digitalización, testing e2e (Semanas 6-8)
│   ├── fase-d/page.tsx   # Pre-lanzamiento — operadores, comunicación (Semanas 9-10)
│   ├── fase-e/page.tsx   # Post-lanzamiento — métricas, cierre (Semanas 11-12)
│   └── takeover/page.tsx # Modelo Traspaso — T1/T2/T3 para proyectos existentes
├── components/           # 10 componentes compartidos
│   ├── Header.tsx        # Logo Sovra + nav pills + gradient divider
│   ├── Accordion.tsx     # Secciones expandibles (reuniones, roles, errores)
│   ├── Checklist.tsx     # Checkboxes interactivos con persistencia localStorage
│   ├── ProgressBar.tsx   # Barra de progreso por fase (gradient Sovra)
│   ├── ReadinessAssessment.tsx  # Evaluación interactiva (landing + formal)
│   ├── PhaseCard.tsx     # Cards de fase con colores por etapa
│   ├── SystemCard.tsx    # Cards de los 13 productos del sistema
│   ├── EditionCompare.tsx # Completa vs Gobierno Pequeño
│   ├── Sidebar.tsx       # Timeline, kit, escalation box
│   └── PhaseNav.tsx      # Navegación prev/next entre fases
└── data/                 # Contenido extraído de los HTMLs originales
    ├── phases.ts         # 6 fases con metadata
    ├── products.ts       # 13 productos del sistema partner
    ├── roles.ts          # 3 roles partner + 5 roles gobierno
    ├── support-model.ts  # 3 niveles de soporte con SLAs
    ├── readiness.ts      # 4 señales de readiness
    ├── editions.ts       # Completa vs Gobierno Pequeño
    ├── fase-0-content.ts # hasta fase-e-content.ts — contenido por fase
    └── takeover-content.ts
```

## Fases

| Fase | Semanas | Tema | Color |
|------|---------|------|-------|
| 0 | Pre-inicio | Preparación — roles, readiness, soporte | Azul |
| A | 1 | Inicio — kickoff, alcance, equipo | Azul |
| B | 2-5 | Preparación — capacitación, trámites | Púrpura |
| C | 6-8 | Modelado — digitalización, testing | Naranja |
| D | 9-10 | Pre-lanzamiento — operadores, comunicación | Verde |
| E | 11-12 | Post-lanzamiento — métricas, cierre | Amarillo |
| Takeover | 1-8 | Traspaso de proyecto existente | Gris |

## Dos ediciones

- **Completa** (10+ trámites): 5 roles gobierno, 5 trámites meta, 2 capacitaciones
- **Gobierno Pequeño** (<10 trámites): 3 roles, 2 trámites meta, 1 capacitación condensada

Mismo plazo (90 días), mismas fases. Diferente escala.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de producción
```

## Fuente

Port de los HTMLs en `SovraMex/partner-system/portal-onboarding/` (8 páginas HTML + CSS). Todo el contenido fue extraído verbatim.

## Design System

Usa el design system oficial de Sovra:
- Fonts: Plus Jakarta Sans (display), Figtree (body), JetBrains Mono (mono)
- Primary: `#0099ff` / `#0077cc` (light mode)
- Gradient signature: `#0077cc → #7c3aed → #ea580c`
- Logo: SVG desde CDN `sovra.io/branding/`
