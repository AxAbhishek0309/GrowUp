"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-4xl">
        {/* Main Hero Text */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Start something
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            epic.
          </span>
        </motion.h1>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl border border-white/20 min-w-[200px]"
            >
              <Apple className="mr-3 h-6 w-6" />
              App Store
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl border border-white/20 min-w-[200px]"
            >
              <Play className="mr-3 h-6 w-6" />
              Google Play
            </Button>
          </motion.div>
        </motion.div>

        {/* Alternative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <Link href="/auth/signup">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl"
              >
                Create account
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-white/80 text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Connect with like-minded individuals on their personal growth journey. Find mentors, accountability partners,
          and lifelong friends.
        </motion.p>
      </div>
    </div>
  )
}
