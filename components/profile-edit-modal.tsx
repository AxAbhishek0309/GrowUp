"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Upload, Calendar } from "lucide-react"

interface ProfileData {
  name: string
  username: string
  pronouns: string
  bio: string
  location: string
  website: string
  birthdate: string
  joinDate: string
  avatar: string
}

interface ProfileEditModalProps {
  isOpen: boolean
  onClose: () => void
  profileData: ProfileData
  onSave: (data: ProfileData) => void
}

export function ProfileEditModal({ isOpen, onClose, profileData, onSave }: ProfileEditModalProps) {
  const [formData, setFormData] = useState(profileData)
  const [isUploading, setIsUploading] = useState(false)

  const handleSave = () => {
    onSave(formData)
    onClose()
  }

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    // Simulate upload delay
    setTimeout(() => {
      // In real app, upload to cloud storage and get URL
      const fakeUrl = "/placeholder.svg?height=150&width=150&text=New+Avatar"
      setFormData((prev) => ({ ...prev, avatar: fakeUrl }))
      setIsUploading(false)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold">Edit Profile</h2>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Avatar Upload */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={formData.avatar || "/placeholder.svg"}
                      alt="Profile"
                      className="h-20 w-20 rounded-full object-cover border-2 border-gray-700"
                    />
                    {isUploading && (
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent" />
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="avatar-upload" className="cursor-pointer">
                      <Button variant="outline" className="bg-gray-800 border-gray-700" asChild>
                        <span>
                          <Upload className="h-4 w-4 mr-2" />
                          Change Photo
                        </span>
                      </Button>
                    </Label>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarUpload}
                    />
                    <p className="text-sm text-gray-400 mt-1">JPG, PNG or GIF. Max 5MB.</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                </div>

                {/* Pronouns */}
                <div className="space-y-2">
                  <Label htmlFor="pronouns">Pronouns</Label>
                  <Select
                    value={formData.pronouns}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, pronouns: value }))}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="he/him">he/him</SelectItem>
                      <SelectItem value="she/her">she/her</SelectItem>
                      <SelectItem value="they/them">they/them</SelectItem>
                      <SelectItem value="he/they">he/they</SelectItem>
                      <SelectItem value="she/they">she/they</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                    className="bg-gray-800 border-gray-700 min-h-[100px]"
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-sm text-gray-400">{formData.bio.length}/500 characters</p>
                </div>

                {/* Location & Website */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                      placeholder="City, Country"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>

                {/* Birthdate */}
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Birth Date</Label>
                  <div className="relative">
                    <Input
                      id="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, birthdate: e.target.value }))}
                      className="bg-gray-800 border-gray-700"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                  <p className="text-sm text-gray-400">Your birth date won't be shown publicly</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-800">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
