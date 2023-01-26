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
import Footer from './components/Footer'
import Blog2 from './components/blog/Blog2'
import Offre from './components/Offers'
import Contact from './components/Contact'
import Realisations from './components/Realisations'

function App() {
// make a function when the user click on the link to the blog page, it will scroll to the top of the page and hide the home page

  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creation-de-sites-internet-orleans" element={<Offre />} />
          <Route path="/realisation-de-sites-internet-orleans" element={<Realisations />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/7-raisons-creer-un-site-internet-pour-votre-entreprise" element={<Blog1 />}/>
          {/* <Route path="/blog/qui-est-derriere-alefaweb" element={<Blog2 />}/> */}
          <Route path="/realisation-de-sites-internet-orleans/mycryptodata" element={<MycryptodataBlog />} />
          <Route path="/realisation-de-sites-internet-orleans/chatchatgo" element={<ChatchatgoBlog />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  )
}

export default App
