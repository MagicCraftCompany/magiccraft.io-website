import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import magiccraftCard from '@/assets/images/magiccraft-card.webp'
import magic8ballCard from '@/assets/images/magic-8-ball-card.webp'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'

import clock from '@/assets/images/clock.png'

import backgroundimage from '@/assets/images/bg-1.png'
import runnericon from '@/assets/images/runner.png'

import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import googleicon from '@/assets/images/logo (1).png'
import pc from '@/assets/icons/icon-pc.svg'

import lock from '@/assets/icons/Union.svg'
import diamond from '@/assets/icons/Group.svg'
import box from '@/assets/images/Layer 0 copy.png'
import back from '@/assets/images/Ellipse 410.png'
import box2 from '@/assets/images/magicrunner/novice-chest.png'
import watch from '@/assets/icons/Frame.svg'

import backimage from '@/assets/images/magic8ball.png'
import backimage2 from '@/assets/images/covertab.png'

import slide from '@/assets/images/magic8ballswiper.png'

function Homepagemagic8ball() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="relative flex flex-wrap ">
            <img
              src={backimage}
              className=" relative hidden h-[700px]  w-full bg-cover  bg-center  lg:block "
            />

            <img
              src={backimage2}
              className="relative block h-[700px]  w-full bg-cover  bg-center  lg:hidden "
            />

            <div className=" flex w-full  rounded-lg   ">
              <div className="absolute inset-0 -mb-20  mt-40 flex  w-fit  flex-col  justify-center  text-center lg:-top-[30em] lg:ml-[15em] lg:p-4 lg:text-left">
                <span className="m-4 hidden w-fit justify-center rounded-[2em] bg-[#4457B8] px-4 py-2 text-[#98FFF9] lg:block ">
                  MagicCraft Ecosystem Game
                </span>
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
                  <span className="text-4xl font-bold lg:p-5 lg:text-6xl">
                    MAGIC 8BALL
                  </span>
                  <br />
                  <span className="text-lg font-bold  lg:p-5">
                    RISE, RUN, REDEEM
                  </span>
                </h3>
                <div className="m-2 block h-px w-full  w-max bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:hidden" />

                <p className="p-4">
                  Within the enchanting realms of MagicCraft, the game of
                  Magic8Ball
                  <br className="hidden lg:block" />
                  is revered as a ritual of foresight and strategy, deeply
                  ingrained in the
                  <br className="hidden lg:block" />
                  culture of its inhabitants. Each 1v1 match is a dance with
                  destiny,
                  <br className="hidden lg:block" />
                  where players channel their focus and cunning to outmaneuver
                  their <br className="hidden lg:block" />
                  opponents
                </p>

                <div className=" m-2 hidden h-px  w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />
                <button className=" m-5 hidden rounded-lg bg-[#98FFF9] p-2 text-black lg:block lg:w-[6.125em]">
                  Play Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto  mb-20 block md:-mt-10  md:w-[566px]   lg:hidden  ">
              <div className="rounded-[20px]    bg-[#271565]  ">
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

            <div className="z-10  m-10 -mt-10  hidden w-full rounded-4xl  bg-custom-dark bg-opacity-70  lg:block">
              <div className="flex flex-wrap ">
                <div className=" md:px-10  ">
                  <div className="relative  h-full w-full  overflow-hidden rounded-[20px]  bg-gradient-to-r  to-90% px-8 md:p-10  ">
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
                    <div className="w-[13em] select-none snap-start">
                      <img
                        className="pointer-events-none select-none"
                        src={magiccraftCard}
                        alt="MagicCraft Game"
                      />
                    </div>
                  </a>
                  <div className="w-[13em] select-none snap-start ">
                    <img
                      className="pointer-events-noneselect-none"
                      src={magic8ballCard}
                      alt="Magic 8 Ball game"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative h-[700px] bg-center  lg:h-full">
            <img src={backgroundimage} className="h-full w-full object-cover" />
            <div className="absolute left-0 top-0  flex h-full w-full  flex-col  text-center">
              <h2 className="text-balance  p-2 font-serif text-4xl text-white">
                $ MCRT REWARDS
              </h2>
              <div className="flex flex-col   items-center justify-center  lg:flex-row">
                <div className=" lg:-mt-30 w-full lg:relative lg:-mr-10   lg:w-[40em]">
                  <Swiper
                    className="w-full pt-4"
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
                        <div className="  w-fit p-2 lg:h-full lg:w-full">
                          <img src={slide} />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className="h-full w-6/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className="  w-fit p-2 lg:h-full lg:w-full">
                          <img src={slide} />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button className=" arrow-left arrow absolute left-0 top-[15em] z-10 m-1  hidden -translate-y-1/2 cursor-pointer md:block lg:left-[2em] lg:top-1/2  lg:transform">
                    <img src={left} alt="MCRT Token" />
                  </button>
                  <button className="arrow-right arrow   absolute right-0 top-[15em] z-10 m-1 hidden  -translate-y-1/2 cursor-pointer  md:block lg:right-[5em] lg:top-1/2  lg:transform">
                    <img src={right} alt="MCRT Token" />
                  </button>
                </div>
                <div className="my-4 h-full w-full rounded-lg bg-custom-dark bg-opacity-70 p-4 lg:h-fit  lg:w-[500px]">
                  <div className="flex flex-wrap">
                    <img
                      src={runnericon}
                      className="hidden px-4 lg:block"
                    ></img>
                    <span className="p-5 text-4xl font-bold">How it works</span>
                  </div>
                  <div className="m-2 block h-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:w-5/12" />

                  <div className="p-1 text-left lg:p-4 ">
                    <p className="lg:p-5 ">
                      Completing daily tasks and emerging victorious in these{' '}
                      <br className="hidden lg:block" />
                      mystical matches earns players these sacred tokens,{' '}
                      <br className="hidden lg:block" />
                      believed to carry the wisdom and power of the oracles{' '}
                      <br className="hidden lg:block" />
                      themselves. Thus, in Magic 8Ball, every match is a step{' '}
                      <br className="hidden lg:block" />
                      closer to mastering not just the game, but also the
                      <br className="hidden lg:block" />
                      deeper mysteries of MagicCraft
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
          <section className=" relative mt-60 h-full w-full md:mt-40 lg:-mt-[9em]">
            <div className=" flex flex-col items-center justify-center  lg:flex-row">
              <h1 className="p-4 text-4xl font-bold">DAILY MISSIONS</h1>
              <div className="m-2   flex flex-wrap items-center justify-center rounded-[3.125em] bg-[#4457B8] pr-2 text-[#98FFF9]">
                <div className="flex flex-wrap items-center justify-center rounded-[3.125em] bg-[#98FFF9] p-2 text-black">
                  <img src={clock} className="m-1 h-10 w-10" />
                  <p>Ends in:</p>
                </div>
                <p className="p-2">08h 21m 11s</p>
              </div>
            </div>

            <div className="m-4 flex space-x-4 overflow-auto lg:items-center lg:justify-center">
              <div className=" h-[35.25em] w-[18.375em] flex-shrink-0 rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="  my-4 ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em]">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-gradient-to-b from-[#B7326A] to-[rgba(144,35,107,0.43)] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Locked
                  </div>
                </div>
                <div className="  h-[9.890063em] w-[10.944563em] flex-shrink-0 opacity-[0.2] [backdrop-filter:blur(23px)]">
                  <img
                    src={box}
                    className="absolute left-1/2 top-1/2 mx-[3.9em] mt-3 -translate-x-1/2 -translate-y-1/2 transform"
                  />
                  <img
                    src={lock}
                    className="absolute  left-1/2  top-1/2 mx-[3.5em] -translate-x-1/2 -translate-y-1/2 transform"
                  />
                </div>

                <div className="mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9]">
                  <div className="h-[0.4em] w-[0.7em] rounded-lg bg-[#98FFF9] "></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex text-xl ">
                    <span className="flex-shrink-0 text-[#808080]">
                      Collect coins :
                    </span>
                    <span className="ml-8 text-[#3A5874]">400/400</span>
                  </div>
                  <div className="flex text-xl ">
                    <span className="mt-3 flex-shrink-0 text-white">
                      Miles to run:
                    </span>
                    <span className="ml-11 text-[#98FFF9]  ">
                      18,293/
                      <br />
                      20,000
                    </span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-white">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#98FFF9]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      Obstacle jumps :
                    </span>
                    <span className="ml-2 text-[#3A5874]">40/40</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-white">
                      In-game playing:
                    </span>
                    <span className="ml-2 text-[#98FFF9]">0,7h/4h</span>
                  </div>
                </div>

                <div className="my-8 block h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

                <div className="">
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] pb-[23.9px] pt-3">
                    <button className="bg-fff9 rounded-8xs  flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="font-colus relative flex-1 text-left text-lg font-bold leading-[158%] text-[#0E0E2E]">
                          Unlock the CHEST
                        </div>
                      </div>
                    </button>
                    <div className="flex flex-row items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-[1px] px-0 pb-[0.1px] pt-0">
                        <img
                          className="relative h-[21.1px] w-[26.1px]"
                          alt=""
                          src={diamond}
                        />
                        <div className="relative inline-block min-w-[38px] font-medium leading-[26px]">
                          1234
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[35.25em] w-[18.375em] rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="  my-4 ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em]">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-[#4457B8] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Activated
                  </div>
                </div>
                <div className="bg-lightgray h-[9.890063em] w-[10.944563em]  flex-shrink-0 ">
                  <img src={box} className="mx-[3.9em]" />
                </div>
                <div className="mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9]">
                  <div className="h-[0.4em] w-[6.7em] rounded-lg bg-[#98FFF9] "></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex text-xl ">
                    <span className="flex-shrink-0 text-[#808080]">
                      Collect coins :
                    </span>
                    <span className="ml-8 text-[#3A5874]">400/400</span>
                  </div>
                  <div className="flex text-xl ">
                    <span className="mt-3 flex-shrink-0 text-white">
                      Miles to run:
                    </span>
                    <span className="ml-11 text-[#98FFF9]  ">
                      18,293/
                      <br />
                      20,000
                    </span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-white">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#98FFF9]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      Obstacle jumps :
                    </span>
                    <span className="ml-2 text-[#3A5874]">40/40</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-white">
                      In-game playing:
                    </span>
                    <span className="ml-2 text-[#98FFF9]">0,7h/4h</span>
                  </div>
                </div>

                <div className="my-8 block h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

                <div className="">
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] pb-[23.9px] pt-3">
                    <button className="bg-fff9 rounded-8xs  flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="font-colus relative flex-1 text-center text-lg font-bold leading-[158%] text-[#61687B]">
                          COLLECT REWARDS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[35.25em] w-[18.375em] rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="  my-4 ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em]">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-[#54BC8A] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Ready
                  </div>
                </div>
                <div className="relative flex h-[9.890063em] w-full flex-shrink-0 items-center justify-center lg:w-full">
                  <img
                    src={back}
                    className="absolute inset-0 h-full w-full object-cover  lg:mt-0"
                  />
                  <img src={box} className="absolute mt-6 " />
                </div>
                <div className="mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9]">
                  <div className="h-[0.4em] w-full rounded-lg bg-[#98FFF9] "></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex text-xl ">
                    <span className="flex-shrink-0 text-[#808080]">
                      Collect coins :
                    </span>
                    <span className="ml-8 text-[#3A5874]">400/400</span>
                  </div>
                  <div className="flex text-xl ">
                    <span className="mt-3 flex-shrink-0 text-[#808080]">
                      Miles to run:
                    </span>
                    <span className="ml-11 text-[#3A5874]  ">
                      18,293/
                      <br />
                      20,000
                    </span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#3A5874]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      Obstacle jumps :
                    </span>
                    <span className="ml-2 text-[#3A5874]">40/40</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      In-game playing:
                    </span>
                    <span className="ml-2 text-[#3A5874]">0,7h/4h</span>
                  </div>
                </div>

                <div className="my-8 block h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

                <div className="">
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] pb-[23.9px] pt-3">
                    <button className="bg-fff9 rounded-8xs  flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="font-colus relative flex-1 text-center text-lg font-bold leading-[158%] text-[#0E0E2E]">
                          COLLECT REWARDS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[35.25em] w-[18.375em] rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="  my-4 ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em]">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-[#54BC8A] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Ready
                  </div>
                </div>
                <div className="relative flex h-[9.890063em] w-full flex-shrink-0 items-center justify-center lg:w-full">
                  <img
                    src={back}
                    className="absolute inset-0 h-full w-full object-cover  lg:mt-0"
                  />
                  <img src={box} className="absolute mt-6 " />
                </div>
                <div className="mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9]">
                  <div className="h-[0.4em] w-full rounded-lg bg-[#98FFF9] "></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex text-xl ">
                    <span className="flex-shrink-0 text-[#808080]">
                      Collect coins :
                    </span>
                    <span className="ml-8 text-[#3A5874]">400/400</span>
                  </div>
                  <div className="flex text-xl ">
                    <span className="mt-3 flex-shrink-0 text-[#808080]">
                      Miles to run:
                    </span>
                    <span className="ml-11 text-[#3A5874]  ">
                      18,293/
                      <br />
                      20,000
                    </span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#3A5874]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      Obstacle jumps :
                    </span>
                    <span className="ml-2 text-[#3A5874]">40/40</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="flex-shrink-0 text-[#808080]">
                      In-game playing:
                    </span>
                    <span className="ml-2 text-[#3A5874]">0,7h/4h</span>
                  </div>
                </div>

                <div className="my-8 block h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

                <div className="">
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] pb-[23.9px] pt-3">
                    <button className="bg-fff9 rounded-8xs  flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="font-colus relative flex-1 text-center text-lg font-bold leading-[158%] text-[#0E0E2E]">
                          COLLECT REWARDS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-6 flex items-center justify-center lg:m-10">
              <button className="rounded-lg bg-[#98FFF9] p-2 font-bold text-[#0E0E2E] md:w-[12.625em] md:text-2xl ">
                {' '}
                Join a Mission
              </button>
            </div>
          </section>

          {/* daily mission*/}

          <section className=" relative m-5">
            <div className="m-10 flex items-center justify-center font-bold ">
              <h1 className="text-center text-4xl">
                {' '}
                CHEST TYPES AND <br /> UNLOCKING MECHANISMS
              </h1>
            </div>
            <div className="flex flex-col items-start  justify-center gap-5 lg:flex-row">
              <div className="mb-4 flex w-full flex-shrink-0 flex-col  items-center justify-center  rounded-[20.152px] border-[1.008px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_4.03px_50.381px_0px_rgba(10,9,23,0.60)] lg:w-[405.059px]  ">
                <div className="-mt-6 flex h-[5.625em] w-[5.625em] items-center justify-center rounded-[1.875em] bg-[#34125A]">
                  <img src={box2} className="h-10 w-10" />
                </div>
                <h3 className="mt-4 font-bold">NOVICE CHEST</h3>

                <div className="my-2 block h-px w-full bg-gradient-to-r from-transparent via-[#34125A] to-transparent " />
                <p className="flex flex-wrap p-4 text-center">
                  Available for all players to open once <br />
                  daily at no cost, encouraging daily <br />
                  engagement.
                </p>
              </div>
              <div className="mb-4 flex  w-full flex-shrink-0 flex-col  items-center justify-center  rounded-[20.152px] border-[1.008px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_4.03px_50.381px_0px_rgba(10,9,23,0.60)] lg:w-[405.059px]  ">
                <div className="-mt-6 flex h-[5.625em] w-[5.625em] items-center justify-center rounded-[1.875em] bg-[#34125A]">
                  <img src={box} className="h-14 w-14" />
                </div>
                <h3 className="mt-4 font-bold">PREMIUM CHESTS</h3>

                <div className="my-2 block h-px w-full bg-gradient-to-r from-transparent via-[#34125A] to-transparent " />
                <p className="flex flex-wrap p-4 text-center">
                   Including Masterful, Mythic, Eternal,
                  <br />
                  and Legendary tiers, these chests <br />
                  necessitate gems for unlocking. Gems <br />
                  represent a versatile in-game currency, <br />
                  obtainable either through direct <br />
                  purchase or as rewards from previously <br />
                  unlocked chests.
                </p>
              </div>
              <div className="mb-4 flex w-full flex-shrink-0 flex-col  items-center justify-center  rounded-[20.152px] border-[1.008px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_4.03px_50.381px_0px_rgba(10,9,23,0.60)] lg:w-[405.059px]  ">
                <div className="-mt-6 flex h-[5.625em] w-[5.625em] items-center justify-center rounded-[1.875em] bg-[#34125A]">
                  <img src={watch} className="h-12 w-12" />
                </div>
                <h3 className="mt-4 font-bold">EXPIRATION POLICY</h3>

                <div className="my-2 block h-px w-full bg-gradient-to-r from-transparent via-[#34125A] to-transparent " />
                <p className="flex flex-wrap p-4 text-center">
                  To maintain a dynamic and engaging
                  <br />
                  gameplay experience, all chests <br />
                  earned must be unlocked on the same
                  <br />
                  day of acquisition; otherwise, they <br />
                  expire at day's end, adding a strategic <br />
                  element to resource management.
                </p>
              </div>
            </div>
            <div className="m-6 flex items-center justify-center">
              <button className="rounded-lg bg-[#98FFF9] p-2 font-bold text-[#0E0E2E] md:w-[12.625em] md:text-2xl ">
                {' '}
                Join a Mission
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Homepagemagic8ball
