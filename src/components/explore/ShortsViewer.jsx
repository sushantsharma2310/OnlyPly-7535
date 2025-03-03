import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlay, BsHeart, BsChat, BsShare } from 'react-icons/bs';

const mockShorts = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Amazing Sunset",
    creator: "Nature Vibes",
    likes: "125K",
    comments: "1.2K"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
    title: "Urban Dance",
    creator: "Street Moves",
    likes: "89K",
    comments: "856"
  },
  // Add more shorts as needed
];

const ShortsViewer = () => {
  const [currentShort, setCurrentShort] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'up' && currentShort < mockShorts.length - 1) {
      setCurrentShort(currentShort + 1);
    } else if (direction === 'down' && currentShort > 0) {
      setCurrentShort(currentShort - 1);
    }
  };

  return (
    <div className="relative h-[80vh] max-w-sm mx-auto bg-black rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentShort}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-full"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.y < -50) handleSwipe('up');
            if (offset.y > 50) handleSwipe('down');
          }}
        >
          <img
            src={mockShorts[currentShort].thumbnail}
            alt={mockShorts[currentShort].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="text-white text-lg font-semibold">
                {mockShorts[currentShort].title}
              </h3>
              <p className="text-gray-200 text-sm">
                {mockShorts[currentShort].creator}
              </p>
            </div>

            {/* Interaction Buttons */}
            <div className="absolute right-4 bottom-20 flex flex-col gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-lg"
              >
                <BsHeart className="text-white text-xl" />
                <span className="text-white text-xs mt-1 block">
                  {mockShorts[currentShort].likes}
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-lg"
              >
                <BsChat className="text-white text-xl" />
                <span className="text-white text-xs mt-1 block">
                  {mockShorts[currentShort].comments}
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-lg"
              >
                <BsShare className="text-white text-xl" />
                <span className="text-white text-xs mt-1 block">Share</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Swipe Indicators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
        <BsPlay className="text-6xl rotate-90" />
      </div>
    </div>
  );
};

export default ShortsViewer;