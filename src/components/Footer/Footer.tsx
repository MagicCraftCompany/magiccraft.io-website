import magiccraftLogo from '@/assets/images/magiccraft-logo.webp'
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AI_PRODUCTS } from '@/data/aiProducts'
import { ECOSYSTEM_SYSTEM_GROUPS } from '@/data/ecosystemSystems'

type FooterLink = {
  title: string
  href: string
}

const socialLinks: Array<{
  label: string
  icon: ReactNode
  href: string
}> = [
  {
    label: 'X',
    icon: <FaXTwitter size={18} />,
    href: 'https://twitter.com/MagicCraftGame',
  },
  {
    label: 'Telegram',
    icon: <FaTelegram size={18} />,
    href: 'https://t.me/magiccraftgamechat',
  },
  {
    label: 'Discord',
    icon: <FaDiscord size={18} />,
    href: 'https://discord.gg/magiccraftgame',
  },
  {
    label: 'Reddit',
    icon: <FaReddit size={18} />,
    href: 'https://www.reddit.com/r/magiccraftgame/',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram size={18} />,
    href: 'https://www.instagram.com/magiccraftgame/',
  },
  {
    label: 'Medium',
    icon: <FaMedium size={18} />,
    href: 'https://medium.com/@MagicCraftGame',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin size={18} />,
    href: 'https://www.linkedin.com/company/magiccraft',
  },
  {
    label: 'TikTok',
    icon: <FaTiktok size={18} />,
    href: 'https://www.tiktok.com/@magiccraftgame',
  },
]

const gameLinks: FooterLink[] = [
  { title: 'Game overview', href: '/magiccraft' },
  {
    title: 'Download free',
    href: 'https://docs.magiccraft.io/magiccraft-game-pvp-moba/the-app',
  },
  { title: 'Game + market stats', href: '/stats' },
  {
    title: 'Leaderboard',
    href: 'https://lobby.magiccraft.io/leaderboard',
  },
  { title: 'Heroes', href: '/chooseyourhero' },
]

const aiProductLinks: FooterLink[] = [
  { title: 'AI suite overview', href: '/#ai-products' },
  ...AI_PRODUCTS.map((product) => ({
    title: product.name,
    href: product.href,
  })),
]

const systemLookup = new Map(
  ECOSYSTEM_SYSTEM_GROUPS.flatMap((group) => group.systems).map((system) => [
    system.id,
    system,
  ])
)

const systemLinks: FooterLink[] = [
  { title: 'System status map', href: '/#systems' },
  ...['lobbies', 'marketplace', 'game-maker', 'mcrtpay']
    .map((id) => systemLookup.get(id))
    .filter((system): system is NonNullable<typeof system> => Boolean(system))
    .map((system) => ({ title: system.name, href: system.href })),
  { title: 'Whitepaper v3.3', href: '/whitepaper' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Contact', href: '/contact-us' },
]

function FooterNavLink({ link }: { link: FooterLink }) {
  const external =
    link.href.startsWith('http') || link.href.startsWith('mailto:')

  return external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex min-h-10 items-center py-2 text-sm font-semibold text-white/65 transition hover:text-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
    >
      {link.title}
    </a>
  ) : (
    <Link
      to={link.href}
      className="inline-flex min-h-10 items-center py-2 text-sm font-semibold text-white/65 transition hover:text-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
    >
      {link.title}
    </Link>
  )
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: FooterLink[]
}) {
  const headingId = `footer-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <section aria-labelledby={headingId}>
      <h3
        id={headingId}
        className="text-sm font-black uppercase tracking-[0.18em] text-white"
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={`${link.title}-${link.href}`}>
            <FooterNavLink link={link} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#020418] px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-screen-xl overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,18,55,0.96),rgba(5,6,28,0.98))] shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
        <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:p-12">
          <div>
            <img
              src={magiccraftLogo}
              alt="MagicCraft"
              width="220"
              height="48"
              loading="lazy"
              decoding="async"
              className="w-[210px] max-w-full drop-shadow-2xl"
            />
            <p className="mt-6 max-w-md text-base leading-7 text-white/65">
              A live cross-platform game and the studio behind focused AI
              products for work, creation and growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-[0.14em]">
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-emerald-200">
                Game live
              </span>
              <span className="rounded-full border border-[#B591F2]/25 bg-[#B591F2]/10 px-3 py-1.5 text-[#D8C9FF]">
                {AI_PRODUCTS.length} AI products
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit MagicCraft on ${item.label}`}
                  title={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:-translate-y-0.5 hover:border-[#98FFF9]/40 hover:text-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="MagicCraft footer navigation"
            className="grid gap-8 sm:grid-cols-3 sm:gap-6"
          >
            <FooterLinkGroup title="Game" links={gameLinks} />
            <FooterLinkGroup title="AI products" links={aiProductLinks} />
            <FooterLinkGroup title="Systems + info" links={systemLinks} />
          </nav>
        </div>

        <div className="border-t border-white/10 px-6 py-7 sm:px-9 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-white/60">
                © MagicCraft 2021–2026. All rights reserved.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link
                  to="/privacypolicy"
                  className="text-white/55 hover:text-white"
                >
                  Privacy
                </Link>
                <Link to="/terms" className="text-white/55 hover:text-white">
                  Terms
                </Link>
                <Link
                  to="/disclaimer"
                  className="text-white/55 hover:text-white"
                >
                  Disclaimer
                </Link>
              </div>
            </div>
            <p className="max-w-2xl text-xs leading-5 text-white/40 lg:text-right">
              $MCRT is a utility token with market, network, wallet, eligibility
              and jurisdiction risk. It is not ownership, equity or a promise of
              profit. MagicCraft services may be unavailable in prohibited
              jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
