import React from 'react';
import { motion } from 'framer-motion';
import ChannelCard from './ChannelCard';

const CategorySection = ({ title, channels }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ChannelCard channel={channel} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;