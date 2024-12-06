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
    FaWindows,
    FaSteam,
    FaApple,
  } from 'react-icons/fa6'
  import { IoLogoAndroid } from "react-icons/io"
  
  export default function DownloadSection() {
    const platforms = [
      {
        name: 'Apple',
        icon: <FaApple className="text-white" size={30} />,
        href: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
      },
      {
        name: 'Android',
        icon: <IoLogoAndroid className="text-white" size={30}/>,
        href: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en',
      },
      {
        name: 'Windows',
        icon: <FaWindows className="text-white" size={30}/>,
        href: 'https://magiccraft.io/pc',
      },
      {
        name: 'Steam',
        icon: <FaSteam className="text-white" size={30} />,
        href: 'https://store.steampowered.com/app/2395760/MagicCraft/',
      },
    ]
  
    const socials = [
      {
        name: 'Twitter',
        icon: <FaXTwitter className="text-white" size={20} />,
        link: 'https://twitter.com/MagicCraftGame',
      },
      {
        name: 'Instagram',
        icon: <FaInstagram className="text-white" size={20} />,
        link: 'https://www.instagram.com/magiccraftgame/',
      },
      {
        name: 'Telegram',
        icon: <FaTelegram className="text-white" size={20} />,
        link: 'https://t.me/magiccraftgamechat',
      },
      {
        name: 'Discord',
        icon: <FaDiscord className="text-white" size={20} />,
        link: 'https://discord.gg/c4bgnsqzQR',
      },
      {
        name: 'Medium',
        icon: <FaMedium className="text-white" size={20} />,
        link: 'https://medium.com/@MagicCraftGame',
      },
      {
        name: 'Reddit',
        icon: <FaReddit className="text-white" size={20} />,
        link: 'https://www.reddit.com/r/magiccraftgame/',
      },
      {
        name: 'LinkedIn',
        icon: <FaLinkedin className="text-white" size={20} />,
        link: 'https://www.linkedin.com/company/magiccraft',
      },
      {
        name: 'TikTok',
        icon: <FaTiktok className="text-white" size={20} />,
        link: 'https://www.tiktok.com/@magiccraftgame',
      },
      {
        name: 'YouTube',
        icon: <FaYoutube className="text-white" size={20} />,
        link: 'https://www.youtube.com/@MagicCraftGame',
      },
    ]
  
    const promoCards = [
      {
        
        image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191090/magiccraft-card_dfthct.webp',
        href: 'https://lobby.magiccraft.io/',
      },
      {
        image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717679173/CARD_9_vqeywh.webp',
        href: 'https://magiccraft.io/blazynft',
      },
      {
       
        image: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733468189/CARD_3_1_ugj7j9.webp',
        href: 'https://app.magiccraft.io/marketplace/explorer',
      },
    ]
  
    return (
      <section className="w-full  py-6 md:py-12 lg:py-20 -mt-10 md:-mt-0">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Download Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <div>
                    <h2 className="text-xl font-bold font-serif text-white md:text-2xl">
                      Download New Build
                    </h2>
                    <p className="text-sm text-blue-400 mt-1">
                      (v4.31.9350)
                    </p>
                  </div>
  
                  {/* Platform Icons */}
                  <div className="flex flex-wrap gap-3">
                    {platforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.href}
                        className="group relative"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="rounded-xl bg-[#11113A] p-2.5 transition-transform hover:scale-105">
                          {platform.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
  
                {/* Social Media Icons */}
                <div className="flex flex-wrap gap-4">
                  {socials.map((social) => (
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
  
              {/* Promo Cards */}
              <div className="flex gap-2 overflow-x-auto lg:-mt-4">
                {promoCards.map((card, index) => (
                  <a
                    key={index}
                    href={card.href}
                   
                  >
                    <img
                      src={card.image}
                      className="w-[200px] h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  