import { ArrowRight, Hammer, Swords } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function GameDevelopmentSection() {
  return (
    <section className="border-y border-white/5 bg-[#05051f] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-screen-xl overflow-hidden rounded-[30px] border border-white/10 bg-[#080a2a] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
          <img
            src="/img/gameplay-arena-2.webp"
            alt="MagicCraft game arena currently in development"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a2a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#080a2a]" />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FFB649]/30 bg-[#FFB649]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#FFB649]">
            <Hammer className="h-4 w-4" aria-hidden="true" />
            In development
          </div>
          <div className="mt-6 flex items-center gap-3 text-[#98FFF9]">
            <Swords className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-[0.16em]">
              MagicCraft Game
            </span>
          </div>
          <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
            The game is still building.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            The Ashvales experience remains a long-term MagicCraft product. The
            team&apos;s current shipping focus is the AI suite, while game work
            continues on its own track.
          </p>
          <Link
            to="/magiccraft"
            className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-black text-white no-underline transition hover:text-[#98FFF9] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
          >
            See the game roadmap
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
