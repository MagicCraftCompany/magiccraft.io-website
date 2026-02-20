import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Helmet } from 'react-helmet-async'

export default function GrantsSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0726] via-[#120a3a] to-[#0A0726] text-white">
      <Helmet>
        <title>Application Received | MagicCraft Grants</title>
        <meta name="description" content="Thank you for applying to the MagicCraft grants program. Our team will review your submission and contact you shortly." />
      </Helmet>
      <Header />
      <main className="flex-1 safe-padded">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent mb-4">Thanks for applying</h1>
          <p className="text-white/80">We received your submission. Our team will contact you from contact@magiccraft.io.</p>
          <a href="/" className="inline-block mt-8 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7A3DF0] to-[#9F65FF] border border-white/20">Back to Home</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}


