import React from "react"
import { LeaderboardDataType } from "./leaderboard"

export default function LeaderboardTable(props: LeaderboardDataType) {
  const { data } = props

  return (
    <div className="w-full rounded-2xl">
      <table className="w-full text-left text-sm">
        <tbody>
          {data && data.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <tr
                className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 text-left text-xs sm:text-sm font-normal odd:bg-darkBlue-300/30 dark:text-primary-300 md:gap-4 md:px-7 md:py-5 md:odd:bg-transparent"
              >
                <TableCell label="Rank" value={index + 1 > 9 ? `#0${index + 1}` : `#00${index + 1}`} />
                <TableCell label="User name" value={item?.user.username} />
                <TableCell label="Score" value={item.score} />
                <TableCell label="No. of wins" value="---" />
                <TableCell label="No. of matches" value="--" />
              </tr>
              {index !== data.length - 1 && (
                <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#9255E0] to-transparent"></div>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface TableCellProps {
  label: string
  value: string | number
}

function TableCell({ label, value }: TableCellProps) {
  return (
    <th scope="col" className="flex flex-row justify-between items-center md:flex-col md:items-start text-[#C09AFF]">
      <span className="md:mb-2">{label}</span>
      <span className="text-white text-base md:text-lg">{value}</span>
    </th>
  )
}