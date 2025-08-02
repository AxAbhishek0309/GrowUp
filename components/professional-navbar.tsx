"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code2, Globe } from "lucide-react"
import Link from "next/link"

export function ProfessionalNavbar() {
  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-black">DevLink</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Products", "Learn", "Safety", "Support", "Download"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="ghost" className="text-gray-700 hover:text-black font-medium text-sm rounded-xl">
                <Globe className="h-4 w-4 mr-2" />
                Language
              </Button>
            </motion.div>
            <Link href="/auth/signin">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-6 rounded-xl">Log in</Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
