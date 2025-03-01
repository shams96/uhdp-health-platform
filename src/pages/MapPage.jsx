import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function MapPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Map View</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Coverage Map</h2>
              <div className="h-[calc(100vh-240px)] flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500">Geographic coverage map would appear here</p>
                  <p className="text-gray-400 text-sm">(Interactive map visualization)</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
