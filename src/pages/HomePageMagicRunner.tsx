import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'

import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'

import lock from '@/assets/icons/Union.svg'
import diamond from '@/assets/icons/Group.svg'

import watch from '@/assets/icons/Frame.svg'
import { useNavigate } from 'react-router-dom'
import CountdownTimer from '@/components/countDown'

function Homepagemagicrunner() {
  const joinMissionHandler = () => {
    window.location.href = 'https://lobby.magiccraft.io/magic-runner'
  } 
  
    const playonandroidHandler = () => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.MagicCraftInc.MagicRunner'
    } 
    const playonappleHandler = () => {
      window.location.href = 'https://apps.apple.com/us/app/magicrunner-frigards-escape/id6479990522'

    } 
    const playnowHandler = () => {
      window.location.href = 'https://lobby.magiccraft.io/magic-runner'

    } 

  const navigate = useNavigate();

  const magiccrafthandleClick = () => {
    navigate('/magiccraft');
  };
  const magic8ballhandleClick = () => {
    navigate('/magic8ball');
  };

   return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="relative flex flex-wrap ">
            <div className="relative hidden h-[700px]  w-full bg-mrback bg-cover bg-center  lg:block "></div>
            <div className="relative block h-[700px]  w-full bg-mrback1 bg-cover bg-center  lg:hidden "></div>
            <div className=" flex   rounded-lg   ">
              <div className="absolute inset-0 md:-mt-40 flex  w-fit  flex-col  justify-center  text-center  lg:ml-[15em] lg:p-4 lg:text-left">
                <span className="m-4 hidden w-fit justify-center rounded-[2em] bg-custom-light bg-opacity-70  px-4 py-2 text-[#98FFF9] lg:block ">
                  MagicCraft Ecosystem Game
                </span>
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
                  <span className="text-4xl font-bold lg:p-5 lg:text-6xl">
                    MAGICRUNNER
                  </span>
                  <br />
                  <span className="text-lg font-bold  lg:p-5">
                    RISE, RUN, REDEEM
                  </span>
                </h3>
                <div className="m-2 block h-px w-max bg-gradient-to-t from-transparent via-[#556DE0] to-transparent lg:hidden" />

                <p className="p-4">
                  Haunted by tragedy, Frigard races against fate, the lone
                  survivor of
                  <br className="hidden lg:block" />
                  <span className='ml-2 md:ml-0'>Vladislav's</span> wrath and the treachery of Karas. Now, every step
                  is a<br className="hidden lg:block" />
                  desperate sprint for survival, a relentless chase where the
                  shadow of <br className="hidden lg:block" />
                  Vladislav looms, fuelling Frigard's flight for justice.
                </p>

                <div className=" m-2 hidden h-px  w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />
                <button className=" m-5 hidden rounded-lg bg-[#98FFF9] p-2 text-black lg:block lg:w-[6.125em]" onClick={playnowHandler }>
                  Play Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto -mt-5 mb-20 block md:-mt-10  md:w-[566px]   lg:hidden  ">
              <div className="rounded-[20px]    bg-[#271565]  ">
                <h4 className="  px-10 py-2 text-center font-serif text-lg md:text-[22px] ">
                  <span className="text-[#FFB649]  ">PLAY </span> MAGICRUNNER
                  NOW!
                  <br />
                </h4>
                <div className="flex items-center justify-center md:flex-wrap gap-[0.5em] p-4">
                  <span className="cursor-pointer  p-2 md:p-5">
                    <img src={pc} ></img>
                    Download
                    <br />
                    <p className=" text-lg font-bold md:text-xl">PC</p>
                  </span>

                  <div className="block h-[5em]  w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                  <span className="p-2 cursor-pointer  md:p-5">
                    <img src={AppleIcon} onClick={playonappleHandler}></img>
                    Get it on <br />
                    <p className=" text-lg font-bold md:text-xl">App Store</p>
                  </span>
                  <div className="block h-[5em]  w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                  <span className=" p-2 cursor-pointer   md:p-5">
                    <img src={steam}></img>
                    Get it on
                    <br />
                    <p className="text-xl font-bold">Steam</p>
                  </span>
                  <div className="block h-[5em]  w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                  <span className="cursor-pointer  p-2  md:p-5">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp" onClick={playonandroidHandler}></img>
                    Get it on
                    <br />
                    <p className="text-xl font-bold"> Google play</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="z-10 -mt-[13em] ml-[15.125em] hidden max-h-[14em]  max-w-[79.125em]   rounded-4xl  bg-custom-dark  bg-opacity-70  lg:block">
              <div className="flex flex-wrap p-10 ">
                <div className="leading-0  relative  px-4  font-normal   ">
                  <h4 className="font-serif text-lg md:text-[1.375em]">
                    <span className="text-white ">DOWNLOAD NEW BUILD</span>
                  </h4>
                  <div className="mt-4 inline-flex gap-[1.875em] ">
                    <span className=" font-xs cursor-pointer   font-normal not-italic leading-normal" onClick={playnowHandler}>
                      <img src={steam} className=" shrink-0 mb-2"></img>
                      <p>Get it on</p>

                      <p className="font-sm  font-bold leading-normal">Steam</p>
                    </span>

                    <div className="mt-5 block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#556DE0] to-transparent " />
                    <span className=" font-xs cursor-pointer  font-normal not-italic leading-normal">
                      <img src={AppleIcon} className="shrink-0 mb-2" onClick={playonappleHandler}></img>
                      Get it on
                      <br />
                      <p className="font-sm  font-bold leading-normal">
                        App store
                      </p>
                    </span>
                    <div className="mt-5 block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#556DE0] to-transparent " />
                    <span className=" font-xs cursor-pointer   font-normal not-italic leading-normal">
                      <img
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp"
                        className="shrink-0 mb-2"
                        onClick={playonandroidHandler}
                      ></img>
                      Get it on
                      <br />
                      <p className="font-sm  font-bold leading-normal">
                        Google Play
                      </p>
                    </span>
                  </div>
                </div>

                <div className="  block h-[10em] w-[2px] bg-gradient-to-t from-transparent via-[#556DE0] to-transparent " />
                <div className="leading-0 relative px-4  font-normal   ">
                  <h4 className="font-serif text-lg md:text-[1.375em]">
                    <span className="text-white ">STATISTICS</span>
                  </h4>

                  <div className="flex flex-col p-4">
                    <span className="  text-[#98FFF9]">201</span>

                    <span className=" text-white">Amount of Players</span>
                    <span className=" flex flex-row text-[#98FFF9]">
                      32,112
                      <img
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
                        className="mx-2 mt-1 h-4 w-4"
                      />
                    </span>

                    <span className=" text-white ">Total MCRT earned</span>
                  </div>
                </div>
                <div className="  block h-[10em] w-[2px] bg-gradient-to-t from-transparent via-[#556DE0] to-transparent " />
                <div className="ml-4 flex flex-row">
                 
                    <div className="w-[13em] select-none snap-start px-4 cursor-pointer" onClick={magiccrafthandleClick}>
                      <img
                        className="pointer-events-none select-none  "
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191090/magiccraft-card_dfthct.webp"
                        alt="MagicCraft Game"
                      />
                    </div>
                 
                  <div className="w-[13em] select-none snap-start  px-4 cursor-pointer" onClick={magic8ballhandleClick}>
                    <img
                      className="pointer-events-noneselect-none"
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717679173/CARD_10_ouvuyg.webp"
                      alt="Magic8Ball game"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative h-[700px] bg-center md:h-[900px] xl:h-[900px] lg:mt-10 lg:h-[130vh]">
            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191953/bg-1_bx94ek.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-0 top-0  flex h-full w-full  flex-col  text-center">
              <h2 className="text-balance  p-2 font-serif text-4xl text-white">
                $ MCRT REWARDS
              </h2>
              <div className="flex flex-col   items-center justify-center  lg:flex-row">
                <div className="  h-full w-full  lg:relative  lg:w-1/2 ">
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
                      className="h-full w-[40em]"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className="  lg:h-full lg:w-full">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173021/Screenshot_tr30jv.webp" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className="h-full w-6/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className="  lg:h-full lg:w-full">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173129/Home_rn9oex.webp" />
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className=" w-6/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className="  w-[336px] h-[400px]">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718606774/WhatsApp_Image_2024-06-14_at_6.41.22_PM_1_mhelzl.webp" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className="h-full w-6/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className="  lg:h-full lg:w-full">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718606774/WhatsApp_Image_2024-06-14_at_6.41.22_PM_fwmlga.webp" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ marginRight: '0 !important' }}
                      className="h-full w-6/12"
                    >
                      <div className="item-center flex flex-col items-center justify-center  self-stretch rounded-3xl text-center lg:flex-row lg:items-start lg:justify-start">
                        <div className="  lg:h-full lg:w-full">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718606774/WhatsApp_Image_2024-06-14_at_6.41.23_PM_yhaduo.webp" />
                        </div>
                      </div>
                    </SwiperSlide> */}
                  </Swiper>
                  <button className="arrow-left arrow absolute left-0 top-[25%] m-1 -translate-y-1/2 cursor-pointer lg:left-[9em] lg:top-1/2  lg:transform">
                    <img src={left} alt="MCRT Token" />
                  </button>
                  <button className="arrow-right arrow absolute right-0  top-[25%] m-1 -translate-y-1/2  cursor-pointer lg:right-[9em] lg:top-1/2  lg:transform">
                    <img src={right} alt="MCRT Token" />
                  </button>
                </div>
                <div className="my-4 h-full w-full rounded-lg bg-custom-dark bg-opacity-70 py-5 pl-[4em] lg:h-[550px]  lg:w-[550px]">
                  <div className="flex flex-wrap">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173040/runner_mowa8q.webp"
                      className="hidden px-4 lg:block"
                    ></img>
                    <span className="p-5 text-4xl font-bold">How it works</span>
                  </div>
                  <div className="m-2 block h-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:w-5/12" />

                  <div className="p-1 text-left lg:p-4 ">
                    <p className="lg:p-5 ">
                      As Frigard embarks on his harrowing journey, fleeing from {' '}
                      <br className="hidden lg:block" />
                      Vladislav, the magical essence of the MagicCraft universe
                      <br className="hidden lg:block" />
                      recognizes his valor and resilience. In this world where{' '}
                      <br className="hidden lg:block" />
                      magic and might intertwine, MagicCraft is a blessing and a{' '}
                      <br className="hidden lg:block" />
                      token of power granted by ancient guardians aligned
                      <br className="hidden lg:block" />
                      against the darkness Vladislav represents. These rewards{' '}
                      <br className="hidden lg:block" />
                      serve as crucial aids in Frigard’s journey, providing him
                      with
                      <br className="hidden lg:block" />
                      the strength, speed, and resources needed to continue his{' '}
                      <br className="hidden lg:block" />
                      quest. Each completed daily task, a challenge set by these{' '}
                      <br className="hidden lg:block" />
                      unseen protectors, earns Frigard these mystical rewards,{' '}
                      <br className="hidden lg:block" />
                      support his quest for survival and justice.
                    </p>

                    <button className="m-5 rounded-lg  border-2 border-solid border-[#98FFF9] p-2 text-[#98FFF9] "  onClick={playnowHandler }>
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* daily mission*/}
          <section className=" relative mt-60 h-full w-full md:mt-40 lg:-mt-[15em] xl:-mt-[10em]">
            <div className=" flex flex-col items-center justify-center  lg:flex-row">
              <h1 className="mt-2 p-4 font-serif text-4xl font-bold">
                DAILY MISSIONS
              </h1>
              <div className=" mx-2 mt-2  flex flex-row items-center justify-center rounded-[3.125em] bg-[#4457B8] pr-2 text-[#98FFF9]">
                <div className="flex flex-row items-center justify-center rounded-[3.125em] bg-[#98FFF9] p-2 text-black">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173184/clock_evbzyy.webp"
                    className="m-1 h-10 w-10"
                  />
                  <p className="p-2">Ends in:
                 
                  </p>
                </div>
                <p className="py-2 w-[10em]"> <CountdownTimer /></p>
              </div>
            </div>

            <div className="m-4 flex space-x-4 overflow-auto lg:items-center lg:justify-center">
              <div className=" h-[35.25em] w-[18.375em] flex-shrink-0 rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="my-4  ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em] font-serif">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-gradient-to-b from-[#B7326A] to-[rgba(144,35,107,0.43)] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Locked
                  </div>
                </div>
                <div className="  h-[9.890063em] w-[10.944563em] flex-shrink-0 opacity-[0.2] [backdrop-filter:blur(23px)]">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173103/Layer_0_copy_o5vtz1.webp"
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
                    <span className="text-custom-fade flex-shrink-0 text-opacity-30">
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
                    <span className="mb-2 flex-shrink-0 text-white">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#98FFF9]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade mb-2 flex-shrink-0 text-opacity-30">
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
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] ">
                    <button className="bg-fff9 rounded-8xs   mt-2 flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] py-[9px] pl-2 opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="relative flex-1 text-left font-serif text-lg font-bold leading-[158%] text-[#0E0E2E]">
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
                  <div className=" my-4  ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em] font-serif">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-[#4457B8] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Activated
                  </div>
                </div>
                <div className="bg-lightgray h-[9.890063em] w-[10.944563em]  flex-shrink-0 ">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173103/Layer_0_copy_o5vtz1.webp"
                    className="mx-[3.9em]"
                  />
                </div>
                <div className="mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9]">
                  <div className="h-[0.4em] w-[6.7em] rounded-lg bg-[#98FFF9] "></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex text-xl ">
                    <span className="text-custom-fade flex-shrink-0 text-opacity-30">
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
                    <span className="mb-2 flex-shrink-0 text-white">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#98FFF9]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade mb-2 flex-shrink-0 text-opacity-30">
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
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] ">
                    <button className="bg-fff9 rounded-8xs  mt-2 flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="relative flex-1 text-center font-serif text-lg font-bold leading-[158%] text-[#61687B]">
                          COLLECT REWARDS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[35.25em] w-[18.375em] rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="my-4  ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em] font-serif">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-[#54BC8A] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Ready
                  </div>
                </div>
                <div className="relative flex h-[9.890063em] w-full flex-shrink-0 items-center justify-center lg:w-full">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173158/Ellipse_410_h2fzj4.webp"
                    className="absolute inset-0 h-full w-full object-cover  lg:mt-0"
                  />
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173103/Layer_0_copy_o5vtz1.webp"
                    className="absolute mt-6 "
                  />
                </div>
                <div className="glow mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9] shadow-lg ring-2 ring-[#4866A9] ring-opacity-50">
                  <div className="h-[0.4em] w-full rounded-lg bg-[#98FFF9]"></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex text-xl ">
                    <span className="text-custom-fade flex-shrink-0 text-opacity-30">
                      Collect coins :
                    </span>
                    <span className="ml-8 text-[#3A5874]">400/400</span>
                  </div>
                  <div className="flex text-xl ">
                    <span className="text-custom-fade mt-3 flex-shrink-0 text-opacity-30">
                      Miles to run:
                    </span>
                    <span className="ml-11 text-[#3A5874]  ">
                      18,293/
                      <br />
                      20,000
                    </span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade mb-2 flex-shrink-0 text-opacity-30">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#3A5874]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade mb-2 flex-shrink-0 text-opacity-30">
                      Obstacle jumps :
                    </span>
                    <span className="ml-2 text-[#3A5874]">40/40</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade flex-shrink-0 text-opacity-30">
                      In-game playing:
                    </span>
                    <span className="ml-2 text-[#3A5874]">0,7h/4h</span>
                  </div>
                </div>

                <div className="my-8 block h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

                <div className="">
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px] ">
                    <button className="bg-fff9 rounded-8xs  mt-2 flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="relative flex-1 text-center font-serif text-lg font-bold leading-[158%] text-[#0E0E2E]">
                          COLLECT REWARDS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[35.25em] w-[18.375em] rounded-[20px] border-2 border-solid border-[#5856E0] bg-[#12142A]">
                <div className="flex flex-wrap">
                  <div className="my-4  ml-4 flex h-[2.25em] w-[10em] items-center justify-center gap-[0.125em] rounded-[3.4375em] bg-gradient-to-r from-[#6741A5] to-[#270A39] p-[0.3125em] px-[0.875em] font-serif">
                    {' '}
                    NOVICE CHEST
                  </div>
                  <div className="mx-4  my-4 flex h-[2.25em] w-[4.4375em] items-center justify-center gap-[0.125em] rounded-[0.5em] bg-[#54BC8A] p-[0.3125em] px-[0.625em] backdrop-blur-[0.71875em]">
                    Ready
                  </div>
                </div>
                <div className="relative flex h-[9.890063em] w-full flex-shrink-0 items-center justify-center lg:w-full">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173158/Ellipse_410_h2fzj4.webp"
                    className="absolute inset-0 h-full w-full object-cover  lg:mt-0"
                  />
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173103/Layer_0_copy_o5vtz1.webp"
                    className="absolute mt-6 "
                  />
                </div>
                <div className="glow mx-10 h-[0.6180625em] w-[12.9375em] rounded-lg border-2 border-solid border-[#4866A9] shadow-lg ring-2 ring-[#4866A9] ring-opacity-50">
                  <div className="h-[0.4em] w-full rounded-lg bg-[#98FFF9]"></div>
                </div>
                <div className="mx-10 my-6">
                  <div className="flex  text-xl ">
                    <span className="text-custom-fade flex-shrink-0 text-opacity-30">
                      Collect coins :
                    </span>
                    <span className="ml-8 text-[#3A5874]">400/400</span>
                  </div>
                  <div className="flex text-xl ">
                    <span className="text-custom-fade mt-3 flex-shrink-0 text-opacity-30">
                      Miles to run:
                    </span>
                    <span className="ml-11 text-[#3A5874]  ">
                      18,293/
                      <br />
                      20,000
                    </span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade mb-2 flex-shrink-0 text-opacity-30">
                      Time in the air:
                    </span>
                    <span className="ml-7 text-[#3A5874]">0s/30s</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade mb-2 flex-shrink-0 text-opacity-30">
                      Obstacle jumps :
                    </span>
                    <span className="ml-2 text-[#3A5874]">40/40</span>
                  </div>
                  <div className="flex text-xl">
                    <span className="text-custom-fade flex-shrink-0 text-opacity-30 ">
                      In-game playing:
                    </span>
                    <span className="ml-2 text-[#3A5874]">0,7h/4h</span>
                  </div>
                </div>

                <div className="my-8 block h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

                <div className="">
                  <div className="-mt-5 flex flex-row items-center justify-center gap-[12px] self-stretch rounded-xl bg-[#0E0E2E] px-[21px]  ">
                    <button className="bg-fff9 rounded-8xs  mt-2 flex flex-1 cursor-pointer flex-row items-center justify-center rounded-lg bg-[#98FFF9] px-3 py-[9px] opacity-[0.2] [backdrop-filter:blur(23px)]">
                      <div className="flex flex-1 flex-row items-center justify-center">
                        <div className="relative flex-1 text-center font-serif text-lg font-bold leading-[158%] text-[#0E0E2E]">
                          COLLECT REWARDS
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-6 flex items-center justify-center lg:m-10">
              <button className="rounded-lg bg-[#98FFF9] p-2  text-base text-[#0E0E2E] md:w-[12.625em] " onClick={joinMissionHandler}>
                {' '}
                Join a Mission
              </button>
            </div>
          </section>

          {/* daily mission*/}

          <section className=" relative m-5">
            <div className="m-10 flex items-center justify-center font-bold ">
              <h1 className="text-center font-serif text-4xl">
                {' '}
                CHEST TYPES AND <br /> UNLOCKING MECHANISMS
              </h1>
            </div>
            <div className="flex flex-col items-start  justify-center gap-5 lg:flex-row">
              <div className="mb-4 flex w-full flex-shrink-0 flex-col  items-center justify-center  rounded-[20.152px] border-[1.008px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_4.03px_50.381px_0px_rgba(10,9,23,0.60)] lg:w-[20em]  ">
                <div className="-mt-6 flex h-[5.625em] w-[5.625em] items-center justify-center rounded-[1.875em] bg-[#34125A]">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191355/novice-chest_rlk14i.webp"
                    className="h-10 w-10"
                  />
                </div>
                <h3 className="mt-4 font-serif font-bold">NOVICE CHEST</h3>

                <div className="my-2 block h-px w-full bg-gradient-to-r from-transparent via-[#7761AD] to-transparent " />
                <p className="flex flex-wrap p-2 text-center">
                Novice Chests are available for all players to open up to five times daily, encouraging repeated engagement. These chests offer the player consistent incentives and promote regular play, promoting player retention.                </p>
              </div>
              <div className="mb-4 flex  w-full flex-shrink-0 flex-col  items-center justify-center  rounded-[20.152px] border-[1.008px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_4.03px_50.381px_0px_rgba(10,9,23,0.60)] lg:w-[22em]  ">
                <div className="-mt-6 flex h-[5.625em] w-[5.625em] items-center justify-center rounded-[1.875em] bg-[#34125A]">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173103/Layer_0_copy_o5vtz1.webp"
                    className="h-14 w-14"
                  />
                </div>
                <h3 className="mt-4 font-serif font-bold">PREMIUM CHESTS</h3>

                <div className="my-2 block h-px w-full bg-gradient-to-r from-transparent via-[#7761AD] to-transparent " />
                <p className="flex flex-wrap p-2 text-center">
                 
                 

                Premium Chests include daily rewards with Masterful, Mythic, Eternal, and Legendary tiers, offering increasingly valuable items. This system incentivizes regular play, enhancing player engagement and satisfaction.                </p>
              </div>
              <div className="mb-4 flex w-full flex-shrink-0 flex-col  items-center justify-center  rounded-[20.152px] border-[1.008px] border-[#3F3F7A] bg-[#11113A] shadow-[0px_4.03px_50.381px_0px_rgba(10,9,23,0.60)] lg:w-[20em]  ">
                <div className="-mt-6 flex h-[5.625em] w-[5.625em] items-center justify-center rounded-[1.875em] bg-[#34125A]">
                  <img src={watch} className="h-12 w-12" />
                </div>
                <h3 className="mt-4 font-serif font-bold">EXPIRATION POLICY</h3>

                <div className="my-2 block h-px w-full bg-gradient-to-r from-transparent via-[#7761AD] to-transparent " />
                <p className="flex flex-wrap px-4 pb-2 text-center">
                  To maintain a dynamic and engaging
                  
                  gameplay experience, all chests 
                  earned must be unlocked on the same
                  
                  day of acquisition; otherwise, they 
                  expire at day's end, adding a strategic 
                  element to resource management.
                </p>
              </div>
            </div>
            <div className="m-6 flex items-center justify-center">
              <button 
              className="rounded-lg bg-[#98FFF9] p-2  text-[#0E0E2E] md:w-[12.625em] md:text-base" 
              onClick={joinMissionHandler}>
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
export default Homepagemagicrunner
