// Fase A content extracted from fase-a.html

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
export const faseAHero = {
  badge: 'Semana 1 — Fase A',
  badgeColor: 'blue' as const,
  title: 'Inicio',
  description: 'Alinear equipos, roles, alcance y expectativas. Nadie debería salir de esta semana sin saber exactamente qué se va a hacer y quién hace qué.',
};

// Where you are card
export const faseAContext = {
  description: 'Si pasaste el readiness y conoces los roles del equipo (ver en Fase 0), estás listo para ejecutar.',
  criticalRoles: ['Líder partner', 'Coordinador gobierno', 'Dueño del proyecto'],
};

// Checklist
export const faseAChecklist: ChecklistItem[] = [
  {
    text: 'Los 5 roles del gobierno están asignados con nombre',
    hint: 'Sin nombres, no arranques. Es la señal #1 de readiness.',
  },
  {
    text: 'Tu equipo tiene líder + técnico asignados',
  },
  {
    text: 'Canales de comunicación definidos y activos',
    hint: 'Qué canal para qué tema, qué urgencia.',
  },
  {
    text: 'Documento de requisitos entregado al gobierno',
  },
  {
    text: 'Alcance del contrato revisado — todos entienden qué se incluye',
  },
  {
    text: 'Gantt de trabajo presentado y aceptado',
  },
  {
    text: 'Dominio solicitado a TI (deadline: fin semana 2)',
    hint: 'TI de gobierno puede tardar 2-4 semanas. Pídelo el día 1.',
  },
  {
    text: 'Próximas reuniones agendadas',
  },
  {
    text: 'Roles verificados y vigentes (Partner + Gobierno)',
    hint: 'Tabla de roles con nombres confirmados.',
  },
];

export const faseAStorageKey = 'phaseA_checklist';

// Meetings
export const faseAMeetings: Meeting[] = [
  {
    number: '0',
    title: 'Sesión cero',
    tag: 'Opcional',
    tagType: 'optional',
    duration: '1 hora',
    subtitle: 'Conversación exploratoria informal. Genera alineación que ahorra semanas.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Conocer al equipo del gobierno, entender las dinámicas internas, y establecer una relación de confianza antes de la formalidad del kickoff. No es una reunión de trabajo — es una conversación.',
      },
      {
        label: 'Agenda',
        items: [
          'Presentación informal — quiénes somos, por qué estamos aquí',
          'Contexto del gobierno — prioridades políticas, proyectos previos de digitalización',
          'Expectativas — qué espera el gobierno del proyecto y del partner',
          'Dinámicas internas — quién impulsa, quién podría bloquear, relaciones entre áreas',
          'Preguntas abiertas — dejar que el gobierno hable más de lo que hablas tú',
        ],
      },
    ],
    deliverables: [
      { text: 'Mapa informal de stakeholders (quién decide, quién bloquea, quién impulsa)' },
      { text: 'Primeras impresiones documentadas (contexto político, nivel de madurez digital)' },
      { text: 'Lista de temas sensibles a considerar en el kickoff' },
    ],
    attendees: [
      { label: 'Líder de implementación (tú)', required: true },
      { label: 'Coordinador del gobierno', required: true },
      { label: 'Dueño del proyecto (ideal)', required: false },
    ],
  },
  {
    number: '1',
    title: 'Roles y equipo',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1 hora',
    subtitle: 'Confirmar que ambos equipos tienen las personas correctas asignadas.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Cada persona en la reunión sale sabiendo exactamente qué rol tiene, qué se espera de ella, y cuánto tiempo debe dedicar. Los 5 roles del gobierno quedan asignados con nombre y apellido.',
      },
      {
        label: 'Agenda',
        items: [
          'Presentación equipo partner: líder, técnico, soporte/capacitador',
          'Presentación equipo gobierno: 5 roles con nombre, área y contacto',
          'Dedicación esperada por rol — negociar mínimos (especialmente coordinador: 50%+)',
          'Identificar si algún rol está vacante o compartido con otros proyectos',
          'Definir punto de contacto único de cada lado para comunicación diaria',
        ],
      },
    ],
    deliverables: [
      { text: 'Tabla de roles completa — nombre, email, rol, dedicación, área' },
      { text: 'Puntos de contacto definidos (partner ↔ gobierno)' },
      { text: 'Gaps identificados — roles vacantes o con dedicación insuficiente' },
    ],
    attendees: [
      { label: 'Equipo partner completo', required: true },
      { label: 'Equipo core gobierno (5 roles)', required: true },
      { label: 'Dueño del proyecto', required: true },
    ],
  },
  {
    number: '2',
    title: 'Kickoff formal',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1.5–2 horas',
    subtitle: 'Alinear alcance, responsabilidades, y canales de comunicación.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Todos en la sala entienden exactamente qué se va a hacer, qué NO se va a hacer, y quién es responsable de qué. Es un acuerdo de trabajo, no una presentación.',
      },
      {
        label: 'Agenda',
        items: [
          'Alcance del contrato — qué se incluye, qué no, qué integraciones aplican',
          'Modelo de implementación — SaaS vs on-premise (decisión aquí, no después)',
          'Responsabilidades de cada parte — documento explícito, no verbal',
          'Canales de comunicación — qué canal para qué tema, qué urgencia, horarios',
          'Presentación general de la metodología de 90 días',
          'Preguntas y alineación de expectativas',
        ],
      },
    ],
    deliverables: [
      { text: 'Resumen de alcance en lenguaje simple — firmado o confirmado por ambas partes' },
      { text: 'Matriz de responsabilidades (RACI o simplificada)' },
      { text: 'Canales de comunicación documentados — canal, tema, urgencia, responsable' },
      { text: 'Decisión SaaS vs on-premise registrada' },
    ],
    attendees: [
      { label: 'Líder de implementación', required: true },
      { label: 'Dueño del proyecto (obligatorio)', required: true },
      { label: 'Coordinador gobierno', required: true },
      { label: 'Especialista funcional', required: false },
      { label: 'Técnico gobierno', required: false },
    ],
  },
  {
    number: '3',
    title: 'Metodología detallada',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1.5–2 horas',
    subtitle: 'El gobierno sale sabiendo qué información preparar y para cuándo.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Recorrer las 5 fases con el equipo core, presentar el gantt de trabajo, y asegurar que el gobierno sabe qué debe preparar (datos, accesos, decisiones) antes de cada fase.',
      },
      {
        label: 'Agenda',
        items: [
          'Recorrido de las 5 fases — qué sucede en cada una, cuánto dura, qué necesitas del gobierno',
          'Gantt de trabajo — fechas, hitos, dependencias',
          'Documento de requisitos — entregar y explicar qué información debe preparar el gobierno',
          'Dominio — solicitar al equipo de TI (deadline: fin semana 2)',
          'Primera lista de trámites candidatos — el gobierno propone, tú priorizas en Fase B',
          'Agendar próximas reuniones (capacitaciones Fase B)',
        ],
      },
    ],
    deliverables: [
      { text: 'Gantt de trabajo aprobado con hitos y fechas' },
      { text: 'Documento de requisitos entregado al gobierno con instrucciones' },
      { text: 'Solicitud de dominio enviada a TI (con deadline)' },
      { text: 'Lista preliminar de trámites candidatos' },
      { text: 'Próximas reuniones agendadas (Fase B)' },
    ],
    attendees: [
      { label: 'Líder de implementación', required: true },
      { label: 'Coordinador gobierno', required: true },
      { label: 'Especialista funcional', required: true },
      { label: 'Técnico gobierno', required: true },
      { label: 'Dueño del proyecto (recomendado)', required: false },
    ],
  },
];

export const faseAMeetingsTip =
  'La sesión cero es la reunión más barata y con mayor ROI. Si puedes hacerla, hazla. La confianza que genera ahorra semanas de fricción.';

// Meeting model
export const faseAMeetingModel = {
  partnerLeads: [
    'Todas las reuniones de seguimiento',
    'Capacitaciones al equipo core',
    'Sesiones de validación de trámites',
    'Capacitación de operadores',
  ],
  sovraException: [
    'Kickoff (acompañamiento inicial)',
    'Go-live (soporte día 1)',
    'Escalamiento técnico o político',
  ],
  minutaRule: 'Después de cada reunión de seguimiento, el Partner envía minuta al gobierno y copia a Sovra. Formato: qué se acordó, qué quedó pendiente, quién es responsable, próxima fecha. Sin minuta = sin evidencia de avance.',
};

// Decisions
export const faseADecisions: Decision[] = [
  {
    question: '¿El gobierno tiene readiness?',
    criteria: 'Si no hay equipo con nombres después de semana 1 → escala a Sovra. No sigas "a ver si se arma."',
  },
  {
    question: '¿SaaS o on-premise?',
    criteria: 'Define toda la arquitectura. Resolver en kickoff, no después. Ambigüedad aquí = problemas en Fase C.',
  },
  {
    question: '¿Cuántos trámites en el primer ciclo?',
    criteria: 'Casi siempre 3-5 bien hechos. Si presionan por 20, usa criterio de priorización de Fase B para negociar.',
  },
];

// Common errors
export const faseAErrors: ErrorItem[] = [
  {
    title: '"El gobierno dice que tiene equipo pero no asigna nombres."',
    fix: 'No avances a Fase B. Pide reunión con el dueño del proyecto. Si en 1 semana no hay nombres → escala a Sovra.',
  },
  {
    title: '"Arrancar sin alinear alcance."',
    fix: 'Lee el contrato completo. Prepara resumen de alcance en lenguaje simple. Presenta en la reunión 2.',
  },
  {
    title: '"El dominio no se pide hasta la semana 6."',
    fix: 'Entregable de la semana 1. Seguimiento semanal. Es un blocker silencioso de Fase D.',
  },
];

// Sidebar
export const faseATimeline = [
  { label: 'Fase A — Inicio', weeks: 'S1', status: 'active' as const },
  { label: 'Fase B — Preparación', weeks: 'S2-5', status: 'pending' as const },
  { label: 'Fase C — Modelado', weeks: 'S6-8', status: 'pending' as const },
  { label: 'Fase D — Pre-lanzamiento', weeks: 'S9-10', status: 'pending' as const },
  { label: 'Fase E — Post-lanzamiento', weeks: 'S11-12', status: 'pending' as const },
];

export const faseASidebarRoles = [
  { name: 'Dueño del proyecto', desc: 'Decisiones políticas' },
  { name: 'Coordinador', desc: '50% dedicación mín.' },
  { name: 'Esp. funcional', desc: '100% en Fases B-C' },
  { name: 'Técnico', desc: 'APIs, dominio, infra' },
  { name: 'Comunicación', desc: 'Se suma en Fase D' },
];

export const faseAEscalationItems = [
  'Gobierno no asigna equipo core',
  'Confusión sobre alcance del contrato',
  'Expectativas técnicas exceden contrato',
  'Sin respaldo político suficiente',
];

export const faseAKitItems = [
  '📄 Documento de requisitos del proyecto',
  '📋 Template de gantt / plan de trabajo',
  '📊 Checklist de readiness (evaluación gobierno)',
];
