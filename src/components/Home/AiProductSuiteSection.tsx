import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  HeartPulse,
  ListChecks,
  Megaphone,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type AiProduct = {
  name: string
  category: string
  status: 'Live' | 'Early access'
  description: string
  href: string
  cta: string
  accent: string
  icon: LucideIcon
}

const products: AiProduct[] = [
  {
    name: 'Merlin AI',
    category: 'Assistant and operations',
    status: 'Live',
    description:
      'Work across chat, voice, images, translation and connected messaging workflows with a multi-persona AI assistant.',
    href: 'https://merlintheai.com/',
    cta: 'Open Merlin',
    accent: '#98FFF9',
    icon: Bot,
  },
  {
    name: 'Akyn',
    category: 'AI film production',
    status: 'Live',
    description:
      'Move from script and reusable characters to generated scenes and finished video inside one creator workspace.',
    href: 'https://akyn.pro/',
    cta: 'Open Akyn',
    accent: '#B591F2',
    icon: Clapperboard,
  },
  {
    name: 'MagicAds',
    category: 'Advertising network',
    status: 'Live',
    description:
      'Launch campaigns or connect publisher inventory through an AI-assisted advertising network built for the wider portfolio.',
    href: 'https://magicads.dev/',
    cta: 'Open MagicAds',
    accent: '#FFB649',
    icon: Megaphone,
  },
  {
    name: 'MAGAS7',
    category: 'Agentic marketing',
    status: 'Early access',
    description:
      'Coordinate specialist agents across research, writing, design, scheduling, publishing and campaign analysis.',
    href: 'https://magas7.com/',
    cta: 'Open MAGAS7',
    accent: '#B1FF5A',
    icon: Sparkles,
  },
  {
    name: 'DragonList',
    category: 'Meeting productivity',
    status: 'Live',
    description:
      'Turn meeting action items into assigned, trackable tasks so decisions leave the room with an owner.',
    href: 'https://dragonlist.ai/',
    cta: 'Open DragonList',
    accent: '#60A5FA',
    icon: ListChecks,
  },
  {
    name: 'DocAI',
    category: 'Wellness information',
    status: 'Live',
    description:
      'Explore health questions, uploaded reports and next-step comparisons with private AI assistance. Not medical advice.',
    href: 'https://docai.live/',
    cta: 'Open DocAI',
    accent: '#10B981',
    icon: HeartPulse,
  },
]

export default function AiProductSuiteSection() {
  return (
    <section
      id="ai-products"
      className="scroll-mt-24 bg-[#03082f] px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#98FFF9]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              The MagicCraft AI Suite
            </div>
            <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Start with the job you want done.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Each product has its own focused workflow and direct destination.
              The suite is a portfolio, not a promise of shared accounts or
              billing that does not yet exist.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Public product links checked 11 July 2026
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-6 no-underline transition hover:-translate-y-1 hover:bg-white/[0.06] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:p-7"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ backgroundColor: product.accent }}
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-black/20"
                    style={{
                      borderColor: `${product.accent}55`,
                      color: product.accent,
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em]"
                    style={{
                      borderColor: `${product.accent}55`,
                      color: product.accent,
                      backgroundColor: `${product.accent}14`,
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <p
                  className="mt-7 text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: product.accent }}
                >
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-white/70 sm:text-base">
                  {product.description}
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition group-hover:text-[#98FFF9]">
                  {product.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
