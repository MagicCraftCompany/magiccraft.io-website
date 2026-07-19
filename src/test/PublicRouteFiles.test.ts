import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const projectFile = (path: string) =>
  readFileSync(resolve(process.cwd(), path), 'utf8')

describe('public route files', () => {
  it('publishes the canonical MCRT and lobby routes in the sitemap', () => {
    const sitemap = projectFile('public/sitemap.xml')

    expect(sitemap).toContain('<loc>https://magiccraft.io/buy-mcrt</loc>')
    expect(sitemap).toContain('<loc>https://magiccraft.io/lobbies</loc>')
    expect(sitemap).not.toContain('<loc>https://magiccraft.io/pricing</loc>')
  })

  it('redirects every legacy MCRT alias to the canonical buyer route', () => {
    const config = projectFile('netlify.toml')

    for (const alias of ['/pricing', '/buy', '/get-mcrt']) {
      expect(config).toContain(`from = "${alias}"\n  to = "/buy-mcrt"`)
    }
  })

  it('generates a crawler shell for the canonical buyer route', () => {
    const generator = projectFile('scripts/generate-route-shells.mjs')

    for (const path of ['buy-mcrt', 'news', 'faq', 'grants']) {
      expect(generator).toContain(`path: '${path}'`)
    }
    expect(generator).toContain("join(distRoot, '404.html')")
  })

  it('lets Helmet own the base canonical and returns a real 404 shell', () => {
    const baseHtml = projectFile('index.html')
    const config = projectFile('netlify.toml')
    const generator = projectFile('scripts/generate-route-shells.mjs')

    expect(baseHtml).toContain(
      '<link rel="canonical" href="https://magiccraft.io/" data-rh="true" />'
    )
    expect(baseHtml).toContain('<h1 data-static-page-title>')
    expect(baseHtml).toContain('<p data-static-page-description>')
    expect(generator).toContain("'static page heading'")
    expect(config).toContain('from = "/*"\n  to = "/404.html"\n  status = 404')
  })

  it('uses one top-banner element without an empty reserved wrapper', () => {
    const baseHtml = projectFile('index.html')

    expect(baseHtml).not.toContain('magicads-slot')
    expect(baseHtml.match(/class="magicads"/g)).toHaveLength(1)
    expect(baseHtml).toContain(
      "frame.title = 'Sponsored content from MagicAds'"
    )
  })

  it('preloads the real hero artwork and display font', () => {
    const baseHtml = projectFile('index.html')

    expect(baseHtml).toContain('href="/gameplay/magiccraft-triple-kill.webp"')
    expect(baseHtml).toContain(
      'href="/src/assets/fonts/colus/Colus-Regular.ttf"'
    )
  })
})
