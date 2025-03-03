import React from 'react';
import { motion } from 'framer-motion';

const ToggleSwitch = ({ label, description, enabled, onChange }) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-medium">{label}</h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          enabled ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <motion.span
          animate={{ x: enabled ? 20 : 0 }}
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow"
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;