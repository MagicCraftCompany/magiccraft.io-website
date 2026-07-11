import { ArrowUpRight, Code2, Coins, Network, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Rail = {
  name: string
  status: string
  body: string
  href: string
  cta: string
  accent: string
  icon: LucideIcon
}

const rails: Rail[] = [
  {
    name: 'MCRTPay',
    status: 'Live',
    body: 'A purpose-built $MCRT checkout rail for websites and apps, with direct product documentation and integration paths.',
    href: 'https://mcrtpay.com/',
    cta: 'Open MCRTPay',
    accent: '#10B981',
    icon: Code2,
  },
  {
    name: 'EnvRouter AI',
    status: 'Building',
    body: 'Zero-knowledge secrets management for apps and AI agents, with client-side encryption, policy-based routing and runtime injection.',
    href: 'https://app.envrouter.pro/',
    cta: 'Open EnvRouter',
    accent: '#38BDF8',
    icon: Network,
  },
  {
    name: '$MCRT utility',
    status: 'Optional',
    body: 'A payment and utility option where individual products support it. No wallet is required to explore the AI suite.',
    href: 'https://docs.magiccraft.io/usdmcrt-token/usdmcrt-token-utilities',
    cta: 'Read utility guide',
    accent: '#FFB649',
    icon: Coins,
  },
]

export default function AiInfrastructureSection() {
  return (
    <section className="bg-[#03082f] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B591F2]/25 bg-[#B591F2]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#d8c9ff]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Shared infrastructure
          </div>
          <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
            The rails underneath the products.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Infrastructure supports the suite without becoming the first thing
            every visitor has to understand.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {rails.map((rail) => {
            const Icon = rail.icon
            return (
              <a
                key={rail.name}
                href={rail.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex min-h-[270px] flex-col rounded-[24px] border border-white/10 bg-white/[0.035] p-6 no-underline transition hover:-translate-y-1 hover:bg-white/[0.06] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-black/20"
                    style={{
                      borderColor: `${rail.accent}55`,
                      color: rail.accent,
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em]"
                    style={{
                      borderColor: `${rail.accent}55`,
                      color: rail.accent,
                    }}
                  >
                    {rail.status}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-black text-white">
                  {rail.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-white/70 sm:text-base">
                  {rail.body}
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition group-hover:text-[#98FFF9]">
                  {rail.cta}
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
