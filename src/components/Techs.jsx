import React, { useEffect } from 'react'
import "./Techs.scss"
import CarouselTechs from './caroussel/CarouselTechs';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Techs = () => {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className='bg-[#1B1559]'>
        <div className='techno pt-10'>
            <span className='text-4xl text-white font-serif'>Travaillons ensemble avec les <span className='text-[#7B52FB] title-outil pb-2'>meilleurs outils</span></span>
            <div className='font-serif2 techno-presentation text-white w-1/2 mt-6'>
                <h1>
                    Pour vous ouffrir le meilleur service, je travaille avec des CMS et d'autres outils pour des développements spécifiques.
                </h1>
                <h1>
                    L'objectif est de vous offrir un produit 100% adapté à vos besoins. Un site internet rapide, sécurisé, et qui fonctionne sur tous les appareils.
                </h1>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <CarouselTechs />
        </div>
    </div>
  )
}

export default Techs