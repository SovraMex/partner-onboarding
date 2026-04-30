// 3 support levels extracted from fase-0.html

export interface SupportLevel {
  level: number;
  name: string;
  label: string;
  color: 'green' | 'blue' | 'purple';
  description: string;
  detail: string;
  slas?: string;
}

export const supportLevels: SupportLevel[] = [
  {
    level: 1,
    name: 'Nivel 1',
    label: 'Gobierno',
    color: 'green',
    description: 'El equipo core responde dudas de operadores y ciudadanos. Accesos, contraseñas, dudas de uso, estado de trámites.',
    detail: 'Requisito: al menos 2 personas capacitadas. Si solo hay 1, es single point of failure.',
  },
  {
    level: 2,
    name: 'Nivel 2',
    label: 'Partner (tú)',
    color: 'blue',
    description: 'Lo que Nivel 1 no puede: configuraciones, ajustes funcionales, bugs no críticos, capacitación adicional, diagnóstico de integraciones.',
    detail: 'SLAs: Crítica 1hr / Alta 4hrs / Media 8hrs / Baja 24hrs (tiempo de respuesta en horario laboral)',
    slas: 'Crítica 1hr / Alta 4hrs / Media 8hrs / Baja 24hrs',
  },
  {
    level: 3,
    name: 'Nivel 3',
    label: 'Sovra',
    color: 'purple',
    description: 'Bugs de plataforma core, infraestructura, integraciones core, incidentes de seguridad. Tú escalas a Sovra — el gobierno no contacta a Sovra directamente.',
    detail: 'SLAs: Crítica 30min / Alta 2hrs / Media 8hrs / Baja 24hrs (tiempo de respuesta)',
    slas: 'Crítica 30min / Alta 2hrs / Media 8hrs / Baja 24hrs',
  },
];

export const supportGoldenRule =
  'El gobierno siempre habla con el Partner. El Partner siempre habla con Sovra. Nunca se salta un nivel — esto protege la relación del Partner con su gobierno.';
