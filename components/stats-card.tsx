"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  label: string
  value: string
  trend?: string
}

export function StatsCard({ icon: Icon, label, value, trend }: StatsCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <Card className="p-4 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <div className="p-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg border border-orange-200">
            <Icon className="h-5 w-5 text-orange-600" />
          </div>
          {trend && (
            <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full border border-green-200">
              {trend}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600 font-medium">{label}</p>
        </div>
      </Card>
    </motion.div>
  )
}
