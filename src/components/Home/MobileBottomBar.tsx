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
      className="fixed inset-x-0 bottom-0 z-50 pb-[max(env(safe-area-inset-bottom),4px)] md:hidden"
      data-mobile-bottom-bar
    >
      <div className="bg-[#0B0F39]/82 flex w-full items-center gap-2 border-t border-white/10 px-2 py-1 backdrop-blur">
        <a
          href="https://lobby.magiccraft.io/"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() =>
            trackCta({ cta: 'play_now', location: 'mobile_bottom_bar' })
          }
          className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-white/20 bg-white/10 text-[12px] font-semibold text-white"
        >
          Play Now
        </a>
        <button
          type="button"
          onClick={openLiveSupport}
          aria-label="Open Live Support chat"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white"
        >
          <MessageCircle className="h-4 w-4" />
        </button>
        <a
          href="/#buy-mcrt"
          rel="noreferrer noopener"
          onClick={() =>
            trackCta({
              cta: 'buy_mcrt',
              location: 'mobile_bottom_bar',
              label: 'buy_options',
            })
          }
          className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-white/20 bg-gradient-to-b from-[#A9FFF6] to-[#8EECE6] text-[12px] font-semibold text-[#03082F]"
        >
          Buy $MCRT
        </a>
      </div>
    </div>
  )
}
