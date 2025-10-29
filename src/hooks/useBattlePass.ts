import { useState, useEffect } from 'react';

export type Region = 'europe' | 'asia' | 'america';

export interface RegionConfig {
  id: Region;
  name: string;
}

export const REGIONS: RegionConfig[] = [
  { id: 'europe', name: 'Europe' },
  { id: 'asia', name: 'Asia' },
  { id: 'america', name: 'America' },
];

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
    wonAt?: string;
    finalScore: number;
  }>;
  prizesDistributed: boolean;
  region?: Region;
}

export const useBattlePass = (selectedRegion: Region = 'europe') => {
  const [battlePassData, setBattlePassData] = useState<BattlePassData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBattlePassData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiBaseUrl = '/gameserverapi';
      
      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      const url = apiBaseUrl.startsWith('/gameserverapi')
        ? `${apiBaseUrl}/battlepass/active?region=${encodeURIComponent(selectedRegion)}`
        : `${apiBaseUrl}/battlepass/active`;
      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBattlePassData({ ...data, region: selectedRegion });
    } catch (err) {
      console.error('Error fetching battlepass data:', err);
      setError('Failed to load battlepass data');
      
      if (process.env.NODE_ENV === 'development' && import.meta.env.VITE_USE_MOCK_BATTLEPASS === 'true') {
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
            totalPrizeAmount: 250000,
            maxWinners: 10,
            isPrizeDistributionEnabled: true
          },
          topParticipants: [
            { playerId: "player_1", playerName: "mrsteel", currentScore: 10000, currentRank: 1 },
            { playerId: "player_2", playerName: "CryptoKnight", currentScore: 8500, currentRank: 2 },
            { playerId: "player_3", playerName: "MagicMaster", currentScore: 7200, currentRank: 3 },
            { playerId: "player_4", playerName: "DragonSlayer", currentScore: 6800, currentRank: 4 },
            { playerId: "player_5", playerName: "EpicGamer", currentScore: 5900, currentRank: 5 },
            { playerId: "player_6", playerName: "ProPlayer", currentScore: 5400, currentRank: 6 },
            { playerId: "player_7", playerName: "NightHawk", currentScore: 4800, currentRank: 7 },
            { playerId: "player_8", playerName: "Thunderbolt", currentScore: 4200, currentRank: 8 },
            { playerId: "player_9", playerName: "ShadowNinja", currentScore: 3900, currentRank: 9 },
            { playerId: "player_10", playerName: "IceBreaker", currentScore: 3500, currentRank: 10 }
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
  }, [selectedRegion]); 

  return {
    battlePassData,
    loading,
    error,
    refetch: fetchBattlePassData
  };
};
