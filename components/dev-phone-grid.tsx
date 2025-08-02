"use client"

import { motion } from "framer-motion"
import { Github, Code, Trophy, MessageCircle, Heart, X, Zap } from "lucide-react"

const developerProfiles = [
  {
    name: "Sarah",
    exp: "5yr",
    role: "Frontend Dev",
    avatar: "SC",
    color: "from-pink-400 to-rose-500",
    skills: ["React", "TypeScript"],
  },
  {
    name: "Marcus",
    exp: "3yr",
    role: "Backend Dev",
    avatar: "MJ",
    color: "from-blue-400 to-indigo-500",
    skills: ["Node.js", "Python"],
  },
  {
    name: "Emma",
    exp: "4yr",
    role: "Full Stack",
    avatar: "ER",
    color: "from-purple-400 to-pink-500",
    skills: ["Vue", "Django"],
  },
  {
    name: "David",
    exp: "6yr",
    role: "DevOps Eng",
    avatar: "DK",
    color: "from-green-400 to-teal-500",
    skills: ["AWS", "Docker"],
  },
  {
    name: "Luna",
    exp: "2yr",
    role: "UI/UX Dev",
    avatar: "LM",
    color: "from-yellow-400 to-orange-500",
    skills: ["Figma", "CSS"],
  },
  {
    name: "Alex",
    exp: "7yr",
    role: "Tech Lead",
    avatar: "AT",
    color: "from-indigo-400 to-purple-500",
    skills: ["Java", "Spring"],
  },
  {
    name: "Zoe",
    exp: "3yr",
    role: "Mobile Dev",
    avatar: "ZW",
    color: "from-pink-400 to-red-500",
    skills: ["React Native", "Swift"],
  },
  {
    name: "Ryan",
    exp: "4yr",
    role: "Data Eng",
    avatar: "RB",
    color: "from-cyan-400 to-blue-500",
    skills: ["Python", "SQL"],
  },
  {
    name: "Maya",
    exp: "5yr",
    role: "ML Engineer",
    avatar: "MP",
    color: "from-emerald-400 to-green-500",
    skills: ["TensorFlow", "PyTorch"],
  },
  {
    name: "Jake",
    exp: "8yr",
    role: "Architect",
    avatar: "JL",
    color: "from-orange-400 to-red-500",
    skills: ["Microservices", "K8s"],
  },
  {
    name: "Aria",
    exp: "2yr",
    role: "Frontend Dev",
    avatar: "AC",
    color: "from-violet-400 to-purple-500",
    skills: ["Angular", "SCSS"],
  },
  {
    name: "Leo",
    exp: "6yr",
    role: "Security Eng",
    avatar: "LR",
    color: "from-teal-400 to-cyan-500",
    skills: ["Cybersec", "Pentesting"],
  },
  {
    name: "Nina",
    exp: "4yr",
    role: "QA Engineer",
    avatar: "NP",
    color: "from-rose-400 to-pink-500",
    skills: ["Selenium", "Jest"],
  },
  {
    name: "Owen",
    exp: "5yr",
    role: "Game Dev",
    avatar: "OT",
    color: "from-amber-400 to-yellow-500",
    skills: ["Unity", "C#"],
  },
  {
    name: "Ivy",
    exp: "3yr",
    role: "Blockchain",
    avatar: "IK",
    color: "from-lime-400 to-green-500",
    skills: ["Solidity", "Web3"],
  },
]

const DevPhoneCard = ({ profile, index }: { profile: any; index: number }) => {
  // More varied rotations and positions for realistic Tinder-like layout
  const rotations = [-18, -12, -6, -2, 3, 8, 12, 18, -15, -9, -4, 6, 14, -11, 9]
  const delays = [0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75]
  const scales = [0.85, 0.9, 0.95, 1, 0.88, 0.92, 0.87, 0.93, 0.89, 0.91, 0.86, 0.94, 0.88, 0.9, 0.87]

  // Calculate position based on index for grid layout
  const cols = 5
  const rows = 3
  const col = index % cols
  const row = Math.floor(index / cols)

  const baseLeft = 5 + col * 18 + (Math.random() - 0.5) * 8
  const baseTop = 10 + row * 25 + (Math.random() - 0.5) * 10

  return (
    <motion.div
      className="absolute w-44 h-72"
      initial={{
        opacity: 0,
        scale: 0.7,
        rotate: rotations[index] + (Math.random() - 0.5) * 10,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: scales[index],
        rotate: rotations[index],
        y: 0,
      }}
      transition={{
        delay: delays[index],
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      style={{
        left: `${baseLeft}%`,
        top: `${baseTop}%`,
        zIndex: 15 - index,
      }}
    >
      {/* Phone Frame with realistic shadow */}
      <div
        className="w-full h-full bg-black rounded-[2.2rem] p-1.5 shadow-2xl"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden relative">
          {/* Profile Image Area */}
          <div className={`w-full h-3/5 bg-gradient-to-br ${profile.color} flex items-center justify-center relative`}>
            <div className="text-4xl font-bold text-white/90">{profile.avatar}</div>

            {/* GitHub Stats Badge */}
            <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
              <div className="flex items-center space-x-1">
                <Github className="h-3 w-3 text-white" />
                <span className="text-white text-xs font-medium">{Math.floor(Math.random() * 500) + 100}</span>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <span className="text-white text-xs font-medium">{profile.exp} exp</span>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="absolute bottom-14 left-3 right-3">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-gray-900 text-lg font-bold">{profile.name}</span>
              <span className="text-gray-600 text-sm">{profile.exp}</span>
            </div>
            <div className="text-gray-700 text-sm font-medium mb-2">{profile.role}</div>

            {/* Skills */}
            <div className="flex space-x-1 mb-2">
              {profile.skills.map((skill: string, i: number) => (
                <div key={i} className="bg-gray-100 rounded-full px-2 py-0.5">
                  <span className="text-gray-700 text-xs font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Platform Icons */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <Github className="h-3 w-3 text-white" />
              </div>
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <Code className="h-3 w-3 text-white" />
              </div>
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Trophy className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-center space-x-3">
            <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center shadow-md">
              <X className="h-4 w-4 text-white" />
            </div>
            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-md">
              <Heart className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function DevPhoneGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark Overlay with Blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Phone Grid */}
      <div className="relative w-full h-full">
        {developerProfiles.map((profile, index) => (
          <DevPhoneCard key={index} profile={profile} index={index} />
        ))}
      </div>

      {/* Additional blur layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10" />
    </div>
  )
}
