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
import bnb from '@/assets/icons/bnblobby.svg'
// Use the real MCRT logo used elsewhere on the site
const mcrtIcon = 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp'

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
    <div className="mx-1 sm:mx-2 flex flex-col lg:flex-row items-start justify-center gap-2 lg:gap-4 lg:mx-8 xl:mx-16 2xl:mx-20 lg:mb-2 -mt-2 sm:-mt-3">
      <div className="relative mx-auto w-full lg:flex-1 lg:mx-0 lg:mt-[25px] lg:max-w-none">
        <div className="rounded-2xl bg-gradient-to-b from-[#B591F2] to-transparent p-[1px] shadow-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            <div className="flex items-center justify-center">
              <div className="m-2 sm:m-3 lg:m-6 flex items-center gap-[12px] lg:gap-[20px] overflow-x-auto">
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
                      className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] min-w-[80px] lg:min-w-[100px] p-2 lg:p-3 rounded-xl bg-black/20 hover:bg-black/40 border border-transparent hover:border-[#B591F2]/30 hover:shadow-lg hover:shadow-[#B591F2]/20"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${platform.label} ${platform.sublabel}`}
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
                  className="transition-all duration-300 hover:scale-110 hover:opacity-100 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] p-2 rounded-lg hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
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

      {/* Crypto Lobby Cards - responsive grid, dynamic from data */}
      <div className="w-full lg:flex-1 lg:ml-6 z-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 md:gap-4 w-full max-w-screen-lg mx-auto px-1 sm:px-2">
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
              <div key={key} className="relative group h-full min-w-0">
                <motion.div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <div
                    className={`relative h-full w-full overflow-hidden rounded-[19px] bg-[#511569] p-1.5 sm:p-2 md:p-3 lg:p-4 cursor-pointer transition-all duration-300 min-h-[100px] md:min-h-[120px] lg:min-h-[140px]`}
                    onClick={() => window.open(url, '_blank')}
                    onMouseEnter={() => setHoveredLobby(key)}
                    onMouseLeave={() => setHoveredLobby(null)}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center gap-2">
                      <div className="relative flex-shrink-0">
                        <div className={`absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-t ${l.glowColor} to-transparent blur-[12px] sm:blur-[14px] lg:blur-[16px] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:blur-[18px]`} />
                        <img src={l.icon} alt={l.title} className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 z-10 transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                      </div>
                      <div className="space-y-1">
                        <h3 className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-serif transition-colors duration-300 leading-tight`}>{l.title}</h3>
                        <p className="text-xs sm:text-sm text-white/90 transition-colors duration-300 group-hover:text-white leading-tight px-1 sm:px-2">{l.subtitle}</p>
                      </div>
                    </div>
                    <div className={`absolute inset-0 rounded-[19px]`} style={{ background: `linear-gradient(90deg, ${colorClass}00, ${colorClass}22, ${colorClass}00)` , opacity: 0 }} />
                  </div>
                </motion.div>
                <AnimatePresence>
                  {hoveredLobby === key && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-80">
                      <div className="relative bg-gradient-to-br from-[#1a0d2e]/95 to-[#2a0d4e]/95 border border-[#B591F2]/40 rounded-xl p-5 shadow-2xl backdrop-blur-md">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-white/70 animate-pulse"></div>
                            <h4 className="text-white font-bold text-lg">{l.tooltip.title}</h4>
                          </div>
                          <p className="text-white/90 text-sm mb-4 leading-relaxed">{l.tooltip.description}</p>
                          <div className="space-y-2">
                            {l.tooltip.features.map((feature, i) => (
                              <motion.p key={i} className="text-white/80 text-xs leading-relaxed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                                {feature}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-[#1a0d2e]/95"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
