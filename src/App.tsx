import './App.css'
import heroImg from '@/assets/images/hero.webp'
import mcrtIcon from '@/assets/images/mcrt-icon.webp'
import mcEcosystem from '@/assets/images/ecosystem.webp'
import magiccraftCard from '@/assets/images/magiccraft-card.webp'
import magic8ballCard from '@/assets/images/magic-8-ball-card.webp'
import magicRunnerCard from '@/assets/images/magic-runner-card.webp'
import magiccraftText from '@/assets/images/magiccraft-text.png'
import bulletIcon from '@/assets/icons/bullet.svg'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import strength1 from '@/assets/images/strength1.png'
import strength2 from '@/assets/images/strength2.png'
import strength3 from '@/assets/images/strength3.png'

import bybit from '@/assets/icons/bybit.svg'
import huobi from '@/assets/icons/huobi.svg'
import gateio from '@/assets/icons/gateio.svg'
import bitget from '@/assets/icons/bitget.svg'
import bitmart from '@/assets/icons/bitmart.svg'
import pancakeswap from '@/assets/icons/pancakeswap.svg'
import mexc from '@/assets/icons/mexc.svg'
import uniswap from '@/assets/icons/uniswap.svg'
import wingswap from '@/assets/icons/wingswap.svg'
import bitrue from '@/assets/icons/bitrue.svg'
import raydium from '@/assets/icons/raydium.svg'
import spookyswap from '@/assets/icons/spookyswap.svg'

import { Play, ArrowUpRight, Minus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import { roadmapData } from './roadmapData'

const foundation = [
  {
    title: 'Scouting Top Talent:',
    desc: 'Join our quest to attract industry-leading minds, ensuring our development team is second to none in skill and innovation.',
  },
  {
    title: 'Transitioning to a Full-fledged Game Development Studio:',
    desc: "We're transforming into a comprehensive game development studio, capable of producing a consistent stream of high-quality titles.",
  },
  {
    title: 'Harnessing In-House Innovation:',
    desc: "With a robust in-house team, we'll iterate quickly, test new concepts, and bring groundbreaking games to market faster than ever before.",
  },
]

const faqData = [
  {
    question: 'What is MCRT, and how does it work?',
    answer:
      'MCRT is the currency of the MagicCraft gaming world. It s used for in-game purchases, enhancing your gaming experience, and participating in the MagicCraft ecosystem. You can earn MCRT through gameplay or purchase it.',
  },
  {
    question: 'How long is each lesson?',
    answer:
      'Each lesson in the course is designed to be concise yet comprehensive, lasting between 12 to 20 minutes. The total duration of the course is approximately 3.2 hours, allowing for an in-depth exploration of the topics without overwhelming time commitment.',
  },
  {
    question: 'Do I need prior investing experience?',
    answer:
      'No prior investing experience is required to benefit from this course. It is structured to cater to both beginners who are just starting out and experienced investors looking to enhance their skills and knowledge.',
  },
  {
    question: 'Can I access the course material at any time?',
    answer:
      'Yes, once enrolled, students have full 24/7 access to all course materials. This allows you to learn at your own pace and revisit any section as often as needed for deeper understanding or reinforcement.',
  },
  {
    question: 'Is there a community or forum for discussion?',
    answer:
      'Absolutely, students of this course gain access to an exclusive community. This platform is ideal for discussions, networking, sharing experiences, and seeking advice, making your learning journey collaborative and supported.',
  },
]

const strengths = [
  {
    title: 'Diversified Revenue Streams:',
    desc: 'We understand the cyclical nature of markets and proactively diversify our revenue channels for stability and growth.',
    image: strength1,
  },

  {
    title: 'Prudent Financial Management:',
    desc: 'Our commitment to fiscal responsibility ensures lean operations and strategic expenditures for a solid foundation.',
    image: strength2,
  },
  {
    title: 'Adaptive Game Development Strategy:',
    desc: 'We adapt to player behavior shifts and economic trends to ensure consistent engagement.',
    image: strength3,
  },
]

const partners = [
  {
    name: 'Bybit',
    icon: bybit,
  },
  {
    name: 'Huobi',
    icon: huobi,
  },
  {
    name: 'Gate.io',
    icon: gateio,
  },
  {
    name: 'Bitget',
    icon: bitget,
  },
  {
    name: 'Bitmart',
    icon: bitmart,
  },
  {
    name: 'Pancakeswap',
    icon: pancakeswap,
  },
  {
    name: 'Mexc Global',
    icon: mexc,
  },
  {
    name: 'Uniswap',
    icon: uniswap,
  },
  {
    name: 'Wingswap',
    icon: wingswap,
  },
  {
    name: 'Bitrue',
    icon: bitrue,
  },
  {
    name: 'Raydium',
    icon: raydium,
  },
  {
    name: 'Spookyswap',
    icon: spookyswap,
  },
]

function App() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="pb-32">
          {/* hero section */}
          <section className="relative">
            <div className=" hero-bg-gradient absolute -top-8 -z-10 h-fit w-full ">
              <img src={heroImg} alt="Magiccraft Characters" />
              <div className="hero-bg-gradient absolute left-0 top-0 z-10 h-full w-full"></div>
            </div>

            <div className="relative mx-auto w-11/12 max-w-screen-xl">
              <div className="grid w-full grid-cols-1 place-items-center gap-2 pb-52 pt-28 md:gap-4">
                <div className="w-14 max-w-28 md:w-full">
                  <img src={mcrtIcon} alt="MCRT Token" />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <span className="text-xl md:text-4xl">
                    MagicCraft Vision 2024:
                  </span>{' '}
                  <br />
                  MCRT is The Future of Gaming
                </h1>
              </div>

              <div className="rounded-4xl relative bottom-32 w-full bg-[#0C0218] ">
                <div className="space-y-5 px-8 pb-10 pt-5 md:px-10">
                  <h5 className="text-balance text-center font-serif text-base md:text-2xl">
                    Join us in shaping the future of gaming with MCRT, the
                    cornerstone currency of the gaming world.
                  </h5>
                  <div className="grid grid-cols-1 place-items-stretch gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                    <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px">
                      <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4 md:p-10 ">
                        <h4 className="font-serif  text-lg md:text-[22px]">
                          <span className="text-[#8EFF49]">
                            MCRT Integration:
                          </span>{' '}
                          <br /> Enhance your gaming with MCRT.
                        </h4>

                        <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                      <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% px-8 py-4 md:p-10  ">
                        <h4 className="font-serif text-lg md:text-[22px]">
                          <span className="text-[#C09AFF]">
                            Monthly Surprises:
                          </span>{' '}
                          <br />
                          New games every two months.
                        </h4>

                        <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                      <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4 md:p-10  ">
                        <h4 className="font-serif  text-lg md:text-[22px]">
                          <span className="text-[#98FFF9]">Portfolio:</span>{' '}
                          <br />
                          indie and AA games onboarded.
                        </h4>

                        <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="space-y-28 ">
            <section className="relative mx-auto mt-0 w-11/12 max-w-screen-xl">
              <div className="flex flex-col-reverse items-start gap-0 md:flex-row md:gap-8">
                <div className="w-full space-y-8 self-end md:w-1/2">
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="rotate-180 whitespace-nowrap text-lg leading-none tracking-widest text-[#bd6ae182] [writing-mode:vertical-lr]">
                        Meet
                      </p>
                      <h2 className="text-[64px] font-semibold leading-none">
                        Magiccraft&apos;s
                      </h2>
                    </div>

                    <p
                      // className="font-outline text-7xl font-bold outline outline-red-500"#B591F299, #B591F278
                      className="font-outline bg-gradient-to-b from-[#B591F299] to-[#B591F278] bg-clip-text py-1 text-7xl font-bold tracking-wider text-[#03082F]"
                    >
                      Ecosystem
                    </p>
                  </div>
                  <h4 className="text-2xl leading-9">
                    In 2024, MagicCraft is set to redefine the gaming landscape
                    by positioning MCRT at the heart of every gamer's journey.
                    Our strategic moves and innovations are bridging virtual
                    realms and shaping a unified global gaming economy.
                  </h4>
                  <div className="flex flex-wrap items-center gap-[10px]">
                    {['MagicCraft', 'Magic 8Ball', 'Magic Runner'].map(
                      (val) => {
                        return (
                          <div
                            key={val}
                            className="game-chips-bg grid w-fit place-items-center rounded-full px-4 py-3"
                          >
                            <p>{val}</p>
                          </div>
                        )
                      }
                    )}
                  </div>

                  <div className="flex items-center gap-8 pt-10">
                    <button>
                      <div className="rounded-md border border-[#98FFF9] px-9 py-4 text-[22px] text-[#98FFF9] transition hover:bg-[#98FFF9] hover:text-[#03082F]">
                        FAQ
                      </div>
                    </button>
                    <div className="w-px self-stretch bg-gradient-to-b from-transparent via-[#98FFF9] to-transparent" />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <Play size={18} />
                      <p>Watch Intro</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-1/2">
                  <img src={mcEcosystem} alt="MagicCraft Ecosystem" />
                  <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#03082F] to-85% md:hidden" />
                </div>
              </div>

              <div className="grid snap-x snap-mandatory auto-cols-min grid-flow-col gap-6 overflow-x-auto overscroll-contain overscroll-x-contain pt-12">
                <div className="w-56 select-none snap-start">
                  <img
                    className="pointer-events-none select-none"
                    src={magiccraftCard}
                    alt=""
                  />
                </div>
                <div className="w-56 select-none snap-start ">
                  <img
                    className="pointer-events-noneselect-none"
                    src={magic8ballCard}
                    alt=""
                  />
                </div>
                <div className="w-56 select-none snap-start">
                  <img
                    className="pointer-events-none select-none"
                    src={magicRunnerCard}
                    alt=""
                  />
                </div>
              </div>
            </section>

            <section className="relative mx-auto w-11/12 max-w-screen-xl">
              <div className="space-y-20">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  Full Launch of the MagicCraft Game
                </h2>
                <div className="flex flex-col items-center md:flex-row">
                  <div className="w-4/5 md:w-2/5">
                    <div className=" rounded-t-4xl md:rounded-l-4xl grid grid-cols-1 place-items-center gap-2 border-x border-t border-[#3F3F7A] bg-[#11113A] p-10 shadow-lg md:rounded-r-none md:border-y md:border-l md:border-r-0 ">
                      <div className="max-w-10 md:max-w-20">
                        <img src={mcrtIcon} alt="MCRT" />
                      </div>

                      <div className="max-w-[350px]">
                        <img src={magiccraftText} alt="" />
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
                              Let's dive into the exciting features that make
                              MagicCraft a truly exceptional gaming experience:
                            </p>
                          </div>

                          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C09AFF] to-transparent" />

                          <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Elevated UI/UX:{' '}
                                </span>
                                Immerse in excellence with enhanced interface
                                for a seamless journey.
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Battle Pass Progression:{' '}
                                </span>
                                Engage dynamically with structured milestones
                                and rewards.
                              </p>
                            </div>{' '}
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Robust Multiplayer:{' '}
                                </span>
                                Connect effortlessly with full matchmaking and
                                Web3 lobbies.
                              </p>
                            </div>{' '}
                            <div className="flex items-center gap-2">
                              <img src={bulletIcon} alt="List item" />
                              <p className="text-[22px] text-[#C09AFF]">
                                <span className="font-bold text-[#ECE0FF]">
                                  Dynamic In-Game Market:{' '}
                                </span>
                                Explore a diverse in-game store, fostering a
                                dynamic economy.
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
                      className="rounded-4xl flex items-center gap-3 whitespace-nowrap bg-[#4312694D] px-5 py-2 backdrop-blur-md"
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
                  <div className="rounded-md border border-[#98FFF9] px-9 py-4 text-[22px] text-[#98FFF9] transition hover:bg-[#98FFF9] hover:text-[#03082F]">
                    Contact us
                  </div>
                </button>
              </div>
            </section>

            <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-20">
              <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem
                    className="mb-[10px] gap-[30px] rounded-[20px] bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                    key={item?.question}
                    value={`item-${index + 1}`}
                  >
                    <AccordionTrigger className="p-[30px] text-left font-serif text-3xl font-bold text-[#C09AFF] data-[state=open]:text-white">
                      {item?.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-[30px] pb-[30px] text-lg">
                      {item?.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                      className="rounded-4xl min-w-80 snap-start bg-gradient-to-b from-[#3F3F7A]  to-transparent p-px md:w-full "
                    >
                      <div className="rounded-4xl relative gap-8 overflow-y-auto bg-[#11113A] px-8 pb-8 pt-36 shadow-xl lg:px-10 lg:pb-10 lg:pt-52">
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
                    <div className="rounded-4xl relative gap-8 overflow-hidden bg-[#11113A] px-10 pb-10 pt-20 shadow-xl">
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

                        <div className="flex cursor-pointer items-center gap-2 text-[#98FFF9]">
                          <span>Become a partner</span>
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-4xl bg-gradient-to-b  from-[#3F3F7A] to-transparent p-px ">
                    <div className="rounded-4xl relative gap-8 overflow-hidden bg-[#11113A] px-10 pb-10 pt-20 shadow-xl">
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

                        <div className="flex cursor-pointer items-center gap-2 text-[#98FFF9]">
                          <span>Collaborate</span>
                          <ArrowUpRight size={18} />
                        </div>
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
              <div className="absolute -top-40 left-0 right-0 -z-10 mx-auto aspect-square max-h-[700px] w-full max-w-[700px]  rounded-full bg-[#1E025B] opacity-30 blur-[170px]" />

              <div className="space-y-20">
                <div className="space-y-8">
                  <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                    Roadmap
                  </h2>
                  <div className="mx-auto w-fit rounded-full bg-[#4457B84D] p-2 backdrop-blur">
                    <div className="rounded-full bg-[#98FFF9] px-5 py-3 text-lg text-[#03082F]">
                      2024
                    </div>
                  </div>
                </div>

                <div className="mx-auto grid snap-x snap-mandatory scroll-p-4 auto-cols-auto grid-flow-col gap-8 overflow-x-auto overscroll-x-contain px-4 lg:max-w-screen-xl">
                  {roadmapData.map((data) => {
                    return (
                      <div
                        key={data.quarter}
                        className="min-w-72 snap-center space-y-6 "
                      >
                        <h3 className=" bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
                          Q{data.quarter} 24
                        </h3>

                        <div className="grid grid-cols-1 gap-8">
                          {data.goals.map((goal, i) => {
                            return (
                              <div
                                key={i}
                                className="rounded-4xl bg-gradient-to-b from-[#B591F2] to-transparent p-px"
                              >
                                <div className="rounded-4xl space-y-5 bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
                                  <div className="bg-black/20 px-7 py-5">
                                    <h3 className="text-center font-serif text-3xl">
                                      Features
                                    </h3>
                                  </div>
                                  <div className="space-y-2 px-5 pb-6">
                                    {goal.features.map((feature, i) => {
                                      return (
                                        <div
                                          key={i}
                                          className="flex items-start gap-[10px]"
                                        >
                                          <div className="shrink-0 py-1">
                                            <Minus
                                              size={20}
                                              className="text-white/50"
                                            />
                                          </div>
                                          <div className="text-2xl">
                                            {feature}
                                          </div>
                                        </div>
                                      )
                                    })}

                                    {/* <div className="flex items-start gap-[10px]">
                                    <div className="shrink-0 py-1">
                                      <Minus
                                        size={20}
                                        className="text-white/50"
                                      />
                                    </div>
                                    <div className="text-2xl">
                                      Full UI/UX overhaul of the MagicCraft game
                                    </div>
                                  </div>{' '}
                                  <div className="flex items-start gap-[10px]">
                                    <div className="shrink-0 py-1">
                                      <Minus
                                        size={20}
                                        className="text-white/50"
                                      />
                                    </div>
                                    <div className="text-2xl">
                                      Releasing a league system for ranked
                                      progression.
                                    </div>
                                  </div> */}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
