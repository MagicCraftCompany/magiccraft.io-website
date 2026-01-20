import type { Handler } from '@netlify/functions'

export const handler: Handler = async () => {
  try {
    const url =
      'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true'
    const res = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })

    const text = await res.text()

    return {
      statusCode: res.ok ? 200 : res.status,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        // Short cache to reduce rate-limit risk while keeping UI fresh.
        'cache-control': 'public, max-age=30',
      },
      body: text,
    }
  } catch (e: any) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: String(e?.message || e) }),
    }
  }
}

