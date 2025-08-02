"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Rocket, ArrowLeft, Eye, EyeOff, User, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Auth integration will be added later
    console.log("Sign up with:", formData)
  }

  const handleGitHubSignUp = () => {
    // GitHub OAuth will be integrated later
    console.log("Sign up with GitHub")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      {/* Fun background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-24 h-24 bg-green-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-semibold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home 🏠
          </Link>

          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <div className="h-16 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg border-4 border-white">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                GrowUp
              </span>
              <div className="flex items-center justify-center space-x-1">
                <Sparkles className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-yellow-400 font-bold">DEV PARADISE</span>
                <Sparkles className="h-3 w-3 text-yellow-400" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl font-bold mb-2">Join the Adventure! 🎮</h1>
          <p className="text-white/80 text-lg font-medium">Start your epic developer journey today! 🚀✨</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Card className="p-8 bg-white/10 border-4 border-white/20 backdrop-blur-sm rounded-3xl shadow-2xl">
            {/* GitHub Sign Up */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleGitHubSignUp}
                className="w-full mb-6 bg-gray-800/80 hover:bg-gray-700/80 text-white border-4 border-white/20 h-14 rounded-2xl font-bold text-lg shadow-lg"
                variant="outline"
              >
                <Github className="h-6 w-6 mr-3" />
                Quick Start with GitHub! 🐙
              </Button>
            </motion.div>

            <div className="relative mb-6">
              <Separator className="bg-white/20" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-900 to-blue-900 px-4 text-sm text-white/80 font-semibold rounded-full border-2 border-white/20">
                or create account ✨
              </span>
            </div>

            {/* Email Sign Up Form */}
            <form onSubmit={handleSignUp} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-semibold text-lg">
                  Your Awesome Name 👋
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="What should we call you?"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="bg-white/10 border-2 border-white/20 focus:border-yellow-400 h-14 rounded-2xl text-white placeholder:text-white/50 font-medium text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-semibold text-lg">
                  Email Address 📧
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.awesome@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-white/10 border-2 border-white/20 focus:border-yellow-400 h-14 rounded-2xl text-white placeholder:text-white/50 font-medium text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-semibold text-lg">
                  Super Secret Password 🔐
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Make it strong and fun!"
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    className="bg-white/10 border-2 border-white/20 focus:border-yellow-400 h-14 rounded-2xl pr-14 text-white placeholder:text-white/50 font-medium text-lg"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 hover:bg-white/10 rounded-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-white/70" />
                    ) : (
                      <Eye className="h-5 w-5 text-white/70" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-white/60 font-medium">At least 8 characters with numbers and symbols! 💪</p>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                  className="border-2 border-white/30 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 rounded-lg"
                />
                <Label htmlFor="terms" className="text-sm text-white/80 font-medium">
                  I agree to the{" "}
                  <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 font-bold">
                    Terms of Fun
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-pink-400 hover:text-pink-300 font-bold">
                    Privacy Policy
                  </Link>{" "}
                  🤝
                </Label>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 h-14 rounded-2xl font-bold text-lg shadow-lg border-2 border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <User className="h-5 w-5 mr-2" />
                  Start My Journey! 🚀
                </Button>
              </motion.div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/80 font-medium">
                Already part of the crew?{" "}
                <Link href="/auth/signin" className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors">
                  Welcome back! 👋
                </Link>
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
