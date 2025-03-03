import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsHeart, BsHeartFill, BsReply, BsPinAngle } from 'react-icons/bs';

const Comment = ({ comment, isNested = false }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={`${isNested ? 'ml-12' : ''}`}>
      <div className="flex gap-4">
        <img
          src={comment.avatar}
          alt={comment.username}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{comment.username}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {comment.timestamp}
            </span>
            {comment.isPinned && (
              <span className="flex items-center gap-1 text-sm text-primary-600">
                <BsPinAngle />
                Pinned
              </span>
            )}
          </div>
          <p className="mt-1">{comment.content}</p>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 text-sm"
            >
              {isLiked ? (
                <BsHeartFill className="text-primary-600" />
              ) : (
                <BsHeart />
              )}
              {comment.likes}
            </button>
            <button className="flex items-center gap-1 text-sm">
              <BsReply />
              Reply
            </button>
          </div>
          {comment.replies?.length > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="text-sm text-primary-600 mt-2"
            >
              {showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showReplies && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4"
          >
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} isNested />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Comments = ({ comments }) => {
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{comments.length} Comments</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-100 dark:bg-dark-100 rounded-lg px-4 py-2"
        >
          <option value="newest">Newest First</option>
          <option value="top">Top Comments</option>
        </select>
      </div>

      {/* Add Comment Form */}
      <div className="flex gap-4 mb-8">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 bg-transparent border-b border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary-600 pb-2"
        />
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;