"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import Link from "next/link"

export function CleanHeroSection() {
  return (
    <div className="relative z-20 flex items-center justify-center min-h-screen px-6 pt-20">
      <div className="text-center max-w-4xl">
        {/* Main Hero Text - Adjusted size */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-8 leading-[0.9] tracking-tight"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 1.2, // Delayed to show after phone cards
          }}
        >
          Start something <span className="text-gray-600">epic.</span>
        </motion.h1>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.6, // Delayed to show after hero text
            ease: "easeOut",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg border-0 min-w-[220px] h-14"
            >
              <Apple className="mr-3 h-6 w-6" />
              App Store
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-50 text-black border-2 border-black px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg min-w-[220px] h-14"
            >
              <Play className="mr-3 h-6 w-6" />
              Google Play
            </Button>
          </motion.div>
        </motion.div>

        {/* Web CTA */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          <Link href="/auth/signup">
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="ghost"
                className="text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Get started on web
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          Connect with developers who share your passion. Find coding partners, mentors, and build something amazing
          together.
        </motion.p>
      </div>
    </div>
  )
}
