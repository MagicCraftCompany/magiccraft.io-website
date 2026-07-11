import { useId, useRef, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { NavMenuProps } from './Header'

const NavMenu = ({ item }: NavMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuId = `desktop-nav-${useId()}`

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
            className="absolute left-0 top-12 z-50 rounded-lg border border-white/20 bg-gradient-to-b from-[#1a0d2e]/95 to-[#2A0D4E]/95 text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="flex min-w-max flex-col items-start gap-y-1 whitespace-nowrap p-4">
              {item.submenu.map((subItem) => {
                const isExternal = subItem.path.startsWith('http')
                return (
                  <a
                    href={subItem.onClick ? '#' : subItem.path}
                    key={subItem.title}
                    target={
                      isExternal && !subItem.onClick ? '_blank' : undefined
                    }
                    rel="noreferrer noopener"
                    className="group flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98FFF9]"
                    onClick={(event) => {
                      if (subItem.onClick) {
                        event.preventDefault()
                        subItem.onClick()
                      }
                      closeMenu()
                    }}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <img
                        className="block h-full w-full object-contain"
                        src={subItem.icon}
                        alt=""
                        aria-hidden="true"
                      />
                    </span>
                    <span className="font-semibold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white">
                      {subItem.title}
                    </span>
                  </a>
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
