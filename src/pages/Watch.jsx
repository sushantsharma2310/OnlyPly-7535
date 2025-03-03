import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/video/VideoPlayer';
import VideoDetails from '../components/video/VideoDetails';
import VideoShare from '../components/video/VideoShare';
import Comments from '../components/video/Comments';
import SuggestedVideos from '../components/video/SuggestedVideos';
import { categories } from '../data/videoData';

const Watch = () => {
  const { id } = useParams();

  // Find the video from all categories
  const video = Object.values(categories)
    .flat()
    .find(v => v.id === id);

  const mockComments = [
    {
      id: 1,
      username: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      content: "This is an amazing video! Really helpful content.",
      timestamp: "2 hours ago",
      likes: 24,
      isPinned: true,
      replies: [
        {
          id: 11,
          username: "Sarah Wilson",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          content: "Totally agree! Looking forward to more content like this.",
          timestamp: "1 hour ago",
          likes: 8
        }
      ]
    },
    {
      id: 2,
      username: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      content: "Great explanation! Could you make a follow-up video on advanced topics?",
      timestamp: "3 hours ago",
      likes: 15
    }
  ];

  // Get suggested videos excluding current video
  const suggestedVideos = Object.values(categories)
    .flat()
    .filter(v => v.id !== id)
    .slice(0, 8);

  if (!video) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Video not found</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The video you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="rounded-xl overflow-hidden">
            <VideoPlayer 
              videoUrl={video.videoUrl || "https://example.com/video.mp4"} 
              poster={video.thumbnail} 
            />
          </div>

          {/* Video Details */}
          <div className="mt-6">
            <VideoDetails video={video} />
          </div>

          {/* Share Section */}
          <div className="mt-6">
            <VideoShare 
              videoId={id} 
              title={video.title} 
              url={window.location.href} 
            />
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <Comments comments={mockComments} />
          </div>
        </div>

        {/* Suggested Videos */}
        <div className="lg:col-span-1">
          <SuggestedVideos videos={suggestedVideos} />
        </div>
      </div>
    </div>
  );
};

export default Watch;