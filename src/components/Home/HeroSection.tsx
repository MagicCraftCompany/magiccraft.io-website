import { ArrowDown, ExternalLink, Hammer, Sparkles } from 'lucide-react'

const MERLIN_URL = 'https://merlintheai.com/'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[740px] w-full overflow-hidden bg-[#02051e] sm:min-h-[780px] lg:min-h-[820px]"
    >
      <img
        src="/magiccraft-ai-suite-social-preview.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[62%_center] opacity-70 sm:object-center sm:opacity-80"
        loading="eager"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,5,30,0.99)_0%,rgba(2,5,30,0.96)_43%,rgba(2,5,30,0.58)_70%,rgba(2,5,30,0.38)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_30%,rgba(152,255,249,0.12),transparent_30%),radial-gradient(circle_at_68%_62%,rgba(181,145,242,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#03082f] to-transparent" />

      <div className="mx-auto flex min-h-[740px] w-full max-w-screen-2xl items-center px-5 pb-16 pt-20 sm:min-h-[780px] sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[820px] lg:px-12 lg:pb-24 lg:pt-40 xl:px-16">
        <div className="max-w-[850px] text-center sm:text-left">
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717173072/MagicCraft_1_txz7ga.webp"
            alt="MagicCraft"
            className="mx-auto h-auto w-[220px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:mx-0 sm:w-[285px]"
            loading="eager"
          />

          <div className="mt-7 inline-flex min-h-9 items-center gap-2 rounded-full border border-[#98FFF9]/30 bg-[#071c35]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#98FFF9] backdrop-blur-md sm:text-xs">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            MagicCraft AI Product Studio
          </div>

          <h1 className="mt-5 text-balance font-serif text-5xl font-black leading-[0.98] tracking-[-0.035em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl xl:text-[78px]">
            AI products that create, operate and grow.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/75 sm:mx-0 sm:text-lg sm:leading-8">
            MagicCraft builds practical AI products for creators, operators,
            marketers and teams. Make films with Akyn, run work with Merlin,
            preview agentic marketing with MAGAS7, launch campaigns with
            MagicAds, and turn meetings into action with DragonList.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-start">
            <a
              href="#ai-products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-3 text-base font-black text-[#03082f] no-underline shadow-[0_14px_45px_rgba(152,255,249,0.22)] transition hover:-translate-y-0.5 hover:no-underline hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#03082f]"
            >
              Explore the AI suite
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={MERLIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3 text-base font-bold text-white no-underline backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#98FFF9]/60 hover:bg-white/[0.14] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
            >
              Open Merlin AI
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-7 flex items-start justify-center gap-3 rounded-2xl border border-white/10 bg-[#040824]/75 px-4 py-4 text-left text-sm leading-6 text-white/70 backdrop-blur-md sm:w-fit sm:justify-start sm:px-5">
            <Hammer
              className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB649]"
              aria-hidden="true"
            />
            <p>
              The MagicCraft game remains in development. Our current product
              focus is the AI suite.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 sm:justify-start">
            <span>Assistants</span>
            <span aria-hidden="true">•</span>
            <span>Film</span>
            <span aria-hidden="true">•</span>
            <span>Marketing</span>
            <span aria-hidden="true">•</span>
            <span>Advertising</span>
            <span aria-hidden="true">•</span>
            <span>Developer tools</span>
          </div>
        </div>
      </div>
    </section>
  )
}
