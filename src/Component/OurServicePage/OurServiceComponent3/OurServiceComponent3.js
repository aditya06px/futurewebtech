import React, { useState, useEffect } from 'react'
import '../OurServicesComponent1/OurServiceComponent1.css'
import { ReactComponent as WebDevMobileComponent } from '../../../assests/our-services/mobile-screen/web-development.svg'
import { ReactComponent as WebDevPcComponent } from '../../../assests/our-services/laptop-screen/web-development.svg'



function OurServiceComponent3() {

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
                 {isMobile ? <WebDevMobileComponent /> : <WebDevPcComponent />}
            </div>

            <div className='OurServiceComponent1-text'>
                <h3>Web Developement</h3>
                <p>Our Web Development services focus on creating responsive, secure, and scalable websites that provide exceptional user experiences. We leverage the latest technologies and best practices to ensure your digital presence is powerful and effective.</p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>ReactJS Developement</button>
                    <button className='service-btn'>AngularJS Developement</button>
                    
                    
                 
                    <button className='service-btn'>Laravel Developement</button>
                    <button className='service-btn'>E-commerce Solutions</button>
                   
                   
                     
                    <button className='service-btn'>Java Developement</button>
                    <button className='service-btn'>NodeJs Developement</button>
                    
                </div>


                <div className='align-to-center'>
                <button className='main-button'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServiceComponent3
