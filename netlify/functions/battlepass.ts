/// <reference types="node" />
import type { Handler } from '@netlify/functions'

type Region = 'europe' | 'asia' | 'america'

const REGION_IPS: Record<Region, string> = {
  europe: '5.9.111.150',
  asia: '51.79.230.134',
  america: '51.222.44.25',
}

export const handler: Handler = async (event) => {
  const region = (event.queryStringParameters?.region as Region) || 'europe'
  const port = process.env.GAMESERVER_API_PORT || '8913'
  const apiKey = process.env.GAMESERVER_API_KEY || ''
  const baseUrl = `http://${REGION_IPS[region]}:${port}`

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


