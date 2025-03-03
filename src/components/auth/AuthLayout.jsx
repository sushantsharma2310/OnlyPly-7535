import React from 'react';
import { motion } from 'framer-motion';
import { BsCameraReelsFill } from 'react-icons/bs';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <BsCameraReelsFill className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;