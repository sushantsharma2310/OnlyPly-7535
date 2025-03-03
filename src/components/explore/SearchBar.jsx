import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsSearch, BsFilter } from 'react-icons/bs';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const suggestions = [
    'trending music videos',
    'gaming highlights',
    'cooking tutorials',
    'tech reviews',
  ];

  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search videos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            className="w-full px-4 py-2 pl-10 bg-white dark:bg-dark-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-white dark:bg-dark-100 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200"
        >
          <BsFilter className="text-xl" />
        </button>
      </div>

      <AnimatePresence>
        {showSuggestions && query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-white dark:bg-dark-100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
          >
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-dark-200"
                onClick={() => {
                  setQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </button>
            ))}
          </motion.div>
        )}

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 w-64 mt-2 bg-white dark:bg-dark-100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 p-4"
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Duration</label>
                <select className="mt-1 w-full p-2 bg-gray-50 dark:bg-dark-200 rounded border border-gray-300 dark:border-gray-700">
                  <option>Any length</option>
                  <option>Under 4 minutes</option>
                  <option>4-20 minutes</option>
                  <option>Over 20 minutes</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Upload Date</label>
                <select className="mt-1 w-full p-2 bg-gray-50 dark:bg-dark-200 rounded border border-gray-300 dark:border-gray-700">
                  <option>Any time</option>
                  <option>Today</option>
                  <option>This week</option>
                  <option>This month</option>
                  <option>This year</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;