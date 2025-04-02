"use client"

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
} from "react-icons/fa6"

export default function MagicraftDownload() {
  const platforms = [
    {
      name: "Apple",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_3_rgkyh6.svg",
      href: "https://apps.apple.com/us/app/magiccraft-pvp/id1638183525",
      label: "Get it on",
      sublabel: "App Store",
    },
    {
      name: "Android",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp", 
      href: "https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en",
      label: "Get it on",
      sublabel: "Google Play",
    },
    {
      name: "Steam",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_4_bkzyqg.svg",
      href: "https://store.steampowered.com/app/2395760/MagicCraft/",
      label: "Get it on",
      sublabel: "Steam",
    },
    {
      name: "Hyperplay",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733430191/HyperPlayCustomBadge_ao6ida.webp",
      href: "https://store.hyperplay.xyz/game/magiccraft",
      label: "Get it on",
      sublabel: "Hyperplay",
    },
    {
      name: "Windows",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_5_e3mxyx.svg",
      href: "https://drive.google.com/file/d/1GGXs8uWcS_YRTkt7syyAlclVI1soZYSa/view",
      label: "Download",
      sublabel: "PC",
    },
   
  
    
  ]

  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaXTwitter className="text-white opacity-50" size={20} />,
      link: "https://twitter.com/MagicCraftGame",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="text-white opacity-50" size={20} />,
      link: "https://discord.gg/c4bgnsqzQR",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="text-white opacity-50" size={20} />,
      link: "https://t.me/magiccraftgamechat",
    },
    {
      name: "Reddit",
      icon: <FaReddit className="text-white opacity-50" size={20} />,
      link: "https://www.reddit.com/r/magiccraftgame/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-white opacity-50" size={20} />,
      link: "https://www.instagram.com/magiccraftgame/",
    },
    {
      name: "Medium",
      icon: <FaMedium className="text-white opacity-50" size={20} />,
      link: "https://medium.com/@MagicCraftGame",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-white opacity-50" size={20} />,
      link: "https://www.linkedin.com/company/magiccraft",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-white opacity-50" size={20} />,
      link: "https://www.tiktok.com/@magiccraftgame",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-white opacity-50" size={20} />,
      link: "https://www.youtube.com/@MagicCraftGame",
    },
  ]

  return (
    <div className="flex flex-row gap-2 items-center justify-center lg:mb-4  mx-2">
      <div className="relative mx-auto lg:mx-0 w-full max-w-4xl lg:mt-[25px] lg:max-w-[700px]">
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[1px] ">
          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            {/* <h4 className="mx-[3em] py-2 text-center font-serif text-lg md:text-[1.375em]">
              <span className="text-[#FFB649]">PLAY</span> MAGICCRAFT NOW!
            </h4> */}

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-[20px] m-4 lg:m-1">
                {platforms.map((platform, index) => (
                  <div key={platform.name} className={`flex items-center ${platform.name === 'Windows' ? 'hidden lg:flex' : ''}`}>
                    {index > 0 && (
                      <div className="h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent lg:mx-[20px] mx-[10px]" />
                    )}
                    <a
                      href={platform.href}
                      className="group flex flex-col items-center text-center transition-colors hover:text-[#FFB649]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="m-4 h-6 w-6">
                        <img src={platform.icon} alt={platform.name} className="w-full h-full" />
                        </div>
                      <span className="text-sm">{platform.label}</span>
                      <span className="text-sm font-bold md:text-lg">
                        {platform.sublabel}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="absolute -bottom-10 right-[25px] select-none bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px] hidden lg:block"
              style={{ right: "25px" }}
            >
              !
            </div>
          <div className="my-2 lg:mx-10 lg:px-2 mx-2 flex justify-center gap-4 lg:gap-6 rounded-[10px] border-[1px] border-[#B591F2] border-solid bg-gradient-to-r from-[#6D3190] to-[#642588] py-2 ">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
          </div>
        </div>

       
      </div>

      <img
        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733753251/Group_307723_m3crb2.webp"
        alt="Meme Characters"
        className="mt-6 hidden h-[165px] w-[290px] lg:block cursor-pointer transition-transform hover:scale-105"
        onClick={() => {
          const element = document.getElementById("gameplay");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <a
        href="/news"
        className="mt-6 hidden lg:block w-fit"
      >
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733753251/Group_306549_inz0yy.webp"
          alt="Updates"
          className="h-[165px] w-[320px] transition-transform hover:scale-105"
        />
      </a>
    </div>
  )
}

