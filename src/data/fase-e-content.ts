// Fase E content extracted from fase-e.html

export interface ChecklistItem {
  text: string;
  hint?: string;
}

export interface Attendee {
  label: string;
  required: boolean;
}

export interface MeetingSection {
  label: string;
  content?: string;
  items?: string[];
}

export interface Deliverable {
  text: string;
}

export interface Activity {
  number: string;
  title: string;
  tag: string;
  tagType: 'required' | 'optional';
  duration: string;
  subtitle: string;
  sections: MeetingSection[];
  deliverables: Deliverable[];
  attendees: Attendee[];
  tip?: string;
}

export interface Decision {
  question: string;
  criteria: string;
}

export interface ErrorItem {
  title: string;
  fix: string;
}

export interface MetricCategory {
  name: string;
  color: 'blue' | 'orange' | 'green';
  metrics: string[];
}

// Hero
export const faseEHero = {
  badge: 'Semanas 11–12 — Fase E',
  badgeColor: 'yellow' as const,
  title: 'Post-lanzamiento',
  description: 'El gobierno opera, el Partner observa y corrige. Estabilizar producción, medir resultados, documentar lecciones y definir continuidad. Las 2 semanas más críticas después del go-live.',
};

// Context card
export const faseEContext = {
  completedInD: [
    'Operadores capacitados en su flujo especifico',
    'Modelo de soporte socializado (3 niveles, SLAs claros)',
    'Comunicacion lista — materiales y plan de lanzamiento',
    'Fecha de lanzamiento confirmada',
  ],
  focusNow: 'Estabilidad, adopcion, metricas, lecciones aprendidas, y cierre. Las 2 semanas mas criticas despues del go-live.',
  criticalRoles: [
    { label: 'Nivel 1 soporte — gobierno resuelve operativo', color: 'green' as const },
    { label: 'Coordinador — reporta', color: 'blue' as const },
    { label: 'Dueno del proyecto — narrativa politica', color: 'purple' as const },
  ],
};

// Checklist
export const faseEChecklist: ChecklistItem[] = [
  {
    text: 'Plataforma estable en producción (sin bugs críticos abiertos)',
  },
  {
    text: 'Métricas iniciales documentadas y compartidas con gobierno',
  },
  {
    text: 'Lecciones aprendidas documentadas (tuyas y del gobierno)',
  },
  {
    text: 'Plan de continuidad: qué sigue después de los 90 días',
  },
  {
    text: 'Gobierno opera con autonomía en Nivel 1',
  },
  {
    text: 'Reporte final de implementación entregado (al gobierno y a Sovra)',
  },
  {
    text: 'Roles post-90 días definidos',
    hint: 'Quién opera, quién da soporte, quién escala.',
  },
];

export const faseEStorageKey = 'phaseE_checklist';

// Activities
export const faseEActivities: Activity[] = [
  {
    number: '1',
    title: 'Monitoreo post-lanzamiento',
    tag: 'Continuo',
    tagType: 'required',
    duration: 'Semanas 11-12',
    subtitle: 'Detectar problemas temprano, estabilizar la plataforma, y asegurar adopcion.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Detectar problemas temprano, estabilizar la plataforma, y asegurar adopcion.',
      },
      {
        label: 'Actividades',
        items: [
          'Monitorear metricas diarias (usuarios, tramites, errores)',
          'Soporte segun SLA — disponible diariamente las primeras 2 semanas',
          'Ajustes menores post-produccion',
          'Acompanar lanzamiento publico si lo hay',
          'Seguimiento politico-comunicacional',
        ],
      },
    ],
    deliverables: [
      { text: 'Dashboard de metricas (o reporte semanal) compartido con gobierno' },
      { text: 'Bugs post-lanzamiento resueltos' },
      { text: 'Ajustes funcionales implementados' },
      { text: 'Comunicacion de lanzamiento ejecutada' },
    ],
    attendees: [
      { label: 'Lider partner (coordina)', required: true },
      { label: 'Equipo Nivel 1 gobierno (opera)', required: true },
      { label: 'Comunicacion (lanzamiento publico)', required: false },
    ],
  },
  {
    number: '2',
    title: 'Documentacion de lecciones aprendidas',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1 hora',
    subtitle: 'Cada implementacion ensena algo. Documentar mejora el sistema para todos.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Cada implementacion ensena algo. Documentar mejora el sistema para todos.',
      },
      {
        label: 'Agenda',
        items: [
          '30 min con tu equipo: que funciono, que no, que harias diferente',
          '30 min con coordinador del gobierno: su perspectiva',
          'Consolidar en documento unico',
        ],
      },
    ],
    deliverables: [
      { text: 'Documento de lecciones aprendidas (tu equipo + gobierno)' },
      { text: 'Enviado a Sovra para mejorar esta guía' },
      { text: 'Recomendaciones para la siguiente fase del gobierno' },
    ],
    attendees: [
      { label: 'Lider partner', required: true },
      { label: 'Equipo partner', required: true },
      { label: 'Coordinador gobierno', required: true },
    ],
  },
  {
    number: '3',
    title: 'Reporte final y cierre',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1-2 horas',
    subtitle: 'Cerrar el ciclo de 90 dias con metricas, resultados, y plan de continuidad.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Cerrar el ciclo de 90 dias con metricas, resultados, y plan de continuidad.',
      },
      {
        label: 'Agenda',
        items: [
          'Presentar reporte final: metricas de adopcion, operacion y calidad',
          'Lecciones aprendidas (resumen)',
          'Plan de continuidad: que sigue, quien opera, soporte post-90 dias',
          'Definir roles post-implementacion: quien opera, quien da soporte, quien escala',
          'Celebrar lo logrado — el gobierno merece reconocimiento',
        ],
      },
    ],
    deliverables: [
      { text: 'Reporte final de implementacion (al gobierno y a Sovra)' },
      { text: 'Plan de continuidad documentado' },
      { text: 'Roles post-90 dias definidos y socializados' },
      { text: 'One-pager de resultados (lo que el dueno lleva a su jefe)' },
    ],
    attendees: [
      { label: 'Dueno del proyecto', required: true },
      { label: 'Coordinador', required: true },
      { label: 'Lider partner', required: true },
    ],
    tip: 'Las metricas mas poderosas son de impacto: "Ahorramos X horas de fila al ciudadano." Ayuda al gobierno a contar esa historia.',
  },
];

// Metrics
export const faseEMetrics: MetricCategory[] = [
  {
    name: 'ADOPCION',
    color: 'blue',
    metrics: [
      'Usuarios registrados vs padron',
      'Tramites iniciados/semana',
      'Tasa conversion',
    ],
  },
  {
    name: 'OPERACION',
    color: 'orange',
    metrics: [
      'Tiempo resolucion',
      'Tramites en cola >48hrs',
      'Tickets por categoria',
    ],
  },
  {
    name: 'CALIDAD',
    color: 'green',
    metrics: [
      'Tramites rechazados',
      'Satisfaccion operador',
      'Incidentes plataforma',
    ],
  },
];

// Decisions
export const faseEDecisions: Decision[] = [
  {
    question: '¿Qué métricas reportar?',
    criteria: '3-5 que se alineen con narrativa política del gobierno.',
  },
  {
    question: '¿Cuándo expandir?',
    criteria: 'Solo cuando operación actual estable y gobierno confía.',
  },
];

// Common errors
export const faseEErrors: ErrorItem[] = [
  {
    title: '"Desaparecer después del lanzamiento."',
    fix: '2 semanas post-lanzamiento son críticas. Disponible diariamente.',
  },
  {
    title: '"No documentar lecciones."',
    fix: '30 min con tu equipo + 30 min con coordinador. Envía a Sovra.',
  },
  {
    title: '"Declarar éxito sin métricas."',
    fix: 'One-pager de resultados. Lo que el dueño lleva a su jefe.',
  },
];

// Sidebar
export const faseETimeline = [
  { label: 'Fase A — Inicio', weeks: 'S1', status: 'done' as const },
  { label: 'Fase B — Preparación', weeks: 'S2-5', status: 'done' as const },
  { label: 'Fase C — Modelado', weeks: 'S6-8', status: 'done' as const },
  { label: 'Fase D — Pre-lanzamiento', weeks: 'S9-10', status: 'done' as const },
  { label: 'Fase E — Post-lanzamiento', weeks: 'S11-12', status: 'active' as const },
];

export const faseEEscalationItems = [
  'Inestabilidad en producción',
  'Gobierno quiere expandir alcance — coordina con Sovra',
];

export const faseEKitItems = [
  '📄 Template reporte final',
  '📊 Guía métricas govtech',
  '📋 Template plan de continuidad',
];
