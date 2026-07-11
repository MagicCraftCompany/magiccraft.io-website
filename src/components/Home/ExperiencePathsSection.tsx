import { ArrowUpRight, Coins, Gamepad2, Hammer, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { openGameByDevice } from '@/lib/gameActions'

const LOBBY_URL = 'https://lobby.magiccraft.io/'

const proofPoints = [
  { value: 'Free', label: 'to play' },
  { value: 'PvP + PvE', label: 'ways to battle' },
  { value: 'Mobile + PC', label: 'cross-platform' },
  { value: '100K+', label: 'Android downloads' },
]

export default function ExperiencePathsSection() {
  return (
    <section className="relative overflow-hidden bg-[#03082f] px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#6e4bca]/[0.15] blur-[120px]" />

      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="bg-[#070b2d] px-4 py-4 text-center sm:px-6 sm:py-5"
            >
              <p className="text-lg font-black text-white sm:text-xl">
                {point.value}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-xs">
                {point.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#98FFF9]">
            One world, your way in
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
            Play the game before you learn the economy.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/[0.65] sm:text-lg">
            MagicCraft works as a free fantasy battler first. The wallet,
            rewards, marketplace, and creator layer are optional paths you can
            enter when they add value to your experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/[0.12] lg:col-span-6">
            <img
              src="/img/gameplay-arena-2.webp"
              alt="MagicCraft heroes battling in a team arena"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020418] via-[#020418]/65 to-[#020418]/10" />
            <div className="relative flex min-h-[430px] flex-col justify-end p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#98FFF9]/30 bg-[#98FFF9]/[0.15] text-[#98FFF9] backdrop-blur-md">
                <Gamepad2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#98FFF9]">
                Start here
              </p>
              <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                Play free
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                Pick a hero and jump into objective-based fantasy combat. No
                wallet is required for the base game.
              </p>
              <button
                type="button"
                onClick={openGameByDevice}
                className="mt-6 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#03082f] transition hover:bg-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03082f]"
              >
                Choose your platform
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>

          <article className="flex min-h-[360px] flex-col justify-between rounded-[28px] border border-[#B591F2]/25 bg-[linear-gradient(155deg,rgba(181,145,242,0.20),rgba(9,6,35,0.92)_58%)] p-6 sm:p-8 lg:col-span-3">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B591F2]/30 bg-[#B591F2]/[0.15] text-[#d7c8ff]">
                <Coins className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#d7c8ff]">
                Optional Web3
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                Compete in live lobbies
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/[0.65]">
                Connect when you want token reward pools, eligible asset
                utility, and a transparent lobby schedule.
              </p>
            </div>
            <a
              href={LOBBY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition hover:text-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
            >
              See live lobbies
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          <article className="flex min-h-[360px] flex-col justify-between rounded-[28px] border border-[#FFB649]/25 bg-[linear-gradient(155deg,rgba(255,182,73,0.17),rgba(9,6,35,0.92)_58%)] p-6 sm:p-8 lg:col-span-3">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFB649]/30 bg-[#FFB649]/[0.15] text-[#ffd18a]">
                <Hammer className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#ffd18a]">
                Creator path
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                Help build the world
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/[0.65]">
                Explore character skins, maps, marketplace tools, and the
                growing builder program around MagicCraft.
              </p>
            </div>
            <Link
              to="/build-on-magiccraft"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition hover:text-[#FFB649] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB649]"
            >
              Explore creator tools
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm leading-6 text-white/60 sm:px-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#98FFF9]" aria-hidden="true" />
          <p>
            $MCRT features have wallet, eligibility, network, and jurisdiction
            requirements. The free game remains the simplest place to start.
          </p>
        </div>
      </div>
    </section>
  )
}
