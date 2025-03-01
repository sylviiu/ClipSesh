import React from 'react';
import { motion } from 'framer-motion';

const ConfigPanel = ({ config, handleConfigChange, handleConfigSubmit }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="col-span-1 w-full bg-neutral-300 dark:bg-neutral-800 text-neutral-900 dark:text-white transition duration-200 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-3 border-neutral-400 dark:border-neutral-700 flex items-center">
        <svg className="mr-3 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Admin Config
      </h2>
      
      {/* Updated to a single form for both settings */}
      <form onSubmit={handleConfigSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="denyThreshold" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Deny Threshold:
            </label>
            <input
              type="number"
              id="denyThreshold"
              name="denyThreshold"
              value={config.denyThreshold}
              onChange={handleConfigChange}
              className="w-full px-4 py-2 bg-white dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="1"
            />
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Number of deny votes needed to reject a clip
            </p>
          </div>

          <div>
            <label htmlFor="latestVideoLink" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Latest Video Link:
            </label>
            <input
              type="text"
              id="latestVideoLink"
              name="latestVideoLink"
              value={config.latestVideoLink}
              onChange={handleConfigChange}
              className="w-full px-4 py-2 bg-white dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://www.youtube.com/watch?v=..."
            />
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              YouTube URL to display on the home page
            </p>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition duration-200 flex items-center justify-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Update Settings
        </button>
      </form>
    </motion.div>
  );
};

export default ConfigPanel;
