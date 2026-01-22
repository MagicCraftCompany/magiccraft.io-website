import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Clock } from 'lucide-react'

// Bitcoin Icon Component
const BitcoinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z"/>
    <path 
      d="M17.108 11.969c.264-1.773-.85-2.725-2.294-3.361l.469-1.88-1.145-.285-.456 1.831c-.301-.075-.61-.146-.915-.217l.46-1.844-1.146-.285-.469 1.88c-.249-.057-.493-.113-.728-.172l.001-.007-1.579-.394-.304 1.223s.85.195.833.207c.464.116.548.424.534.668l-.534 2.142c.032.008.073.02.119.038l-.12-.03-.748 3.001c-.057.141-.201.352-.526.272.011.016-.833-.208-.833-.208L8.5 16.18l1.493.372c.278.07.55.143.818.212l-.474 1.904 1.145.285.469-1.88c.312.085.615.164.911.235l-.467 1.87 1.146.285.474-1.9c1.95.369 3.417.22 4.035-1.54.498-1.417-.025-2.235-1.047-2.767.744-.172 1.305-.66 1.455-1.668z"
      fill="#fff"
    />
    <path 
      d="M15.424 14.622c-.354 1.42-2.748.653-3.526.46l.629-2.522c.778.194 3.268.578 2.897 2.062zM15.777 11.92c-.322 1.291-2.313.636-2.96.475l.57-2.287c.647.161 2.732.462 2.39 1.812z"
      fill="#fff"
    />
  </svg>
)

// Ethereum Icon Component
const EthereumIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
  </svg>
)

export const CryptoLobbies = () => {
  const handleJoinLobby = (type: 'btc' | 'eth') => {
    window.open(`https://lobby.magiccraft.io/?crypto=${type}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative w-full bg-gradient-to-br from-[#03082F] via-[#060617] to-[#09071a] py-8 md:py-12">
      {/* Top Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-[#11113A]/80 to-[#1a1347]/80 backdrop-blur-sm border border-[#98FFF9]/20 p-4 md:p-6"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#98FFF9]"></div>
              <span className="text-sm font-bold text-[#98FFF9]">NEW!</span>
            </div>
            <span className="text-white">
              Play and win with <span className="text-orange-400 font-bold">BTC</span> & <span className="text-blue-400 font-bold">ETH</span> in our crypto lobbies
            </span>
          </div>
          <button
            onClick={() => window.open('https://lobby.magiccraft.io/', '_blank', 'noopener,noreferrer')}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#98FFF9] to-[#7de6df] px-6 py-2.5 font-bold text-[#03082F] transition-all duration-300 hover:shadow-lg hover:shadow-[#98FFF9]/25"
          >
            <span>Join Crypto Lobbies</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Title Section */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-[#11113A]/50 px-3 py-1 text-xs font-semibold text-[#98FFF9] uppercase tracking-wider border border-[#98FFF9]/30">
                    NEW
                  </span>
                  <BitcoinIcon className="w-4 h-4 text-[#98FFF9]" />
                  <span className="text-sm text-[#98FFF9] font-medium">•</span>
                  <EthereumIcon className="w-4 h-4 text-[#98FFF9]" />
                  <span className="text-sm text-gray-400 uppercase tracking-wide">CRYPTO LOBBIES</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
                  Play with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                    BTC
                  </span>{' '}
                  &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#98FFF9]">
                    ETH
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                  Join exclusive crypto lobbies and compete for Bitcoin and Ethereum rewards. 
                  Stake your crypto, showcase your skills, and win big!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => handleJoinLobby('btc')}
                    className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:from-orange-400 hover:to-yellow-400 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <BitcoinIcon className="w-5 h-5" />
                    <span>Play BTC Lobbies</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleJoinLobby('eth')}
                    className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-[#1a1347] px-8 py-4 font-bold text-white transition-all duration-300 hover:from-blue-400 hover:to-[#11113A] hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <EthereumIcon className="w-5 h-5" />
                    <span>Play ETH Lobbies</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className='h-20'></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1 flex items-center justify-center gap-1">
                    <BitcoinIcon className="w-6 h-6" />
                    0.5+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Daily BTC Prizes</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-[#1a1347]/10 border border-blue-500/20 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 flex items-center justify-center gap-1">
                    <EthereumIcon className="w-6 h-6" />
                    8+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Daily ETH Prizes</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-[#98FFF9]/10 to-[#7de6df]/10 border border-[#98FFF9]/20 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#98FFF9] mb-1">20x</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Max Multiplier</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Active Lobbies</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - Featured Lobbies */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-gradient-to-br from-[#11113A]/80 to-[#1a1347]/80 backdrop-blur-sm border border-[#98FFF9]/20 p-6 shadow-2xl shadow-[#98FFF9]/10 hover:shadow-[#98FFF9]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="h-5 w-5 text-[#98FFF9]" />
                <h3 className="text-xl font-bold text-white">Featured Lobbies</h3>
              </div>

              <div className="space-y-4">
                {/* Bitcoin Champions Lobby */}
                <div className="rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-orange-500/20 p-2">
                        <BitcoinIcon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Bitcoin Champions</h4>
                        <div className="flex items-center gap-1 text-xs text-orange-400">
                          <span>18x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Entry</span>
                      <span className="text-white font-medium">0.001 BTC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Prize Pool</span>
                      <span className="text-orange-400 font-medium">0.018 BTC</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleJoinLobby('btc')}
                    className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 py-2.5 font-bold text-black transition-all duration-300 hover:from-orange-400 hover:to-yellow-400"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span>Join Now</span>
                    </div>
                  </button>
                </div>

                {/* Ethereum Elite Lobby */}
                <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-[#1a1347]/10 border border-blue-500/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-blue-500/20 p-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Ethereum Elite</h4>
                        <div className="flex items-center gap-1 text-xs text-blue-400">
                          <span>14x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Entry</span>
                      <span className="text-white font-medium">0.01 ETH</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Prize Pool</span>
                      <span className="text-blue-400 font-medium">0.14 ETH</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleJoinLobby('eth')}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-[#1a1347] py-2.5 font-bold text-white transition-all duration-300 hover:from-blue-400 hover:to-[#11113A]"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span>Join Now</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#98FFF9]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1a1347]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default CryptoLobbies
