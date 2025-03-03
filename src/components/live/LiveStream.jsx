import React, { useState } from 'react';
import { createLiveStream } from '../../utils/muxConfig';
import MuxPlayer from '../video/MuxPlayer';

const LiveStream = () => {
  const [streamDetails, setStreamDetails] = useState(null);
  const [error, setError] = useState(null);

  const startStream = async () => {
    try {
      setError(null);
      const stream = await createLiveStream();
      setStreamDetails(stream);
    } catch (err) {
      setError('Failed to create live stream');
      console.error(err);
    }
  };

  return (
    <div className="space-y-4">
      {streamDetails ? (
        <div className="space-y-4">
          <MuxPlayer
            playbackId={streamDetails.playbackId}
            streamType="live"
            autoPlay
            muted
          />
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Stream Details</h3>
            <p className="text-sm">Stream Key: {streamDetails.streamKey}</p>
            <p className="text-sm">RTMP URL: {streamDetails.streamUrl}</p>
          </div>
        </div>
      ) : (
        <button
          onClick={startStream}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg"
        >
          Start Live Stream
        </button>
      )}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default LiveStream;