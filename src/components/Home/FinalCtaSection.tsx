import { ArrowDown, Gamepad2, Sparkles } from 'lucide-react'
import { openGameByDevice } from '@/lib/gameActions'
import { homePrimaryActionClass, homeSecondaryActionClass } from './homeStyles'

export default function FinalCtaSection() {
  return (
    <section className="mc-home-section relative isolate overflow-hidden bg-[#020418] px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_24%_50%,rgba(152,255,249,0.16),transparent_32%),radial-gradient(circle_at_74%_42%,rgba(181,145,242,0.18),transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#98FFF9]/40 to-transparent" />

      <div className="mx-auto max-w-screen-xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">
          <Gamepad2 className="h-5 w-5 text-[#98FFF9]" aria-hidden="true" />
          <span className="h-4 w-px bg-white/15" aria-hidden="true" />
          <Sparkles className="h-5 w-5 text-[#D8C9FF]" aria-hidden="true" />
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#98FFF9]">
          Choose your starting point
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-balance font-sans text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">
          Enter the game or open the tool you need.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          MagicCraft is playable now, and every AI product has its own focused
          workflow. Start with the experience that solves today&apos;s job.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openGameByDevice}
            className={homePrimaryActionClass}
          >
            <Gamepad2 className="h-5 w-5" aria-hidden="true" />
            Play MagicCraft
          </button>
          <a href="#ai-products" className={homeSecondaryActionClass}>
            Explore AI products
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
