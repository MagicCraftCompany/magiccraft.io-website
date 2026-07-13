import { AnimatePresence, motion } from 'framer-motion'
import { useId } from 'react'
import { LuChevronDown, LuExternalLink } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'
import type { NavMenuProps, NavigationStatus } from './Header'

type NavMenuMobileProps = NavMenuProps & {
  isOpen: boolean
  onToggle: () => void
}

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

const NavMenuMobile = ({
  item,
  closeSidebar,
  isOpen,
  onToggle,
}: NavMenuMobileProps) => {
  const submenuId = `mobile-nav-${useId()}`
  const location = useLocation()

  return (
    <div className="rounded-lg">
      <button
        type="button"
        className={`sticky top-0 z-10 flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-transparent p-3 text-left transition-all duration-200 ${
          isOpen
            ? 'border-white/10 bg-[#171b42] shadow-lg'
            : 'bg-[#0a0e2e] hover:bg-white/5'
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={submenuId}
      >
        <span className="flex items-center gap-3">
          {item.icon && (
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
              <img
                src={item.icon}
                alt=""
                className="h-4 w-4 opacity-80"
                aria-hidden="true"
              />
            </span>
          )}
          <span className="text-base font-semibold text-white/90">
            {item.title}
          </span>
        </span>
        <LuChevronDown
          aria-hidden="true"
          size={18}
          className={`text-white/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={submenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-1 py-2 pl-3 pr-1">
              {item.submenu.map((subItem, index) => {
                const isExternal = subItem.path.startsWith('http')
                const [targetPath, targetHash = ''] = subItem.path.split('#')
                const normalizedPath = targetPath || '/'
                const isCurrent =
                  !isExternal &&
                  !subItem.onClick &&
                  location.pathname === normalizedPath &&
                  (!targetHash || location.hash === `#${targetHash}`)
                const descriptionId = `${submenuId}-description-${index}`
                const className = `group flex min-h-[58px] w-full items-center gap-3 rounded-lg border px-2.5 py-2 text-left transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98FFF9] ${
                  isCurrent
                    ? 'border-[#98FFF9]/25 bg-[#98FFF9]/10'
                    : 'border-transparent hover:border-white/10 hover:bg-white/5'
                }`

                const content = (
                  <>
                    {subItem.icon && (
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-white/5">
                        <img
                          className="h-4 w-4 object-contain opacity-75 transition-opacity group-hover:opacity-100"
                          src={subItem.icon}
                          alt=""
                          aria-hidden="true"
                        />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold text-white/90">
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
                      onClick={() => {
                        subItem.onClick?.()
                        closeSidebar?.()
                      }}
                      className={className}
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
                      onClick={closeSidebar}
                      className={className}
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
                    onClick={closeSidebar}
                    className={className}
                    aria-current={isCurrent ? 'page' : undefined}
                    aria-label={subItem.title}
                    aria-describedby={descriptionId}
                  >
                    {content}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavMenuMobile
