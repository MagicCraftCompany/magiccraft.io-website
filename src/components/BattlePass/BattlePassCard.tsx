import { useState, useEffect } from 'react';
import { Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBattlePass } from '@/hooks/useBattlePass';

export default function BattlePassCard() {
  const { battlePassData, loading, error } = useBattlePass();
  const [timeLeft, setTimeLeft] = useState('');
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  useEffect(() => {
    if (battlePassData?.daysRemaining) {
      const timer = setInterval(() => {
        const now = new Date();
        const endDate = new Date(battlePassData.endDate);
        const diff = endDate.getTime() - now.getTime();
        
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          setTimeLeft(`${days} days left`);
        } else {
          setTimeLeft('Ended');
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [battlePassData]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#1A0E2E] via-[#2A1B3D] to-[#1A0E2E] rounded-2xl border border-[#9255E0]/20 overflow-hidden">
        <div className="p-6 animate-pulse">
          <div className="h-8 bg-[#9255E0]/20 rounded mb-4"></div>
          <div className="h-4 bg-[#9255E0]/20 rounded mb-2"></div>
          <div className="h-4 bg-[#9255E0]/20 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error || !battlePassData) {
    return (
      <div className="bg-gradient-to-br from-[#1A0E2E] via-[#2A1B3D] to-[#1A0E2E] rounded-2xl border border-[#9255E0]/20 p-6">
        <div className="text-center text-gray-400">
          <p>BattlePass data unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#1A0E2E] via-[#2A1B3D] to-[#1A0E2E] rounded-2xl border border-[#9255E0]/20 overflow-hidden shadow-2xl">
      {/* Header */}


      {/* Prize Pool Section */}
      <div className="px-6 pb-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#98FFF9] to-[#9255E0] rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-[#98FFF9]" />
            </div>
            
            <span className="text-sm text-gray-300">{timeLeft || `${battlePassData.daysRemaining} days left`}</span>
            </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#98FFF9] to-[#9255E0] bg-clip-text text-transparent">
              {battlePassData.prizeSettings.totalPrizeAmount.toLocaleString()} $MCRT
            </div>
            <div className="text-xs text-gray-400">
              Top {battlePassData.prizeSettings.maxWinners} Players Will Win!
            </div>
          </div>
        </div>
      </div>

      {/* Top Players Section */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#98FFF9]" />
            <span className="text-sm font-bold text-white">TOP {battlePassData.prizeSettings.maxWinners} PLAYERS</span>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPlayerIndex(Math.max(0, currentPlayerIndex - 3))}
              disabled={currentPlayerIndex === 0}
              className="w-6 h-6 rounded-full bg-[#9255E0]/20 hover:bg-[#9255E0]/40 flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3 h-3 text-[#98FFF9]" />
            </button>
            <button 
              onClick={() => setCurrentPlayerIndex(Math.min(battlePassData.prizeSettings.maxWinners - 3, currentPlayerIndex + 3))}
              disabled={currentPlayerIndex + 3 >= battlePassData.prizeSettings.maxWinners}
              className="w-6 h-6 rounded-full bg-[#9255E0]/20 hover:bg-[#9255E0]/40 flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-3 h-3 text-[#98FFF9]" />
            </button>
          </div>
        </div>
        
        {/* Horizontal player cards */}
        <div className="grid grid-cols-3 gap-3">
          {[...Array(3)].map((_, i) => {
            const playerIndex = currentPlayerIndex + i;
            const player = battlePassData.winners && battlePassData.winners[playerIndex] ? 
              battlePassData.winners[playerIndex] : null;
            
            return (
              <div key={playerIndex} className="bg-[#2A1B3D]/50 rounded-lg p-3 border border-[#9255E0]/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#98FFF9] mb-1">
                    #{playerIndex + 1}
                  </div>
                  <div className="text-sm text-white mb-1 truncate">
                    {player?.playerName || "-- No winner yet --"}
                  </div>
                  <div className="text-xs text-gray-400">
                    {player?.finalScore ? `${player.finalScore.toLocaleString()} pts` : '--'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-2">
        <button 
          onClick={() => window.open('https://lobby.magiccraft.io', '_blank')}
          className="w-full bg-gradient-to-r from-[#6B3FA0] to-[#9255E0] hover:from-[#7B4FB0] hover:to-[#A265F0] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          JOIN NOW AND EARN MCRT
        </button>
      </div>
    </div>
  );
}