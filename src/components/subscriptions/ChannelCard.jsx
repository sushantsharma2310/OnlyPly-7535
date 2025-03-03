import React from 'react';
import { motion } from 'framer-motion';
import { BsBell, BsBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channel, isSubscribed = true, onToggleNotifications }) => {
  const [notificationsOn, setNotificationsOn] = React.useState(true);

  const handleNotificationToggle = () => {
    setNotificationsOn(!notificationsOn);
    onToggleNotifications?.(channel.id, !notificationsOn);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-dark-100 rounded-lg p-4 flex items-center gap-4"
    >
      <Link to={`/channel/${channel.id}`} className="flex-shrink-0">
        <img
          src={channel.avatar}
          alt={channel.name}
          className="w-12 h-12 rounded-full"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/channel/${channel.id}`}>
          <h3 className="font-medium truncate">{channel.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {channel.subscribers} subscribers
        </p>
      </div>
      <button
        onClick={handleNotificationToggle}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200"
      >
        {notificationsOn ? (
          <BsBellFill className="text-primary-600" />
        ) : (
          <BsBell />
        )}
      </button>
    </motion.div>
  );
};

export default ChannelCard;