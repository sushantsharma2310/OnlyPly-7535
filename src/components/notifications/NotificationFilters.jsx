import React from 'react';
import { motion } from 'framer-motion';
import { BsFilter } from 'react-icons/bs';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'mentions', label: 'Mentions' },
  { id: 'comments', label: 'Comments' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'recommendations', label: 'Recommendations' }
];

const NotificationFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map(filter => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            activeFilter === filter.id
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-200'
          }`}
        >
          {filter.label}
        </motion.button>
      ))}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-200"
      >
        <BsFilter />
        More Filters
      </motion.button>
    </div>
  );
};

export default NotificationFilters;