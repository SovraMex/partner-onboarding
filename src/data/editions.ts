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
    sizeLabel: '10+ tramites',
    title: 'Edicion estandar',
    features: [
      '**5 roles** gobierno (dueno, coordinador, referente, tecnico, comunicacion)',
      '**5 tramites** meta en 90 dias',
      '**2 capacitaciones** separadas (conceptual + funcional)',
      '**Tecnico** dedicado en el equipo core',
    ],
    footnote: 'Este portal cubre esta edicion completa.',
  },
  {
    tag: 'GOBIERNO PEQUENO',
    tagColor: 'orange',
    sizeLabel: '<10 tramites',
    title: 'Edicion simplificada',
    features: [
      '**3 roles** gobierno (coordinador, referente unico, comunicacion)',
      '**2 tramites** meta en 90 dias',
      '**1 capacitacion** condensada (conceptual + funcional)',
      '**Tecnico** externalizado (partner o proveedor)',
    ],
    footnoteLink: 'https://github.com/SovraMex/partner-system/blob/main/docs/09b-guia-implementacion-gobierno-pequeno.md',
    footnoteLinkLabel: 'Ver guia completa en GitHub ↗',
  },
];

export const editionsNote =
  'Mismo plazo, mismas fases. La edicion Gobierno Pequeno mantiene los 90 dias y las 5 etapas (A-E). Lo que cambia es el equipo, la cantidad de tramites, y la intensidad de las capacitaciones. La guía de este portal aplica para ambas — las diferencias estan documentadas en la guia.';

export const editionsIntro =
  'No todos los gobiernos son iguales. El criterio: si el gobierno tiene menos de 10 tramites totales, usa la edicion Gobierno Pequeno.';
