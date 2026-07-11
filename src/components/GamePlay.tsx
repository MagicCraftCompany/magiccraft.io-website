import { ExternalLink, Gamepad2, Play, Swords, Users } from 'lucide-react'
import { PC_GAME_URL } from '@/constants'
import { openGameByDevice } from '@/lib/gameActions'

const GAMEPLAY_VIDEO =
  'https://res.cloudinary.com/dfzcr2ch4/video/upload/v1717166775/video_gokp2f.mp4'
const GAMEPLAY_POSTER =
  'https://res.cloudinary.com/dfzcr2ch4/video/upload/so_1/f_jpg,q_auto,w_1600/v1717166775/video_gokp2f.jpg'

const modes = [
  {
    name: 'Capture the Point',
    description: 'Hold key zones while the other team fights to break your control.',
  },
  {
    name: 'Escort',
    description: 'Move the objective through the arena and protect it under pressure.',
  },
  {
    name: 'Skull Grab',
    description: 'Collect the objective, protect your carrier, and outscore the opposition.',
  },
]

const screenshots = [
  {
    src: '/img/gameplay-arena-1.webp',
    alt: 'A MagicCraft hero attacking an opponent inside the arena',
  },
  {
    src: '/img/gameplay-arena-2.webp',
    alt: 'Multiple MagicCraft heroes using abilities in team combat',
  },
  {
    src: '/img/gameplay-arena-3.webp',
    alt: 'MagicCraft team battle around an arena objective',
  },
]

function GamePlay() {
  return (
    <section className="relative overflow-hidden bg-[#020418] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(152,255,249,0.09),transparent_28%),radial-gradient(circle_at_85%_65%,rgba(181,145,242,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-screen-xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#98FFF9]">
            Real gameplay
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Every fight has an objective. Every hero changes the plan.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/[0.65] sm:text-lg">
            Build a squad, combine abilities, and adapt across fast arena modes
            in the world of the Ashvales.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.75fr)] lg:items-start">
          <div className="overflow-hidden rounded-[28px] border border-white/[0.12] bg-black shadow-[0_32px_90px_rgba(0,0,0,0.42)]">
            <div className="relative aspect-video">
              <video
                className="h-full w-full object-cover"
                aria-label="MagicCraft official gameplay trailer"
                title="MagicCraft official gameplay trailer"
                controls
                muted
                playsInline
                preload="metadata"
                poster={GAMEPLAY_POSTER}
                controlsList="nodownload noplaybackrate"
              >
                <source src={GAMEPLAY_VIDEO} type="video/mp4" />
                Your browser does not support the MagicCraft gameplay video.
              </video>
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#03082f]/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                Official gameplay
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2 text-[#98FFF9]">
                <Swords className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Core PvP modes
                </span>
              </div>
              <div className="mt-6 space-y-5">
                {modes.map((mode, index) => (
                  <div key={mode.name} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.06] text-xs font-black text-white/70">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{mode.name}</h3>
                      <p className="mt-1 text-sm leading-5 text-white/60">
                        {mode.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={openGameByDevice}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#98FFF9] px-4 py-3 text-sm font-black text-[#03082f] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Gamepad2 className="h-4 w-4" aria-hidden="true" />
                Play free
              </button>
              <a
                href={PC_GAME_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.15] bg-white/[0.06] px-4 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                Steam
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#070b2d]"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-[#98FFF9]" aria-hidden="true" />
            Team-based combat
          </span>
          <span>Cross-platform play</span>
          <span>Diverse hero roster</span>
        </div>
      </div>
    </section>
  )
}

export default GamePlay
