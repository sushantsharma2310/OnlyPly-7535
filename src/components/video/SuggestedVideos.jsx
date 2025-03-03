import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsPlayCircle } from 'react-icons/bs';

const SuggestedVideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex gap-4 group"
      >
        <div className="relative w-40 h-24 flex-shrink-0">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
            <BsPlayCircle className="text-white text-3xl" />
          </div>
          <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
            {video.duration}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium line-clamp-2 group-hover:text-primary-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {video.channel}
          </p>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{video.views} views</span>
            <span className="mx-1">•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const SuggestedVideos = ({ videos }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Up Next</h2>
      <div className="space-y-4">
        {videos.map((video) => (
          <SuggestedVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedVideos;