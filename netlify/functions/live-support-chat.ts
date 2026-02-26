import type { Handler } from '@netlify/functions'
import { questions as faq } from '../../src/data/accordian'

const DEFAULT_MODEL = 'openai/gpt-4o-mini'

type IncomingHistoryMessage = {
  role: 'user' | 'assistant'
  content: string
}

type IncomingPayload = {
  message?: string
  history?: IncomingHistoryMessage[]
}

type FaqItem = {
  question?: string
  answer?: string
}

const SOURCES = {
  magiccraft: 'https://magiccraft.io',
  magiccraftFaq: 'https://magiccraft.io/faq',
  magicads: 'https://magicads.dev',
  akyn: 'https://akyn.pro',
  merlin: 'https://merlintheai.com',
  docai: 'https://docai.live',
  polybilities: 'https://polybilities.com',
  socialmm: 'https://socialmm.ai',
  dragonlist: 'https://dragonlist.ai',
  coingeckoCoin: 'https://www.coingecko.com/en/coins/magiccraft',
  coinmarketcapCoin: 'https://coinmarketcap.com/currencies/magiccraft/',
} as const

function stripHtml(input: string) {
  return String(input || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+\n/g, '\n')
    .trim()
}

function clamp(s: string, max: number) {
  const v = String(s || '').trim()
  return v.length > max ? v.slice(0, max) : v
}

async function safeFetchText(url: string, opts?: RequestInit) {
  try {
    const res = await fetch(url, opts)
    const text = await res.text()
    return { ok: res.ok, status: res.status, text }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return { ok: false, status: 0, text: msg }
  }
}

async function getMarketSnapshot() {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true'
  const res = await safeFetchText(url, { headers: { accept: 'application/json' } })
  if (!res.ok) return null
  try {
    const json = JSON.parse(res.text)
    const usd = json?.magiccraft?.usd
    const chg = json?.magiccraft?.usd_24h_change
    if (typeof usd !== 'number') return null
    return { usd, usd_24h_change: typeof chg === 'number' ? chg : null, source: 'CoinGecko' }
  } catch {
    return null
  }
}

async function getCoinGeckoProfile() {
  // Broader project context (trimmed) to answer ecosystem questions.
  const url =
    'https://api.coingecko.com/api/v3/coins/magiccraft?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false'
  const res = await safeFetchText(url, { headers: { accept: 'application/json' } })
  if (!res.ok) return null
  try {
    const json = JSON.parse(res.text)
    const out = {
      id: json?.id,
      symbol: json?.symbol,
      name: json?.name,
      categories: Array.isArray(json?.categories) ? json.categories.slice(0, 8) : [],
      description_en: clamp(String(json?.description?.en || ''), 2000),
      links: {
        homepage: Array.isArray(json?.links?.homepage) ? json.links.homepage.filter(Boolean).slice(0, 2) : [],
        twitter_screen_name: json?.links?.twitter_screen_name || null,
        telegram_channel_identifier: json?.links?.telegram_channel_identifier || null,
        github: Array.isArray(json?.links?.repos_url?.github)
          ? json.links.repos_url.github.filter(Boolean).slice(0, 3)
          : [],
      },
      platforms: json?.platforms && typeof json.platforms === 'object' ? json.platforms : {},
    }
    return out
  } catch {
    return null
  }
}

async function getMagiccraftHomepageMeta() {
  // Best-effort: homepage is an SPA; we mainly extract meta for grounding.
  const res = await safeFetchText(SOURCES.magiccraft, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36',
      accept: 'text/html,application/xhtml+xml',
    },
  })
  if (!res.ok) return null
  const html = res.text
  const get = (re: RegExp) => {
    const m = html.match(re)
    return m?.[1] ? clamp(m[1], 500) : null
  }
  return {
    title: get(/<title[^>]*>([^<]+)<\/title>/i),
    description: get(/<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i),
    ogTitle: get(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["'][^>]*>/i),
    ogDescription: get(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["'][^>]*>/i),
  }
}

async function getCoinMarketCapJsonLd() {
  // Best-effort: may be blocked by CMC protections.
  const url = 'https://coinmarketcap.com/currencies/magiccraft/'
  const res = await safeFetchText(url, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36',
      accept: 'text/html,application/xhtml+xml',
    },
  })
  if (!res.ok) return null
  const m = res.text.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)
  if (!m) return null
  const raw = m[1]
  // keep small
  return clamp(raw, 4000)
}

function buildFaqText() {
  const items = ((faq as unknown as FaqItem[]) || []).slice(0, 30).map((q) => {
    const question = clamp(q?.question || '', 240)
    const answer = clamp(stripHtml(q?.answer || ''), 900)
    return `Q: ${question}\nA: ${answer}`
  })
  return items.join('\n\n')
}

function systemPrompt(opts: {
  faqText: string
  market: { usd: number; usd_24h_change: number | null; source: string } | null
  cmcJsonLd: string | null
  cgProfile: unknown | null
  siteMeta: unknown | null
}) {
  const marketLine = opts.market
    ? `Market snapshot (${opts.market.source}): $MCRT ≈ $${opts.market.usd}${
        typeof opts.market.usd_24h_change === 'number'
          ? ` (${opts.market.usd_24h_change.toFixed(2)}% 24h)`
          : ''
      }`
    : 'Market snapshot: unavailable right now.'

  const cmcBlock = opts.cmcJsonLd ? `\n\nCoinMarketCap JSON-LD (best-effort, may be partial):\n${opts.cmcJsonLd}` : ''
  const cgBlock = opts.cgProfile ? `\n\nCoinGecko project profile (trimmed):\n${clamp(JSON.stringify(opts.cgProfile), 5000)}` : ''
  const siteBlock = opts.siteMeta ? `\n\nmagiccraft.io homepage meta (best-effort):\n${clamp(JSON.stringify(opts.siteMeta), 1500)}` : ''
  const networkBlock = `
Official ecosystem/network projects and systems:
- MagicCraft + $MCRT hub: ${SOURCES.magiccraft}
- MagicAds ad network: ${SOURCES.magicads}
  - AI-native cross-banner ad network for hosts/publishers and advertisers
  - Uses $MCRT and Stripe payment rails
- Akyn: ${SOURCES.akyn}
- Merlin AI: ${SOURCES.merlin}
- DocAI: ${SOURCES.docai}
- Polybilities: ${SOURCES.polybilities}
- SocialMM: ${SOURCES.socialmm}
- DragonList: ${SOURCES.dragonlist}
`.trim()

  return `
You are MagicCraft Live Support, an AI assistant for MagicCraft, $MCRT, MagicAds, and the full network ecosystem.

Goals:
- Answer questions about $MCRT, MagicCraft, MagicAds, and related network projects/systems clearly and concisely.
- When you cite facts that can change (price, listings, supply), say the source and provide a link.
- If you are unsure, say so and suggest the best next step (official link).

Hard rules:
- Never claim you executed transactions or accessed private user data.
- Never ask for seed phrases or private keys.
- Do not invent partnerships, listings, contract addresses, or tokenomics. If not present in provided context, ask user to confirm or point to official sources.
- When asked about ecosystem projects, use the official network list in context and cite the relevant project URL(s).

Response format (always):
- Start with a short answer.
- End with a section:
  Sources:
  - <url>
  - <url>

Context you can rely on:
${marketLine}
${networkBlock}

MagicCraft FAQ (from magiccraft.io site bundle):
${opts.faqText}
${siteBlock}
${cgBlock}
${cmcBlock}
`.trim()
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'content-type',
        'access-control-allow-methods': 'POST, OPTIONS',
      },
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        error:
          'Live support is not configured. Missing OPENROUTER_API_KEY environment variable on the server.',
      }),
    }
  }

  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL

  let payload: any = null
  try {
    payload = (event.body ? (JSON.parse(event.body) as IncomingPayload) : {}) satisfies IncomingPayload
  } catch {
    payload = {} satisfies IncomingPayload
  }

  const message = clamp((payload as IncomingPayload)?.message || '', 2000)
  const history = Array.isArray((payload as IncomingPayload)?.history) ? (payload as IncomingPayload).history! : []

  if (!message) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: 'Missing message' }),
    }
  }

  const safeHistory = history
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-12)
    .map((m) => ({ role: m.role, content: clamp(m.content, 1500) }))

  const [market, cgProfile, siteMeta, cmcJsonLd] = await Promise.all([
    getMarketSnapshot(),
    getCoinGeckoProfile(),
    getMagiccraftHomepageMeta(),
    getCoinMarketCapJsonLd(),
  ])
  const faqText = buildFaqText()

  const sys = systemPrompt({ faqText, market, cmcJsonLd, cgProfile, siteMeta })

  try {
    const orRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
        // Optional but recommended by OpenRouter
        'http-referer': 'https://magiccraft.io',
        'x-title': 'MagicCraft Live Support',
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 500,
        messages: [{ role: 'system', content: sys }, ...safeHistory, { role: 'user', content: message }],
      }),
    })

    const text = await orRes.text()
    if (!orRes.ok) {
      return {
        statusCode: orRes.status,
        headers: { 'content-type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ error: `Upstream error (${orRes.status})`, details: text.slice(0, 2000) }),
      }
    }

    const json = JSON.parse(text)
    const content =
      json?.choices?.[0]?.message?.content ||
      json?.choices?.[0]?.delta?.content ||
      ''

    const raw = String(content || '').trim()
    const hasSources =
      /\bSources\b\s*:/i.test(raw) ||
      /\bSource\b\s*:/i.test(raw) ||
      /(https?:\/\/[^\s)]+)/i.test(raw)

    const appended = hasSources
      ? raw
      : `${raw}\n\nSources:\n- ${SOURCES.magiccraft}\n- ${SOURCES.magicads}\n- ${SOURCES.magiccraftFaq}\n- ${SOURCES.coingeckoCoin}\n- ${SOURCES.coinmarketcapCoin}`.trim()

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
      body: JSON.stringify({ message: appended }),
    }
  } catch (e: unknown) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: e instanceof Error ? e.message : String(e) }),
    }
  }
}

