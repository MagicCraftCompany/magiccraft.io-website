export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden z-50 pb-[max(env(safe-area-inset-bottom),4px)]">
      <div className="w-full bg-[#0B0F39]/82 backdrop-blur border-t border-white/10 px-2 py-0.5 flex items-center gap-2">
        <a
          href="https://lobby.magiccraft.io/"
          rel="noreferrer noopener"
          className="flex-1 inline-flex items-center justify-center h-10 rounded-md text-[12px] font-semibold text-white bg-white/10 border border-white/20"
        >
          Play Now
        </a>
        <a
          href="https://www.bybit.com/en/trade/spot/MCRT/USDT"
          rel="noreferrer noopener"
          className="flex-1 inline-flex items-center justify-center h-10 rounded-md text-[12px] font-semibold text-[#03082F] bg-gradient-to-b from-[#A9FFF6] to-[#8EECE6] border border-white/20"
        >
          Buy $MCRT
        </a>
      </div>
    </div>
  )
}
