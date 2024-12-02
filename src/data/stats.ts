export interface ItemUpdates {
    usersWithZeroFinished: number
    totalUsers: number
    totalPledges: string
  }
  
  export interface UserStatistics {
    usersWithZeroFinished: number
    usersWith12Finished: number
    usersWith3PlusFinished: number
    usersWithZeroFinishedSomeUnfinished: number
    percentageWith1Plus: number
  }
  
  export interface LobbyStatistics {
    finishedLobbies: number
    failedLobbies: number
    autoLobbiesFinished: number
    totalPlayersFinished: number
    totalPlayersFailed: number
    finishedLobbiesWithPledge: number
    averagePledgePaid: number
    averagePlayersFailed: number
    averagePlayersFinished: number
    finishedLobbiesWithPassword: number
    averagePrivateLobbiesPledges: number
    privateLobbiesPledgesSum: number
  }
  
  export interface OtherStatistics {
    unverifiedUsers: number
    totalWombatUsers: number
    totalMarketingOptIn: number
    percentageUnverified: number
    activeUsers24h: number
  }
  
  