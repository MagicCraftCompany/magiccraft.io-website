import {
  Fragment,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useState,
} from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Tabs, Tab } from '@/components/tabs'
import { roadmapData } from '../data/roadmapData'
const RoadmapCard = lazy(() => import('../components/Cards/RoadmapCard'))
import { ourteam } from '@/components/Team/ourTeam'
const GamePlay = lazy(() => import('@/components/GamePlay'))
import MagicraftDownload from '@/components/HomePageCard'
import BuyStrip from '@/components/Buy/BuyStrip'
const Partners = lazy(() => import('@/components/Partners/Partners'))
import { Helmet } from 'react-helmet-async'

const AIIntegrationSection = lazy(
  () => import('@/components/Home/AIIntegrationSection')
)
const AskAISection = lazy(() => import('@/components/Home/AskAISection'))
import HeroSection from '@/components/Home/HeroSection'
const LiveStatsWidget = lazy(
  () => import('@/components/LiveStats/LiveStatsWidget')
)
import TokenStatsRow from '@/components/Home/TokenStatsRow'
import McrtPaymentsSection from '@/components/Home/McrtPaymentsSection'
import McrtUtilitySection from '@/components/Home/McrtUtilitySection'
const EcosystemHubSection = lazy(
  () => import('@/components/Home/EcosystemHubSection')
)
import MobileBottomBar from '@/components/Home/MobileBottomBar'

function Homepagemcrt() {
  const [visibleCount] = useState(ourteam.length)

  const kolTeam = ourteam.filter((member) => member.category === 'KOL')
  const teamMembers = ourteam.filter((member) => member.category === 'Team')

  const adjustDividerHeight = useCallback(() => {
    const dividers = document.querySelectorAll('.divider')
    dividers.forEach((divider) => {
      const parentElement = divider.parentElement
      if (parentElement) {
        const gridHeight = parentElement.clientHeight
        ;(divider as HTMLElement).style.height = `${gridHeight}px`
      }
    })
  }, [])

  useEffect(() => {
    adjustDividerHeight()
  }, [visibleCount, adjustDividerHeight])

  useEffect(() => {
    window.addEventListener('resize', adjustDividerHeight)
    return () => {
      window.removeEventListener('resize', adjustDividerHeight)
    }
  }, [adjustDividerHeight])

  return (
    <>
      <Helmet>
        <title>
          MagicCraft - $MCRT Gaming, AI Products & PvP Crypto Lobbies
        </title>
        <meta
          name="description"
          content="MagicCraft is a Web3 gaming and AI ecosystem powered by $MCRT: PvP crypto lobbies, NFT-linked characters, marketplace utility, MCRTPay, MagicAds, and creator tools for PC, iOS, Android, and Steam."
        />
        <meta
          name="keywords"
          content="crypto gaming, $MCRT, MagicCraft, PvP lobbies, bitcoin gaming, ethereum gaming, NFT heroes, NFT skins, Web3 gaming, blockchain game, MCRTPay, MagicAds, AI products, NFT gaming, Steam, iOS, Android"
        />
        <meta name="author" content="MagicCraft" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MagicCraft - $MCRT Gaming, AI Products & PvP Lobbies"
        />
        <meta
          property="og:description"
          content="Use $MCRT across PvP lobbies, NFT assets, pledging, MCRTPay, MagicAds, and the growing MagicCraft AI product suite."
        />
        <meta property="og:url" content="https://magiccraft.io/" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="MagicCraft - $MCRT Gaming, AI Products & PvP Lobbies"
        />
        <meta
          name="twitter:description"
          content="Use $MCRT across PvP lobbies, NFT assets, pledging, MCRTPay, MagicAds, and the growing MagicCraft AI product suite."
        />

        {/* VideoGame structured data (Organization + WebSite already in index.html) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoGame',
            name: 'MagicCraft',
            description:
              'Web3 game and AI ecosystem with live BTC, ETH, and $MCRT PvP lobbies, NFT-linked playable characters, rarity-based skins, payments, ads, and creator tools.',
            url: 'https://magiccraft.io/',
            image:
              'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
            genre: ['Action', 'Strategy', 'Blockchain', 'Web3 Gaming'],
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
      <div className="min-h-dvh w-full max-w-full overflow-x-hidden text-white">
        {/* Zeus promo removed */}
        <Header />
        <main className="w-full max-w-full overflow-x-hidden scroll-smooth pb-[calc(env(safe-area-inset-bottom)+5rem)] md:-mt-[80px] md:pb-20">
          {/*header*/}
          <HeroSection />

          {/* Token stats + CTA row */}
          <TokenStatsRow />

          {/* Live ecosystem stats */}
          <div className="w-full bg-gradient-to-b from-[#07051e] to-[#0a0524]">
            <Suspense fallback={null}>
              <LiveStatsWidget />
            </Suspense>
          </div>

          {/* Download banner just below hero */}
          <div
            id="download-section"
            className="relative z-10 w-full max-w-full overflow-visible bg-gradient-to-b from-[#0a0524] via-[#050317] to-[#03082f] shadow-inner"
          >
            <div className="mx-auto w-full max-w-screen-xl overflow-visible px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4">
              <MagicraftDownload />
            </div>
          </div>
          {/* Conversion-first Buy strip */}
          <BuyStrip />
          {/* $MCRT Payments: The currency of gaming */}
          <McrtPaymentsSection />
          {/* $MCRT Utility Token Section */}
          <McrtUtilitySection />

          {/* AI Integration Section */}
          <Suspense fallback={<div className="min-h-[120px]" />}>
            <AIIntegrationSection />
          </Suspense>

          <section className="mx-auto w-[96%] max-w-screen-xl px-1 py-4 sm:w-[94%] sm:px-2 md:w-11/12 md:px-0 md:py-6">
            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
              <div className="card-glass rounded-2xl border border-[#FFB649]/20 bg-gradient-to-br from-[#1A1104]/70 to-[#0B0F39]/70 p-5 md:p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFB649]/80">
                  Live Now
                </p>
                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                  PvP Lobbies for Real Crypto
                </h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  Players can jump into live PvP lobbies and compete for
                  Bitcoin, Ethereum, and $MCRT rewards directly inside the
                  MagicCraft ecosystem.
                </p>
              </div>
              <div className="card-glass rounded-2xl border border-[#98FFF9]/20 bg-gradient-to-br from-[#07122A]/70 to-[#0B0F39]/70 p-5 md:p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#98FFF9]/80">
                  NFT Utility
                </p>
                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                  Playable NFT Characters
                </h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  MagicCraft NFTs are not just collectibles. Characters are tied
                  to the NFTs, unlock in-game utility, and can be played inside
                  the live game and marketplace economy.
                </p>
              </div>
              <div className="card-glass rounded-2xl border border-[#B591F2]/20 bg-gradient-to-br from-[#140B2A]/70 to-[#0B0F39]/70 p-5 md:p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B591F2]/80">
                  Rarity System
                </p>
                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                  Legendary and Evolved Skins
                </h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">
                  Special NFT tiers such as legendary and powered-up versions
                  create rarer characters with stronger identity and more
                  marketplace value for collectors and players.
                </p>
              </div>
            </div>
          </section>

          {/* Ecosystem Hub */}
          <Suspense fallback={<div className="min-h-[300px]" />}>
            <EcosystemHubSection />
          </Suspense>

          {/* Mentions removed per request */}

          {/* Sticky mobile bottom bar */}
          <MobileBottomBar />

          <section id="gameplay">
            <Suspense fallback={<div className="min-h-[220px]" />}>
              <GamePlay />
            </Suspense>
          </section>

          {/* Exchanges/Partners elevated */}
          <section className="relative mx-auto mb-8 mt-4 w-[96%] max-w-screen-xl overflow-x-hidden px-1 sm:mb-10 sm:mt-6 sm:w-[94%] sm:px-2 md:mb-14 md:mt-8 md:w-11/12 md:px-0 lg:mb-16 lg:mt-12">
            <Suspense fallback={<div className="min-h-[120px]" />}>
              <Partners />
            </Suspense>
          </section>

          {/*roadmap */}

          <section className="relative my-10 min-h-screen" id="roadmap">
            <div className="absolute -top-40 left-0 right-0 -z-10 mx-auto aspect-square max-h-[700px] w-full max-w-[700px] rounded-full bg-[#1E025B] opacity-30 blur-[170px]" />

            <div className="space-y-20">
              <div className="space-y-8">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  Roadmap
                </h2>
                <div className="mx-auto w-fit rounded-full bg-[#4457B84D] px-5 py-3 text-lg text-[#98FFF9] backdrop-blur">
                  Current Phase: Q2 2026
                </div>
                <p className="mx-auto mt-4 max-w-2xl text-center text-xs font-medium uppercase tracking-wider text-white/50">
                  Live products, current quarter delivery, and next expansion
                  phases
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full lg:max-w-screen-xl">
                  {/* edge fades hint that the row scrolls */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#03082f] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#03082f] to-transparent" />

                  <div className="scrollbar-none grid max-w-[100vw] touch-auto snap-x snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-auto overscroll-x-contain px-4">
                    {roadmapData.map((data) => (
                      <Suspense
                        fallback={
                          <div className="h-[240px] w-[280px] rounded-2xl border border-white/10 bg-white/5" />
                        }
                        key={data.quarter}
                      >
                        <RoadmapCard data={data} />
                      </Suspense>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60 lg:hidden">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#98FFF9]/70" />
                <span>Swipe to explore the roadmap</span>
              </div>
            </div>
          </section>

          {/*roadmap */}

          {/* Removed duplicate community section, social links are in the footer */}
          {/*our team */}
          <div
            className="h-auto bg-[#020418] px-6 py-10 md:px-8 md:py-14"
            id="team"
          >
            <section className="relative mx-auto max-w-screen-xl space-y-8 p-4 md:space-y-12">
              <h3 className="-mb-6 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text p-3 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                Our team
              </h3>
              <div className="flex items-center justify-center">
                <Tabs type="team">
                  <Tab id="ALL" label="ALL" className="w-full max-w-screen-xl">
                    <div className="w-full space-y-4">
                      <div className="relative my-4 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
                        {ourteam.slice(0, visibleCount).map((item, index) => (
                          <Fragment key={item.name}>
                            <div className="group flex flex-col items-center justify-center bg-[#020418] text-center">
                              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] p-[3px] shadow-[0_0_0_4px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(125,230,223,0.4)] md:h-36 md:w-36">
                                <div className="h-full w-full overflow-hidden rounded-full bg-[#0a0d2e]">
                                  <img
                                    className="h-full w-full object-cover grayscale"
                                    src={item.icon}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                              </div>
                              <p className="mt-2 font-medium text-white transition-colors duration-300 group-hover:text-[#98FFF9]">
                                {item.name}
                              </p>
                              {item.work && (
                                <>
                                  <p className="mt-1 text-[#98FFF9]">
                                    {item.work}
                                  </p>
                                  <div className="mt-2 flex">
                                    {item.socialicons.map((social, idx) => (
                                      <a
                                        key={idx}
                                        href={social.socialmedia}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-2 bg-opacity-70 text-[#FFFFFF]"
                                      >
                                        {social.icons}
                                      </a>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                            {index <
                              ourteam.slice(0, visibleCount).length - 1 && (
                              <>
                                {(index + 1) % 2 === 0 && (
                                  <div className="divider absolute right-0 top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                )}
                                <div className="divider absolute left-0 top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                <div className="divider absolute left-[25%] top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                <div className="divider absolute left-[50%] top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                <div className="divider absolute left-[75%] top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                              </>
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </Tab>

                  <Tab
                    id="Advisors and KOL's"
                    label="Advisors and KOL's"
                    className="w-full max-w-screen-xl"
                  >
                    <div className="w-full space-y-4 ">
                      <div className="relative my-4 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
                        {kolTeam.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="group flex flex-col items-center justify-center bg-[#020418] text-center"
                          >
                            <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] p-[3px] shadow-[0_0_0_4px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(125,230,223,0.4)] md:h-36 md:w-36">
                              <div className="h-full w-full overflow-hidden rounded-full bg-[#0a0d2e]">
                                <img
                                  className="h-full w-full object-cover grayscale"
                                  src={item.icon}
                                  alt={item.name}
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                            </div>
                            <p className="mt-2 font-medium text-white transition-colors duration-300 group-hover:text-[#98FFF9]">
                              {item.name}
                            </p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex">
                                  {item.socialicons.map((social, idx) => (
                                    <a
                                      key={idx}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab>

                  <Tab
                    id="Team"
                    label="Team"
                    className="w-full max-w-screen-xl"
                  >
                    <div className="w-full space-y-4 ">
                      <div className="relative my-4 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
                        {teamMembers.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="group flex flex-col items-center justify-center bg-[#020418] text-center"
                          >
                            <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] p-[3px] shadow-[0_0_0_4px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(125,230,223,0.4)] md:h-36 md:w-36">
                              <div className="h-full w-full overflow-hidden rounded-full bg-[#0a0d2e]">
                                <img
                                  className="h-full w-full object-cover grayscale"
                                  src={item.icon}
                                  alt={item.name}
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                            </div>
                            <p className="mt-2 font-medium text-white transition-colors duration-300 group-hover:text-[#98FFF9]">
                              {item.name}
                            </p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex">
                                  {item.socialicons.map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </section>
          </div>
          {/*our team ended */}

          {/* Partners already shown above for crypto-first visibility */}

          <Suspense fallback={<div className="min-h-[200px]" />}>
            <AskAISection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Homepagemcrt
