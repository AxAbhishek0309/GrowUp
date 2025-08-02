"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Search, X, Phone, Video, MoreHorizontal, Send, Smile, Paperclip, Users } from "lucide-react"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  isMe: boolean
  avatar?: string
}

interface Chat {
  id: number
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: number
  online: boolean
  type: "direct" | "group"
  growthGoal?: string
}

const chats: Chat[] = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=50&width=50&text=SC",
    lastMessage: "Your meditation journey is inspiring! Let's practice together tomorrow 🧘‍♀️",
    timestamp: "2m",
    unread: 2,
    online: true,
    type: "direct",
    growthGoal: "Mindfulness",
  },
  {
    id: 2,
    name: "Growth Warriors",
    avatar: "/placeholder.svg?height=50&width=50&text=GW",
    lastMessage: "Marcus: Who's joining the 5AM workout challenge?",
    timestamp: "5m",
    unread: 5,
    online: true,
    type: "group",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg?height=50&width=50&text=ER",
    lastMessage: "The art therapy session was amazing! Thank you for the recommendation ✨",
    timestamp: "1h",
    unread: 0,
    online: true,
    type: "direct",
    growthGoal: "Creativity",
  },
  {
    id: 4,
    name: "Mindful Leaders",
    avatar: "/placeholder.svg?height=50&width=50&text=ML",
    lastMessage: "Alex: New leadership workshop this weekend!",
    timestamp: "2h",
    unread: 3,
    online: false,
    type: "group",
  },
  {
    id: 5,
    name: "David Kim",
    avatar: "/placeholder.svg?height=50&width=50&text=DK",
    lastMessage: "Your fitness transformation is incredible! What's your secret? 💪",
    timestamp: "3h",
    unread: 1,
    online: false,
    type: "direct",
    growthGoal: "Fitness",
  },
]

const messages: Message[] = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hey! I saw your progress on the 30-day mindfulness challenge. You're doing amazing! 🌟",
    timestamp: "10:30 AM",
    isMe: false,
    avatar: "/placeholder.svg?height=40&width=40&text=SC",
  },
  {
    id: 2,
    sender: "Me",
    content:
      "Thank you so much! Your guided meditations have been a game-changer for me. I feel so much more centered.",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content:
      "That's exactly what I love to hear! Growth is a journey, not a destination. Want to try a walking meditation together tomorrow?",
    timestamp: "10:35 AM",
    isMe: false,
    avatar: "/placeholder.svg?height=40&width=40&text=SC",
  },
  {
    id: 4,
    sender: "Me",
    content: "I'd love that! What time works best for you?",
    timestamp: "10:36 AM",
    isMe: true,
  },
]

interface MessagingSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MessagingSidebar({ isOpen, onClose }: MessagingSidebarProps) {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(chats[0])
  const [message, setMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"all" | "direct" | "groups">("all")

  const filteredChats = chats.filter((chat) => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "direct" && chat.type === "direct") ||
      (activeTab === "groups" && chat.type === "group")
    return matchesSearch && matchesTab
  })

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-6xl bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl border-l border-white/20 z-50 flex"
          >
            {/* Chat List */}
            <div className="w-80 border-r border-white/20 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Messages</h2>
                      <p className="text-sm text-white/70">Growth connections</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="text-white hover:bg-white/20 rounded-xl"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
                  />
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 bg-white/10 rounded-xl p-1">
                  {[
                    { key: "all", label: "All", count: chats.length },
                    { key: "direct", label: "Direct", count: chats.filter((c) => c.type === "direct").length },
                    { key: "groups", label: "Groups", count: chats.filter((c) => c.type === "group").length },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.key
                          ? "bg-white text-purple-900"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                {filteredChats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className={`p-4 cursor-pointer border-b border-white/10 transition-colors ${
                      selectedChat?.id === chat.id ? "bg-white/10" : ""
                    }`}
                    onClick={() => setSelectedChat(chat)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12 border-2 border-white/20">
                          <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                            {chat.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-indigo-900" />
                        )}
                        {chat.type === "group" && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                            <Users className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-white truncate">{chat.name}</h3>
                          <span className="text-xs text-white/50">{chat.timestamp}</span>
                        </div>
                        <p className="text-sm text-white/70 truncate mb-1">{chat.lastMessage}</p>
                        {chat.growthGoal && (
                          <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30 text-xs">
                            {chat.growthGoal}
                          </Badge>
                        )}
                      </div>

                      {chat.unread > 0 && (
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-white/20">
                          <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                            {selectedChat.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-white flex items-center space-x-2">
                            <span>{selectedChat.name}</span>
                            {selectedChat.type === "group" && <Users className="h-4 w-4 text-purple-400" />}
                          </h3>
                          <p className="text-sm text-green-400">
                            {selectedChat.online ? "Online" : "Last seen 2h ago"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-xl">
                          <Phone className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-xl">
                          <Video className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-xl">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.isMe ? "flex-row-reverse space-x-reverse" : ""}`}
                        >
                          {!msg.isMe && (
                            <Avatar className="h-8 w-8 border border-white/20">
                              <AvatarImage src={msg.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs">
                                {msg.sender
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div
                              className={`p-3 rounded-2xl ${
                                msg.isMe
                                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                  : "bg-white/10 text-white border border-white/20"
                              }`}
                            >
                              <p className="text-sm">{msg.content}</p>
                            </div>
                            <p className={`text-xs text-white/50 mt-1 ${msg.isMe ? "text-right" : "text-left"}`}>
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-6 border-t border-white/20">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-xl">
                        <Paperclip className="h-5 w-5" />
                      </Button>
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Share your growth journey..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl pr-12"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-lg"
                        >
                          <Smile className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl"
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="h-16 w-16 text-white/30 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Select a conversation</h3>
                    <p className="text-white/70">Choose from your existing conversations or start a new one</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
