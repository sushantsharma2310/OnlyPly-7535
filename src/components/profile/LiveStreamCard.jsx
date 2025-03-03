import React from 'react';
import { motion } from 'framer-motion';
import { BsPlayCircle, BsGear, BsBoxArrowUpRight } from 'react-icons/bs';

const LiveStreamCard = ({ stream }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-lg shadow-sm overflow-hidden"
    >
      {/* Preview */}
      <div className="relative aspect-video">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-full object-cover"
        />
        {stream.isLive ? (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            LIVE
          </span>
        ) : (
          <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-sm">
            {stream.scheduledFor}
          </span>
        )}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
          {stream.viewers} watching
        </div>
      </div>

      {/* Stream Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{stream.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {stream.description}
        </p>

        {/* Stream Settings */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className={`w-2 h-2 rounded-full ${
              stream.status === 'excellent' ? 'bg-green-500' :
              stream.status === 'good' ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            <span>Stream health: {stream.status}</span>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200"
            >
              <BsGear className="text-xl" />
            </motion.button>
            {stream.isLive ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                End Stream
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg"
              >
                <BsPlayCircle />
                Go Live
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200"
            >
              <BsBoxArrowUpRight className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveStreamCard;