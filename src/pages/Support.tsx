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
import { Helmet } from 'react-helmet-async'
import { Tabs, Tab } from '@/components/tabs'
import { useMemo, useState, type FormEvent } from 'react'
import { buildContactMailto, CONTACT_EMAIL } from '@/lib/contactEmail'

import web3 from '@/assets/icons/li_help-circle (1).svg'
import web from '@/assets/icons/li_help-circle.svg'
import contacticon from '@/assets/icons/li_users.svg'
import contacticon2 from '@/assets/icons/li_coins (1).svg'
import vector from '@/assets/icons/contact-vector.svg'
import { Link } from 'react-router-dom'

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [contactStatus, setContactStatus] = useState('')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return questions
    return questions.filter((item) =>
      (item.question + ' ' + item.answer).toLowerCase().includes(q)
    )
  }, [query])

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    try {
      window.location.href = buildContactMailto({
        email,
        message,
        subject: 'MagicCraft support request',
      })
      setContactStatus(
        `Your email app should open with a draft to ${CONTACT_EMAIL}.`
      )
      form.reset()
    } catch {
      setContactStatus(
        `We couldn't open your email app. Please email ${CONTACT_EMAIL} directly.`
      )
    }
  }

  function Question() {
    if (filtered.length === 0) {
      return (
        <p
          id="faq-results"
          role="status"
          className="rounded-xl border border-white/10 bg-white/5 p-5 text-center text-white/80"
        >
          No matching questions. Try a different search or contact the team.
        </p>
      )
    }

    return (
      <Accordion
        id="faq-results"
        type="single"
        collapsible
        className="mx-auto h-full w-full  "
      >
        {filtered.map((question) => (
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
      <Helmet>
        <title>Support - MagicCraft</title>
        <meta
          name="description"
          content="Get help and support for MagicCraft. Find answers to frequently asked questions and contact our team."
        />
        <link rel="canonical" href="https://magiccraft.io/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/faq" />
        <meta property="og:title" content="Support - MagicCraft" />
        <meta
          property="og:description"
          content="Find answers to common MagicCraft questions and contact the team for support."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support - MagicCraft" />
        <meta
          name="twitter:description"
          content="Find answers to common MagicCraft questions and contact the team for support."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: questions.map((q) => ({
              '@type': 'Question',
              name: q.question,
              acceptedAnswer: { '@type': 'Answer', text: q.answer },
            })),
          })}
        </script>
      </Helmet>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="scroll-smooth pb-16 md:pb-24">
          <section className="relative min-h-[90vh] bg-faqtab bg-contain bg-no-repeat lg:-top-[100px] lg:bg-supportbg  ">
            <div className="hero-bg-gradient absolute inset-0 h-[94vh] w-full"></div>
            <div
              className={cn(
                'mx-auto max-w-[100rem] px-4 md:px-24 lg:px-8 lg:py-8 ',
                ' relative flex flex-col gap-4  '
              )}
            >
              <h1 className="relative mt-24 text-center font-serif text-4xl font-bold tracking-tight text-white drop-shadow-xl md:mt-32 md:text-5xl lg:text-6xl">
                SUPPORT
                <div className="mt-4 block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent"></div>
              </h1>

              <section className="mx-auto flex items-center justify-center gap-4">
                {/* Render Dropdown on Mobile and Tablet */}

                <Tabs>
                  <Tab id="FAQ" label="FAQ" icon={web3} iconActive={web}>
                    <div className="mb-4 flex items-center gap-3">
                      <label htmlFor="faq-search" className="sr-only">
                        Search support questions
                      </label>
                      <input
                        id="faq-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search questions..."
                        aria-controls="faq-results"
                        className="w-full max-w-xl rounded-xl border border-white/15 bg-black/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#98FFF9]"
                      />
                    </div>
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
                      <form
                        onSubmit={handleContactSubmit}
                        className="w-full p-4 md:pl-[4em]"
                      >
                        <div className="mb-4">
                          <label
                            htmlFor="support-email"
                            className="mb-1 block text-sm text-white/80"
                          >
                            Your email
                          </label>
                          <input
                            className="flex w-full items-start rounded-[6.001px] border-2 border-[#2C345A] bg-[rgba(0,0,0,0.16)] p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:w-[443.23px] lg:mt-6"
                            id="support-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="support-message"
                            className="mb-1 block text-sm text-white/80"
                          >
                            How can we help?
                          </label>
                          <textarea
                            className="flex w-full items-start rounded-[6.001px] border-2 border-[#2C345A] bg-[rgba(0,0,0,0.16)] p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:h-[141px] md:w-[443.23px]"
                            id="support-message"
                            name="message"
                            placeholder="Your question/problem"
                            required
                          />
                        </div>

                        <p className="text-sm text-white/70">
                          This opens a draft in your email app. Nothing is sent
                          until you send it there. Review our{' '}
                          <Link
                            className="text-[#98FFF9] underline"
                            to="/privacypolicy"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </p>

                        <div className="flex items-center justify-between">
                          <button className="btn-primary m-4" type="submit">
                            <img
                              src={vector}
                              className="m-1 pr-1"
                              alt=""
                              aria-hidden="true"
                            />
                            Open Email Draft
                          </button>
                        </div>
                        <p className="px-4 text-sm text-white/80">
                          Prefer direct email?{' '}
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-[#98FFF9] underline"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        </p>
                        {contactStatus && (
                          <p
                            role="status"
                            aria-live="polite"
                            className="px-4 pt-3 text-sm text-white/80"
                          >
                            {contactStatus}
                          </p>
                        )}
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
              {/* Contact CTA */}
              <div className="mx-auto mt-12 flex flex-col items-center gap-4 md:mt-16">
                <p className="text-lg text-white/80">
                  Still need help? Reach us on Telegram.
                </p>
                <a
                  href="https://t.me/magiccraftgamechat"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(152,255,249,0.3)]"
                >
                  Open Telegram
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
