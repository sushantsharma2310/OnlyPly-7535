import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsGithub, BsArrowRight } from 'react-icons/bs';
import AuthLayout from '../../components/auth/AuthLayout';
import SocialButton from '../../components/auth/SocialButton';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('onboardingComplete', 'true');
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden"
      >
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full -ml-20 -mb-20" />
        </div>

        {/* Content */}
        <div className="relative">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h2>
            <p className="text-gray-600 dark:text-gray-400">Sign in to continue your journey</p>
          </motion.div>

          <div className="space-y-4">
            <SocialButton
              icon={FcGoogle}
              label="Continue with Google"
              provider="google"
              className="bg-white hover:bg-gray-50"
            />
            <SocialButton
              icon={BsApple}
              label="Continue with Apple"
              provider="apple"
              className="bg-black text-white hover:bg-gray-900"
            />
            <SocialButton
              icon={BsGithub}
              label="Continue with GitHub"
              provider="github"
              className="bg-gray-800 text-white hover:bg-gray-700"
            />
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <div className="flex items-center justify-between text-sm">
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Create account
              </Link>
              <Link to="/forgot-password" className="text-blue-600 hover:text-blue-500 font-medium">
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Sign in
              <BsArrowRight />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;