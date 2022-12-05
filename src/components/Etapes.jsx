import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import timeline from '../assets/timeline.svg'
import discussion_creation_internet from '../assets/steps/discussion_creation_internet.gif'
import accord_creation_internet from '../assets/steps/accord_creation_internet.gif'
import travail_creation_internet from '../assets/steps/travail_creation_internet.gif'
import livraison_creation_internet from '../assets/steps/livraison_creation_internet.gif'
import "./Etapes.scss"

const Etapes = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    // make a timeline with the number of the step and the text of the step, fill on scroll


  return (
    <section className='w-5/6 mx-auto font-serif2'>
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

        <div className='card-timeline'> 
            <div data-aos="fade-right" className='w-full flex justify-start'>
                <div class="flex flex-col p-6 bg-white border-[#7B52FB] rounded-lg dark:bg-gray-800 dark:border-gray-700 font-serif2 shadow-lg w-1/2">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src={discussion_creation_internet} alt="creation_site_internet_orleans" className='h-16'/>
                            <h5 className="mx-2 phase text-xl font-extrabold uppercase">échange</h5>
                        </div>
                        <div>
                            <h1 className="mx-2 text-[#FF2F89] text-6xl font-extrabold uppercase">#1</h1>
                        </div>
                    </div>
                    <p class="text-base my-2">
                        Nous échangeons sur vos besoins et vos attentes afin de définir ensemble le projet. L'objectif est de trouver la solution la plus adaptée à votre demande.
                    </p>
                </div>
            </div>

            <div data-aos="fade-left" className='w-full flex justify-end'>
                <div class="flex flex-col p-6 bg-white border-[#7B52FB] rounded-lg dark:bg-gray-800 dark:border-gray-700 font-serif2 shadow-lg w-1/2">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src={accord_creation_internet} alt="accord_site_internet_orleans" className='h-16'/>
                            <h5 class="mx-2 phase text-xl font-extrabold uppercase">Proposition</h5>
                        </div>
                        <div>
                            <h1 className="mx-2 text-[#FF2F89] text-6xl font-extrabold uppercase">#2</h1>
                        </div>
                    </div>
                    <p class="text-base my-2"> 
                        Je vous propose ensuite un devis détaillé et personnalisé en fonction de ce qui a été défini ensemble lors de la première rencontre.
                    </p> 
                </div>
            </div>

            <div data-aos="fade-right" className='w-full flex justify-start'>
                <div class="flex flex-col p-6 bg-white border-[#7B52FB] rounded-lg dark:bg-gray-800 dark:border-gray-700 font-serif2 shadow-lg w-1/2">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src={travail_creation_internet} alt="travail_site_internet_orleans" className='h-16'/>
                            <h5 class="mx-2 phase text-xl font-extrabold uppercase">Développement </h5>
                        </div>
                        <div>
                            <h1 className="mx-2 text-[#FF2F89] text-6xl font-extrabold uppercase">#3</h1>
                        </div>
                    </div>
                    <p class="text-base my-2"> Une fois le devis accepté, je commence la partie réalisation, qui comprend la phase de design, de développement, et des tests. Des points de rendez-vous sont prévus (à votre convenance) pour vous tenir informé de l'avancement du projet. </p>
                </div>
            </div>

            <div data-aos="fade-left" className='w-full flex justify-end'>
                <div class="flex flex-col p-6 bg-white border-[#7B52FB] rounded-lg dark:bg-gray-800 dark:border-gray-700 font-serif2 shadow-lg w-1/2">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src={livraison_creation_internet} alt="livraison_site_internet_orleans" className='h-16'/>
                            <h5 class="mx-2 phase text-xl font-extrabold uppercase">Livraison</h5>
                        </div>
                        <div>
                            <h1 className="mx-2 text-[#FF2F89] text-6xl font-extrabold uppercase">#4</h1>
                        </div>
                    </div>
                    <p class="text-base my-2"> 
                        Une fois le projet terminé, j'effectue sa mise en ligne. <br/> Je vous accompagne dans la prise en main de votre site. Il ne vous reste plus qu'à profiter de vos premières visites !
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Etapes