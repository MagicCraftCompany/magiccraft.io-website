import { useEffect, useState } from 'react'

type PriceData = {
  usd: number
  usd_24h_change?: number
}

export function useMcrtPrice(refreshMs: number = 60_000) {
  const [price, setPrice] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchPrice() {
    setLoading(true)
    setError(null)
    try {
      const url = 'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true'
      const res = await fetch(url, { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      const p = json?.magiccraft as { usd: number; usd_24h_change?: number } | undefined
      if (p && typeof p.usd === 'number') setPrice({ usd: p.usd, usd_24h_change: p.usd_24h_change })
    } catch (e: any) {
      setError(String(e?.message || e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrice()
    const id = setInterval(fetchPrice, refreshMs)
    return () => clearInterval(id)
  }, [refreshMs])

  return { price, loading, error, refresh: fetchPrice }
}


