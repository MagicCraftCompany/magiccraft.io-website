import { NewsSection } from '@/components/Cards/NewsSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Helmet } from 'react-helmet-async'
import { newsArticles } from '@/data/newsData'

export default function NewsPage() {
  const canonical = 'https://magiccraft.io/news'
  return (
    <>
      <Helmet>
        <title>MagicCraft News & Updates</title>
        <meta
          name="description"
          content="Stay up to date with the latest MagicCraft news, patch notes, and community updates."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="MagicCraft News" />
        <meta
          property="og:description"
          content="Catch all the latest announcements, patch updates, and ecosystem news for MagicCraft."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MagicCraft News & Updates" />
        <meta
          name="twitter:description"
          content="Catch all the latest MagicCraft announcements, patch notes, ecosystem launches, and community updates."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'MagicCraft News & Updates',
            url: canonical,
            description:
              'Latest MagicCraft announcements, patch notes, and ecosystem news.',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: newsArticles.map((article, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: article.title,
                url: article.readMoreLink,
              })),
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          {/* OUR NEWS Section */}
          <section className="relative bg-gradient-to-b from-[#070725] to-[#0a0a2e] py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-8 font-serif text-5xl font-bold text-white md:text-6xl">
                OUR NEWS
              </h1>

              <div className="mx-auto max-w-3xl">
                <p className="mb-6 text-center text-lg">
                  Follow official MagicCraft announcements, patch notes, product
                  releases, and community updates.
                </p>
                <p className="text-center text-lg">
                  Browse the latest posts below and use each source link for the
                  full details.
                </p>
              </div>

              {/* Featured News Card - Like the Spectator Mode */}
              <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[20px]">
                <div className="rounded-[20px] bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-1">
                  <div className="relative overflow-hidden rounded-[18px]">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1726232450/Frame_307825_il8ahq.webp"
                      alt="MagicCraft news and updates"
                      className="h-[200px] w-full object-cover"
                    />
                    <div className="absolute left-0 top-0 p-4">
                      <span className="inline-block rounded-full bg-[#1C162C] bg-opacity-70 px-3 py-1 text-sm text-white">
                        Latest updates
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center justify-between">
                        <a
                          href="#latest-news"
                          className="flex min-h-11 items-center text-teal-400 hover:text-teal-300"
                          aria-label="Read the latest MagicCraft news"
                        >
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LATEST NEWS Section */}
          <section
            id="latest-news"
            className="relative scroll-mt-24 px-4 py-12 md:px-6 lg:px-8"
          >
            <NewsSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
