/// <reference types="node" />

// Read-only aggregation of recent public X links mentioning MCRT. Nitter
// mirrors are best-effort dependencies, so this function has strict request
// and total budgets and never fabricates fallback posts.

import type { Handler } from '@netlify/functions'

const NITTER_HOSTS = [
  'https://nitter.net',
  'https://nitter.pufe.org',
  'https://nitter.poast.org',
  'https://nitter.hu',
  'https://n.opnxng.com',
  'https://nitter.holo.host',
]

const SEARCH_URL =
  'https://x.com/search?q=%24MCRT%20OR%20%40MagicCraftGame&src=typed_query&f=live'
const DEFAULT_REQUEST_TIMEOUT_MS = 1200
const DEFAULT_TOTAL_BUDGET_MS = 5000
const DEFAULT_MAX_HOSTS = 4
const MAX_RESPONSE_BYTES = 1_000_000

type TweetItem = {
  url: string
  handle: string
  text: string
  ts: number
}

class FetchFailure extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FetchFailure'
  }
}

const viaProxy = (host: string, path: string) => {
  const bare = host.replace(/^https?:\/\//, '')
  return `https://r.jina.ai/http://${bare}${path}`
}

function configuredNumber(
  name: string,
  fallback: number,
  minimum: number,
  maximum: number
) {
  const value = Number(process.env[name])
  if (!Number.isFinite(value)) return fallback
  return Math.max(minimum, Math.min(maximum, Math.floor(value)))
}

function decodeXml(input: string) {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function cleanText(input: string) {
  return decodeXml(input)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseRss(xml: string): TweetItem[] {
  return xml
    .split('<item>')
    .slice(1)
    .flatMap((item) => {
      const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/)
      if (!linkMatch) return []

      const link = decodeXml(linkMatch[1]).trim()
      const statusMatch = link.match(
        /https?:\/\/[^/]+\/([A-Za-z0-9_]+)\/status\/(\d+)/
      )
      if (!statusMatch) return []

      const titleMatch = item.match(/<title>([\s\S]*?)<\/title>/)
      const dateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const handle = statusMatch[1]
      const id = statusMatch[2]

      return [
        {
          url: `https://x.com/${handle}/status/${id}`,
          handle,
          text: titleMatch ? cleanText(titleMatch[1]) : '',
          ts: dateMatch ? Date.parse(cleanText(dateMatch[1])) || 0 : 0,
        },
      ]
    })
}

function parseHtml(html: string): TweetItem[] {
  return Array.from(
    html.matchAll(/href="\/(?:i\/web\/)?([A-Za-z0-9_]+)\/status\/(\d+)"/g)
  ).map((match) => ({
    url: `https://x.com/${match[1]}/status/${match[2]}`,
    handle: match[1],
    text: '',
    ts: 0,
  }))
}

async function fetchText(url: string, deadlineAt: number) {
  const remaining = deadlineAt - Date.now()
  if (remaining <= 0) throw new FetchFailure('deadline_exceeded')

  const requestBudget = configuredNumber(
    'MCRT_MENTIONS_REQUEST_TIMEOUT_MS',
    DEFAULT_REQUEST_TIMEOUT_MS,
    50,
    3000
  )
  const controller = new AbortController()
  const timeout = setTimeout(
    () => controller.abort(),
    Math.max(1, Math.min(requestBudget, remaining))
  )

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/rss+xml, application/xml, text/html',
        'User-Agent': 'MagicCraftMentions/1.0 (+https://magiccraft.io)',
      },
    })
    if (!response.ok) throw new FetchFailure(`http_${response.status}`)

    const contentLength = Number(response.headers.get('content-length'))
    if (Number.isFinite(contentLength) && contentLength > MAX_RESPONSE_BYTES) {
      throw new FetchFailure('response_too_large')
    }

    const text = await response.text()
    if (text.length > MAX_RESPONSE_BYTES) {
      throw new FetchFailure('response_too_large')
    }
    return text
  } catch (error) {
    if (error instanceof FetchFailure) throw error
    if (error instanceof Error && error.name === 'AbortError') {
      throw new FetchFailure('timeout')
    }
    throw new FetchFailure('request_failed')
  } finally {
    clearTimeout(timeout)
  }
}

async function fetchHost(host: string, path: string, deadlineAt: number) {
  const attempts = await Promise.allSettled([
    fetchText(viaProxy(host, path), deadlineAt),
    fetchText(`${host}${path}`, deadlineAt),
  ])
  const success = attempts.find(
    (attempt): attempt is PromiseFulfilledResult<string> =>
      attempt.status === 'fulfilled' && attempt.value.length > 0
  )
  return success?.value || null
}

async function firstAvailable(path: string, deadlineAt: number) {
  const maxHosts = configuredNumber(
    'MCRT_MENTIONS_MAX_HOSTS',
    DEFAULT_MAX_HOSTS,
    1,
    NITTER_HOSTS.length
  )

  for (const host of NITTER_HOSTS.slice(0, maxHosts)) {
    if (Date.now() >= deadlineAt) return null
    const body = await fetchHost(host, path, deadlineAt)
    if (body) return body
  }
  return null
}

async function collectMentions(deadlineAt: number) {
  const queries = ['%24MCRT', '%40MagicCraftGame']
  const rssBodies = await Promise.all(
    queries.map((query) =>
      firstAvailable(`/search/rss?f=tweets&q=${query}`, deadlineAt)
    )
  )
  const rssItems = rssBodies.flatMap((body) => (body ? parseRss(body) : []))
  if (rssItems.length > 0 || Date.now() >= deadlineAt) return rssItems

  const html = await firstAvailable(
    '/search?f=tweets&q=%24MCRT&since=&until=&near=',
    deadlineAt
  )
  return html ? parseHtml(html) : []
}

function normalizeCount(input: string | undefined) {
  const parsed = Number.parseInt(input || '8', 10)
  return Number.isFinite(parsed) ? Math.max(1, Math.min(24, parsed)) : 8
}

export const handler: Handler = async (event) => {
  const checkedAt = new Date().toISOString()
  const totalBudget = configuredNumber(
    'MCRT_MENTIONS_TOTAL_TIMEOUT_MS',
    DEFAULT_TOTAL_BUDGET_MS,
    100,
    8000
  )
  const count = normalizeCount(event.queryStringParameters?.count)
  const deadlineAt = Date.now() + totalBudget

  let collected: TweetItem[] = []
  try {
    collected = await collectMentions(deadlineAt)
  } catch {
    collected = []
  }

  const unique = new Map<string, TweetItem>()
  for (const item of collected) unique.set(item.url, item)
  const tweets = Array.from(unique.values())
    .sort((a, b) => b.ts - a.ts)
    .slice(0, count)
    .map(({ url, handle, text }) => ({ url, handle, text }))

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': tweets.length
        ? 'public, max-age=300, stale-while-revalidate=600'
        : 'public, max-age=60',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      tweets,
      status: tweets.length ? 'live' : 'unavailable',
      checkedAt,
      searchUrl: SEARCH_URL,
    }),
  }
}

export default {}
