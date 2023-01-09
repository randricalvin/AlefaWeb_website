import React from 'react'
import avantages_site from '../../assets/blog/7_avantages_avoir_un_site_web.webp';
import ScrollBar from '../ScrollBar';

const Blog1 = () => {
 
  return (
    <section className='realisations my-20 justify-start items-center flex flex-col font-serif2 lg:w-5/6 mx-auto content-width mb-20'>
      <div className='flex flex-col justify-start w-full lg:my-10'>
        <h1 className='title-mention lg:text-4xl font-extrabold'>Les 7 avantages pour votre stucture d’avoir un site internet</h1>
        <p className=''>Publié le 12/01/2023</p>
      </div>
      <img src={avantages_site} alt="Les 7 avantages pour votre stucture d’avoir un site internet" className='lg:w-4/6'/>
      <p className='text-xl mt-10 subtitle-mention'>Un site internet est un outil puissant qui peut vous aider à développer votre entreprise. Il peut vous aider à atteindre vos objectifs commerciaux et à vous démarquer de vos concurrents. Voici 7 avantages d'avoir un site internet pour votre entreprise :</p>

      <div>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>1. Augmenter la visibilité de votre entreprise :</h2>
        <p>
          Un site internet vous permet d'être visible par un public plus large, y compris en dehors de votre zone géographique. Cela peut être particulièrement utile pour les entreprises locales qui souhaitent étendre leur portée.
        </p>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>
          2. Gagner en crédibilité :
        </h2>
        <p>
          Avoir un site internet professionnel et bien conçu peut aider à renforcer la crédibilité de votre entreprise aux yeux de vos clients potentiels. Cela peut les inciter à faire confiance à votre entreprise et à acheter vos produits ou services.
        </p>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>
          3. Communiquer efficacement avec vos clients :
        </h2>
        <p>
          Un site internet vous permet de présenter votre entreprise et vos produits de manière claire et concise, ce qui peut être particulièrement utile si vous avez beaucoup de produits ou de services à offrir. De plus, grâce à un formulaire de contact ou une page FAQ, vos clients peuvent facilement poser des questions ou obtenir des informations.
        </p>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>
          4. Améliorer votre relation avec vos clients :
        </h2>
        <p>
          En mettant à disposition de vos clients un contenu utile et intéressant, vous pouvez renforcer leur fidelité envers votre entreprise et améliorer votre relation. Vous pouvez également utiliser votre site internet pour offrir du support en ligne ou pour tenir vos clients informés de vos dernières nouveautés.
        </p>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>
          5. Générer du trafic qualifié :
        </h2>
        <p>
          En utilisant des outils de référencement (SEO) et en publiant du contenu de qualité sur votre site internet, vous pouvez attirer des visiteurs qui sont intéressés par ce que vous proposez. Cela peut vous aider à générer des leads et à convertir ces visiteurs en clients.
        </p>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>
          6. Faire des économies :
        </h2>
        <p>
          Avoir un site internet peut vous permettre de réaliser des économies sur les coûts de communication et de marketing. Par exemple, vous pouvez utiliser votre site pour communiquer avec vos clients plutôt que d'imprimer et d'envoyer des newsletters par courrier. 
        </p>
        <h2 className='lg:text-2xl mt-5 subtitle-mention font-extrabold'>
          7. Restez ouvert 24/7 :
        </h2>
        <p>
          Un site internet est accessible à tout moment, ce qui est particulièrement utile si vous avez des clients internationaux ou si vous souhaitez toucher un public qui ne peut pas vous rendre visite en personne. Cela vous permet également de continuer à vendre vos produits ou services même lorsque votre entreprise est fermée.
        </p><br/>
        <p>
          Vous avez un projet de création de site internet pour votre entreprise ? Vous pouvez me contacter dès maintenant pour en discuter !
        </p>
      </div>

    </section>
  )
}

export default Blog1