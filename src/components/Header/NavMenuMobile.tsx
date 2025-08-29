import { LuChevronDown } from 'react-icons/lu'

import { useState } from 'react'
// import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NavMenuProps } from './Header'

const NavMenuMobile = ({ item, closeSidebar }: NavMenuProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  return (
    <div>
      <div
        className="flex cursor-pointer items-center gap-2 p-3 rounded-xl hover:bg-white/10 transition-all duration-200"
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
      >
        <span className="text-xl font-semibold text-white/90">{item.title}</span>
        <LuChevronDown
          size={20}
          className={`transition-all duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <AnimatePresence>
        {isSubmenuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="flex flex-col gap-y-1 mt-2"
          >
            {item.submenu.map((subItem) => {
              return (
                <a
                  onClick={closeSidebar}
                  href={subItem.path}
                  key={subItem.title}
                  rel="noreferrer noopener"
                  className="group"
                >
                  <div className="flex h-full w-full cursor-pointer items-center gap-3 pl-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200">
                    <div className="grid w-5 h-5 shrink-0 place-items-center">
                      <img
                        className="w-full h-full object-contain"
                        src={subItem.icon}
                        alt={subItem.title}
                      />
                    </div>
                    <p className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                      {subItem.title}
                    </p>
                  </div>
                </a>
              )
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default NavMenuMobile
