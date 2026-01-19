import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type NodeGroup =
  | 'token'
  | 'exchanges'
  | 'ai'
  | 'game'
  | 'community'
  | 'team'
  | 'tech'

type MapNode = {
  id: string
  label: string
  group: NodeGroup
  url?: string
  description?: string
}

type MapLink = { source: string; target: string }

type Props = {
  open: boolean
  onClose: () => void
  onSeen?: () => void
}

type SimNode = MapNode & {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const GROUP_COLORS: Record<NodeGroup, string> = {
  token: '#98FFF9',
  exchanges: '#FFB649',
  ai: '#B591F2',
  game: '#8EFF49',
  community: '#60A5FA',
  team: '#F472B6',
  tech: '#A3A3A3',
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

export default function EcosystemMindMap({ open, onClose, onSeen }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [tip, setTip] = useState<{ left: number; top: number } | null>(null)

  const { nodes, links } = useMemo(() => {
    const mcrtContract = '0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f'
    const base: MapNode[] = [
      { id: 'mcrt', label: '$MCRT', group: 'token', url: 'https://magiccraft.io', description: 'BNB Chain token powering MagicCraft + AI.' },

      { id: 'tokenomics', label: 'Tokenomics', group: 'token', url: 'https://docs.magiccraft.io/usdmcrt-token/tokenomics' },
      { id: 'bsc', label: 'BNB Chain (BEP‑20)', group: 'tech', url: 'https://bscscan.com/token/' + mcrtContract },
      { id: 'contract', label: 'Contract', group: 'tech', url: 'https://bscscan.com/token/' + mcrtContract, description: mcrtContract },

      { id: 'bybit', label: 'Bybit', group: 'exchanges', url: 'https://www.bybit.com/en/trade/spot/MCRT/USDT' },
      { id: 'htx', label: 'HTX', group: 'exchanges', url: 'https://www.htx.com/trade/mcrt_usdt' },
      { id: 'mexc', label: 'MEXC', group: 'exchanges', url: 'https://www.mexc.com/exchange/MCRT_USDT' },
      { id: 'gate', label: 'Gate.io', group: 'exchanges', url: 'https://www.gate.io/trade/MCRT_USDT' },
      { id: 'bitmart', label: 'Bitmart', group: 'exchanges', url: 'https://www.bitmart.com/trade/en-US?symbol=MCRT_USDT' },
      { id: 'pancake', label: 'PancakeSwap', group: 'exchanges', url: `https://pancakeswap.finance/swap?outputCurrency=${mcrtContract}` },

      { id: 'game', label: 'MagicCraft MOBA', group: 'game', url: 'https://magiccraft.io/download' },
      { id: 'lobbies', label: 'Crypto Lobbies', group: 'game', url: 'https://lobby.magiccraft.io/' },
      { id: 'market', label: 'Marketplace', group: 'game', url: 'https://app.magiccraft.io/marketplace/explorer' },
      { id: 'mint', label: 'Genesis / Revelation NFTs', group: 'game', url: 'https://app.magiccraft.io/nft_mint' },
      { id: 'craftsell', label: 'Craft & Sell', group: 'game', url: 'https://app.magiccraft.io/marketplace/explorer', description: 'Creator crafting + selling inside ecosystem.' },
      { id: 'gamemaker', label: 'Game Maker (Steam)', group: 'game', url: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/' },

      { id: 'akyn', label: 'Akyn', group: 'ai', url: 'https://www.akyn.pro', description: 'AI shorts & video maker for social content.' },
      { id: 'merlin', label: 'Merlin AI', group: 'ai', url: 'https://merlintheai.com' },
      { id: 'docai', label: 'DocAI', group: 'ai', url: 'https://docai.live' },
      { id: 'polibilities', label: 'Polibilities', group: 'ai', url: 'https://polibilities.com' },
      { id: 'socialmm', label: 'SocialMM', group: 'ai', url: 'https://socialmm.com' },
      { id: 'dragonlist', label: 'DragonList', group: 'ai', url: 'https://dragonlist.ai' },

      { id: 'discord', label: 'Discord', group: 'community', url: 'https://discord.gg/magiccraftgame' },
      { id: 'telegram', label: 'Telegram', group: 'community', url: 'https://t.me/magiccraftgamechat' },
      { id: 'x', label: 'X', group: 'community', url: 'https://x.com/MagicCraftGame' },
      { id: 'youtube', label: 'YouTube', group: 'community', url: 'https://www.youtube.com/@MagicCraftGame' },

      { id: 'team', label: 'Team (10)', group: 'team', description: '4 devs • 2 marketing • 10 total' },
      { id: 'dev', label: 'Devs (4)', group: 'team' },
      { id: 'mkt', label: 'Marketing (2)', group: 'team' },
      { id: 'ops', label: 'Ops / other', group: 'team' },

      { id: 'stack', label: 'Website stack', group: 'tech', description: 'React • TypeScript • Vite • Netlify • Tailwind' },
      { id: 'netlify', label: 'Netlify Functions', group: 'tech', url: 'https://magiccraft.io/.netlify/functions/status' },
    ]

    const linkList: MapLink[] = [
      { source: 'mcrt', target: 'tokenomics' },
      { source: 'mcrt', target: 'bsc' },
      { source: 'bsc', target: 'contract' },

      { source: 'mcrt', target: 'bybit' },
      { source: 'mcrt', target: 'htx' },
      { source: 'mcrt', target: 'mexc' },
      { source: 'mcrt', target: 'gate' },
      { source: 'mcrt', target: 'bitmart' },
      { source: 'mcrt', target: 'pancake' },

      { source: 'mcrt', target: 'game' },
      { source: 'mcrt', target: 'lobbies' },
      { source: 'mcrt', target: 'market' },
      { source: 'mcrt', target: 'mint' },
      { source: 'mcrt', target: 'craftsell' },
      { source: 'mcrt', target: 'gamemaker' },

      { source: 'mcrt', target: 'akyn' },
      { source: 'mcrt', target: 'merlin' },
      { source: 'mcrt', target: 'docai' },
      { source: 'mcrt', target: 'polibilities' },
      { source: 'mcrt', target: 'socialmm' },
      { source: 'mcrt', target: 'dragonlist' },

      { source: 'mcrt', target: 'discord' },
      { source: 'mcrt', target: 'telegram' },
      { source: 'mcrt', target: 'x' },
      { source: 'mcrt', target: 'youtube' },

      { source: 'team', target: 'dev' },
      { source: 'team', target: 'mkt' },
      { source: 'team', target: 'ops' },
      { source: 'mcrt', target: 'team' },

      { source: 'mcrt', target: 'stack' },
      { source: 'stack', target: 'netlify' },
    ]

    return { nodes: base, links: linkList }
  }, [])

  // Stable sim nodes stored in ref, rebuilt when opened
  const simRef = useRef<{ nodes: SimNode[]; links: Array<{ a: SimNode; b: SimNode }> } | null>(null)

  useEffect(() => {
    if (!open) return
    onSeen?.()

    const wrapEl = wrapRef.current
    const canvasEl = canvasRef.current
    if (!wrapEl || !canvasEl) return

    const ctx = canvasEl.getContext('2d')
    if (!ctx) return
    const ctx2d = ctx

    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0

    function resize() {
      if (!wrapEl || !canvasEl) return
      const rect = wrapEl.getBoundingClientRect()
      width = Math.max(320, Math.floor(rect.width))
      height = Math.max(280, Math.floor(rect.height))
      canvasEl.width = Math.floor(width * dpr)
      canvasEl.height = Math.floor(height * dpr)
      canvasEl.style.width = `${width}px`
      canvasEl.style.height = `${height}px`
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrapEl)
    resize()

    // init sim
    const centerX = width / 2
    const centerY = height / 2
    const simNodes: SimNode[] = nodes.map((n, idx) => {
      const angle = (idx / nodes.length) * Math.PI * 2
      const radius = n.id === 'mcrt' ? 0 : 60 + (idx % 6) * 18
      const r = n.id === 'mcrt' ? 18 : 12
      return {
        ...n,
        x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 30,
        y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 30,
        vx: 0,
        vy: 0,
        r,
      }
    })

    const nodeById = new Map(simNodes.map((n) => [n.id, n]))
    const simLinks = links
      .map((l) => ({ a: nodeById.get(l.source), b: nodeById.get(l.target) }))
      .filter((x): x is { a: SimNode; b: SimNode } => !!x.a && !!x.b)

    simRef.current = { nodes: simNodes, links: simLinks }

    const REPULSION = 1200
    const LINK_DIST = 95
    const LINK_STRENGTH = 0.015
    const CENTER_PULL = 0.006
    const DAMP = 0.88

    function tick() {
      const sim = simRef.current
      if (!sim) return
      const ns = sim.nodes
      const ls = sim.links

      // forces
      for (let i = 0; i < ns.length; i++) {
        const n = ns[i]
        // center force
        const dxC = centerX - n.x
        const dyC = centerY - n.y
        n.vx += dxC * CENTER_PULL
        n.vy += dyC * CENTER_PULL

        // mild boundary
        n.vx += (clamp(n.x, 24, width - 24) - n.x) * 0.02
        n.vy += (clamp(n.y, 24, height - 24) - n.y) * 0.02
      }

      // repulsion (O(n^2) but small n)
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const a = ns[i]
          const b = ns[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy + 0.01
          const f = REPULSION / d2
          const fx = (dx / Math.sqrt(d2)) * f
          const fy = (dy / Math.sqrt(d2)) * f
          a.vx += fx
          a.vy += fy
          b.vx -= fx
          b.vy -= fy
        }
      }

      // links spring
      for (const l of ls) {
        const dx = l.b.x - l.a.x
        const dy = l.b.y - l.a.y
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const diff = dist - LINK_DIST
        const k = LINK_STRENGTH
        const fx = (dx / dist) * diff * k
        const fy = (dy / dist) * diff * k
        l.a.vx += fx
        l.a.vy += fy
        l.b.vx -= fx
        l.b.vy -= fy
      }

      // integrate
      for (const n of ns) {
        n.vx *= DAMP
        n.vy *= DAMP
        n.x += n.vx
        n.y += n.vy
      }

      // draw
      ctx2d.clearRect(0, 0, width, height)

      // links
      ctx2d.lineWidth = 1
      ctx2d.strokeStyle = 'rgba(255,255,255,0.10)'
      ctx2d.beginPath()
      for (const l of ls) {
        ctx2d.moveTo(l.a.x, l.a.y)
        ctx2d.lineTo(l.b.x, l.b.y)
      }
      ctx2d.stroke()

      // nodes
      const hovered = hoveredId ? nodeById.get(hoveredId) : null
      for (const n of ns) {
        const color = GROUP_COLORS[n.group]
        const isHovered = hovered?.id === n.id
        ctx2d.beginPath()
        ctx2d.fillStyle = isHovered ? color : 'rgba(255,255,255,0.08)'
        ctx2d.strokeStyle = isHovered ? 'rgba(255,255,255,0.45)' : color + '55'
        ctx2d.lineWidth = isHovered ? 2 : 1
        ctx2d.arc(n.x, n.y, isHovered ? n.r + 2 : n.r, 0, Math.PI * 2)
        ctx2d.fill()
        ctx2d.stroke()

        // label
        ctx2d.font = n.id === 'mcrt' ? '700 13px system-ui' : '600 11px system-ui'
        ctx2d.fillStyle = isHovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)'
        ctx2d.textAlign = 'center'
        ctx2d.textBaseline = 'top'
        ctx2d.fillText(n.label, n.x, n.y + n.r + 6)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      simRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  function pickNode(clientX: number, clientY: number) {
    const wrap = wrapRef.current
    const sim = simRef.current
    if (!wrap || !sim) return null
    const rect = wrap.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    let best: SimNode | null = null
    let bestD = Infinity
    for (const n of sim.nodes) {
      const dx = n.x - x
      const dy = n.y - y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < n.r + 10 && d < bestD) {
        best = n
        bestD = d
      }
    }
    if (best) {
      setHoveredId(best.id)
      setTip({ left: clamp(best.x + 12, 12, rect.width - 12), top: clamp(best.y - 12, 12, rect.height - 12) })
      return best
    }
    setHoveredId(null)
    setTip(null)
    return null
  }

  function onClick(e: React.MouseEvent) {
    const n = pickNode(e.clientX, e.clientY)
    if (n?.url) window.open(n.url, '_blank', 'noreferrer,noopener')
  }

  if (!open) return null

  const hovered = hoveredId ? nodes.find((n) => n.id === hoveredId) : null

  return createPortal(
    <div className="fixed inset-0 z-[200000]">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
        <div className="w-full max-w-5xl rounded-md border border-white/10 bg-[#0B0F39]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">MagicCraft Ecosystem Map</div>
              <div className="text-xs text-white/60">Hover nodes to see details. Click to open.</div>
            </div>
            <button onClick={onClose} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-white/80 hover:bg-white/10 transition-colors">
              Close
            </button>
          </div>
          <div className="relative">
            <div
              ref={wrapRef}
              className="relative w-full h-[60vh] min-h-[360px] max-h-[640px] bg-gradient-to-b from-[#050317] to-[#03082f]"
              onMouseMove={(e) => pickNode(e.clientX, e.clientY)}
              onMouseLeave={() => { setHoveredId(null); setTip(null) }}
              onClick={onClick}
            >
              <canvas ref={canvasRef} className="absolute inset-0" />
              {hovered && tip && (
                <div
                  className="absolute z-10 w-[240px] -translate-x-1/2 rounded-md border border-white/10 bg-black/70 backdrop-blur p-3 text-xs text-white/85"
                  style={{ left: tip.left, top: tip.top }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold text-white">{hovered.label}</div>
                    <div className="text-[10px]" style={{ color: GROUP_COLORS[hovered.group] }}>{hovered.group.toUpperCase()}</div>
                  </div>
                  {hovered.description && <div className="mt-1 text-white/75">{hovered.description}</div>}
                  {hovered.url && (
                    <div className="mt-2 text-[#98FFF9] break-all">
                      {hovered.url}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="px-4 py-3 border-t border-white/10 flex flex-wrap gap-2 text-[11px] text-white/70">
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.token }} /> Token</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.exchanges }} /> Exchanges</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.ai }} /> AI</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.game }} /> Game</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.community }} /> Community</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.team }} /> Team</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: GROUP_COLORS.tech }} /> Tech</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

