import { describe, expect, it } from 'vitest'
import { newsArticles } from '@/data/newsData'
import { roadmapData } from '@/data/roadmapData'
import { AI_PRODUCTS } from '@/data/aiProducts'

describe('product status content', () => {
  it('keeps the AI catalog focused on customer-facing product stages', () => {
    expect(
      AI_PRODUCTS.filter((product) => product.status === 'Live')
    ).toHaveLength(4)
    expect(
      AI_PRODUCTS.filter((product) => product.status === 'Beta')
    ).toHaveLength(1)
    expect(
      AI_PRODUCTS.filter((product) => product.status === 'Early access')
    ).toHaveLength(1)

    for (const product of AI_PRODUCTS) {
      expect('health' in product).toBe(false)
      expect('healthNote' in product).toBe(false)
      expect(product.navIcon).toMatch(/^\/ai-logos\//)
      expect(product.navIcon).not.toMatch(/icon-stats|icon-community/)
    }
  })

  it('separates verified, improving and exploratory work without stale quarters', () => {
    expect(roadmapData.map((entry) => entry.stage)).toEqual([
      'LIVE',
      'IMPROVING',
      'EXPLORING',
    ])

    const content = JSON.stringify(roadmapData)
    expect(content).not.toMatch(/Q[1-4]|SocialMM|Polybilities/)
    expect(content).toMatch(/resilient leaderboard and game-stat experiences/)
    expect(content).toMatch(/More Game Maker export and sharing workflows/)
    expect(content).toMatch(/MAGAS7 public early-access/)
    expect(content).not.toMatch(/validation|crash-safe|source-backed/i)
  })

  it('keeps static news fallbacks dated and aligned to current product truth', () => {
    expect(newsArticles.every((article) => article.dateLabel)).toBe(true)

    const content = JSON.stringify(newsArticles)
    expect(content).not.toMatch(/SocialMM|Polybilities|100K players/)
    expect(content).not.toMatch(/Revenue sharing.*now live/)
    expect(content).not.toMatch(/Verified 13 Jul 2026/)

    const gameMaker = newsArticles.find((article) =>
      article.title.includes('Game Maker')
    )
    expect(gameMaker?.readMoreLink).toBe(
      'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/'
    )
    expect(gameMaker?.description).toMatch(/remain planned/)
  })
})
