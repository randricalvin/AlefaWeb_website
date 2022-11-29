import React from 'react'
import blob from '../assets/blob1.svg'
import Presentation from './Presentation'
import developpeur_orleans from '../assets/developpeur_orleans.svg'
import Arrow from './Arrow'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Accueil = () => {

  return (
    <div id='#' className='accueil '>
        <img src={blob} alt="blob animation" className='blob-animation'/>

      <div className='accueil-presentation flex flex-col justify-evenly'>
        <div className='flex justify-between'>
          <div className='pt-14'>
            <Presentation />
          </div>
          <div className=""data-aos="fade-up" data-aos-duration="1000">
            <img src={developpeur_orleans} alt="Développeur web freelance à Orléans" className='homeimage'/>
          </div>
        </div>

        <div className='flex flex-col pb-8'>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default Accueil