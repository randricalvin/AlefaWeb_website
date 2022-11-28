import React from 'react'
import blob from '../assets/blob1.svg'
import Presentation from './Presentation'
import developpeur_orleans from '../assets/developpeur_orleans.svg'

const Accueil = () => {
  return (
    <div id='#' className='accueil flex'>
        <img src={blob} alt="blob animation" className='blob-animation'/>
      <div className='accueil-presentation flex justify-between items-center'>
        <div className='flex items-center'>
          <Presentation />
        </div>
        <div className="">
          <img src={developpeur_orleans} alt="Développeur web freelance à Orléans" className='homeimage'/>
        </div>
      </div>
    </div>
  )
}

export default Accueil