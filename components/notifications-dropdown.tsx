"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Heart, MessageCircle, GitBranch, X } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "match",
    icon: Heart,
    title: "New Match!",
    message: "You and Sarah Chen matched",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "2m ago",
    unread: true,
  },
  {
    id: 2,
    type: "message",
    icon: MessageCircle,
    title: "New Message",
    message: "Alex Rodriguez sent you a message",
    avatar: "/placeholder.svg?height=40&width=40",
    timestamp: "1h ago",
    unread: true,
  },
  {
    id: 3,
    type: "sync",
    icon: GitBranch,
    title: "GitHub Sync Complete",
    message: "Your profile has been updated with latest activity",
    timestamp: "3h ago",
    unread: false,
  },
]

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notificationList, setNotificationList] = useState(notifications)

  const unreadCount = notificationList.filter((n) => n.unread).length

  const markAsRead = (id: number) => {
    setNotificationList((prev) => prev.map((n) => (n.id === id ? { ...n, unread: false } : n)))
  }

  const removeNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="relative">
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
            {unreadCount}
          </Badge>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-full mt-2 w-80 z-50"
            >
              <Card className="bg-gray-900/95 backdrop-blur-sm border-gray-800 shadow-2xl">
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Notifications</h3>
                    {unreadCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setNotificationList((prev) => prev.map((n) => ({ ...n, unread: false })))}
                        className="text-xs text-blue-400 hover:text-blue-300"
                      >
                        Mark all read
                      </Button>
                    )}
                  </div>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notificationList.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">
                      <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>No notifications yet</p>
                    </div>
                  ) : (
                    notificationList.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`p-4 border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors cursor-pointer ${
                          notification.unread ? "bg-blue-500/5" : ""
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {notification.avatar ? (
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  <notification.icon className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                            ) : (
                              <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                                <notification.icon className="h-4 w-4 text-gray-400" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">{notification.title}</p>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-400">{notification.timestamp}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    removeNotification(notification.id)
                                  }}
                                  className="h-6 w-6 p-0 hover:bg-gray-700"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 truncate">{notification.message}</p>
                            {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                <div className="p-3 border-t border-gray-800">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-blue-400 hover:text-blue-300"
                    onClick={() => setIsOpen(false)}
                  >
                    View all notifications
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
