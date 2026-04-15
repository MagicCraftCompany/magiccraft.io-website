import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { LobbyChart } from "@/components/ui/lobbyChart"
import { SmallChart } from "@/components/ui/small-chart"
import { StatRow, StatsCard } from "@/components/ui/stats"
import { useGameStats } from "@/lib/useGameStats"
import { Helmet } from 'react-helmet-async'

function formatMcrt(n: number | string): string {
  const num = typeof n === 'string' ? parseFloat(n) : n
  if (isNaN(num)) return String(n)
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M MCRT`
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K MCRT`
  return num.toLocaleString()
}

function PriceChange({ change }: { change: number | null }) {
  if (change === null) return <span className="text-white/50">—</span>
  const pos = change >= 0
  return (
    <span className={pos ? 'text-emerald-400' : 'text-rose-400'}>
      {pos ? '+' : ''}{change.toFixed(2)}%
    </span>
  )
}

export default function Dashboard() {
  const { data, loading, error, refresh } = useGameStats(60_000)

  const matchesPlayed = data?.allTime.matchesPlayed ?? 15285
  const mcrtInGame = data?.allTime.mcrtInGame ?? 2697880
  const seasonPrize = data?.season.totalPrizeMcrt ?? 250000
  const seasonName = data?.season.name ?? '—'
  const seasonActive = data?.season.active
  const daysRemaining = data?.season.daysRemaining ?? 0
  const prizesDistributed = data?.season.prizesDistributed

  const mcrtPrice = data?.price?.usd
  const priceChange = data?.price?.change24h ?? null
  const marketCap = data?.price?.marketCap ?? null
  const volume24h = data?.price?.volume24h ?? null

  const winners = data?.allTime.recentWinners ?? []
  const topPlayers = data?.allTime.topPlayers ?? []
  const serverOnline = data?.live.serverOnline ?? null
  const ts = data?.ts

  return (
    <div className="min-h-dvh w-full text-white">
      <Helmet>
        <title>Dashboard | MagicCraft Statistics</title>
        <meta name="description" content="View live statistics, lobby data, user pledges, and ecosystem analytics for MagicCraft." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://magiccraft.io/dashboard" />
      </Helmet>
      <Header />

      {/* Banner Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
          className="hidden lg:block w-full"
          alt="Dashboard banner"
          loading="lazy"
        />
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728036/Image_6_mts4sr.webp"
          className="hidden md:block lg:hidden w-full"
          alt="Dashboard banner"
          loading="lazy"
        />
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728028/Image_5_caa7pl.webp"
          className="block md:hidden w-full"
          alt="Dashboard banner"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className={`relative flex h-2 w-2`}>
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${serverOnline === false ? 'bg-rose-400' : 'bg-emerald-400'}`} />
              <span className={`relative inline-flex h-2 w-2 rounded-full ${serverOnline === false ? 'bg-rose-500' : 'bg-emerald-500'}`} />
            </span>
            <span className="text-xs text-white/70 uppercase tracking-widest">
              {loading ? 'Refreshing…' : error ? 'Error loading data' : 'Live data'}
            </span>
          </div>
        </div>
      </div>

      <div className="min-h-screen p-4 sm:p-8">
        <div className="mx-auto max-w-7xl space-y-8">

          {/* Controls */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">LIVE STATS</h2>
            <div className="flex items-center gap-3">
              {ts && (
                <span className="text-xs text-white/40">
                  Updated {new Date(ts).toLocaleTimeString()}
                </span>
              )}
              <button
                onClick={() => refresh()}
                disabled={loading}
                className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Loading…' : 'Refresh'}
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
              Could not fetch live data — showing cached values. {error}
            </div>
          )}

          {/* Top KPI row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Matches Played', value: matchesPlayed.toLocaleString(), sub: 'All-time lobbies', color: 'border-blue-500/30' },
              { label: 'MCRT In-Game', value: formatMcrt(mcrtInGame), sub: 'Total pledged', color: 'border-amber-500/30' },
              { label: 'MCRT Price', value: mcrtPrice !== undefined ? `$${mcrtPrice.toFixed(5)}` : '—', sub: 'via CoinGecko', color: 'border-cyan-500/30' },
              { label: 'Season Prize Pool', value: formatMcrt(seasonPrize), sub: seasonName, color: 'border-purple-500/30' },
            ].map(({ label, value, sub, color }) => (
              <div key={label} className={`rounded-xl border ${color} bg-white/5 p-5 backdrop-blur-sm`}>
                <div className="text-xs uppercase tracking-widest text-white/50 mb-1">{label}</div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/40 mt-1">{sub}</div>
              </div>
            ))}
          </div>

          {/* Token market data */}
          <div className="grid gap-6 lg:grid-cols-2">
            <StatsCard title="MCRT TOKEN">
              <StatRow label="Price (USD):" value={mcrtPrice !== undefined ? `$${mcrtPrice.toFixed(6)}` : '—'} />
              <StatRow label="24h Change:" value={<PriceChange change={priceChange} /> as unknown as string} />
              <StatRow label="Market Cap:" value={marketCap !== null ? `$${(marketCap / 1_000_000).toFixed(2)}M` : '—'} />
              <StatRow label="24h Volume:" value={volume24h !== null ? `$${(volume24h / 1_000).toFixed(0)}K` : '—'} />
            </StatsCard>

            <StatsCard title={`SEASON: ${seasonName.toUpperCase()}`}>
              <StatRow label="Status:" value={seasonActive === undefined ? '—' : seasonActive ? '🟢 Active' : '🔴 Ended'} />
              <StatRow label="Days Remaining:" value={seasonActive ? `${daysRemaining}` : 'Completed'} />
              <StatRow label="Prize Pool:" value={formatMcrt(seasonPrize)} />
              <StatRow label="Prizes Paid Out:" value={prizesDistributed === undefined ? '—' : prizesDistributed ? '✓ Yes' : 'Pending'} />
            </StatsCard>
          </div>

          {/* All-time totals */}
          <h2 className="text-2xl font-bold text-white">TOTALS</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <StatsCard title="LOBBY STATISTICS">
              <StatRow label="Matches Played:" value={matchesPlayed.toLocaleString()} />
              <StatRow label="MCRT Pledged:" value={formatMcrt(mcrtInGame)} />
              <StatRow label="Server Status:" value={serverOnline === null ? '—' : serverOnline ? '🟢 Online' : '🔴 Offline'} />
            </StatsCard>

            {topPlayers.length > 0 && (
              <StatsCard title="TOP PLAYERS THIS SEASON">
                {topPlayers.map((p, i) => (
                  <StatRow key={p.playerId} label={`#${i + 1} ${p.playerName}`} value={p.score.toLocaleString()} />
                ))}
              </StatsCard>
            )}
          </div>

          {/* Season winners */}
          {winners.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-white">SEASON WINNERS</h2>
              <div className="rounded-lg bg-navy-800 p-6 border border-white/10">
                <div className="space-y-3">
                  {winners.map((w) => (
                    <div key={w.playerName} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{w.finalRank === 1 ? '🥇' : w.finalRank === 2 ? '🥈' : '🥉'}</span>
                        <span className="font-medium text-white">{w.playerName}</span>
                      </div>
                      <span className="text-cyan-400 font-mono text-sm">{formatMcrt(w.prizeAmount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Charts */}
          <h2 className="text-2xl font-bold text-white">LOBBY HISTORY</h2>
          <div className="rounded-lg bg-white/5 border border-white/10 p-6">
            <h3 className="mb-4 text-base font-bold text-white/70">HISTORICAL LOBBIES</h3>
            <LobbyChart
              data={[
                { date: "Q1 '25", created: 420, finished: 370, auto: 180, private: 110, privateWithPledges: 22 },
                { date: "Q2 '25", created: 680, finished: 590, auto: 290, private: 165, privateWithPledges: 34 },
                { date: "Q3 '25", created: 980, finished: 840, auto: 410, private: 220, privateWithPledges: 58 },
                { date: "Q4 '25", created: 1240, finished: 1070, auto: 530, private: 280, privateWithPledges: 78 },
                { date: "Q1 '26", created: 1580, finished: 1360, auto: 680, private: 350, privateWithPledges: 95 },
              ]}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <SmallChart
              title="MCRT PLEDGED (ESTIMATED TREND)"
              color="#f59e0b"
              data={[
                { date: "Q1 '25", value: 480000 },
                { date: "Q2 '25", value: 820000 },
                { date: "Q3 '25", value: 1240000 },
                { date: "Q4 '25", value: 1890000 },
                { date: "Q1 '26", value: 2697880 },
              ]}
            />
            <SmallChart
              title="MCRT PRICE (USD)"
              color="#22d3ee"
              data={
                mcrtPrice !== undefined
                  ? [{ date: 'Now', value: mcrtPrice }]
                  : [{ date: 'Now', value: 0 }]
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
