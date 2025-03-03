import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationCard from '../components/notifications/NotificationCard';
import NotificationFilters from '../components/notifications/NotificationFilters';

const mockNotifications = [
  {
    id: 1,
    type: 'subscription',
    user: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    message: 'subscribed to your channel',
    timestamp: '2 minutes ago',
    unread: true,
    link: '/channel'
  },
  {
    id: 2,
    type: 'like',
    user: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    message: 'liked your video',
    preview: 'Advanced React Patterns Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    timestamp: '1 hour ago',
    unread: true,
    link: '/watch/123'
  },
  {
    id: 3,
    type: 'comment',
    user: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    message: 'commented on your video',
    preview: 'Great tutorial! Really helped me understand the concepts better.',
    timestamp: '3 hours ago',
    unread: false,
    link: '/watch/123#comments'
  },
  {
    id: 4,
    type: 'upload',
    user: 'Tech Masters',
    avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    message: 'posted a new video you might like',
    preview: 'Building a Full-Stack App with Next.js',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    timestamp: '5 hours ago',
    unread: true,
    link: '/watch/456'
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const handleDismiss = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, unread: false })));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (showUnreadOnly && !notif.unread) return false;
    if (activeFilter === 'all') return true;
    return notif.type === activeFilter;
  });

  const unreadCount = notifications.filter(notif => notif.unread).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showUnreadOnly}
              onChange={(e) => setShowUnreadOnly(e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm">Unread only</span>
          </label>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMarkAllRead}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Mark all as read
          </motion.button>
        </div>
      </div>

      {unreadCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 px-4 py-2 rounded-lg mb-6"
        >
          You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
        </motion.div>
      )}

      <NotificationFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <AnimatePresence mode="popLayout">
        <div className="space-y-4">
          {filteredNotifications.map(notification => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onDismiss={handleDismiss}
            />
          ))}
        </div>
      </AnimatePresence>

      {filteredNotifications.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500 dark:text-gray-400"
        >
          No notifications to show
        </motion.div>
      )}
    </div>
  );
};

export default Notifications;