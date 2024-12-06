import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion'
import { questions } from '@/data/accordian'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Tabs, Tab } from '@/components/tabs'

import web3 from '@/assets/icons/li_help-circle (1).svg'
import web from '@/assets/icons/li_help-circle.svg'
// import web2 from '@/assets/icons/li_file-text.svg'
// import web22 from '@/assets/icons/li_file-text (1).svg'
// import Mcrt from '@/assets/icons/li_coins.svg'
// import Mcrt2 from '@/assets/icons/li_coins (1).svg'
import contacticon from '@/assets/icons/li_users.svg'
import contacticon2 from '@/assets/icons/li_coins (1).svg'
import vector from '@/assets/icons/contact-vector.svg'
import { Link } from 'react-router-dom'

export default function FAQ() {
  function Question() {
    return (
      <Accordion
        type="single"
        collapsible
        className="mx-auto h-full w-full  "
      >
        {questions.map((question) => (
          <AccordionItem
            key={question.value}
            value={question.value}
            className="mb-2 rounded-[20px] border-0 bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E] "
          >
            <AccordionTrigger className="p-4 text-left font-serif font-bold text-[#C09AFF] data-[state=open]:text-white md:p-[30px] md:text-2xl md:hover:no-underline">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-base text-white md:px-[30px] md:pb-[30px] md:text-xl">
              <span dangerouslySetInnerHTML={{ __html: question.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  return (
    <>
      <div className="min-h-dvh w-full text-white">
      <Header />
      <main className="scroll-smooth pb-32">
      <section className="relative bg-faqtab bg-contain bg-no-repeat lg:-top-[100px] lg:bg-supportbg min-h-[90vh]  ">
        <div className="absolute inset-0 w-full hero-bg-gradient h-[94vh]"></div>
            <div
              className={cn(
                'mx-auto max-w-[100rem] px-4 md:px-24 lg:px-8 lg:py-8 ',
                ' relative flex flex-col gap-4  '
              )}
            >
              <div className="relative mt-40 text-center font-serif text-4xl font-bold text-white md:text-6xl">
                SUPPORT
                <div className="mt-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent"></div>
              </div>


              <section className="flex justify-center items-center gap-4 mx-auto">
                {/* Render Dropdown on Mobile and Tablet */}

                <Tabs >
                  <Tab
                    id="Web3 Slay-to-Earn Mode"
                    label="FAQ"
                    icon={web3}
                    iconActive={web}
                  >
                    <Question />
                  </Tab>
                  {/* <Tab
                    id="Web 2 Mode"
                    label="Web 2 Mode"
                    icon={web2}
                    iconActive={web22}
                  >
                    <Question />
                  </Tab> */}
                  {/* <Tab
                    id="$ MCRT & pledging"
                    label="$ MCRT & pledging"
                    icon={Mcrt}
                    iconActive={Mcrt2}
                  >
                    <Question />
                  </Tab> */}
                  {/* <Tab
                    id="Partner with MagicCraft"
                    label="Partner with MagicCraft"
                    icon={Mcrt}
                    iconActive={Mcrt2}
                  >
                    <Question />
                  </Tab> */}

                  <Tab
                    id="contact"
                    label="Contact Team"
                    icon={contacticon}
                    iconActive={contacticon2}
                  >
                    <div className="flex flex-shrink-0 flex-col items-start justify-between rounded-[25.4px] border border-[#9AD4FD] bg-[#03082F] bg-gradient-to-b from-[#161242] to-[rgba(6,11,49,0.95)] shadow-[0px_0px_20.32px_#22068F] backdrop-blur-[5.128px] md:flex-row lg:max-w-[934px]">
                      <form className="w-full p-4 md:pl-[4em]">
                        <div className="mb-4">
                          <input
                            className="flex w-full items-start rounded-[6.001px] border-2 border-[#2C345A] bg-[rgba(0,0,0,0.16)] p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:w-[443.23px] lg:mt-6"
                            id="name"
                            type="text"
                            placeholder="Your Email"
                          />
                        </div>

                        <div className="mb-4">
                          <textarea
                            className="flex w-full items-start rounded-[6.001px] border-2 border-[#2C345A] bg-[rgba(0,0,0,0.16)] p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:h-[141px] md:w-[443.23px]"
                            id="message"
                            placeholder="Your question/problem"
                          />
                        </div>

                        <div className="flex">
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              id="terms-checkbox"
                              className="relative h-4 w-5 cursor-pointer appearance-none rounded-[3.81px] bg-gradient-to-r from-[#9AD4FD] to-[#8DC4FE] outline-none before:absolute before:left-1 before:top-0 before:h-full before:w-full before:bg-transparent before:content-[''] checked:before:text-sm checked:before:content-['✓']"
                            />

                            <span className="ml-4 mt-4 text-white">
                            I agree to receive game updates, events, contests,
                            and other marketing materials                             
                            </span>
                          </label>
                        </div>

                        <div className="flex">
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              id="terms-checkbox-2"
                              className="relative h-[18px] w-[17px] cursor-pointer appearance-none rounded-[3.81px] bg-gradient-to-r from-[#9AD4FD] to-[#8DC4FE] outline-none before:absolute before:left-1 before:top-0 before:h-full before:w-full before:bg-transparent before:content-[''] checked:before:text-sm checked:before:content-['✓']"
                            />

                            <span className="ml-4 text-white">
                              I agree to the{' '}
                              <Link
                                className="bg-gradient-to-br from-[#9AD4FD] to-[#8DC4FE70] bg-clip-text text-transparent underline decoration-[#8DC4FE70]"
                                to="/terms"
                                target="_blank"
                              >
                                Terms and Conditions
                              </Link>
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <button
                            className="m-4 flex flex-wrap items-center justify-center rounded-[6px] bg-[#98FFF9] px-6 py-2 text-[#03082F]"
                            type="button"
                          >
                            <img
                              src={vector}
                              className="m-1 pr-1"
                              alt="Send icon"
                            />
                            Send
                          </button>
                        </div>
                      </form>

                      <img
                        src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173202/character2D_yjromf.webp"
                        className="hidden max-w-[400.23px] rounded-[27px] bg-no-repeat lg:block"
                        alt="Character"
                      />
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
