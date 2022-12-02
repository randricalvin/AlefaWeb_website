import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import timeline from '../assets/timeline.svg'
import "./Etapes.scss"

const Etapes = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

  return (
    <section className='w-4/6 mx-auto'>
        <div className='timeline w-full flex justify-center'>
            <div className=''>
                <img src={timeline} alt="les etapes du developpement" className=''/>
                
            </div>
        </div>

        <div className='card-timeline'> 
            <div data-aos="fade-right" className='w-full flex justify-start'>
                <div class="flex flex-col justify-around max-w-sm p-6 bg-white border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-start items-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création de site internet</h5>
                    </div>
                    <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>

            <div data-aos="fade-left" className='w-full flex justify-end'>
                <div class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création de site internet</h5>
                    </div>
                    <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>

            <div data-aos="fade-right" className='w-full flex justify-start'>
                <div class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création de site internet</h5>
                    </div>
                    <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>

            <div data-aos="fade-left" className='w-full flex justify-end'>
                <div class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 ease-in-out hover:scale-105 duration-300">
                    <div className='flex justify-between items-center'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création de site internet</h5>
                    </div>
                    <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Etapes