import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import "./Realisations.scss"
import trait_marquage from '../assets/trait_marquage.svg'
import mycryptodata from '../assets/realisations/mycryptodata.svg'
import chatchatgo from '../assets/realisations/chatchatgo.svg'
import blob4 from '../assets/blob4.svg'
import Aos from 'aos'
import { Helmet } from 'react-helmet'

const Realisations = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <section id="realisations" className='realisations justify-start items-center flex flex-col font-serif2 lg:w-5/6 mx-auto content-width'>
      <Helmet>
        <link rel="canonical" href="https://www.alefaweb.com/#realisations" />
        <meta name="description" content="Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, e-commerce et application web. Cliquez ici pour voir mes dernières réalisations." />
        <meta property='og:title' content='Mes réalisations | Développeur web freelance à Orléans - Création site internet à Orléans' />
        <meta property='og:description' content="Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, e-commerce et application web. Cliquez ici pour voir mes dernières réalisations." />
        <meta property='og:url' content='https://www.alefaweb.com/#realisations' />
      </Helmet>

        <div>
          <img src={blob4} alt="blob-animation" className='blob-animation4' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] pt-8 uppercase'>
            Mes réalisations
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-5/6'/>
        </div>

        <p className='lg:my-12 font-serif2 text-service'>
          Vous trouverez ci-dessous mes dernières réalisations. J'espère que nous aurons l'occasion de travailler ensemble et de <span className='font-bold'>voir votre projet apparaître dans cette liste.</span> 
        </p>

        <div className='flex gap-6 lg:pb-6 lg:mb-16 card-project'>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='font-serif2 flex  justify-between bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700'>
               
                  <HashLink to='/realisations/mycryptodata'>
                      <div className="overflow-hidden ease-in-out hover:scale-105 duration-300">
                          <img className="image-realisation w-full" src={mycryptodata} alt="projets cryptodata réalisés"/>
                          <div className="px-6 py-4 bg-white">
                              <div className="font-extrabold lg:text-xl mb-2 name-service">MyCryptoData</div>
                              <p className="lg:text-base description-service">
                                Un site de suivi des prix des cryptomonnaies
                              </p>
                          </div>
                      </div>
                  </HashLink>
                
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='font-serif2 flex  justify-between bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700'>
 
                  <HashLink to="/realisations/chatchatgo">
                      <div className="overflow-hidden ease-in-out hover:scale-105 duration-300">
                          <img className="image-realisation w-full" src={chatchatgo} alt="projets chatchatgo réalisés"/>
                          <div className="px-6 py-4 bg-white">
                              <div className="font-extrabold lg:text-xl mb-2 name-service">Chatchatgo</div>
                              <p className="lg:text-base description-service">
                                Une application web de messagerie instantanée
                              </p>
                          </div>
                      </div>
                  </HashLink>
                
          </div>
        </div>
    </section>

  )
}

export default Realisations