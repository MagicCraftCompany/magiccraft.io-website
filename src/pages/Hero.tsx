import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'


import one from '@/assets/icons/1.svg'
import heart from '@/assets/icons/li_heart.svg'
import arrow from '@/assets/icons/game-icons_fast-arrow.svg'
import { Tab, Tabs } from '@/components/tabs'
import damage from '@/assets/icons/Game role_.svg'

import dash from '@/assets/images/image 139.png'
import peaks from '@/assets/images/image 140.webp'
import icestorm from '@/assets/images/image 141.webp'



function Hero() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="relative flex flex-wrap ">
            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173134/Hero_3_dkigsu.webp"
              className=" relative hidden h-[700px]  w-full bg-cover  bg-center  lg:block "
            />

            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173002/tabbg_jp3lgy.webp"
              className="relative hidden h-[700px] w-full bg-cover bg-center md:block lg:hidden sm:hidden "
            />
             <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173057/Mobilebg_1_lwk6tx.webp"
              className="relative block h-[700px]  w-full bg-cover top-[-70px] bg-center   md:hidden "
            />

            <div className=" flex w-full rounded-lg ">
              <div className="absolute inset-0 -mb-20 -mt-40 md:-mt-10 lg:mt-40 flex  w-fit  flex-col  justify-center  text-center lg:-top-[20em] lg:ml-[20em] lg:text-left">
                <span className="m-4 hidden w-fit justify-center rounded-[2em] bg-[#4457b84d]  px-4 py-2 text-[#98FFF9] lg:block   ">
                  <div className="flex flex-wrap">
                    {' '}
                    <img src={one} className='px-2' /> Damage Dealer{' '}
                  </div>
                </span>
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
                  <span className="text-4xl font-bold lg:p-5 lg:text-6xl">
                    ZAP
                  </span>
                  <br />
                  <span className="text-lg font-bold  lg:p-5">
                    THE LIGHTNING CALLER
                  </span>
                </h3>
                <div className="m-2 block h-px   w-max bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:hidden" />

                <p className="p-4">
                  The Frozen Lands is home to Frigard, an extremely talented ice
                  mage <br className="hidden lg:block" />
                  whose powers can bring upon great devastation. After the
                  Progenitor <br className="hidden lg:block" />
                  – Vladislav – massacred his entire household, he now seeks the
                  power <br className="hidden lg:block" />
                  to wipe the bloodborne off of existence.
                </p>

                <div className="  hidden h-px  w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />
                <button className=" m-5 hidden rounded-lg bg-[#98FFF9] p-2 text-black lg:block lg:w-[6.125em]">
                  Play Now
                </button>
              </div>
            </div>
            <div className=' flex justify-center items-center '>
            <div className="lg:-mt-40 w-[409px] md:w-[704px] md:mx-[2em] lg:w-fit  lg:ml-[15.125em] flex lg:flex-row flex-col  items-center  gap-[0.5em] rounded-[1.875em] bg-[#13152E] bg-opacity-70  px-[1.75em] backdrop-blur-[0.71875em] ">
              <div className="relative flex h-fit  w-fit flex-col overflow-hidden rounded-[20px]   px-2  ">
                <h4 className="flex flex-row p-1">
                  Game role:{' '}
                  <div className="flex flex-row px-2 text-[#98FFF9] ">
                    {' '}
                    <img src={one} className="px-2 " /> Battlemage{' '}
                  </div>
                </h4>
                <h4 className="flex flex-row p-1  ">
                  Difficulty:{' '}
                  <div className="ml-6 flex  flex-row rounded-3xl bg-[#1F2E32] px-4  text-[#8EFF49]">
                    {' '}
                    <div className="mx-2 mt-2 h-2 w-2 rounded-3xl bg-[#8EFF49]"></div>{' '}
                    Easy{' '}
                  </div>
                </h4>
              </div>

              <div className="relative flex h-fit  w-fit flex-col  overflow-hidden rounded-[20px]   px-2  ">
                <h4 className="flex flex-row p-1">
                  HP:{' '}
                  <div className="flex flex-row pl-10 text-[#98FFF9] ">
                    {' '}
                    <img src={heart} className="px-2" /> 438
                  </div>
                </h4>
                <h4 className="flex flex-row p-1  ">
                  Mobility:{' '}
                  <div className="flex flex-row  px-2 text-[#98FFF9]">
                    {' '}
                    <img src={arrow} className="px-2" /> Good
                  </div>
                </h4>
              </div>

              <div className="my-8 hidden lg:block h-[3em] w-px bg-gradient-to-t from-transparent via-[#98FFF9] to-transparent " />
              <div className="my-8 lg:hidden block h-px w-[10em] bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />

              <div className="relative flex h-fit justify-center items-center   w-fit flex-row  overflow-hidden rounded-[20px]   px-2  ">
                <div className="flex flex-col lg:flex-row gap-3 items-center justify-center p-2">
                  Abilities:
                  <div className="flex flex-wrap px-4 ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp" className="px-2 " />
                    <div className="flex flex-col">
                      <p className="text-[#98FFF9]"> Reflective Shield</p>
                      <p> Damage:90</p>
                    </div>
                  </div>
                
                <div className="flex flex-wrap px-4 ">
                  <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp" className="px-2" />
                  <div className="flex flex-col">
                    <p className="text-[#98FFF9]">Ice Peaks</p>
                    <p> Damage:260</p>
                  </div>
                  
                </div>
                <div className="flex flex-wrap px-4 ">
                  <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp" className="px-2" />
                  <div className="flex flex-col">
                    <p className="text-[#98FFF9]">Ice Storm</p>
                    <p> Damage:270</p>
                  </div>
                  
                </div>
                </div>
              </div>
              </div>
            </div>
          </section>
          <section className="relative h-[700px] bg-center  lg:h-full">
            <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191953/bg-1_bx94ek.webp" className="h-full w-full object-cover" />
            <div className="absolute left-0 top-0  flex h-full w-full  flex-col  text-center">
              <h2 className="text-balance  p-2 font-serif text-4xl text-white">
                ABILITY DETAILS
              </h2>

              <div className="flex flex-col   items-center justify-center  lg:flex-row">
                <div className=" lg:-mt-30 w-full lg:relative lg:-mr-10   lg:w-[40em]">
                 
                  </div>
                  <Tabs >
                  <Tab label="Lightning Dash" icon={dash} className="w-[80vw]">
                 <div>
                 <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp"
                      className=" px-4 rounded-2xl "
                    ></img>
                 </div>

                <div className="my-4 h-full w-full rounded-lg bg-custom-dark bg-opacity-70 p-4 lg:h-fit  lg:w-[500px]">
                  <div className="flex flex-wrap">
                   
                    <span className="p-5 text-4xl font-bold">How it works</span>
                  </div>
                  <div className="m-2 block h-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:w-5/12" />

                  <div className="p-1 text-left lg:p-4 ">
                    <p className="lg:p-5 ">
                      Zap calls forth a cascade of lightning in the chosen direction 
                      Enemies hit take damage and are silenced.
                    </p>
                    <div className='flex flex-row'>Damage:<img src={damage}/>90</div>

                    
                  </div>
                </div>
                </Tab>
                <Tab label="Ice Peaks" icon={peaks} className="w-[80vw]" children={undefined}></Tab>
                <Tab label="Ice Storms" icon={icestorm}  className="w-[80vw]" children={undefined}></Tab>
                </Tabs>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
export default Hero
