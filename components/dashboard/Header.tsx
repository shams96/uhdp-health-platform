'use client';

import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          🔔
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          ❓
        </button>
      </div>
    </header>
  );
}
