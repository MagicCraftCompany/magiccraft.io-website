import { useCallback, useEffect, useRef, useState } from 'react'

type PriceData = {
  usd: number
  usd_24h_change?: number
}

type PriceStatus = 'loading' | 'live' | 'stale' | 'unavailable'

const CLIENT_CACHE_KEY = 'mc_mcrt_price_cache_v1'
const CLIENT_CACHE_TTL_MS = 5 * 60_000

function loadClientCache(): { price: PriceData; ts: number } | null {
  try {
    if (typeof localStorage === 'undefined') return null
    const raw = localStorage.getItem(CLIENT_CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (
      parsed &&
      parsed.price &&
      typeof parsed.price.usd === 'number' &&
      typeof parsed.ts === 'number'
    ) {
      return parsed
    }
  } catch {
    // ignore
  }
  return null
}

function saveClientCache(price: PriceData) {
  try {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(
      CLIENT_CACHE_KEY,
      JSON.stringify({ price, ts: Date.now() })
    )
  } catch {
    // ignore
  }
}

export function useMcrtPrice(refreshMs: number = 60_000) {
  const [price, setPrice] = useState<PriceData | null>(() => {
    const cached = loadClientCache()
    if (cached && Date.now() - cached.ts < CLIENT_CACHE_TTL_MS)
      return cached.price
    return null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<PriceStatus>(() =>
    loadClientCache() ? 'stale' : 'loading'
  )
  const inFlightRef = useRef(false)
  const priceRef = useRef(price)

  const fetchPrice = useCallback(async () => {
    if (inFlightRef.current) return
    inFlightRef.current = true
    setLoading(true)
    setError(null)
    try {
      const url = '/api/mcrt-price'
      const res = await fetch(url, { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      const p = json?.magiccraft as
        | { usd: number; usd_24h_change?: number }
        | undefined
      if (p && typeof p.usd === 'number') {
        const next: PriceData = { usd: p.usd, usd_24h_change: p.usd_24h_change }
        priceRef.current = next
        setPrice(next)
        saveClientCache(next)
        setStatus(json?.meta?.status === 'stale' ? 'stale' : 'live')
      } else {
        throw new Error('Invalid price response')
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e))
      setStatus(priceRef.current ? 'stale' : 'unavailable')
    } finally {
      setLoading(false)
      inFlightRef.current = false
    }
  }, [])

  useEffect(() => {
    void fetchPrice()
    const refreshIfVisible = () => {
      if (document.visibilityState !== 'hidden') void fetchPrice()
    }
    const id = window.setInterval(refreshIfVisible, refreshMs)
    document.addEventListener('visibilitychange', refreshIfVisible)
    window.addEventListener('online', refreshIfVisible)
    return () => {
      window.clearInterval(id)
      document.removeEventListener('visibilitychange', refreshIfVisible)
      window.removeEventListener('online', refreshIfVisible)
    }
  }, [fetchPrice, refreshMs])

  return { price, loading, error, status, refresh: fetchPrice }
}
