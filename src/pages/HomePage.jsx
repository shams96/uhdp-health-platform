import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-primary-500 to-primary-700 w-full">
        <div className="container mx-auto px-4 py-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Universal Health Data Platform</h1>
            <p className="text-xl md:text-2xl mb-8">
              Monitor and analyze polio vaccination integration with other essential health services in Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="btn-primary">
                Go to Dashboard
              </Link>
              <Link to="/dashboard" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-md transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Field Data Collection</h3>
              <p className="text-gray-600">
                Track polio vaccination, nutrition monitoring, and WASH services with offline capability and geo-tagging.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
              <p className="text-gray-600">
                Visualize vaccination coverage, nutrition progress, and generate customizable reports.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Geographical Mapping</h3>
              <p className="text-gray-600">
                Track field worker locations, visualize service coverage, and identify underserved areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
