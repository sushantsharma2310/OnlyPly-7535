import React from 'react';
import { motion } from 'framer-motion';
import { BsPersonPlus, BsBell } from 'react-icons/bs';

const ChannelCard = ({ channel }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{channel.name}</h3>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>{channel.subscribers} subscribers</span>
              <span className="mx-2">•</span>
              <span>{channel.videos} videos</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {channel.description}
        </p>

        <div className="mt-6 flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-primary-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <BsPersonPlus />
            Subscribe
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700"
          >
            <BsBell />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChannelCard;