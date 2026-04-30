type ProductLogoProps = {
  src: string
  alt: string
  className?: string
}

const ProductLogo = ({ src, alt, className = '' }: ProductLogoProps) => (
  <img
    src={src}
    alt={alt}
    className={`h-full w-full object-contain ${className}`}
    loading="lazy"
    decoding="async"
    referrerPolicy="no-referrer"
  />
)

const aiProducts = [
  {
    name: 'Akyn',
    url: 'https://akyn.pro',
    domain: 'akyn.pro',
    logo: 'https://akyn.pro/logo.svg',
    logoClass: 'p-1.5 bg-[#120d18]',
    color: '#B591F2',
    tag: 'Video',
    description:
      'AI film production for scripts, reusable characters, scene generation, editing, and exports. Premium creator plans give $MCRT another product payment path.',
  },
  {
    name: 'Merlin AI',
    url: 'https://merlintheai.com',
    domain: 'merlintheai.com',
    logo: '/merlin-logo-official.svg',
    logoClass: 'p-1 bg-[#0d1a2e]',
    color: '#98FFF9',
    tag: 'Assistant',
    description:
      'Multi-persona AI with chat, voice, image generation, video generation, translation, market tools, and WhatsApp, Telegram, and Discord reach.',
  },
  {
    name: 'DocAI',
    url: 'https://docai.live',
    domain: 'docai.live',
    logo: 'https://docai.live/logotext-main.png',
    logoClass: 'p-1.5 bg-[#0d2e1a]',
    color: '#10B981',
    tag: 'Wellness',
    description:
      'AI wellness assistant for health questions, uploads, reports, symptom context, and personalized guidance, with premium plans in the product model.',
  },
  {
    name: 'Polybilities',
    url: 'https://polybilities.com',
    domain: 'polybilities.com',
    logo: 'https://polybilities.com/polybilities-logo.png',
    logoClass: 'p-1.5 bg-[#2e1a0d]',
    color: '#FFB649',
    tag: 'Markets',
    description:
      'Esports prediction market powered by MagicCraft, designed as another place where game-native users can move into tokenized outcomes.',
  },
  {
    name: 'SocialMM',
    url: 'https://socialmm.ai',
    domain: 'socialmm.ai',
    logo: 'https://socialmm.ai/favicon.ico',
    logoClass: 'p-2 bg-[#16152f]',
    color: '#60A5FA',
    tag: 'Growth',
    description:
      'AI social media autopilot for brand preferences, content generation, scheduling, and analytics across major social platforms.',
  },
  {
    name: 'AI Studio',
    url: 'https://x.com/MagicCraftGame',
    domain: 'MagicCraft X',
    logo: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp',
    logoClass: 'p-1.5 bg-[#10143a]',
    color: '#F472B6',
    tag: 'Testing',
    description:
      'Recent MagicCraft X updates point to AI generation credits and MCRT payment testing, connecting earned gameplay value with creative tools.',
  },
]

export default function AIIntegrationSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#050317] via-[#0a0524] to-[#03082f] py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFB649]/5 to-[#B591F2]/5"></div>
      <div className="relative z-10 mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
            AI products that make $MCRT useful beyond the arena
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl">
            The token is being positioned as a payment and reward rail across
            the MagicCraft game, MCRTPay, MagicAds, and a growing AI suite built
            for creators, operators, and communities.
          </p>
        </div>

        {/* External AI Products */}
        <div className="mb-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white/80 sm:text-xl">
            <span className="h-[2px] w-8 bg-gradient-to-r from-[#98FFF9] to-transparent"></span>
            AI Product Suite
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {aiProducts.map(
              ({
                name,
                url,
                domain,
                logo,
                logoClass,
                color,
                tag,
                description,
              }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card-glass group min-h-[205px] rounded-xl border border-white/10 bg-white/[0.02] p-5 no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:no-underline"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
                      <ProductLogo
                        src={logo}
                        alt={`${name} logo`}
                        className={logoClass}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-xl font-bold text-white transition-colors">
                          {name}
                        </h4>
                        <span
                          className="rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            borderColor: `${color}55`,
                            color,
                            backgroundColor: `${color}14`,
                          }}
                        >
                          {tag}
                        </span>
                      </div>
                      <span className="text-xs font-medium" style={{ color }}>
                        {domain}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {description}
                  </p>
                </a>
              )
            )}
          </div>
        </div>

        {/* MagicAds Featured Product */}
        <div className="mb-6 mt-8">
          <a
            href="https://magicads.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="group block no-underline hover:no-underline"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#FFB649]/30 transition-all duration-500 hover:-translate-y-1 hover:border-[#FFB649]/60 hover:shadow-[0_0_60px_rgba(255,182,73,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d00]/90 via-[#0f0824]/95 to-[#0a0524]/95"></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FFB649] via-[#FF8C00] to-[#FFB649]"></div>
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#FFB649]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-10">
                  <div className="min-w-0 flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-[#FFB649]/30 transition-transform duration-300 group-hover:scale-110">
                        <ProductLogo
                          src="https://magicads.dev/magicads-logo.svg"
                          alt="MagicAds logo"
                          className="bg-[#1f1200] p-2"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#FFB649] sm:text-3xl md:text-4xl">
                            MagicAds
                          </h3>
                          <span className="rounded-full border border-[#FFB649]/30 bg-[#FFB649]/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#FFB649]">
                            New
                          </span>
                        </div>
                        <span className="text-sm font-medium text-[#FFB649]/80">
                          magicads.dev
                        </span>
                      </div>
                    </div>

                    <p className="mb-3 text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
                      The AI-native ad network for websites and mobile apps.
                    </p>
                    <p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                      MagicAds lets{' '}
                      <span className="font-semibold text-white">
                        hosts monetize
                      </span>{' '}
                      websites and apps with intelligent banners, while{' '}
                      <span className="font-semibold text-white">
                        advertisers
                      </span>{' '}
                      can launch campaigns across the network. AI handles
                      creative, targeting, placement, and optimization.
                    </p>

                    <div className="mt-5 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFB649]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <div>
                          <span className="text-sm font-semibold text-white">
                            AI-Optimized Targeting
                          </span>
                          <p className="mt-0.5 text-xs text-white/60">
                            Smart placement and audience matching via API
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFB649]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <div>
                          <span className="text-sm font-semibold text-white">
                            Cross-Banner Network
                          </span>
                          <p className="mt-0.5 text-xs text-white/60">
                            One integration, reach across the entire network
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#98FFF9]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <div>
                          <span className="text-sm font-semibold text-white">
                            $MCRT Payments
                          </span>
                          <p className="mt-0.5 text-xs text-white/60">
                            Pay for campaigns or receive host payouts in
                            ecosystem rails
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#B591F2]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <div>
                          <span className="text-sm font-semibold text-white">
                            Stripe Integration
                          </span>
                          <p className="mt-0.5 text-xs text-white/60">
                            Fiat on-ramp for advertisers who prefer card
                            payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 lg:flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-[#FFB649]/20 bg-gradient-to-br from-[#FFB649]/10 to-[#FF8C00]/5 px-6 py-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FFB649]/80">
                        For Hosts
                      </span>
                      <p className="max-w-[200px] text-center text-sm text-white/80">
                        Embed a single script, start earning from day one.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-[#B591F2]/20 bg-gradient-to-br from-[#B591F2]/10 to-[#7B68EE]/5 px-6 py-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B591F2]/80">
                        For Advertisers
                      </span>
                      <p className="max-w-[200px] text-center text-sm text-white/80">
                        Launch AI-targeted campaigns in minutes, not days.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFB649] transition-all duration-300 group-hover:gap-3">
                      Explore MagicAds <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB649]"></span>
                    Easy API Integration
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#98FFF9]"></span>
                    Real-Time Analytics Dashboard
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B591F2]"></span>
                    $MCRT + Stripe Dual Settlement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]"></span>
                    No Minimum Traffic Required
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Internal AI Operations */}
          <div className="rounded-2xl border border-[#98FFF9]/25 bg-gradient-to-br from-[#0b1138]/85 via-[#151042]/80 to-[#1f124a]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#98FFF9]/40 hover:shadow-[0_0_20px_rgba(152,255,249,0.1)] md:p-6">
            <div className="flex h-full flex-col gap-2 sm:gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#98FFF9]/80 sm:text-xs">
                Internal AI Operations
              </p>
              <h4 className="text-lg font-bold text-white sm:text-xl">
                OpenClaw Enterprise-Grade AI Agents
              </h4>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                Our team runs{' '}
                <span className="font-semibold text-white">
                  merlintheai.com
                </span>{' '}
                and
                <span className="font-semibold text-white">
                  {' '}
                  Merlinbot
                </span>{' '}
                directly in internal chats and team groups as AI teammates.
                <br className="hidden sm:block" />
                They coordinate operations, schedule meetings across multiple
                chats, route tasks, and keep execution moving.
              </p>
            </div>
          </div>

          {/* Game Development */}
          <div className="rounded-2xl border border-[#B591F2]/25 bg-gradient-to-br from-[#12082b]/85 via-[#1a0b38]/80 to-[#220d47]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B591F2]/40 hover:shadow-[0_0_20px_rgba(181,145,242,0.1)] md:p-6">
            <div className="flex h-full flex-col gap-2 sm:gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B591F2]/80 sm:text-xs">
                Game Development
              </p>
              <h4 className="text-lg font-bold text-white sm:text-xl">
                Next-Gen AI on a Proven Foundation
              </h4>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                MagicCraft is being built with AI-assisted workflows on top of
                the established{' '}
                <span className="font-semibold text-white">
                  Unity game foundation
                </span>
                .
                <br className="hidden sm:block" />
                The product direction combines live game systems, creator tools,
                and payment infrastructure instead of treating AI as a detached
                feature.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white/60">
          Powered by $MCRT • AI + Crypto since 2021
        </div>
      </div>
    </section>
  )
}
