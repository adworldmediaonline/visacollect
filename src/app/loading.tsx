'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,152,199,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(25,152,199,0.05)_50%,transparent_75%)] animate-pulse"></div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary-400 opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-3xl blur-3xl"></div>

        <div className="relative flex flex-col items-center space-y-6">
          {/* Spinner */}
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 border-4 border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner Spinning Ring */}
            <motion.div
              className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 border-4 border-transparent border-t-primary border-r-primary-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center Dot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-primary to-primary-600 rounded-full"></div>
            </motion.div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <motion.h2
              className="text-xl md:text-2xl font-bold text-white"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading...
            </motion.h2>
            <motion.p
              className="text-gray-300 text-sm md:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Please wait while we prepare your content
            </motion.p>
          </div>

          {/* Progress Dots */}
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Brand Text */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-400 text-sm font-medium">
          Powered by{' '}
          <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent font-semibold">
            VisaCollect
          </span>
        </p>
      </motion.div>
    </div>
  );
}
