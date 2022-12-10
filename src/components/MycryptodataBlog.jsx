import React from 'react'
import { Link } from 'react-router-dom'
import mycryptodata from '../assets/realisations/mycryptodata.svg'
import './MycryptodataBlog.scss'

const MycryptodataBlog = () => {
  return (
    <div className='mt-16 font-serif'>
        <header className='header-mycryptodata bg-[#201E50] flex items-start justify-center uppercase text-white text-5xl font-bold pt-24'> Mycryptodata</header>
      <div className='image-mycryptodata'>
        <img src={mycryptodata} alt="projet mycryptodata" />
      </div>

      <div className='font-serif2 text-mycryptodata text-xl text-center pt-80 w-5/6 mx-auto flex'>
        <div className='w-2/4'>
          <div className='text-left'>
            <h2 className='text-2xl font-bold'>Catégorie :</h2>
            <h3>Application web</h3>
          </div>
          <div className='text-left my-8'>
            <h2 className='text-2xl font-bold'>Année de création :</h2>
            <h3>2022</h3>
          </div>
          <div className='text-left'>
            <h2 className='text-2xl font-bold'>Outils utilisés :</h2>
            <div className='flex flex-wrap justify-start'>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white">Figma</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white mx-2">Javascript</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white ">React</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white mx-2">TailwindCSS</h3>
              <h3 className="mb-4 text-base text-center rounded-full mt-2 px-4 bg-white ">API</h3>
            </div>
          </div>
          <div className='flex justify-start'>
            <a href="https://mycryptodata.netlify.app/" target="_blank" className='text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase my-8'>Visiter le site</a>
          </div>
        </div>

        <div className='text-left'>
          <h1 className='text-2xl font-bold'>Description :</h1>
          <p>Développement d'un site web qui permet aux utilisateurs de suivre en temps réel les variations des cours des différentes cryptomonnaies. L'utilisateur peut également consulter les dernières actualités sur le monde de la cryptomonnaie.</p>
        </div>
      </div>
    </div>
  )
}

export default MycryptodataBlog