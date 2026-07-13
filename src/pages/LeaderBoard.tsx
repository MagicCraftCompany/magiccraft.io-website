import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { BarChart3, ExternalLink, Trophy } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const LIVE_LEADERBOARD_URL = 'https://lobby.magiccraft.io/leaderboard'

export default function LeaderboardPage() {
  return (
    <div className="min-h-dvh w-full bg-[#03082f] text-white">
      <Helmet>
        <title>Leaderboard | MagicCraft</title>
        <meta
          name="description"
          content="Open the live MagicCraft lobby leaderboard for current player rankings."
        />
        <link rel="canonical" href={LIVE_LEADERBOARD_URL} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="relative flex min-h-[70vh] items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(146,85,224,0.24),transparent_38%),linear-gradient(180deg,#03082F_0%,#020418_100%)]" />
        <section className="relative mx-auto w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.055] p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#98FFF9]/25 bg-[#98FFF9]/10 text-[#98FFF9]">
            <Trophy className="h-7 w-7" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
            MagicCraft Leaderboard
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Current player rankings are maintained in the MagicCraft lobby. Open
            the live leaderboard there to see the latest available results.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LIVE_LEADERBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#98FFF9] px-6 py-3 text-sm font-bold text-[#03082F] transition hover:bg-white"
            >
              Open Live Leaderboard
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/stats"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#98FFF9]/40 hover:text-[#98FFF9]"
            >
              <BarChart3 className="h-4 w-4" aria-hidden="true" />
              View Game Stats
            </Link>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-white/45">
            This handoff prevents this website from showing stale or invented
            rankings when it does not own the leaderboard data source.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
