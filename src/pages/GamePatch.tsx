import { Suspense, lazy } from 'react';




const Header = lazy(() => import('@/components/Header/Header'));
const Footer = lazy(() => import('@/components/Footer/Footer'));

function GamePatch() {
  return (
    <>
      <div className="flex h-full w-full flex-col text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
        <main className="scroll-smooth">
          <section className="relative  md:bg-bgpatch  bg-bgpatch1 bg-contain bg-no-repeat">
            <div className="video-bg-gradient absolute inset-0  h-full w-full"></div>
            <button><img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173152/Go_to_top_of_page_fgfqwp.webp" className=' absolute left-[5em] top-[39em]  cursor-pointer'/></button>
            <button><img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173193/Chat_bot_button_a3hguu.webp" className='absolute right-[7em]  top-[35em] cursor-pointer'/></button>

            <div className="m-4 flex h-[300px] flex-col justify-center space-y-5 text-center  md:px-10">
              <h1 className="mx-auto flex max-w-xl flex-wrap font-serif text-4xl md:text-5xl ">
                GAME PATCHES V.23270
              </h1>
              <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
              <div className=" hidden flex-col justify-center text-center md:block">
                <p>
                  From magical tacticians to fierce brutes and cunning rogues,
                  MagicCraft's hero pool is massive and limitlessly diverse.
                </p>
                <p>
                  Unleash incredible abilities and devastating ultimates on your
                  way to victory.
                </p>
              </div>
              <p className="block text-[16px] md:hidden">
                From magical tacticians to fierce brutes and cunning rogues,
                MagicCraft's hero pool is massive and limitlessly diverse.
                Unleash incredible abilities and devastating ultimates on your
                way to victory.
              </p>
            </div>

            <div className="flex justify-center ">
              <div className="z-10 flex h-full max-w-[100em]  flex-col gap-[30px] rounded-[30px]   bg-[#11113A] lg:p-10 p-6  ">
                <div className=" flex flex-col md:flex-row ">
                  <span className="pl-4 md:mt-2 text-2xl font-serif font-bold md:w-5/12">
                    GAME UPDATES
                  </span>
                  <div className="mt-4 md:mt-0 md:ml-20 flex flex-row justify-between md:w-6/12 md:justify-end md:text-right">
                    <span className="font-Futura p-2   text-xl md:w-5/12  md:justify-end md:text-right md:text-2xl">
                      v4.20.8577
                    </span>
                    <span className="  items-center justify-center gap-[8px] rounded-[66px] bg-[#20255B] p-2 text-right text-[#98FFF9]  md:px-4 md:ml-7">
                      20 Jun 2023
                    </span>
                  </div>
                </div>
                <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29]  p-4 ">
                  <span className=" text-2xl  font-bold text-[#98FFF9]">
                    Genral updates
                  </span>
                  <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

                  <ul className="ml-4 md:ml-10 list-disc">
                    <li>
                      Reinforced Units now take 10% less damage from Player
                      controlled creeps (affects all summons like treants,
                      <br /> eidolons, etc, as well as dominated creeps but not
                      Creep Heroes like Spirit Bear nor Illusions){' '}
                    </li>
                    <li>
                      Ranged Creeps are now Level 5 (prevents Enigma and others
                      from converting them early)
                    </li>
                    <li>
                      {' '}
                      Glyph Tower Bonus Attack targets increased from 4 to 5
                    </li>
                  </ul>
                </div>
                <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
                  <span className=" text-2xl  font-bold text-[#98FFF9]">
                    Item updates
                  </span>
                  <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                  <div className="flex flex-row md:ml-6 flex-wrap">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                      
                    ></img>
                    <span className="p-1 text-xl md:p-2 md:text-2xl ">
                      Lightning Dash
                    </span>
                    <span className="text-[#98FFF9] h-8 rounded-3xl bg-[#1C2254] flex  items-center px-4 mt-3   ">
                      Spell
                    </span>
                  </div>

                  <ul className="ml-4 md:ml-[4em] list-disc">
                    <li> Attack Damage bonus increased from 25 to 30</li>
                  </ul>

                  <span className="flex flex-row flex-wrap">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] md:ml-6"
                    ></img>
                    <span className="p-1 text-lg md:p-2 md:text-2xl ">
                      Lightning Discharge
                    </span>
                    <span className="text-[#98FFF9]  rounded-2xl bg-[#1C2254] px-4 flex items-center h-8 mt-3  ">
                      AA
                    </span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-[4em]">
                    <li> Bloodpact Duration decreased from 6s to 5s</li>
                  </ul>
                </div>
                <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
                  <span className=" text-2xl  font-bold text-[#98FFF9]">
                    Hero updates
                  </span>
                  <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

                  <span className="flex flex-wrap md:ml-5 ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173196/Characters_uda4i3.webp"></img>
                    <span className="p-2 text-2xl ">ZAP</span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Base Attack Time improved from 1.7s to 1.5s</li>
                  </ul>

                  <span className="flex flex-wrap ">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] md:ml-6"
                    ></img>
                    <span className="p-1 text-lg md:p-2 md:text-2xl ">
                      Lightning Discharge
                    </span>
                    <span className="text-[#98FFF9]  rounded-2xl bg-[#1C2254] px-4 flex items-center h-8 mt-3">
                      AA
                    </span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Bloodpact Duration decreased from 6s to 5s</li>
                  </ul>

                  <span className="flex flex-wrap md:ml-5 ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173199/Characters_1_i5cxlv.webp"></img>
                    <span className="p-2 text-2xl ">BLAZY</span>
                  </span>

                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Base Attack Time improved from 1.7s to 1.5s</li>
                  </ul>

                  <span className="flex flex-wrap ">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] md:ml-6"
                    ></img>
                    <span className="p-1 text-lg md:p-2 md:text-2xl ">
                      Lightning Discharge
                    </span>
                    <span className="text-[#98FFF9]  rounded-2xl bg-[#1C2254] px-4 flex items-center h-8 mt-3">
                      AA
                    </span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Bloodpact Duration decreased from 6s to 5s</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center  mt-5 ">
              <div className="z-10 flex h-full max-w-[100em] flex-col gap-[30px] rounded-[30px]   bg-[#11113A] lg:p-10 p-6  ">
                <div className=" flex flex-col md:flex-row ">
                  <span className="pl-4 md:mt-2 text-2xl font-serif font-bold md:w-5/12">
                    GAME UPDATES
                  </span>
                  <div className="mt-4 md:mt-0 md:ml-20 flex flex-row justify-between md:w-6/12 md:justify-end md:text-right">
                    <span className="font-Futura p-2   text-xl md:w-5/12  md:justify-end md:text-right md:text-2xl">
                      v4.20.8577
                    </span>
                    <span className="  items-center justify-center gap-[8px] rounded-[66px] bg-[#20255B] p-2 text-right text-[#98FFF9]  md:px-4 md:ml-7">
                      20 Jun 2023
                    </span>
                  </div>
                </div>
                <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29]  p-4 ">
                  <span className=" text-2xl  font-bold text-[#98FFF9]">
                    Genral updates
                  </span>
                  <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

                  <ul className="ml-4 md:ml-10 list-disc">
                    <li>
                      Reinforced Units now take 10% less damage from Player
                      controlled creeps (affects all summons like treants,
                      <br /> eidolons, etc, as well as dominated creeps but not
                      Creep Heroes like Spirit Bear nor Illusions){' '}
                    </li>
                    <li>
                      Ranged Creeps are now Level 5 (prevents Enigma and others
                      from converting them early)
                    </li>
                    <li>
                      {' '}
                      Glyph Tower Bonus Attack targets increased from 4 to 5
                    </li>
                  </ul>
                </div>
                <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
                  <span className=" text-2xl  font-bold text-[#98FFF9]">
                    Item updates
                  </span>
                  <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                  <div className="flex flex-row md:ml-6 flex-wrap">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
                      
                    ></img>
                    <span className="p-1 text-xl md:p-2 md:text-2xl ">
                      Lightning Dash
                    </span>
                    <span className="text-[#98FFF9] h-8 rounded-3xl bg-[#1C2254] flex  items-center px-4 mt-3   ">
                      Spell
                    </span>
                  </div>

                  <ul className="ml-4 md:ml-[4em] list-disc">
                    <li> Attack Damage bonus increased from 25 to 30</li>
                  </ul>

                  <span className="flex flex-row flex-wrap">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] md:ml-6"
                    ></img>
                    <span className="p-1 text-lg md:p-2 md:text-2xl ">
                      Lightning Discharge
                    </span>
                    <span className="text-[#98FFF9]  rounded-2xl bg-[#1C2254] px-4 flex items-center h-8 mt-3  ">
                      AA
                    </span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-[4em]">
                    <li> Bloodpact Duration decreased from 6s to 5s</li>
                  </ul>
                </div>
                <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
                  <span className=" text-2xl  font-bold text-[#98FFF9]">
                    Hero updates
                  </span>
                  <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

                  <span className="flex flex-wrap md:ml-5 ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173196/Characters_uda4i3.webp"></img>
                    <span className="p-2 text-2xl ">ZAP</span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Base Attack Time improved from 1.7s to 1.5s</li>
                  </ul>

                  <span className="flex flex-wrap ">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] md:ml-6"
                    ></img>
                    <span className="p-1 text-lg md:p-2 md:text-2xl ">
                      Lightning Discharge
                    </span>
                    <span className="text-[#98FFF9]  rounded-2xl bg-[#1C2254] px-4 flex items-center h-8 mt-3">
                      AA
                    </span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Bloodpact Duration decreased from 6s to 5s</li>
                  </ul>

                  <span className="flex flex-wrap md:ml-5 ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173199/Characters_1_i5cxlv.webp"></img>
                    <span className="p-2 text-2xl ">BLAZY</span>
                  </span>

                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Base Attack Time improved from 1.7s to 1.5s</li>
                  </ul>

                  <span className="flex flex-wrap ">
                    <img
                      src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp"
                      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] md:ml-6"
                    ></img>
                    <span className="p-1 text-lg md:p-2 md:text-2xl ">
                      Lightning Discharge
                    </span>
                    <span className="text-[#98FFF9]  rounded-2xl bg-[#1C2254] px-4 flex items-center h-8 mt-3">
                      AA
                    </span>
                  </span>
                  <ul className="ml-4 list-disc md:ml-12">
                    <li> Bloodpact Duration decreased from 6s to 5s</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      </div>
    </>
  )
}
export default GamePatch
