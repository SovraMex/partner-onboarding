// Fase B content extracted from fase-b.html

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

export interface Meeting {
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

// Hero
export const faseBHero = {
  badge: 'Semanas 2–5 — Fase B',
  badgeColor: 'purple' as const,
  title: 'Preparación',
  description: 'Capacitar al equipo, priorizar trámites, definir gobernanza e integraciones. El gobierno aprende haciendo — cada actividad es una oportunidad de enseñanza.',
};

// Context card
export const faseBContext = {
  completedInA: [
    'Roles asignados con nombre y apellido (partner + gobierno)',
    'Alcance alineado y canales de comunicacion definidos',
    'Gantt de trabajo aprobado',
    'Dominio solicitado a TI',
  ],
  focusNow: 'Capacitar al equipo, priorizar tramites, definir integraciones y gobernanza. El gobierno sale de esta fase sabiendo operar la plataforma.',
  criticalRoles: [
    { label: 'Especialista funcional — 100% dedicacion', color: 'purple' as const },
    { label: 'Tecnico — arquitectura', color: 'orange' as const },
    { label: 'Coordinador — seguimiento', color: 'blue' as const },
  ],
};

// Checklist
export const faseBChecklist: ChecklistItem[] = [
  {
    text: 'Capacitación conceptual completada',
    hint: 'Equipo core entiende DID y ventanilla.',
  },
  {
    text: 'Capacitación funcional completada',
    hint: 'Especialistas funcionales operan la plataforma.',
  },
  {
    text: 'Trámites priorizados y definidos para los 90 días',
    hint: 'Lista aprobada por dueño del proyecto.',
  },
  {
    text: 'Gobernanza definida: roles y permisos en plataforma asignados',
  },
  {
    text: 'Integraciones definidas y plan técnico acordado',
  },
  {
    text: 'Equipo core tiene accesos a la instancia y manuales',
  },
  {
    text: 'Reunión técnica completada — arquitectura y APIs revisadas',
  },
  {
    text: 'Dominio en progreso (verifica status)',
  },
  {
    text: 'Instancia base configurada (identidad, imagen, catálogos, usuarios)',
    hint: 'En paralelo con capacitaciones — no dejar para después.',
  },
  {
    text: 'Diccionarios de datos de los trámites priorizados entregados o en proceso',
  },
  {
    text: 'Roles verificados y vigentes',
    hint: '¿Alguien cambió desde Fase A? ¿Alguien absorbe más de 2 roles?',
  },
];

export const faseBStorageKey = 'phaseB_checklist';

// Guiding principle
export const faseBPrinciple = {
  label: 'PRINCIPIO RECTOR',
  text: '**Aprender haciendo.** Los 90 días son para transferir capacidades. El Partner facilita y enseña — el gobierno aprende operando. Si al final del ciclo el gobierno no puede operar sin el Partner, la implementación no fue exitosa.',
};

// Partner preparation tip
export const faseBPartnerPrep = {
  label: 'PREPARACIÓN DEL PARTNER',
  text: 'Antes de capacitar, conoce los temas a profundidad. El Kit incluye material estándar, pero la preparación real viene de las fuentes de conocimiento: sovra.io/es/knowledge, manuales técnicos. No presentes lo que no entiendes — el gobierno lo nota.',
};

// Meetings
export const faseBMeetings: Meeting[] = [
  {
    number: '1',
    title: 'Capacitacion Conceptual',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '2-3 horas',
    subtitle: 'Equipo core entiende identidad digital, credenciales verificables, ventanilla digital e interoperabilidad.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Equipo core entiende identidad digital, credenciales verificables, ventanilla digital e interoperabilidad. No tecnico — conceptual.',
      },
      {
        label: 'Agenda',
        items: [
          'Que es identidad digital y por que importa',
          'Credenciales verificables: que son, como funcionan, casos reales',
          'Ventanilla digital: concepto y diferenciadores vs portal tradicional',
          'Interoperabilidad: como se conectan los sistemas',
          'Casos reales de otros gobiernos (NL, SM, SJ)',
        ],
      },
    ],
    deliverables: [
      { text: 'Equipo core alineado en conceptos fundamentales' },
      { text: 'Preguntas frecuentes documentadas' },
      { text: 'Base compartida de lenguaje (todos hablan el mismo idioma)' },
    ],
    attendees: [
      { label: 'Equipo core completo', required: true },
      { label: 'Dueno del proyecto (recomendado)', required: false },
    ],
  },
  {
    number: '2',
    title: 'Capacitacion Funcional SovraGov',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '3-4 horas',
    subtitle: 'Los especialistas funcionales operan la plataforma. No presentacion — hands-on con la instancia real.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Los especialistas funcionales operan la plataforma. No presentacion — hands-on con la instancia real.',
      },
      {
        label: 'Agenda',
        items: [
          'Landing y guia de tramites',
          'Catalogos y configuracion',
          'Modulo de tramites (formularios, etapas, flujos)',
          'Inspecciones y citas',
          'Pagos y notificaciones',
          'Registro e identidad',
          'Accesos a la instancia y manuales',
        ],
      },
    ],
    deliverables: [
      { text: 'Especialistas funcionales navegan la plataforma sin ayuda' },
      { text: 'Accesos entregados a todos los miembros del equipo core' },
      { text: 'Manuales compartidos' },
      { text: 'Lista de dudas funcionales para resolver en sesiones posteriores' },
    ],
    attendees: [
      { label: 'Especialista funcional', required: true },
      { label: 'Coordinador', required: true },
      { label: 'Tecnico', required: true },
    ],
    tip: 'Capacita con la instancia real, no con slides. Si el especialista no toca la plataforma, no retiene nada. Learning by doing.',
  },
  {
    number: '3',
    title: 'Guia Metodologica — Discovery de tramites',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '2 horas',
    subtitle: 'El gobierno sabe como relevar, priorizar y documentar sus tramites para digitalizacion.',
    sections: [
      {
        label: 'Objetivo',
        content: 'El gobierno sabe como relevar, priorizar y documentar sus tramites para digitalizacion.',
      },
      {
        label: 'Agenda',
        items: [
          'Como relevar tramites existentes (fuentes: operadores, formularios papel, normativa)',
          'Criterio de priorizacion: alto volumen + baja complejidad + proceso interno',
          'Como definir gobernanza: roles y permisos en plataforma',
          'Decision de autenticacion ciudadana (IDP propio vs gobierno)',
        ],
      },
    ],
    deliverables: [
      { text: 'Lista priorizada de tramites para los 90 dias (aprobada por dueno del proyecto)' },
      { text: 'Gobernanza definida: quien puede que en la plataforma' },
      { text: 'Decision de autenticacion registrada' },
      { text: 'Diccionarios de datos iniciados para tramites priorizados' },
    ],
    attendees: [
      { label: 'Especialista funcional', required: true },
      { label: 'Coordinador', required: true },
      { label: 'Dueno del proyecto (aprueba priorizacion)', required: true },
    ],
  },
  {
    number: '4',
    title: 'Reunion Tecnica',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1.5-2 horas',
    subtitle: 'Tecnicos de ambos lados alinean arquitectura, APIs, integraciones, seguridad.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Tecnicos de ambos lados alinean arquitectura, APIs, integraciones, seguridad.',
      },
      {
        label: 'Agenda',
        items: [
          'Arquitectura de la plataforma (alto nivel)',
          'Seguridad y backups',
          'APIs disponibles y documentacion',
          'Integraciones acordadas: IDP, pagos, consultas BD',
          'Plan tecnico con responsables y timeline',
          'Status del dominio',
        ],
      },
    ],
    deliverables: [
      { text: 'Plan tecnico documentado con integraciones, responsables y fechas' },
      { text: 'APIs documentadas y compartidas' },
      { text: 'Status de dominio verificado' },
      { text: 'Accesos tecnicos (sandbox, APIs, documentacion)' },
    ],
    attendees: [
      { label: 'Especialista tecnico partner', required: true },
      { label: 'Tecnico gobierno', required: true },
      { label: 'Coordinador (asiste pero no lidera)', required: false },
    ],
  },
];

export const faseBMeetingsTip =
  'Siempre pregunta si el gobierno tiene base de datos de usuarios existente. Migracion acelera adopcion.';

// Decisions
export const faseBDecisions: Decision[] = [
  {
    question: '¿Autenticación propia o IDP del gobierno?',
    criteria: 'Decisión del gobierno, no del Partner. Presenta trade-offs: integrar IDP (cero migración) vs auth propia (rápido, pero dos bases de usuarios). Default: integrarlo.',
  },
  {
    question: '¿Qué trámites incluyen pagos?',
    criteria: '2-3x más complejos. Piloto sin pagos primero.',
  },
  {
    question: '¿El gobierno tiene equipo de digitalización interno?',
    criteria: 'Fomenta autonomía si sí.',
  },
];

// Common errors
export const faseBErrors: ErrorItem[] = [
  {
    title: '"El gobierno quiere digitalizar todo."',
    fix: 'Redirige: 5 bien hechos > 20 a medias.',
  },
  {
    title: '"El técnico no aparece."',
    fix: 'Escala al coordinador inmediatamente. Indicador temprano de atrasos.',
  },
  {
    title: '"Capacitación sin práctica."',
    fix: 'Nunca sin instancia. Slides para contexto, plataforma para aprender.',
  },
  {
    title: '"Diccionarios de datos incompletos."',
    fix: 'Convierte en oportunidad. Tú facilitas, el gobierno llena.',
  },
];

// Sidebar
export const faseBTimeline = [
  { label: 'Fase A — Inicio', weeks: 'S1', status: 'done' as const },
  { label: 'Fase B — Preparación', weeks: 'S2-5', status: 'active' as const },
  { label: 'Fase C — Modelado', weeks: 'S6-8', status: 'pending' as const },
  { label: 'Fase D — Pre-lanzamiento', weeks: 'S9-10', status: 'pending' as const },
  { label: 'Fase E — Post-lanzamiento', weeks: 'S11-12', status: 'pending' as const },
];

export const faseBSidebarRoles = [
  { name: 'Coordinador', desc: 'Orquesta capacitaciones' },
  { name: 'Esp. funcional', desc: '100% dedicación' },
  { name: 'Técnico', desc: 'APIs, integraciones' },
  { name: 'Dueño proyecto', desc: 'Aprueba priorización' },
];

export const faseBEscalationItems = [
  'Gobierno no puede priorizar trámites (bloqueo político)',
  'Integraciones exceden tu capacidad técnica',
  'Equipo core no se apropia de la plataforma',
  'Técnico no se asigna después de 2 semanas',
];

export const faseBKitItems = [
  '📄 Guía metodológica discovery',
  '📋 Template diccionario datos',
  '📖 Manuales plataforma',
  '🔑 Acceso sandbox',
];
