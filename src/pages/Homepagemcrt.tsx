import { useCallback, useEffect, useRef, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'
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
import { ArrowUpRight } from 'lucide-react'
import MagicraftDownload from '@/components/HomePageCard'
import Testimonial from '@/components/ui/testimonial'
import Partners from '@/components/Partners/Partners'
import { Helmet } from 'react-helmet-async'
import battleOne from '@/assets/images/legendary-battle-1.png'
import battleTwo from '@/assets/images/legendary-battle-2.webp'
import battleThree from '@/assets/images/legendary-battle-3.webp'
import bnbLogo from '../assets/icons/bnblogo.svg'
import { openTransactionModal } from '@xswap-link/sdk'
// Official $MCRT logo for token visuals
const mcrtLogo = 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp'
import ZeusPromo, { ZeusPromoPopup } from '@/components/ui/ZeusPromo'
import { Link } from 'react-router-dom'


function Homepagemcrt() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [visibleCount, setVisibleCount] = useState(16)
  const [currentSlide, setCurrentSlide] = useState(0)
  const TOTAL_SLIDES = 3

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
  const discordmagiccraftHandler = () => {
    window.location.href = 'https://t.me/magiccraftgamechat'
  }
  const telegrammagiccrftHandler = () => {
    window.location.href = 'https://t.me/magiccraftgamechat'
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
        {/* Zeus promo popup at the very top */}
        {/* Use ASCII-safe filename to avoid any browser path parsing issues */}
        <ZeusPromoPopup imageUrl={'/img/zeus-ss-1.png'} />
        <Header />
        <main className="md:-mt-[80px] scroll-smooth pb-20 w-full max-w-full overflow-x-hidden">
          {/*header*/}
          <section className="md:min-h-screen relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] bg-cover bg-center overflow-hidden w-full max-w-full">
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
            
            <div className="relative z-10 mx-auto max-w-screen-xl h-full w-full px-2 sm:px-4">
              <div className="grid h-full w-full grid-cols-1 place-items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
                <div className="w-full max-w-[25%] sm:max-w-[20%] md:w-full md:max-w-32 lg:max-w-36 animate-fade-in mt-4 sm:mt-6 md:mt-8 lg:mt-12 group">
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
                
                <div className="text-center gap-section animate-slide-up mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 px-4 sm:px-6 md:px-8">
                  <div className="flex justify-center mb-4 md:mb-6">
                    <img 
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"  
                      alt="MagicCraft Logo"
                      loading="eager"
                      className="w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto drop-shadow-xl"
                    />
                  </div>
                                    <h1 className="text-hero font-black max-w-4xl mx-auto tracking-wider drop-shadow-2xl leading-tight">
                    $MCRT THE CURRENCY OF GAMING
                </h1>
                  <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <a href="https://lobby.magiccraft.io/" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 hover:text-white hover:bg-white/15 transition">Earn</a>
                    <a href="/build-on-magiccraft" className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 hover:text-white hover:bg-white/15 transition">Create</a>
                    <a href="/grants" className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 hover:text-white hover:bg-white/15 transition">Grants</a>
                    <a href="https://app.magiccraft.io/pledging" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 hover:text-white hover:bg-white/15 transition">Pledge</a>
                    <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 hover:text-white hover:bg-white/15 transition">Spend</a>
                  </div>
                  <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2 sm:gap-3">
                    <button
                      onClick={openGameByDevice}
                      className="header-cta header-cta--play interactive-scale ripple-effect"
                      aria-label="Play MagicCraft now"
                    >
                      Play Now
                    </button>
                    <button
                      onClick={handleBuyMCRT}
                      className="cta-premium interactive-scale ripple-effect"
                      aria-label="Buy MCRT tokens"
                    >
                      Buy $MCRT
                    </button>
                  </div>
                  {/* Trust badges and community join */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-3 opacity-90">
                    <span className="text-[10px] sm:text-xs text-white/60">Trusted on</span>
                    <img src="/icons/icon-bybit.svg" alt="Bybit" className="h-4 sm:h-5 opacity-90" loading="lazy" />
                    <img src="/icons/icon-pancakeswap.svg" alt="PancakeSwap" className="h-4 sm:h-5 opacity-90" loading="lazy" />
                    <img src="/icons/icon-huobi.svg" alt="HTX" className="h-4 sm:h-5 opacity-90" loading="lazy" />
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
                    <a href="https://t.me/magiccraftgamechat" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-white/10 border border-white/15 text-white/90 hover:text-white hover:bg-white/15">Join Telegram</a>
                  </div>
                </div>
              </div>
              </div>
           
            {/* Download row moved below hero */}
          </section>

          {/* Download banner just below hero */}
          <div className="w-full max-w-full bg-gradient-to-b from-[#0a0524] via-[#050317] to-[#03082f] relative z-10 shadow-inner overflow-visible">
            <div className="mx-auto max-w-screen-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 w-full overflow-visible">
               <MagicraftDownload/>
            </div>
             </div>
          {/* Quick Stats strip for buyers */}
          <div className="w-full bg-gradient-to-r from-[#0B0F39] via-[#120e3d] to-[#0B0F39] border-t border-white/5">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-4 sm:py-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                <div className="card-glass px-3 py-2 rounded-xl text-center">
                  <div className="text-xs text-white/60">Community</div>
                  <div className="text-sm sm:text-base font-bold text-white">200k+</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-xl text-center">
                  <div className="text-xs text-white/60">Holders</div>
                  <div className="text-sm sm:text-base font-bold text-white">17,500+</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-xl text-center">
                  <div className="text-xs text-white/60">Downloads</div>
                  <div className="text-sm sm:text-base font-bold text-white">180,000</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-xl text-center">
                  <div className="text-xs text-white/60">New players / week</div>
                  <div className="text-sm sm:text-base font-bold text-white">6,000+</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-xl text-center">
                  <div className="text-xs text-white/60">Lobbies</div>
                  <div className="text-sm sm:text-base font-bold text-white">BTC, ETH, SOL</div>
                </div>
                <div className="card-glass px-3 py-2 rounded-xl text-center">
                  <div className="text-xs text-white/60">Exchanges</div>
                  <div className="text-sm sm:text-base font-bold text-white">Bybit, MEXC, HTX</div>
                </div>
              </div>
              <div className="mt-2 text-center text-xs sm:text-sm text-white/70">Circulating supply: <span className="font-semibold text-white">5,000,000,000 $MCRT</span></div>
            </div>
             </div>
           
          <section className="relative h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020418] via-[#0A0424] to-[#1a0d2e]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#98FFF9]/3 to-transparent"></div>
          
          <div className="relative z-10 mx-auto w-11/12 max-w-screen-xl">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left animate-slide-up">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <div className="text-white/90 mb-2 md:mb-4">
                      A NEW ERA IN GAMING
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent animate-gradient">
                      WITH MAGICCRAFT
                    </div>
                  </h3>
                  <p className="text-center text-lg md:text-xl lg:text-2xl opacity-90 md:text-left leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0">
                    MagicCraft is a Play-to-Earn blockchain game featuring
                    fast-paced multiplayer battles. Every day, thousands of
                    players earn our utility token, MCRT, by showcasing their
                    skills. Join them to step into a new era of gaming where
                    your prowess can pave the path to prosperity.
                  </p>
                  <p className="text-sm md:text-base text-[#98FFF9] max-w-2xl mx-auto lg:mx-0">
                    MCRT is MagicCraft's utility token - the currency of gaming in our ecosystem. Earn MCRT by
                    playing matches, creating maps and games with our Game Maker, participating in events, and through
                    pledging and marketplace activity.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-1 md:pt-2">
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 .9-4.5 4.3L18 20l-6-3.2L6 20l1.5-6.8L3 8.9 9 8l3-6z"/></svg>
                      <span className="text-xs md:text-sm">$MCRT: Currency of Gaming</span>
                </div>
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#B591F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm-1 5h2v5h4v2h-6V8z"/></svg>
                      <span className="text-xs md:text-sm">Prediction Markets</span>
                </div>
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#FFB649]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"/></svg>
                      <span className="text-xs md:text-sm">AI Gameplay Tech</span>
              </div>
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M6 8h12v8H6V8zm-2 8h16v2H4v-2zm2-10h12v2H6V6z"/></svg>
                      <span className="text-xs md:text-sm">Core MOBA Game</span>
                            </div>
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#B591F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      <span className="text-xs md:text-sm">200k+ Social Followers</span>
                          </div>
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#FFB649]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
                      <span className="text-xs md:text-sm">17,500+ Token Holders</span>
                            </div>
                    <div className="flex items-center gap-2 rounded-xl border border-[#98FFF9]/20 bg-black/20 px-3 py-2">
                      <svg className="w-4 h-4 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7h18v2H3V7zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"/></svg>
                      <span className="text-xs md:text-sm">4,700 NFTs Sold</span>
                    </div>
                            </div>
                            </div>
                <div className="flex w-full justify-center">
                  <button
                    onClick={registerHandler}
                    className="group rounded-xl md:rounded-2xl border-2 border-[#98FFF9] px-8 md:px-10 py-4 md:py-5 font-bold text-[#98FFF9] text-lg md:text-xl transition-all duration-300 hover:bg-[#98FFF9] hover:text-[#03082F] hover:shadow-lg hover:shadow-[#98FFF9]/30 hover:scale-105 min-h-[52px] min-w-[160px] relative overflow-hidden"
                  >
                    <span className="relative z-10">Register Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9] to-[#7de6df] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
              
              <div className="hidden xl:block animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/10 to-[#B591F2]/10 rounded-3xl blur-3xl"></div>
                  <div className="card-glass card-padding overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#98FFF9] to-[#7de6df] flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-[#03082F]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,4V1A1,1 0 0,1 2,0H5L11,6L14,6Z"/>
                        </svg>
                            </div>
                      <h4 className="text-card-title font-bold text-white mb-2">Join Thousands of Players</h4>
                      <p className="text-body text-gray-300">Experience epic MagicCraft gameplay</p>
                          </div>

                    {/* Gameplay Footage Carousel */}
                    <div className="relative w-full">
                      <div className="gameplay-carousel overflow-hidden rounded-xl bg-gradient-to-br from-[#1a0d2e] to-[#2A0D4E] h-[200px] md:h-[240px] lg:h-[280px] xl:h-[300px]">
                        <div className="gameplay-slides flex h-full transition-transform duration-500 ease-in-out" id="gameplaySlides" style={{ width: `${TOTAL_SLIDES * 100}%` }}>
                          {/* Slide 1 - Battle Image A */}
                          <div className="gameplay-slide flex-shrink-0 w-full h-full relative" style={{ flex: `0 0 ${100 / TOTAL_SLIDES}%`, width: `${100 / TOTAL_SLIDES}%` }}>
                            <div className="relative overflow-hidden h-full">
                              <img 
                                src={battleOne}
                                alt="MagicCraft Battle"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                              {/* removed overlay text/badges */}
                            </div>
                            </div>

                          {/* Slide 2 - Legendary Battle 2 */}
                          <div className="gameplay-slide flex-shrink-0 w-full h-full relative" style={{ flex: `0 0 ${100 / TOTAL_SLIDES}%`, width: `${100 / TOTAL_SLIDES}%` }}>
                            <div className="relative overflow-hidden h-full">
                              <img 
                                src={battleTwo}
                                alt="MagicCraft Legendary Battle"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                              {/* removed overlay text/badges */}
                            </div>
                            </div>

                          {/* Slide 3 - Legendary Battle 3 */}
                          <div className="gameplay-slide flex-shrink-0 w-full h-full relative" style={{ flex: `0 0 ${100 / TOTAL_SLIDES}%`, width: `${100 / TOTAL_SLIDES}%` }}>
                            <div className="relative overflow-hidden h-full">
                              <img 
                                src={battleThree}
                                alt="MagicCraft Legendary Battle"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                              {/* removed overlay text/badges */}
                          </div>
                        </div>
                      </div>
                    </div>
                            </div>

                                            {/* Carousel Controls */}
                      <div className="flex justify-center gap-2 mt-4">
                        <button className="carousel-dot w-2 h-2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/60 active" data-slide="0"></button>
                        <button className="carousel-dot w-2 h-2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/60" data-slide="1"></button>
                        <button className="carousel-dot w-2 h-2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/60" data-slide="2"></button>
                          </div>

                      {/* Auto-play indicator */}
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <div className="w-1 h-1 bg-[#98FFF9] rounded-full animate-pulse"></div>
                        <span className="text-xs text-white/60">Auto-playing</span>
                            </div>
                            </div>
                            </div>
                            </div>
                          </div>
                        </div>
        </section>

        {/* What you can do with $MCRT */}
        <section id="utility" className="relative py-10 sm:py-12 md:py-16 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 overflow-visible">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">What you can do with $MCRT</h3>
            <p className="text-gray-300 text-base md:text-lg mt-2">Earn, create, pledge and spend across the MagicCraft ecosystem.</p>
                      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-visible">
            <a id="earn" href="https://lobby.magiccraft.io/" className="card-glass card-padding block hover:scale-[1.02] transition relative group z-10 hover:z-50" rel="noreferrer noopener" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#98FFF9]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 .9-4.5 4.3L18 20l-6-3.2L6 20l1.5-6.8L3 8.9 9 8l3-6z"/></svg>
                    </div>
                <h4 className="text-lg md:text-xl font-bold">Earn in PvP</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Win matches and tournaments to earn $MCRT.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">$MCRT rewards flow from PvP wins and events into your in-game balance.</p>
              </div>
            </a>
            <a id="create" href="/build-on-magiccraft" className="card-glass card-padding block hover:scale-[1.02] transition relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#B591F2]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#B591F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14v6h6l10-10-6-6L4 14zm11-9l3 3"/></svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold">Create with Game Maker</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Build modes and maps; earn per player.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">Creators earn $MCRT when players engage with their maps and experiences.</p>
              </div>
            </a>
            <a id="grants" href="/grants" className="card-glass card-padding block hover:scale-[1.02] transition relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#98FFF9]/20 flex items-center justify-center">
                  <img src="/icons/icon-bounty.svg" alt="Grants" className="w-5 h-5 opacity-90" />
                </div>
                <h4 className="text-lg md:text-xl font-bold">Apply for Grants</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Games, Web3/AI, Crypto — with $MCRT integration.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">Submit your project with a working build. $MCRT‑aligned projects are prioritized.</p>
              </div>
            </a>
            <a id="refer" href="https://lobby.magiccraft.io/referral" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block hover:scale-[1.02] transition relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFB649]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FFB649]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 11a3 3 0 100-6 3 3 0 000 6z"/>
                    <path d="M8 11a3 3 0 100-6 3 3 0 000 6z"/>
                    <path d="M2 19v-1.5C2 15.57 5.13 14 8 14s6 1.57 6 3.5V19H2z"/>
                    <path d="M21 16l-3-3v2h-2v2h2v2l3-3z"/>
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold">Refer and Earn</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Invite friends. Earn a share of their lobby winnings.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">Earn a percentage of referees' $MCRT earnings from eligible lobbies.</p>
              </div>
            </a>
            <a id="spend" href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block hover:scale-[1.02] transition relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#7de6df]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7de6df]" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h-2l-3 7v2h2l3-7h10l3 7h2v-2l-3-7h-12zm-1 13c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h-12z"/></svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold">Spend in Marketplace</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Buy and sell assets using $MCRT.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">Use $MCRT to acquire items and utilities that unlock in-game benefits.</p>
              </div>
            </a>
          </div>
        </section>

        {/* Genesis NFTs — Earnings Tiers */}
        <GenesisNFTs />

        {/* Guilds teaser */}
        <section className="mt-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-section-title">Guilds</h2>
              <Link to="/guilds" className="chip-cta">Explore</Link>
            </div>
            <p className="mt-2 text-white/80 max-w-2xl">Join or create a guild, coordinate with your community, and climb the leaderboard.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <a href="https://t.me/magiccraftgamechat/769960" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-4 md:p-5 min-h-[100px] group hover:-translate-y-0.5 transition">
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="flex items-center gap-3 flex-1 overflow-hidden">
                    <img src="/icons/icon-community.svg" alt="Telegram" className="h-7 w-7 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60 truncate">Community</p>
                      <p className="text-white font-semibold text-sm">Submit Guild</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-auto">
                    <span className="inline-block chip-cta px-3 py-1 text-xs">Open</span>
                  </div>
                </div>
              </a>
              <a href="https://lobby.magiccraft.io/leaderboard" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-4 md:p-5 min-h-[100px] group hover:-translate-y-0.5 transition">
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="flex items-center gap-3 flex-1 overflow-hidden">
                    <img src="/icons/icon-leaderboard.svg" alt="Leaderboard" className="h-7 w-7 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60 truncate">Competitive</p>
                      <p className="text-white font-semibold text-sm">Guild Leaderboard</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-auto">
                    <span className="inline-block chip-cta px-3 py-1 text-xs">View</span>
                  </div>
                </div>
              </a>
              <a href="https://lobby.magiccraft.io/" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-4 md:p-5 min-h-[100px] group hover:-translate-y-0.5 transition">
                <div className="flex w-full items-center justify-between gap-2">
                  <div className="flex items-center gap-3 flex-1 overflow-hidden">
                    <img src="/icons/icon-gamestats.svg" alt="Lobbies" className="h-7 w-7 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/60 truncate">Earn</p>
                      <p className="text-white font-semibold text-sm">Web3 Lobbies</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-auto">
                    <span className="inline-block chip-cta px-3 py-1 text-xs">Enter</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contract Address */}
        <section className="relative py-8 md:py-12 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0">
          <div className="card-glass card-padding">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-lg md:text-xl font-bold">$MCRT Contract (BSC)</h4>
                <div className="mt-1 flex items-center gap-2 text-xs md:text-sm text-white/80">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 border border-white/15">BEP-20</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 border border-white/15">Chain: BNB Smart Chain</span>
                </div>
                <div className="mt-2 font-mono text-[11px] md:text-sm break-all">0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f</div>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => navigator.clipboard.writeText('0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f')} className="btn-secondary text-xs">Copy</button>
                  <a href="https://bscscan.com/token/0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f" target="_blank" rel="noreferrer noopener" className="btn-primary text-xs">View on BscScan</a>
                </div>
              </div>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f`}
                alt="$MCRT contract QR"
                className="w-24 h-24 rounded-md border border-white/10"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            <span className="text-xs text-white/70">Traded on:</span>
            <img src="/icons/icon-bybit.svg" alt="Bybit" className="h-5 opacity-90" loading="lazy" />
            <img src="/icons/icon-pancakeswap.svg" alt="PancakeSwap" className="h-5 opacity-90" loading="lazy" />
            <img src="/icons/icon-huobi.svg" alt="Huobi" className="h-5 opacity-90" loading="lazy" />
          </div>
        </section>

        {/* Ecosystem Hub */}
        <section className="relative py-8 md:py-12 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 overflow-visible">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">MagicCraft Ecosystem</h3>
            <p className="text-gray-300 text-base md:text-lg mt-2">Explore everything powered by $MCRT.</p>
          </div>

          {/* Core actions (with hover tooltips) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-visible">
            <a href="https://coinmarketcap.com/currencies/magiccraft/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-currency.svg" alt="CoinMarketCap" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">$MCRT on CoinMarketCap</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Price, market cap, supply details.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  Track $MCRT in real-time: price, market cap, circulating supply, 24h volume, and contract verification.
                  Useful for understanding token health, exchange liquidity, and long-term trend context.
                </p>
              </div>
            </a>
            <a href="https://magiccraft.io/download" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-gamepad.svg" alt="Game" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Cross-Platform Game</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Play on PC, iOS, Android, Steam.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  One account across iOS, Android, PC, and Steam. Earn $MCRT from PvP and events; spend on passes,
                  cosmetics, and lobbies. Secure anti‑cheat, seasonal content, and synched progression.
                </p>
              </div>
            </a>
            <a href="https://lobby.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-leaderboard.svg" alt="Lobbies" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Crypto Lobbies</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">BTC, ETH, BNB & more.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  Token‑themed maps (BTC/ETH/BNB/XRP/SOL/MCRT). Win to earn. VIP lobbies, referrals, and seasonal
                  leaderboards enhance rewards. Completed integrations include BTC/USDT/BNB/ETH/XRP/SOL.
                </p>
              </div>
            </a>
            <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-marketplace.svg" alt="Marketplace" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">NFT Marketplace</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Trade assets and utilities.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  Spend $MCRT on skins, characters, and utilities. On‑chain provenance, creator royalties, and upcoming
                  crafting/NFT‑crafting support with a Craft & Sell marketplace.
                </p>
              </div>
            </a>
            <a href="/build-on-magiccraft" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-pc.svg" alt="Game Maker" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Game Maker</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Build maps and modes.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  Build and publish to Steam. Earn $MCRT from playtime and engagement. Utilize Vibe Coding, AI‑assisted
                  assets (Nano Banana weapon skins), and upcoming APIs/SDKs for deeper integrations.
                </p>
              </div>
            </a>
            <a href="/grants" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-bounty.svg" alt="Grants" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Grants</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Apply with a working build; $MCRT prioritized.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  Games, Web3/AI, and Crypto projects welcome. Integrate $MCRT for preference.
                </p>
              </div>
            </a>
            <a href="https://lobby.magiccraft.io/referral" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
              <div className="flex items-center gap-3 mb-1">
                <img src="/icons/icon-contact.svg" alt="Referral" className="w-5 h-5 opacity-90" />
                <h4 className="text-lg md:text-xl font-bold">Referral</h4>
              </div>
              <p className="text-base md:text-lg text-gray-300">Invite friends and earn.</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                <p className="text-base md:text-[17px] text-white leading-relaxed">
                  Share your link and receive a percentage of referees' eligible $MCRT winnings. Tiered rewards and
                  seasonal bonuses encourage long‑term growth.
                </p>
              </div>
            </a>
          </div>

          {/* More in the Ecosystem */}
          <details className="mt-4 md:mt-6">
            <summary className="mx-auto inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 cursor-pointer select-none bg-black/20 hover:bg-black/30">
              More in the Ecosystem
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
              <a href="https://bitmarket.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-stats.svg" alt="Bitmarket" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Bitmarket (Testnet)</h4>
                </div>
                <p className="text-sm text-gray-300">Prediction markets for matches.</p>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                  <p className="text-base md:text-[17px] text-white leading-relaxed">Place predictions on match outcomes and trade positions on testnet while mainnet launches. On-chain settlement previews with low-stakes play.</p>
                </div>
              </a>
              <a href="https://games.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-gamepad.svg" alt="Mini-games" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Mini-games</h4>
                </div>
                <p className="text-sm text-gray-300">Web3 mini titles.</p>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                  <p className="text-base md:text-[17px] text-white leading-relaxed">Instant-play browser games with quick sessions. Wallet integration, seasonal events, and on-chain scores coming soon.</p>
                </div>
              </a>
              <a href="https://app.magiccraft.io/nft_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-nft-new.svg" alt="Mint NFTs" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Mint Utility NFTs</h4>
                </div>
                <p className="text-sm text-gray-300">Genesis & Revelation.</p>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                  <p className="text-base md:text-[17px] text-white leading-relaxed">Mint Genesis and Revelation utility NFTs that unlock gameplay perks, boosts, access, and future crafting utilities.</p>
                </div>
              </a>
              <a href="https://app.magiccraft.io/free_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-nft-new.svg" alt="Free NFTs" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">Free NFT Collections</h4>
                </div>
                <p className="text-sm text-gray-300">Vega, Davinci & more.</p>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                  <p className="text-base md:text-[17px] text-white leading-relaxed">Claim limited free collections such as Vega and Davinci. Own them for use in-game and future ecosystem utilities (gas fees may apply).</p>
                </div>
              </a>
              <a href="https://app.magiccraft.io/dao" target="_blank" rel="noreferrer noopener" className="card-glass card-padding block relative group z-10 hover:z-50" style={{ overflow: 'visible' }}>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-community.svg" alt="DAO" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">DAO</h4>
                </div>
                <p className="text-sm text-gray-300">Participate in governance.</p>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                  <p className="text-base md:text-[17px] text-white leading-relaxed">Vote on proposals, shape game features, and direct treasury initiatives. Governance designed for players and creators.</p>
                </div>
              </a>
              <div className="card-glass card-padding block opacity-60 relative group z-10" style={{ overflow: 'visible' }}>
                <div className="flex items-center gap-3 mb-1">
                  <img src="/icons/icon-help.svg" alt="NFT Rentals" className="w-5 h-5 opacity-90" />
                  <h4 className="font-bold">NFT Rentals</h4>
                </div>
                <p className="text-sm text-gray-300">Coming soon.</p>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-96 rounded-xl border border-[#98FFF9]/50 bg-[#0B0F39] backdrop-blur-sm p-4 shadow-2xl z-[99999]">
                  <p className="text-base md:text-[17px] text-white leading-relaxed">Peer‑to‑peer NFT lending so players can rent items and creators earn yield. Launching after utility updates.</p>
                </div>
              </div>
            </div>
          </details>
        </section>

        {/* Sticky mobile bottom bar */}
        <div className="fixed bottom-2 inset-x-2 md:hidden z-50 safe-padded">
          <div className="rounded-2xl bg-[#0B0F39]/80 backdrop-blur border border-white/10 shadow-2xl p-2 flex items-center justify-between gap-2">
            <a href="https://lobby.magiccraft.io/" rel="noreferrer noopener" className="flex-1 inline-flex items-center justify-center h-11 rounded-xl text-white bg-gradient-to-b from-[#6b3db2] to-[#41207a] border border-white/15">Play</a>
            <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" rel="noreferrer noopener" className="flex-1 inline-flex items-center justify-center h-11 rounded-xl text-[#03082F] font-black bg-gradient-to-b from-[#98FFF9] to-[#B591F2]">Buy</a>
          </div>
        </div>
        <section className="relative py-12 md:py-16">
          <div className="mx-auto w-11/12 max-w-screen-xl">
            <Testimonial />
            </div>
          </section>
          
         <section id="gameplay">
          <GamePlay />
        </section>

          {/* Exchanges/Partners elevated */}
          <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 mb-8 sm:mb-10 md:mb-14 lg:mb-16 px-1 sm:px-2 md:px-0 overflow-x-hidden">
            <Partners />
          </section>

          {/* Game Maker Banner */}
          <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl mb-4 md:mb-8 px-1 sm:px-2 md:px-0 overflow-x-hidden">
            <div className="card-gradient overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5"></div>
              <div className="relative card-padding gap-card">
                <div className="text-center gap-element">
                  <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                    BUILD GAMES WITH GAME MAKER
                  </h3>
                  <p className="text-body-large text-gray-300 max-w-4xl mx-auto">
                    Like Roblox, create your own games and maps! Earn <span className="text-[#98FFF9] font-bold">$MCRT tokens</span> for every player who enjoys your creations. 
                    Build, share, and monetize your gaming ideas in the MagicCraft ecosystem.
                  </p>
                </div>
                      
                      <div className="relative h-auto">
                      {/* Desktop/tablet banner - horizontal */}
                      <img
                        src="http://res.cloudinary.com/dfzcr2ch4/image/upload/v1753800048/rksbqhjxphkaeoooqolq.webp"
                        alt="Game Maker banner"
                    className="hidden md:block w-full h-auto object-cover rounded-xl md:rounded-2xl shadow-2xl"
                    loading="lazy"
                      />
                      {/* Mobile banner - vertical */}
                      <img
                        src="http://res.cloudinary.com/dfzcr2ch4/image/upload/v1754042773/vtnxmvnugebfblvkabwk.webp"
                        alt="Game Maker banner"
                    className="block md:hidden w-full h-auto object-cover rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  
                  {/* Enhanced content overlay: static on mobile, absolute on md+ */}
                  <div className="md:absolute md:inset-0 flex flex-col md:justify-end md:items-end p-3 md:p-6 lg:p-8 xl:p-12 mt-3 md:mt-0 md:pointer-events-none">
                    <div className="space-y-3 md:space-y-4 md:text-right text-center bg-black/60 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#98FFF9]/20 shadow-2xl max-w-full md:max-w-none pointer-events-auto mx-auto md:mx-0">
                      <h1 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                          GAME MAKER
                        </h1>
                      <div className="text-xs md:text-sm text-gray-200 space-y-1 md:space-y-2 max-w-[260px] md:max-w-[250px] mx-auto md:mx-0">
                        <p className="flex items-center gap-2">
                          <span className="text-[#98FFF9]">•</span> Create games like Roblox
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-[#FFB649]">•</span> Earn $MCRT per player
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-[#B591F2]">•</span> Monetize your creativity
                        </p>
                      </div>
                      <Link 
                        to="/build-on-magiccraft" 
                        className="btn-primary gap-2 mx-auto md:mx-0"
                      >
                        Start Building
                        <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Zeus NFT promo */}
          <ZeusPromo />

          

          {/* Token Info: $BNB and $MCRT */}
          <section className="py-6 sm:py-8 md:py-12 lg:py-16 relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 overflow-visible">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#98FFF9]/3 to-transparent rounded-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B591F2]/10 rounded-full blur-3xl"></div>
            
            {/* Section Header */}
            <div className="relative text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#98FFF9] to-[#B591F2] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                  DUAL TOKEN ECOSYSTEM
                </h3>
              </div>
              <p className="text-body-large text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the power of two tokens: earn <span className="text-[#98FFF9] font-semibold">$MCRT</span> through gameplay and compete for <span className="text-[#F3BA2F] font-semibold">$BNB</span> rewards in our exclusive lobbies
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* BNB Card - Enhanced */}
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F3BA2F]/20 to-[#FFB649]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                
                <div className="relative card-glass card-padding overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <img src={bnbLogo} alt="" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3BA2F] to-[#FFB649] p-3 shadow-lg">
                      <img src={bnbLogo} alt="BNB" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-card-title font-serif font-bold bg-gradient-to-r from-[#F3BA2F] to-[#FFB649] bg-clip-text text-transparent">$BNB</h4>
                      <p className="text-small text-[#F3BA2F]/80">Binance Smart Chain</p>
                    </div>
                  </div>

                  <p className="text-body text-gray-300 mb-6">
                    BNB is the native token of Binance and the gas token of BNB Smart Chain. It powers
                    transactions, smart contracts, and DeFi apps. Our BNB Lobby lets players compete for
                    BNB rewards directly inside MagicCraft.
                  </p>

                  {/* Features with icons */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#F3BA2F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-body text-white/90">Gas token on BNB Smart Chain (BSC)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#F3BA2F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-body text-white/90">Used for fees, staking, and ecosystem utilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#F3BA2F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-body text-white/90">New BNB Lobby: play and win BNB</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://www.binance.com/en/price/bnb" target="_blank" rel="noopener noreferrer" className="btn-secondary text-small flex-1 min-w-[140px] text-center">
                      About BNB
                    </a>
                    <a href="https://lobby.magiccraft.io/?crypto=bnb" target="_blank" rel="noopener noreferrer" className="btn-primary text-small flex-1 min-w-[140px] text-center">
                      Play BNB Lobby
                        </a>
                      </div>
                    </div>
                  </div>

              {/* MCRT Card - Enhanced */}
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#98FFF9]/20 to-[#B591F2]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                
                <div className="relative card-glass card-padding overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <img src={mcrtLogo} alt="MCRT logo" className="w-full h-full object-contain" loading="lazy" />
                </div>
                  
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#98FFF9] to-[#B591F2] p-1.5 shadow-lg flex items-center justify-center">
                      <img src={mcrtLogo} alt="$MCRT" className="w-14 h-14 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-card-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">$MCRT</h4>
                      <p className="text-small text-[#98FFF9]/80">MagicCraft Utility Token</p>
                    </div>
                  </div>

                  <p className="text-body text-gray-300 mb-6">
                    MCRT is MagicCraft's utility token - the currency of gaming in our ecosystem. Earn MCRT by
                    playing matches, creating maps and games with our Game Maker, participating in events, and through
                    pledging and marketplace activity.
                  </p>

                  {/* Features with icons */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#98FFF9]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#98FFF9]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-body text-white/90">Rewards for PvP matches and tournaments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#98FFF9]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#98FFF9]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-body text-white/90">Creator economy: earn from maps, modes, and assets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#98FFF9]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#98FFF9]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-body text-white/90">Ecosystem utility: pledging, marketplace, VIP lobbies</span>
                    </div>
                  </div>

                  {/* Enhanced Price widgets section */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#98FFF9] to-[#B591F2] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V10L14 4H6z"/>
                          </svg>
                        </div>
                        <h5 className="text-lg font-bold bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">Live $MCRT Data</h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#98FFF9] rounded-full animate-pulse"></div>
                        <span className="text-xs text-[#98FFF9]/80 font-medium">Real-time</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="relative group">
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#98FFF9]/10 to-[#B591F2]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                        
                        {/* Widget container - borderless, clean */}
                        <div className="relative bg-gradient-to-br from-[#0B0F39]/80 to-[#1a1344]/80 rounded-2xl px-2 pt-3 pb-2 transition-all duration-300 overflow-hidden backdrop-blur-sm min-h-[120px]">
                          <coingecko-coin-ticker-widget coin-id="magiccraft" currency="usd" locale="en" background-color="#0B0F39" font-color="#FFFFFF" border-color="#2A2F63"></coingecko-coin-ticker-widget>
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <div className="flex items-center justify-between py-2 px-1">
                          <span className="text-sm text-white/80">Price Chart</span>
                          <span className="text-xs text-[#98FFF9]/80">Real-time</span>
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#B591F2]/10 to-[#98FFF9]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                        {/* Widget container - borderless, clean */}
                        <div className="relative bg-gradient-to-br from-[#0B0F39]/80 to-[#1a1344]/80 rounded-2xl px-2 pt-3 pb-2 transition-all duration-300 overflow-hidden backdrop-blur-sm min-h-[260px]">
                          <coingecko-coin-price-chart-widget coin-id="magiccraft" currency="usd" height="260" locale="en" background-color="#0B0F39" font-color="#FFFFFF" border-color="#2A2F63"></coingecko-coin-price-chart-widget>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action buttons */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-[#98FFF9]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span className="text-sm font-medium text-white/90">Get Started with $MCRT</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a href="https://coinmarketcap.com/currencies/magiccraft/" target="_blank" rel="noopener noreferrer" 
                         className="group relative overflow-hidden rounded-xl border border-[#98FFF9]/30 bg-gradient-to-r from-[#98FFF9]/10 to-[#B591F2]/10 px-6 py-4 text-center transition-all duration-300 hover:border-[#98FFF9]/50 hover:shadow-lg hover:shadow-[#98FFF9]/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 text-[#98FFF9]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span className="text-sm font-medium text-white">View on CMC</span>
                        </div>
                      </a>
                      <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noopener noreferrer" 
                         className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#98FFF9]/30 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 text-[#03082F]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 14l5-5 5 5z"/>
                          </svg>
                          <span className="text-sm font-bold text-[#03082F]">Trade on Bybit</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Where to buy $MCRT micro-section */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="card-glass rounded-2xl p-4 md:p-5 min-h-[100px] group hover:-translate-y-0.5 transition">
                      <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noopener noreferrer" className="flex w-full h-full items-center justify-between gap-2">
                        <div className="flex items-center gap-3 flex-1 overflow-hidden">
                          <img src="/icons/icon-bybit.svg" alt="Bybit" className="h-7 w-7 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-white/60 truncate">Centralized Exchange</p>
                            <p className="text-white font-semibold text-sm">Bybit</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-auto">
                          <span className="inline-block chip-cta px-3 py-1 text-xs">Trade</span>
                        </div>
                      </a>
                    </div>
                    <div className="card-glass rounded-2xl p-4 md:p-5 min-h-[100px] group hover:-translate-y-0.5 transition">
                      <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noopener noreferrer" className="flex w-full h-full items-center justify-between gap-2">
                        <div className="flex items-center gap-3 flex-1 overflow-hidden">
                          <img src="/icons/icon-pancakeswap.svg" alt="PancakeSwap" className="h-7 w-7 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-white/60 truncate">DEX (BSC)</p>
                            <p className="text-white font-semibold text-sm">PancakeSwap</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-auto">
                          <span className="inline-block chip-cta px-3 py-1 text-xs">Swap</span>
                        </div>
                      </a>
                    </div>
                    <div className="card-glass rounded-2xl p-4 md:p-5 min-h-[100px] group hover:-translate-y-0.5 transition">
                      <a href="https://track.swipelux.com/?api-key=c2c64eeb-d657-4692-99de-568f1c822c12" target="_blank" rel="noopener noreferrer" className="flex w-full h-full items-center justify-between gap-2">
                        <div className="flex items-center gap-3 flex-1 overflow-hidden">
                          <svg className="h-7 w-7 text-[#98FFF9] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V6l9-4zm0 4.2L6 8v3.8c0 3.8 2.7 7.3 6 8.3 3.3-1 6-4.5 6-8.3V8l-6-1.8z"/></svg>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-white/60 truncate">Card Onramp</p>
                            <p className="text-white font-semibold text-sm">Buy with card</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-auto">
                          <span className="inline-block chip-cta px-3 py-1 text-xs">Buy</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*JOIN THE ACTION */}
          <section className="flex justify-center bg-center p-4 md:p-6 lg:mt-4 lg:mb-8">
            <div className="relative max-w-7xl w-full rounded-3xl md:rounded-4xl bg-gradient-to-br from-[#0A0424] via-[#1a0d2e] to-[#2A0D4E] border border-[#B591F2]/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5 rounded-3xl md:rounded-4xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#98FFF9]/2 to-transparent"></div>
              <div className="relative space-y-6 md:space-y-8 px-6 md:px-10 pb-8 md:pb-12 pt-6 md:pt-10">
                <div className="text-center space-y-3 md:space-y-4">
                  <h5 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  JOIN THE ACTION, EARN MCRT
                </h5>
                  <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                  Jump into MagicCraft matches and compete to win MCRT. Showcase
                    your skills, claim your rewards, and rise through the ranks.
                  Start your journey to gaming glory now!
                </p>
                        </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                  {/* Register Card */}
                  <div className="group overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#B591F2] to-[#98FFF9] p-px transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#B591F2]/30">
                    <div className="relative h-full w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#3D186D] to-[#2A0D4E] cursor-pointer overflow-hidden" onClick={registerHandler}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8EFF49]/5 to-transparent"></div>
                      <div className="relative flex flex-col items-center p-6 md:p-8">
                        <div className="flex-shrink-0 mb-4 md:mb-6">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8EFF49] to-[#6BCF3A] blur-lg opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                            {/* Main icon container */}
                            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#8EFF49] to-[#6BCF3A] flex items-center justify-center shadow-lg shadow-[#8EFF49]/30 group-hover:shadow-xl group-hover:shadow-[#8EFF49]/40 transition-all duration-300 border border-[#8EFF49]/20 group-hover:border-[#8EFF49]/40">
                              {/* Inner highlight */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                              <svg 
                                className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#03082F] drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                                <path d="M16 11l2 2 4-4"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="text-center space-y-2 md:space-y-3">
                          <h4 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold">
                            <span className="text-[#8EFF49]">REGISTER</span>
                            <br /> AN $MCRT <br /> ACCOUNT
                          </h4>
                          <p className="text-sm md:text-base text-gray-300">Start earning $MCRT today!</p>
                        </div>
                      </div>
                      <div className="absolute -bottom-8 md:-bottom-10 right-3 bg-gradient-to-b from-white/15 to-transparent bg-clip-text font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-transparent group-hover:from-white/20 transition-all duration-300">
                        1
                      </div>
                    </div>
                  </div>

                  {/* Download Card */}
                  <div className="group overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#FFB649] to-[#B591F2] p-px transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFB649]/30">
                    <div className="relative h-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#2A0D4E] to-[#57186D] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB649]/5 to-transparent"></div>
                      <div className="relative p-6 md:p-8">
                        <div className="text-center mb-6 md:mb-8">
                          <h4 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold">
                            <span className="text-[#FFB649]">DOWNLOAD</span>
                            <br /> THE GAME
                      </h4>
                        </div>

                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          <button
                            className="group/btn flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-black/30 hover:bg-black/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFB649]/20 border border-[#FFB649]/20 hover:border-[#FFB649]/40"
                          onClick={playonsteamHandler}
                        >
                            <img src={steam} className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3" alt="Steam Icon" loading="lazy" />
                            <span className="text-xs md:text-sm font-medium text-white">Steam</span>
                          </button>

                          <button
                            className="group/btn flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-black/30 hover:bg-black/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFB649]/20 border border-[#FFB649]/20 hover:border-[#FFB649]/40"
                          onClick={playonappleHandler}
                        >
                            <img src={AppleIcon} className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3" alt="Apple Icon" loading="lazy" />
                            <span className="text-xs md:text-sm font-medium text-white">App Store</span>
                          </button>

                          <button
                            className="group/btn flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-black/30 hover:bg-black/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFB649]/20 border border-[#FFB649]/20 hover:border-[#FFB649]/40"
                          onClick={getfromgoogleHandler}
                        >
                            <img src="/icons/icon-playstore.svg" className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3" alt="Google Play Icon" loading="lazy" />
                            <span className="text-xs md:text-sm font-medium text-white">Google Play</span>
                          </button>
                      </div>
                      </div>
                      <div className="absolute -bottom-8 md:-bottom-10 right-3 bg-gradient-to-b from-white/15 to-transparent bg-clip-text font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-transparent group-hover:from-white/20 transition-all duration-300">
                        2
                      </div>
                    </div>
                  </div>

                  {/* Web3 Lobby Card */}
                  <div className="group overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#FF49ED] to-[#B591F2] p-px transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF49ED]/30">
                    <a href="https://lobby.magiccraft.io/" target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="relative h-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#57186D] to-[#2A0D4E] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF49ED]/5 to-transparent"></div>
                        <div className="relative flex flex-col items-center p-6 md:p-8">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4 md:mb-6">
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF49ED] to-[#B591F2] blur-lg opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                            {/* Main icon container */}
                            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#FF49ED] to-[#B591F2] flex items-center justify-center shadow-lg shadow-[#FF49ED]/30 group-hover:shadow-xl group-hover:shadow-[#FF49ED]/40 transition-all duration-300 border border-[#FF49ED]/20 group-hover:border-[#FF49ED]/40">
                              {/* Inner highlight */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                              <svg 
                                className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#03082F] drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                                <circle cx="12" cy="12" r="2"/>
                              </svg>
                            </div>
                          </div>
                          <div className="text-center space-y-2 md:space-y-3">
                            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold">
                              <span className="text-[#FF49ED]">JUMP</span> INTO
                              <br />A WEB3 <br />
                              LOBBY
                            </h3>
                            <p className="text-sm md:text-base text-gray-300">Join crypto battles & earn rewards</p>
                          </div>
                        </div>
                        <div className="absolute -bottom-8 md:-bottom-10 right-3 bg-gradient-to-b from-white/15 to-transparent bg-clip-text font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-transparent group-hover:from-white/20 transition-all duration-300">
                          3
                        </div>
                      </div>
                    </a>
                  </div>
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
                  2025
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

          {/*connect */}
          <section className="relative m-[10em] mx-auto flex w-11/12 max-w-screen-xl flex-wrap items-center justify-center space-y-10 md:space-y-20 lg:space-y-0  ">
            <div className=" relative rounded-2xl border-[2px] border-solid bg-opacity-70 bg-gradient-to-r from-[#173B52] to-[#557e91] to-80% p-4 lg:h-[280px] lg:w-5/12 ">
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173208/blahbla_wvvyzg.webp"
                className="absolute -top-10 right-0     block h-[400px] rounded-lg object-cover  md:hidden "
                alt="blahbla"
              />

              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173208/character_imeoab.webp"
                alt="character"
                className="  absolute  inset-0 -top-20  left-[200px] hidden rounded-lg  object-cover p-10 md:block  md:w-7/12 lg:w-[350px]  "
              />
              <div className=" p-4 text-left ">
                <h3 className=" mt-40 bg-gradient-to-b from-white to-white/75  bg-clip-text font-serif text-4xl text-transparent drop-shadow-xl md:mt-10 md:text-5xl  lg:mt-0 lg:text-3xl ">
                  <p>CONNECT,</p>
                  <p>COLLABORATE,</p>
                  <p>CONQUER</p>
                </h3>
                <div className="m-2 block  h-px w-5/12 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />
                <p className="p-2 text-[#98FFF9] font-serif font-bold md:text-2xl">join us!</p>
                <p className="block md:mt-40  lg:hidden ">
                  Step into a world where gamers thrive together! Join our
                  Discord and Telegram channels to connect with players
                  worldwide, share strategies, and receive exclusive updates and
                  support. Be part of a community that plays, earns, and grows
                  together.
                </p>
                <div
                  className=" block flex-row flex-wrap items-center lg:hidden"
                  onClick={discordmagiccraftHandler}
                >
                  <div className="flex flex-wrap  ">
                    <img src={pc} alt="PC Icon" className="m-4"></img>
                    <span className="mt-4 text-2xl ">
                      Join MagicCraft's
                      <br />
                      <p className="text-2xl font-bold"> Discord</p>
                    </span>
                  </div>
                  <div className="hidden h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent md:block " />
                  <div
                    className="flex flex-wrap "
                    onClick={telegrammagiccrftHandler}
                  >
                    {/* <img src={AppleIcon} className=" m-4"></img> */}
                    <LiaTelegramPlane
                      style={{ width: '2em', height: '3em', margin: '10px' }}
                    />

                    <span className="mt-4 text-2xl ">
                      Join MagicCraft's
                      <br />
                      <p className="text-2xl font-bold"> Telegram</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" hidden w-5/12  rounded-2xl bg-[#08061C] bg-opacity-70 px-10 pt-10  lg:block">
              <p>
                Step into a world where gamers thrive together! Join our Discord
                and Telegram channels to connect with players worldwide, share
                strategies, and receive exclusive updates and support. Be part
                of a community that plays, earns, and grows together.
              </p>
              <div className="flex flex-wrap items-center">
                <img src={pc} alt="PC Icon"></img>
                <span
                  className=" cursor-pointer p-4"
                  onClick={discordmagiccraftHandler}
                >
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Discord</p>
                </span>

                <div className="mx-4 block h-[4em] w-[2px] bg-gradient-to-t from-transparent via-[#2F3A80] to-transparent " />
                {/* <img src={AppleIcon} className=" pl-4"></img> */}
                <LiaTelegramPlane style={{ width: '2em', height: '3em' }} />
                <span
                  className=" cursor-pointer p-4"
                  onClick={telegrammagiccrftHandler}
                >
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Telegram</p>
                </span>
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
