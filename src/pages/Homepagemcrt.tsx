import { Helmet } from 'react-helmet-async'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import AiInfrastructureSection from '@/components/Home/AiInfrastructureSection'
import AiProductSuiteSection from '@/components/Home/AiProductSuiteSection'
import FinalCtaSection from '@/components/Home/FinalCtaSection'
import GameDevelopmentSection from '@/components/Home/GameDevelopmentSection'
import HeroSection from '@/components/Home/HeroSection'
import MagicAdsFeatureSection from '@/components/Home/MagicAdsFeatureSection'
import MobileBottomBar from '@/components/Home/MobileBottomBar'

const suiteProducts = [
  ['Merlin AI', 'https://merlintheai.com/'],
  ['Akyn', 'https://akyn.pro/'],
  ['MagicAds', 'https://magicads.dev/'],
  ['MAGAS7', 'https://magas7.com/'],
  ['DragonList', 'https://dragonlist.ai/'],
  ['DocAI', 'https://docai.live/'],
]

function Homepagemcrt() {
  return (
    <>
      <Helmet>
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
                  'MagicCraft is an AI product studio building practical tools for assistants, film creation, marketing, advertising, productivity, wellness, and developer infrastructure.',
              },
              {
                '@type': 'ItemList',
                name: 'MagicCraft AI Product Suite',
                itemListElement: suiteProducts.map(([name, url], index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'SoftwareApplication',
                    name,
                    url,
                    applicationCategory: 'BusinessApplication',
                  },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-dvh w-full max-w-full overflow-x-hidden bg-[#03082f] text-white">
        <Header />
        <main className="w-full max-w-full overflow-x-hidden scroll-smooth pb-[calc(env(safe-area-inset-bottom)+4rem)] md:-mt-[80px] md:pb-0">
          <HeroSection />
          <AiProductSuiteSection />
          <MagicAdsFeatureSection />
          <AiInfrastructureSection />
          <GameDevelopmentSection />
          <FinalCtaSection />
          <MobileBottomBar />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Homepagemcrt
