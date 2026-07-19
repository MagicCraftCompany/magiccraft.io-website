import { Helmet } from 'react-helmet-async'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import AiProductSuiteSection from '@/components/Home/AiProductSuiteSection'
import EcosystemSystemsSection from '@/components/Home/EcosystemSystemsSection'
import FinalCtaSection from '@/components/Home/FinalCtaSection'
import GameExperienceSection from '@/components/Home/GameExperienceSection'
import HeroSection from '@/components/Home/HeroSection'
import MobileBottomBar from '@/components/Home/MobileBottomBar'
import LiveStatsWidget from '@/components/LiveStats/LiveStatsWidget'
import { AI_PRODUCTS } from '@/data/aiProducts'
import { GAMEPLAY_VIDEO } from '@/data/gameplayMedia'

const homeTitle = 'MagicCraft | Live Game & AI Product Studio'

function Homepagemcrt() {
  return (
    <>
      <Helmet>
        <title>{homeTitle}</title>
        <link rel="canonical" href="https://magiccraft.io/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://magiccraft.io/#organization',
                name: 'MagicCraft',
                url: 'https://magiccraft.io/',
                description:
                  'MagicCraft publishes a live cross-platform fantasy MOBA and builds focused AI products for operations, film, advertising, marketing, meetings and wellness.',
              },
              {
                '@type': 'ItemList',
                name: 'MagicCraft AI Product Suite',
                itemListElement: AI_PRODUCTS.map((product, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'SoftwareApplication',
                    name: product.name,
                    url: product.href,
                    applicationCategory: 'BusinessApplication',
                    description: product.description,
                  },
                })),
              },
              {
                '@type': 'VideoGame',
                '@id': 'https://magiccraft.io/#game',
                name: 'MagicCraft',
                url: 'https://magiccraft.io/',
                description:
                  'A live, free-to-play fantasy MOBA with established PvP modes and a new solo and co-op PvE system.',
                datePublished: '2023-06-21',
                gamePlatform: ['PC', 'Steam', 'iOS', 'Android'],
                playMode: ['SinglePlayer', 'CoOp', 'MultiPlayer'],
                genre: ['MOBA', 'Action', 'Fantasy'],
                trailer: {
                  '@id': 'https://magiccraft.io/#gameplay-video',
                },
                publisher: {
                  '@id': 'https://magiccraft.io/#organization',
                },
              },
              {
                '@type': 'VideoObject',
                '@id': 'https://magiccraft.io/#gameplay-video',
                name: 'Official MagicCraft gameplay',
                description:
                  'First-party footage of a live MagicCraft multiplayer arena battle.',
                thumbnailUrl:
                  'https://magiccraft.io/gameplay/magiccraft-triple-kill.webp',
                uploadDate: '2024-05-31T14:46:15Z',
                duration: 'PT9S',
                contentUrl: GAMEPLAY_VIDEO.src,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-dvh w-full max-w-full overflow-x-hidden bg-[#03082f] text-white">
        <a
          href="#main-content"
          className="fixed left-4 top-2 z-[300000] -translate-y-20 rounded-lg bg-white px-4 py-2 font-bold text-[#03082f] transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#98FFF9]"
        >
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="w-full max-w-full overflow-x-hidden scroll-smooth pb-[calc(env(safe-area-inset-bottom)+4rem)] md:-mt-[80px] md:pb-0"
        >
          <HeroSection />
          <GameExperienceSection />
          <LiveStatsWidget />
          <AiProductSuiteSection />
          <EcosystemSystemsSection />
          <FinalCtaSection />
          <MobileBottomBar />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Homepagemcrt
