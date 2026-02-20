import { openTransactionModal } from '@xswap-link/sdk'
import { openExternalLink } from '@/lib/utils'
import { BYBIT_URL, MCRT_CONTRACT, IOS_APP_URL, ANDROID_APP_URL, PC_GAME_URL } from '@/constants'

export function getDeviceDetails() {
  if (typeof window === 'undefined') {
    return { isIOS: false, isAndroid: false, isMobile: false }
  }
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera
  const isIOS = /iPad|iPhone|iPod/.test(ua)
  const isAndroid = /Android/.test(ua)
  return { isIOS, isAndroid, isMobile: isIOS || isAndroid }
}

export const openGameByDevice = () => {
  const { isIOS, isAndroid } = getDeviceDetails()
  const url = isIOS ? IOS_APP_URL : isAndroid ? ANDROID_APP_URL : PC_GAME_URL
  openExternalLink(url)
}

export const handleBuyMCRT = async () => {
  const { isIOS } = getDeviceDetails()
  if (isIOS) {
    window.location.href = BYBIT_URL
    return
  }
  try {
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
