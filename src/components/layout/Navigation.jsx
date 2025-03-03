import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AiFillHome, 
  AiOutlineCompass, 
  AiFillBell, 
  AiFillFolder, 
  AiFillProfile,
  AiOutlineSetting 
} from 'react-icons/ai';
import { BsCameraReelsFill } from 'react-icons/bs';

const navItems = [
  { icon: AiFillHome, label: 'Home', path: '/' },
  { icon: AiOutlineCompass, label: 'Explore', path: '/explore' },
  { icon: AiFillBell, label: 'Notifications', path: '/notifications' },
  { icon: AiFillFolder, label: 'Library', path: '/library' },
  { icon: AiFillProfile, label: 'Profile', path: '/profile' },
  { icon: AiOutlineSetting, label: 'Settings', path: '/settings' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 bg-white dark:bg-dark-200 shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary-600">OnlyPly</h1>
        </div>
        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600'
                  : 'hover:bg-gray-100 dark:hover:bg-dark-100'
              }`}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center"
            >
              <item.icon
                className={`text-xl ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Floating Upload Button */}
      <Link to="/upload">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed right-6 bottom-20 lg:bottom-6 bg-primary-600 text-white p-4 rounded-full shadow-lg"
        >
          <BsCameraReelsFill className="text-xl" />
        </motion.button>
      </Link>
    </>
  );
};

export default Navigation;