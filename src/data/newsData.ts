export interface NewsArticle {
    id: string
    type: 'News' | 'Patch Notes'
    category: string
    title: string
    description: string
    image: string
    version?: string
    readMoreLink: string
  }
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    type: 'News',
    category: 'Announcement',
    title: 'MagicCraft Website Gets Major Upgrade',
    description: 'Homepage streamlined with tighter messaging, premium layout, and expanded AI suite including Merlin AI, DocAI, Polybilities, SocialMM, DragonList & Akyn.',
    image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp',
    readMoreLink: 'https://x.com/MagicCraftGame'
  },
  {
    id: '2',
    type: 'News',
    category: 'Ecosystem',
    title: 'Crypto Lobbies Now Live with BTC, ETH, BNB, XRP & SOL',
    description: 'Play MagicCraft MOBA and earn crypto rewards directly. Join lobbies denominated in your favorite cryptocurrency.',
    image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
    readMoreLink: 'https://lobby.magiccraft.io'
  },
  {
    id: '3',
    type: 'News',
    category: 'AI Products',
    title: 'MagicCraft AI Suite Expands',
    description: 'Meet Merlin AI, DocAI, Polybilities, SocialMM, DragonList and Akyn — AI-powered products built on the $MCRT ecosystem.',
    image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
    readMoreLink: 'https://merlintheai.com'
  },
  {
    id: '4',
    type: 'Patch Notes',
    category: 'Game Update',
    title: 'Game Maker Studio Now on Steam',
    description: 'Create, publish, and monetize custom maps. Revenue sharing for popular community content is now live.',
    image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp',
    version: 'Steam',
    readMoreLink: 'https://store.steampowered.com/app/2058890/MagicCraft/'
  },
  {
    id: '5',
    type: 'News',
    category: 'Marketplace',
    title: 'NFT Marketplace & Craft and Sell Now Live',
    description: 'Trade Genesis and Revelation NFTs, plus user-created items on the new Craft & Sell marketplace.',
    image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
    readMoreLink: 'https://app.magiccraft.io/marketplace/explorer'
  },
  {
    id: '6',
    type: 'News',
    category: 'Community',
    title: 'Join the MagicCraft Community',
    description: 'Connect with over 100K players on Discord, follow updates on X, and participate in tournaments and seasonal events.',
    image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp',
    readMoreLink: 'https://discord.gg/magiccraftgame'
  }
]
