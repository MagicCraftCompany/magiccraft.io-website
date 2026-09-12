import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Gem,
  Heart,
  LockKeyhole,
  Megaphone,
  Swords,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackCta, type CtaEvent } from '@/lib/analytics'

type UtilityPath = {
  title: string
  label: string
  description: string
  href: string
  cta: string
  event: CtaEvent['cta']
  icon: typeof Swords
  external?: boolean
}

const utilityPaths: UtilityPath[] = [
  {
    title: 'Compete in eligible matches',
    label: 'Web3 lobbies',
    description:
      'Browse scheduled matches, regions and current entry or reward rules before opening the official lobby.',
    href: '/lobbies',
    cta: 'Browse matches',
    event: 'browse_lobbies',
    icon: Swords,
  },
  {
    title: 'Collect and trade game assets',
    label: 'Marketplace',
    description:
      'Browse supported characters, skins and items publicly. A compatible wallet is only needed to transact.',
    href: 'https://app.magiccraft.io/marketplace/explorer',
    cta: 'Browse marketplace',
    event: 'browse_marketplace',
    icon: Gem,
    external: true,
  },
  {
    title: 'Review current pledging pools',
    label: 'Pledging',
    description:
      'Check the available terms, displayed rates and lock conditions before connecting a wallet or committing tokens.',
    href: 'https://app.magiccraft.io/pledging',
    cta: 'Review current pools',
    event: 'review_pledging',
    icon: LockKeyhole,
    external: true,
  },
]

const productPaths: UtilityPath[] = [
  {
    title: 'Fund an ad campaign',
    label: 'MagicAds',
    description:
      'Compare campaign plans and payment options, including MCRT, before adding a budget.',
    href: 'https://magicads.dev/pricing',
    cta: 'See campaign options',
    event: 'open_ai_product',
    icon: Megaphone,
  },
  {
    title: 'Explore a wellness plan',
    label: 'DocAI',
    description:
      'Compare educational wellness plans and review the MCRT payment option offered on the pricing page.',
    href: 'https://docai.live/pricing',
    cta: 'Compare DocAI plans',
    event: 'open_ai_product',
    icon: Heart,
  },
  {
    title: 'Accept MCRT on your site',
    label: 'MCRTPay',
    description:
      'Explore the checkout widget and BNB Chain payment verification in the integration guide.',
    href: 'https://mcrtpay.com/docs',
    cta: 'Read the integration guide',
    event: 'open_mcrt_integration',
    icon: Code2,
  },
]

export default function McrtUtilityGuide() {
  return (
    <section
      id="mcrt-utility"
      aria-labelledby="mcrt-utility-heading"
      className="scroll-mt-24 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(152,255,249,0.12),transparent_35%),linear-gradient(145deg,#0B0F39,#080719_60%,#160B25)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10"
    >
      <div className="max-w-3xl">
        <p className="mb-0 text-xs font-bold uppercase tracking-[0.16em] text-[#98FFF9]">
          Start with utility
        </p>
        <h2
          id="mcrt-utility-heading"
          className="mb-0 mt-3 font-sans text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl"
        >
          Choose what you want to do with MCRT.
        </h2>
        <p className="mb-0 mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Check the live product rules first. If the function fits what you want
          to do, use the verified contract and compare the available access
          routes below.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {utilityPaths.map((path, index) => {
          const Icon = path.icon
          const content = (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#98FFF9]/20 bg-[#98FFF9]/10 text-[#98FFF9]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-white/45">
                  0{index + 1}
                </span>
              </div>
              <p className="mb-0 mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F5CF86]">
                {path.label}
              </p>
              <h3 className="mb-0 mt-2 font-sans text-xl font-semibold leading-tight text-white">
                {path.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-6 text-white/65">
                {path.description}
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#98FFF9]">
                {path.cta}
                {path.external ? (
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </span>
            </>
          )
          const className =
            'group flex min-h-[290px] flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-5 no-underline transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[#98FFF9]/30 hover:bg-white/[0.07] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] motion-reduce:transform-none motion-reduce:transition-none'
          const onClick = () =>
            trackCta({
              cta: path.event,
              location: 'mcrt_utility_guide',
              label: path.label.toLowerCase(),
            })

          return path.external ? (
            <a
              key={path.label}
              href={path.href}
              target="_blank"
              rel="noreferrer noopener"
              className={className}
              onClick={onClick}
            >
              {content}
            </a>
          ) : (
            <Link
              key={path.label}
              to={path.href}
              className={className}
              onClick={onClick}
            >
              {content}
            </Link>
          )
        })}
      </div>

      <div className="mt-9 border-t border-white/15 pt-8">
        <h3 className="font-sans text-2xl font-semibold tracking-tight">
          For products and builders.
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">
          Explore the published MCRT options below. Each product has its own
          account, plans and payment terms. Buying MCRT does not activate a
          plan.
        </p>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {productPaths.map((path) => {
            const Icon = path.icon
            return (
              <a
                key={path.label}
                href={path.href}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() =>
                  trackCta({
                    cta: path.event,
                    location: 'mcrt_product_guide',
                    label: path.label.toLowerCase(),
                  })
                }
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 no-underline transition-colors hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] motion-reduce:transition-none"
              >
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#98FFF9]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {path.label}
                </p>
                <h4 className="mt-4 font-sans text-xl font-semibold">
                  {path.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/65">
                  {path.description}
                </p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#98FFF9]">
                  {path.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="sr-only">
                  Opens a separate product in a new tab.
                </span>
              </a>
            )
          })}
        </div>
        <p className="mt-4 text-xs leading-6 text-white/55">
          Check the selected plan, final quote, network fees and access terms in
          the product before paying. DocAI provides educational guidance, not
          diagnosis or emergency care.
        </p>
      </div>

      <p className="mb-0 mt-6 text-xs leading-6 text-white/55">
        Utility, eligibility and rewards vary by product and may change. The
        free MagicCraft game does not require MCRT, an NFT or a wallet.
      </p>
    </section>
  )
}
