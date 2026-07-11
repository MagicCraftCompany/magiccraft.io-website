import { ArrowUpRight, BadgeCheck, Boxes, Code2, Megaphone, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type EcosystemItem = {
  name: string
  status: string
  description: string
  href: string
  icon: LucideIcon
  accent: string
}

const ecosystemItems: EcosystemItem[] = [
  {
    name: 'Marketplace',
    status: 'Live',
    description:
      'Browse eligible character, skin, and game-asset listings connected to the MagicCraft economy.',
    href: 'https://app.magiccraft.io/marketplace/explorer',
    icon: Boxes,
    accent: '#98FFF9',
  },
  {
    name: '$MCRT Game Maker',
    status: 'On Steam',
    description:
      'Create custom MagicCraft maps today while sharing and main-game integration continue to evolve.',
    href: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/',
    icon: Wrench,
    accent: '#B591F2',
  },
  {
    name: 'MCRTPay',
    status: 'Live',
    description:
      'Add $MCRT checkout flows to websites and apps with purpose-built payment infrastructure.',
    href: 'https://mcrtpay.com/',
    icon: Code2,
    accent: '#FFB649',
  },
  {
    name: 'MagicAds',
    status: 'Live',
    description:
      'Run or publish ad campaigns through a network that supports $MCRT as a funding method.',
    href: 'https://magicads.dev/',
    icon: Megaphone,
    accent: '#8EECE6',
  },
]

export default function EcosystemPreviewSection() {
  return (
    <section className="border-y border-white/5 bg-[#05051f] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFB649]">
              Beyond the match
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
              A focused ecosystem, with honest product status.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            The game remains the center. These live and available products
            extend what players, collectors, creators, and builders can do with
            MagicCraft and $MCRT.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2">
          {ecosystemItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex min-h-[230px] flex-col justify-between bg-[#080a2a] p-6 transition hover:bg-[#0c1038] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl border bg-white/[0.04]"
                      style={{ borderColor: `${item.accent}40`, color: item.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{
                        borderColor: `${item.accent}40`,
                        backgroundColor: `${item.accent}12`,
                        color: item.accent,
                      }}
                    >
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/75 transition group-hover:text-[#98FFF9]">
                  Visit product
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
