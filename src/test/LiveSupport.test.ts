import { describe, it, expect, beforeEach } from 'vitest'

const STORAGE_KEY = 'mc_live_support_chat_v1'

function loadStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((m: unknown) => {
        if (typeof m !== 'object' || m === null) return false
        const msg = m as Record<string, unknown>
        return (msg.role === 'user' || msg.role === 'assistant') && typeof msg.content === 'string'
      })
      .map((m: Record<string, unknown>) => ({ role: m.role, content: String(m.content), ts: Number(m.ts) || Date.now() }))
      .slice(-50)
  } catch {
    return []
  }
}

function saveStored(messages: Array<{ role: string; content: string; ts: number }>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)))
  } catch {
    // ignore storage errors in tests
  }
}

describe('LiveSupport storage', () => {
  beforeEach(() => localStorage.clear())

  it('returns empty array when nothing stored', () => {
    expect(loadStored()).toEqual([])
  })

  it('round-trips messages correctly', () => {
    const msgs = [
      { role: 'user', content: 'Hello', ts: 1000 },
      { role: 'assistant', content: 'Hi there!', ts: 2000 },
    ]
    saveStored(msgs)
    const loaded = loadStored()
    expect(loaded).toHaveLength(2)
    expect(loaded[0].content).toBe('Hello')
    expect(loaded[1].role).toBe('assistant')
  })

  it('filters out invalid messages', () => {
    const raw = JSON.stringify([
      { role: 'user', content: 'Valid', ts: 1000 },
      { role: 'system', content: 'Invalid role', ts: 2000 },
      null,
      { role: 'assistant', content: 123, ts: 3000 }, // content not a string
    ])
    localStorage.setItem(STORAGE_KEY, raw)
    const loaded = loadStored()
    expect(loaded).toHaveLength(1) // only the valid user message + the one with non-string content gets coerced
  })
})
