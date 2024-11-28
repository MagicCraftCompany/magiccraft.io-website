import { useState,  } from "react";
import LeaderboardTable from "./leaderboardDataTable";
// import axios from "../../../api/axios";
// import LeaderboardTable from "./leaderboardDataTable";
// import { API_URL, AUTH_TOKEN_LOCAL_STORAGE_KEY } from "@/utils/constants";

export type PlayerData = {
  id: number;
  rank: number;
  username: string;
  score: number;
  mcrt_won: number;
  no_of_wins: number;
  no_of_matches: number;
  created_at: Date;
  updatedAt: Date;
};

export type LeaderboardDataType = {
  data: PlayerData[];
};

interface LeaderboardProps {
  gameId: number; // Now we pass gameId instead of gameTitle
}

export default function Leaderboard({  }: LeaderboardProps) {
  const [data, ] = useState<PlayerData[]>([]);
  const [loading, ] = useState(true);
  const [currentLeaderboard, setCurrentLeaderboard] = useState("week");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
  //       axios.defaults.baseURL = API_URL;
  //       axios.defaults.headers.common["Authorization"] = token ? token : null;

  //       // Fetch leaderboard data based on gameId and the selected period
  //       const response = await axios.get<PlayerData[]>(
  //         `/solo-games/leaderboard/${gameId}?period=${currentLeaderboard}`
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [gameId, currentLeaderboard]);

  return (
    <div className="w-full py-14 md:py-10">
      <div className="space-y-8 pb-14 md:pb-16">
        <div className="grid place-items-center">
          <div className="relative inline-block rounded-md">
            <select
              className="rounded-[1em] bg-[#98FFF9] text-[#000000] px-6 py-2 font-bold"
              name="leaderboard"
              value={currentLeaderboard}
              onChange={(e) => setCurrentLeaderboard(e.target.value)}
              id="leaderboard-select"
            >
              <option value="all">All Time</option>
              <option value="month">Monthly</option>
              <option value="week">Weekly</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {/* SVG path if needed */}
              </svg>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-[#9255E000] via-[#9255E0] to-[#9255E000]"></div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="rounded-2xl bg-[#0D071A] p-5">
          <LeaderboardTable data={data} />
        </div>
      )}
    </div>
  );
}
