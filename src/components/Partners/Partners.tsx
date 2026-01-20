import partners from '@/data/partners'
import { otherpartners } from '@/data/otherpartners'
import { ArrowUpRight } from 'lucide-react'

interface Partner {
  name: string
  icon: string
  link: string
  type?: string
}

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
          return (
            <a
              key={item.name}
              href={item.link.includes('http') ? item.link : `https://${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-20 items-center justify-center rounded-md border border-white/10 bg-[#0A1240] p-3 transition-all hover:border-[#98FFF9]/40 hover:bg-[#111a54] md:h-24 min-h-[80px] no-underline hover:no-underline"
            >
              <img
                className={`object-contain w-auto opacity-90 group-hover:opacity-100 transition-opacity ${
                  isBitunix
                    ? 'h-[72px] sm:h-[76px] md:h-[80px] lg:h-[84px] max-w-[240px]'
                    : isSmallMark
                    ? 'h-[48px] sm:h-[52px] md:h-[56px] lg:h-[60px] max-w-[200px]'
                    : 'h-[28px] sm:h-[32px] md:h-[36px] lg:h-[40px] max-w-[160px]'
                }`}
                src={item.icon}
                alt={item.name}
                loading="lazy"
              />
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
          const link = item.link.includes('http') ? item.link : `https://${item.link}`
          return (
            <a
              key={item.name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-between rounded-md border border-white/10 bg-[#080F44] p-4 md:p-5 transition-all hover:border-[#98FFF9]/30 hover:bg-[#0C1661] no-underline hover:no-underline"
            >
              <div className="flex items-center justify-center h-12 md:h-16">
                <img
                  className={`object-contain px-2 max-h-full ${item.name === 'Gaimin' ? 'w-[120px]' : item.name === 'Ultra' ? 'w-[80px]' : item.name === 'Hyperplay' ? 'w-[100px]' : item.name === 'GGEM' ? 'w-[50px]' : ''}`}
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-center space-y-1">
                <div className="text-xs font-semibold text-white/90">{item.name}</div>
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
          className="relative inline-flex items-center gap-2 rounded-full h-11 px-6 md:px-7 bg-gradient-to-b from-[#0C1661] to-[#0A1240] border border-[#98FFF9]/30 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#98FFF9]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9]/50"
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