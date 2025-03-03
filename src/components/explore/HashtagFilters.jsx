import React from 'react';
import { motion } from 'framer-motion';

const hashtags = [
  { tag: 'Trending', color: 'bg-red-500' },
  { tag: 'Gaming', color: 'bg-purple-500' },
  { tag: 'Music', color: 'bg-blue-500' },
  { tag: 'Tech', color: 'bg-green-500' },
  { tag: 'Cooking', color: 'bg-yellow-500' },
  { tag: 'Travel', color: 'bg-pink-500' },
  { tag: 'Fashion', color: 'bg-indigo-500' },
  { tag: 'Sports', color: 'bg-orange-500' },
];

const HashtagFilters = ({ selectedTag, onSelectTag }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
      {hashtags.map(({ tag, color }) => (
        <motion.button
          key={tag}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectTag(tag)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 ${
            selectedTag === tag
              ? `${color} text-white`
              : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-200'
          }`}
        >
          <span className="text-sm font-medium">#{tag}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default HashtagFilters;