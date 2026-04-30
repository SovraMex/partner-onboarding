// Readiness signals from index.html (landing) + formal readiness from fase-0.html

// Landing page readiness signals (interactive green/red buttons)
export interface ReadinessSignal {
  icon: string;
  title: string;
  question: string;
  greenLabel: string;
  greenDetail: string;
  redLabel: string;
  redDetail: string;
}

export const readinessSignals: ReadinessSignal[] = [
  {
    icon: '🏛️',
    title: 'Voluntad política',
    question: '¿Hay un tomador de decisiones que va a empujar esto cuando se atore?',
    greenLabel: '🟢 Secretario asiste al kickoff',
    greenDetail: 'El dueño del proyecto está comprometido. Buen comienzo.',
    redLabel: '🔴 "Estamos explorando"',
    redDetail: 'Sin respaldo político, el proyecto se va a atascar.',
  },
  {
    icon: '👥',
    title: 'Equipo asignable',
    question: '¿Pueden nombrar los 5 roles con dedicación real?',
    greenLabel: '🟢 Nombres en semana 1',
    greenDetail: 'Equipo comprometido. Los 5 roles son el mínimo.',
    redLabel: '🔴 "Vamos a ver quién puede"',
    redDetail: 'Reasignación constante mata el momentum.',
  },
  {
    icon: '🖥️',
    title: 'Infraestructura mínima',
    question: '¿Tienen dominio, DNS, y TI que responda en menos de 1 semana?',
    greenLabel: '🟢 TI responde rápido',
    greenDetail: 'La infra no será blocker. Pide dominio en semana 1.',
    redLabel: '🔴 Sin TI propio',
    redDetail: 'El dominio se puede atrasar semanas. Planea con buffer.',
  },
  {
    icon: '📋',
    title: 'Procesos identificados',
    question: '¿Saben qué trámites quieren digitalizar primero?',
    greenLabel: '🟢 Lista de 5-10 trámites',
    greenDetail: 'Foco claro. Usa criterio de priorización en Fase B.',
    redLabel: '🔴 "Queremos digitalizar todo"',
    redDetail: 'Ambición sin prioridad = 20 trámites a medias.',
  },
];

export const readinessLandingRule =
  'Evalúa estas 4 señales antes de comprometer un timeline. Si 2 o más son rojas, ofrece una sesión de pre-discovery.';

// Fase 0 formal readiness signals (accordion with green/red detail)
export interface FormalReadinessSignal {
  title: string;
  subtitle: string;
  greenLabel: string;
  greenDetail: string;
  redLabel: string;
  redDetail: string;
}

export const formalReadinessSignals: FormalReadinessSignal[] = [
  {
    title: '1. Voluntad política',
    subtitle: '¿Hay un tomador de decisiones que va a empujar esto cuando se atore?',
    greenLabel: '🟢 Verde',
    greenDetail: 'El secretario/director asiste al kickoff y asigna equipo. Hay respaldo político real.',
    redLabel: '🔴 Roja',
    redDetail: '"Estamos explorando opciones" o "depende del presupuesto." Sin respaldo, el proyecto se atasca.',
  },
  {
    title: '2. Equipo asignable',
    subtitle: '¿Pueden nombrar los 5 roles con dedicación real?',
    greenLabel: '🟢 Verde',
    greenDetail: 'Nombres y apellidos en la primera semana. Dedicación mínima negociada.',
    redLabel: '🔴 Roja',
    redDetail: '"Vamos a ver quién puede" o reasignación constante. Mata el momentum.',
  },
  {
    title: '3. Infraestructura mínima',
    subtitle: '¿Tienen dominio, DNS, y TI que responda en menos de 1 semana?',
    greenLabel: '🟢 Verde',
    greenDetail: 'TI responde rápido. Dominio y certificados no serán blocker.',
    redLabel: '🔴 Roja',
    redDetail: 'No tienen área de TI o dependen de proveedor externo sin contrato. El dominio puede atrasar semanas.',
  },
  {
    title: '4. Procesos identificados',
    subtitle: '¿Saben qué trámites quieren digitalizar primero?',
    greenLabel: '🟢 Verde',
    greenDetail: 'Lista de 5-10 trámites con volumen estimado. Foco claro.',
    redLabel: '🔴 Roja',
    redDetail: '"Queremos digitalizar todo" sin prioridad. Ambición sin foco = 20 trámites a medias.',
  },
];

export const formalReadinessRule =
  'Si 2 o más señales son rojas, NO comprometas timeline. Ofrece una sesión de pre-discovery (2-4 semanas) para que el gobierno se prepare. Es mejor retrasar el arranque que arrancar mal. Si tienes dudas, escala a Sovra — para eso estamos.';

// Fase 0 formal readiness checklist (checkbox version)
export interface ReadinessCheckItem {
  text: string;
  hint: string;
}

export const readinessCheckItems: ReadinessCheckItem[] = [
  {
    text: 'Dueño político confirmado y disponible',
    hint: 'Secretario/director asiste al kickoff y asigna equipo. Hay respaldo real.',
  },
  {
    text: 'IDP operativo',
    hint: 'El gobierno tiene proveedor de identidad o está dispuesto a usar el de Sovra.',
  },
  {
    text: 'Equipo core completo nominado',
    hint: 'Los 5 roles tienen nombre y apellido con dedicación negociada.',
  },
  {
    text: '5 trámites candidatos identificados',
    hint: 'Lista preliminar con volumen estimado. No necesita estar priorizada aún.',
  },
];

export const readinessCheckRule =
  'Menos de 3 señales verdes = no comprometer timeline. Ofrece pre-discovery de 2-4 semanas. Es mejor retrasar el arranque que arrancar mal.';
