import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/home/HeroBanner';
import CategoryPills from '../components/home/CategoryPills';
import VideoCard from '../components/home/VideoCard';
import { categories } from '../data/videoData';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredVideos = () => {
    if (selectedCategory === 'all') {
      return [
        ...categories.gaming,
        ...categories.music,
        ...categories.technology
      ];
    }
    return categories[selectedCategory.toLowerCase()] || [];
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-8 space-y-8 text-light-100"
    >
      <HeroBanner />
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-light-100"
        >
          Discover Amazing Content
        </motion.h2>
        <CategoryPills 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {getFilteredVideos().map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <VideoCard video={video} />
          </motion.div>
        ))}
      </motion.div>

      {getFilteredVideos().length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-semibold mb-2 text-light-100">No videos found</h3>
          <p className="text-light-300">
            Try selecting a different category
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Home;