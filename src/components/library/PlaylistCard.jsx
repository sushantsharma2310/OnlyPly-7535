import React from 'react';
import { motion } from 'framer-motion';
import { BsPlay, BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PlaylistCard = ({ playlist }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-100 dark:bg-dark-200 rounded-lg overflow-hidden"
    >
      <Link to={`/playlist/${playlist.id}`}>
        <div className="relative aspect-video group">
          <div className="grid grid-cols-2 gap-1 h-full">
            {playlist.thumbnails.slice(0, 4).map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Playlist thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <BsPlay className="text-white text-6xl" />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
            {playlist.videoCount} videos
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium line-clamp-1">{playlist.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {playlist.visibility}
            </p>
          </div>
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaylistCard;