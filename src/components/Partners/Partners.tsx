import partners, { type ListedPartner } from '@/data/partners'
import { otherpartners } from '@/data/otherpartners'
import { trackCta } from '@/lib/analytics'
import { ArrowUpRight } from 'lucide-react'

interface Partner {
  name: string
  icon: string
  link: string
  type?: string
}

const displayPartnerName = (name: string) => {
  if (name === 'biconomy') return 'Biconomy'
  if (name === 'Mexc Global') return 'MEXC'
  if (name === 'Gate IO') return 'Gate.io'
  return name
}

const partnerInitials = (name: string) =>
  displayPartnerName(name)
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

export const ListedPartners = () => {
  const primaryPartners = partners.filter(
    (partner) => partner.priority === 'primary'
  )
  const secondaryPartners = partners.filter(
    (partner) => partner.priority === 'secondary'
  )

  const listedPartnerLink = (
    item: ListedPartner,
    variant: 'primary' | 'secondary'
  ) => {
    const label = displayPartnerName(item.name)

    if (variant === 'secondary') {
      return (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackCta({
              cta: item.cta,
              location: 'game_exchange_section',
              label: item.market,
            })
          }
          className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/85 no-underline transition hover:border-[#98FFF9]/40 hover:bg-white/[0.09] hover:text-[#98FFF9] hover:no-underline"
          aria-label={`Open ${label} ${item.market}`}
          data-listed-priority="secondary"
        >
          <img
            className="h-5 w-10 object-contain"
            src={item.icon}
            alt=""
            loading="lazy"
          />
          <span>{item.market}</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      )
    }

    return (
      <a
        key={item.name}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackCta({
            cta: item.cta,
            location: 'game_exchange_section',
            label: item.market,
          })
        }
        className="group relative flex min-h-[188px] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0A1240] p-5 text-left no-underline transition-all hover:-translate-y-0.5 hover:border-[#98FFF9]/45 hover:bg-[#111a54] hover:no-underline"
        aria-label={`Open ${label} ${item.market}`}
        data-listed-priority="primary"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(152,255,249,0.14),transparent_55%)] opacity-70 transition-opacity group-hover:opacity-100" />
        <span className="relative flex items-start justify-between gap-4">
          <span className="flex h-14 min-w-24 items-center justify-center rounded-lg border border-white/10 bg-black/15 px-3">
            <span className="absolute text-2xl font-black text-white/10">
              {partnerInitials(item.name)}
            </span>
            <img
              className="relative z-10 max-h-8 max-w-28 object-contain"
              src={item.icon}
              alt={`${label} logo`}
              loading="lazy"
            />
          </span>
          <span className="rounded-full border border-[#98FFF9]/30 bg-[#98FFF9]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#98FFF9]">
            Primary route
          </span>
        </span>
        <span className="relative mt-6">
          <span className="block text-lg font-black text-white">{label}</span>
          <span className="mt-1 block text-sm text-white/65">
            {item.market}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#98FFF9]">
            {item.action}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </a>
    )
  }

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#98FFF9]">
          Verified MCRT routes
        </p>
        <h3 className="mt-3 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-4xl text-transparent drop-shadow-xl">
          Buy or trade MCRT
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
          Use Bybit for the MCRT/USDT spot market or PancakeSwap for the
          MCRT/WBNB pool on BNB Chain.
        </p>
      </div>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {primaryPartners.map((item) => listedPartnerLink(item, 'primary'))}
      </div>
      {secondaryPartners.length > 0 && (
        <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
              Also active
            </p>
            <p className="mt-1 text-sm text-white/65">
              HTX remains available as a secondary MCRT/USDT venue.
            </p>
          </div>
          {secondaryPartners.map((item) =>
            listedPartnerLink(item, 'secondary')
          )}
        </div>
      )}
      <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#9255E0] to-transparent" />
    </div>
  )
}

const OurPartners = () => {
  return (
    <div className="space-y-8">
      <h3 className="m-4 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
        OUR PARTNERS
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {otherpartners.map((item: Partner) => {
          const rawLink = (item.link || '').trim()
          const link = rawLink.startsWith('http')
            ? rawLink
            : `https://${rawLink}`
          return (
            <a
              key={item.name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[164px] flex-col items-center justify-between rounded-md border border-white/10 bg-[#080F44] p-4 no-underline transition-all hover:border-[#98FFF9]/30 hover:bg-[#0C1661] hover:no-underline md:p-5"
            >
              <div className="relative flex h-16 w-full items-center justify-center rounded-md border border-white/5 bg-black/10 md:h-20">
                <span className="absolute text-2xl font-black text-white/10">
                  {partnerInitials(item.name)}
                </span>
                <img
                  className={`relative z-10 max-h-12 object-contain px-2 md:max-h-14 ${item.name === 'Gaimin' ? 'w-[120px]' : item.name === 'Ultra' ? 'w-[80px]' : item.name === 'Hyperplay' ? 'w-[100px]' : item.name === 'GGEM' ? 'w-[50px]' : ''}`}
                  src={item.icon}
                  alt={`${displayPartnerName(item.name)} logo`}
                  loading="lazy"
                />
              </div>
              <div className="mt-3 space-y-1 text-center">
                <div className="text-xs font-semibold text-white/90">
                  {displayPartnerName(item.name)}
                </div>
                {item.type && (
                  <span className="inline-flex items-center rounded-full border border-[#98FFF9]/30 bg-[#0A1240] px-2 py-0.5 text-[10px] text-[#98FFF9]">
                    {item.type}
                  </span>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

const Partners = () => {
  return (
    <section
      className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20"
      id="partner"
    >
      <ListedPartners />
      <OurPartners />
      <div className="mt-8 flex items-center justify-center">
        <a
          href="mailto:contact@magiccraft.io"
          className="group relative inline-flex h-11 items-center gap-2 rounded-full border border-[#98FFF9]/30 bg-gradient-to-b from-[#0C1661] to-[#0A1240] px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:border-[#98FFF9]/50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]/50 md:px-7"
        >
          <span className="absolute inset-0 translate-x-[-100%] rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-700 group-hover:translate-x-[100%]" />
          Become a Partner
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default Partners
