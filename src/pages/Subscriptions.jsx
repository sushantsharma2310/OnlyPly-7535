import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFilter, BsGrid, BsList } from 'react-icons/bs';
import VideoCard from '../components/home/VideoCard';

const mockSubscriptions = [
  {
    id: 1,
    name: "Tech Insights",
    avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    subscribers: "1.2M",
    videos: [
      {
        id: 101,
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        title: "The Future of AI Development",
        views: "256K",
        timestamp: "2 days ago",
        duration: "18:24",
        channel: "Tech Insights",
        channelAvatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
      }
    ]
  },
  {
    id: 2,
    name: "Travel Diaries",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    subscribers: "890K",
    videos: [
      {
        id: 201,
        thumbnail: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7",
        title: "Hidden Gems in Tokyo",
        views: "128K",
        timestamp: "1 day ago",
        duration: "12:45",
        channel: "Travel Diaries",
        channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]
  }
];

const Subscriptions = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filter, setFilter] = useState('all');

  const allVideos = mockSubscriptions.flatMap(sub => sub.videos);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white dark:bg-dark-100 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-700"
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
          </select>
          <div className="flex items-center gap-2 bg-white dark:bg-dark-100 rounded-lg p-1 border border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-dark-200' : ''}`}
            >
              <BsGrid />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100 dark:bg-dark-200' : ''}`}
            >
              <BsList />
            </button>
          </div>
        </div>
      </div>

      {/* Channels List */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
            filter === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-dark-100'
          }`}
        >
          All
        </motion.button>
        {mockSubscriptions.map((sub) => (
          <motion.button
            key={sub.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(sub.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
              filter === sub.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-dark-100'
            }`}
          >
            <img
              src={sub.avatar}
              alt={sub.name}
              className="w-6 h-6 rounded-full"
            />
            {sub.name}
          </motion.button>
        ))}
      </div>

      {/* Videos Grid */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
        }
      >
        {(filter === 'all' ? allVideos : mockSubscriptions.find(s => s.id === filter)?.videos).map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            className={viewMode === 'list' ? 'flex gap-4' : ''}
          />
        ))}
      </div>

      {/* Empty State */}
      {allVideos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-semibold mb-2">No videos yet</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Videos from your subscriptions will appear here
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Subscriptions;