export type RoadmapStage = 'LIVE' | 'IMPROVING' | 'EXPLORING'

export type RoadmapEntry = {
  stage: RoadmapStage
  label: string
  variant: 'default' | 'purple' | 'live'
  goals: {
    card: number
    features: string[]
  }[]
}

export const roadmapData: RoadmapEntry[] = [
  {
    stage: 'LIVE',
    label: 'Available today',
    variant: 'live',
    goals: [
      {
        card: 1,
        features: [
          'MagicCraft free-to-play game with established PvP and newer PvE play',
          'Public distribution on iOS, Android, PC and Steam',
          'Optional Web3 lobbies for eligible wallet-connected matches',
        ],
      },
      {
        card: 2,
        features: [
          'MagicCraft Marketplace for supported game assets',
          'MCRT pledging under the current dynamic pool and lock rules',
          'Referral program and browser-based Ecosystem Games hub',
        ],
      },
      {
        card: 3,
        features: [
          'Merlin, Akyn, MagicAds, DragonList and DocAI public products',
          'MAGAS7 public early-access product',
          'MCRT Game Maker editor available separately on Steam',
        ],
      },
    ],
  },
  {
    stage: 'IMPROVING',
    label: 'Growing the experience',
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'More resilient leaderboard and game-stat experiences',
          'Richer seasonal and player-progression views',
          'Clearer paths between the game, community and ecosystem tools',
        ],
      },
      {
        card: 2,
        features: [
          'More Game Maker export and sharing workflows',
          'Continued cross-platform performance improvements',
          'More PvE content, progression and replayable challenges',
        ],
      },
      {
        card: 3,
        features: [
          'Clearer creator, grant and bounty participation paths',
          'Stronger connections between focused AI products and studio work',
          'Faster access to support, updates and community destinations',
        ],
      },
    ],
  },
  {
    stage: 'EXPLORING',
    label: 'Future possibilities',
    variant: 'purple',
    goals: [
      {
        card: 1,
        features: [
          'Additional PvE missions, seasonal play and competitive tooling',
          'More creator workflows around maps and community content',
        ],
      },
      {
        card: 2,
        features: [
          'Deeper interoperability between supported game and creator surfaces',
          'New AI-assisted game, support and publishing workflows where useful',
        ],
      },
      {
        card: 3,
        features: [
          'More connected creator and community experiences',
          'New ideas will be introduced through future product updates',
        ],
      },
    ],
  },
]
