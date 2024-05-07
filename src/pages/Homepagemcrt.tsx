import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import mcrtIcon from '@/assets/images/mcrt-icon.webp'

import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'

import { roadmapData } from '../data/roadmapData'
import RoadmapCard from '../components/Cards/RoadmapCard'

import Character from '@/assets/images/character.png'

import { otherpartners } from '@/data/otherpartners'
import partners from '@/data/partners'
import { ourteam } from '@/data/ourTeam'

function Homepagemcrt() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          {/*header*/}
          <section className="relative h-[700px] bg-hero bg-cover bg-center">
            <div className="relative mx-auto w-11/12 max-w-screen-xl">
              <div className="grid h-full w-full grid-cols-1 place-items-center gap-2  py-28 md:gap-4">
                <div className="w-14 max-w-28 md:w-full">
                  <img src={mcrtIcon} alt="MCRT Token" />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <span className="text-xl md:text-4xl">MagicCraft</span> <br />
                  WHERE PLAY MEANS PROSPERITY
                </h1>
              </div>
              <div className="mx-auto w-5/12">
                <div className="rounded-[20px]  bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                  <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4 md:p-10  ">
                    <h4 className="text-balance text-center font-serif text-lg md:text-[22px] ">
                      <span className="text-[#FFB649]">PLAY </span> MAGICCRAFT
                      NOW!
                      <br />
                    </h4>
                    <div className="flex flex-wrap items-center">
                      <img src={steam}></img>
                      <span className=" p-4"> Steam</span>

                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                      <img src={AppleIcon}></img>
                      <span className=" p-4"> App Store</span>
                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                      <img src={pc}></img>
                      <span className=" p-4">PC</span>

                      <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />

                      <span className=" p-4">Google play</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*JOIN THE ACTION */}
          <section className=" bg-center p-4">
            <div className="relative w-full rounded-4xl bg-[#0C0218]">
              <div className="space-y-5 px-8 pb-10 pt-5 md:px-10">
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
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px">
                    <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4 md:p-10 ">
                      <h4 className="font-serif  text-lg md:text-[22px]">
                        <span className="text-[#8EFF49]">REGISTER</span>
                        <br /> AN $MCRT <br /> ACCOUNT
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% px-8 py-4 md:p-10  ">
                      <h4 className="font-serif text-lg md:text-[22px]">
                        <span className="text-[#FFB649]">DOWNLOAD</span> THE
                        GAME
                      </h4>
                      <div className="flex flex-wrap items-center ">
                        <span className="w-1/4 p-4">
                          Get it on
                          <br /> Steam
                        </span>

                        <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                        <span className="w-1/4 p-4">
                          Get it on
                          <br /> App Store
                        </span>
                        <div className="block h-10 w-px bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
                        <span className="w-1/4 p-4">
                          Get it on
                          <br />
                          Google Play
                        </span>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4 md:p-10  ">
                      <h4 className="font-serif text-lg md:text-[22px]">
                        <span className="text-[#FF49ED]">JUMP</span> INTO
                        <br />
                        A WEB3
                        <br />
                        LOBBY
                      </h4>

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

            <div className="rounded-lg bg-[#98FFF9] bg-opacity-50 p-4 md:w-8/12 ">
              <div className=" p-4 text-left ">
                <h3 className=" bg-gradient-to-b from-white to-white/75 bg-clip-text  font-serif text-2xl text-transparent drop-shadow-xl ">
                  <p>CONNECT,</p>
                  <p>COLLABORATE,</p>
                  <p>CONQUER</p>
                </h3>
                <div className="m-2 block  h-px w-5/12 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />
                <p className="p-2 text-[#98FFF9]">join us!</p>
              </div>
            </div>

            <div className="w-4/12 rounded-lg bg-black p-4">
              <p>
                Step into a world where gamers thrive together! Join our Discord
                and Telegram channels to connect with players worldwide, share
                strategies, and receive exclusive updates and support. Be part
                of a community that plays, earns, and grows together.
              </p>
            </div>
          </section>

          {/*our team */}
          <div className="h-auto bg-[#020418]  ">
            <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 p-4 md:space-y-20  ">
              <div className="space-y-4">
                <h3 className="m-8 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text p-5 text-center font-serif text-4xl text-transparent drop-shadow-xl ">
                  our team
                </h3>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 ">
                  {ourteam.map((item, index) => {
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center justify-center bg-[#020418] md:h-80"
                      >
                        <img
                          className="w-16 px-2 md:w-full"
                          src={item.icon}
                          alt={item.name}
                        />
                        <p className="mt-2 text-white">{item.name}</p>
                        {item.work && (
                          <p className="mt-1 text-[#98FFF9]">{item.work}</p>
                        )}
                      </div>
                    )
                  })}
                  {ourteam.map((item, index) => {
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
