import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsCameraReelsFill, BsCashCoin, BsPlayCircleFill, BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const slides = [
  {
    Icon: BsCameraReelsFill,
    title: "Share Your Story",
    description: "Create and share amazing videos with the world",
    bgColor: "from-blue-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279"
  },
  {
    Icon: BsCashCoin,
    title: "Monetize Your Content",
    description: "Turn your passion into profit with our creator program",
    bgColor: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
  },
  {
    Icon: BsPlayCircleFill,
    title: "Connect & Engage",
    description: "Join a community of creators and viewers worldwide",
    bgColor: "from-orange-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1513759565286-20e9c5fad06b"
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleGetStarted = () => {
    navigate('/signin');
  };

  const CurrentIcon = slides[currentSlide].Icon;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <motion.img
              src={slides[currentSlide].image}
              alt="background"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} mix-blend-overlay opacity-90`} />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-xl w-full">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-white"
              >
                <div className="mb-8">
                  <CurrentIcon className="text-6xl mx-auto mb-6" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentSlide].title}</h2>
                  <p className="text-xl opacity-90">{slides[currentSlide].description}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  {currentSlide > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevSlide}
                      className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <BsArrowLeft className="text-2xl" />
                    </motion.button>
                  )}

                  {currentSlide < slides.length - 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextSlide}
                      className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium flex items-center gap-2"
                    >
                      Continue <BsArrowRight />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleGetStarted}
                      className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium flex items-center gap-2"
                    >
                      Get Started <BsArrowRight />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            animate={{ width: currentSlide === index ? 32 : 8 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Onboarding;