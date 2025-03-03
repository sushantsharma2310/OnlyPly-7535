import React from 'react';
import { motion } from 'framer-motion';

const SettingsSection = ({ title, description, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-lg shadow-sm p-6 space-y-4"
    >
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
};

export default SettingsSection;