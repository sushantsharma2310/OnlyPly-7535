import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsCloudUpload, BsImage, BsTrash, BsCheck2Circle } from 'react-icons/bs';

const categories = [
  'Education', 'Entertainment', 'Gaming', 'Music',
  'News', 'Sports', 'Technology', 'Travel', 'Vlogs'
];

const UploadForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    privacy: 'public',
    tags: [],
    monetization: false,
  });
  const videoInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

  const handleVideoSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      simulateUpload();
    }
  };

  const handleThumbnailSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setThumbnail(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
        setProcessing(true);
        setTimeout(() => setProcessing(false), 2000);
      }
      setUploadProgress(Math.min(progress, 100));
    }, 500);
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (!formData.tags.includes(newTag)) {
        setFormData({
          ...formData,
          tags: [...formData.tags, newTag]
        });
      }
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-dark-100 rounded-lg shadow-lg p-6">
      {/* Video Upload Section */}
      <div className="mb-8">
        {!videoFile ? (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center cursor-pointer"
            onClick={() => videoInputRef.current?.click()}
          >
            <BsCloudUpload className="mx-auto text-4xl text-primary-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Drag and drop your video</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              or click to select a file
            </p>
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoSelect}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg"
            >
              Select Video
            </motion.button>
          </motion.div>
        ) : (
          <div className="relative">
            <div className="bg-gray-100 dark:bg-dark-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">{videoFile.name}</span>
                <button
                  onClick={() => setVideoFile(null)}
                  className="text-red-500 hover:text-red-600"
                >
                  <BsTrash />
                </button>
              </div>
              <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-primary-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${uploadProgress}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {processing ? 'Processing...' : `${Math.round(uploadProgress)}% uploaded`}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Details Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            placeholder="Enter video title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            rows="4"
            placeholder="Describe your video"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Thumbnail</label>
            <div
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 cursor-pointer"
              onClick={() => thumbnailInputRef.current?.click()}
            >
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <BsImage className="text-3xl text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload thumbnail</span>
                </div>
              )}
              <input
                ref={thumbnailInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnailSelect}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            >
              <option value="">Select category</option>
              {categories.map(category => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tags</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                #{tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            placeholder="Add tags (press Enter)"
            onKeyDown={handleTagInput}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm font-medium mb-2">Privacy</label>
            <select
              value={formData.privacy}
              onChange={(e) => setFormData({ ...formData, privacy: e.target.value })}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            >
              <option value="public">Public</option>
              <option value="unlisted">Unlisted</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Monetization</label>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, monetization: !formData.monetization })}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                formData.monetization ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700'
              }`}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-1 left-1"
                animate={{ x: formData.monetization ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium"
        >
          Publish Video
        </motion.button>
      </form>
    </div>
  );
};

export default UploadForm;