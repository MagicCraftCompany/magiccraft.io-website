import { Helmet } from 'react-helmet-async'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const printStyles = `
@media print {
  header, footer, nav, [data-mobile-bottom-bar], .fixed { display: none !important; }
  body { background: #fff !important; color: #000 !important; }
  a { color: inherit !important; text-decoration: none !important; }
  .card-glass { border: 1px solid #ccc !important; background: #f9f9f9 !important; }
  section { page-break-inside: avoid; }
}`

const MCRT_CONTRACT = '0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f'

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
      'Premium plan upgrades paid in $MCRT',
      'Cross-product $MCRT payment gateway',
      'AI image & video generation credits',
      'Investment tool access',
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
      '24/7 AI wellness assistant with personalized health guidance, symptom tracking, and daily check-ins. Subscription paid in $MCRT for premium access.',
    mcrtUse: [
      'Premium wellness subscription in $MCRT',
      'AI health coaching credits',
      'Daily wellness streak rewards',
    ],
  },
  {
    name: 'SocialMM',
    url: 'https://socialmm.ai',
    color: '#B591F2',
    tag: 'LIVE',
    icon: '',
    description:
      'AI-powered social media management: schedule posts, generate content, track analytics, and grow your audience. $MCRT holders get priority scheduling and advanced AI templates.',
    mcrtUse: [
      'Premium account management in $MCRT',
      'AI content generation credits',
      'Analytics dashboard access',
    ],
  },
  {
    name: 'DragonList',
    url: 'https://dragonlist.ai',
    color: '#FF6B6B',
    tag: 'LIVE',
    icon: '',
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
    mcrtDemand: 'Buy pressure — advertisers must acquire $MCRT to run campaigns',
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
    mechanism: 'Premium subscriptions + API calls for image/video gen',
    mcrtDemand: 'Cross-product payment hub — MCRT required for premium tiers',
    color: '#98FFF9',
  },
]

const tokenomicsRows = [
  { category: 'Ecosystem Rewards', percent: '35%', description: 'PvP prizes, Game Maker revenue share, creator bounties, prediction market payouts' },
  { category: 'Treasury & Liquidity', percent: '20%', description: 'DEX/CEX liquidity provision, reserve for protocol operations and partnerships' },
  { category: 'Team & Advisors', percent: '15%', description: 'Vested over 3 years with 12-month cliff, aligned with long-term project success' },
  { category: 'Private Sale & Seed', percent: '15%', description: 'Early institutional and community supporters, vested 18 months' },
  { category: 'Public Sale', percent: '10%', description: 'Bybit IEO and decentralised exchange listings, price discovery' },
  { category: 'Marketing & Growth', percent: '5%', description: 'Community expansion, exchange listings, creator partnerships and bounties' },
]

const flywheelSteps = [
  { n: '01', title: 'Users Buy $MCRT', body: 'Players, creators, and AI users acquire $MCRT via Bybit, PancakeSwap, or credit card to access premium features across the ecosystem.' },
  { n: '02', title: 'Spend in Products', body: 'MCRT is spent on Akyn Premium subscriptions, Polybilities stakes, MagicAds campaigns, game lobbies, and NFT purchases — creating consistent protocol demand.' },
  { n: '03', title: 'Revenue Flows Back', body: 'Platform fees, ad spend, subscription revenue, and marketplace royalties flow into the treasury, funding rewards and buybacks.' },
  { n: '04', title: 'Holders Are Rewarded', body: 'Stakers earn from prize pools, ad revenue, and ecosystem growth. Higher MCRT value incentivises more product use and new user acquisition.' },
  { n: '05', title: 'Ecosystem Expands', body: 'New products (Akyn tiers, AI models, new game modes) launch, each creating new demand vectors for $MCRT and compounding the flywheel.' },
]

const Section = ({ id, title, sub, children }: { id: string; title: string; sub?: string; children: React.ReactNode }) => (
  <section id={id} className="py-12 md:py-16 border-b border-white/5">
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">{title}</h2>
      {sub && <p className="mt-2 text-white/60 text-base max-w-3xl">{sub}</p>}
    </div>
    {children}
  </section>
)

const Tag = ({ label, color }: { label: string; color: string }) => (
  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider border" style={{ color, borderColor: `${color}50`, backgroundColor: `${color}15` }}>
    {label}
  </span>
)

export default function Whitepaper() {
  return (
    <>
      <Helmet>
        <title>MagicCraft Whitepaper v3.0 — $MCRT Token, Akyn AI & Full Ecosystem</title>
        <meta name="description" content="MagicCraft Whitepaper v3.0: $MCRT utility across AI gaming, Akyn AI film studio, Merlin AI, MagicAds, Polybilities and the full ecosystem." />
        <link rel="canonical" href="https://magiccraft.io/whitepaper" />
        <style>{printStyles}</style>
      </Helmet>
      <div className="min-h-screen bg-[#03082f] text-white">
        <Header />

        {/* Hero */}
        <div className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#06103f] via-[#03082f] to-[#03082f]"></div>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(152,255,249,0.12),transparent)]"></div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#98FFF9] animate-pulse"></span>
              Whitepaper v3.0 — Updated April 2026
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">MAGICCRAFT</span>
              <br />
              <span className="text-white/90">WHITEPAPER</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              The $MCRT ecosystem: AI gaming, Akyn AI film studio, MagicAds, Merlin, and more — every product creates a new reason to hold the token.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener"
                className="btn-primary px-6 py-2.5 text-sm font-bold">
                Buy $MCRT on Bybit
              </a>
              <a href="https://lobby.magiccraft.io" target="_blank" rel="noreferrer noopener"
                className="btn-secondary px-6 py-2.5 text-sm font-semibold">
                Play Free Now
              </a>
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-sm font-semibold"
              >
                ↓ Save as PDF
              </button>
            </div>
            <div className="mt-8 inline-flex flex-col items-center gap-1 text-xs text-white/40">
              <span>Contract (BNB Chain)</span>
              <code className="font-mono text-[#98FFF9]/70 text-[11px] break-all">{MCRT_CONTRACT}</code>
            </div>
          </div>
        </div>

        {/* TOC */}
        <div className="sticky top-0 z-30 bg-[#03082f]/95 backdrop-blur border-b border-white/10 hidden md:block">
          <div className="max-w-screen-xl mx-auto px-6">
            <nav className="flex items-center gap-6 overflow-x-auto py-3 text-xs font-medium text-white/50 whitespace-nowrap">
              {['Executive Summary', 'The Vision', 'Products', 'Akyn', '$MCRT Token', 'Monetization', 'Tokenomics', 'Roadmap'].map((t) => (
                <a key={t} href={`#${t.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  className="hover:text-[#98FFF9] transition-colors">{t}</a>
              ))}
            </nav>
          </div>
        </div>

        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-20">

          {/* Executive Summary */}
          <Section id="executive-summary" title="Executive Summary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  MagicCraft ($MCRT) is a multi-product AI and gaming ecosystem where every product — from competitive on-chain gaming to AI film production — routes its premium economy through a single token. Each new product adds a new demand vector; each new user becomes a potential $MCRT buyer.
                </p>
                <p>
                  At the core of our monetization model is the <span className="text-white font-semibold">product flywheel</span>: premium AI features across Akyn, Merlin, MagicAds, and Polybilities accept $MCRT as payment — creating direct, recurring buy pressure that compounds as our product suite grows.
                </p>
                <p>
                  $MCRT is live on Bybit, PancakeSwap, and HTX. It powers 8+ live products across gaming, AI content, prediction markets, and advertising. The token has a fixed maximum supply, deflationary mechanics via fee burns, and ecosystem incentives that reward long-term holders.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Live Products', value: '8+', color: '#98FFF9' },
                  { label: 'Token Holders', value: '17,800+', color: '#B591F2' },
                  { label: 'Downloads', value: '100,000+', color: '#FFB649' },
                  { label: 'Blockchain', value: 'BNB Chain', color: '#98FFF9' },
                  { label: 'Listed On', value: 'Bybit, PancakeSwap, HTX', color: '#B591F2' },
                  { label: 'Whitepaper', value: 'v3.0 · Apr 2026', color: '#FFB649' },
                ].map((stat) => (
                  <div key={stat.label} className="card-glass rounded-xl p-4 border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{stat.label}</div>
                    <div className="text-base font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Vision */}
          <Section id="the-vision" title="The Vision"
            sub="One token. Eight products. One flywheel.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  body: 'Merlin AI acts as the ecosystem\'s AI payment hub: routing $MCRT purchases, managing subscription states, and enabling cross-product identity. One Merlin account connects you to every MagicCraft product.',
                },
              ].map((c) => (
                <div key={c.title} className="card-glass rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Products */}
          <Section id="products" title="The Ecosystem" sub="Every product creates new utility for $MCRT.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {products.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noreferrer noopener"
                  className="card-glass rounded-2xl p-5 border border-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 no-underline hover:no-underline group block">
                  <div className="flex items-start gap-3 mb-3">
                    {p.icon ? (
                      <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/10 bg-black/40 flex items-center justify-center">
                        <img src={p.icon} alt={p.name} className="w-8 h-8 object-contain" loading="lazy" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl flex-shrink-0 ring-1 ring-white/10 bg-white/5 flex items-center justify-center text-lg">🔮</div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white group-hover:text-[#98FFF9] transition-colors">{p.name}</h3>
                        <Tag label={p.tag} color={p.color} />
                      </div>
                      <span className="text-xs text-white/40">{p.url.replace('https://', '')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mb-3">{p.description}</p>
                  <div className="space-y-1">
                    {p.mcrtUse.map((u) => (
                      <div key={u} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }}></span>
                        {u}
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Section>

          {/* Akyn deep-dive */}
          <Section id="akyn" title="Akyn — AI Film Production Suite"
            sub="Write, cast, shoot, and edit viral videos with AI. No crew needed.">
            <div className="rounded-3xl overflow-hidden border border-[#B591F2]/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0835]/90 via-[#0f0824]/95 to-[#03082f]/95"></div>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B591F2] via-[#98FFF9] to-[#B591F2]"></div>
              <div className="relative z-10 p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden ring-1 ring-[#B591F2]/30">
                        <img src="https://akyn.pro/logo.svg" alt="Akyn" className="w-full h-full object-contain p-2 bg-[#120d18]" loading="lazy" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Akyn</h3>
                        <a href="https://akyn.pro" target="_blank" rel="noreferrer noopener" className="text-sm text-[#B591F2]/80 hover:text-[#B591F2]">akyn.pro</a>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Akyn is a full AI film production suite that gives every creator a complete crew: a <span className="text-white font-semibold">Screenwriter</span> that expands a one-line idea into a multi-scene script, a <span className="text-white font-semibold">Production Designer</span> that generates consistent characters and locations, a <span className="text-white font-semibold">Cinematographer</span> that frames and generates motion between shots, and an <span className="text-white font-semibold">Editor</span> that assembles, scores, and exports the final film.
                    </p>
                    <p className="text-white/80 leading-relaxed mb-4">
                      The output: viral dance videos, cinematic social shorts, AI films — exported to TikTok, Instagram Reels, and YouTube Shorts in minutes. Akyn's creator gallery is a live feed of exported videos from real users.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      As part of the MagicCraft ecosystem, Akyn's Premium and Business tiers can be paid with <span className="text-[#B591F2] font-semibold">$MCRT</span>, making every creator who wants HD exports and priority generation a direct $MCRT buyer.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-2">Akyn Plans</h4>
                    {[
                      { plan: 'Standard', price: '$10 / mo', color: '#98FFF9', features: ['Script generation', 'AI character & location assets', 'Video generation', 'Standard exports', 'Email support'] },
                      { plan: 'Premium', price: '$25 / mo', color: '#B591F2', features: ['Everything in Standard', 'Priority generation queue', 'HD exports', 'More video credits', 'Early access to new AI models'] },
                      { plan: 'Business', price: 'Custom', color: '#FFB649', features: ['Everything in Premium', 'Volume credits', 'Team collaboration', 'API access', 'Dedicated support'] },
                    ].map((p) => (
                      <div key={p.plan} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex-shrink-0 text-right w-20">
                          <div className="text-sm font-bold" style={{ color: p.color }}>{p.plan}</div>
                          <div className="text-xs text-white/40">{p.price}</div>
                        </div>
                        <div className="flex-1 flex flex-wrap gap-x-3 gap-y-0.5">
                          {p.features.map((f) => (
                            <span key={f} className="text-xs text-white/60">{f}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#B591F2]/10 to-[#98FFF9]/5 border border-[#B591F2]/20">
                      <div className="text-xs uppercase tracking-wider text-[#B591F2] font-bold mb-1">$MCRT + Akyn</div>
                      <ol className="text-sm text-white/70 space-y-1 list-decimal list-inside">
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
          <Section id="mcrt-token" title="$MCRT Token" sub="The currency that connects every product in the MagicCraft universe.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card-glass rounded-2xl p-6 border border-[#98FFF9]/20">
                <h3 className="text-lg font-bold text-[#98FFF9] mb-4">Token Overview</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Name', value: 'MagicCraft Token' },
                    { label: 'Ticker', value: '$MCRT' },
                    { label: 'Blockchain', value: 'BNB Chain (BEP-20)' },
                    { label: 'Contract', value: `${MCRT_CONTRACT.slice(0, 14)}…${MCRT_CONTRACT.slice(-6)}` },
                    { label: 'Max Supply', value: '10,000,000,000 MCRT' },
                    { label: 'Listed On', value: 'Bybit, PancakeSwap, HTX, Mexc' },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                      <span className="text-white/50">{r.label}</span>
                      <span className="text-white font-medium font-mono text-right max-w-[60%] truncate">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-glass rounded-2xl p-6 border border-[#B591F2]/20">
                <h3 className="text-lg font-bold text-[#B591F2] mb-4">Utility Matrix</h3>
                <div className="space-y-2">
                  {[
                    { product: 'Game Lobbies', use: 'Entry + prizes' },
                    { product: 'Akyn (Premium / Business)', use: 'Subscription + video credits' },
                    { product: 'MagicAds', use: 'Ad spend + publisher payouts' },
                    { product: 'Polybilities', use: 'Stake + prediction rewards' },
                    { product: 'Merlin AI', use: 'Premium upgrades + API credits' },
                    { product: 'NFT Marketplace', use: 'Hero/skin trades' },
                    { product: 'Game Maker', use: 'Map sales + revenue share' },
                    { product: 'DocAI / SocialMM', use: 'Subscription payments' },
                  ].map((r) => (
                    <div key={r.product} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                      <span className="text-white/80 font-medium">{r.product}</span>
                      <span className="text-[#B591F2]/80">{r.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flywheel */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-6">The $MCRT Flywheel</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {flywheelSteps.map((s, i) => (
                  <div key={s.n} className="relative card-glass rounded-2xl p-4 border border-white/10">
                    {i < flywheelSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 z-10">→</div>
                    )}
                    <div className="text-2xl font-black text-white/10 mb-2">{s.n}</div>
                    <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Monetization */}
          <Section id="monetization" title="Monetization & Revenue Flows"
            sub="How every product generates real revenue and creates buy pressure on $MCRT.">
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider">Revenue Source</th>
                    <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider">Mechanism</th>
                    <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider">$MCRT Demand Created</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueStreams.map((r, i) => (
                    <tr key={r.source} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}>
                      <td className="px-5 py-3.5 font-semibold text-white">{r.source}</td>
                      <td className="px-5 py-3.5 text-white/60">{r.mechanism}</td>
                      <td className="px-5 py-3.5 text-white/60">{r.mcrtDemand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Deflationary Pressure', detail: 'A percentage of every platform fee is used to buy and burn $MCRT from the open market, reducing circulating supply over time.' },
                { label: 'Staking & Locking', detail: 'Holders can stake $MCRT to earn share of platform revenue — match fees, ad spend, and subscription revenue — reducing liquid supply and rewarding long-term conviction.' },
                { label: 'Merlin Payment Rail', detail: 'Merlin AI routes all cross-product $MCRT transactions, acting as the ecosystem\'s payment infrastructure layer. Every inter-product transfer flows through Merlin, providing on-chain provenance and fee capture.' },
              ].map((c) => (
                <div key={c.label} className="card-glass rounded-xl p-4 border border-white/10">
                  <h4 className="text-sm font-bold text-white mb-2">{c.label}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Tokenomics */}
          <Section id="tokenomics" title="Tokenomics" sub="Max supply: 10,000,000,000 $MCRT. Fixed cap. No additional minting.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {tokenomicsRows.map((r) => (
                <div key={r.category} className="card-glass rounded-xl p-4 border border-white/10 flex items-start gap-4">
                  <div className="w-14 text-center flex-shrink-0">
                    <span className="text-xl font-black bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">{r.percent}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{r.category}</div>
                    <div className="text-xs text-white/60 leading-relaxed">{r.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Roadmap */}
          <Section id="roadmap" title="Roadmap" sub="What's live and what's coming next.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    'DocAI, SocialMM, DragonList',
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
                <div key={col.label} className="card-glass rounded-2xl p-5 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider mb-4 pb-2 border-b border-white/10" style={{ color: col.color }}>{col.label}</div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: col.color }}></span>
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
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to own a piece of the ecosystem?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Every product in the MagicCraft suite creates demand for $MCRT. Buy it, stake it, use it for Akyn AI videos, game lobbies, and ads — and grow with the ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener"
                className="btn-primary px-8 py-3 font-bold text-sm">
                Buy $MCRT on Bybit
              </a>
              <a href="https://akyn.pro" target="_blank" rel="noreferrer noopener"
                className="btn-secondary px-8 py-3 font-semibold text-sm">
                Try Akyn Free
              </a>
              <a href="https://lobby.magiccraft.io" target="_blank" rel="noreferrer noopener"
                className="px-8 py-3 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-sm font-semibold">
                Play the Game
              </a>
            </div>
            <p className="mt-6 text-xs text-white/30 max-w-lg mx-auto">
              $MCRT is a utility token. Nothing in this whitepaper constitutes financial advice. Crypto assets are volatile. Only invest what you can afford to lose.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
