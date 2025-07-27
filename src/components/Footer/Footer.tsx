import magiccraftLogo from '@/assets/images/magiccraft-logo.webp'
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
import { useNavigate } from 'react-router-dom' // Import useNavigate

const socialLinks = [
  {
    icon: <FaXTwitter size={20} />,
    link: 'https://twitter.com/MagicCraftGame',
  },
  {
    icon: <FaDiscord size={20} />,
    link: 'https://discord.gg/c4bgnsqzQR',
  },
  {
    icon: <FaTelegram size={20} />,
    link: 'https://t.me/magiccraftgamechat',
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
    title: 'Staking',
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
    <footer className="text-primary relative z-10  py-10 lg:ml-[12em] ">
      <div className="mx-auto flex w-11/12 max-w-[1650px] flex-col-reverse justify-between gap-10 lg:flex-row">
        <div className="flex w-full flex-col lg:ml-10 lg:w-1/2 ">
          <div>
            <img
              src={magiccraftLogo}
              alt="Magiccraft Logo"
              className="max-w-[200px]"
            />
          </div>
          <div className="space-y-[18px] pt-5">
            <p className="text-md text-white/60">
              &copy; 2025 MagicCraft Ltd. All rights reserved
            </p>
            <ul className="text-md flex flex-row space-x-6 text-[#98FFF9]">
              <li
                onClick={() => navigate('/privacypolicy')}
                className="cursor-pointer"
              >
                Privacy Policy
              </li>
              <li onClick={() => navigate('/terms')} className="cursor-pointer">
                Terms and Conditions
              </li>
              <li
                onClick={() => navigate('/disclaimer')}
                className="cursor-pointer"
              >
                Disclaimer
              </li>
            </ul>

            <p className="text-md text-white/60">
              MagicCraft Services and MCRT Token are not available in the United
              States or other prohibited jurisdictions. Services for this
              product are facilitated though MagicCraft Ltd.
            </p>
          </div>
          <div className="flex flex-wrap  gap-6 pt-9 text-white/40">
            {socialLinks.map((item, i) => {
              return (
                <a key={i} rel="noreferrer noopener" href={item.link}>
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3  lg:w-1/2 ">
          {/* <div className="w-full space-y-7 "> */}
            {/* <h5 className="text-2xl text-white/60">Game</h5> */}
            {/* <ul className="text-md space-y-[14px] text-[#98FFF9]">
              {gameLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') ? (
                      <a href={item.link} rel="noreferrer noopener">
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          if (item.link.startsWith('/#')) {
                            const targetId = item.link.slice(2) // Remove '/#'
                            navigate('/') // Navigate to homepage
                            setTimeout(() => {
                              const element = document.getElementById(targetId)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' })
                              }
                            }, 0) // Delay to ensure navigation happens first
                          } else {
                            navigate(item.link) // Use useNavigate for routes
                          }
                        }}
                        className="cursor-pointer"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul> */}
          {/* </div> */}
          <div className="block w-full space-y-7  ">
            <h5 className="text-2xl text-white/60">Token</h5>
            <ul className="text-md space-y-[14px] text-[#98FFF9]">
              {tokenLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') || item.link.startsWith('mailto:') ? (
                      <a href={item.link} rel="noreferrer noopener">
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          if (item.link.startsWith('/#')) {
                            const targetId = item.link.slice(2) // Remove '/#'
                            navigate('/') // Navigate to homepage
                            setTimeout(() => {
                              const element = document.getElementById(targetId)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' })
                              }
                            }, 0) // Delay to ensure navigation happens first
                          } else {
                            navigate(item.link) // Use useNavigate for routes
                          }
                        }}
                        className="cursor-pointer"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>{' '}
          <div className="w-full space-y-7 ">
            <h5 className="text-2xl text-white/60">More</h5>
            <ul className="space-y-[14px] text-md text-[#98FFF9]">
              {moreLinks.map((item, i) => {
                return (
                  <li key={i}>
                    {item.link.startsWith('http') ? (
                      <a href={item.link} rel="noreferrer noopener">
                        {item.title}
                      </a>
                    ) : (
                      <a
                        onClick={() => {
                          window.scrollTo(0, 0); // Scroll to top
                          navigate(item.link) // Use useNavigate for routes
                        }}
                        className="cursor-pointer"
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
      <div className="mx-auto my-4 h-px w-11/12  bg-gradient-to-r from-[#556DE033] via-[#556DE0] to-[#556DE033]"></div>
      <div className="mx-auto lg:w-[43.5em] max-w-4xl  text-center">
        <p className="text-sm text-[#8896AB]">
          $MCRT is a utility token designed for use within the MagicCraft ecosystem. If you are new to the cryptocurrency space,
          please make sure you thoroughly familiarise yourself with the nature and risks
          associated with $MCRT as per our{' '}
          <a
            className="text-primary text-[#98FFF9] underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.magiccraft.io/usdmcrt-token/tokenomics"
          >
            Whitepaper
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
