import React, { useEffect } from 'react'
import "./Realisations.scss"
import realisations from '../data/realisations'
import RealisationsList from './RealisationsList'

const Realisations = () => {

  console.log(realisations)


  return (
    <div id="realisations" className='realisations justify-start items-center flex flex-col font-serif2 w-5/6 mx-auto'>
        <h1 className='text-4xl font-bold font-serif title-offre text-[#7B52FB] pb-6'>
          Mes réalisations
        </h1>

        <p className='my-12 font-serif2 text-service w-full'>
          Vous trouverez ci-dessous mes dernières réalisations. J'espère que nous aurons l'occasion de travailler ensemble et de <span className='font-bold'>voir votre projet apparaître dans cette liste.</span> 
        </p>
          <div className='flex justify-between'>
            {realisations.map((realisation, index) => {
              return <RealisationsList key={index} realisation={realisation} 
              />
            }
            )}
        </div>
    </div>

  )
}

export default Realisations