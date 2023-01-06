import React from 'react'
import { Link } from 'react-router-dom'
import chatchatgo from '../assets/realisations/chatchatgo.svg'
import './MycryptodataBlog.scss'

const MycryptodataBlog = () => {
  return (
    <div className='mt-16 font-serif'>
        <header className='header-mycryptodata bg-[#0369a1] flex items-start justify-center uppercase text-white lg:text-5xl font-bold pt-24 name-blog'> Chatchatgo</header>
      <div className='image-mycryptodata'>
        <img src={chatchatgo} alt="projet chatchatgo" />
      </div>

      <div className='font-serif2 text-mycryptodata text-xl text-center lg:pt-80 lg:w-5/6 mx-auto flex flex-col content-blog'>
        <div className='lg:w-2/4'>
          <div className='text-left'>
            <h2 className='lg:text-2xl font-bold'>Catégorie :</h2>
            <h3>Application web</h3>
          </div>
          <div className='text-left my-8'>
            <h2 className='lg:text-2xl font-bold'>Année de création :</h2>
            <h3>2022</h3>
          </div>
          <div className='text-left'>
            <h2 className='lg:text-2xl font-bold'>Outils utilisés :</h2>
            <div className='flex flex-wrap justify-start'>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white">Figma</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white lg:mx-2">Javascript</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white ">React</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white lg:mx-2">TailwindCSS</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white ">Firebase</h3>
            </div>
          </div>
        </div>

        <div className='text-left'>
          <h1 className='lg:text-2xl font-bold'>Description :</h1>
          <p className='leading-8'>Développement d'une application web de messagerie instantanée. Cette application permet aux utilisateurs de discuter en temps réel avec d'autres utilisateurs.</p>
        </div>
          <div className='flex lg:justify-start button-presentation'>
            <a href="https://www.chatchatgo.fr/login" target="_blank" className='text-white lg:w-1/6 button-presentation1 bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif2 my-8'>Visiter le site</a>
          </div>
      </div>
    </div>
  )
}

export default MycryptodataBlog