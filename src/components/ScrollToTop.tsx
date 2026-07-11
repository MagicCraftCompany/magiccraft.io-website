import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!hash && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const targetId = decodeURIComponent(hash.slice(1))
    let attempts = 0
    let retryId: number | undefined

    const scrollToTarget = () => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      // Route chunks render asynchronously, so give the destination time to
      // mount before abandoning a legitimate hash link.
      attempts += 1
      if (attempts <= 20) {
        retryId = window.setTimeout(scrollToTarget, 100)
      }
    }

    scrollToTarget()
    return () => {
      if (retryId !== undefined) window.clearTimeout(retryId)
    }
  }, [pathname, hash])

  return null
}

