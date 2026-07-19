import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowLeft, ExternalLink, Wallet } from 'lucide-react'
import BuyStrip from '@/components/Buy/BuyStrip'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { MCRT_CONTRACT_CHECKSUM } from '@/constants'

const LOBBY_URL = 'https://lobby.magiccraft.io/'

export default function Pricing() {
  return (
    <div className="min-h-dvh w-full max-w-full bg-[#03082f] text-white">
      <Helmet>
        <title>Pricing and Buy $MCRT | MagicCraft</title>
        <meta
          name="description"
          content="Open external MCRT routes for PancakeSwap, MetaMask, or Bybit, then review supported MagicCraft Web3 functions and their risks."
        />
        <link rel="canonical" href="https://magiccraft.io/buy-mcrt" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/buy-mcrt" />
        <meta
          property="og:title"
          content="Pricing and Buy $MCRT | MagicCraft"
        />
        <meta
          property="og:description"
          content="Clear MagicCraft buy paths for $MCRT, the live lobby, and exchange or wallet handoff."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
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
              Get MCRT for supported MagicCraft functions.
            </h1>
            <p className="text-white/72 mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              MCRT can be used in eligible lobby entries and rewards, supported
              marketplace transactions, pledging, and referral functions. Each
              product shows its current rules.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#buy-mcrt"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#98FFF9] px-5 text-sm font-black text-[#03082f] transition hover:bg-white"
              >
                Compare buy routes
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
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
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
              Contract
            </p>
            <p className="mt-3 break-all pr-12 font-mono text-sm text-[#98FFF9] sm:pr-0">
              {MCRT_CONTRACT_CHECKSUM}
            </p>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-white/60">
              Verify this BNB Smart Chain contract, then compare the DEX, wallet
              and exchange handoffs below before choosing a route.
            </p>
          </div>
        </section>

        <BuyStrip />

        <section
          aria-label="MCRT route risk notice"
          className="rounded-xl border border-amber-300/20 bg-amber-300/5 p-5 text-sm leading-6 text-amber-50/80"
        >
          PancakeSwap, MetaMask and Bybit are third-party services. MagicCraft
          does not control their availability, quotes, fees, custody, execution
          or regional eligibility. MCRT is a utility token, not an ownership
          right or guaranteed return.
        </section>
      </main>
      <Footer />
    </div>
  )
}
