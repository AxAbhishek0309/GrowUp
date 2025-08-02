"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Github, Heart, ArrowLeft, Eye, EyeOff, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign in with:", { email, password })
  }

  const handleGitHubSignIn = () => {
    console.log("Sign in with GitHub")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to DevMatch
            </Link>

            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-7 w-7 text-pink-500 fill-current" />
              </div>
              <span className="text-3xl font-bold text-white">DevMatch</span>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
            <p className="text-white/80 text-lg">Ready to find your coding match?</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
              {/* GitHub Sign In */}
              <Button
                onClick={handleGitHubSignIn}
                className="w-full mb-6 bg-gray-900 hover:bg-gray-800 text-white h-14 font-semibold text-lg rounded-2xl shadow-lg"
              >
                <Github className="h-6 w-6 mr-3" />
                Continue with GitHub
              </Button>

              <div className="relative mb-6">
                <Separator className="bg-gray-200" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500 font-medium">
                  or sign in with email
                </span>
              </div>

              {/* Email Sign In Form */}
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-2 border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-xl text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-semibold">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12 border-2 border-gray-200 focus:border-pink-500 focus:ring-pink-500 rounded-xl text-lg"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100 rounded-lg"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-pink-600 hover:text-pink-700 transition-colors font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 h-14 font-bold text-lg rounded-2xl shadow-lg"
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  New to DevMatch?{" "}
                  <Link href="/auth/signup" className="text-pink-600 hover:text-pink-700 font-bold transition-colors">
                    Create account
                  </Link>
                </p>
              </div>

              {/* Alternative Sign In */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-200 hover:bg-gray-50 h-12 font-semibold rounded-xl bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Sign in with Phone
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Footer */}
          <div className="text-center mt-8 text-white/60 text-sm">
            <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
