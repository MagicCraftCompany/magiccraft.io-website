import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, TrendingUp } from 'lucide-react'

const CryptoLobbyBanner = () => {

  const handleJoinLobby = () => {
    window.open('https://lobby.magiccraft.io/', '_blank')
  }

  return (
    <div className="relative mx-auto w-11/12 max-w-screen-xl py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] p-6"
      >
        {/* Live indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-[#98FFF9]">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
          <span>LIVE NOW</span>
        </div>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left side - Info */}
          <div className="text-center lg:text-left">
            <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
              🎯 WIN BTC & ETH PRIZES
            </h3>
            <p className="text-gray-300">
              Join crypto lobbies and battle for real Bitcoin and Ethereum rewards
            </p>
          </div>

          {/* Center - Stats */}
          <div className="flex gap-4">
            <div className="rounded-xl bg-black/30 p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-orange-400">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-semibold">24</span>
              </div>
              <div className="text-xs text-gray-400">BTC Lobbies</div>
            </div>
            <div className="rounded-xl bg-black/30 p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-blue-400">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-semibold">31</span>
              </div>
              <div className="text-xs text-gray-400">ETH Lobbies</div>
            </div>
          </div>

          {/* Right side - CTA */}
          <button
            onClick={handleJoinLobby}
            className="group rounded-xl bg-gradient-to-r from-[#98FFF9] to-[#7de6df] px-6 py-3 font-bold text-[#03082F] transition-all duration-300 hover:shadow-lg hover:shadow-[#98FFF9]/25"
          >
            <div className="flex items-center gap-2">
              <span>Join Crypto Lobby</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </div>
          </button>
        </div>

        {/* Background decoration */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-blue-500/10 blur-xl"></div>
      </motion.div>
    </div>
  )
}

export default CryptoLobbyBanner 