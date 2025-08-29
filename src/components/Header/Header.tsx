import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { X } from 'lucide-react'
import NavMenu from './Navmenu'
import menuIcon from '@/assets/icons/menu-icon.svg'
import { useState, useEffect } from 'react'
import NavMenuMobile from './NavMenuMobile'
import { AnimatePresence, motion } from 'framer-motion'
import Referral from'@/assets/icons/Referral.svg'
import Whitepaper from '@/assets/icons/whitepaper.svg'
import lobby from '@/assets/icons/lobby.svg'
import service from '@/assets/icons/li_shopping-bag.svg'
import { useLocation, Link } from 'react-router-dom'
import bybit from '@/assets/icons/icon-bybit.svg'
import marketplace from '@/assets/icons/icon-marketplace.svg'
import leaderboard from '@/assets/icons/icon-leaderboard.svg'
import stats from '@/assets/icons/icon-gamestats.svg'
import currency from '@/assets/icons/icon-currency.svg'
import faq from '@/assets/icons/icon-faq.svg'
import gamepad from '@/assets/icons/icon-gamepad.svg'
import pledge from '@/assets/icons/icon-huobi.svg'
import about from '@/assets/icons/icon-help.svg'
import statistics from '@/assets/icons/icon-stats.svg'
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

const commonMenuItemsNew: NavMenuItemProps[] = [
  
  {
    title: 'Games',
    icon: gamepad,
    submenu: [
      {
        title: 'MagicCraft',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
          path: '/magiccraft',
      },
      {
        title: 'Browser Games',
        icon: gamepad,
        path: 'https://games.magiccraft.io/',
      },
      {
        title: 'Game Maker',
        icon: '/icons/icon-steam.svg',
        path: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
      },
    ],
  },
  {
      title: 'Web3',
      icon: service,
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
          icon: pledge,
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
        // {
        //   title: 'Heroes',
        //   icon: '',
        //   path: ' ',
        // },
        {
          title: 'Whitepaper',
          icon: Whitepaper,
          path: 'https://docs.magiccraft.io/',
        },
        // {
        //   title: 'Vision 2024',
        //   icon: '',
        //   path: '',
        // },
        // {
        //   title: 'Legal',
        //   icon: '',
        //   path: '',
        // },
        {
          title: 'FAQs',
          icon: faq,
          path: '/faq',
        },
        // {
        //   title: 'Contact Us',
        //   icon: './icons/icon-contact.svg',
        //   path: 'https://magiccraft.io/contact-us',
        // },
        
        {
          title: 'News',
          icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1721250180/teenyicons_twitch-solid_m9vixv.svg",
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
        // {
        //   title: 'Huobi Global',
        //   icon: huobi,
        //   path: 'https://www.huobi.com/en-us/exchange/mcrt_usdt',
        // },
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
    title: 'Statistics',
    icon: statistics,
    submenu: [
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
    title: 'Build on MagicCraft',
    icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1722867433/MCRT_shydrd.webp",
    path: '/build-on-magiccraft',
    submenu: [],
  },
  {
    title: 'Heroes',
    icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173029/runner_1_tqbhtw.webp",
    path: '/chooseyourhero',
    submenu: [],
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
        <header className="relative z-50 w-full max-w-full bg-gradient-to-r from-[#431269]/95 via-[#2A0D4E]/95 to-[#431269]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-900/20 overflow-x-hidden">
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
              <button className="hidden md:block group">
                <a
                  href="https://lobby.magiccraft.io/"
                  rel="noreferrer noopener"
                >
                  <div className="relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-400/30 hover:from-purple-600/30 hover:to-purple-500/30 hover:border-purple-400/50 transition-all duration-300 px-5 md:px-6 py-2.5 md:py-3 text-white shadow-lg hover:shadow-purple-500/25 hover:shadow-xl backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3l8 5v5l-8 5-8-5V8l8-5z" opacity="0.3"/>
                      <path d="M6.5 11.5L9 14l5-5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm md:text-base font-bold tracking-wider relative z-10">PLAY</p>
                  </div>
                </a>
              </button>
              
              <a href="https://app.magiccraft.io/marketplace/explorer" rel="noreferrer noopener" className="hidden md:flex cursor-pointer items-center gap-1 whitespace-nowrap group">
                <div className="relative flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-indigo-500/20 border border-indigo-400/30 hover:from-indigo-600/30 hover:to-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 text-white shadow-lg hover:shadow-indigo-500/25 hover:shadow-xl backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3h14l-1 9H4L3 3z" opacity="0.3"/>
                    <path d="M5 3V1h10v2M5 12v7h10v-7" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"/>
                  </svg>
                  <p className="text-sm md:text-base font-bold tracking-wider text-white relative z-10">
                    SHOP
                  </p>
                </div>
              </a>

              <button
                onClick={handleBuyMCRT}
                className="group relative inline-flex items-center gap-2 whitespace-nowrap px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] hover:from-[#FFB649] hover:via-[#B591F2] hover:to-[#98FFF9] text-[#03082F] font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mr-2 sm:mr-3 md:mr-4 lg:mr-0 overflow-visible flex-shrink-0 min-w-[140px]"
                style={{ contain: 'layout paint', transformOrigin: 'center' }}
                aria-label="Buy $MCRT"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <svg className="w-4 h-4 md:w-5 md:h-5 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z" opacity="0.3"/>
                  <path d="M8.5 14.5L10 16l3-3M7 10h6" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"/>
                </svg>
                <p className="text-sm md:text-base font-black tracking-wider relative z-10 drop-shadow-md">BUY $MCRT</p>
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
              className="fixed right-0 top-0 z-[999] h-full w-[90%] max-w-lg overflow-auto rounded-bl-2xl border-l border-[#9AD4FD]/50 bg-gradient-to-b from-[#161242]/95 via-[#2A0D4E]/95 to-[#060b31]/95 backdrop-blur-xl py-6 pl-8 pr-8 text-white shadow-2xl"
            >
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
            </motion.nav>
          </header>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Header
