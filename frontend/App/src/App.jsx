import { Route, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import HomePage from './pages/HomePage'
import ImageFilteringPage from './pages/ImageFilteringPage'
import SpectrumViewerPage from './pages/SpectrumViewerPage'
import ShapeDrawerPage from './pages/ShapeDrawerPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features/image-filtering" element={<ImageFilteringPage />} />
        <Route path="/features/spectrum-viewer" element={<SpectrumViewerPage />} />
        <Route path="/features/shape-drawer" element={<ShapeDrawerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

