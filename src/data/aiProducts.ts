export type AiProductId =
  | 'merlin'
  | 'akyn'
  | 'magicads'
  | 'magas7'
  | 'dragonlist'
  | 'docai'

export type AiProductStatus = 'Live' | 'Early access' | 'Beta'

export type AiProduct = {
  id: AiProductId
  name: string
  category: string
  status: AiProductStatus
  description: string
  href: string
  cta: string
  accent: string
  navIcon: string
  safetyNote?: string
}

export const AI_PRODUCTS: AiProduct[] = [
  {
    id: 'merlin',
    name: 'Merlin AI',
    category: 'Assistant and operations',
    status: 'Live',
    description:
      'Ask, create and get work done with chat, voice, images and connected tools in one AI assistant.',
    href: 'https://merlintheai.com/',
    cta: 'Open Merlin',
    accent: '#98FFF9',
    navIcon: '/ai-logos/merlin.svg',
    safetyNote:
      'Enable connected accounts, memory and messaging only with your permission inside Merlin.',
  },
  {
    id: 'akyn',
    name: 'Akyn',
    category: 'AI film production',
    status: 'Live',
    description:
      'Turn a script into scenes and an edited film with reusable characters in one creator workspace.',
    href: 'https://akyn.pro/',
    cta: 'Open Akyn',
    accent: '#B591F2',
    navIcon: '/ai-logos/akyn.png',
    safetyNote:
      'Media, credits and publishing follow Akyn’s own account and product terms.',
  },
  {
    id: 'magicads',
    name: 'MagicAds',
    category: 'Advertising network',
    status: 'Live',
    description:
      'Run ad campaigns or connect your site as a publisher, with dashboard and API controls.',
    href: 'https://magicads.dev/',
    cta: 'Open MagicAds',
    accent: '#FFB649',
    navIcon: '/ai-logos/magicads.svg',
    safetyNote:
      'Review budget, targeting and distribution in MagicAds before activating a campaign.',
  },
  {
    id: 'magas7',
    name: 'MAGAS7',
    category: 'Agentic marketing',
    status: 'Early access',
    description:
      'Bring marketing research, content, scheduling and analytics into one agent workspace.',
    href: 'https://magas7.com/',
    cta: 'Open MAGAS7',
    accent: '#B1FF5A',
    navIcon: '/ai-logos/magas7.svg',
    safetyNote:
      'Early access. Review agent output before scheduling or publishing.',
  },
  {
    id: 'dragonlist',
    name: 'DragonList',
    category: 'Meeting productivity',
    status: 'Beta',
    description:
      'Turn meeting conversations into assigned tasks and a searchable record for follow-up.',
    href: 'https://dragonlist.ai/',
    cta: 'Open DragonList',
    accent: '#60A5FA',
    navIcon: '/ai-logos/dragonlist.svg',
    safetyNote:
      'Get required participant consent and organizational permission before recording or uploading.',
  },
  {
    id: 'docai',
    name: 'DocAI',
    category: 'Wellness information',
    status: 'Live',
    description:
      'Organize symptoms and reports into a clearer set of questions for your next care conversation.',
    href: 'https://docai.live/',
    cta: 'Open DocAI',
    accent: '#10B981',
    navIcon: '/ai-logos/docai.svg',
    safetyNote:
      'Educational guidance, not diagnosis, emergency care or a substitute for a qualified clinician.',
  },
]
