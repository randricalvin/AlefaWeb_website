import React from 'react'
import "./Techs.scss"
import outil_react_site_internet from '../assets/caroussel/outil_react_site_internet.svg'

const Techs = () => {
  return (
    <div className='bg-[#1B1559]'>
        <div className='techno pt-6'>
            <span className='text-4xl text-white font-serif'>Travaillons ensemble avec les meilleurs outils</span>
            <div className='font-serif2 techno-presentation text-white w-1/2 mt-6'>
                <h1>
                    Pour vous ouffrir le meilleur service, je travaille avec des CMS et d'autres outils pour des développements spécifiques.
                </h1>
                <h1>
                    L'objectif est de vous offrir un produit 100% adapté à vos besoins. Un site internet rapide, sécurisé, et qui fonctionne sur tous les appareils.
                </h1>
            </div>
        </div>

        {/* caroussel */}
        <div>
            <div>
                <img src={outil_react_site_internet} alt="outil_react_site_internet" />
            </div>
        </div>
    </div>
  )
}

export default Techs