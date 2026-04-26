import bnbLogo from '@/assets/icons/bnblogo.svg'
import { handleBuyMCRT } from '@/lib/gameActions'
import { Link } from 'react-router-dom'

const MCRTPAY_SNIPPET = `<script src="https://mcrtpay.com/mcrtpay.js"></script>
<script>
  new MCRTPay({ paymentAmount: 25, planId: 'premium' })
</script>`

export default function McrtPaymentsSection() {
  return (
    <section id="mcrt-payments" className="w-full border-t border-white/5 bg-gradient-to-b from-[#03082f] via-[#0a0524] to-[#03082f]">
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-6 sm:py-8">

        {/* Main payments card */}
        <div className="card-glass rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 sm:px-6 md:px-8 py-5 sm:py-7 shadow-[0_0_30px_rgba(152,255,249,0.1)]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 md:gap-6">
            <div className="text-center lg:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 mb-3">
                <img src={bnbLogo} alt="BNB Chain" className="h-3.5 w-3.5" />
                <span>Built on BNB Chain</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                Payments for Players, Builders, and AI Products
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                $MCRT gives the MagicCraft ecosystem a single settlement layer for lobby entry,
                player-to-player value, NFT commerce, builder tools, creator payouts, and AI-driven experiences.
                It keeps the story simple: play, own, build, and transact with the same token.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 text-[11px] sm:text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4a8 8 0 1 1-7.938 7H5a7 7 0 1 0 2.05-4.95l1.414 1.415A5 5 0 1 1 17 12h2A7 7 0 0 0 12 4Zm.5 4a1 1 0 0 0-1 1v3.586l-2.207 2.207a1 1 0 1 0 1.414 1.414l2.5-2.5A1 1 0 0 0 13.5 13V9a1 1 0 0 0-1-1Z"/></svg>
                <span>Fast settlement</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 4.239 2 7s4.477 5 10 5 10-2.239 10-5-4.477-5-10-5Zm0 12c-5.523 0-10-2.239-10-5v3c0 2.761 4.477 5 10 5s10-2.239 10-5V9c0 2.761-4.477 5-10 5Zm0 4c-5.523 0-10-2.239-10-5v3c0 2.761 4.477 5 10 5s10-2.239 10-5v-3c0 2.761-4.477 5-10 5Z"/></svg>
                <span>Low network fees</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 5h6v6H4V5Zm10 0h6v6h-6V5ZM4 13h6v6H4v-6Zm10 4h6v2h-6v-2Z"/></svg>
                <span>On-chain utility</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5 17a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1H5v-1Z"/></svg>
                <span>Player ↔ Player</span>
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
            <button onClick={handleBuyMCRT} className="btn-primary interactive-scale">
              Get $MCRT
            </button>
            <Link to="/build-on-magiccraft" className="btn-secondary">Learn more</Link>
          </div>
        </div>

        {/* MCRTPay developer integration */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#f0b90b]/25 bg-gradient-to-br from-[#f0b90b]/[0.06] via-[#03082f]/80 to-[#0a0524]/90 backdrop-blur-sm shadow-[0_0_40px_rgba(240,185,11,0.08)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f0b90b]/40 to-transparent" aria-hidden="true" />
          <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#f0b90b]/25 bg-[#f0b90b]/10 text-2xl shadow-inner">
                  ⚡
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#98FFF9]">
                      MCRTPay
                    </span>
                    <span className="rounded-full border border-[#f0b90b]/30 bg-[#f0b90b]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#f0b90b]">
                      Free for developers
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white sm:text-lg">
                    Accept $MCRT with MCRTPay
                  </h4>
                  <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/65 sm:text-sm">
                    Drop-in widget and TypeScript-friendly flows. On-chain BscScan verification. Works with any stack — vanilla JS, Next.js, or React.
                    Add $MCRT payments to your app in minutes.
                  </p>
                  <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 sm:p-4 shadow-inner">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-white/45">Quick start</span>
                      <span className="rounded border border-[#f0b90b]/20 bg-[#f0b90b]/5 px-2 py-0.5 font-mono text-[10px] text-[#f0b90b]/90">
                        mcrtpay.js
                      </span>
                    </div>
                    <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-[#f0d36a] sm:text-xs">
                      <code>{MCRTPAY_SNIPPET}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-shrink-0 flex-col gap-2 sm:flex-row sm:items-stretch lg:w-auto lg:min-w-[200px] lg:flex-col">
                <a
                  href="https://mcrtpay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-scale inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0b90b] px-4 py-2.5 text-center text-sm font-bold text-black shadow-[0_4px_24px_rgba(240,185,11,0.25)] transition-colors hover:bg-[#e0ab00]"
                >
                  Get Started
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
                <a
                  href="https://mcrtpay.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#f0b90b]/35 bg-[#f0b90b]/5 px-4 py-2.5 text-center text-sm font-semibold text-[#f0d36a] transition-colors hover:bg-[#f0b90b]/10"
                >
                  Documentation
                  <svg className="h-3.5 w-3.5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
                <a
                  href="https://mcrtpay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-xs font-medium text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white/90"
                >
                  mcrtpay.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
