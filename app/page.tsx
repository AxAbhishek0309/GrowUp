"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Target, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProfessionalNavbar } from "@/components/professional-navbar"
import { MinimalPhoneGrid } from "@/components/minimal-phone-grid"
import { CleanHeroSection } from "@/components/clean-hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Phone Grid */}
      <MinimalPhoneGrid />

      {/* Navigation */}
      <ProfessionalNavbar />

      {/* Hero Content */}
      <CleanHeroSection />

      {/* Features Section */}
      <motion.section
        className="relative z-10 py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose <span className="text-gray-600">DevLink</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              The professional platform for meaningful developer connections and career growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Skill-Based Matching",
                description: "Connect with developers who complement your expertise and share your technical interests",
              },
              {
                icon: Users,
                title: "Professional Network",
                description: "Build meaningful relationships with peers, mentors, and potential collaborators",
              },
              {
                icon: BookOpen,
                title: "Career Growth",
                description: "Access opportunities for learning, mentorship, and professional development",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-8 bg-white border-2 border-gray-100 rounded-3xl h-full hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 py-20 px-6 bg-gray-50 rounded-t-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to advance your career?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-12 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join thousands of developers who are building their professional network and advancing their careers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/auth/signup">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-semibold text-black">DevLink</span>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600 font-medium">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-black transition-colors">
                About
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm font-medium">© 2024 DevLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
