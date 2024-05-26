import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion'
//  import { useState } from 'react'
import { TypographyH1 } from '../components/Typography'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Tabs, Tab } from '@/components/tabs'

import web3 from '@/assets/icons/li_help-circle (1).svg'
import web from '@/assets/icons/li_help-circle.svg'
import web2 from '@/assets/icons/li_file-text.svg'
import web22 from '@/assets/icons/li_file-text (1).svg'
import Mcrt from '@/assets/icons/li_coins.svg'
import Mcrt2 from '@/assets/icons/li_coins (1).svg'
import contacticon from '@/assets/icons/li_users.svg'
import contacticon2 from '@/assets/icons/li_coins (1).svg'
import vector from '@/assets/icons/contact-vector.svg'

import character2D from '@/assets/images/character2D.png'

export default function FAQ() {

  function Question(){

    return(
      <Accordion
                type="single"
                collapsible
                className="m-auto h-full w-3/4"
              >
                <AccordionItem
                  className=" mb-[10px] md:gap-[30px]  md:w-full rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E] "
                  value="1"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif  font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline ">
                    What are the prerequisites for playing the game using the
                    web3 Lobby?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-base text-white md:text-2xl">
                    To play the game using web3 Lobby, you will need the latest
                    version of MagicCraft.You can download it from the following
                    sources: IOS:{' '}
                    <a
                      className="mr-1 md:underline"
                      href="https://apps.apple.com/us/app/magiccraft-pvp/id1638183525"
                    >
                      click here
                    </a>{' '}
                    Android:{' '}
                    <a
                      className="md:underline"
                      href="https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en&pli=1"
                    >
                      {' '}
                      click here{' '}
                    </a>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E] "
                  value="2"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-lg font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline ">
                    How can I create a MagicCraft Account?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-base text-white md:text-2xl">
                    To create a MagicCraft Account, visit{' '}
                    <a href="lobby.magiccraft.io/register"> link</a> and follow
                    the account creation process. During account creation, you
                    will need to connect your wallet (e.g., Metamask or
                    TrustWallet) if you already have one. If you don't have a
                    wallet, you may need to create one.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="3"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    What options are available once I log-in to Lobby?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg  text-white md:text-2xl">
                    Once logged in, you will have the following options: If you
                    already have a MagicCraft mint NFT, you can connect to the
                    VIP Lobby (refreshes hourly) Note: You can still join as a
                    spectator if you don't have an NFT You can create your own
                    lobbies, some of which may require MCRT to join Free to join
                    lobbies are scheduled hourly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E] "
                  value="4"
                >
                  <AccordionTrigger className="p-[30px]  text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    How do I join a Lobby and start playing?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg text-white md:text-2xl">
                    To join a Lobby, follow these steps: Be sure to be logged in
                    Wait for the Lobby to open at the scheduled time. Click on
                    "Join" to enter the Lobby Choose to "Join as player" or
                    "Join as spectator" If you select "Join as player", click on
                    the "Ready" button Once "Ready", launch the MagicCraft game
                    app or wait on the web browser until the status changes from
                    "waiting" to "ingame" (you may receive a pop-up indicating
                    that the game has started) If the game does not start or
                    shows an error message, go back to the web browser, set
                    yourself back to "Ready" mode, and repeat step 5 until the
                    game starts correctly
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="5"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    What is locked balance and how does it work?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg text-white md:text-2xl">
                    In our game, you have the opportunity to acquire $MCRT
                    through various means. You can deposit it directly, win it
                    by participating in a paid game, or even get it as a reward
                    from a free-to-play game or via an airdrop. However, it's
                    important to understand how our "Locked Balance" feature
                    works for tokens earned from free-to-play games or airdrops.
                    Your total balance is split into two categories, 'Locked'
                    and 'Unlocked'.Locked Balance refers to the MCRT tokens you
                    have won from free-to-play games or obtained through an
                    airdrop. This balance is not immediately available for
                    withdrawal. Why, you ask? This is a part of our commitment
                    to maintain the in-game economy's health and promote active
                    gameplay. It ensures that the rewards are not just collected
                    and withdrawn without participants actively engaging in the
                    game. To convert these 'Locked' MCRT tokens to 'Unlocked'
                    tokens, you need to participate in our games that require a
                    pledge. This process is seamless. As you play and pledge
                    your locked MCRT tokens, they automatically get converted to
                    unlocked tokens, regardless of whether you win or lose the
                    game. Unlocked Balance is your available MCRT token balance
                    that you've deposited, won in paid games, or converted from
                    your locked balance by staking in the games. You are free to
                    withdraw this balance anytime you want.Keep in mind that
                    only the 'Unlocked' balance is available for withdrawal.
                    This distinction is vital to note when managing your MCRT
                    tokens.We believe this feature enhances gameplay and
                    sustains a thriving and active gaming community. For any
                    additional questions, reach out to our support team.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="6"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    How does referral system works?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg  text-white md:text-2xl">
                    Share your unique referral link and get rewards! You will
                    receive a bonus equivalent to 3% of MCRT tokens won in games
                    with a pledge by the users you refer. This is not just a
                    one-time reward, it's a continuous stream of earnings every
                    time your referrals win. Start sharing, start earning - it's
                    as simple as that! Remember, the more people you refer, the
                    more you can earn. Take advantage of this opportunity and
                    let your referral link work for you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="7"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    What is MagicCraft DAO?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg text-white md:text-2xl">
                    MagicCraft DAO is an exclusive digital space where where
                    your voice doesn't just echo; it resonates. By leveraging
                    our native MCRT tokens, you can bring forward proposals,
                    vote on game-changing initiatives, and directly influence
                    the lanscape of the MagicCraft universe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="8"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    What are Gems?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg text-white md:text-2xl">
                    Gems are our new currency which you can get by completing
                    the tasks on your daily mission. You can purchase them on
                    our marketplace and also use them in Magic Runner. Using
                    gems, you can purchase in-game items like "skins" , and
                    battle-passes without having to use your $MCRT tokens. In
                    the future, you will have premium skins that you will be
                    only able to purchase using Gems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="9"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    What are Daily Missions?
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg  text-white md:text-2xl">
                    Daily Missions are tasks that you have to complete everyday
                    in order to receive gems. These tasks are: - 10 kills in any
                    game mode. - Become MVP 3 times in any game mode with more
                    than 6 players. - Win in 5 matches with 5 different
                    characters. - Play 10 different characters. - Kill 25
                    enemies in a single game. Once you have completed these
                    tasks, you will be given 75 gems which you can use to
                    purchase in-game items. Daily Missions are only applicable
                    to VIP Lobbies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  className="mb-[10px] gap-[30px] rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
                  value="10"
                >
                  <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl md:hover:no-underline">
                    The League System
                  </AccordionTrigger>
                  <AccordionContent className="px-[30px] pb-[30px] text-lg text-white md:text-2xl">
                    Our league system consists of 6 different ranks: -Silver
                    -Ruby -Pink -Amethyst -Topaz -Turquoise Each ranks represent
                    different skill levels. Players progress by winning matches,
                    earning MVPs, and completing daily missions. Higher ranks
                    offer greater rewards. However, league system reset at the
                    end of each season, providing new opportunities for players
                    to climb the ranks and earn rewards based on their
                    performance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
    )

  }

  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth">
          <section className="relative h-full bg-supportbg bg-cover bg-center">
            <div
              className={cn(
                'mx-auto max-w-[100rem]   px-8 md:px-24 lg:px-8 lg:py-8',
                'hero-bg-gradient relative flex flex-col gap-12'
              )}
            >
              <TypographyH1
                style={{ fontFamily: 'Colus' }}
                className="relative m-8 mb-8 text-center text-6xl font-bold text-white"
              >
                SUPPORT
                <div className="m-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent " />
                <div className="mt-6 text-center text-2xl font-bold text-white ">
                  if you have any questions
                </div>
              </TypographyH1>

              <section className="items-center justify-center">
                <Tabs>
                  <Tab
                    label="Web3 Slay-to-Earn Mode"
                    icon={web3}
                    iconActive={web}
                  >
                   <Question />
                  </Tab>
                  <Tab
                    label="Web 2 Mode"
                    icon={web2}
                    iconActive={web22}
                  >
                    <Question />
                  </Tab> 
                  <Tab
                    label="$ MCRT & pledging"
                    icon={Mcrt}
                    iconActive={Mcrt2}
                  >
                    <Question />
                  </Tab>
                  <Tab
                    label="Partner with MagicCraft"
                    icon={Mcrt}
                    iconActive={Mcrt2}
                  >
                    <Question />
                  </Tab>
                  <Tab
                    label="Contact Team"
                    icon={contacticon}
                    iconActive={contacticon2}
                  >

                    <div className=" flex flex-col md:flex-row md:max-w-[934px]  flex-shrink-0 items-start justify-between rounded-[25.4px] border border-[#9AD4FD] bg-[#03082F] bg-gradient-to-b from-[#161242] to-[rgba(6,11,49,0.95)] shadow-[0px_0px_20.32px_#22068F] backdrop-blur-[5.128px] ">
                      <form className=" w-full p-4  ">
                        <div className="mb-4">
                          <input
                            className="flex w-full items-start p-2 md:w-[443.23px]    rounded-[6.001px] border  border-[#9AD4FD] bg-[rgba(0,0,0,0.16)]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  "
                            id="name"
                            type="text"
                            placeholder="Your Email"
                          />
                        </div>

                        <div className="mb-4">
                          <textarea
                            className=" flex w-full items-start p-2 md:w-[443.23px] md:h-[141px] rounded-[6.001px] border border-[#9AD4FD] bg-[rgba(0,0,0,0.16)]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] "
                            id="message"
                            placeholder="Your question/problem"
                          />
                        </div>
                        <div className=" flex flex-wrap ">
                          <label className=" inline-flex items-center  z-10">
                          <input
                              type="checkbox"
                              className="form-checkbox  text-[#03082F]-500"
                            />
                             <span  className="m-2 z-10 text-white md:flex-shrink-0 ">
                             I agree to receive game updates events, contests
                              and other<br className=" md:block hidden"/>
                             marketing materials
                            </span>
                           
                          </label>
                        </div>

                        <div className=" flex flex-wrap">
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox  text-[#03082F]-500"
                            />
                            <span  className="m-2 text-white flex-shrink-0 ">
                              I agree to the
                            </span>
                            <span className=" z-10 text-[#71749f] underline flex-shrink-0">
                              Terms and Conditions
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <button
                            className="flex flex-wrap  items-center justify-center rounded-[6px] bg-[#98FFF9] p-4 m-4 text-[#03082F]"
                            type="button"
                          >
                            <img src={vector}  className='pr-1 m-1'/>
                            Send
                          </button>
                        </div>
                      </form>

                      <img src={character2D}
                        className=" hidden md:block  max-w-[400.23px] -ml-40 rounded-[27px] bg-no-repeat lg:block  "
                       
                      >
                       
                      </img>
                    </div>
                  </Tab>
                </Tabs>
              </section>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
