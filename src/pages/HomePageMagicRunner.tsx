import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import magiccraftCard from '@/assets/images/magiccraft-card.webp'
import magic8ballCard from '@/assets/images/magic-8-ball-card.webp'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import crousel_first from '@/assets/images/crouserl_first.png'

import screenshot from '@/assets/images/Screenshot.png'
import backgroundimage from '@/assets/images/bg-1.png'
import runnericon from '@/assets/images/runner.png'

import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import googleicon from '@/assets/images/logo (1).png'
import pc from '@/assets/icons/icon-pc.svg'

function Homepagemagicrunner() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="relative flex flex-wrap">
            <div className="relative  h-[700px] w-full bg-mrback bg-cover bg-center lg:w-1/2">
              <div className="mrback-bg-gradient absolute inset-0  h-full w-full"></div>
            </div>
            <div className="  flex rounded-lg lg:mx-10 lg:p-52 ">
              <div className="absolute inset-0 -mb-20 mt-40   flex  flex-col justify-center text-center lg:p-4 lg:text-left    ">
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
                  <span className="text-4xl font-bold lg:p-5 lg:text-6xl">
                    MAGIC RUNNER
                  </span>
                  <br />
                  <span className="text-lg font-bold  lg:p-5">
                    RISE, RUN, REDEEM
                  </span>
                </h3>
                <div className=" m-2 block h-px  w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:hidden" />

                <p className="p-4">
                  Haunted by tragedy, Frigard races against fate, the lone
                  survivor of
                  <br className="hidden lg:block" />
                  Vladislav's wrath and the treachery of Karas. Now, every step
                  is a<br className="hidden lg:block" />
                  desperate sprint for survival, a relentless chase where the
                  shadow of <br className="hidden lg:block" />
                  Vladislav looms, fuelling Frigard's flight for justice.
                </p>

                <div className=" m-2 hidden h-px  w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />
                <button className=" m-5 hidden  rounded-lg bg-[#98FFF9] p-2 text-black lg:block">
                  Play Now
                </button>
              </div>
            </div>

            {/*mid screen */}
            <div className="relative mx-auto -mt-5 mb-20 block md:-mt-10  md:w-[566px]   lg:hidden  ">
              <div className="rounded-[20px]    bg-[#271565]  ">
                {/* <div className="relative  flex max-w-[409px] flex-col items-start  justify-center overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  md:max-w-full md:px-8 md:py-3"> */}
                <h4 className="  px-10 py-2 text-center font-serif text-lg md:text-[22px] ">
                  <span className="text-[#FFB649]  ">PLAY </span> MAGICRUNNER
                  NOW!
                  <br />
                </h4>
                <div className="flex items-center justify-center md:flex-wrap">
                  <span className=" p-2 md:p-5">
                    <img src={pc}></img>
                    Download
                    <br />
                    <p className=" text-lg font-bold md:text-xl">PC</p>
                  </span>

                  <div className="block h-10  w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                  <span className="p-2  md:p-5">
                    <img src={AppleIcon}></img>
                    Get it on <br />
                    <p className=" text-lg font-bold md:text-xl">App Store</p>
                  </span>
                  <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                  <span className=" p-2  md:p-5">
                    <img src={steam}></img>
                    Get it on
                    <br />
                    <p className="text-xl font-bold">Steam</p>
                  </span>
                  <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                  <span className=" p-2  md:p-5">
                    <img src={googleicon}></img>
                    Get it on
                    <br />
                    <p className="text-xl font-bold"> Google play</p>
                  </span>
                </div>
              </div>
            </div>

            {/** */}

            <div className=" relative z-10  m-10 hidden  w-full flex-wrap rounded-4xl bg-[#0C0218] lg:block">
              <div className="space-y-5 px-8 pb-10 pt-5 md:px-10 ">
                <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r  to-90% px-8 py-4 md:p-10  ">
                  <h4 className="font-serif text-lg md:text-[22px]">
                    <span className="text-white">DOWNLOAD NEW BUILD</span>
                  </h4>
                  <div className="flex flex-wrap items-center ">
                    <span className=" p-4">
                      <img src={steam} className=" p-4"></img>
                      Get it on
                      <br />
                      <p className="text-2xl font-bold">Steam</p>
                    </span>

                    <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                    <span className=" p-4">
                      <img src={AppleIcon} className=" p-4"></img>
                      Get it on
                      <br />
                      <p className="text-2xl font-bold">App store</p>
                    </span>
                    <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                    <span className=" p-4">
                      <img src={googleicon} className=" p-4"></img>
                      Get it on
                      <br />
                      <p className="text-2xl font-bold">Google Play</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-30 my-10 block w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
              <div className="space-y-5 px-8 pb-10 pt-5 md:px-10 ">
                <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r  to-90% px-8 py-4 md:p-10  ">
                  <h4 className="font-serif text-lg md:text-[22px] ">
                    <span className="text-white ">STATISTICS</span>
                  </h4>

                  <div className="p-6">
                    <span className=" my-4 py-4 text-[#98FFF9]">201</span>
                    <br />
                    <span className="my-4 py-4 text-white">
                      {' '}
                      Amount of Players
                    </span>
                    <br />
                    <span className="my-4 py-4 text-[#98FFF9]">32,112</span>
                    <br />
                    <span className="my-4 py-4 text-white">
                      Total MCRT earned
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-30 my-10 block w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
              <div className="mx-4 grid snap-x snap-mandatory auto-cols-min grid-flow-col gap-6 overflow-x-auto overscroll-contain overscroll-x-contain px-4 pt-12">
                <a href="https://magiccraft.io" rel="noreferrer noopener">
                  <div className="w-56 select-none snap-start">
                    <img
                      className="pointer-events-none select-none"
                      src={magiccraftCard}
                      alt="MagicCraft Game"
                    />
                  </div>
                </a>
                <div className="w-56 select-none snap-start ">
                  <img
                    className="pointer-events-noneselect-none"
                    src={magic8ballCard}
                    alt="Magic 8 Ball game"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="relative h-[700px] bg-center">
            <img src={backgroundimage} className='h-full ' />
            <div className="absolute left-0 top-0  flex h-full w-full  flex-col  text-center">
              <h2 className="text-balance font-serif text-4xl text-white">
                $ MCRT REWARDS
              </h2>
              <div className="flex flex-col justify-center items-center lg:w-11/12 lg:flex-wrap">
                {/*carousel */}
                <div className=" w-full  lg:w-1/2">
                  <Swiper
                    className="w-5/12 pt-4"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                      prevEl: '.arrow-left',
                      nextEl: '.arrow-right',
                    }}
                    autoHeight={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                  >
                    <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className="h-full w-5/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className=" md:h-[120px] md:w-[150px] lg:h-full lg:w-full">
                          <img src={screenshot} />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className="h-full w-6/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className=" md:h-[120px] md:w-[150px] lg:h-full lg:w-full">
                          <img src={crousel_first} />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button className="arrow-left arrow absolute left-0 m-1 top-[25%] cursor-pointer">
                    <img src={left} alt="MCRT Token" />
                  </button>
                  <button className="arrow-right arrow absolute right-0 m-1 top-[25%] cursor-pointer">
                    <img src={right} alt="MCRT Token" />
                  </button>
                </div>
                {/*carousel */}
                <div className="my-4 w-full h-full lg:w-6/12  rounded-lg bg-custom-dark bg-opacity-70  p-4">
                  <div className="flex flex-wrap">
                    <img src={runnericon} className="px-4 hidden lg:block"></img>
                    <span className="p-5 text-4xl font-bold">How it works</span>
                  </div>
                  <div className="m-2 block h-px lg:w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent" />

                  <div className="lg:p-4 p-1 text-left ">
                    <p className="lg:p-5 ">
                      As Frigard embarks on his harrowing journey, fleeing from{' '}
                      <br className='hidden lg:block'/>
                      Vladislav, the magical essence of the MagicCraft universe
                      <br className='hidden lg:block' />
                      recognizes his valor and resilience. In this world where{' '}
                      <br className='hidden lg:block' />
                      magic and might intertwine, MagicCraft is a blessing and a{' '}
                      <br className='hidden lg:block' />
                      token of power granted by ancient guardians aligned
                      <br className='hidden lg:block'/>
                      against the darkness Vladislav represents. These rewards{' '}
                      <br className='hidden lg:block' />
                      serve as crucial aids in Frigard’s journey, providing him
                      with
                      <br className='hidden lg:block'/>
                      the strength, speed, and resources needed to continue his{' '}
                      <br className='hidden lg:block' />
                      quest. Each completed daily task, a challenge set by these{' '}
                      <br className='hidden lg:block' />
                      unseen protectors, earns Frigard these mystical rewards,{' '}
                      <br className='hidden lg:block'/>
                      support his quest for survival and justice.
                    </p>

                    <button className="m-5 rounded-lg  border-2 border-solid border-[#98FFF9] p-2 text-[#98FFF9] ">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* {/* daily mission*/}

          {/* daily mission*/}
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Homepagemagicrunner
