import {
  ArrowUpRight,
  BadgeCheck,
  Megaphone,
  MonitorUp,
  Send,
} from 'lucide-react'

export default function MagicAdsFeatureSection() {
  return (
    <section
      id="magicads"
      className="border-y border-white/5 bg-[#07051e] px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl overflow-hidden rounded-[32px] border border-[#FFB649]/25 bg-[linear-gradient(145deg,rgba(38,18,2,0.92),rgba(9,8,39,0.96)_58%,rgba(5,13,35,0.98))] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.28)] sm:p-9 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB649]/30 bg-[#FFB649]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#FFB649]">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Live product
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFB649]/30 bg-[#FFB649]/10 text-[#FFB649]">
                <Megaphone className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFB649]">
                  Featured AI platform
                </p>
                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  MagicAds
                </h2>
              </div>
            </div>
            <h3 className="mt-7 max-w-2xl text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
              Monetize attention. Launch smarter campaigns.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              MagicAds gives publishers a way to connect eligible inventory and
              gives advertisers one place to create and manage campaigns across
              the network.
            </p>
            <a
              href="https://magicads.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FFB649] px-6 py-3 text-base font-black text-[#1b0d02] no-underline transition hover:bg-white hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore MagicAds
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <MonitorUp
                className="h-6 w-6 text-[#98FFF9]"
                aria-hidden="true"
              />
              <h4 className="mt-5 text-xl font-black text-white">
                For publishers
              </h4>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Add the provided integration and make suitable placements
                available to eligible campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <Send className="h-6 w-6 text-[#B591F2]" aria-hidden="true" />
              <h4 className="mt-5 text-xl font-black text-white">
                For advertisers
              </h4>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Build, launch and review campaigns from the MagicAds product
                rather than stitching together separate tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
