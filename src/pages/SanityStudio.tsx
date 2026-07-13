import { useEffect } from 'react'
import { AlertTriangle, ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { isSanityConfigured, sanityConfig } from '@/lib/sanity/config'

export default function SanityStudio() {
  const studioUrl = isSanityConfigured
    ? `https://${sanityConfig.projectId}.sanity.studio/desk`
    : null

  useEffect(() => {
    if (!studioUrl) return
    const timer = setTimeout(() => {
      window.location.assign(studioUrl)
    }, 3000)

    return () => clearTimeout(timer)
  }, [studioUrl])

  return (
    <div className="min-h-dvh w-full bg-gradient-to-b from-[#070725] to-[#0a0a2e] text-white">
      <Helmet>
        <title>Content Admin | MagicCraft</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          {studioUrl ? (
            <>
              <h1 className="mb-4 text-3xl font-bold">
                Opening the content studio
              </h1>
              <p className="mb-8 text-gray-400">
                Authorized editors are being redirected to the configured Sanity
                Studio.
              </p>
              <div
                className="h-12 w-12 animate-spin rounded-full border-4 border-teal-400 border-t-transparent"
                aria-label="Redirecting"
              />
              <a
                href={studioUrl}
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-teal-300 underline"
              >
                Open the studio now
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </>
          ) : (
            <>
              <AlertTriangle
                className="mb-5 h-12 w-12 text-amber-300"
                aria-hidden="true"
              />
              <h1 className="mb-4 text-3xl font-bold">
                Content studio unavailable
              </h1>
              <p className="mb-8 max-w-xl text-gray-300">
                No Sanity project is configured for this deployment. This page
                will not redirect to a placeholder or unknown admin site.
              </p>
              <Link
                to="/news"
                className="inline-flex min-h-11 items-center rounded-full bg-teal-300 px-6 py-3 font-semibold text-[#070725]"
              >
                Back to News
              </Link>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
