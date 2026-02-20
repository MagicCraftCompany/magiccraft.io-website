"use client"

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { LobbyChart } from "@/components/ui/lobbyChart"
import { SmallChart } from "@/components/ui/small-chart"
import { StatRow, StatsCard } from "@/components/ui/stats"
import { Helmet } from 'react-helmet-async'


// Sample data - replace with real data
const sampleData = {
  itemUpdates: {
    usersWithZeroFinished: 6280,
    totalUsers: 9470,
    totalPledges: "2697880.7100000023",
  },
  userStatistics: {
    usersWithZeroFinished: 6280,
    usersWith12Finished: 778,
    usersWith3PlusFinished: 2412,
    usersWithZeroFinishedSomeUnfinished: 582,
    percentageWith1Plus: 33.7,
  },
  lobbyStatistics: {
    finishedLobbies: 14299,
    failedLobbies: 986,
    autoLobbiesFinished: 7285,
    totalPlayersFinished: 109970,
    totalPlayersFailed: 329,
    finishedLobbiesWithPledge: 3013,
    averagePledgePaid: 895.4,
    averagePlayersFailed: 0.3,
    averagePlayersFinished: 7.7,
    finishedLobbiesWithPassword: 2876,
    averagePrivateLobbiesPledges: 452,
    privateLobbiesPledgesSum: 47050,
  },
  otherStatistics: {
    unverifiedUsers: 883,
    totalWombatUsers: 166,
    totalMarketingOptIn: 6859,
    percentageUnverified: 9.3,
    activeUsers24h: 256,
  },
}

export default function Dashboard() {

  return (
    <div className="min-h-dvh w-full text-white ">
      <Helmet>
        <title>Dashboard | MagicCraft Statistics</title>
        <meta name="description" content="View live statistics, lobby data, user pledges, and ecosystem analytics for MagicCraft." />
      </Helmet>
      <Header/>

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728187/Image_4_a6xltr.webp"
          className="hidden lg:block"
          alt="verify banner"
          loading="lazy"
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728036/Image_6_mts4sr.webp"
          className="hidden md:block lg:hidden"
          alt="verify banner"
          loading="lazy"
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732728028/Image_5_caa7pl.webp"
          className="block md:hidden"
          alt="verify banner"
          loading="lazy"
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Dashboard
          </h1>
        </div>
      </div>
    <div className="min-h-screen  p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-2xl font-bold text-white">TOTALS</h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <StatsCard title="ITEM UPDATES">
            <StatRow
              label="Users with 0 Finished Games:"
              value={sampleData.itemUpdates.usersWithZeroFinished}
            />
            <StatRow
              label="Total Users:"
              value={sampleData.itemUpdates.totalUsers}
            />
            <StatRow
              label="Total Pledges Pledged:"
              value={sampleData.itemUpdates.totalPledges}
            />
          </StatsCard>
          <StatsCard title="LOBBY STATISTICS">
            <StatRow
              label="Finished Lobbies:"
              value={sampleData.lobbyStatistics.finishedLobbies}
            />
            <StatRow
              label="Failed Lobbies:"
              value={sampleData.lobbyStatistics.failedLobbies}
            />
            <StatRow
              label="Auto Lobbies Finished:"
              value={sampleData.lobbyStatistics.autoLobbiesFinished}
            />
          </StatsCard>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <StatsCard title="USER STATISTICS" className="lg:col-span-1">
            <StatRow
              label="Users with 0 Finished Games:"
              value={sampleData.userStatistics.usersWithZeroFinished}
            />
            <StatRow
              label="Users with 1-2 Finished Games:"
              value={sampleData.userStatistics.usersWith12Finished}
            />
            <StatRow
              label="Users with 3+ Finished Games:"
              value={sampleData.userStatistics.usersWith3PlusFinished}
            />
          </StatsCard>
          <StatsCard title="OTHER STATISTICS" className="lg:col-span-2">
            <StatRow
              label="Unverified Users:"
              value={sampleData.otherStatistics.unverifiedUsers}
            />
            <StatRow
              label="Total Wombat Users:"
              value={sampleData.otherStatistics.totalWombatUsers}
            />
            <StatRow
              label="Total Marketing Opt-In Users:"
              value={sampleData.otherStatistics.totalMarketingOptIn}
            />
          </StatsCard>
        </div>
        <h1 className="text-2xl font-bold text-white">LOBBY STATS</h1>
        <div className="rounded-lg bg-navy-800 p-6">
          <h2 className="mb-4 text-xl font-bold text-white">LOBBIES</h2>
          <LobbyChart
            data={[
              {
                date: "Mar 5",
                created: 102,
                finished: 79,
                auto: 47,
                private: 32,
                privateWithPledges: 5,
              },
              // Add more data points here
            ]}
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <SmallChart
            title="USERS"
            color="#60a5fa"
            data={[
              { date: "Mar 5", value: 50 },
              // Add more data points here
            ]}
          />
          <SmallChart
            title="PLEDGES"
            color="#06b6d4"
            data={[
              { date: "Mar 5", value: 10000 },
              // Add more data points here
            ]}
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

