import { Helmet } from 'react-helmet-async'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import {
  BYBIT_URL,
  METAMASK_SWAP_URL,
  MCRT_CONTRACT_CHECKSUM,
  PANCAKESWAP_URL,
} from '@/constants'

const printStyles = `
@media print {
  header, footer, nav, [data-mobile-bottom-bar], .fixed { display: none !important; }
  body { background: #fff !important; color: #000 !important; }
  a { color: inherit !important; text-decoration: none !important; }
  .card-glass { border: 1px solid #ccc !important; background: #f9f9f9 !important; }
  section { page-break-inside: avoid; }
}`

const MCRT_CONTRACT = MCRT_CONTRACT_CHECKSUM

const products = [
  {
    name: 'MagicCraft Game',
    url: 'https://lobby.magiccraft.io',
    color: '#98FFF9',
    tag: 'LIVE',
    icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp',
    description:
      'On-chain MOBA with PvP lobbies denominated in BTC, ETH, BNB, XRP, SOL, and $MCRT. Play on PC, iOS, Android, and Steam.',
    mcrtUse: [
      'Entry currency for $MCRT PvP lobbies',
      'Prize pools and season rewards',
      'NFT hero & skin purchases',
      'Game Maker revenue sharing',
    ],
  },
  {
    name: 'Akyn — AI Film Studio',
    url: 'https://akyn.pro',
    color: '#B591F2',
    tag: 'LIVE',
    icon: 'https://akyn.pro/logo.svg',
    description:
      'Full AI film production suite: pitch an idea, generate a script, cast consistent AI characters, compose and shoot scenes, then edit and export. Produces viral dance videos, social shorts, and cinematic content in minutes.',
    mcrtUse: [
      'Premium plan subscription paid in $MCRT',
      'Video generation credits purchased with $MCRT',
      'AI dance & social clip exports',
      'Creator revenue sharing in $MCRT',
    ],
  },
  {
    name: 'Merlin AI',
    url: 'https://merlintheai.com',
    color: '#98FFF9',
    tag: 'LIVE',
    icon: 'https://merlintheai.com/personas/merlin-logo-large-56.webp',
    description:
      'Multi-modal AI companion: voice chat, image & video generation, investing tools, AI personas, WhatsApp/Telegram bot. The $MCRT-native AI hub that routes payments and rewards across the entire ecosystem.',
    mcrtUse: [
      'Purchase credits on merlintheai.com with $MCRT',
      'Premium plan subscription paid in $MCRT',
      'AI image & video generation credit packs',
      'Cross-product $MCRT payment gateway',
    ],
  },
  {
    name: 'MagicAds',
    url: 'https://magicads.dev',
    color: '#FFB649',
    tag: 'LIVE',
    icon: 'https://magicads.dev/magicads-logo.svg',
    description:
      'AI-native cross-banner ad network. Publishers embed one script and earn $MCRT or USDT. Advertisers launch AI-targeted campaigns in minutes with $MCRT or Stripe payments.',
    mcrtUse: [
      'Ad spend paid in $MCRT',
      'Publisher payouts in $MCRT',
      'Dual settlement: $MCRT + Stripe',
      'AI-targeted campaign credits',
    ],
  },
  {
    name: 'Polybilities',
    url: 'https://polybilities.com',
    color: '#FFB649',
    tag: 'LIVE',
    icon: 'https://polybilities.com/polybilities-logo.png',
    description:
      'AI prediction markets with live odds, real-time settlement, and $MCRT rewards. Stake $MCRT to enter predictions and earn from accurate forecasts.',
    mcrtUse: [
      'Stake $MCRT to enter prediction markets',
      '$MCRT rewards for correct predictions',
      'AI odds powered by Merlin',
      'Seasonal prize pools in $MCRT',
    ],
  },
  {
    name: 'DocAI',
    url: 'https://docai.live',
    color: '#10B981',
    tag: 'LIVE',
    icon: 'https://docai.live/logotext-main.png',
    description:
      '24/7 AI wellness assistant with personalized health guidance, symptom tracking, and daily check-ins. Starter, Pro, and Enterprise plans all accept $MCRT on-chain for instant subscription activation.',
    mcrtUse: [
      'Purchase Starter, Pro, or Enterprise subscription with $MCRT',
      'On-chain BEP-20 payment — instant plan activation',
      'No trial required when paying with $MCRT',
      'AI health coaching and document analysis credits',
    ],
  },
  {
    name: 'SocialMM',
    url: 'https://socialmm.ai',
    color: '#B591F2',
    tag: 'LIVE',
    icon: '/icons/icon-community.svg',
    description:
      'AI-powered social media management: schedule posts, generate content, track analytics, and grow your audience. $MCRT holders get priority scheduling and advanced AI templates.',
    mcrtUse: [
      'Premium account management in $MCRT',
      'AI content generation credits',
      'Analytics dashboard access',
    ],
  },
  {
    name: 'EnvRouter AI',
    url: '',
    color: '#38BDF8',
    tag: 'WIP',
    icon: '/icons/icon-stats.svg',
    description:
      'AI gateway for model routing, encrypted key storage, streaming proxy support, token tracking, and dashboard management for product teams.',
    mcrtUse: [
      'Shared AI infrastructure for ecosystem products',
      'Usage logs and token tracking for model spend',
      'Planned routing layer for AI subscriptions and credits',
    ],
  },
  {
    name: 'MAGAS7',
    url: 'https://magas7.com',
    color: '#B1FF5A',
    tag: 'MVP',
    icon: 'https://magas7.com/favicon.svg',
    description:
      'Marketing Agents MVP: a Codex-like command surface for agentic marketing tools that research, write, design, schedule, post, analyze, and guard brand quality.',
    mcrtUse: [
      'Growth engine for MagicCraft ecosystem campaigns',
      'Agentic creative, scheduling, and analytics workflows',
      'Marketing automation that can feed MagicAds demand',
    ],
  },
  {
    name: 'DragonList',
    url: 'https://dragonlist.ai',
    color: '#FF6B6B',
    tag: 'LIVE',
    icon: '/icons/icon-stats.svg',
    description:
      'AI-curated launchpad and discovery platform for the next generation of Web3 and AI projects. $MCRT is the featured utility token for featured listings and community voting.',
    mcrtUse: [
      'Project listing fees in $MCRT',
      'Community voting stake in $MCRT',
      'Early access passes for $MCRT holders',
    ],
  },
]

const revenueStreams = [
  {
    source: 'PvP Crypto Lobbies',
    mechanism: 'Platform fee on every match entry',
    mcrtDemand: 'Direct — lobby entry and prize pool denomination',
    color: '#98FFF9',
  },
  {
    source: 'Akyn (Premium / Business)',
    mechanism: 'Monthly subscription + per-credit video generation',
    mcrtDemand: 'Subscription payments in $MCRT; credits bought with $MCRT',
    color: '#B591F2',
  },
  {
    source: 'MagicAds Network',
    mechanism: 'Advertiser CPM/CPC fees + publisher payout spread',
    mcrtDemand:
      'Buy pressure — advertisers must acquire $MCRT to run campaigns',
    color: '#FFB649',
  },
  {
    source: 'NFT Marketplace',
    mechanism: 'Trading royalties on Genesis & Revelation NFT sales',
    mcrtDemand: 'Settlement currency for hero/skin trades',
    color: '#98FFF9',
  },
  {
    source: 'Polybilities Markets',
    mechanism: 'Spread and settlement fee on prediction outcomes',
    mcrtDemand: 'Stake and reward currency — all prizes in $MCRT',
    color: '#FFB649',
  },
  {
    source: 'Game Maker Studio',
    mechanism: 'Revenue share on user-created map earnings',
    mcrtDemand: 'Creator payouts in $MCRT; maps priced in $MCRT',
    color: '#B591F2',
  },
  {
    source: 'Merlin AI',
    mechanism: 'Credit purchases + premium subscriptions + image/video gen API',
    mcrtDemand:
      'Direct $MCRT credit purchases on merlintheai.com — primary cross-product payment hub',
    color: '#98FFF9',
  },
  {
    source: 'DocAI (Wellness AI)',
    mechanism: 'Starter / Pro / Enterprise monthly subscriptions',
    mcrtDemand:
      '$MCRT on-chain payment activates subscription instantly — direct buy pressure from AI health users',
    color: '#10B981',
  },
]

const tokenomicsRows = [
  {
    category: 'Eco Growth / Gaming Issuance',
    percent: '43.5%',
    description:
      'PvP prize pools, player rewards, Game Maker revenue share, pledging rewards, AI ecosystem incentives — distributed linearly over 4 years',
  },
  {
    category: 'Team',
    percent: '15%',
    description:
      '3-month lockup, then 12 months linear distribution — 1,500,000,000 MCRT',
  },
  {
    category: 'Pledging Issuance',
    percent: '12%',
    description:
      'Staking rewards at 1% ARR, capped at 1,000,000 $MCRT per month — a sustainable rate introduced to protect long-term token supply',
  },
  {
    category: 'Reserve Fund',
    percent: '9%',
    description:
      'Protocol operations, marketing initiatives, Ambassador program, and community incentives',
  },
  {
    category: 'Private Sale',
    percent: '6%',
    description:
      'Rounds at $0.003–$0.004, total raised $2.115M — 3-month lockup, 12 months linear vesting',
  },
  {
    category: 'Liquidity',
    percent: '6%',
    description:
      'DEX and CEX liquidity provision across Bybit, PancakeSwap, HTX, and more',
  },
  {
    category: 'Advisors',
    percent: '5%',
    description: '3-month lockup, 12 months linear distribution',
  },
  {
    category: 'Public Sale (IDO)',
    percent: '3.5%',
    description:
      'IDO at $0.006 — raised $2.075M; total raised across all rounds: $4.19M',
  },
]

const flywheelSteps = [
  {
    n: '01',
    title: 'Users Buy $MCRT',
    body: 'Players, creators, and AI users acquire $MCRT via Bybit, PancakeSwap, or credit card to access premium features across the ecosystem.',
  },
  {
    n: '02',
    title: 'Spend in Products',
    body: 'MCRT is spent on Akyn Premium subscriptions, Merlin AI credits, DocAI wellness plans, Polybilities stakes, MagicAds campaigns, game lobbies, and NFT purchases, creating consistent protocol demand.',
  },
  {
    n: '03',
    title: 'Revenue Flows Back',
    body: 'Platform fees, ad spend, subscription revenue, and marketplace royalties flow into the treasury, funding rewards and buybacks.',
  },
  {
    n: '04',
    title: 'Holders Are Rewarded',
    body: 'Stakers earn from prize pools, ad revenue, and ecosystem growth. Higher MCRT value incentivises more product use and new user acquisition.',
  },
  {
    n: '05',
    title: 'Ecosystem Expands',
    body: 'New products (Akyn tiers, AI models, new game modes) launch, each creating new demand vectors for $MCRT and compounding the flywheel.',
  },
]

const Section = ({
  id,
  title,
  sub,
  children,
}: {
  id: string
  title: string
  sub?: string
  children: React.ReactNode
}) => (
  <section id={id} className="border-b border-white/5 py-12 md:py-16">
    <div className="mb-8">
      <h2 className="bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-2 max-w-3xl text-base text-white/60">{sub}</p>}
    </div>
    {children}
  </section>
)

const Tag = ({ label, color }: { label: string; color: string }) => (
  <span
    className="rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
    style={{ color, borderColor: `${color}50`, backgroundColor: `${color}15` }}
  >
    {label}
  </span>
)

export default function Whitepaper() {
  return (
    <>
      <Helmet>
        <title>
          MagicCraft Whitepaper v3.0 — $MCRT Token, Akyn AI & Full Ecosystem
        </title>
        <meta
          name="description"
          content="MagicCraft Whitepaper v3.0: $MCRT utility across AI gaming, Akyn AI film studio, Merlin AI, MagicAds, EnvRouter AI, MAGAS7, Polybilities and the full ecosystem."
        />
        <link rel="canonical" href="https://magiccraft.io/whitepaper" />
        <style>{printStyles}</style>
      </Helmet>
      <div className="min-h-screen bg-[#03082f] text-white">
        <Header />

        {/* Hero */}
        <div className="relative overflow-hidden border-b border-white/10 pb-16 pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#06103f] via-[#03082f] to-[#03082f]"></div>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(152,255,249,0.12),transparent)]"></div>
          <div className="relative z-10 mx-auto max-w-screen-xl px-4 text-center sm:px-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#98FFF9]"></span>
              Whitepaper v3.0 — Updated April 2026
            </div>
            <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
                MAGICCRAFT
              </span>
              <br />
              <span className="text-white/90">WHITEPAPER</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
              The $MCRT ecosystem: AI gaming, Akyn AI film studio, MagicAds,
              Merlin, and more — every product creates a new reason to hold the
              token.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary px-6 py-2.5 text-sm font-bold"
              >
                Swap on PancakeSwap
              </a>
              <a
                href={METAMASK_SWAP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary px-6 py-2.5 text-sm font-semibold"
              >
                Open MetaMask
              </a>
              <a
                href={BYBIT_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-[#FFB649]/30 bg-[#FFB649]/10 px-6 py-2.5 text-sm font-bold text-[#FFDD8A] transition-all hover:bg-[#FFB649]/15"
              >
                Buy on Bybit
              </a>
              <a
                href="https://lobby.magiccraft.io"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary px-6 py-2.5 text-sm font-semibold"
              >
                Play Free Now
              </a>
              <button
                onClick={() => window.print()}
                className="rounded-lg border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                ↓ Save as PDF
              </button>
            </div>
            <div className="mt-8 inline-flex flex-col items-center gap-1 text-xs text-white/40">
              <span>Contract (BNB Chain)</span>
              <code className="break-all font-mono text-[11px] text-[#98FFF9]/70">
                {MCRT_CONTRACT}
              </code>
            </div>
          </div>
        </div>

        {/* TOC */}
        <div className="sticky top-0 z-30 hidden border-b border-white/10 bg-[#03082f]/95 backdrop-blur md:block">
          <div className="mx-auto max-w-screen-xl px-6">
            <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-3 text-xs font-medium text-white/50">
              {[
                'Executive Summary',
                'The Vision',
                'Products',
                'Akyn',
                '$MCRT Token',
                'Monetization',
                'Tokenomics',
                'Roadmap',
              ].map((t) => (
                <a
                  key={t}
                  href={`#${t
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '')}`}
                  className="transition-colors hover:text-[#98FFF9]"
                >
                  {t}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <main className="mx-auto max-w-screen-xl px-4 pb-20 sm:px-6">
          {/* Executive Summary */}
          <Section id="executive-summary" title="Executive Summary">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-4 leading-relaxed text-white/80">
                <p>
                  MagicCraft ($MCRT) is a multi-product AI and gaming ecosystem
                  where every product — from competitive on-chain gaming to AI
                  film production — routes its premium economy through a single
                  token. Each new product adds a new demand vector; each new
                  user becomes a potential $MCRT buyer.
                </p>
                <p>
                  At the core of our monetization model is the{' '}
                  <span className="font-semibold text-white">
                    product flywheel
                  </span>
                  : premium AI features across Akyn, Merlin, MagicAds,
                  Polybilities, EnvRouter AI, and MAGAS7 expand the surface area
                  where MagicCraft can turn usage into revenue and $MCRT demand.
                </p>
                <p>
                  $MCRT is live on Bybit, PancakeSwap, and HTX. It powers 8+
                  live products across gaming, AI content, prediction markets,
                  and advertising. The token has a fixed maximum supply,
                  deflationary mechanics via fee burns, and ecosystem incentives
                  that reward long-term holders.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Live Products', value: '8+', color: '#98FFF9' },
                  {
                    label: 'Token Holders',
                    value: '17,800+',
                    color: '#B591F2',
                  },
                  { label: 'Downloads', value: '100,000+', color: '#FFB649' },
                  { label: 'Blockchain', value: 'BNB Chain', color: '#98FFF9' },
                  {
                    label: 'Listed On',
                    value: 'Bybit, PancakeSwap, HTX',
                    color: '#B591F2',
                  },
                  {
                    label: 'Whitepaper',
                    value: 'v3.0 · Apr 2026',
                    color: '#FFB649',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="card-glass rounded-xl border border-white/10 p-4"
                  >
                    <div className="mb-1 text-[10px] uppercase tracking-wider text-white/40">
                      {stat.label}
                    </div>
                    <div
                      className="text-base font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Vision */}
          <Section
            id="the-vision"
            title="The Vision"
            sub="One token. Eight products. One flywheel."
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: '🎮',
                  title: 'AI-Native Gaming',
                  body: 'MagicCraft is built on a proven $10M Unity codebase, now rebuilt with daily AI-assisted development using Cursor, Codex, and Claude. Every mechanic — from matchmaking to map generation — is AI-assisted, shipping faster than any traditional studio.',
                },
                {
                  icon: '💰',
                  title: 'Token-Gated Premium Economy',
                  body: 'Unlike games where tokens are "optional", $MCRT is used for Akyn Premium video generation, Polybilities staking, MagicAds ad campaigns, and PvP lobby entry. Use = demand. Demand = price appreciation.',
                },
                {
                  icon: '🔗',
                  title: 'Merlin as the Payment Rail',
                  body: "Merlin AI acts as the ecosystem's AI payment hub: routing $MCRT purchases, managing subscription states, and enabling cross-product identity. One Merlin account connects you to every MagicCraft product.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="card-glass rounded-2xl border border-white/10 p-6"
                >
                  <div className="mb-3 text-3xl">{c.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Products */}
          <Section
            id="products"
            title="The Ecosystem"
            sub="Every product creates new utility for $MCRT."
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {products.map((p) => {
                const card = (
                  <>
                    <div className="mb-3 flex items-start gap-3">
                      {p.icon ? (
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/10">
                          <img
                            src={p.icon}
                            alt={p.name}
                            className="h-8 w-8 object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg ring-1 ring-white/10">
                          🔮
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#98FFF9]">
                            {p.name}
                          </h3>
                          <Tag label={p.tag} color={p.color} />
                        </div>
                        <span className="text-xs text-white/40">
                          {p.url
                            ? p.url.replace('https://', '')
                            : 'Domain pending'}
                        </span>
                      </div>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-white/70">
                      {p.description}
                    </p>
                    <div className="space-y-1">
                      {p.mcrtUse.map((u) => (
                        <div
                          key={u}
                          className="flex items-center gap-2 text-xs text-white/60"
                        >
                          <span
                            className="h-1 w-1 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: p.color }}
                          ></span>
                          {u}
                        </div>
                      ))}
                    </div>
                  </>
                )
                const className =
                  'card-glass rounded-2xl p-5 border border-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 no-underline hover:no-underline group block'

                return p.url ? (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={className}
                  >
                    {card}
                  </a>
                ) : (
                  <div key={p.name} className={className}>
                    {card}
                  </div>
                )
              })}
            </div>
          </Section>

          {/* Akyn deep-dive */}
          <Section
            id="akyn"
            title="Akyn — AI Film Production Suite"
            sub="Write, cast, shoot, and edit viral videos with AI. No crew needed."
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#B591F2]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0835]/90 via-[#0f0824]/95 to-[#03082f]/95"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B591F2] via-[#98FFF9] to-[#B591F2]"></div>
              <div className="relative z-10 p-6 md:p-10">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-[#B591F2]/30">
                        <img
                          src="https://akyn.pro/logo.svg"
                          alt="Akyn"
                          className="h-full w-full bg-[#120d18] object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Akyn</h3>
                        <a
                          href="https://akyn.pro"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-sm text-[#B591F2]/80 hover:text-[#B591F2]"
                        >
                          akyn.pro
                        </a>
                      </div>
                    </div>
                    <p className="mb-4 leading-relaxed text-white/80">
                      Akyn is a full AI film production suite that gives every
                      creator a complete crew: a{' '}
                      <span className="font-semibold text-white">
                        Screenwriter
                      </span>{' '}
                      that expands a one-line idea into a multi-scene script, a{' '}
                      <span className="font-semibold text-white">
                        Production Designer
                      </span>{' '}
                      that generates consistent characters and locations, a{' '}
                      <span className="font-semibold text-white">
                        Cinematographer
                      </span>{' '}
                      that frames and generates motion between shots, and an{' '}
                      <span className="font-semibold text-white">Editor</span>{' '}
                      that assembles, scores, and exports the final film.
                    </p>
                    <p className="mb-4 leading-relaxed text-white/80">
                      The output: viral dance videos, cinematic social shorts,
                      AI films — exported to TikTok, Instagram Reels, and
                      YouTube Shorts in minutes. Akyn's creator gallery is a
                      live feed of exported videos from real users.
                    </p>
                    <p className="leading-relaxed text-white/80">
                      As part of the MagicCraft ecosystem, Akyn's Premium and
                      Business tiers can be paid with{' '}
                      <span className="font-semibold text-[#B591F2]">
                        $MCRT
                      </span>
                      , making every creator who wants HD exports and priority
                      generation a direct $MCRT buyer.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white/60">
                      Akyn Plans
                    </h4>
                    {[
                      {
                        plan: 'Standard',
                        price: '$10 / mo',
                        color: '#98FFF9',
                        features: [
                          'Script generation',
                          'AI character & location assets',
                          'Video generation',
                          'Standard exports',
                          'Email support',
                        ],
                      },
                      {
                        plan: 'Premium',
                        price: '$25 / mo',
                        color: '#B591F2',
                        features: [
                          'Everything in Standard',
                          'Priority generation queue',
                          'HD exports',
                          'More video credits',
                          'Early access to new AI models',
                        ],
                      },
                      {
                        plan: 'Business',
                        price: 'Custom',
                        color: '#FFB649',
                        features: [
                          'Everything in Premium',
                          'Volume credits',
                          'Team collaboration',
                          'API access',
                          'Dedicated support',
                        ],
                      },
                    ].map((p) => (
                      <div
                        key={p.plan}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                      >
                        <div className="w-20 flex-shrink-0 text-right">
                          <div
                            className="text-sm font-bold"
                            style={{ color: p.color }}
                          >
                            {p.plan}
                          </div>
                          <div className="text-xs text-white/40">{p.price}</div>
                        </div>
                        <div className="flex flex-1 flex-wrap gap-x-3 gap-y-0.5">
                          {p.features.map((f) => (
                            <span key={f} className="text-xs text-white/60">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 rounded-xl border border-[#B591F2]/20 bg-gradient-to-r from-[#B591F2]/10 to-[#98FFF9]/5 p-4">
                      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-[#B591F2]">
                        $MCRT + Akyn
                      </div>
                      <ol className="list-inside list-decimal space-y-1 text-sm text-white/70">
                        <li>Buy $MCRT on Bybit or PancakeSwap</li>
                        <li>Connect your wallet at akyn.pro</li>
                        <li>Pay for Premium or Business with $MCRT</li>
                        <li>Generate unlimited AI dance and viral videos</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* MCRT Token */}
          <Section
            id="mcrt-token"
            title="$MCRT Token"
            sub="The currency that connects every product in the MagicCraft universe."
          >
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="card-glass rounded-2xl border border-[#98FFF9]/20 p-6">
                <h3 className="mb-4 text-lg font-bold text-[#98FFF9]">
                  Token Overview
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Name', value: 'MagicCraft Token' },
                    { label: 'Ticker', value: '$MCRT' },
                    { label: 'Blockchain', value: 'BNB Chain (BEP-20)' },
                    {
                      label: 'Contract',
                      value: `${MCRT_CONTRACT.slice(0, 14)}…${MCRT_CONTRACT.slice(-6)}`,
                    },
                    { label: 'Total Supply', value: '10,000,000,000 MCRT' },
                    { label: 'Burning Mechanism', value: 'None' },
                    {
                      label: 'Listed On',
                      value: 'Bybit, PancakeSwap, HTX, MEXC, 10+',
                    },
                    {
                      label: 'Security Audit',
                      value: 'CertIK — skynet.certik.com',
                    },
                    { label: 'DAO', value: 'snapshot.org/#/magiccraftdao.eth' },
                  ].map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center justify-between border-b border-white/5 pb-2 text-sm"
                    >
                      <span className="text-white/50">{r.label}</span>
                      <span className="max-w-[60%] truncate text-right font-mono font-medium text-white">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-glass rounded-2xl border border-[#B591F2]/20 p-6">
                <h3 className="mb-4 text-lg font-bold text-[#B591F2]">
                  Utility Matrix
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      product: 'PvP Lobbies',
                      use: 'Entry + prizes (BTC, ETH, $MCRT)',
                    },
                    {
                      product: 'VIP Lobby Access',
                      use: 'Hold 100k $MCRT for 10 days → earn 250 MCRT/win',
                    },
                    {
                      product: 'Pledging',
                      use: '1% ARR · capped at 1M $MCRT rewarded per month',
                    },
                    {
                      product: 'DAO / Knights',
                      use: 'Vote on proposals; top 100 holders = Knights of the Realm',
                    },
                    {
                      product: 'Sponsorship',
                      use: 'Lend $MCRT to players; share their winnings',
                    },
                    {
                      product: 'NFT Marketplace',
                      use: 'Buy/sell heroes & skins; 4.25% treasury fee',
                    },
                    {
                      product: 'Hero Upgrades',
                      use: 'Spend $MCRT to level up, buy weapons & abilities',
                    },
                    {
                      product: 'Tournament Entry',
                      use: 'Create match entry fees → winner prize pools',
                    },
                    {
                      product: 'Akyn (Premium/Business)',
                      use: 'Subscription + video credits',
                    },
                    {
                      product: 'MagicAds',
                      use: 'Ad spend + publisher payouts',
                    },
                    {
                      product: 'Polybilities',
                      use: 'Stake + prediction rewards',
                    },
                    {
                      product: 'Merlin AI',
                      use: 'Credit purchases + premium subscription on merlintheai.com',
                    },
                    {
                      product: 'DocAI',
                      use: 'Starter/Pro/Enterprise subscription via $MCRT on-chain',
                    },
                    {
                      product: 'Referral / Ambassador',
                      use: 'Earn $MCRT for referrals and ambassador activity',
                    },
                  ].map((r) => (
                    <div
                      key={r.product}
                      className="flex items-start justify-between gap-2 border-b border-white/5 py-1.5 text-xs"
                    >
                      <span className="flex-shrink-0 font-medium text-white/80">
                        {r.product}
                      </span>
                      <span className="text-right text-[#B591F2]/80">
                        {r.use}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flywheel */}
            <div className="mt-8">
              <h3 className="mb-6 text-xl font-bold text-white">
                The $MCRT Flywheel
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {flywheelSteps.map((s, i) => (
                  <div
                    key={s.n}
                    className="card-glass relative rounded-2xl border border-white/10 p-4"
                  >
                    {i < flywheelSteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-white/20 lg:block">
                        →
                      </div>
                    )}
                    <div className="mb-2 text-2xl font-black text-white/10">
                      {s.n}
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-white">
                      {s.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-white/60">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Monetization */}
          <Section
            id="monetization"
            title="Monetization & Revenue Flows"
            sub="How every product generates real revenue and creates buy pressure on $MCRT."
          >
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/50">
                      Revenue Source
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/50">
                      Mechanism
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/50">
                      $MCRT Demand Created
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {revenueStreams.map((r, i) => (
                    <tr
                      key={r.source}
                      className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}
                    >
                      <td className="px-5 py-3.5 font-semibold text-white">
                        {r.source}
                      </td>
                      <td className="px-5 py-3.5 text-white/60">
                        {r.mechanism}
                      </td>
                      <td className="px-5 py-3.5 text-white/60">
                        {r.mcrtDemand}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  label: 'Pledging (Staking)',
                  detail:
                    'Lock $MCRT for a chosen period to earn 1% ARR. Rewards are capped at 1,000,000 $MCRT per month across all pledgers — a sustainable rate introduced to protect long-term token supply.',
                },
                {
                  label: 'Treasury Revenue',
                  detail:
                    'MagicCraft treasury receives 4.25% of all NFT marketplace transactions. Match entry fees form prize pools distributed entirely to winning teams. Growing volume = growing treasury.',
                },
                {
                  label: 'VIP & DAO Locking',
                  detail:
                    'Holding 100,000+ $MCRT for 10+ days grants VIP lobby access and higher rewards per win. Top 100 holders become Knights of the Realm with exclusive DAO voting rights at snapshot.org/#/magiccraftdao.eth.',
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="card-glass rounded-xl border border-white/10 p-4"
                >
                  <h4 className="mb-2 text-sm font-bold text-white">
                    {c.label}
                  </h4>
                  <p className="text-xs leading-relaxed text-white/60">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Tokenomics */}
          <Section
            id="tokenomics"
            title="Tokenomics"
            sub="Total supply: 10,000,000,000 $MCRT · BNB Chain (BEP-20) · No burning mechanism · 10+ exchanges · Total raised at IDO: $4.19M"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {tokenomicsRows.map((r) => (
                <div
                  key={r.category}
                  className="card-glass flex items-start gap-4 rounded-xl border border-white/10 p-4"
                >
                  <div className="w-14 flex-shrink-0 text-center">
                    <span className="bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-xl font-black text-transparent">
                      {r.percent}
                    </span>
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-bold text-white">
                      {r.category}
                    </div>
                    <div className="text-xs leading-relaxed text-white/60">
                      {r.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Roadmap */}
          <Section
            id="roadmap"
            title="Roadmap"
            sub="What's live and what's coming next."
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  label: 'NOW LIVE',
                  color: '#98FFF9',
                  items: [
                    'MagicCraft MOBA — PC, iOS, Android, Steam',
                    'Crypto PvP Lobbies (BTC, ETH, BNB, XRP, SOL, $MCRT)',
                    'Akyn AI Film Studio (Standard / Premium / Business)',
                    'Merlin AI — multi-modal AI companion + payment hub',
                    'MagicAds — AI cross-banner ad network',
                    'Polybilities — AI prediction markets',
                    'DocAI, SocialMM, EnvRouter AI, MAGAS7, DragonList',
                    'NFT Marketplace + Craft & Sell',
                    '$MCRT Game Maker on Steam',
                  ],
                },
                {
                  label: 'Q2 2026',
                  color: '#B591F2',
                  items: [
                    'Smart AI matchmaking + coaching in-game',
                    'Akyn expanded video styles (lipsync, 3D avatars)',
                    'Merlin as ecosystem-wide payment identity layer',
                    'Unified $MCRT dashboard across all products',
                    'MagicAds expanded publisher network',
                    'EnvRouter AI gateway with usage logs and model routing',
                    'MAGAS7 marketing agents for campaign operations',
                    'Polybilities seasonal league with $MCRT jackpots',
                    'Partner SDK / API access for external developers',
                  ],
                },
                {
                  label: 'Q3 2026+',
                  color: '#FFB649',
                  items: [
                    'Persistent metaverse worlds — NFT land ownership',
                    'Esports infrastructure + broadcast partnerships',
                    'DAO governance — $MCRT pledging for voting power',
                    'MagicAds autonomous network — AI-generated ad creatives',
                    'Cross-game $MCRT season pass',
                    'Open ecosystem grants for builders using $MCRT',
                  ],
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className="card-glass rounded-2xl border border-white/10 p-5"
                >
                  <div
                    className="mb-4 border-b border-white/10 pb-2 text-xs font-bold uppercase tracking-wider"
                    style={{ color: col.color }}
                  >
                    {col.label}
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-white/70"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: col.color }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="pt-12 text-center">
            <h2 className="mb-3 text-2xl font-black text-white sm:text-3xl">
              Ready to own a piece of the ecosystem?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/60">
              Every product in the MagicCraft suite creates demand for $MCRT.
              Buy it, stake it, use it for Akyn AI videos, game lobbies, and ads
              — and grow with the ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary px-8 py-3 text-sm font-bold"
              >
                Swap on PancakeSwap
              </a>
              <a
                href={METAMASK_SWAP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary px-8 py-3 text-sm font-semibold"
              >
                Open MetaMask
              </a>
              <a
                href={BYBIT_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-[#FFB649]/30 bg-[#FFB649]/10 px-8 py-3 text-sm font-bold text-[#FFDD8A] transition-all hover:bg-[#FFB649]/15"
              >
                Buy on Bybit
              </a>
              <a
                href="https://akyn.pro"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary px-8 py-3 text-sm font-semibold"
              >
                Try Akyn Free
              </a>
              <a
                href="https://lobby.magiccraft.io"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                Play the Game
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-lg text-xs text-white/30">
              $MCRT is a utility token. Nothing in this whitepaper constitutes
              financial advice. Crypto assets are volatile. Only invest what you
              can afford to lose.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
