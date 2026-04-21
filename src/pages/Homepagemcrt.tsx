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
          <section className="w-full bg-gradient-to-b from-[#03082f] via-[#07051e] to-[#03082f] border-t border-white/5 py-10 sm:py-14 md:py-16">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
              {/* Header */}
              <div className="text-center mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/5 text-xs text-[#98FFF9] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#98FFF9] animate-pulse"></span>
                  BEP-20 · BNB Chain
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#98FFF9] via-white to-[#B591F2] bg-clip-text text-transparent mb-3">
                  $MCRT Utility Token
                </h2>
                <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                  The fuel of the MagicCraft economy — used for lobby entry, NFT characters, AI products, ads, governance, and rewards across every product we build.
                </p>
              </div>

              {/* Use cases grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8">
                {[
                  { icon: '⚔️', label: 'PvP Lobbies', desc: 'Play for BTC, ETH, and $MCRT' },
                  { icon: '🔥', label: 'Hero Leveling', desc: 'Burn $MCRT to level up' },
                  { icon: '🤖', label: 'AI Products', desc: 'Power Merlin & Akyn' },
                  { icon: '📢', label: 'MagicAds', desc: 'Pay & earn with ads' },
                  { icon: '🗳️', label: 'Governance', desc: 'Vote on DAO proposals' },
                  { icon: '🎨', label: 'NFT Heroes', desc: 'Mint and play NFT-linked characters' },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="card-glass rounded-2xl border border-white/10 p-3 sm:p-4 text-center hover:border-[#98FFF9]/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(152,255,249,0.1)] transition-all duration-300">
                    <div className="text-2xl sm:text-3xl mb-2" aria-hidden="true">{icon}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">{label}</div>
                    <div className="text-[10px] sm:text-xs text-white/50">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats + credibility strip */}
          <div className="w-full bg-gradient-to-r from-[#0B0F39] via-[#120e3d] to-[#0B0F39] border-t border-white/5">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-5 sm:py-7 space-y-4">
              {/* Credibility badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/70 border-b border-white/5 pb-4">
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.31 13.14c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V9H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V23h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>Building since 2021</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#B591F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>Global Team</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#FFB649]" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>$10m+ Unity Core</span>
                <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>Next-Gen AI Powered</span>
              </div>
              {/* Stats cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Token Holders</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">17,800+</div>
                </div>
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Downloads</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">100,000+</div>
                </div>
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Crypto Lobbies</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">BTC, ETH, $MCRT</div>
                </div>
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Platforms</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">iOS, Android, PC</div>
                </div>
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Network</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">Game + AI + Ads</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <span className="text-xs text-white/50">Trade $MCRT:</span>
                <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noopener noreferrer" className="text-xs text-white/80 font-medium hover:text-[#98FFF9] transition-colors">Bybit</a>
                <span className="text-white/20">·</span>
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noopener noreferrer" className="text-xs text-white/80 font-medium hover:text-[#98FFF9] transition-colors">PancakeSwap</a>
                <span className="text-white/20">·</span>
                <a href="https://www.htx.com/trade/mcrt_usdt" target="_blank" rel="noopener noreferrer" className="text-xs text-white/80 font-medium hover:text-[#98FFF9] transition-colors">HTX</a>
              </div>
            </div>
          </div>

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
