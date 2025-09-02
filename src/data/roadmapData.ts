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
          'Game Maker Studio Launch',
          'Creator economy: Build, publish, and monetize custom maps',
          'Revenue sharing for popular community content',
        ],
      },
      {
        card: 2,
        features: [
          'Procedural weapon skins and customization system',
        ],
      },
      {
        card: 3,
        features: [
          'Cross-Platform Sync',
          'Seamless progression across iOS, Android, PC, and Steam',
          'Universal $MCRT wallet integration',
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
          'Enhanced PvP Ecosystem',
          'Ranked seasons with $MCRT prize pools',
          'Guild wars and territory control mechanics',
          '20 vs 20 Castle Siege mode',
          'More lobbies and more cryptos (beyond BTC/USDT/BNB/ETH/XRP/SOL)',
        ],
      },
      {
        card: 2,
        features: [
          'NFT Utility Expansion',
          'Character abilities tied to Genesis & Revelation NFTs',
          'Rentable assets for temporary power-ups',
          '✅ New skins and characters (Merlin, Robin Hood, latest $MCRT drops)',
        ],
      },
      {
        card: 3,
        features: [
          'Creator Marketplace',
          'Trade custom maps, skins, and game modes',
          'Community-driven content curation system',
          'Craft & Sell Marketplace',
          'Crafting and NFT crafting for items and skins',
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
          'AI-Powered Features',
          'Smart matchmaking based on skill and playstyle',
          'Dynamic difficulty adjustment for optimal engagement',
        ],
      },
      {
        card: 2,
        features: [
          'Ecosystem Integration Hub',
          'One-click access to all MagicCraft platforms',
          'Unified $MCRT rewards across all games and activities',
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
    quarter: 4,
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
          '$MCRT staking for ecosystem decision-making power',
        ],
      },
    ],
  },
  {
    quarter: 5,
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'Vibe Coding System',
          'AI-powered map generation and dynamic environments',
          'Nano Banana Image Gen for Weapons',
        ],
      },
      {
        card: 2,
        features: [
          '$MCRT APIs and SDKs',
          'Public APIs for marketplace, game stats, and wallets',
          'Unity/Unreal SDKs for quick integration',
        ],
      },
      {
        card: 3,
        features: [
          'Marketplace & Crafting',
          'Crafting system with NFT crafting',
          'Craft & sell marketplace enhancements',
          'Improvements to Game Maker tooling',
        ],
      },
    ],
  },
];

