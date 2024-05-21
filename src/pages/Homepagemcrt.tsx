import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import mcrtIcon from '@/assets/images/mcrt-icon.webp'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import buttonIcon from '@/assets/images/Vector (Stroke).png'
import crousel_first from '@/assets/images/crouserl_first.png'
import backgroundimage from '@/assets/images/bg-1.png'
import 'swiper/css'
import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'
import directory from '@/assets/images/contact.png'
import googleicon from '@/assets/images/logo (1).png'
import vs from '@/assets/images/Group 7072.png'
import ch from '@/assets/images/blahbla.png'

import { roadmapData } from '../data/roadmapData'
import RoadmapCard from '../components/Cards/RoadmapCard'

import Character from '@/assets/images/character.png'

import { otherpartners } from '@/data/otherpartners'
import partners from '@/data/partners'
import { ourteam } from '@/components/Team/ourTeam'
import magiccraft from '@/assets/images/MagicCraft (1).png'
import { Swiper, SwiperSlide } from 'swiper/react'

function Homepagemcrt() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          {/*header*/}
          <section className="relative h-[700px] bg-video bg-cover bg-center">
            <div className="video-bg-gradient absolute inset-0  h-full w-full"></div>
            <div className="relative z-10 mx-auto  max-w-screen-xl">
              <div className="grid h-full w-full grid-cols-1 place-items-center gap-2  py-28 md:gap-4">
                <div className="w-full  max-w-[20%] md:max-w-28 md:w-full">
                  <img src={mcrtIcon} alt="MCRT Token" />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <div className=" flex justify-center ">
                    <img src={magiccraft}></img>
                  </div>
                  <span className="text-3xl">WHERE PLAY MEANS PROSPERITY</span>
                </h1>
              </div>
              <div className="mx-auto  mb-20   md:w-[566px]  ">
                <div className="rounded-[20px]   bg-gradient-to-b from-[#B591F2]  to-transparent ">
                  <div className="relative  flex max-w-[409px] flex-col items-start  justify-center overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  md:max-w-full md:px-8 md:py-3">
                    <h4 className="  px-10 py-2 text-center font-serif text-lg md:text-[22px] ">
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

                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                      <span className="p-2  md:p-5">
                        <img src={AppleIcon}></img>
                        Get it on <br />
                        <p className=" text-lg font-bold md:text-xl">
                          App Store
                        </p>
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

          <section className="relative flex flex-col items-center gap-4 bg-[#020418] bg-center lg:h-[500px] lg:flex-wrap  ">
            <div className="ml-10 flex rounded-lg lg:w-6/12 lg:pl-52  ">
              <div className=" flex flex-col items-center justify-center p-4 text-center md:p-4 md:text-left ">
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text  font-serif text-2xl text-transparent drop-shadow-xl ">
                  <span className="text-4xl font-bold ">
                    A NEW ERA IN GAMING
                  </span>
                  <br />
                  <span className="text-2xl font-bold">WITH MAGICCRAFT</span>
                </h3>
                <p className="hidden md:block">
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

                <div className="m-2  hidden h-px w-6/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent md:block " />
                <div className="m-4 block  h-px w-full bg-gradient-to-r  from-transparent via-[#556DE0] to-transparent md:hidden " />
                <div className="flex w-full justify-center lg:justify-start">
                  <button className=" flex flex-wrap rounded-lg border-2 border-[#98FFF9] p-2 text-[#98FFF9] md:mx-0">
                    <img
                      src={buttonIcon}
                      alt="Button Image"
                      className="mr-2 h-6 w-6"
                    />
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div className="relative md:mb-10 w-full  md:w-[537.735px] rounded-lg  lg:w-4/12">
              <Swiper
                className="w-full p-10"
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
                  <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl">
                    <div className="testimonials-first rounded-3xl">
                      <div className="testimonials-second p-4">
                        <button className="border-ffffff z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                          <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Testimonials`}</div>
                        </button>
                        <div className="bg-gainsboro relative z-[3] h-[21px] w-5" />
                        <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)]">
                          <div className="relative inline-block max-w-full flex-1 !bg-clip-text font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">
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
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{ marginRight: '0 !important' }}
                  className="h-full w-10/12"
                >
                  <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl">
                    <div className="testimonials-first rounded-3xl">
                      <div className="testimonials-second p-4">
                        <button className="border-ffffff z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                          <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Testimonials`}</div>
                        </button>
                        <div className="bg-gainsboro relative z-[3] h-[21px] w-5" />
                        <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)]">
                          <div className="relative inline-block max-w-full flex-1 !bg-clip-text font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">
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
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <button className="arrow-left arrow absolute top-[50%] cursor-pointer">
                <img src={left} alt="MCRT Token" />
              </button>
              <button className="arrow-right arrow absolute right-0 top-[50%] cursor-pointer">
                <img src={right} alt="MCRT Token" />
              </button>
            </div>
          </section>

          {/*unlimited ways to earn */}
          <section className=" hidden md:block relative h-auto lg:h-full w-full bg-center">
            <img src={backgroundimage} 
            />
            <div className="absolute left-0 right-0 top-0 m-4 flex h-full flex-col  text-center">
              <h2 className="text-balance font-serif text-lg lg:text-4xl text-white">
                UNLIMITED WAYS TO EARN MCRT
              </h2>
              <p className="lg:mt-4 text-xs lg:text-xl   text-white">
                Explore Unlimited Ways to Earn MCRT through our dynamic<br className='block lg:hidden'/>
                portfolio of games within the MagicCraft
                <br  className='hidden lg:block'/> Ecosystem. Each <br className='block lg:hidden'/> game offers unique opportunities to earn
                more MCRT and <br className='block lg:hidden'/>enhance your overall <br className='hidden lg:block'/> gaming experience.
                Dive into <br className='block lg:hidden'/> MagicRunner and Magic8Ball today and start earning!
              </p>
              <Swiper
                className="w-5/12 pt-4"
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
                  className="h-full w-5/12"
                >
                  <div className="flex flex-col justify-center items-center text-center  lg:flex-row lg:items-start item-center lg:justify-start self-stretch rounded-3xl">
                    <div className=" lg:w-full lg:h-full md:h-[120px] md:w-[150px]">
                      <img src={crousel_first}   />
                    </div>
                    <div className="crousel-first relative lg:-ml-[20px] flex w-full h-full flex-col items-start ">
                      <div className="backdrop-blur-custom   flex items-center justify-center rounded-[68.117px] bg-[rgba(10,9,23,0.60)] md:text-sm px-2 py-1  lg:px-4 lg:py-2 mt-2 ml-4 text-[#98FFF9]">
                        Patch update
                      </div>
                      <label className=" text-left">
                        <span className="  text-sm  px-3  ml-4 lg:text-2xl font-bold">
                          MagicRunner
                        </span>
                        <p className="ml-6 p-1 text-xs lg:text-lg">
                          Web3 games utilize the blockchain to provide players
                          with a unique gaming experience that is markedly
                          different from traditional games.
                        </p>
                      </label>
                      <button className="  flex flex-wrap lg:w-[270px] rounded-lg border-2 border-[#98FFF9]  text-[#98FFF9] ml-6 mb-2 lg:px-0.5 lg:py-0.5 md:px-1">
                        <img
                          src={buttonIcon}
                          alt="Button Image"
                          className="mr-2 h-6 w-6 p-1"
                        />
                        Download MagicRunner Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{ marginRight: '0 !important' }}
                  className="h-full w-6/12"
                >
                  <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl">
                    <div className="testimonials-first rounded-3xl">
                      <div className="testimonials-second p-4">
                        <button className="border-ffffff z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                          <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Testimonials`}</div>
                        </button>
                        <div className="bg-gainsboro relative z-[3] h-[21px] w-5" />
                        <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)]">
                          <div className="relative inline-block max-w-full flex-1 !bg-clip-text font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">
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
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <button className="arrow-left arrow absolute top-[50%] cursor-pointer">
                <img src={left} alt="MCRT Token" />
              </button>
              <button className="arrow-right arrow absolute right-0 top-[50%] cursor-pointer">
                <img src={right} alt="MCRT Token" />
              </button>
            </div>
          </section>

          {/*JOIN THE ACTION */}
          <section className=" bg-center p-4 lg:h-full ">
            <div className="relative w-full rounded-4xl bg-[#0C0218]  ">
              <div className="space-y-5 px-8 pb-10 pt-5 md:px-10">
                <h5 className="mx-auto max-w-xl text-balance text-center font-serif text-base md:text-2xl">
                  JOIN THE ACTION ,EARN MCRT
                </h5>
                <p className="text-center">
                  Jump into MagicCraft matches and compete to win MCRT.Showcase
                  your skills,claim your rewards,
                  <br className='hidden lg:block' /> and rise through the ranks.Start your journey to gaming
                  glory now!
                </p>
                <div className="grid grid-cols-1 lg:place-items-stretch  gap-[30px] md:grid-cols-2  lg:grid-cols-3 ">
                <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px lg:w-[400px] lg:h-[170px]">
                      <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  ">

                      <div className="flex flex-wrap ">
                        <div>
                          <img
                            src={directory}
                            style={{ width: '150px', height: '150px' }}
                            className="p-4"
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
                      <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px lg:w-[400px] lg:h-[170px]">
                      <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% ">

                      <h4 className="pt-2  pl-2  font-serif text-lg md:text-[22px]">
                        <span className="py-4 lg:pl-6 text-[#FFB649]">DOWNLOAD</span>{' '}
                        THE GAME
                      </h4>
                      <div className="lg:mb-4 lg:pl-10 flex flex-wrap items-center">
                        <span className="px-3 lg:py-4">
                          <img src={steam} className=" pb-4"></img>
                          Get it on
                          <br />
                          <p className="text-xl font-bold">Steam</p>
                        </span>

                        <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                        <span className="px-3 lg:py-4">
                          <img src={AppleIcon} className=" pb-4"></img>
                          Get it on
                          <br />
                          <p className="text-xl font-bold">App store</p>
                        </span>
                        <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                        <span className=" px-3 py-4">
                          <img src={googleicon} className=" pb-4"></img>
                          Get it on
                          <br />
                          <p className="text-xl font-bold">Google Play</p>
                        </span>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px lg:w-[400px] lg:h-[170px]">
                      <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  ">

                      <div className="flex flex-wrap">
                        <div>
                          <img
                            src={vs}
                            style={{ width: '150px', height: '150px' }}
                            className="p-4"
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
            <div className="absolute -top-40 left-0 right-0 -z-10 mx-auto aspect-square max-h-[700px] w-full max-w-[700px]  rounded-full bg-[#1E025B] opacity-30 blur-[170px]" />

            <div className="space-y-20">
              <div className="space-y-8">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  Roadmap
                </h2>
                <div className="mx-auto w-fit rounded-full bg-[#4457B84D] px-5 py-3 text-lg text-[#98FFF9] backdrop-blur">
                  2024
                </div>
              </div>

              <div className="mx-auto grid snap-x snap-mandatory scroll-p-4 auto-cols-auto grid-flow-col gap-8 overflow-x-auto overscroll-x-contain px-4 lg:max-w-screen-xl">
                {roadmapData.map((data) => (
                  <RoadmapCard data={data} key={data.quarter} />
                ))}
              </div>
            </div>
          </section>
          {/*roadmap */}

          {/*connect */}
          <section className="relative mx-auto flex w-11/12 max-w-screen-xl flex-wrap items-center space-y-10 md:space-y-20  ">
            <img
              src={Character}
              alt="character"
              className=" hidden md:block lg:h-3/12 absolute  inset-0 z-10 md:ml-96  rounded-lg object-cover p-10 lg:w-3/12 md:w-7/12 "
            />
             <img 
             src={ch}
             className='block md:hidden absolute  h-[500px]   rounded-lg object-cover -top-20 left-[90px] p-6 mt-10 ml-4 '/>

            <div className="rounded-lg bg-[#98FFF9] bg-opacity-50 p-4 lg:w-7/12 ">
              <div className=" p-4 text-left ">
                <h3 className=" bg-gradient-to-b from-white to-white/75 bg-clip-text  text-4xl font-serif lg:text-3xl md:text-5xl text-transparent drop-shadow-xl mt-40  md:mt-10 lg:mt-0 ">
                  <p>CONNECT,</p>
                  <p >COLLABORATE,</p>
                  <p>CONQUER</p>
                </h3>
                <div className="m-2 block  h-px w-5/12 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />
                <p className="p-2 text-[#98FFF9] md:text-2xl">join us!</p>
                <p className='block lg:hidden md:mt-40 '>
                Step into a world where gamers thrive together! Join our Discord
                and Telegram channels to connect with players worldwide, share
                strategies, and receive exclusive updates and support. Be part
                of a community that plays, earns, and grows together.
              </p>
              <div className=" block lg:hidden flex-wrap items-center ">
              <div className='flex flex-wrap  '>
              <img src={pc} className='m-4'></img>
                <span  className='text-2xl mt-4 '>
               
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Discord</p>
                </span>
                </div>
                <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                <div className='flex flex-wrap '>
                <img src={AppleIcon} className=" m-4"></img>
                <span >
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Telegram</p>
                </span>
                </div>
              </div>
              </div>
            </div>

            <div className=" hidden lg:block w-5/12 rounded-lg bg-black p-4">
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

                <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
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
          <div className=" m-10 h-auto bg-[#020418] p-10">
            <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 p-4 md:space-y-20">
              <h3 className="mb-10 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text p-5 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                our team
              </h3>
              <div
                className="mx-auto mb-10 w-fit rounded-full bg-[#4457B84D] px-5 py-3  text-lg text-[#98FFF9] backdrop-blur"
                style={{ marginTop: '-3rem' }}
              >
                All
              </div>
              <div className="space-y-4">
                <div className="my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                  {ourteam.map((item) => {
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center justify-center bg-[#020418] md:h-80"
                      >
                        <img
                          className="mt-4 w-16 px-2 md:w-full"
                          src={item.icon}
                          alt={item.name}
                        />
                        <p className="mt-2 text-white">{item.name}</p>
                        {item.work && (
                          <>
                            <p className="mt-1 text-[#98FFF9]">{item.work}</p>
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
                    )
                  })}
                  {ourteam.map((_, index) => {
                    return (
                      index % 2 === 1 &&
                      index !== ourteam.length - 1 && (
                        <div
                          key={index}
                          className="absolute top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#556DE0] to-transparent md:block"
                          style={{
                            left: `${((index - 1) / 2 + 1) * (100 / (ourteam.length / 2))}%`,
                          }}
                        ></div>
                      )
                    )
                  })}
                  {/* Vertical line before the first column */}
                  <div className="absolute top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#556DE0] to-transparent md:block"></div>
                  {/* Vertical line after the last column */}
                  <div
                    className="absolute top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#556DE0] to-transparent md:block"
                    style={{ right: `calc(0% + 0px)` }}
                  ></div>
                </div>
              </div>
            </section>
          </div>

          {/*our team ended */}

          <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20">
            <div className="space-y-8">
              <h3 className="mt-8 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text pt-4 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                Join them
              </h3>
              <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
                {partners.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="grid h-20 place-items-center bg-[#161E4A]  md:h-36"
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
