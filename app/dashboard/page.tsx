"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessagingSidebar } from "@/components/messaging-sidebar"
import {
  Heart,
  MessageCircle,
  Users,
  Zap,
  Settings,
  Bell,
  Filter,
  MapPin,
  Camera,
  TrendingUp,
  Target,
  Award,
  Sparkles,
  Coffee,
} from "lucide-react"
import Link from "next/link"

const matches = [
  {
    id: 1,
    name: "Sarah Chen",
    age: 28,
    avatar: "/placeholder.svg?height=100&width=100&text=SC",
    role: "Mindfulness Coach",
    company: "Zen Growth",
    lastMessage: "Your meditation progress is inspiring! 🧘‍♀️",
    timestamp: "2m ago",
    unread: true,
    growthGoal: "Mindfulness",
    compatibility: 94,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    age: 32,
    avatar: "/placeholder.svg?height=100&width=100&text=MJ",
    role: "Life Coach",
    company: "Elevate Academy",
    lastMessage: "Ready for tomorrow's workout challenge?",
    timestamp: "1h ago",
    unread: false,
    growthGoal: "Fitness",
    compatibility: 89,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    age: 26,
    avatar: "/placeholder.svg?height=100&width=100&text=ER",
    role: "Art Therapist",
    company: "Creative Souls",
    lastMessage: "The art session was transformative! ✨",
    timestamp: "3h ago",
    unread: true,
    growthGoal: "Creativity",
    compatibility: 92,
  },
]

const recentActivity = [
  {
    id: 1,
    type: "match",
    user: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40&text=DK",
    action: "matched with you",
    timestamp: "5m ago",
    growthGoal: "Leadership",
  },
  {
    id: 2,
    type: "achievement",
    user: "You",
    avatar: "/placeholder.svg?height=40&width=40&text=You",
    action: "completed 30-day mindfulness challenge",
    timestamp: "15m ago",
    growthGoal: "Mindfulness",
  },
  {
    id: 3,
    type: "message",
    user: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40&text=PP",
    action: "sent you an encouragement",
    timestamp: "1h ago",
    growthGoal: "Confidence",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("matches")
  const [isMessagingOpen, setIsMessagingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <motion.div className="relative z-50 p-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.02 }}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                GrowUp
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-yellow-400 font-bold">DASHBOARD</span>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full p-3 relative">
                <Bell className="h-6 w-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={() => setIsMessagingOpen(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full p-3 shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full p-3">
                <Settings className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Profile Header */}
      <motion.div
        className="px-6 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-pink-300/50 shadow-2xl">
                <AvatarImage src="/placeholder.svg?height=96&width=96&text=You" />
                <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl">
                  You
                </AvatarFallback>
              </Avatar>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-0 shadow-lg"
                >
                  <Camera className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-3xl font-bold text-white">Alex Johnson</h2>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1">Growing</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">Level 7</Badge>
              </div>
              <p className="text-xl text-white/90 mb-3">Personal Growth Enthusiast</p>
              <div className="flex items-center space-x-6 text-sm text-white/70 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-yellow-400" />
                  <span>5 Active Goals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span>12 Achievements</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Mindfulness", "Fitness", "Leadership", "Creativity"].map((goal) => (
                  <Badge
                    key={goal}
                    className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30"
                  >
                    {goal}
                  </Badge>
                ))}
              </div>
            </div>

            <Link href="/swipe">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Discover Growth Partners
                </Button>
              </motion.div>
            </Link>
          </div>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="px-6 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Heart, label: "Connections", value: "127", color: "from-pink-500 to-red-500", trend: "+12%" },
            {
              icon: Users,
              label: "Growth Partners",
              value: "43",
              color: "from-purple-500 to-indigo-500",
              trend: "+8%",
            },
            {
              icon: MessageCircle,
              label: "Conversations",
              value: "18",
              color: "from-blue-500 to-cyan-500",
              trend: "+23%",
            },
            { icon: Zap, label: "Achievements", value: "12", color: "from-yellow-500 to-orange-500", trend: "+5%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg text-center hover:bg-white/15 transition-all duration-300">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                >
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 mb-2">{stat.label}</div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">{stat.trend}</Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="px-6 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-white/20">
            {[
              { key: "matches", label: "Growth Partners", icon: Heart },
              { key: "messages", label: "Messages", icon: MessageCircle },
              { key: "activity", label: "Activity", icon: Bell },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-6 px-6 font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-b-2 border-pink-400"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === "matches" && (
                <motion.div
                  key="matches"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Your Growth Partners</h3>
                    <Button
                      variant="outline"
                      className="border-pink-300/30 text-pink-300 hover:bg-pink-500/20 rounded-xl bg-transparent"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Filter by Goals
                    </Button>
                  </div>

                  {matches.map((match, index) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, rotateY: 2 }}
                      className="group"
                    >
                      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Avatar className="h-16 w-16 border-2 border-pink-300/30 shadow-lg">
                              <AvatarImage src={match.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                                {match.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-indigo-900 flex items-center justify-center">
                              <span className="text-xs font-bold text-white">{match.compatibility}</span>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-bold text-white text-lg">
                                {match.name}, {match.age}
                              </h4>
                              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                                {match.company}
                              </Badge>
                              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                                {match.compatibility}% Match
                              </Badge>
                            </div>
                            <p className="text-white/80 mb-2">{match.role}</p>
                            <p className="text-sm text-white/60 mb-3">{match.lastMessage}</p>
                            <div className="flex items-center justify-between">
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30">
                                {match.growthGoal}
                              </Badge>
                              <span className="text-xs text-white/50">{match.timestamp}</span>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl"
                              >
                                <Heart className="h-4 w-4 mr-1" />
                                Connect
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/20 rounded-xl bg-transparent"
                                onClick={() => setIsMessagingOpen(true)}
                              >
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Message
                              </Button>
                            </motion.div>
                          </div>

                          {match.unread && <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "messages" && (
                <motion.div
                  key="messages"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  >
                    <MessageCircle className="h-20 w-20 text-white/30 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Open Your Growth Conversations</h3>
                  <p className="text-white/70 mb-8 max-w-md mx-auto">
                    Connect with your growth partners and start meaningful conversations that inspire transformation.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setIsMessagingOpen(true)}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg"
                    >
                      <Coffee className="h-5 w-5 mr-2" />
                      Open Messages
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "activity" && (
                <motion.div
                  key="activity"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Recent Growth Activity</h3>

                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12 border-2 border-white/20">
                            <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                              {activity.user === "You"
                                ? "You"
                                : activity.user
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <p className="text-white">
                              <span className="font-semibold">{activity.user}</span> {activity.action}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30 text-xs">
                                {activity.growthGoal}
                              </Badge>
                              <span className="text-sm text-white/50">{activity.timestamp}</span>
                            </div>
                          </div>

                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                            {activity.type === "match" && <Heart className="h-5 w-5 text-pink-400" />}
                            {activity.type === "achievement" && <Award className="h-5 w-5 text-yellow-400" />}
                            {activity.type === "message" && <MessageCircle className="h-5 w-5 text-blue-400" />}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl border-t border-white/20 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex justify-around items-center max-w-md mx-auto">
          {[
            { href: "/dashboard", icon: TrendingUp, label: "Dashboard", active: true },
            { href: "/swipe", icon: Heart, label: "Discover", active: false },
            { href: "/community", icon: Users, label: "Community", active: false },
            { href: "/goals", icon: Target, label: "Goals", active: false },
            { href: "/profile", icon: Settings, label: "Profile", active: false },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
                <Button
                  variant="ghost"
                  className={`flex flex-col items-center space-y-1 p-3 rounded-xl ${
                    item.active
                      ? "text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Button>
                {item.active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Messaging Sidebar */}
      <MessagingSidebar isOpen={isMessagingOpen} onClose={() => setIsMessagingOpen(false)} />
    </div>
  )
}
