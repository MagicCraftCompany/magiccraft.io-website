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
import { useNavigate, Link } from 'react-router-dom'
import { BUILD_REV } from '@/version'
import { BYBIT_URL, METAMASK_SWAP_URL, PANCAKESWAP_URL } from '@/constants'

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
    title: 'PancakeSwap DEX',
    link: PANCAKESWAP_URL,
  },
  {
    title: 'MetaMask Swap',
    link: METAMASK_SWAP_URL,
  },
  {
    title: 'Buy $MCRT on Bybit',
    link: BYBIT_URL,
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
]

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
    title: 'Contact us',
    link: '/contact-us',
  },
  {
    title: 'Verify',
    link: '/verify',
  },
  {
    title: 'Whitepaper v3.0',
    link: '/whitepaper',
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
    <footer className="text-primary hairline-top relative z-10 bg-gradient-to-b from-[#020418] via-[#0A0424] to-[#03082f] py-12 md:py-16">
      <div className="glass-surface mx-auto flex w-11/12 max-w-screen-xl flex-col-reverse justify-between gap-10 rounded-md border border-white/10 px-6 py-8 md:gap-12 md:px-8 md:py-10 lg:flex-row">
        {/* Left Section - Logo & Info */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="mb-6 md:mb-8">
            <img
              src={magiccraftLogo}
              alt="Magiccraft Logo"
              width="220"
              height="48"
              loading="lazy"
              decoding="async"
              className="max-w-[200px] drop-shadow-2xl transition-transform duration-300 hover:scale-105 md:max-w-[240px]"
            />
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="flex items-center gap-2 text-sm font-medium leading-relaxed text-white/70 md:text-base">
              <span>
                &copy; MagicCraft May 2021 - 2026. All rights reserved
              </span>
              <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                {appVersion}
              </span>
            </p>

            <ul className="flex flex-col space-y-3 text-sm font-semibold text-[#98FFF9] md:flex-row md:space-x-8 md:space-y-0 md:text-base">
              <li>
                <Link
                  to="/privacypolicy"
                  className="inline-block cursor-pointer transition-colors duration-200 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="inline-block cursor-pointer transition-colors duration-200 hover:text-white"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="inline-block cursor-pointer transition-colors duration-200 hover:text-white"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>

            <p className="max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
              MagicCraft Services and MCRT Token are not available in the United
              States or other prohibited jurisdictions. Services for this
              product are facilitated through MagicCraft Ltd.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 pt-8 md:pt-10">
            {socialLinks.map((item, i) => {
              return (
                <a
                  key={i}
                  rel="noreferrer noopener"
                  href={item.link}
                  className="group rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:bg-white/10"
                  aria-label={`Visit MagicCraft on ${item.label}`}
                  title={item.label}
                  target="_blank"
                >
                  <div className="text-white/70 transition-colors duration-300 group-hover:text-[#98FFF9]">
                    {item.icon}
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">
          {/* Token Links */}
          <div className="w-full space-y-6 md:space-y-8">
            <h5 className="border-b-2 border-white/15 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text pb-3 text-xl font-black tracking-wider text-transparent text-white md:text-2xl">
              TOKEN
            </h5>
            <ul className="space-y-3 text-sm text-[#98FFF9] md:space-y-4 md:text-base">
              {tokenLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') ||
                    item.link.startsWith('mailto') ? (
                      <a
                        href={item.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="inline-block font-medium transition-colors duration-200 hover:text-white"
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
                        className="inline-block cursor-pointer transition-colors duration-200 hover:text-white"
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
            <h5 className="border-b-2 border-white/15 bg-gradient-to-r from-[#B591F2] to-[#FFB649] bg-clip-text pb-3 text-xl font-black tracking-wider text-transparent text-white md:text-2xl">
              MORE
            </h5>
            <ul className="space-y-3 text-sm text-[#98FFF9] md:space-y-4 md:text-base">
              {moreLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') ||
                    item.link.startsWith('mailto') ? (
                      <a
                        href={item.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="inline-block font-medium transition-colors duration-200 hover:text-white"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          window.scrollTo(0, 0)
                          navigate(item.link)
                        }}
                        className="inline-block cursor-pointer transition-colors duration-200 hover:text-white"
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
      <div className="mx-auto max-w-5xl px-4 text-center lg:w-[48em]">
        <div className="glass-strong rounded-xl border border-white/10 p-6 shadow-2xl transition-colors hover:border-white/20 md:p-8">
          <p className="text-sm leading-relaxed text-[#8896AB] md:text-base">
            $MCRT is a utility token designed for use within the MagicCraft
            ecosystem. If you are new to the cryptocurrency space, please make
            sure you thoroughly familiarise yourself with the nature and risks
            associated with $MCRT as per our{' '}
            <a
              className="text-primary inline-block font-medium text-[#98FFF9] underline transition-colors duration-200 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.magiccraft.io/"
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
