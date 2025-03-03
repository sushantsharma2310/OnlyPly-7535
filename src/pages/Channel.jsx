import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsGraphUp, BsPeople, BsPlayBtn } from 'react-icons/bs';
import ProfileHeader from '../components/profile/ProfileHeader';
import AnalyticsCard from '../components/profile/AnalyticsCard';
import CommunityPost from '../components/profile/CommunityPost';
import LiveStreamCard from '../components/profile/LiveStreamCard';

const mockProfile = {
  name: "Sarah Chen",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  coverPhoto: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
  bio: "Creating content about technology, travel, and lifestyle. New videos every week!",
  subscribers: "128K",
  videos: 156,
  joinDate: "Jan 2020"
};

const mockAnalytics = {
  views: [1200, 1500, 1300, 1700, 1600, 1800, 2000],
  watchTime: [4500, 5000, 4800, 5200, 5100, 5400, 5600],
  revenue: [120, 150, 130, 170, 160, 180, 200]
};

const mockPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Working on something exciting! Can't wait to share it with you all 🎥",
    timestamp: "2 hours ago",
    likes: 1234,
    comments: 89,
    poll: {
      question: "What content would you like to see next?",
      options: [
        { text: "Travel Vlog", votes: 45 },
        { text: "Tech Review", votes: 30 },
        { text: "Tutorial", votes: 25 }
      ]
    }
  }
];

const mockStream = {
  title: "Live Q&A Session",
  description: "Join me for a live chat about content creation and tech!",
  thumbnail: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
  isLive: true,
  viewers: "1.2K",
  status: "excellent",
  scheduledFor: "Today, 8PM EST"
};

const Channel = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const tabs = [
    { id: 'analytics', label: 'Analytics', icon: BsGraphUp },
    { id: 'community', label: 'Community', icon: BsPeople },
    { id: 'streams', label: 'Live Streams', icon: BsPlayBtn }
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
        {activeTab === 'analytics' && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnalyticsCard
              title="Views"
              data={mockAnalytics.views}
              type="line"
              timeRange="7d"
            />
            <AnalyticsCard
              title="Watch Time (hours)"
              data={mockAnalytics.watchTime}
              type="line"
              timeRange="7d"
            />
            <AnalyticsCard
              title="Revenue ($)"
              data={mockAnalytics.revenue}
              type="line"
              timeRange="7d"
            />
          </motion.div>
        )}

        {activeTab === 'community' && (
          <motion.div
            key="community"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {mockPosts.map(post => (
              <CommunityPost key={post.id} post={post} />
            ))}
          </motion.div>
        )}

        {activeTab === 'streams' && (
          <motion.div
            key="streams"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <LiveStreamCard stream={mockStream} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Channel;