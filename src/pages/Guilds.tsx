import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Guilds() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Guilds | MagicCraft</title>
        <meta
          name="description"
          content="Find official MagicCraft community, leaderboard, lobby, marketplace, and guild-building resources."
        />
        <link rel="canonical" href="https://magiccraft.io/guilds" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/guilds" />
        <meta property="og:title" content="Guilds | MagicCraft" />
        <meta
          property="og:description"
          content="Find official MagicCraft community and competition resources for organizing a guild."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guilds | MagicCraft" />
        <meta
          name="twitter:description"
          content="Find official MagicCraft community and competition resources for organizing a guild."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
      </Helmet>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-24">
          <section className="relative pt-8 md:pt-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-section-title">Guilds</h1>
              <p className="mt-3 max-w-3xl text-base text-white/80 md:text-lg">
                Use these official community and competition links to organize
                your players, join lobbies, follow updates, and track
                leaderboard results.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                <a
                  href="https://t.me/magiccraftgamechat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/icon-community.svg"
                      alt="Telegram"
                      className="h-7 w-7"
                    />
                    <div>
                      <p className="text-xs text-white/60">Community</p>
                      <p className="font-semibold text-white">
                        Official Telegram
                      </p>
                    </div>
                  </div>
                  <span className="chip-cta mt-3 inline-block">Join</span>
                </a>

                <a
                  href="https://lobby.magiccraft.io/leaderboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/icon-leaderboard.svg"
                      alt="Leaderboard"
                      className="h-7 w-7"
                    />
                    <div>
                      <p className="text-xs text-white/60">Competitive</p>
                      <p className="font-semibold text-white">
                        Player Leaderboard
                      </p>
                    </div>
                  </div>
                  <span className="chip-cta mt-3 inline-block">View</span>
                </a>

                <a
                  href="https://app.magiccraft.io/marketplace/explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/icon-marketplace.svg"
                      alt="Marketplace"
                      className="h-7 w-7"
                    />
                    <div>
                      <p className="text-xs text-white/60">Gear up</p>
                      <p className="font-semibold text-white">Marketplace</p>
                    </div>
                  </div>
                  <span className="chip-cta mt-3 inline-block">Explore</span>
                </a>

                <a
                  href="https://lobby.magiccraft.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/icon-gamestats.svg"
                      alt="Lobbies"
                      className="h-7 w-7"
                    />
                    <div>
                      <p className="text-xs text-white/60">Play</p>
                      <p className="font-semibold text-white">Web3 Lobbies</p>
                    </div>
                  </div>
                  <span className="chip-cta mt-3 inline-block">Enter</span>
                </a>

                <Link
                  to="/whitepaper"
                  className="card-glass rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/whitepaper.svg"
                      alt="Docs"
                      className="h-7 w-7"
                    />
                    <div>
                      <p className="text-xs text-white/60">Learn</p>
                      <p className="font-semibold text-white">Whitepaper</p>
                    </div>
                  </div>
                  <span className="chip-cta mt-3 inline-block">Read</span>
                </Link>

                <a
                  href="https://x.com/MagicCraftGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/icon-community.svg"
                      alt="Twitter"
                      className="h-7 w-7"
                    />
                    <div>
                      <p className="text-xs text-white/60">Follow</p>
                      <p className="font-semibold text-white">X (Twitter)</p>
                    </div>
                  </div>
                  <span className="chip-cta mt-3 inline-block">Follow</span>
                </a>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
                <h2 className="text-lg font-semibold md:text-xl">
                  Build your guild presence
                </h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/80 md:text-base">
                  <li>Create a Telegram guild chat and keep it active</li>
                  <li>Consistently participate in Web3 lobbies and events</li>
                  <li>Share highlights on X and tag @MagicCraftGame</li>
                  <li>
                    Share your guild details with the community in the official
                    Telegram
                  </li>
                </ol>
                <a
                  href="https://t.me/magiccraftgamechat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip-cta mt-4 inline-flex"
                >
                  Share in Telegram
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Guilds
