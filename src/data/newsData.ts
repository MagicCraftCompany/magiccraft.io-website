export interface NewsArticle {
  id: string
  type: 'News' | 'Patch Notes'
  category: string
  title: string
  description: string
  image: string
  version?: string
  dateLabel?: string
  readMoreLink: string
}
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    type: 'News',
    category: 'Announcement',
    title: 'MagicCraft Website Gets Major Upgrade',
    description:
      'The public product catalog now describes Merlin, Akyn, MagicAds, MAGAS7, DragonList and DocAI from their current product pages.',
    image:
      'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp',
    readMoreLink: 'https://x.com/MagicCraftGame',
    dateLabel: '13 Jul 2026',
  },
  {
    id: '2',
    type: 'News',
    category: 'Ecosystem',
    title: 'Optional Web3 Lobbies',
    description:
      'Join eligible wallet-connected matches using MCRT or supported BNB Chain assets under the current lobby rules.',
    image:
      'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
    readMoreLink: 'https://lobby.magiccraft.io',
    dateLabel: '13 Jul 2026',
  },
  {
    id: '3',
    type: 'News',
    category: 'AI Products',
    title: 'MagicCraft AI Suite Expands',
    description:
      'Compare the six AI products by their real jobs. MAGAS7 is early access; the other five public products are live.',
    image:
      'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
    readMoreLink: '/#ai-products',
    dateLabel: '13 Jul 2026',
  },
  {
    id: '4',
    type: 'Patch Notes',
    category: 'Game Update',
    title: 'Game Maker Studio Now on Steam',
    description:
      'Build and test maps in the free editor. Export, sharing and deeper MagicCraft integration remain planned.',
    image:
      'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp',
    version: 'Steam',
    readMoreLink: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
    dateLabel: '13 Jul 2026',
  },
  {
    id: '5',
    type: 'News',
    category: 'Marketplace',
    title: 'MagicCraft Marketplace',
    description:
      'Browse and transact supported MagicCraft game assets under the current marketplace terms.',
    image:
      'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
    readMoreLink: 'https://app.magiccraft.io/marketplace/explorer',
    dateLabel: '13 Jul 2026',
  },
  {
    id: '6',
    type: 'News',
    category: 'Community',
    title: 'Join the MagicCraft Community',
    description:
      'Use the official Discord and X accounts for current community updates, events and announcements.',
    image:
      'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp',
    readMoreLink: 'https://discord.gg/magiccraftgame',
    dateLabel: '13 Jul 2026',
  },
]
