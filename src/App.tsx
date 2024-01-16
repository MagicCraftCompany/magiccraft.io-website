import './App.css'
import mcLogo from '@/assets/images/magiccraft-logo.webp'
import heroImg from '@/assets/images/hero.webp'
import mcrtIcon from '@/assets/images/mcrt-icon.webp'
import { ShoppingBag, Gamepad2, Coins, ArrowUpLeft, Wallet } from 'lucide-react'

function App() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <header className="w-full bg-[#0A091799] p-5 backdrop-blur-md">
          <nav className="flex items-center gap-12 rounded-xl bg-[#431269B2]">
            <div className="grid place-items-center self-stretch  bg-black/20 px-8 ">
              <a href="https://magiccraft.io/" rel="noreferrer noopener">
                <img className="w-44" src={mcLogo} alt="MagicCraft" />
              </a>
            </div>

            <div className="flex w-full items-center justify-between gap-12 py-4 pr-5">
              <div className="flex items-center gap-12">
                <a href="#" rel="noreferrer noopener">
                  <div className="flex cursor-pointer items-center gap-2">
                    <ShoppingBag size={18} />
                    <p className="text-base">NFT Marketplace</p>
                  </div>
                </a>
                <a href="#" rel="noreferrer noopener">
                  <div className="flex cursor-pointer items-center gap-2">
                    <Gamepad2 size={18} />
                    <p className="text-base">MagicPortal</p>
                  </div>
                </a>
                <a href="#" rel="noreferrer noopener">
                  <div className="flex cursor-pointer items-center gap-2">
                    <Coins size={18} />
                    <p className="text-base">$MCRT</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex cursor-pointer items-center gap-2 ">
                  <ArrowUpLeft size={18} />
                  <p>Back to Standard Mode</p>
                </div>
                <button>
                  <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#98FFF9] px-5 py-3 text-[#03082F]">
                    <Wallet size={18} />
                    <p>Connect Wallet</p>
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <div className="py-3"></div>
        </header>

        <main>
          {/* hero section */}
          <section className="relative ">
            <div className=" hero-bg-gradient absolute -top-8 left-0 -z-10 h-fit  w-full ">
              <img src={heroImg} alt="Magiccraft Characters - Hero Image" />
              <div className="hero-bg-gradient absolute left-0 top-0 z-10 h-full w-full"></div>
            </div>

            <div className="relative mx-auto w-11/12 max-w-screen-xl ">
              <div className="grid w-full grid-cols-1 place-items-center gap-8 pb-80 pt-28">
                {/* <h1 className="text-center font-serif text-5xl text-slate-200 drop-shadow-lg">
                  MagicCraft Vision 2024
                </h1> */}
                <div className="max-w-28">
                  <img src={mcrtIcon} alt="" />
                </div>
              </div>
            </div>
          </section>

          <div className="relative mx-auto w-11/12 max-w-screen-xl">
            <div className="rounded-4xl relative -top-20 w-full bg-[#0C0218] ">
              <div className="space-y-5 px-10 pb-10 pt-5">
                <h2 className="text-balance text-center font-serif text-2xl">
                  Join us in shaping the future of gaming with MCRT, the
                  cornerstone currency of the gaming world.
                </h2>
                <div className="grid grid-cols-3 gap-[30px]">
                  <div className="min-w-80 rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% p-10 ">
                      <h4 className="font-serif text-[22px]">
                        <span className="text-[#8EFF49]">
                          MCRT Integration:
                        </span>{' '}
                        <br /> Enhance your gaming with MCRT.
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[230px] leading-none text-transparent">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="min-w-80 rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% p-10 ">
                      <h4 className="font-serif text-[22px]">
                        <span className="text-[#C09AFF]">
                          Monthly Surprises:
                        </span>{' '}
                        <br />
                        New games every two months.
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[230px] leading-none text-transparent">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="min-w-80 rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% p-10 ">
                      <h4 className="font-serif text-[22px]">
                        <span className="text-[#98FFF9]">Portfolio:</span>{' '}
                        <br />
                        indie and AA games onboarded.
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[230px] leading-none text-transparent">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="relative mx-auto w-11/12 max-w-screen-xl"></section>
        </main>
      </div>
    </>
  )
}

export default App
