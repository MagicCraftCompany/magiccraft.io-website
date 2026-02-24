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
            <a href="https://www.akyn.pro" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#98FFF9]/50 transition-all group no-underline hover:no-underline min-h-[190px]">
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
            <a href="https://merlintheai.com" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#B591F2]/50 transition-all group no-underline hover:no-underline min-h-[190px]">
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
            <a href="https://docai.live" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#10B981]/50 transition-all group no-underline hover:no-underline min-h-[190px]">
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
            <a href="https://polybilities.com" target="_blank" rel="noreferrer noopener" className="card-glass p-5 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#FFB649]/50 transition-all group no-underline hover:no-underline min-h-[190px]">
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
                These agents help coordinate operations, schedule meetings automatically across multiple chats,
                route tasks, and keep execution moving.
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
                All our devs are non-stop coding using <span className="text-white font-semibold">Cursor, Codex, or Claude Code</span> with the latest models: <span className="text-white font-semibold">ChatGPT 5.3, Opus 4.6, and Gemini 3.1 Pro</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-white/60">
          Powered by $MCRT • AI + Crypto since 2021
        </div>
      </div>
    </section>
  )
}