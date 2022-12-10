import React from 'react'
import logoalefaweb from '../assets/Rgb_black.svg'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from '../pages/Blog'

const NavBar = () => {

    
  return (
    <div>
            <nav className='navbar flex justify-center items-center shadow-md'>
                <div className='flex justify-between w-5/6 mx-auto items-center'>
                    <div className='w-1/6'>
                        <HashLink  smooth to='/#' className='flex justify-start'>
                            <img src={logoalefaweb} alt='logo' className='h-11' />
                        </HashLink>
                    </div>
                    <div className='w-4/6'>
                        <div className='flex justify-center items-center gap-12'>
                            <HashLink  smooth to='/#' className='text-xl list'>Accueil</HashLink>
                            <HashLink  smooth to='/#services' className='text-xl list'>Services</HashLink>
                            <HashLink  smooth to='/#offres' className='text-xl list'>Offres</HashLink>
                            <HashLink  smooth to='/#realisations' className='text-xl list'>Réalisations</HashLink>
                            <HashLink  smooth to='blog' className='text-xl list' component={Blog}>Blog</HashLink>
                        </div>
                    </div>
                    <div className='w-1/6'>
                        <div className='flex justify-end'>
                            <HashLink  smooth to='/#contact' className='flex items-center text-white bg-[#fd7d28] py-2 px-8 rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>Contact</HashLink>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavBar