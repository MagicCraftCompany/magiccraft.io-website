import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { X, Gamepad2, ShoppingBag, Globe, ChevronDown } from 'lucide-react'
import NavMenu from './Navmenu'
import { Suspense, lazy, useState, useEffect, useRef } from 'react'
import {
  LANGUAGES,
  setGoogTransCookie,
  triggerGoogleTranslate,
} from '@/lib/googleTranslate'

const NavMenuMobile = lazy(() => import('./NavMenuMobile'))
const StatusIndicator = lazy(() => import('./StatusIndicator'))

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
    title: 'Buy $MCRT',
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
    icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1722867433/MCRT_shydrd.webp',
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
]

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(min-width: 768px)').matches
  })
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
  const location = useLocation()

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
    // route-change hook reserved for future header state needs
  }, [location])

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

  // Track viewport to conditionally render header CTAs only on desktop (md+)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop('matches' in e ? e.matches : (e as MediaQueryList).matches)
    }
    // Initial
    setIsDesktop(mql.matches)
    // Subscribe
    mql.addEventListener?.(
      'change',
      handler as (e: MediaQueryListEvent) => void
    )
    // Fallback for older Safari
    mql.addListener?.(handler as (e: MediaQueryListEvent) => void)
    return () => {
      mql.removeEventListener?.(
        'change',
        handler as (e: MediaQueryListEvent) => void
      )
      mql.removeListener?.(handler as (e: MediaQueryListEvent) => void)
    }
  }, [])

  // Focus the close button when the mobile drawer opens
  useEffect(() => {
    if (!isSideMenuOpen) return
    const closeBtn = document.querySelector(
      '[data-drawer-close]'
    ) as HTMLButtonElement | null
    closeBtn?.focus()
  }, [isSideMenuOpen])

  // Close mobile drawer on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSideMenuOpen) closeSidebar()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isSideMenuOpen])

  function closeSidebar() {
    setIsSideMenuOpen(false)
    setIsLangOpen(false)
    setIsDesktopLangOpen(false)
    document.body.style.overflow = 'unset'
    setTimeout(() => hamburgerRef.current?.focus(), 50)
  }

  function openSidebar() {
    setIsSideMenuOpen(true)
    setIsDesktopLangOpen(false)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

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
            <div className="hidden items-center gap-4 md:gap-5 lg:gap-6 xl:flex">
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
                      <p className="whitespace-nowrap text-sm font-semibold tracking-wide text-white/85 transition-colors duration-200 group-hover:text-white lg:text-[15px] xl:text-base">
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
                      <p className="whitespace-nowrap text-sm font-semibold tracking-wide text-white/85 transition-colors duration-200 group-hover:text-white lg:text-[15px] xl:text-base">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
            {isDesktop && (
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <a
                  href="https://lobby.magiccraft.io/"
                  rel="noreferrer noopener"
                  className="header-cta header-cta--play hidden h-11 items-center no-underline md:inline-flex"
                  aria-label="Play"
                >
                  <Gamepad2 className="h-4 w-4" />
                  <span>Play</span>
                </a>

                <a
                  href="https://app.magiccraft.io/marketplace/explorer"
                  rel="noreferrer noopener"
                  className="header-cta header-cta--shop hidden h-11 items-center no-underline md:inline-flex"
                  role="button"
                  aria-label="Shop"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Shop</span>
                </a>

                {/* Buy $MCRT CTA removed per mobile overlap request */}

                {/* Hamburger shown as absolute on mobile (moved outside group) */}
                <span className="hidden md:block" />
                <a
                  href="/#buy-mcrt"
                  rel="noreferrer noopener"
                  className="header-cta header-cta--buy hidden h-11 items-center no-underline md:inline-flex"
                  aria-label="Buy $MCRT"
                >
                  <span>Buy</span>
                </a>

                {/* Desktop language selector */}
                <div ref={desktopLangRef} className="relative hidden md:block">
                  <button
                    type="button"
                    onClick={() => setIsDesktopLangOpen((v) => !v)}
                    className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-white/85 transition-all hover:border-white/20 hover:bg-white/10"
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
                            className={`flex items-center gap-2 rounded-md p-2.5 text-left transition-all ${
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
                <Suspense
                  fallback={
                    <div className="h-10 w-[78px] rounded-lg border border-white/10 bg-white/5" />
                  }
                >
                  <StatusIndicator />
                </Suspense>
              </div>
            )}
          </div>
          {/* Absolutely positioned hamburger to avoid layout clipping */}
          <button
            ref={hamburgerRef}
            onClick={openSidebar}
            className="glass-strong absolute right-2 top-1/2 z-[100000] flex min-h-[48px] min-w-[48px] -translate-y-1/2 items-center justify-center rounded-xl p-2.5 transition-all duration-200 hover:bg-white/10 md:hidden"
            aria-label="Open menu"
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
          className="fixed inset-0 z-[99999] bg-black/60"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile menu panel - premium glass design */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-[100000] h-full w-[85%] max-w-[380px] transform transition-transform duration-300 ease-out ${
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-auto border-l border-white/10 bg-[#0a0e2e]/95 shadow-2xl`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="h-full px-5 py-5 text-white">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={mcLogo} alt="MagicCraft" className="h-8" />
              </div>
              <button
                data-drawer-close
                className="group rounded-full border border-white/10 bg-white/5 p-2 transition-all duration-200 hover:bg-white/10"
                onClick={closeSidebar}
              >
                <X className="h-5 w-5 cursor-pointer transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Primary CTAs */}
            <div className="mb-5 grid grid-cols-2 gap-2">
              <a
                href="https://lobby.magiccraft.io/"
                onClick={closeSidebar}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-4 py-3 text-sm font-bold text-[#03082F] transition-opacity hover:opacity-90"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>Play Now</span>
              </a>
              <a
                href="/#buy-mcrt"
                onClick={closeSidebar}
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-white/15"
              >
                <span>Buy $MCRT</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mb-5 flex gap-2">
              <a
                href="https://app.magiccraft.io/marketplace/explorer"
                onClick={closeSidebar}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 transition-all hover:bg-white/10"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Shop</span>
              </a>
              <a
                href="https://lobby.magiccraft.io/leaderboard"
                onClick={closeSidebar}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 transition-all hover:bg-white/10"
              >
                <img
                  src={leaderboard}
                  alt=""
                  className="h-4 w-4 opacity-80"
                  aria-hidden="true"
                />
                <span>Ranks</span>
              </a>
              <a
                href="https://lobby.magiccraft.io/stats"
                onClick={closeSidebar}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 transition-all hover:bg-white/10"
              >
                <img
                  src={stats}
                  alt=""
                  className="h-4 w-4 opacity-80"
                  aria-hidden="true"
                />
                <span>Stats</span>
              </a>
            </div>

            <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Navigation Sections */}
            <div className="flex-1 space-y-1 overflow-auto">
              {commonMenuItemsNew.map((item) =>
                item?.submenu?.length > 0 ? (
                  <Suspense
                    key={item.title}
                    fallback={<div className="h-12 rounded-lg bg-white/5" />}
                  >
                    <NavMenuMobile item={item} closeSidebar={closeSidebar} />
                  </Suspense>
                ) : item.path?.startsWith('http') ? (
                  <a
                    key={item.title}
                    onClick={closeSidebar}
                    href={item.path}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
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
                    className="flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-white/5"
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
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-white/60" />
                    <span className="text-sm text-white/80">
                      {currentLanguage.flag} {currentLanguage.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-white/50 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isLangOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 max-h-[280px] overflow-auto rounded-xl border border-white/20 bg-[#0a0e2e] shadow-2xl">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`flex items-center gap-2 rounded-lg p-2.5 text-left transition-all ${
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
                  className="hover:text-white/70"
                >
                  Privacy
                </Link>
                <span>•</span>
                <Link
                  to="/terms"
                  onClick={closeSidebar}
                  className="hover:text-white/70"
                >
                  Terms
                </Link>
                <span>•</span>
                <Link
                  to="/faq"
                  onClick={closeSidebar}
                  className="hover:text-white/70"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
