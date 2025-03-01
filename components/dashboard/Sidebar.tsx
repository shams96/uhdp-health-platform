'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  active: boolean;
}

const NavItem = ({ href, icon, label, active }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active 
          ? 'bg-primary-100 text-primary-700' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span className={active ? 'text-primary-600' : 'text-gray-500'}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/dashboard', icon: '📊', label: 'Dashboard' },
    { href: '/dashboard/map', icon: '🗺️', label: 'Map View' },
    { href: '/dashboard/forms', icon: '📝', label: 'Data Forms' },
    { href: '/dashboard/workers', icon: '👥', label: 'Field Workers' },
    { href: '/dashboard/notifications', icon: '🔔', label: 'Notifications' },
    { href: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary-600">UHDP</h1>
        <p className="text-sm text-gray-500">Health Data Platform</p>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              👤
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">User Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
