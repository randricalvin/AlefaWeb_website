import React from 'react'
import mycryptodata from '../assets/realisations/mycryptodata.svg'
import './MycryptodataBlog.scss'
import { Helmet } from 'react-helmet'

const MycryptodataBlog = () => {
  return (
    <section className='font-serif h-full mb-20' id='mycryptodata'>
      <Helmet>
        <title>AlefaWeb | Mes réalisations - MyCryptoData (Outil de suivi des prix des cryptomonnaies)</title>
        <link rel="canonical" href="https://www.alefaweb.com/realisation-de-sites-internet-orleans/mycryptodata" />
        <meta name="description" content="Outil de suivi en temps réel les variations des cours des différentes cryptomonnaies. L'utilisateur peut également consulter les dernières actualités sur le monde de la cryptomonnaie." />
        <meta property='og:title' content='Mes réalisations | MyCryptoData' />
        <meta property='og:description' content="Outil de suivi en temps réel les variations des cours des différentes cryptomonnaies. L'utilisateur peut également consulter les dernières actualités sur le monde de la cryptomonnaie." />
        <meta property='og:url' content='https://www.alefaweb.com/realisation-de-sites-internet-orleans/mycryptodata' />
        <meta property='og:image' content={mycryptodata} />
      </Helmet>

        <header className='header-mycryptodata bg-[#201E50] flex items-start justify-center uppercase text-white lg:text-5xl font-bold lg:py-36 name-blog'> Mycryptodata</header>
      <div className='image-mycryptodata'>
        <img src={mycryptodata} alt="projet mycryptodata" />
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
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-[#201E50] text-white">Figma</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-[#201E50] text-white mx-2">Javascript</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-[#201E50] text-white ">React</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-[#201E50] text-white mr-2">TailwindCSS</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-[#201E50] text-white ">API</h3>
            </div>
          </div>
        </div>

        <div className='text-left'>
          <h1 className='lg:text-2xl font-bold'>Description :</h1>
          <p className='leading-8'>Développement d'un site web qui permet aux utilisateurs de suivre en temps réel les variations des cours des différentes cryptomonnaies. L'utilisateur peut également consulter les dernières actualités sur le monde de la cryptomonnaie.</p>
        </div>
          <div className='flex lg:justify-start button-presentation'>
            <a href="https://mycryptodata.netlify.app/" target="_blank" className='text-white lg:w-1/6 button-presentation1 bg-[#fd7d28] hover:bg-[#FF6501] transition duration-300 ease-in-out hover:scale-110 font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase font-serif my-8'>Visiter le site</a>
          </div>
      </div>
    </section>
  )
}

export default MycryptodataBlog