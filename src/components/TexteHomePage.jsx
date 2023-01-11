import React, { useEffect } from 'react'
import './TexteHomePage.scss'

const TexteHomePage = () => {

  return (
    <div>
        <div className='flex flex-col lg:text-lg text-home-page pt-4'>
                <h1 className='mb-1' >
                  <span className=''>
                    Besoin d’un site vitrine ou d’un site e-commerce pour développer votre entreprise ?
                  </span>
                </h1>
                <h1 className='my-1'>
                  <span>
                    Des difficultés à définir votre image de marque et votre identité visuelle ?
                  </span>
                </h1>
                <h1 className='my-1'>
                  <span>
                    Je mets mes compétences à votre service sans vous ruiner
                  </span>
                </h1>
                <h1 className='my-1'>
                  <span>
                    Ensemble faisons de votre projet un succès !
                  </span>
                </h1>
            </div>
            
    </div>
  )
}

export default TexteHomePage