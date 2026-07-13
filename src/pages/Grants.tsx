import { Helmet } from 'react-helmet-async'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type Category = 'game' | 'web3-ai' | 'crypto'

const Grants = () => {
  const [category, setCategory] = useState<Category>('game')

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0A0726] via-[#120a3a] to-[#0A0726] text-white">
      <Helmet>
        <title>MagicCraft Grants Program</title>
        <meta
          name="description"
          content="Request support from the MagicCraft Grants Program for a working game, Web3/AI product, or crypto tool. Applications are reviewed case by case."
        />
        <link rel="canonical" href="https://magiccraft.io/grants" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/grants" />
        <meta property="og:title" content="MagicCraft Grants Program" />
        <meta
          property="og:description"
          content="Request support from the MagicCraft Grants Program. Applications are reviewed case by case, and funding is not guaranteed."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MagicCraft Grants Program" />
        <meta
          name="twitter:description"
          content="Request support from the MagicCraft Grants Program. Applications are reviewed case by case, and funding is not guaranteed."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
        />
      </Helmet>

      <Header />

      <main className="safe-padded flex-1">
        <section className="mx-auto max-w-6xl px-4 py-10 pb-20 sm:px-6 md:py-16 md:pb-28">
          <div className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
            <h1 className="bg-gradient-to-r from-[#98FFF9] to-[#B591F2] bg-clip-text font-serif text-3xl tracking-tight text-transparent md:text-5xl lg:text-6xl">
              MagicCraft Grants
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg">
              Request support for a working game, Web3/AI product, or crypto
              tool in the MagicCraft ecosystem. Projects that integrate $MCRT
              may be prioritized. Every application is reviewed, and funding is
              not guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/25 md:p-8 lg:col-span-2">
              <h2 className="mb-4 text-xl font-semibold">Apply for a Grant</h2>
              <form
                name="grants"
                method="POST"
                action="/.netlify/functions/submit-grants"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-5"
              >
                <input type="hidden" name="name" value="grants" />
                <input type="hidden" name="form-name" value="grants" />
                <input type="hidden" name="page" value="/grants" />
                <input
                  type="hidden"
                  name="subject"
                  value="New MagicCraft Grants submission"
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="grant-team-name"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Team / Company Name
                    </label>
                    <input
                      id="grant-team-name"
                      name="teamName"
                      autoComplete="organization"
                      required
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 outline-none focus:border-[#98FFF9]/60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="grant-email"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Contact Email
                    </label>
                    <input
                      id="grant-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 outline-none focus:border-[#98FFF9]/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="grant-project-name"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Project Name
                    </label>
                    <input
                      id="grant-project-name"
                      name="projectName"
                      required
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="grant-demo-url"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Website or Demo URL
                    </label>
                    <input
                      id="grant-demo-url"
                      type="url"
                      name="url"
                      placeholder="https://"
                      required
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-2 block text-sm text-white/80">
                    Category
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        { key: 'game', label: 'Game' },
                        { key: 'web3-ai', label: 'Web3 / AI' },
                        { key: 'crypto', label: 'Crypto' },
                      ] as { key: Category; label: string }[]
                    ).map(({ key, label }) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setCategory(key)}
                        aria-pressed={category === key}
                        className={`min-h-11 rounded-lg border px-4 py-2 ${category === key ? 'border-[#98FFF9]/70 bg-[#98FFF9]/10' : 'border-white/15 bg-black/30'} text-sm`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="category" value={category} />
                </fieldset>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="grant-amount-usd"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Requested Grant (USD)
                    </label>
                    <input
                      id="grant-amount-usd"
                      type="number"
                      name="amountUsd"
                      min={0}
                      step={100}
                      placeholder="e.g. 10000"
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="grant-amount-mcrt"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Requested Grant in $MCRT
                    </label>
                    <input
                      id="grant-amount-mcrt"
                      type="number"
                      name="amountMcrt"
                      min={0}
                      step={1000}
                      placeholder="e.g. 250000"
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="grant-mcrt-plan"
                      className="mb-1 block text-sm text-white/80"
                    >
                      $MCRT Integration Plan
                    </label>
                    <input
                      id="grant-mcrt-plan"
                      name="mcrtPlan"
                      placeholder="Payments, rewards, pledging, etc."
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="grant-wallet"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Wallet Address (BSC, optional)
                    </label>
                    <input
                      id="grant-wallet"
                      name="wallet"
                      placeholder="0x..."
                      className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="grant-description"
                    className="mb-1 block text-sm text-white/80"
                  >
                    Brief Description
                  </label>
                  <textarea
                    id="grant-description"
                    name="description"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="grant-links"
                    className="mb-1 block text-sm text-white/80"
                  >
                    Links (repo, trailer, pitch deck)
                  </label>
                  <textarea
                    id="grant-links"
                    name="links"
                    rows={3}
                    placeholder="One per line"
                    className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="hasBuild"
                    name="hasBuild"
                    type="checkbox"
                    required
                    className="h-4 w-4 accent-[#98FFF9]"
                  />
                  <label htmlFor="hasBuild" className="text-white/90">
                    We have a working version build/demo
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-[#98FFF9] to-[#B591F2] px-6 py-3 font-semibold text-[#03082F] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(152,255,249,0.3)]"
                  >
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 md:p-8">
              <h3 className="mb-3 text-lg font-semibold">Guidelines</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Must have a working version or playable build</li>
                <li>• Open-source preferred but not required</li>
                <li>• $MCRT integration is prioritized</li>
                <li>• Categories: Game, Web3/AI, Crypto</li>
                <li>
                  • Applications are reviewed case by case; funding is not
                  guaranteed
                </li>
                <li>
                  • If $MCRT funding is approved, settlement uses a BSC wallet
                </li>
              </ul>

              <div className="mt-6 text-sm text-white/70">
                Looking for bounties instead? Visit our{' '}
                <Link className="text-[#98FFF9] underline" to="/bounties">
                  Bounties
                </Link>{' '}
                page.
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
