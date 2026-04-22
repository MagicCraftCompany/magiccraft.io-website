import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.scrollTo to prevent jsdom 'Not implemented' errors
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });
