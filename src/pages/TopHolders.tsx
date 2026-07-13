import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { MCRT_CONTRACT_CHECKSUM } from '@/constants'
import { ExternalLink, ShieldCheck, WalletCards } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const BSCSCAN_HOLDERS_URL = `https://bscscan.com/token/${MCRT_CONTRACT_CHECKSUM}#balances`

export default function HoldersPage() {
  return (
    <div className="min-h-dvh w-full bg-[#03082f] text-white">
      <Helmet>
        <title>MCRT Holders | MagicCraft</title>
        <meta
          name="description"
          content="Use the BNB Chain explorer to inspect the current MCRT holder distribution from the token contract."
        />
        <link rel="canonical" href="https://magiccraft.io/topholders" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="relative flex min-h-[70vh] items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(152,255,249,0.14),transparent_38%),linear-gradient(180deg,#03082F_0%,#020418_100%)]" />
        <section className="relative mx-auto w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.055] p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#98FFF9]/25 bg-[#98FFF9]/10 text-[#98FFF9]">
            <WalletCards className="h-7 w-7" aria-hidden="true" />
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
            MCRT holder distribution
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            View the current MCRT holder distribution through BscScan, the BNB
            Chain explorer for the official token contract.
          </p>

          <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck
                className="h-4 w-4 text-[#98FFF9]"
                aria-hidden="true"
              />
              MCRT contract on BNB Chain
            </div>
            <p className="mt-2 break-all font-mono text-xs leading-relaxed text-[#98FFF9]">
              {MCRT_CONTRACT_CHECKSUM}
            </p>
          </div>

          <a
            href={BSCSCAN_HOLDERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#98FFF9] px-6 py-3 text-sm font-bold text-[#03082F] transition hover:bg-white"
          >
            View On-Chain Holder Data
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-6 text-xs leading-relaxed text-white/45">
            Explorer labels, balances and rankings are provided by the external
            chain explorer and can change as transactions settle.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
