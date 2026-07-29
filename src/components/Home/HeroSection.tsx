import { ArrowDown, ArrowUpRight, Gamepad2, Sparkles } from 'lucide-react'
import { AI_PRODUCTS } from '@/data/aiProducts'
import { GAMEPLAY_SCREENSHOTS } from '@/data/gameplayMedia'
import { openGameByDevice } from '@/lib/gameActions'
import { homePrimaryActionClass, homeSecondaryActionClass } from './homeStyles'

const productStatusSummary = [
  `${AI_PRODUCTS.filter((product) => product.status === 'Live').length} live`,
  `${AI_PRODUCTS.filter((product) => product.status === 'Beta').length} beta`,
  `${
    AI_PRODUCTS.filter((product) => product.status === 'Early access').length
  } early access`,
].join(' · ')

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-[#02051e]"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_18%,rgba(152,255,249,0.12),transparent_30%),radial-gradient(circle_at_84%_28%,rgba(181,145,242,0.14),transparent_32%),linear-gradient(180deg,#02051e_0%,#03082f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-t from-[#03082f] to-transparent" />

      <div className="mx-auto grid w-full max-w-screen-2xl gap-9 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-28 xl:min-h-[800px] xl:grid-cols-[0.9fr_1.1fr] xl:items-center xl:gap-12 xl:px-16 xl:pt-36">
        <div className="min-w-0 max-w-[740px]">
          <div className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#98FFF9] backdrop-blur-xl sm:text-xs">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            MagicCraft Studio
          </div>

          <h1 className="mt-5 max-w-[720px] text-balance font-sans text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[64px] lg:text-[72px] xl:text-[82px]">
            Play the game. Put AI to work.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-6 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
            One independent studio for a live multiplayer game and six focused
            AI products. Choose the experience you need and go straight to it.
          </p>

          <div
            id="hero-primary-actions"
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={openGameByDevice}
              className={homePrimaryActionClass}
            >
              <Gamepad2 className="h-5 w-5" aria-hidden="true" />
              Play MagicCraft
            </button>
            <a href="#ai-products" className={homeSecondaryActionClass}>
              Explore 6 AI products
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/[0.58]">
            <span>Live on iOS, Android, Steam and PC</span>
            <span className="before:mr-5 before:hidden before:text-white/20 before:content-['•'] sm:before:inline">
              Wallet optional
            </span>
          </div>
        </div>

        <div
          className="grid min-w-0 gap-4 sm:grid-cols-2"
          aria-label="MagicCraft experiences"
        >
          <button
            type="button"
            onClick={openGameByDevice}
            className="group relative min-h-[330px] overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#080a2a] text-left shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:shadow-[0_34px_100px_rgba(0,0,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[500px] lg:min-h-[560px]"
          >
            <img
              src={GAMEPLAY_SCREENSHOTS.tripleKill.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              loading="eager"
            />
            <div className="via-[#020418]/42 absolute inset-0 bg-gradient-to-t from-[#020418] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6EE7B7]/25 bg-[#071d25]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6EE7B7] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                Live game
              </span>
              <p className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[38px]">
                PvP and PvE across mobile and PC
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#98FFF9]">
                Choose your platform
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </button>

          <a
            href="#ai-products"
            className="group relative min-h-[330px] overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#090827] text-left no-underline shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#B591F2]/45 hover:no-underline hover:shadow-[0_34px_100px_rgba(0,0,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B591F2] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[500px] lg:min-h-[560px]"
          >
            <img
              src="/magiccraft-ai-suite-social-preview.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-75 transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              loading="eager"
            />
            <div className="via-[#05051f]/72 absolute inset-0 bg-gradient-to-t from-[#03031c] to-[#05051f]/15" />
            <div className="relative flex h-full min-h-[330px] flex-col justify-between p-5 sm:min-h-[500px] sm:p-6 lg:min-h-[560px]">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C9FF]/25 bg-[#090827]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D8C9FF] backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  AI product suite
                </span>
                <span className="text-xs font-medium text-white/60">
                  {AI_PRODUCTS.length} products
                </span>
              </div>

              <div>
                <div
                  className="mb-5 flex -space-x-2"
                  aria-label={AI_PRODUCTS.map((product) => product.name).join(
                    ', '
                  )}
                >
                  {AI_PRODUCTS.map((product) => (
                    <span
                      key={product.id}
                      className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#05051f]/85 p-1.5 shadow-lg backdrop-blur-xl"
                    >
                      <img
                        src={product.navIcon}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                        decoding="async"
                      />
                    </span>
                  ))}
                </div>
                <p className="text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[38px]">
                  AI for work, film, marketing, meetings and wellness
                </p>
                <p className="mt-4 text-sm leading-6 text-white/[0.68]">
                  Merlin, Akyn, MagicAds, MAGAS7, DragonList and DocAI.
                </p>
                <span className="mt-2 block text-xs font-medium text-white/[0.48]">
                  {productStatusSummary}
                </span>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#D8C9FF]">
                  Find your product
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
