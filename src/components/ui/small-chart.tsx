"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface SmallChartProps {
  data: Array<{
    date: string
    value: number
  }>
  color: string
  title: string
}

export function SmallChart({ data, color, title }: SmallChartProps) {
  return (
    <div className="rounded-lg bg-navy-800 p-6">
      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

