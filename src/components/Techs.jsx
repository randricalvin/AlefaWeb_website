import React, { useEffect } from 'react'
import "./Techs.scss"
import CarouselTechs from './caroussel/CarouselTechs';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Etapes from './Etapes';


const Techs = () => {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className='bg-[#1B1559]'>
        <div className='techno pt-10 lg:w-5/6 mx-auto content-width'>
            <h1 className='lg:text-4xl flex text-white font-serif title-tech'>Travaillons ensemble avec les meilleurs outils
            </h1>
            <div className='font-serif2 techno-presentation text-white mt-4 text-tech'>
                <h1>
                    Pour vous offrir le meilleur service, je travaille avec WordPress et Shopify (outil de gestion de contenus). 
                    <br/> Je peux aussi utiliser d'autres langages afin de personnaliser votre site.
                    <br/> L'objectif est de vous offrir un produit 100% adapté à vos besoins.
                    <br/> Un site internet rapide, sécurisé, et qui fonctionne sur tous les appareils.
                </h1>
            </div>
        </div>

        <div className='pt-16'>
            <CarouselTechs />
            <Etapes />
        </div>
    </div>
  )
}

export default Techs