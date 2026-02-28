export default function AIIntegrationSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#050317] via-[#0a0524] to-[#03082f] py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFB649]/5 to-[#B591F2]/5"></div>
      <div className="relative z-10 mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFB649] via-[#B591F2] to-[#98FFF9] bg-clip-text text-transparent mb-4">
            AI-POWERED ECOSYSTEM
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            $MCRT powers in-game AI and the MagicCraft AI product suite, led by Akyn and Merlin.
          </p>
      </div>
        
        {/* External AI Products */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white/80 mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#98FFF9] to-transparent"></span>
            AI Product Suite
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Akyn */}
            <a href="https://akyn.pro" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#98FFF9]/50 hover:shadow-[0_0_20px_rgba(152,255,249,0.15)] hover:-translate-y-1 transition-all duration-300 group no-underline hover:no-underline min-h-[190px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://akyn.pro&size=128"
                  alt="Akyn"
                  className="w-12 h-12 rounded-md object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = '/favicon.ico' }}
                />
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#98FFF9] transition-colors">Akyn</h4>
                  <span className="text-xs text-[#98FFF9] font-medium">akyn.pro</span>
          </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                AI shorts & video maker for social content.
              </p>
            </a>

            {/* MerlinAI */}
            <a href="https://merlintheai.com" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#B591F2]/50 hover:shadow-[0_0_20px_rgba(181,145,242,0.15)] hover:-translate-y-1 transition-all duration-300 group no-underline hover:no-underline min-h-[190px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://merlintheai.com&size=128"
                  alt="Merlin AI"
                  className="w-12 h-12 rounded-md object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/favicon.ico'
                  }}
                />
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#B591F2] transition-colors">Merlin AI</h4>
                  <span className="text-xs text-[#98FFF9] font-medium">merlintheai.com</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                AI assistant with voice, image gen, investing tools, and smart routing.
              </p>
            </a>

            {/* DocAI */}
            <a href="https://docai.live" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#10B981]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 group no-underline hover:no-underline min-h-[190px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://docai.live&size=128"
                  alt="DocAI"
                  className="w-12 h-12 rounded-md object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = '/favicon.ico' }}
                />
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">DocAI</h4>
                  <span className="text-xs text-[#98FFF9] font-medium">docai.live</span>
            </div>
          </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                24/7 AI wellness assistant with personalized guidance.
              </p>
            </a>

            {/* Polybilities */}
            <a href="https://polybilities.com" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#FFB649]/50 hover:shadow-[0_0_20px_rgba(255,182,73,0.15)] hover:-translate-y-1 transition-all duration-300 group no-underline hover:no-underline min-h-[190px]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://polybilities.com&size=128"
                  alt="Polybilities"
                  className="w-12 h-12 rounded-md object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = '/favicon.ico' }}
                />
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#FFB649] transition-colors">Polybilities</h4>
                  <span className="text-xs text-[#98FFF9] font-medium">polybilities.com</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Prediction markets with AI odds, real-time updates, and $MCRT rewards.
              </p>
            </a>
          </div>
        </div>

        {/* MagicAds — Featured Product */}
        <div className="mt-8 mb-6">
          <a href="https://magicads.dev" target="_blank" rel="noreferrer noopener" className="block group no-underline hover:no-underline">
            <div className="relative rounded-3xl overflow-hidden border border-[#FFB649]/30 hover:border-[#FFB649]/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,182,73,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d00]/90 via-[#0f0824]/95 to-[#0a0524]/95"></div>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FFB649] via-[#FF8C00] to-[#FFB649]"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFB649]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB649]/20 to-[#FF8C00]/10 border border-[#FFB649]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-[#FFB649]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 21h8" />
                          <path d="M12 17v4" />
                          <path d="M7 8h2m2 0h2m2 0h2" />
                          <path d="M7 11h10" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-[#FFB649] transition-colors duration-300">MagicAds</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFB649]/20 text-[#FFB649] font-bold border border-[#FFB649]/30 uppercase tracking-wider">New</span>
                        </div>
                        <span className="text-sm text-[#FFB649]/80 font-medium">magicads.dev</span>
                      </div>
                    </div>

                    <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-3">
                      The AI-native cross-banner ad network for the modern web.
                    </p>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
                      MagicAds is a plug-and-play advertising platform that lets <span className="text-white font-semibold">hosts monetize</span> any website or app with intelligent, context-aware banner ads, and gives <span className="text-white font-semibold">advertisers</span> instant access to a growing cross-site network. Powered by AI targeting and real-time bidding, campaigns optimize themselves automatically for maximum ROI.
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                      <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10">
                        <svg className="w-4 h-4 mt-0.5 text-[#FFB649] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        <div>
                          <span className="text-sm font-semibold text-white">AI-Optimized Targeting</span>
                          <p className="text-xs text-white/60 mt-0.5">Smart placement and audience matching via API</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10">
                        <svg className="w-4 h-4 mt-0.5 text-[#FFB649] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        <div>
                          <span className="text-sm font-semibold text-white">Cross-Banner Network</span>
                          <p className="text-xs text-white/60 mt-0.5">One integration, reach across the entire network</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10">
                        <svg className="w-4 h-4 mt-0.5 text-[#98FFF9] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        <div>
                          <span className="text-sm font-semibold text-white">$MCRT Payments</span>
                          <p className="text-xs text-white/60 mt-0.5">Pay for ads with $MCRT or earn $MCRT as a host</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10">
                        <svg className="w-4 h-4 mt-0.5 text-[#B591F2] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        <div>
                          <span className="text-sm font-semibold text-white">Stripe Integration</span>
                          <p className="text-xs text-white/60 mt-0.5">Fiat on-ramp for advertisers who prefer card payments</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 lg:flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 px-6 py-5 rounded-2xl bg-gradient-to-br from-[#FFB649]/10 to-[#FF8C00]/5 border border-[#FFB649]/20">
                      <span className="text-xs uppercase tracking-wider text-[#FFB649]/80 font-bold">For Hosts</span>
                      <p className="text-sm text-white/80 text-center max-w-[200px]">Embed a single script, start earning from day one.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-6 py-5 rounded-2xl bg-gradient-to-br from-[#B591F2]/10 to-[#7B68EE]/5 border border-[#B591F2]/20">
                      <span className="text-xs uppercase tracking-wider text-[#B591F2]/80 font-bold">For Advertisers</span>
                      <p className="text-sm text-white/80 text-center max-w-[200px]">Launch AI-targeted campaigns in minutes, not days.</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFB649] group-hover:gap-3 transition-all duration-300">
                      Explore MagicAds <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB649]"></span>
                    Easy API Integration
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#98FFF9]"></span>
                    Real-Time Analytics Dashboard
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B591F2]"></span>
                    $MCRT + Stripe Dual Settlement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    No Minimum Traffic Required
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Internal AI Operations */}
          <div className="rounded-2xl border border-[#98FFF9]/25 bg-gradient-to-br from-[#0b1138]/85 via-[#151042]/80 to-[#1f124a]/80 p-5 md:p-6 hover:border-[#98FFF9]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(152,255,249,0.1)] hover:-translate-y-1">
            <div className="flex flex-col gap-2 sm:gap-3 h-full">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#98FFF9]/80 font-bold">
                Internal AI Operations
              </p>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                OpenClaw Enterprise-Grade AI Agents
              </h4>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Our team runs <span className="text-white font-semibold">merlintheai.com</span> and
                <span className="text-white font-semibold"> Merlinbot</span> directly in internal chats and team groups as AI teammates.
                <br className="hidden sm:block" />
                They coordinate operations, schedule meetings across multiple chats, route tasks, and keep execution moving.
              </p>
            </div>
          </div>

          {/* Game Development */}
          <div className="rounded-2xl border border-[#B591F2]/25 bg-gradient-to-br from-[#12082b]/85 via-[#1a0b38]/80 to-[#220d47]/80 p-5 md:p-6 hover:border-[#B591F2]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(181,145,242,0.1)] hover:-translate-y-1">
            <div className="flex flex-col gap-2 sm:gap-3 h-full">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#B591F2]/80 font-bold">
                Game Development
              </p>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Next-Gen AI on a Proven Foundation
              </h4>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                MagicCraft is being built with the latest AI models on top of the old <span className="text-white font-semibold">$10m source (original MagicCraft game) code in Unity</span>. 
                <br className="hidden sm:block" />
                Our dev team ships daily using <span className="text-white font-semibold">Cursor, Codex, and Claude Code</span> with the latest models: <span className="text-white font-semibold">ChatGPT 5.3, Opus 4.6, and Gemini 3.1 Pro</span>.
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