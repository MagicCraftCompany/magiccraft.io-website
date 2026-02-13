import { useEffect, useState } from 'react'
import { useMcrtPrice } from '@/lib/useMcrtPrice'

export default function BuyStrip() {
  const { price, loading, refresh } = useMcrtPrice(120_000)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const id = setInterval(refresh, 120_000)
    return () => clearInterval(id)
  }, [refresh])

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText('0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const priceText = price ? `$${price.usd.toFixed(5)}${price.usd_24h_change !== undefined ? ` (${price.usd_24h_change >= 0 ? '+' : ''}${price.usd_24h_change.toFixed(2)}%)` : ''}` : loading ? '—' : '—'

  return (
    <section className="w-full border-t border-white/5 bg-gradient-to-r from-[#04071F] via-[#0b0f39] to-[#04071F]">
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left w-full sm:w-auto">
            <div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 flex-shrink-0">
              <span className="text-xs text-white/70">MCRT</span>
            </div>
            <div className="text-sm sm:text-base text-white/85 min-w-0">
              Live price:{' '}
              <span className="font-semibold text-[#98FFF9] drop-shadow-sm" title={priceText}>
                {priceText}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="btn-primary flex-1 sm:flex-none min-w-[140px] text-center">Buy on Bybit</a>
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noreferrer noopener" className="btn-secondary flex-1 sm:flex-none min-w-[140px] text-center">PancakeSwap</a>
            <button
              onClick={copyContract}
              aria-label={copied ? 'Contract address copied' : 'Copy MCRT contract address'}
              className="px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm whitespace-nowrap"
            >
              {copied ? 'Copied!' : 'Copy Contract'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


