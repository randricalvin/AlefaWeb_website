import React from 'react'
import { Link } from 'react-router-dom'
import logoalefaweb from '../assets/Rgb_black.svg'

const NavBar = () => {
  return (
    <div className='navbar flex justify-center items-center'>
        <nav className=' flex justify-between w-5/6 items-center h-20 text-black relative shadow-sm font-mono' role='navigation'>
            <div className=''>
                <Link to='/' className=''>
                    <img src={logoalefaweb} alt='logo' className='h-14' />
                </Link>
            </div>
            <div className='flex gap-12 '>
                <Link to='/page1' className=''>Accueil</Link>
                <Link to='/page2' className=''>Services</Link>
                <Link to='/page3' className=''>Offres</Link>
                <Link to='/page4' className=''>Compétences</Link>
                <Link to='/page5' className=''>Blog</Link>
            </div>
            <div className=''>
                <a href="www.google.com" className='button-contact flex items-center justify-center border-2 border-[#FF7B34] py-2 px-6 rounded-full'>Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default NavBar