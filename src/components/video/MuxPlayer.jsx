import React from 'react';
import MuxPlayerComponent from '@mux/mux-player-react';

const MuxPlayer = ({ 
  playbackId, 
  streamType = "on-demand",
  autoPlay = false,
  muted = false,
  onError,
  poster
}) => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <MuxPlayerComponent
        streamType={streamType}
        playbackId={playbackId}
        autoPlay={autoPlay}
        muted={muted}
        poster={poster}
        onError={onError}
        metadata={{
          video_id: playbackId,
          video_title: "Video Title",
          viewer_user_id: "user-123"
        }}
      />
    </div>
  );
};

export default MuxPlayer;</QustAction>

<QuestAction type="file" filePath="src/components/upload/VideoUpload.jsx">
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createAsset } from '../../utils/muxConfig';

const VideoUpload = ({ onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      setError(null);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      // Create direct upload URL
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name })
      });

      if (!response.ok) throw new Error('Failed to get upload URL');
      const { uploadUrl } = await response.json();

      // Upload to Mux
      await fetch(uploadUrl, {
        method: 'PUT',
        body: file
      });

      clearInterval(progressInterval);
      setProgress(100);
      
      onUploadComplete();
    } catch (err) {
      setError(err.message);
      console.error('Upload failed:', err);
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
        className="block w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {uploading ? (
          <div className="space-y-3">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm">Uploading... {progress}%</span>
          </div>
        ) : (
          <span>Click to upload video</span>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </label>
    </div>
  );
};

export default VideoUpload;