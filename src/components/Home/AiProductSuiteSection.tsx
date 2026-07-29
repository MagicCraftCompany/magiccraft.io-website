import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { AI_PRODUCTS } from '@/data/aiProducts'
import { homeSurfaceClass } from './homeStyles'
import HomeSectionIntro from './ui/HomeSectionIntro'

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
      aria-labelledby="ai-products-heading"
      className="mc-home-section scroll-mt-24 bg-[#03082f] px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <HomeSectionIntro
          icon={Sparkles}
          eyebrow="The MagicCraft AI Suite"
          title="AI for the work in front of you."
          description="Run work with Merlin, make films with Akyn, launch campaigns with MagicAds, coordinate marketing with MAGAS7, turn meetings into action with DragonList, or organize wellness questions with DocAI. Each opens as its own product with its own account and controls."
          headingId="ai-products-heading"
        >
          <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-emerald-200">
              {LIVE_PRODUCT_COUNT} live
            </span>
            <span className="rounded-full border border-[#B591F2]/25 bg-[#B591F2]/10 px-3 py-1.5 text-[#D8C9FF]">
              {BETA_PRODUCT_COUNT} beta
            </span>
            <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-amber-100">
              {EARLY_ACCESS_PRODUCT_COUNT} early access
            </span>
          </div>
        </HomeSectionIntro>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {AI_PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${product.cta}. Opens ${product.name} as a separate product in a new tab.`}
              className={`${homeSurfaceClass} group relative flex min-h-[260px] flex-col overflow-hidden rounded-[26px] p-5 no-underline transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98FFF9] motion-reduce:transform-none motion-reduce:transition-none sm:p-6`}
            >
              <span
                className="absolute inset-x-0 top-0 h-px"
                style={{ backgroundColor: product.accent }}
              />

              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border bg-black/20 p-2"
                  style={{ borderColor: `${product.accent}45` }}
                >
                  <img
                    src={product.navIcon}
                    alt={`${product.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span
                  className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    borderColor: `${product.accent}45`,
                    color: product.accent,
                    backgroundColor: `${product.accent}12`,
                  }}
                >
                  {product.status}
                </span>
              </div>

              <p
                className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: product.accent }}
              >
                {product.category}
              </p>
              <h3 className="mt-2 font-sans text-[28px] font-semibold leading-none tracking-[-0.035em] text-white">
                {product.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/[0.65]">
                {product.description}
              </p>

              {product.safetyNote ? (
                <p className="mt-4 flex items-start gap-2 border-t border-white/[0.08] pt-4 text-xs leading-5 text-white/[0.48]">
                  <ShieldCheck
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    style={{ color: product.accent }}
                    aria-hidden="true"
                  />
                  <span className="line-clamp-2">{product.safetyNote}</span>
                </p>
              ) : null}

              <span className="mt-4 flex items-center justify-between gap-3 text-sm font-semibold text-white">
                <span>{product.cta}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white/[0.48]">
                  Separate product
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
