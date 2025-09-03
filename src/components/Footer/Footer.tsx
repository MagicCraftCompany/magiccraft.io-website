import magiccraftLogo from '@/assets/images/magiccraft-logo.webp'
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
import { useNavigate } from 'react-router-dom' // Import useNavigate

const socialLinks = [
  {
    icon: <FaXTwitter size={20} />,
    link: 'https://twitter.com/MagicCraftGame',
  },
  {
    icon: <FaTelegram size={20} />,
    link: 'https://t.me/magiccraftgamechat',
  },
  {
    icon: <FaDiscord size={20} />,
    link: 'https://discord.gg/magiccraftgame',
  },
  {
    icon: <FaReddit size={20} />,
    link: 'https://www.reddit.com/r/magiccraftgame/',
  },
  {
    icon: <FaInstagram size={20} />,
    link: 'https://www.instagram.com/magiccraftgame/',
  },
  {
    icon: <FaMedium size={20} />,
    link: 'https://medium.com/@MagicCraftGame',
  },
  {
    icon: <FaLinkedin size={20} />,
    link: 'https://www.linkedin.com/company/magiccraft',
  },
  {
    icon: <FaTiktok size={20} />,
    link: 'https://www.tiktok.com/@magiccraftgame',
  },
  {
    icon: <FaYoutube size={20} />,
    link: 'https://www.youtube.com/@MagicCraftGame',
  },
]

const tokenLinks = [
  {
    title: 'Pledging',
    link: 'https://app.magiccraft.io/pledging',
  },
  {
    title: 'Marketplace',
    link: 'https://app.magiccraft.io/marketplace/explorer',
  },
  {
    title: 'Become a partner',
    link: 'mailto:mateusz@magiccraft.io',
  },
  {
    title: 'Roadmap',
    link: '/#roadmap',
  },
  {
    title: 'Team',
    link: '/#team',
  },
];

const moreLinks = [
  {
    title: 'FAQ',
    link: '/faq',
  },
  {
    title: 'Verify',
    link: 'https://app.magiccraft.io/verify',
  },
  {
    title: '$MCRT',
    link: '/magiccraft',
  },
  {
    title: 'Whitepaper',
    link: 'https://docs.magiccraft.io/',
  },
]

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="text-primary relative z-10 py-12 md:py-16 bg-gradient-to-b from-[#020418] via-[#0A0424] to-[#03082f] border-t border-white/5">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col-reverse justify-between gap-10 md:gap-12 lg:flex-row">
        {/* Left Section - Logo & Info */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="mb-6">
            <img
              src={magiccraftLogo}
              alt="Magiccraft Logo"
              width="220"
              height="48"
              loading="lazy"
              decoding="async"
              className="max-w-[180px] md:max-w-[220px] transition-all duration-300 hover:scale-105 drop-shadow-2xl hover:drop-shadow-[0_0_25px_rgba(152,255,249,0.3)]"
            />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
              &copy; 2025 MagicCraft Ltd. All rights reserved
            </p>
            
            <ul className="text-sm md:text-base flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 text-[#98FFF9] font-semibold">
              <li
                onClick={() => navigate('/privacypolicy')}
                className="cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block hover:drop-shadow-lg"
              >
                Privacy Policy
              </li>
              <li 
                onClick={() => navigate('/terms')} 
                className="cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block hover:drop-shadow-lg"
              >
                Terms and Conditions
              </li>
              <li
                onClick={() => navigate('/disclaimer')}
                className="cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block hover:drop-shadow-lg"
              >
                Disclaimer
              </li>
            </ul>

            <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl font-light">
              MagicCraft Services and MCRT Token are not available in the United
              States or other prohibited jurisdictions. Services for this
              product are facilitated though MagicCraft Ltd.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 md:gap-6 pt-8 md:pt-10">
            {socialLinks.map((item, i) => {
              return (
                <a 
                  key={i} 
                  rel="noreferrer noopener" 
                  href={item.link}
                  className="group p-2.5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-[#98FFF9]/20 hover:to-[#B591F2]/20 border border-white/10 hover:border-[#98FFF9]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#98FFF9]/20"
                  aria-label={`Visit MagicCraft on ${item.icon.type.name}`}
                >
                  <div className="text-white/60 group-hover:text-[#98FFF9] transition-colors duration-300">
                    {item.icon}
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Token Links */}
          <div className="w-full space-y-6 md:space-y-8">
            <h5 className="text-xl md:text-2xl text-white font-black tracking-wider border-b-2 border-gradient-to-r from-[#98FFF9]/40 to-transparent pb-3 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">
              TOKEN
            </h5>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#98FFF9]">
              {tokenLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') ? (
                      <a 
                        href={item.link} 
                        rel="noreferrer noopener"
                        className="hover:text-white transition-all duration-300 hover:translate-x-1 hover:drop-shadow-lg inline-block font-medium"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          if (item.link.startsWith('/#')) {
                            const targetId = item.link.slice(2)
                            navigate('/')
                            setTimeout(() => {
                              const element = document.getElementById(targetId)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' })
                              }
                            }, 0)
                          } else {
                            navigate(item.link)
                          }
                        }}
                        className="cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block hover:drop-shadow-lg"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* More Links */}
          <div className="w-full space-y-6 md:space-y-8">
            <h5 className="text-xl md:text-2xl text-white font-black tracking-wider border-b-2 border-gradient-to-r from-[#B591F2]/40 to-transparent pb-3 bg-gradient-to-r from-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
              MORE
            </h5>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#98FFF9]">
              {moreLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') ? (
                      <a 
                        href={item.link} 
                        rel="noreferrer noopener"
                        className="hover:text-white transition-all duration-300 hover:translate-x-1 hover:drop-shadow-lg inline-block font-medium"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          window.scrollTo(0, 0)
                          navigate(item.link)
                        }}
                        className="cursor-pointer hover:text-white transition-all duration-300 hover:scale-105 inline-block hover:drop-shadow-lg"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mx-auto my-8 h-[2px] w-11/12 bg-gradient-to-r from-transparent via-[#98FFF9]/30 to-transparent"></div>

      {/* Disclaimer Section */}
      <div className="mx-auto lg:w-[43.5em] max-w-4xl text-center px-4">
        <div className="bg-gradient-to-br from-black/30 to-black/10 rounded-2xl p-6 md:p-8 border border-[#98FFF9]/20 backdrop-blur-sm shadow-2xl">
          <p className="text-xs md:text-sm text-[#8896AB] leading-relaxed">
            $MCRT is a utility token designed for use within the MagicCraft ecosystem. If you are new to the cryptocurrency space,
            please make sure you thoroughly familiarise yourself with the nature and risks
            associated with $MCRT as per our{' '}
            <a
              className="text-primary text-[#98FFF9] underline hover:text-white transition-colors duration-300 hover:scale-105 inline-block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.magiccraft.io/usdmcrt-token/tokenomics"
            >
              Whitepaper
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
