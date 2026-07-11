import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, ExternalLink, Gamepad2, Swords } from 'lucide-react'
import { openGameByDevice } from '@/lib/gameActions'

type NetInfo = {
  saveData?: boolean
}

const HERO_VIDEO_SRC =
  'https://res.cloudinary.com/dfzcr2ch4/video/upload/v1717166775/video_gokp2f.mp4'
const HERO_POSTER_SRC =
  'https://res.cloudinary.com/dfzcr2ch4/video/upload/so_1/f_jpg,q_auto,w_1920/v1717166775/video_gokp2f.jpg'
const LOBBY_URL = 'https://lobby.magiccraft.io/'

function shouldPlayHeroVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(max-width: 767px)').matches) return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return false

  const nav = navigator as Navigator & { connection?: NetInfo }
  return !nav.connection?.saveData
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
    ;(video as HTMLVideoElement & { defaultMuted?: boolean }).defaultMuted = true
    ;(video as HTMLVideoElement & { playsInline?: boolean }).playsInline = true
  }, [])

  useEffect(() => {
    setEnableVideo(shouldPlayHeroVideo())
  }, [])

  useEffect(() => {
    if (!enableVideo) return
    const video = heroVideoRef.current
    if (!video) return

    const tryPlay = () => {
      const playback = video.play()
      if (playback && typeof playback.catch === 'function') {
        playback.catch(() => {})
      }
    }

    const onVisibility = () => {
      if (!document.hidden) tryPlay()
    }

    tryPlay()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [enableVideo])

  return (
    <section
      id="home"
      className="relative isolate min-h-[700px] w-full overflow-hidden bg-[#03082f] sm:min-h-[760px] lg:min-h-[820px]"
    >
      {enableVideo ? (
        <video
          ref={setHeroVideoElement}
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          poster={HERO_POSTER_SRC}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          className="absolute inset-0 -z-30 h-full w-full scale-105 object-cover object-center"
          src={HERO_POSTER_SRC}
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      )}

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,4,24,0.96)_0%,rgba(3,8,47,0.86)_43%,rgba(3,8,47,0.38)_74%,rgba(3,8,47,0.48)_100%)] sm:bg-[linear-gradient(90deg,rgba(2,4,24,0.97)_0%,rgba(3,8,47,0.88)_44%,rgba(3,8,47,0.28)_78%,rgba(3,8,47,0.42)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_38%,rgba(152,255,249,0.18),transparent_30%),radial-gradient(circle_at_32%_70%,rgba(181,145,242,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#03082f] to-transparent" />

      <div className="mx-auto flex min-h-[700px] w-full max-w-screen-2xl items-center px-5 pb-16 pt-16 sm:min-h-[760px] sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[820px] lg:px-12 lg:pb-24 lg:pt-40 xl:px-16">
        <div className="grid w-full items-end gap-10 xl:grid-cols-[minmax(0,760px)_minmax(280px,1fr)] xl:gap-12">
          <div className="max-w-3xl text-center sm:text-left">
            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"
              alt="MagicCraft"
              loading="eager"
              className="mx-auto h-auto w-[230px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:mx-0 sm:w-[300px]"
            />

            <div className="mt-7 inline-flex min-h-9 items-center gap-2 rounded-full border border-[#98FFF9]/30 bg-[#071c35]/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#98FFF9] backdrop-blur-md sm:text-xs">
              <Swords className="h-4 w-4" aria-hidden="true" />
              Free-to-play fantasy MOBA
            </div>

            <h1 className="mt-5 text-balance font-serif text-5xl font-black leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.7)] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Battle through the Ashvales.
            </h1>

            <p className="mt-5 text-xl font-bold leading-snug text-[#b9fff8] sm:text-2xl">
              Play free. Enter Web3 when you choose.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 sm:mx-0 sm:text-lg sm:leading-8">
              Choose a hero, master objective-based team combat, and explore
              the new PvE world on mobile or PC. Connect a wallet only when you
              want $MCRT lobbies, digital assets, or marketplace features.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-start">
              <button
                type="button"
                onClick={openGameByDevice}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-3 text-base font-black text-[#03082f] shadow-[0_14px_45px_rgba(152,255,249,0.25)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#03082f]"
              >
                <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                Play free
              </button>
              <a
                href={LOBBY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#98FFF9]/60 hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                View live lobbies
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <a
              href="#mcrt-utility"
              className="mt-5 inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-white/70 transition hover:text-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
            >
              Explore how $MCRT works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 sm:justify-start">
              <span>PC</span>
              <span aria-hidden="true">•</span>
              <span>Steam</span>
              <span aria-hidden="true">•</span>
              <span>iOS</span>
              <span aria-hidden="true">•</span>
              <span>Android</span>
            </div>
          </div>

          <aside className="hidden rounded-[28px] border border-white/[0.15] bg-[#050923]/[0.72] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:block xl:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98FFF9]">
              Your game, your depth
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-white xl:text-3xl">
              Start with the battle. Go deeper when you are ready.
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/70">
              {[
                'Download and play without a wallet.',
                'Compete across PvP and PvE experiences.',
                'Opt into reward lobbies and owned assets.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#98FFF9]/[0.15] text-[#98FFF9]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
