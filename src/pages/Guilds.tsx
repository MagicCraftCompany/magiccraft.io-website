import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Shield } from 'lucide-react'
import PageBackground from '@/components/ui/PageBackground'
import Reveal from '@/components/ui/Reveal'

type GuildLink = {
  kicker: string
  title: string
  cta: string
  icon: string
  accent: string
  external: boolean
  href: string
}

const guildLinks: GuildLink[] = [
  {
    kicker: 'Community',
    title: 'Official Telegram',
    cta: 'Join',
    icon: '/icons/icon-community.svg',
    accent: '#98FFF9',
    external: true,
    href: 'https://t.me/magiccraftgamechat',
  },
  {
    kicker: 'Competitive',
    title: 'Player Leaderboard',
    cta: 'View',
    icon: '/icons/icon-leaderboard.svg',
    accent: '#FFB649',
    external: true,
    href: 'https://lobby.magiccraft.io/leaderboard',
  },
  {
    kicker: 'Gear up',
    title: 'Marketplace',
    cta: 'Explore',
    icon: '/icons/icon-marketplace.svg',
    accent: '#B591F2',
    external: true,
    href: 'https://app.magiccraft.io/marketplace/explorer',
  },
  {
    kicker: 'Play',
    title: 'Web3 Lobbies',
    cta: 'Enter',
    icon: '/icons/icon-gamestats.svg',
    accent: '#6EE7B7',
    external: true,
    href: 'https://lobby.magiccraft.io/',
  },
  {
    kicker: 'Learn',
    title: 'Whitepaper',
    cta: 'Read',
    icon: '/icons/whitepaper.svg',
    accent: '#98FFF9',
    external: false,
    href: '/whitepaper',
  },
  {
    kicker: 'Follow',
    title: 'X (Twitter)',
    cta: 'Follow',
    icon: '/icons/icon-community.svg',
    accent: '#B591F2',
    external: true,
    href: 'https://x.com/MagicCraftGame',
  },
]

const buildSteps = [
  'Create a Telegram guild chat and keep it active',
  'Consistently participate in Web3 lobbies and events',
  'Share highlights on X and tag @MagicCraftGame',
  'Share your guild details with the community in the official Telegram',
]

function CardInner({ link }: { link: GuildLink }) {
  return (
    <>
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${link.accent}, transparent)`,
        }}
      />
      <div className="flex items-center gap-3.5">
        <span
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
          style={{
            borderColor: `${link.accent}40`,
            backgroundColor: `${link.accent}14`,
          }}
        >
          <img src={link.icon} alt="" aria-hidden="true" className="h-6 w-6" />
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
            {link.kicker}
          </p>
          <p className="mt-0.5 font-serif text-lg font-bold text-white">
            {link.title}
          </p>
        </div>
      </div>
      <span
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-black transition group-hover:gap-2.5"
        style={{ color: link.accent }}
      >
        {link.cta}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </>
  )
}

function Guilds() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const cardClass =
    'group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.035] p-5 no-underline shadow-[0_20px_60px_rgba(0,0,0,0.26)] backdrop-blur-md transition hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.06] hover:no-underline'

  return (
    <>
      <Helmet>
        <title>Guilds | MagicCraft</title>
        <meta
          name="description"
          content="Find official MagicCraft community, leaderboard, lobby, marketplace, and guild-building resources."
        />
        <link rel="canonical" href="https://magiccraft.io/guilds" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/guilds" />
        <meta property="og:title" content="Guilds | MagicCraft" />
        <meta
          property="og:description"
          content="Find official MagicCraft community and competition resources for organizing a guild."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guilds | MagicCraft" />
        <meta
          name="twitter:description"
          content="Find official MagicCraft community and competition resources for organizing a guild."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
      </Helmet>
      <PageBackground>
        <Header />
        <main className="scroll-smooth pb-20 md:pb-28">
          <section className="relative pt-8 md:pt-12">
            <div className="mx-auto w-full max-w-screen-xl px-5 sm:px-8 lg:px-12">
              <Link
                to="/"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:-translate-x-1 hover:border-[#98FFF9]/50 hover:bg-white/[0.12]"
                aria-label="Back to Home"
              >
                <ArrowLeft
                  className="h-4 w-4 text-white/70"
                  aria-hidden="true"
                />
                Back to Home
              </Link>

              <Reveal as="header" className="mt-8 max-w-3xl md:mt-10">
                <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#98FFF9]/30 bg-[#071c35]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#98FFF9] backdrop-blur-md sm:text-xs sm:tracking-[0.18em]">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  Organize your players
                </span>
                <h1 className="mt-5 font-serif text-4xl font-black leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
                  Guilds
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  Use these official community and competition links to organize
                  your players, join lobbies, follow updates, and track
                  leaderboard results.
                </p>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
                {guildLinks.map((link, index) =>
                  link.external ? (
                    <Reveal key={link.title} delay={(index % 3) * 0.06}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${cardClass} h-full`}
                      >
                        <CardInner link={link} />
                      </a>
                    </Reveal>
                  ) : (
                    <Reveal key={link.title} delay={(index % 3) * 0.06}>
                      <Link to={link.href} className={`${cardClass} h-full`}>
                        <CardInner link={link} />
                      </Link>
                    </Reveal>
                  )
                )}
              </div>

              <Reveal
                delay={0.08}
                className="mt-10 overflow-hidden rounded-[24px] border border-[#98FFF9]/20 bg-gradient-to-br from-[#98FFF9]/[0.1] to-[#B591F2]/[0.05] p-6 backdrop-blur-md md:p-8"
              >
                <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                  Build your guild presence
                </h2>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                  {buildSteps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm text-white/80 md:text-base"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#98FFF9]/40 bg-[#98FFF9]/10 text-xs font-black text-[#98FFF9]">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <a
                  href="https://t.me/magiccraftgamechat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 text-base font-black text-[#03082f] no-underline shadow-[0_14px_40px_rgba(152,255,249,0.2)] transition hover:-translate-y-0.5 hover:no-underline hover:brightness-110"
                >
                  Share in Telegram
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </PageBackground>
    </>
  )
}

export default Guilds
