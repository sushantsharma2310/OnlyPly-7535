import React from 'react';
import { motion } from 'framer-motion';
import EmptyState from './EmptyState';

const LibrarySection = ({ title, icon: Icon, children, isEmpty, emptyStateProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-lg shadow-sm p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Icon className="text-xl text-primary-600" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      
      {isEmpty ? (
        <EmptyState {...emptyStateProps} />
      ) : (
        children
      )}
    </motion.div>
  );
};

export default LibrarySection;