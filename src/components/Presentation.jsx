import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink} from 'react-router-hash-link'
import TexteHomePage from './TexteHomePage'
import "./Presentation.scss"
import developpeur_orleans from '../assets/developpeur_orleans.svg'

const Presentation = () => {
  return (
    <section className='font-serif presentation flex items-center'>
        <div className='presentation-header'>
            <div className='text-4xl'>
                <div className='presentation-title'>
                    <h1 className=''>Développeur web freelance basé à 
                        <span className='text-[#FF6501] text-presentation pb-2 my-2'> Orléans </span> 
                        et disponible partout en France
                    </h1>
                </div>

                <div className=""data-aos="fade-up" data-aos-duration="1000">
                    <img src={developpeur_orleans} alt="Développeur web freelance à Orléans" className='homeimage-mobile'/>
                </div>

                <div>
                    <TexteHomePage />
                </div>
            </div>
            <div className='button-presentation'>
                <div className='my-8 flex justify-start'>
                    <HashLink smooth to='/#offres' className='button-presentation1 text-sm uppercase px-5 py-3 lg:mr-8 rounded-full bg-[#fd7d28] text-white hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                        Voir les offres 
                    </HashLink>
                    <HashLink smooth to='/#contact' className='text-sm uppercase px-5 py-3 rounded-full bg-[#fd7d28] text-white hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                        Devis gratuit
                    </HashLink>
                </div>
            </div>
        </div>
        <div className=""data-aos="fade-up" data-aos-duration="1000">
            <img src={developpeur_orleans} alt="Développeur web freelance à Orléans" className='homeimage'/>
        </div>
    </section>
    
  )
}

export default Presentation