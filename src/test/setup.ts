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
