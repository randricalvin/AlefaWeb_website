import React from 'react'
import blob from '../assets/blob1.svg'
import Presentation from './Presentation'
import Arrow from './Arrow'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Accueil.scss"
import { Helmet } from 'react-helmet'

const Accueil = () => {

  return (
    <div id='#' className='accueil lg:w-5/6 mx-auto'>
      <Helmet>
        <title>AlefaWeb | Développeur web à Orléans - Création site internet</title>
        <link rel="canonical" href="https://www.alefaweb.com/" />
        <meta name="description" content="Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, e-commerce et application web. Ensemble nous chosirons la solution adaptée à votre besoin." />
        <meta property='og:title' content='Accueil | Développeur web freelance à Orléans - Création site internet à Orléans' />
        <meta property='og:description' content='Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, e-commerce et application web. Ensemble nous chosirons la solution adaptée à votre besoin.' />
        <meta property='og:url' content='https://www.alefaweb.com/' />
      </Helmet>

        <img src={blob} alt="blob animation" className='blob-animation1'/>
        
      <div className='accueil-presentation flex flex-col lg:justify-around'>
          <div className='flex items-center accueil-presentation-element'>
            <Presentation />
          </div>

        <div className='flex flex-col'>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default Accueil