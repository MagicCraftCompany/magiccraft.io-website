import { useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'
import down from '@/assets/icons/li_chevron-down.svg'

import { roadmapData } from '../data/roadmapData'
import RoadmapCard from '../components/Cards/RoadmapCard'
import Video from '@/assets/images/video.mp4'

import { otherpartners } from '@/data/otherpartners'
import partners from '@/data/partners'
import { ourteam } from '@/components/Team/ourTeam'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Tabs, Tab } from '@/components/tabs'
import frame1 from '@/assets/icons/Frame (1).svg'
import frame2 from '@/assets/icons/Frame (2).svg'
import frame3 from '@/assets/icons/Frame (3).svg'
import frame4 from '@/assets/icons/Frame (4).svg'

function Homepagemcrt() {
  const [visibleCount, setVisibleCount] = useState(8)

  const registerHandler = () => {
    window.location.href = 'https://lobby.magiccraft.io/register'
  }

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  const kolTeam = ourteam.filter((member) => member.category === 'KOL')
  const teamMembers = ourteam.filter((member) => member.category === 'Team')
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          {/*header*/}
          <section className="relative h-[700px]  bg-cover bg-center">
            <video
              className="absolute  inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={Video} type="video/mp4" />
            </video>
            <div className="video-bg-gradient absolute inset-0  h-full w-full"></div>
            <div className="relative z-10 mx-auto  max-w-screen-xl">
              <div className="grid h-full w-full grid-cols-1 place-items-center gap-2  py-28 md:gap-4">
                <div className="w-full  max-w-[20%] md:w-full md:max-w-28">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
                    alt="MCRT Token"
                  />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <div className=" flex justify-center ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173072/MagicCraft_1_txz7ga.webp"></img>
                  </div>
                  <span className="text-3xl">WHERE PLAY MEANS PROSPERITY</span>
                </h1>
              </div>
              <div className="mx-auto  mt-20  md:mb-20  md:mt-0 md:w-[34.75em]  ">
                <div className="rounded-[1.25em]   bg-gradient-to-b from-[#B591F2]   to-transparent p-px ">
                  <div className="relative  flex max-w-full flex-col items-start   justify-center overflow-hidden rounded-[1.25em]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%   md:px-11 md:py-3">
                    <h4 className="  mx-[3em] py-2  text-center font-serif text-lg md:text-[1.375em] ">
                      <span className="text-[#FFB649]  ">PLAY </span> MAGICCRAFT
                      NOW!
                      <br />
                    </h4>
                    <div className="flex flex-wrap items-center">
                      <span className=" p-2 md:p-5">
                        <img src={pc}></img>
                        Download
                        <br />
                        <p className=" text-lg font-bold md:text-xl">PC</p>
                      </span>

                      <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                      <span className="p-2  md:p-5">
                        <img src={AppleIcon}></img>
                        Get it on <br />
                        <p className=" text-lg font-bold md:text-xl">
                          App Store
                        </p>
                      </span>
                      <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                      <span className=" p-2  md:p-5">
                        <img src={steam}></img>
                        Get it on
                        <br />
                        <p className="text-xl font-bold">Steam</p>
                      </span>
                      <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                      <span className=" p-2  md:p-5">
                        <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp"></img>
                        Get it on
                        <br />
                        <p className="text-xl font-bold"> Google play</p>
                      </span>
                    </div>

                    <div
                      style={{ right: '25px' }}
                      className="absolute -bottom-10 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]"
                    >
                      !
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*register now */}

          <section className="relative flex flex-col items-center gap-4 bg-[#020418] bg-center lg:h-[500px] lg:flex-wrap lg:p-4  ">
            <div className="flex rounded-lg lg:w-6/12 lg:pl-52  ">
              <div className=" flex flex-col items-center justify-center p-4 text-center md:p-4 md:text-left lg:mt-10 ">
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text  font-serif text-2xl text-transparent drop-shadow-xl ">
                  <span className="text-4xl font-bold ">
                    A NEW ERA IN GAMING
                  </span>
                  <br />
                  <span className="text-2xl font-bold">WITH MAGICCRAFT</span>
                </h3>
                <p className="my-4 hidden md:block">
                  {' '}
                  MagicCraft is a Play-to-Earn blockchain game featuring
                  fast-paced <br />
                  multiplayer battles. Every day, thousands of players earn our
                  utility
                  <br />
                  token, MCRT, by showcasing their skills. Join them to step
                  into a <br />
                  new era of gaming where your prowess can pave the path to{' '}
                  <br />
                  prosperity.
                </p>
                <p className="block p-4 md:hidden">
                  {' '}
                  MagicCraft is a Play-to-Earn blockchain
                  <br />
                  game featuring fast-paced multiplayer <br />
                  battles. Every day, thousands of players <br />
                  earn our utility token, MCRT, by
                  <br />
                  showcasing their skills. Join them to step into
                  <br />
                  a new era of gaming where your prowess
                  <br />
                  can pave the path to prosperity.
                </p>

                <div className="m-4  h-px w-full bg-gradient-to-r  from-transparent via-[#556DE0] to-transparent " />
                <div className="flex w-full justify-center lg:justify-start">
                  <button
                    onClick={registerHandler}
                    className=" flex flex-wrap rounded-lg border-2 border-[#98FFF9] px-4 py-2 text-[#98FFF9] md:mx-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717172991/Vector_Stroke_orbimh.webp"
                      alt="Button Image"
                      className="mr-2 mt-1 h-4 w-4"
                    />
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full rounded-lg md:mb-10  lg:-ml-[10em]   lg:w-4/12">
              <Swiper
                id="1"
                className="w-full p-10 "
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
                autoHeight={true}
                pagination={{ clickable: true, dynamicBullets: true }}
              >
                <SwiperSlide
                  style={{ marginRight: '0 !important' }}
                  className="h-full w-10/12"
                >
                  <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid">
                    <div className="rounded-3xl bg-[#151149]    bg-opacity-70 bg-gradient-to-r">
                      <div className=" rounded-3xl  bg-gradient-to-b from-[#151149] to-[#190E29]  to-80% p-4">
                        <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                          <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Testimonials`}</div>
                        </button>
                        <div className=" relative z-[3] h-[21px] w-5 " />
                        <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                          <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] ">
                            I'm holding my coins and will keep holding them for
                            a long time, so I have no fancy items to show here
                            (hopefully I'll show a new pc soon since mine is
                            almost 7 years old 😂) but the amount I earn by
                            playing the game I can say is a lot more than my
                            monthly salary here in Cuba. I'm glad I found this
                            game and I'm glad @Sinerv0 helped me with and nft,
                            always grateful. The game is a lot of fun too when
                            played with good friends 👏😄
                          </div>
                        </div>
                        <div className="flex flex-row gap-10">
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame1} className="mr-2" />
                            83
                          </div>
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame2} className="mr-2" />
                            61
                          </div>
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame3} className="mr-2" />
                            2.0k
                          </div>
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame4} className="mr-2" />
                            308.6k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{ marginRight: '0 !important' }}
                  className="h-full w-10/12"
                >
                  <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid">
                    <div className="rounded-3xl bg-[#151149]    bg-opacity-70 bg-gradient-to-r">
                      <div className=" rounded-3xl  bg-gradient-to-b from-[#151149] to-[#190E29]  to-80% p-4">
                        <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                          <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Testimonials`}</div>
                        </button>
                        <div className=" relative z-[3] h-[21px] w-5 " />
                        <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                          <div className="relative inline-block max-w-full flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] ">
                            I'm holding my coins and will keep holding them for
                            a long time, so I have no fancy items to show here
                            (hopefully I'll show a new pc soon since mine is
                            almost 7 years old 😂) but the amount I earn by
                            playing the game I can say is a lot more than my
                            monthly salary here in Cuba. I'm glad I found this
                            game and I'm glad @Sinerv0 helped me with and nft,
                            always grateful. The game is a lot of fun too when
                            played with good friends 👏😄
                          </div>
                        </div>
                        <div className="flex flex-row gap-10">
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame1} className="mr-2" />
                            83
                          </div>
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame2} className="mr-2" />
                            61
                          </div>
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame3} className="mr-2" />
                            2.0k
                          </div>
                          <div className=" m-2 flex flex-wrap">
                            <img src={frame4} className="mr-2" />
                            308.6k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <button className="arrow-left arrow absolute top-[50%]  cursor-pointer lg:-left-4  ">
                <img src={left} alt="MCRT Token" />
              </button>
              <button className="arrow-right arrow absolute right-0 top-[50%] cursor-pointer lg:-right-4 ">
                <img src={right} alt="MCRT Token" />
              </button>
            </div>
          </section>

          {/*unlimited ways to earn */}
          <section className=" relative hidden h-auto  bg-center md:block lg:h-full">
            <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191953/bg-1_bx94ek.webp" />
            <div className="absolute left-0 right-0 top-0 flex h-full flex-col text-center  lg:m-4">
              <h2 className="mt-4 text-balance font-serif text-lg text-white lg:text-4xl">
                UNLIMITED WAYS TO EARN MCRT
              </h2>
              <p className="text-xs text-white lg:mt-4   lg:text-xl">
                Explore Unlimited Ways to Earn MCRT through our dynamic
                <br className="block lg:hidden" />
                portfolio of games within the MagicCraft
                <br className="hidden lg:block" /> Ecosystem. Each{' '}
                <br className="block lg:hidden" /> game offers unique
                opportunities to earn more MCRT and{' '}
                <br className="block lg:hidden" />
                enhance your overall <br className="hidden lg:block" /> gaming
                experience. Dive into <br className="block lg:hidden" />{' '}
                MagicRunner and Magic8Ball today and start earning!
              </p>
              <Swiper
                id="swiper-section-two"
                className="w-5/12 pt-4 md:mt-0 lg:mt-6"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                  prevEl: '.arrow-left-first',
                  nextEl: '.arrow-right-first',
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
                      <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717353441/crouserl_first_1_pehlcf.webp" />
                    </div>
                    <div className="crousel-first relative flex h-full flex-col items-start  lg:-ml-10 lg:w-[40em]  ">
                      <div className="backdrop-blur-custom   ml-4 mt-2 flex items-center justify-center rounded-[68.117px] bg-[rgba(10,9,23,0.60)] px-2  py-1 text-[#98FFF9] md:text-xs lg:px-4 lg:py-2 lg:text-lg">
                        Patch update
                      </div>
                      <label className=" text-left">
                        <span className="  ml-4 px-3  text-sm font-bold lg:text-2xl">
                          MagicRunner
                        </span>
                        <p className="ml-5 p-2  text-xs lg:text-lg">
                          Web3 games utilize the blockchain to
                          <br /> provide players with a unique gaming
                          <br /> experience that is markedly different <br />
                          from traditional games.
                        </p>
                      </label>
                      <button className=" mb-2 mt-1 inline-flex flex-wrap rounded-lg border-2  border-[#98FFF9]  p-0.5 text-[#98FFF9] md:ml-5 md:px-1 md:text-xs lg:m-5 lg:w-[260px]  lg:py-0.5 lg:pl-0.5 lg:text-lg">
                        <img
                          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717172991/Vector_Stroke_orbimh.webp"
                          alt="Button Image"
                          className="p-1 md:mr-1 md:h-4 md:w-4 lg:mr-2 lg:h-6 lg:w-6 "
                        />
                        Download MagicRunner Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <button className="arrow-left-first arrow absolute top-[50%] cursor-pointer lg:left-[20em] ">
                <img src={left} alt="MCRT Token" />
              </button>
              <button className="arrow-right-first arrow absolute right-0 top-[50%] cursor-pointer lg:right-[20em]">
                <img src={right} alt="MCRT Token" />
              </button>
            </div>
          </section>

          {/*JOIN THE ACTION */}
          <section className=" flex justify-center bg-center p-4 lg:-mt-[5em] lg:h-full ">
            <div className="relative max-w-[80em]  rounded-4xl bg-[#0A0424] bg-opacity-70 ">
              <div className="space-y-5   px-8 pb-10 pt-5 md:px-10">
                <h5 className="mx-auto max-w-xl text-balance text-center font-serif text-base md:text-2xl">
                  JOIN THE ACTION ,EARN MCRT
                </h5>
                <p className="text-center">
                  Jump into MagicCraft matches and compete to win MCRT.Showcase
                  your skills,claim your rewards,
                  <br className="hidden lg:block" /> and rise through the
                  ranks.Start your journey to gaming glory now!
                </p>
                <div className="grid grid-cols-1 gap-[30px]  md:grid-cols-2 lg:grid-cols-3  lg:place-items-stretch ">
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px lg:h-[170px] lg:w-[400px]">
                    <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  ">
                      <div className="flex flex-wrap ">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173182/contact_ylmg83.webp"
                            style={{ width: '150px', height: '150px' }}
                            className="mt-1 p-4"
                            alt="Directory"
                          />
                        </div>

                        <div className="my-4 p-4">
                          <h4 className="font-serif  text-lg md:text-[22px]">
                            <span className="text-[#8EFF49]">REGISTER</span>
                            <br /> AN $MCRT <br /> ACCOUNT
                          </h4>
                        </div>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px lg:h-[170px] lg:w-[400px]">
                    <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% ">
                      <h4 className="pl-2  pt-2  font-serif text-lg md:text-[22px]">
                        <span className="py-4 text-[#FFB649] lg:pl-6">
                          DOWNLOAD
                        </span>{' '}
                        THE GAME
                      </h4>
                      <div className="flex flex-wrap items-center lg:mb-4 lg:pl-10">
                        <span className="px-3 lg:py-4 ">
                          <img src={steam} className=" pb-4"></img>
                          Get it on
                          <br />
                          <p className="text-sm font-bold lg:text-xl">Steam</p>
                        </span>

                        <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />
                        <span className="px-3 lg:py-4">
                          <img src={AppleIcon} className=" pb-4"></img>
                          Get it on
                          <br />
                          <p className="text-sm font-bold lg:text-xl">
                            App store
                          </p>
                        </span>
                        <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />
                        <span className=" px-3 py-4">
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp"
                            className=" pb-4"
                          ></img>
                          Get it on
                          <br />
                          <p className="text-sm font-bold lg:text-xl">
                            Google Play
                          </p>
                        </span>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px lg:h-[170px] lg:w-[400px]">
                    <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r  from-[#57186D] to-[#2A0D4E] to-90%  ">
                      <div className="flex flex-wrap">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173149/Group_7072_cgsuti.webp"
                            className="mt-4 h-[120px] w-[120px] p-4"
                            alt="Directory"
                          />
                        </div>
                        <div className="my-4 p-4">
                          <h4 className="font-serif text-lg md:text-[22px]">
                            <span className="text-[#FF49ED]">JUMP</span> INTO
                            <br />
                            A WEB3 <br />
                            LOBBY
                          </h4>
                        </div>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*roadmap */}

          <section className="relative">
            <div className="absolute -top-40 left-0 right-0 -z-10 mx-auto aspect-square max-h-[700px] w-full max-w-[700px] rounded-full bg-[#1E025B] opacity-30 blur-[170px]" />

            <div className="space-y-20">
              <div className="space-y-8">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  Roadmap
                </h2>
              </div>
              <div className="flex items-center justify-center ">
                <Tabs type="team">
                  <Tab label="2022" className="w-full max-w-[80vw]  ">
                    <div className="grid max-w-[100vw] snap-x snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-scroll  px-4 lg:max-w-screen-xl">
                      {roadmapData.map((data) => (
                        <RoadmapCard data={data} key={data.quarter} />
                      ))}
                    </div>
                  </Tab>
                  <Tab label="2023" className="w-full max-w-[80vw]">
                    <div className=" grid max-w-[100vw] snap-x snap-mandatory auto-cols-auto grid-flow-col  gap-8 overflow-x-scroll  px-4 lg:max-w-screen-xl">
                      {roadmapData.map((data) => (
                        <RoadmapCard data={data} key={data.quarter} />
                      ))}
                    </div>
                  </Tab>
                  <Tab label="2024" className="w-full max-w-[80vw]">
                    <div className=" grid max-w-[100vw] snap-x  snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-scroll  px-4 lg:max-w-screen-xl">
                      {roadmapData.map((data) => (
                        <RoadmapCard data={data} key={data.quarter} />
                      ))}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </section>

          {/*roadmap */}

          {/*connect */}
          <section className="relative mx-auto my-10 flex w-11/12 max-w-screen-xl flex-wrap items-center justify-center space-y-10 md:space-y-20 lg:space-y-0 ">
            <div className=" relative rounded-2xl border-[2px] border-solid bg-opacity-70 bg-gradient-to-r from-[#173B52] to-[#557e91] to-80% p-4 lg:h-[280px] lg:w-5/12 ">
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173208/blahbla_wvvyzg.webp"
                className="absolute -top-10 right-0     block h-[400px] rounded-lg object-cover  md:hidden "
              />

              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173208/character_imeoab.webp"
                alt="character"
                className="  absolute  inset-0 -top-20  left-[200px] hidden rounded-lg  object-cover p-10 md:block  md:w-7/12 lg:w-[350px]  "
              />
              <div className=" p-4 text-left ">
                <h3 className=" mt-40 bg-gradient-to-b from-white to-white/75  bg-clip-text font-serif text-4xl text-transparent drop-shadow-xl md:mt-10 md:text-5xl  lg:mt-0 lg:text-3xl ">
                  <p>CONNECT,</p>
                  <p>COLLABORATE,</p>
                  <p>CONQUER</p>
                </h3>
                <div className="m-2 block  h-px w-5/12 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />
                <p className="p-2 text-[#98FFF9] md:text-2xl">join us!</p>
                <p className="block md:mt-40  lg:hidden ">
                  Step into a world where gamers thrive together! Join our
                  Discord and Telegram channels to connect with players
                  worldwide, share strategies, and receive exclusive updates and
                  support. Be part of a community that plays, earns, and grows
                  together.
                </p>
                <div className=" block flex-row flex-wrap items-center lg:hidden ">
                  <div className="flex flex-wrap  ">
                    <img src={pc} className="m-4"></img>
                    <span className="mt-4 text-2xl ">
                      Join MagicCraft's
                      <br />
                      <p className="text-2xl font-bold"> Discord</p>
                    </span>
                  </div>
                  <div className="hidden h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent md:block " />
                  <div className="flex flex-wrap ">
                    <img src={AppleIcon} className=" m-4"></img>
                    <span className="mt-4 text-2xl ">
                      Join MagicCraft's
                      <br />
                      <p className="text-2xl font-bold"> Telegram</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" hidden w-5/12  rounded-2xl bg-[#08061C] bg-opacity-70 px-10 pt-10  lg:block">
              <p>
                Step into a world where gamers thrive together! Join our Discord
                and Telegram channels to connect with players worldwide, share
                strategies, and receive exclusive updates and support. Be part
                of a community that plays, earns, and grows together.
              </p>
              <div className="flex flex-wrap items-center">
                <img src={pc}></img>
                <span className=" p-4">
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Discord</p>
                </span>

                <div className="mx-4 block h-[4em] w-[2px] bg-gradient-to-t from-transparent via-[#2F3A80] to-transparent " />
                <img src={AppleIcon} className=" pl-4"></img>
                <span className=" p-4">
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Telegram</p>
                </span>
              </div>
            </div>
          </section>

          {/*our team */}
          <div className="  h-auto  bg-[#020418] p-10">
            <section className="relative mx-auto  max-w-screen-xl space-y-10 p-4 md:space-y-20">
              <h3 className="-mb-10 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text p-5 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                Our team
              </h3>
              <div className="flex items-center justify-center">
                <Tabs type="team">
                  <Tab label="ALL" className="w-[80vw]">
                    <div className="w-[80vw] space-y-4 lg:w-[60vw]">
                      <div className="my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {ourteam.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="mt-4  px-2 md:w-full"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex ">
                                  {item.socialicons.map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 bg-opacity-70 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      {visibleCount < ourteam.length && (
                        <div className="mt-4 flex  justify-center text-center">
                          <button
                            onClick={loadMore}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur  "
                          >
                            <img src={down} className="m-1" /> Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>
                  <Tab label="Advisors and KOL's" className="w-[80vw]">
                    <div className="w-[80vw] space-y-4 lg:w-[60vw]">
                      <div className="my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {kolTeam.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="mt-4 px-2 md:w-full"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex">
                                  {item.socialicons.map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      {visibleCount < kolTeam.length && (
                        <div className="mt-4 flex  justify-center text-center">
                          <button
                            onClick={loadMore}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur  "
                          >
                            <img src={down} className="m-1" /> Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>
                  <Tab label="Team" className="w-[80vw]">
                    <div className="w-[80vw] space-y-4 lg:w-[60vw]">
                      <div className="my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {teamMembers.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="mt-4 px-2 md:w-full"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex">
                                  {item.socialicons.map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      {visibleCount < teamMembers.length && (
                        <div className="mt-4 flex  justify-center text-center">
                          <button
                            onClick={loadMore}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur  "
                          >
                            <img src={down} className="m-1" /> Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </section>
          </div>

          {/*our team ended */}

          <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20">
            <div className="space-y-8">
              <h3 className="mt-8 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text pt-4 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                $MCRT lISTED ON
              </h3>
              <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
                {partners.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="grid h-20 place-items-center bg-[#161E4A]   md:h-36"
                    >
                      <img className="px-2 " src={item.icon} alt={item.name} />
                    </div>
                  )
                })}
              </div>

              <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
            </div>

            <div className="space-y-8">
              <h3 className="m-4  text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl ">
                OUR PARTNERS
              </h3>
              <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
                {otherpartners.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="grid h-20 place-items-center bg-[#000000]  md:h-36"
                    >
                      <img className="px-2 " src={item.icon} alt={item.name} />
                      <div className="flex flex-row gap-[4em]   justify-between ">
                        <div className="">
                          <div className="text-xs font-bold leading-tight text-[#fff]   ">
                            {item.name}
                          </div>
                          {item.link && (
                            <div className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-[8.583px] font-bold leading-normal text-transparent underline">
                              {item.link}
                            </div>
                          )}
                        </div>
                        {item.type && (
                          <div className="text-[#7BCEB0]  ">{item.type}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Homepagemcrt
