'use client'

import { useEffect, useState } from 'react'
import { fetchBlogPosts, testSanityConnection } from '../../lib/sanity/client'
import { newsArticles, NewsArticle } from '../../data/newsData'

type FilterType = 'All' | 'News' | 'Patch Notes'

interface BlogPost {
  _id: string
  title: string
  description: string
  category: string
  type: string
  image: string
  slug: string
  publishedAt: string
  _createdAt: string
}

const ARTICLES_PER_PAGE = 6;

export function NewsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [useFallbackData, setUseFallbackData] = useState(false)
  const [visibleArticles, setVisibleArticles] = useState(ARTICLES_PER_PAGE)

  useEffect(() => {
    async function loadPosts() {
      try {
        // First test the connection
        await testSanityConnection();
        
        // Then fetch the actual posts
        const data = await fetchBlogPosts()
        console.log("Posts from Sanity:", data);
        setPosts(data || [])
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        // If Sanity fetch fails, use the static data as fallback
        setUseFallbackData(true)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  // Reset visible articles when filter changes
  useEffect(() => {
    setVisibleArticles(ARTICLES_PER_PAGE);
  }, [activeFilter]);

  // If using fallback data or if no posts returned from Sanity, filter the static newsArticles
  const filteredArticles = useFallbackData || !posts || posts.length === 0
    ? newsArticles.filter((article: NewsArticle) => 
        activeFilter === 'All' ? true : article.type === activeFilter
      )
    : posts.filter((post: BlogPost) => 
        activeFilter === 'All' ? true : post.type === activeFilter
      );

  // Get only the visible articles
  const displayArticles = filteredArticles.slice(0, visibleArticles);

  // Handle load more click
  const handleLoadMore = () => {
    setVisibleArticles(prev => prev + ARTICLES_PER_PAGE);
  };

  // Convert blog post to news article format
  const convertToArticle = (post: BlogPost): NewsArticle => {
    console.log("Converting post to article:", post);
    return {
      id: post._id,
      type: post.type as 'News' | 'Patch Notes',
      category: post.category,
      title: post.title,
      description: post.description,
      image: post.image || '/placeholder.svg?height=400&width=600',
      version: '', // Blog template doesn't have version
      readMoreLink: `/blog/${post.slug || 'test-blog-post'}`, // Use a default if slug is missing
    };
  }

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-8 text-center text-4xl font-bold tracking-tight text-white md:text-5xl font-serif">
        LATEST NEWS
      </h2>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center rounded-full bg-[#070725]/50 p-1">
          {(['All', 'News', 'Patch Notes'] as FilterType[]).map((filter: FilterType) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? 'bg-teal-400 text-[#070725]'
                  : 'text-white hover:text-teal-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {useFallbackData && (
        <div className="mb-6 text-center text-amber-400">
          Using fallback data. Couldn't connect to Sanity CMS.
        </div>
      )}

      {loading ? (
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-400 border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayArticles.length > 0 ? (
            displayArticles.map((item: NewsArticle | BlogPost, index: number) => {
              const article = 'id' in item ? item : convertToArticle(item as BlogPost);
              return (
                <div 
                  key={article.id} 
                  className={`rounded-xl overflow-hidden relative ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="relative group h-[280px] overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#1C162C] px-3 py-1 rounded-full text-white text-xs">
                          {article.category}
                        </span>
                        {article.version && (
                          <span className="ml-2 inline-block bg-[#4A2372] px-3 py-1 rounded-full text-white text-xs">
                            {article.version}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-xl font-bold text-white mb-4">{article.title}</h3>
                        <a 
                          href={article.readMoreLink}
                          className="text-teal-400 hover:text-teal-300 flex items-center text-sm"
                        >
                          Read more 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-3 text-center text-gray-400">
              No articles found for the selected filter.
            </div>
          )}
        </div>
      )}
      
      {filteredArticles.length > visibleArticles && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleLoadMore}
            className="flex items-center gap-2 bg-[#1E1A36] hover:bg-[#2A2545] text-white px-4 py-2 rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Load more
          </button>
        </div>
      )}
    </div>
  )
}

