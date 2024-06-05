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
          'NFT Rental System'
        ],
      },
      {
        features: [
          'Unveiling a comprehensive player reward system that ties all ecosystem games together, rewarding cross-game achievements.',
          'Collaborating with fantasy writers to expand the MagicCraft universe.',
        ],
      },
      {
        features: [
          'Renewing the season pass with added utilities in the MagicCraft Ecosystem',
          'Creating a MagicCraft marketplace for official merchandise.',
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
          'Addition of 1-3 new games to the MagicCraft Ecosystem.',
          'Developing a storyline expansion that introduces a new antagonist and questline.',
        ],
      },
      {
        features: [
          'Renewing the season pass with added utilities in the MagicCraft Ecosystem.',
        ],
      },
      {
        features: [
          "Planning an end-of-year celebratory event with surprise announcements for the next year's roadmap.",
        ],
      },
    ],
  },
]
