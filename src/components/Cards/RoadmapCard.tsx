import { titleKeyMaper } from '@/lib/utils';
import righttick from '@/assets/icons/rightcheck.svg';

type RoadmapCardType = {
  data: {
    quarter: number;
    variant: 'default' | 'purple';
    goals: {
      card: number;
      features: string[];
    }[];
  };
};

const RoadmapCard = ({ data }: RoadmapCardType) => {
  const getFeatureIcon = (quarter: number, card: number, feature: string) => {
    if (quarter === 1) {
      return righttick;
    }
    if (quarter === 2) {
      if ((card === 4 && feature !=='Game Type:Free for All') || card === 6 || (card === 5 && feature !== 'Music Update')) {
        return righttick;
      }
    }
    if (quarter === 3 && card === 7 && feature === 'VC investment') {
      return righttick;
    }
    return null;
  };

  return (
    <div className="min-w-[18rem] snap-center space-y-6">
      <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
        Q{data.quarter} 25
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {data.goals.map((goal, i) => {
          const isDefault = data.variant === 'default'
          return (
            <div
              key={i}
              className={`group relative rounded-3xl p-px transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl 
              ${isDefault ? 'bg-gradient-to-b from-[#98FFF9]/40 via-transparent to-transparent' : 'bg-gradient-to-b from-[#B591F2]/40 via-transparent to-transparent'}`}
            >
              <div
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${isDefault ? 'from-[#3D186D] to-[#2A0D4E]' : 'from-[#2A0D4E] to-[#57186D]'} text-white shadow-xl overflow-hidden`}
              >
                <div className="flex items-center justify-between px-6 py-4 bg-black/20">
                  <span className="text-xs md:text-sm font-semibold tracking-wider text-white/90">{titleKeyMaper(i)}</span>
                  <span className="text-[10px] md:text-xs text-white/60">Q{data.quarter} · 2025</span>
                </div>

                <div className="px-6 py-5">
                  {goal.features.map((feature, j) => {
                    const iconPath = getFeatureIcon(data.quarter, goal.card, feature)
                    return (
                      <div key={j} className={`flex items-start gap-3 py-2 ${j !== 0 ? 'border-t border-white/10' : ''}`}>
                        <div className="pt-1 shrink-0">
                          {iconPath ? (
                            <img src={iconPath} alt="" className="w-4 h-4 opacity-80" />
                          ) : (
                            <span className="block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#98FFF9] to-[#B591F2] shadow-[0_0_10px_rgba(152,255,249,0.45)]" />
                          )}
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
