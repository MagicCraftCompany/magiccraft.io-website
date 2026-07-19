import {
  BadgeDollarSign,
  CheckCircle2,
  Copy,
  ExternalLink,
  Repeat2,
  Wallet,
} from 'lucide-react'
import { useMcrtPrice } from '@/lib/useMcrtPrice'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { BYBIT_URL, MCRT_CONTRACT, PANCAKESWAP_URL } from '@/constants'
import { trackCta, type CtaEvent } from '@/lib/analytics'
import { openMetaMaskMcrt } from '@/lib/gameActions'

type BuyRoute = {
  title: string
  kicker: string
  body: string
  href?: string
  cta: string
  icon: typeof Repeat2
  accent: string
  label: CtaEvent['cta']
  onClick?: () => void
}

function BuyRouteCard({ route }: { route: BuyRoute }) {
  const Icon = route.icon
  const content = (
    <>
      <div className="flex min-w-0 items-start gap-3">
        <span
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border ${route.accent}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
            {route.kicker}
          </p>
          <h3 className="mt-1 text-lg font-black leading-tight text-white">
            {route.title}
          </h3>
        </div>
      </div>
      <p className="text-white/68 mt-3 min-h-[3.25rem] text-sm leading-relaxed">
        {route.body}
      </p>
      <span className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-white text-sm font-black text-[#03082F] transition-all group-hover:bg-[#98FFF9] group-hover:shadow-[0_0_22px_rgba(152,255,249,0.28)]">
        {route.cta}
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </span>
    </>
  )

  const className =
    'group flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/[0.045] p-4 text-left shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.075]'

  if (route.href) {
    return (
      <a
        href={route.href}
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => trackCta({ cta: route.label, location: 'buy_strip' })}
        className={className}
        data-buy-link={route.label}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={route.onClick}
      className={className}
      data-buy-link={route.label}
    >
      {content}
    </button>
  )
}

export default function BuyStrip() {
  const { price, loading, status } = useMcrtPrice(120_000)
  const { copied, copy } = useCopyToClipboard()

  const copyContract = () => {
    trackCta({ cta: 'copy_contract', location: 'buy_strip' })
    copy(MCRT_CONTRACT)
  }

  const hasPrice = !!price
  const isStale = hasPrice && status === 'stale'
  const priceText = hasPrice
    ? `$${price!.usd.toFixed(5)}${price!.usd_24h_change !== undefined ? ` (${price!.usd_24h_change >= 0 ? '+' : ''}${price!.usd_24h_change.toFixed(2)}%)` : ''}${isStale ? ' · cached' : ''}`
    : loading
      ? 'Loading…'
      : 'Price unavailable'

  const buyRoutes: BuyRoute[] = [
    {
      title: 'PancakeSwap',
      kicker: 'DEX swap',
      body: 'Opens BNB Chain with MCRT preselected, so a wallet user can connect and swap straight away.',
      href: PANCAKESWAP_URL,
      cta: 'Swap on PancakeSwap',
      icon: Repeat2,
      accent: 'border-[#98FFF9]/25 bg-[#98FFF9]/10 text-[#98FFF9]',
      label: 'pancakeswap',
    },
    {
      title: 'MetaMask',
      kicker: 'Wallet swap',
      body: 'If MetaMask is detected, asks to switch to BNB Chain and add MCRT. Then opens Swap for you to select and review the assets manually.',
      cta: 'Open MetaMask',
      icon: Wallet,
      accent: 'border-[#FFB649]/30 bg-[#FFB649]/10 text-[#FFB649]',
      label: 'metamask',
      onClick: () => void openMetaMaskMcrt('buy_strip'),
    },
    {
      title: 'Bybit',
      kicker: 'Exchange spot',
      body: 'Opens the MCRT/USDT spot market for users who prefer buying from a Bybit account.',
      href: BYBIT_URL,
      cta: 'Buy on Bybit',
      icon: BadgeDollarSign,
      accent: 'border-[#F7C843]/30 bg-[#F7C843]/10 text-[#F7C843]',
      label: 'bybit',
    },
  ]

  return (
    <section
      id="buy-mcrt"
      className="w-full scroll-mt-24 border-y border-white/10 bg-[#050719]"
    >
      <div className="mx-auto max-w-screen-xl px-3 py-6 sm:px-4 sm:py-8 md:px-6">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.7fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-gradient-to-br from-[#0B0F39] via-[#07122A] to-[#120822] p-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#98FFF9]">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Buy $MCRT
              </div>
              <h2 className="max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                Three clean ways to get MCRT
              </h2>
              <p className="text-white/68 mt-3 max-w-md text-sm leading-relaxed">
                Use the DEX if you already have a wallet, MetaMask if you want
                the wallet-native path, or Bybit if you prefer a spot exchange.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-sm text-white/75">
                <span className="relative flex h-2 w-2">
                  {!isStale && hasPrice && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#98FFF9] opacity-75"></span>
                  )}
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      isStale
                        ? 'bg-amber-300'
                        : hasPrice
                          ? 'bg-[#98FFF9]'
                          : 'bg-slate-400'
                    }`}
                  ></span>
                </span>
                {isStale
                  ? 'Cached price:'
                  : hasPrice
                    ? 'Live price:'
                    : 'Market status:'}{' '}
                <span
                  className={`font-bold ${isStale ? 'text-amber-200' : 'text-[#98FFF9]'}`}
                  title={priceText}
                >
                  {priceText}
                </span>
              </div>
              <button
                onClick={copyContract}
                aria-label={
                  copied
                    ? 'Contract address copied'
                    : 'Copy MCRT contract address'
                }
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.08] px-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.12] sm:w-auto"
              >
                {copied ? (
                  <CheckCircle2
                    className="h-4 w-4 text-[#98FFF9]"
                    aria-hidden="true"
                  />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? 'Contract copied' : 'Copy MCRT contract'}
              </button>
              <p className="break-all font-mono text-[11px] leading-relaxed text-white/60">
                {MCRT_CONTRACT}
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {buyRoutes.map((route) => (
              <BuyRouteCard key={route.title} route={route} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
