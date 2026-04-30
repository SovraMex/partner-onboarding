// Fase 0 content extracted from fase-0.html

export interface ChecklistItem {
  text: string;
  hint?: string;
}

// Main checklist — "¿Estás listo para Fase A?"
export const fase0Checklist: ChecklistItem[] = [
  {
    text: 'Readiness evaluado — las 4 señales del gobierno revisadas',
    hint: 'Si 2+ rojas, ofrece pre-discovery antes de comprometer timeline.',
  },
  {
    text: 'Tu equipo tiene los 3 roles asignados (líder + técnico + soporte)',
  },
  {
    text: 'Conoces el modelo de soporte de 3 niveles y los SLAs',
  },
  {
    text: 'Tienes acceso al Kit de materiales y a la Guía de Implementación',
    hint: 'Si no lo recibiste, contacta a partners@sovra.io',
  },
];

export const fase0StorageKey = 'phase0_checklist';
export const fase0ReadinessStorageKey = 'phase0_readiness';

// Role persistence content
export interface RolePersistenceSection {
  title: string;
  items: string[];
}

export const rolePersistenceSections: RolePersistenceSection[] = [
  {
    title: 'Por qué los roles se pierden',
    items: [
      '**La urgencia reemplaza al proceso** — "que lo resuelva quien pueda" en vez de "que lo resuelva quien debe"',
      '**Se definen una vez y no se revisitan** — el kickoff asigna roles, nadie los revisa después',
      '**Las personas competentes absorben más** — el especialista funcional termina haciendo 3 trabajos y se quema',
    ],
  },
  {
    title: 'Qué hacer: Role checkpoint en cada transición de fase',
    items: [
      'Revisar la tabla de roles: ¿Siguen los mismos? ¿Alguien cambió? ¿Alguien desapareció?',
      'Preguntar directamente: "¿Quién está haciendo trabajo que no le corresponde?"',
      'Recalibrar: reasignar, escalar al dueño del proyecto, o documentar el cambio',
    ],
  },
  {
    title: 'Señales de alarma',
    items: [
      '🔴 Un solo nombre en más de 2 roles → single point of failure',
      '🔴 El coordinador dejó de asistir a reuniones → pérdida de seguimiento',
      '🔴 El técnico "no tiene tiempo" → ya no está asignado en la práctica',
      '🔴 Tu equipo resuelve lo que el gobierno debería resolver → la autonomía se perdió',
    ],
  },
];

export const rolePersistenceRule =
  'Si no puedes responder "¿quién es responsable de X?" en menos de 5 segundos — los roles se perdieron. Detente y recalibra.';

// Contingency protocol — Transición de dueño político
export interface ContingencyStep {
  label: string;
  detail: string;
}

export const contingencySteps: ContingencyStep[] = [
  {
    label: '1. Ownership temporal',
    detail: 'El coordinador general asume ownership del proyecto y notifica al Partner el mismo día.',
  },
  {
    label: '2. Reunión de emergencia',
    detail: 'El Partner agenda reunión (máximo 48 horas) con el coordinador y, si es posible, con el sucesor designado.',
  },
  {
    label: '3. Documentación mínima',
    detail: 'Estado actual (fase, % avance, entregables), decisiones pendientes, compromisos políticos (fecha lanzamiento, comunicación pública), riesgos abiertos.',
  },
  {
    label: '4. Con sucesor identificado',
    detail: 'Reunión de contexto en la primera semana. El sucesor confirma o ajusta alcance, prioridades y fecha. Se continúa con el timeline vigente.',
  },
  {
    label: '5. Sin sucesor o equipo roto',
    detail: 'No es una pausa — es un nuevo Readiness Assessment completo. Se aplican las 4 señales. Si menos de 3/4 en verde, periodo de re-preparación. El reloj de 90 días NO se pausa ni reinicia.',
  },
];

export const contingencyRule =
  'La salida del dueño político no es excusa para pausar el reloj. Es un trigger para evaluar si el proyecto sigue siendo viable. Si detectas que ya no hay respaldo político suficiente, escala a Sovra inmediatamente.';

// Readiness declaration template
export const readinessTemplate = `DECLARACIÓN DE READINESS
Fecha: ___________
Gobierno: ___________
Partner: ___________

1. Dueño político: [ ] Confirmado [ ] Pendiente
   Nombre: ___________
   Cargo: ___________

2. IDP: [ ] Operativo [ ] En proceso [ ] No tiene
   Proveedor: ___________

3. Equipo core: [ ] Completo [ ] Parcial [ ] Sin asignar
   Coordinador: ___________
   Esp. funcional: ___________
   Técnico: ___________
   Comunicación: ___________

4. Trámites candidatos: [ ] Identificados [ ] Pendiente
   Lista: ___________

Resultado: ___/4 señales verdes
Decisión: [ ] Arrancar [ ] Pre-discovery
Firma Partner: ___________`;

// Sidebar content
export interface SidebarTimelineItem {
  label: string;
  weeks: string;
  status: 'active' | 'pending' | 'done';
}

export const fase0Timeline: SidebarTimelineItem[] = [
  { label: 'Fase 0 — Preparación', weeks: 'Pre', status: 'active' },
  { label: 'Fase A — Inicio', weeks: 'S1', status: 'pending' },
  { label: 'Fase B — Preparación', weeks: 'S2-5', status: 'pending' },
  { label: 'Fase C — Modelado', weeks: 'S6-8', status: 'pending' },
  { label: 'Fase D — Pre-lanzamiento', weeks: 'S9-10', status: 'pending' },
  { label: 'Fase E — Post-lanzamiento', weeks: 'S11-12', status: 'pending' },
];

export const fase0KitItems: string[] = [
  '📘 Guía de Implementación — guía operativa fase por fase',
  '📦 Kit de materiales — templates por fase',
  '🤖 Asistente RAG — consultas de documentación',
  '🛟 Modelo de soporte — 3 niveles con SLAs',
  '🎓 Capacitación — metodología + plataforma',
  '📊 Métricas — framework govtech',
];

export const fase0EscalationItems: string[] = [
  'Dudas sobre metodología o casos específicos',
  'Gobierno sin readiness — te ayudamos a evaluar',
  'Situaciones políticas que necesitan mediación',
  'partners@sovra.io',
];

// Hero content
export const fase0Hero = {
  badge: 'Antes de arrancar',
  badgeColor: 'blue' as const,
  title: 'Fase 0 — Preparación',
  description: 'Todo lo que necesitas saber antes de la primera reunión con el gobierno. Roles, readiness, modelo de soporte, y cómo mantener la claridad durante 90 días.',
};
