import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Services.scss"
import creation_site_internet from '../assets/creation_site_internet.svg'
import refonte_site_internet from '../assets/refonte_site_internet.svg'
import creation_boutique_en_ligne from '../assets/creation_boutique_en_ligne.svg'
import webdesign_graphic_design from '../assets/webdesign_graphic_design.svg'
import responsive_design from '../assets/responsive_design.svg'
import maintenance_site_internet from '../assets/maintenance_site_internet.svg'
import trait_marquage from '../assets/trait_marquage.svg'
import blob2 from '../assets/blob2.svg'

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='body'>
        <div>
          <img src={blob2} alt="blob-animation" className='blob-animation2' />
        </div>
      <div id='services' className='services text-2xl justify-start items-center flex flex-col w-5/6 mx-auto' >
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] pt-8 uppercase'>
            Mes services
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-2/3'/>
        </div>
        <div className='my-12 font-serif2 flex flex-wrap text-service'>
          <span >
            Je donne vie à vos idées et je vous accompagne dans la <span className='font-bold'>création de votre site internet.</span> 
          </span>
          <span className=''>
            Ensemble, nous définissons vos besoins et vos attentes afin de <span className='font-bold'>vous offrir une solution qui vous ressemble.</span>
          </span>

        </div>


        <div className='flex flex-col'>
          <div className='flex gap-8'>
            {/* 1 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3 '>
              <div class="card flex flex-col justify-between p-6 bg-white border border-gray-200  shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                  <div className='flex justify-between items-center'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création <br/> de site internet</h5>
                    <img src={creation_site_internet} alt="creation_site_internet_orleans" className='h-14'/>
                  </div>
                  <p class="mb-3 text-base">Création de votre site internet sur-mesure, responsive et optimisé pour le référencement naturel.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-bold uppercase text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out ">
                      Se renseigner
                  </Link>
                  </BrowserRouter>
              </div>
            </div>

            {/* 2 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Refonte <br/>de site internet</h5>
                      <img src={refonte_site_internet} alt="refonte_site_internet_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 text-base"> Proposition d'une refonte (graphique ou technique) de votre site internet existant, pour le rendre plus performant, accessible et moderne.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-bold uppercase text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out">
                      Se renseigner
                  </Link>
                  </BrowserRouter>
              </div>
            </div>

            {/* 3 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création <br/>de boutique en ligne</h5>
                      <img src={creation_boutique_en_ligne} alt="creation_boutique_en_ligne_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 text-base"> Création de votre site e-commerce avec WordPress (WooCommerce) et Shopify, pour vendre vos produits en ligne et développer votre activité.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-bold uppercase text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out">
                      Se renseigner
                  </Link>
                  </BrowserRouter>
              </div>
            </div>
          </div>

          <div className='flex gap-8 my-16'>
            {/* 4 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Webdesign <br/>& Graphic design</h5>
                      <img src={webdesign_graphic_design} alt="webdesigner_graphic_designer_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 text-base">Création de votre identité visuelle et de votre maquette (ergonome et fonctionnelle), pour donner une image professionnelle à votre activité.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-bold uppercase text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out">
                      Se renseigner
                  </Link>
                  </BrowserRouter>
              </div>
            </div>

            {/* 5 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
            <div class="card flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                  <div className='flex justify-between items-center'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Responsive design</h5>
                    <img src={responsive_design} alt="site_responsive_orleans" className='h-16'/>
                  </div>
                <p class="mb-3 text-base">Rendre votre site internet responsive, ergonomique, avec une navigation optimale sur tous les supports (ordinateur, tablette, smartphone).</p>
                <BrowserRouter>
                <Link smooth to="/#contact" class="inline-flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-bold uppercase text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out">
                    Se renseigner
                </Link>
                </BrowserRouter>
            </div>
            </div>

            {/* 6 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-between p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maintenance <br/>de site internet</h5>
                      <img src={maintenance_site_internet} alt="maintenance_site_internet_orleans" className='h-16'/>
                    </div>
                  <p class="mb-3 text-base"> Maintenance de votre site internet, pour une mise à jour régulière et une sécurité optimale.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-bold uppercase text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out">
                      Se renseigner
                  </Link>
                  </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services