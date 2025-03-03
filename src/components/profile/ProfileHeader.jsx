import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsCamera, BsPencil, BsGear } from 'react-icons/bs';

const ProfileHeader = ({ profile, isOwnProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    // Implement save logic here
    setIsEditing(false);
  };

  return (
    <div className="relative bg-white dark:bg-dark-100 rounded-lg shadow-sm overflow-hidden">
      {/* Cover Photo */}
      <div className="relative h-48 bg-gray-300 dark:bg-dark-200">
        <img
          src={profile.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        {isOwnProfile && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full"
          >
            <BsCamera className="text-xl" />
          </motion.button>
        )}
      </div>

      {/* Profile Info */}
      <div className="px-6 pb-6">
        <div className="flex justify-between items-end -mt-12">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-4 border-white dark:border-dark-100"
            />
            {isOwnProfile && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full"
              >
                <BsCamera className="text-sm" />
              </motion.button>
            )}
          </div>
          {isOwnProfile && (
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-200 rounded-lg"
              >
                <BsPencil />
                Edit Profile
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200"
              >
                <BsGear className="text-xl" />
              </motion.button>
            </div>
          )}
        </div>

        {isEditing ? (
          <div className="mt-4 space-y-4">
            <input
              type="text"
              value={editedProfile.name}
              onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg"
            />
            <textarea
              value={editedProfile.bio}
              onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg"
              rows="3"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400"
              >
                Cancel
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{profile.bio}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{profile.subscribers} subscribers</span>
              <span>{profile.videos} videos</span>
              <span>Joined {profile.joinDate}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;