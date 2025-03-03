import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlayFill, BsVolumeUp, BsVolumeMute, BsArrowRight } from 'react-icons/bs';

const HeroBanner = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb",
      title: "The Art of Cinematic Storytelling",
      subtitle: "Learn from Industry Experts",
      gradient: "from-purple-900/90 via-purple-900/50"
    },
    {
      image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c",
      title: "Master Game Development",
      subtitle: "Create Your Dream Games",
      gradient: "from-blue-900/90 via-blue-900/50"
    },
    {
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      title: "Music Production Essentials",
      subtitle: "From Studio to Stage",
      gradient: "from-red-900/90 via-red-900/50"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[activeSlide].image}
            alt="Featured"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${slides[activeSlide].gradient} to-transparent`}>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="mb-4"
                >
                  <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm">
                    Featured
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                >
                  {slides[activeSlide].title}
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xl text-gray-200 mb-8"
                >
                  {slides[activeSlide].subtitle}
                </motion.p>

                <motion.div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2"
                  >
                    <BsPlayFill className="text-2xl" />
                    Watch Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-medium flex items-center gap-2"
                  >
                    Learn More
                    <BsArrowRight />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'w-8 bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;