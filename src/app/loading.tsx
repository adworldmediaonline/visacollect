'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Solid Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-primary/5"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,theme(colors.primary)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Floating Travel Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clouds */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute text-gray-200"
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + (i % 2) * 10}%`,
            }}
            animate={{
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor">
              <path d="M15 25c-5 0-9-4-9-9s4-9 9-9c2-5 7-8 12-8s10 3 12 8c5 0 9 4 9 9s-4 9-9 9H15z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Loading Container */}
      <motion.div
        className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl max-w-md w-full mx-4"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Journey Path */}
        <div className="relative mb-8">
          {/* Path Line */}
          <svg className="w-full h-16" viewBox="0 0 300 60">
            <motion.path
              d="M20 30 Q75 10 150 30 T280 30"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="rgb(25, 152, 199)" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Destination Markers */}
          <div className="absolute inset-0">
            {[20, 150, 280].map((x, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-primary rounded-full"
                style={{
                  left: `${(x / 300) * 100}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
              />
            ))}
          </div>

          {/* Animated Plane */}
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 text-primary"
            animate={{
              x: [20, 150, 280],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </motion.div>
        </div>

        {/* Travel Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: '🛂', label: 'Passport' },
            { icon: '✈️', label: 'Flight' },
            { icon: '🏛️', label: 'Visa' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center space-y-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.2 }}
            >
              <motion.div
                className="text-2xl"
                animate={{ rotateY: [0, 360] }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                {item.icon}
              </motion.div>
              <span className="text-xs text-gray-600 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <motion.h2
            className="text-xl md:text-2xl font-bold text-gray-800"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Preparing Your Journey
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Getting your visa information ready...
          </motion.p>

          {/* Progress Indicator */}
          <div className="relative mt-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </div>

        {/* Rotating Globe */}
        <motion.div
          className="absolute -top-4 -right-4 text-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom Brand */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm">Powered by</span>
          <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent font-bold text-sm">
            VisaCollect
          </span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-sm"
          >
            ✈️
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
