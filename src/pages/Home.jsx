import React from 'react'
import Accueil from '../components/Accueil'
import Services from '../components/Services'
import Offers from '../components/Offers'
import Contact from '../components/Contact'
import Techs from '../components/Techs'
import Realisations from '../components/Realisations'

const Home = () => {

  return (
      <div className='home' id='home'>
        <Accueil />
        <Services />
        <Techs />
        <Offers />
        <Realisations />
        <Contact />
      </div>

  )
}

export default Home