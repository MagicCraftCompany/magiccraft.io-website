import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Gamepad2, Pause, Play } from 'lucide-react'
import { GAMEPLAY_VIDEO } from '@/data/gameplayMedia'
import { openGameByDevice } from '@/lib/gameActions'
import './cinematicHero.css'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const video = videoRef.current
    const syncMotion = () => {
      if (motion.matches) video?.pause()
      else void video?.play()?.catch(() => setPlaying(false))
    }
    syncMotion()
    motion.addEventListener('change', syncMotion)
    return () => motion.removeEventListener('change', syncMotion)
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play()?.catch(() => setPlaying(false))
    else video.pause()
  }

  return (
    <section id="home" className="mc-cinema" aria-labelledby="cinema-title">
      <div className="mc-cinema-media" aria-hidden="true">
        <img
          src={GAMEPLAY_VIDEO.poster}
          alt=""
          className="mc-cinema-poster"
          loading="eager"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={GAMEPLAY_VIDEO.poster}
          className={failed ? 'hidden' : 'mc-cinema-video'}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => {
            setFailed(true)
            setPlaying(false)
          }}
        >
          <source src={GAMEPLAY_VIDEO.src} type="video/mp4" />
        </video>
      </div>
      <div className="mc-cinema-shade" />
      <div className="mc-cinema-content">
        <div className="mc-cinema-eyebrow">
          <span /> MAGICCRAFT STUDIO <span className="mc-cinema-eyebrow-line" />{' '}
          A WORLD OF POSSIBILITIES
        </div>
        <div className="mc-cinema-main">
          <div>
            <h1 id="cinema-title" className="font-sans font-semibold">
              Play the game.
              <br />
              <span>Put AI to work.</span>
            </h1>
            <p className="mc-cinema-intro">
              Enter a world of fantasy battles.
              <br />
              Discover AI built for the world beyond them.
            </p>
            <div id="hero-primary-actions" className="mc-cinema-actions">
              <button
                type="button"
                onClick={openGameByDevice}
                className="mc-cinema-primary"
              >
                <Gamepad2 size={19} />
                Play MagicCraft
                <ArrowUpRight size={18} />
              </button>
              <a href="#ai-products" className="mc-cinema-secondary">
                Explore 6 AI products
                <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <div className="mc-cinema-caption">
            <span>STEP INTO THE ARENA</span>
            <p>
              Real gameplay.
              <br />
              Your next adventure.
            </p>
            <div>iOS · Android · Steam · PC</div>
          </div>
        </div>
        <div className="mc-cinema-bottom">
          <div>
            <span className="mc-cinema-label">ONE STUDIO. TWO WORLDS.</span>
            <p>Free to play. Wallet optional.</p>
          </div>
          <a href="#game" className="mc-cinema-discover">
            Discover MagicCraft <ArrowDown size={16} />
          </a>
          <button
            type="button"
            onClick={togglePlayback}
            disabled={failed}
            className="mc-cinema-playback"
            aria-label={
              failed
                ? 'Background video unavailable'
                : playing
                  ? 'Pause background video'
                  : 'Play background video'
            }
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
            <span>
              {failed ? 'Still image' : playing ? 'Pause scene' : 'Play scene'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
