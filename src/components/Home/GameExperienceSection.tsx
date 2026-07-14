import {
  ArrowUpRight,
  BadgeCheck,
  Map,
  PlayCircle,
  Swords,
} from 'lucide-react'
import {
  GAMEPLAY_SCREENSHOTS,
  GAMEPLAY_VIDEO,
} from '@/data/gameplayMedia'
import { openGameByDevice } from '@/lib/gameActions'

const PVE_UPDATE_URL = 'https://steamcommunity.com/app/2395760'
const STEAM_URL = 'https://store.steampowered.com/app/2395760/MagicCraft/'

const GAMEPLAY_GALLERY = [
  {
    ...GAMEPLAY_SCREENSHOTS.capturePoint,
    label: 'Capture the Point',
  },
  {
    ...GAMEPLAY_SCREENSHOTS.teamBattle,
    label: 'Objective team fights',
  },
  {
    ...GAMEPLAY_SCREENSHOTS.battleStats,
    label: 'Battle results',
  },
]

export default function GameExperienceSection() {
  return (
    <section
      id="game"
      className="scroll-mt-24 border-y border-white/5 bg-[#05051f] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#98FFF9]">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              See the game in action
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
              Established PvP. New PvE.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            MagicCraft is a live, free-to-play multiplayer MOBA. Fight across
            competitive objectives in PvP, then explore the newly released PvE
            system solo or with a team.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[30px] border border-white/10 bg-[#080a2a] shadow-[0_30px_100px_rgba(0,0,0,0.25)] lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div className="p-3 sm:p-5 lg:p-6">
            <div className="relative aspect-video overflow-hidden rounded-[22px] border border-white/10 bg-black shadow-2xl">
              <video
                aria-label={GAMEPLAY_VIDEO.title}
                aria-describedby="gameplay-video-description"
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={GAMEPLAY_VIDEO.poster}
              >
                <source src={GAMEPLAY_VIDEO.src} type="video/mp4" />
                Your browser cannot play this video. You can watch MagicCraft
                gameplay on Steam instead.
              </video>
              <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-[#020418]/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-4 sm:top-4">
                Official gameplay
              </span>
            </div>
            <p
              id="gameplay-video-description"
              className="mt-3 text-xs leading-5 text-white/50"
            >
              First-party gameplay footage with game audio and no spoken
              narration.
            </p>
          </div>

          <div className="flex flex-col justify-center p-6 pt-2 sm:p-9 sm:pt-4 lg:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#10B981]/35 bg-[#10B981]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#6EE7B7]">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                Live game
              </span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B591F2]/35 bg-[#B591F2]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#D8C9FF]">
                New PvE • May 2026
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl border border-[#98FFF9]/15 bg-[#98FFF9]/5 p-4">
                <Swords
                  className="h-5 w-5 text-[#98FFF9]"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-black text-white">Established PvP</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Capture the Point, Escort and Skull Grab in competitive team
                  battles.
                </p>
              </div>
              <div className="rounded-2xl border border-[#B591F2]/20 bg-[#B591F2]/5 p-4">
                <Map
                  className="h-5 w-5 text-[#D8C9FF]"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-black text-white">New PvE adventure</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Explore areas, quests, bosses, progression and loot solo or
                  in co-op.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
              <button
                type="button"
                onClick={openGameByDevice}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-3 text-sm font-black text-[#03082f] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Play MagicCraft
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href={PVE_UPDATE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 px-2 text-sm font-black text-white no-underline transition hover:text-[#98FFF9] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                Read the PvE update
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {GAMEPLAY_GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.035]"
            >
              <div className="aspect-video overflow-hidden bg-[#020418]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-bold text-white/80">
                {item.label}
                <span className="text-[#98FFF9]" aria-hidden="true">
                  ●
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-white/45">
          Publisher-supplied game captures.{' '}
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold text-white/65 underline decoration-white/20 underline-offset-4 hover:text-[#98FFF9]"
          >
            View MagicCraft on Steam
          </a>
        </p>
      </div>
    </section>
  )
}
