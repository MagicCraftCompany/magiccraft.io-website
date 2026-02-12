import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { X, Gamepad2, ShoppingBag, Globe, ChevronDown } from 'lucide-react'
import NavMenu from './Navmenu'
import { useState, useEffect, useRef } from 'react'
import StatusIndicator from './StatusIndicator'

// Language options (codes match Google Translate)
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
]

// Trigger Google Translate
function triggerGoogleTranslate(langCode: string) {
  // Google Translate element sometimes loads async; poll briefly.
  let tries = 0
  const maxTries = 12
  const intervalMs = 350

  const applyLang = (select: HTMLSelectElement, code: string) => {
    select.value = code
    // Dispatch like a real user change (bubbling helps some GT builds)
    select.dispatchEvent(new Event('input', { bubbles: true }))
    select.dispatchEvent(new Event('change', { bubbles: true }))
  }

  const tick = () => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
    if (select) {
      if (langCode === 'en') {
        applyLang(select, langCode)
        return
      }

      // Force re-translate on SPA route changes by briefly resetting to English.
      if (select.value === langCode) {
        applyLang(select, 'en')
        setTimeout(() => applyLang(select, langCode), 50)
        return
      }

      applyLang(select, langCode)
      return
    }

    tries += 1
    if (tries < maxTries) setTimeout(tick, intervalMs)
  }

  tick()
}

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
// import { openTransactionModal } from "@xswap-link/sdk";

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
// const handleBuyMCRT = async () => {
//   const ua = navigator.userAgent || (navigator as any).vendor
//   const isIOS = /iPad|iPhone|iPod/.test(ua)
//   if (isIOS) {
//     window.location.href = 'https://www.bybit.com/en/trade/spot/MCRT/USDT'
//     return
//   }
//   try {
//     await openTransactionModal({
//       integratorId: "34808808c1f4ae4533b7",
//       dstChain: "56",
//       dstToken: "0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f",
//       srcChain: "56",
//       srcToken: "0x0000000000000000000000000000000000000000",
//       defaultWalletPicker: true,
//     });
//   } catch (error) {
//     console.error("XPay transaction failed:", error);
//   }
// };

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
        path: 'https://docs.magiccraft.io/',
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
        title: 'PancakeSwap',
        icon: pancakeswap,
        path: 'https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f',
      },
      {
        title: 'Bybit',
        icon: bybit,
        path: 'https://www.bybit.com/en/trade/spot/MCRT/USDT',
      },
      {
        title: 'HTX',
        icon: huobi,
        path: 'https://www.htx.com/trade/mcrt_usdt',
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
  const location = useLocation()

  function setGoogTransCookie(langCode: string) {
    if (typeof document === 'undefined') return
    const value = `/en/${langCode || 'en'}`
    const base = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`
    document.cookie = base
    // Also set for apex domain in production so it persists across subdomains.
    try {
      if (window.location.hostname.endsWith('magiccraft.io')) {
        document.cookie = `${base};domain=.magiccraft.io`
      }
    } catch {}
  }

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code)
    setIsLangOpen(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLang', code)
      setGoogTransCookie(code)
      triggerGoogleTranslate(code)
      // Ensure translation applies consistently (Google Translate relies on cookies + DOM mutation).
      setTimeout(() => {
        try {
          window.location.assign(window.location.href)
        } catch {}
      }, 120)
    }
  }

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0]

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    mql.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void)
    // Fallback for older Safari
    mql.addListener?.(handler as any)
    return () => {
      mql.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void)
      mql.removeListener?.(handler as any)
    }
  }, [])

  function closeSidebar() {
    setIsSideMenuOpen(false)
    setIsLangOpen(false)
    setIsDesktopLangOpen(false)
    document.body.style.overflow = 'unset'
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
        <header className="site-header relative z-[200] w-full max-w-full glass-surface hairline-bottom overflow-visible">
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
                      <div className="flex items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10">
                        <p className="text-sm lg:text-[15px] xl:text-base text-white/85 group-hover:text-white whitespace-nowrap font-semibold tracking-wide transition-colors duration-200">{item.title}</p>
                      </div>
                    </a>
                  ) : (
                    <Link key={item.title} to={item.path || '/'} className="group">
                      <div className="flex items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10">
                        <p className="text-sm lg:text-[15px] xl:text-base text-white/85 group-hover:text-white whitespace-nowrap font-semibold tracking-wide transition-colors duration-200">{item.title}</p>
                      </div>
                    </Link>
                  )
                )
              )}
            </div>
            {isDesktop && (
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
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

              {/* Buy $MCRT CTA removed per mobile overlap request */}
              
              {/* Hamburger shown as absolute on mobile (moved outside group) */}
              <span className="hidden md:block" />
              <a
                href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
                rel="noreferrer noopener"
                className="hidden md:inline-flex header-cta header-cta--buy no-underline"
                aria-label="Buy $MCRT"
              >
                <span>Buy</span>
              </a>

              {/* Desktop language selector */}
              <div ref={desktopLangRef} className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setIsDesktopLangOpen((v) => !v)}
                  className="inline-flex items-center gap-2 h-11 px-3 rounded-md bg-white/5 border border-white/10 text-white/85 hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label="Change language"
                  aria-haspopup="menu"
                  aria-expanded={isDesktopLangOpen}
                >
                  <Globe className="w-4 h-4 text-white/70" />
                  <span className="text-sm font-semibold">{currentLanguage.flag}</span>
                  <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isDesktopLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDesktopLangOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[280px] max-h-[320px] overflow-auto rounded-lg bg-[#0a0e2e]/95 border border-white/20 shadow-2xl backdrop-blur-xl p-2">
                    <div className="grid grid-cols-2 gap-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            handleLanguageChange(lang.code)
                            setIsDesktopLangOpen(false)
                          }}
                          className={`flex items-center gap-2 p-2.5 rounded-md text-left transition-all ${
                            currentLang === lang.code
                              ? 'bg-[#98FFF9]/20 text-white'
                              : 'hover:bg-white/10 text-white/75'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="text-xs font-semibold truncate">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <StatusIndicator />
            </div>
            )}
          </div>
          {/* Absolutely positioned hamburger to avoid layout clipping */}
          <button
            onClick={openSidebar}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl glass-strong hover:bg-white/10 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center z-[100000]"
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
      
      {/* Mobile menu panel - premium glass design */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] z-[100000] transform transition-transform duration-300 ease-out ${
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-[#0a0e2e]/95 border-l border-white/10 shadow-2xl overflow-auto`}
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="py-5 px-5 text-white h-full">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <img src={mcLogo} alt="MagicCraft" className="h-8" />
              </div>
              <button
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group"
                onClick={closeSidebar}
              >
                <X className="cursor-pointer group-hover:rotate-90 transition-transform duration-200 w-5 h-5" />
              </button>
            </div>

            {/* Primary CTAs */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <a
                href="https://lobby.magiccraft.io/"
                onClick={closeSidebar}
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] text-[#03082F] font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play Now</span>
              </a>
              <a
                href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
                onClick={closeSidebar}
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/15 transition-all"
              >
                <span>Buy $MCRT</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex gap-2 mb-5">
              <a
                href="https://app.magiccraft.io/marketplace/explorer"
                onClick={closeSidebar}
                rel="noreferrer noopener"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop</span>
              </a>
              <a
                href="https://lobby.magiccraft.io/leaderboard"
                onClick={closeSidebar}
                rel="noreferrer noopener"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-all"
              >
                <img src={leaderboard} alt="" className="w-4 h-4 opacity-80" />
                <span>Ranks</span>
              </a>
              <a
                href="https://lobby.magiccraft.io/stats"
                onClick={closeSidebar}
                rel="noreferrer noopener"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-all"
              >
                <img src={stats} alt="" className="w-4 h-4 opacity-80" />
                <span>Stats</span>
              </a>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

            {/* Navigation Sections */}
            <div className="flex-1 overflow-auto space-y-1">
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
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <img src={item.icon} alt="" className="w-5 h-5 opacity-70" />
                      <p className="text-base font-medium text-white/90">{item.title}</p>
                    </a>
                  ) : (
                    <Link
                      key={item.title}
                      onClick={closeSidebar}
                      to={item.path || '/'}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <img src={item.icon} alt="" className="w-5 h-5 opacity-70" />
                      <p className="text-base font-medium text-white/90">{item.title}</p>
                    </Link>
                  )
                )
              )}
            </div>

            {/* Language Selector */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="w-full flex items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-white/60" />
                    <span className="text-sm text-white/80">{currentLanguage.flag} {currentLanguage.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 max-h-[280px] overflow-auto rounded-xl bg-[#0a0e2e] border border-white/20 shadow-2xl">
                    <div className="p-2 grid grid-cols-2 gap-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`flex items-center gap-2 p-2.5 rounded-lg text-left transition-all ${
                            currentLang === lang.code 
                              ? 'bg-[#98FFF9]/20 text-white' 
                              : 'hover:bg-white/10 text-white/70'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="text-xs font-medium truncate">{lang.name}</span>
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
                <a href="/privacypolicy" onClick={closeSidebar} className="hover:text-white/70">Privacy</a>
                <span>•</span>
                <a href="/terms" onClick={closeSidebar} className="hover:text-white/70">Terms</a>
                <span>•</span>
                <a href="/faq" onClick={closeSidebar} className="hover:text-white/70">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
