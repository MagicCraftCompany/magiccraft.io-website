'use client'

import {
  FaXTwitter,
  FaTelegram,
  FaDiscord,
  FaReddit,
  FaInstagram,
  FaMedium,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

import btc from '@/assets/icons/btclobby.svg'
import xrp from '@/assets/icons/xrplobby.svg'
import sol from '@/assets/icons/sollobby.svg'
import eth from '@/assets/icons/ethlobby.svg'
import bnb from '@/assets/icons/bnblogo-yellow.svg'
const mcrtIcon = 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp'


export default function MagicraftDownload() {
  const [hoveredLobby, setHoveredLobby] = useState<string | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<{
    top: number
    left: number
    width: number
    arrow: 'left' | 'center' | 'right'
  }>({ top: 0, left: 0, width: 340, arrow: 'center' })
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  
  useEffect(() => {
    function updatePosition() {
      if (hoveredLobby && cardRefs.current[hoveredLobby]) {
        const rect = cardRefs.current[hoveredLobby]?.getBoundingClientRect()
        if (rect) {
          const padding = 32
          const viewportWidth = window.innerWidth
          const viewportHeight = window.innerHeight
          const tooltipWidth = Math.min(viewportWidth * 0.92, viewportWidth >= 768 ? 380 : 340)
          const preferredHeight = 280

          let top = rect.top - preferredHeight - 16
          if (top < padding) {
            top = rect.bottom + 16
          }
          top = Math.max(padding, Math.min(viewportHeight - preferredHeight - padding, top))

          const centeredLeft = rect.left + rect.width / 2
          let left = centeredLeft - tooltipWidth / 2
          let arrow: 'left' | 'center' | 'right' = 'center'

          const rightOverflow = centeredLeft + tooltipWidth / 2 > viewportWidth - padding
          const leftOverflow = centeredLeft - tooltipWidth / 2 < padding

          let rightmostCards: string[] = []
          if (viewportWidth >= 1280) {
            rightmostCards = ['sol']
          } else if (viewportWidth >= 640) {
            rightmostCards = ['mcrt', 'sol']
          } else {
            rightmostCards = ['bnb', 'eth', 'sol']
          }
          const isRightmostCard = rightmostCards.includes(hoveredLobby)
          
          if (rightOverflow || isRightmostCard) {
            left = rect.right - tooltipWidth - 16
            arrow = 'right'
          } else if (leftOverflow) {
            left = rect.left + 16
            arrow = 'left'
          }

          left = Math.max(padding, Math.min(viewportWidth - tooltipWidth - padding, left))
          setTooltipStyle({ top, left, width: tooltipWidth, arrow })
        }
      }
    }
    updatePosition()
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [hoveredLobby])

  const platforms = [
    {
      name: 'Apple',
      icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_3_rgkyh6.svg',
      href: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
      label: 'Get it on',
      sublabel: 'App Store',
    },
    {
      name: 'Android',
      icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp',
      href: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en',
      label: 'Get it on',
      sublabel: 'Google Play',
    },
    {
      name: 'Steam',
      icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_4_bkzyqg.svg',
      href: 'https://store.steampowered.com/app/2395760/MagicCraft/',
      label: 'Get it on',
      sublabel: 'Steam',
    },
    {
      name: 'Hyperplay',
      icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733430191/HyperPlayCustomBadge_ao6ida.webp',
      href: 'https://store.hyperplay.xyz/game/magiccraft',
      label: 'Get it on',
      sublabel: 'Hyperplay',
    },
    {
      name: 'Windows',
      icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_5_e3mxyx.svg',
      href: 'https://drive.google.com/file/d/1kxtzoO3Qkm-f_6yPlV6EIi0f5t3jGSJA/view?usp=sharing',
      label: 'Download',
      sublabel: 'PC',
    },
  ]

  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaXTwitter className="text-white opacity-50" size={20} />,
      link: 'https://twitter.com/MagicCraftGame',
    },
    {
      name: 'Telegram',
      icon: <FaTelegram className="text-white opacity-50" size={20} />,
      link: 'https://t.me/magiccraftgamechat',
    },
    {
      name: 'Discord',
      icon: <FaDiscord className="text-white opacity-50" size={20} />,
      link: 'https://discord.gg/magiccraftgame',
    },
    {
      name: 'Reddit',
      icon: <FaReddit className="text-white opacity-50" size={20} />,
      link: 'https://www.reddit.com/r/magiccraftgame/',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-white opacity-50" size={20} />,
      link: 'https://www.instagram.com/magiccraftgame/',
    },
    {
      name: 'Medium',
      icon: <FaMedium className="text-white opacity-50" size={20} />,
      link: 'https://medium.com/@MagicCraftGame',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-white opacity-50" size={20} />,
      link: 'https://www.linkedin.com/company/magiccraft',
    },
    {
      name: 'TikTok',
      icon: <FaTiktok className="text-white opacity-50" size={20} />,
      link: 'https://www.tiktok.com/@magiccraftgame',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube className="text-white opacity-50" size={20} />,
      link: 'https://www.youtube.com/@MagicCraftGame',
    },
  ]

  const lobbyData = {
    btc: {
      icon: btc,
      title: '$BTC',
      subtitle: 'Bitcoin',
      glowColor: '#F7931A',
      bgGradient: 'from-[#F7931A]/20 to-[#F7931A]/5',
      borderColor: 'border-[#F7931A]/40',
      tooltip: {
        title: 'Bitcoin Lobby',
        tagline: 'Play & Earn BTC',
        features: [
          'Daily BTC prize pools',
          'Instant withdrawals',
          'Competitive matchmaking',
          'Pro tournaments'
        ]
      }
    },
    bnb: {
      icon: bnb,
      title: '$BNB',
      subtitle: 'BNB Chain',
      glowColor: '#F3BA2F',
      bgGradient: 'from-[#F3BA2F]/20 to-[#F3BA2F]/5',
      borderColor: 'border-[#F3BA2F]/40',
      tooltip: {
        title: 'BNB Chain Lobby',
        tagline: 'Low Fees, Fast Games',
        features: [
          'Minimal gas fees',
          'Quick settlements',
          'Daily leaderboards',
          'BSC ecosystem'
        ]
      }
    },
    mcrt: {
      icon: mcrtIcon,
      title: '$MCRT',
      subtitle: 'MagicCraft',
      glowColor: '#98FFF9',
      bgGradient: 'from-[#98FFF9]/20 to-[#98FFF9]/5',
      borderColor: 'border-[#98FFF9]/40',
      tooltip: {
        title: 'MCRT Lobby',
        tagline: 'Native Token Rewards',
        features: [
          'Highest reward rates',
          'Staking bonuses',
          'VIP benefits',
          'Governance power'
        ]
      }
    },
    eth: {
      icon: eth,
      title: '$ETH',
      subtitle: 'Ethereum',
      glowColor: '#627EEA',
      bgGradient: 'from-[#627EEA]/20 to-[#627EEA]/5',
      borderColor: 'border-[#627EEA]/40',
      tooltip: {
        title: 'Ethereum Lobby',
        tagline: 'Premium Competition',
        features: [
          'High-stakes matches',
          'NFT integrations',
          'DeFi rewards',
          'Elite tournaments'
        ]
      }
    },
    xrp: {
      icon: xrp,
      title: '$XRP',
      subtitle: 'Ripple',
      glowColor: '#23292F',
      bgGradient: 'from-[#51C1F6]/20 to-[#51C1F6]/5',
      borderColor: 'border-[#51C1F6]/40',
      tooltip: {
        title: 'Ripple Lobby',
        tagline: 'Lightning Fast',
        features: [
          'Instant transfers',
          'Micro-fee gaming',
          '24/7 active pools',
          'Global liquidity'
        ]
      }
    },
    sol: {
      icon: sol,
      title: '$SOL',
      subtitle: 'Solana',
      glowColor: '#9945FF',
      bgGradient: 'from-[#9945FF]/20 to-[#14F195]/5',
      borderColor: 'border-[#9945FF]/40',
      tooltip: {
        title: 'Solana Lobby',
        tagline: 'Speed & Scale',
        features: [
          'Sub-second finality',
          'Lowest fees',
          'Mass tournaments',
          'SPL rewards'
        ]
      }
    }
  }

  return (
    <>
    <div className="mx-2 sm:mx-4 flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-8 lg:mx-8 xl:mx-16 2xl:mx-20 lg:mb-2 mt-2 sm:mt-3 relative z-50 overflow-visible">
      {/* Platform Download Box */}
      <div className="relative mx-auto w-full lg:w-auto lg:flex-shrink-0 lg:mx-0">
        <div className="rounded-md bg-gradient-to-b from-[#B591F2] to-transparent p-[1px] shadow-2xl">
          <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            {/* Platform Download Buttons */}
            <div className="p-5 lg:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 lg:gap-4 w-full max-w-md mx-auto lg:max-w-none">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    className={`group flex flex-col items-center text-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] p-3 lg:p-4 rounded-md bg-black/20 hover:bg-black/40 border border-transparent hover:border-[#B591F2]/30 ${platform.name === 'Windows' ? 'hidden' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${platform.label} ${platform.sublabel}`}
                  >
                    <div className="mb-2 h-7 w-7 sm:h-8 sm:w-8 lg:h-8 lg:w-8">
                      <img
                        src={platform.icon}
                        alt={platform.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300 font-medium">{platform.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFB649] transition-colors duration-300">
                      {platform.sublabel}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mx-4 mb-4 flex justify-center gap-3 lg:gap-3 rounded-md border border-[#B591F2]/30 bg-gradient-to-r from-[#6D3190]/80 to-[#642588]/80 py-3 lg:py-3 backdrop-blur-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="transition-colors duration-200 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] p-2 rounded-md hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <div className="scale-75">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Lobby Cards */}
      <div className="w-full lg:flex-1 lg:ml-6 relative overflow-visible" style={{ zIndex: 100 }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full max-w-5xl lg:max-w-none mx-auto px-1 sm:px-2 overflow-visible">
          {(['btc','bnb','mcrt','eth','xrp','sol'] as const).map((key) => {
            const l = lobbyData[key]
            const url = `https://lobby.magiccraft.io/?crypto=${key}`
            const isHovered = hoveredLobby === key
            
            return (
              <div 
                key={key} 
                ref={(el) => { cardRefs.current[key] = el }}
                className="relative group h-full min-w-0 overflow-visible"
                style={{ zIndex: isHovered ? 9999 : 'auto' }}
                onMouseEnter={() => setHoveredLobby(key)}
                onMouseLeave={() => setHoveredLobby(null)}
              >
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block relative rounded-md p-[1px] transition-all duration-300 ${l.borderColor} border-2 ${isHovered ? 'border-opacity-100' : 'border-opacity-40'}`}
                  whileHover={{ scale: 1.02, y: -4 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{ 
                    boxShadow: isHovered 
                      ? `0 20px 50px ${l.glowColor}50, 0 0 40px ${l.glowColor}30`
                      : `0 4px 20px rgba(0,0,0,0.3)`
                  }}
                >
                  <div
                    className={`relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br ${l.bgGradient} backdrop-blur-sm p-4 sm:p-5 min-h-[120px] sm:min-h-[140px]`}
                    style={{
                      background: `linear-gradient(135deg, rgba(30,20,60,0.95) 0%, rgba(20,10,40,0.98) 100%)`
                    }}
                  >
                    {/* Colored top accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${l.glowColor}, ${l.glowColor}80)` }}
                    />
                    
                    {/* Content */}
                    <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                      {/* Icon container */}
                      <div className="relative">
                        <div 
                          className="absolute inset-0 rounded-full blur-xl opacity-50 transition-all duration-300"
                          style={{ 
                            background: `radial-gradient(circle, ${l.glowColor}60 0%, transparent 70%)`,
                            transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                            opacity: isHovered ? 0.8 : 0.4
                          }}
                        />
                        <div 
                          className={`relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                          style={{ 
                            background: `linear-gradient(135deg, ${l.glowColor}20 0%, ${l.glowColor}05 100%)`,
                            border: `1px solid ${l.glowColor}40`
                          }}
                        >
                          <img 
                            src={l.icon} 
                            alt={l.title} 
                            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-all duration-300" 
                            loading="lazy"
                            style={{
                              filter: isHovered ? `drop-shadow(0 0 8px ${l.glowColor})` : 'none'
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="space-y-0.5">
                        <h3 
                          className="text-base sm:text-lg font-bold text-white tracking-wide"
                          style={{ 
                            textShadow: isHovered ? `0 0 20px ${l.glowColor}` : 'none'
                          }}
                        >
                          {l.title}
                        </h3>
                        <p className="text-xs text-white/60">{l.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Hover shimmer */}
                    <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"
                        style={{ animationDuration: '1.5s' }}
                      />
                    </div>
                  </div>
                </motion.a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
    {/* Portal for tooltips */}
    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {hoveredLobby && lobbyData[hoveredLobby as keyof typeof lobbyData] && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed pointer-events-auto"
            style={{
              zIndex: 99999,
              top: `${tooltipStyle.top}px`,
              left: `${tooltipStyle.left}px`,
              width: `${tooltipStyle.width}px`
            }}
            onMouseEnter={() => setHoveredLobby(hoveredLobby)}
            onMouseLeave={() => setHoveredLobby(null)}
          >
            {(() => {
              const l = lobbyData[hoveredLobby as keyof typeof lobbyData]
              return (
                <div 
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15,10,35,0.98) 0%, rgba(25,15,50,0.98) 100%)',
                    border: `2px solid ${l.glowColor}50`,
                    boxShadow: `0 25px 60px rgba(0,0,0,0.5), 0 0 40px ${l.glowColor}20`
                  }}
                >
                  {/* Top accent bar */}
                  <div 
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${l.glowColor}, ${l.glowColor}60)` }}
                  />
                  
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${l.glowColor}30 0%, ${l.glowColor}10 100%)`,
                          border: `1px solid ${l.glowColor}40`
                        }}
                      >
                        <img src={l.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{l.tooltip.title}</h4>
                        <p className="text-sm" style={{ color: l.glowColor }}>{l.tooltip.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {l.tooltip.features.map((feature: string, i: number) => (
                        <motion.div 
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: l.glowColor }}
                          />
                          <span className="text-white/80 text-xs font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      onClick={() =>
                        window.open(
                          `https://lobby.magiccraft.io/?crypto=${hoveredLobby}`,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                      className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
                      style={{ 
                        background: `linear-gradient(135deg, ${l.glowColor} 0%, ${l.glowColor}90 100%)`,
                        color: ['btc', 'bnb', 'mcrt'].includes(hoveredLobby) ? '#000' : '#fff'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join {l.title} Lobby →
                    </motion.button>
                  </div>
                  
                  {/* Arrow */}
                  <div 
                    className={`absolute top-full ${
                      tooltipStyle.arrow === 'right'
                        ? 'right-8'
                        : tooltipStyle.arrow === 'left'
                        ? 'left-8'
                        : 'left-1/2 -translate-x-1/2'
                    }`}
                  >
                    <div 
                      className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent"
                      style={{ borderTopColor: l.glowColor + '50' }}
                    />
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}
