import React, { useEffect } from 'react'
import blog from "../data/blog.js"
import trait_marquage from '../assets/trait_marquage.svg'
import Aos from 'aos'
import { Helmet } from 'react-helmet'

const Blog = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []) 
  return (
    <section className='blog lg:mt-20 text-2xl justify-start items-center flex flex-col font-serif2 lg:w-5/6 mx-auto content-width mb-12' id='blog'>
      <Helmet>
        <title>AlefaWeb | Blog - dernières actualités et articles</title>
        <link rel="canonical" href="https://www.alefaweb.com/blog" />
        <meta name="description" content="Découvrez les dernières actualités et articles sur le monde du développement web, le design et le marketing digital." />
        <meta property='og:title' content='Blog | Dernières actualités et articles' />
        <meta property='og:description' content='Découvrez les dernières actualités et articles sur le monde du développement web, le design et le marketing digital.' />
        <meta property='og:url' content='https://www.alefaweb.com/blog' />
      </Helmet>
      
      <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold font-serif text-[#7B52FB] pt-8 uppercase'>
            Le blog 
          </h1>
          <img src={trait_marquage} alt="trait marquage" className='w-2/3'/>
        </div>
        <p className='lg:my-12 text-service'>Découvrez les articles et actualités sur le monde du <span className='font-bold'>développement web, le design et le marketing digital.</span></p>
    
      {/* <div>
        <img src={blob4} alt="blob-animation" className='blob-animation4' />
      </div> */}
      <div className='flex items-center'>
        <div className='flex gap-6 lg:pb-6 lg:mb-16 lg:w-1/2'>
          { blog.map((post) => (
              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='font-serif2 flex  justify-between bg-white border shadow-md'>
                <div className='flex items-start'>
                  <div className="overflow-hidden ease-in-out hover:scale-105 duration-300">
                    <img className="image-realisation w-full" src={post.image} alt={post.title} />
                      <div className="px-6 py-4 bg-white">
                          <div className="font-extrabold lg:text-xl mb-2 name-service">{post.title}</div>
                          <p className="lg:text-base description-service">
                            {post.description}
                          </p>
                          <button>
                            <a href={post.link}
                            className='text-[#7B52FB] font-bold text-base mt-4'>
                              Lire l'article
                            </a>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog