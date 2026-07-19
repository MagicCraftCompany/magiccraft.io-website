import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number
  /** Vertical travel distance in px before settling. */
  y?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'header'
}

/**
 * Lightweight scroll-reveal wrapper that matches the homepage motion feel:
 * a soft fade and lift the first time the element enters the viewport.
 * Honors the user's reduced-motion preference.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (reduceMotion || typeof IntersectionObserver === 'undefined') {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
