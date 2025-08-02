"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Code, Trophy, Moon, Bell, Shield, Globe, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [profileData, setProfileData] = useState({
    name: "John Developer",
    tagline: "Full-Stack Engineer & AI Enthusiast",
    bio: "Passionate about building scalable web applications and exploring the intersection of AI and software development.",
    location: "San Francisco, CA",
    website: "johndeveloper.dev",
    timezone: "America/Los_Angeles",
  })

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <div className="space-y-8">
          {/* Profile Information */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                Profile Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Avatar</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={profileData.tagline}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, tagline: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
                    className="bg-gray-800 border-gray-700 min-h-[100px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, location: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, website: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Connected Accounts */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="h-5 w-5 mr-2 text-green-400" />
                Sync Sources
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Github className="h-6 w-6" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-gray-400">Connected as @johndeveloper</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-green-500/20 text-green-400">
                      Connected
                    </Badge>
                    <Button variant="outline" size="sm">
                      Reconnect
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-6 w-6 text-orange-400" />
                    <div>
                      <p className="font-medium">LeetCode</p>
                      <p className="text-sm text-gray-400">Sync your coding challenges</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-orange-500/20 text-orange-400">
                      Connected
                    </Badge>
                    <Button variant="outline" size="sm">
                      Reconnect
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Code className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="font-medium">GeeksforGeeks</p>
                      <p className="text-sm text-gray-400">Track your problem solving</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-gray-500/20 text-gray-400">
                      Not Connected
                    </Badge>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Preferences */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-purple-400" />
                Preferences
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Moon className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-gray-400">Use dark theme across the app</p>
                    </div>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <Separator className="bg-gray-800" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-yellow-400" />
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-gray-400">Get notified about matches and messages</p>
                    </div>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>

                <Separator className="bg-gray-800" />

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-green-400" />
                    Timezone
                  </Label>
                  <Select
                    value={profileData.timezone}
                    onValueChange={(value) => setProfileData((prev) => ({ ...prev, timezone: value }))}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="Europe/London">Greenwich Mean Time (GMT)</SelectItem>
                      <SelectItem value="Europe/Berlin">Central European Time (CET)</SelectItem>
                      <SelectItem value="Asia/Tokyo">Japan Standard Time (JST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Coding Goals</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-start bg-transparent">
                      Daily commits
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start bg-transparent">
                      Weekly challenges
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start bg-transparent">
                      Open source contributions
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start bg-transparent">
                      Learning new tech
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Save Changes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-end space-x-4"
          >
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
