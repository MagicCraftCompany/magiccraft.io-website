import partners from '@/data/partners'
import { otherpartners } from '@/data/otherpartners'
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
  return (
    <div className="space-y-8">
      <h3 className="mt-6 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text pt-4 text-center font-serif text-4xl text-transparent drop-shadow-xl">
        $MCRT LISTED ON
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {partners.map((item: Partner) => {
          const isSmallMark = ['WEEX', 'biconomy'].includes(item.name)
          const isBitunix = item.name === 'Bitunix'
          const rawLink = (item.link || '').trim()
          const href = rawLink.startsWith('http') ? rawLink : `https://${rawLink}`
          const label = displayPartnerName(item.name)
          return (
            <a
              key={item.name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[104px] flex-col items-center justify-center gap-2 rounded-md border border-white/10 bg-[#0A1240] p-3 text-center transition-all hover:border-[#98FFF9]/40 hover:bg-[#111a54] no-underline hover:no-underline"
              aria-label={`${item.name} exchange listing`}
            >
              <span className="pointer-events-none absolute inset-0 rounded-md bg-[radial-gradient(circle_at_50%_0%,rgba(152,255,249,0.12),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-12 w-full items-center justify-center">
                <span className="absolute text-2xl font-black text-white/10">
                  {partnerInitials(item.name)}
                </span>
                <img
                  className={`relative z-10 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100 ${
                    isBitunix
                      ? 'h-[58px] max-w-[190px] sm:h-[64px] md:h-[68px]'
                      : isSmallMark
                      ? 'h-[42px] max-w-[160px] sm:h-[46px] md:h-[50px]'
                      : 'h-[28px] max-w-[140px] sm:h-[32px] md:h-[36px]'
                  }`}
                  src={item.icon}
                  alt={`${label} logo`}
                  loading="lazy"
                />
              </div>
              <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors group-hover:text-[#98FFF9]">
                {label}
              </span>
            </a>
          )
        })}
      </div>
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
          const link = rawLink.startsWith('http') ? rawLink : `https://${rawLink}`
          return (
            <a
              key={item.name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[164px] flex-col items-center justify-between rounded-md border border-white/10 bg-[#080F44] p-4 transition-all hover:border-[#98FFF9]/30 hover:bg-[#0C1661] md:p-5 no-underline hover:no-underline"
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
              <div className="mt-3 text-center space-y-1">
                <div className="text-xs font-semibold text-white/90">{displayPartnerName(item.name)}</div>
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
    <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20" id="partner">
      <ListedPartners />
      <OurPartners />
      <div className="flex items-center justify-center mt-8">
        <a
          href="mailto:contact@magiccraft.io"
          className="group relative inline-flex items-center gap-2 rounded-full h-11 px-6 md:px-7 bg-gradient-to-b from-[#0C1661] to-[#0A1240] border border-[#98FFF9]/30 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#98FFF9]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]/50"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          Become a Partner
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default Partners
