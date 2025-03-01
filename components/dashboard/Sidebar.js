import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router = useRouter()
  
  const navItems = [
    { href: '/dashboard', icon: '📊', label: 'Dashboard' },
    { href: '/dashboard/map', icon: '🗺️', label: 'Map View' },
    { href: '/dashboard/forms', icon: '📝', label: 'Data Forms' },
    { href: '/dashboard/workers', icon: '👥', label: 'Field Workers' },
    { href: '/dashboard/notifications', icon: '🔔', label: 'Notifications' },
    { href: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
  ]

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary-600">UHDP</h1>
        <p className="text-sm text-gray-500">Health Data Platform</p>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href
            
            return (
              <Link href={item.href} key={item.href}>
                <a className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}>
                  <span className={isActive ? 'text-primary-600' : 'text-gray-500'}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </Link>
            )
          })}
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
  )
}
