import React from 'react'
import outil_react_site_internet from '../../assets/caroussel/outil_react_site_internet.svg'
import outil_node_site_internet from '../../assets/caroussel/outil_node_site_internet.svg'
import outil_mysql_site_internet from '../../assets/caroussel/outil_mysql_site_internet.svg'
import outil_html_site_internet from '../../assets/caroussel/outil_html_site_internet.svg'
import outil_css_site_internet from '../../assets/caroussel/outil_css_site_internet.svg'
import outil_wordpress_site_internet from '../../assets/caroussel/outil_wordpress_site_internet.svg'
import outil_woocommerce_site_internet from '../../assets/caroussel/outil_woocommerce_site_internet.svg'
import outil_figma_creation_graphique from '../../assets/caroussel/outil_figma_creation_graphique.svg'
import outil_adobexd_creation_graphique from '../../assets/caroussel/outil_adobexd_creation_graphique.svg'
import outil_photoshop_creation_graphique from '../../assets/caroussel/outil_photoshop_creation_graphique.svg'
import outil_indesign_creation_graphique from '../../assets/caroussel/outil_indesign_creation_graphique.svg'
import outil_illustrator_creation_graphique from '../../assets/caroussel/outil_illustrator_creation_graphique.svg'
import outil_elementor_site_internet from '../../assets/caroussel/outil_elementor_site_internet.svg'
import outil_tailwind_site_internet from '../../assets/caroussel/outil_tailwind_site_internet.svg'
import outil_shopify_site_internet from '../../assets/caroussel/outil_shopify_site_internet.svg'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CarouselTechs = () => {

    const responsive = {
        0: { items: 3 },
        768: { items: 4 },
        1024: { items: 6 },
    };
        
  return (
    <div class="slider w-5/6 mx-auto hover:cursor-grab">
        <AliceCarousel
            autoPlay
            autoPlayInterval="2000"
            animationDuration={1500}
            fadeOutAnimation={true}
            infinite
            responsive={responsive}
            mouseTracking
            disableButtonsControls
            disableDotsControls
            items={[
                <div className='slide'>
                    <img src={outil_wordpress_site_internet} alt="outil_wordpress_site_internet" style={{width : '5rem', height : '5rem'}} className="mb-10"/>
                </div>,
                <div className='slide'>
                    <img src={outil_elementor_site_internet} alt="outil_elementor_site_internet" style={{width : '5rem', height : '5rem'}} className="mb-10"/>
                </div>,
                <div className='slide'>
                    <img src={outil_woocommerce_site_internet} alt="outil_woocommerce_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_shopify_site_internet} alt="outil_shopify_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_html_site_internet} alt="outil_html_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_css_site_internet} alt="outil_css_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_tailwind_site_internet} alt="outil_tailwind_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_react_site_internet} alt="outil_react_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_node_site_internet} alt="outil_node_site_internet" style={{width : '7rem', height : '7rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_mysql_site_internet} alt="outil_mysql_site_internet" style={{width : '6rem', height : '6rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_figma_creation_graphique} alt="outil_figma_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_adobexd_creation_graphique} alt="outil_adobexd_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_indesign_creation_graphique} alt="outil_indesign_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_illustrator_creation_graphique} alt="outil_illustrator_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
                </div>,
                <div className='slide'>
                    <img src={outil_photoshop_creation_graphique} alt="outil_photoshop_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
                </div>
            ]}
        />
    </div>
  )
}

export default CarouselTechs