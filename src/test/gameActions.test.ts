import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('getDeviceDetails', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('detects desktop correctly when UA has no mobile markers', async () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/120',
      writable: true,
      configurable: true,
    })
    const { getDeviceDetails } = await import('../lib/gameActions')
    const result = getDeviceDetails()
    expect(result.isIOS).toBe(false)
    expect(result.isAndroid).toBe(false)
    expect(result.isMobile).toBe(false)
  })

  it('detects iOS correctly', async () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      writable: true,
      configurable: true,
    })
    const { getDeviceDetails } = await import('../lib/gameActions')
    const result = getDeviceDetails()
    expect(result.isIOS).toBe(true)
    expect(result.isMobile).toBe(true)
  })

  it('detects Android correctly', async () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Linux; Android 14; Pixel 8)',
      writable: true,
      configurable: true,
    })
    const { getDeviceDetails } = await import('../lib/gameActions')
    const result = getDeviceDetails()
    expect(result.isAndroid).toBe(true)
    expect(result.isMobile).toBe(true)
  })
})
