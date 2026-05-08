// Editions comparison data from index.html

export interface Edition {
  tag: string;
  tagColor: 'blue' | 'orange';
  sizeLabel: string;
  title: string;
  features: string[];
  footnote?: string;
  footnoteLink?: string;
  footnoteLinkLabel?: string;
}

export const editions: Edition[] = [
  {
    tag: 'COMPLETA',
    tagColor: 'blue',
    sizeLabel: '10+ trámites',
    title: 'Edición estándar',
    features: [
      '**5 roles** gobierno (dueño, coordinador, especialista funcional, técnico, comunicación)',
      '**5 trámites** meta en 90 días',
      '**2 capacitaciones** separadas (conceptual + funcional)',
      '**Técnico** dedicado en el equipo core',
    ],
    footnote: 'Este portal cubre esta edición completa.',
  },
  {
    tag: 'GOBIERNO PEQUEÑO',
    tagColor: 'orange',
    sizeLabel: '<10 trámites',
    title: 'Edición simplificada',
    features: [
      '**3 roles** gobierno (coordinador, referente único, comunicación)',
      '**2 trámites** meta en 90 días',
      '**1 capacitación** condensada (conceptual + funcional)',
      '**Técnico** externalizado (partner o proveedor)',
    ],
    footnoteLink: 'https://github.com/SovraMex/partner-system/blob/main/docs/09b-guia-implementacion-gobierno-pequeno.md',
    footnoteLinkLabel: 'Ver guia completa en GitHub ↗',
  },
];

export const editionsNote =
  'Mismo plazo, mismas fases. La edición Gobierno Pequeño mantiene los 90 días y las 5 etapas (A-E). Lo que cambia es el equipo, la cantidad de trámites, y la intensidad de las capacitaciones. La guía de este portal aplica para ambas — las diferencias están documentadas en la guía.';

export const editionsIntro =
  'No todos los gobiernos son iguales. El criterio: si el gobierno tiene menos de 10 trámites totales, usa la edición Gobierno Pequeño.';
