import { ArrowUpRight, BadgeCheck, Map, Swords } from 'lucide-react'
import { openGameByDevice } from '@/lib/gameActions'

const PVE_UPDATE_URL = 'https://steamcommunity.com/app/2395760'

export default function GameExperienceSection() {
  return (
    <section
      id="game"
      className="scroll-mt-24 border-y border-white/5 bg-[#05051f] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-screen-xl overflow-hidden rounded-[30px] border border-white/10 bg-[#080a2a] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
          <img
            src="/img/gameplay-arena-2.webp"
            alt="MagicCraft heroes battling in the live multiplayer arena"
            className="absolute inset-0 h-full w-full object-cover opacity-85"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a2a] via-[#080a2a]/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#080a2a]" />
          <div className="absolute bottom-5 left-5 flex flex-wrap gap-2 sm:bottom-7 sm:left-7">
            <span className="rounded-full border border-white/15 bg-[#03051d]/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/80 backdrop-blur-md">
              Free to play
            </span>
            <span className="rounded-full border border-white/15 bg-[#03051d]/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/80 backdrop-blur-md">
              Mobile + PC
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#10B981]/35 bg-[#10B981]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#6EE7B7]">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Live game
            </span>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B591F2]/35 bg-[#B591F2]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#D8C9FF]">
              New PvE • May 2026
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3 text-[#98FFF9]">
            <Swords className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-[0.16em]">
              MagicCraft Game
            </span>
          </div>
          <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
            Established PvP. New PvE.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            MagicCraft is a live, free-to-play multiplayer MOBA. Its established
            PvP (player versus player) battles now sit alongside the newly
            released PvE (player versus environment) system.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#98FFF9]/15 bg-[#98FFF9]/5 p-4">
              <Swords className="h-5 w-5 text-[#98FFF9]" aria-hidden="true" />
              <h3 className="mt-3 font-black text-white">Established PvP</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Capture the Point, Escort and Skull Grab across competitive team
                battles.
              </p>
            </div>
            <div className="rounded-2xl border border-[#B591F2]/20 bg-[#B591F2]/5 p-4">
              <Map className="h-5 w-5 text-[#D8C9FF]" aria-hidden="true" />
              <h3 className="mt-3 font-black text-white">New PvE adventure</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Play solo or co-op through explorable areas, quests, bosses,
                progression and loot.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
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
    </section>
  )
}
