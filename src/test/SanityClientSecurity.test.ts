import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('browser Sanity client security', () => {
  it('never reads or configures a Vite-exposed API token', () => {
    const source = readFileSync(
      resolve(process.cwd(), 'src/lib/sanity/client.ts'),
      'utf8'
    )

    expect(source).not.toMatch(/VITE_SANITY_API_TOKEN/)
    expect(source).not.toMatch(/\btoken\s*:/)
    expect(source).toMatch(/useCdn:\s*sanityConfig\.useCdn/)
  })
})
