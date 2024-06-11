type RoadmapDataType = {
  quarter: number
  variant: 'default' | 'purple'
  goals: {
    card: number,
    features: string[]
  }[]
}[]


export const roadmapData: RoadmapDataType = [
  {
    quarter: 1,
    variant: 'default',
    goals: [
      {
        card:1,
        features: [
          ' Player Profile screen',
          'Custom game Rooms',
          'Team Voice Chat',
          'NFT Character Integration',
        ],
      },
      {
        card:2,
        features: [
          'Mage',
          'New Map',
          'New Character'
        ],
      },
      {
        card:3,
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
        card:4,
        features: [
          'Game Type:Free for All',
          'Development of Metagame continues',
          'Parties &Friends',
          'Community Tournaments',
          'Spectator mode'
        ],
      },
      {
        card:5,
        features: [
          'New Map: Cloud Terrace',
          ' new Character: Ronin',
          'Music Update',
          'Steam announcement'
        ],
      },
      {
        card:6,
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
        card:7,
        features: [
          'Daily Quests',
          'Game Type:Tournament',
          'Game Type:Battle Royale',
          'NFT Rental System',
          'NFT Map Integration',
          'VC investment',
        ],
      },
      {
        card:8,
        features: [
          'New Map',
          'New Character',
          'First Arcane Character Skin NFT',
        ],
      },
      {
        card:9,
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
        card:10,
        features: [
          'Ladder updates for matchmaking',
          'Begin developing clans',
          'Begin developing clan wars',
        ],
      },
      {
        card:11,
        features: [
          'New Character',
        ],
      },
      {
        card:12,
        features: [
          "Daily bonus added to service",
        ],
      },
    ],
  },
]
