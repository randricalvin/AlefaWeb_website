import React from 'react'
import Accueil from '../components/Accueil'
import Services from '../components/Services'
import Offers from '../components/Offers'
import Contact from '../components/Contact'

const Home = () => {
  return (
      <div className='home'>
        <Accueil />
        <Services />
        <Offers />
        <Contact />
      </div>

  )
}

export default Home