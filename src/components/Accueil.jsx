import React from 'react'
import blob from '../assets/blob1.svg'
import Presentation from './Presentation'

import Arrow from './Arrow'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Accueil.scss"

const Accueil = () => {

  return (
    <div id='#' className='accueil w-5/6 mx-auto'>
        <img src={blob} alt="blob animation" className='blob-animation1'/>
        
      <div className='accueil-presentation flex flex-col justify-around'>
        <div className=''>
          <div className='w-1/2 flex items-center accueil-presentation-element'>
            <Presentation />
          </div>
          
        </div>

        <div className='flex flex-col'>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default Accueil