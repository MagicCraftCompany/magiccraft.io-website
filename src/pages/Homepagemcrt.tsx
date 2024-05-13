import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'
import mcrtIcon from '@/assets/images/mcrt-icon.webp'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import buttonIcon from '@/assets/images/Vector (Stroke).png'

import backgroundimage from '@/assets/images/bg-1.png'
import 'swiper/css'
import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'
import directory from '@/assets/images/contact.png'
import googleicon from '@/assets/images/logo (1).png'
import vs from '@/assets/images/Group 7072.png'

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
            <div className="relative z-10 mx-auto w-11/12 max-w-screen-xl">
              <div className="grid h-full w-full grid-cols-1 place-items-center gap-2  py-28 md:gap-4">
                <div className="w-14 max-w-28 md:w-full">
                  <img src={mcrtIcon} alt="MCRT Token" />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <div className=" flex justify-center ">
                    <img src={magiccraft}></img>
                  </div>
                  <span className="text-3xl">WHERE PLAY MEANS PROSPERITY</span>
                </h1>
              </div>
              <div className="mx-auto  mb-20  w-5/12 ">
                <div className="rounded-[20px]   bg-gradient-to-b from-[#B591F2]  to-transparent ">
                  <div className="relative  w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  md:px-8 md:py-3">
                    <h4 className="text-balance text-center font-serif text-lg md:text-[22px] ">
                      <span className="text-[#FFB649]">PLAY </span> MAGICCRAFT
                      NOW!
                      <br />
                    </h4>
                    <div className="flex flex-wrap items-center">
                      <span className=" p-5">
                        <img src={pc}></img>
                        Download
                        <br />
                        <p className="text-xl font-bold">PC</p>
                      </span>

                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                      <span className=" p-5">
                        <img src={AppleIcon}></img>
                        Get it on <br />
                        <p className="text-xl font-bold">App Store</p>
                      </span>
                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                      <span className=" p-5">
                        <img src={steam}></img>
                        Get it on
                        <br />
                        <p className="text-xl font-bold">Steam</p>
                      </span>
                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                      <span className=" p-5">
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

          <section className="relative flex h-[500px] flex-wrap items-center bg-[#020418] bg-center  ">
            <div className="ml-10 flex w-6/12 rounded-lg pl-52  ">
              <div className="p-4 text-left ">
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text  font-serif text-2xl text-transparent drop-shadow-xl ">
                  <span className="text-4xl font-bold">
                    A NEW ERA IN GAMING
                  </span>
                  <br />
                  <span className="text-2xl font-bold">WITH MAGICCRAFT</span>
                </h3>
                <p>
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

                <div className="m-2 block  h-px w-6/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                <button className=" flex flex-wrap rounded-lg border-2 border-[#98FFF9] p-2 text-[#98FFF9]">
                  <img
                    src={buttonIcon}
                    alt="Button Image"
                    className="mr-2 h-6 w-6"
                  />
                  Register Now
                </button>
              </div>
            </div>
            <div className="relative w-4/12 rounded-lg  mt-4">
              <Swiper
                className='w-10/12'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
                autoHeight={true}
                pagination={{ clickable: true, dynamicBullets: true }}
              >
                <SwiperSlide style={{marginRight: '0 !important'}} className="h-full w-10/12">
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
                <SwiperSlide style={{marginRight: '0 !important'}} className='h-full w-10/12'>
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
              <button className="arrow-right arrow absolute top-[50%] right-0 cursor-pointer">
              <img src={right} alt="MCRT Token" />
              </button>
            </div>
          </section>

          {/*unlimited ways to earn */}
          <section className="relative h-[700px] bg-center">
            <img src={backgroundimage} />
            <div className="absolute left-0 top-0 m-4 flex h-full w-full  flex-col  text-center">
              <h2 className="text-balance font-serif text-4xl text-white">
                UNLIMITED WAYS TO EARN MCRT
              </h2>
              <p className="mt-4 font-serif text-base text-white">
                Explore Unlimited Ways to Earn MCRT through our dynamic
                portfolio of games within the MagicCraft
                <br /> Ecosystem. Each game offers unique opportunities to earn
                more MCRT and enhance your overall <br /> gaming experience.
                Dive into MagicRunner and Magic8Ball today and start earning!
              </p>
            </div>
          </section>

          {/*JOIN THE ACTION */}
          <section className=" bg-center p-4 ">
            <div className="relative w-full rounded-4xl bg-[#0C0218] p-4">
              <div className="m-4 h-[300px] space-y-5 md:px-10">
                <h5 className="mx-auto max-w-xl text-balance text-center font-serif text-base md:text-2xl">
                  JOIN THE ACTION ,EARN MCRT
                </h5>
                <p className="text-center">
                  Jump into MagicCraft matches and compete to win MCRT.Showcase
                  your skills,claim your rewards,
                  <br /> and rise through the ranks.Start your journey to gaming
                  glory now!
                </p>
                <div className="grid grid-cols-1 place-items-stretch gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                  <div className="h-[100px] rounded-[20px] bg-gradient-to-b  from-[#B591F2]  to-transparent   ">
                    <div className="relative   rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% py-4 md:px-10   ">
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
                  <div className="h-[100px] rounded-[20px] bg-gradient-to-b  from-[#B591F2] to-transparent  ">
                    <div className="relative   rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%  md:px-10    ">
                      <h4 className="pt-2 font-serif text-lg md:text-[22px]">
                        <span className="py-4 text-[#FFB649]">DOWNLOAD</span>{' '}
                        THE GAME
                      </h4>
                      <div className="mb-4 flex flex-wrap items-center">
                        <span className="py-4 px-3">
                          <img src={steam} className=" p-4"></img>
                          Get it on
                          <br />
                          <p className="text-xl font-bold">Steam</p>
                        </span>

                        <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                        <span className="py-4 px-3">
                          <img src={AppleIcon} className=" p-4"></img>
                          Get it on
                          <br />
                          <p className="text-xl font-bold">App store</p>
                        </span>
                        <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                        <span className=" py-4 px-3">
                          <img src={googleicon} className=" p-4"></img>
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
                  <div className="h-[100px] rounded-[20px] bg-gradient-to-b  from-[#B591F2]  to-transparent   ">
                    <div className="relative   rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% py-4 md:px-10   ">
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
              className="  md:h-3/12 absolute  inset-0 z-10 ml-96 rounded-lg object-cover p-10 md:w-3/12 "
            />

            <div className="rounded-lg bg-[#98FFF9] bg-opacity-50 p-4 md:w-7/12 ">
              <div className=" p-4 text-left ">
                <h3 className=" bg-gradient-to-b from-white to-white/75 bg-clip-text  font-serif text-3xl text-transparent drop-shadow-xl ">
                  <p>CONNECT,</p>
                  <p>COLLABORATE,</p>
                  <p>CONQUER</p>
                </h3>
                <div className="m-2 block  h-px w-5/12 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />
                <p className="p-2 text-[#98FFF9]">join us!</p>
              </div>
            </div>

            <div className="w-5/12 rounded-lg bg-black p-4">
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
