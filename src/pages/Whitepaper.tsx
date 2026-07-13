import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Gamepad2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import {
  AI_PRODUCTS,
  AI_PRODUCTS_LAST_VERIFIED,
  type AiProductStatus,
} from '@/data/aiProducts'
import { BYBIT_URL, MCRT_CONTRACT_CHECKSUM, PANCAKESWAP_URL } from '@/constants'
import { openGameByDevice } from '@/lib/gameActions'

const WHITEPAPER_VERSION = '3.2'
const VERIFIED_DATE = '13 July 2026'

const printStyles = [
  '@media print {',
  '  header, footer, [data-whitepaper-actions] { display: none !important; }',
  '  body { background: #fff !important; color: #111 !important; }',
  '  main, section, article { color: #111 !important; }',
  '  a { color: inherit !important; text-decoration: none !important; }',
  '  [data-whitepaper-card] { border: 1px solid #bbb !important; background: #fff !important; }',
  '  section { break-inside: avoid; }',
  '}',
].join('\n')

type Status =
  | AiProductStatus
  | 'Beta'
  | 'Degraded'
  | 'Partial data'
  | 'Planned'
  | 'Unavailable'
  | 'Program'
  | 'Gated'

type Surface = {
  name: string
  status: Status
  purpose: string
  href?: string
  note?: string
}

type PagePurpose = {
  name: string
  path: string
  purpose: string
}

type Source = {
  title: string
  href: string
  supports: string
}

const toc = [
  ['summary', 'Summary'],
  ['ai-products', 'AI products'],
  ['game', 'Game'],
  ['functions', 'Functions'],
  ['mcrt', 'MCRT'],
  ['tokenomics', 'Tokenomics'],
  ['status-policy', 'Status policy'],
  ['sources', 'Sources'],
  ['risk', 'Risk'],
]

const gameSurfaces: Surface[] = [
  {
    name: 'MagicCraft game',
    status: 'Live',
    purpose:
      'Free-to-play action game on iOS, Android and PC with PvP and PvE play.',
    href: '/magiccraft',
  },
  {
    name: 'Web3 Lobbies',
    status: 'Degraded',
    purpose:
      'Optional wallet-connected matches, eligible entry pools and reward handling.',
    href: 'https://lobby.magiccraft.io/',
    note: 'Match browsing works, but the old prize-pool source returns 404 and anonymous wallet preloading reports errors. Displayed pool balances may be fallback values. The base game does not require a wallet.',
  },
  {
    name: 'Marketplace',
    status: 'Live',
    purpose:
      'Browse and transact supported MagicCraft game assets under the marketplace terms.',
    href: 'https://app.magiccraft.io/marketplace/explorer',
    note: 'Browsing is public. Listing, buying and trading require a wallet and were not exercised during verification.',
  },
  {
    name: 'Pledging',
    status: 'Degraded',
    purpose:
      'Lock eligible MCRT for a selected term under the pool rules shown in the product.',
    href: 'https://app.magiccraft.io/pledging',
    note: 'Reward percentages are currently blank and TVL renders as 0 MCRT. Rewards are dynamic and a fixed return is not promised.',
  },
  {
    name: 'Referral program',
    status: 'Gated',
    purpose:
      'Create a referral link and review the eligibility rules for lobby rewards.',
    href: 'https://lobby.magiccraft.io/referral',
    note: 'The public page immediately requires sign-in. Referral creation and rewards were not exercised.',
  },
  {
    name: 'Ecosystem Games',
    status: 'Degraded',
    purpose:
      'Open a browser hub of lightweight games connected to the wider ecosystem.',
    href: 'https://games.magiccraft.io/',
    note: 'The beta hub loads, but login is required and its legal links, footer date and investment copy need correction.',
  },
  {
    name: 'MCRT Game Maker',
    status: 'Live',
    purpose: 'Build and test maps in the free Steam editor.',
    href: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
    note: 'Export, sharing and deeper game integration remain planned.',
  },
  {
    name: 'Heroes',
    status: 'Live',
    purpose: 'Browse the playable hero roster and open character details.',
    href: '/chooseyourhero',
  },
  {
    name: 'Leaderboard',
    status: 'Live',
    purpose: 'Show ranked Web3 lobby results after the current data loads.',
    href: 'https://lobby.magiccraft.io/leaderboard',
    note: 'A fresh delayed check rendered 50 all-time ranking rows.',
  },
  {
    name: 'Game stats',
    status: 'Partial data',
    purpose: 'Show validated lobby totals and current MCRT market data.',
    href: '/stats',
    note: 'Lobby and market totals are live. The legacy GameServer season source times out, so season and player values remain unavailable.',
  },
  {
    name: 'Rent testnet',
    status: 'Unavailable',
    purpose: 'Intended to test asset-rental workflows.',
    note: 'Hidden from navigation while the external DNS configuration is broken.',
  },
]

const sitePages: PagePurpose[] = [
  {
    name: 'AI Suite Overview',
    path: '/#ai-products',
    purpose: 'Compare the verified AI products and open the right service.',
  },
  {
    name: 'Game Overview',
    path: '/magiccraft',
    purpose: 'Understand the game, current PvP/PvE direction and platforms.',
  },
  {
    name: 'Careers',
    path: '/careers',
    purpose: 'Review role types and use the published application route.',
  },
  {
    name: 'Guilds',
    path: '/guilds',
    purpose: 'Find community, competition and guild participation links.',
  },
  {
    name: 'FAQ and support',
    path: '/faq',
    purpose: 'Search common game, account and Web3 questions.',
  },
  {
    name: 'News',
    path: '/news',
    purpose: 'Read product updates, patch notes and announcements.',
  },
  {
    name: 'Build on MagicCraft',
    path: '/build-on-magiccraft',
    purpose: 'Review creator tools, assets and the application path.',
  },
  {
    name: 'Grants',
    path: '/grants',
    purpose: 'Submit an existing build for ecosystem funding review.',
  },
  {
    name: 'Bounties',
    path: '/bounties',
    purpose:
      'Browse scoped community tasks and use the published application email.',
  },
]

const allocations = [
  ['Ecosystem growth and gaming', '43.5%'],
  ['Team', '15%'],
  ['Pledging', '12%'],
  ['Reserve', '9%'],
  ['Private allocation', '6%'],
  ['Liquidity', '6%'],
  ['Advisors', '5%'],
  ['Public allocation', '3.5%'],
]

const sources: Source[] = [
  {
    title: 'MagicCraft product offerings',
    href: 'https://docs.magiccraft.io/executive-summary/product-offerings-magiccraft-games',
    supports: 'Game and ecosystem product scope',
  },
  {
    title: 'MagicCraft game modes',
    href: 'https://docs.magiccraft.io/magiccraft-game-pvp-moba/game-modes',
    supports: 'PvP mode definitions',
  },
  {
    title: 'MagicCraft App Store listing',
    href: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
    supports: 'Current PvP and PvE product description',
  },
  {
    title: 'Web3 user guide',
    href: 'https://docs.magiccraft.io/web3-user-guide',
    supports: 'Optional Web3 functions and supported assets',
  },
  {
    title: 'Web3 Lobbies',
    href: 'https://docs.magiccraft.io/magiccraft-web3-integration-system/web3-lobby',
    supports: 'Lobby purpose and match flow',
  },
  {
    title: 'NFT Marketplace',
    href: 'https://docs.magiccraft.io/nft-collections/nft-marketplace',
    supports: 'Marketplace purpose',
  },
  {
    title: 'Pledging purpose',
    href: 'https://docs.magiccraft.io/pledging/the-purpose',
    supports: 'Locking purpose and term behavior',
  },
  {
    title: 'MCRT reward rules',
    href: 'https://docs.magiccraft.io/pledging/usdmcrt-rewards',
    supports: 'Dynamic reward conditions',
  },
  {
    title: 'MCRT tokenomics',
    href: 'https://docs.magiccraft.io/usdmcrt-token/tokenomics',
    supports: 'Chain, maximum supply, allocation and no-burn policy',
  },
  {
    title: 'Play-to-earn rules',
    href: 'https://docs.magiccraft.io/magiccraft-web3-integration-system/play-to-earn',
    supports: 'Example lobby pool deductions',
  },
  {
    title: 'MagicCraft legal and compliance',
    href: 'https://docs.magiccraft.io/misc/legal-and-compliance',
    supports: 'Token, risk and eligibility limits',
  },
  {
    title: 'MCRT Game Maker on Steam',
    href: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
    supports: 'Editor availability and present scope',
  },
  {
    title: 'Merlin AI',
    href: 'https://merlintheai.com/',
    supports: 'Assistant and connected workflow purpose',
  },
  {
    title: 'Akyn',
    href: 'https://akyn.pro/',
    supports: 'AI film workspace purpose',
  },
  {
    title: 'MagicAds',
    href: 'https://magicads.dev/',
    supports: 'Advertiser and publisher network purpose',
  },
  {
    title: 'MAGAS7',
    href: 'https://magas7.com/',
    supports: 'Early-access agentic marketing purpose',
  },
  {
    title: 'DragonList',
    href: 'https://dragonlist.ai/',
    supports: 'Meeting transcription and action-item purpose',
  },
  {
    title: 'DocAI',
    href: 'https://docai.live/',
    supports: 'Wellness-information purpose',
  },
]

function statusClassName(status: Status) {
  if (status === 'Live') {
    return 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100'
  }
  if (status === 'Early access' || status === 'Beta') {
    return 'border-amber-300/30 bg-amber-300/10 text-amber-100'
  }
  if (status === 'Degraded' || status === 'Partial data') {
    return 'border-orange-300/30 bg-orange-300/10 text-orange-100'
  }
  if (status === 'Gated') {
    return 'border-sky-300/30 bg-sky-300/10 text-sky-100'
  }
  if (status === 'Unavailable') {
    return 'border-rose-300/30 bg-rose-300/10 text-rose-100'
  }
  return 'border-violet-300/30 bg-violet-300/10 text-violet-100'
}

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={
        'rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ' +
        statusClassName(status)
      }
    >
      {status}
    </span>
  )
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20"
    >
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#98FFF9]">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
      <span className="sr-only"> Opens in a new tab.</span>
    </a>
  )
}

export default function Whitepaper() {
  const liveProductCount = AI_PRODUCTS.filter(
    (product) => product.status === 'Live'
  ).length
  const betaProductCount = AI_PRODUCTS.filter(
    (product) => product.status === 'Beta'
  ).length
  const earlyAccessProductCount = AI_PRODUCTS.filter(
    (product) => product.status === 'Early access'
  ).length

  return (
    <div className="min-h-screen bg-[#03082f] text-white">
      <Helmet>
        <title>MagicCraft Whitepaper v{WHITEPAPER_VERSION}</title>
        <meta
          name="description"
          content="A verified guide to the MagicCraft game, Web3 functions, AI products and MCRT utility."
        />
        <style>{printStyles}</style>
      </Helmet>

      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(152,255,249,0.18),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(181,145,242,0.18),transparent_35%)]"
          />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#98FFF9]/30 bg-[#98FFF9]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#98FFF9]">
                  Whitepaper v{WHITEPAPER_VERSION}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/65">
                  Verified {VERIFIED_DATE}
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                The living guide to
                <span className="block bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">
                  MagicCraft products
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                What each game, Web3 function and AI product is for, what is
                working now, what is not available, and where MCRT is actually
                used.
              </p>
              <div
                data-whitepaper-actions
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={openGameByDevice}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#98FFF9] px-5 py-3 font-bold text-[#03082f] transition hover:brightness-95"
                >
                  <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                  Play MagicCraft
                </button>
                <Link
                  to="/#ai-products"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                  Explore AI products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div
          data-whitepaper-toc
          className="sticky top-0 z-30 border-b border-white/10 bg-[#03082f]/95 backdrop-blur-xl"
        >
          <nav
            aria-label="Whitepaper sections"
            className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-8 lg:px-10"
          >
            {toc.map(([id, label]) => (
              <a
                key={id}
                href={'#' + id}
                className="min-h-11 shrink-0 rounded-lg px-3 py-3 text-xs font-semibold text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Section
            id="summary"
            eyebrow="Executive summary"
            title="One ecosystem, distinct products"
            intro="MagicCraft combines a live game, optional Web3 services, creator programs and a linked portfolio of AI products."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Game first',
                  body: 'Players can use the core game without a wallet. Web3 lobbies, assets and MCRT functions are optional layers.',
                  icon: Gamepad2,
                },
                {
                  title: 'Products stay honest',
                  body: 'The AI products have separate functions, accounts, plans and terms unless a product explicitly says otherwise.',
                  icon: CheckCircle2,
                },
                {
                  title: 'Status is dated',
                  body: 'Live, beta, early-access, planned and unavailable are different states. This guide records the verification date.',
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    data-whitepaper-card
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                  >
                    <Icon
                      className="mb-4 h-6 w-6 text-[#98FFF9]"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.body}
                    </p>
                  </article>
                )
              })}
            </div>
          </Section>

          <Section
            id="ai-products"
            eyebrow="AI portfolio"
            title={`${liveProductCount} live products, ${betaProductCount} beta, ${earlyAccessProductCount} early access`}
            intro={
              'The portfolio was checked against each public product on ' +
              AI_PRODUCTS_LAST_VERIFIED +
              '. Being listed together does not imply shared identity, billing or MCRT support.'
            }
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {AI_PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  data-whitepaper-card
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                  style={{ borderTopColor: product.accent }}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <img
                          src={product.navIcon}
                          alt=""
                          aria-hidden="true"
                          className="h-6 w-6 object-contain"
                        />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{product.name}</h3>
                        <p className="text-xs text-white/45">
                          {product.category}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={product.status} />
                  </div>
                  <p className="flex-1 text-sm leading-6 text-white/65">
                    {product.description}
                  </p>
                  {product.healthNote && (
                    <p className="mt-4 rounded-lg border border-orange-300/20 bg-orange-300/5 p-3 text-xs leading-5 text-orange-100/80">
                      Current limitation: {product.healthNote}
                    </p>
                  )}
                  {product.safetyNote && (
                    <p className="mt-4 rounded-lg border border-amber-300/20 bg-amber-300/5 p-3 text-xs leading-5 text-amber-100/80">
                      {product.safetyNote}
                    </p>
                  )}
                  <ExternalLink
                    href={product.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-[#98FFF9]"
                  >
                    {product.cta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </ExternalLink>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="game"
            eyebrow="MagicCraft game"
            title="Established PvP, expanding PvE"
            intro="The current public game listing describes competitive team play plus a newer PvE system for solo, co-op and adventure play."
          >
            <div className="grid gap-5 lg:grid-cols-2">
              <article
                data-whitepaper-card
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold">PvP modes</h3>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-white/65">
                  <li>
                    <strong className="text-white">Capture the Point:</strong>{' '}
                    teams contest and hold map objectives.
                  </li>
                  <li>
                    <strong className="text-white">Escort:</strong> one team
                    advances an objective while the other team defends.
                  </li>
                  <li>
                    <strong className="text-white">Skull Grab:</strong> teams
                    compete to collect and control the objective.
                  </li>
                </ul>
              </article>
              <article
                data-whitepaper-card
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold">PvE direction</h3>
                <p className="mt-5 text-sm leading-6 text-white/65">
                  The current release adds enemy encounters and progression
                  designed for solo play, co-op sessions and adventure-style
                  runs. Availability and content can change with game updates.
                </p>
                <p className="mt-4 rounded-xl border border-[#98FFF9]/20 bg-[#98FFF9]/5 p-4 text-sm leading-6 text-white/70">
                  The standard game is free to play. A wallet is only needed
                  when a player chooses a wallet-connected Web3 function.
                </p>
              </article>
            </div>
          </Section>

          <Section
            id="functions"
            eyebrow="Function map"
            title="What every listed surface is intended to do"
            intro="Unavailable functions are identified here and are not linked from the main navigation until they provide a meaningful result."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {gameSurfaces.map((surface) => {
                const isInternal = surface.href?.startsWith('/')
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-bold text-white">{surface.name}</h3>
                      <StatusBadge status={surface.status} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {surface.purpose}
                    </p>
                    {surface.note && (
                      <p className="mt-3 text-xs leading-5 text-white/45">
                        {surface.note}
                      </p>
                    )}
                  </>
                )

                return (
                  <article
                    key={surface.name}
                    data-whitepaper-card
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    {content}
                    {surface.href && isInternal && (
                      <Link
                        to={surface.href}
                        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#98FFF9]"
                      >
                        Open function
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                    {surface.href && !isInternal && (
                      <ExternalLink
                        href={surface.href}
                        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#98FFF9]"
                      >
                        Open function
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </ExternalLink>
                    )}
                  </article>
                )
              })}
            </div>

            <h3 className="mt-12 text-2xl font-black">Website page purpose</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              {sitePages.map((page, index) => (
                <div
                  key={page.path}
                  className={
                    'grid gap-2 bg-white/[0.03] p-5 sm:grid-cols-[220px_1fr] ' +
                    (index ? 'border-t border-white/10' : '')
                  }
                >
                  <Link
                    to={page.path}
                    className="inline-flex min-h-11 items-center font-bold text-[#98FFF9]"
                  >
                    {page.name}
                  </Link>
                  <p className="text-sm leading-6 text-white/60">
                    {page.purpose}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="mcrt"
            eyebrow="MCRT utility"
            title="Use cases that can be verified"
            intro="MCRT is a BNB Chain utility token used by specific MagicCraft functions. A product is only described as MCRT-enabled when its current public flow or official documentation supports that claim."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Eligible Web3 lobby entries, pools and rewards',
                'Supported marketplace transactions and game assets',
                'Pledging under the current term and reward rules',
                'Eligible referral-program rewards',
                'MagicAds campaign funding where that option is shown',
                'External exchange and wallet transfers on BNB Chain',
              ].map((utility) => (
                <div
                  key={utility}
                  data-whitepaper-card
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#98FFF9]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-white/70">{utility}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5">
              <div className="flex gap-3">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-amber-50/80">
                  This paper does not claim that Merlin, Akyn, MAGAS7,
                  DragonList or DocAI accept MCRT. Their public plans and
                  payment methods are governed by each product.
                </p>
              </div>
            </div>
            <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/60">
              When the Web3 guide describes BTC, ETH, SOL or XRP lobby assets,
              it refers to the supported BNB Chain-pegged versions, not a native
              transfer on each asset's original network.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                BNB Chain contract
              </p>
              <p className="mt-2 break-all font-mono text-sm text-white/80">
                {MCRT_CONTRACT_CHECKSUM}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ExternalLink
                  href={PANCAKESWAP_URL}
                  className="inline-flex min-h-11 items-center rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  PancakeSwap
                </ExternalLink>
                <ExternalLink
                  href={BYBIT_URL}
                  className="inline-flex min-h-11 items-center rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Bybit spot
                </ExternalLink>
              </div>
            </div>
          </Section>

          <Section
            id="tokenomics"
            eyebrow="Published token facts"
            title="10 billion maximum supply, no burn mechanism"
            intro="The percentages below reproduce the allocation published in the official MagicCraft documentation. They are a historical allocation model, not a statement of current circulating supply, treasury balance or market value."
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {allocations.map(([label, value], index) => (
                <div
                  key={label}
                  className={
                    'flex items-center justify-between gap-5 bg-white/[0.03] px-5 py-4 ' +
                    (index ? 'border-t border-white/10' : '')
                  }
                >
                  <span className="text-sm text-white/65">{label}</span>
                  <span className="font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-white/50">
              The published documentation identifies MCRT as a BEP-20 token on
              BNB Chain and states that no burning mechanism is used.
            </p>
          </Section>

          <Section
            id="status-policy"
            eyebrow="Status and roadmap policy"
            title="Evidence before labels"
            intro="This version removes calendar promises and cross-product claims that could not be verified."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                [
                  'Live',
                  'A public product or function returned meaningful, usable content when checked.',
                ],
                [
                  'Beta / early access',
                  'The product is available in a limited, evolving or sign-up-led state.',
                ],
                [
                  'Degraded',
                  'An intended live function is reachable but is not returning its previously working result.',
                ],
                [
                  'Gated',
                  'The public entry point works, but meaningful proof requires sign-in, a wallet, a payment, a submission or another user-approved action.',
                ],
                [
                  'Planned',
                  'A source describes future work, but the function is not represented as complete.',
                ],
                [
                  'Unavailable',
                  'The destination is broken, empty or not useful enough to expose as a working function.',
                ],
              ].map(([label, body]) => (
                <article
                  key={label}
                  data-whitepaper-card
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="font-bold text-white">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/60">
              Product status changes faster than a traditional static paper.
              Future versions should update the verification date, sources and
              status labels together. Shared accounts, billing, wallets or
              rewards must not be implied without a working integration.
            </p>
          </Section>

          <Section
            id="sources"
            eyebrow="Source ledger"
            title="Official pages used for this update"
            intro="Sources were checked alongside the live product surfaces. A source supports the stated purpose; it does not guarantee uninterrupted availability."
          >
            <div className="grid gap-3 md:grid-cols-2">
              {sources.map((source) => (
                <ExternalLink
                  key={source.href}
                  href={source.href}
                  className="group flex min-h-[76px] items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
                >
                  <span>
                    <span className="block text-sm font-bold text-white">
                      {source.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-white/45">
                      {source.supports}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-white/35 transition group-hover:text-[#98FFF9]"
                    aria-hidden="true"
                  />
                </ExternalLink>
              ))}
            </div>
          </Section>

          <Section
            id="risk"
            eyebrow="Risk and eligibility"
            title="Utility is not an investment promise"
            intro="MCRT does not represent ownership, equity, a revenue right or a guaranteed return. Availability and eligibility depend on product terms and jurisdiction."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Token and digital-asset prices can be volatile and total loss is possible.',
                'Wallet use carries smart-contract, network, gas-fee, custody and transaction risks.',
                'Pledging can lock assets for the selected term and rewards can change.',
                'Game pools can include platform or treasury deductions under the current rules.',
                'Third-party stores, exchanges, wallets and networks have separate terms and availability.',
                'Users must follow local law, age rules and the terms shown by each product.',
              ].map((risk) => (
                <div
                  key={risk}
                  data-whitepaper-card
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#B591F2]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-white/65">{risk}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#98FFF9]/20 bg-[#98FFF9]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-white">Need product help?</h3>
                <p className="mt-1 text-sm text-white/55">
                  Use the FAQ for account, game and Web3 support routes.
                </p>
              </div>
              <Link
                to="/faq"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#98FFF9] px-5 py-3 text-sm font-bold text-[#03082f]"
              >
                Open FAQ
              </Link>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
