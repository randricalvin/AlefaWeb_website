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
    <section className='bg-[#1B1559] techno-bg'>
        <div className='techno pt-10 lg:w-5/6 mx-auto content-width'>
            <h1 className='lg:text-4xl flex text-white font-serif title-tech'>Travaillons ensemble avec les meilleurs outils
            </h1>
        </div>

        <div className='pt-16'>
            <CarouselTechs />
            <Etapes />
        </div>
    </section>
  )
}

export default Techs