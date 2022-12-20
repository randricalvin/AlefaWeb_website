import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink} from 'react-router-hash-link'
import TexteHomePage from './TexteHomePage'
import "./Presentation.scss"

const Presentation = () => {
  return (
    
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
            <HashLink smooth to='/#offres' className='text-sm uppercase px-5 py-3 mr-8 rounded-full bg-[#fd7d28] text-white hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                Voir les offres 
            </HashLink>
            <HashLink smooth to='/#contact' className='text-sm uppercase px-5 py-3 rounded-full bg-[#fd7d28] text-white hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                Devis gratuit
            </HashLink>
        </div>
    </section>
    
  )
}

export default Presentation