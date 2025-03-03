import React from 'react';
import { motion } from 'framer-motion';
import UploadForm from '../components/upload/UploadForm';

const Upload = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Upload Video</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Share your story with the world
        </p>
      </motion.div>

      <UploadForm />
    </div>
  );
};

export default Upload;