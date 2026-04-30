// Takeover content extracted from takeover.html

export interface ChecklistItem {
  text: string;
  hint?: string;
}

export interface Decision {
  question: string;
  criteria: string;
}

export interface ErrorItem {
  title: string;
  fix: string;
}

// Hero
export const takeoverHero = {
  badge: 'Semanas 1–8 — Takeover',
  badgeColor: 'muted' as const,
  title: 'Modelo de Traspaso',
  description: 'Cuando asumes un proyecto que ya está en curso, el proceso es fundamentalmente diferente.',
};

// Why it's different — 4 cards
export interface DifferenceCard {
  icon: string;
  text: string;
}

export const takeoverDifferences: DifferenceCard[] = [
  { icon: '🤝', text: 'Ya hay relaciones establecidas' },
  { icon: '⚙️', text: 'Ya hay configuración en la plataforma' },
  { icon: '📋', text: 'Ya hay decisiones tomadas' },
  { icon: '💬', text: 'Ya hay opiniones formadas' },
];

// Phase T1 — Transferencia de conocimiento
export const t1 = {
  icon: 'T1',
  iconColor: 'blue' as const,
  title: 'Transferencia de conocimiento',
  subtitle: 'Semanas 1-2 — Entender todo antes de tocar nada',
};

export const t1Checklist: ChecklistItem[] = [
  { text: 'Reuniones de transferencia con Sovra/equipo saliente completadas' },
  { text: 'Acceso completo a instancia, docs y canales' },
  { text: 'Mapping de stakeholders completado', hint: 'Quién decide, quién bloquea, quién impulsa.' },
  { text: 'Auditoría de estado realizada' },
  { text: 'Hallazgos documentados' },
];

export const t1Decision: Decision = {
  question: '¿Qué heredar y qué arreglar?',
  criteria: 'Prioriza lo que bloquea HOY y genera tickets repetitivos.',
};

// Phase T2 — Presentación al gobierno
export const t2 = {
  icon: 'T2',
  iconColor: 'purple' as const,
  title: 'Presentación al gobierno',
  subtitle: 'Semana 3 — Generar confianza con acciones, no palabras',
};

export const t2Checklist: ChecklistItem[] = [
  { text: 'Reunión formal de presentación completada' },
  { text: 'Plan de continuidad presentado' },
  { text: 'Quick wins entregados (1-2 mejoras rápidas para confianza)' },
];

export const t2Decision: Decision = {
  question: '¿Cuánto cambiar y cuánto conservar?',
  criteria: 'Primeros 30 días = escuchar y entender.',
};

// Phase T3 — Operación asumida
export const t3 = {
  icon: 'T3',
  iconColor: 'green' as const,
  title: 'Operación asumida',
  subtitle: 'Semanas 4-8 — Operar, mejorar, reportar',
};

export const t3Checklist: ChecklistItem[] = [
  { text: 'Soporte Nivel 2 asumido' },
  { text: 'Mejoras de auditoría implementadas' },
  { text: 'Nuevos workstreams iniciados (si contrato lo incluye)' },
  { text: 'Reportes de status entregados al gobierno' },
];

export const t3Decision: Decision = {
  question: '¿Cuándo proponer nuevos workstreams?',
  criteria: 'Solo después de operación estable + confianza.',
};

export const takeoverStorageKey = 'phaseTakeover_checklist';

// Common errors
export const takeoverErrors: ErrorItem[] = [
  {
    title: '"Criticar al equipo anterior frente al gobierno."',
    fix: 'Nunca. "Oportunidades de mejora" nunca "mal hecho."',
  },
  {
    title: '"No hacer auditoría."',
    fix: 'Siempre audita. La sorpresa que no descubras te explota en semana 6.',
  },
  {
    title: '"Querer cambiar todo de una vez."',
    fix: 'Primeros 30 días escuchar. Cambios estructurales con plan que gobierno aprueba.',
  },
];

// Sidebar
export const takeoverTimeline = [
  { label: 'T1 — Transferencia', weeks: 'S1-2', status: 'active' as const },
  { label: 'T2 — Presentación', weeks: 'S3', status: 'pending' as const },
  { label: 'T3 — Operación', weeks: 'S4-8', status: 'pending' as const },
];

export const takeoverSidebarContext = {
  title: 'Contexto del takeover',
  paragraphs: [
    'Un takeover no es un onboarding desde cero. Hay historia, relaciones, y configuración existente.',
    'Tu prioridad #1: **entender antes de actuar.** La auditoría no es opcional.',
  ],
};

export const takeoverEscalationItems = [
  'Equipo saliente no coopera con transferencia',
  'Auditoría revela problemas graves de implementación',
  'Gobierno no acepta al nuevo partner',
];
