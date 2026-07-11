import { openExternalLink } from '@/lib/utils'
import { trackCta } from '@/lib/analytics'
import {
  BSC_CHAIN_ID,
  BSC_CHAIN_NAME,
  BSC_EXPLORER_URL,
  BSC_RPC_URL,
  BYBIT_URL,
  MCRT_CONTRACT,
  MCRT_TOKEN_IMAGE_URL,
  METAMASK_SWAP_URL,
  PANCAKESWAP_URL,
  IOS_APP_URL,
  ANDROID_APP_URL,
  PC_GAME_URL,
} from '@/constants'

type WalletProvider = {
  isMetaMask?: boolean
  request: (args: {
    method: string
    params?: unknown[] | object
  }) => Promise<unknown>
}

function getInjectedWallet(): WalletProvider | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as Window & { ethereum?: WalletProvider }).ethereum
}

export function getDeviceDetails() {
  if (typeof window === 'undefined') {
    return { isIOS: false, isAndroid: false, isMobile: false }
  }
  const ua =
    navigator.userAgent ||
    navigator.vendor ||
    (window as Window & { opera?: string }).opera ||
    ''
  const isIPadDesktopMode =
    /Macintosh/.test(ua) && (navigator.maxTouchPoints ?? 0) > 1
  const isIOS = /iPad|iPhone|iPod/.test(ua) || isIPadDesktopMode
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

export const openPancakeMcrt = (location = 'buy_options') => {
  trackCta({ cta: 'pancakeswap', location })
  openExternalLink(PANCAKESWAP_URL)
}

export const openBybitMcrt = (location = 'buy_options') => {
  trackCta({ cta: 'bybit', location })
  openExternalLink(BYBIT_URL)
}

async function prepareMetaMaskForMcrt(wallet: WalletProvider) {
  try {
    await wallet.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: BSC_CHAIN_ID }],
    })
  } catch (switchError) {
    const code =
      typeof switchError === 'object' &&
      switchError !== null &&
      'code' in switchError
        ? (switchError as { code?: number }).code
        : undefined

    if (code !== 4902) return

    await wallet.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: BSC_CHAIN_ID,
          chainName: BSC_CHAIN_NAME,
          nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: [BSC_RPC_URL],
          blockExplorerUrls: [BSC_EXPLORER_URL],
        },
      ],
    })
  }

  await wallet.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: MCRT_CONTRACT,
        symbol: 'MCRT',
        decimals: 18,
        image: MCRT_TOKEN_IMAGE_URL,
      },
    },
  })
}

export const openMetaMaskMcrt = async (location = 'buy_options') => {
  trackCta({ cta: 'metamask', location })
  const wallet = getInjectedWallet()

  if (wallet?.isMetaMask) {
    try {
      await prepareMetaMaskForMcrt(wallet)
    } catch {
      // The swap page still gives users a manual MetaMask path if a wallet prompt is rejected.
    }
  }

  openExternalLink(METAMASK_SWAP_URL)
}

export const handleBuyMCRT = async () => {
  trackCta({ cta: 'buy_mcrt', location: 'game_actions', label: 'buy_options' })

  if (typeof document !== 'undefined') {
    const buySection = document.getElementById('buy-mcrt')
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
  }

  openExternalLink(PANCAKESWAP_URL)
}
