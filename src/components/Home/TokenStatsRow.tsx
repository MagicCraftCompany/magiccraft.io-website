import { BYBIT_URL, PANCAKESWAP_URL } from '@/constants'
import { openMetaMaskMcrt } from '@/lib/gameActions'
import { trackCta } from '@/lib/analytics'

export default function TokenStatsRow() {
  return (
    <section className="w-full bg-gradient-to-b from-[#03082f] via-[#07051e] to-[#0a0524] px-3 py-4 sm:px-4 sm:py-5 md:px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6 md:gap-6 md:px-8 lg:flex-row">
          <div className="flex flex-1 flex-wrap justify-center gap-4 sm:gap-6 lg:justify-start">
            {[
              { label: 'Standard', value: 'BEP-20' },
              { label: 'Network', value: 'BNB Chain' },
              { label: 'Tx Speed', value: '~3 sec' },
              { label: 'Avg Fee', value: '~$0.01' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">
                  {label}
                </div>
                <div className="mt-0.5 text-sm font-bold text-white sm:text-base">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PANCAKESWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCta({ cta: 'pancakeswap', location: 'token_stats_row' })
              }
              className="btn-primary interactive-scale"
            >
              PancakeSwap
            </a>
            <button
              type="button"
              onClick={() => void openMetaMaskMcrt('token_stats_row')}
              className="btn-secondary"
            >
              MetaMask
            </button>
            <a
              href={BYBIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCta({ cta: 'bybit', location: 'token_stats_row' })
              }
              className="btn-secondary"
            >
              Bybit
            </a>
            <a
              href="https://coinmarketcap.com/currencies/magiccraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/60 transition-colors hover:text-white"
            >
              CoinMarketCap ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
