import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.scrollTo to prevent jsdom 'Not implemented' errors
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true })

// jsdom does not implement matchMedia; Header and other components rely on it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Framer Motion's whileInView support relies on IntersectionObserver, which
// jsdom does not provide. Keep this as a permanent global rather than a Vitest
// stub so tests that call vi.unstubAllGlobals() cannot remove it mid-suite.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin = '0px'
  readonly thresholds: ReadonlyArray<number> = [0]

  disconnect(): void {}
  observe(_target: Element): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
  unobserve(_target: Element): void {}
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  configurable: true,
  writable: true,
  value: MockIntersectionObserver,
})
