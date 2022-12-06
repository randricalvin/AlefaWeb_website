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
        <div className='techno pt-10 w-5/6 mx-auto'>
            <span className='text-4xl text-white font-serif'>Travaillons ensemble avec les <span className='text-[#7B52FB] title-outil pb-2'>meilleurs outils</span></span>
            <div className='font-serif2 techno-presentation text-white w-2/3 mt-6'>
                <h1>
                    Pour vous offrir le meilleur service, je travaille avec WordPress (outil de gestion de contenus).
                </h1>

                <h1>
                    Je peux aussi utiliser d'autres langages afin de personnaliser votre site.
                </h1>

                <h1>
                    L'objectif est de vous offrir un produit 100% adapté à vos besoins.
                </h1>
                <h1>
                    Un site internet rapide, sécurisé, et qui fonctionne sur tous les appareils.
                </h1>
            </div>
        </div>

        <div className='mt-12 pb-8'>
            <CarouselTechs />
            <Etapes />
        </div>
    </div>
  )
}

export default Techs