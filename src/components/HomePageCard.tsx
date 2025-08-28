'use client'

import {
  FaXTwitter,
  FaDiscord,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaMedium,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import btc from '@/assets/icons/btclobby.svg'
import xrp from '@/assets/icons/xrplobby.svg'
import sol from '@/assets/icons/sollobby.svg'
import eth from '@/assets/icons/ethlobby.svg'

export default function MagicraftDownload() {
  const [hoveredLobby, setHoveredLobby] = useState<string | null>(null)

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
      name: 'Discord',
      icon: <FaDiscord className="text-white opacity-50" size={20} />,
      link: 'https://discord.gg/c4bgnsqzQR',
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
      title: 'BTC LOBBY',
      subtitle: 'Win Bitcoin by playing now!',
      icon: btc,
      glowColor: 'from-[#FFB649] via-[#e69a43]',
      tooltip: {
        title: 'Bitcoin Lobby',
        description: 'Join fast-paced PvP battles to win real Bitcoin! MagicCraft is like Roblox - you can build your own games using our game engine and integrate $MCRT tokens for earning opportunities.',
        features: [
          '• Real Bitcoin prizes for top players',
          '• Build games like Roblox with our engine',
          '• Integrate $MCRT tokens into your custom games',
          '• Earn $MCRT by creating popular games and winning battles',
          '• Lobbies are matchmaking rooms for instant PvP matches'
        ]
      }
    },
    eth: {
      title: 'ETH LOBBY',
      subtitle: 'Compete for Ethereum!',
      icon: eth,
      glowColor: 'from-[#bc7af6] via-[#ba8ae5]',
      tooltip: {
        title: 'Ethereum Lobby',
        description: 'Battle for Ethereum rewards in our competitive lobbies! Create your own games with our Roblox-like engine and earn $MCRT tokens through gameplay and game creation.',
        features: [
          '• Win Ethereum for dominating battles',
          '• Build custom games with our game engine',
          '• Integrate $MCRT rewards into your games',
          '• Earn $MCRT by creating popular games and winning battles',
          '• Lobbies connect players for instant PvP matches'
        ]
      }
    },
    xrp: {
      title: 'XRP LOBBY',
      subtitle: 'Win XRP in battles!',
      icon: xrp,
      glowColor: 'from-[#51C1F6] via-[#4AA7E6]',
      tooltip: {
        title: 'XRP Lobby',
        description: 'Fast and fluid matches with XRP rewards. Build experiences with our engine and integrate $MCRT payouts.',
        features: [
          '• Earn XRP by winning competitive matches',
          '• Create Roblox-style games with our engine',
          '• Integrate $MCRT and crypto rewards into maps',
          '• Build-to-earn: get paid when players enjoy your worlds',
          '• Instant matchmaking in crypto-enabled lobbies'
        ]
      }
    },
    sol: {
      title: 'SOL LOBBY',
      subtitle: 'Top up your Solana stash!',
      icon: sol,
      glowColor: 'from-[#7CF5C7] via-[#5BE0AF]',
      tooltip: {
        title: 'Solana Lobby',
        description: 'High-performance gameplay with SOL rewards on victory. Monetize your creations with $MCRT.',
        features: [
          '• Win SOL in fast-paced PvP matches',
          '• Build custom modes with our game maker',
          '• Plug $MCRT rewards into your games',
          '• Earn from popular maps and tournaments',
          '• Seamless lobbies for crypto battles'
        ]
      }
    }
  }

  return (
    <div className="mx-1 sm:mx-2 flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-2 lg:gap-2 lg:mx-8 xl:mx-16 2xl:mx-20 lg:mb-2">
      <div className="relative mx-auto w-full max-w-5xl lg:mx-0 lg:mt-[25px] lg:max-w-[800px]">
        <div className="rounded-2xl bg-gradient-to-b from-[#B591F2] to-transparent p-[1px] shadow-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            <div className="flex items-center justify-center">
              <div className="m-3 lg:m-6 flex items-center gap-[12px] lg:gap-[20px] overflow-x-auto">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className={`flex items-center flex-shrink-0 ${platform.name === 'Windows' ? 'hidden lg:flex' : ''}`}
                  >
                    {index > 0 && (
                      <div className="mx-[8px] lg:mx-[12px] h-[4em] lg:h-[6em] w-[1px] lg:w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent" />
                    )}
                    <a
                      href={platform.href}
                      className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105 min-w-[80px] lg:min-w-[100px] p-2 lg:p-3 rounded-xl bg-black/20 hover:bg-black/40 border border-transparent hover:border-[#B591F2]/30 hover:shadow-lg hover:shadow-[#B591F2]/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mb-2 lg:mb-3 h-5 w-5 lg:h-7 lg:w-7 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs lg:text-sm text-white/80 group-hover:text-white transition-colors duration-300 font-medium">{platform.label}</span>
                      <span className="text-xs lg:text-sm font-bold text-white group-hover:text-[#FFB649] transition-colors duration-300">
                        {platform.sublabel}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Removed decorative exclamation mark for a cleaner look */}
            <div className="mx-3 my-3 flex justify-center gap-3 lg:gap-5 rounded-xl border border-[#B591F2]/30 bg-gradient-to-r from-[#6D3190]/80 to-[#642588]/80 py-3 lg:mx-12 lg:px-4 backdrop-blur-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="transition-all duration-300 hover:scale-110 hover:opacity-100 p-2 rounded-lg hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="scale-75 lg:scale-100 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Lobby Cards - 2x2 Grid */}
      <div className="grid grid-cols-2 items-stretch gap-1 sm:gap-2 lg:gap-2 w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[26rem] xl:max-w-[28rem] mx-auto px-1 sm:px-2 lg:ml-4 z-10">
        {/* BTC Lobby Card */}
        <div className="relative group h-full min-w-0">
          <motion.div 
            className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="relative h-full w-full overflow-hidden rounded-[19px] bg-[#511569] p-1.5 sm:p-2 md:p-3 lg:p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFB649]/30 border border-transparent hover:border-[#FFB649]/20 min-h-[90px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]"
              onClick={() => window.open('https://lobby.magiccraft.io/?crypto=btc', '_blank')}
              onMouseEnter={() => setHoveredLobby('btc')}
              onMouseLeave={() => setHoveredLobby(null)}
            >
              <div className="flex flex-col items-center justify-center h-full text-center gap-2">
                <div className="relative flex-shrink-0">
                  <div className={`absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-t ${lobbyData.btc.glowColor} to-transparent blur-[12px] sm:blur-[14px] lg:blur-[16px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[18px]`}/>
                  <img src={lobbyData.btc.icon} alt="Bitcoin" className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-10 transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-serif transition-colors duration-300 group-hover:text-[#FFB649] leading-tight">{lobbyData.btc.title}</h3>
                                      <p className="text-xs sm:text-sm text-white/90 transition-colors duration-300 group-hover:text-white leading-tight px-1 sm:px-2">{lobbyData.btc.subtitle}</p>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-[19px] bg-gradient-to-r from-[#FFB649]/0 via-[#FFB649]/5 to-[#FFB649]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Enhanced Tooltip for BTC */}
          <AnimatePresence>
            {hoveredLobby === 'btc' && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 w-80"
              >
                <div className="relative bg-gradient-to-br from-[#1a0d2e]/95 to-[#2a0d4e]/95 border border-[#B591F2]/40 rounded-xl p-5 shadow-2xl backdrop-blur-md">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFB649]/10 via-transparent to-[#FFB649]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#FFB649] animate-pulse"></div>
                      <h4 className="text-[#FFB649] font-bold text-lg">{lobbyData.btc.tooltip.title}</h4>
                    </div>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">{lobbyData.btc.tooltip.description}</p>
                    <div className="space-y-2">
                      {lobbyData.btc.tooltip.features.map((feature, index) => (
                        <motion.p 
                          key={index} 
                          className="text-white/80 text-xs leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {feature}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-[#1a0d2e]/95"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ETH Lobby Card */}
        <div className="relative group h-full min-w-0">
          <motion.div 
            className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="relative h-full w-full overflow-hidden rounded-[19px] bg-[#511569] p-1.5 sm:p-2 md:p-3 lg:p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#bc7af6]/30 border border-transparent hover:border-[#bc7af6]/20 min-h-[90px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]"
              onClick={() => window.open('https://lobby.magiccraft.io/?crypto=eth', '_blank')}
              onMouseEnter={() => setHoveredLobby('eth')}
              onMouseLeave={() => setHoveredLobby(null)}
            >
              <div className="flex flex-col items-center justify-center h-full text-center gap-2">
                <div className="relative flex-shrink-0">
                  <div className={`absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-t ${lobbyData.eth.glowColor} to-transparent blur-[12px] sm:blur-[14px] lg:blur-[16px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[18px]`}/>
                  <img src={lobbyData.eth.icon} alt="Ethereum" className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-10 transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-serif transition-colors duration-300 group-hover:text-[#bc7af6] leading-tight">{lobbyData.eth.title}</h3>
                                      <p className="text-xs sm:text-sm text-white/90 transition-colors duration-300 group-hover:text-white leading-tight px-1 sm:px-2">{lobbyData.eth.subtitle}</p>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-[19px] bg-gradient-to-r from-[#bc7af6]/0 via-[#bc7af6]/5 to-[#bc7af6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Enhanced Tooltip for ETH */}
          <AnimatePresence>
            {hoveredLobby === 'eth' && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 w-80"
              >
                <div className="relative bg-gradient-to-br from-[#1a0d2e]/95 to-[#2a0d4e]/95 border border-[#B591F2]/40 rounded-xl p-5 shadow-2xl backdrop-blur-md">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#bc7af6]/10 via-transparent to-[#bc7af6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#bc7af6] animate-pulse"></div>
                      <h4 className="text-[#bc7af6] font-bold text-lg">{lobbyData.eth.tooltip.title}</h4>
                    </div>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">{lobbyData.eth.tooltip.description}</p>
                    <div className="space-y-2">
                      {lobbyData.eth.tooltip.features.map((feature, index) => (
                        <motion.p 
                          key={index} 
                          className="text-white/80 text-xs leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {feature}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-[#1a0d2e]/95"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      {/* XRP Lobby Card */}
      <div className="relative group h-full min-w-0">
        <motion.div 
          className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
                      <div 
              className="relative h-full w-full overflow-hidden rounded-[19px] bg-[#511569] p-1.5 sm:p-2 md:p-3 lg:p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#51C1F6]/30 border border-transparent hover:border-[#51C1F6]/20 min-h-[90px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]"
            onClick={() => window.open('https://lobby.magiccraft.io/?crypto=xrp', '_blank')}
            onMouseEnter={() => setHoveredLobby('xrp')}
            onMouseLeave={() => setHoveredLobby(null)}
          >
            <div className="flex flex-col items-center justify-center h-full text-center gap-2">
              <div className="relative flex-shrink-0">
                <div className={`absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-t ${lobbyData.xrp.glowColor} to-transparent blur-[12px] sm:blur-[14px] lg:blur-[16px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[18px]`}/>
                                  <img src={lobbyData.xrp.icon} alt="XRP" className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-10 transition-transform duration-300 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-serif transition-colors duration-300 group-hover:text-[#51C1F6] leading-tight">{lobbyData.xrp.title}</h3>
                <p className="text-xs sm:text-sm text-white/90 transition-colors duration-300 group-hover:text-white leading-tight px-2">{lobbyData.xrp.subtitle}</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-[19px] bg-gradient-to-r from-[#51C1F6]/0 via-[#51C1F6]/5 to-[#51C1F6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </motion.div>

        <AnimatePresence>
          {hoveredLobby === 'xrp' && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 w-80"
            >
              <div className="relative bg-gradient-to-br from-[#1a0d2e]/95 to-[#2a0d4e]/95 border border-[#B591F2]/40 rounded-xl p-5 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#51C1F6]/10 via-transparent to-[#51C1F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#51C1F6] animate-pulse"></div>
                    <h4 className="text-[#51C1F6] font-bold text-lg">{lobbyData.xrp.tooltip.title}</h4>
                  </div>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">{lobbyData.xrp.tooltip.description}</p>
                  <div className="space-y-2">
                    {lobbyData.xrp.tooltip.features.map((feature, index) => (
                      <motion.p 
                        key={index} 
                        className="text-white/80 text-xs leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.p>
                    ))}
                  </div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-[#1a0d2e]/95"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SOL Lobby Card */}
      <div className="relative group h-full min-w-0">
        <motion.div 
          className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
                      <div 
              className="relative h-full w-full overflow-hidden rounded-[19px] bg-[#511569] p-1.5 sm:p-2 md:p-3 lg:p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#7CF5C7]/30 border border-transparent hover:border-[#7CF5C7]/20 min-h-[90px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]"
            onClick={() => window.open('https://lobby.magiccraft.io/?crypto=sol', '_blank')}
            onMouseEnter={() => setHoveredLobby('sol')}
            onMouseLeave={() => setHoveredLobby(null)}
          >
            <div className="flex flex-col items-center justify-center h-full text-center gap-2">
              <div className="relative flex-shrink-0">
                <div className={`absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-t ${lobbyData.sol.glowColor} to-transparent blur-[12px] sm:blur-[14px] lg:blur-[16px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[18px]`}/>
                                  <img src={lobbyData.sol.icon} alt="Solana" className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-10 transition-transform duration-300 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-serif transition-colors duration-300 group-hover:text-[#7CF5C7] leading-tight">{lobbyData.sol.title}</h3>
                <p className="text-xs sm:text-sm text-white/90 transition-colors duration-300 group-hover:text-white leading-tight px-2">{lobbyData.sol.subtitle}</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-[19px] bg-gradient-to-r from-[#7CF5C7]/0 via-[#7CF5C7]/5 to-[#7CF5C7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </motion.div>

        <AnimatePresence>
          {hoveredLobby === 'sol' && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 w-80"
            >
              <div className="relative bg-gradient-to-br from-[#1a0d2e]/95 to-[#2a0d4e]/95 border border-[#B591F2]/40 rounded-xl p-5 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7CF5C7]/10 via-transparent to-[#7CF5C7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#7CF5C7] animate-pulse"></div>
                    <h4 className="text-[#7CF5C7] font-bold text-lg">{lobbyData.sol.tooltip.title}</h4>
                  </div>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">{lobbyData.sol.tooltip.description}</p>
                  <div className="space-y-2">
                    {lobbyData.sol.tooltip.features.map((feature, index) => (
                      <motion.p 
                        key={index} 
                        className="text-white/80 text-xs leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.p>
                    ))}
                  </div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-[#1a0d2e]/95"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* End Crypto Lobby Cards grid */}
      </div>
    </div>
  )
}
