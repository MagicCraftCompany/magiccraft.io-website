import { useCallback, useEffect, useState } from 'react'
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
import { LiaTelegramPlane } from 'react-icons/lia'
import GamePlay from '@/components/GamePlay'
import GameCard from '@/components/ui/GameCard'
import { Game, gamesData } from '@/data/game'
import { ArrowUpRight } from 'lucide-react'
import MagicraftDownload from '@/components/HomePageCard'
import Testimonial from '@/components/ui/testimonial'
import Partners from '@/components/Partners/Partners'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import bnbLogo from '../assets/icons/bnblogo.png'


function Homepagemcrt() {
  const [visibleCount, setVisibleCount] = useState(16)
  const [currentSlide, setCurrentSlide] = useState(0)

  const registerHandler = () => {
    window.location.href = 'https://lobby.magiccraft.io/register'
  }

  // Gameplay carousel functionality
  useEffect(() => {
    const slides = document.getElementById('gameplaySlides')
    const dots = document.querySelectorAll('.carousel-dot')
    
    if (!slides || !dots.length) return

    const totalSlides = 4
    let autoPlayInterval: NodeJS.Timeout

    const goToSlide = (slideIndex: number) => {
      setCurrentSlide(slideIndex)
      slides.style.transform = `translateX(-${slideIndex * 100}%)`
      
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
      const next = (currentSlide + 1) % totalSlides
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
    window.location.href = 'https://discord.com/invite/magiccraftgame'
  }
  const telegrammagiccrftHandler = () => {
    window.location.href = 'https://t.me/magiccraftgamechat'
  }

  const filteredGames = gamesData.filter(
    (game: { title: string }) =>
      game.title === 'magicflutter' ||
      game.title === 'magicchess' ||
      game.title === 'tetrablox' ||
      game.title === 'runescribes' ||
      game.title === 'magicrunner'
  )
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
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="-mt-[80px] md:-mt-[80px] scroll-smooth pb-20">
          {/*header*/}
          <section className="md:min-h-screen relative h-[750px] sm:h-[820px] lg:h-[800px] bg-cover bg-center overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5"></div>
            
            <div className="relative z-10 mx-auto max-w-screen-xl h-full">
              <div className="grid h-full w-full grid-cols-1 place-items-center justify-end gap-2 sm:gap-4 md:gap-6 pt-6 sm:pt-10 md:pt-14 lg:pt-16 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
                <div className="w-full max-w-[20%] md:w-full md:max-w-32 lg:max-w-36 animate-fade-in mt-8 md:mt-12">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp"
                    alt="MCRT Token"
                    loading="eager"
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="text-center gap-section animate-slide-up mt-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32">
                  <div className="flex justify-center mb-4 md:mb-6">
                    <img 
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"  
                      alt="MagicCraft Logo"
                      loading="eager"
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-xl"
                    />
                  </div>
                  <h1 className="text-section-title font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent animate-gradient max-w-4xl mx-auto">
                    $MCRT THE CURRENCY OF GAMING
                </h1>
                </div>
              </div>
              </div>
           
            {/* Download row moved below hero */}
          </section>

          {/* Download banner just below hero */}
          <div className="w-full bg-gradient-to-b from-[#0a0524] to-[#050317] relative z-10">
            <div className="mx-auto max-w-screen-xl px-4 py-2 md:py-4">
               <MagicraftDownload/>
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
                      <svg className="w-4 h-4 text-[#98FFF9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.09 6.26H20l-5.17 3.76L16.91 18 12 14.73 7.09 18l2.08-5.98L4 8.26h5.91L12 2z"/></svg>
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
              
              <div className="hidden lg:block animate-fade-in">
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
                    <div className="relative">
                      <div className="gameplay-carousel overflow-hidden rounded-xl">
                        <div className="gameplay-slides flex transition-transform duration-500 ease-in-out" id="gameplaySlides">
                                                    {/* Slide 1 - PvP Arena Battle */}
                          <div className="gameplay-slide min-w-full relative">
                            <div className="aspect-video bg-gradient-to-br from-[#1a0d2e] to-[#2A0D4E] rounded-xl overflow-hidden relative">
                              <img 
                                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173137/Hero_1_v7qidt.webp" 
                                alt="MagicCraft PvP Arena Battle"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                              <div className="absolute bottom-4 left-4 right-4">
                                <h5 className="text-white font-bold text-sm mb-1">Intense PvP Arena</h5>
                                <p className="text-white/80 text-xs">5v5 MOBA battles • Earn $MCRT tokens</p>
                            </div>
                              <div className="absolute top-4 right-4">
                                <span className="bg-red-500/80 text-white text-xs px-2 py-1 rounded-full font-bold">LIVE PvP</span>
                            </div>
                            </div>
                            </div>

                          {/* Slide 2 - Team Combat */}
                          <div className="gameplay-slide min-w-full relative">
                            <div className="aspect-video bg-gradient-to-br from-[#1a0d2e] to-[#2A0D4E] rounded-xl overflow-hidden relative">
                              <img 
                                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173132/hero2_olqlpn.webp" 
                                alt="MagicCraft Team Combat"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                              <div className="absolute bottom-4 left-4 right-4">
                                <h5 className="text-white font-bold text-sm mb-1">Strategic Team Combat</h5>
                                <p className="text-white/80 text-xs">Master unique heroes • Dominate opponents</p>
                          </div>
                              <div className="absolute top-4 right-4">
                                <span className="bg-[#98FFF9]/80 text-[#03082F] text-xs px-2 py-1 rounded-full font-bold">STRATEGY</span>
                        </div>
                      </div>
                    </div>

                          {/* Slide 3 - Capture The Zone PvP */}
                          <div className="gameplay-slide min-w-full relative">
                            <div className="aspect-video bg-gradient-to-br from-[#1a0d2e] to-[#2A0D4E] rounded-xl overflow-hidden relative">
                              <img 
                                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173140/Hero_3_kqxqhd.webp" 
                                alt="MagicCraft Capture The Zone"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                              <div className="absolute bottom-4 left-4 right-4">
                                <h5 className="text-white font-bold text-sm mb-1">Capture The Zone</h5>
                                <p className="text-white/80 text-xs">Control objectives • Win tournaments</p>
                            </div>
                              <div className="absolute top-4 right-4">
                                <span className="bg-[#B591F2]/80 text-white text-xs px-2 py-1 rounded-full font-bold">TOURNAMENT</span>
                          </div>
                            </div>
                            </div>

                          {/* Slide 4 - Competitive Ranking */}
                          <div className="gameplay-slide min-w-full relative">
                            <div className="aspect-video bg-gradient-to-br from-[#1a0d2e] to-[#2A0D4E] rounded-xl overflow-hidden relative">
                              <img 
                                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173135/Hero_4_ywgdqf.webp" 
                                alt="MagicCraft Competitive Ranking"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                              <div className="absolute bottom-4 left-4 right-4">
                                <h5 className="text-white font-bold text-sm mb-1">Ranked Competition</h5>
                                <p className="text-white/80 text-xs">Climb leaderboards • Prove your skill</p>
                            </div>
                              <div className="absolute top-4 right-4">
                                <span className="bg-[#FFB649]/80 text-[#03082F] text-xs px-2 py-1 rounded-full font-bold">RANKED</span>
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
                        <button className="carousel-dot w-2 h-2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/60" data-slide="3"></button>
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
                      </div>
        </section>

        <section className="relative py-12 md:py-16">
          <div className="mx-auto w-11/12 max-w-screen-xl">
            <Testimonial />
            </div>
          </section>
          
         <section id="gameplay">
          <GamePlay />
        </section>

          {/* Exchanges/Partners elevated */}
          <section className="relative mx-auto w-11/12 max-w-screen-xl mt-10 md:mt-14">
            <Partners />
          </section>

          {/* Game Maker Banner */}
          <section className="relative mx-auto w-11/12 max-w-screen-xl mb-4 md:mb-8 px-2 md:px-0">
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
                  
                  {/* Enhanced content overlay - Fixed positioning */}
                  <div className="absolute inset-0 flex flex-col justify-end items-end p-3 md:p-6 lg:p-8 xl:p-12 pointer-events-none">
                    <div className="space-y-3 md:space-y-4 text-right bg-black/60 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#98FFF9]/20 shadow-2xl max-w-[280px] md:max-w-none pointer-events-auto">
                      <h1 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-white">
                          GAME MAKER
                        </h1>
                      <div className="text-xs md:text-sm text-gray-200 space-y-1 md:space-y-2 max-w-[200px] md:max-w-[250px]">
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
                        className="btn-primary gap-2"
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

          {/* Token Info: $BNB and $MCRT */}
          <section className="section-padding relative mx-auto w-11/12 max-w-screen-xl">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent mb-4">
                DUAL TOKEN ECOSYSTEM
              </h3>
              <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
                Experience the power of two tokens: earn $MCRT through gameplay and compete for $BNB rewards in our exclusive lobbies
              </p>
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
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#98FFF9]"/>
                      <text x="50" y="55" textAnchor="middle" className="text-lg font-bold fill-current text-[#98FFF9]">MC</text>
                    </svg>
                </div>
                  
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#98FFF9] to-[#B591F2] p-3 shadow-lg flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-10 h-10">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3" className="text-white"/>
                        <text x="50" y="58" textAnchor="middle" className="text-sm font-bold fill-current text-white">MC</text>
                      </svg>
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

                  {/* Price widgets */}
                  <div className="space-y-4 mb-6">
                    <div className="rounded-xl border border-[#98FFF9]/30 bg-gradient-to-br from-[#0B0F39]/80 to-[#111a4e]/80 card-padding-sm shadow-lg backdrop-blur-sm">
                      <coingecko-coin-ticker-widget coin-id="magiccraft" currency="usd" locale="en" background-color="#0B0F39" font-color="#FFFFFF" border-color="#2A2F63"></coingecko-coin-ticker-widget>
                    </div>
                    <div className="rounded-xl border border-[#98FFF9]/30 bg-gradient-to-br from-[#0B0F39]/80 to-[#111a4e]/80 card-padding-sm shadow-lg backdrop-blur-sm">
                      <coingecko-coin-price-chart-widget coin-id="magiccraft" currency="usd" height="240" locale="en" background-color="#0B0F39" font-color="#FFFFFF" border-color="#2A2F63"></coingecko-coin-price-chart-widget>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://coinmarketcap.com/currencies/magiccraft/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-small flex-1 min-w-[140px] text-center">
                      View on CMC
                    </a>
                    <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noopener noreferrer" className="btn-primary text-small flex-1 min-w-[140px] text-center">
                      Trade on Bybit
                    </a>
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
          {/**browser game  */}
          <section className="relative mx-auto mt-0 w-11/12 max-w-screen-xl space-y-8 md:space-y-12 mb-[50px] min-h-screen">
            <div className="text-center space-y-4 md:space-y-6">
              <h2 className="text-balance bg-gradient-to-b from-white via-[#98FFF9] to-[#B591F2] bg-clip-text text-center font-serif text-3xl md:text-4xl lg:text-5xl text-transparent drop-shadow-xl leading-tight">
            Join the MagicCraft Ecosystem
            </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                Join us in shaping the future of gaming with MCRT, the cornerstone currency of the gaming world.
              </p>
            </div>
            
            <div className="relative w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#080420] via-[#0A0424] to-[#1a0d2e] border border-[#B591F2]/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9]/5 to-[#B591F2]/5"></div>
              <div className="relative space-y-6 md:space-y-8 px-6 md:px-8 pb-8 md:pb-10 pt-6 md:pt-8">
                <div className="grid grid-cols-1 place-items-stretch gap-6 md:gap-8 lg:grid-cols-3">
                  {/* MCRT Integration Card */}
                  <div className="group overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#B591F2] to-[#98FFF9] p-px transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B591F2]/25">
                    <div className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#3D186D] to-[#2A0D4E] px-6 md:px-8 py-6 md:py-8 flex flex-col justify-between">
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 md:w-14 md:h-14">
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8EFF49] to-[#6BCF3A] blur-md opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                            {/* Main icon container */}
                            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#8EFF49] to-[#6BCF3A] flex items-center justify-center shadow-lg shadow-[#8EFF49]/20 group-hover:shadow-xl group-hover:shadow-[#8EFF49]/30 transition-all duration-300 border border-[#8EFF49]/20 group-hover:border-[#8EFF49]/40">
                              {/* Inner highlight */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                              <svg className="relative w-6 h-6 md:w-7 md:h-7 text-[#03082F] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="5"/>
                                <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
                                <path d="M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5"/>
                                <circle cx="12" cy="12" r="1.5"/>
                              </svg>
                            </div>
                          </div>
                          <h4 className="font-serif text-lg md:text-xl font-bold text-[#8EFF49]">
                            MCRT Integration
                      </h4>
                        </div>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                          Enhance your gaming experience with seamless MCRT token integration. Earn, spend, and trade within the MagicCraft universe.
                        </p>
                      </div>
                      <div className="absolute -bottom-8 md:-bottom-10 right-2 bg-gradient-to-b from-white/10 to-transparent bg-clip-text font-serif text-6xl md:text-8xl leading-none text-transparent">
                        1
                      </div>
                    </div>
                  </div>

                  {/* Monthly Surprises Card */}
                  <div className="group overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#FFB649] to-[#B591F2] p-px transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFB649]/25">
                    <div className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#2A0D4E] to-[#57186D] px-6 md:px-8 py-6 md:py-8 flex flex-col justify-between">
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 md:w-14 md:h-14">
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C09AFF] to-[#A67AFF] blur-md opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                            {/* Main icon container */}
                            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#C09AFF] to-[#A67AFF] flex items-center justify-center shadow-lg shadow-[#C09AFF]/20 group-hover:shadow-xl group-hover:shadow-[#C09AFF]/30 transition-all duration-300 border border-[#C09AFF]/20 group-hover:border-[#C09AFF]/40">
                              {/* Inner highlight */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                              <svg className="relative w-6 h-6 md:w-7 md:h-7 text-[#03082F] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="3" y="7" width="18" height="12" rx="2"/>
                                <path d="M7 7l2-3h6l2 3"/>
                                <path d="M8 13l3 3 5-5"/>
                              </svg>
                            </div>
                          </div>
                          <h4 className="font-serif text-lg md:text-xl font-bold text-[#C09AFF]">
                            Monthly Surprises
                          </h4>
                        </div>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                          Unlock exclusive rewards every hour with our dynamic reward system. The more you play, the more you earn.
                        </p>
                      </div>
                      <div className="absolute -bottom-8 md:-bottom-10 right-2 bg-gradient-to-b from-white/10 to-transparent bg-clip-text font-serif text-6xl md:text-8xl leading-none text-transparent">
                        2
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Card */}
                  <div className="group overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#FF49ED] to-[#B591F2] p-px transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF49ED]/25">
                    <div className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#3D186D] to-[#2A0D4E] px-6 md:px-8 py-6 md:py-8 flex flex-col justify-between">
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 md:w-14 md:h-14">
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#98FFF9] to-[#7de6df] blur-md opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                            {/* Main icon container */}
                            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#98FFF9] to-[#7de6df] flex items-center justify-center shadow-lg shadow-[#98FFF9]/20 group-hover:shadow-xl group-hover:shadow-[#98FFF9]/30 transition-all duration-300 border border-[#98FFF9]/20 group-hover:border-[#98FFF9]/40">
                              {/* Inner highlight */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                              <svg className="relative w-6 h-6 md:w-7 md:h-7 text-[#03082F] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="7" height="7"/>
                                <rect x="14" y="3" width="7" height="7"/>
                                <rect x="14" y="14" width="7" height="7"/>
                                <rect x="3" y="14" width="7" height="7"/>
                                <polygon points="6,6 10,8 6,10"/>
                              </svg>
                            </div>
                          </div>
                          <h4 className="font-serif text-lg md:text-xl font-bold text-[#98FFF9]">
                            Game Portfolio
                          </h4>
                        </div>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                          Discover a growing collection of indie and AA games onboarded to the MagicCraft ecosystem. New titles added regularly.
                        </p>
                      </div>
                      <div className="absolute -bottom-8 md:-bottom-10 right-2 bg-gradient-to-b from-white/10 to-transparent bg-clip-text font-serif text-6xl md:text-8xl leading-none text-transparent">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#080420] to-[#0A0424] border border-[#B591F2]/20 shadow-2xl overflow-hidden">
              <div className="px-6 md:px-10 py-6 md:py-8">
                <div className="text-center space-y-4 md:space-y-6">
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">
                    Other Ecosystem Games to Play
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Explore our diverse collection of games within the MagicCraft ecosystem
                  </p>
                </div>
                <div className="w-full">
              <div className="relative mx-auto w-full   max-w-screen-xl hidden lg:block">
              <div className=' '>
                <img
                  src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733160952/image_14_meffcp.webp"
                  alt="Magiccraft banner showing a wizard character"
                  className="h-auto  mb-6 w-full object-cover"
                />
              </div>
                {/* Content overlay using flexbox */}
                <div className="absolute  inset-0 ml-4 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-[4rem]">
                  <div className="space-y-1 sm:space-y-2">
                    <h1 className="font-serif text-xs text-white sm:text-lg lg:text-xl">
                      MAGICCRAFT BROWSER GAMES
                    </h1>
                    <a href="https://games.magiccraft.io/" className="group inline-flex items-center gap-1 text-xs text-[#98FFF9] transition-colors hover:text-white sm:text-sm">
                      Read more
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
                <div className=" hidden grid-cols-5 gap-4  lg:grid lg:mx-10">
                  {filteredGames.map((game: Game) => (
                    <div key={game.id} className=" min-w-[160px] flex-1 ">
                      <GameCard game={game} />
                    </div>
                  ))}
                </div>
                <div className="relative overflow-x-auto md:grid-cols-2 lg:hidden lg:grid-cols-3 xl:grid-cols-5">
                  <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-nowrap">
                      {filteredGames.map((game: Game) => (
                        <div key={game.id} className="mx-4 min-w-[160px] flex-1 ">
                          <GameCard game={game} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent to-white/20" />
                </div>
                </div>
              </div>
          </section>
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
