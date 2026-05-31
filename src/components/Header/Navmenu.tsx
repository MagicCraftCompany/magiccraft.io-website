import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { NavMenuProps } from './Header'

const NavMenu = ({ item }: NavMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className="relative z-[300]">
      <div
        className="flex cursor-pointer select-none items-center gap-1 rounded-lg px-3 py-2 text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      >
        <span className="text-sm font-medium lg:text-sm xl:text-base">
          {item.title}
        </span>
        <LuChevronDown
          size={16}
          className={`transition-all duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
        />
      </div>

      <div
        className={`absolute left-1/2 top-9 z-50 h-0 w-0 -translate-x-1/2 border-8 border-x-transparent border-b-[#1a0d2e] border-l-transparent border-t-transparent transition-all duration-300 ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`absolute left-0 top-12 z-50 rounded-lg border border-white/20 bg-gradient-to-b from-[#1a0d2e]/95 to-[#2A0D4E]/95 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      >
        <div className="flex min-w-max flex-col items-start gap-y-2 whitespace-nowrap p-6">
          {item.submenu.map((subItem) => {
            const isExternal = subItem.path.startsWith('http')
            return (
              <a
                href={subItem.onClick ? '#' : subItem.path}
                key={subItem.title}
                target={isExternal && !subItem.onClick ? '_blank' : undefined}
                rel="noreferrer noopener"
                className="group w-full"
                onClick={(e) => {
                  if (subItem.onClick) {
                    e.preventDefault()
                    subItem.onClick()
                  }
                }}
              >
                <div className="flex h-full w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/10">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <img
                      className="block h-full w-full object-contain"
                      src={subItem.icon}
                      alt={subItem.title}
                    />
                  </div>
                  <p className="font-semibold leading-tight text-white/90 transition-colors duration-200 group-hover:text-white">
                    {subItem.title}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NavMenu
