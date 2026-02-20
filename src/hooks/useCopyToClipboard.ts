import { useState, useCallback } from 'react'

export function useCopyToClipboard(timeout = 1800) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), timeout)
    } catch {
      setCopied(false)
    }
  }, [timeout])

  return { copied, copy }
}
