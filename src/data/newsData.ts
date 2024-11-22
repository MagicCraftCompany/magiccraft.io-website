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
    type: 'Patch Notes',
    category: 'Patch Updates',
    title: 'Patch 4.21: Cloud Terrace Map and Quality of Life Updates',
    description: 'Our 9th map has been added to the game, providing players with a fresh and exciting battleground to explore. Battle it out among the clouds.',
    image: '/placeholder.svg?height=400&width=600',
    version: 'Patch V4.21',
    readMoreLink: '#'
  },
  {
    id: '2',
    type: 'Patch Notes',
    category: 'Patch Updates',
    title: 'MagicCraft Patch 4.20: Regional Servers, Party Feature, and More Updates You Don\'t Want to Miss!',
    description: 'MagicCraft, the popular mobile MOBA game, has recently released a new update that brings several exciting features and bug fixes. In this article, we will highlight the major changes and improvements in the game.',
    image: '/placeholder.svg?height=400&width=600',
    version: 'Patch 4.20',
    readMoreLink: '#'
  },
  {
    id: '3',
    type: 'News',
    category: 'Patch Updates',
    title: 'Web3 games vs. traditional games: Which to choose?',
    description: 'Web3 games utilize the blockchain to provide players with a unique gaming experience that is markedly different from traditional games.',
    image: '/placeholder.svg?height=400&width=600',
    readMoreLink: '#'
  }
]

