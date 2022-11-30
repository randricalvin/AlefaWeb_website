import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./Services.css"
import creation_site_internet from '../assets/creation_site_internet.svg'
import refonte_site_internet from '../assets/refonte_site_internet.svg'

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='bg-[#1B1559] body'>
      <div id='services' className='services text-2xl justify-start items-center flex flex-col' >
        <span data-aos="zoom-in" className='title-services uppercase text-4xl font-bold font-serif text-white'>
          Mes services
        </span>
        <span  className='text-service my-12 font-serif2 text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit reiciendis eveniet enim dolorem rerum ab explicabo facilis inventore consectetur dolorum consequatur ullam, consequuntur, fuga nobis neque quaerat nam ipsa?
        </span>


        <div className=''>
          <div className='flex gap-8'>
            {/* 1 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center w-1/3 '>
              <div class="max-w-sm p-6 bg-white border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 font-serif2 hover:bg-gray-100 hover:duration-300">
                  <div className='flex justify-between items-center'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création site internet</h5>
                    <img src={creation_site_internet} alt="creation_site_internet_orleans" className='h-16'/>
                  </div>
                  <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105 ">
                      En savoir plus
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
                  </BrowserRouter>
              </div>
            </div>

            {/* 2 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center w-1/3'>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 font-serif2">
                    <div className='flex justify-between items-center'>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Refonte site internet</h5>
                      <img src={refonte_site_internet} alt="creation_site_internet_orleans" className='h-14'/>
                    </div>
                  <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105 ">
                      En savoir plus
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
                  </BrowserRouter>
              </div>
            </div>

            {/* 3 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center w-1/3'>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 font-serif2">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Création site e-commerce</h5>
                  <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105 ">
                      En savoir plus
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
                  </BrowserRouter>
              </div>
            </div>
          </div>

          <div className='flex gap-8 my-16'>
            {/* 4 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center w-1/3'>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 font-serif2">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Webdesign & Graphic design</h5>
                  <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105 ">
                      En savoir plus
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
                  </BrowserRouter>
              </div>
            </div>

            {/* 5 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center w-1/3'>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 font-serif2">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Responsive design</h5>
                <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <BrowserRouter>
                <Link smooth to="/#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105 ">
                    En savoir plus
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
                </BrowserRouter>
            </div>
            </div>

            {/* 6 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col items-center justify-center w-1/3'>
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 font-serif2">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maintenance site internet</h5>
                  <p class="mb-3 text-lg">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <BrowserRouter>
                  <Link smooth to="/#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-[#FF6501] rounded-full hover:bg-[#FF6501] hover:text-white transition duration-300 ease-in-out hover:scale-105 ">
                      En savoir plus
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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