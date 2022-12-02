import React, { useEffect } from 'react'
import "./Offers.scss"
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Etapes from './Etapes'

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div id='offres' className='offres text-2xl justify-start items-center flex flex-col font-serif2'>
        <span className='text-4xl font-bold font-serif title-offre text-[#7B52FB] pb-6'>
          Mes offres
        </span>


        <div className='flex flex-col items-start mx-12'>
          <div className='flex gap-4 justify-between mt-12'>
            {/* 1 */}
            <div data-aos="zoom-in" class="w-1/4 max-w-sm p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between hover:shadow-xl duration-300">
              <div className=''>
                <h5 class="text-2xl font-bold uppercase text-center">Site vitrine</h5>
                <h5 class="text-2xl font-bold uppercase text-center">standard</h5>
                <div className='flex justify-center'>
                  <h5 class="mb-4 text-sm font-bold text-center rounded-full text-white px-2 mt-2 bg-[#7B52FB]">Créé avec WordPress</h5>
                </div>
                <h5 class="mb-8 text-sm font-medium text-gray-500 text-center h-14">Une solution pour présenter votre activité, vos produits et/ou service, afin de permettre à des clients de vous trouver.</h5>
              <div class="flex flex-col items-center dark:text-white justify-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2">À partir de</span>
                  <span class="text-5xl flex font-extrabold tracking-tight">999<span class="text-2xl font-extrabold tracking-tight">€ *</span></span> 
              </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Proposition de maquette</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Nom de domaine, hébergement et e-mail pendant 12 mois</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Site responsive : adapté à tout écran</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Intégration des contenus fournis</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Interface administrateur</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formulaire de contact</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Optimisation du référencement</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Mise en ligne du site</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formation et accompagnement sur l'utilisation du site</span>
                      </li>
                  </ul>
                </div>
              </div>
              <BrowserRouter>
                <div className='flex justify-center mb-8'>
                  <Link smooth to="/#contact" className="text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase">Demander un devis</Link>
                </div>
              </BrowserRouter>
            </div>

            {/* 2 */}
            <div data-aos="zoom-in" class="w-1/4 max-w-sm p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between hover:shadow-xl duration-300">
              <div>
                <h5 class="text-2xl font-bold uppercase text-center">Site vitrine</h5>
                <h5 class="text-2xl font-bold uppercase text-center">sur mesure</h5>
                <div className='flex justify-center'>
                  <h5 class="mb-4 text-sm font-bold text-center rounded-full text-white px-2 mt-2 bg-[#7B52FB]">Créé avec langages de programmation</h5>
                </div>
                <h5 class="mb-8 text-sm font-medium text-gray-500 text-center h-14">Un développement sur mesure, c’est l’assurance d’un site qui correspond exactement à vos attentes.</h5>
                <div class="flex flex-col items-center dark:text-white justify-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2">À partir de</span>
                  <span class="text-5xl flex font-extrabold tracking-tight">1 499<span class="text-2xl font-extrabold tracking-tight">€ *</span></span> 
                </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Proposition de maquette</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Charte graphique</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Nom de domaine, hébergement et e-mail pendant 12 mois</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Site responsive : adapté à tout écran</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Intégration des contenus fournis</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formulaire de contact + Map</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Optimisation du référencement</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Optimisation d'expérience utilisateur</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Statistiques de visites</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Mise en ligne du site</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formation et accompagnement sur l'utilisation du site</span>
                      </li>
                  </ul>
                </div>
              </div>
              <BrowserRouter>
                <div className='flex justify-center mb-8'>
                  <Link smooth to="/#contact" className="text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase">Demander un devis</Link>
                </div>
              </BrowserRouter>
            </div>

            {/* 3 */}
            <div data-aos="zoom-in" class="w-1/4 max-w-sm p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between hover:shadow-xl duration-300">
              <div>
                <h5 class="text-2xl font-bold uppercase text-center">Site</h5>
                <h5 class="text-2xl font-bold uppercase text-center">e-commerce</h5>
                <div className='flex justify-center'>
                  <h5 class="mb-4 text-sm font-bold text-center rounded-full text-white px-2 mt-2 bg-[#7B52FB]">Créé avec WordPress ou Shopify</h5>
                </div>
                <h5 class="mb-8 text-sm font-medium text-gray-500 text-center h-14">Vous souhaitez vendre vos produits en ligne ? Optez pour un site qui propose vos produits à des clients 24h/24 et 7j/7.</h5>
                <div class="flex flex-col items-center dark:text-white justify-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2">À partir de</span>
                  <span class="text-5xl flex font-extrabold tracking-tight">2 499<span class="text-2xl font-extrabold tracking-tight">€ *</span></span> 
                </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Proposition de maquette</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Charte graphique</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Nom de domaine, hébergement et e-mail pendant 12 mois</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Site responsive : adapté à tout écran</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Création de votre boutique</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Installation des plugins</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Intégration des contenus et produits</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formulaire de contact + Map</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Optimisation du référencement</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Optimisation d'expérience utilisateur</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Statistiques de visites</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Mise en ligne du site</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight dark:text-gray-400">Formation et accompagnement sur l'utilisation du site</span>
                      </li>
                  </ul>
                </div>
              </div>
              <BrowserRouter>
                <div className='flex justify-center mb-8'>
                  <Link smooth to="/#contact" className="text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase">Demander un devis</Link>
                </div>
              </BrowserRouter>
            </div>

            {/* 4 */}
            <div data-aos="zoom-in" class="w-1/4 max-w-sm p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between hover:shadow-xl duration-300">
              <div>
                <h5 class="text-2xl font-bold uppercase text-center">Maintenance</h5>
                <h5 class="text-2xl font-bold uppercase text-center">site internet</h5>
                <h5 class="mb-8 mt-11 text-sm font-medium text-gray-500 text-center h-14">Un ensemble d’actions qui vont garder votre site en bonne santé et à jour, sur le plan technique et éditorial.</h5>
              <div class="flex dark:text-white justify-center mt-16">
                  <span class="text-5xl font-extrabold tracking-tight">30</span>
                  <span class="text-2xl font-extrabold tracking-tight">€/h</span>
              </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Mise à jour du site et des plugins</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Modification graphique et/ou des contenus</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Optimisation des performances</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Maintenance diverse</span>
                      </li>
                  </ul>
                </div>
              </div>
              <BrowserRouter>
                <div className='flex justify-center mb-8'>
                  <Link smooth to="/#contact" className="text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase">Demander un devis</Link>
                </div>
              </BrowserRouter>
            </div>
          </div>

          <div className='my-4'>
            <p className='text-sm text-gray-500'>
              L'ensemble des prix indiqués sont en Hors-Taxes. * Prix à titre indicatif : ils peuvent varier en fonction des demandes et les choix du client.
            </p>
          </div>

          <div className='flex items-center justify-around bg-[#1B1559] py-6 rounded-lg my-16'>
            <h1 className='mx-12 text-white text-xl'>
              Vous avez des demandes spécifiques ? <br/> N'hésitez pas à me contacter !
            </h1>
            <BrowserRouter>
                <div className='flex justify-center mx-12'>
                  <Link smooth to="/#contact" className="text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase">Me contacter</Link>
                </div>
            </BrowserRouter>
          </div>
        </div>

        {/* <Etapes /> */}
    </div>
  )
}

export default Offers