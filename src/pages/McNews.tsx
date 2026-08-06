import { ArrowDown, ArrowUpRight, MessageCircle, Radio } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { NewsSection } from '@/components/Cards/NewsSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import newsMetadata from '@/data/newsMetadata.json'

const officialChannels = [
  {
    label: 'X',
    detail: '@MagicCraftGame',
    href: 'https://x.com/MagicCraftGame',
    icon: Radio,
  },
  {
    label: 'Telegram',
    detail: 'Official gaming chat',
    href: 'https://t.me/magiccraftgamechat',
    icon: MessageCircle,
  },
]

export default function NewsPage() {
  const canonical = 'https://magiccraft.io/news'

  return (
    <>
      <Helmet>
        <title>{newsMetadata.title}</title>
        <meta name="description" content={newsMetadata.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={newsMetadata.title} />
        <meta property="og:description" content={newsMetadata.description} />
        <meta
          property="og:image"
          content="https://magiccraft.io/magiccraft-social-preview.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newsMetadata.title} />
        <meta name="twitter:description" content={newsMetadata.description} />
        <meta
          name="twitter:image"
          content="https://magiccraft.io/magiccraft-social-preview.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: newsMetadata.title,
            url: canonical,
            description: newsMetadata.description,
            isPartOf: {
              '@type': 'WebSite',
              name: 'MagicCraft',
              url: 'https://magiccraft.io/',
            },
            publisher: {
              '@type': 'Organization',
              name: 'MagicCraft',
              url: 'https://magiccraft.io/',
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-dvh w-full overflow-x-hidden bg-[#03082f] text-white">
        <a
          href="#main-content"
          className="fixed left-4 top-2 z-[300000] -translate-y-20 rounded-lg bg-white px-4 py-2 font-bold text-[#03082f] transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#98FFF9]"
        >
          Skip to main content
        </a>
        <Header />

        <main id="main-content" tabIndex={-1} className="scroll-smooth pb-24">
          <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#05051f] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div
              className="pointer-events-none absolute left-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#49288f]/25 blur-[110px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-[-18rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#1c8f9a]/20 blur-[120px]"
              aria-hidden="true"
            />

            <div className="relative mx-auto grid max-w-screen-xl items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/[0.07] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#98FFF9]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#98FFF9] shadow-[0_0_12px_#98FFF9]" />
                  MagicCraft newsroom
                </div>

                <h1 className="mt-4 max-w-3xl font-serif text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:whitespace-nowrap lg:text-[3.25rem]">
                  Inside MagicCraft.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                  Official news, patch notes, product releases, and community
                  updates, kept in their original context.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/news#latest-news"
                    aria-label="Read the latest MagicCraft news"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#98FFF9] px-6 text-sm font-black text-[#03082f] no-underline hover:bg-white hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Browse the archive
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href="https://x.com/MagicCraftGame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 text-sm font-bold text-white no-underline hover:border-white/30 hover:bg-white/[0.08] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
                  >
                    Current updates on X
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {officialChannels.map((channel) => {
                    const Icon = channel.icon
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-black/10 px-4 no-underline hover:border-[#98FFF9]/25 hover:bg-white/[0.04] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
                      >
                        <Icon
                          className="h-4 w-4 text-[#98FFF9]"
                          aria-hidden="true"
                        />
                        <span className="text-xs font-bold text-white">
                          {channel.label}
                        </span>
                        <span className="hidden text-xs text-white/45 sm:inline">
                          {channel.detail}
                        </span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                          aria-hidden="true"
                        />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#98FFF9]/15 via-[#B591F2]/15 to-transparent blur-xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#080b2c] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.38)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                    <img
                      src="/gameplay/magiccraft-team-battle.webp"
                      alt="MagicCraft team battle gameplay"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03082f] via-transparent to-black/10" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#98FFF9]">
                        Game • AI • Ecosystem
                      </p>
                      <p className="mt-2 max-w-md text-xl font-bold leading-tight text-white sm:text-2xl">
                        Official stories, preserved with their original context.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="latest-news"
            aria-labelledby="editorial-heading"
            className="scroll-mt-24 bg-[#03082f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          >
            <NewsSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
