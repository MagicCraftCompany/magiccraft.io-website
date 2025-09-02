'use client'

import {
  FaXTwitter,
  FaTelegram,
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
// Use the real MCRT logo used elsewhere on the site
const mcrtIcon = 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp'


export default function MagicraftDownload() {
  const [hoveredLobby, setHoveredLobby] = useState<string | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<{ top: number; left: number; transform: string }>({ top: 0, left: 0, transform: 'translateX(-50%)' })
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  
  useEffect(() => {
    function updatePosition() {
      if (hoveredLobby && cardRefs.current[hoveredLobby]) {
        const rect = cardRefs.current[hoveredLobby]?.getBoundingClientRect()
        if (rect) {
          const padding = 16
          const viewportWidth = window.innerWidth
          const tooltipWidth = Math.min(viewportWidth * 0.92, viewportWidth >= 768 ? 448 : 384)
          const preferredHeight = 340
          let top = rect.top - preferredHeight
          if (top < padding) top = rect.bottom + padding
          const centeredLeft = rect.left + rect.width / 2
          const maxLeft = viewportWidth - tooltipWidth / 2 - padding
          const minLeft = tooltipWidth / 2 + padding
          let left = centeredLeft
          let transform = 'translateX(-50%)'
          if (centeredLeft + tooltipWidth / 2 > viewportWidth - padding) {
            left = rect.right - 2
            transform = 'translateX(-100%)'
          } else if (centeredLeft - tooltipWidth / 2 < padding) {
            left = rect.left + 2
            transform = 'translateX(0)'
          } else {
            left = Math.max(minLeft, Math.min(maxLeft, centeredLeft))
          }
          setTooltipStyle({ top, left, transform })
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
      href: 'https://drive.google.com/file/d/1r9fnfAXdjMsFuMVXEjjTVNMUMjNx1Elp/view?usp=sharing',
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
      name: 'Telegram',
      icon: <FaTelegram className="text-white opacity-50" size={20} />,
      link: 'https://t.me/magiccraftgamechat',
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
      title: '$BTC LOBBY',
      subtitle: 'Bitcoin',
      glowColor: '#FFB649',
      tooltip: {
        title: 'Bitcoin Lobby',
        description: 'Join the Bitcoin community in MagicCraft! Create your own Roblox-style games using our game engine and integrate $BTC for earning opportunities.',
        features: [
          '• Build custom games with our game engine',
          '• Integrate $BTC for in-game rewards',
          '• Earn while you play and create',
          '• Join the Bitcoin gaming community'
        ]
      }
    },
    bnb: {
      icon: bnb,
      title: '$BNB LOBBY',
      subtitle: 'Binance Coin',
      glowColor: '#F3BA2F',
      tooltip: {
        title: 'Binance Coin Lobby',
        description: 'Enter the BNB ecosystem! Design your own games with our engine and use $BNB for transactions and rewards.',
        features: [
          '• Create games with BNB integration',
          '• Fast and low-cost transactions',
          '• Earn $BNB through gameplay',
          '• Access to Binance ecosystem'
        ]
      }
    },
    mcrt: {
      icon: mcrtIcon,
      title: '$MCRT LOBBY',
      subtitle: 'MagicCraft Token',
      glowColor: '#98FFF9',
      tooltip: {
        title: 'MagicCraft Token Lobby',
        description: 'The heart of MagicCraft! Use $MCRT to build games, earn rewards, and participate in the ecosystem.',
        features: [
          '• Native token for game creation',
          '• Earn $MCRT through gameplay',
          '• Access exclusive features',
          '• Governance and staking rewards'
        ]
      }
    },
    eth: {
      icon: eth,
      title: '$ETH LOBBY',
      subtitle: 'Ethereum',
      glowColor: '#bc7af6',
      tooltip: {
        title: 'Ethereum Lobby',
        description: 'Build on Ethereum! Create decentralized games with smart contracts and earn $ETH rewards.',
        features: [
          '• DeFi gaming integration',
          '• Smart contract rewards',
          '• NFT marketplace access',
          '• Ethereum ecosystem benefits'
        ]
      }
    },
    xrp: {
      icon: xrp,
      title: '$XRP LOBBY',
      subtitle: 'Ripple',
      glowColor: '#51C1F6',
      tooltip: {
        title: 'Ripple Lobby',
        description: 'Fast and efficient gaming! Use $XRP for instant transactions and cross-border gaming experiences.',
        features: [
          '• Instant transaction processing',
          '• Cross-border gaming support',
          '• Low transaction fees',
          '• Ripple network benefits'
        ]
      }
    },
    sol: {
      icon: sol,
      title: '$SOL LOBBY',
      subtitle: 'Solana',
      glowColor: '#7CF5C7',
      tooltip: {
        title: 'Solana Lobby',
        description: 'High-performance gaming! Build games on Solana with fast transactions and low fees.',
        features: [
          '• High-speed transactions',
          '• Low-cost gaming fees',
          '• Scalable game development',
          '• Solana ecosystem integration'
        ]
      }
    }
  }

  return (
    <>
    <div className="mx-1 sm:mx-2 flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-6 lg:mx-8 xl:mx-16 2xl:mx-20 lg:mb-2 -mt-2 sm:-mt-3 relative z-50 overflow-visible">
      {/* Platform Download Box */}
      <div className="relative mx-auto w-full lg:w-auto lg:flex-shrink-0 lg:mx-0 lg:mt-[25px]">
        <div className="rounded-2xl bg-gradient-to-b from-[#B591F2] to-transparent p-[1px] shadow-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            {/* Platform Download Buttons */}
            <div className="p-4 lg:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 lg:gap-4 w-full max-w-sm mx-auto lg:max-w-none">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    className={`group flex flex-col items-center text-center transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] p-3 lg:p-4 rounded-xl bg-black/20 hover:bg-black/40 border border-transparent hover:border-[#B591F2]/30 hover:shadow-lg hover:shadow-[#B591F2]/20 ${platform.name === 'Windows' ? 'hidden' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${platform.label} ${platform.sublabel}`}
                  >
                    <div className="mb-2 h-6 w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                      <img
                        src={platform.icon}
                        alt={platform.name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs text-white/80 group-hover:text-white transition-colors duration-300 font-medium">{platform.label}</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#FFB649] transition-colors duration-300">
                      {platform.sublabel}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mx-4 mb-4 flex justify-center gap-2 lg:gap-3 rounded-xl border border-[#B591F2]/30 bg-gradient-to-r from-[#6D3190]/80 to-[#642588]/80 py-2 lg:py-3 backdrop-blur-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="transition-all duration-300 hover:scale-110 hover:opacity-100 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] p-2 rounded-lg hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <div className="scale-75 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Lobby Cards - responsive grid, dynamic from data */}
      <div className="w-full lg:flex-1 lg:ml-6 relative overflow-visible" style={{ zIndex: 100 }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6 w-full max-w-5xl lg:max-w-none mx-auto px-2 sm:px-3 overflow-visible">
          {(['btc','bnb','mcrt','eth','xrp','sol'] as const).map((key) => {
            const l = lobbyData[key]
            const colorClass =
              key === 'btc' ? '#FFB649' :
              key === 'bnb' ? '#F3BA2F' :
              key === 'mcrt' ? '#98FFF9' :
              key === 'eth' ? '#bc7af6' :
              key === 'xrp' ? '#51C1F6' : '#7CF5C7'
            const url = `https://lobby.magiccraft.io/?crypto=${key}`
            return (
              <div 
                key={key} 
                ref={(el) => { cardRefs.current[key] = el }}
                className="relative group h-full min-w-0 overflow-visible"
                style={{ zIndex: hoveredLobby === key ? 9999 : 'auto' }}
                onMouseEnter={() => setHoveredLobby(key)}
                onMouseLeave={() => setHoveredLobby(null)}
              >
                <motion.div 
                  className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px] shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:from-[#98FFF9] group-hover:to-[#B591F2]" 
                  whileHover={{ scale: 1.05, y: -4 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ 
                    boxShadow: hoveredLobby === key 
                      ? `0 20px 40px ${l.glowColor}40, 0 0 60px ${l.glowColor}30, inset 0 0 20px ${l.glowColor}10`
                      : `0 8px 25px rgba(0,0,0,0.3), 0 0 0 1px ${l.glowColor}20`
                  }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-[19px] bg-gradient-to-br from-[#511569] to-[#3d1052] p-3 sm:p-4 md:p-5 cursor-pointer transition-all duration-500 min-h-[clamp(110px,14vw,160px)] border border-white/10 hover:border-white/30 group-hover:from-[#6a1a7a] group-hover:to-[#4e1563]"
                    onClick={() => window.open(url, '_blank')}
                    style={{
                      background: hoveredLobby === key 
                        ? `linear-gradient(135deg, #6a1a7a 0%, #4e1563 100%), radial-gradient(circle at 30% 30%, ${l.glowColor}25 0%, transparent 60%)`
                        : `linear-gradient(135deg, #511569 0%, #3d1052 100%), radial-gradient(circle at 30% 30%, ${l.glowColor}15 0%, transparent 50%)`
                    }}
                  >
                    {/* Animated shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full text-center gap-2 md:gap-3">
                      <div className="relative flex-shrink-0 flex items-center justify-center">
                        {/* Enhanced glow effect */}
                        <div 
                          className="absolute inset-0 rounded-full blur-lg opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl group-hover:animate-pulse"
                          style={{ 
                            background: hoveredLobby === key 
                              ? `radial-gradient(circle, ${l.glowColor}60 0%, ${l.glowColor}40 30%, ${l.glowColor}20 60%, transparent 80%)`
                              : `radial-gradient(circle, ${l.glowColor}40 0%, ${l.glowColor}20 50%, transparent 70%)`,
                            width: hoveredLobby === key ? '80px' : '60px',
                            height: hoveredLobby === key ? '80px' : '60px',
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: '50%'
                          }}
                        />
                        {/* Standardized logo container */}
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:border-white/50 group-hover:scale-125 group-hover:shadow-2xl group-hover:rotate-6"
                             style={{ 
                               boxShadow: hoveredLobby === key 
                                 ? `0 8px 30px ${l.glowColor}50, inset 0 0 20px ${l.glowColor}20`
                                 : `0 4px 20px ${l.glowColor}30`
                             }}>
                          <img 
                            decoding="async"
                            loading="lazy"
                            src={l.icon} 
                            alt={l.title} 
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain transition-all duration-500 group-hover:brightness-125 group-hover:scale-110" 
                            style={{
                              filter: hoveredLobby === key 
                                ? `drop-shadow(0 4px 12px ${l.glowColor}70) brightness(1.2)`
                                : `drop-shadow(0 2px 8px ${l.glowColor}50)`
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1 transition-all duration-500 group-hover:scale-105">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-white font-serif transition-all duration-500 leading-tight group-hover:text-white group-hover:scale-110"
                            style={{ 
                              textShadow: hoveredLobby === key 
                                ? `0 0 15px ${l.glowColor}80, 0 0 25px ${l.glowColor}50`
                                : `0 0 10px ${l.glowColor}50`
                            }}>{l.title}</h3>
                        <p className="text-xs text-white/80 transition-all duration-500 group-hover:text-white group-hover:scale-105 leading-tight px-1">{l.subtitle}</p>
                      </div>
                    </div>
                    {/* Hover overlay effect */}
                    <div 
                      className="absolute inset-0 rounded-[19px] transition-opacity duration-500"
                      style={{ 
                        background: `linear-gradient(90deg, ${colorClass}00, ${colorClass}33, ${colorClass}00)`,
                        opacity: hoveredLobby === key ? 0.4 : 0
                      }} 
                    />
                  </div>
                </motion.div>
                {/* Tooltip is rendered via a portal at the document root to avoid clipping */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
    {/* Portal for tooltips to avoid clipping */}
    {typeof document !== 'undefined' && createPortal(
      <AnimatePresence>
        {hoveredLobby && lobbyData[hoveredLobby as keyof typeof lobbyData] && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed w-96 md:w-[28rem] max-w-[92vw] pointer-events-auto"
            style={{
              zIndex: 99999,
              top: `${tooltipStyle.top}px`,
              left: `${tooltipStyle.left}px`,
              transform: tooltipStyle.transform
            }}
            onMouseEnter={() => setHoveredLobby(hoveredLobby)}
            onMouseLeave={() => setHoveredLobby(null)}
          >
            <div className="relative bg-gradient-to-br from-[#0B0F39] to-[#1a0d2e] border-2 border-[#98FFF9]/60 rounded-2xl p-6 shadow-2xl">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#98FFF9]/10 to-[#B591F2]/10 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: lobbyData[hoveredLobby as keyof typeof lobbyData].glowColor }}
                  ></div>
                  <h4 className="text-white font-bold text-xl" style={{ textShadow: `0 0 10px ${lobbyData[hoveredLobby as keyof typeof lobbyData].glowColor}50` }}>
                    {lobbyData[hoveredLobby as keyof typeof lobbyData].tooltip.title}
                  </h4>
                </div>
                
                <p className="text-white/95 text-base md:text-[17px] mb-5 leading-relaxed font-medium">
                  {lobbyData[hoveredLobby as keyof typeof lobbyData].tooltip.description}
                </p>
                
                <div className="space-y-3">
                  <h5 className="text-white/80 text-sm font-bold uppercase tracking-wider mb-2">Features:</h5>
                  {lobbyData[hoveredLobby as keyof typeof lobbyData].tooltip.features.map((feature: string, i: number) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-2" 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ delay: i * 0.1 }}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: lobbyData[hoveredLobby as keyof typeof lobbyData].glowColor }}
                      ></div>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                        {feature.replace('• ', '')}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2">
                <div 
                  className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent"
                  style={{ borderTopColor: '#98FFF9' }}
                ></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}
