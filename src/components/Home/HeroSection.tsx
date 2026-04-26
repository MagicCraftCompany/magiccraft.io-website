import { useEffect, useRef, useState } from 'react'
import { openGameByDevice, handleBuyMCRT } from '@/lib/gameActions'
import EcosystemMindMap from '@/components/EcosystemMindMap'

type NetInfo = {
  effectiveType?: string
  saveData?: boolean
}

function shouldPlayHeroVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  const nav = navigator as Navigator & { connection?: NetInfo }
  const conn = nav.connection
  if (conn?.saveData) return false
  if (conn?.effectiveType && /^(2g|slow-2g|3g)$/.test(conn.effectiveType)) return false
  return true
}

export default function HeroSection() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [enableVideo, setEnableVideo] = useState<boolean>(() => shouldPlayHeroVideo())

  const openLiveSupport = () => {
    if (typeof window === 'undefined') return
    window.dispatchEvent(new CustomEvent('mc:live-support:open'))
  }

  useEffect(() => {
    setEnableVideo(shouldPlayHeroVideo())
  }, [])

  // Ensure hero background video autoplay/loops reliably across browsers
  useEffect(() => {
    if (!enableVideo) return
    const video = heroVideoRef.current
    if (!video) return

    try {
      video.muted = true
      ;(video as HTMLVideoElement & { playsInline?: boolean }).playsInline = true
    } catch { /* intentional: best-effort attribute assignment */ }

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
  }, [enableVideo])

  return (
    <section className="md:min-h-screen relative min-h-[620px] sm:min-h-[690px] md:min-h-[720px] lg:min-h-[760px] xl:min-h-[800px] h-auto bg-cover bg-center overflow-hidden w-full max-w-full">
      {enableVideo ? (
        <video
          ref={heroVideoRef}
          className="absolute inset-0 h-full w-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
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
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover scale-105"
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      )}
      <div className="video-bg-gradient absolute inset-0 h-full w-full bg-gradient-to-b from-black/70 via-[#03082f]/35 to-[#03082f]/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(152,255,249,0.18),transparent_32%),linear-gradient(90deg,rgba(152,255,249,0.06),rgba(181,145,242,0.08))]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#03082f] via-transparent to-black/30"></div>

      {/* Embedded Ecosystem Mind Map - bottom left of hero */}
      <div className="hidden sm:block absolute left-[-170px] sm:left-[-150px] md:left-[-120px] bottom-[-130px] sm:bottom-[-120px] md:bottom-[-125px] z-0 w-[364px] sm:w-[494px] md:w-[650px] h-[312px] sm:h-[416px] md:h-[546px] pointer-events-none opacity-35 md:opacity-55">
        <EcosystemMindMap />
      </div>
      
      <div className="relative z-10 mx-auto max-w-screen-xl h-full w-full px-3 sm:px-4">
        <div className="grid h-full w-full grid-cols-1 place-items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
          <div className="w-full max-w-[24%] sm:max-w-[18%] md:w-full md:max-w-28 lg:max-w-32 animate-fade-in mt-1 sm:mt-2 md:mt-3 lg:mt-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp"
                alt="MCRT Token"
                loading="eager"
                className="relative w-full h-auto drop-shadow-2xl animate-float hover:scale-110 transition-all duration-500 hover:rotate-3"
              />
          </div>
            </div>
          
          <div className="text-center gap-section animate-slide-up mt-2 sm:mt-3 md:mt-4 lg:mt-5 px-4 sm:px-6 md:px-8">
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 group">
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"
                alt="MagicCraft Logo"
                loading="eager"
                className="w-full max-w-[280px] sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-700 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              />
            </div>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#98FFF9]">
              <span className="rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-3 py-1">BNB Chain</span>
              <span className="rounded-full border border-[#B591F2]/25 bg-[#B591F2]/10 px-3 py-1 text-[#d7c8ff]">PvP Lobbies</span>
              <span className="rounded-full border border-[#FFB649]/25 bg-[#FFB649]/10 px-3 py-1 text-[#ffd18a]">AI Payments</span>
            </div>
            <h1 className="text-hero font-black max-w-5xl mx-auto drop-shadow-2xl leading-tight break-words hyphens-none">
              $MCRT: The Currency of Gaming & AI
          </h1>
            <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-white/88 text-base sm:text-lg leading-relaxed tracking-normal">
              One token connecting live PvP lobbies, playable NFT characters, creator tools,
              AI products, and in-game commerce across the MagicCraft ecosystem.
            </p>
            {/* Mobile: compact 3-CTA row */}
            <div className="mt-5 sm:mt-6 w-full max-w-[520px] mx-auto sm:hidden">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  onClick={openGameByDevice}
                  className="h-12 rounded-lg bg-gradient-to-r from-[#98FFF9] to-[#B591F2] text-[#03082F] text-sm font-bold border border-white/15 shadow-[0_0_15px_rgba(152,255,249,0.3)] hover:brightness-110 active:scale-[0.98] transition-all ripple-effect"
                  aria-label="Play MagicCraft now"
                >
                  Play
                </button>
                <button
                  onClick={openLiveSupport}
                  className="h-12 rounded-lg bg-white/10 text-white text-sm font-semibold border border-white/15 backdrop-blur-md shadow-lg hover:bg-white/15 active:scale-[0.98] transition-all"
                  aria-label="Open Live Support chat"
                >
                  Live Chat
                </button>
                <button
                  onClick={handleBuyMCRT}
                  className="h-12 rounded-lg bg-gradient-to-b from-[#A9FFF6] to-[#82E7E0] text-[#071033] text-sm font-semibold border border-white/20 shadow-lg hover:brightness-105 active:scale-[0.98] transition-all ripple-effect"
                  aria-label="Buy MCRT tokens"
                >
                  Buy
                </button>
              </div>
            </div>

            {/* Tablet/Desktop: original CTAs */}
            <div className="hidden sm:flex mt-6 sm:mt-8 flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={openGameByDevice}
                className="cta-premium shadow-[0_0_30px_rgba(152,255,249,0.3)] w-full sm:w-auto min-w-[154px] !px-6 !py-3 !text-base"
                aria-label="Play MagicCraft now"
              >
                Play Now
              </button>
              <button
                onClick={handleBuyMCRT}
                className="btn-secondary w-full sm:w-auto min-w-[154px] !px-6 !py-3 !text-base border border-white/20 hover:border-[#98FFF9]/50"
                aria-label="Buy MCRT tokens"
              >
                Buy $MCRT
              </button>
            </div>
            {/* Trust badges */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 opacity-95">
              <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">Listed on</span>
              <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="inline-flex items-center hover:opacity-100 hover:scale-105 transition-all">
                <img src="/icons/icon-bybit.svg" alt="Bybit" className="h-5 sm:h-6 opacity-90" loading="lazy" />
              </a>
              <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noreferrer noopener" className="inline-flex items-center hover:opacity-100 hover:scale-105 transition-all">
                <img src="/icons/icon-pancakeswap.svg" alt="PancakeSwap" className="h-5 sm:h-6 opacity-90" loading="lazy" />
              </a>
              <a href="https://www.htx.com/trade/mcrt_usdt" target="_blank" rel="noreferrer noopener" className="inline-flex items-center hover:opacity-100 hover:scale-105 transition-all">
                <img src="/icons/icon-huobi.svg" alt="HTX" className="h-5 sm:h-6 opacity-90" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
       </div>
     
      {/* Download row moved below hero */}
      {/* Scroll cue */}
      <a href="#mcrt-payments" className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong hover:bg-white/15 border border-white/20 hover:scale-110 transition-all animate-bounce" aria-label="Scroll to $MCRT payments">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/85" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 15.5a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 13.08l5.3-5.29a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-.7.29Z"/></svg>
      </a>
    </section>
  )
}
