import React, { useState, useEffect } from 'react'
import '../OurServicesComponent1/OurServiceComponent1.css'
import { ReactComponent as DigitalMarketingMobileComponent } from '../../../assests/our-services/mobile-screen/digital-marketing.svg'
import { ReactComponent as DigitalMarketingPcComponent } from '../../../assests/our-services/laptop-screen/digital-marketing.svg'



function OurServiceComponent5() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

    return (
        <div className='OurServiceComponent1-container'>

            <div className='OurServiceComponent1-img'>
                 {isMobile ? <DigitalMarketingMobileComponent /> : <DigitalMarketingPcComponent />}
            </div>

            <div className='OurServiceComponent1-text'>
                <h3>Digital Marketing</h3>
                <p>Our Digital Marketing services are designed to enhance your online presence and drive business growth. By leveraging data-driven strategies and innovative techniques, we ensure your brand reaches and engages the right audience effectively.</p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>Search Engine Optimization</button>
                    <button className='service-btn'>Social Media Marketing</button>
                    
                    
                 
                    <button className='service-btn'>Email Marketing</button>
                    <button className='service-btn'> PPC (Pay-Per-Click) Advertising</button>
                   
                   
                     
                    <button className='service-btn'>Content Marketing</button>
                    
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent5
