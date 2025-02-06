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
//         card: 1,
//         features: [
//           'Launch of the revamped MagicCraft website',
//           'Improved onboarding experience for new players',
//           'Development of the NFT Marketplace for game assets',
//           'Introduction of the first batch of NFT Characters',
//         ],
//       },
//       {
//         card: 2,
//         features: [
//           'New gameplay mode: Capture the Flag',
//           'Enhancements to the Player Profile section',
//           'New in-game leaderboard system',
//         ],
//       },
//       {
//         card: 3,
//         features: [
//           'Integration with a third-party wallet system',
//           'Launch of referral rewards for community engagement',
//         ],
//       },
//     ],
//   },
//   {
//     quarter: 2,
//     variant: 'purple',
//     goals: [
//       {
//         card: 4,
//         features: [
//           'Release of Team Deathmatch game mode',
//           'Expanded community tournaments with prizes',
//           'Launch of Clan System with initial functionalities',
//           'First Community Voting System for game features',
//           "Release of MagicCraft Xbox version",
//         ],
//       },
//       {
//         card: 5,
//         features: [
//           'New Map: Desert Storm',
//           'Introduction of two new characters: Rogue and Alchemist',
//           'Music and sound effects overhaul',
//           'Integration with Steam for wider access',
//         ],
//       },
//       {
//         card: 6,
//         features: [
//           'Launch of AI Moderation tools for better community management',
//           'Split rewards in lobbies based on player activity levels',
//         ],
//       },
//     ],
//   },
//   {
//     quarter: 3,
//     variant: 'default',
//     goals: [
//       {
//         card: 7,
//         features: [
//           'Daily Quest System for consistent player rewards',
//           'Release of Tournament and Battle Royale modes',
//           'NFT Lending System for sharing game assets',
//           'Integration of user-generated content tools',
//           'Expansion of investment rounds for scaling',
//         ],
//       },
//       {
//         card: 8,
//         features: [
//           'New Map: Mystic Valley',
//           'Release of Legendary Character Skin NFTs',
//           'New character introduction: Sorcerer',
//         ],
//       },
//       {
//         card: 9,
//         features: [
//           'Launch of Gift System for MCRT rewards',
//           'Offer Wall integration for ad-based earnings',
//         ],
//       },
//     ],
//   },
//   {
//     quarter: 4,
//     variant: 'purple',
//     goals: [
//       {
//         card: 10,
//         features: [
//           'Updates to matchmaking and ladder ranking systems',
//           'Development of advanced Clan Wars mechanics',
//           'Introduction of Seasonal Events',
//         ],
//       },
//       {
//         card: 11,
//         features: [
//           'New Character: Shadowblade',
//         ],
//       },
//       {
//         card: 12,
//         features: [
//           'Daily Login Bonus System integration',
//         ],
//       },
//     ],
//   },
// ];
export const roadmapData: RoadmapDataType = [
  {
    quarter: 1,
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'Game Maker Launch',
          'Players create and monetize custom maps via Steam',
        ],
      },
      {
        card: 2,
        features: [
          'New Mobs & AI Enemies',
          'Enhanced PvE experience with AI-controlled enemies',
          'Castle Siege Mode - Large-scale battles with fortified objectives',
        ],
      },
      {
        card: 3,
        features: [
          'Web3 Lobby System Upgrade - Improved matchmaking and in-game economy',
          'Multi-Crypto Rewards - Earn MCRT and other tokens directly from gameplay',
        ],
      },
    ],
  },
  {
    quarter: 2,
    variant: 'purple',
    goals: [
      {
        card: 1,
        features: [
          'Battle Pass & Subscriptions',
          'New monetization model for progression rewards',
        ],
      },
      {
        card: 2,
        features: [
          'Tournaments & Competitive Play',
          'Seasonal events and structured prize pools',
          'Community Map Marketplace - Trade, sell, and showcase custom maps',
        ],
      },
      {
        card: 3,
        features: [
          'NFT Character Integration',
          'Exclusive perks and in-game earning potential',
        ],
      },
    ],
  },
  {
    quarter: 3,
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'MagicCraft on Xbox',
          'Console expansion bringing Web3 gaming to a broader audience',
        ],
      },
      {
        card: 2,
        features: [
          'New Maps & Game Modes',
          'Expanding gameplay diversity and player engagement',
        ],
      },
      {
        card: 3,
        features: [
          'Social Features & Streaming Integration',
          'Built-in tools for content sharing and engagement',
        ],
      },
    ],
  },
  {
    quarter: 4,
    variant: 'purple',
    goals: [
      {
        card: 1,
        features: [
          'Full Website Overhaul',
          'New platform experience optimized for players and investors',
        ],
      },
      {
        card: 2,
        features: [
          'E-Sports Expansion',
          'Structured leagues, rankings, and sponsorships',
        ],
      },
      {
        card: 3,
        features: [
          'Staking & Economy Revamp',
          'Enhancing MCRT sustainability and long-term value',
        ],
      },
    ],
  },
];

