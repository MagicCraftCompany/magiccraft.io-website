import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { X, Gamepad2, ShoppingBag, Coins } from 'lucide-react'
import NavMenu from './Navmenu'
import menuIcon from '@/assets/icons/menu-icon.svg'
import { useState, useEffect } from 'react'
import NavMenuMobile from './NavMenuMobile'
import { AnimatePresence, motion } from 'framer-motion'
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
        path: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
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
        <nav className="flex items-center justify-between h-14 sm:h-16 md:h-[68px] lg:h-[72px] xl:h-[76px] w-full max-w-full px-3 sm:px-4">
          <div className="grid shrink-0 place-items-center self-stretch px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            <Link to="/" className="h-full flex items-center group">
              <img className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 transition-all duration-300 group-hover:scale-105 drop-shadow-lg" src={mcLogo} alt="MagicCraft" />
            </Link>
          </div>

          <div className="flex w-full items-center justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2 sm:px-3 md:px-4 lg:px-6 xl:justify-between max-w-full overflow-visible">
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
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <button className="hidden md:block group" aria-label="Play">
                <a
                  href="https://lobby.magiccraft.io/"
                  rel="noreferrer noopener"
                >
                  <div className="relative flex w-full items-center justify-center gap-2 rounded-[14px] px-5 md:px-6 h-10 md:h-11 text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-[#6b3db2] to-[#41207a] border border-white/20 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-[#98FFF9]/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Gamepad2 className="w-4 h-4 md:w-5 md:h-5" />
                    <p className="text-sm md:text-base font-semibold tracking-normal relative z-10">Play</p>
                  </div>
                </a>
              </button>
              
              <a href="https://app.magiccraft.io/marketplace/explorer" rel="noreferrer noopener" className="hidden md:flex cursor-pointer items-center gap-1 whitespace-nowrap group" role="button" aria-label="Shop">
                <div className="relative flex items-center gap-2 px-5 md:px-6 h-10 md:h-11 rounded-[14px] text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-[#4462d6] to-[#2c3e94] border border-white/20 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-[#98FFF9]/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                  <p className="text-sm md:text-base font-semibold tracking-normal text-white relative z-10">
                    Shop
                  </p>
                </div>
              </a>

              <button
                onClick={handleBuyMCRT}
                className="group relative inline-flex items-center gap-2 whitespace-nowrap px-5 md:px-6 h-10 md:h-11 rounded-[14px] bg-gradient-to-b from-[#A9FFF6] to-[#82E7E0] text-[#071033] font-extrabold border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 mr-2 sm:mr-3 md:mr-4 lg:mr-0 overflow-hidden flex-shrink-0 min-w-[150px] focus-visible:ring-2 focus-visible:ring-[#98FFF9]/50"
                style={{ contain: 'layout paint', transformOrigin: 'center' }}
                aria-label="Buy $MCRT"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Coins className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                <p className="text-sm md:text-base font-extrabold tracking-normal relative z-10">Buy $MCRT</p>
              </button>
              <button
                onClick={openSidebar}
                className="block shrink-0 xl:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
              >
                <span className="sr-only">Open Menu</span>
                <img src={menuIcon} alt="Open Menu" className="w-6 md:w-7 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isSideMenuOpen ? (
          <header>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] h-full w-full bg-black/20 backdrop-blur"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z[999] h-full w-[90%] max-w-lg overflow-auto rounded-bl-2xl border-l border-[#9AD4FD]/50 bg-gradient-to-b from-[#161242]/95 via-[#2A0D4E]/95 to-[#060b31]/95 backdrop-blur-xl py-6 pl-8 pr-8 text-white shadow-2xl"
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[22px] bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">Menu</span>
                  <button
                    className="p-2 rounded-lg hover:bg_white/10 transition-all duration-200 group"
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
                    <p className="text-lg font-semibold text_white">Play</p>
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
            </motion.nav>
          </header>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Header
