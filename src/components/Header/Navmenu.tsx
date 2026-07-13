import { useId, useRef, useState } from 'react'
import { LuChevronDown, LuExternalLink } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'
import type { NavMenuProps, NavigationStatus } from './Header'

const statusClassName = (status: NavigationStatus) => {
  if (status === 'Live')
    return 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200'
  if (status === 'Early access' || status === 'Beta') {
    return 'border-amber-300/25 bg-amber-300/10 text-amber-100'
  }
  if (status === 'Degraded') {
    return 'border-orange-300/25 bg-orange-300/10 text-orange-100'
  }
  if (status === 'Testnet')
    return 'border-violet-300/25 bg-violet-300/10 text-violet-100'
  return 'border-white/15 bg-white/5 text-white/55'
}

const NavMenu = ({ item }: NavMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuId = `desktop-nav-${useId()}`
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div
      className="relative z-[300]"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={closeMenu}
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          event.currentTarget.contains(event.relatedTarget)
        ) {
          return
        }
        closeMenu()
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Escape' || !isMenuOpen) return
        event.preventDefault()
        closeMenu()
        triggerRef.current?.focus()
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="flex min-h-11 shrink-0 select-none items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98FFF9] 2xl:px-3"
        aria-expanded={isMenuOpen}
        aria-controls={menuId}
        aria-haspopup="true"
      >
        <span className="whitespace-nowrap text-sm font-medium lg:text-sm xl:text-base">
          {item.title}
        </span>
        <LuChevronDown
          aria-hidden="true"
          size={16}
          className={`transition-all duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isMenuOpen && (
        <>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-9 z-50 h-0 w-0 -translate-x-1/2 border-8 border-x-transparent border-b-[#1a0d2e] border-l-transparent border-t-transparent"
          />

          <div
            id={menuId}
            className="absolute left-0 top-12 z-50 w-[340px] rounded-xl border border-white/20 bg-gradient-to-b from-[#1a0d2e]/95 to-[#2A0D4E]/95 text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="flex max-h-[70vh] flex-col items-start gap-y-1 overflow-y-auto p-3">
              {item.submenu.map((subItem, index) => {
                const isExternal = subItem.path.startsWith('http')
                const [targetPath, targetHash = ''] = subItem.path.split('#')
                const normalizedPath = targetPath || '/'
                const isCurrent =
                  !isExternal &&
                  !subItem.onClick &&
                  location.pathname === normalizedPath &&
                  (!targetHash || location.hash === `#${targetHash}`)
                const descriptionId = `${menuId}-description-${index}`
                const className = `group flex min-h-[60px] w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98FFF9] ${
                  isCurrent
                    ? 'border-[#98FFF9]/25 bg-[#98FFF9]/10'
                    : 'border-transparent hover:border-white/10 hover:bg-white/10'
                }`
                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5">
                      <img
                        className="block h-4 w-4 object-contain opacity-80"
                        src={subItem.icon}
                        alt=""
                        aria-hidden="true"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white">
                          {subItem.title}
                        </span>
                        {subItem.status && (
                          <span
                            className={`shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${statusClassName(subItem.status)}`}
                          >
                            {subItem.status}
                          </span>
                        )}
                      </span>
                      <span
                        id={descriptionId}
                        className="mt-0.5 block text-xs leading-4 text-white/55"
                      >
                        {subItem.purpose}
                      </span>
                    </span>
                    {isExternal && !subItem.onClick && (
                      <LuExternalLink
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-white/35"
                      />
                    )}
                  </>
                )

                if (subItem.onClick) {
                  return (
                    <button
                      key={subItem.title}
                      type="button"
                      className={className}
                      onClick={() => {
                        subItem.onClick?.()
                        closeMenu()
                      }}
                      aria-label={subItem.title}
                      aria-describedby={descriptionId}
                    >
                      {content}
                    </button>
                  )
                }

                if (isExternal) {
                  return (
                    <a
                      key={subItem.title}
                      href={subItem.path}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={className}
                      onClick={closeMenu}
                      aria-label={subItem.title}
                      aria-describedby={descriptionId}
                    >
                      {content}
                      <span className="sr-only">Opens in a new tab</span>
                    </a>
                  )
                }

                return (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className={className}
                    onClick={closeMenu}
                    aria-current={isCurrent ? 'page' : undefined}
                    aria-label={subItem.title}
                    aria-describedby={descriptionId}
                  >
                    {content}
                  </Link>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NavMenu
