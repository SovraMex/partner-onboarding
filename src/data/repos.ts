// GitHub repository links extracted from index.html

export interface Repo {
  icon: string;
  name: string;
  description: string;
  url: string;
}

export const repos: Repo[] = [
  {
    icon: '📁',
    name: 'SovraMex/partner-system',
    description: 'Portales + documentos estratégicos — este sistema completo',
    url: 'https://github.com/SovraMex/partner-system',
  },
  {
    icon: '🎫',
    name: 'SovraMex/sovra-tickets',
    description: 'Sistema de tickets de soporte con clasificación IA',
    url: 'https://github.com/SovraMex/sovra-tickets',
  },
  {
    icon: '🤖',
    name: 'sovrahq/knowledge-base',
    description: '54 páginas de manuales — RAG para agente de soporte',
    url: 'https://github.com/sovrahq/knowledge-base',
  },
];
