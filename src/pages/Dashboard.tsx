import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { StatRow, StatsCard } from '@/components/ui/stats'
import {
  useGameStats,
  type GameStatsSourceStatus,
  type GameStatsStatus,
} from '@/lib/useGameStats'
import { Helmet } from 'react-helmet-async'

function formatMcrt(value: number | null | undefined): string {
  if (value === null || value === undefined) return 'Unavailable'
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M MCRT`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K MCRT`
  return `${value.toLocaleString()} MCRT`
}

function formatUsd(value: number | null | undefined, digits = 5): string {
  return value === null || value === undefined
    ? 'Unavailable'
    : `$${value.toFixed(digits)}`
}

function formatPriceChange(change: number | null | undefined): string {
  if (change === null || change === undefined) return 'Unavailable'
  return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`
}

function formatSource(status: GameStatsSourceStatus | undefined): string {
  if (status === 'live') return 'Live'
  if (status === 'offline') return 'Offline'
  return 'Unavailable'
}

const STATUS_VIEW: Record<
  GameStatsStatus,
  { label: string; dot: string; panel: string; message: string }
> = {
  loading: {
    label: 'Checking sources',
    dot: 'bg-sky-400',
    panel: 'border-sky-400/20 bg-sky-400/10 text-sky-100',
    message: 'Checking the game server and market source.',
  },
  live: {
    label: 'Live verified data',
    dot: 'bg-emerald-400',
    panel: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100',
    message: 'All displayed values came from the current source responses.',
  },
  partial: {
    label: 'Partial live data',
    dot: 'bg-amber-400',
    panel: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
    message: 'At least one source is unavailable. Missing fields remain blank.',
  },
  stale: {
    label: 'Last verified data',
    dot: 'bg-amber-400',
    panel: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
    message: 'The latest refresh failed or returned an old cached response.',
  },
  offline: {
    label: 'Game server offline',
    dot: 'bg-rose-500',
    panel: 'border-rose-400/20 bg-rose-400/10 text-rose-100',
    message:
      'The game server returned an offline response. No totals are estimated.',
  },
  unavailable: {
    label: 'Data unavailable',
    dot: 'bg-slate-400',
    panel: 'border-white/10 bg-white/5 text-white/70',
    message: 'No current or previously verified response is available.',
  },
}

export default function Dashboard() {
  const { data, loading, error, status, refresh } = useGameStats(60_000)
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
  const gameServerSource = data?.meta?.sources.gameServer.status
  const lobbySource = data?.meta?.sources.lobby?.status
  const marketSource = data?.meta?.sources.market.status

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
          content="View source-backed MagicCraft game-server and $MCRT market statistics. Unavailable values are never estimated."
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
              {loading && !data ? 'Checking sources…' : view.label}
            </span>
          </div>
        </div>
      </div>

      <main className="min-h-screen p-4 sm:p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Source-backed statistics
              </h2>
              {timestamp && (
                <span className="text-xs text-white/60">
                  {status === 'stale' ? 'Last verified response' : 'Generated'}{' '}
                  {new Date(timestamp).toLocaleString()}
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

          <div
            className={`rounded-xl border px-4 py-3 text-sm ${view.panel}`}
            role="status"
            aria-live="polite"
          >
            {view.message}
            {error && status === 'stale' ? ` Refresh error: ${error}.` : ''}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-widest text-white/60">
                Season source
              </div>
              <div className="mt-1 text-lg font-bold text-white">
                {formatSource(gameServerSource)}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-widest text-white/60">
                Lobby stats source
              </div>
              <div className="mt-1 text-lg font-bold text-white">
                {formatSource(lobbySource)}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-widest text-white/60">
                Market source
              </div>
              <div className="mt-1 text-lg font-bold text-white">
                {formatSource(marketSource)}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'Total Lobbies',
                value:
                  totalLobbies === null
                    ? 'Unavailable'
                    : totalLobbies.toLocaleString(),
                sub: 'Reported by lobby API',
                color: 'border-violet-500/30',
              },
              {
                label: 'Registered Lobby Users',
                value:
                  totalUsers === null
                    ? 'Unavailable'
                    : totalUsers.toLocaleString(),
                sub: 'Reported by lobby API',
                color: 'border-emerald-500/30',
              },
              {
                label: 'Finished Lobbies',
                value:
                  finishedLobbies === null
                    ? 'Unavailable'
                    : finishedLobbies.toLocaleString(),
                sub: 'Reported by lobby API',
                color: 'border-blue-500/30',
              },
              {
                label: 'MCRT Entry Fees',
                value: formatMcrt(mcrtPledged),
                sub: 'Recorded by lobby API',
                color: 'border-amber-500/30',
              },
              {
                label: 'MCRT Price',
                value: formatUsd(mcrtPrice),
                sub: 'Market source',
                color: 'border-cyan-500/30',
              },
              {
                label: 'Season Prize Pool',
                value: formatMcrt(seasonPrize),
                sub: seasonName ?? 'Season unavailable',
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
                    ? 'Unavailable'
                    : `$${(marketCap / 1_000_000).toFixed(2)}M`
                }
              />
              <StatRow
                label="24h Volume:"
                value={
                  volume24h === null
                    ? 'Unavailable'
                    : `$${(volume24h / 1_000).toFixed(0)}K`
                }
              />
            </StatsCard>

            <StatsCard
              title={`SEASON: ${(seasonName ?? 'UNAVAILABLE').toUpperCase()}`}
            >
              <StatRow
                label="Status:"
                value={
                  seasonActive === null
                    ? 'Unavailable'
                    : seasonActive
                      ? 'Active'
                      : 'Ended'
                }
              />
              <StatRow
                label="Days Remaining:"
                value={
                  daysRemaining === null
                    ? 'Unavailable'
                    : daysRemaining.toLocaleString()
                }
              />
              <StatRow label="Prize Pool:" value={formatMcrt(seasonPrize)} />
              <StatRow
                label="Prizes Paid Out:"
                value={
                  prizesDistributed === null
                    ? 'Unavailable'
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
                  totalLobbies === null
                    ? 'Unavailable'
                    : totalLobbies.toLocaleString()
                }
              />
              <StatRow
                label="Registered Users:"
                value={
                  totalUsers === null
                    ? 'Unavailable'
                    : totalUsers.toLocaleString()
                }
              />
              <StatRow
                label="Finished Lobbies:"
                value={
                  finishedLobbies === null
                    ? 'Unavailable'
                    : finishedLobbies.toLocaleString()
                }
              />
              <StatRow
                label="MCRT Entry Fees:"
                value={formatMcrt(mcrtPledged)}
              />
              <StatRow
                label="Season Source Status:"
                value={
                  serverOnline === null
                    ? 'Unavailable'
                    : serverOnline
                      ? 'Online'
                      : 'Offline'
                }
              />
            </StatsCard>

            <StatsCard title="TOP PLAYERS THIS SEASON">
              {topPlayers.length === 0 ? (
                <p className="text-sm text-white/60">
                  No verified player rows are available.
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
                No verified winner rows are available.
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
            Historical charts are hidden until a verified time-series source is
            connected. This dashboard does not synthesize or estimate trends.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
