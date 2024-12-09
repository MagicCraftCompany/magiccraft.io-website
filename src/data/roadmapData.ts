type RoadmapDataType = {
  quarter: number
  variant: 'default' | 'purple'
  goals: {
    card: number,
    features: string[]
  }[]
}[]


// export const roadmapData: RoadmapDataType = [
//   {
//     quarter: 1,
//     variant: 'default',
//     goals: [
//       {
//         card:1,
//         features: [
//           ' Player Profile screen',
//           'Custom game Rooms',
//           'Team Voice Chat',
//           'NFT Character Integration',
//         ],
//       },
//       {
//         card:2,
//         features: [
//           'Mage',
//           'New Map',
//           'New Character'
//         ],
//       },
//       {
//         card:3,
//         features: [
//           'Custom room added to service',
//           'Play-2-Earn Games',
//         ],
//       },
//     ],
//   },
//   {
//     quarter: 2,
//     variant: 'purple',
//     goals: [
//       {
//         card:4,
//         features: [
//           'Game Type:Free for All',
//           'Development of Metagame continues',
//           'Parties &Friends',
//           'Community Tournaments',
//           'Spectator mode'
//         ],
//       },
//       {
//         card:5,
//         features: [
//           'New Map: Cloud Terrace',
//           ' new Character: Ronin',
//           'Music Update',
//           'Steam announcement'
//         ],
//       },
//       {
//         card:6,
//         features: [
//           'Halving,splitting the lobbies and $MCRT prizes in half',
//           'Automatic lobbies',
//         ],
//       },
//     ],
//   },
//   {
//     quarter: 3,
//     variant: 'default',
//     goals: [
//       {
//         card:7,
//         features: [
//           'Daily Quests',
//           'Game Type:Tournament',
//           'Game Type:Battle Royale',
//           'NFT Rental System',
//           'NFT Map Integration',
//           'VC investment',
//         ],
//       },
//       {
//         card:8,
//         features: [
//           'New Map',
//           'New Character',
//           'First Arcane Character Skin NFT',
//         ],
//       },
//       {
//         card:9,
//         features: [
//           'Free gift MCRT added to Service',
//           'Offer Wall added to service',
//         ],
//       },
//     ],
//   },
//   {
//     quarter: 4,
//     variant: 'purple',

//     goals: [
//       {
//         card:10,
//         features: [
//           'Ladder updates for matchmaking',
//           'Begin developing clans',
//           'Begin developing clan wars',
//         ],
//       },
//       {
//         card:11,
//         features: [
//           'New Character',
//         ],
//       },
//       {
//         card:12,
//         features: [
//           "Daily bonus added to service",
//         ],
//       },
//     ],
//   },
// ]
export const roadmapData: RoadmapDataType = [
  {
    quarter: 1,
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'Launch of the revamped MagicCraft website',
          'Improved onboarding experience for new players',
          'Development of the NFT Marketplace for game assets',
          'Introduction of the first batch of NFT Characters',
        ],
      },
      {
        card: 2,
        features: [
          'New gameplay mode: Capture the Flag',
          'Enhancements to the Player Profile section',
          'New in-game leaderboard system',
        ],
      },
      {
        card: 3,
        features: [
          'Integration with a third-party wallet system',
          'Launch of referral rewards for community engagement',
        ],
      },
    ],
  },
  {
    quarter: 2,
    variant: 'purple',
    goals: [
      {
        card: 4,
        features: [
          'Release of Team Deathmatch game mode',
          'Expanded community tournaments with prizes',
          'Launch of Clan System with initial functionalities',
          'First Community Voting System for game features',
        ],
      },
      {
        card: 5,
        features: [
          'New Map: Desert Storm',
          'Introduction of two new characters: Rogue and Alchemist',
          'Music and sound effects overhaul',
          'Integration with Steam for wider access',
        ],
      },
      {
        card: 6,
        features: [
          'Launch of AI Moderation tools for better community management',
          'Split rewards in lobbies based on player activity levels',
        ],
      },
    ],
  },
  {
    quarter: 3,
    variant: 'default',
    goals: [
      {
        card: 7,
        features: [
          'Daily Quest System for consistent player rewards',
          'Release of Tournament and Battle Royale modes',
          'NFT Lending System for sharing game assets',
          'Integration of user-generated content tools',
          'Expansion of investment rounds for scaling',
        ],
      },
      {
        card: 8,
        features: [
          'New Map: Mystic Valley',
          'Release of Legendary Character Skin NFTs',
          'New character introduction: Sorcerer',
        ],
      },
      {
        card: 9,
        features: [
          'Launch of Gift System for MCRT rewards',
          'Offer Wall integration for ad-based earnings',
        ],
      },
    ],
  },
  {
    quarter: 4,
    variant: 'purple',
    goals: [
      {
        card: 10,
        features: [
          'Updates to matchmaking and ladder ranking systems',
          'Development of advanced Clan Wars mechanics',
          'Introduction of Seasonal Events',
        ],
      },
      {
        card: 11,
        features: [
          'New Character: Shadowblade',
        ],
      },
      {
        card: 12,
        features: [
          'Daily Login Bonus System integration',
        ],
      },
    ],
  },
];
