export type EcosystemSystemGroupId = 'game-services' | 'web3' | 'builders'

export type EcosystemSystemStatus =
  | 'Live'
  | 'Live data'
  | 'On Steam'
  | 'In development'
  | 'Optional'
  | 'Guide'

export type EcosystemSystem = {
  id: string
  name: string
  purpose: string
  note: string
  href: string
  cta: string
  status: EcosystemSystemStatus
}

export type EcosystemSystemGroup = {
  id: EcosystemSystemGroupId
  eyebrow: string
  title: string
  description: string
  accent: string
  systems: EcosystemSystem[]
}

export const ECOSYSTEM_SYSTEM_GROUPS: EcosystemSystemGroup[] = [
  {
    id: 'game-services',
    eyebrow: 'Game services',
    title: 'Play, compete and prove progress',
    description:
      'Public activity, rankings and optional Web3 competition around the live game.',
    accent: '#98FFF9',
    systems: [
      {
        id: 'stats',
        name: 'Game Stats',
        purpose: 'Review current lobby activity and MCRT market data.',
        note: 'Available totals are shown clearly, with a direct path to the full statistics dashboard.',
        href: '/stats',
        cta: 'View game stats',
        status: 'Live data',
      },
      {
        id: 'leaderboard',
        name: 'Leaderboard',
        purpose: 'See public player rankings from the Web3 lobby service.',
        note: 'Browse public rankings without connecting a wallet. Participation rules apply when entering ranked play.',
        href: 'https://lobby.magiccraft.io/leaderboard',
        cta: 'Open leaderboard',
        status: 'Live',
      },
      {
        id: 'lobbies',
        name: 'Web3 Lobbies',
        purpose: 'Browse scheduled matches and optional token reward pools.',
        note: 'Browse matches publicly. A compatible wallet is only needed for eligible entries, rewards, or claims.',
        href: '/lobbies',
        cta: 'Browse lobbies',
        status: 'Optional',
      },
    ],
  },
  {
    id: 'web3',
    eyebrow: 'Optional Web3',
    title: 'Assets and utility when they add value',
    description:
      'The free game and AI portfolio do not require a wallet. These systems are separate opt-in paths.',
    accent: '#B591F2',
    systems: [
      {
        id: 'marketplace',
        name: 'Marketplace',
        purpose: 'Browse supported character, skin and game-asset listings.',
        note: 'Browse the public catalog first. A compatible wallet is required to list, buy, or trade assets.',
        href: 'https://app.magiccraft.io/marketplace/explorer',
        cta: 'Browse marketplace',
        status: 'Optional',
      },
      {
        id: 'pledging',
        name: 'Pledging',
        purpose: 'Review term-based MCRT pledging pools and current rules.',
        note: 'Review the current pools, lock terms, and displayed rates before connecting a wallet.',
        href: 'https://app.magiccraft.io/pledging',
        cta: 'Review current page',
        status: 'Optional',
      },
      {
        id: 'mcrt-utility',
        name: '$MCRT Utility',
        purpose:
          'Understand where individual MagicCraft products support MCRT.',
        note: 'Utility varies by product. Review the current rules for the function you want to use.',
        href: 'https://docs.magiccraft.io/usdmcrt-token/usdmcrt-token-utilities',
        cta: 'Read utility guide',
        status: 'Guide',
      },
    ],
  },
  {
    id: 'builders',
    eyebrow: 'Creator + infrastructure',
    title: 'Build maps, payments and safer product rails',
    description:
      'Tools for creators and developers sit behind the visible game and AI experiences.',
    accent: '#FFB649',
    systems: [
      {
        id: 'game-maker',
        name: '$MCRT Game Maker',
        purpose: 'Create custom MagicCraft maps with the free Steam editor.',
        note: 'The editor is available now. Sharing and main-game integration continue to evolve.',
        href: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
        cta: 'Open on Steam',
        status: 'On Steam',
      },
      {
        id: 'mcrtpay',
        name: 'MCRTPay',
        purpose: 'Add purpose-built MCRT checkout paths to websites and apps.',
        note: 'Use the public integration guide to add MCRT checkout paths to a website or app.',
        href: 'https://mcrtpay.com/',
        cta: 'Open MCRTPay',
        status: 'Live',
      },
      {
        id: 'envrouter',
        name: 'EnvRouter AI',
        purpose:
          'Route secrets and model access through policy-controlled infrastructure.',
        note: 'Preview the current developer experience as routing and policy controls continue to expand.',
        href: 'https://app.envrouter.pro/',
        cta: 'View current build',
        status: 'In development',
      },
    ],
  },
]
