import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsPlayCircle, BsClock } from 'react-icons/bs';

const VideoCard = ({ video }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/watch/${video.id}`} className="block">
        <div className="relative group">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <BsPlayCircle className="text-white text-5xl" />
          </div>
          {video.duration && (
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded-lg backdrop-blur-sm">
              {video.duration}
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex gap-3">
          <Link to={video.channelLink} className="flex-shrink-0">
            <div className="relative group">
              <img
                src={video.channelAvatar}
                alt={video.channel}
                className="w-10 h-10 rounded-full ring-2 ring-transparent group-hover:ring-primary-600 transition-all"
              />
            </div>
          </Link>
          <div className="flex-1 min-w-0">
            <Link to={`/watch/${video.id}`}>
              <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-light-100 hover:text-primary-400 transition-colors">
                {video.title}
              </h3>
            </Link>
            <Link to={video.channelLink}>
              <p className="text-light-300 text-sm hover:text-primary-400 transition-colors">
                {video.channel}
              </p>
            </Link>
            <div className="flex items-center text-sm text-light-400 mt-1">
              <span>{video.views} views</span>
              <span className="mx-2">•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
          <button className="text-light-300 hover:text-light-100 p-1.5 rounded-full hover:bg-gray-700">
            <BsClock />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;