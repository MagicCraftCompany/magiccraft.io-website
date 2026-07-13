import type { RoadmapEntry } from '@/data/roadmapData'

type RoadmapCardProps = {
  data: RoadmapEntry
}

const stageCopy = {
  LIVE: {
    heading: 'Live',
    badge: 'VERIFIED',
    detail: 'Public now',
  },
  IMPROVING: {
    heading: 'Improving',
    badge: 'ACTIVE WORK',
    detail: 'Not complete',
  },
  EXPLORING: {
    heading: 'Exploring',
    badge: 'NO COMMITMENT',
    detail: 'Future direction',
  },
}

const RoadmapCard = ({ data }: RoadmapCardProps) => {
  const copy = stageCopy[data.stage]
  const isLive = data.variant === 'live'
  const isDefault = data.variant === 'default'

  return (
    <div className="min-w-[18rem] snap-center space-y-6">
      <div className="text-center">
        <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text font-serif text-4xl text-transparent drop-shadow-xl">
          {copy.heading}
        </h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
          {data.label}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {data.goals.map((goal) => (
          <article
            key={goal.card}
            className={
              'group relative rounded-3xl p-px transition-all duration-300 hover:-translate-y-1 ' +
              (isLive
                ? 'bg-gradient-to-b from-[#10B981]/50 via-transparent to-transparent'
                : isDefault
                  ? 'bg-gradient-to-b from-[#98FFF9]/40 via-transparent to-transparent'
                  : 'bg-gradient-to-b from-[#B591F2]/40 via-transparent to-transparent')
            }
          >
            <div
              className={
                'overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br text-white shadow-xl ' +
                (isLive
                  ? 'from-[#064E3B] to-[#065F46]'
                  : isDefault
                    ? 'from-[#3D186D] to-[#2A0D4E]'
                    : 'from-[#2A0D4E] to-[#57186D]')
              }
            >
              <div className="flex items-center justify-between gap-3 bg-black/20 px-6 py-4">
                <span className="text-xs font-semibold tracking-wider text-white/90 md:text-sm">
                  {copy.badge}
                </span>
                <span className="text-[10px] text-white/60 md:text-xs">
                  {copy.detail}
                </span>
              </div>

              <div className="px-6 py-5">
                {goal.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={
                      'flex items-start gap-3 py-2 ' +
                      (index ? 'border-t border-white/10' : '')
                    }
                  >
                    <span className="pt-1">
                      <span
                        className={
                          'block h-2.5 w-2.5 rounded-full ' +
                          (isLive
                            ? 'bg-emerald-300'
                            : 'bg-gradient-to-br from-[#98FFF9] to-[#B591F2]')
                        }
                      />
                    </span>
                    <p className="text-sm leading-relaxed text-white/90 md:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default RoadmapCard
