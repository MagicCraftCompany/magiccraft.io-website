import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import EcosystemPreviewSection from '@/components/Home/EcosystemPreviewSection'
import ExperiencePathsSection from '@/components/Home/ExperiencePathsSection'
import FinalCtaSection from '@/components/Home/FinalCtaSection'
import HeroSection from '@/components/Home/HeroSection'
import McrtUtilitySection from '@/components/Home/McrtUtilitySection'
import MobileBottomBar from '@/components/Home/MobileBottomBar'

const GamePlay = lazy(() => import('@/components/GamePlay'))
const LiveStatsWidget = lazy(
  () => import('@/components/LiveStats/LiveStatsWidget')
)

function Homepagemcrt() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoGame',
            name: 'MagicCraft',
            description:
              'A free cross-platform fantasy MOBA set in the Ashvales with PvP and PvE play plus optional Web3 features powered by $MCRT.',
            url: 'https://magiccraft.io/',
            image: 'https://magiccraft.io/magiccraft-social-preview.webp',
            genre: ['MOBA', 'Action', 'Strategy', 'Fantasy', 'Multiplayer'],
            gamePlatform: ['PC', 'iOS', 'Android', 'Steam'],
            applicationCategory: 'Game',
            operatingSystem: 'iOS, Android, Windows',
            publisher: {
              '@type': 'Organization',
              name: 'MagicCraft',
              url: 'https://magiccraft.io/',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-dvh w-full max-w-full overflow-x-hidden bg-[#03082f] text-white">
        <Header />
        <main className="w-full max-w-full overflow-x-hidden scroll-smooth pb-[calc(env(safe-area-inset-bottom)+4rem)] md:-mt-[80px] md:pb-0">
          <HeroSection />
          <ExperiencePathsSection />

          <section id="gameplay">
            <Suspense fallback={<div className="min-h-[520px] bg-[#020418]" />}>
              <GamePlay />
            </Suspense>
          </section>

          <div className="w-full bg-gradient-to-b from-[#020418] via-[#07051e] to-[#03082f]">
            <Suspense fallback={<div className="min-h-[360px]" />}>
              <LiveStatsWidget />
            </Suspense>
          </div>

          <McrtUtilitySection />
          <EcosystemPreviewSection />
          <FinalCtaSection />
          <MobileBottomBar />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Homepagemcrt
