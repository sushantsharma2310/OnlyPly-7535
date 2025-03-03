import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsPlayCircle } from 'react-icons/bs';

const VideoHistoryCard = ({ video, onRemove }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex gap-4 p-4 hover:bg-gray-50 dark:hover:bg-dark-200 rounded-lg transition-colors"
    >
      <Link to={`/watch/${video.id}`} className="relative group flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-40 h-24 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
          <BsPlayCircle className="text-white text-3xl" />
        </div>
        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
          {video.duration}
        </span>
      </Link>
      
      <div className="flex-1">
        <Link to={`/watch/${video.id}`}>
          <h3 className="font-medium line-clamp-2 hover:text-primary-600">
            {video.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {video.channel}
        </p>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>{video.views} views</span>
          <span className="mx-1">•</span>
          <span>Watched {video.watchedAt}</span>
        </div>
      </div>
      
      <button
        onClick={() => onRemove(video.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        ×
      </button>
    </motion.div>
  );
};

export default VideoHistoryCard;