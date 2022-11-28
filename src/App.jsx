import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
