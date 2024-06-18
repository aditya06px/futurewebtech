import React, { useState, useEffect } from 'react'
import '../OurServicesComponent1/OurServiceComponent1.css'
import { ReactComponent as MobileAppMobileComponent } from '../../../assests/our-services/mobile-screen/mobile-app-development.svg'
import { ReactComponent as MobileAppPcComponent } from '../../../assests/our-services/laptop-screen/mobile-app-development.svg'



function OurServiceComponent4() {

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
                 {isMobile ? <MobileAppMobileComponent /> : <MobileAppPcComponent />}
            </div>

            <div className='OurServiceComponent1-text reverse-container-text'>
                <h3>Mobile App Developement</h3>
                <p>Our Mobile App Development services are dedicated to turning your innovative ideas into high-performance mobile applications. We focus on creating user-friendly and engaging apps that provide seamless experiences on both iOS and Android platforms.</p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>Android App Developement</button>
                    <button className='service-btn'>iOS App Developement</button>
                    
                    
                 
                    <button className='service-btn'>React Native App Developement</button>
                    <button className='service-btn'> Flutter App Developement</button>
                   
                   
                     
                    <button className='service-btn'>App Maintenance & Support</button>
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent4
