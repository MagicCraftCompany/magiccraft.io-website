import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'

export default function GrantsSuccess() {
  const location = useLocation()
  const accepted = new URLSearchParams(location.search).get('accepted') === '1'

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0A0726] via-[#120a3a] to-[#0A0726] text-white">
      <Helmet>
        <title>Submission Result | MagicCraft Grants</title>
        <meta
          name="description"
          content="Check whether a MagicCraft grants submission was accepted by the intake service."
        />
        <link rel="canonical" href="https://magiccraft.io/grants/success" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://magiccraft.io/grants/success"
        />
        <meta
          property="og:title"
          content="Submission Result | MagicCraft Grants"
        />
        <meta
          property="og:description"
          content="Check whether a MagicCraft grants submission was accepted by the intake service."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Submission Result | MagicCraft Grants"
        />
        <meta
          name="twitter:description"
          content="Check whether a MagicCraft grants submission was accepted by the intake service."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
      </Helmet>
      <Header />
      <main className="safe-padded flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h1 className="mb-4 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text font-serif text-3xl text-transparent md:text-4xl">
            {accepted ? 'Submission accepted' : 'No submission confirmed'}
          </h1>
          <p className="text-white/80">
            {accepted
              ? 'The intake service accepted your application for review. This does not guarantee funding. If selected for follow-up, the team will contact you from contact@magiccraft.io.'
              : 'Opening this page directly does not confirm that an application was sent or stored. Submit the grants form and wait for its accepted result.'}
          </p>
          <Link
            to={accepted ? '/' : '/grants'}
            className="mt-8 inline-block rounded-xl border border-white/20 bg-gradient-to-r from-[#7A3DF0] to-[#9F65FF] px-5 py-2.5"
          >
            {accepted ? 'Back to Home' : 'Open Grants Form'}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
