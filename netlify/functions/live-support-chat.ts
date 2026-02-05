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
}) {
  const marketLine = opts.market
    ? `Market snapshot (${opts.market.source}): $MCRT ≈ $${opts.market.usd}${
        typeof opts.market.usd_24h_change === 'number'
          ? ` (${opts.market.usd_24h_change.toFixed(2)}% 24h)`
          : ''
      }`
    : 'Market snapshot: unavailable right now.'

  const cmcBlock = opts.cmcJsonLd ? `\n\nCoinMarketCap JSON-LD (best-effort, may be partial):\n${opts.cmcJsonLd}` : ''

  return `
You are MagicCraft Live Support, an AI assistant for MagicCraft and $MCRT.

Goals:
- Answer questions about $MCRT, MagicCraft, and related projects clearly and concisely.
- When you cite facts that can change (price, listings, supply), say the source and provide a link.
- If you are unsure, say so and suggest the best next step (official link).

Hard rules:
- Never claim you executed transactions or accessed private user data.
- Never ask for seed phrases or private keys.
- Do not invent partnerships, listings, contract addresses, or tokenomics. If not present in provided context, ask user to confirm or point to official sources.

Context you can rely on:
${marketLine}

MagicCraft FAQ (from magiccraft.io site bundle):
${opts.faqText}
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

  const [market, cmcJsonLd] = await Promise.all([getMarketSnapshot(), getCoinMarketCapJsonLd()])
  const faqText = buildFaqText()

  const sys = systemPrompt({ faqText, market, cmcJsonLd })

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

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
      body: JSON.stringify({ message: String(content || '').trim() }),
    }
  } catch (e: unknown) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: e instanceof Error ? e.message : String(e) }),
    }
  }
}

