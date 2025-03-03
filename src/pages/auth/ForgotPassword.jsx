import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthLayout from '../../components/auth/AuthLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement password reset logic here
      setStatus({
        type: 'success',
        message: 'Password reset instructions sent to your email'
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Failed to send reset instructions'
      });
    }
  };

  return (
    <AuthLayout title="Reset your password">
      <div className="mt-8 space-y-6">
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Enter your email address and we'll send you instructions to reset your password.
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {status.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm text-center ${
                status.type === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm dark:bg-dark-200"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-sm text-center">
            <Link
              to="/signin"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Back to sign in
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Send Reset Instructions
          </motion.button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;