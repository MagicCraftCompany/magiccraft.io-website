import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import PortableText, {
  type SanityBlock,
} from '@/components/Editorial/PortableText'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { fetchBlogPostBySlug } from '@/lib/sanity/client'
import {
  clampEditorialDescription,
  normalizeEditorialCategory,
  validEditorialDate,
} from '@/lib/editorial'

interface BlogPostDetail {
  _id: string
  title: string
  description?: string | null
  category?: string | null
  type?: string | null
  image?: string | null
  body?: SanityBlock[] | null
  publishedAt?: string | null
  _createdAt?: string | null
}

function bodyText(post: BlogPostDetail) {
  return (post.body || [])
    .flatMap((block) => block.children || [])
    .map((child) => child.text)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function includesHistoricalRewardClaim(post: BlogPostDetail) {
  return /\b(play[ -]to[ -]earn|earn(?:ing)? (?:real money|mcrt)|universal (?:gaming )?currency)\b/i.test(
    bodyText(post)
  )
}

function readingTime(post: BlogPostDetail) {
  const wordCount = bodyText(post).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / 220))
}

function pageDescription(post: BlogPostDetail) {
  const explicitDescription = post.description?.replace(/\s+/g, ' ').trim()
  if (explicitDescription) return explicitDescription

  const text = bodyText(post)
  if (text) return clampEditorialDescription(text)
  return `Read this MagicCraft update: ${post.title}.`
}

function ArticleLoading() {
  return (
    <div className="min-h-dvh w-full bg-[#03082f] text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div
          role="status"
          aria-live="polite"
          className="flex min-h-[55vh] flex-col items-center justify-center gap-4"
        >
          <div className="h-11 w-11 animate-spin rounded-full border-2 border-white/15 border-t-[#98FFF9]" />
          <p className="text-sm font-semibold text-white/55">
            Loading article…
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ArticleUnavailable() {
  return (
    <div className="min-h-dvh w-full bg-[#03082f] text-white">
      <Helmet>
        <title>Article Unavailable | MagicCraft</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#98FFF9]">
            MagicCraft editorial
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
            Article unavailable
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
            This article could not be opened. It may have moved, or the
            editorial archive may be temporarily unavailable.
          </p>
          <Link
            to="/news"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#98FFF9] px-6 text-sm font-black text-[#03082f] no-underline hover:bg-white hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Browse News
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!slug) return () => undefined
    const articleSlug = slug

    setLoading(true)
    setUnavailable(false)
    setPost(null)

    async function loadPost() {
      try {
        const data = (await fetchBlogPostBySlug(
          articleSlug
        )) as BlogPostDetail | null
        if (cancelled) return
        if (data) {
          setPost(data)
        } else {
          setUnavailable(true)
        }
      } catch {
        if (!cancelled) setUnavailable(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void loadPost()
    return () => {
      cancelled = true
    }
  }, [slug])

  if (!slug || slug === 'null') {
    return <Navigate to="/news" replace />
  }

  if (loading) return <ArticleLoading />
  if (unavailable || !post) return <ArticleUnavailable />

  const publishDate = validEditorialDate(post.publishedAt, post._createdAt)
  const publishedAt = publishDate?.toISOString()
  const formattedDate = publishDate?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
  const category = normalizeEditorialCategory(post.category || post.type)
  const description = pageDescription(post)
  const showArchiveNote = includesHistoricalRewardClaim(post)
  const canonicalUrl = `https://magiccraft.io/blog/${encodeURIComponent(slug)}`
  const title = `${post.title} | MagicCraft`
  const coverImage =
    post.image || 'https://magiccraft.io/magiccraft-social-preview.webp'

  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#03082f] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={coverImage} />
        {publishedAt ? (
          <meta property="article:published_time" content={publishedAt} />
        ) : null}
        <meta property="article:section" content={category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={coverImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description,
            image: [coverImage],
            datePublished: publishedAt,
            dateModified: publishedAt,
            articleSection: category,
            mainEntityOfPage: canonicalUrl,
            author: {
              '@type': 'Organization',
              name: 'MagicCraft',
              url: 'https://magiccraft.io/',
            },
            publisher: {
              '@type': 'Organization',
              name: 'MagicCraft',
              url: 'https://magiccraft.io/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
              },
            },
          })}
        </script>
      </Helmet>

      <a
        href="#article-content"
        className="fixed left-4 top-2 z-[300000] -translate-y-20 rounded-lg bg-white px-4 py-2 font-bold text-[#03082f] transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#98FFF9]"
      >
        Skip to article
      </a>
      <Header />

      <main id="article-content" tabIndex={-1}>
        <article>
          <header className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#05051f] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20">
            <div
              className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[#6b3fbd]/20 blur-[120px]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-4xl">
              <Link
                to="/news"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/60 no-underline hover:text-[#98FFF9] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to News
              </Link>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.13em]">
                <span className="rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/[0.08] px-3 py-1.5 text-[#98FFF9]">
                  {category}
                </span>
                {formattedDate ? (
                  <time dateTime={publishedAt} className="text-white/50">
                    {formattedDate}
                  </time>
                ) : null}
                <span className="inline-flex items-center gap-1.5 text-white/45">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {readingTime(post)} min read
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
                {description}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            {post.image ? (
              <figure className="overflow-hidden rounded-[24px] border border-white/10 bg-[#080b2c] shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] h-auto w-full object-cover"
                  decoding="async"
                />
              </figure>
            ) : null}

            <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
              {showArchiveNote ? (
                <p
                  role="note"
                  className="mb-9 rounded-xl border border-amber-300/20 bg-amber-300/[0.08] px-5 py-4 text-sm leading-6 text-amber-50"
                >
                  <strong>Archive note:</strong> this post reflects information
                  at publication. Current features and MCRT utility may have
                  changed, and no reward or income is guaranteed.
                </p>
              ) : null}

              {post.body && post.body.length > 0 ? (
                <PortableText blocks={post.body} />
              ) : (
                <p className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/60">
                  This archived post does not include additional article text.
                </p>
              )}

              <footer className="mt-14 border-t border-white/10 pt-8">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/40">
                  Continue exploring
                </p>
                <Link
                  to="/news"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 text-base font-bold text-[#98FFF9] no-underline hover:text-white hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
                >
                  Browse all MagicCraft stories
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
