"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Book, Heart, ArrowRight } from "lucide-react"
import Music from "./Music"

export default function VideoMemoryScreen({ onNext }) {
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const musicRef = useRef(null)
  const videoRef = useRef(null)

  const handleOpenVideo = () => {
    setIsVideoVisible(true)
  }

  return (
    <div className="min-h-screen relative bg-black">
      <Music ref={musicRef} shouldPlay={true} />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-center font-bold mb-12 py-1 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Memory Album
          </motion.h2>

          {!isVideoVisible ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative mx-auto w-72 h-80 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={handleOpenVideo}
                initial={{ rotateY: -15 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-0 bg-black/50 blur-xl transform translate-y-8 scale-110" />

                <motion.div
                  className="relative w-full h-full bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 rounded-r-2xl shadow-2xl border-l-8 border-purple-900"
                  animate={{
                    boxShadow: [
                      "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                      "0 25px 50px -12px rgba(168, 85, 247, 0.3)",
                      "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="absolute inset-6 border-2 border-cyan-400/30 rounded-lg flex flex-col items-center justify-center text-white">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Book className="w-16 h-16 mb-6 text-cyan-400" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2">Friendship</h3>
                    <h3 className="text-2xl font-bold mb-4">Video</h3>

                    <motion.div
                      className="flex items-center gap-2 text-pink-400"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-5 h-5" fill="currentColor" />
                      <span className="text-sm">Tap to Watch</span>
                      <Heart className="w-5 h-5" fill="currentColor" />
                    </motion.div>
                  </div>

                  <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-900 to-indigo-900" />
                  <div className="absolute left-2 top-0 w-1 h-full bg-cyan-400/20" />
                </motion.div>
              </motion.div>

              <motion.p
                className="text-gray-400 text-lg mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Tap the cover to watch our special memory
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center">
                <motion.div
                  className="relative w-72 h-[500px] bg-black rounded-2xl shadow-2xl border-4 border-cyan-100/40 overflow-hidden"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src="/videos/memory.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>

              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.button
                  onClick={onNext}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Continue to Final Message
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
