"use client"

import { motion } from "framer-motion"

const generateHeatmapData = () => {
  const data = []
  const today = new Date()

  for (let i = 364; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    const contributions = Math.floor(Math.random() * 5)
    data.push({
      date: date.toISOString().split("T")[0],
      contributions,
    })
  }

  return data
}

const getIntensityClass = (contributions: number) => {
  if (contributions === 0) return "bg-gray-800"
  if (contributions === 1) return "bg-green-900"
  if (contributions === 2) return "bg-green-700"
  if (contributions === 3) return "bg-green-500"
  return "bg-green-400"
}

export function GitHubHeatmap() {
  const data = generateHeatmapData()
  const weeks = []

  // Group data by weeks
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          {data.reduce((sum, day) => sum + day.contributions, 0)} contributions in the last year
        </p>
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <span>Less</span>
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getIntensityClass(level)}`} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      <div className="flex space-x-1 overflow-x-auto">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col space-y-1">
            {week.map((day, dayIndex) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-sm ${getIntensityClass(day.contributions)} cursor-pointer`}
                title={`${day.contributions} contributions on ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
