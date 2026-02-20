import { useEffect, useRef } from 'react'
import { openGameByDevice, handleBuyMCRT } from '@/lib/gameActions'
import EcosystemMindMap from '@/components/EcosystemMindMap'

export default function HeroSection() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)

  const openLiveSupport = () => {
    if (typeof window === 'undefined') return
    window.dispatchEvent(new CustomEvent('mc:live-support:open'))
  }

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

  return (
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

      {/* Embedded Ecosystem Mind Map - bottom left of hero */}
      <div className="hidden sm:block absolute left-[-150px] sm:left-[-150px] md:left-[-90px] bottom-[-110px] sm:bottom-[-110px] md:bottom-[-110px] z-30 w-[364px] sm:w-[494px] md:w-[650px] h-[312px] sm:h-[416px] md:h-[546px] pointer-events-auto opacity-70 md:opacity-100">
        <EcosystemMindMap />
      </div>
      
      <div className="relative z-10 mx-auto max-w-screen-xl h-full w-full px-3 sm:px-4">
        <div className="grid h-full w-full grid-cols-1 place-items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 pt-14 sm:pt-16 md:pt-[4.5rem] lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
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
            <h1 className="text-hero font-black max-w-4xl mx-auto tracking-wide drop-shadow-2xl leading-tight break-words hyphens-none">
              THE CURRENCY OF GAMING & AI
          </h1>
            <p className="mt-3 max-w-2xl mx-auto text-white/85 text-base sm:text-lg leading-relaxed">
              Fast, low‑fee on‑chain currency on BNB Chain powering rewards, creator payouts,
              and in‑game commerce across the MagicCraft universe.
            </p>
            {/* Mobile: compact 3-CTA row */}
            <div className="mt-4 sm:mt-5 w-full max-w-[520px] mx-auto sm:hidden">
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={openGameByDevice}
                  className="h-10 rounded-md bg-gradient-to-b from-[#6b3db2] to-[#41207a] text-white text-sm font-semibold border border-white/15 shadow-lg hover:brightness-110 active:scale-[0.99] ripple-effect"
                  aria-label="Play MagicCraft now"
                >
                  Play
                </button>
                <button
                  onClick={openLiveSupport}
                  className="h-10 rounded-md bg-white/10 text-white text-sm font-semibold border border-white/15 backdrop-blur-md shadow-lg hover:bg-white/15 active:scale-[0.99]"
                  aria-label="Open Live Support chat"
                >
                  Live Chat
                </button>
                <button
                  onClick={handleBuyMCRT}
                  className="h-10 rounded-md bg-gradient-to-b from-[#A9FFF6] to-[#82E7E0] text-[#071033] text-sm font-semibold border border-white/20 shadow-lg hover:brightness-105 active:scale-[0.99] ripple-effect"
                  aria-label="Buy MCRT tokens"
                >
                  Buy
                </button>
              </div>
            </div>

            {/* Tablet/Desktop: original CTAs */}
            <div className="hidden sm:flex mt-4 sm:mt-5 flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
  )
}