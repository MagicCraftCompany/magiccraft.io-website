import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { StatRow, StatsCard } from '@/components/ui/stats'
import { useGameStats, type GameStatsStatus } from '@/lib/useGameStats'
import { Helmet } from 'react-helmet-async'

function formatMcrt(value: number | null | undefined): string {
  if (value === null || value === undefined) return '—'
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M MCRT`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K MCRT`
  return `${value.toLocaleString()} MCRT`
}

function formatUsd(value: number | null | undefined, digits = 5): string {
  return value === null || value === undefined
    ? '—'
    : `$${value.toFixed(digits)}`
}

function formatPriceChange(change: number | null | undefined): string {
  if (change === null || change === undefined) return '—'
  return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`
}

const STATUS_VIEW: Record<GameStatsStatus, { label: string; dot: string }> = {
  loading: {
    label: 'Updating stats',
    dot: 'bg-sky-400',
  },
  live: {
    label: 'Live data',
    dot: 'bg-emerald-400',
  },
  partial: {
    label: 'Latest available data',
    dot: 'bg-amber-400',
  },
  stale: {
    label: 'Recent data',
    dot: 'bg-amber-400',
  },
  offline: {
    label: 'Stats updating',
    dot: 'bg-rose-500',
  },
  unavailable: {
    label: 'Stats updating',
    dot: 'bg-slate-400',
  },
}

export default function Dashboard() {
  const { data, loading, status, refresh } = useGameStats(60_000)
  const view = STATUS_VIEW[status]
  const finishedLobbies = data?.allTime.finishedLobbies ?? null
  const mcrtPledged = data?.allTime.mcrtPledged ?? null
  const totalLobbies = data?.allTime.totalLobbies ?? null
  const totalUsers = data?.allTime.totalUsers ?? null
  const seasonPrize = data?.season.totalPrizeMcrt ?? null
  const seasonName = data?.season.name ?? null
  const seasonActive = data?.season.active ?? null
  const daysRemaining = data?.season.daysRemaining ?? null
  const prizesDistributed = data?.season.prizesDistributed ?? null
  const mcrtPrice = data?.price?.usd ?? null
  const priceChange = data?.price?.change24h ?? null
  const marketCap = data?.price?.marketCap ?? null
  const volume24h = data?.price?.volume24h ?? null
  const winners = data?.allTime.recentWinners ?? []
  const topPlayers = data?.allTime.topPlayers ?? []
  const serverOnline = data?.live.serverOnline ?? null
  const timestamp = data?.ts ?? null

  return (
    <div
      className="min-h-dvh w-full text-white"
      data-testid="stats-dashboard"
      data-status={status}
    >
      <Helmet>
        <title>Game Stats | MagicCraft</title>
        <meta
          name="description"
          content="View current MagicCraft lobby activity, season information and $MCRT market statistics."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://magiccraft.io/stats" />
      </Helmet>
      <Header />

      <div className="relative h-[190px] overflow-hidden sm:h-[230px] md:h-[270px]">
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
          alt="Dashboard banner"
          loading="lazy"
        />
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728036/Image_6_mts4sr.webp"
          className="absolute inset-0 hidden h-full w-full object-cover md:block lg:hidden"
          alt="Dashboard banner"
          loading="lazy"
        />
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728028/Image_5_caa7pl.webp"
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
          alt="Dashboard banner"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#03082f]/20 to-[#03082f]/70">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Game Stats
          </h1>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${view.dot}`} />
            <span className="text-xs uppercase tracking-widest text-white/70">
              {loading && !data ? 'Updating…' : view.label}
            </span>
          </div>
        </div>
      </div>

      <main className="min-h-screen p-4 sm:p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Current game statistics
              </h2>
              {timestamp && (
                <span className="text-xs text-white/60">
                  Updated {new Date(timestamp).toLocaleString()}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => void refresh()}
              disabled={loading}
              className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs text-white transition-colors hover:bg-white/20 disabled:opacity-50"
            >
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'Total Lobbies',
                value:
                  totalLobbies === null ? '—' : totalLobbies.toLocaleString(),
                sub: 'Live lobby activity',
                color: 'border-violet-500/30',
              },
              {
                label: 'Registered Lobby Users',
                value: totalUsers === null ? '—' : totalUsers.toLocaleString(),
                sub: 'Registered lobby activity',
                color: 'border-emerald-500/30',
              },
              {
                label: 'Finished Lobbies',
                value:
                  finishedLobbies === null
                    ? '—'
                    : finishedLobbies.toLocaleString(),
                sub: 'Completed lobby activity',
                color: 'border-blue-500/30',
              },
              {
                label: 'MCRT Entry Fees',
                value: formatMcrt(mcrtPledged),
                sub: 'Recorded lobby entry fees',
                color: 'border-amber-500/30',
              },
              {
                label: 'MCRT Price',
                value: formatUsd(mcrtPrice),
                sub: 'Current market data',
                color: 'border-cyan-500/30',
              },
              {
                label: 'Season Prize Pool',
                value: formatMcrt(seasonPrize),
                sub: seasonName ?? 'Updates with season data',
                color: 'border-purple-500/30',
              },
            ].map(({ label, value, sub, color }) => (
              <div
                key={label}
                className={`rounded-xl border ${color} bg-white/5 p-5 backdrop-blur-sm`}
              >
                <div className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  {label}
                </div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 text-xs text-white/60">{sub}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <StatsCard title="MCRT TOKEN">
              <StatRow label="Price (USD):" value={formatUsd(mcrtPrice, 6)} />
              <StatRow
                label="24h Change:"
                value={formatPriceChange(priceChange)}
              />
              <StatRow
                label="Market Cap:"
                value={
                  marketCap === null
                    ? '—'
                    : `$${(marketCap / 1_000_000).toFixed(2)}M`
                }
              />
              <StatRow
                label="24h Volume:"
                value={
                  volume24h === null
                    ? '—'
                    : `$${(volume24h / 1_000).toFixed(0)}K`
                }
              />
            </StatsCard>

            <StatsCard
              title={`SEASON${seasonName ? `: ${seasonName.toUpperCase()}` : ''}`}
            >
              <StatRow
                label="Status:"
                value={
                  seasonActive === null
                    ? '—'
                    : seasonActive
                      ? 'Active'
                      : 'Ended'
                }
              />
              <StatRow
                label="Days Remaining:"
                value={
                  daysRemaining === null ? '—' : daysRemaining.toLocaleString()
                }
              />
              <StatRow label="Prize Pool:" value={formatMcrt(seasonPrize)} />
              <StatRow
                label="Prizes Paid Out:"
                value={
                  prizesDistributed === null
                    ? '—'
                    : prizesDistributed
                      ? 'Yes'
                      : 'Pending'
                }
              />
            </StatsCard>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <StatsCard title="LOBBY STATISTICS">
              <StatRow
                label="Total Lobbies:"
                value={
                  totalLobbies === null ? '—' : totalLobbies.toLocaleString()
                }
              />
              <StatRow
                label="Registered Users:"
                value={totalUsers === null ? '—' : totalUsers.toLocaleString()}
              />
              <StatRow
                label="Finished Lobbies:"
                value={
                  finishedLobbies === null
                    ? '—'
                    : finishedLobbies.toLocaleString()
                }
              />
              <StatRow
                label="MCRT Entry Fees:"
                value={formatMcrt(mcrtPledged)}
              />
              <StatRow
                label="Season Activity:"
                value={
                  serverOnline === null
                    ? 'Updates pending'
                    : serverOnline
                      ? 'Online'
                      : 'Offline'
                }
              />
            </StatsCard>

            <StatsCard title="TOP PLAYERS THIS SEASON">
              {topPlayers.length === 0 ? (
                <p className="text-sm text-white/60">
                  Player rankings will appear when season data is available.
                </p>
              ) : (
                topPlayers.map((player, index) => (
                  <StatRow
                    key={player.playerId}
                    label={`#${index + 1} ${player.playerName}`}
                    value={player.score.toLocaleString()}
                  />
                ))
              )}
            </StatsCard>
          </div>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Reported season winners
            </h2>
            {winners.length === 0 ? (
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-sm text-white/60">
                Season winners will appear when results are available.
              </div>
            ) : (
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="space-y-3">
                  {winners.map((winner) => (
                    <div
                      key={`${winner.playerName}-${winner.finalRank}`}
                      className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                    >
                      <span className="font-medium text-white">
                        #{winner.finalRank} {winner.playerName}
                      </span>
                      <span className="font-mono text-sm text-cyan-400">
                        {formatMcrt(winner.prizeAmount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/60">
            Historical charts will appear as time-series data becomes available.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
