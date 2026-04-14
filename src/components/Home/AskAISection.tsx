const q = encodeURIComponent("tell me about MagicCraft ($MCRT) crypto game and its AI ecosystem")

const AIs = [
  {
    name: "Ask ChatGPT",
    href: `https://chat.openai.com/?q=${q}`,
    color: "#10a37f",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372 2.02-1.164a.08.08 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.677zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.993l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: "Ask Claude",
    href: `https://claude.ai/new?q=${q}`,
    color: "#cc785c",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.999 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.626 0 11.999 0M7.67 5.474h2.583l2.349 5.967 2.349-5.967H17.5l-3.773 8.875 1.262 3.177H12.4l-.775-2.025-3.775-10.027z"/>
      </svg>
    ),
  },
  {
    name: "Ask Gemini",
    href: `https://gemini.google.com/app?prompt=${q}`,
    color: "#4285f4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 24A14.232 14.232 0 0 1 0 12 14.232 14.232 0 0 1 12 0a14.232 14.232 0 0 1 12 12 14.232 14.232 0 0 1-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zm0 19.5C7.03 21 3 16.97 3 12S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9zm0-16.5c-4.14 0-7.5 3.36-7.5 7.5S7.86 19.5 12 19.5 19.5 16.14 19.5 12 16.14 4.5 12 4.5z"/>
      </svg>
    ),
  },
]

export default function AskAISection() {
  return (
    <section className="w-full border-t border-white/5 bg-gradient-to-b from-[#050317] to-[#03082f] py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            Still not sure about MagicCraft?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Let ChatGPT, Claude, or Gemini do the thinking for you.<br />
            Click a button and see what your favorite AI says about $MCRT.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AIs.map((ai) => (
              <a
                key={ai.name}
                href={ai.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
                style={{ color: ai.color }}
              >
                {ai.icon}
                <span className="text-white">{ai.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
