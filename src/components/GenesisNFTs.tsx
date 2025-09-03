import React, { useState } from 'react'

type Tier = { label: string; requirement: string; multiplier: string; note?: string }

const genesisTiers: Tier[] = [
  { label: 'Rare', requirement: '100,000+ $MCRT + 1x Genesis NFT (Rare)', multiplier: 'No multiplier' },
  { label: 'Epic', requirement: '100,000+ $MCRT + 1x Genesis NFT (Epic)', multiplier: '2× multiplier' },
  { label: 'Legendary', requirement: '100,000+ $MCRT + 1x Genesis NFT (Legendary)', multiplier: '3× multiplier' },
]

const revelationTiers: Tier[] = [
  { label: 'Baseline', requirement: '50,000 $MCRT + 3 Revelation NFTs', multiplier: 'No multiplier' },
  { label: 'Boost I', requirement: '50,000 $MCRT + 6 Revelation NFTs', multiplier: '2× multiplier' },
  { label: 'Boost II', requirement: '50,000 $MCRT + 9 Revelation NFTs', multiplier: '3× multiplier' },
]

const GenesisNFTs: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="relative py-10 md:py-16 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
          Genesis NFTs — Earnings Tiers
        </h3>
        <p className="text-gray-300 text-base md:text-lg mt-2">Boost your eligible rewards with Genesis or Revelation NFTs.</p>
        <button onClick={() => setOpen(!open)} className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/20 hover:bg-black/30 px-4 py-2 text-sm text-white/80">
          {open ? 'Hide tiers' : 'View tiers'}
          <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
        </button>
      </div>

      <div className={`${open ? 'block' : 'hidden'}`}>
        <div className="card-glass card-padding rounded-2xl mb-6">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Genesis Collection (VIP Lobbies)</h4>
          <p className="text-sm md:text-base text-gray-300 mb-4">Unlocks Genesis VIP Lobbies (highest earning lobbies).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {genesisTiers.map((t) => (
              <div key={t.label} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">{t.label}</span>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/15">{t.multiplier}</span>
                </div>
                <p className="text-sm text-white/80">{t.requirement}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] md:text-xs text-white/60">Note: Holding more $MCRT increases your base reward. Only Top 5 on the winning team get rewards. MVP always gets 100% of their eligible reward.</p>
        </div>

        <div className="card-glass card-padding rounded-2xl">
          <h4 className="text-xl md:text-2xl font-bold mb-2">Revelation Collection (Weekend Lobbies)</h4>
          <p className="text-sm md:text-base text-gray-300 mb-4">Unlocks Revelation Weekend Lobbies.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {revelationTiers.map((t) => (
              <div key={t.label} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">{t.label}</span>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/15">{t.multiplier}</span>
                </div>
                <p className="text-sm text-white/80">{t.requirement}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] md:text-xs text-white/60">Note: Only the MVP on the winning team gets rewarded.</p>
        </div>
      </div>

      <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="card-glass card-padding">
          <h5 className="font-semibold mb-2">How it works</h5>
          <p className="text-sm md:text-base text-gray-300">
            Holding Genesis NFTs unlocks tiered multipliers that are applied to eligible rewards
            in supported lobbies and creation payouts. Tier checks are wallet‑based and snapshot‑driven.
          </p>
        </div>
        <div className="card-glass card-padding">
          <h5 className="font-semibold mb-2">What counts</h5>
          <p className="text-sm md:text-base text-gray-300">
            Only verified Genesis collection NFTs held in your connected wallet are counted.
            Listings or staked items may not qualify depending on program rules and snapshot timing.
          </p>
        </div>
        <div className="card-glass card-padding">
          <h5 className="font-semibold mb-2">Get Genesis</h5>
          <p className="text-sm md:text-base text-gray-300">
            New to Genesis? Mint on our marketplace or pick up items from secondary markets.
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <a href="https://app.magiccraft.io/nft_mint" target="_blank" rel="noreferrer noopener" className="btn-primary text-xs">Mint Genesis</a>
            <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="btn-secondary text-xs">Marketplace</a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-[11px] md:text-xs text-white/60">
        Multipliers and eligibility are subject to change during beta. Regional restrictions may apply. Source: Mint pages — Genesis & Revelation collections.
      </p>
    </section>
  )
}

export default GenesisNFTs


