type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

export type CtaEvent = {
  cta:
    | 'play_now'
    | 'buy_mcrt'
    | 'live_chat'
    | 'shop'
    | 'pancakeswap'
    | 'bybit'
    | 'htx'
    | 'copy_contract'
    | 'download_ios'
    | 'download_android'
    | 'download_pc'
    | 'download_steam'
  location?: string
  label?: string
}

export function trackCta({ cta, location, label }: CtaEvent): void {
  if (typeof window === 'undefined') return
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        cta_id: cta,
        cta_location: location ?? 'unknown',
        cta_label: label,
      })
      return
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'cta_click',
        cta_id: cta,
        cta_location: location ?? 'unknown',
        cta_label: label,
      })
    }
  } catch {
    // analytics must never break user flow
  }
}
