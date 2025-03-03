import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsHeart, BsShare, BsFlag } from 'react-icons/bs';

const VideoDetails = ({ video }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{video.title}</h1>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={video.channelAvatar} 
            alt={video.channel}
            className="w-12 h-12 rounded-full" 
          />
          <div>
            <h3 className="font-semibold">{video.channel}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {video.subscribers} subscribers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isLiked ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 dark:bg-dark-200'
            }`}
          >
            <BsHeart className={isLiked ? 'fill-primary-600' : ''} />
            {video.likes}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-200"
          >
            <BsShare />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-200"
          >
            <BsFlag />
          </motion.button>
        </div>
      </div>

      <motion.div 
        className="bg-gray-100 dark:bg-dark-200 rounded-lg p-4"
        animate={{ height: showMore ? 'auto' : '100px' }}
      >
        <p className={`${!showMore && 'line-clamp-2'}`}>
          {video.description}
        </p>
        <button 
          onClick={() => setShowMore(!showMore)}
          className="text-primary-600 mt-2"
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </motion.div>
    </div>
  );
};

export default VideoDetails;