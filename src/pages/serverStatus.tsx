import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Activity, BarChart3, ExternalLink, ShieldAlert } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const publicServices = [
  {
    name: 'Game lobby',
    purpose: 'Accounts, matches, Web3 lobbies and rewards',
    href: 'https://lobby.magiccraft.io/',
  },
  {
    name: 'Marketplace',
    purpose: 'Browse supported MagicCraft assets',
    href: 'https://app.magiccraft.io/marketplace/explorer',
  },
  {
    name: 'Leaderboard',
    purpose: 'Current lobby rankings',
    href: 'https://lobby.magiccraft.io/leaderboard',
  },
  {
    name: 'Game statistics',
    purpose: 'Validated lobby totals and current MCRT market data',
    href: '/stats',
    internal: true,
  },
]

export default function Server() {
  return (
    <div className="min-h-dvh w-full bg-[#03082f] text-white">
      <Helmet>
        <title>Service Directory | MagicCraft</title>
        <meta
          name="description"
          content="Open MagicCraft's public lobby, marketplace, leaderboard and statistics services. Public uptime telemetry is not currently available on this site."
        />
        <link rel="canonical" href="https://magiccraft.io/server" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="relative overflow-hidden px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(152,255,249,0.12),transparent_36%),linear-gradient(180deg,#03082F_0%,#020418_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#98FFF9]">
              <Activity className="h-4 w-4" aria-hidden="true" />
              Service directory
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold sm:text-6xl">
              MagicCraft service status
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Public uptime telemetry is not available on this site. That means
              MagicCraft cannot safely label a service operational, degraded or
              down here without an attributable status source.
            </p>
          </div>

          <div
            className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm text-amber-100"
            role="status"
          >
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <p>
              Use the direct service links below to check the current
              user-facing experience. No synthetic uptime, response-time or
              incident-log data is displayed.
            </p>
          </div>

          <section
            aria-label="MagicCraft public services"
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {publicServices.map((service) => {
              const content = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {service.name}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {service.purpose}
                      </p>
                    </div>
                    <ExternalLink
                      className="h-5 w-5 shrink-0 text-[#98FFF9]"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">
                    {service.internal ? 'Source-backed' : 'Not monitored here'}
                  </span>
                </>
              )
              const className =
                'group rounded-2xl border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-0.5 hover:border-[#98FFF9]/35 hover:bg-white/[0.08]'

              return service.internal ? (
                <Link
                  key={service.name}
                  to={service.href}
                  className={className}
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={service.name}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              )
            })}
          </section>

          <div className="mt-8 flex justify-center">
            <Link
              to="/stats"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#98FFF9]/40 hover:text-[#98FFF9]"
            >
              <BarChart3 className="h-4 w-4" aria-hidden="true" />
              View source-backed stats
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
