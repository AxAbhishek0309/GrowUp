"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Heart, MessageCircle, User, Compass } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { icon: Home, href: "/dashboard", label: "Home" },
  { icon: Compass, href: "/explore", label: "Explore" },
  { icon: Heart, href: "/swipe", label: "Discover" },
  { icon: MessageCircle, href: "/chat", label: "Chat" },
  { icon: User, href: "/profile", label: "Profile" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800/50 md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <motion.div whileTap={{ scale: 0.9 }} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex flex-col items-center space-y-1 h-auto py-3 px-4 ${
                    isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Button>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
