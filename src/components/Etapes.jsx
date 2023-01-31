import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import discussion_dev_project from '../assets/steps/discussion_dev_project.svg'
import signature_dev_project from '../assets/steps/signature_dev_project.svg'
import developpement_dev_project from '../assets/steps/developpement_dev_project.svg'
import delivery_dev_project from '../assets/steps/delivery_dev_project.svg'
import "./Etapes.scss"
import "./Services.scss"

const Etapes = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


  return (
    <section className='font-serif2 mt-12 mb-10 text-black etape-bg'>
        <div className='lg:w-5/6 mx-auto lg:my-16 content-width'>
            {/* <span className='text-4xl text-white font-serif'> Les étapes indispensables pour la <span className='text-[#7B52FB] title-outil pb-2'>réalisation de votre projet</span></span> */}
            <h1 className='lg:text-4xl flex text-white font-serif title-tech'>Les étapes indispensables pour le succès de votre projet</h1>
            <p className='font-serif2 techno-presentation text-white mt-4 text-tech lg:leading-8'>
                Pour mener à bien un projet, il est important de suivre une méthodologie rigoureuse. <br/> C'est pourquoi je vous présente les étapes que j’ai l’habitude de suivre pour la réalisation de mes projets web et peut-être bientôt du vôtre !
            </p>
        </div>
      
        <div className='flex flex-wrap flex-md-nowrap lg:mx-12 gap-4 justify-evenly '> 
            <div class="card-step bg-white border border-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 scale-100 transition-all duration-200 hover:scale-110" src={discussion_dev_project} alt="discussion project développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        <h5 className="phase lg:text-xl font-extrabold uppercase my-2 name-service">échange</h5>
                    </div>
                    <p class="lg:text-base my-2 text-justify description-service">
                        Nous échangeons sur vos besoins et attentes afin de définir ensemble le projet. L'objectif est de trouver la solution la plus adaptée à la fois à votre demande et à votre budget.
                    </p>
                </div>
            </div>

            <div class="card-step bg-white border border-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 scale-100 transition-all duration-200 hover:scale-110" src={signature_dev_project} alt="signature contrat projet développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        <h5 className="phase lg:text-xl font-extrabold uppercase my-2 name-service">Proposition</h5>
                    </div>
                    <p class="lg:text-base my-2 text-justify description-service">
                        Je vous propose ensuite un devis détaillé et personnalisé en fonction de ce qui a été défini ensemble lors de la première rencontre.
                    </p>
                </div>
            </div>

            <div class="card-step bg-white border border-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 object-cover scale-100 transition-all duration-200 hover:scale-110" src={developpement_dev_project} alt="développement projet développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        <h5 className="phase lg:text-xl font-extrabold uppercase my-2 name-service">Développement</h5>
                    </div>
                    <p class="lg:text-base my-2 text-justify description-service">
                        Une fois l’accord signé, je commence la partie réalisation, qui comprend la phase de design, de développement, et de tests. Des points de rendez-vous sont prévus pour vous tenir informé de l'avancement du projet.
                    </p>
                </div>
            </div>

            <div class="card-step bg-white border border-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 scale-100 transition-all duration-200 hover:scale-110" src={delivery_dev_project} alt="livraison projet développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        <h5 className="phase lg:text-xl font-extrabold uppercase my-2 name-service">Livraison</h5>
                    </div>
                    <p class="lg:text-base my-2 text-justify description-service">
                        Une fois le projet terminé, j'effectue sa mise en ligne. <br/> Je vous accompagne également dans la prise en main de votre site internet. <br/>Il ne vous reste plus qu'à profiter de vos premières visites !
                    </p>
                </div>
            </div>
        </div>

          
            <div className='flex justify-center pt-14 pb-14'>
                <HashLink smooth='true' to="/#contact" className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif">Demander un devis</HashLink>
            </div>
    </section>
  )
}

export default Etapes