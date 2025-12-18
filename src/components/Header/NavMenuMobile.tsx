import { LuChevronDown } from 'react-icons/lu'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavMenuProps } from './Header'

const NavMenuMobile = ({ item, closeSidebar }: NavMenuProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  
  return (
    <div className="rounded-xl overflow-hidden">
      <button
        className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl transition-all duration-200 ${
          isSubmenuOpen ? 'bg-white/10' : 'hover:bg-white/5'
        }`}
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
      >
        <div className="flex items-center gap-3">
          {item.icon && (
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <img src={item.icon} alt="" className="w-4 h-4 opacity-80" />
            </div>
          )}
          <span className="text-base font-semibold text-white/90">{item.title}</span>
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
            <div className="py-2 pl-4 pr-2 space-y-1">
              {item.submenu.map((subItem) => (
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
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all duration-150"
                >
                  {subItem.icon && (
                    <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        src={subItem.icon}
                        alt=""
                      />
                    </div>
                  )}
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors font-medium">
                    {subItem.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavMenuMobile
