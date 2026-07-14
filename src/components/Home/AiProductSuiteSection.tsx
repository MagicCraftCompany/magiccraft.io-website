import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import { AI_PRODUCTS } from '@/data/aiProducts'

const LIVE_PRODUCT_COUNT = AI_PRODUCTS.filter(
  (product) => product.status === 'Live'
).length
const BETA_PRODUCT_COUNT = AI_PRODUCTS.filter(
  (product) => product.status === 'Beta'
).length
const EARLY_ACCESS_PRODUCT_COUNT = AI_PRODUCTS.filter(
  (product) => product.status === 'Early access'
).length

export default function AiProductSuiteSection() {
  return (
    <section
      id="ai-products"
      className="scroll-mt-24 bg-[#03082f] px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#98FFF9]/20 bg-[#98FFF9]/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#98FFF9]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              The MagicCraft AI Suite
            </div>
            <h2 className="mt-4 text-balance font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Six focused AI products. Pick the one built for the job.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Run work with Merlin, make films with Akyn, launch campaigns with
              MagicAds, coordinate marketing agents with MAGAS7, turn meetings
              into action with DragonList, or organize wellness questions with
              DocAI.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-emerald-200">
                {LIVE_PRODUCT_COUNT} live
              </span>
              <span className="rounded-full border border-[#B591F2]/25 bg-[#B591F2]/10 px-3 py-1 text-[#D8C9FF]">
                {BETA_PRODUCT_COUNT} beta
              </span>
              <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-amber-100">
                {EARLY_ACCESS_PRODUCT_COUNT} early access
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {AI_PRODUCTS.map((product) => {
            return (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-5 no-underline transition hover:-translate-y-1 hover:bg-white/[0.06] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] sm:min-h-[300px] sm:p-7"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ backgroundColor: product.accent }}
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border bg-black/25 p-2"
                    style={{
                      borderColor: `${product.accent}55`,
                    }}
                  >
                    <img
                      src={product.navIcon}
                      alt={`${product.name} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="flex flex-col items-end gap-1.5">
                    <span
                      className="rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em]"
                      style={{
                        borderColor: `${product.accent}55`,
                        color: product.accent,
                        backgroundColor: `${product.accent}14`,
                      }}
                    >
                      {product.status}
                    </span>
                  </span>
                </div>

                <p
                  className="mt-5 text-xs font-bold uppercase tracking-[0.16em] sm:mt-7"
                  style={{ color: product.accent }}
                >
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-white/70 sm:mt-4 sm:text-base md:line-clamp-none">
                  {product.description}
                </p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white transition group-hover:text-[#98FFF9] sm:mt-6">
                  {product.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
