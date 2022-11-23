import React from 'react'
import { Link } from 'react-router-dom'
import logoalefaweb from '../assets/Rgb_black.svg'

const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-center h-20 px-4 shadow-md fixed w-full bg-white top-0'>
        <div >
            <img src={logoalefaweb} alt="logo" className='h-16' />
        </div>
        <nav className='flex gap-10'> 
            <div className='navli flex flex-col w-28'>
                <Link to="/" className='flex justify-center my-2 link-underline'>
                    Accueil
                </Link>
                <span className='h-1 bg-blue-700 '></span>
            </div>
            <div className='navli flex flex-col w-28'>
                <Link to="/page2" className='flex justify-center my-2'>
                    Services
                </Link>
                <span className='h-1 bg-blue-700'></span>
            </div>
            <div className='navli flex flex-col w-28'> 
                <Link to="/page3" className='flex justify-center my-2'>
                    Offres
                </Link>
                <span className='h-1 bg-blue-700'></span>
            </div>
            <div className='navli flex flex-col w-28'>
                <Link to="/page4" className='flex justify-center my-2'>
                    Contact
                </Link>
                <span className='h-1 bg-blue-700'></span>
            </div>
        </nav>
    </div>
  )
}

export default NavBar