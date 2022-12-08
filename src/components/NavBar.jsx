import React from 'react'
import logoalefaweb from '../assets/Rgb_black.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
        <BrowserRouter>
        <nav className='navbar flex justify-center items-center shadow-md'>
            <div className='flex justify-between w-5/6 mx-auto items-center'>
                <div className='w-1/6'>
                    <Link  smooth to='/#' className='flex justify-start'>
                        <img src={logoalefaweb} alt='logo' className='h-14' />
                    </Link>
                </div>
                <div className='w-4/6'>
                    <div className='flex justify-center items-center gap-12'>
                        <Link  smooth to='/#' className='text-xl list'>Accueil</Link>
                        <Link  smooth to='/#services' className='text-xl list'>Services</Link>
                        <Link  smooth to='/#offres' className='text-xl list'>Offres</Link>
                        <Link  smooth to='/#realisations' className='text-xl list'>Réalisations</Link>
                        <Link to='/blog' className='text-xl list'>Blog</Link>    
                    </div>
                </div>
                <div className='w-1/6'>
                    <div className='flex justify-end'>
                        <Link  smooth to='/#contact' className='flex items-center text-white bg-[#fd7d28] py-2 px-8 rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
        </BrowserRouter>
    </div>
  )
}

export default NavBar