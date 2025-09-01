import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { NavMenuProps } from './Header'

const NavMenu = ({ item }: NavMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className="relative z-[300]">
      <div
        className="flex cursor-pointer select-none items-center gap-1 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      >
        <span className="text-sm lg:text-sm xl:text-base font-medium">{item.title}</span>
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
        className={`absolute left-0 top-12 z-50 rounded-2xl border border-white/20 bg-gradient-to-b from-[#1a0d2e]/95 to-[#2A0D4E]/95 text-white backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 translate-y-2'
        }`}
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      >
        <div className="flex min-w-max flex-col items-start gap-y-2 whitespace-nowrap p-6">
          {item.submenu.map((subItem) => {
            return (
              <a
                href={subItem.onClick ? '#' : subItem.path}
                key={subItem.title}
                rel="noreferrer noopener"
                className="w-full group"
                onClick={(e) => {
                  if (subItem.onClick) {
                    e.preventDefault()
                    subItem.onClick()
                  }
                }}
              >
                <div className="flex h-full w-full cursor-pointer items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-200">
                  <div className="grid w-5 h-5 shrink-0 place-items-center">
                    <img
                      className="w-full h-full object-contain"
                      src={subItem.icon}
                      alt={subItem.title}
                    />
                  </div>
                  <p className="font-semibold text-white/90 group-hover:text-white transition-colors duration-200">{subItem.title}</p>
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
