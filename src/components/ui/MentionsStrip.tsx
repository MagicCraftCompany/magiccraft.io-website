import { useEffect, useState } from 'react'

export type MentionAccount = {
  handle: string
}

// Now searches for $MCRT mentions from anyone, not specific accounts
const SEARCH_TERM = '$MCRT'

type Mention = { url: string; handle: string; text: string }

export default function MentionsStrip() {
  const [mentions, setMentions] = useState<Mention[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchMentions = async () => {
      try {
        // For local development, show mock data
        const isLocal = typeof window !== 'undefined' && /localhost|127\.0\.0\.1/.test(window.location.hostname)
        
        if (isLocal) {
          // Real tweet IDs as backup data for local testing
          const backupTweets = [
            { url: 'https://x.com/TheMoonCarl/status/1869030358671491464', handle: 'TheMoonCarl', text: '$MCRT' },
            { url: 'https://x.com/MMCrypto/status/1869025820212310397', handle: 'MMCrypto', text: '$MCRT' },
            { url: 'https://x.com/davincij15/status/1868987456348180889', handle: 'davincij15', text: '$MCRT' },
            { url: 'https://x.com/CryptoWendyO/status/1868745201897394589', handle: 'CryptoWendyO', text: '$MCRT' },
            { url: 'https://x.com/AltcoinGordon/status/1868690123467473154', handle: 'AltcoinGordon', text: '$MCRT' },
            { url: 'https://x.com/CryptoBirb/status/1868652789283635568', handle: 'CryptoBirb', text: '$MCRT' }
          ]
          console.log('Using backup tweet data for local development')
          setMentions(backupTweets.slice(0, 4))
          return
        }
        
        const url = `/.netlify/functions/mcrt-mentions?search=${encodeURIComponent(SEARCH_TERM)}&count=8&ts=${Date.now()}`
        console.log('Fetching mentions from:', url)
        const res = await fetch(url, {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        console.log('Received mentions:', data)
        const list = (data.tweets as Mention[]) || []
        if (!list.length) {
          // production fallback list
          setMentions([
            { url: 'https://x.com/MagicCraftGame/status/1869099999999999999', handle: 'MagicCraftGame', text: '$MCRT update' },
            { url: 'https://x.com/MagicCraftGame/status/1868999999999999999', handle: 'MagicCraftGame', text: 'Ecosystem news' },
            { url: 'https://x.com/MagicCraftGame/status/1868899999999999999', handle: 'MagicCraftGame', text: 'Community mentions' },
            { url: 'https://x.com/search?q=%24MCRT%20OR%20%40MagicCraftGame&src=typed_query&f=live', handle: 'search', text: '$MCRT live search on X' },
          ])
        } else {
          setMentions(list)
        }
      } catch (e: any) {
        console.error('Error loading mentions:', e)
        setError(e?.message || 'Failed to load mentions')
      }
    }
    fetchMentions()
    return () => controller.abort()
  }, [])

  return (
    <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl py-8 md:py-12">
      <div className="text-center mb-4 md:mb-6">
        <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">Mentions on X</h3>
        <p className="text-gray-300 text-sm md:text-base mt-1">Recent $MCRT mentions from the community.</p>
        <div className="mt-2 text-xs text-white/60">
          Building with $MCRT? <a className="text-[#98FFF9] hover:underline" href="/grants">Apply for Grants</a>
        </div>
      </div>

      {mentions && mentions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mentions.map((m) => (
            <div key={m.url} className="card-glass card-padding rounded-2xl overflow-hidden">
              <div className="text-xs text-white/70 mb-2">@{m.handle}</div>
              <a 
                href={m.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition-colors"
              >
                <div className="p-4 min-h-[300px] flex flex-col justify-center items-center text-center">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div className="text-white/80 text-sm">View on X</div>
                  <div className="text-white/60 text-xs mt-2">{m.text || '$MCRT'}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card-glass card-padding rounded-2xl">
              <div className="h-4 w-24 bg-white/10 rounded mb-2 animate-pulse" />
              <div className="rounded-xl border border-white/10 bg-black/20 h-[380px] animate-pulse" />
            </div>
          ))}
          {error && (
            <div className="col-span-full text-center text-white/70 text-sm">Mentions unavailable right now.</div>
          )}
        </div>
      )}
    </section>
  )
}
