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
  const [open, setOpen] = useState(true)

  return (
    <section className="relative py-6 md:py-8 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0">
      <div className="text-center mb-4 md:mb-5">
        <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">
          Genesis NFTs - Reward Tiers
        </h3>
        <p className="text-gray-300 text-sm md:text-base mt-1.5">Boost eligible rewards with Genesis or Revelation NFTs.</p>
        <button onClick={() => setOpen(!open)} className="mt-2.5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/20 hover:bg-black/30 px-3 py-1.5 text-xs text-white/80">
          {open ? 'Hide tiers' : 'View tiers'}
          <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
        </button>
      </div>

      <div className={`${open ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          <div className="card-glass rounded-xl p-4">
            <h4 className="text-lg font-bold mb-2">Genesis Collection (VIP Lobbies)</h4>
            <p className="text-xs text-gray-300 mb-3">Unlocks Genesis VIP Lobbies.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {genesisTiers.map((t) => (
                <div key={t.label} className="rounded-lg border border-white/15 bg-white/5 p-2.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-semibold text-sm">{t.label}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/15">{t.multiplier}</span>
                  </div>
                  <p className="text-[11px] text-white/70">{t.requirement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass rounded-xl p-4">
            <h4 className="text-lg font-bold mb-2">Revelation Collection (Weekend Lobbies)</h4>
            <p className="text-xs text-gray-300 mb-3">Unlocks Revelation Weekend Lobbies.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {revelationTiers.map((t) => (
                <div key={t.label} className="rounded-lg border border-white/15 bg-white/5 p-2.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-semibold text-sm">{t.label}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/15">{t.multiplier}</span>
                  </div>
                  <p className="text-[11px] text-white/70">{t.requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[10px] text-white/60 mt-2">
          Top 5 on winning team get rewards • MVP gets 100% eligible •{' '}
          <a href="https://app.magiccraft.io/nft_mint" target="_blank" rel="noreferrer noopener" className="underline hover:text-white">
            Mint Genesis
          </a>{' '}
          •{' '}
          <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="underline hover:text-white">
            Marketplace
          </a>
        </p>
      </div>
    </section>
  )
}

export default GenesisNFTs


