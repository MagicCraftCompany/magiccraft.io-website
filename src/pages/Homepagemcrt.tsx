import { useCallback, useEffect, useRef, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import down from '@/assets/icons/li_chevron-down.svg'
import { Tabs, Tab } from '@/components/tabs'
import { roadmapData } from '../data/roadmapData'
import RoadmapCard from '../components/Cards/RoadmapCard'
import { ourteam } from '@/components/Team/ourTeam'
import React from 'react'
import GenesisNFTs from '@/components/GenesisNFTs'
import { LiaTelegramPlane } from 'react-icons/lia'
import GamePlay from '@/components/GamePlay'
// import GameCard from '@/components/ui/GameCard'
// import { Game, gamesData } from '@/data/game'
// import { ArrowUpRight } from 'lucide-react'
import MagicraftDownload from '@/components/HomePageCard'
import BuyStrip from '@/components/Buy/BuyStrip'
import BuyFloat from '@/components/Buy/BuyFloat'
import EcosystemMindMap from '@/components/EcosystemMindMap'
import Partners from '@/components/Partners/Partners'
import { Helmet } from 'react-helmet-async'
import bnbLogo from '../assets/icons/bnblogo.svg'
import { openTransactionModal } from '@xswap-link/sdk'
// Zeus promo removed (event finished)
// import ZeusPromo, { ZeusPromoPopup } from '@/components/ui/ZeusPromo'
// import MentionsStrip from '@/components/ui/MentionsStrip'
// BattlePass removed - API not consistently loading



function Homepagemcrt() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [mindMapOpen, setMindMapOpen] = useState(false)
  const [mindMapSeen, setMindMapSeen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)
  const [currentSlide, setCurrentSlide] = useState(0)
  const TOTAL_SLIDES = 3

  useEffect(() => {
    try {
      setMindMapSeen(localStorage.getItem('mc_seen_mindmap') === '1')
    } catch {
      // ignore
    }
  }, [])

  const markMindMapSeen = () => {
    setMindMapSeen(true)
    try {
      localStorage.setItem('mc_seen_mindmap', '1')
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      if (params.get('mindmap_reset') === '1') {
        localStorage.removeItem('mc_seen_mindmap')
        setMindMapSeen(false)
      }
      if (params.get('mindmap') === '1' || params.get('mindmap_test') === '1') {
        setMindMapOpen(true)
        markMindMapSeen()
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mindMapSeen) return
    const id = window.setTimeout(() => {
      setMindMapOpen(true)
      markMindMapSeen()
    }, 700)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mindMapSeen])

  const registerHandler = () => {
    window.location.href = 'https://lobby.magiccraft.io/register'
  }

  const openGameByDevice = () => {
    if (typeof window === 'undefined') return
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera
    const isIOS = /iPad|iPhone|iPod/.test(ua)
    const isAndroid = /Android/.test(ua)
    const iosUrl = 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525'
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en'
    const pcUrl = 'https://store.steampowered.com/app/2395760/MagicCraft/'
    const url = isIOS ? iosUrl : isAndroid ? androidUrl : pcUrl
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleBuyMCRT = async () => {
    const ua = navigator.userAgent || navigator.vendor
    const isIOS = /iPad|iPhone|iPod/.test(ua)
    // Fallback to dedicated page on iOS Safari where popups might be blocked
    if (isIOS) {
      window.location.href = 'https://www.bybit.com/en/trade/spot/MCRT/USDT'
      return
    }
    try {
      await openTransactionModal({
        integratorId: '34808808c1f4ae4533b7',
        dstChain: '56',
        dstToken: '0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f',
        srcChain: '56',
        srcToken: '0x0000000000000000000000000000000000000000',
        defaultWalletPicker: true,
      })
    } catch (e) {
      console.error('Buy modal failed', e)
      window.open('https://www.bybit.com/en/trade/spot/MCRT/USDT', '_blank', 'noopener,noreferrer')
    }
  }

  // Gameplay carousel functionality
  useEffect(() => {
    const slides = document.getElementById('gameplaySlides')
    const dots = document.querySelectorAll('.carousel-dot')
    
    if (!slides || !dots.length) return

    let autoPlayInterval: NodeJS.Timeout

    const goToSlide = (slideIndex: number) => {
      setCurrentSlide(slideIndex)
      // Move by a fraction of the full width based on total slides
      slides.style.transform = `translateX(-${(slideIndex * 100) / TOTAL_SLIDES}%)`
      
      // Update dots
      dots.forEach((dot, index) => {
        if (index === slideIndex) {
          dot.classList.add('active')
        } else {
          dot.classList.remove('active')
        }
      })
    }

    const nextSlide = () => {
      const next = (currentSlide + 1) % TOTAL_SLIDES
      goToSlide(next)
    }

    // Add click handlers to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(autoPlayInterval)
        goToSlide(index)
        // Restart auto-play after manual interaction
        autoPlayInterval = setInterval(nextSlide, 4000)
      })
    })

    // Auto-play
    autoPlayInterval = setInterval(nextSlide, 4000)

    // Cleanup
    return () => {
      clearInterval(autoPlayInterval)
      dots.forEach((dot) => {
        dot.removeEventListener('click', () => {})
      })
    }
  }, [currentSlide])

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

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

  // Ensure hero background video autoplay/loops reliably across browsers
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return
    try {
      video.muted = true
      ;(video as any).playsInline = true
    } catch {}

    const tryPlay = () => {
      const p = video.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {})
      }
    }

    const onVisibility = () => {
      if (!document.hidden) tryPlay()
    }
    const onPause = () => {
      // If it pauses unexpectedly, resume
      tryPlay()
    }
    const onEnded = () => {
      video.currentTime = 0
      tryPlay()
    }

    tryPlay()
    document.addEventListener('visibilitychange', onVisibility)
    video.addEventListener('pause', onPause)
    video.addEventListener('ended', onEnded)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('ended', onEnded)
    }
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

  const playonappleHandler = () => {
    window.location.href =
      'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525'
  }
  const playonsteamHandler = () => {
    window.location.href =
      'https://store.steampowered.com/app/2395760/MagicCraft/'
  }
  const getfromgoogleHandler = () => {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en'
  }

  // const filteredGames = gamesData.filter(
  //   (game: { title: string }) =>
  //     game.title === 'magicflutter' ||
  //     game.title === 'magicchess' ||
  //     game.title === 'tetrablox' ||
  //     game.title === 'runescribes' ||
  //     game.title === 'magicrunner'
  // )
  return (
    <>
      <Helmet>
        <title>MagicCraft - Play-to-Earn Blockchain Game | Create Games & Earn $MCRT</title>
        <meta
          name="description"
          content="MagicCraft is a crypto gaming MOBA (meme online battle arena) where you battle and build games like Roblox to earn $MCRT. Available on PC, iOS, Android, and Steam. Trade $MCRT on Bybit."
        />
        <meta
          name="keywords"
          content="crypto gaming, $MCRT, MagicCraft, MOBA, meme online battle arena, Bybit, blockchain game, P2E, play to earn, NFT gaming, Web3 gaming, game maker, create games, earn crypto, Steam, iOS, Android"
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
            "description": "Play-to-Earn blockchain game where players can create games and earn $MCRT tokens",
            "url": "https://magiccraft.io",
            "image": "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp",
            "genre": ["Action", "Strategy", "Blockchain", "Play-to-Earn"],
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
      </Helmet>
      <div className="min-h-dvh w-full max-w-full text-white overflow-x-hidden">
        {/* Zeus promo removed */}
        <Header />
        <main className="md:-mt-[80px] scroll-smooth pb-20 w-full max-w-full overflow-x-hidden">
          {/*header*/}
          <section className="md:min-h-screen relative min-h-[560px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[800px] h-auto bg-cover bg-center overflow-hidden w-full max-w-full">
            <video
              ref={heroVideoRef}
              className="absolute inset-0 h-full w-full object-cover scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              poster="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
            >
              <source
                src="https://res.cloudinary.com/dfzcr2ch4/video/upload/f_auto,q_auto/v1717166775/video_gokp2f.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/dfzcr2ch4/video/upload/f_auto,q_auto/v1717166775/video_gokp2f.webm"
                type="video/webm"
              />
            </video>
            <div className="video-bg-gradient absolute inset-0 h-full w-full bg-gradient-to-b from-black/60 via-black/35 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#03082f]/90 via-transparent to-transparent"></div>

            {/* Ecosystem mind map (first visit: hover/tap the hero to open) */}
            <button
              onClick={() => { setMindMapOpen(true); markMindMapSeen() }}
              onMouseEnter={() => { if (!mindMapSeen) { setMindMapOpen(true); markMindMapSeen() } }}
              className="absolute right-3 top-20 sm:top-24 z-20 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-white/70 backdrop-blur hover:bg-white/10 hover:text-white transition-colors"
            >
              Map
            </button>
            
            <div className="relative z-10 mx-auto max-w-screen-xl h-full w-full px-3 sm:px-4">
              <div className="grid h-full w-full grid-cols-1 place-items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 pt-14 sm:pt-16 md:pt-18 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
                <div className="w-full max-w-[30%] sm:max-w-[25%] md:w-full md:max-w-32 lg:max-w-36 animate-fade-in mt-1 sm:mt-2 md:mt-3 lg:mt-4 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp"
                    alt="MCRT Token"
                      loading="eager"
                      className="relative w-full h-auto drop-shadow-2xl hover:scale-110 transition-all duration-500 hover:rotate-3"
                  />
                </div>
                  </div>
                
                <div className="text-center gap-section animate-slide-up mt-2 sm:mt-3 md:mt-5 lg:mt-6 xl:mt-8 px-4 sm:px-6 md:px-8">
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                    <img 
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"  
                      alt="MagicCraft Logo"
                      loading="eager"
                      className="w-full max-w-[280px] sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg h-auto drop-shadow-xl"
                    />
                  </div>
                  <h1 className="text-hero font-black max-w-4xl mx-auto tracking-wider drop-shadow-2xl leading-tight">
                    THE CURRENCY OF GAMING & AI
                  </h1>
                  <p className="mt-3 max-w-2xl mx-auto text-white/85 text-base sm:text-lg leading-relaxed">
                    Fast, low‑fee on‑chain currency on BNB Chain powering rewards, creator payouts,
                    and in‑game commerce across the MagicCraft universe.
                  </p>
                  <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <button
                      onClick={openGameByDevice}
                      className="header-cta header-cta--play interactive-scale ripple-effect w-full sm:w-auto min-w-[180px] px-8 text-base sm:text-lg"
                      aria-label="Play MagicCraft now"
                    >
                      Play Now
                    </button>
                    <button
                      onClick={handleBuyMCRT}
                      className="header-cta header-cta--buy interactive-scale ripple-effect w-full sm:w-auto min-w-[180px] px-8 text-base sm:text-lg"
                      aria-label="Buy MCRT tokens"
                    >
                      Buy $MCRT
                    </button>
                  </div>
                  {/* Trust badges */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 opacity-90">
                    <span className="text-xs text-white/70">Listed on</span>
                    <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="inline-flex items-center hover:opacity-100 transition-opacity">
                      <img src="/icons/icon-bybit.svg" alt="Bybit" className="h-5 sm:h-6 opacity-90" loading="lazy" />
                    </a>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noreferrer noopener" className="inline-flex items-center hover:opacity-100 transition-opacity">
                      <img src="/icons/icon-pancakeswap.svg" alt="PancakeSwap" className="h-5 sm:h-6 opacity-90" loading="lazy" />
                    </a>
                    <a href="https://www.htx.com/trade/mcrt_usdt" target="_blank" rel="noreferrer noopener" className="inline-flex items-center hover:opacity-100 transition-opacity">
                      <img src="/icons/icon-huobi.svg" alt="HTX" className="h-5 sm:h-6 opacity-90" loading="lazy" />
                    </a>
                  </div>
                </div>
              </div>
              </div>
           
            {/* Download row moved below hero */}
            {/* Scroll cue */}
            <a href="#mcrt-payments" className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 inline-flex items-center justify-center w-10 h-10 rounded-full glass-strong hover:bg-white/10 border border-white/20" aria-label="Scroll to $MCRT payments">
              <svg className="w-5 h-5 text-white/85" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 15.5a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 13.08l5.3-5.29a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-.7.29Z"/></svg>
            </a>
          </section>
          <EcosystemMindMap open={mindMapOpen} onClose={() => setMindMapOpen(false)} onSeen={markMindMapSeen} />

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
              <div className="card-glass/50 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 sm:px-6 md:px-8 py-5 sm:py-7">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 md:gap-6">
                  <div className="text-center lg:text-left max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 mb-3">
                      <img src={bnbLogo} alt="BNB Chain" className="h-3.5 w-3.5" />
                      <span>BEP‑20 on BNB Chain</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                      The currency of gaming & AI
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                      $MCRT is built for speed and scale. On BNB Chain's BEP‑20 standard,
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
          {/* Floating Buy button */}
          <BuyFloat />
          {/* Credibility Bar - Building since 2021 */}
          <div className="w-full bg-gradient-to-r from-[#98FFF9]/10 via-[#B591F2]/10 to-[#FFB649]/10 border-t border-b border-white/10">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>
                  <span><strong>Building since 2021</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B591F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  <span><strong>10 team members</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#FFB649]" viewBox="0 0 24 24" fill="currentColor"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                  <span><strong>17,500+ holders</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  <span><strong>400K+ community</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats strip for buyers */}
          <div className="w-full bg-gradient-to-r from-[#0B0F39] via-[#120e3d] to-[#0B0F39] border-t border-white/5">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-4 sm:py-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                <div className="card-glass px-3 py-2 rounded-md text-center">
                  <div className="text-xs text-white/60">Token Holders</div>
                  <div className="text-sm sm:text-base font-bold text-white">17,500+</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-md text-center">
                  <div className="text-xs text-white/60">Downloads</div>
                  <div className="text-sm sm:text-base font-bold text-white">50,000+</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-md text-center">
                  <div className="text-xs text-white/60">Crypto Lobbies</div>
                  <div className="text-sm sm:text-base font-bold text-white">BTC, ETH, SOL</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-md text-center">
                  <div className="text-xs text-white/60">Platforms</div>
                  <div className="text-sm sm:text-base font-bold text-white">iOS, Android, PC</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-md text-center">
                  <div className="text-xs text-white/60">Exchanges</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noopener noreferrer" className="hover:text-[#98FFF9] transition-colors">Bybit</a>
                    <span className="text-white/30 mx-1">•</span>
                    <a href="https://www.htx.com/trade/mcrt_usdt" target="_blank" rel="noopener noreferrer" className="hover:text-[#98FFF9] transition-colors">HTX</a>
                    <span className="text-white/30 mx-1">•</span>
                    <a href="https://www.mexc.com/exchange/MCRT_USDT" target="_blank" rel="noopener noreferrer" className="hover:text-[#98FFF9] transition-colors">MEXC</a>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm text-white/60">Also on:</span>
                <a href="https://www.gate.io/trade/MCRT_USDT" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/90 font-medium hover:text-[#98FFF9] transition-colors">Gate.io</a>
                <span className="text-white/30">•</span>
                <a href="https://www.bitmart.com/trade/en-US?symbol=MCRT_USDT" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/90 font-medium hover:text-[#98FFF9] transition-colors">Bitmart</a>
                <span className="text-white/30">•</span>
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/90 font-medium hover:text-[#98FFF9] transition-colors">PancakeSwap</a>
              </div>
            </div>
          </div>

          {/* AI Integration Section */}
          <section className="relative w-full bg-gradient-to-b from-[#050317] via-[#0a0524] to-[#03082f] py-12 md:py-16 lg:py-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB649]/5 to-[#B591F2]/5"></div>
            <div className="relative z-10 mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFB649] via-[#B591F2] to-[#98FFF9] bg-clip-text text-transparent mb-4">
                  AI-POWERED ECOSYSTEM
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                  $MCRT powers in-game AI and the MagicCraft AI product suite, led by Akyn and Merlin.
                </p>
              </div>
              
              {/* External AI Products */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white/80 mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-[#98FFF9] to-transparent"></span>
                  AI Product Suite
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Akyn */}
                  <a href="https://www.akyn.pro" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border-2 border-[#98FFF9]/30 hover:border-[#98FFF9]/60 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                        <img src="https://www.akyn.pro/favicon.ico" alt="Akyn" className="h-6 w-6 object-contain" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#98FFF9] transition-colors">Akyn</h4>
                        <span className="text-xs text-[#98FFF9] font-medium">akyn.pro</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      AI shorts & video maker for social content.
                    </p>
                  </a>

                  {/* MerlinAI */}
                  <a href="https://merlintheai.com" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border-2 border-[#9255E0]/30 hover:border-[#9255E0]/60 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                        <img src="https://merlintheai.com/favicon.ico" alt="Merlin AI" className="h-6 w-6 object-contain" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#B591F2] transition-colors">Merlin AI</h4>
                        <span className="text-xs text-[#98FFF9] font-medium">merlintheai.com</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      AI assistant with voice, image gen, investing tools, and smart routing.
                    </p>
                  </a>

                  {/* DocAI */}
                  <a href="https://docai.live" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border-2 border-[#10B981]/30 hover:border-[#10B981]/60 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                        <img src="https://docai.live/favicon.ico" alt="DocAI" className="h-6 w-6 object-contain" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">DocAI</h4>
                        <span className="text-xs text-[#98FFF9] font-medium">docai.live</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      24/7 AI wellness assistant with personalized guidance.
                    </p>
                  </a>

                  {/* Polibilities */}
                  <a href="https://www.polibilities.com" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border-2 border-[#FFB649]/30 hover:border-[#FFB649]/60 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                        <img src="https://www.polibilities.com/favicon.ico" alt="Polibilities" className="h-6 w-6 object-contain" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#FFB649] transition-colors">Polibilities</h4>
                        <span className="text-xs text-[#98FFF9] font-medium">polibilities.com</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Prediction markets with AI odds, real-time updates, and $MCRT rewards.
                    </p>
                  </a>
                </div>
              </div>
              <div className="text-center text-xs text-white/60">
                Powered by $MCRT • AI + Crypto since 2021
              </div>
            </div>
          </section>

        {/* Genesis NFTs — Earnings Tiers */}
        <GenesisNFTs />

        {/* Contract Address - Compact */}
        <section className="relative py-4 md:py-6 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-white/60">$MCRT Contract:</span>
            <code className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-white/90">0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f</code>
            <button onClick={() => navigator.clipboard.writeText('0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f')} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white/80 hover:bg-white/15 transition-colors">Copy</button>
            <a href="https://bscscan.com/token/0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#98FFF9]/20 to-[#B591F2]/20 border border-[#98FFF9]/30 text-xs text-[#98FFF9] hover:from-[#98FFF9]/30 hover:to-[#B591F2]/30 transition-colors">BscScan →</a>
          </div>
        </section>

        {/* Ecosystem Hub */}
        <section className="relative py-8 md:py-12 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 overflow-visible">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">MagicCraft Ecosystem</h3>
            <p className="text-gray-300 text-base md:text-lg mt-2">Core experiences and tools powered by $MCRT.</p>
          </div>

          {/* Core actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <a id="earn" href="https://lobby.magiccraft.io/" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden" rel="noreferrer noopener">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-gamepad.svg" alt="Earn in PvP" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Earn in PvP</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">Win matches and tournaments to earn $MCRT.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Play now <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://coinmarketcap.com/currencies/magiccraft/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-currency.svg" alt="CoinMarketCap" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">$MCRT on CoinMarketCap</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">Price, market cap, and supply details.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">View stats <span aria-hidden="true">→</span></span>
            </a>
            <a href="#download" onClick={(e) => { e.preventDefault(); document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden cursor-pointer">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-gamepad.svg" alt="Game" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Cross-Platform Game</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">Play on PC, iOS, Android, Steam.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Get the game <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://lobby.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-leaderboard.svg" alt="Lobbies" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Crypto Lobbies</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">BTC, ETH, BNB & more.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Enter lobbies <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-marketplace.svg" alt="Marketplace" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">NFT Marketplace</h4>
              </div>
              <p className="text-sm md:text-base text-gray-300">Trade assets and utilities.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Browse items <span aria-hidden="true">→</span></span>
            </a>
            <a href="https://store.steampowered.com/app/3478810/MCRT_Game_Maker/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
              <div className="flex items-center gap-3 mb-1">
                <img src={steam} alt="Game Maker" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">$MCRT Game Maker</h4>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#98FFF9]/20 text-[#98FFF9] font-bold">STEAM</span>
              </div>
              <p className="text-sm md:text-base text-gray-300">Design maps, earn $MCRT.</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open Steam <span aria-hidden="true">→</span></span>
            </a>
          </div>

          {/* More in the Ecosystem */}
          <details className="mt-4 md:mt-6">
            <summary className="mx-auto inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 cursor-pointer select-none bg-black/20 hover:bg-black/30">
              More in the Ecosystem
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
              <a href="https://www.polibilities.com" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-stats.svg" alt="Polibilities" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Polibilities</h4>
                </div>
                <p className="text-sm text-gray-300">AI prediction markets.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open app <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://games.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-gamepad.svg" alt="Mini-games" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Mini-games</h4>
                </div>
                <p className="text-sm text-gray-300">Web3 mini titles.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Play now <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://app.magiccraft.io/nft_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-nft-new.svg" alt="Mint NFTs" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Mint Utility NFTs</h4>
                </div>
                <p className="text-sm text-gray-300">Genesis & Revelation.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Mint now <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://app.magiccraft.io/free_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-nft-new.svg" alt="Free NFTs" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Free NFT Collections</h4>
                </div>
                <p className="text-sm text-gray-300">Vega, Davinci & more.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Claim free <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://app.magiccraft.io/dao" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-community.svg" alt="DAO" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">DAO</h4>
                </div>
                <p className="text-sm text-gray-300">Participate in governance.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Vote now <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://rent.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-help.svg" alt="NFT Rentals" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">NFT Rentals (Testnet)</h4>
                </div>
                <p className="text-sm text-gray-300">Currently available on testnet.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">View rentals <span aria-hidden="true">→</span></span>
              </a>
              <a href="/grants" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-bounty.svg" alt="Grants" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Grants</h4>
                </div>
                <p className="text-sm text-gray-300">Apply with a working build.</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Apply <span aria-hidden="true">→</span></span>
              </a>
              <a href="https://lobby.magiccraft.io/referral" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-md overflow-hidden">
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
        <div className="fixed bottom-2 inset-x-2 md:hidden z-50 safe-padded">
          <div className="rounded-md bg-[#0B0F39]/80 backdrop-blur border border-white/10 shadow-2xl p-2 flex items-center justify-between gap-2">
            <a href="https://lobby.magiccraft.io/" rel="noreferrer noopener" className="flex-1 inline-flex items-center justify-center h-11 rounded-md text-white bg-gradient-to-b from-[#6b3db2] to-[#41207a] border border-white/15">Play</a>
            <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" rel="noreferrer noopener" className="flex-1 inline-flex items-center justify-center h-11 rounded-md text-[#03082F] font-black bg-gradient-to-b from-[#98FFF9] to-[#B591F2]">Buy</a>
          </div>
        </div>
          
         <section id="gameplay">
          <GamePlay />
          </section>

          {/* Exchanges/Partners elevated */}
          <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 mb-8 sm:mb-10 md:mb-14 lg:mb-16 px-1 sm:px-2 md:px-0 overflow-x-hidden">
            <Partners />
          </section>

          {/* JOIN THE ACTION */}
          <section className="flex justify-center bg-center p-4 md:p-6 lg:mt-4 lg:mb-8">
            <div className="relative max-w-7xl w-full rounded-md bg-[#0B0F39] border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30"></div>
              <div className="relative space-y-4 md:space-y-6 px-6 md:px-10 pb-6 md:pb-8 pt-6 md:pt-7">
                <div className="text-center space-y-3">
                  <h5 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent leading-tight">
                    Join the action, earn $MCRT
                  </h5>
                  <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Play, win, and earn across matches and events.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                  {/* Register Card */}
                  <button onClick={registerHandler} className="group text-left rounded-md border border-white/10 bg-white/5 p-5 md:p-6 transition-all duration-300 hover:border-[#8EFF49]/50 hover:bg-white/[0.07]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-[#8EFF49]/20 border border-[#8EFF49]/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#8EFF49]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                          <path d="M16 11l2 2 4-4"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg md:text-xl font-bold text-white">Register</h4>
                        <p className="text-sm text-white/70">Create your $MCRT account.</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs text-[#8EFF49]">Get started <span aria-hidden="true">→</span></span>
                  </button>

                  {/* Download Card */}
                  <div className="rounded-md border border-white/10 bg-white/5 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-[#FFB649]/15 border border-[#FFB649]/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FFB649]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm1 5v5l4 2-1 1-4-2V7h1z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg md:text-xl font-bold text-white">Download the Game</h4>
                        <p className="text-sm text-white/70">PC, iOS, Android, Steam.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/90 hover:border-[#FFB649]/40 hover:text-white transition-colors" onClick={openGameByDevice}>
                        Download
                      </button>
                      <div className="flex items-center gap-3 text-xs text-white/70">
                        <button className="inline-flex items-center gap-2 hover:text-white transition-colors" onClick={playonsteamHandler}>
                          <img src={steam} className="w-4 h-4" alt="Steam Icon" loading="lazy" />
                          Steam
                        </button>
                        <button className="inline-flex items-center gap-2 hover:text-white transition-colors" onClick={playonappleHandler}>
                          <img src={AppleIcon} className="w-4 h-4" alt="Apple Icon" loading="lazy" />
                          App Store
                        </button>
                        <button className="inline-flex items-center gap-2 hover:text-white transition-colors" onClick={getfromgoogleHandler}>
                          <img src="/icons/icon-playstore.svg" className="w-4 h-4" alt="Google Play Icon" loading="lazy" />
                          Google Play
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Web3 Lobby Card */}
                  <a href="https://lobby.magiccraft.io/" target="_blank" rel="noopener noreferrer" className="group rounded-md border border-white/10 bg-white/5 p-5 md:p-6 transition-all duration-300 hover:border-[#B591F2]/60 hover:bg-white/[0.07]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-[#B591F2]/20 border border-[#B591F2]/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#B591F2]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                          <line x1="12" y1="22.08" x2="12" y2="12"/>
                          <circle cx="12" cy="12" r="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg md:text-xl font-bold text-white">Join a Web3 Lobby</h4>
                        <p className="text-sm text-white/70">BTC, ETH, BNB & more.</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs text-[#B591F2]">Enter lobby <span aria-hidden="true">→</span></span>
                  </a>
                </div>
              </div>
            </div>
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
                  2025 – 2026
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div className=" grid max-w-[100vw] snap-x  snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-scroll  px-4 lg:max-w-screen-xl  lg:overflow-x-hidden">
                  {roadmapData.map((data) => (
                    <RoadmapCard data={data} key={data.quarter} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/*roadmap */}

          {/* Community Section */}
          <section className="relative py-12 md:py-16 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl">
            <div className="card-glass rounded-md border border-white/10 overflow-hidden">
              <div className="relative p-6 md:p-8 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#98FFF9]/5 via-transparent to-[#B591F2]/5"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent mb-2">
                      Join 400K+ Players
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto">
                      Connect with players worldwide, share strategies, and get exclusive updates.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <a
                      href="https://discord.gg/magiccraft"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-[#5865F2] hover:bg-[#4752C4] transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      <span className="font-semibold">Discord</span>
                    </a>
                    <a
                      href="https://t.me/magiccraftgamechat"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-[#0088cc] hover:bg-[#006699] transition-colors duration-200"
                    >
                      <LiaTelegramPlane className="w-5 h-5" />
                      <span className="font-semibold">Telegram</span>
                    </a>
                    <a
                      href="https://twitter.com/MagicCraftGame"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-black hover:bg-zinc-900 border border-white/10 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span className="font-semibold">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Removed duplicate 'Join the MagicCraft Ecosystem' section */}
          {/*our team */}
          <div className="h-auto bg-[#020418] p-10" id="team">
            <section className="relative mx-auto max-w-screen-xl space-y-10 p-4 md:space-y-20 min-h-screen">
              <h3 className="-mb-10 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text p-5 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                Our team
              </h3>
              <div className="flex items-center justify-center">
                <Tabs type="team">
                  <Tab id="ALL" label="ALL" className="w-full max-w-screen-xl">
                    <div className="w-full space-y-4">
                      <div className="relative my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {ourteam.slice(0, visibleCount).map((item, index) => (
                          <React.Fragment key={item.name}>
                            <div className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80">
                              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-[#7de6df] to-[#2aa9a9] shadow-[0_0_0_4px_rgba(0,0,0,0.25)]">
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
                              <p className="mt-2 text-white">{item.name}</p>
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
                          </React.Fragment>
                        ))}
                      </div>
                      {visibleCount < ourteam.length && (
                        <div className="mt-4 flex justify-center text-center">
                          <button
                            onClick={() => {
                              loadMore()
                              setTimeout(adjustDividerHeight, 0)
                            }}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur"
                          >
                            <img src={down} className="m-1" alt="Down arrow" />{' '}
                            Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>

                  <Tab
                    id="Advisors and KOL's"
                    label="Advisors and KOL's"
                    className="w-full max-w-screen-xl"
                  >
                    <div className="w-full space-y-4 ">
                      <div className="relative my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {kolTeam.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="max:w-[12.5em] max:h-[12.5em]"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
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
                      {visibleCount < kolTeam.length && (
                        <div className="mt-4 flex justify-center text-center">
                          <button
                            onClick={() => {
                              loadMore()
                            }}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur"
                          >
                            <img src={down} className="m-1" alt="Down arrow" />{' '}
                            Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>

                  <Tab id="Team" label="Team" className="w-full max-w-screen-xl">
                    <div className="w-full space-y-4 ">
                      <div className="relative my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {teamMembers.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="max:w-[12.5em] max:h-[12.5em]"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
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
                      {visibleCount < teamMembers.length && (
                        <div className="mt-4 flex justify-center text-center">
                          <button
                            onClick={() => {
                              loadMore()
                            }}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur"
                          >
                            <img src={down} className="m-1" alt="Down arrow" />{' '}
                            Load More
                          </button>
                        </div>
                      )}
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

