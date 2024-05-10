import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import magiccraftCard from '@/assets/images/magiccraft-card.webp'
import magic8ballCard from '@/assets/images/magic-8-ball-card.webp'

import backgroundimage from '@/assets/images/bg-1.png'
import runnericon from '@/assets/images/runner.png'

import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import googleicon from '@/assets/images/logo (1).png'

function Homepagemagicrunner() {
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="relative flex flex-wrap">
            <div className="z-10 mx-10 flex rounded-lg p-52">
              <div className="p-4 text-left">
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
                  <span className="p-5 text-6xl font-bold">MAGIC RUNNER</span>
                  <br />
                  <span className="p-5 text-2xl font-bold">
                    RISE, RUN, REDEEM
                  </span>
                </h3>
                <p className="p-5">
                  Haunted by tragedy, Frigard races against fate, the lone
                  survivor of
                  <br />
                  Vladislav's wrath and the treachery of Karas. Now, every step
                  is a<br />
                  desperate sprint for survival, a relentless chase where the
                  shadow of <br />
                  Vladislav looms, fuelling Frigard's flight for justice.
                </p>

                <div className="m-2 block h-px w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent" />
                <button className="m-5 rounded-lg bg-[#98FFF9] p-2 text-black">
                  Play Now
                </button>
              </div>
            </div>

            <div className="absolute right-0 top-0 z-0 h-[700px] w-1/2 bg-mrback bg-cover bg-center"></div>
            <div className="mrback-bg-gradient absolute inset-0  h-full w-full"></div>

            <div className="relative flex w-full flex-wrap  rounded-4xl bg-[#0C0218]">
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
              <div className="grid snap-x snap-mandatory auto-cols-min grid-flow-col gap-6 overflow-x-auto overscroll-contain overscroll-x-contain pt-12 px-4 mx-4">
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
            <img src={backgroundimage} />
            <div className="absolute left-0 top-0 m-4 flex h-full w-full  flex-col  text-center">
              <h2 className="text-balance font-serif text-4xl text-white">
                $ MCRT REWARDS
              </h2>
              <div className="flex w-11/12 flex-wrap">
                {/*carousel */}
                <div className="w-1/2"></div>
                {/*carousel */}
                <div className="my-4  w-6/12 rounded-lg bg-[#0A0917]  p-4">
                  <div className="flex flex-wrap">
                    <img src={runnericon} className="px-4"></img>
                    <span className="p-5 text-4xl font-bold">how it works</span>
                  </div>
                  <div className="m-2 block h-px w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent" />

                  <div className="p-4 text-left">
                    <p className="p-5 ">
                      As Frigard embarks on his harrowing journey, fleeing from{' '}
                      <br />
                      Vladislav, the magical essence of the MagicCraft universe
                      <br />
                      recognizes his valor and resilience. In this world where{' '}
                      <br />
                      magic and might intertwine, MagicCraft is a blessing and a{' '}
                      <br />
                      token of power granted by ancient guardians aligned
                      <br />
                      against the darkness Vladislav represents. These rewards{' '}
                      <br />
                      serve as crucial aids in Frigard’s journey, providing him
                      with
                      <br />
                      the strength, speed, and resources needed to continue his{' '}
                      <br />
                      quest. Each completed daily task, a challenge set by these{' '}
                      <br />
                      unseen protectors, earns Frigard these mystical rewards,{' '}
                      <br />
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
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Homepagemagicrunner
