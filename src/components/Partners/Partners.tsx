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
      <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
        {partners.map((item: Partner) => {
          return (
            <div
              key={item.name}
              className="grid h-20 place-items-center bg-[#161E4A] rounded-xl md:h-36 hover:bg-[#1a2456] transition-colors duration-200"
            >
              <a href={item.link.includes('http') ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full px-4">
                <img 
                  className={`object-contain max-h-full max-w-full ${item.name === 'Bitunix' ? 'w-[150px]' : item.name === 'WEEX' ? 'w-[160px]' : ''}`}  
                  src={item.icon} 
                  alt={item.name} 
                />
              </a>
            </div>
          )
        })}
      </div>
      <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
    </div>
  )
}

const OurPartners = () => {
  return (
    <div className="space-y-8">
      <h3 className="m-4 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
        OUR PARTNERS
      </h3>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
        {otherpartners.map((item: Partner) => {
          const link = item.link.includes('http')
            ? item.link
            : `https://${item.link}`
          return (
            <div
              key={item.name}
              className="flex h-[5em] flex-col items-center bg-[#080F44] rounded-xl md:h-36 md:justify-center"
            >
              <div className="flex items-center justify-center p-5 lg:mt-5">
                <img className={`px-2 ${item.name === 'Gaimin' ? 'w-[120px]' : item.name === 'Ultra'? 'w-[80px]' : item.name === 'Hyperplay' ? 'w-[100px]' : item.name === 'GGEM' ? 'w-[50px]' : ''}`} src={item.icon} alt={item.name} />
              </div>
              <div className="hidden lg:block">
                <div className="flex h-[3.5em] w-[19.4em] flex-col items-center bg-[#0C1661] px-2 md:flex-row md:justify-between">
                  <div className="text-center md:mr-[2em] md:flex md:flex-col md:items-start">
                    <div className="hidden text-xs font-bold leading-tight text-[#fff] md:text-sm lg:block">
                      {item.name}
                    </div>
                    {item.link && (
                      <a
                        href={link}
                        className="hidden bg-gradient-to-b from-[#fff] to-[#808080] to-80% bg-clip-text text-[8.583px] font-bold leading-normal text-transparent underline md:text-xs lg:block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link}
                      </a>
                    )}
                  </div>
                  {item.type && (
                    <div className="mt-1 hidden text-xs text-[#7AF2B8] md:mt-0 md:text-sm lg:block text-right md:ml-auto">
                      {item.type}
                    </div>
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
    <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20 min-h-screen" id="partner">
      <ListedPartners />
      <OurPartners />
      <div className="flex justify-center items-center mt-8">
        <a 
          href="mailto:adam@magiccraft.io" 
          className="inline-flex items-center gap-2 text-[#98FFF9] hover:text-white transition-colors px-6 py-3 rounded-lg border-2 border-[#98FFF9] hover:border-white"
        >
          Become a Partner
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default Partners 