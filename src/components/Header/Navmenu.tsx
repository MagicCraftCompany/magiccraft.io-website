import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { NavMenuProps } from './Header'

const NavMenu = ({ item }: NavMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer select-none items-center gap-2 py-2 text-white"
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      >
        <div className="hidden w-[18px] shrink-0 place-items-center 2xl:grid">
          <img className="max-w-full" src={item.icon} alt="" />
        </div>
        <span className="text-lg font-medium">{item.title}</span>
        <LuChevronDown
          size={18}
          className={`transition-all ${isMenuOpen && 'rotate-180'}`}
        />
      </div>

      <div
        className={`absolute left-1/2 top-8 z-10 h-0 w-0 translate-x-1/2 border-8 border-x-transparent border-b-blue-400 border-l-transparent border-t-transparent  transition-all duration-300 ${
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`absolute left-0 top-11 z-10 rounded-md border border-blue-400 bg-blue-900 text-white backdrop-blur-md backdrop-filter  transition-all duration-300 ${
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseOut={() => setIsMenuOpen(false)}
      >
        <div className="flex min-w-max flex-col items-start gap-y-4 whitespace-nowrap p-7">
          {item.submenu.map((subItem) => {
            return (
              <a
                href={subItem.path}
                key={subItem.title}
                rel="noreferrer noopener"
              >
                <div className="flex h-full w-full cursor-pointer items-center gap-2">
                  <div className="grid w-5 shrink-0 place-items-center">
                    <img
                      className="max-w-full"
                      src={subItem.icon}
                      alt={subItem.title}
                    />
                  </div>
                  <p className="font-bold drop-shadow-md">{subItem.title}</p>
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
