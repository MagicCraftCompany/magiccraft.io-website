import {
  ArrowUpRight,
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
  type EcosystemSystemGroupId,
  type EcosystemSystemStatus,
} from '@/data/ecosystemSystems'
import { homeSurfaceClass } from './homeStyles'
import HomeSectionIntro from './ui/HomeSectionIntro'

const GROUP_ICONS: Record<EcosystemSystemGroupId, LucideIcon> = {
  'game-services': Gamepad2,
  web3: Boxes,
  builders: Blocks,
}

const STATUS_STYLES: Record<EcosystemSystemStatus, string> = {
  Live: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200',
  'Live data': 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100',
  'On Steam': 'border-violet-300/25 bg-violet-300/10 text-violet-100',
  'In development': 'border-sky-300/25 bg-sky-300/10 text-sky-100',
  Optional: 'border-white/15 bg-white/5 text-white/65',
  Guide: 'border-violet-300/25 bg-violet-300/10 text-violet-100',
}

function StatusIcon({ status }: { status: EcosystemSystemStatus }) {
  if (status === 'In development') {
    return <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
  }
  return <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
}

export default function EcosystemSystemsSection() {
  return (
    <section
      id="systems"
      aria-labelledby="systems-heading"
      className="mc-home-section border-y border-white/5 bg-[#05051f] px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <HomeSectionIntro
          icon={ShieldCheck}
          eyebrow="Connected systems"
          title="Every system has a clear job and a direct path."
          description="Move from live game activity to optional Web3 tools and creator infrastructure. Each card explains what the system is for and where to begin."
          accent="#FFD18A"
          headingId="systems-heading"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ECOSYSTEM_SYSTEM_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.id]
            return (
              <article
                key={group.id}
                className={`${homeSurfaceClass} overflow-hidden rounded-[28px] bg-[#080a2a]`}
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
                    className="mt-5 text-xs font-semibold uppercase tracking-[0.17em]"
                    style={{ color: group.accent }}
                  >
                    {group.eyebrow}
                  </p>
                  <h3 className="mt-2 font-sans text-2xl font-semibold leading-tight tracking-[-0.025em] text-white">
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
                          <h4 className="font-sans font-semibold text-white">
                            {system.name}
                          </h4>
                          <span
                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${STATUS_STYLES[system.status]}`}
                          >
                            <StatusIcon status={system.status} />
                            {system.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                          {system.purpose}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-white/55">
                          {system.note}
                        </p>
                        <span className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#98FFF9]">
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
                        className="block p-5 no-underline transition-colors duration-200 hover:bg-white/[0.04] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#98FFF9] motion-reduce:transition-none sm:p-6"
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        key={system.id}
                        href={system.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block p-5 no-underline transition-colors duration-200 hover:bg-white/[0.04] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#98FFF9] motion-reduce:transition-none sm:p-6"
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
