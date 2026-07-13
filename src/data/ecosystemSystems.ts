export type EcosystemSystemGroupId = 'game-services' | 'web3' | 'builders'

export type EcosystemSystemStatus =
  | 'Public'
  | 'Partial data'
  | 'Degraded'
  | 'On Steam'
  | 'Building'
  | 'Optional'

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

export const ECOSYSTEM_SYSTEMS_LAST_VERIFIED = '13 July 2026'

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
        purpose: 'Review verified lobby totals and current MCRT market data.',
        note: 'Lobby and market sources respond. The legacy season source remains unavailable.',
        href: '/stats',
        cta: 'View verified stats',
        status: 'Partial data',
      },
      {
        id: 'leaderboard',
        name: 'Leaderboard',
        purpose: 'See public player rankings from the Web3 lobby service.',
        note: 'Public rankings load without a wallet. Ranked participation has its own eligibility rules.',
        href: 'https://lobby.magiccraft.io/leaderboard',
        cta: 'Open leaderboard',
        status: 'Public',
      },
      {
        id: 'lobbies',
        name: 'Web3 Lobbies',
        purpose: 'Browse scheduled matches and optional token reward pools.',
        note: 'Match browsing works, but the old prize-pool source returns 404 and anonymous wallet preloading reports errors. Displayed pool balances may be fallback values; joining and claims remain wallet-controlled.',
        href: 'https://lobby.magiccraft.io/',
        cta: 'Browse lobbies',
        status: 'Degraded',
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
        note: 'The public catalog is reachable. No wallet, listing or trade was created during verification.',
        href: 'https://app.magiccraft.io/marketplace/explorer',
        cta: 'Browse marketplace',
        status: 'Public',
      },
      {
        id: 'pledging',
        name: 'Pledging',
        purpose: 'Review term-based MCRT pledging pools and current rules.',
        note: 'The page is reachable, but reward percentages and current TVL are not rendering reliably.',
        href: 'https://app.magiccraft.io/pledging',
        cta: 'Review current page',
        status: 'Degraded',
      },
      {
        id: 'mcrt-utility',
        name: '$MCRT Utility',
        purpose:
          'Understand where individual MagicCraft products support MCRT.',
        note: 'Utility is product-specific and does not imply investment returns or shared billing.',
        href: 'https://docs.magiccraft.io/usdmcrt-token/usdmcrt-token-utilities',
        cta: 'Read utility guide',
        status: 'Optional',
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
        note: 'The public product and integration path are reachable. No live payment was created.',
        href: 'https://mcrtpay.com/',
        cta: 'Open MCRTPay',
        status: 'Public',
      },
      {
        id: 'envrouter',
        name: 'EnvRouter AI',
        purpose:
          'Route secrets and model access through policy-controlled infrastructure.',
        note: 'This system remains in development and is not presented as a finished public product.',
        href: 'https://app.envrouter.pro/',
        cta: 'View current build',
        status: 'Building',
      },
    ],
  },
]
