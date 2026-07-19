import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import battleArt from '@/assets/images/legendary-battle-1.webp'
import {
  ArrowDown,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  MapPin,
  RefreshCw,
  Search,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'
import {
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Helmet } from 'react-helmet-async'

const LOBBY_API_URL = 'https://lobby-api-prod.magiccraft.io/lobby'
const LIVE_LOBBY_URL = 'https://lobby.magiccraft.io/'
const REGISTER_URL = 'https://lobby.magiccraft.io/register'
const LOBBY_GUIDE_URL = 'https://docs.magiccraft.io/web3-user-guide'
const LOBBY_REQUEST_TIMEOUT_MS = 8_000
const MAX_LOBBIES = 500

const MAP_NAMES: Record<number, string> = {
  34: 'Aqueduct',
  40: 'Forbidden Temple',
  41: 'Soaring Wasteland',
  42: 'Wanderers Pass',
  54: 'Heart of Emergate',
  56: 'Ancient Swamps',
  58: 'Dwarf Forge',
  59: 'Abandoned Bay',
  60: 'Sky City',
}

const MODE_NAMES: Record<number, string> = {
  5: 'Capture the Point',
  8: 'Skull Grab',
  100: 'Escort',
}

const TOKEN_ACCENTS: Record<string, string> = {
  MCRT: '#98FFF9',
  BTC: '#F7931A',
  BNB: '#F3BA2F',
  SOL: '#14F195',
  ETH: '#8EA8FF',
  XRP: '#67C7FF',
}

type Lobby = {
  id: string
  name: string
  status: number
  max_players: number
  players_count?: number
  fakePlayers_count?: number
  game_mode_id: number
  map_id: number
  region?: string | null
  type: string
  scheduled_at_open?: string | null
  scheduled_at_start?: string | null
  coin_themed_map_type?: string | null
}

function finiteNumber(value: unknown) {
  if (value === null || value === undefined || value === '') return null
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function optionalString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function normalizeLobby(value: unknown): Lobby | null {
  if (!value || typeof value !== 'object') return null
  const candidate = value as Record<string, unknown>
  const id =
    optionalString(candidate.id) || finiteNumber(candidate.id)?.toString()
  const name = optionalString(candidate.name)
  const status = finiteNumber(candidate.status)
  const maxPlayers = finiteNumber(candidate.max_players)
  const gameModeId = finiteNumber(candidate.game_mode_id)
  const mapId = finiteNumber(candidate.map_id)

  if (
    !id ||
    !name ||
    status === null ||
    maxPlayers === null ||
    gameModeId === null ||
    mapId === null
  ) {
    return null
  }

  return {
    id,
    name,
    status,
    max_players: Math.max(0, maxPlayers),
    players_count: finiteNumber(candidate.players_count) ?? undefined,
    fakePlayers_count: finiteNumber(candidate.fakePlayers_count) ?? undefined,
    game_mode_id: gameModeId,
    map_id: mapId,
    region: optionalString(candidate.region),
    type: optionalString(candidate.type) || 'PUBLIC',
    scheduled_at_open: optionalString(candidate.scheduled_at_open),
    scheduled_at_start: optionalString(candidate.scheduled_at_start),
    coin_themed_map_type: optionalString(candidate.coin_themed_map_type),
  }
}

function lobbyToken(lobby: Lobby) {
  const namedToken = lobby.name.match(/\b(MCRT|BTC|BNB|SOL|ETH|XRP)\b/i)?.[1]
  return (lobby.coin_themed_map_type || namedToken || 'MCRT').toUpperCase()
}

function lobbyDestination(lobby: Lobby) {
  const token = lobbyToken(lobby).toLowerCase()
  return `${LIVE_LOBBY_URL}?crypto=${encodeURIComponent(token)}`
}

function lobbyStart(lobby: Lobby) {
  const value = lobby.scheduled_at_open || lobby.scheduled_at_start
  return value ? new Date(value) : null
}

function formatStart(lobby: Lobby) {
  const start = lobbyStart(lobby)
  if (!start || Number.isNaN(start.getTime())) return 'Time shown in lobby'

  return new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
  }).format(start)
}

function lobbyState(lobby: Lobby) {
  const start = lobbyStart(lobby)
  if (lobby.status !== 0) return 'In progress'
  if (!start || start.getTime() <= Date.now()) return 'Ready to review'
  return 'Scheduled'
}

export default function Lobbies() {
  const [lobbies, setLobbies] = useState<Lobby[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [activeToken, setActiveToken] = useState('ALL')
  const [visibleLimit, setVisibleLimit] = useState(6)

  const loadLobbies = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)
    const requestController = new AbortController()
    let timedOut = false
    const cancelRequest = () => requestController.abort()
    signal?.addEventListener('abort', cancelRequest, { once: true })
    const timeoutId = window.setTimeout(() => {
      timedOut = true
      requestController.abort()
    }, LOBBY_REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch(LOBBY_API_URL, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: requestController.signal,
      })

      if (!response.ok)
        throw new Error(`Lobby service returned ${response.status}`)

      const data: unknown = await response.json()
      if (!Array.isArray(data))
        throw new Error('Lobby service returned an invalid response')

      setLobbies(
        data
          .slice(0, MAX_LOBBIES)
          .map(normalizeLobby)
          .filter((lobby): lobby is Lobby => lobby !== null)
          .sort((a, b) => {
            const aTime = lobbyStart(a)?.getTime() ?? Number.MAX_SAFE_INTEGER
            const bTime = lobbyStart(b)?.getTime() ?? Number.MAX_SAFE_INTEGER
            return aTime - bTime
          })
      )
    } catch {
      if (signal?.aborted && !timedOut) return
      setError('The live match schedule is temporarily unavailable.')
    } finally {
      window.clearTimeout(timeoutId)
      signal?.removeEventListener('abort', cancelRequest)
      if (!signal?.aborted) setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    void loadLobbies(controller.signal)
    return () => controller.abort()
  }, [loadLobbies])

  const tokens = useMemo(
    () => ['ALL', ...Array.from(new Set(lobbies.map(lobbyToken)))],
    [lobbies]
  )

  const visibleLobbies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return lobbies.filter((lobby) => {
      const token = lobbyToken(lobby)
      const matchesToken = activeToken === 'ALL' || token === activeToken
      const matchesQuery =
        !normalizedQuery ||
        [
          lobby.name,
          token,
          lobby.region,
          MAP_NAMES[lobby.map_id],
          MODE_NAMES[lobby.game_mode_id],
        ]
          .filter(Boolean)
          .some((value) =>
            String(value).toLowerCase().includes(normalizedQuery)
          )

      return matchesToken && matchesQuery
    })
  }, [activeToken, lobbies, query])

  useEffect(() => setVisibleLimit(6), [activeToken, query])

  const scrollToMatches = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = document.getElementById('available-matches')
    if (!target) return
    window.history.replaceState(null, '', '#available-matches')
    target.focus({ preventScroll: true })
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#03082f] text-white">
      <Helmet>
        <title>Live Match Schedule | MagicCraft Lobbies</title>
        <meta
          name="description"
          content="Browse the live MagicCraft Web3 lobby schedule without connecting a wallet, then review the official entry and reward terms before joining."
        />
        <link rel="canonical" href="https://magiccraft.io/lobbies" />
        <meta
          property="og:title"
          content="Live Match Schedule | MagicCraft Lobbies"
        />
        <meta
          property="og:description"
          content="Find an upcoming MagicCraft match by token, mode, map, region and start time."
        />
        <meta property="og:url" content="https://magiccraft.io/lobbies" />
        <meta
          property="og:image"
          content="https://magiccraft.io/magiccraft-social-preview.webp"
        />
      </Helmet>

      <a
        href="#available-matches"
        onClick={scrollToMatches}
        className="fixed left-4 top-2 z-[300000] -translate-y-20 rounded-lg bg-white px-4 py-2 font-bold text-[#03082f] transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#98FFF9]"
      >
        Skip to available matches
      </a>

      <Header />

      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <img
            src={battleArt}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,47,0.98)_0%,rgba(3,8,47,0.82)_52%,rgba(3,8,47,0.62)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(181,145,242,0.28),transparent_35%)]" />

          <div className="mx-auto grid w-full max-w-screen-xl gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/25 bg-[#98FFF9]/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#98FFF9]">
                <span className="h-2 w-2 rounded-full bg-[#98FFF9] shadow-[0_0_12px_#98FFF9]" />
                Live lobby schedule
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
                Find your next MagicCraft match.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Browse the public schedule first. No wallet is needed to explore
                matches. Open the official lobby only when you are ready to
                review eligibility, entry and reward terms.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#available-matches"
                  onClick={scrollToMatches}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#98FFF9] px-6 text-sm font-black text-[#03082f] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Browse matches
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-6 text-sm font-bold hover:border-white/35 hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
                >
                  Register to compete
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="border-white/12 hidden rounded-3xl border bg-[#080D3D]/85 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-6 lg:block">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#B591F2]">
                How it works
              </p>
              <ol className="mt-4 space-y-4">
                {[
                  [
                    'Browse',
                    'Compare live match times, maps, modes and regions.',
                  ],
                  [
                    'Register',
                    'Use the same email as your MagicCraft game account.',
                  ],
                  [
                    'Review & join',
                    'Confirm every entry, wallet and reward detail before signing.',
                  ],
                ].map(([title, body], index) => (
                  <li key={title} className="grid grid-cols-[36px_1fr] gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#98FFF9]/20 bg-[#98FFF9]/10 text-sm font-black text-[#98FFF9]">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="block text-sm text-white">
                        {title}
                      </strong>
                      <span className="mt-0.5 block text-sm leading-5 text-white/60">
                        {body}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="available-matches"
          aria-labelledby="available-matches-title"
          tabIndex={-1}
          className="mx-auto w-full max-w-screen-xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#98FFF9]">
                Official schedule feed
              </p>
              <h2
                id="available-matches-title"
                className="mt-2 text-3xl font-black sm:text-4xl"
              >
                Available matches
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                Match data comes from the MagicCraft lobby service. Reward
                values are confirmed in the official lobby before entry.
              </p>
            </div>
            {!loading && !error && (
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-bold text-emerald-100">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                {lobbies.length} matches in the live feed
              </div>
            )}
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
            <label
              htmlFor="lobby-search"
              className="text-sm font-bold text-white"
            >
              Search matches
            </label>
            <div className="relative mt-2">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45"
                aria-hidden="true"
              />
              <input
                id="lobby-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by lobby, token, mode, map or region"
                className="border-white/12 min-h-12 w-full rounded-xl border bg-[#020621] pl-12 pr-4 text-base text-white outline-none placeholder:text-white/35 focus:border-[#98FFF9]/60 focus:ring-2 focus:ring-[#98FFF9]/20"
              />
            </div>
            <div
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Filter by reward token"
            >
              {tokens.map((token) => {
                const selected = activeToken === token
                return (
                  <button
                    key={token}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveToken(token)}
                    className={`min-h-11 rounded-full border px-4 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] ${
                      selected
                        ? 'border-[#98FFF9] bg-[#98FFF9] text-[#03082f]'
                        : 'border-white/12 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {token === 'ALL' ? 'All matches' : token}
                  </button>
                )
              })}
            </div>
          </div>

          {loading && (
            <div
              className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              aria-label="Loading live matches"
            >
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="border-white/8 h-[290px] animate-pulse rounded-2xl border bg-white/[0.045]"
                />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] p-6 text-center">
              <CalendarClock
                className="mx-auto h-8 w-8 text-amber-200"
                aria-hidden="true"
              />
              <h3 className="mt-3 text-xl font-black">
                Schedule temporarily unavailable
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-amber-50/70">
                Open the official lobby directly or try the schedule again.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => void loadLobbies()}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-[#03082f]"
                >
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  Try again
                </button>
                <a
                  href={LIVE_LOBBY_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 text-sm font-bold"
                >
                  Open official lobby
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}

          {!loading && !error && visibleLobbies.length === 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-8 text-center">
              <Gamepad2
                className="mx-auto h-8 w-8 text-white/45"
                aria-hidden="true"
              />
              <h3 className="mt-3 text-xl font-black">
                {lobbies.length === 0 && activeToken === 'ALL' && !query.trim()
                  ? 'No scheduled lobbies'
                  : 'No matching lobbies'}
              </h3>
              <p className="mt-2 text-sm text-white/55">
                {lobbies.length === 0 && activeToken === 'ALL' && !query.trim()
                  ? 'The public schedule is currently empty. Check the official lobby for the latest game options.'
                  : 'Change the search or token filter to see other matches.'}
              </p>
            </div>
          )}

          {!loading && !error && visibleLobbies.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibleLobbies.slice(0, visibleLimit).map((lobby) => {
                const token = lobbyToken(lobby)
                const accent = TOKEN_ACCENTS[token] || '#98FFF9'
                const players = Math.max(0, lobby.players_count || 0)
                const isVip =
                  lobby.type.toUpperCase().includes('VIP') ||
                  /\bVIP\b/i.test(lobby.name)

                return (
                  <article
                    key={lobby.id}
                    className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-white/20"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ backgroundColor: accent }}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="rounded-full border px-3 py-1 text-xs font-black"
                          style={{
                            borderColor: `${accent}66`,
                            backgroundColor: `${accent}18`,
                            color: accent,
                          }}
                        >
                          {token}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/65">
                          {isVip ? 'VIP' : 'Public'}
                        </span>
                      </div>
                      <span className="text-right text-xs font-bold text-emerald-200">
                        {lobbyState(lobby)}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-black leading-tight text-white">
                      {lobby.name}
                    </h3>

                    <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-black/15 p-3">
                        <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/40">
                          <Gamepad2
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />{' '}
                          Mode
                        </dt>
                        <dd className="mt-1 font-bold text-white/85">
                          {MODE_NAMES[lobby.game_mode_id] || 'MagicCraft PvP'}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-black/15 p-3">
                        <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/40">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />{' '}
                          Map
                        </dt>
                        <dd className="mt-1 font-bold text-white/85">
                          {MAP_NAMES[lobby.map_id] || 'Lobby selected'}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-black/15 p-3">
                        <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/40">
                          <Users className="h-3.5 w-3.5" aria-hidden="true" />{' '}
                          Players
                        </dt>
                        <dd className="mt-1 font-bold text-white/85">
                          {players} / {lobby.max_players}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-black/15 p-3">
                        <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/40">
                          <CalendarClock
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />{' '}
                          Opens
                        </dt>
                        <dd className="mt-1 font-bold text-white/85">
                          {formatStart(lobby)}
                        </dd>
                      </div>
                    </dl>

                    <a
                      href={lobbyDestination(lobby)}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Review and join ${lobby.name} in the official lobby`}
                      className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-black text-[#03082f] hover:bg-[#98FFF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
                    >
                      Review & join
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                )
              })}
            </div>
          )}

          {!loading && !error && visibleLobbies.length > visibleLimit && (
            <div className="mt-7 flex flex-col items-center gap-3">
              <p className="text-sm text-white/50">
                Showing {visibleLimit} of {visibleLobbies.length} matching
                lobbies
              </p>
              <button
                type="button"
                onClick={() => setVisibleLimit((current) => current + 6)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-6 text-sm font-black text-white hover:border-[#98FFF9]/40 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                Show more matches
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </section>

        <section className="border-y border-white/10 bg-white/[0.035] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-screen-xl gap-5 md:grid-cols-3">
            {[
              [
                ShieldCheck,
                'Browse before signing',
                'The public schedule works without a wallet connection.',
              ],
              [
                Wallet,
                'Wallet is optional',
                'Connect only for eligible entry, reward or claim actions.',
              ],
              [
                ExternalLink,
                'Confirm in the official lobby',
                'Review current lobby rules and values before every entry.',
              ],
            ].map(([Icon, title, body]) => {
              const CardIcon = Icon as typeof ShieldCheck
              return (
                <div
                  key={String(title)}
                  className="rounded-2xl border border-white/10 bg-[#03082f]/70 p-5"
                >
                  <CardIcon
                    className="h-6 w-6 text-[#98FFF9]"
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 text-lg font-black">{String(title)}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {String(body)}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mx-auto mt-7 flex w-full max-w-screen-xl flex-col items-start justify-between gap-4 rounded-2xl border border-[#B591F2]/20 bg-[#B591F2]/10 p-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black text-white">
                New to Web3 lobbies?
              </p>
              <p className="mt-1 text-sm text-white/60">
                Read the official guide before registering or connecting a
                wallet.
              </p>
            </div>
            <a
              href={LOBBY_GUIDE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-bold hover:bg-white/15"
            >
              Read Web3 lobby guide
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
