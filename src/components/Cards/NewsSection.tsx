import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fetchBlogPosts } from '@/lib/sanity/client'
import { isSanityConfigured } from '@/lib/sanity/config'
import {
  FALLBACK_EDITORIAL_IMAGE,
  isInternalEditorialLink,
  toNewsArticle,
  type SanityBlogPostSummary,
} from '@/lib/editorial'
import { newsArticles, type NewsArticle } from '@/data/newsData'

type FilterType = 'All' | 'News' | 'Patch Notes'
type FeedMode = 'loading' | 'editorial' | 'fallback'

const ARTICLES_PER_PAGE = 6
const FILTERS: Array<{ value: FilterType; label: string }> = [
  { value: 'All', label: 'All updates' },
  { value: 'News', label: 'News' },
  { value: 'Patch Notes', label: 'Patch notes' },
]

function ArticleCard({
  article,
  featured,
}: {
  article: NewsArticle
  featured: boolean
}) {
  const internal = isInternalEditorialLink(article.readMoreLink)
  const content = (
    <>
      <div
        className={`relative overflow-hidden bg-[#0b1038] ${
          featured
            ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[390px]'
            : 'aspect-[16/10]'
        }`}
      >
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
          onError={(event) => {
            if (!event.currentTarget.src.endsWith(FALLBACK_EDITORIAL_IMAGE)) {
              event.currentTarget.src = FALLBACK_EDITORIAL_IMAGE
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050824]/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#050824]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
          {article.category}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
          {article.dateLabel ? (
            <time dateTime={article.dateTime}>{article.dateLabel}</time>
          ) : null}
          {article.sourceLabel ? (
            <span className="before:mr-3 before:text-white/20 before:content-['•']">
              {article.sourceLabel}
            </span>
          ) : null}
        </div>

        <h3
          className={`mt-3 font-semibold leading-tight tracking-[-0.025em] text-white transition-colors group-hover:text-[#98FFF9] ${
            featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
          }`}
        >
          {article.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-6 text-white/60 ${
            featured ? 'sm:text-base sm:leading-7' : 'line-clamp-3'
          }`}
        >
          {article.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#98FFF9]">
          {internal ? 'Read article' : 'Open official source'}
          {internal ? (
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          ) : (
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          )}
        </span>
      </div>
    </>
  )

  const className = `group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] no-underline shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/30 hover:bg-white/[0.05] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] motion-reduce:transform-none motion-reduce:transition-none ${
    featured
      ? 'grid md:grid-cols-[1.08fr_0.92fr] lg:col-span-2'
      : 'flex flex-col'
  }`

  if (internal) {
    return (
      <Link to={article.readMoreLink} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={article.readMoreLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  )
}

function LoadingCards() {
  return (
    <div role="status" aria-live="polite" className="grid gap-5 lg:grid-cols-2">
      <span className="sr-only">Loading MagicCraft articles</span>
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className={`animate-pulse overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] ${
            item === 0 ? 'h-[420px] lg:col-span-2' : 'h-[360px]'
          }`}
        >
          <div className="h-1/2 bg-white/[0.05]" />
          <div className="space-y-4 p-6">
            <div className="h-3 w-32 rounded bg-white/10" />
            <div className="h-7 w-4/5 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/[0.07]" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function NewsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [editorialArticles, setEditorialArticles] = useState<NewsArticle[]>([])
  const [feedMode, setFeedMode] = useState<FeedMode>('loading')
  const [visibleArticles, setVisibleArticles] = useState(ARTICLES_PER_PAGE)

  useEffect(() => {
    let cancelled = false

    async function loadPosts() {
      if (!isSanityConfigured) {
        if (!cancelled) setFeedMode('fallback')
        return
      }

      try {
        const data = (await fetchBlogPosts()) as SanityBlogPostSummary[]
        const articles = (data || [])
          .map(toNewsArticle)
          .filter((article): article is NewsArticle => Boolean(article))

        if (!cancelled) {
          setEditorialArticles(articles)
          setFeedMode(articles.length > 0 ? 'editorial' : 'fallback')
        }
      } catch {
        if (!cancelled) setFeedMode('fallback')
      }
    }

    void loadPosts()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    setVisibleArticles(ARTICLES_PER_PAGE)
  }, [activeFilter])

  const sourceArticles =
    feedMode === 'editorial' ? editorialArticles : newsArticles
  const filteredArticles = useMemo(
    () =>
      sourceArticles.filter((article) =>
        activeFilter === 'All' ? true : article.type === activeFilter
      ),
    [activeFilter, sourceArticles]
  )
  const displayArticles = filteredArticles.slice(0, visibleArticles)

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-7 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#98FFF9]">
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            Official editorial
          </div>
          <h2
            id="editorial-heading"
            className="font-serif text-4xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-5xl"
          >
            Stories from MagicCraft
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
            News, patch notes, and product stories. Dates show when each item
            was originally published.
          </p>
        </div>

        <div
          aria-label="Filter MagicCraft articles"
          className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#070b2d] p-1"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:px-5 ${
                activeFilter === filter.value
                  ? 'bg-[#98FFF9] text-[#03082f]'
                  : 'text-white/65 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {feedMode === 'fallback' ? (
        <p
          role="status"
          className="mt-6 rounded-xl border border-[#B591F2]/20 bg-[#B591F2]/[0.07] px-4 py-3 text-sm leading-6 text-white/65"
        >
          The editorial archive is temporarily unavailable. These verified
          MagicCraft product updates and official resources remain available.
        </p>
      ) : null}

      <div className="mt-8">
        {feedMode === 'loading' ? (
          <LoadingCards />
        ) : displayArticles.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {displayArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                featured={index === 0 && activeFilter === 'All'}
              />
            ))}
          </div>
        ) : (
          <div
            role="status"
            className="rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-16 text-center"
          >
            <p className="text-lg font-semibold text-white">
              No {activeFilter.toLowerCase()} are available yet.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('All')}
              className="mt-4 min-h-11 rounded-full border border-white/15 px-5 text-sm font-bold text-[#98FFF9] hover:border-[#98FFF9]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
            >
              Show all updates
            </button>
          </div>
        )}
      </div>

      {filteredArticles.length > visibleArticles ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleArticles((previous) => previous + ARTICLES_PER_PAGE)
            }
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 text-sm font-bold text-white hover:border-[#98FFF9]/35 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
          >
            Load more stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  )
}
