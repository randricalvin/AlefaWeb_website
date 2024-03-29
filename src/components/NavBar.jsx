import React, { useState } from 'react'
import logoalefaweb from '../assets/Rgb_black.svg'
import lettrage_rgb from '../assets/lettrage_rgb.svg'
import Blog from '../pages/Blog'
import './NavBar.scss'
import { HashLink } from 'react-router-hash-link'

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)


    
  return (
    <div>
        <nav className='DESKTOP navbar flex justify-center items-center shadow-md'>
            <section className='justify-between w-5/6 mx-auto items-center DESKTOP-MENU hidden space-x-8 lg:flex'>
                <div className='w-1/6'>
                    <HashLink  smooth='true' to='/' className='flex justify-start'>
                        <img src={logoalefaweb} alt='logo' className='h-11' />
                    </HashLink>
                </div>
                <div className='w-4/6'>
                    <div className='flex justify-center items-center gap-12 font-serif'>
                        <HashLink  smooth='true' to='/' className='text-xl list'>Accueil</HashLink>
                        <HashLink  smooth='true' to='/#services' className='text-xl list'>Services</HashLink>
                        <HashLink  smooth='true' to='/creation-de-sites-internet-orleans' className='text-xl list'>Offres</HashLink>
                        <HashLink  smooth='true' to='/realisation-de-sites-internet-orleans' className='text-xl list'>Réalisations</HashLink>
                        <HashLink  smooth='true' to='/blog' className='text-xl list' component={Blog}>Blog</HashLink>
                    </div>
                </div>
                <div className='w-1/6'>
                    <div className='flex justify-end font-serif'>
                        <HashLink  smooth='true' to='/#contact' className='flex items-center text-white bg-[#fd7d28] py-2 px-8 rounded-full hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110'>Contact</HashLink>
                    </div>
                </div>
            </section>
        </nav>

        <nav>
            <section className="MOBILE-MENU mobile flex lg:hidden justify-end">
                    <HashLink  smooth='true' to='/' className='logo flex w-full items-center justify-center'>
                        <div className='fixed'>
                            <img src={lettrage_rgb} alt='logo alefaweb' className='h-11 logo' />
                        </div>
                    </HashLink>
                <button
                        className="button-burger-mobile fixed h-10 w-10 text-black rounded-sm focus:outline-none mt-4 mr-5"
                        onClick={() => setIsNavOpen(!isNavOpen)}>
                        <span className="sr-only">Open main menu</span>
                        <div className="button-burger-mobile absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span
                                aria-hidden="true"
                                className={`block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out ${
                                isNavOpen ? "rotate-45" : "-translate-y-2.5"
                                }`}></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out ${
                                isNavOpen && "opacity-0"
                                }`}></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute h-1 w-8 bg-current transform  transition duration-500 ease-in-out ${
                                isNavOpen ? "-rotate-45" : "translate-y-2.5"
                                }`}></span>
                        </div>
                </button>
                <div className={`menu-mobile ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
                    <div className="menu-burger-mobile flex justify-center items-center">
                        <ul className="min-h-[250px] font-serif"
                        // close menu burger onclick
                        onClick={() => setIsNavOpen(false)}
                        >
                            <li className="font-medium text-center my-8 text-2xl">
                                <HashLink smooth='true' to='/#'>Accueil</HashLink>
                            </li>
                            <li className="font-medium text-center my-8 text-2xl">
                                <HashLink smooth='true' to='/#services'>Services</HashLink>
                            </li>
                            <li className="font-medium text-center my-8 text-2xl">
                                <HashLink smooth='true' to='/creation-de-sites-internet-orleans'>Offres</HashLink>
                            </li>
                            <li className="font-medium text-center my-8 text-2xl">
                                <HashLink smooth='true' to='/realisation-de-sites-internet-orleans'>Réalisations</HashLink>
                            </li>
                            <li className="font-medium text-center my-8 text-2xl">
                                <HashLink to='/blog'>Blog</HashLink>
                            </li>
                            <li className="font-medium text-center my-8 text-2xl">
                                <HashLink  smooth='true' to='/#contact' className='text-white button-service bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full px-5 py-3 inline-flex justify-center text-center'>Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </nav>
        <style>
        {`.hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100vw;
        height: 70vh;
        top: 4rem;
        left: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        backdrop-filter: saturate(180%) blur(5px);
        background: white;
      }
    `}
      </style>
    </div>
  )
}

export default NavBar