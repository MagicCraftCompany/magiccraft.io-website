'use client'

import { newsArticles } from '@/data/newsData'
import { useState } from 'react'
import { NewsCard } from './NewsCard'


type FilterType = 'All' | 'News' | 'Patch Notes'

export function NewsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')

  const filteredArticles = newsArticles.filter(article => 
    activeFilter === 'All' ? true : article.type === activeFilter
  )

  return (
    <section className="w-full bg-gradient-to-b from-[#070725] to-[#0a0a2e] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
            LATEST NEWS
          </h2>
          
          <div className="inline-flex items-center rounded-full bg-[#070725]/50 p-1">
            {(['All', 'News', 'Patch Notes'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2 text-sm transition-colors ${
                  activeFilter === filter
                    ? 'bg-teal-400 text-[#070725]'
                    : 'text-white hover:text-teal-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              className={
                index === 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

