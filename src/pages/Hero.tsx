import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useParams } from 'react-router-dom'

import one from '@/assets/icons/1.svg'
import heart from '@/assets/icons/li_heart.svg'
import arrow from '@/assets/icons/game-icons_fast-arrow.svg'
import HeroCarousel from '@/components/HeroCarousel'
import { characterData } from '@/components/Data/Characterdata'
import { AbilityDetails } from '@/components/abilitydetail'

function Hero() {
  const { heroName } = useParams();
  const character = characterData[0].find((character) => character.name.toLowerCase() === heroName);
  const abilitiesdetails = character?.ability_details || [];
  const abilities = character?.abilities || [];
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-32">
          <section className="relative flex flex-wrap bg-cover bg-center ">
            <div className={`absolute inset-0 hidden z-10 ${character?.name === 'Dr. Lutz' ? 'w-full' : 'w-3/4'} lg:block  bg-gradient-to-r from-[#03082F]  via-[#060817] to-transparent`} />
            <div className={`absolute inset-0 sm:hidden z-10   bg-gradient-to-t from-[#03082F]  via-[#060817] to-transparent`} />

            <img
              src={
                character?.visuals.background_image.desktop ||
                '/placeholder.svg'
              }
              alt={character?.name}
              className={`relative hidden h-[700px]  bg-cover bg-center lg:block lg:ml-auto `}
            />

            <img
              src={
                character?.visuals.background_image.tab ||
                '/placeholder.svg'
              }
              alt={character?.name}
              className="relative hidden h-[700px] w-full bg-cover bg-center sm:hidden md:block lg:hidden "
            />

            <img
               src={
                character?.visuals.background_image. mobile ||
                '/placeholder.svg'
              }
              className="relative top-[-10px] block w-full h-[700px]     md:hidden "
            />

            
            <div className=" flex w-full rounded-lg z-20 ">
              
              <div className="absolute inset-0  -mt-40 flex w-fit flex-col  justify-center  text-center  md:-mt-10  lg:-top-[20em] lg:ml-[20em] lg:mt-40 lg:text-left ">

                <span className="m-4 hidden w-fit justify-center rounded-[2em] bg-[#4457b84d]  px-4 py-2 text-[#98FFF9] lg:block   ">
                  <div className="flex flex-wrap">
                    {' '}
                    <img src={one} className="px-2" /> {character?.role.primary}{' '}
                  </div>
                </span>
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl">
                  <span className="text-4xl font-bold lg:p-5 lg:text-6xl">
                    {character?.name.toUpperCase()}
                  </span>
                  <br />
                  <span className="text-lg font-bold  lg:p-5">
                    {character?.title.toUpperCase()}
                  </span>
                </h3>
                <div className="m-2 block h-px   w-max bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:hidden" />
                <div className="  hidden h-px  w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />

                <p className="p-4 lg:w-[500px]">
                  {character?.description}
                </p>

               
              </div>

            </div>
            <div className=" flex items-center justify-center z-20 ">
              <div className="flex w-[409px] flex-col items-center gap-[0.5em]  rounded-[1.875em] bg-[#13152E] bg-opacity-70 px-[1.75em]  backdrop-blur-[0.71875em]  md:mx-[2em] md:w-[704px] lg:-mt-40 lg:ml-[15.125em]  lg:w-fit lg:flex-row py-4 lg:py-0 ">
                <div className="relative  lg:flex h-fit  w-fit lg:flex-col overflow-hidden rounded-[20px]   lg:px-2  ">
                  <h4 className="flex flex-row p-1">
                    Game role:{' '}
                    <div className="flex flex-row px-2 text-[#98FFF9] ">
                      {' '}
                      <img src={one} className="px-2 " /> {character?.role.class}{' '}
                    </div>
                  </h4>
                  <h4 className="flex flex-row p-1  ">
                    Difficulty:{' '}
                    <div className="ml-6 flex  flex-row rounded-3xl bg-[#1F2E32] px-4  text-[#8EFF49]">
                      {' '}
                      <div className="mx-2 mt-2 h-2 w-2 rounded-3xl bg-[#8EFF49]"></div>{' '}
                      {character?.difficulty}{' '}
                    </div>
                  </h4>
                </div>

                <div className="relative flex h-fit  w-fit flex-col  overflow-hidden rounded-[20px]   px-2  ">
                  <h4 className="flex flex-row p-1">
                    MP:{' '}
                    <div className="flex flex-row pl-10 text-[#98FFF9] ">
                      {' '}
                      <img src={heart} className="px-2" /> {character?.MP}
                    </div>
                  </h4>
                  <h4 className="flex flex-row p-1  ">
                    Mobility:{' '}
                    <div className="flex flex-row  px-2 text-[#98FFF9]">
                      {' '}
                      <img src={arrow} className="px-2" /> {character?.mobility}
                    </div>
                  </h4>
                </div>

                <div className="my-8 hidden h-[3em] w-px bg-gradient-to-t from-transparent via-[#98FFF9] to-transparent lg:block " />
                <div className="my-8 block h-px w-[10em] bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent lg:hidden " />

                <div className="relative flex h-fit w-fit flex-row   items-center justify-center  overflow-hidden rounded-[20px]   px-2  ">
                  <div className="flex flex-col items-center justify-center gap-3 lg:p-2 lg:flex-row ">
                    Abilities:
                    {abilities.map((ability) => (
                      <div key={ability.id} className="flex flex-wrap px-4 ">
                       <img
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp"
                        className="px-2 hidden lg:block"
                      />
                        <div className="flex flex-col">
                          <p className="text-[#98FFF9]">{ability.name}</p>
                          <p> Damage: {ability.damage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <AbilityDetails characterName={character?.name || ''} abilities={abilitiesdetails} />
          </section>
          <section>
            <HeroCarousel />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Hero
