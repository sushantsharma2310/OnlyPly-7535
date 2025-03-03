import React from 'react';
import { motion } from 'framer-motion';
import { BsCollection, BsArrowRight } from 'react-icons/bs';

const EmptyState = ({ title, description, actionText, onAction }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <BsCollection className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
        {description}
      </p>
      {actionText && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="flex items-center gap-2 text-primary-600 font-medium"
        >
          {actionText}
          <BsArrowRight />
        </motion.button>
      )}
    </motion.div>
  );
};

export default EmptyState;