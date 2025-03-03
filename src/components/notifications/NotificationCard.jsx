import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsHeart, BsChat, BsBell, BsPersonPlus, BsPlayBtn } from 'react-icons/bs';

const getIcon = (type) => {
  switch (type) {
    case 'like':
      return <BsHeart className="text-red-500" />;
    case 'comment':
      return <BsChat className="text-blue-500" />;
    case 'subscription':
      return <BsPersonPlus className="text-green-500" />;
    case 'upload':
      return <BsPlayBtn className="text-purple-500" />;
    default:
      return <BsBell className="text-gray-500" />;
  }
};

const NotificationCard = ({ notification, onDismiss }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-start gap-4 p-4 rounded-lg ${
        notification.unread
          ? 'bg-primary-50 dark:bg-dark-100'
          : 'bg-white dark:bg-dark-200'
      }`}
    >
      <div className="flex-shrink-0">
        {notification.avatar ? (
          <img
            src={notification.avatar}
            alt={notification.user}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-100 flex items-center justify-center">
            {getIcon(notification.type)}
          </div>
        )}
      </div>

      <div className="flex-1">
        <Link
          to={notification.link}
          className="block hover:text-primary-600 transition-colors"
        >
          <p className="text-sm">
            <span className="font-medium">{notification.user}</span>{' '}
            {notification.message}
          </p>
          {notification.preview && (
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {notification.preview}
            </div>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {notification.timestamp}
          </span>
        </Link>
      </div>

      {notification.thumbnail && (
        <Link to={notification.link} className="flex-shrink-0">
          <img
            src={notification.thumbnail}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-lg"
          />
        </Link>
      )}

      <button
        onClick={() => onDismiss(notification.id)}
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
      >
        ×
      </button>
    </motion.div>
  );
};

export default NotificationCard;