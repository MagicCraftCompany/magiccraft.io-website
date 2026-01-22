type RoadmapDataType = {
  quarter: number | 'LIVE'
  year?: number
  variant: 'default' | 'purple' | 'live'
  goals: {
    card: number,
    features: string[]
  }[]
}[]

export const roadmapData: RoadmapDataType = [
  {
    quarter: 'LIVE',
    variant: 'live',
    goals: [
      {
        card: 1,
        features: [
          'MagicCraft MOBA on iOS, Android, PC & Steam',
          'Crypto Lobbies with BTC/USDT/BNB/ETH/XRP/SOL',
          '$MCRT Game Maker on Steam',
        ],
      },
      {
        card: 2,
        features: [
          'NFT Marketplace + Genesis/Revelation NFTs',
          'Craft & Sell Marketplace',
          'Akyn (akyn.pro)',
          'Merlin AI (merlintheai.com)',
          'DocAI (docai.live)',
          'Polybilities (polybilities.com)',
          'SocialMM (socialmm.ai)',
          'DragonList (dragonlist.ai)',
        ],
      },
    ],
  },
  {
    quarter: 1,
    year: 2026,
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'Game Maker Studio Expansion',
          'Creator economy: Build, publish, and monetize custom maps',
          'Revenue sharing for popular community content',
        ],
      },
      {
        card: 2,
        features: [
          'Procedural weapon skins and customization system',
          'Cross-Platform Sync enhancements',
        ],
      },
      {
        card: 3,
        features: [
          'Enhanced PvP Ecosystem',
          'Ranked seasons with $MCRT prize pools',
          'Tournament tools and seasonal events',
        ],
      },
    ],
  },
  {
    quarter: 2,
    year: 2026,
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'AI-Powered Features',
          'Smart matchmaking based on skill and playstyle',
          'Dynamic difficulty adjustment for optimal engagement',
          'In-game AI assistants and coaching',
        ],
      },
      {
        card: 2,
        features: [
          'Ecosystem Integration Hub',
          'One-click access to all MagicCraft platforms',
          'Unified $MCRT rewards across all games and activities',
          'Partner SDK / API access',
        ],
      },
      {
        card: 3,
        features: [
          'Community Expansion',
          'Partnerships and cross-promotions to grow player base',
          'Creator tournaments and seasonal events',
          'Core game improvements',
          'Graphics improvements',
        ],
      },
    ],
  },
  {
    quarter: 3,
    year: 2026,
    variant: 'purple',
    goals: [
      {
        card: 1,
        features: [
          'Metaverse Foundation',
          'Persistent virtual worlds built by the community',
          'Land ownership and development rights via NFTs',
        ],
      },
      {
        card: 2,
        features: [
          'E-Sports Infrastructure',
          'Professional leagues with broadcast partnerships',
          'Spectator modes and betting integration',
        ],
      },
      {
        card: 3,
        features: [
          'DAO Governance Evolution',
          'Community-driven development priorities',
          '$MCRT pledging for ecosystem decision-making power',
        ],
      },
    ],
  },
];
