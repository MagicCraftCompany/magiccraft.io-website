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
    <section className="relative h-[700px] bg-center ">
      <img
        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717191953/bg-1_bx94ek.webp"
        alt="Background"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col text-center">
        <h2 className="p-2 font-serif text-4xl text-white mt-10">ABILITY DETAILS</h2>

        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="w-full lg:relative lg:mx-48 lg:flex-row">
            <Tabs>
              {characterAbilities.map((ability: { name: string; icon: string; iconActive: string; description: string; damage: number; image: string; }) => (
                <Tab
                  key={ability.name}
                  label={ability.name}
                  icon={ability.icon}
                  iconActive={ability.iconActive}
                  className="w-[80vw]"
                >
                <div className="lg:flex-row flex lg:flex-1 flex-col md:mx-10 lg:mx-0">
                  <div className="flex-1">
                    <img src={ability.image || "/placeholder.svg"} alt={ability.name} className="h-full rounded-lg" />
                  </div>
                  <div className="flex-1 rounded-lg bg-[#0a0a2e] bg-opacity-70">
                    <div className="flex flex-wrap">
                      <span className="p-5 text-4xl font-bold text-white font-serif">How it works</span>
                    </div>
                    <div className="m-2 block h-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent w-5/12" />
                    <div className=" text-left text-white p-4">
                      <p>{ability.description}</p>
                      <div className="flex flex-row items-center gap-2">
                        <span>Damage:</span>
                        <span className="flex items-center gap-1">
                          <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740386472/Game_role__xbppiw.svg" alt="Damage" className="h-4 w-4" />
                          {ability.damage}
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
      </div>
    </section>
  )
}

