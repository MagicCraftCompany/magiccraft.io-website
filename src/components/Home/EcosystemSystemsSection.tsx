import {
  ArrowUpRight,
  AlertTriangle,
  BadgeCheck,
  Blocks,
  Boxes,
  Clock3,
  ExternalLink as ExternalLinkIcon,
  Gamepad2,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  ECOSYSTEM_SYSTEM_GROUPS,
  ECOSYSTEM_SYSTEMS_LAST_VERIFIED,
  type EcosystemSystemGroupId,
  type EcosystemSystemStatus,
} from '@/data/ecosystemSystems'

const GROUP_ICONS: Record<EcosystemSystemGroupId, LucideIcon> = {
  'game-services': Gamepad2,
  web3: Boxes,
  builders: Blocks,
}

const STATUS_STYLES: Record<EcosystemSystemStatus, string> = {
  Public: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200',
  'Partial data': 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100',
  Degraded: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
  'On Steam': 'border-violet-300/25 bg-violet-300/10 text-violet-100',
  Building: 'border-sky-300/25 bg-sky-300/10 text-sky-100',
  Optional: 'border-white/15 bg-white/5 text-white/65',
}

function StatusIcon({ status }: { status: EcosystemSystemStatus }) {
  if (status === 'Degraded') {
    return <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
  }
  if (status === 'Building') {
    return <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
  }
  return <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
}

export default function EcosystemSystemsSection() {
  return (
    <section
      id="systems"
      className="border-y border-white/5 bg-[#05051f] px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB649]/25 bg-[#FFB649]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#FFD18A]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Connected systems
            </div>
            <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Every system has a job, a status and a direct path.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Game services, optional Web3 functions and builder infrastructure
              are grouped by purpose. Public reachability is not treated as
              proof that a wallet, payment or authenticated workflow completed.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Public surfaces checked {ECOSYSTEM_SYSTEMS_LAST_VERIFIED}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ECOSYSTEM_SYSTEM_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.id]
            return (
              <article
                key={group.id}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[#080a2a]"
              >
                <div className="border-b border-white/10 p-6 sm:p-7">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-black/20"
                    style={{
                      borderColor: `${group.accent}55`,
                      color: group.accent,
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p
                    className="mt-5 text-xs font-black uppercase tracking-[0.17em]"
                    style={{ color: group.accent }}
                  >
                    {group.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {group.description}
                  </p>
                </div>

                <div className="divide-y divide-white/[0.08]">
                  {group.systems.map((system) => {
                    const isInternal = system.href.startsWith('/')
                    const content = (
                      <>
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-black text-white">
                            {system.name}
                          </h4>
                          <span
                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${STATUS_STYLES[system.status]}`}
                          >
                            <StatusIcon status={system.status} />
                            {system.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                          {system.purpose}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-white/45">
                          {system.note}
                        </p>
                        <span className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-[#98FFF9]">
                          {system.cta}
                          {isInternal ? (
                            <ArrowUpRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          ) : (
                            <ExternalLinkIcon
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </>
                    )

                    return isInternal ? (
                      <Link
                        key={system.id}
                        to={system.href}
                        className="block p-5 no-underline transition hover:bg-white/[0.04] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#98FFF9] sm:p-6"
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        key={system.id}
                        href={system.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block p-5 no-underline transition hover:bg-white/[0.04] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#98FFF9] sm:p-6"
                      >
                        {content}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
