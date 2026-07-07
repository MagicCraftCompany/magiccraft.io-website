import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { buildContactMailto, CONTACT_EMAIL } from '@/lib/contactEmail'
import { ArrowUpRight, Mail, ShieldCheck, Trash2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const deletionSubject = 'MagicCraft account deletion request'

export default function ContactUs() {
  const [statusMessage, setStatusMessage] = useState('')

  const handleDeletionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') || '').trim()
    const identifier = String(formData.get('identifier') || '').trim()
    const details = String(formData.get('details') || '').trim()

    const message = [
      'Please delete my MagicCraft account and associated user data.',
      '',
      `Account email: ${email}`,
      `Username, player ID, wallet, or other account identifier: ${identifier}`,
      details ? `Additional details: ${details}` : '',
      '',
      'I understand MagicCraft may retain limited records where required for legal, security, fraud prevention, or financial compliance reasons.',
    ]
      .filter(Boolean)
      .join('\n')

    try {
      window.location.href = buildContactMailto({
        email,
        message,
        subject: deletionSubject,
      })
      setStatusMessage(`Your email app should open with a draft to ${CONTACT_EMAIL}.`)
      form.reset()
    } catch {
      setStatusMessage(`We could not open your email app. Please email ${CONTACT_EMAIL} directly.`)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us and Account Deletion - MagicCraft</title>
        <meta
          name="description"
          content="Contact MagicCraft support or request deletion of your MagicCraft account and associated user data."
        />
        <meta
          name="keywords"
          content="MagicCraft contact, MagicCraft account deletion, delete MagicCraft account, MagicCraft support"
        />
        <link rel="canonical" href="https://magiccraft.io/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/contact-us" />
        <meta property="og:title" content="Contact Us and Account Deletion - MagicCraft" />
        <meta
          property="og:description"
          content="Contact MagicCraft support or request deletion of your MagicCraft account and associated data."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us and Account Deletion - MagicCraft" />
        <meta
          name="twitter:description"
          content="Contact MagicCraft support or request deletion of your MagicCraft account and associated data."
        />
      </Helmet>

      <div className="min-h-dvh bg-[#03082f] text-white">
        <Header />
        <main>
          <section className="relative overflow-hidden bg-faqtab bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#020418]/60 via-[#03082f]/90 to-[#03082f]" />
            <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-8 px-4 py-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#98FFF9]">
                  MagicCraft support
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
                  Contact Us and Account Deletion
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/80 md:text-xl">
                  Use this page to contact MagicCraft support, request deletion of your
                  MagicCraft account, or ask us to delete the user data associated with
                  that account. You can use it even if you have already uninstalled the app.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(deletionSubject)}`}
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Email support
                  </a>
                  <a
                    href="#delete-account"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 font-semibold text-[#98FFF9] hover:border-[#98FFF9]/60 hover:bg-white/10"
                  >
                    <Trash2 className="h-5 w-5" />
                    Delete account
                  </a>
                </div>
              </div>

              <div className="hidden justify-end lg:flex">
                <img
                  src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173202/character2D_yjromf.webp"
                  alt="MagicCraft character"
                  className="max-h-[560px] w-auto object-contain drop-shadow-[0_24px_55px_rgba(152,255,249,0.18)]"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#03082f] px-4 py-14 md:px-8 md:py-20" id="delete-account">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[#98FFF9]/30 bg-[#98FFF9]/10 text-[#98FFF9]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                  Delete your MagicCraft account
                </h2>
                <p className="mt-5 text-base leading-7 text-white/75">
                  To request account deletion, email us or submit the form on this page.
                  Include the email address, username, player ID, connected wallet, or
                  other account identifier you used with MagicCraft so we can find the
                  account.
                </p>
                <ul className="mt-6 space-y-4 text-base leading-7 text-white/75">
                  <li>
                    We will delete the MagicCraft account and associated user data after
                    verifying the request.
                  </li>
                  <li>
                    We may retain limited records where required for legal, security,
                    fraud prevention, dispute, or financial compliance reasons.
                  </li>
                  <li>
                    Uninstalling the app does not automatically delete your account or
                    account data.
                  </li>
                </ul>
                <div className="mt-8 rounded-md border border-[#98FFF9]/20 bg-[#98FFF9]/10 p-4 text-sm leading-6 text-white/80">
                  Direct email:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#98FFF9] underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleDeletionSubmit}
                className="rounded-md border border-white/10 bg-gradient-to-b from-[#161242] to-[#060B31] p-6 shadow-[0_0_24px_rgba(34,6,143,0.35)] md:p-8"
              >
                <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                  Request account deletion
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  This form opens a prepared email to MagicCraft support. Send the email
                  to start the deletion request.
                </p>

                <div className="mt-6 grid gap-5">
                  <label className="grid gap-2 text-sm font-semibold text-white/85" htmlFor="email">
                    Account email
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="rounded-md border border-white/15 bg-black/20 px-4 py-3 text-base text-white placeholder-white/45 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-white/85" htmlFor="identifier">
                    Username, player ID, or wallet address
                    <input
                      id="identifier"
                      name="identifier"
                      required
                      className="rounded-md border border-white/15 bg-black/20 px-4 py-3 text-base text-white placeholder-white/45 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20"
                      placeholder="Your MagicCraft account identifier"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-white/85" htmlFor="details">
                    Additional details
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      className="resize-y rounded-md border border-white/15 bg-black/20 px-4 py-3 text-base text-white placeholder-white/45 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20"
                      placeholder="Anything else we should know"
                    />
                  </label>
                </div>

                <button type="submit" className="btn-primary mt-6 w-full gap-2">
                  <ArrowUpRight className="h-5 w-5" />
                  Send deletion request
                </button>

                {statusMessage && <p className="mt-4 text-sm text-white/75">{statusMessage}</p>}

                <p className="mt-5 text-xs leading-5 text-white/55">
                  For privacy details, read the{' '}
                  <Link to="/privacypolicy" className="text-[#98FFF9] underline">
                    MagicCraft Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
