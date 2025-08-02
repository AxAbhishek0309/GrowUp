"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  X,
  Search,
  Phone,
  Video,
  UserPlus,
  Users,
  MessageCircle,
  Send,
  Smile,
  Paperclip,
  Mic,
  PhoneOff,
  Volume2,
  MoreVertical,
} from "lucide-react"

interface MessagingModalProps {
  isOpen: boolean
  onClose: () => void
}

const chats = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey! Would love to collaborate on that React Native project!",
    timestamp: "2m ago",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the code review! The performance boost is amazing!",
    timestamp: "1h ago",
    online: false,
    unread: 0,
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The ML model is working perfectly now! You're a wizard!",
    timestamp: "3h ago",
    online: true,
    unread: 1,
  },
]

const groups = [
  {
    id: 1,
    name: "React Developers",
    avatar: "/placeholder.svg?height=40&width=40",
    members: 12,
    lastMessage: "Who's up for a coding session tonight?",
    timestamp: "30m ago",
    unread: 5,
  },
  {
    id: 2,
    name: "AI/ML Community",
    avatar: "/placeholder.svg?height=40&width=40",
    members: 8,
    lastMessage: "Check out this new transformer model!",
    timestamp: "2h ago",
    unread: 3,
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hey! I saw your React Native project on GitHub. The architecture is absolutely brilliant!",
    timestamp: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Thanks! I've been working on it for months. Always looking for feedback from fellow React enthusiasts!",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content:
      "Would love to collaborate! I have some ideas for UI/UX improvements that could make it even more amazing!",
    timestamp: "10:35 AM",
    isMe: false,
  },
]

export function MessagingModal({ isOpen, onClose }: MessagingModalProps) {
  const [selectedChat, setSelectedChat] = useState(chats[0])
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState("chats")
  const [isInCall, setIsInCall] = useState(false)
  const [callType, setCallType] = useState<"voice" | "video" | null>(null)

  const startCall = (type: "voice" | "video") => {
    setCallType(type)
    setIsInCall(true)
  }

  const endCall = () => {
    setIsInCall(false)
    setCallType(null)
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white border-4 border-gray-200 rounded-3xl w-full max-w-6xl h-[80vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b-4 border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                    <p className="text-sm text-gray-600 font-medium">Chat with your developer friends</p>
                  </div>
                </div>
                <Button variant="ghost" onClick={onClose} className="text-gray-600 hover:text-red-600">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-80 border-r-4 border-gray-200 bg-gray-50">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 m-4 rounded-2xl p-1">
                      <TabsTrigger
                        value="chats"
                        className="rounded-xl font-semibold data-[state=active]:bg-white data-[state=active]:text-blue-600"
                      >
                        Chats
                      </TabsTrigger>
                      <TabsTrigger
                        value="groups"
                        className="rounded-xl font-semibold data-[state=active]:bg-white data-[state=active]:text-blue-600"
                      >
                        Groups
                      </TabsTrigger>
                    </TabsList>

                    {/* Search */}
                    <div className="px-4 mb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search conversations..."
                          className="pl-10 bg-white border-2 border-gray-200 rounded-2xl"
                        />
                      </div>
                    </div>

                    <TabsContent value="chats" className="flex-1 overflow-y-auto px-4">
                      {chats.map((chat) => (
                        <div
                          key={chat.id}
                          className={`p-4 cursor-pointer rounded-2xl mb-2 transition-all duration-200 ${
                            selectedChat.id === chat.id ? "bg-blue-100 border-2 border-blue-300" : "hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedChat(chat)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Avatar className="h-12 w-12 border-2 border-gray-200">
                                <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                                <AvatarFallback className="bg-blue-100 text-blue-600">
                                  {chat.name.split(" ")[0][0]}
                                </AvatarFallback>
                              </Avatar>
                              {chat.online && (
                                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                                <span className="text-xs text-gray-500">{chat.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                            </div>

                            {chat.unread > 0 && <Badge className="bg-blue-600 text-white text-xs">{chat.unread}</Badge>}
                          </div>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="groups" className="flex-1 overflow-y-auto px-4">
                      <div className="mb-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Create New Group
                        </Button>
                      </div>

                      {groups.map((group) => (
                        <div
                          key={group.id}
                          className="p-4 cursor-pointer rounded-2xl mb-2 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12 border-2 border-gray-200">
                              <AvatarImage src={group.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-purple-100 text-purple-600">
                                <Users className="h-6 w-6" />
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900 truncate">{group.name}</h3>
                                <span className="text-xs text-gray-500">{group.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-600 truncate">{group.lastMessage}</p>
                              <p className="text-xs text-blue-600 font-medium">{group.members} members</p>
                            </div>

                            {group.unread > 0 && (
                              <Badge className="bg-blue-600 text-white text-xs">{group.unread}</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  {isInCall ? (
                    /* Call Interface */
                    <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
                      <div className="text-center mb-8">
                        <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-gray-200">
                          <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl">
                            {selectedChat.name.split(" ")[0][0]}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedChat.name}</h3>
                        <p className="text-gray-600 font-medium">
                          {callType === "video" ? "Video Call" : "Voice Call"}
                        </p>
                        <div className="mt-4 flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-medium">Connected</span>
                        </div>
                      </div>

                      {/* Call Controls */}
                      <div className="flex items-center space-x-4">
                        <Button className="h-14 w-14 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
                          <Mic className="h-6 w-6" />
                        </Button>
                        {callType === "video" && (
                          <Button className="h-14 w-14 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
                            <Video className="h-6 w-6" />
                          </Button>
                        )}
                        <Button
                          onClick={endCall}
                          className="h-14 w-14 rounded-full bg-red-600 hover:bg-red-700 text-white"
                        >
                          <PhoneOff className="h-6 w-6" />
                        </Button>
                        <Button className="h-14 w-14 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
                          <Volume2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b-4 border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12 border-2 border-blue-300">
                              <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-blue-100 text-blue-600">
                                {selectedChat.name.split(" ")[0][0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-bold text-gray-900">{selectedChat.name}</h3>
                              <p className="text-sm text-green-600 font-medium">Online</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={() => startCall("voice")}
                              className="bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold"
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              Call
                            </Button>
                            <Button
                              onClick={() => startCall("video")}
                              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Video
                            </Button>
                            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
                        {messages.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-xs lg:max-w-md ${msg.isMe ? "order-2" : "order-1"}`}>
                              <div
                                className={`p-3 rounded-2xl ${
                                  msg.isMe
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-900 border-2 border-gray-200"
                                }`}
                              >
                                <p className="font-medium">{msg.content}</p>
                              </div>
                              <p className={`text-xs text-gray-500 mt-1 ${msg.isMe ? "text-right" : "text-left"}`}>
                                {msg.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="p-4 border-t-4 border-gray-200 bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                            <Paperclip className="h-5 w-5" />
                          </Button>
                          <div className="flex-1 relative">
                            <Input
                              placeholder="Type a message..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="pr-12 bg-white border-2 border-gray-200 rounded-2xl"
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  setMessage("")
                                }
                              }}
                            />
                            <Button
                              variant="ghost"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                            >
                              <Smile className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                            <Send className="h-5 w-5" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">{selectedChat.name.split(" ")[0]} is typing...</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
