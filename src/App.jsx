import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NavBar from './components/NavBar'
import './App.css'
import MycryptodataBlog from './components/MycryptodataBlog'
import ChatchatgoBlog from './components/ChatchatgoBlog'
import MentionsLegales from './components/MentionsLegales'
import Blog1 from './components/blog/Blog1'

function App() {
// make a function when the user click on the link to the blog page, it will scroll to the top of the page and hide the home page

  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/les-7-avantages-d-avoir-un-site-internet" element={<Blog1 />}/>
          <Route path="/realisations/mycryptodata" element={<MycryptodataBlog />} />
          <Route path="/realisations/chatchatgo" element={<ChatchatgoBlog />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
