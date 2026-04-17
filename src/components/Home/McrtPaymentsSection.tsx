import bnbLogo from '@/assets/icons/bnblogo.svg'
import { handleBuyMCRT } from '@/lib/gameActions'

export default function McrtPaymentsSection() {
  return (
    <section id="mcrt-payments" className="w-full border-t border-white/5 bg-gradient-to-b from-[#03082f] via-[#0a0524] to-[#03082f]">
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-6 sm:py-8">
        <div className="card-glass rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 sm:px-6 md:px-8 py-5 sm:py-7 shadow-[0_0_30px_rgba(152,255,249,0.1)]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 md:gap-6">
            <div className="text-center lg:text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 mb-3">
                <img src={bnbLogo} alt="BNB Chain" className="h-3.5 w-3.5" />
                <span>Built on BNB Chain</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                Seamless Payments & Ecosystem Utility
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                $MCRT is engineered for speed and scale. Operating on the BEP‑20 standard,
                payments settle in seconds with fees around a cent and capacity for thousands of transactions per second.
                Send value instantly between players, power in‑game commerce, and fuel AI-driven experiences across the MagicCraft economy.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 text-[11px] sm:text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                {/* Speed icon */}
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4a8 8 0 1 1-7.938 7H5a7 7 0 1 0 2.05-4.95l1.414 1.415A5 5 0 1 1 17 12h2A7 7 0 0 0 12 4Zm.5 4a1 1 0 0 0-1 1v3.586l-2.207 2.207a1 1 0 1 0 1.414 1.414l2.5-2.5A1 1 0 0 0 13.5 13V9a1 1 0 0 0-1-1Z"/></svg>
                <span>USDT‑like speed</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                {/* Coin icon */}
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 4.239 2 7s4.477 5 10 5 10-2.239 10-5-4.477-5-10-5Zm0 12c-5.523 0-10-2.239-10-5v3c0 2.761 4.477 5 10 5s10-2.239 10-5V9c0 2.761-4.477 5-10 5Zm0 4c-5.523 0-10-2.239-10-5v3c0 2.761 4.477 5 10 5s10-2.239 10-5v-3c0 2.761-4.477 5-10 5Z"/></svg>
                <span>~1¢ fees</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                {/* TPS icon */}
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 5h6v6H4V5Zm10 0h6v6h-6V5ZM4 13h6v6H4v-6Zm10 4h6v2h-6v-2Z"/></svg>
                <span>High TPS</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80">
                {/* P2P icon */}
                <svg className="h-3.5 w-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5 17a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1H5v-1Z"/></svg>
                <span>Player ↔ Player</span>
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
            <button onClick={handleBuyMCRT} className="btn-primary interactive-scale">
              Get $MCRT
            </button>
            <a href="/build-on-magiccraft" className="btn-secondary">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}
