"use client"

import { motion } from "framer-motion"
import { Github, Code, Trophy, MessageCircle, Heart, X, Zap } from "lucide-react"

const developerProfiles = [
  {
    name: "Sarah",
    exp: "5yr",
    role: "Frontend Developer",
    avatar: "SC",
    skills: ["React", "TypeScript"],
  },
  {
    name: "Marcus",
    exp: "3yr",
    role: "Backend Developer",
    avatar: "MJ",
    skills: ["Node.js", "Python"],
  },
  {
    name: "Emma",
    exp: "4yr",
    role: "Full Stack Developer",
    avatar: "ER",
    skills: ["Vue", "Django"],
  },
  {
    name: "David",
    exp: "6yr",
    role: "DevOps Engineer",
    avatar: "DK",
    skills: ["AWS", "Docker"],
  },
  {
    name: "Luna",
    exp: "2yr",
    role: "UI/UX Developer",
    avatar: "LM",
    skills: ["Figma", "CSS"],
  },
  {
    name: "Alex",
    exp: "7yr",
    role: "Tech Lead",
    avatar: "AT",
    skills: ["Java", "Spring"],
  },
  {
    name: "Zoe",
    exp: "3yr",
    role: "Mobile Developer",
    avatar: "ZW",
    skills: ["React Native", "Swift"],
  },
  {
    name: "Ryan",
    exp: "4yr",
    role: "Data Engineer",
    avatar: "RB",
    skills: ["Python", "SQL"],
  },
  {
    name: "Maya",
    exp: "5yr",
    role: "ML Engineer",
    avatar: "MP",
    skills: ["TensorFlow", "PyTorch"],
  },
  {
    name: "Jake",
    exp: "8yr",
    role: "Software Architect",
    avatar: "JL",
    skills: ["Microservices", "K8s"],
  },
  {
    name: "Aria",
    exp: "2yr",
    role: "Frontend Developer",
    avatar: "AC",
    skills: ["Angular", "SCSS"],
  },
  {
    name: "Leo",
    exp: "6yr",
    role: "Security Engineer",
    avatar: "LR",
    skills: ["Cybersec", "Pentesting"],
  },
  {
    name: "Nina",
    exp: "4yr",
    role: "QA Engineer",
    avatar: "NP",
    skills: ["Selenium", "Jest"],
  },
  {
    name: "Owen",
    exp: "5yr",
    role: "Game Developer",
    avatar: "OT",
    skills: ["Unity", "C#"],
  },
  {
    name: "Ivy",
    exp: "3yr",
    role: "Blockchain Dev",
    avatar: "IK",
    skills: ["Solidity", "Web3"],
  },
]

const MinimalPhoneCard = ({ profile, index }: { profile: any; index: number }) => {
  // More varied rotations for 15 cards
  const rotations = [-15, -8, -12, 3, 8, 12, -6, -10, 5, 10, -4, 7, -9, 6, -3]
  const delays = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7]
  const scales = [0.85, 0.88, 0.91, 0.94, 0.82, 0.89, 0.86, 0.92, 0.84, 0.9, 0.87, 0.93, 0.83, 0.88, 0.85]

  // 5 columns, 3 rows layout for better distribution
  const cols = 5
  const rows = 3
  const col = index % cols
  const row = Math.floor(index / cols)

  // Better positioning to ensure all cards are visible
  const baseLeft = 5 + col * 18 + (Math.random() - 0.5) * 4
  const baseTop = 8 + row * 28 + (Math.random() - 0.5) * 6

  return (
    <motion.div
      className="absolute w-36 h-56"
      initial={{
        opacity: 0,
        scale: 0.7,
        rotate: rotations[index],
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: scales[index],
        rotate: rotations[index],
        y: 0,
      }}
      transition={{
        delay: delays[index],
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      }}
      style={{
        left: `${baseLeft}%`,
        top: `${baseTop}%`,
        zIndex: 15 - index,
      }}
    >
      {/* Phone Frame - Slightly smaller for better fit */}
      <div className="w-full h-full bg-black rounded-3xl p-1 shadow-xl">
        <div className="w-full h-full bg-white rounded-[1.4rem] overflow-hidden relative">
          {/* Profile Image Area */}
          <div className="w-full h-3/5 bg-gray-100 flex items-center justify-center relative">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold text-white">{profile.avatar}</span>
            </div>

            {/* GitHub Stats */}
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-1.5 py-0.5 shadow-sm">
              <div className="flex items-center space-x-1">
                <Github className="h-2.5 w-2.5 text-gray-700" />
                <span className="text-gray-700 text-xs font-medium">{Math.floor(Math.random() * 500) + 100}</span>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-2 left-2 bg-black rounded-full px-1.5 py-0.5">
              <span className="text-white text-xs font-medium">{profile.exp}</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="absolute bottom-10 left-2.5 right-2.5">
            <div className="flex items-center space-x-1.5 mb-1">
              <span className="text-black text-sm font-semibold">{profile.name}</span>
              <span className="text-gray-600 text-xs font-medium">{profile.exp}</span>
            </div>
            <div className="text-gray-700 text-xs font-medium mb-1.5 truncate">{profile.role}</div>

            {/* Skills */}
            <div className="flex space-x-1 mb-1.5">
              {profile.skills.slice(0, 2).map((skill: string, i: number) => (
                <div key={i} className="bg-gray-100 rounded-lg px-1.5 py-0.5">
                  <span className="text-gray-700 text-xs font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Platform Icons */}
            <div className="flex items-center space-x-1.5">
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                <Github className="h-2.5 w-2.5 text-white" />
              </div>
              <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                <Code className="h-2.5 w-2.5 text-white" />
              </div>
              <div className="w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
                <Trophy className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-center space-x-1.5">
            <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
              <X className="h-2.5 w-2.5 text-gray-700" />
            </div>
            <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
              <MessageCircle className="h-2.5 w-2.5 text-white" />
            </div>
            <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
              <Zap className="h-2.5 w-2.5 text-white" />
            </div>
            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
              <Heart className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function MinimalPhoneGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm z-10" />

      {/* Phone Grid */}
      <div className="relative w-full h-full">
        {developerProfiles.map((profile, index) => (
          <MinimalPhoneCard key={index} profile={profile} index={index} />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40 z-10" />
    </div>
  )
}
