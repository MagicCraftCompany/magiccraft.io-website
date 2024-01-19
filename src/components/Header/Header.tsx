import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { ArrowUpRight, PlayCircle, X } from 'lucide-react'
import NavMenu from './Navmenu'
import menuIcon from '@/assets/icons/menu-icon.svg'
import { useState } from 'react'
import NavMenuMobile from './NavMenuMobile'
import { AnimatePresence, motion } from 'framer-motion'

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
}

export type SubMenuProps = {
  title: string
  icon: string
  path: string
}

const commonMenuItemsNew: NavMenuItemProps[] = [
  {
    title: 'MagicCraft Game',
    icon: './icons/icon-gamepad.svg',
    submenu: [
      {
        title: 'Download PC installer',
        icon: './icons/icon-pc.svg',
        path: 'https://mc-game-public.s3.eu-central-1.amazonaws.com/MagicCraft_4.24.9034.zip',
      },
      {
        title: 'Get it on App Store',
        icon: './icons/icon-apple.svg',
        path: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
      },
      {
        title: 'Get it on Google play',
        icon: './icons/icon-playstore.svg',
        path: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en&pli=1',
      },
      {
        title: 'Download on Steam',
        icon: './icons/icon-steam.svg',
        path: 'https://store.steampowered.com/app/2395760/MagicCraft/',
      },
      {
        title: 'Main website',
        icon: './icons/icon-home.svg',
        path: 'https://magiccraft.io',
      },
    ],
  },
  {
    title: 'NFTs',
    icon: './icons/icon-nft-new.svg',
    submenu: [
      {
        title: 'Marketplace',
        icon: './icons/icon-marketplace.svg',
        path: 'https://app.magiccraft.io/marketplace/explorer',
      },
      {
        title: 'Mint NFTs',
        icon: './icons/icon-mint-nft.svg',
        path: 'https://app.magiccraft.io/nft_mint',
      },
    ],
  },
  {
    title: 'Pledging',
    icon: './icons/icon-pledging-new.svg',
    path: 'https://app.magiccraft.io/pledging',
    submenu: [],
  },
  {
    title: 'Buy $MCRT',
    icon: './icons/icon-currency.svg',
    submenu: [
      {
        title: 'PancakeSwap',
        icon: './icons/icon-pancakeswap.svg',
        path: 'https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f ',
      },
      {
        title: 'Bybit',
        icon: './icons/icon-bybit.svg',
        path: 'https://www.bybit.com/en-US/trade/spot/MCRT/USDT',
      },
      {
        title: 'Huobi Global',
        icon: './icons/icon-huobi.svg',
        path: 'https://www.huobi.com/en-us/exchange/mcrt_usdt',
      },
    ],
  },
  {
    title: 'Help',
    icon: './icons/icon-help.svg',
    submenu: [
      {
        title: 'FAQ',
        icon: './icons/icon-faq.svg',
        path: '/faq',
      },
      {
        title: 'Contact us',
        icon: './icons/icon-contact.svg',
        path: 'https://magiccraft.io/contact-us',
      },
      {
        title: 'Community',
        icon: './icons/icon-community.svg',
        path: 'https://t.me/magiccraftgamechat',
      },
    ],
  },
  {
    title: 'Statistics',
    icon: './icons/icon-stats.svg',
    submenu: [
      {
        title: 'Leaderboard',
        icon: './icons/icon-leaderboard.svg',
        path: '/leaderboard',
      },
      {
        title: 'Game stats',
        icon: './icons/icon-gamestats.svg',
        path: '/stats',
      },
    ],
  },
]

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

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
      <header className="relative z-50 w-full bg-[#0A091799] p-5 backdrop-blur-md">
        <nav className="flex items-center justify-between gap-4 rounded-xl bg-[#431269B2] md:gap-12">
          <div className="grid shrink-0 place-items-center self-stretch  bg-black/20 px-2 md:px-8 ">
            <a href="https://magiccraft.io/" rel="noreferrer noopener">
              <img className="w-24 md:w-36" src={mcLogo} alt="MagicCraft" />
            </a>
          </div>

          <div className="flex w-full items-center justify-end gap-12 py-4 pr-5 xl:justify-between">
            <div className="hidden items-center gap-6 xl:flex">
              {commonMenuItemsNew.map((item) =>
                item?.submenu?.length > 0 ? (
                  <NavMenu key={item.title} item={item} />
                ) : (
                  <a key={item.title} href={item.path || '/'}>
                    <div className="flex items-center justify-center gap-2">
                      <div className="hidden shrink-0 2xl:block">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <p className="text-lg text-white">{item.title}</p>
                    </div>
                  </a>
                )
              )}
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://youtu.be/YAp7k3NsKpg?si=PKWHUbWH86j4iC2f"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="flex cursor-pointer items-center gap-2 whitespace-nowrap">
                  <PlayCircle size={16} />
                  <p className="text-sm md:text-base">MagicCraft Ecosystem</p>
                </div>
              </a>

              <button className="hidden md:block">
                <a
                  href="https://lobby.magiccraft.io/"
                  rel="noreferrer noopener"
                >
                  <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#98FFF9] px-5 py-3 text-[#03082F]">
                    <ArrowUpRight size={18} />
                    <p>Go to Lobby</p>
                  </div>
                </a>
              </button>
              <button onClick={openSidebar} className="block xl:hidden">
                <span className="sr-only">Open Menu</span>
                <img src={menuIcon} alt="Open Menu" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isSideMenuOpen ? (
          <>
            <div className="fixed inset-0 z-[999] h-full w-full bg-black/20 backdrop-blur" />
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
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Header
