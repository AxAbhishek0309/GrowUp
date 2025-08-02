"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Star, Trophy, Calendar, MapPin, LinkIcon, Settings, Users, Code, BarChart3 } from "lucide-react"
import { GitHubHeatmap } from "@/components/github-heatmap"
import { StatsCard } from "@/components/stats-card"
import Link from "next/link"

const skills = ["React", "TypeScript", "Node.js", "Python", "AI/ML", "GraphQL", "Docker", "AWS"]
const projects = [
  { name: "DevLink Platform", stars: 234, language: "TypeScript" },
  { name: "AI Code Assistant", stars: 156, language: "Python" },
  { name: "React Component Library", stars: 89, language: "JavaScript" },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold">
            DevLink
          </Link>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>

        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Card className="p-8 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <Avatar className="h-32 w-32 border-4 border-blue-500/20">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-green-500 h-6 w-6 rounded-full border-2 border-gray-900"></div>
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">John Developer</h1>
                    <p className="text-xl text-blue-400 mb-2">Full-Stack Engineer & AI Enthusiast</p>
                    <p className="text-gray-400 max-w-2xl">
                      Passionate about building scalable web applications and exploring the intersection of AI and
                      software development. Always looking for interesting projects and collaborations.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined March 2023
                  </div>
                  <div className="flex items-center text-gray-400">
                    <LinkIcon className="h-4 w-4 mr-1" />
                    johndeveloper.dev
                  </div>
                </div>

                {/* Connected Accounts */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="outline" className="border-green-500/20 text-green-400">
                    <Github className="h-3 w-3 mr-1" />
                    GitHub Connected
                  </Badge>
                  <Badge variant="outline" className="border-orange-500/20 text-orange-400">
                    <Trophy className="h-3 w-3 mr-1" />
                    LeetCode: Expert
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/20 text-purple-400">
                    <Code className="h-3 w-3 mr-1" />
                    GeeksforGeeks
                  </Badge>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <StatsCard icon={Star} label="GitHub Stars" value="1,234" trend="+12%" />
                  <StatsCard icon={Trophy} label="LeetCode Rank" value="1,456" trend="+5%" />
                  <StatsCard icon={Users} label="Connections" value="89" trend="+23%" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-gray-900/50 border border-gray-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Skills */}
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* GitHub Activity */}
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Coding Activity</h3>
              <GitHubHeatmap />
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                      <Badge variant="outline" className="mb-2">
                        {project.language}
                      </Badge>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="stats">
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Detailed Statistics</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard icon={Code} label="Commits This Month" value="127" trend="+15%" />
                <StatsCard icon={Star} label="Total Stars" value="1,234" trend="+8%" />
                <StatsCard icon={Users} label="Followers" value="456" trend="+12%" />
                <StatsCard icon={BarChart3} label="Contributions" value="2,890" trend="+22%" />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="matches">
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Recent Matches</h3>
              <p className="text-gray-400">Your matches will appear here once you start swiping!</p>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
              <p className="text-gray-400">Settings panel coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
