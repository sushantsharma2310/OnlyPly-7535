import React from 'react';
import { motion } from 'framer-motion';
import { BsCameraReelsFill } from 'react-icons/bs';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ backgroundColor: '#000000' }}
      animate={{ backgroundColor: '#0284c7' }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
    >
      <div className="relative">
        {/* Animated circles in background */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-10 rounded-full bg-blue-400 opacity-20 blur-xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-20 rounded-full bg-blue-300 opacity-10 blur-xl"
        />

        {/* Logo and text container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-4"
          >
            <BsCameraReelsFill className="text-white text-6xl" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-2"
          >
            OnlyPly
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-1"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;