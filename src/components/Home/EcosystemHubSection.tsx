import steam from '@/assets/icons/icon-steam.svg'
import { Link } from 'react-router-dom'

export default function EcosystemHubSection() {
  return (
    <section className="relative mx-auto w-[96%] max-w-screen-xl overflow-visible px-1 py-8 sm:w-[94%] sm:px-2 md:w-11/12 md:px-0 md:py-12">
      <div className="mb-6 text-center md:mb-8">
        <h3 className="text-section-title bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] bg-clip-text font-serif font-bold text-transparent">
          MagicCraft Ecosystem
        </h3>
        <p className="mt-2 text-base text-gray-300 md:text-lg">
          Core products, tools, and apps where $MCRT has a role.
        </p>
      </div>

      {/* Core actions */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <a
          id="earn"
          href="https://lobby.magiccraft.io/"
          target="_blank"
          className="card-glass card-padding group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          rel="noreferrer noopener"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="mb-1 flex items-center gap-3">
            <img
              src="/icons/icon-gamepad.svg"
              alt="Compete in PvP"
              className="h-5 w-5 opacity-90"
              loading="lazy"
            />
            <h4 className="text-lg font-bold md:text-xl">Compete in PvP</h4>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            Compete in live PvP lobbies with BTC, ETH, and $MCRT prize paths.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
            Open <span aria-hidden="true">→</span>
          </span>
        </a>
        <a
          href="https://coinmarketcap.com/currencies/magiccraft/"
          target="_blank"
          rel="noreferrer noopener"
          className="card-glass card-padding group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="mb-1 flex items-center gap-3">
            <img
              src="/icons/icon-currency.svg"
              alt="CoinMarketCap"
              className="h-5 w-5 opacity-90"
              loading="lazy"
            />
            <h4 className="text-lg font-bold md:text-xl">
              $MCRT on CoinMarketCap
            </h4>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            Price, market cap, and supply details.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
            Open <span aria-hidden="true">→</span>
          </span>
        </a>
        <a
          href="#download-section"
          onClick={(e) => {
            e.preventDefault()
            document
              .getElementById('download-section')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="card-glass card-padding group relative flex min-h-[150px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-colors hover:border-[#98FFF9]/40 hover:no-underline"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="mb-1 flex items-center gap-3">
            <img
              src="/icons/icon-gamepad.svg"
              alt="Game"
              className="h-5 w-5 opacity-90"
              loading="lazy"
            />
            <h4 className="text-lg font-bold md:text-xl">
              Cross-Platform Game
            </h4>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            Play the main MOBA across PC, iOS, Android, and Steam.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
            Open <span aria-hidden="true">→</span>
          </span>
        </a>
        <a
          href="https://lobby.magiccraft.io"
          target="_blank"
          rel="noreferrer noopener"
          className="card-glass card-padding group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="mb-1 flex items-center gap-3">
            <img
              src="/icons/icon-leaderboard.svg"
              alt="Lobbies"
              className="h-5 w-5 opacity-90"
              loading="lazy"
            />
            <h4 className="text-lg font-bold md:text-xl">Crypto Lobbies</h4>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            PvP paths with $MCRT plus scheduled BTC, ETH, SOL, XRP, and other
            prize currencies.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
            Open <span aria-hidden="true">→</span>
          </span>
        </a>
        <a
          href="https://app.magiccraft.io/marketplace/explorer"
          target="_blank"
          rel="noreferrer noopener"
          className="card-glass card-padding group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="mb-1 flex items-center gap-3">
            <img
              src="/icons/icon-marketplace.svg"
              alt="Marketplace"
              className="h-5 w-5 opacity-90"
              loading="lazy"
            />
            <h4 className="text-lg font-bold md:text-xl">NFT Marketplace</h4>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            Trade playable characters, skins, and ecosystem assets.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
            Open <span aria-hidden="true">→</span>
          </span>
        </a>
        <a
          href="https://store.steampowered.com/app/3478810/MCRT_Game_Maker/"
          target="_blank"
          rel="noreferrer noopener"
          className="card-glass card-padding group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
          <div className="mb-1 flex items-center gap-3">
            <img
              src={steam}
              alt="Game Maker"
              className="h-5 w-5 opacity-90"
              loading="lazy"
            />
            <h4 className="text-lg font-bold md:text-xl">$MCRT Game Maker</h4>
            <span className="rounded-md bg-[#98FFF9]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#98FFF9]">
              STEAM
            </span>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            Design custom maps and battlefields for future MagicCraft
            integration.
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
            Open <span aria-hidden="true">→</span>
          </span>
        </a>
      </div>

      {/* More in the Ecosystem */}
      <details className="mt-4 md:mt-6">
        <summary className="mx-auto inline-flex cursor-pointer select-none items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80 hover:bg-black/30">
          More in the Ecosystem
          <svg
            className="h-4 w-4 opacity-70"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </summary>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <a
            href="https://polybilities.com"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-stats.svg"
                alt="Polybilities"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">Polybilities</h4>
            </div>
            <p className="text-sm text-gray-300">
              Esports prediction markets powered by MagicCraft.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Open app <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://games.magiccraft.io"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-gamepad.svg"
                alt="Mini-games"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">Mini-games</h4>
            </div>
            <p className="text-sm text-gray-300">
              Runescribes, Tetrablox, and experimental Web3 titles.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Play now <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://mcrtpay.com"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#10B981] via-[#98FFF9] to-[#10B981] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-currency.svg"
                alt="MCRTPay"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">MCRTPay</h4>
            </div>
            <p className="text-sm text-gray-300">
              Drop-in $MCRT checkout for websites and apps.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Integrate <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://socialmm.ai"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#60A5FA] via-[#98FFF9] to-[#60A5FA] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-community.svg"
                alt="SocialMM"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">SocialMM</h4>
            </div>
            <p className="text-sm text-gray-300">
              AI social media autopilot for content, scheduling, and analytics.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Open app <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://dragonlist.ai"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B6B]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(255,107,107,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] via-[#FFB649] to-[#FF6B6B] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-stats.svg"
                alt="DragonList"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">DragonList</h4>
            </div>
            <p className="text-sm text-gray-300">
              Discovery and launch list for Web3 and AI products.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Explore <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://app.magiccraft.io/nft_mint"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-nft-new.svg"
                alt="Mint NFTs"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">Mint NFT Characters</h4>
            </div>
            <p className="text-sm text-gray-300">
              Mint characters and skins tied to live in-game utility.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Mint now <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://app.magiccraft.io/free_mint"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-nft-new.svg"
                alt="Free NFTs"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">Free NFT Collections</h4>
            </div>
            <p className="text-sm text-gray-300">Vega, Davinci & more.</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Claim free <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://app.magiccraft.io/dao"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-community.svg"
                alt="DAO"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">DAO</h4>
            </div>
            <p className="text-sm text-gray-300">Participate in governance.</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Vote now <span aria-hidden="true">→</span>
            </span>
          </a>
          <a
            href="https://rent.magiccraft.io"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-help.svg"
                alt="NFT Rentals"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">NFT Rentals (Testnet)</h4>
            </div>
            <p className="text-sm text-gray-300">
              Currently available on testnet.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              View rentals <span aria-hidden="true">→</span>
            </span>
          </a>
          <Link
            to="/grants"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-bounty.svg"
                alt="Grants"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">Grants</h4>
            </div>
            <p className="text-sm text-gray-300">Apply with a working build.</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Apply <span aria-hidden="true">→</span>
            </span>
          </Link>
          <a
            href="https://lobby.magiccraft.io/referral"
            target="_blank"
            rel="noreferrer noopener"
            className="card-glass card-padding group relative flex min-h-[140px] flex-col overflow-hidden rounded-2xl border border-white/10 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:no-underline hover:shadow-[0_0_20px_rgba(152,255,249,0.15)]"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#98FFF9] via-[#B591F2] to-[#FFB649] opacity-60"></span>
            <div className="mb-1 flex items-center gap-3">
              <img
                src="/icons/icon-contact.svg"
                alt="Referral"
                className="h-5 w-5 opacity-90"
                loading="lazy"
              />
              <h4 className="font-bold">Referral</h4>
            </div>
            <p className="text-sm text-gray-300">
              Invite players and earn referral rewards from Web3 lobby activity.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs text-[#98FFF9]/80 transition-colors group-hover:text-[#98FFF9]">
              Get link <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </details>
    </section>
  )
}
