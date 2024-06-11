import { Minus } from 'lucide-react';
import { titleKeyMaper } from '@/lib/utils';
import check from '@/assets/icons/check.svg';
import triangle from '@/assets/icons/Rectangle 1585.svg';
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
    <div className="min-w-72 snap-center space-y-6">
      <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl">
        Q{data.quarter} 24
      </h3>

      <div className="grid grid-cols-1 gap-8">
        {data.goals.map((goal, i) => {
          const shouldHighlightCard = [1, 2, 3, 6].includes(goal.card);
          return (
            <div
              key={i}
              className={`relative rounded-4xl p-px ${shouldHighlightCard ? 'bg-gradient-to-b from-[#98FFF9] to-transparent' : 'bg-gradient-to-b from-[#B591F2] to-transparent'}`}
            >
              {shouldHighlightCard && (
                <>
                  <img
                    src={check}
                    alt="Checkbox"
                    className="absolute mt-2 left-[16.5em] right-0 transform -translate-x-1/2 rounded-2xl z-10"
                  />
                  <img
                    src={triangle}
                    alt="Triangle"
                    className="absolute right-0 left-[16.6em] transform -translate-x-1/2 rounded-tr-3xl"
                  />
                </>
              )}
              <div
                className={`rounded-4xl space-y-5 bg-gradient-to-r 
              ${data.variant === 'default' ? 'from-[#3D186D] to-[#2A0D4E]' : 'from-[#2A0D4E] to-[#57186D] '}
              `}
              >
                <div className="bg-black/20 px-7 py-5 rounded-3xl">
                  <h3 className="text-center font-serif text-2xl">{titleKeyMaper(i)}</h3>
                </div>
                <div className="space-y-2 px-5 pb-6">
                  {goal.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-[10px]">
                      <div className="shrink-0 py-1">
                        {getFeatureIcon(data.quarter, goal.card, feature) ? (
                          <img src={righttick} alt="Right Check" />
                        ) : (
                          <Minus size={20} className="text-white/50" />
                        )}
                      </div>
                      <div className="text-lg">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapCard;
