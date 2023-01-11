import React from 'react'
import Accueil from '../components/Accueil'
import Services from '../components/Services'
import Offers from '../components/Offers'
import Contact from '../components/Contact'
import Techs from '../components/Techs'
import Realisations from '../components/Realisations'
import { Helmet } from 'react-helmet'

const Home = () => {

  return (
      <div className='home' id='home'>
        <Helmet>
          <title>AlefaWeb | Développeur web à Orléans - Création site internet</title>
          <link rel="canonical" href="https://www.alefaweb.com/" />
          <meta name="description" content="Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, e-commerce et application web. Ensemble nous chosirons la solution adaptée à votre besoin." />
          <meta property='og:title' content='Accueil | Développeur web freelance à Orléans - Création site internet à Orléans' />
          <meta property='og:description' content='Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, e-commerce et application web. Ensemble nous chosirons la solution adaptée à votre besoin.' />
          <meta property='og:url' content='https://www.alefaweb.com/' />
        </Helmet>
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