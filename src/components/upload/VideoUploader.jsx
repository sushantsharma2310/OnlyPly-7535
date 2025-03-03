import React, { useState } from 'react';
import { createMuxAsset } from '../../utils/muxConfig';

const VideoUploader = ({ onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const { assetId, playbackId } = await createMuxAsset(file);
      
      clearInterval(progressInterval);
      setProgress(100);
      onUploadComplete({ assetId, playbackId });
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        accept="video/*"
        onChange={handleUpload}
        disabled={uploading}
        className="hidden"
        id="video-upload"
      />
      <label
        htmlFor="video-upload"
        className="block w-full p-4 border-2 border-dashed rounded-lg text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {uploading ? (
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>Uploading... {progress}%</span>
          </div>
        ) : (
          <span>Click to upload video</span>
        )}
      </label>
    </div>
  );
};

export default VideoUploader;