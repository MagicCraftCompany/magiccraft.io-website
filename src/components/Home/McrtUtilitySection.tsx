import {
  BadgeDollarSign,
  Boxes,
  Code2,
  Crown,
  Gamepad2,
  LockKeyhole,
  ShoppingBag,
  Trophy,
  WalletCards,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { handleBuyMCRT } from '@/lib/gameActions'

type UtilityTrack = {
  title: string
  kicker: string
  body: string
  detail: string
  color: string
  icon: LucideIcon
  href: string
  cta: string
}

const utilityTracks: UtilityTrack[] = [
  {
    title: 'Compete in eligible lobbies',
    kicker: 'PvP lobbies',
    body: 'Eligible players can move $MCRT into the lobby balance and join supported reward-pool matches alongside free lobby paths.',
    detail:
      'Requirements and pool availability change, so check the live lobby schedule before joining.',
    color: '#98FFF9',
    icon: Gamepad2,
    href: 'https://lobby.magiccraft.io/',
    cta: 'Open lobbies',
  },
  {
    title: 'Meet access requirements',
    kicker: 'VIP and pledging',
    body: 'Some VIP and secondary-reward lobbies use $MCRT and eligible NFT ownership rules. Pledging is a separate lock-based feature.',
    detail:
      'Review the current terms, lock period, and reward calculator before committing tokens.',
    color: '#FFB649',
    icon: LockKeyhole,
    href: 'https://lobby.magiccraft.io/pledging',
    cta: 'View pledging',
  },
  {
    title: 'Trade playable assets',
    kicker: 'Marketplace',
    body: 'Eligible characters, skins, items, and game assets move through the MagicCraft marketplace, with $MCRT used for supported transactions.',
    detail:
      'Selected Genesis and Revelation assets can connect to character, skin, and lobby utility.',
    color: '#B591F2',
    icon: ShoppingBag,
    href: 'https://app.magiccraft.io/marketplace/explorer',
    cta: 'Open market',
  },
  {
    title: 'Accept $MCRT anywhere',
    kicker: 'MCRTPay',
    body: 'Builders can add $MCRT checkout to websites and apps with a small JavaScript widget, live price conversion, QR flow, and BscScan verification.',
    detail:
      'This turns the token into a practical payment rail beyond the game client.',
    color: '#10B981',
    icon: Code2,
    href: 'https://mcrtpay.com/',
    cta: 'Use MCRTPay',
  },
]

const accessCards = [
  {
    label: 'Free lobbies',
    value: 'Start playing',
    text: 'Use the current schedule to find supported free-entry matches.',
    icon: Trophy,
  },
  {
    label: 'VIP lobbies',
    value: 'Check eligibility',
    text: '$MCRT and NFT requirements are shown by the live lobby experience.',
    icon: Crown,
  },
  {
    label: 'Secondary-token lobbies',
    value: 'Scheduled pools',
    text: 'Some schedules use BNB Chain-pegged reward assets. Availability varies.',
    icon: Boxes,
  },
]

const productRails = [
  ['Game', 'Supported lobby entry and reward-pool settlement'],
  ['Assets', 'Eligible characters, skins, marketplace sales, and minting'],
  ['Access', 'VIP rules, pledging, referrals, and holder features'],
  ['Builders', 'MCRTPay, Game Maker, MagicAds, grants, and creator tools'],
]

export default function McrtUtilitySection() {
  return (
    <section
      id="mcrt-utility"
      className="w-full border-y border-white/5 bg-[#03082f] py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#98FFF9]">
              <WalletCards className="h-3.5 w-3.5" aria-hidden="true" />
              Optional utility
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
              A clear utility layer, after the game
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/[0.72] sm:text-base">
              You do not need a wallet to begin playing. When you choose the
              Web3 path, $MCRT connects supported lobbies, marketplace assets,
              pledging, payments, and creator tools.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {productRails.map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  {label}
                </div>
                <div className="mt-2 text-sm leading-snug text-white/[0.82]">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {utilityTracks.map(
            ({ title, kicker, body, detail, color, icon: Icon, href, cta }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[270px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[2px] opacity-80"
                  style={{ backgroundColor: color }}
                />
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border bg-black/20"
                    style={{ borderColor: `${color}55`, color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{
                      borderColor: `${color}55`,
                      color,
                      backgroundColor: `${color}14`,
                    }}
                  >
                    {kicker}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/[0.68]">
                  {body}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {detail}
                </p>
                <span
                  className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.16em] transition-colors group-hover:text-white"
                  style={{ color }}
                >
                  {cta}
                </span>
              </a>
            )
          )}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#07122A]/90 via-[#0a0524]/90 to-[#140B2A]/90 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#98FFF9]/30 bg-[#98FFF9]/10 text-[#98FFF9]">
                <BadgeDollarSign className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#98FFF9]">
                  Token loop
                </p>
                <h3 className="text-xl font-bold text-white">
                  Compete, spend, lock, and build
                </h3>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                [
                  'Compete',
                  'Join eligible reward-pool matches and supported referral paths.',
                ],
                [
                  'Spend',
                  'Use $MCRT for lobby tickets, marketplace assets, and product credits.',
                ],
                [
                  'Lock',
                  'Pledging locks tokens for a chosen period under current terms.',
                ],
                [
                  'Build',
                  'Add supported checkout, maps, campaigns, or creator tools.',
                ],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-black/20 p-3"
                >
                  <div className="text-sm font-bold text-white">{label}</div>
                  <div className="mt-1 text-xs leading-relaxed text-white/[0.58]">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {accessCards.map(({ label, value, text, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
              >
                <Icon className="h-5 w-5 text-[#FFB649]" aria-hidden="true" />
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  {label}
                </div>
                <div className="mt-1 text-lg font-bold text-white">{value}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/[0.62]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 sm:flex-row sm:px-5">
          <p className="text-center text-sm leading-relaxed text-white/[0.68] sm:text-left">
            Use $MCRT only where it adds value to your path: eligible lobbies,
            assets, pledging, payments, and creator tools.
          </p>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button
              onClick={handleBuyMCRT}
              className="btn-primary min-w-[150px]"
            >
              Get $MCRT
            </button>
            <a
              href="https://docs.magiccraft.io/web3-user-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-w-[150px] text-center"
            >
              Read user guide
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
