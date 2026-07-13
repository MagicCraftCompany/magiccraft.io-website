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

export const ROADMAP_LAST_VERIFIED = '13 July 2026'

export const roadmapData: RoadmapEntry[] = [
  {
    stage: 'LIVE',
    label: 'Verified public products',
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
    label: 'In repair or validation',
    variant: 'default',
    goals: [
      {
        card: 1,
        features: [
          'Keep the working lobby Leaderboard verified and maintain a crash-safe Stats fallback',
          'Recover game-server and battle-pass data without invented fallback values',
          'Keep product health and availability labels source-backed',
        ],
      },
      {
        card: 2,
        features: [
          'Validate Game Maker export, sharing and future game-integration milestones',
          'Improve cross-platform game reliability and current PvE content',
          'Publish dated patch notes and product-status changes',
        ],
      },
      {
        card: 3,
        features: [
          'Clarify creator, grant and bounty review outcomes',
          'Keep every AI product purpose and status aligned across the site',
          'Automate safe checks for broken product destinations',
        ],
      },
    ],
  },
  {
    stage: 'EXPLORING',
    label: 'Direction, not a delivery promise',
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
          'Future work is announced only after scope, ownership and delivery status are verified',
          'No date, token return, shared account or shared billing is promised by this section',
        ],
      },
    ],
  },
]
