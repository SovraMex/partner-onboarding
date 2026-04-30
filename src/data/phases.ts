// Phase metadata extracted from index.html phase cards

export interface Phase {
  id: string;
  name: string;
  weeks: string;
  description: string;
  badgeColor: 'blue' | 'purple' | 'orange' | 'green' | 'yellow' | 'muted';
  badgeLabel: string;
  route: string;
  status: 'current' | 'locked' | 'pending';
  timelineWeeks?: number; // for the timeline bar segment
}

export const phases: Phase[] = [
  {
    id: 'fase-0',
    name: 'Preparación',
    weeks: 'Pre-inicio',
    description: 'Roles, readiness, modelo de soporte. Todo lo que necesitas saber.',
    badgeColor: 'blue',
    badgeLabel: 'FASE 0',
    route: '/fase-0',
    status: 'current',
  },
  {
    id: 'fase-a',
    name: 'Inicio',
    weeks: 'Semana 1',
    description: 'Alinear equipos, roles, alcance y expectativas.',
    badgeColor: 'blue',
    badgeLabel: 'FASE A',
    route: '/fase-a',
    status: 'locked',
    timelineWeeks: 1,
  },
  {
    id: 'fase-b',
    name: 'Preparación',
    weeks: 'Semanas 2–5',
    description: 'Capacitación, trámites priorizados, integraciones.',
    badgeColor: 'purple',
    badgeLabel: 'FASE B',
    route: '/fase-b',
    status: 'locked',
    timelineWeeks: 4,
  },
  {
    id: 'fase-c',
    name: 'Modelado',
    weeks: 'Semanas 6–8',
    description: 'Digitalización, validación y testing end-to-end.',
    badgeColor: 'orange',
    badgeLabel: 'FASE C',
    route: '/fase-c',
    status: 'locked',
    timelineWeeks: 3,
  },
  {
    id: 'fase-d',
    name: 'Pre-lanzamiento',
    weeks: 'Semanas 9–10',
    description: 'Operadores, soporte, comunicación lista.',
    badgeColor: 'green',
    badgeLabel: 'FASE D',
    route: '/fase-d',
    status: 'locked',
    timelineWeeks: 2,
  },
  {
    id: 'fase-e',
    name: 'Post-lanzamiento',
    weeks: 'Semanas 11–12',
    description: 'Estabilidad, métricas y cierre del ciclo.',
    badgeColor: 'yellow',
    badgeLabel: 'FASE E',
    route: '/fase-e',
    status: 'locked',
    timelineWeeks: 2,
  },
];

export const takeover = {
  route: '/takeover',
  label: '¿Asumes un proyecto existente? → Modelo de Traspaso (Takeover)',
};
