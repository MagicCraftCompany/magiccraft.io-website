import { NewsArticle } from '@/data/newsData'
import { ArrowUpRight } from 'lucide-react'


interface NewsCardProps {
  article: NewsArticle
  className?: string
}

export function NewsCard({ article, className = '' }: NewsCardProps) {
  return (
    <a 
      href={article.readMoreLink}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-[#070725] shadow-lg transition-transform hover:scale-[1.02] block ${className}`}
    >
      <div className="relative h-full w-full p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-teal-400">{article.category}</span>
            {article.version && (
              <span className="rounded-full bg-teal-400/20 px-3 py-1 text-xs text-teal-400">
                {article.version}
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{article.title}</h3>
          
          <p className="text-sm text-gray-400">{article.description}</p>
          
          <div className="inline-flex items-center gap-1 text-sm text-teal-400 group-hover:text-teal-300">
            Read more <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/3">
          <div className="relative h-full w-full">
            <img
              src={article.image}
              alt=""
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070725] to-transparent" />
          </div>
        </div>
      </div>
    </a>
  )
}

