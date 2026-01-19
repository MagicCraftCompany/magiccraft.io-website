import { useEffect, useMemo, useRef, useState } from 'react'

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

export default function EcosystemMindMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [tip, setTip] = useState<{ left: number; top: number } | null>(null)

  const { nodes, links } = useMemo(() => {
    const mcrtContract = '0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f'
    const base: MapNode[] = [
      { id: 'mcrt', label: '$MCRT', group: 'token', url: 'https://coinmarketcap.com/currencies/magiccraft/', description: 'BNB Chain token powering MagicCraft + AI.' },

      { id: 'tokenomics', label: 'Tokenomics', group: 'token', url: 'https://docs.magiccraft.io/usdmcrt-token/tokenomics' },
      { id: 'bsc', label: 'BNB Chain', group: 'tech', url: 'https://bscscan.com/token/' + mcrtContract },
      { id: 'contract', label: 'Contract', group: 'tech', url: 'https://bscscan.com/token/' + mcrtContract },

      { id: 'bybit', label: 'Bybit', group: 'exchanges', url: 'https://www.bybit.com/en/trade/spot/MCRT/USDT' },
      { id: 'htx', label: 'HTX', group: 'exchanges', url: 'https://www.htx.com/trade/mcrt_usdt' },
      { id: 'mexc', label: 'MEXC', group: 'exchanges', url: 'https://www.mexc.com/exchange/MCRT_USDT' },
      { id: 'gate', label: 'Gate.io', group: 'exchanges', url: 'https://www.gate.io/trade/MCRT_USDT' },
      { id: 'pancake', label: 'PancakeSwap', group: 'exchanges', url: `https://pancakeswap.finance/swap?outputCurrency=${mcrtContract}` },

      { id: 'game', label: 'MagicCraft', group: 'game', url: 'https://magiccraft.io/#download-section' },
      { id: 'lobbies', label: 'Lobbies', group: 'game', url: 'https://lobby.magiccraft.io/' },
      { id: 'market', label: 'Marketplace', group: 'game', url: 'https://app.magiccraft.io/marketplace/explorer' },
      { id: 'mint', label: 'NFTs', group: 'game', url: 'https://app.magiccraft.io/nft_mint' },
      { id: 'gamemaker', label: 'Game Maker', group: 'game', url: 'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/' },

      { id: 'akyn', label: 'Akyn', group: 'ai', url: 'https://www.akyn.pro' },
      { id: 'merlin', label: 'Merlin AI', group: 'ai', url: 'https://merlintheai.com' },
      { id: 'docai', label: 'DocAI', group: 'ai', url: 'https://docai.live' },
      { id: 'polybilities', label: 'Polybilities', group: 'ai', url: 'https://polybilities.com' },
      { id: 'socialmm', label: 'SocialMM', group: 'ai', url: 'https://socialmm.com' },
      { id: 'dragonlist', label: 'DragonList', group: 'ai', url: 'https://dragonlist.ai' },

      { id: 'discord', label: 'Discord', group: 'community', url: 'https://discord.gg/magiccraftgame' },
      { id: 'telegram', label: 'Telegram', group: 'community', url: 'https://t.me/magiccraftgamechat' },
      { id: 'x', label: 'X', group: 'community', url: 'https://x.com/MagicCraftGame' },
    ]

    const linkList: MapLink[] = [
      { source: 'mcrt', target: 'tokenomics' },
      { source: 'mcrt', target: 'bsc' },
      { source: 'bsc', target: 'contract' },

      { source: 'mcrt', target: 'bybit' },
      { source: 'mcrt', target: 'htx' },
      { source: 'mcrt', target: 'mexc' },
      { source: 'mcrt', target: 'gate' },
      { source: 'mcrt', target: 'pancake' },

      { source: 'mcrt', target: 'game' },
      { source: 'mcrt', target: 'lobbies' },
      { source: 'mcrt', target: 'market' },
      { source: 'mcrt', target: 'mint' },
      { source: 'mcrt', target: 'gamemaker' },

      { source: 'mcrt', target: 'akyn' },
      { source: 'mcrt', target: 'merlin' },
      { source: 'mcrt', target: 'docai' },
      { source: 'mcrt', target: 'polybilities' },
      { source: 'mcrt', target: 'socialmm' },
      { source: 'mcrt', target: 'dragonlist' },

      { source: 'mcrt', target: 'discord' },
      { source: 'mcrt', target: 'telegram' },
      { source: 'mcrt', target: 'x' },
    ]

    return { nodes: base, links: linkList }
  }, [])

  const simRef = useRef<{ nodes: SimNode[]; links: Array<{ a: SimNode; b: SimNode }> } | null>(null)

  useEffect(() => {
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
      width = Math.max(200, Math.floor(rect.width))
      height = Math.max(200, Math.floor(rect.height))
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
      const radius = n.id === 'mcrt' ? 0 : 40 + (idx % 5) * 12
      const r = n.id === 'mcrt' ? 14 : 8
      return {
        ...n,
        x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 20,
        y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 20,
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

    const REPULSION = 600
    const LINK_DIST = 55
    const LINK_STRENGTH = 0.02
    const CENTER_PULL = 0.008
    const DAMP = 0.85

    function tick() {
      const sim = simRef.current
      if (!sim) return
      const ns = sim.nodes
      const ls = sim.links

      for (let i = 0; i < ns.length; i++) {
        const n = ns[i]
        const dxC = centerX - n.x
        const dyC = centerY - n.y
        n.vx += dxC * CENTER_PULL
        n.vy += dyC * CENTER_PULL
        n.vx += (clamp(n.x, 20, width - 20) - n.x) * 0.03
        n.vy += (clamp(n.y, 20, height - 20) - n.y) * 0.03
      }

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

      for (const n of ns) {
        n.vx *= DAMP
        n.vy *= DAMP
        n.x += n.vx
        n.y += n.vy
      }

      ctx2d.clearRect(0, 0, width, height)

      ctx2d.lineWidth = 0.5
      ctx2d.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx2d.beginPath()
      for (const l of ls) {
        ctx2d.moveTo(l.a.x, l.a.y)
        ctx2d.lineTo(l.b.x, l.b.y)
      }
      ctx2d.stroke()

      const hovered = hoveredId ? nodeById.get(hoveredId) : null
      for (const n of ns) {
        const color = GROUP_COLORS[n.group]
        const isHovered = hovered?.id === n.id
        ctx2d.beginPath()
        ctx2d.fillStyle = isHovered ? color : 'rgba(255,255,255,0.06)'
        ctx2d.strokeStyle = isHovered ? 'rgba(255,255,255,0.5)' : color + '40'
        ctx2d.lineWidth = isHovered ? 1.5 : 0.5
        ctx2d.arc(n.x, n.y, isHovered ? n.r + 2 : n.r, 0, Math.PI * 2)
        ctx2d.fill()
        ctx2d.stroke()

        ctx2d.font = n.id === 'mcrt' ? '600 10px system-ui' : '500 8px system-ui'
        ctx2d.fillStyle = isHovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)'
        ctx2d.textAlign = 'center'
        ctx2d.textBaseline = 'top'
        ctx2d.fillText(n.label, n.x, n.y + n.r + 3)
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
  }, [])

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
      if (d < n.r + 8 && d < bestD) {
        best = n
        bestD = d
      }
    }
    if (best) {
      setHoveredId(best.id)
      setTip({ left: clamp(best.x + 8, 8, rect.width - 8), top: clamp(best.y - 8, 8, rect.height - 8) })
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

  const hovered = hoveredId ? nodes.find((n) => n.id === hoveredId) : null

  return (
    <div className="w-full h-full relative">
      <div
        ref={wrapRef}
        className="w-full h-full cursor-pointer"
        onMouseMove={(e) => pickNode(e.clientX, e.clientY)}
        onMouseLeave={() => { setHoveredId(null); setTip(null) }}
        onClick={onClick}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        {hovered && tip && (
          <div
            className="absolute z-20 w-[160px] -translate-x-1/2 rounded border border-white/10 bg-black/80 backdrop-blur p-2 text-[10px] text-white/85 pointer-events-none"
            style={{ left: tip.left, top: tip.top }}
          >
            <div className="flex items-center justify-between gap-1">
              <div className="font-semibold text-white text-[11px]">{hovered.label}</div>
              <div className="text-[8px]" style={{ color: GROUP_COLORS[hovered.group] }}>{hovered.group.toUpperCase()}</div>
            </div>
            {hovered.description && <div className="mt-0.5 text-white/70 text-[9px]">{hovered.description}</div>}
            {hovered.url && (
              <div className="mt-1 text-[#98FFF9] text-[8px] truncate">
                Click to open
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
