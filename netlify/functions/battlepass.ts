/// <reference types="node" />

import type { Handler, HandlerResponse } from '@netlify/functions'

type Region = 'europe' | 'asia' | 'america'

const REGION_IPS: Record<Region, string> = {
  europe: '5.9.111.150',
  asia: '51.79.230.134',
  america: '51.222.44.25',
}

const DEFAULT_TIMEOUT_MS = 6000

class ProxyError extends Error {
  code: string

  constructor(code: string) {
    super(code)
    this.name = 'ProxyError'
    this.code = code
  }
}

const headers = (cacheControl = 'no-store') => ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': cacheControl,
})

function jsonResponse(
  statusCode: number,
  body: Record<string, unknown>,
  cacheControl?: string
): HandlerResponse {
  return {
    statusCode,
    headers: headers(cacheControl),
    body: JSON.stringify(body),
  }
}

function normalizeRegion(candidate: string | undefined): Region {
  return candidate === 'asia' || candidate === 'america' ? candidate : 'europe'
}

function timeoutMs() {
  const configured = Number(process.env.GAMESERVER_API_TIMEOUT_MS)
  if (!Number.isFinite(configured)) return DEFAULT_TIMEOUT_MS
  return Math.max(250, Math.min(10_000, configured))
}

function gameServerBase(region: Region, port: string) {
  const override = process.env.GAMESERVER_API_URL?.trim()
  if (!override) return `http://${REGION_IPS[region]}:${port}`

  try {
    const parsed = new URL(override)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      throw new Error('unsupported protocol')
    }
    return override.replace(/\/$/, '')
  } catch {
    throw new ProxyError('invalid_gameserver_url')
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod && event.httpMethod !== 'GET') {
    return {
      ...jsonResponse(405, { error: 'Method not allowed' }),
      headers: { ...headers(), Allow: 'GET' },
    }
  }

  const region = normalizeRegion(event.queryStringParameters?.region)
  const port = process.env.GAMESERVER_API_PORT || '8903'
  const apiKey = process.env.GAMESERVER_API_KEY || ''

  let baseUrl: string
  try {
    baseUrl = gameServerBase(region, port)
  } catch (error) {
    const code =
      error instanceof ProxyError ? error.code : 'invalid_configuration'
    return jsonResponse(503, {
      error: 'Proxy unavailable',
      code,
    })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs())

  try {
    const targetUrl = `${baseUrl}/battlepass/active`
    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'X-API-Key': apiKey,
      },
    })

    if (!response.ok) {
      return jsonResponse(response.status, {
        error: 'Upstream error',
        status: response.status,
      })
    }

    const body = await response.text()
    try {
      JSON.parse(body)
    } catch {
      return jsonResponse(502, {
        error: 'Proxy failed',
        code: 'invalid_upstream_response',
      })
    }

    return {
      statusCode: 200,
      headers: headers('public, max-age=60, stale-while-revalidate=120'),
      body,
    }
  } catch (error) {
    const code =
      error instanceof Error && error.name === 'AbortError'
        ? 'upstream_timeout'
        : 'upstream_unreachable'
    return jsonResponse(502, { error: 'Proxy failed', code })
  } finally {
    clearTimeout(timeout)
  }
}

export default {}
