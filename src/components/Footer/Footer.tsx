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
import { BUILD_REV } from '@/version'

const socialLinks = [
  {
    label: 'X',
    icon: <FaXTwitter size={18} />,
    link: 'https://twitter.com/MagicCraftGame',
  },
  {
    label: 'Telegram',
    icon: <FaTelegram size={18} />,
    link: 'https://t.me/magiccraftgamechat',
  },
  {
    label: 'Discord',
    icon: <FaDiscord size={18} />,
    link: 'https://discord.gg/magiccraftgame',
  },
  {
    label: 'Reddit',
    icon: <FaReddit size={18} />,
    link: 'https://www.reddit.com/r/magiccraftgame/',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram size={18} />,
    link: 'https://www.instagram.com/magiccraftgame/',
  },
  {
    label: 'Medium',
    icon: <FaMedium size={18} />,
    link: 'https://medium.com/@MagicCraftGame',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin size={18} />,
    link: 'https://www.linkedin.com/company/magiccraft',
  },
  {
    label: 'TikTok',
    icon: <FaTiktok size={18} />,
    link: 'https://www.tiktok.com/@magiccraftgame',
  },
  {
    label: 'YouTube',
    icon: <FaYoutube size={18} />,
    link: 'https://www.youtube.com/@MagicCraftGame',
  },
]

const tokenLinks = [
  {
    title: 'Buy $MCRT (Bybit)',
    link: 'https://www.bybit.com/en/trade/spot/MCRT/USDT',
  },
  {
    title: 'PancakeSwap',
    link: 'https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f',
  },
  {
    title: 'HTX',
    link: 'https://www.htx.com/trade/mcrt_usdt',
  },
  {
    title: 'Pledging',
    link: 'https://app.magiccraft.io/pledging',
  },
  {
    title: 'Marketplace',
    link: 'https://app.magiccraft.io/marketplace/explorer',
  },
];

const moreLinks = [
  {
    title: 'Roadmap',
    link: '/#roadmap',
  },
  {
    title: 'Team',
    link: '/#team',
  },
  {
    title: 'FAQ',
    link: '/faq',
  },
  {
    title: 'Verify',
    link: 'https://app.magiccraft.io/verify',
  },
  {
    title: 'Whitepaper',
    link: 'https://docs.magiccraft.io/',
  },
  {
    title: 'Become a partner',
    link: 'mailto:contact@magiccraft.io',
  },
]

const Footer = () => {
  const navigate = useNavigate()
  const appVersion = `v${BUILD_REV}`
  return (
    <footer className="text-primary relative z-10 py-12 md:py-16 bg-gradient-to-b from-[#020418] via-[#0A0424] to-[#03082f] hairline-top">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col-reverse justify-between gap-10 md:gap-12 lg:flex-row glass-surface rounded-md px-6 md:px-8 py-8 md:py-10 border border-white/10">
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
              className="max-w-[180px] md:max-w-[220px] drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium flex items-center gap-2">
              <span>&copy; MagicCraft May 2021 - 2026. All rights reserved</span>
              <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                {appVersion}
              </span>
            </p>
            
            <ul className="text-sm md:text-base flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 text-[#98FFF9] font-semibold">
              <li
                onClick={() => navigate('/privacypolicy')}
                className="cursor-pointer hover:text-white transition-colors duration-200 inline-block"
              >
                Privacy Policy
              </li>
              <li 
                onClick={() => navigate('/terms')} 
                className="cursor-pointer hover:text-white transition-colors duration-200 inline-block"
              >
                Terms and Conditions
              </li>
              <li
                onClick={() => navigate('/disclaimer')}
                className="cursor-pointer hover:text-white transition-colors duration-200 inline-block"
              >
                Disclaimer
              </li>
            </ul>

            <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl font-light">
              MagicCraft Services and MCRT Token are not available in the United
              States or other prohibited jurisdictions. Services for this
              product are facilitated through MagicCraft Ltd.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-3 md:gap-4 pt-8 md:pt-10">
            {socialLinks.map((item, i) => {
              return (
                <a 
                  key={i} 
                  rel="noreferrer noopener" 
                  href={item.link}
                  className="group p-2.5 rounded-md bg-white/5 border border-white/10 hover:border-[#98FFF9]/40 hover:bg-white/10 transition-colors duration-200"
                  aria-label={`Visit MagicCraft on ${item.label}`}
                  title={item.label}
                  target="_blank"
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
                    {item.link.startsWith('http') || item.link.startsWith('mailto') ? (
                      <a 
                        href={item.link} 
                        rel="noreferrer noopener"
                        target="_blank"
                        className="hover:text-white transition-colors duration-200 inline-block font-medium"
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
                        className="cursor-pointer hover:text-white transition-colors duration-200 inline-block"
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
                    {item.link.startsWith('http') || item.link.startsWith('mailto') ? (
                      <a 
                        href={item.link} 
                        rel="noreferrer noopener"
                        target="_blank"
                        className="hover:text-white transition-colors duration-200 inline-block font-medium"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          window.scrollTo(0, 0)
                          navigate(item.link)
                        }}
                        className="cursor-pointer hover:text-white transition-colors duration-200 inline-block"
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
        <div className="glass-strong rounded-md p-6 md:p-8 shadow-2xl border border-white/10">
          <p className="text-xs md:text-sm text-[#8896AB] leading-relaxed">
            $MCRT is a utility token designed for use within the MagicCraft ecosystem. If you are new to the cryptocurrency space,
            please make sure you thoroughly familiarise yourself with the nature and risks
            associated with $MCRT as per our{' '}
            <a
              className="text-primary text-[#98FFF9] underline hover:text-white transition-colors duration-200 inline-block"
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
