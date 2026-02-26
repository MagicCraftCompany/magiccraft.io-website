import { useEffect, useMemo, useRef, useState } from 'react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  ts: number
}

const STORAGE_KEY = 'mc_live_support_chat_v1'

function clampText(s: string, max: number) {
  const v = (s || '').trim()
  return v.length > max ? v.slice(0, max) : v
}

function loadStored(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map((m) => ({ role: m.role, content: String(m.content), ts: Number(m.ts) || Date.now() }))
      .slice(-50)
  } catch {
    return []
  }
}

function saveStored(messages: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)))
  } catch {
    // ignore
  }
}

export default function LiveSupportWidget() {
  const [open, setOpen] = useState(false)
  const [showFloating, setShowFloating] = useState(true)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setMessages(loadStored())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    saveStored(messages)
  }, [messages])

  useEffect(() => {
    if (!open) return
    // scroll to bottom when opening
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
    })
    // focus input for faster typing
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [open])

  useEffect(() => {
    // keep list pinned to bottom when new messages arrive
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
    })
  }, [messages.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('mc:live-support:open', onOpen as EventListener)
    return () => window.removeEventListener('mc:live-support:open', onOpen as EventListener)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 640px)') // tailwind sm

    const update = () => {
      if (mq.matches) {
        setShowFloating(true)
        return
      }
      // On mobile, avoid overlapping the hero CTAs: show after scrolling past hero.
      setShowFloating(window.scrollY > window.innerHeight * 0.9)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    mq.addEventListener?.('change', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      mq.removeEventListener?.('change', update)
    }
  }, [])

  const canSend = useMemo(() => !busy && clampText(input, 2000).length > 0, [busy, input])

  const clearChat = () => {
    if (busy) return
    setMessages([])
    setError(null)
    setInput('')
  }

  const send = async () => {
    const text = clampText(input, 2000)
    if (!text || busy) return

    setError(null)
    setBusy(true)
    setInput('')

    const userMsg: ChatMessage = { role: 'user', content: text, ts: Date.now() }
    const next = [...messages, userMsg].slice(-50)
    setMessages(next)

    const controller = new AbortController()
    abortRef.current?.abort()
    abortRef.current = controller

    try {
      const res = await fetch('/.netlify/functions/live-support-chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: next.map((m) => ({ role: m.role, content: m.content })),
        }),
        signal: controller.signal,
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const isLocal =
          typeof window !== 'undefined' && /localhost|127\.0\.0\.1/.test(window.location.hostname)
        if (isLocal && res.status === 404) {
          throw new Error(
            'Live chat backend is not running locally. Use production, or run Netlify dev to enable functions.',
          )
        }
        throw new Error(data?.error || `HTTP ${res.status}`)
      }

      const answer = String(data?.message || '').trim()
      if (!answer) throw new Error('Empty response')

      setMessages((prev) =>
        [...prev, { role: 'assistant' as const, content: answer, ts: Date.now() }].slice(-50),
      )
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === 'AbortError') return
      const msg = e instanceof Error ? e.message : String(e)
      setError(msg || 'Live support is unavailable right now.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      {showFloating && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+4rem)] left-4 z-[100000] inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0a1038]/70 px-3 py-2 text-sm font-semibold text-white/95 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.45)] hover:bg-[#111a4f]/80 hover:border-[#98FFF9]/40 active:scale-[0.98] sm:bottom-4 sm:px-4 sm:py-3"
          aria-label="Open Live Support chat"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#98FFF9]" />
          <span className="sm:hidden">Support</span>
          <span className="hidden sm:inline">Live Support</span>
        </button>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[100001]">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
            onClick={() => (busy ? null : setOpen(false))}
            aria-hidden="true"
          />

          <div className="absolute bottom-4 right-4 left-4 sm:right-auto sm:left-4 sm:w-[460px] animate-fade-in">
            <div className="rounded-2xl overflow-hidden animate-slide-up border border-white/15 bg-gradient-to-b from-[#12183f]/95 via-[#0d1232]/95 to-[#090e28]/95 backdrop-blur-2xl shadow-[0_24px_90px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#98FFF9]" />
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-white">MagicCraft Live Support</div>
                    <div className="text-[11px] text-white/60">AI assistant for $MCRT & the ecosystem</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={clearChat}
                    disabled={busy}
                    aria-label="Clear chat history"
                    className="text-[11px] px-2 py-1 rounded-md border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/10 disabled:opacity-50"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    disabled={busy}
                    className="text-[11px] px-2 py-1 rounded-md border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/10 disabled:opacity-50"
                    aria-label="Close Live Support"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div ref={listRef} className="max-h-[58vh] sm:max-h-[520px] overflow-y-auto px-4 py-3 space-y-3 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))]">
                {messages.length === 0 ? (
                  <div className="text-sm leading-relaxed text-white/80">
                    Ask anything about <span className="text-white">$MCRT</span>, MagicCraft, <span className="text-white">MagicAds</span>, lobbies, pledging/locked balance, and ecosystem projects.
                    <div className="mt-2 text-[12px] text-white/50">
                      Tip: try “What is MagicAds?”, “What is locked balance?”, or “Where can I buy $MCRT?”
                    </div>
                  </div>
                ) : (
                  messages.map((m, idx) => (
                    <div key={idx} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                      <div
                        className={
                          m.role === 'user'
                            ? 'max-w-[88%] rounded-2xl rounded-br-md bg-[#2a356f]/85 border border-[#8bb3ff]/25 px-3 py-2 text-sm leading-relaxed text-white'
                            : 'max-w-[88%] rounded-2xl rounded-bl-md bg-[#0a102f]/85 border border-white/12 px-3 py-2 text-sm leading-relaxed text-white/92'
                        }
                        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))
                )}

                {busy && (
                  <div className="flex justify-start">
                    <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-[#0a102f]/85 border border-white/12 px-3 py-2 text-sm text-white/75">
                      Thinking…
                    </div>
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                    {error}
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-white/10 bg-white/[0.02]">
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        send()
                      }
                    }}
                    placeholder="Type your message…"
                    className="w-full resize-none rounded-xl border border-white/15 bg-black/35 px-3 py-2 text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/40"
                    rows={2}
                    disabled={busy}
                  />
                  <button
                    type="button"
                    onClick={send}
                    disabled={!canSend}
                    className="rounded-xl px-4 py-2 text-sm font-semibold text-[#03082f] bg-gradient-to-r from-[#98FFF9] to-[#B591F2] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
                <div className="mt-2 text-[11px] text-white/50">
                  This is AI support. It may be wrong—verify important info.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

