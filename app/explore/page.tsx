"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, UserPlus, Search, Filter, Star, MapPin } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

const posts = [
  {
    id: 1,
    type: "profile",
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=50&width=50",
      tagline: "Frontend Developer",
      location: "London, UK",
      skills: ["React", "TypeScript", "Design"],
      githubStars: 567,
      mutualConnections: 3,
    },
    content: "Looking for a design-minded developer to collaborate on a new SaaS project. DM me if interested!",
    timestamp: "2h ago",
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    type: "project",
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=50&width=50",
      tagline: "Full-Stack Engineer",
      location: "Seoul, Korea",
      skills: ["Node.js", "React", "AWS"],
      githubStars: 892,
      mutualConnections: 7,
    },
    content:
      "Just launched my open-source project management tool! Built with Next.js and Supabase. Would love feedback from the community 🚀",
    timestamp: "4h ago",
    likes: 28,
    comments: 12,
  },
  {
    id: 3,
    type: "idea",
    user: {
      name: "Sofia Rodriguez",
      avatar: "/placeholder.svg?height=50&width=50",
      tagline: "AI/ML Engineer",
      location: "Barcelona, Spain",
      skills: ["Python", "TensorFlow", "Data Science"],
      githubStars: 1234,
      mutualConnections: 2,
    },
    content:
      "Idea: AI-powered code review assistant that learns from your coding style. Anyone interested in building this together?",
    timestamp: "6h ago",
    likes: 45,
    comments: 18,
  },
]

const filters = ["All", "Active Now", "React", "Python", "AI/ML", "Mobile", "Web3"]

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Explore</h1>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search developers, projects, ideas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap ${
                  activeFilter === filter ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700 hover:bg-gray-800"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
              {/* User Info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {post.user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{post.user.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {post.user.tagline}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {post.user.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-400" />
                        {post.user.githubStars}
                      </div>
                      {post.user.mutualConnections > 0 && <span>{post.user.mutualConnections} mutual connections</span>}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{post.timestamp}</span>
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-4">{post.content}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.user.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-400">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{post.likes}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{post.comments}</span>
                  </motion.button>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-500/20 text-green-400 hover:bg-green-500/10 bg-transparent"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
