import { Helmet } from 'react-helmet-async'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useState } from 'react'

type Category = 'game' | 'web3-ai' | 'crypto'

const Grants = () => {
  const [category, setCategory] = useState<Category>('game')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0726] via-[#120a3a] to-[#0A0726] text-white">
      <Helmet>
        <title>MagicCraft Grants | Build with $MCRT</title>
        <meta name="description" content="Apply for MagicCraft Grants for Games, Web3/AI, and Crypto projects. Must have a working version. $MCRT integration encouraged." />
      </Helmet>

      <Header />

      <main className="flex-1 safe-padded">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 pb-20 md:pb-28">
          <div className="mb-8 md:mb-12 text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text text-transparent">
              MagicCraft Grants
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg">
              Grants for teams building Games, Web3/AI products, or Crypto tools in the MagicCraft ecosystem. You must already have a working version. Projects that integrate $MCRT are prioritized.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:border-white/25 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">Apply for a Grant</h2>
              <form name="grants" method="POST" action="/.netlify/functions/submit-grants" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-5">
                <input type="hidden" name="name" value="grants" />
                <input type="hidden" name="form-name" value="grants" />
                <input type="hidden" name="page" value="/grants" />
                <input type="hidden" name="subject" value="New MagicCraft Grants submission" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Team / Company Name</label>
                    <input name="teamName" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#98FFF9]/60" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Contact Email</label>
                    <input type="email" name="email" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 outline-none focus:border-[#98FFF9]/60" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Project Name</label>
                    <input name="projectName" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Website or Demo URL</label>
                    <input type="url" name="url" placeholder="https://" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {([
                      { key: 'game', label: 'Game' },
                      { key: 'web3-ai', label: 'Web3 / AI' },
                      { key: 'crypto', label: 'Crypto' },
                    ] as { key: Category; label: string }[]).map(({ key, label }) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setCategory(key)}
                        className={`px-3 py-1.5 rounded-lg border ${category === key ? 'border-[#98FFF9]/70 bg-[#98FFF9]/10' : 'border-white/15 bg-black/30'} text-sm`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="category" value={category} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Requested Grant (USD)</label>
                    <input type="number" name="amountUsd" min={0} step={100} placeholder="e.g. 10000" className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Requested Grant in $MCRT</label>
                    <input type="number" name="amountMcrt" min={0} step={1000} placeholder="e.g. 250000" className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">$MCRT Integration Plan</label>
                    <input name="mcrtPlan" placeholder="Payments, rewards, pledging, etc." className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Wallet Address (BSC)</label>
                    <input name="wallet" placeholder="0x..." className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-1">Brief Description</label>
                  <textarea name="description" rows={4} className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-1">Links (repo, trailer, pitch deck)</label>
                  <textarea name="links" rows={3} placeholder="One per line" className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2" />
                </div>

                <div className="flex items-center gap-3">
                  <input id="hasBuild" name="hasBuild" type="checkbox" required className="w-4 h-4 accent-[#98FFF9]" />
                  <label htmlFor="hasBuild" className="text-white/90">We have a working version build/demo</label>
                </div>

                <div className="pt-4">
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#B591F2] text-[#03082F] border border-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(152,255,249,0.3)] transition-all duration-300">
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-white/25 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3">Guidelines</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Must have a working version or playable build</li>
                <li>• Open-source preferred but not required</li>
                <li>• $MCRT integration is prioritized</li>
                <li>• Categories: Game, Web3/AI, Crypto</li>
                <li>• Payment on BSC; provide wallet</li>
              </ul>

              <div className="mt-6 text-sm text-white/70">
                Looking for bounties instead? Visit our <a className="text-[#98FFF9] underline" href="/bounties">Bounties</a> page.
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Grants


