// Fase C content extracted from fase-c.html

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

// Hero
export const faseCHero = {
  badge: 'Semanas 6–8 — Fase C',
  badgeColor: 'orange' as const,
  title: 'Modelado y Testing',
  description: 'Modelar trámites en la plataforma, validar con áreas dueñas y probar end-to-end. Si el ciudadano puede completar sin ayuda extra, está listo.',
};

// Context card
export const faseCContext = {
  completedInB: [
    'Equipo capacitado (conceptual + funcional)',
    'Tramites priorizados y aprobados por dueno del proyecto',
    'Integraciones definidas y plan tecnico acordado',
    'Gobernanza lista: roles y permisos en plataforma',
  ],
  focusNow: 'Digitalizar tramites, validar con areas duenas, testing end-to-end. Si el ciudadano puede completar sin ayuda, esta listo.',
  criticalRoles: [
    { label: 'Especialista funcional — ejecuta modelado', color: 'purple' as const },
    { label: 'Tecnico — integraciones', color: 'orange' as const },
    { label: 'Areas duenas de tramites — validacion', color: 'blue' as const },
  ],
};

// Checklist
export const faseCChecklist: ChecklistItem[] = [
  {
    text: 'Todos los trámites definidos están modelados en la plataforma',
  },
  {
    text: 'Cada trámite validado con el área dueña',
    hint: 'Firma o confirmación explícita.',
  },
  {
    text: 'Testing end-to-end pasado para cada trámite',
    hint: 'Ciudadano + operador.',
  },
  {
    text: 'Integraciones funcionando (IDP, pagos si aplica, consultas BD)',
  },
  {
    text: 'Bugs reportados y resueltos',
    hint: '0 críticos, menores aceptados con plan.',
  },
  {
    text: 'Guía de trámites pública configurada y revisada',
  },
  {
    text: 'Imagen institucional aplicada (logo, colores, landing)',
  },
  {
    text: 'Dominio configurado y funcional',
  },
  {
    text: 'Roles verificados y vigentes — recalibrar antes de pre-lanzamiento',
  },
];

export const faseCStorageKey = 'phaseC_checklist';

// Activities (Fase C uses "activities" instead of "meetings")
export const faseCActivities: Activity[] = [
  {
    number: '1',
    title: 'Modelado de tramites',
    tag: 'Continuo',
    tagType: 'required',
    duration: 'Semanas 6-7',
    subtitle: 'Modela junto con el gobierno, no para ellos. El objetivo es que aprendan a modelar de forma autónoma.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Cada trámite priorizado está digitalizado. El Partner guía al equipo del gobierno en el modelado — el gobierno ejecuta, el Partner enseña.',
      },
      {
        label: 'Actividades',
        items: [
          'Modelar formularios, etapas y flujos por tramite',
          'Configurar catalogos y validaciones',
          'Aplicar imagen institucional (logo, colores, landing)',
          'Coordinar con areas duenas para validacion',
          'Iterar basado en feedback',
        ],
      },
    ],
    deliverables: [
      { text: 'Tramites modelados en la plataforma' },
      { text: 'Imagen institucional aplicada' },
      { text: 'Formularios validados con operador real de cada tramite' },
      { text: 'Catalogos y datos de referencia cargados' },
    ],
    attendees: [
      { label: 'Especialista funcional (lidera)', required: true },
      { label: 'Lider implementacion (coordina)', required: true },
      { label: 'Areas duenas (validan)', required: false },
    ],
  },
  {
    number: '2',
    title: 'Integraciones tecnicas',
    tag: 'Continuo',
    tagType: 'required',
    duration: 'Semanas 6-8',
    subtitle: 'IDP, pagos, consultas a BD — todo funcionando en ambiente de pruebas.',
    sections: [
      {
        label: 'Objetivo',
        content: 'IDP, pagos, consultas a BD — todo funcionando en ambiente de pruebas.',
      },
      {
        label: 'Actividades',
        items: [
          'Implementar integracion IDP (prioridad #1 — sin esto no hay login ciudadano)',
          'Pagos si aplica (agregar 2 semanas al timeline)',
          'Consultas a BD externas del gobierno',
          'Pruebas de conectividad y performance',
        ],
      },
    ],
    deliverables: [
      { text: 'IDP integrado y funcionando' },
      { text: 'Pagos configurados (si aplica)' },
      { text: 'Consultas BD respondiendo correctamente' },
      { text: 'Documentacion tecnica de integraciones actualizada' },
    ],
    attendees: [
      { label: 'Especialista tecnico partner', required: true },
      { label: 'Tecnico gobierno', required: true },
    ],
  },
  {
    number: '3',
    title: 'Testing end-to-end',
    tag: 'Obligatorio',
    tagType: 'required',
    duration: 'Semana 8',
    subtitle: 'Cada tramite funciona completo — del ciudadano al operador y de vuelta.',
    sections: [
      {
        label: 'Objetivo',
        content: 'Cada tramite funciona completo — del ciudadano al operador y de vuelta.',
      },
      {
        label: 'Protocolo de testing (7 pasos)',
        items: [
          '**1.** Ciudadano encuentra el tramite en la guia',
          '**2.** Ciudadano se registra/autentica',
          '**3.** Ciudadano completa formulario y adjunta documentos',
          '**4.** Operador recibe el expediente',
          '**5.** Operador gestiona las etapas',
          '**6.** Ciudadano recibe notificacion del resultado',
          '**7.** Documento de salida se genera correctamente',
        ],
      },
    ],
    deliverables: [
      { text: 'Reporte de testing por tramite (paso / fallo / bugs)' },
      { text: 'Lista de bugs con severidad y responsable' },
      { text: 'Confirmacion de 0 bugs criticos abiertos' },
      { text: 'Guia de tramites publica revisada y correcta' },
    ],
    attendees: [
      { label: 'Lider implementacion (coordina)', required: true },
      { label: 'Alguien que NO participo en modelado (prueba ciudadano)', required: true },
      { label: 'Operador real (prueba operador)', required: true },
    ],
    tip: 'Pidele a alguien que NO participo en modelado que complete el tramite como ciudadano. Si no puede sin ayuda, no esta listo. Estandariza naming de usuarios de prueba.',
  },
];

// Decisions
export const faseCDecisions: Decision[] = [
  {
    question: '¿Qué hacer cuando un área dueña rechaza el modelado?',
    criteria: 'Reunión con operador real, no con su jefe.',
  },
  {
    question: '¿Subetapas o etapas simples?',
    criteria: 'Si puedes dibujarlo como línea recta, no necesitas subetapas.',
  },
  {
    question: '¿Cuándo parar de iterar?',
    criteria: 'Si ciudadano puede completar sin ayuda extra, está listo.',
  },
];

// Common errors
export const faseCErrors: ErrorItem[] = [
  {
    title: '"Modelar sin validar con el área dueña."',
    fix: '30 min con operador real. Más barata y más valiosa.',
  },
  {
    title: '"Dejar integraciones para el final."',
    fix: 'IDP es blocker. Prioriza desde Fase B.',
  },
  {
    title: '"Testing solo del lado operador."',
    fix: 'Script de testing desde perspectiva ciudadana.',
  },
];

// Sidebar
export const faseCTimeline = [
  { label: 'Fase A — Inicio', weeks: 'S1', status: 'done' as const },
  { label: 'Fase B — Preparación', weeks: 'S2-5', status: 'done' as const },
  { label: 'Fase C — Modelado', weeks: 'S6-8', status: 'active' as const },
  { label: 'Fase D — Pre-lanzamiento', weeks: 'S9-10', status: 'pending' as const },
  { label: 'Fase E — Post-lanzamiento', weeks: 'S11-12', status: 'pending' as const },
];

export const faseCEscalationItems = [
  'Bug crítico que no puedes resolver',
  'Integración bloqueada (API no responde)',
  'Área dueña rechaza modelado y no logras mediar',
];

export const faseCKitItems = [
  '📄 Templates de digitalización',
  '📋 Checklist testing end-to-end',
  '🎨 Guía imagen institucional',
];
