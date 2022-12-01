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

import "../Techs.scss"

import InfiniteCarousel from 'react-leaf-carousel';

const CarouselTechs = () => {
  return (
    <div className='w-2/3 mx-auto my-auto mt-20 carousel'>
        <InfiniteCarousel
            // breakpoints={[
            // {
            //     breakpoint: 500,
            //     settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2,
            //     },
            // },
            // {
            //     breakpoint: 768,
            //     settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     },
            // },
            // ]}
            dots={true}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.3}
            slidesToScroll={5}
            slidesToShow={5}
            scrollOnDevice={true}
        >
            <div>
                <img src={outil_wordpress_site_internet} alt="outil_wordpress_site_internet" style={{width : '5rem', height : '5rem'}} className="mb-10"/>
            </div>
            <div>
                <img src={outil_woocommerce_site_internet} alt="outil_woocommerce_site_internet" style={{width : '6rem', height : '6rem'}}/>
            </div>
            <div >
                <img src={outil_react_site_internet} alt="outil_react_site_internet" style={{width : '6rem', height : '6rem'}}/>
            </div>
            <div>
                <img src={outil_html_site_internet} alt="outil_html_site_internet" style={{width : '6rem', height : '6rem'}}/>
            </div>
            <div>
                <img src={outil_css_site_internet} alt="outil_css_site_internet" style={{width : '6rem', height : '6rem'}}/>
            </div>
            <div>
                <img src={outil_node_site_internet} alt="outil_node_site_internet" style={{width : '6rem', height : '6rem'}}/>
            </div>
            <div>
                <img src={outil_mysql_site_internet} alt="outil_mysql_site_internet" style={{width : '6rem', height : '6rem'}}/>
            </div>
            <div>
                <img src={outil_figma_creation_graphique} alt="outil_figma_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
            </div>
            <div>
                <img src={outil_adobexd_creation_graphique} alt="outil_adobexd_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
            </div>
            <div>
                <img src={outil_indesign_creation_graphique} alt="outil_indesign_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
            </div>
            <div>
                <img src={outil_illustrator_creation_graphique} alt="outil_illustrator_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
            </div>
            <div>
                <img src={outil_photoshop_creation_graphique} alt="outil_photoshop_creation_graphique" style={{width : '5rem', height : '5rem'}}/>
            </div>
        </InfiniteCarousel>
    </div>
  )
}

export default CarouselTechs