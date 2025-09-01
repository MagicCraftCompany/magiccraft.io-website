import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const now = Date.now()
  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function getConfiguredTarget(defaultOffsetDays = 3): number {
  // If VITE_ZEUS_DROP_UTC is set (e.g., 2025-09-04T17:00:00Z), use that
  const envTs = (import.meta as any).env?.VITE_ZEUS_DROP_UTC as string | undefined
  if (envTs) {
    const parsed = Date.parse(envTs)
    if (!Number.isNaN(parsed)) return parsed
  }
  // Fallback to a persistent localStorage timestamp so all sessions share the same target
  try {
    const stored = localStorage.getItem('zeus-drop-utc')
    if (stored) {
      const parsed = parseInt(stored, 10)
      if (!Number.isNaN(parsed)) return parsed
    }
    const fallback = Date.now() + defaultOffsetDays * 24 * 60 * 60 * 1000
    localStorage.setItem('zeus-drop-utc', String(fallback))
    return fallback
  } catch {
    return Date.now() + defaultOffsetDays * 24 * 60 * 60 * 1000
  }
}

export function ZeusPromoBanner({ imageUrl }: { imageUrl: string }) {
  const target = useMemo(() => getConfiguredTarget(3), [])
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-[#2A0D4E] via-[#0B0F39] to-[#120e3d] border-b border-white/10">
      <div className="mx-auto max-w-screen-xl w-11/12 py-2 md:py-3 flex items-center gap-3 md:gap-4">
        <img src={encodeURI(imageUrl)} alt="Zeus NFT" className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover border border-white/15" loading="eager" decoding="async" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/80">New Drop</span>
            <p className="text-sm md:text-base font-semibold text-white truncate">Zeus NFT — Web3 in‑game skin. Hold ≥ 1,000,000 $MCRT for airdrop.</p>
          </div>
          <div className="text-xs text-white/70 mt-0.5">
            {target - Date.now() > 0
              ? <>Drop in {String(left.days).padStart(2,'0')}d {String(left.hours).padStart(2,'0')}h {String(left.minutes).padStart(2,'0')}m {String(left.seconds).padStart(2,'0')}s</>
              : <span className="text-[#98FFF9] font-semibold">Live now</span>}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a href="https://t.me/magiccraftgamechat" target="_blank" rel="noreferrer noopener" className="btn-secondary px-3 py-1 text-xs">Updates</a>
          <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="btn-primary px-3 py-1 text-xs">Get $MCRT</a>
        </div>
      </div>
    </div>
  )
}

export function ZeusPromoPopup({ imageUrl }: { imageUrl: string }) {
  const target = useMemo(() => getConfiguredTarget(3), [])
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(target))
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    return sessionStorage.getItem('zeus-promo-dismissed') !== '1'
  })

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const onClose = () => {
    setOpen(false)
    try { sessionStorage.setItem('zeus-promo-dismissed', '1') } catch {}
  }

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] w-[94%] max-w-4xl">
      <div className="relative rounded-2xl border border-white/15 bg-gradient-to-r from-[#2A0D4E] via-[#0B0F39] to-[#120e3d] shadow-2xl backdrop-blur-md px-3 py-3 md:px-4 md:py-4">
        <button onClick={onClose} aria-label="Close" className="absolute -top-2 -right-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-full w-7 h-7 flex items-center justify-center">×</button>
        <div className="flex items-center gap-3 md:gap-4">
          <img src={encodeURI(imageUrl)} alt="Zeus NFT" className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover border border-white/15" />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/80">New Drop</span>
              <p className="text-sm md:text-base font-semibold text-white truncate">Zeus NFT — Web3 in‑game skin. Hold ≥ 1,000,000 $MCRT for airdrop.</p>
            </div>
            <div className="text-[11px] md:text-xs text-white/70 mt-0.5">
              Drop in {String(left.days).padStart(2,'0')}d {String(left.hours).padStart(2,'0')}h {String(left.minutes).padStart(2,'0')}m {String(left.seconds).padStart(2,'0')}s
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://t.me/magiccraftgamechat" target="_blank" rel="noreferrer noopener" className="btn-secondary px-3 py-1 text-xs">Updates</a>
            <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="btn-primary px-3 py-1 text-xs">Get $MCRT</a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function ZeusPromo() {
  // legacy large section kept (not used when banner is mounted at top)
  const target = useMemo(() => getConfiguredTarget(3), [])
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  // Zeus art carousel (uses public/img paths)
  const images = useMemo(() => [
    encodeURI('/img/WhatsApp Image 2025-09-01 at 16.21.00 (1).jpeg'),
    encodeURI('/img/WhatsApp Image 2025-09-01 at 16.21.00 (2).jpeg'),
    encodeURI('/img/WhatsApp Image 2025-09-01 at 16.21.00 (3).jpeg'),
    encodeURI('/img/WhatsApp Image 2025-09-01 at 16.21.02.jpeg'),
  ], [])
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const rot = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000)
    return () => clearInterval(rot)
  }, [images.length])

  return (
    <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl my-6 md:my-10 overflow-hidden">
      <div className="relative rounded-3xl md:rounded-4xl p-[1px] bg-gradient-to-r from-[#FFB649] via-[#98FFF9] to-[#B591F2] shadow-[0_0_40px_rgba(152,255,249,0.15)]">
        <div className="relative rounded-3xl md:rounded-4xl bg-gradient-to-br from-[#2A0D4E] via-[#0B0F39] to-[#120e3d]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,182,73,0.25),transparent_60%),radial-gradient(circle_at_80%_40%,rgba(152,255,249,0.15),transparent_60%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 p-6 md:p-10">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-max">
                <span className="w-2 h-2 rounded-full bg-[#FFB649] animate-pulse" />
                <span className="text-xs md:text-sm text-white/80">New Drop</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFB649] via-[#FFE5A5] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
                Zeus NFT — Web3 In‑Game Skin
              </h3>
              <p className="text-base md:text-lg text-white/80 max-w-2xl">
                Harness the lightning. Some skins will be <b>Rare</b> and <b>Legendary</b>. Snapshot in 3 days.
                Hold <b>≥ 1,000,000 $MCRT</b> in your wallet to receive the airdrop.
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white/90">
                  <span className="text-xs md:text-sm uppercase tracking-wide text-white/70">Drop In</span>
                  <div className="mt-1 flex items-center gap-4 text-lg md:text-2xl font-extrabold">
                    <span>{String(left.days).padStart(2, '0')}d</span>
                    <span>{String(left.hours).padStart(2, '0')}h</span>
                    <span>{String(left.minutes).padStart(2, '0')}m</span>
                    <span>{String(left.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>
                <a href="https://t.me/magiccraftgamechat" target="_blank" rel="noreferrer noopener" className="btn-secondary px-4 py-2 text-sm">Get updates</a>
                <a href="https://www.bybit.com/en/trade/spot/MCRT/USDT" target="_blank" rel="noreferrer noopener" className="btn-primary px-4 py-2 text-sm">Get $MCRT</a>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="w-full h-full min-h-[220px] rounded-2xl bg-gradient-to-br from-[#FFB649]/40 to-[#98FFF9]/20 border border-white/10 p-0 overflow-hidden">
                <img src={images[idx]} alt="Zeus NFT" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


