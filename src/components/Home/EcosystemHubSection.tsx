import steam from '@/assets/icons/icon-steam.svg'
import { Link } from 'react-router-dom'

export default function EcosystemHubSection() {
  return (
    <section className="relative py-8 md:py-12 mx-auto w-[96%] sm:w-[94%] md:w-11/12 max-w-screen-xl px-1 sm:px-2 md:px-0 overflow-visible">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-section-title font-serif font-bold bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text text-transparent">MagicCraft Ecosystem</h3>
        <p className="text-gray-300 text-base md:text-lg mt-2">Core experiences and tools powered by $MCRT.</p>
      </div>

      {/* Core actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <a id="earn" href="https://lobby.magiccraft.io/" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1" rel="noreferrer noopener">
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="flex items-center gap-3 mb-1">
            <img src="/icons/icon-gamepad.svg" alt="Compete in PvP" className="w-5 h-5 opacity-90" loading="lazy" />
            <h4 className="text-lg md:text-xl font-bold">Compete in PvP</h4>
          </div>
          <p className="text-sm md:text-base text-gray-300">Compete in live PvP lobbies with BTC, ETH, and $MCRT prize paths.</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
        </a>
        <a href="https://coinmarketcap.com/currencies/magiccraft/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="flex items-center gap-3 mb-1">
            <img src="/icons/icon-currency.svg" alt="CoinMarketCap" className="w-5 h-5 opacity-90" loading="lazy" />
            <h4 className="text-lg md:text-xl font-bold">$MCRT on CoinMarketCap</h4>
          </div>
          <p className="text-sm md:text-base text-gray-300">Price, market cap, and supply details.</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
        </a>
        <a href="#download-section" onClick={(e) => { e.preventDefault(); document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-colors rounded-2xl overflow-hidden cursor-pointer no-underline hover:no-underline">
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="flex items-center gap-3 mb-1">
            <img src="/icons/icon-gamepad.svg" alt="Game" className="w-5 h-5 opacity-90" loading="lazy" />
            <h4 className="text-lg md:text-xl font-bold">Cross-Platform Game</h4>
          </div>
          <p className="text-sm md:text-base text-gray-300">Play on PC, iOS, Android, Steam.</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
        </a>
        <a href="https://lobby.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="flex items-center gap-3 mb-1">
            <img src="/icons/icon-leaderboard.svg" alt="Lobbies" className="w-5 h-5 opacity-90" loading="lazy" />
            <h4 className="text-lg md:text-xl font-bold">Crypto Lobbies</h4>
          </div>
          <p className="text-sm md:text-base text-gray-300">BTC, ETH, $MCRT, BNB, XRP, SOL and more.</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
        </a>
        <a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="flex items-center gap-3 mb-1">
            <img src="/icons/icon-marketplace.svg" alt="Marketplace" className="w-5 h-5 opacity-90" loading="lazy" />
            <h4 className="text-lg md:text-xl font-bold">NFT Marketplace</h4>
          </div>
          <p className="text-sm md:text-base text-gray-300">Trade playable characters, skins, and ecosystem assets.</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
        </a>
        <a href="https://store.steampowered.com/app/3478810/MCRT_Game_Maker/" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[150px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="flex items-center gap-3 mb-1">
            <img src={steam} alt="Game Maker" className="w-5 h-5 opacity-90" loading="lazy" />
            <h4 className="text-lg md:text-xl font-bold">$MCRT Game Maker</h4>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#98FFF9]/20 text-[#98FFF9] font-bold">STEAM</span>
          </div>
          <p className="text-sm md:text-base text-gray-300">Design maps, earn $MCRT.</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open <span aria-hidden="true">→</span></span>
        </a>
      </div>

      {/* More in the Ecosystem */}
      <details className="mt-4 md:mt-6">
        <summary className="mx-auto inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 cursor-pointer select-none bg-black/20 hover:bg-black/30">
          More in the Ecosystem
          <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
        </summary>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
          <a href="https://polybilities.com" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-stats.svg" alt="Polybilities" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">Polybilities</h4>
            </div>
            <p className="text-sm text-gray-300">AI prediction markets.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Open app <span aria-hidden="true">→</span></span>
          </a>
          <a href="https://games.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-gamepad.svg" alt="Mini-games" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">Mini-games</h4>
            </div>
            <p className="text-sm text-gray-300">Web3 mini titles.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Play now <span aria-hidden="true">→</span></span>
          </a>
          <a href="https://app.magiccraft.io/nft_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-nft-new.svg" alt="Mint NFTs" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">Mint NFT Characters</h4>
            </div>
            <p className="text-sm text-gray-300">Mint characters and skins tied to live in-game utility.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Mint now <span aria-hidden="true">→</span></span>
          </a>
          <a href="https://app.magiccraft.io/free_mint" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-nft-new.svg" alt="Free NFTs" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">Free NFT Collections</h4>
            </div>
            <p className="text-sm text-gray-300">Vega, Davinci & more.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Claim free <span aria-hidden="true">→</span></span>
          </a>
          <a href="https://app.magiccraft.io/dao" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-community.svg" alt="DAO" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">DAO</h4>
            </div>
            <p className="text-sm text-gray-300">Participate in governance.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Vote now <span aria-hidden="true">→</span></span>
          </a>
          <a href="https://rent.magiccraft.io" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-help.svg" alt="NFT Rentals" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">NFT Rentals (Testnet)</h4>
            </div>
            <p className="text-sm text-gray-300">Currently available on testnet.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">View rentals <span aria-hidden="true">→</span></span>
          </a>
          <Link to="/grants" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-bounty.svg" alt="Grants" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">Grants</h4>
            </div>
            <p className="text-sm text-gray-300">Apply with a working build.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Apply <span aria-hidden="true">→</span></span>
          </Link>
          <a href="https://lobby.magiccraft.io/referral" target="_blank" rel="noreferrer noopener" className="card-glass card-padding flex flex-col min-h-[140px] relative group border border-white/10 hover:border-[#98FFF9]/40 transition-all duration-300 rounded-2xl overflow-hidden no-underline hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="flex items-center gap-3 mb-1">
              <img src="/icons/icon-contact.svg" alt="Referral" className="w-5 h-5 opacity-90" loading="lazy" />
              <h4 className="font-bold">Referral</h4>
            </div>
            <p className="text-sm text-gray-300">Invite friends and earn.</p>
            <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs text-[#98FFF9]/80 group-hover:text-[#98FFF9] transition-colors">Get link <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </details>
    </section>
  )
}
