import React from 'react';
import { motion } from 'framer-motion';

const SocialButton = ({ icon: Icon, label, onClick, provider }) => {
  const getProviderStyles = () => {
    switch (provider) {
      case 'google':
        return 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50';
      case 'apple':
        return 'bg-black text-white hover:bg-gray-900';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${getProviderStyles()} group relative w-full flex justify-center py-2.5 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <Icon className="h-5 w-5" />
      </span>
      {label}
    </motion.button>
  );
};

export default SocialButton;