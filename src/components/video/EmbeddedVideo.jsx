import React from 'react';
import { motion } from 'framer-motion';
import { BsCode, BsCopy, BsCheckCircle } from 'react-icons/bs';

const EmbeddedVideo = ({ videoId, title, onCopyEmbed }) => {
  const [copied, setCopied] = React.useState(false);
  const embedCode = `<iframe 
    width="100%" 
    height="315" 
    src="https://example.com/embed/${videoId}" 
    title="${title}"
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onCopyEmbed?.();
  };

  return (
    <div className="bg-white dark:bg-dark-100 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BsCode className="text-xl text-primary-600" />
          <h3 className="font-medium">Embed Video</h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-lg"
        >
          {copied ? <BsCheckCircle /> : <BsCopy />}
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
      <div className="bg-gray-50 dark:bg-dark-200 rounded-lg p-4 font-mono text-sm overflow-x-auto">
        {embedCode}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Copy and paste this code to embed this video on your website
      </p>
    </div>
  );
};

export default EmbeddedVideo;