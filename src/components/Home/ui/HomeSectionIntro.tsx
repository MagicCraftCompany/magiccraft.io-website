import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type HomeSectionIntroProps = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  accent?: string
  headingId?: string
  children?: ReactNode
}

export default function HomeSectionIntro({
  icon: Icon,
  eyebrow,
  title,
  description,
  accent = '#98FFF9',
  headingId,
  children,
}: HomeSectionIntroProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
      <div className="min-w-0">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{
            borderColor: `${accent}38`,
            backgroundColor: `${accent}0D`,
            color: accent,
          }}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2
          id={headingId}
          className="mt-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]"
        >
          {title}
        </h2>
      </div>

      <div className="min-w-0 lg:pb-1">
        <p className="max-w-2xl text-base leading-7 text-white/[0.68] sm:text-lg sm:leading-8">
          {description}
        </p>
        {children}
      </div>
    </div>
  )
}
