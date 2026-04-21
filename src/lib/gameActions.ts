import { openExternalLink } from '@/lib/utils'
import { trackCta } from '@/lib/analytics'
import { BYBIT_URL, MCRT_CONTRACT, IOS_APP_URL, ANDROID_APP_URL, PC_GAME_URL } from '@/constants'

export function getDeviceDetails() {
  if (typeof window === 'undefined') {
    return { isIOS: false, isAndroid: false, isMobile: false }
  }
  const ua = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || ''
  const isIOS = /iPad|iPhone|iPod/.test(ua)
  const isAndroid = /Android/.test(ua)
  return { isIOS, isAndroid, isMobile: isIOS || isAndroid }
}

export const openGameByDevice = () => {
  const { isIOS, isAndroid } = getDeviceDetails()
  const url = isIOS ? IOS_APP_URL : isAndroid ? ANDROID_APP_URL : PC_GAME_URL
  trackCta({
    cta: 'play_now',
    location: 'game_actions',
    label: isIOS ? 'ios' : isAndroid ? 'android' : 'pc',
  })
  openExternalLink(url)
}

export const handleBuyMCRT = async () => {
  const { isIOS } = getDeviceDetails()
  trackCta({ cta: 'buy_mcrt', location: 'game_actions', label: isIOS ? 'bybit_redirect' : 'xswap_modal' })
  if (isIOS) {
    window.location.href = BYBIT_URL
    return
  }
  try {
    const { openTransactionModal } = await import('@xswap-link/sdk')
    await openTransactionModal({
      integratorId: '34808808c1f4ae4533b7',
      dstChain: '56',
      dstToken: MCRT_CONTRACT,
      srcChain: '56',
      srcToken: '0x0000000000000000000000000000000000000000',
      defaultWalletPicker: true,
    })
  } catch {
    openExternalLink(BYBIT_URL)
  }
}
