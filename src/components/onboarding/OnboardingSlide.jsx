import React from 'react';
import { motion } from 'framer-motion';

const OnboardingSlide = ({ icon: Icon, title, description, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 100 }}
      className="flex flex-col items-center px-6 w-full"
    >
      <div className="text-primary-600 mb-6">
        <Icon className="text-8xl" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default OnboardingSlide;