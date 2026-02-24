import { titleKeyMaper } from '@/lib/utils';

type RoadmapCardType = {
  data: {
    quarter: number | 'LIVE';
    year?: number;
    variant: 'default' | 'purple' | 'live';
    goals: {
      card: number;
      features: string[];
    }[];
  };
};

const RoadmapCard = ({ data }: RoadmapCardType) => {
  const isLive = data.quarter === 'LIVE';
  const yearDisplay = data.year ? String(data.year).slice(-2) : '25';
  
  return (
    <div className="min-w-[18rem] snap-center space-y-6">
      <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
        {isLive ? '🟢 LIVE' : `Q${data.quarter} ${yearDisplay}`}
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {data.goals.map((goal, i) => {
          const isDefault = data.variant === 'default';
          const isLiveVariant = data.variant === 'live';
          return (
            <div
              key={i}
              className={`group relative rounded-3xl p-px transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] 
              ${isLiveVariant 
                ? 'bg-gradient-to-b from-[#10B981]/50 via-transparent to-transparent' 
                : isDefault 
                  ? 'bg-gradient-to-b from-[#98FFF9]/40 via-transparent to-transparent' 
                  : 'bg-gradient-to-b from-[#B591F2]/40 via-transparent to-transparent'}`}
            >
              <div
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${
                  isLiveVariant 
                    ? 'from-[#064E3B] to-[#065F46]' 
                    : isDefault 
                      ? 'from-[#3D186D] to-[#2A0D4E]' 
                      : 'from-[#2A0D4E] to-[#57186D]'
                } text-white shadow-xl overflow-hidden`}
              >
                <div className="flex items-center justify-between px-6 py-4 bg-black/20">
                  <span className="text-xs md:text-sm font-semibold tracking-wider text-white/90">
                    {isLiveVariant ? 'LAUNCHED' : titleKeyMaper(i)}
                  </span>
                  <span className="text-[10px] md:text-xs text-white/60">
                    {isLive ? 'Live Now' : `Q${data.quarter} · ${data.year || 2026}`}
                  </span>
                </div>

                <div className="px-6 py-5">
                  {goal.features.map((feature, j) => {
                    return (
                      <div key={j} className={`flex items-start gap-3 py-2 ${j !== 0 ? 'border-t border-white/10' : ''}`}>
                        <div className="pt-1 shrink-0">
                          <span className={`block h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(152,255,249,0.45)] ${
                            isLiveVariant 
                              ? 'bg-gradient-to-br from-[#10B981] to-[#34D399]' 
                              : 'bg-gradient-to-br from-[#98FFF9] to-[#B591F2]'
                          }`} />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-white/90">{feature}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default RoadmapCard;
