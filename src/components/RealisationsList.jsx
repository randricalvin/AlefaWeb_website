import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import "./RealisationsList.scss"

const RealisationsList = ({ realisation }) => {

    console.log(realisation.id)
  return (
    <div className='card-realisation font-serif2 flex justify-between mx-4 ease-in-out hover:scale-105 duration-300'>
        <BrowserRouter>
            <Link to={`/realisations/${realisation.id}`}>
                <div className="overflow-hidden shadow-lg z-0">
                    <img className="image-realisation" src={realisation.image} alt="projets developpement réalisés"/>
                    <div className="px-6 py-4 bg-white border-t ">
                        <div className="font-bold text-xl mb-2">{realisation.title}</div>
                        <p className="text-base">
                        {realisation.description}
                        </p>
                    </div>
                </div>
            </Link>
        </BrowserRouter>
    </div>
  )
}

export default RealisationsList
