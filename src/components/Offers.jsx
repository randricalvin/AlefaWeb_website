import React, { useEffect } from 'react'
import "./Offers.scss"
import {  HashLink } from 'react-router-hash-link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import trait_marquage from '../assets/trait_marquage.svg'
import blob3 from '../assets/blob3.svg'
import { Helmet } from 'react-helmet'
import Contact from './Contact'

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div id='offres' className='offres text-2xl justify-start items-center flex flex-col font-serif2'>
      <Helmet>
        <title>AlefaWeb | Mes offres - Création site vitrine et site e-commerce</title>
        <link rel="canonical" href="https://www.alefaweb.com/creation-site-internet-orleans" />
        <meta name="description" content="Création de site vitrine et e-commerce à Orléans, Alençon. Création site internet Orléans, Alençon. référencement site internet Orléans, Alençon. solutions internet Orléans, Loiret, Normandie et France. Création de site web pas cher." />
        <meta property='og:title' content='AlefaWeb | Mes offres - Création site vitrine et site e-commerce' />
        <meta property='og:description' content='Création de site vitrine et e-commerce à Orléans, Alençon. Création site internet Orléans, Alençon. référencement site internet Orléans, Alençon. solutions internet Orléans, Loiret, Normandie et France. Création de site web pas cher.' />
        <meta property='og:url' content='https://www.alefaweb.com/creation-site-internet-orleans' />
      </Helmet>

        <div>
          <img src={blob3} alt="blob-animation" className='blob-animation3' />
        </div>

        <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] lg:pt-20 uppercase'>
            Mes offres
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-2/3'/>
        </div>
        <p className='content-width lg:w-5/6 mx-auto text-service lg:mt-12 text-service'>Je vous propose des prix compétitifs, pour que le déploiement de l’activité en ligne reste abordable pour votre petite ou moyenne entreprise. Les tarifs sont <span className='font-bold'>adaptés au plus juste pour vous offrir ce dont vous avez vraiment besoin.</span></p>


        <div className='flex flex-col items-start lg:mx-12'>
          <div className='flex gap-4 justify-between lg:mt-12 card-offers card-tablet'>

            {/* 1 */}
            <div data-aos="zoom-in" class="lg:w-1/4 max-w-sm p-4 bg-white border shadow-md flex flex-col justify-between hover:shadow-xl duration-300">
              <div className=''>
                <h5 class="text-2xl font-extrabold uppercase text-center title-offre">Site vitrine<br/>starter</h5>
                <div className='flex justify-center'>
                  <h5 class="mb-4 text-sm font-bold text-center rounded-full text-white px-2 mt-2 bg-[#7B52FB]">Site Onepage</h5>
                </div>
                <h5 class="mb-8 lg:text-sm font-medium text-center h-14 text-offers">Une solution idéale pour présenter votre activité, vos produits et/ou service, afin d'avoir une présence sur internet.</h5>
              <div class="flex flex-col items-center dark:text-white justify-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2">À partir de</span>
                  <span class="text-5xl flex font-extrabold tracking-tight text-black">699<span class="text-2xl font-extrabold tracking-tight text-black">€ *</span></span> 
                  
              </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
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
                          <span class="text-base font-normal leading-tight">Intégration de vos contenus (images et textes) 1 page **</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Interface administrateur</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Sécurisation avec le certificat SSL</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formulaire de contact</span>
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
                <div className='flex justify-center mb-8'>
                  <HashLink smooth='true' to="/#contact" className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif">Demander un devis</HashLink>
                </div>
              
            </div>

            {/* 2 */}
            <div data-aos="zoom-in" class="lg:w-1/4 card-offer max-w-sm p-4 bg-white border shadow-md flex flex-col justify-between hover:shadow-xl duration-300">
              <div>
                <h5 class="text-2xl font-extrabold uppercase text-center">Site vitrine <br/> sur mesure</h5>
                <div className='flex justify-center'>
                  <h5 class="mb-4 text-sm font-bold text-center rounded-full text-white px-2 mt-2 bg-[#7B52FB]">Site Multipage</h5>
                </div>
                <h5 class="mb-8 lg:text-sm font-medium text-center h-14 text-offers">Un développement sur mesure, c’est l’assurance d’un site qui correspond exactement à vos attentes et d'une bonne expérience utilisateur.</h5>
                <div class="flex flex-col items-center dark:text-white justify-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2">À partir de</span>
                  <span class="text-5xl flex font-extrabold tracking-tight text-black">999<span class="text-2xl font-extrabold tracking-tight text-black">€ *</span></span> 
                </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
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
                          <span class="text-base font-normal leading-tight">Intégration de vos contenus (images et textes) jusqu'à 4 pages **</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Interface administrateur</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Sécurisation avec le certificat SSL</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Formulaire de contact + Map</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Intégration d'un outil de réservation</span>
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
                <div className='flex justify-center mb-8'>
                  <HashLink smooth='true' to="/#contact" className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif">Demander un devis</HashLink>
                </div>
              
            </div>

            {/* 3 */}
            <div data-aos="zoom-in" class="card-offer lg:w-1/4 max-w-sm p-4 bg-white border shadow-md flex flex-col justify-between hover:shadow-xl duration-300">
              <div>
                <h5 class="text-2xl font-extrabold uppercase text-center">Site <br/> e-commerce</h5>
                <div className='flex justify-center'>
                  <h5 class="mb-4 text-sm font-bold text-center rounded-full text-white px-2 mt-2 bg-[#7B52FB]">Boutique en ligne</h5>
                </div>
                <h5 class="mb-8 lg:text-sm font-medium text-center h-14 text-offers">Vous souhaitez vendre vos produits en ligne ? Optez pour une solution qui propose vos produits à des clients 24h/24 et 7j/7.</h5>
                <div class="flex flex-col items-center dark:text-white justify-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2 ">À partir de</span>
                  <span class="text-5xl flex font-extrabold tracking-tight text-black">1 999<span class="text-2xl font-extrabold tracking-tight text-black">€ *</span></span> 
                </div>
              </div>
              <div className='flex h-full'>
                <div>
                  <ul role="list" class="space-y-5 my-8">
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Site responsive : adapté à tout écran</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Intégration de vos contenus (images, textes, produits) jusqu'à 5 pages**</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Interface administrateur</span>
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
                          <span class="text-base font-normal leading-tight">Formulaire de contact + Map</span>
                      </li>
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Sécurisation avec le certificat SSL</span>
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
                          <span class="text-base font-normal leading-tight">Statistiques de ventes réalisées</span>
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
                <div className='flex justify-center mb-8'>
                  <HashLink smooth='true' to="/#contact" className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif">Demander un devis</HashLink>
                </div>
              
            </div>

            {/* 4 */}
            <div data-aos="zoom-in" class="card-offer lg:w-1/4 max-w-sm p-4 bg-white border shadow-md flex flex-col justify-between hover:shadow-xl duration-300">
              <div>
                <h5 class="text-2xl font-bold uppercase text-center">Maintenance</h5>
                <h5 class="text-2xl font-bold uppercase text-center">site internet</h5>
                <h5 class="mb-8 mt-11 lg:text-sm font-medium text-center h-14 text-offers">Un ensemble d’actions qui vont garder votre site en bonne santé et à jour, sur le plan technique et éditorial.</h5>
              <div class="flex dark:text-white justify-center flex-col items-center">
                  <span class="text-base font-medium text-gray-500 text-center uppercase mb-2 ">Forfait de 10 heures</span>
                  <span class="text-5xl flex font-extrabold tracking-tight text-black">500<span class="text-2xl font-extrabold tracking-tight text-black">€ *</span></span>
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
                      <li class="flex space-x-3">
                          <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-[#FF6501] dark:text-[#FF6501]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-normal leading-tight">Sauvegarde mensuelle des données</span>
                      </li>
                  </ul>
                </div>
              </div>
                <div className='flex justify-center mb-8'>
                  <HashLink smooth='true' to="/#contact" className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif">Demander un devis</HashLink>
                </div>
              
            </div>
          </div>

          <div className='my-4'>
            <p className='text-sm condition'>
              * Prix à titre indicatif : ils peuvent varier en fonction de la demande et le choix du client. L'ensemble des tarifs indiqués sont en Hors-taxe.
            </p>
            <p className='text-sm condition'>
              ** Les textes et images devront être fournis au préalable par vos soins.
            </p>
          </div>

          <div className='flex items-center justify-around bg-[#1B1559] py-6 lg:my-16 offre-special'>
            <div>
              <h1 className='lg:mx-12 text-white text-xl offre-special-text'>
                Vous avez une demande spécifique ? <br/> N'hésitez pas à me contacter !
              </h1>
            </div>
            <div className='flex justify-center mx-12'>
              <HashLink smooth='true' to="/#contact" className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif">Me contacter</HashLink>
            </div>
            
          </div>
        </div>

        <Contact />
    </div>
  )
}

export default Offers