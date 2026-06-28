import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, BadgeDollarSign, ExternalLink, Gamepad2, Repeat2, Wallet } from 'lucide-react'
import BuyStrip from '@/components/Buy/BuyStrip'
import { BYBIT_URL, MCRT_CONTRACT_CHECKSUM, PANCAKESWAP_URL } from '@/constants'
import { openMetaMaskMcrt } from '@/lib/gameActions'

const LOBBY_URL = 'https://lobby.magiccraft.io/'

const pricingCards = [
  {
    title: 'Buy $MCRT',
    kicker: 'Token access',
    body: 'Get MCRT through the live DEX, wallet, or spot exchange path below. The token powers lobby tickets, rewards, pledging, marketplace assets, and ecosystem payments.',
    cta: 'Swap on PancakeSwap',
    href: PANCAKESWAP_URL,
    icon: Repeat2,
  },
  {
    title: 'Fund the Lobby',
    kicker: 'Game balance',
    body: 'Open the MagicCraft lobby to create an account, fund your wallet, and use MCRT in PvP rooms and reward paths.',
    cta: 'Open MagicCraft Lobby',
    href: LOBBY_URL,
    icon: Gamepad2,
  },
  {
    title: 'Exchange Route',
    kicker: 'Spot market',
    body: 'Use Bybit if you prefer a centralized exchange account before moving MCRT into the game or wallet flow.',
    cta: 'Buy on Bybit',
    href: BYBIT_URL,
    icon: BadgeDollarSign,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-dvh w-full max-w-full bg-[#03082f] text-white">
      <Helmet>
        <title>Pricing and Buy $MCRT | MagicCraft</title>
        <meta
          name="description"
          content="Buy $MCRT and open the MagicCraft lobby. Use PancakeSwap, MetaMask, or Bybit, then use MCRT for PvP lobbies, rewards, and ecosystem payments."
        />
        <link rel="canonical" href="https://magiccraft.io/pricing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/pricing" />
        <meta property="og:title" content="Pricing and Buy $MCRT | MagicCraft" />
        <meta
          property="og:description"
          content="Clear MagicCraft buy paths for $MCRT, the live lobby, and exchange or wallet handoff."
        />
        <meta property="og:image" content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="mx-auto flex w-[94%] max-w-screen-xl flex-col gap-8 py-8 md:py-12">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/90 transition-all hover:-translate-x-1 hover:bg-white/15"
        >
          <ArrowLeft className="h-4 w-4 text-white/70" aria-hidden="true" />
          <span>Back to MagicCraft</span>
        </Link>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#98FFF9]">
              <Wallet className="h-4 w-4" aria-hidden="true" />
              Live purchase paths
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Buy $MCRT and enter the MagicCraft economy.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
              MCRT is the payment and reward token for MagicCraft lobbies,
              pledging, marketplace assets, builder tools, and the wider
              product ecosystem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#98FFF9] px-5 text-sm font-black text-[#03082f] transition hover:bg-white"
              >
                Buy $MCRT
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={LOBBY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.08] px-5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Open Lobby
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
              Contract
            </p>
            <p className="mt-3 break-all font-mono text-sm text-[#98FFF9]">
              {MCRT_CONTRACT_CHECKSUM}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-white transition hover:bg-white/[0.12]"
              >
                PancakeSwap
              </a>
              <button
                type="button"
                onClick={() => void openMetaMaskMcrt('pricing_page')}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-left text-sm font-bold text-white transition hover:bg-white/[0.12]"
              >
                MetaMask
              </button>
              <a
                href={BYBIT_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-white transition hover:bg-white/[0.12]"
              >
                Bybit
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pricingCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex min-h-[260px] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.075]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#98FFF9]/25 bg-[#98FFF9]/10 text-[#98FFF9]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                    {card.kicker}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/68">
                    {card.body}
                  </p>
                </div>
                <span className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white text-sm font-black text-[#03082f] transition group-hover:bg-[#98FFF9]">
                  {card.cta}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            )
          })}
        </section>

        <BuyStrip />
      </main>
    </div>
  )
}
