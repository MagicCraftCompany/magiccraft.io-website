import { Fragment, Suspense, lazy, useCallback, useEffect, useState } from 'react'
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

const AIIntegrationSection = lazy(() => import('@/components/Home/AIIntegrationSection'))
const AskAISection = lazy(() => import('@/components/Home/AskAISection'))
import HeroSection from '@/components/Home/HeroSection'
const LiveStatsWidget = lazy(() => import('@/components/LiveStats/LiveStatsWidget'))
import TokenStatsRow from '@/components/Home/TokenStatsRow'
import McrtPaymentsSection from '@/components/Home/McrtPaymentsSection'
const EcosystemHubSection = lazy(() => import('@/components/Home/EcosystemHubSection'))
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
        <title>MagicCraft - PvP Crypto Lobbies, NFT Heroes & $MCRT Gaming</title>
        <meta
          name="description"
          content="MagicCraft is a live Web3 gaming ecosystem with PvP lobbies for BTC, ETH, and $MCRT, NFT-linked playable characters, rarity-based skins, and creator tools. Play on PC, iOS, Android, and Steam."
        />
        <meta
          name="keywords"
          content="crypto gaming, $MCRT, MagicCraft, PvP lobbies, bitcoin gaming, ethereum gaming, NFT heroes, NFT skins, Web3 gaming, blockchain game, play and earn, NFT gaming, Steam, iOS, Android"
        />
        <meta name="author" content="MagicCraft" />

        {/* Open Graph */}
        <meta property="og:title" content="MagicCraft – PvP Crypto Lobbies, NFT Heroes & $MCRT" />
        <meta property="og:description" content="Play live PvP lobbies for BTC, ETH, and $MCRT, unlock NFT-linked characters, and trade rarity-based skins across the MagicCraft ecosystem." />
        <meta property="og:url" content="https://magiccraft.io/" />

        {/* Twitter */}
        <meta name="twitter:title" content="MagicCraft – PvP Crypto Lobbies, NFT Heroes & $MCRT" />
        <meta name="twitter:description" content="Play live PvP lobbies for BTC, ETH, and $MCRT, unlock NFT-linked characters, and trade rarity-based skins across the MagicCraft ecosystem." />

        {/* VideoGame structured data (Organization + WebSite already in index.html) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "MagicCraft",
            "description": "Web3 game ecosystem with live BTC, ETH, and $MCRT PvP lobbies, NFT-linked playable characters, rarity-based skins, and creator tools.",
            "url": "https://magiccraft.io/",
            "image": "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp",
            "genre": ["Action", "Strategy", "Blockchain", "Web3 Gaming"],
            "gamePlatform": ["PC", "iOS", "Android", "Steam"],
            "applicationCategory": "Game",
            "operatingSystem": "iOS, Android, Windows",
            "publisher": {
              "@type": "Organization",
              "name": "MagicCraft",
              "url": "https://magiccraft.io/"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-dvh w-full max-w-full text-white overflow-x-hidden">
        {/* Zeus promo removed */}
        <Header />
        <main className="md:-mt-[80px] scroll-smooth pb-[calc(env(safe-area-inset-bottom)+5rem)] md:pb-20 w-full max-w-full overflow-x-hidden">
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
          <div id="download-section" className="w-full max-w-full bg-gradient-to-b from-[#0a0524] via-[#050317] to-[#03082f] relative z-10 shadow-inner overflow-visible">
            <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 w-full overflow-visible">
               <MagicraftDownload/>
            </div>
             </div>
          {/* Conversion-first Buy strip */}
          <BuyStrip />
          {/* $MCRT Payments: The currency of gaming */}
          <McrtPaymentsSection />
          {/* $MCRT Utility Token Section */}
          <section className="w-full bg-gradient-to-b from-[#03082f] via-[#07051e] to-[#03082f] border-t border-white/5 py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#98FFF9]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#98FFF9]"></span>
                    BEP-20 on BNB Chain
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
                    $MCRT turns MagicCraft into one connected economy.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                    Instead of treating token utility as a side feature, MagicCraft puts $MCRT at the center of play,
                    ownership, builder tools, AI products, payments, rewards, and governance.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/65">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Building since 2021</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">100,000+ downloads</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">17,800+ holders</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: 'Play',
                      title: 'Lobbies and rewards',
                      desc: 'Compete in PvP paths built around BTC, ETH, and $MCRT prize pools.',
                      color: '#98FFF9',
                    },
                    {
                      label: 'Own',
                      title: 'NFT-linked heroes',
                      desc: 'Use characters, skins, rarity, marketplace activity, and game identity in one loop.',
                      color: '#B591F2',
                    },
                    {
                      label: 'Build',
                      title: 'AI, ads, and payments',
                      desc: 'Use $MCRT across MCRTPay, MagicAds, creator tooling, and AI-driven products.',
                      color: '#FFB649',
                    },
                  ].map(({ label, title, desc, color }) => (
                    <div key={label} className="card-glass min-h-[210px] rounded-xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-white/[0.04] text-sm font-bold" style={{ borderColor: `${color}55`, color }}>
                        {label.slice(0, 1)}
                      </div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color }}>{label}</p>
                      <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/62">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 border-t border-white/8 pt-6 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ['Token standard', 'BEP-20'],
                  ['Network', 'BNB Chain'],
                  ['Game lobbies', 'BTC, ETH, $MCRT'],
                  ['Platforms', 'iOS, Android, PC'],
                  ['Ecosystem', 'Game + AI + Ads'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-center">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/45">{label}</div>
                    <div className="mt-1 text-sm font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs">
                <span className="text-white/45">Trade $MCRT:</span>
                <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noopener noreferrer" className="text-white/78 hover:text-[#98FFF9]">Bybit</a>
                <span className="text-white/20">/</span>
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noopener noreferrer" className="text-white/78 hover:text-[#98FFF9]">PancakeSwap</a>
                <span className="text-white/20">/</span>
                <a href="https://www.htx.com/trade/mcrt_usdt" target="_blank" rel="noopener noreferrer" className="text-white/78 hover:text-[#98FFF9]">HTX</a>
              </div>
            </div>
          </section>

          {/* AI Integration Section */}
          <Suspense fallback={<div className="min-h-[120px]" />}>
            <AIIntegrationSection />
          </Suspense>

        <section className="mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 py-4 md:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="card-glass rounded-2xl border border-[#FFB649]/20 p-5 md:p-6 bg-gradient-to-br from-[#1A1104]/70 to-[#0B0F39]/70">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#FFB649]/80 font-bold mb-2">Live Now</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">PvP Lobbies for Real Crypto</h3>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">Players can jump into live PvP lobbies and compete for Bitcoin, Ethereum, and $MCRT rewards directly inside the MagicCraft ecosystem.</p>
            </div>
            <div className="card-glass rounded-2xl border border-[#98FFF9]/20 p-5 md:p-6 bg-gradient-to-br from-[#07122A]/70 to-[#0B0F39]/70">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#98FFF9]/80 font-bold mb-2">NFT Utility</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Playable NFT Characters</h3>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">MagicCraft NFTs are not just collectibles. Characters are tied to the NFTs, unlock in-game utility, and can be played inside the live game and marketplace economy.</p>
            </div>
            <div className="card-glass rounded-2xl border border-[#B591F2]/20 p-5 md:p-6 bg-gradient-to-br from-[#140B2A]/70 to-[#0B0F39]/70">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B591F2]/80 font-bold mb-2">Rarity System</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Legendary and Evolved Skins</h3>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">Special NFT tiers such as legendary and powered-up versions create rarer characters with stronger identity and more marketplace value for collectors and players.</p>
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
          <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 mb-8 sm:mb-10 md:mb-14 lg:mb-16 px-1 sm:px-2 md:px-0 overflow-x-hidden">
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
                <p className="mx-auto mt-4 max-w-2xl text-center text-xs font-medium tracking-wider text-white/50 uppercase">
                  Live products, current quarter delivery, and next expansion phases
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full lg:max-w-screen-xl">
                  {/* edge fades hint that the row scrolls */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#03082f] to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#03082f] to-transparent" />

                  <div className="grid max-w-[100vw] snap-x snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-auto overscroll-x-contain touch-auto px-4 scrollbar-none">
                    {roadmapData.map((data) => (
                      <Suspense fallback={<div className="w-[280px] h-[240px] rounded-2xl border border-white/10 bg-white/5" />} key={data.quarter}>
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

          {/* Removed duplicate community section — social links are in the footer */}
          {/*our team */}
          <div className="h-auto bg-[#020418] px-6 py-10 md:px-8 md:py-14" id="team">
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
                            <div className="flex flex-col items-center justify-center bg-[#020418] text-center group">
                              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] shadow-[0_0_0_4px_rgba(0,0,0,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(125,230,223,0.4)] transition-all duration-300">
                                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0d2e]">
                              <img
                                    className="w-full h-full object-cover grayscale"
                                src={item.icon}
                                alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                              />
                                </div>
                              </div>
                              <p className="mt-2 text-white group-hover:text-[#98FFF9] transition-colors duration-300 font-medium">{item.name}</p>
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
                            className="flex flex-col items-center justify-center bg-[#020418] text-center group"
                          >
                            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] shadow-[0_0_0_4px_rgba(0,0,0,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(125,230,223,0.4)] transition-all duration-300">
                              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0d2e]">
                            <img
                                  className="w-full h-full object-cover grayscale"
                              src={item.icon}
                              alt={item.name}
                                  loading="lazy"
                                  decoding="async"
                            />
                              </div>
                            </div>
                            <p className="mt-2 text-white group-hover:text-[#98FFF9] transition-colors duration-300 font-medium">{item.name}</p>
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

                  <Tab id="Team" label="Team" className="w-full max-w-screen-xl">
                    <div className="w-full space-y-4 ">
                      <div className="relative my-4 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
                        {teamMembers.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center group"
                          >
                            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] shadow-[0_0_0_4px_rgba(0,0,0,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(125,230,223,0.4)] transition-all duration-300">
                              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0d2e]">
                            <img
                                  className="w-full h-full object-cover grayscale"
                              src={item.icon}
                              alt={item.name}
                                  loading="lazy"
                                  decoding="async"
                            />
                              </div>
                            </div>
                            <p className="mt-2 text-white group-hover:text-[#98FFF9] transition-colors duration-300 font-medium">{item.name}</p>
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
        <Footer  />
      </div>
    </>
  )
}
export default Homepagemcrt
