import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { ArrowUpRight, X } from 'lucide-react'
import NavMenu from './Navmenu'
import menuIcon from '@/assets/icons/menu-icon.svg'
import { useState, useEffect } from 'react'
import NavMenuMobile from './NavMenuMobile'
import { AnimatePresence, motion } from 'framer-motion'
import Referral from'@/assets/icons/Referral.svg'
import Whitepaper from '@/assets/icons/whitepaper.svg'
import lobby from '@/assets/icons/lobby.svg'
import service from '@/assets/icons/li_shopping-bag.svg'
import { useLocation } from 'react-router-dom'
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
  icon: string
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
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp',
          path: 'https://games.magiccraft.io/',
        
      },
      {
        title: 'MagicRunner',
        icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173132/hero2_olqlpn.webp',
        path: '/magicrunner',
      },
      {
        title: 'Magic8Ball',
        icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717662849/Screenshot_2024-01-05_at_15.03_1_x8sbyh.png',
        path: '/magic8ball',
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
          title: 'Huobi Global',
          icon: huobi,
          path: 'https://www.huobi.com/en-us/exchange/mcrt_usdt',
        },
        {
          title: 'Buy with credit card',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718968472/648bac0dcb1a13d71ac879ff_Swipelux-Twitter_gfxxae.webp',
          path: 'https://track.swipelux.com/?api-key=c2c64eeb-d657-4692-99de-568f1c822c12',
        },
      ],
    },
   

  // {
  //   title: 'NFTs',
  //   icon: './icons/icon-nft-new.svg',
  //   submenu: [
  //     {
  //       title: 'Marketplace',
  //       icon: './icons/icon-marketplace.svg',
  //       path: 'https://app.magiccraft.io/marketplace/explorer',
  //     },
  //     {
  //       title: 'Mint NFTs',
  //       icon: './icons/icon-mint-nft.svg',
  //       path: 'https://app.magiccraft.io/nft_mint',
  //     },
  //   ],
  // },
  // {
  //   title: 'Pledging',
  //   icon: './icons/icon-pledging-new.svg',
  //   path: 'https://app.magiccraft.io/pledging',
  //   submenu: [],
  // },
  
  // {
  //   title: 'Help',
  //   icon: './icons/icon-help.svg',
  //   submenu: [
  //     {
  //       title: 'FAQ',
  //       icon: './icons/icon-faq.svg',
  //       path: '/faq',
  //     },
  //     {
  //       title: 'Contact us',
  //       icon: './icons/icon-contact.svg',
  //       path: 'https://magiccraft.io/contact-us',
  //     },
  //     {
  //       title: 'Community',
  //       icon: './icons/icon-community.svg',
  //       path: 'https://t.me/magiccraftgamechat',
  //     },
  //   ],
  // },
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
    title: 'Heros',
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
        <header className="relative z-50 w-full bg-[#0A091799] px-3 py-4 backdrop-blur-md md:px-4 md:py-3">
        <nav className="flex items-center justify-between gap-2 md:gap-4 rounded-xl bg-[#431269B2] md:h-[60px]">
          <div className="grid shrink-0 place-items-center self-stretch bg-black/20 px-2 md:px-4 lg:px-8">
            <a href="/" rel="noreferrer noopener">
              <img className="w-20 md:w-28 lg:w-36" src={mcLogo} alt="MagicCraft" />
            </a>
          </div>

          <div className="flex w-full items-center justify-end gap-4 md:gap-8 lg:gap-12 py-2 md:py-4 pr-2 md:pr-3 xl:justify-between">
            <div className="hidden items-center gap-3 md:gap-4 lg:gap-4 xl:flex">
              {commonMenuItemsNew.map((item) =>
                item?.submenu?.length > 0 ? (
                  <NavMenu 
                    key={item.title} 
                    item={item} 
                 
                  />
                ) : (
                  <a key={item.title} href={item.path || '/'}>
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <div className="hidden shrink-0 xl:block">
                        <img src={item.icon} alt={item.title} className="w-4" />
                      </div>
                      <p className="text-[13px] text-white whitespace-nowrap md:text-[5px] xl:text-base">{item.title}</p>
                    </div>
                  </a>
                )
              )}
            </div>
            <div className="flex items-center gap-2 md:gap-3 lg:gap-5">
              <button
                onClick={handleBuyMCRT}
                className="flex cursor-pointer items-center gap-1 md:gap-2 whitespace-nowrap"
              >
                <p className="text-xs md:text-sm xl:text-base">Buy $MCRT</p>
              </button>
              <a href="https://app.magiccraft.io/marketplace/explorer" rel="noreferrer noopener" className="flex cursor-pointer items-center gap-1 md:gap-2 whitespace-nowrap">
                <p className="text-xs md:text-sm xl:text-base flex flex-row items-center gap-1"><img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1741759467/image_25_gnebrl.webp" className='w-4'/>Shop</p>
              </a>

              <button className="hidden md:block">
                <a
                  href="https://lobby.magiccraft.io/"
                  rel="noreferrer noopener"
                >
                  <div className="flex w-full items-center justify-center gap-1 md:gap-2 rounded-lg bg-[#98FFF9] px-3 md:px-4 lg:px-5 py-2 md:py-3 text-[#03082F]">
                    <ArrowUpRight size={16} className="md:size-18" />
                    <p className="text-xs md:text-sm xl:text-base">Lobby</p>
                  </div>
                </a>
              </button>
              <button
                onClick={openSidebar}
                className="block shrink-0 xl:hidden"
              >
                <span className="sr-only">Open Menu</span>
                <img src={menuIcon} alt="Open Menu" className="w-6 md:w-8" />
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
              transition={{ type: 'keyframes' }}
              className="fixed right-0 top-0 z-[999] h-full w-[90%] max-w-lg overflow-auto rounded-bl-xl border-l border-[#9AD4FD] bg-gradient-to-b from-[#161242] to-[#060b31] py-6 pl-10 pr-10 text-white"
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[22px]">Menu</span>
                  <X
                    className="cursor-pointer"
                    size={35}
                    onClick={closeSidebar}
                  />
                </div>
                <div className="h-[2px] w-full shrink-0 bg-gradient-to-r from-transparent via-[#5377BD] to-transparent" />

                <div className="flex flex-col gap-y-8 pt-8">
                  {commonMenuItemsNew.map((item) =>
                    item?.submenu?.length > 0 ? (
                      <NavMenuMobile
                        key={item.title}
                        item={item}
                        closeSidebar={closeSidebar}
                     
                      />
                    ) : (
                      <a
                        key={item.title}
                        onClick={closeSidebar}
                        href={item.path || '/'}
                        rel="noreferrer noopener"
                      >
                        <div className="flex items-center gap-2">
                          <div className="grid h-auto w-6 shrink-0 place-items-center">
                            <img
                              className="w-full"
                              src={item.icon}
                              alt={item.title}
                            />
                          </div>
                          <p className="text-[22px] font-normal">
                            {item.title}
                          </p>
                        </div>
                      </a>
                    )
                  )}
                </div>

                <div className="pt-16">
                  <div className="py-8 text-sm font-bold">
                    &copy; Copyright MagicCraft 2024
                  </div>
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