/// <reference types="node" />
import type { Handler } from '@netlify/functions'

const DEFAULT_BASE_URL = 'http://prod-gameserver.magiccraft.io:8903'

export const handler: Handler = async () => {
  const baseUrl = process.env.GAMESERVER_API_URL || process.env.REACT_APP_GAMESERVER_API_URL || DEFAULT_BASE_URL
  const apiKey = process.env.GAMESERVER_API_KEY || process.env.REACT_APP_GAMESERVER_API_KEY || ''

  try {
    const targetUrl = `${baseUrl.replace(/\/$/, '')}/battlepass/active`
    const res = await fetch(targetUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return {
        statusCode: res.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store',
        },
        body: JSON.stringify({ error: 'Upstream error', status: res.status, message: text }),
      }
    }

    const json = await res.text()
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60',
      },
      body: json,
    }
  } catch (error: any) {
    return {
      statusCode: 502,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Proxy failed', message: String(error?.message || error) }),
    }
  }
}

export default {}


