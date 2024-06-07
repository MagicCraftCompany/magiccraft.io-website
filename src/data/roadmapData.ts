type RoadmapDataType = {
  quarter: number
  variant: 'default' | 'purple'
  goals: {
    features: string[]
  }[]
}[]


export const roadmapData: RoadmapDataType = [
  {
    quarter: 1,
    variant: 'default',
    goals: [
      {
        features: [
          ' Player Profile screen',
          'Custom game Rooms',
          'Team Voice Chat',
          'NFT Character Integration',
        ],
      },
      {
        features: [
          'Mage',
          'New Map',
          'New Character'
        ],
      },
      {
        features: [
          'Custom room added to service',
          'Play-2-Earn Games',
        ],
      },
    ],
  },
  {
    quarter: 2,
    variant: 'purple',
    goals: [
      {
        features: [
          'Game Type:Free for All',
          'Development of Metagame continues',
          'Parties &Friends',
          'Community Tournaments',
          'Spectator mode'
        ],
      },
      {
        features: [
          'New Map: Cloud Terrace',
          ' new Character: Ronin',
          'Music UPdate',
          'Steam announcement'
        ],
      },
      {
        features: [
          'Halving,splitting the lobbies and $MCRT prizes in half',
          'Automatic lobbies',
        ],
      },
    ],
  },
  {
    quarter: 3,
    variant: 'default',
    goals: [
      {
        features: [
          'Daily Quests',
          'Game Type:Tournament',
          'Game Type:Battle Royale',
          'NFT Rental System',
          'NFT Map Integration',
        ],
      },
      {
        features: [
          'New Map',
          'New Character',
          'First Arcane Character Skin NFT',
        ],
      },
      {
        features: [
          'Free gift MCRT added to Service',
          'Offer Wall added to service',
        ],
      },
    ],
  },
  {
    quarter: 4,
    variant: 'purple',

    goals: [
      {
        features: [
          'Ladder updates for matchmaking',
          'Begin developing clans',
          'Begin developing clan wars',
        ],
      },
      {
        features: [
          'New Character',
        ],
      },
      {
        features: [
          "Daily bonus added to service",
        ],
      },
    ],
  },
]
