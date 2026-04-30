// 13 system products extracted from index.html

export type ProductCategory = 'antes' | 'durante' | 'siempre';

export interface Product {
  icon: string;
  title: string;
  description: string;
  githubLink?: string;
  githubLabel?: string;
  category: ProductCategory;
}

export const productCategories: { key: ProductCategory; label: string }[] = [
  { key: 'antes', label: 'Antes de implementar — Capacitación' },
  { key: 'durante', label: 'Durante implementación — Herramientas' },
  { key: 'siempre', label: 'Siempre — Soporte y operación' },
];

export const products: Product[] = [
  // Antes de implementar — Capacitación
  {
    icon: '🎓',
    title: 'Certificación Partner',
    description: 'Programa de 4 semanas. Plataforma, metodología y Web3. Interactivo con checklists por semana.',
    githubLink: 'https://github.com/SovraMex/partner-system/tree/main/portal-certification',
    githubLabel: '↗ GitHub: partner-system/portal-certification',
    category: 'antes',
  },
  {
    icon: '📚',
    title: 'Pensum + Syllabus',
    description: 'Diseño del sistema educativo (interno) + plan de estudio (partner). 3 dimensiones × 18 módulos.',
    githubLink: 'https://github.com/SovraMex/partner-system/tree/main/docs',
    githubLabel: '↗ GitHub: partner-system/docs',
    category: 'antes',
  },
  {
    icon: '🎬',
    title: 'Videos capacitación',
    description: 'Contenido audiovisual con IA (HeyGen). Módulos por capítulo, formato flexible.',
    category: 'antes',
  },
  // Durante implementación — Herramientas
  {
    icon: '📘',
    title: 'Guía de Implementación',
    description: 'Guía operativa: 14 reuniones en 5 fases. Qué hacer, qué decidir, qué errores evitar, cuándo escalar.',
    githubLink: 'https://github.com/SovraMex/partner-system/tree/main/portal-onboarding',
    githubLabel: '↗ GitHub: partner-system/portal-onboarding',
    category: 'durante',
  },
  {
    icon: '📦',
    title: 'Kit de materiales',
    description: 'Templates por fase: contratos, checklists, guías gobierno, diccionarios. Listos para usar.',
    githubLink: 'https://github.com/SovraMex/partner-system/tree/main/docs',
    githubLabel: '↗ GitHub: partner-system/docs',
    category: 'durante',
  },
  {
    icon: '🛟',
    title: 'Modelo de soporte + SLAs',
    description: '3 niveles (Gobierno → Partner → Sovra). SLAs por severidad. Cuadro de clasificación de incidentes.',
    category: 'durante',
  },
  // Siempre — Soporte y operación
  {
    icon: '🎫',
    title: 'Sistema de Tickets',
    description: 'Portal de soporte con IA. Reporta problemas, seguimiento en tiempo real, clasificación automática por agente.',
    githubLink: 'https://github.com/SovraMex/sovra-tickets',
    githubLabel: '↗ GitHub: SovraMex/sovra-tickets',
    category: 'siempre',
  },
  {
    icon: '🤖',
    title: 'Agente IA de Soporte',
    description: 'Clasifica y resuelve tickets automáticamente. 54 páginas de manuales como base de conocimiento (RAG).',
    githubLink: 'https://github.com/sovrahq/knowledge-base',
    githubLabel: '↗ GitHub: sovrahq/knowledge-base',
    category: 'siempre',
  },
  {
    icon: '📊',
    title: 'Dashboard + Métricas',
    description: 'Métricas por gobierno: adopción, operación, SLA compliance, tickets resueltos por IA vs humano.',
    category: 'siempre',
  },
];
