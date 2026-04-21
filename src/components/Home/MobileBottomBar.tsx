import { MessageCircle } from 'lucide-react'
import { trackCta } from '@/lib/analytics'

export default function MobileBottomBar() {
  const openLiveSupport = () => {
    trackCta({ cta: 'live_chat', location: 'mobile_bottom_bar' })
    if (typeof window === 'undefined') return
    window.dispatchEvent(new CustomEvent('mc:live-support:open'))
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 md:hidden z-50 pb-[max(env(safe-area-inset-bottom),4px)]"
      data-mobile-bottom-bar
    >
      <div className="w-full bg-[#0B0F39]/82 backdrop-blur border-t border-white/10 px-2 py-1 flex items-center gap-2">
        <a
          href="https://lobby.magiccraft.io/"
          rel="noreferrer noopener"
          onClick={() => trackCta({ cta: 'play_now', location: 'mobile_bottom_bar' })}
          className="flex-1 inline-flex items-center justify-center h-10 rounded-md text-[12px] font-semibold text-white bg-white/10 border border-white/20"
        >
          Play Now
        </a>
        <button
          type="button"
          onClick={openLiveSupport}
          aria-label="Open Live Support chat"
          className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white bg-white/10 border border-white/20"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
        <a
          href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
          rel="noreferrer noopener"
          onClick={() => trackCta({ cta: 'buy_mcrt', location: 'mobile_bottom_bar', label: 'bybit' })}
          className="flex-1 inline-flex items-center justify-center h-10 rounded-md text-[12px] font-semibold text-[#03082F] bg-gradient-to-b from-[#A9FFF6] to-[#8EECE6] border border-white/20"
        >
          Buy $MCRT
        </a>
      </div>
    </div>
  )
}
