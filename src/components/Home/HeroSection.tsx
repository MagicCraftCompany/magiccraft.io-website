import { useCallback, useEffect, useRef, useState } from 'react'
import { openGameByDevice, handleBuyMCRT } from '@/lib/gameActions'
import EcosystemMindMap from '@/components/EcosystemMindMap'

type NetInfo = {
  saveData?: boolean
}

const HERO_VIDEO_SRC =
  'https://res.cloudinary.com/dfzcr2ch4/video/upload/v1717166775/video_gokp2f.mp4'
const HERO_POSTER_SRC =
  'https://res.cloudinary.com/dfzcr2ch4/video/upload/so_1/f_jpg,q_auto,w_1920/v1717166775/video_gokp2f.jpg'

function shouldPlayHeroVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return false
  const nav = navigator as Navigator & { connection?: NetInfo }
  const conn = nav.connection
  if (conn?.saveData) return false
  return true
}

export default function HeroSection() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [enableVideo, setEnableVideo] = useState<boolean>(() =>
    shouldPlayHeroVideo()
  )

  const setHeroVideoElement = useCallback((video: HTMLVideoElement | null) => {
    heroVideoRef.current = video
    if (!video) return

    video.muted = true
    ;(video as HTMLVideoElement & { defaultMuted?: boolean }).defaultMuted =
      true
    ;(video as HTMLVideoElement & { playsInline?: boolean }).playsInline = true
  }, [])

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
      ;(video as HTMLVideoElement & { defaultMuted?: boolean }).defaultMuted =
        true
      ;(video as HTMLVideoElement & { playsInline?: boolean }).playsInline =
        true
    } catch {
      /* intentional: best-effort attribute assignment */
    }

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
    <section className="relative h-auto min-h-[620px] w-full max-w-full overflow-hidden bg-cover bg-center sm:min-h-[690px] md:min-h-[720px] md:min-h-screen lg:min-h-[760px] xl:min-h-[800px]">
      {enableVideo ? (
        <video
          ref={setHeroVideoElement}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          poster={HERO_POSTER_SRC}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          src={HERO_POSTER_SRC}
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      )}
      <div className="video-bg-gradient absolute inset-0 h-full w-full bg-gradient-to-b from-black/70 via-[#03082f]/35 to-[#03082f]/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(152,255,249,0.18),transparent_32%),linear-gradient(90deg,rgba(152,255,249,0.06),rgba(181,145,242,0.08))]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#03082f] via-transparent to-black/30"></div>

      {/* Embedded Ecosystem Mind Map - bottom left of hero */}
      <div className="pointer-events-none absolute bottom-[-130px] left-[-170px] z-0 hidden h-[312px] w-[364px] opacity-35 sm:bottom-[-120px] sm:left-[-150px] sm:block sm:h-[416px] sm:w-[494px] md:bottom-[-125px] md:left-[-120px] md:h-[546px] md:w-[650px] md:opacity-55">
        <EcosystemMindMap />
      </div>

      <div className="relative z-10 mx-auto h-full w-full max-w-screen-xl px-3 sm:px-4">
        <div className="grid h-full w-full grid-cols-1 place-items-center justify-center gap-3 pb-10 pt-20 sm:gap-4 sm:pb-12 sm:pt-24 md:gap-4 md:pb-14 md:pt-28 lg:gap-5 lg:pb-16 lg:pt-32">
          <div className="animate-fade-in group mt-1 w-full max-w-[24%] sm:mt-2 sm:max-w-[18%] md:mt-3 md:w-full md:max-w-28 lg:mt-4 lg:max-w-32">
            <div className="relative">
              <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-60"></div>
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp"
                alt="MCRT Token"
                loading="eager"
                className="animate-float relative h-auto w-full drop-shadow-2xl transition-all duration-500 hover:rotate-3 hover:scale-110"
              />
            </div>
          </div>

          <div className="gap-section animate-slide-up mx-auto mt-2 w-full max-w-[22rem] overflow-hidden px-3 text-center sm:mt-3 sm:max-w-full sm:px-6 md:mt-4 md:px-8 lg:mt-5">
            <div className="group mb-3 flex justify-center sm:mb-4 md:mb-6">
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"
                alt="MagicCraft Logo"
                loading="eager"
                className="h-auto w-full max-w-[280px] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg"
              />
            </div>
            <div className="mx-auto mb-4 flex max-w-[19rem] flex-wrap items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#98FFF9] sm:max-w-none sm:gap-2 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-2.5 py-1 sm:px-3">
                BNB Chain
              </span>
              <span className="rounded-full border border-[#B591F2]/25 bg-[#B591F2]/10 px-2.5 py-1 text-[#d7c8ff] sm:px-3">
                PvP Rewards
              </span>
              <span className="rounded-full border border-[#FFB649]/25 bg-[#FFB649]/10 px-2.5 py-1 text-[#ffd18a] sm:px-3">
                AI Products
              </span>
            </div>
            <h1 className="text-hero mx-auto max-w-[19rem] hyphens-none break-words font-black leading-tight drop-shadow-2xl sm:max-w-5xl">
              <span className="block sm:inline">$MCRT:</span>{' '}
              <span className="block sm:inline">Game and AI</span>{' '}
              <span className="block sm:inline">Economy</span>
            </h1>
            <p className="text-white/88 mx-auto mt-4 max-w-3xl text-base leading-relaxed tracking-normal sm:mt-5 sm:text-lg">
              Earn it in PvP lobbies, spend it on NFTs and product credits,
              pledge it for rewards, or accept it in any app with MCRTPay.
            </p>
            {/* Mobile: compact 3-CTA row */}
            <div className="mx-auto mt-5 w-full max-w-[19rem] sm:mt-6 sm:hidden">
              <div className="grid w-full grid-cols-2 gap-2">
                <button
                  onClick={openGameByDevice}
                  className="ripple-effect h-12 min-w-0 rounded-lg border border-white/15 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] text-sm font-bold text-[#03082F] shadow-[0_0_15px_rgba(152,255,249,0.3)] transition-all hover:brightness-110 active:scale-[0.98]"
                  aria-label="Play MagicCraft now"
                >
                  Play
                </button>
                <button
                  onClick={handleBuyMCRT}
                  className="ripple-effect h-12 min-w-0 rounded-lg border border-white/20 bg-gradient-to-b from-[#A9FFF6] to-[#82E7E0] text-sm font-semibold text-[#071033] shadow-lg transition-all hover:brightness-105 active:scale-[0.98]"
                  aria-label="Buy MCRT tokens"
                >
                  Buy
                </button>
                <button
                  onClick={openLiveSupport}
                  className="col-span-2 h-12 min-w-0 rounded-lg border border-white/15 bg-white/10 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/15 active:scale-[0.98]"
                  aria-label="Open Live Support chat"
                >
                  Live Chat
                </button>
              </div>
            </div>

            {/* Tablet/Desktop: original CTAs */}
            <div className="mt-6 hidden flex-col items-center justify-center gap-4 sm:mt-8 sm:flex sm:flex-row sm:gap-6">
              <button
                onClick={openGameByDevice}
                className="cta-premium w-full min-w-[154px] !px-6 !py-3 !text-base shadow-[0_0_30px_rgba(152,255,249,0.3)] sm:w-auto"
                aria-label="Play MagicCraft now"
              >
                Play Now
              </button>
              <button
                onClick={handleBuyMCRT}
                className="btn-secondary w-full min-w-[154px] border border-white/20 !px-6 !py-3 !text-base hover:border-[#98FFF9]/50 sm:w-auto"
                aria-label="Buy MCRT tokens"
              >
                Buy $MCRT
              </button>
            </div>
            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 opacity-95 sm:mt-6 sm:gap-4">
              <span className="text-xs font-medium tracking-wide text-white/70 sm:text-sm">
                Listed on
              </span>
              <a
                href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center transition-all hover:scale-105 hover:opacity-100"
              >
                <img
                  src="/icons/icon-bybit.svg"
                  alt="Bybit"
                  className="h-5 opacity-90 sm:h-6"
                  loading="lazy"
                />
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center transition-all hover:scale-105 hover:opacity-100"
              >
                <img
                  src="/icons/icon-pancakeswap.svg"
                  alt="PancakeSwap"
                  className="h-5 opacity-90 sm:h-6"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.htx.com/trade/mcrt_usdt"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center transition-all hover:scale-105 hover:opacity-100"
              >
                <img
                  src="/icons/icon-huobi.svg"
                  alt="HTX"
                  className="h-5 opacity-90 sm:h-6"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Download row moved below hero */}
      {/* Scroll cue */}
      <a
        href="#mcrt-payments"
        className="glass-strong absolute bottom-6 left-1/2 hidden h-12 w-12 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-white/20 transition-all hover:scale-110 hover:bg-white/15 sm:inline-flex"
        aria-label="Scroll to $MCRT payments"
      >
        <svg
          className="h-5 w-5 text-white/85 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 15.5a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 13.08l5.3-5.29a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-.7.29Z" />
        </svg>
      </a>
    </section>
  )
}
