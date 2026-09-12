import {
  ArrowDown,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Swords,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import GameExperienceSection from '@/components/Home/GameExperienceSection'
import {
  homePrimaryActionClass,
  homeSecondaryActionClass,
} from '@/components/Home/homeStyles'
import { ANDROID_APP_URL, IOS_APP_URL, PC_GAME_URL } from '@/constants'
import { GAMEPLAY_SCREENSHOTS } from '@/data/gameplayMedia'
import { trackCta, type CtaEvent } from '@/lib/analytics'

const platforms: {
  name: string
  detail: string
  href: string
  event: CtaEvent['cta']
  icon: typeof Monitor
}[] = [
  {
    name: 'Steam',
    detail: 'Play on PC',
    href: PC_GAME_URL,
    event: 'download_steam',
    icon: Monitor,
  },
  {
    name: 'App Store',
    detail: 'iPhone & iPad',
    href: IOS_APP_URL,
    event: 'download_ios',
    icon: Smartphone,
  },
  {
    name: 'Google Play',
    detail: 'Android',
    href: ANDROID_APP_URL,
    event: 'download_android',
    icon: Smartphone,
  },
]

export default function HomePageGames() {
  const canonical = 'https://magiccraft.io/magiccraft/'
  return (
    <div className="min-h-dvh bg-[#03082f] text-white">
      <Helmet>
        <title>Play MagicCraft | Free Fantasy PvP & PvE Game</title>
        <meta
          name="description"
          content="See real MagicCraft gameplay, discover PvP and PvE modes, and choose your platform. Free to play on Steam, iOS and Android. No wallet required."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:title"
          content="Play MagicCraft | Free Fantasy PvP & PvE Game"
        />
        <meta
          property="og:description"
          content="Your next battle starts here. Watch real gameplay and get MagicCraft on PC, iOS or Android."
        />
        <meta
          property="og:image"
          content={`https://magiccraft.io${GAMEPLAY_SCREENSHOTS.teamBattle.src}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main>
        <section className="mx-auto grid max-w-screen-xl items-center gap-9 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#98FFF9]">
              <Swords className="h-4 w-4" aria-hidden="true" />
              MagicCraft · Free to play
            </p>
            <h1 className="mt-5 max-w-xl font-sans text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Your next battle starts here.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              Pick your hero. Fight for the objective. Discover competitive team
              battles and solo or co-op adventures on PC and mobile.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#play" className={homePrimaryActionClass}>
                Choose your platform{' '}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#game" className={homeSecondaryActionClass}>
                Watch gameplay{' '}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/55">
              Start playing without MCRT, an NFT or a wallet.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[24px] border border-white/10 bg-[#080a2a]">
            <img
              src={GAMEPLAY_SCREENSHOTS.teamBattle.src}
              alt={GAMEPLAY_SCREENSHOTS.teamBattle.alt}
              width="1280"
              height="720"
              className="aspect-video w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-xs text-white/60">
              Real MagicCraft gameplay. Team fights built around the objective.
            </figcaption>
          </figure>
        </section>
        <section
          id="play"
          aria-labelledby="platform-heading"
          className="mx-auto max-w-screen-xl scroll-mt-24 px-4 pb-12 sm:px-6 sm:pb-16"
        >
          <h2
            id="platform-heading"
            className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            One game. Choose your platform.
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() =>
                    trackCta({
                      cta: platform.event,
                      location: 'game_platforms',
                      label: platform.name,
                    })
                  }
                  className="group flex min-h-24 items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-5 no-underline transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] motion-reduce:transition-none"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-[#98FFF9]"
                    aria-hidden="true"
                  />
                  <span className="flex-1">
                    <span className="block text-lg font-semibold">
                      {platform.name}
                    </span>
                    <span className="mt-1 block text-sm text-white/60">
                      {platform.detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-white/60"
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                    Opens the official store in a new tab
                  </span>
                </a>
              )
            })}
          </div>
        </section>
        <GameExperienceSection />
        <section
          aria-labelledby="start-heading"
          className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20"
        >
          <h2
            id="start-heading"
            className="font-sans text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            From download to your first battle.
          </h2>
          <ol className="mt-8 grid gap-7 sm:grid-cols-3">
            {[
              [
                'Install the game',
                'Choose the official store for your device and install the latest version.',
              ],
              [
                'Find your hero',
                'Explore the roster and pick the abilities that suit your play style.',
              ],
              [
                'Choose your mode',
                'Follow the in-game introduction, then try a PvP match or a PvE adventure.',
              ],
            ].map(([title, description], index) => (
              <li key={title} className="border-t border-white/15 pt-5">
                <span className="text-sm font-semibold text-[#98FFF9]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-sans text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/chooseyourhero/" className={homePrimaryActionClass}>
              Explore the heroes{' '}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/patch/" className={homeSecondaryActionClass}>
              Latest game updates{' '}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section
          aria-labelledby="more-heading"
          className="border-t border-white/10 bg-[#05051f] px-4 py-10 sm:px-6"
        >
          <div className="mx-auto grid max-w-screen-xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 id="more-heading" className="font-sans text-xl font-semibold">
                More ways to explore.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Keep playing, get help, or explore optional Web3 features at
                your own pace.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://games.magiccraft.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded py-2 text-sm font-semibold text-[#98FFF9] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                Explore browser games ↗
              </a>
              <Link
                to="/faq/"
                className="rounded py-2 text-sm font-semibold text-[#98FFF9] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                Game help and FAQs
              </Link>
            </div>
            <div>
              <Link
                to="/lobbies/"
                className="inline-flex min-h-11 items-center rounded text-sm font-semibold text-[#98FFF9] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]"
              >
                Explore optional Web3 lobbies{' '}
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="mt-1 text-xs leading-6 text-white/55">
                Review current entry and reward rules. Web3 features are
                separate from free gameplay.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
