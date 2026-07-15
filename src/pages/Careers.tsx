import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Compass,
  Megaphone,
  Rocket,
  Sparkles,
} from 'lucide-react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import PageBackground from '@/components/ui/PageBackground'
import Reveal from '@/components/ui/Reveal'

const proofPoints = [
  'Crypto-native studio',
  'AI-first workflows',
  'Ship fast, high quality',
  'Remote friendly',
]

const roles = [
  {
    title: 'Marketers',
    icon: Megaphone,
    accent: '#98FFF9',
    body: 'Growth-focused operators who understand crypto, narratives, distribution, and performance. You can ship campaigns end to end and read on-chain signals.',
    points: [
      'Channel strategy, influencer ops, partnerships',
      'Performance, analytics, conversion',
      'Community - X, Telegram, Discord',
    ],
    mailto: 'mailto:contact@magiccraft.io?subject=Marketer%20Application',
  },
  {
    title: 'Developers',
    icon: Code2,
    accent: '#B591F2',
    body: 'Full-stack, gameplay, and Web3 engineers who ship fast with high quality. You like sharp UX, clean abstractions, and measurable impact.',
    points: [
      'React/TypeScript, Node, Vite, Tailwind',
      'Solidity or on-chain integrations a plus',
      'Game dev experience is great, not required',
    ],
    mailto: 'mailto:contact@magiccraft.io?subject=Developer%20Application',
  },
]

const cultureCards = [
  {
    title: 'What we look for',
    icon: Compass,
    items: [
      'Crypto-native - market aware and product minded',
      'AI-first workflows - leverage models to move faster',
      'Vibe coders - taste, speed, and delivery',
    ],
  },
  {
    title: 'Traits',
    icon: Sparkles,
    items: [
      'Smart, fast, hardworking, and dedicated',
      'Positive, owner mindset, low ego',
      'Wants to build to change the world',
    ],
  },
]

function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | MagicCraft</title>
        <meta
          name="description"
          content="Join the MagicCraft team. Explore open roles in game development, AI, and Web3 across the MagicCraft ecosystem."
        />
        <link rel="canonical" href="https://magiccraft.io/careers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/careers" />
        <meta property="og:title" content="Careers | MagicCraft" />
        <meta
          property="og:description"
          content="Join the MagicCraft team. Explore open roles in game development, AI, and Web3 across the MagicCraft ecosystem."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | MagicCraft" />
        <meta
          name="twitter:description"
          content="Join the MagicCraft team. Explore open roles in game development, AI, and Web3 across the MagicCraft ecosystem."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
      </Helmet>
      <PageBackground>
        <Header />
        <main className="mx-auto w-full max-w-screen-xl px-5 pb-20 pt-8 sm:px-8 md:pb-28 md:pt-12 lg:px-12">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:-translate-x-1 hover:border-[#98FFF9]/50 hover:bg-white/[0.12]"
            aria-label="Back to Home"
          >
            <ArrowLeft className="h-4 w-4 text-white/70" aria-hidden="true" />
            Back to Home
          </Link>

          <Reveal as="header" className="mt-8 max-w-3xl md:mt-10">
            <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#98FFF9]/30 bg-[#071c35]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#98FFF9] backdrop-blur-md sm:text-xs sm:tracking-[0.18em]">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              We are hiring
            </span>
            <h1 className="mt-5 font-serif text-4xl font-black leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
              Careers at MagicCraft
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              We build fast with crypto-native DNA. If you live and breathe
              Web3, games, and AI - and you want to help ship products that move
              the market - join us.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-bold text-white/70 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>

          <section className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <Reveal
                  as="article"
                  key={role.title}
                  delay={index * 0.08}
                  className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:-translate-y-1.5 hover:border-[#98FFF9]/40 hover:bg-white/[0.06] sm:p-8"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${role.accent}, transparent)`,
                    }}
                  />
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: `${role.accent}40`,
                      backgroundColor: `${role.accent}1a`,
                      color: role.accent,
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-black text-white sm:text-3xl">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/75">
                    {role.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/70"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: role.accent }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={role.mailto}
                    className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 text-base font-black text-[#03082f] no-underline shadow-[0_14px_40px_rgba(152,255,249,0.2)] transition hover:-translate-y-0.5 hover:no-underline hover:brightness-110"
                  >
                    Apply
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </Reveal>
              )
            })}
          </section>

          <section className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
            {cultureCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Reveal
                  key={card.title}
                  delay={index * 0.08}
                  className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.055]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#98FFF9]/25 bg-[#98FFF9]/10 text-[#98FFF9]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 font-serif text-xl font-bold text-white">
                    {card.title}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#98FFF9]/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}

            <Reveal
              delay={0.16}
              className="rounded-[22px] border border-[#98FFF9]/25 bg-gradient-to-br from-[#98FFF9]/[0.12] to-[#B591F2]/[0.06] p-6 backdrop-blur-md md:col-span-3"
            >
              <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    How to apply
                  </h4>
                  <p className="mt-2 max-w-xl text-sm text-white/75">
                    Email your portfolio or shipped work. Links over CVs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contact@magiccraft.io?subject=Careers"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-5 text-sm font-black text-[#03082f] no-underline transition hover:-translate-y-0.5 hover:no-underline hover:brightness-110"
                  >
                    Email us
                  </a>
                  <Link
                    to="/grants"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-5 text-sm font-bold text-white no-underline backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#98FFF9]/50 hover:bg-white/[0.14] hover:no-underline"
                  >
                    See Grants
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
        <Footer />
      </PageBackground>
    </>
  )
}

export default Careers
