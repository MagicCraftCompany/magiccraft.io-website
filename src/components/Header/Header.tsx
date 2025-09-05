import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { X, Gamepad2, ShoppingBag, Coins } from 'lucide-react'
import NavMenu from './Navmenu'
import { useState, useEffect } from 'react'

import NavMenuMobile from './NavMenuMobile'

import Referral from'@/assets/icons/Referral.svg'
import Whitepaper from '@/assets/icons/whitepaper.svg'
import lobby from '@/assets/icons/lobby.svg'

import { useLocation, Link } from 'react-router-dom'
import bybit from '@/assets/icons/icon-bybit.svg'
import marketplace from '@/assets/icons/icon-marketplace.svg'
import leaderboard from '@/assets/icons/icon-leaderboard.svg'
import stats from '@/assets/icons/icon-gamestats.svg'
import currency from '@/assets/icons/icon-currency.svg'
import faq from '@/assets/icons/icon-faq.svg'
import gamepad from '@/assets/icons/icon-gamepad.svg'

import about from '@/assets/icons/icon-help.svg'
import pancakeswap from '@/assets/icons/icon-pancakeswap.svg'
import huobi from '@/assets/icons/icon-huobi.svg'
import { openTransactionModal } from "@xswap-link/sdk";

export type NavMenuItemProps = {
  path?: string
  title: string
  icon: string
  notBlank?: boolean
  submenu: SubMenuProps[]
}

export type NavMenuProps = {
  item: NavMenuItemProps
  closeSidebar?: () => void
  onXswapClick?: () => Promise<void>
}

export type SubMenuProps = {
  title: string
  icon?: string // Make optional
  path: string
  isXswap?: boolean
  onClick?: () => void
}
const handleBuyMCRT = async () => {
  const ua = navigator.userAgent || (navigator as any).vendor
  const isIOS = /iPad|iPhone|iPod/.test(ua)
  if (isIOS) {
    window.location.href = 'https://www.bybit.com/en/trade/spot/MCRT/USDT'
    return
  }
  try {
    await openTransactionModal({
      integratorId: "34808808c1f4ae4533b7",
      dstChain: "56",
      dstToken: "0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f",
      srcChain: "56",
      srcToken: "0x0000000000000000000000000000000000000000",
      defaultWalletPicker: true,
    });
  } catch (error) {
    console.error("XPay transaction failed:", error);
  }
};

function openGameByDevice() {
  if (typeof window === 'undefined') return
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera
  const isIOS = /iPad|iPhone|iPod/.test(ua)
  const isAndroid = /Android/.test(ua)
  const iosUrl = 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525'
  const androidUrl = 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en'
  const pcUrl = 'https://store.steampowered.com/app/2395760/MagicCraft/'
  const url = isIOS ? iosUrl : isAndroid ? androidUrl : pcUrl
  window.open(url, '_blank', 'noopener,noreferrer')
}

const commonMenuItemsNew: NavMenuItemProps[] = [
  {
    title: 'Games',
    icon: gamepad,
    submenu: [
      {
        title: 'MagicCraft',
        icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
        path: '#',
        onClick: openGameByDevice,
      },
      {
        title: 'Ecosystem Games',
        icon: gamepad,
        path: 'https://games.magiccraft.io/',
      },
      {
        title: 'Game Maker',
        icon: '/icons/icon-steam.svg',
        path: '/build-on-magiccraft',
      },
      {
        title: 'Heroes',
        icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173029/runner_1_tqbhtw.webp',
        path: '/chooseyourhero',
      },
      {
        title: 'Leaderboard',
        icon: leaderboard,
        path: 'https://lobby.magiccraft.io/leaderboard',
      },
      {
        title: 'Game stats',
        icon: stats,
        path: 'https://lobby.magiccraft.io/stats',
      },
    ],
  },
  {
    title: 'Web3',
    icon: '/icons/icon-web3.svg',
    submenu: [
      {
        title: 'Web3 Lobbies',
        icon: lobby,
        path: 'https://lobby.magiccraft.io/',
      },
      {
        title: 'Marketplace',
        icon: marketplace,
        path: 'https://app.magiccraft.io/marketplace/explorer',
      },
      {
        title: 'Pledging',
        icon: '/icons/icon-pledge.svg',
        path: 'https://app.magiccraft.io/pledging',
      },
      {
        title: 'Referral System',
        icon: Referral,
        path: 'https://lobby.magiccraft.io/referral',
      },
    ],
  },
  {
    title: 'About',
    icon: about,
    submenu: [
      {
        title: 'Whitepaper',
        icon: Whitepaper,
        path: 'https://docs.magiccraft.io/',
      },
      {
        title: 'MagicCraft 2025',
        icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
        path: '/magiccraft',
      },
      {
        title: 'FAQs',
        icon: faq,
        path: '/faq',
      },
      {
        title: 'News',
        icon: '/icons/icon-news.svg',
        path: '/news',
      },
    ],
  },
  {
    title: 'Buy $MCRT',
    icon: currency,
    submenu: [
      {
        title: 'PancakeSwap',
        icon: pancakeswap,
        path: 'https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f ',
      },
      {
        title: 'Bybit',
        icon: bybit,
        path: 'https://www.bybit.com/en/trade/spot/MCRT/USDT',
      },
      {
        title: 'HTX',
        icon: huobi,
        path: ' https://www.htx.com/trade/mcrt_usdt ',
      },
      {
        title: 'Buy with credit card',
        icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718968472/648bac0dcb1a13d71ac879ff_Swipelux-Twitter_gfxxae.webp',
        path: 'https://track.swipelux.com/?api-key=c2c64eeb-d657-4692-99de-568f1c822c12',
      },
    ],
  },
  {
    title: 'Build',
    icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1722867433/MCRT_shydrd.webp",
    submenu: [
      {
        title: 'Build on MagicCraft',
        icon: '/icons/icon-build.svg',
        path: '/build-on-magiccraft',
      },
      {
        title: 'Bounties',
        icon: '/icons/icon-bounty.svg',
        path: '/bounties',
      },
    ],
  },
]

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    console.log('Current route:', location.pathname)
    // Add more logs if needed to debug state or props
  }, [location])

  function closeSidebar() {
    setIsSideMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  function openSidebar() {
    setIsSideMenuOpen(true)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      {/* <header className="relative z-50 w-full px-3 py-4  md:px-4 md:py-5">
        <nav className="flex items-center justify-between gap-4 rounded-xl bg-[#431269B2] md:gap-12">
          <div className="grid shrink-0 place-items-center self-stretch  px-4  md:px-8 "> */}
        <header className="relative z-[200] w-full max-w-full bg-gradient-to-r from-[#431269]/95 via-[#2A0D4E]/95 to-[#431269]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-900/20 overflow-visible">
        <nav className="relative flex items-center justify-between h-14 sm:h-16 md:h-[68px] lg:h-[72px] xl:h-[76px] w-full max-w-full px-3 sm:px-4 overflow-visible">
          <div className="grid shrink-0 place-items-center self-stretch px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            <Link to="/" className="h-full flex items-center group">
              <img className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 transition-all duration-300 group-hover:scale-105 drop-shadow-lg" src={mcLogo} alt="MagicCraft" />
            </Link>
          </div>

          <div className="flex w-full items-center justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-3 md:px-4 lg:px-6 xl:justify-between max-w-full">
            <div className="hidden items-center gap-4 md:gap-5 lg:gap-6 xl:flex">
              {commonMenuItemsNew.map((item) =>
                item?.submenu?.length > 0 ? (
                  <NavMenu 
                    key={item.title} 
                    item={item} 
                 
                  />
                ) : (
                  item.path?.startsWith('http') ? (
                    <a key={item.title} href={item.path} rel="noreferrer noopener" className="group">
                      <div className="flex items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                        <p className="text-sm lg:text-[15px] xl:text-base text-white/90 group-hover:text-white whitespace-nowrap font-semibold tracking-wide transition-colors duration-200 drop-shadow-lg">{item.title}</p>
                      </div>
                    </a>
                  ) : (
                    <Link key={item.title} to={item.path || '/'} className="group">
                      <div className="flex items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                        <p className="text-sm lg:text-[15px] xl:text-base text-white/90 group-hover:text-white whitespace-nowrap font-semibold tracking-wide transition-colors duration-200 drop-shadow-lg">{item.title}</p>
                      </div>
                    </Link>
                  )
                )
              )}
            </div>
            <div className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://lobby.magiccraft.io/"
                rel="noreferrer noopener"
                className="hidden md:inline-flex header-cta header-cta--play no-underline"
                aria-label="Play"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play</span>
              </a>

              <a
                href="https://app.magiccraft.io/marketplace/explorer"
                rel="noreferrer noopener"
                className="hidden md:inline-flex header-cta header-cta--shop no-underline"
                role="button"
                aria-label="Shop"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop</span>
              </a>

              <button
                onClick={handleBuyMCRT}
                className="hidden md:inline-flex header-cta header-cta--buy no-underline min-w-[150px]"
                aria-label="Buy $MCRT"
              >
                <Coins className="w-4 h-4" />
                <span>Buy $MCRT</span>
              </button>
              
              {/* Hamburger shown as absolute on mobile (moved outside group) */}
              <span className="hidden md:block" />
            </div>
          </div>
          {/* Absolutely positioned hamburger to avoid layout clipping */}
          <button
            onClick={openSidebar}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-lg bg-purple-600 border-2 border-white hover:bg-purple-700 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center z-[100000]"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile menu overlay - simple fallback for iOS */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/60" onClick={closeSidebar} />
      )}
      
      {/* Mobile menu panel - simple slide without animations */}
      <div 
        className={`fixed top-0 right-0 h-full w-[90%] max-w-lg z-[100000] transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-gradient-to-b from-[#161242] via-[#2A0D4E] to-[#060b31] border-l border-[#9AD4FD]/50 shadow-2xl overflow-auto`}
        style={{ backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
      >
        <div className="safe-padded py-6 pl-8 pr-8 text-white h-full">
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[22px] bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">Menu</span>
                  <button
                    className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    onClick={closeSidebar}
                  >
                    <X
                      className="cursor-pointer group-hover:rotate-90 transition-transform duration-200"
                      size={28}
                    />
                  </button>
                </div>
                <div className="h-[2px] w-full shrink-0 bg-gradient-to-r from-transparent via-[#98FFF9]/60 to-transparent" />

                {/* Mobile Shop and Play buttons */}
                <div className="flex gap-3 py-4">
                  <a
                    href="https://app.magiccraft.io/marketplace/explorer"
                    onClick={closeSidebar}
                    rel="noreferrer noopener"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <p className="text-lg font-semibold text-white">Shop</p>
                  </a>
                  
                  <a
                    href="https://lobby.magiccraft.io/"
                    onClick={closeSidebar}
                    rel="noreferrer noopener"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <p className="text-lg font-semibold text-white">Play</p>
                  </a>
                </div>

                <div className="h-[2px] w-full shrink-0 bg-gradient-to-r from-transparent via-[#98FFF9]/60 to-transparent" />

                <div className="flex flex-col gap-y-8 pt-8">
                  {commonMenuItemsNew.map((item) =>
                    item?.submenu?.length > 0 ? (
                      <NavMenuMobile
                        key={item.title}
                        item={item}
                        closeSidebar={closeSidebar}
                     
                      />
                    ) : (
                      item.path?.startsWith('http') ? (
                        <a
                          key={item.title}
                          onClick={closeSidebar}
                          href={item.path}
                          rel="noreferrer noopener"
                        >
                          <div className="flex items-center gap-2">
                            <p className="text-[22px] font-normal">
                              {item.title}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={item.title}
                          onClick={closeSidebar}
                          to={item.path || '/'}
                        >
                          <div className="flex items-center gap-2">
                            <p className="text-[22px] font-normal">
                              {item.title}
                            </p>
                          </div>
                        </Link>
                      )
                    )
                  )}
                </div>

              </div>
        </div>
      </div>
    </>
  )
}

export default Header
