import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home.jsx'
import ScanDetails from './pages/home/components/scanDetails/ScanDetails.jsx'

const App = () => (
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <Router>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path="/scan/:id" element={<ScanDetails/>}/>
      </Routes>
    </Router>
  </>
)

export default App
