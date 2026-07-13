import { useMemo, useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ChevronDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const officialSources = {
  website: [
    'magiccraft.io',
    'app.magiccraft.io',
    'lobby.magiccraft.io',
    'games.magiccraft.io',
    'docs.magiccraft.io',
  ],
  email: ['contact@magiccraft.io'],
  telegram: ['magiccraftgamechat'],
  twitter: ['magiccraftgame'],
  youtube: ['@magiccraftgame', 'magiccraftgame'],
  discord: ['magiccraftgame'],
} as const

type PlatformKey = keyof typeof officialSources

const normalizeQuery = (platform: PlatformKey, value: string) => {
  const trimmed = value.trim().toLowerCase()
  if (!trimmed) return ''

  if (platform === 'website') {
    return trimmed
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
  }

  if (platform === 'email') {
    return trimmed.replace(/^mailto:/, '')
  }

  if (platform === 'youtube') {
    return trimmed
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/^youtube\.com\//, '')
      .replace(/^@/, '')
      .replace(/^\//, '')
  }

  if (platform === 'discord') {
    return trimmed
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/^discord\.gg\//, '')
      .replace(/^discord\.com\/invite\//, '')
      .replace(/^@/, '')
  }

  return trimmed
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/^x\.com\//, '')
    .replace(/^twitter\.com\//, '')
    .replace(/^t\.me\//, '')
    .replace(/^@/, '')
    .split(/[/?#]/)[0]
}

export default function Verify() {
  const [platform, setPlatform] = useState<PlatformKey>('telegram')
  const [query, setQuery] = useState('')
  const [checkedQuery, setCheckedQuery] = useState('')

  const normalizedQuery = useMemo(
    () => normalizeQuery(platform, checkedQuery),
    [platform, checkedQuery]
  )
  const isOfficial = normalizedQuery
    ? officialSources[platform].includes(normalizedQuery as never)
    : false

  const handleCheck = () => {
    setCheckedQuery(query)
  }

  return (
    <div className="min-h-dvh w-full text-white ">
      <Helmet>
        <title>Verify | MagicCraft Official Links</title>
        <meta
          name="description"
          content="Use MagicCraft Verify to check whether a source officially represents MagicCraft. Verify websites, emails, Telegram IDs, and more."
        />
        <link rel="canonical" href="https://magiccraft.io/verify" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magiccraft.io/verify" />
        <meta
          property="og:title"
          content="Verify | MagicCraft Official Links"
        />
        <meta
          property="og:description"
          content="Check whether a website, email, Telegram ID, or social profile officially represents MagicCraft."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Verify | MagicCraft Official Links"
        />
        <meta
          name="twitter:description"
          content="Check whether a website, email, Telegram ID, or social profile officially represents MagicCraft."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
        />
      </Helmet>
      <Header />

      <main>
        {/* Banner Section */}
        <div className="relative">
          {/* Desktop Image */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
            className="hidden lg:block"
            alt="verify banner"
            loading="lazy"
          />

          {/* Tablet Image */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728036/Image_6_mts4sr.webp"
            className="hidden md:block lg:hidden"
            alt="verify banner"
            loading="lazy"
          />

          {/* Mobile Image */}
          <img
            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728028/Image_5_caa7pl.webp"
            className="block md:hidden"
            alt="verify banner"
            loading="lazy"
          />

          {/* Overlay Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-serif text-4xl font-bold md:text-5xl">
              MagicCraft Verify
            </h1>
          </div>
        </div>

        {/* Verification Form */}
        <div className="container mx-auto -mt-[200px] gap-4 px-4 py-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-[#0F1137]/80 p-6 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Platform Selector */}
              <div className="flex flex-row justify-between">
                <label htmlFor="platform" className="mb-2 block text-sm">
                  Choose the platform:
                </label>

                <div className="relative">
                  <select
                    id="platform"
                    value={platform}
                    onChange={(event) => {
                      setPlatform(event.target.value as PlatformKey)
                      setCheckedQuery('')
                    }}
                    className="w-full appearance-none rounded-4xl border-[1px] border-solid border-[#98FFF9] bg-[#141632] px-8 py-2 text-white"
                  >
                    <option value="website" className="px-2 text-[#98FFF9] ">
                      Website
                    </option>
                    <option value="email" className="px-2 text-[#98FFF9] ">
                      Email
                    </option>
                    <option value="telegram" className="px-2 text-[#98FFF9] ">
                      Telegram
                    </option>
                    <option value="twitter" className="px-2 text-[#98FFF9] ">
                      X / Twitter
                    </option>
                    <option value="youtube" className="px-2 text-[#98FFF9] ">
                      YouTube
                    </option>
                    <option value="discord" className="px-2 text-[#98FFF9] ">
                      Discord
                    </option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform text-[#98FFF9] " />
                </div>
              </div>
              <div className="   bg-gradient-to-r from-transparent via-[#98FFF9]   to-transparent p-px " />

              {/* Query Input */}
              <div>
                <label htmlFor="query" className="mb-2 block text-sm">
                  Entry Query
                </label>
                <div className="flex gap-3">
                  <input
                    id="query"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        handleCheck()
                      }
                    }}
                    placeholder={`Enter ${platform === 'twitter' ? 'X handle' : platform}`}
                    className="flex-1 rounded-md border border-[#1C1F45] bg-[#141632] px-3 py-2 text-white placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={handleCheck}
                    className="rounded-md bg-[#7EE7FC] px-8 py-2 font-medium text-black hover:bg-[#7EE7FC]/90"
                  >
                    Check
                  </button>
                </div>
              </div>
              <div className="   bg-gradient-to-r from-transparent via-[#98FFF9]   to-transparent p-px " />

              {checkedQuery.trim() && (
                <div
                  className={`rounded-xl border px-4 py-3 ${isOfficial ? 'border-emerald-400/40 bg-emerald-500/10' : 'border-amber-400/40 bg-amber-500/10'}`}
                >
                  <p
                    className={`font-semibold ${isOfficial ? 'text-emerald-300' : 'text-amber-300'}`}
                  >
                    {isOfficial
                      ? 'Official MagicCraft source confirmed.'
                      : 'This entry is not in the current official MagicCraft list.'}
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Checked {platform}:{' '}
                    <span className="text-white">{checkedQuery}</span>
                  </p>
                </div>
              )}

              {/* Info Text */}
              <div className="space-y-2 text-center">
                <p className="font-medium">Dear MagicCrafters!</p>
                <p className="text-sm leading-relaxed text-gray-300">
                  Please use MagicCraft Verify to check whether the source
                  officially represents MagicCraft.
                  <br />
                  Check a website domain, email address, Telegram handle, X
                  account, YouTube channel, or Discord invite against this
                  published directory.
                </p>
                <p className="text-xs text-white/50">
                  This tool checks only the supported entries listed above. A
                  result is not an identity guarantee, and no phone-number or
                  WeChat verification is offered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
