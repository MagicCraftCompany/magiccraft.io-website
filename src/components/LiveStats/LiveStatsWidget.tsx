import { useEffect, useRef, useState } from 'react'
import { useGameStats } from '@/lib/useGameStats'

// Animated number counter
function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const [displayed, setDisplayed] = useState(value)
  const prevRef = useRef(value)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const from = prevRef.current
    const to = value
    if (from === to) return
    const duration = 1200
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(from + (to - from) * eased)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        prevRef.current = to
      }
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [value])

  const formatted =
    decimals > 0
      ? displayed.toFixed(decimals)
      : Math.round(displayed).toLocaleString()

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

function formatMcrt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toLocaleString()
}

type StatTileProps = {
  label: string
  value: string | number
  sublabel?: string
  icon: string
  accent: string
  animated?: boolean
  rawValue?: number
}

function StatTile({ label, value, sublabel, icon, accent, animated, rawValue }: StatTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white/5 p-5 backdrop-blur-sm transition-transform hover:-translate-y-0.5 ${accent}`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-4 left-1/2 h-16 w-24 -translate-x-1/2 rounded-full blur-2xl opacity-20 bg-current" />

      <div className="mb-2 text-2xl" aria-hidden="true">{icon}</div>
      <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {animated && rawValue !== undefined ? (
          <AnimatedNumber value={rawValue} />
        ) : (
          value
        )}
      </div>
      <div className="mt-1 text-sm font-medium text-white/70">{label}</div>
      {sublabel && <div className="mt-0.5 text-xs text-white/40">{sublabel}</div>}
    </div>
  )
}

export default function LiveStatsWidget() {
  const { data, loading } = useGameStats(60_000)

  const matchesPlayed = data?.allTime.matchesPlayed ?? 15285
  const mcrtInGame = data?.allTime.mcrtInGame ?? 2697880
  const mcrtPrice = data?.price?.usd ?? null
  const priceChange = data?.price?.change24h ?? null
  const seasonName = data?.season.name ?? '—'
  const seasonPrize = data?.season.totalPrizeMcrt ?? 250000
  const serverOnline = data?.live.serverOnline ?? null
  const ts = data?.ts ?? null

  const priceChangePositive = priceChange !== null && priceChange >= 0

  return (
    <section className="relative py-16 sm:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="mb-1 flex items-center gap-2 justify-center sm:justify-start">
              {/* Live pulse */}
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${serverOnline === false ? 'bg-rose-400' : 'bg-emerald-400'}`}
                />
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${serverOnline === false ? 'bg-rose-500' : 'bg-emerald-500'}`}
                />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {loading ? 'Updating…' : 'Live stats'}
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              The Numbers Don&apos;t Lie
            </h2>
            <p className="mt-1 text-sm text-white/50">
              Real-time activity from the MagicCraft ecosystem
            </p>
          </div>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/10"
          >
            Full dashboard →
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatTile
            icon="⚔️"
            label="Matches Played"
            value={matchesPlayed.toLocaleString()}
            rawValue={matchesPlayed}
            animated
            sublabel="All-time lobbies"
            accent="border-blue-500/20 text-blue-400"
          />
          <StatTile
            icon="🪙"
            label="MCRT In-Game"
            value={formatMcrt(mcrtInGame)}
            rawValue={mcrtInGame}
            animated
            sublabel="Total pledged to lobbies"
            accent="border-amber-500/20 text-amber-400"
          />
          <StatTile
            icon="🏆"
            label={`${seasonName} Prize Pool`}
            value={formatMcrt(seasonPrize) + ' MCRT'}
            sublabel="Current season rewards"
            accent="border-purple-500/20 text-purple-400"
          />
          <StatTile
            icon="💎"
            label="MCRT Price"
            value={
              mcrtPrice !== null
                ? `$${mcrtPrice.toFixed(5)}`
                : '—'
            }
            sublabel={
              priceChange !== null
                ? `${priceChangePositive ? '+' : ''}${priceChange.toFixed(2)}% 24h`
                : 'via CoinGecko'
            }
            accent={
              priceChange === null
                ? 'border-cyan-500/20 text-cyan-400'
                : priceChangePositive
                ? 'border-emerald-500/20 text-emerald-400'
                : 'border-rose-500/20 text-rose-400'
            }
          />
        </div>

        {/* Winner strip */}
        {data?.allTime.recentWinners && data.allTime.recentWinners.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="text-xs text-white/40 uppercase tracking-widest">Season winners</span>
            {data.allTime.recentWinners.map((w) => (
              <span
                key={w.playerName}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                <span>{w.finalRank === 1 ? '🥇' : w.finalRank === 2 ? '🥈' : '🥉'}</span>
                <span className="font-medium text-white">{w.playerName}</span>
                <span className="text-white/40">{formatMcrt(w.prizeAmount)} MCRT</span>
              </span>
            ))}
          </div>
        )}

        {ts && (
          <p className="mt-4 text-center text-[11px] text-white/25 sm:text-left">
            Last refreshed {new Date(ts).toLocaleTimeString()}
          </p>
        )}
      </div>
    </section>
  )
}
