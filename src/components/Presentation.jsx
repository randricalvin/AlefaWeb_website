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
            <div className='lg:text-4xl'>
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
            <div className=''>
                <div className='mt-8 flex lg:justify-start button-presentation'>
                    <HashLink smooth to='/#offres' className='lg:mr-10 text-white button-presentation1 bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase'>
                        Voir les offres 
                    </HashLink>
                    <HashLink smooth to='/#contact' className='text-white button-presentation2 bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase'>
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