import { Fragment, Suspense, lazy, useCallback, useEffect, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import steam from '@/assets/icons/icon-steam.svg'
import { Tabs, Tab } from '@/components/tabs'
import { roadmapData } from '../data/roadmapData'
const RoadmapCard = lazy(() => import('../components/Cards/RoadmapCard'))
import { ourteam } from '@/components/Team/ourTeam'
const GamePlay = lazy(() => import('@/components/GamePlay'))
import MagicraftDownload from '@/components/HomePageCard'
import BuyStrip from '@/components/Buy/BuyStrip'
const Partners = lazy(() => import('@/components/Partners/Partners'))
import { Helmet } from 'react-helmet-async'
import bnbLogo from '../assets/icons/bnblogo.svg'
import { handleBuyMCRT } from '@/lib/gameActions'

const AIIntegrationSection = lazy(() => import('@/components/Home/AIIntegrationSection'))
import HeroSection from '@/components/Home/HeroSection'

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
        <title>MagicCraft - Web3 Gaming | Create Games & Earn $MCRT</title>
        <meta
          name="description"
          content="MagicCraft is a crypto gaming MOBA (meme online battle arena) where you battle and build games like Roblox to earn $MCRT. Available on PC, iOS, Android, and Steam. Trade $MCRT on Bybit."
        />
        <meta
          name="keywords"
          content="crypto gaming, $MCRT, MagicCraft, MOBA, meme online battle arena, Bybit, blockchain game, P2E, play and earn, NFT gaming, Web3 gaming, game maker, create games, earn crypto, Steam, iOS, Android"
        />
        <meta name="author" content="MagicCraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MagicCraft – Crypto Gaming MOBA | Earn $MCRT" />
        <meta property="og:description" content="Battle in a crypto MOBA and build games to earn $MCRT. Play on PC, iOS, Android, Steam. Trade on Bybit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io" />
        <meta property="og:image" content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp" />
        <meta property="og:site_name" content="MagicCraft" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MagicCraft – Crypto Gaming MOBA | Earn $MCRT" />
        <meta name="twitter:description" content="Battle, build, and earn $MCRT. Play on PC, iOS, Android, Steam. Trade on Bybit." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://magiccraft.io" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "MagicCraft",
            "description": "Play-and-Earn blockchain game where players can create games and earn $MCRT tokens",
            "url": "https://magiccraft.io",
            "image": "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp",
            "genre": ["Action", "Strategy", "Blockchain", "Web3 Gaming"],
            "platform": ["PC", "Mobile", "Steam"],
            "publisher": "MagicCraft",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MagicCraft",
            "url": "https://magiccraft.io",
            "logo": "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp",
            "sameAs": [
              "https://x.com/MagicCraftGame",
              "https://t.me/magiccraftgamechat",
              "https://www.youtube.com/@MagicCraftGame"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-dvh w-full max-w-full text-white overflow-x-hidden">
        {/* Zeus promo removed */}
        <Header />
        <main className="md:-mt-[80px] scroll-smooth pb-20 w-full max-w-full overflow-x-hidden">
          {/*header*/}
          <HeroSection />

          {/* Download banner just below hero */}
          <div id="download-section" className="w-full max-w-full bg-gradient-to-b from-[#0a0524] via-[#050317] to-[#03082f] relative z-10 shadow-inner overflow-visible">
            <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 w-full overflow-visible">
               <MagicraftDownload/>
            </div>
             </div>
          {/* Conversion-first Buy strip */}
          <BuyStrip />
          {/* $MCRT Payments: The currency of gaming */}
          <section id="mcrt-payments" className="w-full border-t border-white/5 bg-gradient-to-b from-[#03082f] via-[#0a0524] to-[#03082f]">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-6 sm:py-8">
              <div className="card-glass rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 sm:px-6 md:px-8 py-5 sm:py-7 shadow-[0_0_30px_rgba(152,255,249,0.1)]">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 md:gap-6">
                  <div className="text-center lg:text-left max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 mb-3">
                      <img src={bnbLogo} alt="BNB Chain" className="h-3.5 w-3.5" />
                      <span>Built on BNB Chain</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                      Seamless Payments & Ecosystem Utility
                  </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                      $MCRT is engineered for speed and scale. Operating on the BEP‑20 standard,
                      payments settle in seconds with fees around a cent and capacity for thousands of transactions per second.
                      Send value instantly between players, power in‑game commerce, and fuel AI-driven experiences across the MagicCraft economy.
                  </p>
                </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 text-[11px] sm:text-xs">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                      {/* Speed icon */}
                      <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4a8 8 0 1 1-7.938 7H5a7 7 0 1 0 2.05-4.95l1.414 1.415A5 5 0 1 1 17 12h2A7 7 0 0 0 12 4Zm.5 4a1 1 0 0 0-1 1v3.586l-2.207 2.207a1 1 0 1 0 1.414 1.414l2.5-2.5A1 1 0 0 0 13.5 13V9a1 1 0 0 0-1-1Z"/></svg>
                      <span>USDT‑like speed</span>
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                      {/* Coin icon */}
                      <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 4.239 2 7s4.477 5 10 5 10-2.239 10-5-4.477-5-10-5Zm0 12c-5.523 0-10-2.239-10-5v3c0 2.761 4.477 5 10 5s10-2.239 10-5V9c0 2.761-4.477 5-10 5Zm0 4c-5.523 0-10-2.239-10-5v3c0 2.761 4.477 5 10 5s10-2.239 10-5v-3c0 2.761-4.477 5-10 5Z"/></svg>
                      <span>~1¢ fees</span>
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                      {/* TPS icon */}
                      <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 5h6v6H4V5Zm10 0h6v6h-6V5ZM4 13h6v6H4v-6Zm10 4h6v2h-6v-2Z"/></svg>
                      <span>High TPS</span>
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                      {/* P2P icon */}
                      <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5 17a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1H5v-1Z"/></svg>
                      <span>Player ↔ Player</span>
                    </span>
                </div>
              </div>
                <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
                  <button onClick={handleBuyMCRT} className="btn-primary interactive-scale">
                    Get $MCRT
                          </button>
                  <a href="/build-on-magiccraft" className="btn-secondary">Learn more</a>
                            </div>
                          </div>
                            </div>
          </section>
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
                  The fuel of the MagicCraft economy — used for in-game actions, AI products, ads, governance, and rewards across every product we build.
                </p>
              </div>

              {/* Use cases grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8">
                {[
                  { icon: '⚔️', label: 'PvP Rewards', desc: 'Win matches, earn $MCRT' },
                  { icon: '🔥', label: 'Hero Leveling', desc: 'Burn $MCRT to level up' },
                  { icon: '🤖', label: 'AI Products', desc: 'Power Merlin & Akyn' },
                  { icon: '📢', label: 'MagicAds', desc: 'Pay & earn with ads' },
                  { icon: '🗳️', label: 'Governance', desc: 'Vote on DAO proposals' },
                  { icon: '🎨', label: 'NFT Minting', desc: 'Mint & trade assets' },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="card-glass rounded-2xl border border-white/10 p-3 sm:p-4 text-center hover:border-[#98FFF9]/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(152,255,249,0.1)] transition-all duration-300">
                    <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">{label}</div>
                    <div className="text-[10px] sm:text-xs text-white/50">{desc}</div>
                  </div>
                ))}
              </div>

              {/* Token stats + CTA row */}
              <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-5 sm:px-6 md:px-8 py-5 sm:py-6">
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 flex-1">
                  {[
                    { label: 'Standard', value: 'BEP-20' },
                    { label: 'Network', value: 'BNB Chain' },
                    { label: 'Tx Speed', value: '~3 sec' },
                    { label: 'Avg Fee', value: '~$0.01' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">{label}</div>
                      <div className="text-sm sm:text-base font-bold text-white mt-0.5">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary interactive-scale"
                  >
                    Buy on Bybit
                  </a>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    PancakeSwap
                  </a>
                  <a
                    href="https://coinmarketcap.com/currencies/magiccraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                  >
                    CoinMarketCap ↗
                  </a>
                </div>
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
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">17,500+</div>
                </div>
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Downloads</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">50,000+</div>
                </div>
                <div className="card-glass px-3 py-2.5 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Crypto Lobbies</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">BTC, ETH, SOL</div>
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

        {/* Ecosystem Hub */}
        <section className="relative py-8 md:py-12 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 overflow-visible">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">MagicCraft Ecosystem</h3>
            <p className="text-gray-300 text-base md:text-lg mt-2">Core experiences and tools powered by $MCRT.</p>
                        </div>

          {/* Core actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <a id="earn" href="https://lobby.magiccraft.io/" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1" rel="noreferrer noopener">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-gamepad.svg" alt="Compete in PvP" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Compete in PvP</h4>
                      </div>
              <p className="text-sm md:text-base text-gray-300">Win matches and tournaments to unlock $MCRT rewards.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://coinmarketcap.com/currencies/magiccraft/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-currency.svg" alt="CoinMarketCap" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">$MCRT on CoinMarketCap</h4>
                      </div>
              <p className="text-sm md:text-base text-gray-300">Price, market cap, and supply details.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
            </a>
            <a href="#download-section" onClick={(e) => { e.preventDefault(); document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-2xl overflow-hidden cursor-pointer no-underline hover:no-underline">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-gamepad.svg" alt="Game" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Cross-Platform Game</h4>
                    </div>
              <p className="text-sm md:text-base text-gray-300">Play on PC, iOS, Android, Steam.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://lobby.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-leaderboard.svg" alt="Lobbies" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Crypto Lobbies</h4>
                  </div>
              <p className="text-sm md:text-base text-gray-300">BTC, ETH, BNB & more.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-marketplace.svg" alt="Marketplace" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">NFT Marketplace</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">Trade assets and utilities.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://store.steampowered.com/app/3478810/MCRT_Game_Maker/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src={steam} alt="Game Maker" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">$MCRT Game Maker</h4>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#98FFF9]/20 text-[#98FFF9] font-bold">STEAM</span>
              </div>
              <p className="text-sm md:text-base text-gray-300">Design maps, earn $MCRT.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
            </a>
          </div>

          {/* More in the Ecosystem */}
          <details className="mt-4 md:mt-6">
            <summary className="mx-auto inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 cursor-pointer select-none bg-black/20 hover:bg-black/30">
              More in the Ecosystem
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
              <a href="https://polybilities.com" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-stats.svg" alt="Polybilities" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Polybilities</h4>
                </div>
                <p className="text-sm text-gray-300">AI prediction markets.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open app <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://games.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-gamepad.svg" alt="Mini-games" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Mini-games</h4>
                </div>
                <p className="text-sm text-gray-300">Web3 mini titles.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Play now <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://app.magiccraft.io/nft_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-nft-new.svg" alt="Mint NFTs" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Mint Utility NFTs</h4>
                </div>
                <p className="text-sm text-gray-300">Genesis & Revelation.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Mint now <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://app.magiccraft.io/free_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-nft-new.svg" alt="Free NFTs" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Free NFT Collections</h4>
                </div>
                <p className="text-sm text-gray-300">Vega, Davinci & more.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Claim free <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://app.magiccraft.io/dao" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-community.svg" alt="DAO" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">DAO</h4>
                </div>
                <p className="text-sm text-gray-300">Participate in governance.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Vote now <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://rent.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-help.svg" alt="NFT Rentals" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">NFT Rentals (Testnet)</h4>
                </div>
                <p className="text-sm text-gray-300">Currently available on testnet.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">View rentals <span aria-hidden="true">→</span></span>
              </a>
              <a href="/grants" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-bounty.svg" alt="Grants" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Grants</h4>
                </div>
                <p className="text-sm text-gray-300">Apply with a working build.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Apply <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://lobby.magiccraft.io/referral" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-contact.svg" alt="Referral" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Referral</h4>
                </div>
                <p className="text-sm text-gray-300">Invite friends and earn.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Get link <span aria-hidden="true">→</span></span>
              </a>
            </div>
          </details>
        </section>

        {/* Mentions removed per request */}

        {/* Sticky mobile bottom bar */}
        <div className="fixed bottom-0 inset-x-0 md:hidden z-50 pb-[max(env(safe-area-inset-bottom),4px)]">
          <div className="w-full bg-[#0B0F39]/82 backdrop-blur border-t border-white/10 px-2 py-0.5 flex items-center gap-2">
                <a
              href="https://lobby.magiccraft.io/"
              rel="noreferrer noopener"
                  className="flex-1 inline-flex items-center justify-center h-10 rounded-md text-[12px] font-semibold text-white bg-white/10 border border-white/20"
            >
              Play Now
            </a>
            <a
              href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
              rel="noreferrer noopener"
                  className="flex-1 inline-flex items-center justify-center h-10 rounded-md text-[12px] font-semibold text-[#03082F] bg-gradient-to-b from-[#A9FFF6] to-[#8EECE6] border border-white/20"
            >
              Buy $MCRT
            </a>
          </div>
        </div>
          
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
                  Current Phase: Q1 2026
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
        </main>
        <Footer  />
      </div>
    </>
  )
}
export default Homepagemcrt
