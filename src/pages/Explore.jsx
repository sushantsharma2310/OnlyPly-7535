import React from 'react';
import { motion } from 'framer-motion';
import CategorySection from '../components/channels/CategorySection';
import { channelCategories } from '../data/channelData';

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Explore Channels
      </motion.h1>

      <CategorySection title="Gaming" channels={channelCategories.gaming} />
      <CategorySection title="Music" channels={channelCategories.music} />
      <CategorySection title="Technology" channels={channelCategories.technology} />
    </div>
  );
};

export default Explore;