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
          <section className="relative flex flex-wrap bg-cover bg-center">
            <div className={`absolute inset-0 hidden z-10 ${character?.name === 'Dr. Lutz' ? 'w-full' : 'w-3/4'} lg:block  bg-gradient-to-r from-[#03082F]  via-[#060817] to-transparent`} />
            <div className={`absolute inset-0 sm:hidden z-10   bg-gradient-to-t from-[#03082F]  via-[#060817] to-transparent`} />
            {/* <div className={`absolute inset-0 hidden sm:block lg:hidden z-10 bg-gradient-to-l from-[#03082F]/95 via-[#060817]/90 to-[#03082F]/70`} /> */}

            <img
              src={
                character?.visuals.background_image.desktop ||
                '/placeholder.svg'
              }
              alt={character?.name}
              className={`relative hidden h-[600px] lg:h-[700px] bg-cover bg-center lg:block lg:ml-auto`}
            />

            <img
              src={
                character?.visuals.background_image.tab ||
                '/placeholder.svg'
              }
              alt={character?.name}
              className="relative hidden h-[600px] md:h-[700px] w-full bg-cover bg-center sm:hidden md:block lg:hidden"
            />

            <img
              src={
                character?.visuals.background_image.mobile ||
                '/placeholder.svg'
              }
              className="relative block w-full h-[500px] sm:h-[600px] bg-cover bg-center md:hidden"
            />

            
            <div className="flex w-full rounded-lg z-20">
              
              <div className="absolute inset-0 mt-10 sm:mt-0 flex w-full flex-col sm:items-center md:items-start justify-center text-center px-4 sm:px-6 md:px-8 lg:px-0 md:-mt-10 lg:-top-[20em] lg:ml-[20em] lg:mt-40 lg:text-left md:w-fit">

                <span className="m-4 hidden w-fit justify-center rounded-[2em] bg-[#4457b84d] px-4 py-2 text-[#98FFF9] lg:block">
                  <div className="flex flex-wrap">
                    <img src={one} className="px-2" /> {character?.role.primary}
                  </div>
                </span>
                <span className="hidden sm:inline-flex md:hidden w-fit justify-center rounded-[2em] bg-[#4457b84d] px-3 py-1.5 text-[#98FFF9] mx-auto mb-3">
                  <div className="flex items-center">
                    <img src={one} className="h-4 w-4 mr-1" /> <span className="text-sm">{character?.role.primary}</span>
                  </div>
                </span>
                <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-2xl text-transparent drop-shadow-xl max-w-md sm:max-w-lg mx-auto lg:mx-0">
                  <span className="text-3xl sm:text-4xl font-bold lg:p-5 lg:text-6xl">
                    {character?.name.toUpperCase()}
                  </span>
                  <br />
                  <span className="text-base sm:text-lg font-bold lg:p-5">
                    {character?.title.toUpperCase()}
                  </span>
                </h3>
                <div className="m-2 block h-px w-max bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:hidden mx-auto" />
                <div className="hidden h-px w-5/12 bg-gradient-to-r from-transparent via-[#556DE0] to-transparent lg:block" />

                <p className="p-4 text-sm sm:text-base sm:max-w-md md:max-w-sm lg:max-w-md mx-auto lg:mx-0 backdrop-blur-sm bg-[#131342]/30 sm:rounded-xl sm:border sm:border-[#556DE0]/20 sm:shadow-[0_0_15px_rgba(152,255,249,0.1)] lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none">
                  {character?.description}
                </p>

               
              </div>

            </div>
            <div className="flex items-center justify-center z-20 w-full">
              <div className="flex flex-col items-center gap-[0.5em] rounded-[1.875em] bg-[#13152E]/70 backdrop-blur-[0.71875em] w-[90%] md:w-[704px] lg:-mt-40 lg:ml-[15.125em] lg:w-fit lg:flex-row py-4 lg:py-0 mx-3 sm:mx-6 md:mx-auto mt-[300px] sm:mt-[350px] md:mt-0 border border-[#556DE0]/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
               <div className="flex flex-row justify-between w-full md:w-fit flex-wrap px-4 lg:px-0">
                <div className="relative lg:flex h-fit w-fit lg:flex-col overflow-hidden rounded-[20px] lg:px-2">
                  <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                    Game role:{' '}
                    <div className="flex flex-row items-center px-2 text-[#98FFF9]">
                      <img src={one} className="md:px-2 mr-1 md:mr-0 h-5 w-5 md:h-8 md:w-8" /> {character?.role.class}
                    </div>
                  </h4>
                  <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                    Difficulty:{' '}
                    <div className="md:ml-6 ml-2 flex flex-row rounded-3xl bg-[#1F2E32] px-4 text-[#8EFF49]">
                      <div className="md:mx-2 mr-1 md:mr-2 mt-2 md:h-2 md:w-2 h-1 w-1 rounded-3xl text-[10px] md:text-sm bg-[#8EFF49]"></div>
                      {character?.difficulty}
                    </div>
                  </h4>
                </div>

                <div className="relative flex h-fit w-fit flex-col overflow-hidden rounded-[20px] px-2">
                  <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                    MP:{' '}
                    <div className="flex flex-row items-center md:pl-10 pl-2 text-[#98FFF9]">
                      <img src={heart} className="px-2 hidden md:block md:h-8 md:w-8" /> {character?.MP}
                    </div>
                  </h4>
                  <h4 className="flex flex-row p-1 text-xs sm:text-sm md:text-base">
                    Mobility:{' '}
                    <div className="flex flex-row items-center md:px-2 px-1 text-[#98FFF9]">
                      <img src={arrow} className="px-2 hidden md:block md:h-8 md:w-8" /> {character?.mobility}
                    </div>
                  </h4>
                </div>
                </div>
                <div className="my-8 hidden h-[3em] w-px bg-gradient-to-t from-transparent via-[#98FFF9] to-transparent lg:block" />
                <div className="my-4 md:my-8 block h-px w-[10em] bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent lg:hidden" />

                <div className="relative flex h-fit w-fit flex-col md:flex-row items-center justify-center overflow-hidden rounded-[20px] px-2">
                  <div className="text-xs sm:text-sm md:text-base lg:text-base mb-2 md:mb-0 font-medium text-white/90">Abilities:</div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:p-2">
                    {abilities.map((ability) => (
                      <div key={ability.id} className="flex flex-wrap bg-[#131342]/60 backdrop-blur-sm border border-[#556DE0]/30 rounded-xl p-2 transition-all duration-300 hover:shadow-[0_0_10px_rgba(152,255,249,0.2)] hover:border-[#98FFF9]/40 w-full sm:w-auto">
                        <img
                          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp"
                          className="h-8 w-8 object-contain md:h-10 md:w-10 lg:h-12 lg:w-12 mr-2 hidden sm:block"
                        />
                        <div className="flex flex-col ml-1">
                          <p className="text-[#98FFF9] text-xs sm:text-sm md:text-base font-medium">{ability.name}</p>
                          <div className="flex items-center">
                            <span className="text-xs sm:text-sm md:text-base text-white/70">Damage:</span>
                            <span className="bg-[#131342] px-2 py-0.5 rounded-md text-[#98FFF9] text-xs sm:text-sm ml-1 font-medium">{ability.damage}</span>
                          </div>
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
          <section className="relative">
            <HeroCarousel />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Hero
