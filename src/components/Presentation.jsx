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
            <h1>
                Développeur web
            </h1>

            
            <div className='py-6'>
                freelance à 
                    <span className='text-[#7B52FB] text-presentation pb-2'> Orléans</span> 
            </div>
            <div>
                <TexteHomePage />
            </div>
        </div>
        <div className='my-12 flex justify-start '>
            <Link smooth to='/#offres' className='text-xl py-3 px-8 rounded-full bg-[#FF6501] text-white hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                Offres 
            </Link>
            <Link smooth to='/#contact' className='mx-8 text-xl py-3 px-8 rounded-full bg-[#FF6501] text-white hover:text-white transition duration-300 ease-in-out hover:scale-105'>
                Devis gratuit
            </Link>
        </div>
    </section>
    </BrowserRouter>
  )
}

export default Presentation