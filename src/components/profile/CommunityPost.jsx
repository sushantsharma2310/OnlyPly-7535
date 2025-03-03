import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsHeart, BsHeartFill, BsChat, BsShare } from 'react-icons/bs';

const CommunityPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-lg shadow-sm p-6 space-y-4"
    >
      {/* Post Header */}
      <div className="flex items-center gap-3">
        <img
          src={post.authorAvatar}
          alt={post.author}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-medium">{post.author}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <div>
        <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="mt-4 rounded-lg w-full object-cover"
          />
        )}
      </div>

      {/* Poll (if exists) */}
      {post.poll && (
        <div className="space-y-2 mt-4">
          {post.poll.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full p-3 bg-gray-100 dark:bg-dark-200 rounded-lg text-left relative overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 bg-primary-100 dark:bg-primary-900/20"
                style={{ width: `${option.votes}%` }}
              />
              <span className="relative z-10 flex justify-between">
                <span>{option.text}</span>
                <span>{option.votes}%</span>
              </span>
            </motion.button>
          ))}
        </div>
      )}

      {/* Interaction Buttons */}
      <div className="flex items-center gap-6 pt-2">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
        >
          {isLiked ? (
            <BsHeartFill className="text-red-500" />
          ) : (
            <BsHeart />
          )}
          <span>{post.likes}</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
        >
          <BsChat />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <BsShare />
          <span>Share</span>
        </button>
      </div>
    </motion.div>
  );
};

export default CommunityPost;