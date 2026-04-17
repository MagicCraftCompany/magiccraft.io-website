export default function TokenStatsRow() {
  return (
    <section className="w-full bg-gradient-to-b from-[#03082f] via-[#07051e] to-[#0a0524] px-3 sm:px-4 md:px-6 py-4 sm:py-5">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-5 sm:px-6 md:px-8 py-5 sm:py-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 flex-1">
            {[
              { label: 'Standard', value: 'BEP-20' },
              { label: 'Network', value: 'BNB Chain' },
              { label: 'Tx Speed', value: '~3 sec' },
              { label: 'Avg Fee', value: '~$0.01' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">{label}</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">{value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary interactive-scale"
            >
              Buy on Bybit
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              PancakeSwap
            </a>
            <a
              href="https://coinmarketcap.com/currencies/magiccraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
            >
              CoinMarketCap ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
