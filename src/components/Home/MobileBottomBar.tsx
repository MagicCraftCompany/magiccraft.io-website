import { Gamepad2, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { trackCta } from '@/lib/analytics'
import { openGameByDevice } from '@/lib/gameActions'

export default function MobileBottomBar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const heroActions =
      document.getElementById('hero-primary-actions') ||
      document.getElementById('home')
    if (!heroActions || typeof IntersectionObserver === 'undefined') {
      setIsHeroVisible(false)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsHeroVisible(entry.isIntersecting)
    })

    observer.observe(heroActions)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={isHeroVisible}
      className={`fixed inset-x-0 bottom-0 z-50 pb-[max(env(safe-area-inset-bottom),4px)] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
        isHeroVisible
          ? 'pointer-events-none translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      data-mobile-bottom-bar
      data-hero-visible={isHeroVisible}
    >
      <nav
        aria-label="Quick MagicCraft actions"
        className="flex w-full items-center gap-2 border-t border-white/10 bg-[#0B0F39]/90 px-2 py-2 backdrop-blur"
      >
        <button
          type="button"
          onClick={() => {
            openGameByDevice()
          }}
          tabIndex={isHeroVisible ? -1 : undefined}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-3 text-sm font-bold text-[#03082F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98FFF9]"
        >
          <Gamepad2 aria-hidden="true" className="h-4 w-4" />
          <span>Play Game</span>
        </button>

        <a
          href="/#ai-products"
          onClick={() =>
            trackCta({
              cta: 'explore_ai_suite',
              location: 'mobile_bottom_bar',
              label: 'ai_products',
            })
          }
          tabIndex={isHeroVisible ? -1 : undefined}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98FFF9]"
        >
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          <span>AI Suite</span>
        </a>
      </nav>
    </div>
  )
}
