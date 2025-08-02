"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Terminal, Globe } from "lucide-react"
import Link from "next/link"

export function DevNavbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="h-4 w-4 text-white fill-current" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-900 rounded-sm flex items-center justify-center">
                <Terminal className="h-2 w-2 text-green-400" />
              </div>
            </div>
            <span className="text-2xl font-bold text-white">DevLink</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Products", "Learn", "Safety", "Support", "Download"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="text-white hover:bg-white/10 font-medium text-sm rounded-full px-4">
                <Globe className="h-4 w-4 mr-2" />
                Language
              </Button>
            </motion.div>
            <Link href="/auth/signin">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-black hover:bg-gray-100 font-bold px-6 rounded-full shadow-lg">
                  Log in
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
