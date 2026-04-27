"use client"

import { useMemo } from "react"

const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
const DAYS = ["Mon", "Wed", "Fri"]

function generateContributions() {
  const contributions: number[][] = []
  for (let week = 0; week < 40; week++) {
    const weekData: number[] = []
    for (let day = 0; day < 7; day++) {
      const random = Math.random()
      if (random < 0.3) weekData.push(0)
      else if (random < 0.5) weekData.push(1)
      else if (random < 0.7) weekData.push(2)
      else if (random < 0.9) weekData.push(3)
      else weekData.push(4)
    }
    contributions.push(weekData)
  }
  return contributions
}

const levelColors = [
  "bg-secondary",
  "bg-emerald-900/50",
  "bg-emerald-700/60",
  "bg-emerald-600/70",
  "bg-emerald-500",
]

export function ContributionsGrid() {
  const contributions = useMemo(() => generateContributions(), [])

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Contributions</h2>
      
      <div className="overflow-x-auto">
        <div className="inline-block">
          <div className="flex gap-1 text-xs text-muted-foreground mb-1 ml-8">
            {MONTHS.map((month) => (
              <span key={month} className="w-[52px]">{month}</span>
            ))}
          </div>
          
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 text-xs text-muted-foreground justify-around py-1">
              {DAYS.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            
            <div className="flex gap-[3px]">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((level, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-[10px] h-[10px] rounded-[2px] ${levelColors[level]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground justify-end">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {levelColors.map((color, i) => (
                <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${color}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground">
        Contributions of <span className="text-foreground">@ignaciobiran</span> on GitHub.
      </p>
    </section>
  )
}
