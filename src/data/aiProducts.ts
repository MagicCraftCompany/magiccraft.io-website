export type AiProductId =
  | 'merlin'
  | 'akyn'
  | 'magicads'
  | 'magas7'
  | 'dragonlist'
  | 'docai'

export type AiProductStatus = 'Live' | 'Early access'

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

export const AI_PRODUCTS_LAST_VERIFIED = '13 July 2026'

export const AI_PRODUCTS: AiProduct[] = [
  {
    id: 'merlin',
    name: 'Merlin AI',
    category: 'Assistant and operations',
    status: 'Live',
    description:
      'Work across chat, voice, images, translation, markets, memory, and connected messaging workflows with a multi-persona AI assistant.',
    href: 'https://merlintheai.com/',
    cta: 'Open Merlin',
    accent: '#98FFF9',
    navIcon: '/merlin-logo-official.svg',
    safetyNote:
      'Connected accounts, memory, and messaging remain separate Merlin workflows and should be enabled only with the user’s permission.',
  },
  {
    id: 'akyn',
    name: 'Akyn',
    category: 'AI film production',
    status: 'Live',
    description:
      'Move from script and reusable characters to generated scenes, editing, and finished video inside one creator workspace.',
    href: 'https://akyn.pro/',
    cta: 'Open Akyn',
    accent: '#B591F2',
    navIcon: 'https://akyn.pro/logo.svg',
    safetyNote:
      'Uploads, generated media, credits, and publishing are governed by Akyn’s own account and product terms.',
  },
  {
    id: 'magicads',
    name: 'MagicAds',
    category: 'Advertising network',
    status: 'Live',
    description:
      'Launch campaigns or connect publisher inventory through an agent-native advertising network with manual and API workflows.',
    href: 'https://magicads.dev/',
    cta: 'Open MagicAds',
    accent: '#FFB649',
    navIcon: 'https://magicads.dev/magicads-logo.svg',
    safetyNote:
      'Campaign spend, targeting, publisher inventory, and distribution require review inside MagicAds before activation.',
  },
  {
    id: 'magas7',
    name: 'MAGAS7',
    category: 'Agentic marketing',
    status: 'Early access',
    description:
      'Coordinate specialist agents across research, writing, design, scheduling, publishing, analytics, and brand quality.',
    href: 'https://magas7.com/',
    cta: 'Open MAGAS7',
    accent: '#B1FF5A',
    navIcon: 'https://magas7.com/favicon.svg',
    safetyNote:
      'Early-access agent output should be reviewed before scheduling or publishing to a live brand channel.',
  },
  {
    id: 'dragonlist',
    name: 'DragonList',
    category: 'Meeting productivity',
    status: 'Live',
    description:
      'Transcribe meetings, turn action items into assigned tasks, and keep a searchable meeting record for follow-up.',
    href: 'https://dragonlist.ai/',
    cta: 'Open DragonList',
    accent: '#60A5FA',
    navIcon: '/icons/icon-stats.svg',
    safetyNote:
      'Record or upload meetings only with the required participant notice, consent, and organizational permission.',
  },
  {
    id: 'docai',
    name: 'DocAI',
    category: 'Wellness information',
    status: 'Live',
    description:
      'Organize symptoms, uploaded reports, possible patterns, and next-step questions with an integrative AI wellness guide.',
    href: 'https://docai.live/',
    cta: 'Open DocAI',
    accent: '#10B981',
    navIcon: '/icons/icon-community.svg',
    safetyNote:
      'Educational guidance only. It is not a diagnosis, emergency service, or substitute for a qualified clinician.',
  },
]
