import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Bounty = {
  id: string
  title: string
  category: 'Dev' | 'Design' | 'Content' | 'Growth'
  description: string
  rewardUsdMax: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

const bounties: Bounty[] = [
  // Most realistic, high-impact first (quick wins, distribution, integrations)
  { id: 'b10', title: 'Price widget embed', category: 'Dev', description: 'Embeddable $MCRT price widget for websites. Multiple themes, responsive, copy-paste integration.', rewardUsdMax: 100, difficulty: 'Easy' },
  { id: 'b1', title: 'MagicCraft gameplay shorts series', category: 'Content', description: 'Create 10+ engaging 30-60s gameplay shorts showcasing PvP action, $MCRT rewards, and crypto lobbies. Upload to your own YouTube/TikTok.', rewardUsdMax: 150, difficulty: 'Easy' },
  { id: 'b11', title: 'Twitter thread series', category: 'Content', description: 'Create engaging Twitter threads about MagicCraft features, $MCRT utility, gaming tips. 10+ threads with visuals.', rewardUsdMax: 50, difficulty: 'Easy' },
  { id: 'b13', title: 'Reddit community content', category: 'Content', description: 'Create high-quality posts, guides, AMAs for gaming and crypto subreddits. Build MagicCraft awareness.', rewardUsdMax: 50, difficulty: 'Easy' },
  { id: 'b12', title: 'LinkedIn article series', category: 'Content', description: 'Write professional articles about blockchain gaming, $MCRT tokenomics, play-and-earn. 5+ detailed posts.', rewardUsdMax: 75, difficulty: 'Easy' },
  { id: 'b7', title: 'Discord $MCRT price bot', category: 'Dev', description: 'Create bot with live price, alerts, portfolio tracking. Open-source with self-host guide and demo server.', rewardUsdMax: 75, difficulty: 'Easy' },
  { id: 'b8', title: 'Telegram $MCRT alerts bot', category: 'Dev', description: 'Build Telegram bot for price alerts, news updates, lobby notifications. Self-hostable with clear setup instructions.', rewardUsdMax: 75, difficulty: 'Easy' },

  // Sites and dashboards that compound value
  { id: 'b5', title: 'MagicCraft fan site', category: 'Content', description: 'Create comprehensive fan website with guides, news, character builds, meta analysis. Self-hosted with $MCRT integration.', rewardUsdMax: 150, difficulty: 'Medium' },
  { id: 'b6', title: 'Leaderboard tracker site', category: 'Dev', description: 'Build website tracking top players, guild rankings, tournament results. Historical data and player profiles.', rewardUsdMax: 100, difficulty: 'Easy' },
  { id: 'b4', title: 'Community stats dashboard', category: 'Dev', description: 'Build a self-hosted dashboard showing $MCRT metrics, player stats, lobby activity. Real-time data with clean UI.', rewardUsdMax: 200, difficulty: 'Medium' },
  { id: 'b9', title: '$MCRT portfolio tracker', category: 'Dev', description: 'Web app for tracking $MCRT holdings, staking rewards, transaction history. Connect wallet, export data.', rewardUsdMax: 150, difficulty: 'Medium' },

  // Deeper content
  { id: 'b2', title: 'Tutorial video series', category: 'Content', description: 'Produce comprehensive video guides: getting started, earning $MCRT, using Game Maker, crypto lobbies. Self-hosted or personal channel.', rewardUsdMax: 200, difficulty: 'Medium' },
  { id: 'b3', title: '$MCRT explainer animation', category: 'Content', description: 'Create animated explainer video about $MCRT utility, tokenomics, and ecosystem. 2-3 minutes, professional quality.', rewardUsdMax: 200, difficulty: 'Medium' },

  // Utilities and tools
  { id: 'b17', title: 'Game Maker asset library', category: 'Content', description: 'Curated collection of Game Maker assets, templates, tutorials. Self-hosted with download tracking.', rewardUsdMax: 100, difficulty: 'Medium' },
  { id: 'b19', title: 'Tournament bracket generator', category: 'Dev', description: 'Tool for creating MagicCraft tournament brackets. Player registration, match tracking, results display.', rewardUsdMax: 100, difficulty: 'Medium' },
  { id: 'b20', title: 'NFT rarity checker', category: 'Dev', description: 'Tool to check MagicCraft NFT rarity, traits, market value. Connect wallet, batch checking, export data.', rewardUsdMax: 125, difficulty: 'Medium' },
  { id: 'b18', title: '$MCRT DeFi yield tracker', category: 'Dev', description: 'Track $MCRT yield opportunities across DeFi protocols. Compare APYs, risks, historical performance.', rewardUsdMax: 150, difficulty: 'Medium' },

  // Games & interactive (harder, longer)
  { id: 'b16', title: 'Character build calculator', category: 'Dev', description: 'Web tool for planning character builds, skill trees, equipment. Save/share builds, meta recommendations.', rewardUsdMax: 150, difficulty: 'Medium' },
  { id: 'b15', title: 'MagicCraft quiz game', category: 'Dev', description: 'Interactive quiz about MagicCraft lore, characters, $MCRT. Leaderboards, shareable results, mobile-friendly.', rewardUsdMax: 100, difficulty: 'Medium' },
  { id: 'b14', title: 'Vibe-coded mini game', category: 'Dev', description: 'Build browser game inspired by MagicCraft. Self-hosted, $MCRT themed, link to main game. Open-source preferred.', rewardUsdMax: 200, difficulty: 'Hard' },
]

export default function Bounties() {
  const [mcrtUsd, setMcrtUsd] = useState<number | null>(null)

  useEffect(() => {
    let canceled = false
    const fetchPrice = async () => {
      try {
        const res = await fetch('/api/mcrt-price')
        const json = await res.json()
        const price = json?.magiccraft?.usd
        if (!canceled && typeof price === 'number' && price > 0) {
          setMcrtUsd(price)
        }
      } catch (_) {
        // fallback will keep null; UI will hide MCRT amount
      }
    }
    fetchPrice()
    return () => { canceled = true }
  }, [])

  const toMcrt = (usd: number): string => {
    if (!mcrtUsd || mcrtUsd <= 0) return '-'
    const tokens = usd / mcrtUsd
    return Math.round(tokens).toLocaleString()
  }
  return (
    <div className="min-h-dvh w-full max-w-full text-white">
      <Helmet>
        <title>MagicCraft Bounties - Build the $MCRT Ecosystem</title>
        <meta name="description" content="Complete community bounties to improve the MagicCraft ecosystem and earn rewards paid in $MCRT." />
        <meta property="og:title" content="MagicCraft Bounties - Build the $MCRT Ecosystem" />
        <meta property="og:description" content="Complete community bounties to improve the MagicCraft ecosystem and earn rewards paid in $MCRT." />
      </Helmet>

      <section className="relative mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 pt-8 md:pt-12">
        {/* Back to main site */}
        <div className="mb-4 md:mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors"
          >
            <span className="text-white/70">←</span>
            <span>Back to MagicCraft</span>
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">MagicCraft Bounties</h1>
          <p className="text-white/80 mt-3 md:mt-4">
            Create <b>videos, websites, integrations, posts, and tools</b> that grow the $MCRT ecosystem. These bounties are
            <b> decentralized and self‑hosted</b> - you create and host on your own platforms (YouTube, websites, repos),
            then submit for review. Rewards are <b>paid in $MCRT only</b> (USD shown for reference), up to $100 per bounty
            based on scope and impact.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70">
            <span>Categories:</span>
            <span className="rounded-md bg-white/10 px-2 py-0.5">Dev</span>
            <span className="rounded-md bg-white/10 px-2 py-0.5">Design</span>
            <span className="rounded-md bg-white/10 px-2 py-0.5">Content</span>
            <span className="rounded-md bg-white/10 px-2 py-0.5">Growth</span>
            <span className="rounded-md bg-white/10 px-2 py-0.5">Decentralized</span>
            <span className="rounded-md bg-white/10 px-2 py-0.5">Self‑Hosted</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bounties.map((bounty) => (
            <div key={bounty.id} className="card-glass card-padding flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-lg">{bounty.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs rounded-md bg-white/10 px-2 py-1 text-white/70">{bounty.category}</span>
                    <span className="text-[10px] rounded-md bg-white/10 px-2 py-1 text-white/60">Decentralized</span>
                    <span className="text-[10px] rounded-md bg-white/10 px-2 py-1 text-white/60">Self‑Hosted</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-white/80">{bounty.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-semibold">
                  <span className="text-[#98FFF9]">Up to ${Math.round(bounty.rewardUsdMax * 0.5).toLocaleString()}</span>
                  <span className="text-white/60"> • ~ {toMcrt(Math.round(bounty.rewardUsdMax * 0.5))} MCRT</span>
                </div>
                <div className="text-xs text-white/60">{bounty.difficulty}</div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`mailto:contact@magiccraft.io?subject=${encodeURIComponent('MCRT Bounty Application - ' + bounty.title)}`}
                  className="btn-primary px-4 py-2 text-sm"
                  rel="noreferrer noopener"
                >
                  Apply (Email)
                </a>
                <a
                  href="https://docs.magiccraft.io/" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="btn-secondary px-4 py-2 text-sm"
                >
                  Read Docs
                </a>
              </div>
              <div className="mt-3 text-[11px] text-white/60">
                Deliverables: <b>self‑hosted</b> public URL + repo (preferably open‑source). Payments are made in <b>$MCRT only</b>
                at the USD cap shown, using the rate at approval time.
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-xs text-white/60 max-w-3xl mx-auto text-center">
          Rewards are paid in $MCRT, benchmarked to the USD cap at time of approval. Submissions must include a concise
          proposal, acceptance criteria, and a short Loom demo on completion. Duplicate or low‑quality submissions may be
          declined. We do not host or custody your product.
        </div>
      </section>
    </div>
  )
}


