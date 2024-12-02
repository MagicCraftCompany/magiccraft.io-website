interface StatsCardProps {
    title: string
    children: React.ReactNode
    className?: string
  }
  
  export function StatsCard({ title, children, className }: StatsCardProps) {
    return (
      <div className={`rounded-lg bg-navy-800 p-6 ${className}`}>
        <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
        <div className="space-y-3">{children}</div>
      </div>
    )
  }
  
  interface StatRowProps {
    label: string
    value: string | number
    className?: string
  }
  
  export function StatRow({ label, value, className }: StatRowProps) {
    return (
      <div className={`flex justify-between items-center ${className}`}>
        <span className="text-cyan-400">{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
    )
  }
  
  