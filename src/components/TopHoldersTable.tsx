"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, ChevronDown, Copy } from 'lucide-react'

interface Holder {
  rank: string
  movement?: {
    type: "up" | "down"
    value: number
  }
  walletAddress: string
  amountUSDT: number
  amountMCRT: number
  percentage: number
}

const initialHolders: Holder[] = [
  {
    rank: "#001",
    movement: { type: "up", value: 2 },
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#002",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#003",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#004",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#005",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#006",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#007",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#008",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#009",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#010",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },
  {
    rank: "#011",
    walletAddress: "0xe03629571a6cc91c5c69758f310d9341a2932d53",
    amountUSDT: 26530164,
    amountMCRT: 3316270382,
    percentage: 20,
  },

  // ... add more holders with similar structure
]

export default function HoldersTable() {
  const [holders] = useState<Holder[]>(initialHolders)
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // clipboard API may fail silently in some browsers
    }
  }

  return (
    <div className="w-full rounded-xl bg-[#0a0b1e] p-4 overflow-x-auto  ">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left ">
          <th className="p-2 text-sm font-normal text-purple-300"></th>

            <th className="p-2 text-sm font-normal text-purple-300">Rank</th>
            <th className="p-2 text-sm font-normal text-purple-300">Wallet Address</th>
            <th className="p-2 text-right text-sm font-normal text-purple-300">Amount of MCRT in USDT</th>
            <th className="p-2 text-right text-sm font-normal text-purple-300">Amount of MCRT</th>
            <th className="p-2 text-right text-sm font-normal text-purple-300">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {holders.map((holder) => (
            <tr
              key={holder.rank}
              className=" transition-colors "
            >
               <td className="p-2">
                <div className="flex items-center gap-2 font-medium text-white  ">
                  {holder.movement && (
                    <span className={holder.movement.type === "up" ? "text-green-400 flex  flex-row" : "text-red-400 flexflex-row"}>
                      {holder.movement.type === "up" ? <ArrowUp className="h-4 w-4 mt-1" /> : <ArrowDown className="h-4 w-4 mt-1" />}
                      {holder.movement.value}
                    </span>
                  )}
                </div>
              </td>
              
              <td className="p-2">
                <div className="flex items-center gap-2 font-medium text-white  ">
                 
                  {holder.rank}
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2 text-white">
                  <span className="font-mono">{holder.walletAddress}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 hover:bg-white/10"
                    onClick={() => copyToClipboard(holder.walletAddress)}
                  >
                    <Copy className="h-4 w-4 text-purple-300" />
                  </Button>
                </div>
              </td>
              <td className="p-2 text-right font-medium text-white">
                {formatNumber(holder.amountUSDT)}
              </td>
              <td className="p-2 text-right font-medium text-white">
                <div className="flex items-center justify-end gap-2">
                  <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1722867433/MCRT_shydrd.webp" className="h-5 w-5 rounded-full " />
                  {formatNumber(holder.amountMCRT)}
                </div>
              </td>
              <td className="p-2 text-right font-medium text-white">
                {holder.percentage}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <ChevronDown className="mr-2 h-4 w-4" />
          Load next 10 holders
        </Button>
      </div>
    </div>
  )
}

