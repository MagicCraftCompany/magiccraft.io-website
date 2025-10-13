import { useEffect, useMemo, useRef, useState } from 'react'

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
  services: ServiceResult[]
}

const pingStatus = async (): Promise<StatusResponse | null> => {
  try {
    const res = await fetch('/.netlify/functions/status', { cache: 'no-store' })
    if (!res.ok) return null
    return (await res.json()) as StatusResponse
  } catch {
    return null
  }
}

const Pill = ({ ok }: { ok: boolean }) => (
  <span
    className={`inline-block h-2.5 w-2.5 rounded-full ${ok ? 'bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]' : 'bg-rose-400 shadow-[0_0_0_2px_rgba(244,63,94,0.25)]'}`}
  />
)

export default function StatusIndicator() {
  const [data, setData] = useState<StatusResponse | null>(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const popRef = useRef<HTMLDivElement | null>(null)

  const core = useMemo(() => data?.services?.filter((s) => s.type === 'core') || [], [data])
  const deps = useMemo(() => data?.services?.filter((s) => s.type === 'dep') || [], [data])

  async function refresh() {
    setLoading(true)
    const r = await pingStatus()
    setData(r)
    setLoading(false)
  }

  useEffect(() => {
    refresh()
    const id = setInterval(refresh, 60_000)
    return () => clearInterval(id)
  }, [])

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

  const overallOk = data?.ok
  const title = overallOk === undefined ? 'Checking…' : overallOk ? 'All systems normal' : 'Issues detected'

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors inline-flex items-center gap-2"
        aria-label="System status"
      >
        <Pill ok={!!overallOk} />
        <span className="hidden sm:inline text-xs text-white/80">Status</span>
      </button>

      {open && (
        <div ref={popRef} className="absolute right-0 mt-2 w-[320px] sm:w-[400px] rounded-lg bg-black/75 backdrop-blur-xl border border-white/20 shadow-2xl p-3 sm:p-4 z-[100000]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Pill ok={!!overallOk} />
              <span className="text-sm sm:text-base font-semibold text-white">{title}</span>
            </div>
            <button onClick={refresh} disabled={loading} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 disabled:opacity-50 text-white">{loading ? '…' : 'Refresh'}</button>
          </div>

          <div className="mb-2">
            <p className="text-[11px] uppercase tracking-wide text-white/60 mb-1">Core</p>
            <ul className="space-y-1">
              {core.map((s) => (
                <li key={s.key} className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 bg-white/5 hover:bg-white/10">
                  <div className="flex items-center gap-2">
                    <Pill ok={s.ok} />
                    <span className="text-sm text-white">{s.label}</span>
                  </div>
                  <div className="text-xs text-white/80 font-mono">{s.status ?? '—'}{s.ms ? ` · ${s.ms}ms` : ''}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wide text-white/60 mb-1">Dependencies</p>
            <ul className="max-h-48 overflow-auto space-y-1 pr-1">
              {deps.map((s) => (
                <li key={s.key} className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-white/10">
                  <div className="flex items-center gap-2">
                    <Pill ok={s.ok} />
                    <span className="text-sm text-white/90">{s.label}</span>
                  </div>
                  <div className="text-xs text-white/80 font-mono">{s.status ?? '—'}{s.ms ? ` · ${s.ms}ms` : ''}</div>
                </li>
              ))}
            </ul>
          </div>

          {data?.ts && (
            <div className="mt-2 text-[11px] text-white/60">Checked at {new Date(data.ts).toLocaleTimeString()}</div>
          )}
        </div>
      )}
    </div>
  )
}


