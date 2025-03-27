export interface NewsArticle {
  id: string;
  type: 'News' | 'Patch Notes';
  category: string;
  title: string;
  description: string;
  image: string;
  version?: string;
  readMoreLink: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    type: 'News',
    category: 'Announcement',
    title: 'Welcome to MagicCraft',
    description: 'Join us on an epic journey in the world of MagicCraft.',
    image: '/placeholder.svg?height=400&width=600',
    readMoreLink: '/blog/welcome-to-magiccraft'
  },
  {
    id: '2',
    type: 'Patch Notes',
    category: 'Update',
    title: 'Version 1.0.0 Released',
    description: 'The first major release of MagicCraft is now available.',
    image: '/placeholder.svg?height=400&width=600',
    version: '1.0.0',
    readMoreLink: '/blog/version-1-0-0-released'
  }
]; 