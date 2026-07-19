/// <reference types="node" />

import type { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions'

const FORM_NAME = 'grants'
const DEFAULT_TIMEOUT_MS = 6000
const MAX_TEXT_LENGTH = 10_000
const ALLOWED_CATEGORIES = new Set(['game', 'web3-ai', 'crypto'])

class IntakeError extends Error {
  status: number | null

  constructor(message: string, status: number | null = null) {
    super(message)
    this.name = 'IntakeError'
    this.status = status
  }
}

function jsonResponse(
  statusCode: number,
  body: Record<string, unknown>
): HandlerResponse {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  }
}

function value(params: URLSearchParams, key: string, max = MAX_TEXT_LENGTH) {
  return (params.get(key) || '').trim().slice(0, max)
}

function isEmail(input: string) {
  return input.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

function isHttpUrl(input: string) {
  try {
    const parsed = new URL(input)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function isNonNegativeNumber(input: string) {
  if (!input) return true
  const parsed = Number(input)
  return Number.isFinite(parsed) && parsed >= 0
}

function isChecked(input: string) {
  return ['1', 'on', 'true', 'yes'].includes(input.toLowerCase())
}

function parseAndValidate(event: HandlerEvent) {
  const params = new URLSearchParams(event.body || '')
  const botField = value(params, 'bot-field', 200)

  // Netlify's honeypot contract accepts the request without storing it so bots
  // do not learn that they were detected. The visible form leaves this blank.
  if (botField) return { spam: true as const }

  const data = {
    teamName: value(params, 'teamName', 200),
    email: value(params, 'email', 254),
    projectName: value(params, 'projectName', 200),
    url: value(params, 'url', 2048),
    category: value(params, 'category', 50),
    amountUsd: value(params, 'amountUsd', 50),
    amountMcrt: value(params, 'amountMcrt', 50),
    mcrtPlan: value(params, 'mcrtPlan', 2000),
    wallet: value(params, 'wallet', 200),
    description: value(params, 'description'),
    links: value(params, 'links'),
    hasBuild: value(params, 'hasBuild', 20),
  }

  const errors: string[] = []
  if (!data.teamName) errors.push('teamName')
  if (!isEmail(data.email)) errors.push('email')
  if (!data.projectName) errors.push('projectName')
  if (!isHttpUrl(data.url)) errors.push('url')
  if (!ALLOWED_CATEGORIES.has(data.category)) errors.push('category')
  if (!data.description) errors.push('description')
  if (!isChecked(data.hasBuild)) errors.push('hasBuild')
  if (!isNonNegativeNumber(data.amountUsd)) errors.push('amountUsd')
  if (!isNonNegativeNumber(data.amountMcrt)) errors.push('amountMcrt')

  return errors.length > 0
    ? { spam: false as const, errors }
    : { spam: false as const, errors: [], data }
}

function getIntakeEndpoint() {
  const explicitEndpoint = process.env.GRANTS_FORM_ENDPOINT?.trim()
  const siteOrigin =
    process.env.URL?.trim() || process.env.DEPLOY_PRIME_URL?.trim()
  const configured = explicitEndpoint || siteOrigin

  if (!configured) throw new IntakeError('submission_service_not_configured')

  try {
    const endpoint = new URL(configured)
    if (endpoint.protocol !== 'https:' && endpoint.hostname !== 'localhost') {
      throw new Error('insecure endpoint')
    }
    return explicitEndpoint
      ? endpoint.toString()
      : new URL('/', endpoint).toString()
  } catch {
    throw new IntakeError('invalid_submission_service_url')
  }
}

function timeoutMs() {
  const configured = Number(process.env.GRANTS_FORM_TIMEOUT_MS)
  if (!Number.isFinite(configured)) return DEFAULT_TIMEOUT_MS
  return Math.max(250, Math.min(10_000, configured))
}

async function submitToNetlifyForms(params: URLSearchParams) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs())

  try {
    const response = await fetch(getIntakeEndpoint(), {
      method: 'POST',
      redirect: 'manual',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'text/html,application/json',
        'User-Agent': 'MagicCraftGrants/1.0',
      },
      body: params.toString(),
    })

    if (response.status < 200 || response.status >= 300) {
      throw new IntakeError('submission_service_rejected', response.status)
    }
  } catch (error) {
    if (error instanceof IntakeError) throw error
    if (error instanceof Error && error.name === 'AbortError') {
      throw new IntakeError('submission_service_timeout')
    }
    throw new IntakeError('submission_service_unavailable')
  } finally {
    clearTimeout(timeout)
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      ...jsonResponse(405, { error: 'method_not_allowed' }),
      headers: {
        ...jsonResponse(405, {}).headers,
        Allow: 'POST',
      },
    }
  }

  const parsed = parseAndValidate(event)

  if (parsed.spam) {
    return {
      statusCode: 204,
      headers: { 'Cache-Control': 'no-store' },
      body: '',
    }
  }

  if (parsed.errors.length > 0 || !('data' in parsed)) {
    return jsonResponse(400, {
      error: 'invalid_submission',
      fields: parsed.errors,
    })
  }

  const intake = new URLSearchParams({
    'form-name': FORM_NAME,
    subject: `New MagicCraft Grants submission - ${parsed.data.projectName.replace(/[\r\n]+/g, ' ')}`,
    ...parsed.data,
    hasBuild: 'yes',
  })

  try {
    await submitToNetlifyForms(intake)
    return {
      statusCode: 303,
      headers: {
        Location: '/grants/success?accepted=1',
        'Cache-Control': 'no-store',
      },
      body: '',
    }
  } catch (error) {
    const intakeError =
      error instanceof IntakeError
        ? error
        : new IntakeError('submission_service_unavailable')

    console.error('[submit-grants] intake failed', {
      code: intakeError.message,
      status: intakeError.status,
    })

    const statusCode = intakeError.message.includes('not_configured')
      ? 503
      : 502
    return jsonResponse(statusCode, {
      error: 'submission_not_accepted',
      code: intakeError.message,
      retryable: statusCode === 502,
    })
  }
}

export default {}
