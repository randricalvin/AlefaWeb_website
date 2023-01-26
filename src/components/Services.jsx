import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
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
import { Helmet } from 'react-helmet'

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section className='body service' id='services'>
      <Helmet>
        <meta name="description" content="Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, site e-commerce et application web. Je donne vie à vos idées et vous accompagne dans la création de votre site internet." />
        <meta property='og:title' content='AlefaWeb | Mes services - Création site vitrine et site e-commerce' />
        <meta property='og:description' content='Développeur web freelance à Orléans, je vous accompagne dans la création de votre site internet vitrine, site e-commerce et application web. Je donne vie à vos idées et vous accompagne dans la création de votre site internet.' />
      </Helmet>

        <div>
          <img src={blob2} alt="blob-animation" className='blob-animation2' />
        </div>
      <div id='services' className='services text-2xl justify-start items-center flex flex-col lg:w-5/6 mx-auto content-width' >
        <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] pt-8 uppercase'>
            Mes services
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-2/3'/>
        </div>
        <div className='lg:my-12 font-serif2 flex flex-wrap text-service'>
          <span >
            Je donne vie à vos idées et vous accompagne dans la <span className='font-bold'>création de votre site internet.</span> 
          </span>
          <span className=''>
            Ensemble, nous définissons vos besoins et vos attentes afin de <span className='font-bold'>vous offrir une solution qui vous convient.</span>
          </span>

        </div>


        <div className='flex flex-col'>
          <div className='flex gap-8 card-service'>
            {/* 1 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3 card-parent'>
              <div class="card flex flex-col justify-evenly p-6 bg-white border border-gray-200  shadow-md font-serif2">
                  <span className='text-4xl font-serif font-extrabold text-[#7B52FB]'>1.</span>
                  <div className='flex justify-between items-center'>
                    <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-black name-service">Création <br/> de site internet</h5>
                    <img src={creation_site_internet} alt="creation_site_internet_orleans" className='h-14'/>
                  </div>
                  <p class="mb-3 lg:text-base description-service">Création de votre site internet sur-mesure, adapté à tous les types d’écran et optimisé pour vous faire apparaître en top des recherches.</p>
                  
              </div>
            </div>

            {/* 2 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-evenly p-6 bg-white border border-gray-200 shadow-md font-serif2">
                    <span className='text-4xl font-serif font-extrabold text-[#7B52FB]'>2.</span>
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-black name-service">Refonte <br/>de site internet</h5>
                      <img src={refonte_site_internet} alt="refonte_site_internet_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 lg:text-base description-service"> Proposition d'une refonte (graphique ou technique) de votre site internet existant, pour le rendre plus performant, accessible et moderne.</p>
              </div>
            </div>

            {/* 3 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-evenly p-6 bg-white border border-gray-200 shadow-md font-serif2">
                    <span className='text-4xl font-serif font-extrabold text-[#7B52FB]'>3.</span>
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-black name-service">Création <br/>de boutique en ligne</h5>
                      <img src={creation_boutique_en_ligne} alt="creation_boutique_en_ligne_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 lg:text-base description-service"> Création de votre site e-commerce avec WordPress (WooCommerce) et Shopify, pour vendre vos produits en ligne 24h/7j et développer votre activité.</p>
              </div>
            </div>
          </div>

          <div className='flex gap-8 my-16 card-service'>
            {/* 4 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-evenly p-6 bg-white border border-gray-200 shadow-md font-serif2">
                    <span className='text-4xl font-serif font-extrabold text-[#7B52FB]'>4.</span>
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-black name-service">Webdesign <br/>& Graphic design</h5>
                      <img src={webdesign_graphic_design} alt="webdesigner_graphic_designer_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 lg:text-base description-service">Réalisation de votre charte graphique. Création de votre maquette (UI et UX design), pour mettre en valeur le  professionnalisme de votre activité.</p>   
              </div>
            </div>

            {/* 5 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
            <div class="card flex flex-col justify-evenly p-6 bg-white border border-gray-200 shadow-md font-serif2">
                  <span className='text-4xl font-serif font-extrabold text-[#7B52FB]'>5.</span>
                  <div className='flex justify-between items-center'>
                    <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-black name-service">Responsive <br/>design</h5>
                    <img src={responsive_design} alt="site_responsive_orleans" className='h-16'/>
                  </div>
                <p class="mb-3 lg:text-base description-service">Rendre votre site internet ergonomique, responsive, avec une navigation optimale sur tous les écrans : ordinateur, tablette, smartphone.</p>
            </div>
            </div>

            {/* 6 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3'>
              <div class="card flex flex-col justify-evenly p-6 bg-white border border-gray-200 shadow-md font-serif2">
                    <span className='text-4xl font-serif font-extrabold text-[#7B52FB]'>6.</span>
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-black name-service">Maintenance <br/>de site internet</h5>
                      <img src={maintenance_site_internet} alt="maintenance_site_internet_orleans" className='h-16'/>
                    </div>
                  <p class="mb-3 lg:text-base description-service"> Maintenance de votre site internet, pour des mises à jour régulières (technique, graphique, ...) et une sécurité optimale.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center pb-14'>
                <HashLink smooth to="/#contact" className="text-white button-service bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center uppercase text-center font-serif ">Demander un devis</HashLink>
        </div>
      </div>
    </section>
  )
}

export default Services