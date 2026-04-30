// Partner roles (3) + Government roles (5) extracted from fase-0.html

export interface RoleSection {
  label: string;
  content: string;
  items?: string[];
}

export interface Role {
  title: string;
  tag: string;
  tagType: 'required' | 'duration';
  subtitle: string;
  sections: RoleSection[];
  warning?: string;
  tip?: string;
}

// Partner roles — 3 roles mínimos
export const partnerRoles: Role[] = [
  {
    title: '1. Líder de implementación',
    tag: 'Obligatorio',
    tagType: 'required',
    subtitle: 'La cara del proyecto. Coordina, decide, y escala.',
    sections: [
      {
        label: 'Qué hace',
        content: '',
        items: [
          'Coordina con el gobierno — es el punto de contacto principal',
          'Conoce la metodología y la plataforma a profundidad',
          'Toma decisiones operativas sin escalar todo a Sovra',
          'Lidera reuniones, presenta avances, gestiona expectativas',
        ],
      },
      {
        label: 'Activo en',
        content: 'Todas las fases (A–E). Es el hilo conductor del proyecto.',
      },
    ],
    warning: 'Si tu equipo es pequeño, puede que también seas el técnico — pero intenta que no sea así. Necesitas tiempo para coordinar, no para debuggear.',
  },
  {
    title: '2. Especialista técnico',
    tag: 'Obligatorio',
    tagType: 'required',
    subtitle: 'Ejecuta integraciones, configura la instancia, resuelve lo técnico.',
    sections: [
      {
        label: 'Qué hace',
        content: '',
        items: [
          'Configura la instancia de SovraGov para el gobierno',
          'Ejecuta integraciones (IDP, pagos, APIs, consultas BD)',
          'Resuelve temas técnicos durante toda la implementación',
          'Coordina con el técnico del gobierno para arquitectura',
        ],
      },
      {
        label: 'Activo en',
        content: 'Fase B (arquitectura), Fase C (integraciones), Fase D (producción).',
      },
    ],
    warning: 'Si es la misma persona que el líder, los días de calls con gobierno compiten con los días de configuración técnica. Separa los roles cuando puedas.',
  },
  {
    title: '3. Soporte / capacitador',
    tag: 'Obligatorio',
    tagType: 'required',
    subtitle: 'Capacita al gobierno. Responde dudas. Tu primer nivel de soporte.',
    sections: [
      {
        label: 'Qué hace',
        content: '',
        items: [
          'Capacita al equipo core del gobierno en la plataforma',
          'Capacita operadores antes del lanzamiento (train the trainer o directo)',
          'Responde dudas operativas durante y después de la implementación',
          'Opera como Nivel 2 de soporte post-lanzamiento',
        ],
      },
      {
        label: 'Activo en',
        content: 'Fase B (capacitación equipo core), Fase D (capacitación operadores), Fase E (soporte Nivel 2).',
      },
    ],
  },
];

// Government roles — 5 roles obligatorios
export const governmentRoles: Role[] = [
  {
    title: '1. Dueño del proyecto',
    tag: 'Reuniones clave',
    tagType: 'duration',
    subtitle: 'Toma decisiones políticas. Define qué se digitaliza. Autoridad para mover cosas.',
    sections: [
      {
        label: 'Quién es',
        content: 'Secretario/a de modernización, innovación o afín. No necesita ser técnico — necesita tener autoridad para mover cosas cuando el proyecto se atore.',
      },
      {
        label: 'Dedicación',
        content: 'No operativo diario. Presencia obligatoria en 3 momentos: kickoff (Fase A), cierre de Fase B, y lanzamiento (Fase D).',
      },
    ],
    warning: 'Si delega todo sin involucrarse en el kickoff, el proyecto pierde respaldo político. Insiste en su presencia.',
  },
  {
    title: '2. Coordinador general',
    tag: '50%+ dedicación',
    tagType: 'required',
    subtitle: 'Tu contacto directo. Hace que las cosas pasen. El rol más determinante.',
    sections: [
      {
        label: 'Quién es',
        content: 'La persona que coordina todos los actores del lado gobierno. Lleva el seguimiento del proyecto y reporta internamente. Todo pasa por esta persona.',
      },
      {
        label: 'Dedicación',
        content: 'Mínimo 50% de su tiempo durante los 90 días. Este rol es el que más determina el éxito o fracaso de la implementación.',
      },
    ],
    warning: 'Si tiene 3 proyectos más y el tuyo es el cuarto en prioridad, los tiempos de respuesta se duplican. Negocia dedicación mínima en la Fase A.',
  },
  {
    title: '3. Especialista funcional (1-2 personas)',
    tag: '100% Fases B-C',
    tagType: 'required',
    subtitle: 'Conoce procesos, aprende la plataforma, digitaliza trámites. El músculo de la implementación.',
    sections: [
      {
        label: 'Quién es',
        content: 'Conoce procesos de trámites, transformación digital, mejora regulatoria. Va a entender la plataforma a profundidad — configuración, módulos, flujos. Es quien realmente digitaliza los trámites.',
      },
      {
        label: 'Dedicación',
        content: 'Tiempo completo durante Fases B y C. Es el músculo de la implementación. Sin esta dedicación, los trámites no se digitalizan a tiempo.',
      },
    ],
    tip: 'Los especialistas funcionales que mejor rinden suelen venir de mejora regulatoria. Entienden procesos, hablan el idioma legal, y aprenden la plataforma rápido.',
  },
  {
    title: '4. Técnico',
    tag: 'Variable — intensivo B y C',
    tagType: 'duration',
    subtitle: 'Dominio, APIs, bases de datos, integraciones. El puente técnico del gobierno.',
    sections: [
      {
        label: 'Quién es',
        content: 'Genera dominio, entiende APIs, bases de datos, arquitectura de servicios. Ejecuta integraciones del lado gobierno (IDP, pagos, consultas a BD).',
      },
      {
        label: 'Dedicación',
        content: 'Variable. Intensivo en Fase B (arquitectura) y Fase C (integraciones).',
      },
    ],
    warning: 'El dominio (URL de acceso público) parece trivial pero se atrasa semanas si no lo pides desde el día 1. Ponlo como entregable de la semana 1.',
  },
  {
    title: '5. Comunicación',
    tag: 'Se incorpora Fase D',
    tagType: 'duration',
    subtitle: 'Perspectiva ciudadana. Materiales de lanzamiento. Estrategia de comunicación.',
    sections: [
      {
        label: 'Quién es',
        content: 'Entiende la plataforma desde la perspectiva del ciudadano. Prepara materiales de lanzamiento, estrategia de comunicación, y sensibilización interna.',
      },
      {
        label: 'Dedicación',
        content: 'Se incorpora formalmente en Fase D. Participación puntual antes — idealmente informado desde Fase B para que prepare materiales con conocimiento real, no genérico.',
      },
    ],
  },
];
