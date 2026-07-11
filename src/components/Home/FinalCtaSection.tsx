import { ExternalLink, Gamepad2 } from 'lucide-react'
import { ANDROID_APP_URL, IOS_APP_URL, PC_GAME_URL } from '@/constants'
import { openGameByDevice } from '@/lib/gameActions'

const LOBBY_URL = 'https://lobby.magiccraft.io/'

export default function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020418] px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <img
        src="/img/hero.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center opacity-75"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,4,24,0.98),rgba(2,4,24,0.72)_58%,rgba(2,4,24,0.58))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_52%,rgba(152,255,249,0.16),transparent_30%)]" />

      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#98FFF9]">
            Your hero is waiting
          </p>
          <h2 className="mt-4 text-balance font-serif text-5xl font-black leading-[0.98] text-white sm:text-6xl">
            Enter the Ashvales.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Start with the free game. Learn the heroes, find your squad, and
            choose how deep into the MagicCraft economy you want to go.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openGameByDevice}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#98FFF9] px-6 py-3 text-base font-black text-[#03082f] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Gamepad2 className="h-5 w-5" aria-hidden="true" />
              Play free
            </button>
            <a
              href={LOBBY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-6 py-3 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
            >
              View live lobbies
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/60">
            <a className="hover:text-white" href={IOS_APP_URL} target="_blank" rel="noreferrer noopener">
              iOS ↗
            </a>
            <a className="hover:text-white" href={ANDROID_APP_URL} target="_blank" rel="noreferrer noopener">
              Android ↗
            </a>
            <a className="hover:text-white" href={PC_GAME_URL} target="_blank" rel="noreferrer noopener">
              Steam ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
