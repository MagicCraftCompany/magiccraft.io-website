"use client"
import { Tabs, Tab } from "@/components/tabs"
import { characterData } from './Data/Characterdata';

interface AbilityDetailsProps {
  characterName: string;
  abilities?: {
    name: string
    icon: string
    iconActive: string
    description: string
    damage: number
    image: string
  }[]
}

export function AbilityDetails({ characterName, abilities }: AbilityDetailsProps) {
  const characterAbilities = abilities || characterData[0].find(character => character.name === characterName)?.ability_details || [];

  return (
    <section className="relative h-auto min-h-[600px] sm:min-h-[650px] md:min-h-[700px] bg-[#010521] bg-center overflow-hidden py-8">
      <img
        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191953/bg-1_bx94ek.webp"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover opacity-60 z-0"
      />
      <div className="relative z-10 flex h-full w-full flex-col text-center">
        <h2 className="px-2 py-4 font-serif text-3xl md:text-4xl text-white mt-0 md:mt-4 tracking-wider font-bold bg-gradient-to-r from-[#98FFF9]/0 via-[#98FFF9] to-[#98FFF9]/0 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(152,255,249,0.5)]">ABILITY DETAILS</h2>

        <div className="flex flex-col items-center justify-center px-2 md:px-4">
          <Tabs>
            {characterAbilities.map((ability: { name: string; icon: string; iconActive: string; description: string; damage: number; image: string; }) => (
              <Tab
                key={ability.name}
                label={ability.name}
                icon={ability.icon}
                iconActive={ability.iconActive}
                className="w-full max-w-[94vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] mx-auto"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-3 md:mt-6 px-2 backdrop-blur-md bg-[#131342]/30 rounded-2xl p-4 md:p-6 border border-[#556DE0]/30 shadow-[0_0_15px_rgba(152,255,249,0.15)]">
                  <div className="w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[320px] mx-auto flex items-center justify-center">
                    <img 
                      src={ability.image || "/placeholder.svg"} 
                      alt={ability.name} 
                      className="h-full w-full object-contain rounded-lg shadow-[0_0_20px_rgba(152,255,249,0.2)] mx-auto transition-all duration-300 hover:scale-105" 
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col items-start">
                      <h3 className="p-2 md:p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white font-serif bg-gradient-to-r from-white to-[#98FFF9] bg-clip-text text-transparent">HOW IT WORKS</h3>
                      <div className="mx-2 h-1 rounded-full bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent w-full" />
                    </div>
                    
                    <div className="text-left text-white p-2 md:p-4 text-sm md:text-base">
                      <p className="mb-6 leading-relaxed tracking-wide">{ability.description}</p>
                      <div className="flex flex-row items-center gap-2 mt-3 bg-[#131342]/70 p-3 rounded-xl backdrop-blur-md border border-[#556DE0]/50 shadow-[0_0_10px_rgba(152,255,249,0.1)]">
                        <span className="font-medium text-base md:text-lg">Damage:</span>
                        <span className="flex items-center gap-2 rounded-md text-[#98FFF9] font-bold text-base md:text-lg shadow-[0_0_5px_rgba(152,255,249,0.5)]">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740386472/Game_role__xbppiw.svg" alt="Damage" className="h-5 w-5 animate-pulse p-0.5 bg-[#131342] rounded-md" />
                          <span className="bg-[#131342] px-3 py-1 rounded-md">{ability.damage}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

