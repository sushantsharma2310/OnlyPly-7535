import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsShield, BsCashCoin, BsPerson, BsPalette, BsBell } from 'react-icons/bs';
import SettingsSection from '../components/settings/SettingsSection';
import ToggleSwitch from '../components/settings/ToggleSwitch';

const Settings = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: true,
    allowComments: true,
    showSubscriptions: true,
    monetization: false,
    contentGuidelines: true,
    autoplay: true,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Account Settings */}
      <SettingsSection
        title="Account Settings"
        icon={BsPerson}
        description="Manage your personal information and security preferences"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
            />
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-4">Change Password</h3>
            <div className="space-y-4">
              <input
                type="password"
                name="oldPassword"
                placeholder="Current Password"
                value={formData.oldPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-dark-200"
              />
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Privacy Settings */}
      <SettingsSection
        title="Privacy Settings"
        icon={BsShield}
        description="Control who can see your content and interact with you"
      >
        <div className="space-y-6">
          <ToggleSwitch
            label="Allow Comments"
            description="Let viewers comment on your videos"
            enabled={settings.allowComments}
            onChange={() => handleToggle('allowComments')}
          />
          <ToggleSwitch
            label="Show Subscriptions"
            description="Make your subscriptions visible to others"
            enabled={settings.showSubscriptions}
            onChange={() => handleToggle('showSubscriptions')}
          />
          <ToggleSwitch
            label="Content Guidelines"
            description="Automatically filter inappropriate content"
            enabled={settings.contentGuidelines}
            onChange={() => handleToggle('contentGuidelines')}
          />
        </div>
      </SettingsSection>

      {/* Monetization Settings */}
      <SettingsSection
        title="Monetization"
        icon={BsCashCoin}
        description="Manage your revenue streams and advertising preferences"
      >
        <div className="space-y-6">
          <ToggleSwitch
            label="Enable Monetization"
            description="Allow ads to run on your videos"
            enabled={settings.monetization}
            onChange={() => handleToggle('monetization')}
          />
          {settings.monetization && (
            <div className="p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
              <h4 className="font-medium mb-2">Revenue Share</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You'll receive 60% of the revenue generated from ads on your videos
              </p>
            </div>
          )}
        </div>
      </SettingsSection>

      {/* Notification Settings */}
      <SettingsSection
        title="Notifications"
        icon={BsBell}
        description="Manage your notification preferences"
      >
        <div className="space-y-6">
          <ToggleSwitch
            label="Email Notifications"
            description="Receive updates via email"
            enabled={settings.emailNotifications}
            onChange={() => handleToggle('emailNotifications')}
          />
          <ToggleSwitch
            label="Push Notifications"
            description="Receive notifications on your device"
            enabled={settings.pushNotifications}
            onChange={() => handleToggle('pushNotifications')}
          />
        </div>
      </SettingsSection>

      {/* Appearance Settings */}
      <SettingsSection
        title="Appearance"
        icon={BsPalette}
        description="Customize your viewing experience"
      >
        <div className="space-y-6">
          <ToggleSwitch
            label="Dark Mode"
            description="Switch between light and dark themes"
            enabled={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
          <ToggleSwitch
            label="Autoplay Videos"
            description="Automatically play next video"
            enabled={settings.autoplay}
            onChange={() => handleToggle('autoplay')}
          />
        </div>
      </SettingsSection>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium"
      >
        Save Changes
      </motion.button>
    </div>
  );
};

export default Settings;