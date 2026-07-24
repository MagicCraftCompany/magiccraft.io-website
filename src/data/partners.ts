import bybit from '@/assets/icons/bybit.svg'
import pancakeswap from '@/assets/icons/pancakeswap.svg'
import { BYBIT_URL, PANCAKESWAP_URL } from '@/constants'
import type { CtaEvent } from '@/lib/analytics'

export type ListedPartner = {
  name: string
  icon: string
  link: string
  market: string
  action: string
  priority: 'primary' | 'secondary'
  cta: CtaEvent['cta']
}

const partners: ListedPartner[] = [
  {
    name: 'Bybit',
    icon: bybit,
    link: BYBIT_URL,
    market: 'MCRT/USDT spot market',
    action: 'Open spot market',
    priority: 'primary',
    cta: 'bybit',
  },
  {
    name: 'PancakeSwap',
    icon: pancakeswap,
    link: PANCAKESWAP_URL,
    market: 'MCRT/WBNB pool on BNB Chain',
    action: 'Open swap',
    priority: 'primary',
    cta: 'pancakeswap',
  },
  {
    name: 'HTX',
    icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717705783/Screenshot_2024-06-04_at_10.31_1_ntlhip.webp',
    link: 'https://www.htx.com/trade/mcrt_usdt',
    market: 'MCRT/USDT spot market',
    action: 'Open HTX market',
    priority: 'secondary',
    cta: 'htx',
  },
]

export default partners
