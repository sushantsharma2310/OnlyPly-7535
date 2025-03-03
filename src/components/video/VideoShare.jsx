import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BsShare, 
  BsTwitter, 
  BsFacebook, 
  BsLinkedin,
  BsLink45Deg,
  BsCheckCircle
} from 'react-icons/bs';
import EmbeddedVideo from './EmbeddedVideo';

const VideoShare = ({ videoId, title, url }) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  return (
    <div className="space-y-4">
      {/* Share Buttons */}
      <div className="flex items-center gap-4">
        <motion.a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-[#1DA1F2] text-white"
        >
          <BsTwitter />
        </motion.a>
        <motion.a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-[#4267B2] text-white"
        >
          <BsFacebook />
        </motion.a>
        <motion.a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-[#0A66C2] text-white"
        >
          <BsLinkedin />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopyLink}
          className="p-3 rounded-full bg-gray-100 dark:bg-dark-200"
        >
          {copied ? <BsCheckCircle className="text-green-500" /> : <BsLink45Deg />}
        </motion.button>
      </div>

      {/* Embed Toggle */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowEmbed(!showEmbed)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-200 w-full"
      >
        <BsShare />
        <span>Embed Video</span>
      </motion.button>

      {/* Embed Code */}
      {showEmbed && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <EmbeddedVideo
            videoId={videoId}
            title={title}
            onCopyEmbed={() => setShowEmbed(false)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default VideoShare;