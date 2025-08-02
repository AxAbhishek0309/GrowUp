"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Play } from "lucide-react"
import Link from "next/link"

export function DevHeroSection() {
  return (
    <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-5xl">
        {/* Main Hero Text - Exact Tinder Style */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white mb-12 leading-[0.9] tracking-tight"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.8,
          }}
        >
          Start something{" "}
          <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            epic.
          </span>
        </motion.h1>

        {/* Download Buttons - Exact Tinder Style */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: "easeOut",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl border border-white/10 min-w-[220px] h-14"
            >
              <Heart className="mr-3 h-6 w-6 text-pink-400 fill-current" />
              App Store
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl border border-white/10 min-w-[220px] h-14"
            >
              <Play className="mr-3 h-6 w-6 text-green-400 fill-current" />
              Google Play
            </Button>
          </motion.div>
        </motion.div>

        {/* Alternative Web CTA */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <Link href="/auth/signup">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl border-0"
              >
                Start Connecting
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-white/70 text-lg mt-8 max-w-2xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Connect with developers who share your passion. Find coding partners, mentors, and build something amazing
          together.
        </motion.p>
      </div>
    </div>
  )
}
