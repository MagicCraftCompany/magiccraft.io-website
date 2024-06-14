import { Suspense, lazy } from 'react'

const Header = lazy(() => import('@/components/Header/Header'))
const Footer = lazy(() => import('@/components/Footer/Footer'))

import bulletIcon from '@/assets/icons/bullet.svg'

import { Play, ArrowUpRight } from 'lucide-react'
import { roadmapData } from '../data/roadmapData'
import FaqAccordion from '../components/Accordion/FaqAccordion'
import RoadmapCard from '../components/Cards/RoadmapCard'

import partners from '@/data/partners'
import { foundation } from '@/data/foundation'
import strengths from '@/data/strengths'
import { useNavigate } from 'react-router-dom'

function Homepagegames() {

  const navigate = useNavigate();

  const magiccrafthandleClick = () => {
    navigate('/magiccraft');
  };
  const magicrunnerhandleClick = () => {
    navigate('/magicrunner');
  };
  const magic8ballhandleClick = () => {
    navigate('/magic8ball');
  };
  const contactTeamhandleClick=() => {
    navigate('/faq?contact=true')
  };
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main className="scroll-smooth pb-32">
          {/* hero section */}
          <section className="relative h-[700px] bg-hero bg-cover bg-center">
            {/* <div className=" hero-bg-gradient absolute -top-8 -z-10 h-fit w-full "> */}
            {/* <img src={heroImg} alt="Magiccraft Characters" /> */}
            <div className="hero-bg-gradient absolute inset-0  h-full w-full"></div>
            {/* </div> */}

            <div className="relative mx-auto w-11/12 max-w-screen-xl">
              <div className="grid h-full w-full grid-cols-1 place-items-center gap-2  py-28 md:gap-4">
                <div className="w-14 max-w-28 md:w-full">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
                    alt="MCRT Token"
                  />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <span className="text-xl md:text-4xl">
                    MagicCraft 2024:
                  </span>{' '}
                  <br />
                  MCRT is The Future of Gaming
                </h1>
              </div>

              

              <div className="grid h-[17em] w-full snap-x  snap-mandatory auto-cols-min grid-flow-col gap-6 overflow-x-auto overscroll-contain overscroll-x-contain rounded-4xl bg-custom-dark bg-opacity-70 px-4 pt-4 lg:ml-[10em] lg:w-[60em] lg:items-center lg:justify-center">
                <div className="flex flex-col items-center">
                  <h3 className="font-serif font-bold">
                  MAGICCRAFT ECOSYSTEM GAMES
                  </h3>
                  <div className="flex flex-row gap-[2em]">
                   
                      <div className="w-56 select-none snap-start cursor-pointer"  onClick={magiccrafthandleClick}>
                        <img
                          className="pointer-events-none select-none"
                          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191090/magiccraft-card_dfthct.webp"
                          alt="MagicCraft Game"
                         
                        />
                      </div>
                    
                    <div className="w-56 select-none snap-start cursor-pointer"  onClick={magic8ballhandleClick}>
                      <img
                        className="pointer-events-none select-none"
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717679173/CARD_10_ouvuyg.webp"
                        alt="Magic8Ball game"
                        
                      />
                    </div>
                    <div className="w-56 select-none snap-start cursor-pointer" onClick={magicrunnerhandleClick }>
                      <img
                        className="pointer-events-none select-none"
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717679173/CARD_9_vqeywh.webp"
                        alt="MagicRunner game"
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space-y-28 md:pt-60  lg:pt-48">
            <section className="relative mx-auto mt-0 w-11/12 max-w-screen-xl">
              <div className="flex flex-col-reverse items-start gap-0 md:flex-row md:gap-8">
                <div className="w-full space-y-8 self-end md:w-1/2">
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="rotate-180 whitespace-nowrap text-lg leading-none tracking-widest text-[#bd6ae182] [writing-mode:vertical-lr]">
                        Meet
                      </p>
                      <h2 className="text-5xl font-semibold leading-none md:text-[64px]">
                        MagicCraft&apos;s
                      </h2>
                    </div>

                    <p
                      // className="font-outline text-7xl font-bold outline outline-red-500"#B591F299, #B591F278
                      className="font-outline bg-gradient-to-b from-[#B591F299] to-[#B591F278] bg-clip-text py-1 text-6xl font-bold tracking-wider text-[#03082F] md:text-7xl"
                    >
                      Ecosystem
                    </p>
                  </div>
                  <h4 className="text-balance text-2xl leading-9">
                    In 2024, MagicCraft is set to redefine the Web3 gaming
                    landscape by positioning MCRT at the heart of every
                    gamer&apos;s journey. Our commitment to developing new
                    gaming experiences will shape a unified global gaming
                    economy.
                  </h4>
                  <div className="flex flex-wrap items-center gap-[10px] cursor-pointer">
                    {['MagicCraft', 'Magic8Ball', 'MagicRunner'].map((val) => {
 let handleClick;
 switch (val) {
   case 'MagicCraft':
     handleClick = magiccrafthandleClick;
     break;
   case 'Magic8Ball':
     handleClick = magic8ballhandleClick;
     break;
   case 'MagicRunner':
     handleClick = magicrunnerhandleClick;
     break;
   default:
     handleClick = () => {}; 
 }                      return (
                        <div
                          key={val}
                          className="game-chips-bg grid w-fit place-items-center rounded-full px-4 py-3"
                          onClick={handleClick}
                        >
                          <p>{val}</p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex items-center gap-8 pt-10">
                  <a href="">
                      <div className="rounded-md border border-[#98FFF9] px-9 py-4 text-[22px] text-[#98FFF9] transition hover:bg-[#98FFF9] hover:text-[#03082F]">
                      Join Our Ecosystem
                      </div>
                    </a>
                    <a href="#faq">
                      <div className="rounded-md border border-[#98FFF9] px-9 py-4 text-[22px] text-[#98FFF9] transition hover:bg-[#98FFF9] hover:text-[#03082F]">
                        FAQ
                      </div>
                    </a>
                    <div className="w-px self-stretch bg-gradient-to-b from-transparent via-[#98FFF9] to-transparent" />
                    <a
                      className="flex flex-col items-center justify-center gap-1"
                      href="  https://www.youtube.com/watch?v=YAp7k3NsKpg"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="flex flex-col items-center justify-center gap-1">
                        <Play size={18} />
                        <p>Watch Intro</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-lg  md:w-1/2 md:pt-0">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717330280/ecosystem_y5ixdr.webp"
                    alt="MagicCraft Ecosystem"
                  />
                  {/* <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#03082F] to-85% md:hidden" /> */}
                </div>
              </div>

              <div className="relative w-full rounded-4xl mt-[4em] bg-[#0C0218]">
                <div className="space-y-5 px-8 pb-10 pt-5 md:px-10">
                 
                  <div className="grid grid-cols-1 place-items-stretch gap-[30px] md:grid-cols-2 lg:grid-cols-4">
                  <h5 className="mx-auto  text-balance text-center font-serif text-base md:text-[16px] md:mt-[2em]">
                   jOIN US IN SHAPING THE FUTURE<br/>
                   OF GAMING WITH MCRT, THE<br/>
                   CORNERSTONE CURRENCY OF <br/>
                   THE GAMING WORLD.
                  </h5>
                    <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px">
                      <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-4 py-2 md:p-10 ">
                        <h4 className="font-serif  text-lg md:text-[16px]">
                          <span className="text-[#8EFF49]">
                           MCRT INTEGRATION:
                          </span>{' '}
                          <br /> ENHANCE YOUR GAMING WITH MCRT.
                        </h4>

                        <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                      <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% px-8 py-4 md:p-10  ">
                        <h4 className="font-serif text-lg md:text-[16px]">
                          <span className="text-[#C09AFF]">
                            MONTHLY SURPRISES:
                          </span>{' '}
                          <br />
                          NEW GAMES EVERY TWO MONTHS.
                        </h4>

                        <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                      <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4 md:p-10  ">
                        <h4 className="font-serif text-lg md:text-[16px]">
                          <span className="text-[#98FFF9]">PORTFOLIO:</span>{' '}
                          <br />
                         INDIE AND AA GAMES ONBOARDED.
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

            <section className="relative mx-auto w-11/12 max-w-screen-xl">
              <div className="space-y-20">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  FULL LAUNCH OF THE MAGICVERSE GAME
                </h2>
                <div className="flex flex-col items-center md:flex-row">
                  <div className="w-4/5 md:w-2/5">
                    <div className=" grid grid-cols-1 place-items-center gap-2 rounded-t-4xl border-x border-t border-[#3F3F7A] bg-[#11113A] p-10 shadow-lg md:rounded-l-4xl md:rounded-r-none md:border-y md:border-l md:border-r-0 ">
                      <div className="max-w-10 md:max-w-20">
                        <img
                          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
                          alt="MCRT"
                        />
                      </div>

                      <div className="max-w-[350px]">
                        <img
                          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173067/magiccraft-text_yzqlug.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5">
                    <div className="rounded-4xl bg-gradient-to-b from-[#B591F2] to-transparent p-px">
                      <div className="rounded-4xl bg-gradient-to-r  from-[#2A0D4E] to-[#57186D] to-90%">
                        <div className="bg-black/20 px-12 py-8">
                          <h3 className="font-serif text-3xl">Features</h3>
                        </div>

                        <div className="space-y-6 px-12 py-10">
                          <div>
                            <p className="text-xl">
                              Let&apos;s dive into the exciting changes and new
                              features coming to the MagicCraft game:
                            </p>
                          </div>

                          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C09AFF] to-transparent" />

                          <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Elevated UI/UX:&nbsp;
                                </span>
                                Immerse yourself in an enhanced interface for a
                                seamless gaming experience.
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Multiplayer System:&nbsp;
                                </span>
                                A 5v5 quick play mode with automated matchmaking
                                is coming to MagicCraft.
                              </p>
                            </div>{' '}
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Seasonal Progression:&nbsp;
                                </span>
                                New league system, daily tasks, and ranked play
                                to enable progression.
                              </p>
                            </div>{' '}
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Dynamic In-game Market:&nbsp;
                                </span>
                                A new in-game store packed with utilities for
                                MCRT.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-20">
              <div className="space-y-8">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  Strengthening Our Foundation
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  {[
                    'Industry-leading minds',
                    'Comprehensive game development studio',
                    'High-quality titles',
                    'In-house team',
                    'Groundbreaking games',
                  ].map((val) => (
                    <div
                      key={val}
                      className="flex items-center gap-3 whitespace-nowrap rounded-4xl bg-[#4312694D] px-5 py-2 backdrop-blur-md"
                    >
                      <img
                        className="shrink-0 "
                        src={bulletIcon}
                        alt="List item "
                      />
                      <p className="text-lg md:text-2xl">{val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
                {foundation.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="rounded-4xl bg-gradient-to-b  from-[#3F3F7A] to-transparent p-px"
                    >
                      <div className="rounded-4xl  bg-[#11113A] p-10">
                        {/* <div>
                            <p className="rotate-180 whitespace-nowrap text-lg uppercase leading-none tracking-widest text-[#bd6ae182] [writing-mode:vertical-lr]">
                              Approach
                            </p>
                          </div> */}
                        <div className="space-y-4">
                          <h4 className="font-serif text-[21px] text-[#C09AFF]">
                            {item.title}
                          </h4>
                          <p className="text-balance text-xl">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="text-center">
                <button>
                 
                    <div className="rounded-md border border-[#98FFF9] px-9 py-4 text-[22px] text-[#98FFF9] transition hover:bg-[#98FFF9] hover:text-[#03082F]" onClick={ contactTeamhandleClick}>
                      Contact us
                    </div>
                  
                </button>
              </div>
            </section>

            <section
              id="faq"
              className="relative mx-auto w-11/12 max-w-screen-xl space-y-20"
            >
              <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                Frequently Asked Questions
              </h2>

              <FaqAccordion />
            </section>

            <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-20">
              <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                our strengths
              </h2>

              <div className="grid snap-x snap-mandatory auto-cols-auto grid-flow-col items-stretch gap-6 overflow-x-auto overscroll-x-contain md:gap-8">
                {strengths.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="min-w-80 snap-start rounded-4xl bg-gradient-to-b from-[#3F3F7A]  to-transparent p-px md:w-full "
                    >
                      <div className="relative gap-8 overflow-y-auto rounded-4xl bg-[#11113A] px-8 pb-8 pt-36 shadow-xl lg:px-10 lg:pb-10 lg:pt-52">
                        <div className="absolute left-0 top-0 -z-0">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-[#11113A] to-55%"></div>
                        <div className="relative z-10 space-y-6 lg:space-y-8">
                          <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-[25px] text-transparent lg:text-[32px]">
                            {item.title}
                          </h3>

                          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent" />

                          <p className="text-balance text-2xl lg:text-3xl">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20">
              <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                Global Horizons
              </h2>

              <div className="space-y-20 md:space-y-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                  <div className="rounded-4xl bg-gradient-to-b  from-[#3F3F7A] to-transparent p-px ">
                    <div className="relative gap-8 overflow-hidden rounded-4xl bg-[#11113A] px-10 pb-10 pt-20 shadow-xl">
                      <div className="absolute left-5 top-5 z-10 rounded-full bg-black/60 px-4 py-[5px] text-[#98FFF9]">
                        Step #1
                      </div>
                      <div className="space-y-4 md:space-y-[18px]">
                        <h3 className="font-serif text-3xl text-[#C09AFF] md:text-[32px]">
                          Strategic Partnerships
                        </h3>
                        <p className="text-base md:text-lg">
                          We aim to forge alliances with regional influencers,
                          gaming communities, and distribution platforms to
                          amplify our presence.
                        </p>

                        <a
                          className="flex cursor-pointer items-center gap-2 text-[#98FFF9]"
                          rel="noreferrer noopener"
                          href="https://magiccraft.io/partnership"
                        >
                          <span>Become a partner</span>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-4xl bg-gradient-to-b  from-[#3F3F7A] to-transparent p-px ">
                    <div className="relative gap-8 overflow-hidden rounded-4xl bg-[#11113A] px-10 pb-10 pt-20 shadow-xl">
                      <div className="absolute left-5 top-5 z-10 rounded-full bg-black/60 px-4 py-[5px] text-[#98FFF9]">
                        Step #2
                      </div>
                      <div className="space-y-4 md:space-y-[18px]">
                        <h3 className="font-serif text-3xl text-[#C09AFF] md:text-[32px]">
                          Focus on High-Growth Regions
                        </h3>
                        <p className="text-base md:text-lg">
                          Our primary attention is on promising markets in Asia,
                          South Asia, and South East Asia, aligning with our
                          expansion strategy.
                        </p>

                        <a
                          className="flex cursor-pointer items-center gap-2 text-[#98FFF9]"
                          rel="noreferrer noopener"
                          href="https://magiccraft.io/partnership"
                        >
                          <span>Collaborate</span>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
                    Join them
                  </h3>
                  <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
                    {partners.map((item) => {
                      return (
                        <div
                          key={item.name}
                          className="grid h-20 place-items-center bg-[#161E4A]  md:h-36"
                        >
                          <img
                            className="px-2 "
                            src={item.icon}
                            alt={item.name}
                          />
                        </div>
                      )
                    })}
                  </div>

                  <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#9255E0] to-transparent md:hidden" />
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -top-40 left-0 right-0 -z-10 mx-auto aspect-square max-h-[700px] w-full max-w-[700px] rounded-full bg-[#1E025B] opacity-30 blur-[170px]" />

              <div className="space-y-20">
                <div className="space-y-8">
                  <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                    Roadmap
                  </h2>
                  <div className="mx-auto w-fit rounded-full bg-[#4457B84D] px-5 py-3 text-lg text-[#98FFF9] backdrop-blur">
                    2024
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                  <div className=" grid max-w-[100vw] snap-x  snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-scroll  px-4 lg:max-w-screen-xl  lg:overflow-x-hidden">
                    {roadmapData.map((data) => (
                      <RoadmapCard data={data} key={data.quarter} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default Homepagegames
