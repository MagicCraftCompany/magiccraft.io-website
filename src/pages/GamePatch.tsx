import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import icon from '@/assets/images/image 139.png'
import icon1 from '@/assets/images/image 139 (1).png'
import image1 from '@/assets/images/Characters (1).png'
import image2 from '@/assets/images/Characters.png'


function GamePatch() {

  return (
    <>
      <div className="flex flex-col h-full w-full text-white">
        <Header />
        <main className="scroll-smooth">

        <section className="relative h-full bg-bgpatch bg-cover bg-center">
        
        <div className="video-bg-gradient absolute inset-0  h-full w-full"></div>
        <div className="m-4 flex h-[300px] flex-col justify-center space-y-5 text-center  md:px-10">
          <h1 className="mx-auto flex max-w-xl flex-wrap font-serif text-4xl md:text-5xl ">
            GAME PATCHES V.23270
          </h1>
          <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
          <div className=' flex-col justify-center text-center hidden md:block'>
        <p >From magical tacticians to fierce brutes and cunning rogues, MagicCraft's hero pool is massive and limitlessly diverse.</p>
          <p >Unleash incredible abilities and devastating ultimates on your way to victory.</p>
          </div>
          <p className="block md:hidden text-[16px]">
  From magical tacticians to fierce brutes and cunning rogues, MagicCraft's hero pool is massive and limitlessly diverse.

  Unleash incredible abilities and devastating ultimates on your way to victory.
</p>
        </div>

        <div className="flex justify-center ">
          <div className="z-10 rounded-[30px] flex h-full w-10/12 flex-col gap-[30px]   bg-[#11113A] p-10  ">
            <div className=" flex flex-col md:flex-row ">
              <span className="md:w-5/12  text-2xl font-bold pl-2">
                GAME UPDATES
              </span>
             <div className='flex flex-row md:w-6/12 justify-between m-2 md:justify-end md:text-right'>
              <span className="font-Futura md:w-5/12  p-2 text-xl  md:justify-end md:text-right md:text-2xl">
                v4.20.8577
              </span>
              <span className="  items-center justify-center p-2 gap-[8px] rounded-[66px] bg-[#4457B8] md:px-[6px] md:py-[12px] text-right text-[#98FFF9] ">
                20 Jun 2023
              </span>
              </div>
            </div>
            <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
              <span className=" text-2xl  font-bold text-[#98FFF9]">
                Genral updates
              </span>
              <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

              <ul className=" ml-4 list-disc">
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
              <div className="flex flex-wrap  flex-row">
                <img src={icon}
                className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'
                ></img>
                <span className="md:p-2 p-1 text-xl md:text-2xl ">Lightning Dash</span>
                <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
                  Spell
                </span>
              </div>

              <ul className="ml-4 list-disc">
                <li> Attack Damage bonus increased from 25 to 30</li>
              </ul>

              <span className="flex flex-wrap flex-row">
                <img src={icon1}  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'></img>
                <span className="md:p-2 p-1 text-lg md:text-2xl ">Lightning Discharge</span>
                <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
                  AA
                </span>
              </span>
              <ul className="ml-4 list-disc">
                <li> Bloodpact Duration decreased from 6s to 5s</li>
              </ul>
            </div>
            <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
              <span className=" text-2xl  font-bold text-[#98FFF9]">
                Hero updates
              </span>
              <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

              <span className="flex flex-wrap ">
                <img src={image2}></img>
                <span className="p-2 text-2xl ">ZAP</span>
              </span>
              <ul className="ml-4 list-disc">
                <li> Base Attack Time improved from 1.7s to 1.5s</li>
              </ul>

              <span className="flex flex-wrap ">
                <img src={icon1}  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'></img>
                <span className="md:p-2 p-1 text-lg md:text-2xl ">Lightning Discharge</span>
                <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
                  AA
                </span>
              </span>
              <ul className="ml-4 list-disc">
                <li> Bloodpact Duration decreased from 6s to 5s</li>
              </ul>

              <span className="flex flex-wrap ">
                <img src={image1}></img>
                <span className="p-2 text-2xl ">LAZY</span>
              </span>

              <ul className="ml-4 list-disc">
                <li> Base Attack Time improved from 1.7s to 1.5s</li>
              </ul>

              <span className="flex flex-wrap ">
              <img src={icon1}  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'></img>
                <span className="md:p-2 p-1 text-lg md:text-2xl ">Lightning Discharge</span>
                <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
                  AA
                </span>
              </span>
              <ul className="ml-4 list-disc">
                <li> Bloodpact Duration decreased from 6s to 5s</li>
              </ul>
            </div>

          </div>
        </div>

<div className="flex justify-center py-4 ">
  <div className="z-10 rounded-[30px] flex h-full w-10/12 flex-col gap-[30px]   bg-[#11113A] p-10  ">
    <div className=" flex flex-col md:flex-row ">
      <span className="md:w-5/12  text-2xl font-bold pl-2">
        GAME UPDATES
      </span>
     <div className='flex flex-row md:w-6/12 justify-between m-2 md:justify-end md:text-right'>
      <span className="font-Futura md:w-5/12  p-2 text-xl  md:justify-end md:text-right md:text-2xl">
        v4.20.8577
      </span>
      <span className="  items-center justify-center p-2 gap-[8px] rounded-[66px] bg-[#4457B8] md:px-[6px] md:py-[12px] text-right text-[#98FFF9] ">
        20 Jun 2023
      </span>
      </div>
    </div>
    <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
      <span className=" text-2xl  font-bold text-[#98FFF9]">
        Genral updates
      </span>
      <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

      <ul className=" ml-4 list-disc">
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
      <div className="flex flex-wrap  flex-row">
        <img src={icon}
        className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'
        ></img>
        <span className="md:p-2 p-1 text-xl md:text-2xl ">Lightning Dash</span>
        <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
          Spell
        </span>
      </div>

      <ul className="ml-4 list-disc">
        <li> Attack Damage bonus increased from 25 to 30</li>
      </ul>

      <span className="flex flex-wrap flex-row">
        <img src={icon1}  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'></img>
        <span className="md:p-2 p-1 text-lg md:text-2xl ">Lightning Discharge</span>
        <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
          AA
        </span>
      </span>
      <ul className="ml-4 list-disc">
        <li> Bloodpact Duration decreased from 6s to 5s</li>
      </ul>
    </div>
    <div className="z-10 flex flex-col items-start gap-[16px] self-stretch rounded-[16px] bg-[#0C0C29] p-4 ">
      <span className=" text-2xl  font-bold text-[#98FFF9]">
        Hero updates
      </span>
      <div className="ml-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />

      <span className="flex flex-wrap ">
        <img src={image2}></img>
        <span className="p-2 text-2xl ">ZAP</span>
      </span>
      <ul className="ml-4 list-disc">
        <li> Base Attack Time improved from 1.7s to 1.5s</li>
      </ul>

      <span className="flex flex-wrap ">
        <img src={icon1}  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'></img>
        <span className="md:p-2 p-1 text-lg md:text-2xl ">Lightning Discharge</span>
        <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
          AA
        </span>
      </span>
      <ul className="ml-4 list-disc">
        <li> Bloodpact Duration decreased from 6s to 5s</li>
      </ul>

      <span className="flex flex-wrap ">
        <img src={image1}></img>
        <span className="p-2 text-2xl ">LAZY</span>
      </span>

      <ul className="ml-4 list-disc">
        <li> Base Attack Time improved from 1.7s to 1.5s</li>
      </ul>

      <span className="flex flex-wrap ">
      <img src={icon1}  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]'></img>
        <span className="md:p-2 p-1 text-lg md:text-2xl ">Lightning Discharge</span>
        <span className="text[#98FFF9] rounded-2xl bg-[#4457b8] p-1 h-8 md:p-2 md:h-10 ">
          AA
        </span>
      </span>
      <ul className="ml-4 list-disc">
        <li> Bloodpact Duration decreased from 6s to 5s</li>
      </ul>
    </div>

              </div>
            </div>
            </section>
           
            {/* <section >
            <button className=" flex  flex-wrap items-center  rounded-lg border-2 w-[]  border-[#98FFF9] p-2 text-black bg-[#98FFF9]">
                  <img
                    src={buttonIcon}
                    alt="Button Image"
                    className="mr-2 h-6 w-6"
                  />
               Go to all Patches
                </button>
            </section> */}
       
        </main>
         <Footer />
      </div>
    </>
  )
}
export default GamePatch

