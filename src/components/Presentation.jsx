import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import TexteHomePage from './TexteHomePage'
import "./Presentation.scss"

const Presentation = () => {
  return (
    <BrowserRouter>
    <section className='font-serif'>
        <div className='text-4xl'>
            <div className=''>
                <h1>Développeur web freelance basé à 
                    <span className='text-[#7B52FB] text-presentation pb-2 my-2'> Orléans</span> 
                    <span> et disponible partout en France</span> 
                </h1>
            </div>
            <div>
                <TexteHomePage />
            </div>
        </div>
        <div className='my-8 flex justify-start '>
            <Link smooth to='/#offres' className='text-lg uppercase py-3 px-4 mr-8 rounded-full bg-[#fd7d28] text-white hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                Voir les offres 
            </Link>
            <Link smooth to='/#contact' className='text-lg uppercase py-3 px-6 rounded-full bg-[#fd7d28] text-white hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                Devis gratuit
            </Link>
        </div>
    </section>
    </BrowserRouter>
  )
}

export default Presentation