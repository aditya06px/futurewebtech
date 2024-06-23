import React, { useRef } from 'react';
import '../OurServicesComponent1/OurServiceComponent1.css'
import MobileAppImg from '../../../assests/our-services/mobile-development.jpg'


function OurServiceComponent4() {
    
    const mobileAppDevRef = useRef(null);
    return (
        <div className='OurServiceComponent1-container reverse-container'>

            <div className='OurServiceComponent1-img'>
                 <img src={MobileAppImg} />
            </div>

            <div className='OurServiceComponent1-text reverse-container-text' id="mobile-app-development" ref={mobileAppDevRef}>
                <h3>Mobile App Developement</h3>
                <p>Our Mobile App Development services are dedicated to turning your innovative ideas into high-performance mobile applications. We focus on creating user-friendly and engaging apps that provide seamless experiences on both iOS and Android platforms.</p>
               
                <div className='OurServiceComponent1-button-container'>
                   
                   
                   
                    <button className='service-btn'>Android App Developement</button>
                    <button className='service-btn'>iOS App Developement</button>
                    
                    
                 
                    <button className='service-btn'>React Native App Developement</button>
                    <button className='service-btn'> Flutter App Developement</button>
                   
                   
                     
                    <button className='service-btn'>App Maintenance & Support</button>
                    
                </div>

            </div>
        </div>
    )
}

export default OurServiceComponent4
