import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} text-white mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  </div>
)

const AlertCard = ({ title, message, type }) => (
  <div className={`p-4 rounded-lg ${type === 'warning' ? 'bg-amber-50 border-l-4 border-amber-500' : 'bg-green-50 border-l-4 border-green-500'}`}>
    <div className="flex">
      <div className="flex-shrink-0">
        {type === 'warning' ? '⚠️' : '📈'}
      </div>
      <div className="ml-3">
        <h3 className={`text-sm font-medium ${type === 'warning' ? 'text-amber-800' : 'text-green-800'}`}>{title}</h3>
        <div className={`mt-2 text-sm ${type === 'warning' ? 'text-amber-700' : 'text-green-700'}`}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  </div>
)

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('week')
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setTimeRange('week')}
                  className={`px-3 py-1 rounded-md ${timeRange === 'week' ? 'bg-primary-100 text-primary-700' : 'bg-white text-gray-600'}`}
                >
                  Week
                </button>
                <button 
                  onClick={() => setTimeRange('month')}
                  className={`px-3 py-1 rounded-md ${timeRange === 'month' ? 'bg-primary-100 text-primary-700' : 'bg-white text-gray-600'}`}
                >
                  Month
                </button>
                <button 
                  onClick={() => setTimeRange('year')}
                  className={`px-3 py-1 rounded-md ${timeRange === 'year' ? 'bg-primary-100 text-primary-700' : 'bg-white text-gray-600'}`}
                >
                  Year
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Polio Vaccinations" 
                value="12,584" 
                icon="💉" 
                color="bg-blue-500"
              />
              <StatCard 
                title="Nutrition Assessments" 
                value="8,392" 
                icon="🍎" 
                color="bg-green-500"
              />
              <StatCard 
                title="WASH Services" 
                value="5,147" 
                icon="💧" 
                color="bg-purple-500"
              />
              <StatCard 
                title="Compliance Rate" 
                value="87.3%" 
                icon="✅" 
                color="bg-amber-500"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Vaccination Trends</h2>
                <div className="h-80 flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500">Vaccination trend chart would appear here</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
                <div className="space-y-4">
                  <AlertCard 
                    type="warning"
                    title="Low Vaccination Rate" 
                    message="Sindh province showing 15% decrease in vaccination coverage compared to last month."
                  />
                  <AlertCard 
                    type="success"
                    title="Improved Compliance" 
                    message="Punjab region showing 12% increase in vaccination acceptance rates."
                  />
                  <AlertCard 
                    type="warning"
                    title="Data Collection Gap" 
                    message="Missing nutrition data from 3 districts in Balochistan."
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Coverage Map</h2>
              <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500">Geographic coverage map would appear here</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
