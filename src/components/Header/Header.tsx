import mcLogo from '@/assets/images/magiccraft-logo.webp'
import {
  Bot,
  ChevronDown,
  Clapperboard,
  Globe,
  Sparkles,
  X,
} from 'lucide-react'
import NavMenu from './Navmenu'
import NavMenuMobile from './NavMenuMobile'
import { useCallback, useState, useEffect, useRef } from 'react'
import {
  LANGUAGES,
  setGoogTransCookie,
  triggerGoogleTranslate,
} from '@/lib/googleTranslate'

import Referral from '@/assets/icons/Referral.svg'
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
import { BYBIT_URL, METAMASK_SWAP_URL, PANCAKESWAP_URL } from '@/constants'

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
// Unused XSwap import removed

import { openGameByDevice, openMetaMaskMcrt } from '@/lib/gameActions'

const commonMenuItemsNew: NavMenuItemProps[] = [
  {
    title: 'AI Products',
    icon: '/icons/icon-community.svg',
    submenu: [
      {
        title: 'AI Suite Overview',
        icon: '/icons/icon-community.svg',
        path: '/#ai-products',
      },
      {
        title: 'Merlin AI',
        icon: '/merlin-logo-official.svg',
        path: 'https://merlintheai.com',
      },
      {
        title: 'Akyn Film Studio',
        icon: 'https://akyn.pro/logo.svg',
        path: 'https://akyn.pro',
      },
      {
        title: 'MAGAS7',
        icon: 'https://magas7.com/favicon.svg',
        path: 'https://magas7.com',
      },
      {
        title: 'MagicAds',
        icon: 'https://magicads.dev/magicads-logo.svg',
        path: 'https://magicads.dev',
      },
      {
        title: 'DragonList',
        icon: stats,
        path: 'https://dragonlist.ai',
      },
      {
        title: 'DocAI',
        icon: '/icons/icon-community.svg',
        path: 'https://docai.live',
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
        title: 'Rent (Testnet)',
        icon: '/icons/icon-marketplace.svg',
        path: 'https://rent.magiccraft.io/',
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
        title: 'Careers',
        icon: '/icons/icon-help.svg',
        path: '/careers',
      },
      {
        title: 'Guilds',
        icon: '/icons/icon-community.svg',
        path: '/guilds',
      },
      {
        title: 'Whitepaper',
        icon: Whitepaper,
        path: '/whitepaper',
      },
      {
        title: 'MagicCraft Vision',
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
    title: '$MCRT',
    icon: currency,
    submenu: [
      {
        title: 'PancakeSwap DEX',
        icon: pancakeswap,
        path: PANCAKESWAP_URL,
      },
      {
        title: 'MetaMask',
        icon: currency,
        path: METAMASK_SWAP_URL,
        onClick: () => void openMetaMaskMcrt('header_menu'),
      },
      {
        title: 'Bybit Spot',
        icon: bybit,
        path: BYBIT_URL,
      },
    ],
  },
  {
    title: 'Build',
    icon: '/icons/icon-build.svg',
    submenu: [
      {
        title: 'Build on MagicCraft',
        icon: '/icons/icon-build.svg',
        path: '/build-on-magiccraft',
      },
      {
        title: 'Grants',
        icon: '/icons/icon-bounty.svg',
        path: '/grants',
      },
      {
        title: 'Bounties',
        icon: '/icons/icon-bounty.svg',
        path: '/bounties',
      },
    ],
  },
  {
    title: 'Game',
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
]

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferredLang') || 'en'
    }
    return 'en'
  })
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false)
  const desktopLangRef = useRef<HTMLDivElement | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const drawerRef = useRef<HTMLDivElement | null>(null)
  const drawerCloseRef = useRef<HTMLButtonElement | null>(null)
  const lastFocusedElementRef = useRef<HTMLElement | null>(null)
  const location = useLocation()

  const closeSidebar = useCallback(() => {
    setIsSideMenuOpen(false)
    setIsLangOpen(false)
    setIsDesktopLangOpen(false)
  }, [])

  const openSidebar = useCallback(() => {
    const activeElement = document.activeElement
    lastFocusedElementRef.current =
      activeElement instanceof HTMLElement && activeElement !== document.body
        ? activeElement
        : hamburgerRef.current
    setIsSideMenuOpen(true)
    setIsDesktopLangOpen(false)
  }, [])

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code)
    setIsLangOpen(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLang', code)
      setGoogTransCookie(code)
      triggerGoogleTranslate(code)
    }
  }

  const currentLanguage =
    LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0]

  useEffect(() => {
    setIsSideMenuOpen(false)
    setIsLangOpen(false)
    setIsDesktopLangOpen(false)
  }, [location.pathname])

  // Close desktop language popover on outside click
  useEffect(() => {
    if (!isDesktopLangOpen) return
    const onDown = (e: MouseEvent) => {
      const el = desktopLangRef.current
      if (!el) return
      if (e.target instanceof Node && el.contains(e.target)) return
      setIsDesktopLangOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [isDesktopLangOpen])

  // Apply saved language on load / route changes (Google Translate works on DOM, not router state)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('preferredLang') || 'en'
    if (saved && saved !== currentLang) {
      setCurrentLang(saved)
      return
    }
    setGoogTransCookie(currentLang)
    triggerGoogleTranslate(currentLang)
    // Retry once for SPA route updates where GT initializes later.
    setTimeout(() => triggerGoogleTranslate(currentLang), 800)
  }, [location.pathname, currentLang])

  // Keep keyboard focus inside the open mobile drawer and restore it on close.
  useEffect(() => {
    if (!isSideMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerCloseRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeSidebar()
        return
      }

      if (event.key !== 'Tab') return

      const drawer = drawerRef.current
      if (!drawer) return

      const focusableElements = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (lastFocusedElementRef.current?.isConnected) {
        lastFocusedElementRef.current.focus()
      }
    }
  }, [closeSidebar, isSideMenuOpen])

  return (
    <>
      {/* <header className="relative z-50 w-full px-3 py-4  md:px-4 md:py-5">
        <nav className="flex items-center justify-between gap-4 rounded-xl bg-[#431269B2] md:gap-12">
          <div className="grid shrink-0 place-items-center self-stretch  px-4  md:px-8 "> */}
      <header className="site-header glass-surface hairline-bottom relative z-[200] w-full max-w-full overflow-visible">
        <nav className="relative flex h-14 w-full max-w-full items-center justify-between overflow-visible px-3 sm:h-16 sm:px-4 md:h-[68px] lg:h-[72px] xl:h-[76px]">
          <div className="grid shrink-0 place-items-center self-stretch px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
            <Link to="/" className="group flex h-full items-center">
              <img
                className="w-28 drop-shadow-lg transition-all duration-300 group-hover:scale-105 sm:w-32 md:w-36 lg:w-40 xl:w-44"
                src={mcLogo}
                alt="MagicCraft"
              />
            </Link>
          </div>

          <div className="flex w-full max-w-full items-center justify-end gap-2 px-2 sm:gap-3 sm:px-3 md:gap-4 md:px-4 lg:gap-6 lg:px-6 xl:justify-between">
            <div className="hidden items-center gap-2 xl:flex 2xl:gap-5">
              {commonMenuItemsNew.map((item) =>
                item?.submenu?.length > 0 ? (
                  <NavMenu key={item.title} item={item} />
                ) : item.path?.startsWith('http') ? (
                  <a
                    key={item.title}
                    href={item.path}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group"
                  >
                    <div className="flex items-center justify-center gap-1 rounded-md px-3 py-2 transition-all duration-200 hover:bg-white/10 md:gap-2">
                      <p className="whitespace-nowrap text-sm font-semibold tracking-wide text-white/[0.85] transition-colors duration-200 group-hover:text-white lg:text-[15px] xl:text-base">
                        {item.title}
                      </p>
                    </div>
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.path || '/'}
                    className="group"
                  >
                    <div className="flex items-center justify-center gap-1 rounded-md px-3 py-2 transition-all duration-200 hover:bg-white/10 md:gap-2">
                      <p className="whitespace-nowrap text-sm font-semibold tracking-wide text-white/[0.85] transition-colors duration-200 group-hover:text-white lg:text-[15px] xl:text-base">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
            <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
              <Link
                to="/#ai-products"
                className="header-cta header-cta--play inline-flex h-11 shrink-0 items-center whitespace-nowrap"
                aria-label="Explore AI Suite"
              >
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                <span className="2xl:hidden">AI Suite</span>
                <span className="hidden 2xl:inline">Explore AI Suite</span>
              </Link>

              {/* Desktop language selector */}
              <div ref={desktopLangRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsDesktopLangOpen((v) => !v)}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-white/[0.85] transition-all hover:border-white/20 hover:bg-white/10"
                  aria-label="Change language"
                  aria-haspopup="menu"
                  aria-expanded={isDesktopLangOpen}
                >
                  <Globe className="h-4 w-4 text-white/70" />
                  <span className="text-sm font-semibold">
                    {currentLanguage.flag}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/60 transition-transform ${isDesktopLangOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isDesktopLangOpen && (
                  <div className="absolute right-0 top-full mt-2 max-h-[320px] w-[280px] overflow-auto rounded-lg border border-white/20 bg-[#0a0e2e]/95 p-2 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-1">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            handleLanguageChange(lang.code)
                            setIsDesktopLangOpen(false)
                          }}
                          className={`flex min-h-11 items-center gap-2 rounded-md p-2.5 text-left transition-all ${
                            currentLang === lang.code
                              ? 'bg-[#98FFF9]/20 text-white'
                              : 'text-white/75 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="truncate text-xs font-semibold">
                            {lang.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Absolutely positioned hamburger to avoid layout clipping */}
          <button
            ref={hamburgerRef}
            onClick={openSidebar}
            className="glass-strong absolute right-2 top-1/2 z-[100000] flex min-h-[48px] min-w-[48px] -translate-y-1/2 items-center justify-center rounded-xl p-2.5 transition-all duration-200 hover:bg-white/10 xl:hidden"
            aria-label={isSideMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isSideMenuOpen}
            aria-controls="magiccraft-navigation-drawer"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile menu overlay - simple fallback for iOS */}
      {isSideMenuOpen && (
        <div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-[99999] bg-black/60"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile menu panel - premium glass design */}
      {isSideMenuOpen && (
        <div
          ref={drawerRef}
          id="magiccraft-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="magiccraft-navigation-title"
          className="fixed right-0 top-9 z-[100000] h-[calc(100%-2.25rem)] w-[85%] max-w-[380px] overflow-auto border-l border-white/10 bg-[#0a0e2e]/95 shadow-2xl"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="h-full px-5 py-5 text-white">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  id="magiccraft-navigation-title"
                  className="flex items-center gap-2"
                >
                  <img src={mcLogo} alt="" aria-hidden="true" className="h-8" />
                  <span className="sr-only">MagicCraft navigation</span>
                </div>
                <button
                  ref={drawerCloseRef}
                  type="button"
                  data-drawer-close
                  aria-label="Close navigation menu"
                  className="group inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 transition-all duration-200 hover:bg-white/10"
                  onClick={closeSidebar}
                >
                  <X
                    aria-hidden="true"
                    className="h-5 w-5 cursor-pointer transition-transform duration-200 group-hover:rotate-90"
                  />
                </button>
              </div>

              {/* Primary AI suite action */}
              <div className="mb-3">
                <Link
                  to="/#ai-products"
                  onClick={closeSidebar}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-4 py-3 text-sm font-bold text-[#03082F] transition-opacity hover:opacity-90"
                  aria-label="Explore AI Suite"
                >
                  <Sparkles aria-hidden="true" className="h-4 w-4" />
                  <span>Explore AI Suite</span>
                </Link>
              </div>

              {/* Featured AI destinations */}
              <div className="mb-5 grid grid-cols-2 gap-2">
                <a
                  href="https://merlintheai.com"
                  onClick={closeSidebar}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 transition-all hover:bg-white/10"
                >
                  <Bot aria-hidden="true" className="h-4 w-4" />
                  <span>Open Merlin</span>
                </a>
                <a
                  href="https://akyn.pro"
                  onClick={closeSidebar}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 transition-all hover:bg-white/10"
                >
                  <Clapperboard aria-hidden="true" className="h-4 w-4" />
                  <span>Akyn Studio</span>
                </a>
              </div>

              <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Navigation Sections */}
              <div className="flex-1 space-y-1 overflow-auto">
                {commonMenuItemsNew.map((item) =>
                  item?.submenu?.length > 0 ? (
                    <NavMenuMobile
                      key={item.title}
                      item={item}
                      closeSidebar={closeSidebar}
                    />
                  ) : item.path?.startsWith('http') ? (
                    <a
                      key={item.title}
                      onClick={closeSidebar}
                      href={item.path}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex min-h-11 items-center gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="h-5 w-5 opacity-70"
                        aria-hidden="true"
                      />
                      <p className="text-base font-medium text-white/90">
                        {item.title}
                      </p>
                    </a>
                  ) : (
                    <Link
                      key={item.title}
                      onClick={closeSidebar}
                      to={item.path || '/'}
                      className="flex min-h-11 items-center gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="h-5 w-5 opacity-70"
                        aria-hidden="true"
                      />
                      <p className="text-base font-medium text-white/90">
                        {item.title}
                      </p>
                    </Link>
                  )
                )}
              </div>

              {/* Language Selector */}
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex min-h-11 w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10"
                    aria-expanded={isLangOpen}
                    aria-controls="mobile-language-options"
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-white/60" />
                      <span className="text-sm text-white/80">
                        {currentLanguage.flag} {currentLanguage.name}
                      </span>
                    </div>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 text-white/50 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isLangOpen && (
                    <div
                      id="mobile-language-options"
                      className="absolute bottom-full left-0 right-0 mb-2 max-h-[280px] overflow-auto rounded-xl border border-white/20 bg-[#0a0e2e] shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex min-h-11 items-center gap-2 rounded-lg p-2.5 text-left transition-all ${
                              currentLang === lang.code
                                ? 'bg-[#98FFF9]/20 text-white'
                                : 'text-white/70 hover:bg-white/10'
                            }`}
                          >
                            <span className="text-base">{lang.flag}</span>
                            <span className="truncate text-xs font-medium">
                              {lang.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Links */}
              <div className="mt-3 pb-2">
                <div className="flex items-center justify-center gap-4 text-xs text-white/50">
                  <Link
                    to="/privacypolicy"
                    onClick={closeSidebar}
                    className="inline-flex min-h-11 items-center hover:text-white/70"
                  >
                    Privacy
                  </Link>
                  <span>•</span>
                  <Link
                    to="/terms"
                    onClick={closeSidebar}
                    className="inline-flex min-h-11 items-center hover:text-white/70"
                  >
                    Terms
                  </Link>
                  <span>•</span>
                  <Link
                    to="/faq"
                    onClick={closeSidebar}
                    className="inline-flex min-h-11 items-center hover:text-white/70"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
