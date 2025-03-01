import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import FormsPage from './pages/FormsPage'
import MapPage from './pages/MapPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/forms" element={<FormsPage />} />
      <Route path="/dashboard/map" element={<MapPage />} />
    </Routes>
  )
}

export default App
