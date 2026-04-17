export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
] as const

export type LangCode = typeof LANGUAGES[number]['code']

/** Set the googtrans cookie so Google Translate persists across page loads. */
export function setGoogTransCookie(langCode: string) {
  if (typeof document === 'undefined') return
  const value = `/en/${langCode || 'en'}`
  const base = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax`
  document.cookie = base
  try {
    if (window.location.hostname.endsWith('magiccraft.io')) {
      document.cookie = `${base};domain=.magiccraft.io`
    }
  } catch { /* intentional: cookie may not support domain attribute on localhost */ }
}

/**
 * Trigger Google Translate to switch to `langCode`.
 * Polls for the GT combo element and dispatches change events.
 * Does NOT reload the page.
 */
export function triggerGoogleTranslate(langCode: string) {
  let tries = 0
  const maxTries = 12
  const intervalMs = 350

  const applyLang = (select: HTMLSelectElement, code: string) => {
    select.value = code
    select.dispatchEvent(new Event('input', { bubbles: true }))
    select.dispatchEvent(new Event('change', { bubbles: true }))
  }

  const tick = () => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
    if (select) {
      if (langCode === 'en') {
        applyLang(select, langCode)
        return
      }
      if (select.value === langCode) {
        applyLang(select, 'en')
        setTimeout(() => applyLang(select, langCode), 50)
        return
      }
      applyLang(select, langCode)
      return
    }
    tries += 1
    if (tries < maxTries) setTimeout(tick, intervalMs)
  }

  tick()
}
