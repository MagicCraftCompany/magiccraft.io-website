import { describe, expect, it } from 'vitest'
import { newsArticles } from '@/data/newsData'
import { roadmapData } from '@/data/roadmapData'

describe('product status content', () => {
  it('separates verified, improving and exploratory work without stale quarters', () => {
    expect(roadmapData.map((entry) => entry.stage)).toEqual([
      'LIVE',
      'IMPROVING',
      'EXPLORING',
    ])

    const content = JSON.stringify(roadmapData)
    expect(content).not.toMatch(/Q[1-4]|SocialMM|Polybilities/)
    expect(content).toMatch(/working lobby Leaderboard/)
    expect(content).toMatch(/crash-safe Stats fallback/)
    expect(content).toMatch(/MAGAS7 public early-access/)
    expect(content).toMatch(
      /No date, token return, shared account or shared billing/
    )
  })

  it('keeps static news fallbacks dated and aligned to current product truth', () => {
    expect(newsArticles.every((article) => article.dateLabel)).toBe(true)

    const content = JSON.stringify(newsArticles)
    expect(content).not.toMatch(/SocialMM|Polybilities|100K players/)
    expect(content).not.toMatch(/Revenue sharing.*now live/)

    const gameMaker = newsArticles.find((article) =>
      article.title.includes('Game Maker')
    )
    expect(gameMaker?.readMoreLink).toBe(
      'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/'
    )
    expect(gameMaker?.description).toMatch(/remain planned/)
  })
})
