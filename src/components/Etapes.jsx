import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import timeline from '../assets/timeline.svg'
import discussion_creation_internet from '../assets/steps/discussion_creation_internet.gif'
import accord_creation_internet from '../assets/steps/accord_creation_internet.gif'
import travail_creation_internet from '../assets/steps/travail_creation_internet.gif'
import livraison_creation_internet from '../assets/steps/livraison_creation_internet.gif'
import discussion_dev_project from '../assets/steps/discussion_dev_project.svg'
import signature_dev_project from '../assets/steps/signature_dev_project.svg'
import developpement_dev_project from '../assets/steps/developpement_dev_project.svg'
import delivery_dev_project from '../assets/steps/delivery_dev_project.svg'
import "./Etapes.scss"

const Etapes = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    
    //  adding a function to hand scroll the gallery
    

  return (
    <section className='font-serif2'>
        <h1 className='w-5/6 mx-auto my-16'>
            <span className='text-4xl text-white font-serif'> Les étapes indispensables pour la <span className='text-[#7B52FB] title-outil pb-2'>réalisation de votre projet</span></span>
        </h1>
        {/* <div className='timeline w-full flex justify-center'>
            <div className=''>
                <img src={timeline} alt="les etapes du developpement" className=''/>
            </div>
            <div className='number-timeline flex flex-col items-center text-white h-full justify-between'>
                <div className='h-1/4 flex items-end'>
                   <span className='bg-[#7B52FB] h-10 w-10 rounded-full flex items-center justify-center'>1</span>
                </div>
                <div className='h-1/4 flex items-end'>
                   <span className='bg-[#7B52FB] h-10 w-10 rounded-full flex items-center justify-center'>2</span>
                </div>
                <div className='h-1/4 flex items-end'>
                   <span className='bg-[#7B52FB] h-10 w-10 rounded-full flex items-center justify-center'>3</span>
                </div>
                <div className='h-1/4 flex items-end'>
                   <span className='bg-[#7B52FB] h-10 w-10 rounded-full flex items-center justify-center'>4</span>
                </div>
            </div>
        </div> */}

        


        <div className='flex flex-wrap flex-md-nowrap mx-12 gap-4 justify-evenly'> 
            <div class="bg-white border rounded-lg border-gray-200 dark:border-gray-700 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 scale-100 transition-all duration-200 hover:scale-110" src={discussion_dev_project} alt="discussion project développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        {/* <img src={discussion_creation_internet} alt="creation_site_internet_orleans" className='h-16'/> */}
                        <h5 className="phase text-xl font-extrabold uppercase my-2">échange</h5>
                    </div>
                    <p class="text-base my-2 text-gray-700 dark:text-gray-400">
                        Nous échangeons sur vos besoins et vos attentes afin de définir ensemble le projet. L'objectif est de trouver la solution la plus adaptée à votre demande.
                    </p>
                </div>
            </div>

            <div class="bg-white border rounded-lg border-gray-200 dark:border-gray-700 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 scale-100 transition-all duration-200 hover:scale-110" src={signature_dev_project} alt="signature contrat projet développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        {/* <img src={discussion_creation_internet} alt="creation_site_internet_orleans" className='h-16'/> */}
                        <h5 className="phase text-xl font-extrabold uppercase my-2">Proposition</h5>
                    </div>
                    <p class="text-base my-2 text-gray-700 dark:text-gray-400">
                        Je vous propose ensuite un devis détaillé et personnalisé en fonction de ce qui a été défini ensemble lors de la première rencontre.
                    </p>
                </div>
            </div>

            <div class="bg-white border rounded-lg border-gray-200 dark:border-gray-700 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 object-cover scale-100 transition-all duration-200 hover:scale-110" src={developpement_dev_project} alt="développement projet développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        {/* <img src={discussion_creation_internet} alt="creation_site_internet_orleans" className='h-16'/> */}
                        <h5 className="phase text-xl font-extrabold uppercase my-2">Développement</h5>
                    </div>
                    <p class="text-base my-2 text-gray-700 dark:text-gray-400">
                        Une fois le devis accepté, je commence la partie réalisation, qui comprend la phase de design, de développement, et des tests. Des points de rendez-vous sont prévus (à votre convenance) pour vous tenir informé de l'avancement du projet.
                    </p>
                </div>
            </div>

            <div class="bg-white border rounded-lg border-gray-200 dark:border-gray-700 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg lg:w-72">
                <div className='rounded-t-lg overflow-hidden flex justify-center'>
                    <img class="rounded-t-lg lg:h-60 md:h-80 scale-100 transition-all duration-200 hover:scale-110" src={delivery_dev_project} alt="livraison projet développement" />
                </div>
                <div class="p-5 pt-0">
                    <div className='flex items-center'>
                        {/* <img src={discussion_creation_internet} alt="creation_site_internet_orleans" className='h-16'/> */}
                        <h5 className="phase text-xl font-extrabold uppercase my-2">Livraison</h5>
                    </div>
                    <p class="text-base my-2 text-gray-700 dark:text-gray-400">
                        Une fois le projet terminé, j'effectue sa mise en ligne. <br/> Je vous accompagne dans la prise en main de votre site. Il ne vous reste plus qu'à profiter de vos premières visites !
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Etapes