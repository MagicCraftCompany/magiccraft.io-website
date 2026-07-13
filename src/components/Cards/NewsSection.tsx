'use client'

import { useEffect, useState } from 'react'
import { fetchBlogPosts } from '../../lib/sanity/client'
import { isSanityConfigured } from '../../lib/sanity/config'
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

const ARTICLES_PER_PAGE = 6

export function NewsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [useFallbackData, setUseFallbackData] = useState(false)
  const [visibleArticles, setVisibleArticles] = useState(ARTICLES_PER_PAGE)

  useEffect(() => {
    async function loadPosts() {
      try {
        if (!isSanityConfigured) {
          setUseFallbackData(true)
          return
        }

        const data = await fetchBlogPosts()
        setPosts(data || [])
      } catch (error) {
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
    setVisibleArticles(ARTICLES_PER_PAGE)
  }, [activeFilter])

  // If using fallback data or if no posts returned from Sanity, filter the static newsArticles
  const filteredArticles =
    useFallbackData || !posts || posts.length === 0
      ? newsArticles.filter((article: NewsArticle) =>
          activeFilter === 'All' ? true : article.type === activeFilter
        )
      : posts.filter((post: BlogPost) =>
          activeFilter === 'All' ? true : post.type === activeFilter
        )

  // Get only the visible articles
  const displayArticles = filteredArticles.slice(0, visibleArticles)

  // Handle load more click
  const handleLoadMore = () => {
    setVisibleArticles((prev) => prev + ARTICLES_PER_PAGE)
  }

  // Convert blog post to news article format
  const convertToArticle = (post: BlogPost): NewsArticle => {
    return {
      id: post._id,
      type: post.type as 'News' | 'Patch Notes',
      category: post.category,
      title: post.title,
      description: post.description,
      image: post.image || '/placeholder.svg?height=400&width=600',
      dateLabel: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : undefined,
      version: '', // Blog template doesn't have version
      readMoreLink: `/blog/${post.slug || 'test-blog-post'}`, // Use a default if slug is missing
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-8 text-center font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
        LATEST NEWS
      </h2>

      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center rounded-full bg-[#070725]/50 p-1">
          {(['All', 'News', 'Patch Notes'] as FilterType[]).map(
            (filter: FilterType) => (
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
            )
          )}
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayArticles.length > 0 ? (
            displayArticles.map(
              (item: NewsArticle | BlogPost, index: number) => {
                const article =
                  'id' in item ? item : convertToArticle(item as BlogPost)
                return (
                  <a
                    key={article.id}
                    href={article.readMoreLink}
                    className={`relative block cursor-pointer overflow-hidden rounded-xl transition-transform hover:scale-[1.02] ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <div className="group relative h-[280px] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <div className="absolute left-4 top-4">
                          <span className="inline-block rounded-full bg-[#1C162C] px-3 py-1 text-xs text-white">
                            {article.category}
                          </span>
                          {article.version && (
                            <span className="ml-2 inline-block rounded-full bg-[#4A2372] px-3 py-1 text-xs text-white">
                              {article.version}
                            </span>
                          )}
                          {article.dateLabel && (
                            <span className="ml-2 inline-block text-xs text-white/70">
                              {article.dateLabel}
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                          <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-teal-400">
                            {article.title}
                          </h3>
                          <div className="flex items-center text-sm text-teal-400 transition-colors group-hover:text-teal-300">
                            Read more
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-1 h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              }
            )
          ) : (
            <div className="col-span-3 text-center text-gray-400">
              No articles found for the selected filter.
            </div>
          )}
        </div>
      )}

      {filteredArticles.length > visibleArticles && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 rounded-md bg-[#1E1A36] px-4 py-2 text-white transition-colors hover:bg-[#2A2545]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Load more
          </button>
        </div>
      )}
    </div>
  )
}
