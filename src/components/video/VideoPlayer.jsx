import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsPlay, BsPause, BsFullscreen, BsVolumeUp, BsVolumeMute } from 'react-icons/bs';

const VideoPlayer = ({ videoUrl, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full h-full"
        poster={poster}
        onTimeUpdate={handleProgress}
        muted={isMuted}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="p-4 rounded-full bg-black/50 text-white"
        >
          {isPlaying ? <BsPause className="text-3xl" /> : <BsPlay className="text-3xl" />}
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50">
        <div className="w-full h-1 bg-white/30 rounded-full mb-4">
          <div 
            className="h-full bg-primary-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="text-white p-2"
          >
            {isMuted ? <BsVolumeMute /> : <BsVolumeUp />}
          </button>
          
          <button className="text-white p-2">
            <BsFullscreen />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;