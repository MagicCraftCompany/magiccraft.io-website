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

import btc from '@/assets/icons/btclobby.svg'
import xrp from '@/assets/icons/xrplobby.svg'
import sol from '@/assets/icons/sollobby.svg'
import eth from '@/assets/icons/ethlobby.svg'

export default function MagicraftDownload() {
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
      href: 'https://drive.google.com/file/d/1Zo29E6kVhT47Z96O1_TS02tWnVeuHD9Z/view?usp=sharing',
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

  return (
    <div className="mx-2 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2 lg:mx-10 xl:mx-20 lg:mb-4 ">
      <div className="relative mx-auto w-full max-w-4xl lg:mx-0 lg:mt-[25px] lg:max-w-[700px]">
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[1px] ">
          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            {/* <h4 className="mx-[3em] py-2 text-center font-serif text-lg md:text-[1.375em]">
              <span className="text-[#FFB649]">PLAY</span> MAGICCRAFT NOW!
            </h4> */}

            <div className="flex items-center justify-center">
              <div className="m-2 lg:m-4 flex items-center gap-[10px] lg:gap-[20px] overflow-x-auto">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className={`flex items-center flex-shrink-0 ${platform.name === 'Windows' ? 'hidden lg:flex' : ''}`}
                  >
                    {index > 0 && (
                      <div className="mx-[5px] lg:mx-[10px] h-[3em] lg:h-[5em] w-[1px] lg:w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent" />
                    )}
                    <a
                      href={platform.href}
                      className="group flex flex-col items-center text-center transition-colors hover:text-[#FFB649] min-w-[60px] lg:min-w-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="m-2 lg:m-4 h-4 w-4 lg:h-6 lg:w-6">
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="h-full w-full"
                        />
                      </div>
                      <span className="text-xs lg:text-sm">{platform.label}</span>
                      <span className="text-xs  font-bold lg:text-lg">
                        {platform.sublabel}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="absolute -bottom-10 right-[25px] hidden select-none pointer-events-none bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px] lg:block"
              style={{ right: '25px' }}
            >
              !
            </div>
            <div className="mx-2 my-2 flex justify-center gap-2 lg:gap-4 rounded-[10px] border-[1px] border-solid border-[#B591F2] bg-gradient-to-r from-[#6D3190] to-[#642588] py-2 lg:mx-10 lg:px-2 ">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="scale-75 lg:scale-100">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Lobby Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-4 lg:mt-6 w-full max-w-[90vw] sm:max-w-[40rem] mx-auto px-2 sm:px-0">
        {/* BTC Lobby Card */}
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]">
        <div className="relative overflow-hidden rounded-[19px]  bg-[#511569]  p-1 sm:p-2 lg:p-1 cursor-pointer hover:scale-105 transition-transform"
               onClick={() => window.open('https://lobby.magiccraft.io/?crypto=btc', '_blank')}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 ">
              <div className="relative flex-shrink-0">
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-t from-[#FFB649] via-[#e69a43] to-transparent blur-[14px] sm:blur-[16px] lg:blur-[18px] opacity-80"/>
                <img src={btc} alt="Bitcoin" className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-24 lg:h-24 z-10 lg:-mt-[10px] lg:-mb-[10px] " />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-serif mb-1">BTC LOBBY</h3>
                <p className="text-xs sm:text-sm text-white/90">Win Bitcoin by playing now!</p>
              </div>
            </div>
          </div>
        </div>

        {/* XRP Lobby Card */}
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px] hidden lg:block">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#511569] p-1 sm:p-2 lg:p-1 cursor-pointer hover:scale-105 transition-transform border border-white/20 shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
               onClick={() => window.open('https://lobby.magiccraft.io/?crypto=xrp', '_blank')}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 ">
              <div className="relative">
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-t from-[#00D4FF]/20 via-[#0EA5E9] to-transparent blur-[14px] sm:blur-[16px] lg:blur-[18px] opacity-80"/>
                <img src={xrp} alt="XRP" className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-24 lg:h-24 z-10 lg:-mt-[10px] lg:-mb-[10px]" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white font-serif">XRP LOBBY</h3>
                <p className="text-xs sm:text-sm text-white hidden sm:block">Win XRP in battles!</p>
              </div>
            </div>
          </div>
        </div>

        {/* SOL Lobby Card */}
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px] hidden lg:block">
          <div className="relative overflow-hidden rounded-[19px]  bg-[#511569]  p-1 sm:p-2 lg:p-1 cursor-pointer hover:scale-105 transition-transform"
               onClick={() => window.open('https://lobby.magiccraft.io/?crypto=sol', '_blank')}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 ">
              <div className="relative">
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-t from-[#00FFFF]/20 via-[#14B8A6] to-transparent blur-[14px] sm:blur-[16px] lg:blur-[18px] opacity-80"/>
                <img src={sol} alt="Solana" className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-24 lg:h-24 z-10 lg:-mt-[10px] lg:-mb-[10px]" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white font-serif">SOL LOBBY</h3>
                <p className="text-xs sm:text-sm text-white hidden sm:block">Top up your Solana stash!</p>
              </div>
            </div>
          </div>
        </div>

        {/* ETH Lobby Card */}
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[2px]">
                     <div className="relative overflow-hidden rounded-[19px]  bg-[#511569]  p-1 sm:p-2 lg:p-1 cursor-pointer hover:scale-105 transition-transform"
               onClick={() => window.open('https://lobby.magiccraft.io/?crypto=eth', '_blank')}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 ">
              <div className="relative flex-shrink-0">
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-t from-[#bc7af6] via-[#ba8ae5] to-transparent blur-[14px] sm:blur-[16px] lg:blur-[18px] opacity-80"/>
                <img src={eth} alt="Ethereum" className="relative w-10 h-10 sm:w-14 sm:h-14 lg:w-24 lg:h-24 z-10 lg:-mt-[10px] lg:-mb-[10px]" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-serif mb-1">ETH LOBBY</h3>
                <p className="text-sm sm:text-base text-white/90 truncate">Compete for Ethereum!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
