// Fase D content extracted from fase-d.html

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
  note?: string;
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
export const faseDHero = {
  badge: 'Semanas 9–10 — Fase D',
  badgeColor: 'green' as const,
  title: 'Pre-lanzamiento',
  description: 'Pruebas en producción, capacitación de operadores, modelo de soporte y preparación del discurso. Todo listo para el día 1.',
};

// Context card
export const faseDContext = {
  completedInC: [
    'Trámites digitalizados y modelados en la plataforma',
    'Validados con áreas dueñas',
    'Testing end-to-end pasado — 0 bugs críticos',
    'Integraciones funcionando (IDP, pagos si aplica)',
  ],
  focusNow: 'Preparar personas (operadores, comunicación, tomadores de decisión) y definir soporte. Todo listo para el día 1.',
  criticalRoles: [
    { label: 'Soporte/capacitador — capacita operadores', color: 'green' as const },
    { label: 'Comunicación — materiales y discurso', color: 'blue' as const },
    { label: 'Dueño del proyecto — discurso político', color: 'purple' as const },
  ],
};

// Checklist
export const faseDChecklist: ChecklistItem[] = [
  {
    text: 'Pruebas en producción pasadas',
  },
  {
    text: 'Accesos de operadores gestionados y confirmados',
  },
  {
    text: 'Operadores capacitados en su flujo específico',
  },
  {
    text: 'Modelo de soporte socializado (3 niveles, SLAs claros)',
  },
  {
    text: 'Equipo de comunicación tiene materiales y plan de lanzamiento',
  },
  {
    text: 'Tomadores de decisión informados y alineados con el discurso',
  },
  {
    text: 'Fecha de lanzamiento confirmada',
  },
  {
    text: 'Runbook de lanzamiento preparado',
    hint: 'Qué hacer si X falla en el día 1.',
  },
  {
    text: 'Roles verificados y vigentes',
    hint: 'Especialmente Nivel 1 soporte asignado con nombres.',
  },
];

export const faseDStorageKey = 'phaseD_checklist';

// Meetings
export const faseDMeetings: Meeting[] = [
  {
    number: '1',
    title: 'Capacitación de operadores',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '2+ horas por grupo',
    subtitle: 'Cada operador sabe usar la plataforma para su flujo específico.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Cada operador sabe usar la plataforma para su flujo específico. Sin esto, el ciudadano tiene mala experiencia.',
      },
      {
        label: 'Agenda',
        items: [
          'Demo del flujo completo del trámite (vista operador)',
          'Práctica supervisada — cada operador gestiona un expediente de prueba',
          'Dudas y casuística: qué hacer cuando X pasa',
          'Accesos individuales verificados',
        ],
      },
    ],
    deliverables: [
      { text: 'Operadores capacitados en su flujo' },
      { text: 'Accesos individuales confirmados' },
      { text: 'Lista de dudas frecuentes documentada' },
      { text: 'Al menos 1 día de práctica supervisada antes de producción' },
    ],
    attendees: [
      { label: 'Operadores por grupo/area', required: true },
      { label: 'Soporte/capacitador partner', required: true },
      { label: 'Especialista funcional gobierno (apoyo)', required: false },
    ],
    note: '>10 operadores = train the trainer. Capacita 2-3 del equipo core para que repliquen.',
  },
  {
    number: '2',
    title: 'Socialización modelo de soporte',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1 hora',
    subtitle: 'Todos saben a quién escalar qué. Si no está claro antes del lanzamiento, todo te llega a ti.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Todos saben a quién escalar qué. Si no está claro antes del lanzamiento, todo te llega a ti.',
      },
      {
        label: 'Agenda',
        items: [
          'Presentar 3 niveles de soporte (Gobierno → Partner → Sovra)',
          'SLAs por severidad (referencia doc completo del Kit)',
          'Canales definidos por nivel',
          'Proceso de escalación paso a paso',
          'Directorio de contactos',
        ],
      },
    ],
    deliverables: [
      { text: 'Modelo de soporte firmado/aceptado por gobierno' },
      { text: 'Directorio de contactos completo' },
      { text: 'Equipo Nivel 1 gobierno identificado con nombres' },
      { text: 'SLAs claros y entendidos por todos' },
    ],
    attendees: [
      { label: 'Coordinador gobierno', required: true },
      { label: 'Dueño del proyecto', required: true },
      { label: 'Equipo Nivel 1 gobierno', required: true },
      { label: 'Líder partner', required: true },
    ],
  },
  {
    number: '3',
    title: 'Sesión ejecutiva — Discurso político',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1 hora max',
    subtitle: 'El tomador de decisiones puede hablar del proyecto con confianza ante prensa, superiores o ciudadanos.',
    sections: [
      {
        label: 'Objetivo',
        content: 'El tomador de decisiones puede hablar del proyecto con confianza ante prensa, superiores o ciudadanos.',
      },
      {
        label: 'Agenda',
        items: [
          'Qué valor genera la plataforma (en lenguaje político, no técnico)',
          'Métricas clave para comunicar',
          'Qué decir ante preguntas difíciles',
          'Practicar el pitch (2 minutos)',
        ],
      },
    ],
    deliverables: [
      { text: 'Talking points documentados (1 página)' },
      { text: 'Métricas clave seleccionadas (3-5)' },
      { text: 'Dueño del proyecto listo para comunicar' },
    ],
    attendees: [
      { label: 'Dueño del proyecto', required: true },
      { label: 'Comunicación gobierno', required: true },
      { label: 'Líder partner (facilita)', required: false },
    ],
  },
  {
    number: '4',
    title: 'Preparación de comunicación y lanzamiento',
    tag: 'Obligatoria',
    tagType: 'required',
    duration: '1-2 horas',
    subtitle: 'Plan de lanzamiento definido — fecha, canales, materiales, contingencia.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Plan de lanzamiento definido — fecha, canales, materiales, contingencia.',
      },
      {
        label: 'Agenda',
        items: [
          'Fecha de lanzamiento confirmada',
          'Plan de comunicación: canales internos + externos',
          'Materiales preparados: guías ciudadano, FAQ, redes sociales',
          'Runbook de lanzamiento: qué hacer si X falla en día 1',
          'Decisión: big bang vs gradual',
        ],
      },
    ],
    deliverables: [
      { text: 'Fecha de lanzamiento confirmada' },
      { text: 'Plan de comunicación documentado' },
      { text: 'Materiales de comunicación listos' },
      { text: 'Runbook de lanzamiento escrito' },
    ],
    attendees: [
      { label: 'Comunicación gobierno', required: true },
      { label: 'Coordinador', required: true },
      { label: 'Líder partner', required: true },
    ],
  },
];

// Meeting model for pre-launch
export const faseDMeetingModel = {
  description: 'En Fase D las reuniones son más frecuentes y más operativas. El Partner las lidera todas — capacitación de operadores, socialización de soporte, sesión ejecutiva, y comunicación. Sovra participa únicamente si hay un escalamiento técnico o político que el Partner no puede resolver solo.',
  partnerLeads: 'Capacitación operadores, socialización SLA, sesión ejecutiva, plan de comunicación',
  sovraAccompanies: 'Go-live (día 1), escalamiento de bugs críticos, conflicto político que amenaza lanzamiento',
  minutaRule: 'Envía minuta después de cada reunión: qué se acordó, qué quedó pendiente, quién es responsable. En Fase D la frecuencia sube — puede ser necesaria minuta 2× por semana.',
};

// Testing pre-launch checklist
export interface TestingCheckItem {
  text: string;
}

export const faseDTestingChecklist: TestingCheckItem[] = [
  { text: '1. Ciudadano encuentra el trámite en la guía de trámites' },
  { text: '2. Ciudadano se registra/autentica exitosamente (incluye IDP si aplica)' },
  { text: '3. Ciudadano completa formulario y adjunta documentos requeridos' },
  { text: '4. Operador recibe el expediente y gestiona todas las etapas' },
  { text: '5. Ciudadano recibe notificación del resultado (aprobación/rechazo)' },
  { text: '6. Documento de salida se genera correctamente (si aplica)' },
  { text: '7. Validaciones de campos obligatorios funcionan (ciudadano no envía vacío)' },
  { text: '8. Operador no puede avanzar etapa sin completar campos requeridos' },
  { text: '9. Flujo completo funciona en dispositivo móvil (responsive)' },
  { text: '10. Rechazo por documentación incompleta — ciudadano recibe instrucciones claras' },
];

export const faseDTestingStorageKey = 'phaseD_testing';

export const faseDTestingCriteria =
  '10/10 casos pasados por trámite, 0 bugs críticos abiertos, al menos 1 persona externa completó el trámite sin ayuda.';

// Decisions
export const faseDDecisions: Decision[] = [
  {
    question: '¿Train the trainer o capacitación directa?',
    criteria: '>10 operadores = train the trainer.',
  },
  {
    question: '¿Lanzamiento big bang o gradual?',
    criteria: 'Poca experiencia digital = gradual. Ya tienen adopción = big bang.',
  },
  {
    question: '¿Cuándo involucrar comunicación?',
    criteria: 'Idealmente informados desde Fase B.',
  },
];

// Common errors
export const faseDErrors: ErrorItem[] = [
  {
    title: '"Lanzar sin capacitar operadores."',
    fix: '1 sesión 2hrs + 1 día práctica supervisada mínimo.',
  },
  {
    title: '"No preparar el discurso político."',
    fix: '1 sesión ejecutiva 1hr. Qué valor, qué métricas, qué decir.',
  },
  {
    title: '"Soporte sin estructura."',
    fix: 'Define niveles ANTES del lanzamiento. Template del Kit.',
  },
];

// Sidebar
export const faseDTimeline = [
  { label: 'Fase A — Inicio', weeks: 'S1', status: 'done' as const },
  { label: 'Fase B — Preparación', weeks: 'S2-5', status: 'done' as const },
  { label: 'Fase C — Modelado', weeks: 'S6-8', status: 'done' as const },
  { label: 'Fase D — Pre-lanzamiento', weeks: 'S9-10', status: 'active' as const },
  { label: 'Fase E — Post-lanzamiento', weeks: 'S11-12', status: 'pending' as const },
];

export const faseDEscalationItems = [
  'Problemas en producción que afectan disponibilidad',
  'Gobierno quiere cambiar alcance antes del lanzamiento',
  'Conflicto político que amenaza el lanzamiento',
];

export const faseDKitItems = [
  '📄 Template modelo soporte y SLAs',
  '📢 Plan de comunicación',
  '📋 Runbook de lanzamiento',
  '🎤 Guía discurso ejecutivo',
];
