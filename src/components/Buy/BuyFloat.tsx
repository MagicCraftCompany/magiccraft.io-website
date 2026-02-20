import { useState, useEffect } from 'react'
import { useMcrtPrice } from '@/lib/useMcrtPrice'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { MCRT_CONTRACT, BYBIT_URL, PANCAKESWAP_URL } from '@/constants'

export default function BuyFloat() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const { copied, copy } = useCopyToClipboard()
  const { price } = useMcrtPrice(180_000)
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling ~80vh (past hero section)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!visible) return null
  
  return (
    <div className="hidden md:block fixed right-3 bottom-3 sm:right-5 sm:bottom-5 z-[50000]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full bg-gradient-to-b from-[#98FFF9] to-[#B591F2] text-[#03082F] font-bold animate-glow border border-white/30 text-sm sm:text-base hover:brightness-110 active:scale-[0.99] transition-all px-4 py-2.5 sm:px-5 sm:py-3"
        aria-expanded={open}
        aria-label="Open buy options for MCRT"
      >
        Buy $MCRT{price?.usd ? ` · $${price.usd.toFixed(5)}` : ''}
      </button>
      {open && (
        <div className="absolute right-0 bottom-full mb-2 w-[280px] sm:w-[320px] rounded-xl glass-surface glass-strong shadow-2xl p-3 animate-fade-in">
          <div className="text-sm text-white/85 mb-2 font-semibold">Choose where to buy</div>
          <div className="grid grid-cols-1 gap-2">
            <a href={BYBIT_URL} target="_blank" rel="noreferrer noopener" className="btn-primary w-full text-center">Bybit (Spot)</a>
            <a href={PANCAKESWAP_URL} target="_blank" rel="noreferrer noopener" className="btn-secondary w-full text-center">PancakeSwap</a>
            <button
              onClick={() => {
                copy(MCRT_CONTRACT)
                setOpen(false)
              }}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm active:scale-[0.99]"
            >
              {copied ? 'Copied!' : 'Copy Contract'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


