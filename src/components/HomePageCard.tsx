// import { cn } from '@/lib/utils'
// import { useState } from 'react'
// import {
//     FaXTwitter,
//     FaDiscord,
//     FaTelegram,
//     FaReddit,
//     FaInstagram,
//     FaMedium,
//     FaLinkedin,
//     FaTiktok,
//     FaYoutube,
//     FaWindows,
//     FaSteam,
//     FaApple,
//   } from 'react-icons/fa6'
//   import { IoLogoAndroid } from "react-icons/io"
  
//   export default function DownloadSection() {
//     const platforms = [
//       {
//         name: 'Apple',
//         icon: <FaApple className="text-white" size={30} />,
//         href: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
//       },
//       {
//         name: 'Android',
//         icon: <IoLogoAndroid className="text-white" size={30}/>,
//         href: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en',
//       },
//       {
//         name: 'Windows',
//         icon: <FaWindows className="text-white" size={30}/>,
//         href: 'https://magiccraft.io/pc',
//       },
//       {
//         name: 'Steam',
//         icon: <FaSteam className="text-white" size={30} />,
//         href: 'https://store.steampowered.com/app/2395760/MagicCraft/',
//       },
//     ]
  
//     const socialLinks = [
//       {
//         name: 'Twitter',
//         icon: <FaXTwitter className="text-white" size={20} />,
//         link: 'https://twitter.com/MagicCraftGame',
//       },
//       {
//         name: 'Instagram',
//         icon: <FaInstagram className="text-white" size={20} />,
//         link: 'https://www.instagram.com/magiccraftgame/',
//       },
//       {
//         name: 'Telegram',
//         icon: <FaTelegram className="text-white" size={20} />,
//         link: 'https://t.me/magiccraftgamechat',
//       },
//       {
//         name: 'Discord',
//         icon: <FaDiscord className="text-white" size={20} />,
//         link: 'https://discord.gg/c4bgnsqzQR',
//       },
//       {
//         name: 'Medium',
//         icon: <FaMedium className="text-white" size={20} />,
//         link: 'https://medium.com/@MagicCraftGame',
//       },
//       {
//         name: 'Reddit',
//         icon: <FaReddit className="text-white" size={20} />,
//         link: 'https://www.reddit.com/r/magiccraftgame/',
//       },
//       {
//         name: 'LinkedIn',
//         icon: <FaLinkedin className="text-white" size={20} />,
//         link: 'https://www.linkedin.com/company/magiccraft',
//       },
//       {
//         name: 'TikTok',
//         icon: <FaTiktok className="text-white" size={20} />,
//         link: 'https://www.tiktok.com/@magiccraftgame',
//       },
//       {
//         name: 'YouTube',
//         icon: <FaYoutube className="text-white" size={20} />,
//         link: 'https://www.youtube.com/@MagicCraftGame',
//       },
//     ]
  
    // const promoCards = [
    //   {
        
    //     image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191090/magiccraft-card_dfthct.webp',
    //     href: 'https://lobby.magiccraft.io/',
    //   },
    //   {
    //     image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717679173/CARD_9_vqeywh.webp',
    //     href: 'https://magiccraft.io/blazynft',
    //   },
    //   {
       
    //     image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733576701/CARD_3_2_rneld1.webp',
    //     href: 'https://app.magiccraft.io/marketplace/explorer',
    //   },
    // ]
  
  //   return (
  //     <section className="w-full  py-6 md:py-0 ">
  //       <div className="container px-4 md:px-6">
  //         <div className="flex flex-col gap-6 lg:gap-8">
  //           {/* Download Section */}
  //           <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
  //             <div className="space-y-6">
  //               <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
  //                 <div>
  //                   <h2 className="text-xl font-bold font-serif text-white md:text-2xl">
  //                     Download New Build
  //                   </h2>
  //                   <p className="text-sm text-blue-400 mt-1">
  //                     (v4.31.9350)
  //                   </p>
  //                 </div>
  
  //                 {/* Platform Icons */}
  //                 <div className="flex flex-wrap gap-3">
  //                   {platforms.map((platform) => (
  //                     <a
  //                       key={platform.name}
  //                       href={platform.href}
  //                       className="group relative"
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                     >
  //                       <div className="rounded-xl bg-[#11113A] p-2.5 transition-transform hover:scale-105">
  //                         {platform.icon}
  //                       </div>
  //                     </a>
  //                   ))}
  //                 </div>
  //               </div>
  
  //               {/* Social Media Icons */}
  //               <div className="flex flex-wrap gap-4">
  //                 {socials.map((social) => (
  //                   <a
  //                     key={social.name}
  //                     href={social.link}
  //                     className="transition-transform hover:scale-110"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                   >
  //                     {social.icon}
  //                   </a>
  //                 ))}
  //               </div>
  //             </div>
  
  //             {/* Promo Cards */}
  //             <div className="flex gap-2 overflow-x-auto lg:-mt-4">
  //               {promoCards.map((card, index) => (
  //                 <a
  //                   key={index}
  //                   href={card.href}
                   
  //                 >
  //                   <img
  //                     src={card.image}
  //                     className="w-[200px] h-full object-cover transition-transform duration-300 group-hover:scale-105"
  //                   />
                    
  //                 </a>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }
  
  
  "use client"

// import { cn } from "@/lib/utils"
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
      name: "Windows",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_5_e3mxyx.svg",
      href: "https://magiccraft.io/pc",
      label: "Download",
      sublabel: "PC",
    },
    {
      name: "Apple",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_3_rgkyh6.svg",
      href: "https://apps.apple.com/us/app/magiccraft-pvp/id1638183525",
      label: "Get it on",
      sublabel: "App Store",
    },
    {
      name: "Steam",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733814933/Vector_4_bkzyqg.svg",
      href: "https://store.steampowered.com/app/2395760/MagicCraft/",
      label: "Get it on",
      sublabel: "Steam",
    },
    {
      name: "Android",
      icon: "https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp", 
      href: "https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en",
      label: "Get it on",
      sublabel: "Google Play",
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
    <div className="flex flex-row gap-2 items-center justify-center lg:mb-4">
      <div className="relative mx-auto lg:mx-0 w-full max-w-4xl lg:mt-[25px]">
        <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-[1px]">
          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
            {/* <h4 className="mx-[3em] py-2 text-center font-serif text-lg md:text-[1.375em]">
              <span className="text-[#FFB649]">PLAY</span> MAGICCRAFT NOW!
            </h4> */}

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-[20px] m-4 lg:m-1">
                {platforms.map((platform, index) => (
                  <div key={platform.name} className={`flex items-center ${platform.name === 'Windows' ? 'hidden lg:block' : ''}`}>
                    {window.innerWidth > 768 ? (index > 0 && (
                      <div className="h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent mx-[20px]" />
                    )) : (index > 1 && (
                      <div className="h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent mx-[20px]" />
                    ))}
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
              className="absolute -bottom-10 right-[25px] select-none bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]"
              style={{ right: "25px" }}
            >
              !
            </div>
          <div className="my-2 lg:mx-10 mx-2 flex justify-center gap-6 rounded-[10px] border-[1px] border-[#B591F2] border-solid bg-gradient-to-r from-[#6D3190] to-[#642588] py-2 ">
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

        {/* <div className="mt-4 flex justify-center gap-6 rounded-full bg-[#3D1B5C] py-4">
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
        </div> */}
      </div>

      <img
        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733753251/Group_307723_m3crb2.webp"
        alt="Meme Characters"
        className="mt-7 hidden h-[167px] w-[350px] lg:block"
      />

      <img
        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733753251/Group_306549_inz0yy.webp"
        alt="Updates"
        className="mt-6 hidden h-[165px] w-[350px] lg:block"
      />
    </div>
  )
}

