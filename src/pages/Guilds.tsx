import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'

function Guilds() {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
	}, [])

	return (
		<>
			<Helmet>
				<title>Guilds - MagicCraft</title>
				<meta name="description" content="Discover MagicCraft guilds, join communities, and compete together." />
				<link rel="canonical" href={`${window.location.origin}/guilds`} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`${window.location.origin}/guilds`} />
				<meta property="og:title" content="Guilds - MagicCraft" />
				<meta property="og:description" content="Discover MagicCraft guilds, join communities, and compete together." />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>
			<div className="min-h-dvh w-full text-white">
				<Header />
				<main className="scroll-smooth pb-24">
					<section className="relative pt-8 md:pt-10">
						<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
							<h1 className="text-section-title">Guilds</h1>
							<p className="mt-3 text-base md:text-lg text-white/80 max-w-3xl">
								Join or create a MagicCraft guild. Coordinate with your community, climb the leaderboard,
								earn in Web3 lobbies, and unlock perks.
							</p>

							<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
								<a href="https://t.me/magiccraftgamechat" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
									<div className="flex items-center gap-3">
										<img src="/icons/icon-community.svg" alt="Telegram" className="h-7 w-7" />
										<div>
											<p className="text-xs text-white/60">Community</p>
											<p className="text-white font-semibold">Official Telegram</p>
										</div>
									</div>
									<span className="mt-3 inline-block chip-cta">Join</span>
								</a>

								<a href="https://lobby.magiccraft.io/leaderboard" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
									<div className="flex items-center gap-3">
										<img src="/icons/icon-leaderboard.svg" alt="Leaderboard" className="h-7 w-7" />
										<div>
											<p className="text-xs text-white/60">Competitive</p>
											<p className="text-white font-semibold">Guild Leaderboard</p>
										</div>
									</div>
									<span className="mt-3 inline-block chip-cta">View</span>
								</a>

								<a href="https://app.magiccraft.io/marketplace/explorer" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
									<div className="flex items-center gap-3">
										<img src="/icons/icon-marketplace.svg" alt="Marketplace" className="h-7 w-7" />
										<div>
											<p className="text-xs text-white/60">Gear up</p>
											<p className="text-white font-semibold">Marketplace</p>
										</div>
									</div>
									<span className="mt-3 inline-block chip-cta">Explore</span>
								</a>

								<a href="https://lobby.magiccraft.io/" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
									<div className="flex items-center gap-3">
										<img src="/icons/icon-gamestats.svg" alt="Lobbies" className="h-7 w-7" />
										<div>
											<p className="text-xs text-white/60">Earn</p>
											<p className="text-white font-semibold">Web3 Lobbies</p>
										</div>
									</div>
									<span className="mt-3 inline-block chip-cta">Enter</span>
								</a>

								<a href="https://docs.magiccraft.io/" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
									<div className="flex items-center gap-3">
										<img src="/icons/whitepaper.svg" alt="Docs" className="h-7 w-7" />
										<div>
											<p className="text-xs text-white/60">Learn</p>
											<p className="text-white font-semibold">Whitepaper</p>
										</div>
									</div>
									<span className="mt-3 inline-block chip-cta">Read</span>
								</a>

								<a href="https://twitter.com/MagicCraftGame" target="_blank" rel="noopener noreferrer" className="card-glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
									<div className="flex items-center gap-3">
										<img src="/icons/icon-community.svg" alt="Twitter" className="h-7 w-7" />
										<div>
											<p className="text-xs text-white/60">Follow</p>
											<p className="text-white font-semibold">X (Twitter)</p>
										</div>
									</div>
									<span className="mt-3 inline-block chip-cta">Follow</span>
								</a>
							</div>

							<div className="mt-10 rounded-2xl border border-white/10 p-4 md:p-6 bg-white/5">
								<h2 className="text-lg md:text-xl font-semibold">How to get featured</h2>
								<ol className="mt-3 list-decimal pl-5 text-sm md:text-base text-white/80 space-y-2">
									<li>Create a Telegram guild chat and keep it active</li>
									<li>Consistently participate in Web3 lobbies and events</li>
									<li>Share highlights on X and tag @MagicCraftGame</li>
									<li>Submit your guild info to be showcased on the homepage</li>
								</ol>
								<a href="https://t.me/magiccraftgamechat/769960" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex chip-cta">
									Submit via Telegram
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
