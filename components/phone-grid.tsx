"use client"

import { motion } from "framer-motion"

const phoneProfiles = [
  { name: "Sarah", age: 28, image: "SC", color: "from-pink-400 to-rose-500" },
  { name: "Marcus", age: 32, image: "MJ", color: "from-blue-400 to-indigo-500" },
  { name: "Emma", age: 26, image: "ER", color: "from-purple-400 to-pink-500" },
  { name: "David", age: 29, image: "DK", color: "from-green-400 to-teal-500" },
  { name: "Luna", age: 24, image: "LM", color: "from-yellow-400 to-orange-500" },
  { name: "Alex", age: 31, image: "AT", color: "from-indigo-400 to-purple-500" },
  { name: "Zoe", age: 27, image: "ZW", color: "from-pink-400 to-red-500" },
  { name: "Ryan", age: 30, image: "RB", color: "from-cyan-400 to-blue-500" },
  { name: "Maya", age: 25, image: "MP", color: "from-emerald-400 to-green-500" },
  { name: "Jake", age: 33, image: "JL", color: "from-orange-400 to-red-500" },
  { name: "Aria", age: 23, image: "AC", color: "from-violet-400 to-purple-500" },
  { name: "Leo", age: 28, image: "LR", color: "from-teal-400 to-cyan-500" },
]

const PhoneCard = ({ profile, index }: { profile: any; index: number }) => {
  const rotations = [-15, -8, -3, 2, 8, 15, -12, -5, 3, 10, -6, 12]
  const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1]

  return (
    <motion.div
      className="absolute w-48 h-80"
      initial={{ opacity: 0, scale: 0.8, rotate: rotations[index] }}
      animate={{ opacity: 1, scale: 1, rotate: rotations[index] }}
      transition={{ delay: delays[index], duration: 0.8, ease: "easeOut" }}
      style={{
        left: `${10 + (index % 4) * 25}%`,
        top: `${10 + Math.floor(index / 4) * 30}%`,
        transform: `rotate(${rotations[index]}deg)`,
      }}
    >
      {/* Phone Frame */}
      <div className="w-full h-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          {/* Profile Image Area */}
          <div className={`w-full h-3/4 bg-gradient-to-br ${profile.color} flex items-center justify-center relative`}>
            <div className="text-6xl font-bold text-white/90">{profile.image}</div>

            {/* Growth Goal Badge */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-xs font-medium">Growth Goal</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="absolute bottom-16 left-4 right-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-white text-xl font-bold">{profile.name}</span>
              <span className="text-white text-xl font-light">{profile.age}</span>
            </div>
            <div className="flex space-x-1 mb-2">
              {["Mindful", "Fit", "Creative"].map((tag, i) => (
                <div key={i} className="bg-white/20 rounded-full px-2 py-1">
                  <span className="text-white text-xs">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">✕</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">★</span>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">♥</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PhoneGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      {/* Phone Grid */}
      <div className="relative w-full h-full">
        {phoneProfiles.map((profile, index) => (
          <PhoneCard key={index} profile={profile} index={index} />
        ))}
      </div>
    </div>
  )
}
