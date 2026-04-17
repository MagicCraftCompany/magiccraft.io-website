import { describe, it, expect } from 'vitest'
import { LANGUAGES } from '../lib/googleTranslate'

describe('LANGUAGES', () => {
  it('has at least 10 languages', () => {
    expect(LANGUAGES.length).toBeGreaterThanOrEqual(10)
  })

  it('always has English as first entry', () => {
    expect(LANGUAGES[0].code).toBe('en')
  })

  it('every entry has code, name, and flag', () => {
    for (const lang of LANGUAGES) {
      expect(lang.code).toBeTruthy()
      expect(lang.name).toBeTruthy()
      expect(lang.flag).toBeTruthy()
    }
  })
})
