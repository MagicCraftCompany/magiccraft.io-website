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
      <h3 className="mt-8 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text pt-4 text-center font-serif text-4xl text-transparent drop-shadow-xl">
        $MCRT LISTED ON
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {partners.map((item: Partner) => {
          return (
            <a
              key={item.name}
              href={item.link.includes('http') ? item.link : `https://${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-20 items-center justify-center rounded-xl bg-[#0A1240] p-3 transition-all hover:scale-[1.02] hover:bg-[#111a54] md:h-24 min-h-[80px]"
            >
              <img
                className="object-contain h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] w-auto max-w-[160px] opacity-90 group-hover:opacity-100 transition-opacity"
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {otherpartners.map((item: Partner) => {
          const link = item.link.includes('http') ? item.link : `https://${item.link}`
          return (
            <div
              key={item.name}
              className="group flex flex-col items-center justify-between rounded-xl bg-[#080F44] p-4 md:p-5"
            >
              <div className="flex items-center justify-center h-12 md:h-16">
                <img
                  className={`object-contain px-2 max-h-full ${item.name === 'Gaimin' ? 'w-[120px]' : item.name === 'Ultra' ? 'w-[80px]' : item.name === 'Hyperplay' ? 'w-[100px]' : item.name === 'GGEM' ? 'w-[50px]' : ''}`}
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="mt-3 hidden w-full lg:block">
                <div className="flex h-[3.25em] w-full items-center justify-between rounded-lg bg-gradient-to-r from-[#0C1661] to-[#0A1240] border border-[#B591F2]/20 px-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#B591F2]/40 hover:shadow-xl hover:shadow-[#B591F2]/10">
                  <div className="text-left">
                    <div className="hidden text-xs font-bold leading-tight text-white drop-shadow-sm md:block">
                      {item.name}
                    </div>
                    {item.link && (
                      <a
                        href={link}
                        className="hidden bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-[10px] font-semibold leading-tight text-transparent transition-all duration-300 hover:from-white hover:to-[#98FFF9] md:block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link}
                      </a>
                    )}
                  </div>
                  {item.type && (
                    <span className="ml-2 hidden rounded-full border border-[#98FFF9]/40 bg-gradient-to-r from-[#98FFF9]/10 to-[#B591F2]/10 px-3 py-1.5 text-[10px] font-medium text-[#98FFF9] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#98FFF9]/60 hover:bg-gradient-to-r hover:from-[#98FFF9]/20 hover:to-[#B591F2]/20 hover:text-white hover:shadow-[#98FFF9]/20 md:inline-block">
                      {item.type}
                    </span>
                  )}
                </div>
              </div>
            </div>
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
          href="mailto:adam@magiccraft.io"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-[#98FFF9] px-6 py-3 text-[#98FFF9] transition-colors hover:border-white hover:text-white"
        >
          Become a Partner
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default Partners 