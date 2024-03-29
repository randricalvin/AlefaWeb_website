import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Blog from '../pages/Blog'
import Logo_Monochrome_white from '../assets/Logo_Monochrome_white.svg'
import phone from '../assets/contact/phone.svg'
import mail from '../assets/contact/mail.svg'
import instagram from '../assets/contact/instagram.svg'
import linkedin from '../assets/contact/linkedin.svg'
import tiktok from '../assets/contact/tiktok.svg'
import facebook from '../assets/contact/facebook.svg'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='bg-[#1B1559] lg:h-96 text-white font-serif2'>
        <div className='lg:w-5/6 mx-auto flex h-full justify-between footer content-width '>
            <div className='lg:w-1/2 flex flex-col justify-between items-start lg:my-8'>
                <img src={Logo_Monochrome_white} alt="logo développeur orléans" className='h-16 logo-footer'/>
                <div className='text-justify w-5/6 description-footer'>
                    <h1 className='text-white text-xl font-extrabold uppercase mb-2'>Développeur web indépendant</h1>
                    <p className='text-base'>Développeur web en freelance, je propose mes services pour la création de sites internet et applications web.</p>
                    <p className='text-base'>Passionné par les nouvelles technologies, je mets à votre disposition mes compétences pour la bonne réalisation de votre projet.</p>
                </div>
                <div className='lg:flex mention-desk'>
                    <p className='text-white text-base'>© 2023 - Tous droits réservés -</p>
                    <Link to='/mentionslegales'>
                        <p className='text-white text-base'>&nbsp;Mentions légales</p>
                    </Link>
                </div>
            </div>

            <div className='lg:my-8 flex flex-col justify-between lg:w-1/3'>
                <div className='contact-info'>
                    <h1 className='text-white text-xl font-extrabold uppercase mb-2'>contact</h1>
                    <div className='flex'> 
                        <img src={phone} alt="téléphone alefaweb" className='h-7'/>
                        <a href="tel:+33664475182">
                            <p className='text-lg font-medium mb-2'>: 06 64 47 51 82</p>
                        </a>
                    </div>
                    <div className='flex'> 
                        <img src={mail} alt="email alefaweb" className='h-7'/>
                        <a href="mailto:bonjour@alefaweb.com">
                            <p className='text-lg font-medium mb-2'>: bonjour@alefaweb.com</p>
                        </a>
                    </div>
                </div>
                <div className='contact-info2'>
                    <h1 className='text-white text-xl font-extrabold uppercase mb-2'>Réseaux sociaux</h1>
                    <div className='flex items-center'>
                        <a href="https://www.instagram.com/alefaweb/" target="_blank">
                            <img src={instagram} alt="instagram alefaweb" className='h-10 bg-[#7c52fb8c] rounded-full hover:bg-[#7B52FB] hover:rounded-full p-2'/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100089605470255" target="_blank">
                            <img src={facebook} alt="facebook alefaweb" className='h-10 bg-[#7c52fb8c] rounded-full hover:bg-[#7B52FB] hover:rounded-full p-2 mx-2'/>
                        </a>
                        <a href="" className='pointer-events-none'>
                            <img src={linkedin} alt="linkedin alefaweb" className='h-10 bg-[#7c52fb8c] rounded-full hover:bg-[#7B52FB] hover:rounded-full p-2 mr-2 '/>
                        </a>
                        <a href="https://www.tiktok.com/@alefaweb?is_from_webapp=1&sender_device=pc" target="_blank">
                            <img src={tiktok} alt="tiktok alefaweb" className='h-10 bg-[#7c52fb8c] rounded-full hover:bg-[#7B52FB] hover:rounded-full p-2'/>
                        </a>
                    </div>
                </div>
                
            </div>

            <div className='flex flex-col lg:my-8 contact-info3'>
                <h1 className='text-white text-xl font-extrabold uppercase mb-2'>Plan du Site</h1>
                <HashLink  smooth='true' to='/#' className='text-lg hover:text-[#fd7d28] mb-2'>Accueil</HashLink>
                <HashLink  smooth='true' to='/#services' className='text-lg hover:text-[#fd7d28] mb-2'>Services</HashLink>
                <HashLink  smooth='true' to='/creation-de-sites-internet-orleans' className='text-lg hover:text-[#fd7d28] mb-2'>Offres</HashLink>
                <HashLink  smooth='true' to='/realisation-de-sites-internet-orleans' className='text-lg hover:text-[#fd7d28] mb-2'>Réalisations</HashLink>
                <HashLink  smooth='true' to='/blog' className='text-lg hover:text-[#fd7d28]'>Blog</HashLink>
            </div>

            <div className='lg:flex mention-mobile'>
                    <p className='text-white text-base mention-mobile1'>© 2023 - Tous droits réservés -</p>
                    <Link to='/mentionslegales'>
                        <p className='text-white text-base mention-mobile2'>&nbsp;Mentions légales</p>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer