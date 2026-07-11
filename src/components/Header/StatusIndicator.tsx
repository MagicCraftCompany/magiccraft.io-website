import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
}

type ServiceResult = {
  key: string
  label: string
  type: 'core' | 'dep'
  ok: boolean
  status: number | null
  ms: number | null
  url?: string
  note?: string
  error?: string
}

type StatusResponse = {
  ts: string
  ok: boolean
  coreOk: boolean
  apiOk?: number
  apiTotal?: number
  services: ServiceResult[]
}

type StatusAvailability = 'loading' | 'live' | 'stale' | 'unavailable'
type PillState = 'healthy' | 'issues' | 'loading' | 'stale' | 'unavailable'

const pingStatus = async (deep = false): Promise<StatusResponse | null> => {
  try {
    const res = await fetch(
      `/.netlify/functions/status${deep ? '?deep=1' : ''}`,
      { cache: 'no-store' }
    )
    if (!res.ok) return null
    return (await res.json()) as StatusResponse
  } catch {
    return null
  }
}

const PILL_CLASSES: Record<PillState, string> = {
  healthy: 'bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]',
  issues: 'bg-rose-400 shadow-[0_0_0_2px_rgba(244,63,94,0.25)]',
  loading: 'bg-sky-400 shadow-[0_0_0_2px_rgba(56,189,248,0.25)]',
  stale: 'bg-amber-400 shadow-[0_0_0_2px_rgba(251,191,36,0.25)]',
  unavailable: 'bg-slate-400 shadow-[0_0_0_2px_rgba(148,163,184,0.2)]',
}

const Pill = ({ state }: { state: PillState }) => (
  <span
    className={`inline-block h-2.5 w-2.5 rounded-full ${PILL_CLASSES[state]}`}
  />
)

export default function StatusIndicator() {
  const [data, setData] = useState<StatusResponse | null>(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [availability, setAvailability] =
    useState<StatusAvailability>('loading')
  const [deep, setDeep] = useState(false)
  const popRef = useRef<HTMLDivElement | null>(null)
  const dataRef = useRef<StatusResponse | null>(null)
  const deepRef = useRef(false)
  const [wallet, setWallet] = useState<{
    available: boolean
    account?: string
    chainId?: string
    error?: string
  }>({ available: false })

  const core = useMemo(
    () => data?.services?.filter((s) => s.type === 'core') || [],
    [data]
  )
  const deps = useMemo(
    () => data?.services?.filter((s) => s.type === 'dep') || [],
    [data]
  )

  const refresh = useCallback(async (forceDeep?: boolean) => {
    setLoading(true)
    const r = await pingStatus(forceDeep ?? deepRef.current)
    if (r) {
      dataRef.current = r
      setData(r)
      setAvailability('live')
    } else {
      setAvailability(dataRef.current ? 'stale' : 'unavailable')
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    void refresh(false)
    const id = setInterval(() => void refresh(), 60_000)
    return () => clearInterval(id)
  }, [refresh])

  // Close when clicking outside
  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (!popRef.current) return
      if (!popRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open])

  const overallOk = data ? data.ok && data.coreOk : null
  const apiSummary = data?.apiTotal
    ? `${data.apiOk ?? 0}/${data.apiTotal} APIs active`
    : null
  const pillState: PillState =
    availability === 'loading' && !data
      ? 'loading'
      : availability === 'unavailable'
        ? 'unavailable'
        : availability === 'stale'
          ? 'stale'
          : overallOk
            ? 'healthy'
            : 'issues'
  const title =
    availability === 'loading' && !data
      ? 'Checking…'
      : availability === 'unavailable'
        ? 'Status unavailable'
        : availability === 'stale'
          ? 'Last status check is stale'
          : overallOk
            ? apiSummary || 'All systems normal'
            : apiSummary
              ? `Core issue · ${apiSummary}`
              : 'Issues detected'

  function getEthereum(): EthereumProvider | undefined {
    return (window as Window & { ethereum?: EthereumProvider }).ethereum
  }

  async function detectWallet() {
    const eth = getEthereum()
    if (!eth) {
      setWallet({ available: false, error: 'No provider' })
      return
    }
    try {
      const chainId = await eth.request({ method: 'eth_chainId' })
      setWallet({ available: true, chainId: String(chainId) })
    } catch (e: unknown) {
      setWallet({
        available: true,
        error: e instanceof Error ? e.message : String(e),
      })
    }
  }

  async function connectWallet() {
    const eth = getEthereum()
    if (!eth) {
      setWallet({ available: false, error: 'No provider' })
      return
    }
    try {
      const accounts = (await eth.request({
        method: 'eth_requestAccounts',
      })) as string[]
      const chainId = await eth.request({ method: 'eth_chainId' })
      setWallet({
        available: true,
        account: accounts?.[0],
        chainId: String(chainId),
      })
    } catch (e: unknown) {
      setWallet({
        available: true,
        error: e instanceof Error ? e.message : String(e),
      })
    }
  }

  async function switchToBsc() {
    const eth = getEthereum()
    if (!eth) return
    try {
      await eth.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      })
      const chainId = await eth.request({ method: 'eth_chainId' })
      setWallet((w) => ({ ...w, chainId: String(chainId) }))
    } catch (e: unknown) {
      void e
      try {
        await eth.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x38',
              chainName: 'BNB Smart Chain',
              nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
              rpcUrls: ['https://bsc-dataseed.binance.org/'],
              blockExplorerUrls: ['https://bscscan.com/'],
            },
          ],
        })
        const chainId = await eth.request({ method: 'eth_chainId' })
        setWallet((w) => ({ ...w, chainId: String(chainId) }))
      } catch (e2: unknown) {
        setWallet((w) => ({
          ...w,
          error: e2 instanceof Error ? e2.message : String(e2),
        }))
      }
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-md transition-colors hover:bg-white/15"
        aria-label={`System status: ${title}`}
        data-testid="system-status-button"
        data-status={pillState}
      >
        <Pill state={pillState} />
        <span className="hidden text-xs text-white/80 sm:inline">Status</span>
      </button>

      {open && (
        <div
          ref={popRef}
          className="absolute right-0 z-[100000] mt-2 w-[320px] rounded-lg border border-white/20 bg-black/75 p-3 shadow-2xl backdrop-blur-xl sm:w-[400px] sm:p-4"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Pill state={pillState} />
              <span className="text-sm font-semibold text-white sm:text-base">
                {title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1 text-[11px] text-white/70">
                <input
                  type="checkbox"
                  className="accent-emerald-400"
                  checked={deep}
                  onChange={(e) => {
                    const next = e.target.checked
                    deepRef.current = next
                    setDeep(next)
                    void refresh(next)
                  }}
                />
                Deep
              </label>
              <button
                onClick={() => void refresh()}
                disabled={loading}
                className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20 disabled:opacity-50"
              >
                {loading ? '…' : 'Refresh'}
              </button>
            </div>
          </div>

          {availability === 'stale' && (
            <div className="mb-3 rounded-md border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
              The latest status request failed. Details below are from the last
              successful check.
            </div>
          )}

          {availability === 'unavailable' && !data && (
            <div className="mb-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              No current or previously verified status response is available.
            </div>
          )}

          {data && (
            <div className="mb-2">
              <p className="mb-1 text-[11px] uppercase tracking-wide text-white/60">
                Core
              </p>
              <ul className="space-y-1">
                {core.map((s) => (
                  <li
                    key={s.key}
                    className="flex items-center justify-between gap-3 rounded-md bg-white/5 px-2 py-1.5 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <Pill state={s.ok ? 'healthy' : 'issues'} />
                      <span className="text-sm text-white">{s.label}</span>
                    </div>
                    <div className="font-mono text-xs text-white/80">
                      {s.status ?? '—'}
                      {s.ms ? ` · ${s.ms}ms` : ''}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data && (
            <div>
              <p className="mb-1 text-[11px] uppercase tracking-wide text-white/60">
                Dependencies{deep ? ' (extended)' : ''}
              </p>
              <ul className="max-h-48 space-y-1 overflow-auto pr-1">
                {deps.map((s) => (
                  <li
                    key={s.key}
                    className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <Pill state={s.ok ? 'healthy' : 'issues'} />
                      <span className="text-sm text-white/90">{s.label}</span>
                    </div>
                    <div className="font-mono text-xs text-white/80">
                      {s.status ?? '—'}
                      {s.ms ? ` · ${s.ms}ms` : ''}
                      {s.note ? ` · ${s.note}` : ''}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {deep && (
            <div className="mt-3">
              <p className="mb-1 text-[11px] uppercase tracking-wide text-white/60">
                Wallet
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5">
                  <span className="text-sm text-white/90">Provider</span>
                  <span className="text-xs text-white/80">
                    {wallet.available ? 'Detected' : 'Not found'}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5">
                  <span className="text-sm text-white/90">Account</span>
                  <span className="font-mono text-xs text-white/80">
                    {wallet.account || '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5">
                  <span className="text-sm text-white/90">Chain</span>
                  <span className="font-mono text-xs text-white/80">
                    {wallet.chainId || '—'}
                  </span>
                </div>
                {wallet.error && (
                  <div className="text-[11px] text-rose-300/90">
                    {wallet.error}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <button
                    onClick={detectWallet}
                    className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20"
                  >
                    Detect
                  </button>
                  <button
                    onClick={connectWallet}
                    className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20"
                  >
                    Connect
                  </button>
                  <button
                    onClick={switchToBsc}
                    className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20"
                  >
                    Switch to BSC
                  </button>
                </div>
              </div>
            </div>
          )}

          {data?.ts && (
            <div className="mt-2 text-[11px] text-white/60">
              Checked at {new Date(data.ts).toLocaleTimeString()}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
