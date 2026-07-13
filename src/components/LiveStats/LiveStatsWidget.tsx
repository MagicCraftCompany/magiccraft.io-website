import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  useGameStats,
  type GameStatsSourceStatus,
  type GameStatsStatus,
} from '@/lib/useGameStats'

function AnimatedNumber({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(value)
  const previousRef = useRef(value)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const from = previousRef.current
    if (from === value) return
    const duration = 1200
    const startedAt = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(from + (value - from) * eased)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        previousRef.current = value
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [value])

  return <span>{Math.round(displayed).toLocaleString()}</span>
}

function formatMcrt(value: number | null): string {
  if (value === null) return 'Unavailable'
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`
  return value.toLocaleString()
}

type StatTileProps = {
  label: string
  value: string
  sublabel: string
  icon: string
  accent: string
  rawValue?: number
}

function StatTile({
  label,
  value,
  sublabel,
  icon,
  accent,
  rawValue,
}: StatTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white/5 p-5 backdrop-blur-sm transition-transform hover:-translate-y-0.5 ${accent}`}
    >
      <div className="pointer-events-none absolute -top-4 left-1/2 h-16 w-24 -translate-x-1/2 rounded-full bg-current opacity-20 blur-2xl" />
      <div className="mb-2 text-2xl" aria-hidden="true">
        {icon}
      </div>
      <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {rawValue === undefined ? value : <AnimatedNumber value={rawValue} />}
      </div>
      <div className="mt-1 text-sm font-medium text-white/70">{label}</div>
      <div className="mt-0.5 text-xs text-white/60">{sublabel}</div>
    </div>
  )
}

const STATUS_PRESENTATION: Record<
  GameStatsStatus,
  { label: string; dot: string; panel: string }
> = {
  loading: {
    label: 'Checking live sources',
    dot: 'bg-sky-400',
    panel: 'border-sky-400/20 bg-sky-400/10 text-sky-100',
  },
  live: {
    label: 'Live verified data',
    dot: 'bg-emerald-400',
    panel: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100',
  },
  partial: {
    label: 'Partial live data',
    dot: 'bg-amber-400',
    panel: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
  },
  stale: {
    label: 'Last verified data',
    dot: 'bg-amber-400',
    panel: 'border-amber-400/20 bg-amber-400/10 text-amber-100',
  },
  offline: {
    label: 'Game server offline',
    dot: 'bg-rose-500',
    panel: 'border-rose-400/20 bg-rose-400/10 text-rose-100',
  },
  unavailable: {
    label: 'Live stats unavailable',
    dot: 'bg-slate-400',
    panel: 'border-white/10 bg-white/5 text-white/70',
  },
}

function sourceLabel(status: GameStatsSourceStatus) {
  if (status === 'live') return 'live'
  if (status === 'offline') return 'offline'
  return 'unavailable'
}

function statusMessage(status: GameStatsStatus, hasData: boolean) {
  switch (status) {
    case 'partial':
      return 'At least one live source is unavailable. Only verified fields are shown.'
    case 'stale':
      return 'The latest refresh failed or returned an old cached response. These are the last verified values.'
    case 'offline':
      return 'The game server reported an offline response. Market data is shown only if its source responded.'
    case 'unavailable':
      return 'Live stats are temporarily unavailable. No estimated or fallback totals are shown.'
    case 'loading':
      return hasData
        ? 'Refreshing verified sources.'
        : 'Checking the lobby, season, and market sources.'
    default:
      return 'Values below came from the current lobby, season, and market responses.'
  }
}

export default function LiveStatsWidget() {
  const { data, loading, error, status } = useGameStats(60_000)
  const presentation = STATUS_PRESENTATION[status]
  const finishedLobbies = data?.allTime.finishedLobbies ?? null
  const mcrtPledged = data?.allTime.mcrtPledged ?? null
  const mcrtPrice = data?.price?.usd ?? null
  const priceChange = data?.price?.change24h ?? null
  const seasonName = data?.season.name ?? null
  const seasonPrize = data?.season.totalPrizeMcrt ?? null
  const timestamp = data?.ts ?? null
  const priceChangePositive = priceChange !== null && priceChange >= 0

  return (
    <section
      className="relative py-16 sm:py-20"
      data-testid="live-stats-widget"
      data-status={status}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
              <span
                className={`h-2.5 w-2.5 rounded-full ${presentation.dot}`}
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                {loading && !data ? 'Checking…' : presentation.label}
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Verified ecosystem stats
            </h2>
            <p className="mt-1 text-sm text-white/50">
              Unverified values stay blank instead of being estimated.
            </p>
          </div>
          <Link
            to="/stats"
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:bg-white/10"
          >
            Full stats →
          </Link>
        </div>

        <div
          className={`mb-5 rounded-xl border px-4 py-3 text-sm ${presentation.panel}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage(status, Boolean(data))}
          {error && status === 'stale' ? ` Refresh error: ${error}.` : ''}
        </div>

        {data?.meta?.sources && (
          <div className="mb-5 flex flex-wrap gap-2 text-xs text-white/60">
            {data.meta.sources.lobby && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Lobby: {sourceLabel(data.meta.sources.lobby.status)}
              </span>
            )}
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Season: {sourceLabel(data.meta.sources.gameServer.status)}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Market: {sourceLabel(data.meta.sources.market.status)}
            </span>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatTile
            icon="⚔️"
            label="Finished Lobbies"
            value={
              finishedLobbies === null
                ? 'Unavailable'
                : finishedLobbies.toLocaleString()
            }
            rawValue={finishedLobbies ?? undefined}
            sublabel={
              finishedLobbies === null
                ? 'No verified total'
                : 'Reported by lobby API'
            }
            accent="border-blue-500/20 text-blue-400"
          />
          <StatTile
            icon="🪙"
            label="MCRT Entry Fees"
            value={formatMcrt(mcrtPledged)}
            rawValue={mcrtPledged ?? undefined}
            sublabel={
              mcrtPledged === null
                ? 'No verified total'
                : 'Recorded by lobby API'
            }
            accent="border-amber-500/20 text-amber-400"
          />
          <StatTile
            icon="🏆"
            label={
              seasonName ? `${seasonName} Prize Pool` : 'Season Prize Pool'
            }
            value={
              seasonPrize === null
                ? 'Unavailable'
                : `${formatMcrt(seasonPrize)} MCRT`
            }
            sublabel={
              seasonPrize === null
                ? 'No verified prize value'
                : 'Current game-server response'
            }
            accent="border-purple-500/20 text-purple-400"
          />
          <StatTile
            icon="💎"
            label="MCRT Price"
            value={
              mcrtPrice === null ? 'Unavailable' : `$${mcrtPrice.toFixed(5)}`
            }
            sublabel={
              priceChange === null
                ? mcrtPrice === null
                  ? 'Market source unavailable'
                  : '24h change unavailable'
                : `${priceChangePositive ? '+' : ''}${priceChange.toFixed(2)}% 24h`
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

        {data?.allTime.recentWinners &&
          data.allTime.recentWinners.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <span className="text-xs uppercase tracking-widest text-white/60">
                Reported season winners
              </span>
              {data.allTime.recentWinners.map((winner) => (
                <span
                  key={`${winner.playerName}-${winner.finalRank}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  <span>
                    {winner.finalRank === 1
                      ? '🥇'
                      : winner.finalRank === 2
                        ? '🥈'
                        : '🥉'}
                  </span>
                  <span className="font-medium text-white">
                    {winner.playerName}
                  </span>
                  <span className="text-white/60">
                    {formatMcrt(winner.prizeAmount)} MCRT
                  </span>
                </span>
              ))}
            </div>
          )}

        {timestamp && (
          <p className="mt-4 text-center text-[11px] text-white/60 sm:text-left">
            {status === 'stale'
              ? 'Last verified response'
              : 'Response generated'}{' '}
            {new Date(timestamp).toLocaleString()}
          </p>
        )}
      </div>
    </section>
  )
}
