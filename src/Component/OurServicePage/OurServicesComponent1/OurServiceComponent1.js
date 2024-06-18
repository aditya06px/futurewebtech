import React, { useState, useEffect } from 'react'
import './OurServiceComponent1.css'
import { ReactComponent as UiUxDesignMobileComponent } from '../../../assests/our-services/mobile-screen/ui-ux-design.svg'
import { ReactComponent as UiUxDesignPcComponent } from '../../../assests/our-services/laptop-screen/ui-ux-design.svg'


function OurServiceComponent1() {

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
                 {isMobile ? <UiUxDesignMobileComponent /> : <UiUxDesignPcComponent />}
            </div>

            <div className='OurServiceComponent1-text'>
                <h3>UI/UX Design</h3>
                <p>Our UI/UX Design services are dedicated to crafting digital
                    products that are both visually stunning and easy to use. By combining creative design with user-centered principles, we ensure that your digital presence not only looks great but also provides an exceptional user experience. </p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>User Research</button>
                    <button className='service-btn'>User Personas</button>
                    
                    
                 
                    <button className='service-btn'>Usability Testing</button>
                    <button className='service-btn'> Wireframing</button>
                   
                   
                     
                    <button className='service-btn'>Prototyping</button>
                    <button className='service-btn'>Visual Design</button>
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent1
