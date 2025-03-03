import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All', color: 'bg-gradient-to-r from-primary-600 to-primary-500' },
  { id: 'trending', label: 'Trending', color: 'bg-gradient-to-r from-pink-600 to-purple-600' },
  { id: 'gaming', label: 'Gaming', color: 'bg-gradient-to-r from-purple-600 to-indigo-600' },
  { id: 'music', label: 'Music', color: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
  { id: 'technology', label: 'Technology', color: 'bg-gradient-to-r from-green-600 to-emerald-600' },
  { id: 'education', label: 'Education', color: 'bg-gradient-to-r from-yellow-600 to-orange-600' },
  { id: 'entertainment', label: 'Entertainment', color: 'bg-gradient-to-r from-red-600 to-pink-600' },
  { id: 'sports', label: 'Sports', color: 'bg-gradient-to-r from-orange-600 to-red-600' },
];

const CategoryPills = ({ selectedCategory, onSelectCategory }) => {
  const containerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-4 -mx-4"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all
              ${selectedCategory === category.id 
                ? `${category.color} text-white shadow-lg` 
                : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-200'
              }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
      
      {/* Gradient Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-50 dark:from-dark-300" />
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-gray-50 dark:from-dark-300" />
    </div>
  );
};

export default CategoryPills;