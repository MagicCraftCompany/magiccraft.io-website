import { useState, useEffect } from 'react';

interface BattlePassData {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  daysRemaining: number;
  progressPercentage: number;
  prizeSettings: {
    totalPrizeAmount: number;
    maxWinners: number;
    isPrizeDistributionEnabled: boolean;
  };
  topParticipants: Array<{
    playerId?: string;
    playerName: string;
    currentScore: number;
    currentRank?: number;
  }>;
  winners: Array<{
    playerId: string;
    playerName: string;
    finalRank: number;
    prizeAmount: number;
    wonAt: string;
    finalScore: number;
  }>;
  prizesDistributed: boolean;
}

export const useBattlePass = () => {
  const [battlePassData, setBattlePassData] = useState<BattlePassData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBattlePassData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiBaseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://prod-gameserver.magiccraft.io:8903'
        : (process.env.REACT_APP_GAMESERVER_API_URL || '/gameserverapi');
      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (!apiBaseUrl.startsWith('/gameserverapi')) {
        headers['X-API-Key'] = process.env.REACT_APP_GAMESERVER_API_KEY || ''
      }
      const response = await fetch(`${apiBaseUrl}/battlepass/active`, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBattlePassData(data);
    } catch (err) {
      console.error('Error fetching battlepass data:', err);
      setError('Failed to load battlepass data');
      
      if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_USE_MOCK_BATTLEPASS === 'true') {
        console.warn('Using mock battlepass data for development');
        setBattlePassData({
          id: "battlepass_season_1",
          name: "MAGICCRAFT BATTLEPASS",
          description: "The 90-Day Challenge Has Begun! Stay at the top of the leaderboard to claim rewards and collect MCRT!",
          startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
          endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
          isActive: true,
          daysRemaining: 60,
          progressPercentage: 33.3,
          prizeSettings: {
            totalPrizeAmount: 500000,
            maxWinners: 10,
            isPrizeDistributionEnabled: true
          },
          topParticipants: [
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 1 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 2 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 3 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 4 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 5 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 6 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 7 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 8 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 9 },
            { playerId: undefined, playerName: "-- No winner yet --", currentScore: 0, currentRank: 10 }
          ],
          winners: [],
          prizesDistributed: false
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBattlePassData();
    
    const interval = setInterval(fetchBattlePassData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    battlePassData,
    loading,
    error,
    refetch: fetchBattlePassData
  };
};
