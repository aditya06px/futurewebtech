import React, { useState, useEffect } from 'react'
import '../OurServicesComponent1/OurServiceComponent1.css'
import { ReactComponent as GraphicDesignMobileComponent } from '../../../assests/our-services/mobile-screen/graphic-design.svg'
import { ReactComponent as GraphicDesignPcComponent } from '../../../assests/our-services/laptop-screen/graphic-design.svg'



function OurServiceComponent2() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

    return (
        <div className='OurServiceComponent1-container reverse-container'>

            <div className='OurServiceComponent1-img'>
                 {isMobile ? <GraphicDesignMobileComponent /> : <GraphicDesignPcComponent />}
            </div>

            <div className='OurServiceComponent1-text reverse-container-text'>
                <h3>Graphic Design</h3>
                <p>Our Graphic Design services are all about bringing your brand’s story to life through visually compelling and effective designs. We combine creativity with strategic thinking to deliver designs that not only look great but also communicate your message clearly and resonate with your target audience. </p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>Packaging Design</button>
                    <button className='service-btn'>Infographic Design</button>
                    
                    
                 
                    <button className='service-btn'>Illustration   </button>
                    <button className='service-btn'>Brand Identity Design</button>
                   
                   
                     
                    <button className='service-btn'>Print Design</button>
                    <button className='service-btn'>Digital Design</button>
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent2
