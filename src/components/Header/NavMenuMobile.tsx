import { LuChevronDown } from 'react-icons/lu'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavMenuProps } from './Header'

const NavMenuMobile = ({ item, closeSidebar }: NavMenuProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg">
      <button
        className={`flex w-full items-center justify-between gap-3 rounded-lg p-3 transition-all duration-200 ${
          isSubmenuOpen ? 'bg-white/10' : 'hover:bg-white/5'
        }`}
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
      >
        <div className="flex items-center gap-3">
          {item.icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
              <img
                src={item.icon}
                alt=""
                className="h-4 w-4 opacity-80"
                aria-hidden="true"
              />
            </div>
          )}
          <span className="text-base font-semibold text-white/90">
            {item.title}
          </span>
        </div>
        <LuChevronDown
          size={18}
          className={`text-white/50 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isSubmenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-1 py-2 pl-4 pr-2">
              {item.submenu.map((subItem) => {
                const isExternal = subItem.path.startsWith('http')

                return (
                  <a
                    onClick={(e) => {
                      if (subItem.onClick) {
                        e.preventDefault()
                        subItem.onClick()
                      }
                      closeSidebar?.()
                    }}
                    href={subItem.path}
                    key={subItem.title}
                    target={
                      isExternal && !subItem.onClick ? '_blank' : undefined
                    }
                    rel="noreferrer noopener"
                    className="group flex items-center gap-3 rounded-lg p-2.5 transition-all duration-150 hover:bg-white/5"
                  >
                    {subItem.icon && (
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-white/5">
                        <img
                          className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                          src={subItem.icon}
                          alt=""
                        />
                      </div>
                    )}
                    <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white/90">
                      {subItem.title}
                    </span>
                  </a>
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
