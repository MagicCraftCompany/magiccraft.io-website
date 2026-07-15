import type { ReactNode } from 'react'

type PageBackgroundProps = {
  children: ReactNode
  className?: string
}

/**
 * Shared subpage backdrop that reuses the homepage hero's ambient treatment:
 * dual accent radial glows over the brand navy, plus a faint fading grid.
 * Keeps secondary pages visually consistent with the polished homepage.
 */
export default function PageBackground({
  children,
  className = '',
}: PageBackgroundProps) {
  return (
    <div
      className={`relative isolate min-h-dvh w-full max-w-full overflow-x-hidden bg-[#03082f] text-white ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_12%,rgba(152,255,249,0.12),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(181,145,242,0.15),transparent_33%),linear-gradient(180deg,#02051e_0%,#03082f_46%,#03082f_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />
      {children}
    </div>
  )
}
