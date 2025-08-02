"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { X, Heart, Star, MapPin, ArrowLeft, RotateCcw, Zap, Github, MessageCircle } from "lucide-react"
import Link from "next/link"

const developers = [
  {
    id: 1,
    name: "Sarah Chen",
    age: 28,
    avatar: "/placeholder.svg?height=400&width=400&text=Sarah+28",
    location: "San Francisco, CA",
    role: "Senior React Developer",
    company: "Meta",
    bio: "Passionate about building beautiful UIs and mentoring junior developers. Love hiking and specialty coffee ☕",
    skills: ["React", "TypeScript", "GraphQL", "Node.js", "AWS"],
    githubStars: 2340,
    yearsExp: 6,
    lookingFor: ["Side Projects", "Mentoring", "Open Source"],
    interests: ["UI/UX", "Performance", "Accessibility"],
    photos: [
      "/placeholder.svg?height=600&width=400&text=Sarah+Photo+1",
      "/placeholder.svg?height=600&width=400&text=Sarah+Photo+2",
      "/placeholder.svg?height=600&width=400&text=Sarah+Photo+3",
    ],
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    age: 32,
    avatar: "/placeholder.svg?height=400&width=400&text=Alex+32",
    location: "New York, NY",
    role: "AI/ML Engineer",
    company: "OpenAI",
    bio: "Building the future with AI. Former Google researcher. Love chess, jazz music, and solving complex problems 🤖",
    skills: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "GCP"],
    githubStars: 5670,
    yearsExp: 8,
    lookingFor: ["Research Collaboration", "Startup Co-founder", "AI Projects"],
    interests: ["Machine Learning", "Computer Vision", "NLP"],
    photos: [
      "/placeholder.svg?height=600&width=400&text=Alex+Photo+1",
      "/placeholder.svg?height=600&width=400&text=Alex+Photo+2",
      "/placeholder.svg?height=600&width=400&text=Alex+Photo+3",
    ],
  },
  {
    id: 3,
    name: "Emma Wilson",
    age: 26,
    avatar: "/placeholder.svg?height=400&width=400&text=Emma+26",
    location: "London, UK",
    role: "Full-Stack Developer",
    company: "Stripe",
    bio: "Fintech enthusiast building payment solutions. Love traveling, photography, and clean code architecture 📸",
    skills: ["Ruby", "Rails", "React", "PostgreSQL", "Docker"],
    githubStars: 1890,
    yearsExp: 4,
    lookingFor: ["Fintech Projects", "Travel Buddy", "Code Reviews"],
    interests: ["Fintech", "Travel", "Photography"],
    photos: [
      "/placeholder.svg?height=600&width=400&text=Emma+Photo+1",
      "/placeholder.svg?height=600&width=400&text=Emma+Photo+2",
      "/placeholder.svg?height=600&width=400&text=Emma+Photo+3",
    ],
  },
  {
    id: 4,
    name: "David Kim",
    age: 29,
    avatar: "/placeholder.svg?height=400&width=400&text=David+29",
    location: "Seoul, Korea",
    role: "DevOps Engineer",
    company: "Samsung",
    bio: "Infrastructure wizard who loves automating everything. Gamer, foodie, and k-pop enthusiast 🎮",
    skills: ["Kubernetes", "Terraform", "Go", "AWS", "Prometheus"],
    githubStars: 3210,
    yearsExp: 7,
    lookingFor: ["DevOps Mentoring", "Gaming Partner", "Infrastructure Projects"],
    interests: ["Gaming", "Automation", "Korean Food"],
    photos: [
      "/placeholder.svg?height=600&width=400&text=David+Photo+1",
      "/placeholder.svg?height=600&width=400&text=David+Photo+2",
      "/placeholder.svg?height=600&width=400&text=David+Photo+3",
    ],
  },
]

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matches, setMatches] = useState<number[]>([])
  const [showMatch, setShowMatch] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

  const currentDeveloper = developers[currentIndex]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      setMatches((prev) => [...prev, currentDeveloper.id])
      setShowMatch(true)
      setTimeout(() => setShowMatch(false), 2000)
    }

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % developers.length)
      setCurrentPhotoIndex(0)
      x.set(0)
    }, 300)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100
    if (info.offset.x > threshold) {
      handleSwipe("right")
    } else if (info.offset.x < -threshold) {
      handleSwipe("left")
    }
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % currentDeveloper.photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + currentDeveloper.photos.length) % currentDeveloper.photos.length)
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

      {/* Header */}
      <div className="relative z-50 p-4 flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full p-3">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Heart className="h-6 w-6 text-red-500 fill-current" />
          </div>
          <span className="text-2xl font-bold text-white">tinder</span>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full p-3">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">{matches.length} matches</Badge>
        </div>
      </div>

      {/* Main Card Area */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <div className="relative w-full max-w-sm h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDeveloper.id}
              ref={cardRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ x, rotate, opacity }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Card className="h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Photo Section */}
                <div className="relative h-2/3">
                  <img
                    src={currentDeveloper.photos[currentPhotoIndex] || "/placeholder.svg"}
                    alt={`${currentDeveloper.name} photo ${currentPhotoIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Photo Navigation Dots */}
                  <div className="absolute top-4 left-4 right-4 flex space-x-1">
                    {currentDeveloper.photos.map((_, index) => (
                      <div
                        key={index}
                        className={`flex-1 h-1 rounded-full ${
                          index === currentPhotoIndex ? "bg-white" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Photo Navigation Areas */}
                  <div className="absolute inset-0 flex">
                    <div className="flex-1" onClick={prevPhoto} />
                    <div className="flex-1" onClick={nextPhoto} />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Basic Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <h2 className="text-3xl font-bold">{currentDeveloper.name}</h2>
                      <span className="text-3xl font-light">{currentDeveloper.age}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{currentDeveloper.location}</span>
                    </div>
                  </div>

                  {/* Swipe Indicators */}
                  <motion.div
                    className="absolute top-1/2 left-8 transform -translate-y-1/2"
                    style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }}
                  >
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg border-4 border-white shadow-lg">
                      NOPE
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-8 transform -translate-y-1/2"
                    style={{ opacity: useTransform(x, [0, 100], [0, 1]) }}
                  >
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg border-4 border-white shadow-lg">
                      LIKE
                    </div>
                  </motion.div>
                </div>

                {/* Info Section */}
                <div className="h-1/3 p-6 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Role & Company */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">{currentDeveloper.company}</Badge>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                          {currentDeveloper.yearsExp}y exp
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{currentDeveloper.role}</h3>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-700 text-sm leading-relaxed">{currentDeveloper.bio}</p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {currentDeveloper.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 border-gray-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Looking For */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Looking For</h4>
                      <div className="flex flex-wrap gap-1">
                        {currentDeveloper.lookingFor.map((item) => (
                          <Badge key={item} className="text-xs bg-green-100 text-green-800 border-green-200">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 pt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{currentDeveloper.githubStars.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Github className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">GitHub</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Background Cards */}
          <div className="absolute inset-0 -z-10">
            <Card className="h-full bg-gray-200 rounded-3xl transform scale-95 translate-y-2" />
          </div>
          <div className="absolute inset-0 -z-20">
            <Card className="h-full bg-gray-300 rounded-3xl transform scale-90 translate-y-4" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 pb-8">
        <div className="flex justify-center space-x-6">
          <Button
            onClick={() => handleSwipe("left")}
            className="w-16 h-16 rounded-full bg-white shadow-2xl hover:scale-110 transition-transform"
            variant="outline"
          >
            <X className="h-8 w-8 text-red-500" />
          </Button>

          <Button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + developers.length) % developers.length)}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
            variant="ghost"
          >
            <RotateCcw className="h-6 w-6 text-white" />
          </Button>

          <Button
            onClick={() => handleSwipe("right")}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-2xl hover:scale-110 transition-transform"
          >
            <Heart className="h-8 w-8 text-white" />
          </Button>

          <Button
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
            variant="ghost"
          >
            <Zap className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Match Modal */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="text-center text-white"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-8xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-4xl font-bold mb-4">It's a Match!</h2>
              <p className="text-xl mb-8">You and {currentDeveloper.name} liked each other</p>
              <div className="flex justify-center space-x-4">
                <Avatar className="h-20 w-20 border-4 border-white">
                  <AvatarImage src="/placeholder.svg?height=80&width=80&text=You" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <Avatar className="h-20 w-20 border-4 border-white">
                  <AvatarImage src={currentDeveloper.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{currentDeveloper.name[0]}</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
