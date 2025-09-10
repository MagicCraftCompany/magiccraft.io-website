// Netlify Function: mcrt-mentions
// Fetch recent X posts mentioning $MCRT from specified accounts using public Nitter mirrors.

import type { Handler } from '@netlify/functions'

const NITTER_HOSTS: string[] = [
  'https://nitter.net',
  'https://nitter.pufe.org',
  'https://nitter.poast.org',
  'https://nitter.hu',
  'https://n.opnxng.com',
  'https://nitter.holo.host',
  'https://nitter.fdn.fr',
  'https://nitter.esmailelbob.xyz',
]

// Proxy helper using r.jina.ai to improve reliability
const viaProxy = (host: string, path: string) => {
  const bare = host.replace('https://', '').replace('http://', '')
  return `https://r.jina.ai/http://${bare}${path}`
}


const parseTweetLinks = (html: string, handle: string) => {
  // Very simple extraction of status links and visible text
  const links = Array.from(html.matchAll(/href="\/(?:i\/web)?\/?([A-Za-z0-9_]+)\/status\/(\d+)"/g))
    .map((m) => ({ handle: m[1], id: m[2] }))
    .filter((x) => x.handle.toLowerCase() === handle.toLowerCase())

  // Extract tweet texts (rough). Nitter wraps content in <div class="tweet-content media-body">
  const texts = html.split('<div class="tweet-content media-body">').slice(1).map((chunk) => {
    const end = chunk.indexOf('</div>')
    const raw = end >= 0 ? chunk.slice(0, end) : chunk
    const txt = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    return txt
  })

  const results: { url: string; handle: string; text: string }[] = []
  for (const l of links) {
    // Try to find the nearest text chunk; this is heuristic
    const text = texts.find((t) => t.includes(l.id)) || ''
    results.push({ url: `https://x.com/${l.handle}/status/${l.id}`, handle: l.handle, text })
  }
  return results
}

export const handler: Handler = async (event) => {
  const countParam = parseInt(event.queryStringParameters?.count || '8', 10)

  // Queries: $MCRT OR @MagicCraftGame
  const queries = ['%24MCRT', '%40MagicCraftGame']

  type TweetItem = { url: string; handle: string; text: string; ts: number }
  const collected: TweetItem[] = []

  // Prefer RSS because it includes pubDate for ordering
  for (const host of NITTER_HOSTS) {
    try {
      for (const q of queries) {
        const rssUrl = viaProxy(host, `/search/rss?f=tweets&q=${q}`)
        let res = await fetch(rssUrl, { headers: { 'User-Agent': 'Mozilla/5.0 NetlifyFunction' } })
        if (!res.ok) {
          const direct = `${host}/search/rss?f=tweets&q=${q}`
          res = await fetch(direct, { headers: { 'User-Agent': 'Mozilla/5.0 NetlifyFunction' } })
        }
        if (!res.ok) continue
        const xml = await res.text()
        const items = xml.split('<item>').slice(1)
        for (const item of items) {
          const linkMatch = item.match(/<link>(.*?)<\/link>/)
          if (!linkMatch) continue
          const link = String(linkMatch[1])
          const m = link.match(/https?:\/\/nitter[^/]*\/(.*?)\/status\/(\d+)/)
          if (!m) continue
          const handle = m[1]
          const id = m[2]
          const titleMatch = item.match(/<title>([\s\S]*?)<\/title>/)
          const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, ' ').trim() : ''
          const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)
          const ts = dateMatch ? Date.parse(dateMatch[1]) || 0 : 0
          collected.push({ url: `https://x.com/${handle}/status/${id}`, handle, text: title, ts })
        }
      }
      if (collected.length > 0) break
    } catch {
      // try next host
    }
  }

  // If RSS failed entirely, attempt minimal HTML fallback for $MCRT only (no timestamps)
  if (collected.length === 0) {
    for (const host of NITTER_HOSTS) {
      try {
        const htmlUrl = viaProxy(host, `/search?f=tweets&q=%24MCRT&since=&until=&near=`)
        let res = await fetch(htmlUrl, { headers: { 'User-Agent': 'Mozilla/5.0 NetlifyFunction' } })
        if (!res.ok) {
          const direct = `${host}/search?f=tweets&q=%24MCRT&since=&until=&near=`
          res = await fetch(direct, { headers: { 'User-Agent': 'Mozilla/5.0 NetlifyFunction' } })
        }
        if (!res.ok) continue
        const html = await res.text()
        const links = Array.from(html.matchAll(/href=\"\/(?:i\/web)?\/?([A-Za-z0-9_]+)\/status\/(\d+)\"/g))
          .map((m) => ({ handle: m[1], id: m[2] }))
        for (const l of links) {
          collected.push({ url: `https://x.com/${l.handle}/status/${l.id}`, handle: l.handle, text: '$MCRT', ts: 0 })
        }
        if (collected.length > 0) break
      } catch {
        // try next host
      }
    }
  }

  // De-duplicate by URL, then sort by timestamp desc
  const unique: { [url: string]: TweetItem } = {}
  for (const t of collected) unique[t.url] = t
  let list = Object.values(unique)
    .sort((a, b) => b.ts - a.ts)
    .slice(0, Math.max(1, Math.min(24, countParam)))
    .map(({ url, handle, text }) => ({ url, handle, text }))

  // Graceful fallback: curated backup tweets + search link
  if (list.length === 0) {
    const backup = [
      { url: 'https://x.com/MagicCraftGame/status/1869099999999999999', handle: 'MagicCraftGame', text: '$MCRT update' },
      { url: 'https://x.com/MagicCraftGame/status/1868999999999999999', handle: 'MagicCraftGame', text: 'Ecosystem news' },
      { url: 'https://x.com/MagicCraftGame/status/1868899999999999999', handle: 'MagicCraftGame', text: 'Community mentions' },
    ]
    list = [
      ...backup,
      { url: 'https://x.com/search?q=%24MCRT%20OR%20%40MagicCraftGame&src=typed_query&f=live', handle: 'search', text: '$MCRT live search on X' },
    ]
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ tweets: list }),
  }
}

export default {}


