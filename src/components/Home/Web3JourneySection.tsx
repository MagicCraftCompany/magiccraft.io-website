import { ArrowRight, ArrowUpRight, Coins, Gem, Swords } from 'lucide-react'
import { Link } from 'react-router-dom'
import HomeSectionIntro from './ui/HomeSectionIntro'
import {
  homePrimaryActionClass,
  homeQuietActionClass,
  homeSecondaryActionClass,
} from './homeStyles'
import { trackCta } from '@/lib/analytics'

const marketplaceUrl = 'https://app.magiccraft.io/marketplace/explorer'
const genesisGuide =
  'https://docs.magiccraft.io/nft-collections/genesis-collection'
const utilitiesGuide =
  'https://docs.magiccraft.io/nft-collections/nft-utilities'
const glowingSkinSource = 'https://www.instagram.com/reel/DIlsE8Hqt7B/'
// Official Karas Genesis artwork observed in the public marketplace.
const karasNftArt =
  'https://gateway.pinata.cloud/ipfs/QmX8UUL4vE3NzRaXMivCoyL9TR6PR2A9GpvcVw9UdXB3Yb/3312.png'

const journey = [
  {
    title: 'Find your match',
    label: 'Lobby',
    description:
      'Browse scheduled games, modes and regions. Review free, token-entry and NFT-gated options in the official lobby.',
  },
  {
    title: 'Collect. Buy. Sell.',
    label: 'Marketplace',
    description:
      'Explore Genesis and Revelation NFT characters. Buy or list supported assets through your compatible wallet.',
  },
  {
    title: 'Take your hero into battle',
    label: 'In-game character',
    description:
      'In supported Web3 matches, NFT ownership connects to the character you can play. Check the NFT and match requirements first.',
  },
]

export default function Web3JourneySection() {
  return (
    <section
      id="web3-journey"
      aria-labelledby="web3-journey-heading"
      className="mc-home-section scroll-mt-24 border-y border-white/10 bg-[#090a20] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <HomeSectionIntro
          icon={Gem}
          eyebrow="The optional Web3 experience"
          title="Your character. Beyond the lobby."
          headingId="web3-journey-heading"
          description="A match starts in the lobby. A collectible lives in your wallet. MagicCraft connects NFT characters, player trading and supported in-game experiences."
          accent="#F5CF86"
        />

        <ol className="mt-9 grid gap-6 border-y border-white/10 py-6 md:grid-cols-3 md:gap-8">
          {journey.map((step, index) => (
            <li key={step.label} className="min-w-0">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5CF86]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F5CF86]/30 text-[11px]">
                  {index + 1}
                </span>
                {step.label}
                {index < journey.length - 1 && (
                  <ArrowRight
                    className="ml-auto hidden h-4 w-4 text-white/35 md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mb-0 mt-4 font-sans text-xl font-semibold tracking-[-0.025em] text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div className="grid min-w-0 grid-cols-[0.85fr_1.15fr] items-center gap-3 sm:gap-4">
            <figure className="min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-[#17162e]">
              <img
                src={karasNftArt}
                alt="Karas Genesis NFT artwork with a green hat and lightning staff"
                width={230}
                height={230}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="p-3 text-xs leading-5 text-white/75 sm:p-4">
                <span className="block font-semibold text-white">
                  Karas • Genesis
                </span>
                NFT collection artwork
              </figcaption>
            </figure>
            <figure className="min-w-0 overflow-hidden rounded-2xl border border-[#F5CF86]/35 bg-[#17162e]">
              <div className="relative aspect-[36/43] overflow-hidden">
                <img
                  src="/gameplay/doge-nft-glow.svg"
                  alt="Gold Doge NFT skin glowing inside the MagicCraft game hero screen"
                  width={360}
                  height={430}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-3 text-xs leading-5 text-white/75 sm:p-4">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Swords className="h-3.5 w-3.5" aria-hidden="true" />
                  Glowing Doge NFT skin
                </span>
                <a
                  href={glowingSkinSource}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 inline-flex min-h-6 items-center gap-1 text-[#F5CF86] underline decoration-[#F5CF86]/40 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5CF86]"
                >
                  Official in-game preview
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5CF86]">
              Collectible characters
            </p>
            <h3 className="mb-0 mt-3 font-sans text-3xl font-semibold leading-tight tracking-[-0.035em] text-white">
              Discover your legendary.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Genesis brings Bjorn, True Shot and Karas to the collection, with
              Rare, Epic and Legendary NFT tiers. Explore each character's
              traits and supported utility before choosing yours.
            </p>
            <div
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Genesis rarity tiers"
            >
              {['Rare', 'Epic', 'Legendary'].map((rarity) => (
                <span
                  key={rarity}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${rarity === 'Legendary' ? 'border-[#F5CF86]/50 bg-[#F5CF86]/10 text-[#F5CF86]' : rarity === 'Epic' ? 'border-[#B591F2]/40 text-[#D8C9FF]' : 'border-[#98FFF9]/30 text-[#98FFF9]'}`}
                >
                  {rarity}
                </span>
              ))}
            </div>
            <a
              href={genesisGuide}
              target="_blank"
              rel="noreferrer noopener"
              className={`${homeQuietActionClass} -ml-3 mt-3`}
            >
              Explore Genesis characters{' '}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/lobbies" className={homePrimaryActionClass}>
            Find a Web3 match{' '}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/buy-mcrt"
            className={homeSecondaryActionClass}
            onClick={() =>
              trackCta({
                cta: 'buy_mcrt',
                location: 'web3_journey',
                label: 'utility_and_access',
              })
            }
          >
            MCRT utility and access{' '}
            <Coins className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={marketplaceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={homeQuietActionClass}
          >
            Explore NFT marketplace{' '}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={utilitiesGuide}
            target="_blank"
            rel="noreferrer noopener"
            className={homeQuietActionClass}
          >
            How NFT utility works{' '}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-4 max-w-4xl text-xs leading-6 text-white/60">
          The free game needs no NFT or wallet. Web3 entry, character
          eligibility and rewards follow the current lobby and collection rules.
          Collecting an NFT does not guarantee rewards or resale value.
        </p>
      </div>
    </section>
  )
}
