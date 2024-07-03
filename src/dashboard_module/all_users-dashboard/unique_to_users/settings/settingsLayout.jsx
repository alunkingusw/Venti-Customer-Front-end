/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Notification from '../../../common/notification';
import Security_settings from '../security_settings';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
  ];

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="flex mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`mr-4 pb-2 ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 dark:text-white'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg p-6">
        {activeTab === 'account' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">Private Account</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">Hide Activity Status</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <Security_settings/>
        )}

        {activeTab === 'notifications' && (
            <Notification/>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;