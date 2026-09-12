import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { AI_PRODUCTS } from '@/data/aiProducts'
import { trackCta } from '@/lib/analytics'
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
          description="Choose a focused tool for your next task. Each opens as its own product with its own account and controls."
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

        <div className="mt-8 grid overflow-hidden border-y border-white/10 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {AI_PRODUCTS.map((product, index) => {
            const dividerClasses = [
              index === AI_PRODUCTS.length - 1
                ? 'border-b-0'
                : 'border-b border-white/10',
              index % 2 === 0
                ? 'md:border-r md:border-white/10'
                : 'md:border-r-0',
              index < 4 ? 'md:border-b' : 'md:border-b-0',
              index % 3 < 2
                ? 'lg:border-r lg:border-white/10'
                : 'lg:border-r-0',
              index < 3 ? 'lg:border-b' : 'lg:border-b-0',
            ].join(' ')

            return (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() =>
                  trackCta({
                    cta: 'open_ai_product',
                    location: 'ai_product_suite',
                    label: product.id,
                  })
                }
                aria-label={`${product.cta}. Opens ${product.name} as a separate product in a new tab.`}
                className={`group relative flex flex-col px-1 py-6 no-underline transition-colors duration-200 hover:bg-white/[0.025] hover:no-underline focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#98FFF9] motion-reduce:transition-none sm:px-5 lg:px-6 ${dividerClasses}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[13px] border bg-black/20 p-2"
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
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans text-xl font-semibold leading-tight tracking-[-0.03em] text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-white/60">
                      {product.category}
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{
                      borderColor: `${product.accent}45`,
                      color: product.accent,
                      backgroundColor: `${product.accent}12`,
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-white/[0.68]">
                  {product.description}
                </p>

                {product.safetyNote ? (
                  <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-white/60">
                    <ShieldCheck
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      style={{ color: product.accent }}
                      aria-hidden="true"
                    />
                    <span>{product.safetyNote}</span>
                  </p>
                ) : null}

                <span
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold"
                  style={{ color: product.accent }}
                >
                  {product.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
