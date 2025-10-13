import { useState } from 'react'
import { useMcrtPrice } from '@/lib/useMcrtPrice'

export default function BuyFloat() {
  const [open, setOpen] = useState(false)
  const { price } = useMcrtPrice(180_000)
  return (
    <div className="fixed right-3 bottom-3 sm:right-5 sm:bottom-5 z-[100000]">
      <button onClick={() => setOpen((v) => !v)} className="px-3 py-2 rounded-full bg-gradient-to-b from-[#98FFF9] to-[#B591F2] text-[#03082F] font-bold shadow-lg border border-white/30">
        Buy $MCRT{price?.usd ? ` · $${price.usd.toFixed(5)}` : ''}
      </button>
      {open && (
        <div className="mt-2 w-[280px] sm:w-[320px] rounded-xl bg-black/70 backdrop-blur-xl border border-white/20 shadow-2xl p-3">
          <div className="text-sm text-white/85 mb-2">Choose where to buy</div>
          <div className="grid grid-cols-1 gap-2">
            <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="btn-primary w-full text-center">Bybit (Spot)</a>
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f" target="_blank" rel="noreferrer noopener" className="btn-secondary w-full text-center">PancakeSwap</a>
            <button onClick={() => navigator.clipboard.writeText('0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f')} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm">Copy Contract</button>
          </div>
        </div>
      )}
    </div>
  )
}


