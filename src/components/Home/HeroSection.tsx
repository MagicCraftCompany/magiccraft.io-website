import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Gamepad2,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { AI_PRODUCTS } from '@/data/aiProducts'
import { openGameByDevice } from '@/lib/gameActions'

const liveProductCount = AI_PRODUCTS.filter(
  (product) => product.status === 'Live'
).length
const betaProductCount = AI_PRODUCTS.filter(
  (product) => product.status === 'Beta'
).length
const earlyAccessProductCount = AI_PRODUCTS.filter(
  (product) => product.status === 'Early access'
).length

const proofPoints = [
  'Live PvP + PvE game',
  `${AI_PRODUCTS.length} mapped AI products`,
  'Mobile + PC',
  'Web3 is optional',
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-[#02051e]"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_20%,rgba(152,255,249,0.13),transparent_30%),radial-gradient(circle_at_82%_32%,rgba(181,145,242,0.16),transparent_31%),linear-gradient(180deg,#02051e_0%,#03082f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-48 bg-gradient-to-t from-[#03082f] to-transparent" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="mx-auto grid w-full max-w-screen-2xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[820px] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-24 lg:pt-40 xl:px-16">
        <div className="max-w-[760px]">
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"
            alt="MagicCraft"
            className="h-auto w-[210px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:w-[270px]"
            loading="eager"
          />

          <div className="mt-6 inline-flex min-h-9 items-center gap-2 rounded-full border border-[#98FFF9]/30 bg-[#071c35]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#98FFF9] backdrop-blur-md sm:text-xs">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            One studio • live game • six AI products
          </div>

          <h1 className="mt-5 font-serif text-[42px] font-black leading-[0.98] tracking-[-0.035em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:text-balance sm:text-6xl lg:text-[68px] xl:text-[76px]">
            Play the game. Put AI to work.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Play MagicCraft across mobile and PC, then explore practical AI
            products for work, film, marketing, meetings and wellness. Each
            experience has a clear purpose and a direct place to start.
          </p>

          <div
            id="hero-primary-actions"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={openGameByDevice}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-3 text-base font-black text-[#03082f] shadow-[0_14px_45px_rgba(152,255,249,0.22)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#03082f]"
            >
              <Gamepad2 className="h-5 w-5" aria-hidden="true" />
              Play MagicCraft
            </button>
            <a
              href="#ai-products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3 text-base font-bold text-white no-underline backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#98FFF9]/60 hover:bg-white/[0.14] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
            >
              Explore 6 AI products
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-[11px] font-bold text-white/70 backdrop-blur-sm sm:text-xs"
              >
                <BadgeCheck
                  className="h-3.5 w-3.5 shrink-0 text-[#6EE7B7]"
                  aria-hidden="true"
                />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-[1.18fr_0.82fr] lg:grid-rows-2 lg:gap-4">
          <button
            type="button"
            onClick={openGameByDevice}
            aria-label="Play the MagicCraft game"
            className="group relative col-span-2 min-h-[250px] overflow-hidden rounded-[28px] border border-white/15 bg-[#080a2a] text-left shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-[#98FFF9]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:min-h-[430px] lg:col-span-1 lg:row-span-2 lg:min-h-[540px]"
          >
            <img
              src="/magiccraft-social-preview.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020418] via-[#020418]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6EE7B7]/30 bg-[#071d25]/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#6EE7B7] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                Live game
              </span>
              <p className="mt-3 font-serif text-3xl font-black leading-tight text-white sm:text-4xl">
                PvP + PvE across mobile and PC
              </p>
              <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-black text-[#98FFF9]">
                Choose your platform
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </button>

          <a
            href="#ai-products"
            className="group relative min-h-[170px] overflow-hidden rounded-[22px] border border-[#B591F2]/25 bg-[#090827] p-4 no-underline transition hover:-translate-y-1 hover:border-[#B591F2]/55 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B591F2] sm:min-h-[230px] sm:rounded-[24px] sm:p-5 lg:min-h-0"
          >
            <img
              src="/magiccraft-ai-suite-social-preview.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-80 transition duration-700 group-hover:scale-[1.025]"
              loading="lazy"
            />
            <div className="via-[#05051f]/82 absolute inset-0 bg-gradient-to-r from-[#05051f] to-[#05051f]/20" />
            <div className="relative flex h-full flex-col justify-end">
              <Sparkles className="h-5 w-5 text-[#D8C9FF]" aria-hidden="true" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#D8C9FF]">
                AI product suite
              </p>
              <p className="mt-1 text-lg font-black leading-tight text-white sm:text-2xl">
                {liveProductCount} live • {betaProductCount} beta •{' '}
                {earlyAccessProductCount} early
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white/80 group-hover:text-white">
                Find your tool
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </a>

          <Link
            to="/stats"
            className="group relative min-h-[170px] overflow-hidden rounded-[22px] border border-[#98FFF9]/20 bg-[#07142b] p-4 no-underline transition hover:-translate-y-1 hover:border-[#98FFF9]/50 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:min-h-[230px] sm:rounded-[24px] sm:p-5 lg:min-h-0"
          >
            <img
              src="/img/gameplay-arena-2.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-[1.025]"
              loading="lazy"
            />
            <div className="via-[#03082f]/72 absolute inset-0 bg-gradient-to-t from-[#03082f] to-[#03082f]/15" />
            <div className="relative flex h-full flex-col justify-end">
              <BarChart3
                className="h-5 w-5 text-[#98FFF9]"
                aria-hidden="true"
              />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#98FFF9]">
                Verified activity
              </p>
              <p className="mt-1 text-lg font-black leading-tight text-white sm:text-2xl">
                Live game stats
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white/80 group-hover:text-white">
                See live proof
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
