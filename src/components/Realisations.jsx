import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "./Realisations.scss"
import realisations from '../data/realisations'
import trait_marquage from '../assets/trait_marquage.svg'
import mycryptodata from '../assets/realisations/mycryptodata.svg'
import chatchatgo from '../assets/realisations/chatchatgo.svg'
import blob4 from '../assets/blob4.svg'

const Realisations = () => {


  return (
    <div id="realisations" className='realisations justify-start items-center flex flex-col font-serif2 w-5/6 mx-auto'>
        <div>
          <img src={blob4} alt="blob-animation" className='blob-animation4' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] pt-8 uppercase'>
            Mes réalisations
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-5/6'/>
        </div>

        <p className='my-12 font-serif2 text-service w-full'>
          Vous trouverez ci-dessous mes dernières réalisations. J'espère que nous aurons l'occasion de travailler ensemble et de <span className='font-bold'>voir votre projet apparaître dans cette liste.</span> 
        </p>

        <div className='flex gap-6 pb-6 mb-16'>
          <div className='card-realisation font-serif2 flex  justify-between bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700 ease-in-out hover:scale-105 duration-300'>
               
                  <HashLink to='/realisations/mycryptodata'>
                      <div className="overflow-hidden">
                          <img className="image-realisation w-full" src={mycryptodata} alt="projets cryptodata réalisés"/>
                          <div className="px-6 py-4 bg-white">
                              <div className="font-extrabold text-xl mb-2">MyCryptoData</div>
                              <p className="text-base">
                                Un site de suivi des prix des cryptomonnaies
                              </p>
                          </div>
                      </div>
                  </HashLink>
                
          </div>

          <div className='card-realisation font-serif2 flex  justify-between bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700 ease-in-out hover:scale-105 duration-300'>
                
                  <HashLink to="/realisations/chatchatgo">
                      <div className="overflow-hidden">
                          <img className="image-realisation w-full" src={chatchatgo} alt="projets chatchatgo réalisés"/>
                          <div className="px-6 py-4 bg-white">
                              <div className="font-extrabold text-xl mb-2">Chatchatgo</div>
                              <p className="text-base">
                                Une application web de messagerie instantanée
                              </p>
                          </div>
                      </div>
                  </HashLink>
                
          </div>
        </div>
    </div>

  )
}

export default Realisations