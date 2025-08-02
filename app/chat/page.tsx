"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, Smile, Search, MoreVertical } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

const chats = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey! Would love to collaborate on that React Native project",
    timestamp: "2m ago",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the code review! 🚀",
    timestamp: "1h ago",
    online: false,
    unread: 0,
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The ML model is working great now",
    timestamp: "3h ago",
    online: true,
    unread: 1,
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hey! I saw your React Native project on GitHub. Really impressive work!",
    timestamp: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Thanks! I've been working on it for a few months now. Always looking for feedback.",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content: "Would love to collaborate on that React Native project. I have some ideas for the UI/UX improvements.",
    timestamp: "10:35 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Sarah Chen",
    content:
      "```javascript\nconst improvedComponent = () => {\n  return <View style={styles.container}>\n    <Text>Better performance!</Text>\n  </View>\n}\n```",
    timestamp: "10:36 AM",
    isMe: false,
  },
]

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(chats[0])
  const [message, setMessage] = useState("")
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="h-screen flex">
      {/* Chat List Sidebar */}
      <motion.div
        initial={{ x: showSidebar ? 0 : -300 }}
        animate={{ x: showSidebar ? 0 : -300 }}
        className={`w-80 bg-gray-900/50 border-r border-gray-800 flex flex-col ${showSidebar ? "block" : "hidden"} md:block`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Messages</h2>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search conversations..." className="pl-10 bg-gray-800 border-gray-700" />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <motion.div
              key={chat.id}
              whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.5)" }}
              className={`p-4 cursor-pointer border-b border-gray-800/50 ${
                selectedChat.id === chat.id ? "bg-gray-800/50" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {chat.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                </div>

                {chat.unread > 0 && <Badge className="bg-blue-500 text-white text-xs">{chat.unread}</Badge>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-800 bg-gray-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setShowSidebar(!showSidebar)}>
                ←
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {selectedChat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedChat.name}</h3>
                <p className="text-sm text-green-400">Online</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-xs lg:max-w-md ${msg.isMe ? "order-2" : "order-1"}`}>
                <div className={`p-3 rounded-2xl ${msg.isMe ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"}`}>
                  {msg.content.includes("```") ? (
                    <div>
                      <pre className="bg-black/30 p-2 rounded text-sm overflow-x-auto">
                        <code>{msg.content.replace(/```javascript\n|\n```/g, "")}</code>
                      </pre>
                    </div>
                  ) : (
                    <p className="text-sm">{msg.content}</p>
                  )}
                </div>
                <p className={`text-xs text-gray-400 mt-1 ${msg.isMe ? "text-right" : "text-left"}`}>{msg.timestamp}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12 bg-gray-800 border-gray-700"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // Handle send message
                    setMessage("")
                  }
                }}
              />
              <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            <span className="text-green-400">Sarah</span> is typing...
          </p>
        </div>
      </div>

      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  )
}
