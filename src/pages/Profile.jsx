import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsGrid3X3, BsCollection, BsHeart } from 'react-icons/bs';
import ProfileHeader from '../components/profile/ProfileHeader';
import VideoCard from '../components/home/VideoCard';
import PlaylistCard from '../components/library/PlaylistCard';

const mockProfile = {
  name: "John Doe",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  coverPhoto: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
  bio: "Tech enthusiast and content creator. I love sharing my knowledge and experiences!",
  subscribers: "50K",
  videos: 87,
  joinDate: "Mar 2021"
};

const mockVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Complete React Tutorial 2024",
    views: "125K",
    timestamp: "2 days ago",
    duration: "15:30"
  },
  // Add more videos
];

const mockPlaylists = [
  {
    id: 1,
    title: "React Tutorials",
    thumbnails: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
    ],
    videoCount: 12,
    visibility: "Public"
  },
  // Add more playlists
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const tabs = [
    { id: 'videos', label: 'Videos', icon: BsGrid3X3 },
    { id: 'playlists', label: 'Playlists', icon: BsCollection },
    { id: 'liked', label: 'Liked Videos', icon: BsHeart }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <ProfileHeader profile={mockProfile} isOwnProfile={true} />

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 -mb-px ${
              activeTab === tab.id
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <tab.icon />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'videos' && (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {mockVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </motion.div>
        )}

        {activeTab === 'playlists' && (
          <motion.div
            key="playlists"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {mockPlaylists.map(playlist => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </motion.div>
        )}

        {activeTab === 'liked' && (
          <motion.div
            key="liked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {mockVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;