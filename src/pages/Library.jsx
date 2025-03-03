import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsClockHistory, BsHeart, BsCollection, BsClock } from 'react-icons/bs';
import LibrarySection from '../components/library/LibrarySection';
import VideoHistoryCard from '../components/library/VideoHistoryCard';
import PlaylistCard from '../components/library/PlaylistCard';
import { useNavigate } from 'react-router-dom';

// Mock data
const mockHistory = [
  {
    id: '1',
    title: 'Advanced React Patterns and Best Practices',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    channel: 'React Masters',
    views: '45K',
    duration: '18:24',
    watchedAt: '2 hours ago'
  },
  {
    id: '2',
    title: 'Making the Perfect Japanese Ramen',
    thumbnail: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1',
    channel: 'Cooking Adventures',
    views: '102K',
    duration: '12:45',
    watchedAt: '5 hours ago'
  }
];

const mockPlaylists = [
  {
    id: '1',
    title: 'Favorite Music Videos',
    thumbnails: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae'
    ],
    videoCount: 15,
    visibility: 'Public'
  },
  {
    id: '2',
    title: 'Programming Tutorials',
    thumbnails: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2',
      'https://images.unsplash.com/photo-1605379399642-870262d3d051'
    ],
    videoCount: 8,
    visibility: 'Private'
  }
];

const Library = () => {
  const [history, setHistory] = useState(mockHistory);
  const [playlists] = useState(mockPlaylists);
  const navigate = useNavigate();

  const removeFromHistory = (videoId) => {
    setHistory(history.filter(video => video.id !== videoId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Watch History */}
      <LibrarySection
        title="Watch History"
        icon={BsClockHistory}
        isEmpty={history.length === 0}
        emptyStateProps={{
          title: "No watch history",
          description: "Videos you watch will appear here",
          actionText: "Discover videos",
          onAction: () => navigate('/explore')
        }}
      >
        <AnimatePresence>
          <div className="space-y-4">
            {history.map(video => (
              <VideoHistoryCard
                key={video.id}
                video={video}
                onRemove={removeFromHistory}
              />
            ))}
          </div>
        </AnimatePresence>
      </LibrarySection>

      {/* Playlists */}
      <LibrarySection
        title="Playlists"
        icon={BsCollection}
        isEmpty={playlists.length === 0}
        emptyStateProps={{
          title: "No playlists yet",
          description: "Create playlists to organize your favorite videos",
          actionText: "Create playlist",
          onAction: () => {/* Implement create playlist */}
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {playlists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </LibrarySection>

      {/* Liked Videos */}
      <LibrarySection
        title="Liked Videos"
        icon={BsHeart}
        isEmpty={true}
        emptyStateProps={{
          title: "No liked videos",
          description: "Videos you like will appear here",
          actionText: "Find videos to like",
          onAction: () => navigate('/explore')
        }}
      />

      {/* Watch Later */}
      <LibrarySection
        title="Watch Later"
        icon={BsClock}
        isEmpty={true}
        emptyStateProps={{
          title: "No videos saved for later",
          description: "Save videos to watch later",
          actionText: "Browse videos",
          onAction: () => navigate('/explore')
        }}
      />
    </div>
  );
};

export default Library;